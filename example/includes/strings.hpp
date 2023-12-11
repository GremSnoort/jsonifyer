#pragma once

#include <string>

#include <jsonifyer/sbind.hpp>

namespace example::string {

    /**
     * @brief simple five string-s struct
     */
    struct strings_t {
        std::string _0;
        std::string _1;
        std::string _2;
        std::string _3;
        std::string _4;

        using self_t = strings_t;
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

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

    struct strings_inherited_t : public strings_t {
        std::string _5;
        std::string _6;
        std::string _7;
        std::string _8;
        std::string _9;

        using self_t = strings_inherited_t;
        inline bool operator==(const self_t& other) const {
            return
                    this->strings_t::operator==(other) &&
                    _5 == other._5 &&
                    _6 == other._6 &&
                    _7 == other._7 &&
                    _8 == other._8 &&
                    _9 == other._9;
        }
        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        DEFINE_ID_CLASS(int, (_5) (_6) (_7) (_8) (_9) (COUNT))
    };

    struct strings_inherited_2_t : public strings_inherited_t {
        std::string _10;
        std::string _11;
        std::string _12;
        std::string _13;
        std::string _14;

        using self_t = strings_inherited_2_t;
        inline bool operator==(const self_t& other) const {
            return
                    this->strings_inherited_t::operator==(other) &&
                    _10 == other._10 &&
                    _11 == other._11 &&
                    _12 == other._12 &&
                    _13 == other._13 &&
                    _14 == other._14;
        }
        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        DEFINE_ID_CLASS(int, (_10) (_11) (_12) (_13) (_14) (COUNT))
    };

}

namespace std {

    TUPLE_GET_IMPL_HEADER(::example::string::strings_t) {
        using type_t = ::example::string::strings_t;
        TUPLE_BRANCH(_0, type_t) else
        TUPLE_BRANCH(_1, type_t) else
        TUPLE_BRANCH(_2, type_t) else
        TUPLE_BRANCH(_3, type_t) else
        TUPLE_BRANCH(_4, type_t)
    }

    TUPLE_DEFINE(::example::string::strings_t, void)

    TUPLE_ELEMENT(_0, ::example::string::strings_t)
    TUPLE_ELEMENT(_1, ::example::string::strings_t)
    TUPLE_ELEMENT(_2, ::example::string::strings_t)
    TUPLE_ELEMENT(_3, ::example::string::strings_t)
    TUPLE_ELEMENT(_4, ::example::string::strings_t)

    TUPLE_GETS(::example::string::strings_t)

    ///////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::string::strings_inherited_t) {
        using type_t = ::example::string::strings_inherited_t;
        TUPLE_BRANCH(_5, type_t) else
        TUPLE_BRANCH(_6, type_t) else
        TUPLE_BRANCH(_7, type_t) else
        TUPLE_BRANCH(_8, type_t) else
        TUPLE_BRANCH(_9, type_t)
    }

    TUPLE_DEFINE(::example::string::strings_inherited_t, ::example::string::strings_t)

    TUPLE_ELEMENT(_5, ::example::string::strings_inherited_t)
    TUPLE_ELEMENT(_6, ::example::string::strings_inherited_t)
    TUPLE_ELEMENT(_7, ::example::string::strings_inherited_t)
    TUPLE_ELEMENT(_8, ::example::string::strings_inherited_t)
    TUPLE_ELEMENT(_9, ::example::string::strings_inherited_t)

    TUPLE_GETS(::example::string::strings_inherited_t)

    ///////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::string::strings_inherited_2_t) {
        using type_t = ::example::string::strings_inherited_2_t;
        TUPLE_BRANCH(_10, type_t) else
        TUPLE_BRANCH(_11, type_t) else
        TUPLE_BRANCH(_12, type_t) else
        TUPLE_BRANCH(_13, type_t) else
        TUPLE_BRANCH(_14, type_t)
    }

    TUPLE_DEFINE(::example::string::strings_inherited_2_t, ::example::string::strings_inherited_t)

    TUPLE_ELEMENT(_10, ::example::string::strings_inherited_2_t)
    TUPLE_ELEMENT(_11, ::example::string::strings_inherited_2_t)
    TUPLE_ELEMENT(_12, ::example::string::strings_inherited_2_t)
    TUPLE_ELEMENT(_13, ::example::string::strings_inherited_2_t)
    TUPLE_ELEMENT(_14, ::example::string::strings_inherited_2_t)

    TUPLE_GETS(::example::string::strings_inherited_2_t)
}
