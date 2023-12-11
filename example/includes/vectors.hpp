#pragma once

#include <vector>
#include <set>
#include <map>
#include <cstring>

#include <example/includes/tools.hpp>
#include <example/includes/integrals.hpp>
#include <example/includes/strings.hpp>

#include <jsonifyer/sbind.hpp>

namespace example::vector {

    /**
     * @brief simple bool vector-s struct
     */
    struct bool_vectors_t {
        using iternal_t = std::vector<bool>;
        iternal_t _0;

        using self_t = bool_vectors_t;
        inline bool operator==(const self_t& other) const {
            return
                    _0 == other._0;
        }
        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        DEFINE_ID_CLASS(int, (_0) (COUNT))
    };

    /**
     * @brief simple int vector-s struct
     */
    struct int_vectors_t {
        using iternal_t = std::vector<int>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = int_vectors_t;
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
     * @brief simple signed int vector-s struct
     */
    struct signed_int_vectors_t {
        std::vector<int8_t> _0;
        std::vector<int16_t> _1;
        std::vector<int32_t> _2;
        std::vector<int64_t> _3;

        using self_t = signed_int_vectors_t;
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
     * @brief simple unsigned int vector-s struct
     */
    struct unsigned_int_vectors_t {
        std::vector<uint8_t> _0;
        std::vector<uint16_t> _1;
        std::vector<uint32_t> _2;
        std::vector<uint64_t> _3;

        using self_t = unsigned_int_vectors_t;
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
     * @brief simple char vector-s struct
     */
    struct char_vectors_t {
        std::vector<char> _0;
        std::vector<char16_t> _1;
        std::vector<char32_t> _2;
        std::vector<unsigned char> _3;

        using self_t = char_vectors_t;
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
     * @brief simple string vector-s struct
     */
    struct string_vectors_t {
        using iternal_t = std::vector<std::string>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = string_vectors_t;
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
     * @brief custom int vector-s struct
     */
    struct custom_int_vectors_t {
        using type_t = example::integral::ints_t;
        using iternal_t = std::vector<type_t>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = custom_int_vectors_t;
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
     * @brief custom signed int vector-s struct
     */
    struct custom_signed_int_vectors_t {
        using type_t = example::integral::signed_ints_t;
        using iternal_t = std::vector<type_t>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = custom_signed_int_vectors_t;
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
     * @brief custom unsigned int vector-s struct
     */
    struct custom_unsigned_int_vectors_t {
        using type_t = example::integral::unsigned_ints_t;
        using iternal_t = std::vector<type_t>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = custom_unsigned_int_vectors_t;
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
     * @brief custom char vector-s struct
     */
    struct custom_char_vectors_t {
        using type_t = example::integral::chars_t;
        using iternal_t = std::vector<type_t>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = custom_char_vectors_t;
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
     * @brief custom float vector-s struct
     */
    struct custom_float_vectors_t {
        using type_t = example::integral::floats_t;
        using iternal_t = std::vector<type_t>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = custom_float_vectors_t;
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
     * @brief custom mix vector-s struct
     */
    struct custom_mix_vectors_t {
        std::vector<example::integral::ints_t> _0;
        std::vector<example::integral::signed_ints_t> _1;
        std::vector<example::integral::unsigned_ints_t> _2;
        std::vector<example::integral::chars_t> _3;
        std::vector<example::integral::floats_t> _4;

        using self_t = custom_mix_vectors_t;
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
     * @brief custom float vector vector-s struct
     */
    struct custom_float_v_vectors_t {
        using type_t = example::integral::floats_t;
        using iternal_t = std::vector<std::vector<type_t>>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = custom_float_v_vectors_t;
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
     * @brief custom float set vector-s struct
     */
    struct custom_float_s_vectors_t {
        using type_t = example::integral::floats_t;
        using iternal_t = std::vector<std::set<type_t>>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = custom_float_s_vectors_t;
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
     * @brief custom float map vector-s struct
     */
    struct custom_float_m_vectors_t {
        using type_t = example::integral::floats_t;
        using iternal_t = std::vector<std::map<std::size_t, type_t>>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = custom_float_m_vectors_t;
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

    TUPLE_GET_IMPL_HEADER(::example::vector::bool_vectors_t) {
        TUPLE_BRANCH(_0, ::example::vector::bool_vectors_t)
    }

    TUPLE_DEFINE(::example::vector::bool_vectors_t)

    TUPLE_ELEMENT(_0, ::example::vector::bool_vectors_t)

    TUPLE_GETS(::example::vector::bool_vectors_t)
    
    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::vector::int_vectors_t) {
        using type_t = ::example::vector::int_vectors_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::vector::int_vectors_t)

