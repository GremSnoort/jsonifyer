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
    inline auto process(T& input) -> T {
        T output;
        std::string error;
        [[maybe_unused]] const auto ret = jsonifyer::parser::from_string<T>(
                    jsonifyer::serializer::serialize(input),
                    __func__, output, error);
        return output;
    }

#define PROCESS_F(Fixture, Name, ...) \
    BENCHMARK_TEMPLATE_F(Fixture, Name, __VA_ARGS__)(benchmark::State& st) { \
        for (auto _ : st) { \
            auto output = process<typename Fixture::type>(internal); \
            assert(output == internal); \
        } \
    }

    PROCESS_F  (fixture_t, data_mono_0_process,      0, example::real::data_t<example::real::mode_e::MONO>)
    PROCESS_F  (fixture_t, data_mono_1_process,      1, example::real::data_t<example::real::mode_e::MONO>)
    PROCESS_F  (fixture_t, data_mono_2_process,      2, example::real::data_t<example::real::mode_e::MONO>)
    PROCESS_F  (fixture_t, data_mono_3_process,      3, example::real::data_t<example::real::mode_e::MONO>)
    PROCESS_F  (fixture_t, data_mono_4_process,      4, example::real::data_t<example::real::mode_e::MONO>)
    PROCESS_F  (fixture_t, data_mono_5_process,      5, example::real::data_t<example::real::mode_e::MONO>)
    PROCESS_F  (fixture_t, data_mono_6_process,      6, example::real::data_t<example::real::mode_e::MONO>)
    PROCESS_F  (fixture_t, data_mono_7_process,      7, example::real::data_t<example::real::mode_e::MONO>)
    PROCESS_F  (fixture_t, data_mono_8_process,      8, example::real::data_t<example::real::mode_e::MONO>)

}

int main(int argc, char** argv) {
    benchmark::Initialize(&argc, argv);
    if (benchmark::ReportUnrecognizedArguments(argc, argv))
        return 1;
    benchmark::RunSpecifiedBenchmarks();
    benchmark::Shutdown();
}
