#include <iostream>

// conan
#include <catch2/catch_all.hpp>

#include <example/includes/integrals.hpp>
#include <example/includes/strings.hpp>
#include <example/includes/vectors.hpp>
#include <example/includes/lists.hpp>
#include <example/includes/deques.hpp>
#include <example/includes/sets.hpp>
#include <example/includes/maps.hpp>
#include <example/includes/unordered_maps.hpp>

#include "forward.hpp"

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
auto fill_4() -> T {
    T input;
    input._0 = test::gen<std::remove_reference_t<decltype(input._0)>>(32);
    input._1 = test::gen<std::remove_reference_t<decltype(input._1)>>(64);
    input._2 = test::gen<std::remove_reference_t<decltype(input._2)>>(128);
    input._3 = test::gen<std::remove_reference_t<decltype(input._3)>>(256);
    return input;
}

template<class T>
auto fill_5() -> T {
    auto input = fill_4<T>();
    input._4 = test::gen<std::remove_reference_t<decltype(input._4)>>(512);
    return input;
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
        check(fill_5<type_t>());
    }
}
