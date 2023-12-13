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

        SBIND_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
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

        SBIND_BASE_CLASS(strings_t)
        SBIND_ID_CLASS(int, (_5) (_6) (_7) (_8) (_9) (COUNT))
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

        SBIND_BASE_CLASS(strings_inherited_t)
        SBIND_ID_CLASS(int, (_10) (_11) (_12) (_13) (_14) (COUNT))
    };

}

namespace std {

    SBIND_IFACE(::example::string::strings_t, (_0) (_1) (_2) (_3) (_4))
    SBIND_IFACE(::example::string::strings_inherited_t, (_5) (_6) (_7) (_8) (_9))
    SBIND_IFACE(::example::string::strings_inherited_2_t, (_10) (_11) (_12) (_13) (_14))

}
