// conan
#include <benchmark/benchmark.h>

#include "fixture.hpp"

#include <example/includes/r/metadata.hpp>
#include <example/includes/integrals.hpp>
#include <example/includes/strings.hpp>
#include <example/includes/vectors.hpp>
#include <example/includes/lists.hpp>
#include <example/includes/deques.hpp>
#include <example/includes/sets.hpp>
#include <example/includes/maps.hpp>
#include <example/includes/unordered_maps.hpp>

#include <example/generate.hpp>

#include <jsonifyer/serializer.hpp>

namespace benchmark {

    template<std::size_t L, class T>
    void fixture_t<L, T>::SetUp(const ::benchmark::State&) {
        std::srand(static_cast<unsigned int>(time(nullptr)));
        example::generate<0>(L, internal);
    }

#define SERIALIZE_F(Fixture, Name, ...) \
    BENCHMARK_TEMPLATE_F(Fixture, Name, __VA_ARGS__)(benchmark::State& st) { \
        for (auto _ : st) { \
            jsonifyer::serializer::serialize(internal); \
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
    SERIALIZE_F(fixture_t, custom_float_v_vectors_serialize, 16, example::vector::custom_float_v_vectors_t)
    SERIALIZE_F(fixture_t, custom_float_s_vectors_serialize, 16, example::vector::custom_float_s_vectors_t)
    SERIALIZE_F(fixture_t, custom_float_m_vectors_serialize, 16, example::vector::custom_float_m_vectors_t)

    SERIALIZE_F(fixture_t, bool_lists_serialize,    16, example::list::bool_lists_t)
    SERIALIZE_F(fixture_t, int_lists_serialize,     16, example::list::int_lists_t)
    SERIALIZE_F(fixture_t, signed_int_lists_serialize,   16, example::list::signed_int_lists_t)
    SERIALIZE_F(fixture_t, unsigned_int_lists_serialize, 16, example::list::unsigned_int_lists_t)
    SERIALIZE_F(fixture_t, char_lists_serialize,   16, example::list::char_lists_t)
    SERIALIZE_F(fixture_t, string_lists_serialize, 16, example::list::string_lists_t)
    SERIALIZE_F(fixture_t, custom_int_lists_serialize, 16, example::list::custom_int_lists_t)
    SERIALIZE_F(fixture_t, custom_signed_int_lists_serialize,   16, example::list::custom_signed_int_lists_t)
    SERIALIZE_F(fixture_t, custom_unsigned_int_lists_serialize, 16, example::list::custom_unsigned_int_lists_t)
    SERIALIZE_F(fixture_t, custom_char_lists_serialize,  16, example::list::custom_char_lists_t)
    SERIALIZE_F(fixture_t, custom_float_lists_serialize, 16, example::list::custom_float_lists_t)
    SERIALIZE_F(fixture_t, custom_mix_lists_serialize,   16, example::list::custom_mix_lists_t)
    SERIALIZE_F(fixture_t, custom_float_l_lists_serialize, 16, example::list::custom_float_l_lists_t)
    SERIALIZE_F(fixture_t, custom_float_s_lists_serialize, 16, example::list::custom_float_s_lists_t)

    SERIALIZE_F(fixture_t, bool_deques_serialize,    16, example::deque::bool_deques_t)
    SERIALIZE_F(fixture_t, int_deques_serialize,     16, example::deque::int_deques_t)
    SERIALIZE_F(fixture_t, signed_int_deques_serialize,   16, example::deque::signed_int_deques_t)
    SERIALIZE_F(fixture_t, unsigned_int_deques_serialize, 16, example::deque::unsigned_int_deques_t)
    SERIALIZE_F(fixture_t, char_deques_serialize,   16, example::deque::char_deques_t)
    SERIALIZE_F(fixture_t, string_deques_serialize, 16, example::deque::string_deques_t)
    SERIALIZE_F(fixture_t, custom_int_deques_serialize, 16, example::deque::custom_int_deques_t)
    SERIALIZE_F(fixture_t, custom_signed_int_deques_serialize,   16, example::deque::custom_signed_int_deques_t)
    SERIALIZE_F(fixture_t, custom_unsigned_int_deques_serialize, 16, example::deque::custom_unsigned_int_deques_t)
    SERIALIZE_F(fixture_t, custom_char_deques_serialize,  16, example::deque::custom_char_deques_t)
    SERIALIZE_F(fixture_t, custom_float_deques_serialize, 16, example::deque::custom_float_deques_t)
    SERIALIZE_F(fixture_t, custom_mix_deques_serialize,   16, example::deque::custom_mix_deques_t)

    SERIALIZE_F(fixture_t, bool_sets_serialize,    16, example::set::bool_sets_t)
    SERIALIZE_F(fixture_t, int_sets_serialize,     16, example::set::int_sets_t)
    SERIALIZE_F(fixture_t, signed_int_sets_serialize,   16, example::set::signed_int_sets_t)
    SERIALIZE_F(fixture_t, unsigned_int_sets_serialize, 16, example::set::unsigned_int_sets_t)
    SERIALIZE_F(fixture_t, char_sets_serialize,   16, example::set::char_sets_t)
    SERIALIZE_F(fixture_t, string_sets_serialize, 16, example::set::string_sets_t)
    SERIALIZE_F(fixture_t, custom_int_sets_serialize, 16, example::set::custom_int_sets_t)
    SERIALIZE_F(fixture_t, custom_signed_int_sets_serialize,   16, example::set::custom_signed_int_sets_t)
    SERIALIZE_F(fixture_t, custom_unsigned_int_sets_serialize, 16, example::set::custom_unsigned_int_sets_t)
    SERIALIZE_F(fixture_t, custom_char_sets_serialize,  16, example::set::custom_char_sets_t)
    SERIALIZE_F(fixture_t, custom_float_sets_serialize, 16, example::set::custom_float_sets_t)
    SERIALIZE_F(fixture_t, custom_mix_sets_serialize,   16, example::set::custom_mix_sets_t)

    SERIALIZE_F(fixture_t, bool_maps_serialize,    16, example::map::bool_maps_t)
    SERIALIZE_F(fixture_t, int_maps_serialize,     16, example::map::int_maps_t)
    SERIALIZE_F(fixture_t, signed_int_maps_serialize,   16, example::map::signed_int_maps_t)
    SERIALIZE_F(fixture_t, unsigned_int_maps_serialize, 16, example::map::unsigned_int_maps_t)
    SERIALIZE_F(fixture_t, char_maps_serialize,   16, example::map::char_maps_t)
    SERIALIZE_F(fixture_t, string_maps_serialize, 16, example::map::string_maps_t)
    SERIALIZE_F(fixture_t, custom_int_maps_serialize, 16, example::map::custom_int_maps_t)
    SERIALIZE_F(fixture_t, custom_signed_int_maps_serialize,   16, example::map::custom_signed_int_maps_t)
    SERIALIZE_F(fixture_t, custom_unsigned_int_maps_serialize, 16, example::map::custom_unsigned_int_maps_t)
    SERIALIZE_F(fixture_t, custom_char_maps_serialize,  16, example::map::custom_char_maps_t)
    SERIALIZE_F(fixture_t, custom_float_maps_serialize, 16, example::map::custom_float_maps_t)
    SERIALIZE_F(fixture_t, custom_mix_maps_serialize,   16, example::map::custom_mix_maps_t)

    SERIALIZE_F(fixture_t, bool_unordered_maps_serialize,    16, example::unordered_map::bool_unordered_maps_t)
    SERIALIZE_F(fixture_t, int_unordered_maps_serialize,     16, example::unordered_map::int_unordered_maps_t)
    SERIALIZE_F(fixture_t, signed_int_unordered_maps_serialize,   16, example::unordered_map::signed_int_unordered_maps_t)
    SERIALIZE_F(fixture_t, unsigned_int_unordered_maps_serialize, 16, example::unordered_map::unsigned_int_unordered_maps_t)
    SERIALIZE_F(fixture_t, char_unordered_maps_serialize,   16, example::unordered_map::char_unordered_maps_t)
    SERIALIZE_F(fixture_t, string_unordered_maps_serialize, 16, example::unordered_map::string_unordered_maps_t)
    SERIALIZE_F(fixture_t, custom_int_unordered_maps_serialize, 16, example::unordered_map::custom_int_unordered_maps_t)
    SERIALIZE_F(fixture_t, custom_signed_int_unordered_maps_serialize,   16, example::unordered_map::custom_signed_int_unordered_maps_t)
    SERIALIZE_F(fixture_t, custom_unsigned_int_unordered_maps_serialize, 16, example::unordered_map::custom_unsigned_int_unordered_maps_t)
    SERIALIZE_F(fixture_t, custom_char_unordered_maps_serialize,  16, example::unordered_map::custom_char_unordered_maps_t)
    SERIALIZE_F(fixture_t, custom_float_unordered_maps_serialize, 16, example::unordered_map::custom_float_unordered_maps_t)
    SERIALIZE_F(fixture_t, custom_mix_unordered_maps_serialize,   16, example::unordered_map::custom_mix_unordered_maps_t)

}

int main(int argc, char** argv) {
    benchmark::Initialize(&argc, argv);
    if (benchmark::ReportUnrecognizedArguments(argc, argv))
        return 1;
    benchmark::RunSpecifiedBenchmarks();
    benchmark::Shutdown();
}
