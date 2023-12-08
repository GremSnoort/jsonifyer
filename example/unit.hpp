#pragma once

#include <string>

#include <jsonifyer/sbind.hpp>

namespace minimal {

    struct unit_t {
        int8_t  _0;
        int16_t _1;
        int32_t _2;
        int64_t _3;

        /**
         * It's necessary to define this member type enumeration,
         * fields of enum MUST be named same as the class fields.
         **/
        DEFINE_ID_CLASS(int, (_0) (_1) (_2) (_3) (COUNT))
    };

}

namespace std {

    /**
    * C++17: Providing Structured Binding Interface for Custom Class
    *
    * As mentioned earlier you can provide Structured Binding support for a custom class.
    * To do that you have to define get<N>, std::tuple_size and std::tuple_element specialisations
    * for your type.
    **/

    TUPLE_GET_IMPL_HEADER(::minimal::unit_t) {
        TUPLE_BRANCH(_0, ::minimal::unit_t) else
        TUPLE_BRANCH(_1, ::minimal::unit_t) else
        TUPLE_BRANCH(_2, ::minimal::unit_t) else
        TUPLE_BRANCH(_3, ::minimal::unit_t)
    }

    TUPLE_DEFINE(::minimal::unit_t)

    TUPLE_ELEMENT(_0, ::minimal::unit_t)
    TUPLE_ELEMENT(_1, ::minimal::unit_t)
    TUPLE_ELEMENT(_2, ::minimal::unit_t)
    TUPLE_ELEMENT(_3, ::minimal::unit_t)

    /**
     * std::get<> (const/non const access) for custom class
     **/
    TUPLE_GETS(::minimal::unit_t)

}
