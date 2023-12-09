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
    std::cout << "Serialized:\n" << data << std::endl;

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
}
