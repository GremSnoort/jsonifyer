#pragma once

#include <deque>

#include <example/includes/tools.hpp>
#include <example/includes/integrals.hpp>
#include <example/includes/strings.hpp>

#include <jsonifyer/sbind.hpp>

namespace example::deque {

    /**
     * @brief simple bool deque-s struct
     */
    struct bool_deques_t {
        using iternal_t = std::deque<bool>;
        iternal_t _0;

        using self_t = bool_deques_t;
        inline bool operator==(const self_t& other) const {
            return
                    example::tools::compare(_0, other._0);
        }
        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        SBIND_ID_CLASS(int, (_0) (COUNT))
    };

    /**
     * @brief simple int deque-s struct
     */
    struct int_deques_t {
        using iternal_t = std::deque<int>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = int_deques_t;
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

        SBIND_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief simple signed int deque-s struct
     */
    struct signed_int_deques_t {
        std::deque<int8_t> _0;
        std::deque<int16_t> _1;
        std::deque<int32_t> _2;
        std::deque<int64_t> _3;

        using self_t = signed_int_deques_t;
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

        SBIND_ID_CLASS(int, (_0) (_1) (_2) (_3) (COUNT))
    };

    /**
     * @brief simple unsigned int deque-s struct
     */
    struct unsigned_int_deques_t {
        std::deque<uint8_t> _0;
        std::deque<uint16_t> _1;
        std::deque<uint32_t> _2;
        std::deque<uint64_t> _3;

        using self_t = unsigned_int_deques_t;
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

        SBIND_ID_CLASS(int, (_0) (_1) (_2) (_3) (COUNT))
    };

    /**
     * @brief simple char deque-s struct
     */
    struct char_deques_t {
        std::deque<char> _0;
        std::deque<char16_t> _1;
        std::deque<char32_t> _2;
        std::deque<unsigned char> _3;

        using self_t = char_deques_t;
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

        SBIND_ID_CLASS(int, (_0) (_1) (_2) (_3) (COUNT))
    };

    /**
     * @brief simple string deque-s struct
     */
    struct string_deques_t {
        using iternal_t = std::deque<std::string>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = string_deques_t;
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

        SBIND_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief custom int deque-s struct
     */
    struct custom_int_deques_t {
        using type_t = example::integral::ints_t;
        using iternal_t = std::deque<type_t>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = custom_int_deques_t;
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

        SBIND_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief custom signed int deque-s struct
     */
    struct custom_signed_int_deques_t {
        using type_t = example::integral::signed_ints_t;
        using iternal_t = std::deque<type_t>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = custom_signed_int_deques_t;
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

        SBIND_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief custom unsigned int deque-s struct
     */
    struct custom_unsigned_int_deques_t {
        using type_t = example::integral::unsigned_ints_t;
        using iternal_t = std::deque<type_t>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = custom_unsigned_int_deques_t;
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

        SBIND_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief custom char deque-s struct
     */
    struct custom_char_deques_t {
        using type_t = example::integral::chars_t;
        using iternal_t = std::deque<type_t>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = custom_char_deques_t;
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

        SBIND_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief custom float deque-s struct
     */
    struct custom_float_deques_t {
        using type_t = example::integral::floats_t;
        using iternal_t = std::deque<type_t>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = custom_float_deques_t;
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

        SBIND_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief custom mix deque-s struct
     */
    struct custom_mix_deques_t {
        std::deque<example::integral::ints_t> _0;
        std::deque<example::integral::signed_ints_t> _1;
        std::deque<example::integral::unsigned_ints_t> _2;
        std::deque<example::integral::chars_t> _3;
        std::deque<example::integral::floats_t> _4;

        using self_t = custom_mix_deques_t;
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

        SBIND_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

}

namespace std {

    SBIND_IFACE(::example::deque::bool_deques_t, (_0))
    SBIND_IFACE(::example::deque::int_deques_t, (_0) (_1) (_2) (_3) (_4))
    SBIND_IFACE(::example::deque::signed_int_deques_t, (_0) (_1) (_2) (_3))
    SBIND_IFACE(::example::deque::unsigned_int_deques_t, (_0) (_1) (_2) (_3))
    SBIND_IFACE(::example::deque::char_deques_t, (_0) (_1) (_2) (_3))
    SBIND_IFACE(::example::deque::string_deques_t, (_0) (_1) (_2) (_3) (_4))

    SBIND_IFACE(::example::deque::custom_int_deques_t, (_0) (_1) (_2) (_3) (_4))
    SBIND_IFACE(::example::deque::custom_signed_int_deques_t, (_0) (_1) (_2) (_3) (_4))
    SBIND_IFACE(::example::deque::custom_unsigned_int_deques_t, (_0) (_1) (_2) (_3) (_4))
    SBIND_IFACE(::example::deque::custom_char_deques_t, (_0) (_1) (_2) (_3) (_4))
    SBIND_IFACE(::example::deque::custom_float_deques_t, (_0) (_1) (_2) (_3) (_4))
    SBIND_IFACE(::example::deque::custom_mix_deques_t, (_0) (_1) (_2) (_3) (_4))

}
