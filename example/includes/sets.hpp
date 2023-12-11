#pragma once

#include <set>

#include <example/includes/integrals.hpp>
#include <example/includes/strings.hpp>

#include <jsonifyer/sbind.hpp>

namespace example::set {

    /**
     * @brief simple bool set-s struct
     */
    struct bool_sets_t {
        using iternal_t = std::set<bool>;
        iternal_t _0;

        DEFINE_ID_CLASS(int, (_0) (COUNT))
    };

    /**
     * @brief simple int set-s struct
     */
    struct int_sets_t {
        using iternal_t = std::set<int>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief simple signed int set-s struct
     */
    struct signed_int_sets_t {
        std::set<int8_t> _0;
        std::set<int16_t> _1;
        std::set<int32_t> _2;
        std::set<int64_t> _3;

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (COUNT))
    };

    /**
     * @brief simple unsigned int set-s struct
     */
    struct unsigned_int_sets_t {
        std::set<uint8_t> _0;
        std::set<uint16_t> _1;
        std::set<uint32_t> _2;
        std::set<uint64_t> _3;

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (COUNT))
    };

    /**
     * @brief simple char set-s struct
     */
    struct char_sets_t {
        std::set<char> _0;
        std::set<char16_t> _1;
        std::set<char32_t> _2;
        std::set<unsigned char> _3;

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (COUNT))
    };

    /**
     * @brief simple string set-s struct
     */
    struct string_sets_t {
        using iternal_t = std::set<std::string>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief custom int set-s struct
     */
    struct custom_int_sets_t {
        using type_t = example::integral::ints_t;
        using iternal_t = std::set<type_t>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief custom signed int set-s struct
     */
    struct custom_signed_int_sets_t {
        using type_t = example::integral::signed_ints_t;
        using iternal_t = std::set<type_t>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief custom unsigned int set-s struct
     */
    struct custom_unsigned_int_sets_t {
        using type_t = example::integral::unsigned_ints_t;
        using iternal_t = std::set<type_t>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief custom char set-s struct
     */
    struct custom_char_sets_t {
        using type_t = example::integral::chars_t;
        using iternal_t = std::set<type_t>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief custom float set-s struct
     */
    struct custom_float_sets_t {
        using type_t = example::integral::floats_t;
        using iternal_t = std::set<type_t>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief custom mix set-s struct
     */
    struct custom_mix_sets_t {
        std::set<example::integral::ints_t> _0;
        std::set<example::integral::signed_ints_t> _1;
        std::set<example::integral::unsigned_ints_t> _2;
        std::set<example::integral::chars_t> _3;
        std::set<example::integral::floats_t> _4;

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

}

namespace std {

    TUPLE_GET_IMPL_HEADER(::example::set::bool_sets_t) {
        TUPLE_BRANCH(_0, ::example::set::bool_sets_t)
    }

    TUPLE_DEFINE(::example::set::bool_sets_t, void)

    TUPLE_ELEMENT(_0, ::example::set::bool_sets_t)

    TUPLE_GETS(::example::set::bool_sets_t)
    
    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::set::int_sets_t) {
        using type_t = ::example::set::int_sets_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::set::int_sets_t, void)

    TUPLE_ELEMENT(_0, ::example::set::int_sets_t)
    TUPLE_ELEMENT(_1, ::example::set::int_sets_t)
    TUPLE_ELEMENT(_2, ::example::set::int_sets_t)
    TUPLE_ELEMENT(_3, ::example::set::int_sets_t)
    TUPLE_ELEMENT(_4, ::example::set::int_sets_t)

    TUPLE_GETS(::example::set::int_sets_t)
    
    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::set::signed_int_sets_t) {
        using type_t = ::example::set::signed_int_sets_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t)
    }

    TUPLE_DEFINE(::example::set::signed_int_sets_t, void)

    TUPLE_ELEMENT(_0, ::example::set::signed_int_sets_t)
    TUPLE_ELEMENT(_1, ::example::set::signed_int_sets_t)
    TUPLE_ELEMENT(_2, ::example::set::signed_int_sets_t)
    TUPLE_ELEMENT(_3, ::example::set::signed_int_sets_t)

    TUPLE_GETS(::example::set::signed_int_sets_t)
    
    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::set::unsigned_int_sets_t) {
        using type_t = ::example::set::unsigned_int_sets_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t)
    }

    TUPLE_DEFINE(::example::set::unsigned_int_sets_t, void)

    TUPLE_ELEMENT(_0, ::example::set::unsigned_int_sets_t)
    TUPLE_ELEMENT(_1, ::example::set::unsigned_int_sets_t)
    TUPLE_ELEMENT(_2, ::example::set::unsigned_int_sets_t)
    TUPLE_ELEMENT(_3, ::example::set::unsigned_int_sets_t)

    TUPLE_GETS(::example::set::unsigned_int_sets_t)
    
    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::set::char_sets_t) {
        using type_t = ::example::set::char_sets_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t)
    }

    TUPLE_DEFINE(::example::set::char_sets_t, void)

    TUPLE_ELEMENT(_0, ::example::set::char_sets_t)
    TUPLE_ELEMENT(_1, ::example::set::char_sets_t)
    TUPLE_ELEMENT(_2, ::example::set::char_sets_t)
    TUPLE_ELEMENT(_3, ::example::set::char_sets_t)

    TUPLE_GETS(::example::set::char_sets_t)
    
    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::set::string_sets_t) {
        using type_t = ::example::set::string_sets_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::set::string_sets_t, void)

    TUPLE_ELEMENT(_0, ::example::set::string_sets_t)
    TUPLE_ELEMENT(_1, ::example::set::string_sets_t)
    TUPLE_ELEMENT(_2, ::example::set::string_sets_t)
    TUPLE_ELEMENT(_3, ::example::set::string_sets_t)
    TUPLE_ELEMENT(_4, ::example::set::string_sets_t)

    TUPLE_GETS(::example::set::string_sets_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::set::custom_int_sets_t) {
        using type_t = ::example::set::custom_int_sets_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::set::custom_int_sets_t, void)

    TUPLE_ELEMENT(_0, ::example::set::custom_int_sets_t)
    TUPLE_ELEMENT(_1, ::example::set::custom_int_sets_t)
    TUPLE_ELEMENT(_2, ::example::set::custom_int_sets_t)
    TUPLE_ELEMENT(_3, ::example::set::custom_int_sets_t)
    TUPLE_ELEMENT(_4, ::example::set::custom_int_sets_t)

    TUPLE_GETS(::example::set::custom_int_sets_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::set::custom_signed_int_sets_t) {
        using type_t = ::example::set::custom_signed_int_sets_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::set::custom_signed_int_sets_t, void)

    TUPLE_ELEMENT(_0, ::example::set::custom_signed_int_sets_t)
    TUPLE_ELEMENT(_1, ::example::set::custom_signed_int_sets_t)
    TUPLE_ELEMENT(_2, ::example::set::custom_signed_int_sets_t)
    TUPLE_ELEMENT(_3, ::example::set::custom_signed_int_sets_t)
    TUPLE_ELEMENT(_4, ::example::set::custom_signed_int_sets_t)

    TUPLE_GETS(::example::set::custom_signed_int_sets_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::set::custom_unsigned_int_sets_t) {
        using type_t = ::example::set::custom_unsigned_int_sets_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::set::custom_unsigned_int_sets_t, void)

    TUPLE_ELEMENT(_0, ::example::set::custom_unsigned_int_sets_t)
    TUPLE_ELEMENT(_1, ::example::set::custom_unsigned_int_sets_t)
    TUPLE_ELEMENT(_2, ::example::set::custom_unsigned_int_sets_t)
    TUPLE_ELEMENT(_3, ::example::set::custom_unsigned_int_sets_t)
    TUPLE_ELEMENT(_4, ::example::set::custom_unsigned_int_sets_t)

    TUPLE_GETS(::example::set::custom_unsigned_int_sets_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::set::custom_char_sets_t) {
        using type_t = ::example::set::custom_char_sets_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::set::custom_char_sets_t, void)

    TUPLE_ELEMENT(_0, ::example::set::custom_char_sets_t)
    TUPLE_ELEMENT(_1, ::example::set::custom_char_sets_t)
    TUPLE_ELEMENT(_2, ::example::set::custom_char_sets_t)
    TUPLE_ELEMENT(_3, ::example::set::custom_char_sets_t)
    TUPLE_ELEMENT(_4, ::example::set::custom_char_sets_t)

    TUPLE_GETS(::example::set::custom_char_sets_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::set::custom_float_sets_t) {
        using type_t = ::example::set::custom_float_sets_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::set::custom_float_sets_t, void)

    TUPLE_ELEMENT(_0, ::example::set::custom_float_sets_t)
    TUPLE_ELEMENT(_1, ::example::set::custom_float_sets_t)
    TUPLE_ELEMENT(_2, ::example::set::custom_float_sets_t)
    TUPLE_ELEMENT(_3, ::example::set::custom_float_sets_t)
    TUPLE_ELEMENT(_4, ::example::set::custom_float_sets_t)

    TUPLE_GETS(::example::set::custom_float_sets_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::set::custom_mix_sets_t) {
        using type_t = ::example::set::custom_mix_sets_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::set::custom_mix_sets_t, void)

    TUPLE_ELEMENT(_0, ::example::set::custom_mix_sets_t)
    TUPLE_ELEMENT(_1, ::example::set::custom_mix_sets_t)
    TUPLE_ELEMENT(_2, ::example::set::custom_mix_sets_t)
    TUPLE_ELEMENT(_3, ::example::set::custom_mix_sets_t)
    TUPLE_ELEMENT(_4, ::example::set::custom_mix_sets_t)

    TUPLE_GETS(::example::set::custom_mix_sets_t)

}
