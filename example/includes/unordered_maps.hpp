#pragma once

#include <unordered_map>

#include <example/includes/integrals.hpp>
#include <example/includes/strings.hpp>

#include <jsonifyer/sbind.hpp>

namespace example::unordered_map {

    using key_type = std::size_t;

    /**
     * @brief simple bool unordered_map-s struct
     */
    struct bool_unordered_maps_t {
        using iternal_t = std::unordered_map<key_type, bool>;
        iternal_t _0;

        DEFINE_ID_CLASS(int, (_0) (COUNT))
    };

    /**
     * @brief simple int unordered_map-s struct
     */
    struct int_unordered_maps_t {
        using iternal_t = std::unordered_map<key_type, int>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief simple signed int unordered_map-s struct
     */
    struct signed_int_unordered_maps_t {
        std::unordered_map<key_type, int8_t> _0;
        std::unordered_map<key_type, int16_t> _1;
        std::unordered_map<key_type, int32_t> _2;
        std::unordered_map<key_type, int64_t> _3;

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (COUNT))
    };

    /**
     * @brief simple unsigned int unordered_map-s struct
     */
    struct unsigned_int_unordered_maps_t {
        std::unordered_map<key_type, uint8_t> _0;
        std::unordered_map<key_type, uint16_t> _1;
        std::unordered_map<key_type, uint32_t> _2;
        std::unordered_map<key_type, uint64_t> _3;

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (COUNT))
    };

    /**
     * @brief simple char unordered_map-s struct
     */
    struct char_unordered_maps_t {
        std::unordered_map<key_type, char> _0;
        std::unordered_map<key_type, char16_t> _1;
        std::unordered_map<key_type, char32_t> _2;
        std::unordered_map<key_type, unsigned char> _3;

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (COUNT))
    };

    /**
     * @brief simple string unordered_map-s struct
     */
    struct string_unordered_maps_t {
        using iternal_t = std::unordered_map<key_type, std::string>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief custom int unordered_map-s struct
     */
    struct custom_int_unordered_maps_t {
        using type_t = example::integral::ints_t;
        using iternal_t = std::unordered_map<key_type, type_t>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief custom signed int unordered_map-s struct
     */
    struct custom_signed_int_unordered_maps_t {
        using type_t = example::integral::signed_ints_t;
        using iternal_t = std::unordered_map<key_type, type_t>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief custom unsigned int unordered_map-s struct
     */
    struct custom_unsigned_int_unordered_maps_t {
        using type_t = example::integral::unsigned_ints_t;
        using iternal_t = std::unordered_map<key_type, type_t>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief custom char unordered_map-s struct
     */
    struct custom_char_unordered_maps_t {
        using type_t = example::integral::chars_t;
        using iternal_t = std::unordered_map<key_type, type_t>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief custom float unordered_map-s struct
     */
    struct custom_float_unordered_maps_t {
        using type_t = example::integral::floats_t;
        using iternal_t = std::unordered_map<key_type, type_t>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief custom mix unordered_map-s struct
     */
    struct custom_mix_unordered_maps_t {
        std::unordered_map<key_type, example::integral::ints_t> _0;
        std::unordered_map<key_type, example::integral::signed_ints_t> _1;
        std::unordered_map<key_type, example::integral::unsigned_ints_t> _2;
        std::unordered_map<key_type, example::integral::chars_t> _3;
        std::unordered_map<key_type, example::integral::floats_t> _4;

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

}

namespace std {

    TUPLE_GET_IMPL_HEADER(::example::unordered_map::bool_unordered_maps_t) {
        TUPLE_BRANCH(_0, ::example::unordered_map::bool_unordered_maps_t)
    }

    TUPLE_DEFINE(::example::unordered_map::bool_unordered_maps_t)

    TUPLE_ELEMENT(_0, ::example::unordered_map::bool_unordered_maps_t)

    TUPLE_GETS(::example::unordered_map::bool_unordered_maps_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::unordered_map::int_unordered_maps_t) {
        using type_t = ::example::unordered_map::int_unordered_maps_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::unordered_map::int_unordered_maps_t)

    TUPLE_ELEMENT(_0, ::example::unordered_map::int_unordered_maps_t)
    TUPLE_ELEMENT(_1, ::example::unordered_map::int_unordered_maps_t)
    TUPLE_ELEMENT(_2, ::example::unordered_map::int_unordered_maps_t)
    TUPLE_ELEMENT(_3, ::example::unordered_map::int_unordered_maps_t)
    TUPLE_ELEMENT(_4, ::example::unordered_map::int_unordered_maps_t)

    TUPLE_GETS(::example::unordered_map::int_unordered_maps_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::unordered_map::signed_int_unordered_maps_t) {
        using type_t = ::example::unordered_map::signed_int_unordered_maps_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t)
    }

    TUPLE_DEFINE(::example::unordered_map::signed_int_unordered_maps_t)

    TUPLE_ELEMENT(_0, ::example::unordered_map::signed_int_unordered_maps_t)
    TUPLE_ELEMENT(_1, ::example::unordered_map::signed_int_unordered_maps_t)
    TUPLE_ELEMENT(_2, ::example::unordered_map::signed_int_unordered_maps_t)
    TUPLE_ELEMENT(_3, ::example::unordered_map::signed_int_unordered_maps_t)

    TUPLE_GETS(::example::unordered_map::signed_int_unordered_maps_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::unordered_map::unsigned_int_unordered_maps_t) {
        using type_t = ::example::unordered_map::unsigned_int_unordered_maps_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t)
    }

    TUPLE_DEFINE(::example::unordered_map::unsigned_int_unordered_maps_t)

    TUPLE_ELEMENT(_0, ::example::unordered_map::unsigned_int_unordered_maps_t)
    TUPLE_ELEMENT(_1, ::example::unordered_map::unsigned_int_unordered_maps_t)
    TUPLE_ELEMENT(_2, ::example::unordered_map::unsigned_int_unordered_maps_t)
    TUPLE_ELEMENT(_3, ::example::unordered_map::unsigned_int_unordered_maps_t)

    TUPLE_GETS(::example::unordered_map::unsigned_int_unordered_maps_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::unordered_map::char_unordered_maps_t) {
        using type_t = ::example::unordered_map::char_unordered_maps_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t)
    }

    TUPLE_DEFINE(::example::unordered_map::char_unordered_maps_t)

    TUPLE_ELEMENT(_0, ::example::unordered_map::char_unordered_maps_t)
    TUPLE_ELEMENT(_1, ::example::unordered_map::char_unordered_maps_t)
    TUPLE_ELEMENT(_2, ::example::unordered_map::char_unordered_maps_t)
    TUPLE_ELEMENT(_3, ::example::unordered_map::char_unordered_maps_t)

    TUPLE_GETS(::example::unordered_map::char_unordered_maps_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::unordered_map::string_unordered_maps_t) {
        using type_t = ::example::unordered_map::string_unordered_maps_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::unordered_map::string_unordered_maps_t)

    TUPLE_ELEMENT(_0, ::example::unordered_map::string_unordered_maps_t)
    TUPLE_ELEMENT(_1, ::example::unordered_map::string_unordered_maps_t)
    TUPLE_ELEMENT(_2, ::example::unordered_map::string_unordered_maps_t)
    TUPLE_ELEMENT(_3, ::example::unordered_map::string_unordered_maps_t)
    TUPLE_ELEMENT(_4, ::example::unordered_map::string_unordered_maps_t)

    TUPLE_GETS(::example::unordered_map::string_unordered_maps_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::unordered_map::custom_int_unordered_maps_t) {
        using type_t = ::example::unordered_map::custom_int_unordered_maps_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::unordered_map::custom_int_unordered_maps_t)

    TUPLE_ELEMENT(_0, ::example::unordered_map::custom_int_unordered_maps_t)
    TUPLE_ELEMENT(_1, ::example::unordered_map::custom_int_unordered_maps_t)
    TUPLE_ELEMENT(_2, ::example::unordered_map::custom_int_unordered_maps_t)
    TUPLE_ELEMENT(_3, ::example::unordered_map::custom_int_unordered_maps_t)
    TUPLE_ELEMENT(_4, ::example::unordered_map::custom_int_unordered_maps_t)

    TUPLE_GETS(::example::unordered_map::custom_int_unordered_maps_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::unordered_map::custom_signed_int_unordered_maps_t) {
        using type_t = ::example::unordered_map::custom_signed_int_unordered_maps_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::unordered_map::custom_signed_int_unordered_maps_t)

    TUPLE_ELEMENT(_0, ::example::unordered_map::custom_signed_int_unordered_maps_t)
    TUPLE_ELEMENT(_1, ::example::unordered_map::custom_signed_int_unordered_maps_t)
    TUPLE_ELEMENT(_2, ::example::unordered_map::custom_signed_int_unordered_maps_t)
    TUPLE_ELEMENT(_3, ::example::unordered_map::custom_signed_int_unordered_maps_t)
    TUPLE_ELEMENT(_4, ::example::unordered_map::custom_signed_int_unordered_maps_t)

    TUPLE_GETS(::example::unordered_map::custom_signed_int_unordered_maps_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::unordered_map::custom_unsigned_int_unordered_maps_t) {
        using type_t = ::example::unordered_map::custom_unsigned_int_unordered_maps_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::unordered_map::custom_unsigned_int_unordered_maps_t)

    TUPLE_ELEMENT(_0, ::example::unordered_map::custom_unsigned_int_unordered_maps_t)
    TUPLE_ELEMENT(_1, ::example::unordered_map::custom_unsigned_int_unordered_maps_t)
    TUPLE_ELEMENT(_2, ::example::unordered_map::custom_unsigned_int_unordered_maps_t)
    TUPLE_ELEMENT(_3, ::example::unordered_map::custom_unsigned_int_unordered_maps_t)
    TUPLE_ELEMENT(_4, ::example::unordered_map::custom_unsigned_int_unordered_maps_t)

    TUPLE_GETS(::example::unordered_map::custom_unsigned_int_unordered_maps_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::unordered_map::custom_char_unordered_maps_t) {
        using type_t = ::example::unordered_map::custom_char_unordered_maps_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::unordered_map::custom_char_unordered_maps_t)

    TUPLE_ELEMENT(_0, ::example::unordered_map::custom_char_unordered_maps_t)
    TUPLE_ELEMENT(_1, ::example::unordered_map::custom_char_unordered_maps_t)
    TUPLE_ELEMENT(_2, ::example::unordered_map::custom_char_unordered_maps_t)
    TUPLE_ELEMENT(_3, ::example::unordered_map::custom_char_unordered_maps_t)
    TUPLE_ELEMENT(_4, ::example::unordered_map::custom_char_unordered_maps_t)

    TUPLE_GETS(::example::unordered_map::custom_char_unordered_maps_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::unordered_map::custom_float_unordered_maps_t) {
        using type_t = ::example::unordered_map::custom_float_unordered_maps_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::unordered_map::custom_float_unordered_maps_t)

    TUPLE_ELEMENT(_0, ::example::unordered_map::custom_float_unordered_maps_t)
    TUPLE_ELEMENT(_1, ::example::unordered_map::custom_float_unordered_maps_t)
    TUPLE_ELEMENT(_2, ::example::unordered_map::custom_float_unordered_maps_t)
    TUPLE_ELEMENT(_3, ::example::unordered_map::custom_float_unordered_maps_t)
    TUPLE_ELEMENT(_4, ::example::unordered_map::custom_float_unordered_maps_t)

    TUPLE_GETS(::example::unordered_map::custom_float_unordered_maps_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::unordered_map::custom_mix_unordered_maps_t) {
        using type_t = ::example::unordered_map::custom_mix_unordered_maps_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::unordered_map::custom_mix_unordered_maps_t)

    TUPLE_ELEMENT(_0, ::example::unordered_map::custom_mix_unordered_maps_t)
    TUPLE_ELEMENT(_1, ::example::unordered_map::custom_mix_unordered_maps_t)
    TUPLE_ELEMENT(_2, ::example::unordered_map::custom_mix_unordered_maps_t)
    TUPLE_ELEMENT(_3, ::example::unordered_map::custom_mix_unordered_maps_t)
    TUPLE_ELEMENT(_4, ::example::unordered_map::custom_mix_unordered_maps_t)

    TUPLE_GETS(::example::unordered_map::custom_mix_unordered_maps_t)

}
