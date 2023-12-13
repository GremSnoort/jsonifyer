#pragma once

// std
#include <tuple>
#include <string>

// conan
#include <boost/preprocessor.hpp>

#define ID_CLASS_NAME __id_e
#define BASE_TYPE_CLASS __base_t

#define SBIND_ID_CLASS(type, enumerators) \
    enum class ID_CLASS_NAME : type {      \
        BOOST_PP_SEQ_ENUM(enumerators)     \
    };

#define SBIND_BASE_CLASS(base) \
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

#define __SB_BRANCH(r, data, field) \
    if constexpr (I == static_cast<std::size_t>(data::field)) { \
        return u.field; \
    }

#define __SB_TUPLE_ELEMENT(r, structure, field) \
    template <> struct tuple_element<static_cast<std::size_t>(structure::ID_CLASS_NAME::field), structure> { \
        using type = decltype(structure::field); \
        static constexpr auto name = (BOOST_PP_STRINGIZE(field)); \
    };

#define SBIND_IFACE(structure, enumerators) \
    template<std::size_t I, typename T, \
             std::enable_if_t<std::is_same_v<std::remove_const_t<std::remove_reference_t<T>>, structure>, bool> = true> \
    inline auto&& get_impl(T&& u) { \
        using id_e = typename structure::ID_CLASS_NAME; \
        BOOST_PP_SEQ_FOR_EACH(__SB_BRANCH, id_e, enumerators) \
    } \
    template <typename T> struct tuple_name; \
    template <> struct tuple_name<structure> { \
        static constexpr auto name = (BOOST_PP_STRINGIZE(structure)); \
    }; \
    template <> struct tuple_size<structure> \
        : std::integral_constant<std::size_t, static_cast<std::size_t>(structure::ID_CLASS_NAME::COUNT)> { }; \
    BOOST_PP_SEQ_FOR_EACH(__SB_TUPLE_ELEMENT, structure, enumerators) \
    template<std::size_t I> \
    inline auto& get(structure &u) { \
        return std::get_impl<I>(u); \
    } \
    template<std::size_t I> \
    inline const auto& get(const structure &u) { \
        return std::get_impl<I>(u); \
    }
