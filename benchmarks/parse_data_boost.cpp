// conan
#include <benchmark/benchmark.h>

#include "fixture.hpp"

#include <example/includes/r/metadata.hpp>

#include <example/generate.hpp>

#include <jsonifyer/parser.hpp>
#include <jsonifyer/serializer.hpp>

namespace benchmark {

    template<std::size_t L, class T>
    void fixture_t<L, T>::SetUp(const ::benchmark::State&) {
        std::srand(static_cast<unsigned int>(time(nullptr)));
        example::generate<0>(L, internal);
        data = jsonifyer::serializer::serialize(internal);
    }

    template<class T>
    inline auto parse(const std::string& input, T& output) -> bool {
        std::string error;
        return jsonifyer::parser::from_string<T>(input, __func__, output, error);
    }

#define PARSE_F(Fixture, Name, ...) \
    BENCHMARK_TEMPLATE_F(Fixture, Name, __VA_ARGS__)(benchmark::State& st) { \
        for (auto _ : st) { \
            typename Fixture::type output; \
            parse(data, output); \
            assert(output == internal); \
        } \
    }

    PARSE_F    (fixture_t, data_mono_0_parse,      0, example::real::data_t<example::real::mode_e::MONO>)
    PARSE_F    (fixture_t, data_mono_1_parse,      1, example::real::data_t<example::real::mode_e::MONO>)
    PARSE_F    (fixture_t, data_mono_2_parse,      2, example::real::data_t<example::real::mode_e::MONO>)
    PARSE_F    (fixture_t, data_mono_3_parse,      3, example::real::data_t<example::real::mode_e::MONO>)
    PARSE_F    (fixture_t, data_mono_4_parse,      4, example::real::data_t<example::real::mode_e::MONO>)
    PARSE_F    (fixture_t, data_mono_5_parse,      5, example::real::data_t<example::real::mode_e::MONO>)
    PARSE_F    (fixture_t, data_mono_6_parse,      6, example::real::data_t<example::real::mode_e::MONO>)
    PARSE_F    (fixture_t, data_mono_7_parse,      7, example::real::data_t<example::real::mode_e::MONO>)
    PARSE_F    (fixture_t, data_mono_8_parse,      8, example::real::data_t<example::real::mode_e::MONO>)

}

int main(int argc, char** argv) {
    benchmark::Initialize(&argc, argv);
    if (benchmark::ReportUnrecognizedArguments(argc, argv))
        return 1;
    benchmark::RunSpecifiedBenchmarks();
    benchmark::Shutdown();
}
