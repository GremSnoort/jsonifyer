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

        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (_4) (COUNT))
    };

}

namespace std {

    TUPLE_GET_IMPL_HEADER(::example::string::strings_t) {
        TUPLE_BRANCH(_0, ::example::string::strings_t) else
        TUPLE_BRANCH(_1, ::example::string::strings_t) else
        TUPLE_BRANCH(_2, ::example::string::strings_t) else
        TUPLE_BRANCH(_3, ::example::string::strings_t) else
        TUPLE_BRANCH(_4, ::example::string::strings_t)
    }

    TUPLE_DEFINE(::example::string::strings_t)

    TUPLE_ELEMENT(_0, ::example::string::strings_t)
    TUPLE_ELEMENT(_1, ::example::string::strings_t)
    TUPLE_ELEMENT(_2, ::example::string::strings_t)
    TUPLE_ELEMENT(_3, ::example::string::strings_t)
    TUPLE_ELEMENT(_4, ::example::string::strings_t)

    TUPLE_GETS(::example::string::strings_t)

}
