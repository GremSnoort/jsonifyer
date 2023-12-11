#pragma once

#include <list>
#include <set>

#include <example/includes/tools.hpp>
#include <example/includes/integrals.hpp>
#include <example/includes/strings.hpp>

#include <jsonifyer/sbind.hpp>

namespace example::list {

    /**
     * @brief simple bool list-s struct
     */
    struct bool_lists_t {
        using iternal_t = std::list<bool>;
        iternal_t _0;

        using self_t = bool_lists_t;
        inline bool operator==(const self_t& other) const {
            return
                    example::tools::compare(_0, other._0);
        }
        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        DEFINE_ID_CLASS(int, (_0) (COUNT))
    };

    /**
     * @brief simple int list-s struct
     */
    struct int_lists_t {
        using iternal_t = std::list<int>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = int_lists_t;
        inline bool operator==(const self_t& other) const {
            return
                    example::tools::compare(_0, other._0) &&
                    example::tools::compare(_1, other._1) &&
                    example::tools::compare(_2, other._2) &&
                    example::tools::compare(_3, other._3) &&
                    example::tools::compare(_4, other._4);
        }
        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief simple signed int list-s struct
     */
    struct signed_int_lists_t {
        std::list<int8_t> _0;
        std::list<int16_t> _1;
        std::list<int32_t> _2;
        std::list<int64_t> _3;

        using self_t = signed_int_lists_t;
        inline bool operator==(const self_t& other) const {
            return
                    example::tools::compare(_0, other._0) &&
                    example::tools::compare(_1, other._1) &&
                    example::tools::compare(_2, other._2) &&
                    example::tools::compare(_3, other._3);
        }
        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (COUNT))
    };

    /**
     * @brief simple unsigned int list-s struct
     */
    struct unsigned_int_lists_t {
        std::list<uint8_t> _0;
        std::list<uint16_t> _1;
        std::list<uint32_t> _2;
        std::list<uint64_t> _3;

