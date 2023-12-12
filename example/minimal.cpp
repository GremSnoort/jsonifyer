#include <fstream>

/*Here a custom class is described*/
#include "unit.hpp"

/*This include MUST be located AFTER all custom classes describtions*/
#include <jsonifyer/parser.hpp>
#include <jsonifyer/serializer.hpp>

int main(int argc, char* argv[]) {

    std::string filename = "unit.json";

    if (argc > 1) {
        filename = argv[1];
    }

    minimal::unit_t unit;
    std::string error;
    auto status = jsonifyer::parser::from_file(filename, unit, error);
    if (!status) {
        std::printf("%s:%d:%s :: !!! Failed to parse file `%s`: %s !!!\n", __FILE__, __LINE__, __func__, filename.c_str(), error.c_str());
        return -1;
    }
    const auto output = jsonifyer::serializer::serialize(unit);
    std::printf("%s\n", output.c_str());
    return 0;
}
