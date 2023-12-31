#pragma once


// std
#include <string>
#include <functional>

// conan
#include <boost/json.hpp>
#include <fmt/core.h>
#include <fmt/format.h>

#include <jsonifyer/type_traits.hpp>
#include <jsonifyer/sbind.hpp>

namespace std {

    template <typename T> struct tuple_name;

}

namespace jsonifyer::serializer {

    using inserter_t = std::function<void(::boost::json::value&&, const std::string&)>;

    template<std::size_t I, class T, class J,
             std::enable_if_t<I < 1024 && (std::is_same_v<J, ::boost::json::object> || std::is_same_v<J, ::boost::json::array>), bool> = true>
    inline auto add2(const T& input, J& output, const std::string& name, bool new_unit = true/*serialize in a new unit by default (except of inherited)*/) -> bool {

             /// ARITHMETIC OR STRING ==========================================================>>>
        if constexpr (I == 0 && (std::is_same_v<T, std::string> ||
                std::is_arithmetic_v<T> && (std::is_integral_v<T> || std::is_floating_point_v<T>))) {

            if constexpr (std::is_same_v<J, ::boost::json::object>) {
                output[name] = input;
            } else if constexpr (std::is_same_v<J, ::boost::json::array>) {
                output.emplace_back(input);
            }

             return true;

        } else
             /// ARRAY TYPES ===================================================================>>>
        if constexpr (I == 0 && ((!std::is_same_v<T, std::string> && jsonifyer::type_traits::has_push_back_method_v<T>) || jsonifyer::type_traits::is_set<T>::value)) {
            ::boost::json::array arr;
            arr.reserve(input.size());
            for (const auto& v : input) {
                add2<0>(v, arr, "");
            }
            if constexpr (std::is_same_v<J, ::boost::json::object>) {
                output[name] = arr;
            } else if constexpr (std::is_same_v<J, ::boost::json::array>) {
                output.emplace_back(arr);
            }
            return true;

        } else
             /// STD::MAP ======================================================================>>>
        if constexpr (I == 0 && jsonifyer::type_traits::is_map_v<T>) {
            ::boost::json::object obj;
            obj.reserve(input.size());
            for (const auto& [k, v] : input) {
                if constexpr (std::is_base_of_v<typename jsonifyer::type_traits::key_type<T>::type, std::string>) {
                    add2<0>(v, obj, k);
                } else if constexpr (std::is_integral_v<typename jsonifyer::type_traits::key_type<T>::type>) {
                    add2<0>(v, obj, std::to_string(k));
                }
             }
             if constexpr (std::is_same_v<J, ::boost::json::object>) {
                 output[name] = obj;
             } else if constexpr (std::is_same_v<J, ::boost::json::array>) {
                 output.emplace_back(obj);
             }
             return true;

        } else
             /// CUSTOM STRUCTS ================================================================>>>
        if constexpr (I == 0 && jsonifyer::type_traits::is_custom_v<T>) {

            ::boost::json::object output_local;
            if (new_unit) {
                output_local.reserve(std::tuple_size_v<T>);
            }

            if constexpr (jsonifyer::type_traits::has_base_type_v<T>) {
                using base_t = jsonifyer::type_traits::base_type_t<T>;
                if constexpr (!std::is_same_v<base_t, void>) {
                    /// Has base class
                    if (new_unit) {
                        add2<0, base_t>(input, output_local, name, false/*no new unit; place via local_inserter to an `output` unit*/);
                    } else {
                        add2<0, base_t>(input, output, name, false/*no new unit; place via local_inserter to an `output` unit*/);
                    }
                } /// here all base classes are serialized and placed into `output`
            }

            if constexpr (I < std::tuple_size_v<T>) {
                if (new_unit) {
                    add2<0>(std::get<I>(input), output_local, std::tuple_element<I, T>::name, new_unit);
                    add2<I+1>(input, output_local, "", new_unit); /// recoursion
                } else {
                    add2<0>(std::get<I>(input), output, std::tuple_element<I, T>::name, new_unit);
                    add2<I+1>(input,  output, "", new_unit); /// recoursion
                }
            }

            if (new_unit) {
                if constexpr (std::is_same_v<J, ::boost::json::object>) {
                    output[name] = output_local;
                } else if constexpr (std::is_same_v<J, ::boost::json::array>) {
                    output.emplace_back(output_local);
                }
            }
            return true;

        } else
                              /// INTERNAL ///
        if constexpr (I > 0 && jsonifyer::type_traits::is_custom_v<T>) {

            if constexpr (I < std::tuple_size_v<T>) {
                add2<0>(std::get<I>(input), output, std::tuple_element<I, T>::name, new_unit);
                add2<I+1>(input, output, "", new_unit); /// recoursion
            }
            return true; /// return to self
        }
        return false;
    }

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
        if constexpr (I == 0 && ((!std::is_same_v<T, std::string> && jsonifyer::type_traits::has_push_back_method_v<T>) || jsonifyer::type_traits::is_set<T>::value)) {
            ::boost::json::array arr;
            arr.reserve(input.size());
            for (const auto& v : input) {
                add<0>(v, "", [&arr](::boost::json::value&& jv, const std::string&) { arr.emplace_back(jv); });
            }
            inserter(::boost::json::value(arr), name);
            return true;

        } else
             /// STD::MAP ======================================================================>>>
        if constexpr (I == 0 && jsonifyer::type_traits::is_map_v<T>) {
            ::boost::json::object obj;
            obj.reserve(input.size());
            auto local_inserter = [&obj](::boost::json::value&& jv, const std::string& name) { obj.emplace(name, jv); };
            for (const auto& [k, v] : input) {
                if constexpr (std::is_base_of_v<typename jsonifyer::type_traits::key_type<T>::type, std::string>) {
                    add<0>(v, k, local_inserter);
                } else if constexpr (std::is_integral_v<typename jsonifyer::type_traits::key_type<T>::type>) {
                    add<0>(v, std::to_string(k), local_inserter);
                }
             }
             inserter(::boost::json::value(obj), name);
             return true;

        } else
             /// CUSTOM STRUCTS ================================================================>>>
        if constexpr (I == 0 && jsonifyer::type_traits::is_custom_v<T>) {

            ::boost::json::object output;
            if (new_unit) {
                output.reserve(std::tuple_size_v<T>);
            }
            auto local_inserter = [&output](::boost::json::value&& jv, const std::string& name) { output.emplace(name, jv); };

            if constexpr (jsonifyer::type_traits::has_base_type_v<T>) {
                using base_t = jsonifyer::type_traits::base_type_t<T>;
                if constexpr (!std::is_same_v<base_t, void>) {
                    /// Has base class
                    add<0, base_t>(input, name, new_unit ? local_inserter : inserter, false/*no new unit; place via local_inserter to an `output` unit*/);
                } /// here all base classes are serialized and placed into `output`
            }

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
                add<0>(std::get<I>(input), std::tuple_element<I, T>::name, inserter, new_unit);
                add<I+1>(input, "", inserter, new_unit); /// recoursion
            }
            return true; /// return to self
        }
        return false;
    }

}
