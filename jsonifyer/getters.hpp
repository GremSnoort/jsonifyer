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

namespace jsonifyer::parser {

#define __GET_HEADER(Type) \
    inline auto get( \
            const ::boost::json::value& jv, \
            const std::string& object_name, \
            const std::string& field, \
            Type& out_value, \
            std::string& error_msg) noexcept -> bool

    /**
     * @brief get
     * @details For fundamental integral types
     *
     * @param jv            - const json value input data to parse
     * @param object_name   - const lvalue ref on Object's name
     * @param field         - const lvalue ref on currently extracted field name
     * @param out_value     - lvalue otuput ref
     * @param error_msg     - lvalue output message string
     */
    template<std::size_t I, class T,
             std::enable_if_t<
                 I == 0 &&
                 std::is_fundamental_v<T> &&
                 std::is_integral_v<T>, bool> = true>
    __GET_HEADER(T) {
        auto val_ptr = jv.if_int64();
        if (!val_ptr) {
            auto val_uptr = jv.if_uint64();
            if (!val_uptr) {
                auto val_bptr = jv.if_bool();
                if (!val_bptr) {
                    error_msg = fmt::format(
                                "!!! JSON Object '{}' contains invalid field '{}' value: '{}', need int64/uint64 or bool !!!",
                                object_name, field, ::boost::json::serialize(jv));

                } else {
                    out_value = static_cast<T>(*val_bptr);
                    return true;
                }
            } else {
                out_value = static_cast<T>(*val_uptr);
                return true;
            }
        } else {
            out_value = static_cast<T>(*val_ptr);
            return true;
        }
        return false;
    }

    /**
     * @brief get
     * @details For fundamental floating_point types
     *
     * @param jv            - const json value input data to parse
     * @param object_name   - const lvalue ref on Object's name
     * @param field         - const lvalue ref on currently extracted field name
     * @param out_value     - lvalue otuput ref
     * @param error_msg     - lvalue output message string
     */
    template<std::size_t I, class T,
             std::enable_if_t<
                 I == 0 &&
                 std::is_fundamental_v<T> &&
                 std::is_floating_point_v<T>, bool> = true>
    __GET_HEADER(T) {
        auto val_ptr = jv.if_double();
        if (!val_ptr) {
            error_msg = fmt::format(
                        "!!! JSON Object '{}' contains invalid field '{}' value: '{}', need floating_point !!!",
                        object_name, field, ::boost::json::serialize(jv));
            return false;

        }
        out_value = static_cast<T>(*val_ptr);
        return true;
    }

    /**
     * @brief get
     * @details For string type
     *
     * @param jv            - const json value input data to parse
     * @param object_name   - const lvalue ref on Object's name
     * @param field         - const lvalue ref on currently extracted field name
     * @param out_value     - lvalue otuput ref
     * @param error_msg     - lvalue output message string
     */
    template<std::size_t I, class T,
             std::enable_if_t<
                 I == 0 &&
                 std::is_same_v<T, std::string>, bool> = true>
    __GET_HEADER(T) {
        auto val_ptr = jv.if_string();
        if (!val_ptr) {
            error_msg = fmt::format(
                        "!!! JSON Object '{}' contains invalid field '{}' value: '{}', need string !!!",
                        object_name, field, ::boost::json::serialize(jv));
            return false;

        }
        out_value.assign(val_ptr->c_str());
        return true;
    }

#define __CUSTOM_CLASS_HEADER(I, T) \
    template<std::size_t I, typename T, \
             std::enable_if_t< \
                 false == std::is_fundamental_v<T> && \
                 false == std::is_same_v<T, std::string> && \
                 false == jsonifyer::type_traits::is_map<T>::value && \
                 false == (jsonifyer::type_traits::is_set<T>::value || jsonifyer::type_traits::has_push_back_method<T>::value) && \
                 true == std::is_class_v<T> && I < 1024, bool> = true> \
    __GET_HEADER(T)

    template<typename T>
    __GET_HEADER(T);

