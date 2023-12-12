### PROJECT benchmark_process #####################################################################
set(project benchmark_process)

PROJECT(${project} VERSION "${CMAKE_PROJECT_VERSION}" LANGUAGES CXX)

set(${PROJECT_NAME}_HEADERS
)

set(${PROJECT_NAME}_SOURCES
    process.cpp
)

message(STATUS "PROJECT_NAME = ${PROJECT_NAME}")

add_executable(
    ${PROJECT_NAME}
    ${${PROJECT_NAME}_SOURCES}
    ${${PROJECT_NAME}_HEADERS}
)

target_link_libraries(
    ${PROJECT_NAME} PUBLIC
    CONAN_PKG::boost
    CONAN_PKG::fmt
    CONAN_PKG::benchmark
)

### PROJECT benchmark_serialize ###################################################################
set(project benchmark_serialize)

PROJECT(${project} VERSION "${CMAKE_PROJECT_VERSION}" LANGUAGES CXX)

set(${PROJECT_NAME}_HEADERS
)

set(${PROJECT_NAME}_SOURCES
    serialize.cpp
)

message(STATUS "PROJECT_NAME = ${PROJECT_NAME}")

add_executable(
    ${PROJECT_NAME}
    ${${PROJECT_NAME}_SOURCES}
    ${${PROJECT_NAME}_HEADERS}
)

target_link_libraries(
    ${PROJECT_NAME} PUBLIC
    CONAN_PKG::boost
    CONAN_PKG::fmt
    CONAN_PKG::benchmark
)

### PROJECT benchmark_parse #######################################################################
set(project benchmark_parse)

PROJECT(${project} VERSION "${CMAKE_PROJECT_VERSION}" LANGUAGES CXX)

set(${PROJECT_NAME}_HEADERS
)

set(${PROJECT_NAME}_SOURCES
    parse.cpp
)

message(STATUS "PROJECT_NAME = ${PROJECT_NAME}")

add_executable(
    ${PROJECT_NAME}
    ${${PROJECT_NAME}_SOURCES}
    ${${PROJECT_NAME}_HEADERS}
)

target_link_libraries(
    ${PROJECT_NAME} PUBLIC
    CONAN_PKG::boost
    CONAN_PKG::fmt
    CONAN_PKG::benchmark
)
