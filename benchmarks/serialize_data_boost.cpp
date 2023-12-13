// conan
#include <benchmark/benchmark.h>

#include "fixture.hpp"

#include <example/includes/r/metadata.hpp>

#include <example/generate.hpp>

#include <jsonifyer/serializer.hpp>

namespace benchmark {

    template<std::size_t L, class T>
    void fixture_t<L, T>::SetUp(const ::benchmark::State&) {
        std::srand(static_cast<unsigned int>(time(nullptr)));
        example::generate<0>(L, internal);
        data = jsonifyer::serializer::serialize(internal);
    }

#define SERIALIZE_F(Fixture, Name, ...) \
    BENCHMARK_TEMPLATE_F(Fixture, Name, __VA_ARGS__)(benchmark::State& st) { \
        for (auto _ : st) { \
            auto output = jsonifyer::serializer::serialize(internal); \
            assert(output == data); \
        } \
    }

    SERIALIZE_F(fixture_t, data_mono_0_serialize,      0, example::real::data_t<example::real::mode_e::MONO>)
    SERIALIZE_F(fixture_t, data_mono_1_serialize,      1, example::real::data_t<example::real::mode_e::MONO>)
    SERIALIZE_F(fixture_t, data_mono_2_serialize,      2, example::real::data_t<example::real::mode_e::MONO>)
    SERIALIZE_F(fixture_t, data_mono_3_serialize,      3, example::real::data_t<example::real::mode_e::MONO>)
    SERIALIZE_F(fixture_t, data_mono_4_serialize,      4, example::real::data_t<example::real::mode_e::MONO>)
    SERIALIZE_F(fixture_t, data_mono_5_serialize,      5, example::real::data_t<example::real::mode_e::MONO>)
    SERIALIZE_F(fixture_t, data_mono_6_serialize,      6, example::real::data_t<example::real::mode_e::MONO>)
    SERIALIZE_F(fixture_t, data_mono_7_serialize,      7, example::real::data_t<example::real::mode_e::MONO>)
    SERIALIZE_F(fixture_t, data_mono_8_serialize,      8, example::real::data_t<example::real::mode_e::MONO>)

}

int main(int argc, char** argv) {
    benchmark::Initialize(&argc, argv);
    if (benchmark::ReportUnrecognizedArguments(argc, argv))
        return 1;
    benchmark::RunSpecifiedBenchmarks();
    benchmark::Shutdown();
}