    /**
     * @brief get
     * @details For map type
     *
     * @param jv            - const json value input data to parse
     * @param object_name   - const lvalue ref on Object's name
     * @param field         - const lvalue ref on currently extracted field name
     * @param out_value     - lvalue otuput ref
     * @param error_msg     - lvalue output message string
     */
    template<std::size_t I, class T,
             std::enable_if_t<
                 I == 0 &&
                 jsonifyer::type_traits::is_map<T>::value &&
                 std::is_base_of_v<typename jsonifyer::type_traits::key_type<T>::type, std::string> ||
                 std::is_integral_v<typename jsonifyer::type_traits::key_type<T>::type>, bool> = true>
    __GET_HEADER(T) {
        auto obj_ptr = jv.if_object();
        if (!obj_ptr) {
            error_msg = fmt::format(
                        "!!! JSON Object '{}' contains invalid field '{}' value: '{}', need object !!!",
                        object_name, field, ::boost::json::serialize(jv));
            return false;

        }
        for (auto& item : *obj_ptr) {
            typename T::value_type p;
            auto str = std::string(item.key_c_str());
            if (jsonifyer::parser::get<0, decltype(p.second)>(item.value(), field, str, p.second, error_msg)) {

                if constexpr (std::is_integral_v<typename jsonifyer::type_traits::key_type<T>::type>) {
                    out_value[std::atoi(str.c_str())] = p.second;
                } else {
                    out_value[str] = p.second;
                }
            } else {
               return false;
            }
        }
        return true;
    }

    /**
     * @brief get
     * @details For set type
     *
     * @param jv            - const json value input data to parse
     * @param object_name   - const lvalue ref on Object's name
     * @param field         - const lvalue ref on currently extracted field name
     * @param out_value     - lvalue otuput ref
     * @param error_msg     - lvalue output message string
     */
    template<std::size_t I, class T,
             std::enable_if_t<
                 I == 0 &&
///                 !std::is_fundamental_v<T> &&
///                 !std::is_same_v<T, std::string> &&
                 jsonifyer::type_traits::is_set<T>::value, bool> = true>
    __GET_HEADER(T) {
        auto arr_ptr = jv.if_array();
        if (!arr_ptr) {
            error_msg = fmt::format(
                        "!!! JSON Object '{}' contains invalid field '{}' value: '{}', need array !!!",
                        object_name, field, ::boost::json::serialize(jv));
            return false;

        }
        for (auto& item : *arr_ptr) {
            typename T::value_type p;
            if (jsonifyer::parser::get<0, typename T::value_type>(item, field, "item", p, error_msg)) {
                out_value.emplace(p);
            } else {
                return false;
            }
        }
        return true;
    }

    /**
     * @brief get
     * @details For list & vector type
     *
     * @param jv            - const json value input data to parse
     * @param object_name   - const lvalue ref on Object's name
     * @param field         - const lvalue ref on currently extracted field name
     * @param out_value     - lvalue otuput ref
     * @param error_msg     - lvalue output message string
     */
    template<std::size_t I, class T,
             std::enable_if_t<
                 I == 0 &&
///                 false == std::is_fundamental_v<T> &&
///                 false == std::is_same_v<T, std::string> &&
                 jsonifyer::type_traits::has_push_back_method<T>::value, bool> = true>
    __GET_HEADER(T) {
        auto arr_ptr = jv.if_array();
        if (!arr_ptr) {
            error_msg = fmt::format(
                        "!!! JSON Object '{}' contains invalid field '{}' value: '{}', need array !!!",
                        object_name, field, ::boost::json::serialize(jv));
            return false;

        }
        for (auto& item : *arr_ptr) {
            typename T::value_type p;
            if (jsonifyer::parser::get<0, typename T::value_type>(item, field, "item", p, error_msg)) {
                out_value.push_back(p);
            } else {
                return false;
            }
        }
        return true;
    }

    /**
     * @brief get
     * @details For custom class types
     *
     * @param jv            - const json value input data to parse
     * @param object_name   - const lvalue ref on Object's name
     * @param field         - const lvalue ref on currently extracted field name
     * @param out_value     - lvalue otuput ref
     * @param error_msg     - lvalue output message string
     */
    __CUSTOM_CLASS_HEADER(I, T) {

        if constexpr (I < std::tuple_size_v<T>) {
            using object_t = T;
            auto obj = jv.if_object();
            if (!obj) {
              error_msg = fmt::format("!!! JSON Object '{}' contains invalid '{}' field: {} !!!", object_name, field, ::boost::json::serialize(jv));
              return false;
            }
            const std::string& f = std::tuple_element<I, object_t>::name;
            if (!obj->contains(f)) {
              error_msg = fmt::format("!!! JSON Object '{}' does not contain '{}' field: {} !!!", object_name, f, ::boost::json::serialize(*obj));
              return false;
            }
            if (jsonifyer::parser::get<0, typename std::tuple_element<I, T>::type>(
                obj->at(f), field, f, std::get<I>(out_value), error_msg)) {
                return jsonifyer::parser::get<I+1, T>(jv, object_name, field, out_value, error_msg);
            }
            return false;
        }
        return true;
    }

}
