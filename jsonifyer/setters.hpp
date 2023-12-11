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

    /**
     * @brief set
     *
     * @param input
     * @param name
     * @param inserter
     * @param new_unit
     **/
    template<std::size_t I, class T,
             std::enable_if_t<I < 1024, bool> = true>
    inline auto add(const T& input, const std::string& name, inserter_t inserter, bool new_unit = true/*serialize in a new unit by default (except of inherited)*/) -> bool {

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

            std::printf("%s :: I = %lu; T = %s; new_unit = %d\n", __func__, I, std::tuple_name<T>::name, new_unit);

            ::boost::json::object output;
            auto local_inserter = [&output](::boost::json::value&& jv, const std::string& name) { output.emplace(name, jv); };

            using base_t = typename std::tuple_name<T>::base_t;
            if constexpr (!std::is_same_v<base_t, void>) {
                /// Has base class
                add<0, base_t>(input, name, new_unit ? local_inserter : inserter, false/*no new unit; place via local_inserter to an `output` unit*/);
            } /// here all base classes are serialized and placed into `output`

            if constexpr (I < std::tuple_size_v<T>) {
                add<0>(std::get<I>(input), std::tuple_element<I, T>::name, new_unit ? local_inserter : inserter, new_unit);
                add<I+1>(input, "", new_unit ? local_inserter : inserter, new_unit); /// recoursion
            }

            if (new_unit) {
                inserter(::boost::json::value(output), name);
            }
            return true;

        } else
                              /// INTERNAL ///
        if constexpr (I > 0 && jsonifyer::type_traits::is_custom_v<T>) {

            if constexpr (I < std::tuple_size_v<T>) {
                              std::printf("%s :: I = %lu; T = %s; elem `%s`; new_unit = %d\n", __func__, I, std::tuple_name<T>::name, std::tuple_element<I, T>::name, new_unit);
                add<0>(std::get<I>(input), std::tuple_element<I, T>::name, inserter, new_unit);
                add<I+1>(input, "", inserter, new_unit); /// recoursion
            }
            return true; /// return to self
        }
        return false;
    }

}
