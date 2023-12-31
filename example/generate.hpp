#pragma once

#include <tuple>

#include <jsonifyer/type_traits.hpp>
#include <jsonifyer/sbind.hpp>

namespace example {

    template<class T, class I>
    auto push_symbol(T& output, I sym) {
        static constexpr char startcode = 'a';
        static constexpr char endcode = 'z';
        static constexpr char delta = endcode - startcode;
        output.push_back(startcode + static_cast<char>(sym % delta));
    }

    auto buildstr(std::size_t sz) -> std::string {
        std::string v;
        for (std::size_t j = 0; j <= sz; ++j) {
            push_symbol(v, j);
        }
        return v;
    }

    template<std::size_t I, class T, std::enable_if_t<I < 1024, bool> = true>
    inline auto generate(std::size_t len, T& input) -> void {
        if constexpr (I == 0 && std::is_arithmetic_v<T> && (std::is_integral_v<T> || std::is_floating_point_v<T>)) {
            input = static_cast<T>(std::rand() % sizeof(T));
        } else
        if constexpr (I == 0 && std::is_same_v<T, std::string>) {
            input = buildstr(len);
        } else
        if constexpr (I == 0 && !std::is_same_v<T, std::string> && jsonifyer::type_traits::has_push_back_method<T>::value) {
            using value_t = typename T::value_type;
            for (std::size_t i = 0; i < len; ++i) {
                value_t v;
                generate<0>(i, v);
                input.push_back(v);
            }
        } else
        if constexpr (I == 0 && jsonifyer::type_traits::is_set<T>::value) {
            using value_t = typename T::value_type;
            for (std::size_t i = 0; i < len; ++i) {
                value_t v;
                generate<0>(i, v);
                input.emplace(v);
            }
        } else
        if constexpr (I == 0 && jsonifyer::type_traits::is_map<T>::value) {
            using value_t = typename T::mapped_type;
            auto emplace = [len](std::size_t key, T& input) {
                value_t v;
                generate<0>(len, v);
                if constexpr (std::is_integral_v<typename jsonifyer::type_traits::key_type<T>::type>) {
                    input[key] = v;
                } else if constexpr (std::is_base_of_v<typename jsonifyer::type_traits::key_type<T>::type, std::string>) {
                    input[std::to_string(key)] = v;
                }
            };

            for (std::size_t i = 0; i < len; ++i) {
                emplace(i, input);
            }
        } else
        if constexpr (jsonifyer::type_traits::is_custom_v<T> && I < 1024) {
            if constexpr (jsonifyer::type_traits::has_base_type_v<T>) {
                using base_t = jsonifyer::type_traits::base_type_t<T>;
                generate<0, base_t>(len, input);
            }
            if constexpr (I < std::tuple_size_v<T>) {
                generate<0>(len, std::get<I>(input));
                generate<I+1>(len, input);
            }
        }

    }

}
