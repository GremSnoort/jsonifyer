#pragma once

#include <jsonifyer/sbind.hpp>

namespace example::integral {

    /**
     * @brief simple five int-s struct
     */
    struct ints_t {
        int _0;
        int _1;
        int _2;
        int _3;
        int _4;

        ints_t() = default;
        ints_t(std::size_t)
            : _0(std::rand())
            , _1(std::rand())
            , _2(std::rand())
            , _3(std::rand())
            , _4(std::rand())
        {}

        using self_t = ints_t;
        inline bool operator==(const self_t& other) const {
            return
                    _0 == other._0 &&
                    _1 == other._1 &&
                    _2 == other._2 &&
                    _3 == other._3 &&
                    _4 == other._4;
        }
        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        inline bool operator<(const self_t& other) const {
            return _0 < other._0;
        }
        inline bool operator<(self_t& other) const {
            return operator<(static_cast<const self_t&>(other));
        }

        SBIND_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    struct ints_inherited_t : public ints_t {
        int _5;
        int _6;
        int _7;
        int _8;
        int _9;

        ints_inherited_t() = default;
        ints_inherited_t(std::size_t sz)
            : ints_t(sz)
            , _5(std::rand())
            , _6(std::rand())
            , _7(std::rand())
            , _8(std::rand())
            , _9(std::rand())
        {}

        using self_t = ints_inherited_t;
        inline bool operator==(const self_t& other) const {
            return
                    this->ints_t::operator==(other) &&
                    _5 == other._5 &&
                    _6 == other._6 &&
                    _7 == other._7 &&
                    _8 == other._8 &&
                    _9 == other._9;
        }
        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        inline bool operator<(const self_t& other) const {
            return _0 < other._0;
        }
        inline bool operator<(self_t& other) const {
            return operator<(static_cast<const self_t&>(other));
        }

        SBIND_BASE_CLASS(ints_t)
        SBIND_ID_CLASS(int, (_5) (_6) (_7) (_8) (_9) (COUNT))
    };

    struct ints_inherited_2_t : public ints_inherited_t {
        int _10;
        int _11;
        int _12;
        int _13;
        int _14;

        ints_inherited_2_t() = default;
        ints_inherited_2_t(std::size_t sz)
            : ints_inherited_t(sz)
            , _10(std::rand())
            , _11(std::rand())
            , _12(std::rand())
            , _13(std::rand())
            , _14(std::rand())
        {}

        using self_t = ints_inherited_2_t;
        inline bool operator==(const self_t& other) const {
            return
                    this->ints_inherited_t::operator==(other) &&
                    _10 == other._10 &&
                    _11 == other._11 &&
                    _12 == other._12 &&
                    _13 == other._13 &&
                    _14 == other._14;
        }
        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        inline bool operator<(const self_t& other) const {
            return _0 < other._0;
        }
        inline bool operator<(self_t& other) const {
            return operator<(static_cast<const self_t&>(other));
        }

        SBIND_BASE_CLASS(ints_inherited_t)
        SBIND_ID_CLASS(int, (_10) (_11) (_12) (_13) (_14) (COUNT))
    };

    /**
     * @brief signed int-s struct
     */
    struct signed_ints_t {
        int8_t _0;
        int16_t _1;
        int32_t _2;
        int64_t _3;

        signed_ints_t() = default;
        signed_ints_t(std::size_t)
            : _0(static_cast<int8_t>(std::rand() % INT8_MAX))
            , _1(static_cast<int16_t>(std::rand() % INT16_MAX))
            , _2(std::rand())
            , _3(std::rand())
        {}

        using self_t = signed_ints_t;
        inline bool operator==(const self_t& other) const {
            return
                    _0 == other._0 &&
                    _1 == other._1 &&
                    _2 == other._2 &&
                    _3 == other._3;
        }

        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        inline bool operator<(const self_t& other) const {
            return _0 < other._0;
        }
        inline bool operator<(self_t& other) const {
            return operator<(static_cast<const self_t&>(other));
        }

