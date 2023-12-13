#pragma once

// internal
#include <jsonifyer/setters.hpp>

namespace jsonifyer::serializer {

    template<class T>
    inline auto serialize(const T& input) -> std::string {
        ::boost::json::object output;
        jsonifyer::serializer::add2<0>(input, output, "__s__");
///        std::string output;
///        jsonifyer::serializer::add<0>(input, "", [&output](::boost::json::value&& jv, const std::string&) { output = ::boost::json::serialize(jv); });
        return ::boost::json::serialize(output.at("__s__"));
    }

}
