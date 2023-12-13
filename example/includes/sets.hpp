#pragma once

#include <set>

#include <example/includes/tools.hpp>
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

        using self_t = bool_sets_t;
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
     * @brief simple int set-s struct
     */
    struct int_sets_t {
        using iternal_t = std::set<int>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = int_sets_t;
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
     * @brief simple signed int set-s struct
     */
    struct signed_int_sets_t {
        std::set<int8_t> _0;
        std::set<int16_t> _1;
        std::set<int32_t> _2;
        std::set<int64_t> _3;

        using self_t = signed_int_sets_t;
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
     * @brief simple unsigned int set-s struct
     */
    struct unsigned_int_sets_t {
        std::set<uint8_t> _0;
        std::set<uint16_t> _1;
        std::set<uint32_t> _2;
        std::set<uint64_t> _3;

        using self_t = unsigned_int_sets_t;
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
     * @brief simple char set-s struct
     */
    struct char_sets_t {
        std::set<char> _0;
        std::set<char16_t> _1;
        std::set<char32_t> _2;
        std::set<unsigned char> _3;

        using self_t = char_sets_t;
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
     * @brief simple string set-s struct
     */
    struct string_sets_t {
        using iternal_t = std::set<std::string>;
        iternal_t _0;
        iternal_t _1;
        iternal_t _2;
        iternal_t _3;
        iternal_t _4;

        using self_t = string_sets_t;
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

        using self_t = custom_int_sets_t;
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

        using self_t = custom_signed_int_sets_t;
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

        using self_t = custom_unsigned_int_sets_t;
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

        using self_t = custom_char_sets_t;
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

        using self_t = custom_float_sets_t;
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
     * @brief custom mix set-s struct
     */
    struct custom_mix_sets_t {
        std::set<example::integral::ints_t> _0;
        std::set<example::integral::signed_ints_t> _1;
        std::set<example::integral::unsigned_ints_t> _2;
        std::set<example::integral::chars_t> _3;
        std::set<example::integral::floats_t> _4;

        using self_t = custom_mix_sets_t;
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

    SBIND_IFACE(::example::set::bool_sets_t, (_0))
    SBIND_IFACE(::example::set::int_sets_t, (_0) (_1) (_2) (_3) (_4))
    SBIND_IFACE(::example::set::signed_int_sets_t, (_0) (_1) (_2) (_3))
    SBIND_IFACE(::example::set::unsigned_int_sets_t, (_0) (_1) (_2) (_3))
    SBIND_IFACE(::example::set::char_sets_t, (_0) (_1) (_2) (_3))
    SBIND_IFACE(::example::set::string_sets_t, (_0) (_1) (_2) (_3) (_4))

    SBIND_IFACE(::example::set::custom_int_sets_t, (_0) (_1) (_2) (_3) (_4))
    SBIND_IFACE(::example::set::custom_signed_int_sets_t, (_0) (_1) (_2) (_3) (_4))
    SBIND_IFACE(::example::set::custom_unsigned_int_sets_t, (_0) (_1) (_2) (_3) (_4))
    SBIND_IFACE(::example::set::custom_char_sets_t, (_0) (_1) (_2) (_3) (_4))
    SBIND_IFACE(::example::set::custom_float_sets_t, (_0) (_1) (_2) (_3) (_4))
    SBIND_IFACE(::example::set::custom_mix_sets_t, (_0) (_1) (_2) (_3) (_4))

}
