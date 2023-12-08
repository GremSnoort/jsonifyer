#include <iostream>

// conan
#include <catch2/catch_all.hpp>

#include <example/includes/integrals.hpp>

#include <jsonifyer/parser.hpp>

TEST_CASE("parser test") {

    SECTION("integral ints_t") {
        using type_t = example::integral::ints_t;
        type_t obj;

        std::string data = "{" + fmt::format
                ("\"_0\": {},\"_1\": {},\"_2\": {},\"_3\": {},\"_4\": {}",
                 INT_MAX, INT_MAX -1, INT_MAX -2, INT_MAX -3, INT_MAX -4) + "}";

        std::string error;
        auto ret = jsonifyer::parser::from_string<type_t>(data, __func__, obj, error);
        if (!ret) {
            std::cerr << fmt::format("{}:{}:{} !!! Erorr: {} !!!", __FILE__, __LINE__, __func__, error) << std::endl;
        }
        REQUIRE(ret == true);

        REQUIRE(obj._0 == INT_MAX);
        REQUIRE(obj._1 == INT_MAX -1);
        REQUIRE(obj._2 == INT_MAX -2);
        REQUIRE(obj._3 == INT_MAX -3);
        REQUIRE(obj._4 == INT_MAX -4);

    }

}