        SBIND_ID_CLASS(int, (_0) (_1) (_2) (_3) (COUNT))
    };

    /**
     * @brief unsigned int-s struct
     */
    struct unsigned_ints_t {
        uint8_t _0;
        uint16_t _1;
        uint32_t _2;
        uint64_t _3;

        unsigned_ints_t() = default;
        unsigned_ints_t(std::size_t)
            : _0(static_cast<uint8_t>(static_cast<uint32_t>(std::rand()) % UINT8_MAX))
            , _1(static_cast<uint16_t>(static_cast<uint32_t>(std::rand()) % UINT16_MAX))
            , _2(static_cast<uint32_t>(std::rand()))
            , _3(static_cast<uint32_t>(std::rand()))
        {}

        using self_t = unsigned_ints_t;
        inline bool operator==(const self_t& other) const {
            return
                    _0 == other._0 &&
                    _1 == other._1 &&
                    _2 == other._2 &&
                    _3 == other._3;
        }

        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        inline bool operator<(const self_t& other) const {
            return _0 < other._0;
        }
        inline bool operator<(self_t& other) const {
            return operator<(static_cast<const self_t&>(other));
        }

        SBIND_ID_CLASS(int, (_0) (_1) (_2) (_3) (COUNT))
    };

    /**
     * @brief simple char-s struct
     */
    struct chars_t {
        char _0;
        char16_t _1;
        char32_t _2;
        unsigned char _3;

        chars_t() = default;
        chars_t(std::size_t)
            : _0(static_cast<char>(static_cast<int32_t>(std::rand()) % INT8_MAX))
            , _1(static_cast<char16_t>(static_cast<uint32_t>(std::rand()) % UINT16_MAX))
            , _2(static_cast<uint32_t>(std::rand()))
            , _3(static_cast<unsigned char>(static_cast<uint32_t>(std::rand()) % UINT8_MAX))
        {}

        using self_t = chars_t;
        inline bool operator==(const self_t& other) const {
            return
                    _0 == other._0 &&
                    _1 == other._1 &&
                    _2 == other._2 &&
                    _3 == other._3;
        }

        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        inline bool operator<(const self_t& other) const {
            return _0 < other._0;
        }
        inline bool operator<(self_t& other) const {
            return operator<(static_cast<const self_t&>(other));
        }

        SBIND_ID_CLASS(int, (_0) (_1) (_2) (_3) (COUNT))
    };

    /**
     * @brief simple floats-s struct
     */
    struct floats_t {
        float _0;
        double _1;

        floats_t() = default;
        floats_t(std::size_t)
            : _0(static_cast<float>(static_cast<float>(std::rand()) / 2.0 - 5.123))
            , _1(static_cast<double>(std::rand()) - 5.283746)
        {}

        using self_t = floats_t;
        inline bool operator==(const self_t& other) const {
            return
                    std::abs(_0 - other._0) < 0.0000001 &&
                    std::abs(_1 - other._1) < 0.0000001;
        }
        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        inline bool operator<(const self_t& other) const {
            return _0 < other._0;
        }
        inline bool operator<(self_t& other) const {
            return operator<(static_cast<const self_t&>(other));
        }

        SBIND_ID_CLASS(int, (_0) (_1) (COUNT))
    };

}

namespace std {

    SBIND_IFACE(::example::integral::ints_t, (_0) (_1) (_2) (_3) (_4))
    SBIND_IFACE(::example::integral::ints_inherited_t, (_5) (_6) (_7) (_8) (_9))
    SBIND_IFACE(::example::integral::ints_inherited_2_t, (_10) (_11) (_12) (_13) (_14))
    SBIND_IFACE(::example::integral::signed_ints_t, (_0) (_1) (_2) (_3))
    SBIND_IFACE(::example::integral::unsigned_ints_t, (_0) (_1) (_2) (_3))
    SBIND_IFACE(::example::integral::chars_t, (_0) (_1) (_2) (_3))
    SBIND_IFACE(::example::integral::floats_t, (_0) (_1))

}
