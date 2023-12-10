#pragma once

// internal
#include <jsonifyer/setters.hpp>

namespace jsonifyer::serializer {

    template<class T>
    inline auto serialize(const T& input) -> std::string {
        std::string output;
        jsonifyer::serializer::add<0>(input, "", [&output](::boost::json::value&& jv, const std::string&) { output = ::boost::json::serialize(jv); });
        return output;
    }

}
