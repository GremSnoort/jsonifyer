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

template<std::size_t I, class Data_t, class Value_t>
auto check(Data_t& data, const Value_t& value) {
    std::get<I>(data) = value;
    REQUIRE(std::get<I>(data) == value);
}

template<class type_t>
auto check_4_custom() {
    type_t data;

    {
        static constexpr auto I = 0;
        auto& ref = data._0;
        test::cmp(std::get<I>(data), ref);
    }

    {
        static constexpr auto I = 1;
        auto& ref = data._1;
        test::cmp(std::get<I>(data), ref);
    }

    {
        static constexpr auto I = 2;
        auto& ref = data._2;
        test::cmp(std::get<I>(data), ref);
    }

    {
        static constexpr auto I = 3;
        auto& ref = data._3;
        test::cmp(std::get<I>(data), ref);
    }
}

template<class type_t>
auto check_5_custom() {
    type_t data;

    {
        static constexpr auto I = 0;
        auto& ref = data._0;
        test::cmp(std::get<I>(data), ref);
    }

    {
        static constexpr auto I = 1;
        auto& ref = data._1;
        test::cmp(std::get<I>(data), ref);
    }

    {
        static constexpr auto I = 2;
        auto& ref = data._2;
        test::cmp(std::get<I>(data), ref);
    }

    {
        static constexpr auto I = 3;
        auto& ref = data._3;
        test::cmp(std::get<I>(data), ref);
    }

    {
        static constexpr auto I = 4;
        auto& ref = data._4;
        test::cmp(std::get<I>(data), ref);
    }
}

