#pragma once


// std
#include <string>

// conan
#include <boost/json.hpp>
#include <fmt/core.h>
#include <fmt/format.h>

#include <jsonifyer/type_traits.hpp>

namespace std {

    template <typename T> struct tuple_name;

}

namespace jsonifyer::serializer {

    template<std::size_t I, class T,
             std::enable_if_t<
                 I == 0 &&
                 std::is_fundamental_v<T> &&
                 (std::is_integral_v<T> || std::is_floating_point_v<T>), bool> = true>
    inline auto set(const T& value) -> ::boost::json::value {
        return ::boost::json::value(value);
    }

    template<std::size_t I, class T,
             std::enable_if_t<
                 I == 0 &&
                 std::is_same_v<T, std::string>, bool> = true>
    inline auto set(const T& value) -> ::boost::json::value {
        return ::boost::json::value(::boost::json::string_view(value.data(), value.size()));
    }

    template<class T>
    inline auto set(const T& value) -> ::boost::json::value;

    template<std::size_t I, class T,
             std::enable_if_t<
                 I == 0 &&
                 jsonifyer::type_traits::has_push_back_method<T>::value
                 || jsonifyer::type_traits::is_set<T>::value, bool> = true>
    inline auto set(const T& value) -> ::boost::json::value {
        ::boost::json::array arr;
        for (const auto& v : value) {
            arr.emplace_back(set<0>(v));
        }
        return ::boost::json::value(arr);
    }

    template<std::size_t I, class T,
             std::enable_if_t<
                 I == 0 &&
                 jsonifyer::type_traits::is_map<T>::value, bool> = true>
    inline auto set(const T& value) -> ::boost::json::value {
        ::boost::json::object obj;
        for (const auto& [k, v] : value) {
            std::string key = "";
            if constexpr (std::is_base_of_v<typename jsonifyer::type_traits::key_type<T>::type, std::string>) {
                key = k;
            } else if constexpr (std::is_integral_v<typename jsonifyer::type_traits::key_type<T>::type>) {
                key = std::to_string(k);
            }
            obj.emplace(key, set<0>(v));
        }
        return ::boost::json::value(obj);
    }

    template<std::size_t I, class T>
    inline auto __fill(const T& input, ::boost::json::object& output) -> void {
        if constexpr (I < std::tuple_size_v<T>) {
            const std::string& name = std::tuple_element<I, T>::name;
            output.emplace(name, std::get<I>(input));
            __fill<I+1>(input, output);
        }
    }

    template<std::size_t I, class T,
             std::enable_if_t<
                 I == 0 &&
                 jsonifyer::type_traits::is_custom_v<T>, bool> = true>
    inline auto set(const T& input) -> ::boost::json::value {
        ::boost::json::object output;
        __fill<0>(input, output);
        return ::boost::json::value(output);
    }
}
