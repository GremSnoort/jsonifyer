#pragma once

#include <jsonifyer/sbind.hpp>

namespace example::integral {

    /**
     * @brief simple five int-s POD struct
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

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    /**
     * @brief signed int-s POD struct
     */
    struct signed_ints_t {
        int8_t _0;
        int16_t _1;
        int32_t _2;
        int64_t _3;

        signed_ints_t() = default;
        signed_ints_t(std::size_t)
            : _0(std::rand() % INT8_MAX)
            , _1(std::rand() % INT16_MAX)
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

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (COUNT))
    };

    /**
     * @brief unsigned int-s POD struct
     */
    struct unsigned_ints_t {
        uint8_t _0;
        uint16_t _1;
        uint32_t _2;
        uint64_t _3;

        unsigned_ints_t() = default;
        unsigned_ints_t(std::size_t)
            : _0(static_cast<uint32_t>(std::rand()) % UINT8_MAX)
            , _1(static_cast<uint32_t>(std::rand()) % UINT16_MAX)
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

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (COUNT))
    };

    /**
     * @brief simple char-s POD struct
     */
    struct chars_t {
        char _0;
        char16_t _1;
        char32_t _2;
        unsigned char _3;

        chars_t() = default;
        chars_t(std::size_t)
            : _0(static_cast<int32_t>(std::rand()) % INT8_MAX)
            , _1(static_cast<uint32_t>(std::rand()) % UINT16_MAX)
            , _2(static_cast<uint32_t>(std::rand()))
            , _3(static_cast<uint32_t>(std::rand()) % UINT8_MAX)
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

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (COUNT))
    };

    /**
     * @brief simple floats-s POD struct
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

        DEFINE_ID_CLASS(int, (_0) (_1) (COUNT))
    };

}

namespace std {

    TUPLE_GET_IMPL_HEADER(::example::integral::ints_t) {
        TUPLE_BRANCH(_0, ::example::integral::ints_t) else
        TUPLE_BRANCH(_1, ::example::integral::ints_t) else
        TUPLE_BRANCH(_2, ::example::integral::ints_t) else
        TUPLE_BRANCH(_3, ::example::integral::ints_t) else
        TUPLE_BRANCH(_4, ::example::integral::ints_t)
    }

    TUPLE_DEFINE(::example::integral::ints_t)

    TUPLE_ELEMENT(_0, ::example::integral::ints_t)
    TUPLE_ELEMENT(_1, ::example::integral::ints_t)
    TUPLE_ELEMENT(_2, ::example::integral::ints_t)
    TUPLE_ELEMENT(_3, ::example::integral::ints_t)
    TUPLE_ELEMENT(_4, ::example::integral::ints_t)

    TUPLE_GETS(::example::integral::ints_t)

    /////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::integral::signed_ints_t) {
        TUPLE_BRANCH(_0, ::example::integral::signed_ints_t) else
        TUPLE_BRANCH(_1, ::example::integral::signed_ints_t) else
        TUPLE_BRANCH(_2, ::example::integral::signed_ints_t) else
        TUPLE_BRANCH(_3, ::example::integral::signed_ints_t)
    }

    TUPLE_DEFINE(::example::integral::signed_ints_t)

    TUPLE_ELEMENT(_0, ::example::integral::signed_ints_t)
    TUPLE_ELEMENT(_1, ::example::integral::signed_ints_t)
    TUPLE_ELEMENT(_2, ::example::integral::signed_ints_t)
    TUPLE_ELEMENT(_3, ::example::integral::signed_ints_t)

    TUPLE_GETS(::example::integral::signed_ints_t)

    /////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::integral::unsigned_ints_t) {
        TUPLE_BRANCH(_0, ::example::integral::unsigned_ints_t) else
        TUPLE_BRANCH(_1, ::example::integral::unsigned_ints_t) else
        TUPLE_BRANCH(_2, ::example::integral::unsigned_ints_t) else
        TUPLE_BRANCH(_3, ::example::integral::unsigned_ints_t)
    }

    TUPLE_DEFINE(::example::integral::unsigned_ints_t)

    TUPLE_ELEMENT(_0, ::example::integral::unsigned_ints_t)
    TUPLE_ELEMENT(_1, ::example::integral::unsigned_ints_t)
    TUPLE_ELEMENT(_2, ::example::integral::unsigned_ints_t)
    TUPLE_ELEMENT(_3, ::example::integral::unsigned_ints_t)

    TUPLE_GETS(::example::integral::unsigned_ints_t)

    /////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::integral::chars_t) {
        TUPLE_BRANCH(_0, ::example::integral::chars_t) else
        TUPLE_BRANCH(_1, ::example::integral::chars_t) else
        TUPLE_BRANCH(_2, ::example::integral::chars_t) else
        TUPLE_BRANCH(_3, ::example::integral::chars_t)
    }

    TUPLE_DEFINE(::example::integral::chars_t)

    TUPLE_ELEMENT(_0, ::example::integral::chars_t)
    TUPLE_ELEMENT(_1, ::example::integral::chars_t)
    TUPLE_ELEMENT(_2, ::example::integral::chars_t)
    TUPLE_ELEMENT(_3, ::example::integral::chars_t)

    TUPLE_GETS(::example::integral::chars_t)

    /////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::integral::floats_t) {
        TUPLE_BRANCH(_0, ::example::integral::floats_t) else
        TUPLE_BRANCH(_1, ::example::integral::floats_t)
    }

    TUPLE_DEFINE(::example::integral::floats_t)

    TUPLE_ELEMENT(_0, ::example::integral::floats_t)
    TUPLE_ELEMENT(_1, ::example::integral::floats_t)

    TUPLE_GETS(::example::integral::floats_t)

}
