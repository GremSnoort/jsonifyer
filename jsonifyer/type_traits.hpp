#pragma once

#include <type_traits>
#include <string>

namespace jsonifyer::type_traits {

    template<class, class = void>
    struct has_mapped_type : std::false_type { };

    template<class T>
    struct has_mapped_type<T, std::void_t<typename T::mapped_type>> : std::true_type { };

    template<class, class = void>
    struct has_key_type : std::false_type { };

    template<class T>
    struct has_key_type<T, std::void_t<typename T::key_type>> : std::true_type { };

    template<class, class = void>
    struct key_type { using type = void; };

    template<class T>
    struct key_type<T, std::void_t<typename T::key_type>> { using type = typename T::key_type; };

    template<typename Test, template<typename...> class Ref>
    struct is_specialization : std::false_type {};

    template<template<typename...> class Ref, typename... Args>
    struct is_specialization<Ref<Args...>, Ref> : std::true_type {};

    /// https://dev.krzaq.cc/post/checking-whether-a-class-has-a-member-function-with-a-given-signature/
    template<typename T>
    struct has_size_method {

        template<typename U>
        static auto test(int) -> decltype(std::declval<U>().size() == 1, std::true_type());

        template<typename>
        static auto test(...) -> std::false_type;

        static constexpr bool value = std::is_same<decltype(test<T>(0)), std::true_type>::value;
    };

    /**
     * for Containers that have `push_back` method:
     * * vector
     * * list
     * * deque
     **/
    template<typename T>
    struct has_push_back_method {

        template<typename U>
        static auto test(int) -> decltype(std::declval<U>().push_back({}), std::true_type());

        template<typename>
        static auto test(...) -> std::false_type;

        static constexpr bool value = std::is_same<decltype(test<T>(0)), std::true_type>::value;
    };

    template<class T>
    static constexpr auto has_push_back_method_v = has_push_back_method<T>::value;

    template<class T>
    struct is_map {
        static constexpr bool value =
                has_key_type<T>::value && has_mapped_type<T>::value &&
                (std::is_base_of_v<typename jsonifyer::type_traits::key_type<T>::type, std::string> ||
                std::is_integral_v<typename jsonifyer::type_traits::key_type<T>::type>);
    };

    template<class T>
    static constexpr auto is_map_v = is_map<T>::value;

    template<class T>
    struct is_set {
        static constexpr bool value = has_key_type<T>::value && !has_mapped_type<T>::value;
    };

    template<class T>
    static constexpr auto is_set_v = is_set<T>::value;

    template<class T>
    struct is_custom {
        static constexpr bool value =
                !std::is_arithmetic_v<T> &&
                !std::is_same_v<T, std::string> &&
                !is_map<T>::value &&
                !is_set<T>::value &&
                !has_push_back_method<T>::value &&
                std::is_class_v<T>;
    };

    template<class T>
    static constexpr auto is_custom_v = is_custom<T>::value;

}