        using self_t = unsigned_int_lists_t;
        inline bool operator==(const self_t& other) const {
            return
                    example::tools::compare(_0, other._0) &&
                    example::tools::compare(_1, other._1) &&
                    example::tools::compare(_2, other._2) &&
                    example::tools::compare(_3, other._3);
        }
        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (COUNT))
    };

    /**
     * @brief simple char list-s struct
     */
    struct char_lists_t {
        std::list<char> _0;
        std::list<char16_t> _1;
        std::list<char32_t> _2;
        std::list<unsigned char> _3;

        using self_t = char_lists_t;
        inline bool operator==(const self_t& other) const {
            return
                    example::tools::compare(_0, other._0) &&
                    example::tools::compare(_1, other._1) &&
                    example::tools::compare(_2, other._2) &&
                    example::tools::compare(_3, other._3);
        }
        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (COUNT))
    };

    /**
     * @brief simple string list-s struct
     */
    struct string_lists_t {
        using iternal_t = std::list<std::string>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = string_lists_t;
        inline bool operator==(const self_t& other) const {
            return
                    example::tools::compare(_0, other._0) &&
                    example::tools::compare(_1, other._1) &&
                    example::tools::compare(_2, other._2) &&
                    example::tools::compare(_3, other._3) &&
                    example::tools::compare(_4, other._4);
        }
        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief custom int list-s struct
     */
    struct custom_int_lists_t {
        using type_t = example::integral::ints_t;
        using iternal_t = std::list<type_t>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = custom_int_lists_t;
        inline bool operator==(const self_t& other) const {
            return
                    example::tools::compare(_0, other._0) &&
                    example::tools::compare(_1, other._1) &&
                    example::tools::compare(_2, other._2) &&
                    example::tools::compare(_3, other._3) &&
                    example::tools::compare(_4, other._4);
        }
        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief custom signed int list-s struct
     */
    struct custom_signed_int_lists_t {
        using type_t = example::integral::signed_ints_t;
        using iternal_t = std::list<type_t>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = custom_signed_int_lists_t;
        inline bool operator==(const self_t& other) const {
            return
                    example::tools::compare(_0, other._0) &&
                    example::tools::compare(_1, other._1) &&
                    example::tools::compare(_2, other._2) &&
                    example::tools::compare(_3, other._3) &&
                    example::tools::compare(_4, other._4);
        }
        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief custom unsigned int list-s struct
     */
    struct custom_unsigned_int_lists_t {
        using type_t = example::integral::unsigned_ints_t;
        using iternal_t = std::list<type_t>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = custom_unsigned_int_lists_t;
        inline bool operator==(const self_t& other) const {
            return
                    example::tools::compare(_0, other._0) &&
                    example::tools::compare(_1, other._1) &&
                    example::tools::compare(_2, other._2) &&
                    example::tools::compare(_3, other._3) &&
                    example::tools::compare(_4, other._4);
        }
        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief custom char list-s struct
     */
    struct custom_char_lists_t {
        using type_t = example::integral::chars_t;
        using iternal_t = std::list<type_t>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = custom_char_lists_t;
        inline bool operator==(const self_t& other) const {
            return
                    example::tools::compare(_0, other._0) &&
                    example::tools::compare(_1, other._1) &&
                    example::tools::compare(_2, other._2) &&
                    example::tools::compare(_3, other._3) &&
                    example::tools::compare(_4, other._4);
        }
        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief custom float list-s struct
     */
    struct custom_float_lists_t {
        using type_t = example::integral::floats_t;
        using iternal_t = std::list<type_t>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = custom_float_lists_t;
        inline bool operator==(const self_t& other) const {
            return
                    example::tools::compare(_0, other._0) &&
                    example::tools::compare(_1, other._1) &&
                    example::tools::compare(_2, other._2) &&
                    example::tools::compare(_3, other._3) &&
                    example::tools::compare(_4, other._4);
        }
        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief custom mix list-s struct
     */
    struct custom_mix_lists_t {
        std::list<example::integral::ints_t> _0;
        std::list<example::integral::signed_ints_t> _1;
        std::list<example::integral::unsigned_ints_t> _2;
        std::list<example::integral::chars_t> _3;
        std::list<example::integral::floats_t> _4;

        using self_t = custom_mix_lists_t;
        inline bool operator==(const self_t& other) const {
            return
                    example::tools::compare(_0, other._0) &&
                    example::tools::compare(_1, other._1) &&
                    example::tools::compare(_2, other._2) &&
                    example::tools::compare(_3, other._3) &&
                    example::tools::compare(_4, other._4);
        }
        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief custom float list list-s struct
     */
    struct custom_float_l_lists_t {
        using type_t = example::integral::floats_t;
        using iternal_t = std::list<std::list<type_t>>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = custom_float_l_lists_t;
        inline bool operator==(const self_t& other) const {
            return
                    example::tools::compare2(_0, other._0) &&
                    example::tools::compare2(_1, other._1) &&
                    example::tools::compare2(_2, other._2) &&
                    example::tools::compare2(_3, other._3) &&
                    example::tools::compare2(_4, other._4);
        }
        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief custom float set list-s struct
     */
    struct custom_float_s_lists_t {
        using type_t = example::integral::floats_t;
        using iternal_t = std::list<std::set<type_t>>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = custom_float_s_lists_t;
        inline bool operator==(const self_t& other) const {
            return
                    example::tools::compare2(_0, other._0) &&
                    example::tools::compare2(_1, other._1) &&
                    example::tools::compare2(_2, other._2) &&
                    example::tools::compare2(_3, other._3) &&
                    example::tools::compare2(_4, other._4);
        }
        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

}

namespace std {

    TUPLE_GET_IMPL_HEADER(::example::list::bool_lists_t) {
        TUPLE_BRANCH(_0, ::example::list::bool_lists_t)
    }

    TUPLE_DEFINE(::example::list::bool_lists_t)

    TUPLE_ELEMENT(_0, ::example::list::bool_lists_t)

    TUPLE_GETS(::example::list::bool_lists_t)
    
    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::list::int_lists_t) {
        using type_t = ::example::list::int_lists_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::list::int_lists_t)

    TUPLE_ELEMENT(_0, ::example::list::int_lists_t)
    TUPLE_ELEMENT(_1, ::example::list::int_lists_t)
    TUPLE_ELEMENT(_2, ::example::list::int_lists_t)
    TUPLE_ELEMENT(_3, ::example::list::int_lists_t)
    TUPLE_ELEMENT(_4, ::example::list::int_lists_t)

    TUPLE_GETS(::example::list::int_lists_t)
    
    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::list::signed_int_lists_t) {
        using type_t = ::example::list::signed_int_lists_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t)
    }

    TUPLE_DEFINE(::example::list::signed_int_lists_t)

    TUPLE_ELEMENT(_0, ::example::list::signed_int_lists_t)
    TUPLE_ELEMENT(_1, ::example::list::signed_int_lists_t)
    TUPLE_ELEMENT(_2, ::example::list::signed_int_lists_t)
    TUPLE_ELEMENT(_3, ::example::list::signed_int_lists_t)

    TUPLE_GETS(::example::list::signed_int_lists_t)
    
    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::list::unsigned_int_lists_t) {
        using type_t = ::example::list::unsigned_int_lists_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t)
    }

    TUPLE_DEFINE(::example::list::unsigned_int_lists_t)

    TUPLE_ELEMENT(_0, ::example::list::unsigned_int_lists_t)
    TUPLE_ELEMENT(_1, ::example::list::unsigned_int_lists_t)
    TUPLE_ELEMENT(_2, ::example::list::unsigned_int_lists_t)
    TUPLE_ELEMENT(_3, ::example::list::unsigned_int_lists_t)

    TUPLE_GETS(::example::list::unsigned_int_lists_t)
    
    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::list::char_lists_t) {
        using type_t = ::example::list::char_lists_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t)
    }

    TUPLE_DEFINE(::example::list::char_lists_t)

    TUPLE_ELEMENT(_0, ::example::list::char_lists_t)
    TUPLE_ELEMENT(_1, ::example::list::char_lists_t)
    TUPLE_ELEMENT(_2, ::example::list::char_lists_t)
    TUPLE_ELEMENT(_3, ::example::list::char_lists_t)

    TUPLE_GETS(::example::list::char_lists_t)
    
    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::list::string_lists_t) {
        using type_t = ::example::list::string_lists_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::list::string_lists_t)

    TUPLE_ELEMENT(_0, ::example::list::string_lists_t)
    TUPLE_ELEMENT(_1, ::example::list::string_lists_t)
    TUPLE_ELEMENT(_2, ::example::list::string_lists_t)
    TUPLE_ELEMENT(_3, ::example::list::string_lists_t)
    TUPLE_ELEMENT(_4, ::example::list::string_lists_t)

    TUPLE_GETS(::example::list::string_lists_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::list::custom_int_lists_t) {
        using type_t = ::example::list::custom_int_lists_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::list::custom_int_lists_t)

    TUPLE_ELEMENT(_0, ::example::list::custom_int_lists_t)
    TUPLE_ELEMENT(_1, ::example::list::custom_int_lists_t)
    TUPLE_ELEMENT(_2, ::example::list::custom_int_lists_t)
    TUPLE_ELEMENT(_3, ::example::list::custom_int_lists_t)
    TUPLE_ELEMENT(_4, ::example::list::custom_int_lists_t)

    TUPLE_GETS(::example::list::custom_int_lists_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::list::custom_signed_int_lists_t) {
        using type_t = ::example::list::custom_signed_int_lists_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::list::custom_signed_int_lists_t)

    TUPLE_ELEMENT(_0, ::example::list::custom_signed_int_lists_t)
    TUPLE_ELEMENT(_1, ::example::list::custom_signed_int_lists_t)
    TUPLE_ELEMENT(_2, ::example::list::custom_signed_int_lists_t)
    TUPLE_ELEMENT(_3, ::example::list::custom_signed_int_lists_t)
    TUPLE_ELEMENT(_4, ::example::list::custom_signed_int_lists_t)

    TUPLE_GETS(::example::list::custom_signed_int_lists_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::list::custom_unsigned_int_lists_t) {
        using type_t = ::example::list::custom_unsigned_int_lists_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::list::custom_unsigned_int_lists_t)

    TUPLE_ELEMENT(_0, ::example::list::custom_unsigned_int_lists_t)
    TUPLE_ELEMENT(_1, ::example::list::custom_unsigned_int_lists_t)
    TUPLE_ELEMENT(_2, ::example::list::custom_unsigned_int_lists_t)
    TUPLE_ELEMENT(_3, ::example::list::custom_unsigned_int_lists_t)
    TUPLE_ELEMENT(_4, ::example::list::custom_unsigned_int_lists_t)

    TUPLE_GETS(::example::list::custom_unsigned_int_lists_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::list::custom_char_lists_t) {
        using type_t = ::example::list::custom_char_lists_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::list::custom_char_lists_t)

    TUPLE_ELEMENT(_0, ::example::list::custom_char_lists_t)
    TUPLE_ELEMENT(_1, ::example::list::custom_char_lists_t)
    TUPLE_ELEMENT(_2, ::example::list::custom_char_lists_t)
    TUPLE_ELEMENT(_3, ::example::list::custom_char_lists_t)
    TUPLE_ELEMENT(_4, ::example::list::custom_char_lists_t)

    TUPLE_GETS(::example::list::custom_char_lists_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::list::custom_float_lists_t) {
        using type_t = ::example::list::custom_float_lists_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::list::custom_float_lists_t)

    TUPLE_ELEMENT(_0, ::example::list::custom_float_lists_t)
    TUPLE_ELEMENT(_1, ::example::list::custom_float_lists_t)
    TUPLE_ELEMENT(_2, ::example::list::custom_float_lists_t)
    TUPLE_ELEMENT(_3, ::example::list::custom_float_lists_t)
    TUPLE_ELEMENT(_4, ::example::list::custom_float_lists_t)

    TUPLE_GETS(::example::list::custom_float_lists_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::list::custom_mix_lists_t) {
        using type_t = ::example::list::custom_mix_lists_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::list::custom_mix_lists_t)

    TUPLE_ELEMENT(_0, ::example::list::custom_mix_lists_t)
    TUPLE_ELEMENT(_1, ::example::list::custom_mix_lists_t)
    TUPLE_ELEMENT(_2, ::example::list::custom_mix_lists_t)
    TUPLE_ELEMENT(_3, ::example::list::custom_mix_lists_t)
    TUPLE_ELEMENT(_4, ::example::list::custom_mix_lists_t)

    TUPLE_GETS(::example::list::custom_mix_lists_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::list::custom_float_l_lists_t) {
        using type_t = ::example::list::custom_float_l_lists_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::list::custom_float_l_lists_t)

    TUPLE_ELEMENT(_0, ::example::list::custom_float_l_lists_t)
    TUPLE_ELEMENT(_1, ::example::list::custom_float_l_lists_t)
    TUPLE_ELEMENT(_2, ::example::list::custom_float_l_lists_t)
    TUPLE_ELEMENT(_3, ::example::list::custom_float_l_lists_t)
    TUPLE_ELEMENT(_4, ::example::list::custom_float_l_lists_t)

    TUPLE_GETS(::example::list::custom_float_l_lists_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::list::custom_float_s_lists_t) {
        using type_t = ::example::list::custom_float_s_lists_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::list::custom_float_s_lists_t)

    TUPLE_ELEMENT(_0, ::example::list::custom_float_s_lists_t)
    TUPLE_ELEMENT(_1, ::example::list::custom_float_s_lists_t)
    TUPLE_ELEMENT(_2, ::example::list::custom_float_s_lists_t)
    TUPLE_ELEMENT(_3, ::example::list::custom_float_s_lists_t)
    TUPLE_ELEMENT(_4, ::example::list::custom_float_s_lists_t)

    TUPLE_GETS(::example::list::custom_float_s_lists_t)

}
