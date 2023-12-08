#pragma once

// internal
#include <jsonifyer/setters.hpp>

namespace jsonifyer::serializer {

    template<class T>
    inline auto serialize(const T& input) -> std::string {
        auto output = jsonifyer::serializer::set<0>(input);
        return ::boost::json::serialize(output);
    }

}
