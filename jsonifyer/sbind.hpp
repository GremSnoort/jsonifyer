#pragma once

// std
#include <tuple>
#include <string>

// conan
#include <boost/preprocessor.hpp>

#define ID_CLASS_NAME __id_e
#define BASE_TYPE_CLASS __base_t

#define DEFINE_ID_CLASS(type, enumerators) \
    enum class ID_CLASS_NAME : type {      \
        BOOST_PP_SEQ_ENUM(enumerators)     \
    };

#define DEFINE_BASE_CLASS(base) \
    using BASE_TYPE_CLASS = base;

namespace jsonifyer::type_traits {

    template<class, class = void>
    struct has_base_type : std::false_type { };

    template<class T>
    struct has_base_type<T, std::void_t<typename T::BASE_TYPE_CLASS>> : std::true_type { };

    template<class T>
    static constexpr auto has_base_type_v = has_base_type<T>::value;

    template<class, class = void>
    struct base_type { using type = void; };

    template<class T>
    struct base_type<T, std::void_t<typename T::BASE_TYPE_CLASS>> { using type = typename T::BASE_TYPE_CLASS; };

    template<class T>
    using base_type_t = typename base_type<T>::type;

}

///
/// C++17: Providing Structured Binding Interface for Custom Class
///
/// As mentioned earlier you can provide Structured Binding support for a custom class.
/// To do that you have to define get<N>, std::tuple_size and std::tuple_element specialisations
/// for your type.
///

#define TUPLE_DEFINE(structure) \
    template <typename T> struct tuple_name; \
    template <> struct tuple_name<structure> { \
        static constexpr auto name = (BOOST_PP_STRINGIZE(structure)); \
    }; \
    template <> struct tuple_size<structure> \
        : std::integral_constant<std::size_t, static_cast<std::size_t>(structure::ID_CLASS_NAME::COUNT)> { };

#define TUPLE_ELEMENT(field, structure) \
    template <> struct tuple_element<static_cast<std::size_t>(structure::ID_CLASS_NAME::field), structure> { \
        using type = decltype(structure::field); \
        static constexpr auto name = (BOOST_PP_STRINGIZE(field)); \
    };

#define TUPLE_GETS(class_) \
    template<std::size_t I> \
    inline auto& get(class_ &u) { \
        return std::get_impl<I>(u); \
    } \
    template<std::size_t I> \
    inline const auto& get(const class_ &u) { \
        return std::get_impl<I>(u); \
    }

#define TUPLE_GET_IMPL_HEADER(class_) \
    template<std::size_t I, typename T, \
             std::enable_if_t<std::is_same_v<std::remove_const_t<std::remove_reference_t<T>>, class_>, bool> = true> \
    inline auto&& get_impl(T&& u)

#define TUPLE_BRANCH(field, structure) \
    if constexpr (I == static_cast<std::size_t>(structure::ID_CLASS_NAME::field)) { \
        return u.field; \
    }
