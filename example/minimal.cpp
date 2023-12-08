#include <fstream>

/*Here a custom class is described*/
#include "unit.hpp"

/*This include MUST be located AFTER all custom classes describtions*/
#include <jsonifyer/parser.hpp>

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
    const auto output = "{\n" + fmt::format
            ("\t\"_0\": {},\n\t\"_1\": {},\n\t\"_2\": {},\n\t\"_3\": {}\n",
             unit._0, unit._1, unit._2, unit._3) + "}";
    std::printf("%s\n", output.c_str());
    return 0;
}
