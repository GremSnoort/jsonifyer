#pragma once

#include <string>

// conan
#include <catch2/catch_test_macros.hpp>

#include <jsonifyer/type_traits.hpp>

namespace test {

    template<class T,
             std::enable_if_t<
                 jsonifyer::type_traits::has_size_method<T>::value &&
                 jsonifyer::type_traits::has_push_back_method<T>::value, bool> = true>
    inline auto cmp(const T& l, const T& r) {
        REQUIRE(l.size() == r.size());
        auto li = l.begin();
        auto ri = r.begin();
        while(li != l.end() && ri != r.end()) {
            REQUIRE(*li == *ri);
            li++;
            ri++;
        }
    }

    template<class T,
             std::enable_if_t<jsonifyer::type_traits::is_set<T>::value, bool> = true>
    inline auto cmp(const T& l, const T& r) {
        REQUIRE(l.size() == r.size());
        for (const auto& key : l) {
            REQUIRE(r.find(key) != r.end());
        }
    }

    template<class T,
             std::enable_if_t<jsonifyer::type_traits::is_map<T>::value, bool> = true>
    inline auto cmp(const T& l, const T& r) {
        REQUIRE(l.size() == r.size());
        for (const auto& [key, val] : l) {
            auto it = r.find(key);
            REQUIRE(it != r.end());
            REQUIRE(it->second == val);
        }
    }

}
