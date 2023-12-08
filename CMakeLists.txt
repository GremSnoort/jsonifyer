cmake_minimum_required(VERSION 3.15)

cmake_policy(SET CMP0048 NEW)
set(project jsonifyer)
PROJECT(${project} VERSION "${CMAKE_PROJECT_VERSION}" LANGUAGES CXX)

message(STATUS "CMAKE_C_COMPILER: " ${CMAKE_C_COMPILER})
message(STATUS "CMAKE_CXX_COMPILER: " ${CMAKE_CXX_COMPILER})

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED YES)
set(CMAKE_CXX_EXTENSIONS OFF)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

#if (${WITH_SANITIZER} MATCHES "ON")
#    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -fsanitize=address -fsanitize=leak -g")
#    set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -fsanitize=address -fsanitize=leak -g")
#endif()

option(CONAN_EXPERIMENTAL_INCLUDE "CONAN EXPERIMENT INCLUDE" ON)

set(CMAKE_VERBOSE_MAKEFILE ON)

add_compile_options(
#    -Werror
    -Wunused
#    -Wall
    -Wextra
    -Wpedantic
    -Wcast-align
    -Wcast-qual
    -Wconversion
    -Wctor-dtor-privacy
    -Wenum-compare
    -Wfloat-equal
    -Wnon-virtual-dtor
#    -Wold-style-cast
    -Woverloaded-virtual
    -Wredundant-decls
#    -Wsign-conversion
    -Wsign-promo
    -Wno-deprecated
    -Wno-deprecated-declarations
)

# configuration
#############################################################################################
#conan

if (CONAN_EXPERIMENTAL_INCLUDE)
    set(CONAN_SYSTEM_INCLUDES "On")
endif ()
include(conan.cmake)

conan_cmake_run(REQUIRES
    boost/1.81.0
    fmt/10.1.1
    catch2/3.3.2
    BASIC_SETUP CMAKE_TARGETS
    ENV CC=${CMAKE_C_COMPILER} CXX=${CMAKE_CXX_COMPILER}
    BUILD missing
)

# conan
#############################################################################################
# ccahe

find_program(CCACHE_FOUND ccache)
if (CCACHE_FOUND)
    message(STATUS "Using ccache: ${CCACHE_FOUND}")
    set_property(GLOBAL PROPERTY RULE_LAUNCH_COMPILE ${CCACHE_FOUND})
    set_property(GLOBAL PROPERTY RULE_LAUNCH_LINK ${CCACHE_FOUND})
    set(ENV{CCACHE_COMMENTS} "1")
endif (CCACHE_FOUND)

# ccahe
#############################################################################################

set(CMAKE_C_FLAGS_RELEASE "${CMAKE_C_FLAGS_RELEASE} -s")
set(CMAKE_CXX_FLAGS_RELEASE "${CMAKE_CXX_FLAGS_RELEASE} -s")

get_filename_component(ROOT_PATH "${CMAKE_CURRENT_LIST_DIR}/" ABSOLUTE)
include_directories(${ROOT_PATH})

include(CTest)
enable_testing()

add_subdirectory(example)
add_subdirectory(tests)
