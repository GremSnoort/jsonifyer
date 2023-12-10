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

    /**
     * @brief get
     *
     * @param jv            - const lvalue json value input data to parse
     * @param object_name   - const lvalue ref on Object's name
     * @param field         - const lvalue ref on currently extracted field name
     * @param out_value     - lvalue otuput ref
     * @param error_msg     - lvalue output message string
     */
    template<std::size_t I, class T, std::enable_if_t<I < 1024, bool> = true>
    inline auto get(
            const ::boost::json::value& jv,
            const std::string& object_name,
            const std::string& field,
            T& out_value,
            std::string& error_msg) noexcept -> bool {

             /// INTEGRAL ================================================================>=====>>>
        if constexpr (I == 0 && std::is_arithmetic_v<T> && std::is_integral_v<T>) {

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

        } else
             /// FLOATING POINT ================================================================>>>
        if constexpr (I == 0 && std::is_arithmetic_v<T> && std::is_floating_point_v<T>) {

            auto val_ptr = jv.if_double();
            if (!val_ptr) {
                error_msg = fmt::format(
                            "!!! JSON Object '{}' contains invalid field '{}' value: '{}', need floating_point !!!",
                            object_name, field, ::boost::json::serialize(jv));
                return false;

            }
            out_value = static_cast<T>(*val_ptr);
            return true;

        } else
             /// STD::STRING ===================================================================>>>
        if constexpr (I == 0 && std::is_same_v<T, std::string>) {

            auto val_ptr = jv.if_string();
            if (!val_ptr) {
                error_msg = fmt::format(
                            "!!! JSON Object '{}' contains invalid field '{}' value: '{}', need string !!!",
                            object_name, field, ::boost::json::serialize(jv));
                return false;

            }
            out_value.assign(val_ptr->c_str());
            return true;

        } else
             /// STD::MAP ======================================================================>>>
        if constexpr (I == 0 && jsonifyer::type_traits::is_map_v<T>) {

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

        } else
             /// STD::SET ======================================================================>>>
        if constexpr (I == 0 && jsonifyer::type_traits::is_set_v<T>) {

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

        } else
             /// PUSH_BACK STRUCTS =============================================================>>>
        if constexpr (I == 0 && !std::is_same_v<T, std::string> && jsonifyer::type_traits::has_push_back_method_v<T>) {

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

        } else
             /// CUSTOM STRUCTS ================================================================>>>
        if constexpr (jsonifyer::type_traits::is_custom_v<T> && I < 1024) {

            if constexpr (I < std::tuple_size_v<T>) {
                using object_t = T;
                auto obj = jv.if_object();
                if (!obj) {
                  error_msg = fmt::format(
                              "!!! JSON Object '{}' contains invalid '{}' field: {} !!!",
                              object_name, field, ::boost::json::serialize(jv));
                  return false;
                }
                const std::string& f = std::tuple_element<I, object_t>::name;
                if (!obj->contains(f)) {
                  error_msg = fmt::format(
                              "!!! JSON Object '{}' does not contain '{}' field: {} !!!",
                              object_name, f, ::boost::json::serialize(*obj));
                  return false;
                }
                if (jsonifyer::parser::get<0, typename std::tuple_element<I, T>::type>(
                    obj->at(f), field, f, std::get<I>(out_value), error_msg)) {
                    return jsonifyer::parser::get<I+1, T>(
                              jv, object_name, field, out_value, error_msg);
                }
                return false;
            }
            return true;
        }

        error_msg = fmt::format(
                    "!!! JSON Object '{}', field '{}' is UNPARSABLE !!!",
                    object_name, field);
        return false;
    }

}
