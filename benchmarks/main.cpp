// conan
#include <benchmark/benchmark.h>

#include "fixture.hpp"

#include <example/includes/r/metadata.hpp>
#include <example/includes/integrals.hpp>
#include <example/includes/strings.hpp>
#include <example/includes/vectors.hpp>

#include <example/generate.hpp>

#include <jsonifyer/parser.hpp>
#include <jsonifyer/serializer.hpp>

namespace benchmark {

    template<std::size_t L, class T>
    void fixture_t<L, T>::SetUp(const ::benchmark::State&) {
        std::srand(time(nullptr));
        example::generate<0>(L, internal);
        data = jsonifyer::serializer::serialize(internal);
    }

    template<class T>
    auto parse(const std::string& input, T& output) -> bool {
        std::string error;
        return jsonifyer::parser::from_string<T>(input, __func__, output, error);
    }

    template<class T>
    auto process(T& input) -> T {
        T output;
        std::string error;
        const auto ret = jsonifyer::parser::from_string<T>(
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

#define SERIALIZE_F(Fixture, Name, ...) \
    BENCHMARK_TEMPLATE_F(Fixture, Name, __VA_ARGS__)(benchmark::State& st) { \
        for (auto _ : st) { \
            jsonifyer::serializer::serialize(internal); \
        } \
    }

#define PARSE_F(Fixture, Name, ...) \
    BENCHMARK_TEMPLATE_F(Fixture, Name, __VA_ARGS__)(benchmark::State& st) { \
        for (auto _ : st) { \
            typename Fixture::type output; \
            parse(data, output); \
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
    PROCESS_F  (fixture_t, ints_process,          1024, example::integral::ints_t)
    PROCESS_F  (fixture_t, signed_ints_process,   1024, example::integral::signed_ints_t)
    PROCESS_F  (fixture_t, unsigned_ints_process, 1024, example::integral::unsigned_ints_t)
    PROCESS_F  (fixture_t, chars_process,         1024, example::integral::chars_t)
    PROCESS_F  (fixture_t, strings_process,         64, example::string::strings_t)
    /*PROCESS_F  (fixture_t, bool_vectors_process,    16, example::vector::bool_vectors_t)
    PROCESS_F  (fixture_t, int_vectors_process,     16, example::vector::int_vectors_t)
    PROCESS_F  (fixture_t, signed_int_vectors_process,   16, example::vector::signed_int_vectors_t)
    PROCESS_F  (fixture_t, unsigned_int_vectors_process, 16, example::vector::unsigned_int_vectors_t)
    PROCESS_F  (fixture_t, char_vectors_process,   16, example::vector::char_vectors_t)
    PROCESS_F  (fixture_t, string_vectors_process, 16, example::vector::string_vectors_t)
    PROCESS_F  (fixture_t, custom_int_vectors_process, 16, example::vector::custom_int_vectors_t)
    PROCESS_F  (fixture_t, custom_signed_int_vectors_process,   16, example::vector::custom_signed_int_vectors_t)
    PROCESS_F  (fixture_t, custom_unsigned_int_vectors_process, 16, example::vector::custom_unsigned_int_vectors_t)
    PROCESS_F  (fixture_t, custom_char_vectors_process,  16, example::vector::custom_char_vectors_t)
    PROCESS_F  (fixture_t, custom_float_vectors_process, 16, example::vector::custom_float_vectors_t)
    PROCESS_F  (fixture_t, custom_mix_vectors_process,   16, example::vector::custom_mix_vectors_t)*/

    SERIALIZE_F(fixture_t, data_mono_0_serialize,      0, example::real::data_t<example::real::mode_e::MONO>)
    SERIALIZE_F(fixture_t, data_mono_1_serialize,      1, example::real::data_t<example::real::mode_e::MONO>)
    SERIALIZE_F(fixture_t, data_mono_2_serialize,      2, example::real::data_t<example::real::mode_e::MONO>)
    SERIALIZE_F(fixture_t, data_mono_3_serialize,      3, example::real::data_t<example::real::mode_e::MONO>)
    SERIALIZE_F(fixture_t, data_mono_4_serialize,      4, example::real::data_t<example::real::mode_e::MONO>)
    SERIALIZE_F(fixture_t, data_mono_5_serialize,      5, example::real::data_t<example::real::mode_e::MONO>)
    SERIALIZE_F(fixture_t, data_mono_6_serialize,      6, example::real::data_t<example::real::mode_e::MONO>)
    SERIALIZE_F(fixture_t, data_mono_7_serialize,      7, example::real::data_t<example::real::mode_e::MONO>)
    SERIALIZE_F(fixture_t, data_mono_8_serialize,      8, example::real::data_t<example::real::mode_e::MONO>)
    SERIALIZE_F(fixture_t, ints_serialize,          1024, example::integral::ints_t)
    SERIALIZE_F(fixture_t, signed_ints_serialize,   1024, example::integral::signed_ints_t)
    SERIALIZE_F(fixture_t, unsigned_ints_serialize, 1024, example::integral::unsigned_ints_t)
    SERIALIZE_F(fixture_t, chars_serialize,         1024, example::integral::chars_t)
    SERIALIZE_F(fixture_t, strings_serialize,         64, example::string::strings_t)
    SERIALIZE_F(fixture_t, bool_vectors_serialize,    16, example::vector::bool_vectors_t)
    SERIALIZE_F(fixture_t, int_vectors_serialize,     16, example::vector::int_vectors_t)
    SERIALIZE_F(fixture_t, signed_int_vectors_serialize,   16, example::vector::signed_int_vectors_t)
    SERIALIZE_F(fixture_t, unsigned_int_vectors_serialize, 16, example::vector::unsigned_int_vectors_t)
    SERIALIZE_F(fixture_t, char_vectors_serialize,   16, example::vector::char_vectors_t)
    SERIALIZE_F(fixture_t, string_vectors_serialize, 16, example::vector::string_vectors_t)
    SERIALIZE_F(fixture_t, custom_int_vectors_serialize, 16, example::vector::custom_int_vectors_t)
    SERIALIZE_F(fixture_t, custom_signed_int_vectors_serialize,   16, example::vector::custom_signed_int_vectors_t)
    SERIALIZE_F(fixture_t, custom_unsigned_int_vectors_serialize, 16, example::vector::custom_unsigned_int_vectors_t)
    SERIALIZE_F(fixture_t, custom_char_vectors_serialize,  16, example::vector::custom_char_vectors_t)
    SERIALIZE_F(fixture_t, custom_float_vectors_serialize, 16, example::vector::custom_float_vectors_t)
    SERIALIZE_F(fixture_t, custom_mix_vectors_serialize,   16, example::vector::custom_mix_vectors_t)

    PARSE_F    (fixture_t, data_mono_0_parse,      0, example::real::data_t<example::real::mode_e::MONO>)
    PARSE_F    (fixture_t, data_mono_1_parse,      1, example::real::data_t<example::real::mode_e::MONO>)
    PARSE_F    (fixture_t, data_mono_2_parse,      2, example::real::data_t<example::real::mode_e::MONO>)
    PARSE_F    (fixture_t, data_mono_3_parse,      3, example::real::data_t<example::real::mode_e::MONO>)
    PARSE_F    (fixture_t, data_mono_4_parse,      4, example::real::data_t<example::real::mode_e::MONO>)
    PARSE_F    (fixture_t, data_mono_5_parse,      5, example::real::data_t<example::real::mode_e::MONO>)
    PARSE_F    (fixture_t, data_mono_6_parse,      6, example::real::data_t<example::real::mode_e::MONO>)
    PARSE_F    (fixture_t, data_mono_7_parse,      7, example::real::data_t<example::real::mode_e::MONO>)
    PARSE_F    (fixture_t, data_mono_8_parse,      8, example::real::data_t<example::real::mode_e::MONO>)
    PARSE_F    (fixture_t, ints_parse,          1024, example::integral::ints_t)
    PARSE_F    (fixture_t, signed_ints_parse,   1024, example::integral::signed_ints_t)
    PARSE_F    (fixture_t, unsigned_ints_parse, 1024, example::integral::unsigned_ints_t)
    PARSE_F    (fixture_t, chars_parse,         1024, example::integral::chars_t)
    PARSE_F    (fixture_t, strings_parse,         64, example::string::strings_t)
    /*PARSE_F    (fixture_t, bool_vectors_parse,    16, example::vector::bool_vectors_t)
    PARSE_F    (fixture_t, int_vectors_parse,     16, example::vector::int_vectors_t)
    PARSE_F    (fixture_t, signed_int_vectors_parse,   16, example::vector::signed_int_vectors_t)
    PARSE_F    (fixture_t, unsigned_int_vectors_parse, 16, example::vector::unsigned_int_vectors_t)
    PARSE_F    (fixture_t, char_vectors_parse,   16, example::vector::char_vectors_t)
    PARSE_F    (fixture_t, string_vectors_parse, 16, example::vector::string_vectors_t)
    PARSE_F    (fixture_t, custom_int_vectors_parse, 16, example::vector::custom_int_vectors_t)
    PARSE_F    (fixture_t, custom_signed_int_vectors_parse,   16, example::vector::custom_signed_int_vectors_t)
    PARSE_F    (fixture_t, custom_unsigned_int_vectors_parse, 16, example::vector::custom_unsigned_int_vectors_t)
    PARSE_F    (fixture_t, custom_char_vectors_parse,  16, example::vector::custom_char_vectors_t)
    PARSE_F    (fixture_t, custom_float_vectors_parse, 16, example::vector::custom_float_vectors_t)
    PARSE_F    (fixture_t, custom_mix_vectors_parse,   16, example::vector::custom_mix_vectors_t)*/

}

int main(int argc, char** argv) {
    benchmark::Initialize(&argc, argv);
    if (benchmark::ReportUnrecognizedArguments(argc, argv))
        return 1;
    benchmark::RunSpecifiedBenchmarks();
    benchmark::Shutdown();
}
