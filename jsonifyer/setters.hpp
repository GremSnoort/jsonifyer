#pragma once


// std
#include <string>
#include <functional>

// conan
#include <boost/json.hpp>
#include <fmt/core.h>
#include <fmt/format.h>

#include <jsonifyer/type_traits.hpp>

namespace std {

    template <typename T> struct tuple_name;

}

namespace jsonifyer::serializer {

    using inserter_t = std::function<void(::boost::json::value&&, const std::string&)>;

    template<std::size_t I, class T,
             std::enable_if_t<I < 1024, bool> = true>
    inline auto add(const T& input, const std::string& name, inserter_t inserter) -> bool {
             /// ARITHMETIC ====================================================================>>>
        if constexpr (I == 0 && std::is_arithmetic_v<T> && (std::is_integral_v<T> || std::is_floating_point_v<T>)) {
             inserter(::boost::json::value(input), name);
             return true;
        } else
             /// STD::STRING ===================================================================>>>
        if constexpr (I == 0 && std::is_same_v<T, std::string>) {
             inserter(::boost::json::value(::boost::json::string_view(input.data(), input.size())), name);
             return true;
        } else
             /// ARRAY TYPES ===================================================================>>>
        if constexpr (I == 0 && (!std::is_same_v<T, std::string> && jsonifyer::type_traits::has_push_back_method_v<T>) || jsonifyer::type_traits::is_set<T>::value) {
            ::boost::json::array arr;
            for (const auto& v : input) {
                add<0>(v, "", [&arr](::boost::json::value&& jv, const std::string&) { arr.emplace_back(jv); });
            }
            inserter(::boost::json::value(arr), name);
            return true;

        } else
             /// STD::MAP ======================================================================>>>
        if constexpr (I == 0 && jsonifyer::type_traits::is_map_v<T>) {
            ::boost::json::object obj;
            for (const auto& [k, v] : input) {
                std::string key = "";
                if constexpr (std::is_base_of_v<typename jsonifyer::type_traits::key_type<T>::type, std::string>) {
                    key = k;
                } else if constexpr (std::is_integral_v<typename jsonifyer::type_traits::key_type<T>::type>) {
                    key = std::to_string(k);
                }
                add<0>(v, key, [&obj](::boost::json::value&& jv, const std::string& name) { obj.emplace(name, jv); });
             }
             inserter(::boost::json::value(obj), name);
             return true;
        } else
             /// CUSTOM STRUCTS ================================================================>>>
        if constexpr (I == 0 && jsonifyer::type_traits::is_custom_v<T>) {
            ::boost::json::object output;
            if constexpr (I < std::tuple_size_v<T>) {

                auto local_inserter = [&output](::boost::json::value&& jv, const std::string& name) { output.emplace(name, jv); };

                add<0>(std::get<I>(input), std::tuple_element<I, T>::name, local_inserter);
                add<I+1>(input, "", local_inserter); /// recoursion
            }
            inserter(::boost::json::value(output), name);
            return true;

        } else
                              /// INTERNAL ///
        if constexpr (I > 0 && jsonifyer::type_traits::is_custom_v<T>) {
            if constexpr (I < std::tuple_size_v<T>) {
                add<0>(std::get<I>(input), std::tuple_element<I, T>::name, inserter);
                add<I+1>(input, "", inserter); /// recoursion
            }
            return true; /// return to self
        }
        return false;
    }

}