    TUPLE_ELEMENT(_0, ::example::vector::int_vectors_t)
    TUPLE_ELEMENT(_1, ::example::vector::int_vectors_t)
    TUPLE_ELEMENT(_2, ::example::vector::int_vectors_t)
    TUPLE_ELEMENT(_3, ::example::vector::int_vectors_t)
    TUPLE_ELEMENT(_4, ::example::vector::int_vectors_t)

    TUPLE_GETS(::example::vector::int_vectors_t)
    
    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::vector::signed_int_vectors_t) {
        using type_t = ::example::vector::signed_int_vectors_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t)
    }

    TUPLE_DEFINE(::example::vector::signed_int_vectors_t)

    TUPLE_ELEMENT(_0, ::example::vector::signed_int_vectors_t)
    TUPLE_ELEMENT(_1, ::example::vector::signed_int_vectors_t)
    TUPLE_ELEMENT(_2, ::example::vector::signed_int_vectors_t)
    TUPLE_ELEMENT(_3, ::example::vector::signed_int_vectors_t)

    TUPLE_GETS(::example::vector::signed_int_vectors_t)
    
    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::vector::unsigned_int_vectors_t) {
        using type_t = ::example::vector::unsigned_int_vectors_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t)
    }

    TUPLE_DEFINE(::example::vector::unsigned_int_vectors_t)

    TUPLE_ELEMENT(_0, ::example::vector::unsigned_int_vectors_t)
    TUPLE_ELEMENT(_1, ::example::vector::unsigned_int_vectors_t)
    TUPLE_ELEMENT(_2, ::example::vector::unsigned_int_vectors_t)
    TUPLE_ELEMENT(_3, ::example::vector::unsigned_int_vectors_t)

    TUPLE_GETS(::example::vector::unsigned_int_vectors_t)
    
    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::vector::char_vectors_t) {
        using type_t = ::example::vector::char_vectors_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t)
    }

    TUPLE_DEFINE(::example::vector::char_vectors_t)

    TUPLE_ELEMENT(_0, ::example::vector::char_vectors_t)
    TUPLE_ELEMENT(_1, ::example::vector::char_vectors_t)
    TUPLE_ELEMENT(_2, ::example::vector::char_vectors_t)
    TUPLE_ELEMENT(_3, ::example::vector::char_vectors_t)

    TUPLE_GETS(::example::vector::char_vectors_t)
    
    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::vector::string_vectors_t) {
        using type_t = ::example::vector::string_vectors_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::vector::string_vectors_t)

    TUPLE_ELEMENT(_0, ::example::vector::string_vectors_t)
    TUPLE_ELEMENT(_1, ::example::vector::string_vectors_t)
    TUPLE_ELEMENT(_2, ::example::vector::string_vectors_t)
    TUPLE_ELEMENT(_3, ::example::vector::string_vectors_t)
    TUPLE_ELEMENT(_4, ::example::vector::string_vectors_t)

    TUPLE_GETS(::example::vector::string_vectors_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::vector::custom_int_vectors_t) {
        using type_t = ::example::vector::custom_int_vectors_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::vector::custom_int_vectors_t)

    TUPLE_ELEMENT(_0, ::example::vector::custom_int_vectors_t)
    TUPLE_ELEMENT(_1, ::example::vector::custom_int_vectors_t)
    TUPLE_ELEMENT(_2, ::example::vector::custom_int_vectors_t)
    TUPLE_ELEMENT(_3, ::example::vector::custom_int_vectors_t)
    TUPLE_ELEMENT(_4, ::example::vector::custom_int_vectors_t)

    TUPLE_GETS(::example::vector::custom_int_vectors_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::vector::custom_signed_int_vectors_t) {
        using type_t = ::example::vector::custom_signed_int_vectors_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::vector::custom_signed_int_vectors_t)

    TUPLE_ELEMENT(_0, ::example::vector::custom_signed_int_vectors_t)
    TUPLE_ELEMENT(_1, ::example::vector::custom_signed_int_vectors_t)
    TUPLE_ELEMENT(_2, ::example::vector::custom_signed_int_vectors_t)
    TUPLE_ELEMENT(_3, ::example::vector::custom_signed_int_vectors_t)
    TUPLE_ELEMENT(_4, ::example::vector::custom_signed_int_vectors_t)

    TUPLE_GETS(::example::vector::custom_signed_int_vectors_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::vector::custom_unsigned_int_vectors_t) {
        using type_t = ::example::vector::custom_unsigned_int_vectors_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::vector::custom_unsigned_int_vectors_t)

