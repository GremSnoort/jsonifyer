#pragma once

// conan
#include <benchmark/benchmark.h>

namespace benchmark {

    template<std::size_t L, class T>
    class fixture_t : public benchmark::Fixture {
    public:
        using type = T;

        type internal;
        std::string data;

    public:
        void SetUp(const ::benchmark::State&);
        void TearDown(const ::benchmark::State&) {}
    };

}
