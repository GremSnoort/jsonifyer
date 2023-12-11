#include <iostream>

// conan
#include <catch2/catch_all.hpp>

#include <example/includes/r/metadata.hpp>
#include <example/includes/integrals.hpp>
#include <example/includes/strings.hpp>
#include <example/includes/vectors.hpp>
#include <example/includes/lists.hpp>
#include <example/includes/deques.hpp>
#include <example/includes/sets.hpp>
#include <example/includes/maps.hpp>
#include <example/includes/unordered_maps.hpp>

#include "forward.hpp"

#include <example/generate.hpp>

#include <jsonifyer/parser.hpp>
#include <jsonifyer/serializer.hpp>

template<class T>
auto parse(const std::string& input, T& output) -> bool {
    std::string error;
    auto ret = jsonifyer::parser::from_string<T>(input, __func__, output, error);
    if (!ret) {
        std::cerr << fmt::format("{}:{}:{} !!! Erorr: {} !!!", __FILE__, __LINE__, __func__, error) << std::endl;
    }
    return ret;
}

template<class T>
auto check(const T& input) {
    const auto data = jsonifyer::serializer::serialize(input);
///    std::cout << "Serialized:\n" << data << std::endl;

    T output;
    REQUIRE(parse(data, output) == true);
    REQUIRE(input == output);
}