    TUPLE_ELEMENT(_0, ::example::vector::custom_unsigned_int_vectors_t)
    TUPLE_ELEMENT(_1, ::example::vector::custom_unsigned_int_vectors_t)
    TUPLE_ELEMENT(_2, ::example::vector::custom_unsigned_int_vectors_t)
    TUPLE_ELEMENT(_3, ::example::vector::custom_unsigned_int_vectors_t)
    TUPLE_ELEMENT(_4, ::example::vector::custom_unsigned_int_vectors_t)

    TUPLE_GETS(::example::vector::custom_unsigned_int_vectors_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::vector::custom_char_vectors_t) {
        using type_t = ::example::vector::custom_char_vectors_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::vector::custom_char_vectors_t)

    TUPLE_ELEMENT(_0, ::example::vector::custom_char_vectors_t)
    TUPLE_ELEMENT(_1, ::example::vector::custom_char_vectors_t)
    TUPLE_ELEMENT(_2, ::example::vector::custom_char_vectors_t)
    TUPLE_ELEMENT(_3, ::example::vector::custom_char_vectors_t)
    TUPLE_ELEMENT(_4, ::example::vector::custom_char_vectors_t)

    TUPLE_GETS(::example::vector::custom_char_vectors_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::vector::custom_float_vectors_t) {
        using type_t = ::example::vector::custom_float_vectors_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::vector::custom_float_vectors_t)

    TUPLE_ELEMENT(_0, ::example::vector::custom_float_vectors_t)
    TUPLE_ELEMENT(_1, ::example::vector::custom_float_vectors_t)
    TUPLE_ELEMENT(_2, ::example::vector::custom_float_vectors_t)
    TUPLE_ELEMENT(_3, ::example::vector::custom_float_vectors_t)
    TUPLE_ELEMENT(_4, ::example::vector::custom_float_vectors_t)

    TUPLE_GETS(::example::vector::custom_float_vectors_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::vector::custom_mix_vectors_t) {
        using type_t = ::example::vector::custom_mix_vectors_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::vector::custom_mix_vectors_t)

    TUPLE_ELEMENT(_0, ::example::vector::custom_mix_vectors_t)
    TUPLE_ELEMENT(_1, ::example::vector::custom_mix_vectors_t)
    TUPLE_ELEMENT(_2, ::example::vector::custom_mix_vectors_t)
    TUPLE_ELEMENT(_3, ::example::vector::custom_mix_vectors_t)
    TUPLE_ELEMENT(_4, ::example::vector::custom_mix_vectors_t)

    TUPLE_GETS(::example::vector::custom_mix_vectors_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::vector::custom_float_v_vectors_t) {
        using type_t = ::example::vector::custom_float_v_vectors_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::vector::custom_float_v_vectors_t)

    TUPLE_ELEMENT(_0, ::example::vector::custom_float_v_vectors_t)
    TUPLE_ELEMENT(_1, ::example::vector::custom_float_v_vectors_t)
    TUPLE_ELEMENT(_2, ::example::vector::custom_float_v_vectors_t)
    TUPLE_ELEMENT(_3, ::example::vector::custom_float_v_vectors_t)
    TUPLE_ELEMENT(_4, ::example::vector::custom_float_v_vectors_t)

    TUPLE_GETS(::example::vector::custom_float_v_vectors_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::vector::custom_float_s_vectors_t) {
        using type_t = ::example::vector::custom_float_s_vectors_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::vector::custom_float_s_vectors_t)

    TUPLE_ELEMENT(_0, ::example::vector::custom_float_s_vectors_t)
    TUPLE_ELEMENT(_1, ::example::vector::custom_float_s_vectors_t)
    TUPLE_ELEMENT(_2, ::example::vector::custom_float_s_vectors_t)
    TUPLE_ELEMENT(_3, ::example::vector::custom_float_s_vectors_t)
    TUPLE_ELEMENT(_4, ::example::vector::custom_float_s_vectors_t)

    TUPLE_GETS(::example::vector::custom_float_s_vectors_t)

    ///////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::vector::custom_float_m_vectors_t) {
        using type_t = ::example::vector::custom_float_m_vectors_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::vector::custom_float_m_vectors_t)

    TUPLE_ELEMENT(_0, ::example::vector::custom_float_m_vectors_t)
    TUPLE_ELEMENT(_1, ::example::vector::custom_float_m_vectors_t)
    TUPLE_ELEMENT(_2, ::example::vector::custom_float_m_vectors_t)
    TUPLE_ELEMENT(_3, ::example::vector::custom_float_m_vectors_t)
    TUPLE_ELEMENT(_4, ::example::vector::custom_float_m_vectors_t)

    TUPLE_GETS(::example::vector::custom_float_m_vectors_t)

}
