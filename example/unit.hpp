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
        SBIND_ID_CLASS(int, (_0) (_1) (_2) (_3) (COUNT))
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

    SBIND_IFACE(::minimal::unit_t, (_0) (_1) (_2) (_3))

}