TEST_CASE("std::get test") {

    SECTION("integral ints_t") {
        using type_t = example::integral::ints_t;
        type_t data;

        check<0>(data, 0);
        check<1>(data, 1);
        check<2>(data, 2);
        check<3>(data, 3);
        check<4>(data, 4);

        REQUIRE(data._0 == 0);
        REQUIRE(data._1 == 1);
        REQUIRE(data._2 == 2);
        REQUIRE(data._3 == 3);
        REQUIRE(data._4 == 4);
    }

    SECTION("integral signed_ints_t") {
        using type_t = example::integral::signed_ints_t;
        type_t data;

        check<0, type_t, int8_t >(data, INT8_MAX);
        check<1, type_t, int16_t>(data, INT16_MAX);
        check<2, type_t, int32_t>(data, INT32_MAX);
        check<3, type_t, int64_t>(data, INT64_MAX);
        
        REQUIRE(data._0 == INT8_MAX);
        REQUIRE(data._1 == INT16_MAX);
        REQUIRE(data._2 == INT32_MAX);
        REQUIRE(data._3 == INT64_MAX);
    }

    SECTION("integral unsigned_ints_t") {
        using type_t = example::integral::unsigned_ints_t;
        type_t data;

        check<0, type_t, uint8_t >(data, UINT8_MAX);
        check<1, type_t, uint16_t>(data, UINT16_MAX);
        check<2, type_t, uint32_t>(data, UINT32_MAX);
        check<3, type_t, uint64_t>(data, UINT64_MAX);
        
        REQUIRE(data._0 == UINT8_MAX);
        REQUIRE(data._1 == UINT16_MAX);
        REQUIRE(data._2 == UINT32_MAX);
        REQUIRE(data._3 == UINT64_MAX);
    }

    SECTION("integral chars_t") {
        using type_t = example::integral::chars_t;
        type_t data;

        check<0, type_t, char >(data, INT8_MAX);
        check<1, type_t, char16_t>(data, INT16_MAX);
        check<2, type_t, char32_t>(data, INT32_MAX);
        check<3, type_t, unsigned char>(data, UINT8_MAX);

        REQUIRE(data._0 == INT8_MAX);
        REQUIRE(data._1 == INT16_MAX);
        REQUIRE(data._2 == INT32_MAX);
        REQUIRE(data._3 == UINT8_MAX);
    }

    SECTION("integral floats_t") {
        using type_t = example::integral::floats_t;
        type_t data;

        static constexpr float float_ = static_cast<float>(static_cast<float>(INT32_MAX) / 2.0 - 5.123);
        static constexpr double double_ = static_cast<double>(INT64_MAX) - 5.283746;

        std::get<0>(data) = float_;
        REQUIRE(std::abs(data._0 - float_) < 0.000001);
        REQUIRE(std::abs(std::get<0>(data) - float_) < 0.000001);

        std::get<1>(data) = double_;
        REQUIRE(std::abs(data._1 - double_) < 0.000001);
        REQUIRE(std::abs(std::get<1>(data) - double_) < 0.000001);
    }

    /////////////////////////////////////////////////////////////////////////////

    SECTION("string strings_t") {
        using type_t = example::string::strings_t;
        type_t data;

        auto gen = [](std::size_t len) {
            std::string out;
            for (std::size_t i = 0; i < len; ++i) {
                out.push_back(i % sizeof(char));
            }
            return out;
        };

        auto value = gen(32);
        check<0>(data, value);
        REQUIRE(data._0 == value);

        value = gen(64);
        check<1>(data, value);
        REQUIRE(data._1 == value);

        value = gen(128);
        check<2>(data, value);
        REQUIRE(data._2 == value);

        value = gen(256);
        check<3>(data, value);
        REQUIRE(data._3 == value);

        value = gen(512);
        check<4>(data, value);
        REQUIRE(data._4 == value);
    }

    /////////////////////////////////////////////////////////////////////////////

    SECTION("vector bool_vectors_t") {
        using type_t = example::vector::bool_vectors_t;
        type_t data;

        example::generate<0>(512, data);

        static constexpr auto I = 0;
        auto& ref = data._0;
        test::cmp(std::get<I>(data), ref);
    }

    SECTION("vector int_vectors_t") {
        using type_t = example::vector::int_vectors_t;
        check_4_custom<type_t>();
    }

    SECTION("vector signed_int_vectors_t") {
        using type_t = example::vector::signed_int_vectors_t;
        check_4_custom<type_t>();
    }

    SECTION("vector unsigned_int_vectors_t") {
        using type_t = example::vector::unsigned_int_vectors_t;
        check_4_custom<type_t>();
    }

    SECTION("vector char_vectors_t") {
        using type_t = example::vector::char_vectors_t;
        check_4_custom<type_t>();
    }

    SECTION("vector string_vectors_t") {
        using type_t = example::vector::string_vectors_t;
        check_5_custom<type_t>();
    }

    SECTION("vector custom_int_vectors_t") {
        using type_t = example::vector::custom_int_vectors_t;
        check_5_custom<type_t>();
    }

    SECTION("vector custom_signed_int_vectors_t") {
        using type_t = example::vector::custom_signed_int_vectors_t;
        check_5_custom<type_t>();
    }

    SECTION("vector custom_unsigned_int_vectors_t") {
        using type_t = example::vector::custom_unsigned_int_vectors_t;
        check_5_custom<type_t>();
    }

    SECTION("vector custom_char_vectors_t") {
        using type_t = example::vector::custom_char_vectors_t;
        check_5_custom<type_t>();
    }

    SECTION("vector custom_float_vectors_t") {
        using type_t = example::vector::custom_float_vectors_t;
        check_5_custom<type_t>();
    }

    SECTION("vector custom_mix_vectors_t") {
        using type_t = example::vector::custom_mix_vectors_t;
        check_5_custom<type_t>();
    }

    /////////////////////////////////////////////////////////////////////////////

    SECTION("list bool_lists_t") {
        using type_t = example::list::bool_lists_t;
        type_t data;

        example::generate<0>(512, data);

        static constexpr auto I = 0;
        auto& ref = data._0;
        test::cmp(std::get<I>(data), ref);
    }

    SECTION("list int_lists_t") {
        using type_t = example::list::int_lists_t;
        check_4_custom<type_t>();
    }

    SECTION("list signed_int_lists_t") {
        using type_t = example::list::signed_int_lists_t;
        check_4_custom<type_t>();
    }

    SECTION("list unsigned_int_lists_t") {
        using type_t = example::list::unsigned_int_lists_t;
        check_4_custom<type_t>();
    }

    SECTION("list char_lists_t") {
        using type_t = example::list::char_lists_t;
        check_4_custom<type_t>();
    }

    SECTION("list string_lists_t") {
        using type_t = example::list::string_lists_t;
        check_5_custom<type_t>();
    }

    SECTION("list custom_int_lists_t") {
        using type_t = example::list::custom_int_lists_t;
        check_5_custom<type_t>();
    }

    SECTION("list custom_signed_int_lists_t") {
        using type_t = example::list::custom_signed_int_lists_t;
        check_5_custom<type_t>();
    }

    SECTION("list custom_unsigned_int_lists_t") {
        using type_t = example::list::custom_unsigned_int_lists_t;
        check_5_custom<type_t>();
    }

    SECTION("list custom_char_lists_t") {
        using type_t = example::list::custom_char_lists_t;
        check_5_custom<type_t>();
    }

    SECTION("list custom_float_lists_t") {
        using type_t = example::list::custom_float_lists_t;
        check_5_custom<type_t>();
    }

    SECTION("list custom_mix_lists_t") {
        using type_t = example::list::custom_mix_lists_t;
        check_5_custom<type_t>();
    }

    /////////////////////////////////////////////////////////////////////////////

    SECTION("deque bool_deques_t") {
        using type_t = example::deque::bool_deques_t;
        type_t data;

        example::generate<0>(512, data);

        static constexpr auto I = 0;
        auto& ref = data._0;
        test::cmp(std::get<I>(data), ref);
    }

    SECTION("deque int_deques_t") {
        using type_t = example::deque::int_deques_t;
        check_4_custom<type_t>();
    }

    SECTION("deque signed_int_deques_t") {
        using type_t = example::deque::signed_int_deques_t;
        check_4_custom<type_t>();
    }

    SECTION("deque unsigned_int_deques_t") {
        using type_t = example::deque::unsigned_int_deques_t;
        check_4_custom<type_t>();
    }

    SECTION("deque char_deques_t") {
        using type_t = example::deque::char_deques_t;
        check_4_custom<type_t>();
    }

    SECTION("deque string_deques_t") {
        using type_t = example::deque::string_deques_t;
        check_5_custom<type_t>();
    }

    SECTION("deque custom_int_deques_t") {
        using type_t = example::deque::custom_int_deques_t;
        check_5_custom<type_t>();
    }

    SECTION("deque custom_signed_int_deques_t") {
        using type_t = example::deque::custom_signed_int_deques_t;
        check_5_custom<type_t>();
    }

    SECTION("deque custom_unsigned_int_deques_t") {
        using type_t = example::deque::custom_unsigned_int_deques_t;
        check_5_custom<type_t>();
    }

    SECTION("deque custom_char_deques_t") {
        using type_t = example::deque::custom_char_deques_t;
        check_5_custom<type_t>();
    }

    SECTION("deque custom_float_deques_t") {
        using type_t = example::deque::custom_float_deques_t;
        check_5_custom<type_t>();
    }

    SECTION("deque custom_mix_deques_t") {
        using type_t = example::deque::custom_mix_deques_t;
        check_5_custom<type_t>();
    }

    /////////////////////////////////////////////////////////////////////////////

    SECTION("set bool_sets_t") {
        using type_t = example::set::bool_sets_t;
        type_t data;

        example::generate<0>(512, data);

        static constexpr auto I = 0;
        auto& ref = data._0;
        test::cmp(std::get<I>(data), ref);
    }

    SECTION("set int_sets_t") {
        using type_t = example::set::int_sets_t;
        check_4_custom<type_t>();
    }

    SECTION("set signed_int_sets_t") {
        using type_t = example::set::signed_int_sets_t;
        check_4_custom<type_t>();
    }

    SECTION("set unsigned_int_sets_t") {
        using type_t = example::set::unsigned_int_sets_t;
        check_4_custom<type_t>();
    }

    SECTION("set char_sets_t") {
        using type_t = example::set::char_sets_t;
        check_4_custom<type_t>();
    }

    SECTION("set string_sets_t") {
        using type_t = example::set::string_sets_t;
        check_5_custom<type_t>();
    }

    SECTION("set custom_int_sets_t") {
        using type_t = example::set::custom_int_sets_t;
        check_5_custom<type_t>();
    }

    SECTION("set custom_signed_int_sets_t") {
        using type_t = example::set::custom_signed_int_sets_t;
        check_5_custom<type_t>();
    }

    SECTION("set custom_unsigned_int_sets_t") {
        using type_t = example::set::custom_unsigned_int_sets_t;
        check_5_custom<type_t>();
    }

    SECTION("set custom_char_sets_t") {
        using type_t = example::set::custom_char_sets_t;
        check_5_custom<type_t>();
    }

    SECTION("set custom_float_sets_t") {
        using type_t = example::set::custom_float_sets_t;
        check_5_custom<type_t>();
    }

    SECTION("set custom_mix_sets_t") {
        using type_t = example::set::custom_mix_sets_t;
        check_5_custom<type_t>();
    }

    /////////////////////////////////////////////////////////////////////////////

    SECTION("map bool_maps_t") {
        using type_t = example::map::bool_maps_t;
        type_t data;

        example::generate<0>(512, data);

        static constexpr auto I = 0;
        auto& ref = data._0;
        test::cmp(std::get<I>(data), ref);
    }

    SECTION("map int_maps_t") {
        using type_t = example::map::int_maps_t;
        check_4_custom<type_t>();
    }

    SECTION("map signed_int_maps_t") {
        using type_t = example::map::signed_int_maps_t;
        check_4_custom<type_t>();
    }

    SECTION("map unsigned_int_maps_t") {
        using type_t = example::map::unsigned_int_maps_t;
        check_4_custom<type_t>();
    }

    SECTION("map char_maps_t") {
        using type_t = example::map::char_maps_t;
        check_4_custom<type_t>();
    }

    SECTION("map string_maps_t") {
        using type_t = example::map::string_maps_t;
        check_5_custom<type_t>();
    }

    SECTION("map custom_int_maps_t") {
        using type_t = example::map::custom_int_maps_t;
        check_5_custom<type_t>();
    }

    SECTION("map custom_signed_int_maps_t") {
        using type_t = example::map::custom_signed_int_maps_t;
        check_5_custom<type_t>();
    }

    SECTION("map custom_unsigned_int_maps_t") {
        using type_t = example::map::custom_unsigned_int_maps_t;
        check_5_custom<type_t>();
    }

    SECTION("map custom_char_maps_t") {
        using type_t = example::map::custom_char_maps_t;
        check_5_custom<type_t>();
    }

    SECTION("map custom_float_maps_t") {
        using type_t = example::map::custom_float_maps_t;
        check_5_custom<type_t>();
    }

    SECTION("map custom_mix_maps_t") {
        using type_t = example::map::custom_mix_maps_t;
        check_5_custom<type_t>();
    }

    /////////////////////////////////////////////////////////////////////////////

    SECTION("unordered_map bool_unordered_maps_t") {
        using type_t = example::unordered_map::bool_unordered_maps_t;
        type_t data;

        example::generate<0>(512, data);

        static constexpr auto I = 0;
        auto& ref = data._0;
        test::cmp(std::get<I>(data), ref);
    }

    SECTION("unordered_map int_unordered_maps_t") {
        using type_t = example::unordered_map::int_unordered_maps_t;
        check_4_custom<type_t>();
    }

    SECTION("unordered_map signed_int_unordered_maps_t") {
        using type_t = example::unordered_map::signed_int_unordered_maps_t;
        check_4_custom<type_t>();
    }

    SECTION("unordered_map unsigned_int_unordered_maps_t") {
        using type_t = example::unordered_map::unsigned_int_unordered_maps_t;
        check_4_custom<type_t>();
    }

    SECTION("unordered_map char_unordered_maps_t") {
        using type_t = example::unordered_map::char_unordered_maps_t;
        check_4_custom<type_t>();
    }

    SECTION("unordered_map string_unordered_maps_t") {
        using type_t = example::unordered_map::string_unordered_maps_t;
        check_5_custom<type_t>();
    }

    SECTION("unordered_map custom_int_unordered_maps_t") {
        using type_t = example::unordered_map::custom_int_unordered_maps_t;
        check_5_custom<type_t>();
    }

    SECTION("unordered_map custom_signed_int_unordered_maps_t") {
        using type_t = example::unordered_map::custom_signed_int_unordered_maps_t;
        check_5_custom<type_t>();
    }

    SECTION("unordered_map custom_unsigned_int_unordered_maps_t") {
        using type_t = example::unordered_map::custom_unsigned_int_unordered_maps_t;
        check_5_custom<type_t>();
    }

    SECTION("unordered_map custom_char_unordered_maps_t") {
        using type_t = example::unordered_map::custom_char_unordered_maps_t;
        check_5_custom<type_t>();
    }

    SECTION("unordered_map custom_float_unordered_maps_t") {
        using type_t = example::unordered_map::custom_float_unordered_maps_t;
        check_5_custom<type_t>();
    }

    SECTION("unordered_map custom_mix_unordered_maps_t") {
        using type_t = example::unordered_map::custom_mix_unordered_maps_t;
        check_5_custom<type_t>();
    }
}