TEST_CASE("complex serializer & parser tests") {

    SECTION("r data_t<MONO>") {
        using type_t = example::real::data_t<example::real::mode_e::MONO>;
        type_t data;
        example::generate<0>(5, data);
        check(data);
    }

    SECTION("r data_t<ARRAY>") {
        using type_t = example::real::data_t<example::real::mode_e::ARRAY>;
        type_t data;
        example::generate<0>(5, data);
        check(data);
    }

    SECTION("integral ints_t") {
        using type_t = example::integral::ints_t;
        check(type_t(0));
    }

    SECTION("integral ints_inherited_t") {
        using type_t = example::integral::ints_inherited_t;
        check(type_t(0));
    }

    SECTION("integral ints_inherited_2_t") {
        using type_t = example::integral::ints_inherited_2_t;
        check(type_t(0));
    }

    SECTION("integral signed_ints_t") {
        using type_t = example::integral::signed_ints_t;
        check(type_t(0));
    }

    SECTION("integral unsigned_ints_t") {
        using type_t = example::integral::unsigned_ints_t;
        check(type_t(0));
    }

    SECTION("integral chars_t") {
        using type_t = example::integral::chars_t;
        check(type_t(0));
    }

    SECTION("integral floats_t") {
        using type_t = example::integral::floats_t;
        check(type_t(0));
    }

    ///////////////////////////////////////////////////////////////

    SECTION("string strings_t") {
        using type_t = example::string::strings_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("string strings_inherited_t") {
        using type_t = example::string::strings_inherited_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("string strings_inherited_2_t") {
        using type_t = example::string::strings_inherited_2_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    ///////////////////////////////////////////////////////////////

    SECTION("vector bool_vectors_t") {
        using type_t = example::vector::bool_vectors_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("vector int_vectors_t") {
        using type_t = example::vector::int_vectors_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("vector signed_int_vectors_t") {
        using type_t = example::vector::signed_int_vectors_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("vector unsigned_int_vectors_t") {
        using type_t = example::vector::unsigned_int_vectors_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("vector char_vectors_t") {
        using type_t = example::vector::char_vectors_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("vector string_vectors_t") {
        using type_t = example::vector::string_vectors_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("vector custom_int_vectors_t") {
        using type_t = example::vector::custom_int_vectors_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("vector custom_signed_int_vectors_t") {
        using type_t = example::vector::custom_signed_int_vectors_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("vector custom_unsigned_int_vectors_t") {
        using type_t = example::vector::custom_unsigned_int_vectors_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("vector custom_char_vectors_t") {
        using type_t = example::vector::custom_char_vectors_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("vector custom_float_vectors_t") {
        using type_t = example::vector::custom_float_vectors_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("vector custom_float_vectors_t") {
        using type_t = example::vector::custom_mix_vectors_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("vector custom_float_v_vectors_t") {
        using type_t = example::vector::custom_float_v_vectors_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("vector custom_float_s_vectors_t") {
        using type_t = example::vector::custom_float_s_vectors_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("vector custom_float_m_vectors_t") {
        using type_t = example::vector::custom_float_m_vectors_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    ///////////////////////////////////////////////////////////////

    SECTION("list bool_lists_t") {
        using type_t = example::list::bool_lists_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("list int_lists_t") {
        using type_t = example::list::int_lists_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("list signed_int_lists_t") {
        using type_t = example::list::signed_int_lists_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("list unsigned_int_lists_t") {
        using type_t = example::list::unsigned_int_lists_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("list char_lists_t") {
        using type_t = example::list::char_lists_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("list string_lists_t") {
        using type_t = example::list::string_lists_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("list custom_int_lists_t") {
        using type_t = example::list::custom_int_lists_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("list custom_signed_int_lists_t") {
        using type_t = example::list::custom_signed_int_lists_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("list custom_unsigned_int_lists_t") {
        using type_t = example::list::custom_unsigned_int_lists_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("list custom_char_lists_t") {
        using type_t = example::list::custom_char_lists_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("list custom_float_lists_t") {
        using type_t = example::list::custom_float_lists_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("list custom_mix_lists_t") {
        using type_t = example::list::custom_mix_lists_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("list custom_float_l_lists_t") {
        using type_t = example::list::custom_float_l_lists_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("list custom_float_s_lists_t") {
        using type_t = example::list::custom_float_s_lists_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    ///////////////////////////////////////////////////////////////

    SECTION("map bool_maps_t") {
        using type_t = example::map::bool_maps_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("map int_maps_t") {
        using type_t = example::map::int_maps_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("map signed_int_maps_t") {
        using type_t = example::map::signed_int_maps_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("map unsigned_int_maps_t") {
        using type_t = example::map::unsigned_int_maps_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("map char_maps_t") {
        using type_t = example::map::char_maps_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("map string_maps_t") {
        using type_t = example::map::string_maps_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("map custom_int_maps_t") {
        using type_t = example::map::custom_int_maps_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("map custom_signed_int_maps_t") {
        using type_t = example::map::custom_signed_int_maps_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("map unsigned_int_maps_t") {
        using type_t = example::map::unsigned_int_maps_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("map custom_char_maps_t") {
        using type_t = example::map::custom_char_maps_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("map custom_float_maps_t") {
        using type_t = example::map::custom_float_maps_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("map custom_mix_maps_t") {
        using type_t = example::map::custom_mix_maps_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    ///////////////////////////////////////////////////////////////

    SECTION("set bool_sets_t") {
        using type_t = example::set::bool_sets_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("set int_sets_t") {
        using type_t = example::set::int_sets_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("set signed_int_sets_t") {
        using type_t = example::set::signed_int_sets_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("set unsigned_int_sets_t") {
        using type_t = example::set::unsigned_int_sets_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("set char_sets_t") {
        using type_t = example::set::char_sets_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("set string_sets_t") {
        using type_t = example::set::string_sets_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("set custom_int_sets_t") {
        using type_t = example::set::custom_int_sets_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("set custom_signed_int_sets_t") {
        using type_t = example::set::custom_signed_int_sets_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("set unsigned_int_sets_t") {
        using type_t = example::set::unsigned_int_sets_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("set custom_char_sets_t") {
        using type_t = example::set::custom_char_sets_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("set custom_float_sets_t") {
        using type_t = example::set::custom_float_sets_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

    SECTION("set custom_mix_sets_t") {
        using type_t = example::set::custom_mix_sets_t;
        type_t data;
        example::generate<0>(512, data);
        check(data);
    }

}
