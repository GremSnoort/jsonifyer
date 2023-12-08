### PROJECT get_tests #################################################################################
set(project get_tests)

PROJECT(${project} VERSION "${CMAKE_PROJECT_VERSION}" LANGUAGES CXX)

set(${PROJECT_NAME}_HEADERS
)

set(${PROJECT_NAME}_SOURCES
    get.cpp
)

message(STATUS "PROJECT_NAME = ${PROJECT_NAME}")

add_executable(
    ${PROJECT_NAME}
    ${${PROJECT_NAME}_SOURCES}
    ${${PROJECT_NAME}_HEADERS}
)

target_link_libraries(
    ${PROJECT_NAME} PUBLIC
    CONAN_PKG::catch2
    CONAN_PKG::boost
    CONAN_PKG::fmt
)

include(CTest)
include(Catch)
catch_discover_tests(${PROJECT_NAME})

### PROJECT integrals_tests #################################################################################
set(project integrals_tests)

PROJECT(${project} VERSION "${CMAKE_PROJECT_VERSION}" LANGUAGES CXX)

set(${PROJECT_NAME}_HEADERS
)

set(${PROJECT_NAME}_SOURCES
    integrals.cpp
)

message(STATUS "PROJECT_NAME = ${PROJECT_NAME}")

add_executable(
    ${PROJECT_NAME}
    ${${PROJECT_NAME}_SOURCES}
    ${${PROJECT_NAME}_HEADERS}
)

target_link_libraries(
    ${PROJECT_NAME} PUBLIC
    CONAN_PKG::catch2
    CONAN_PKG::boost
    CONAN_PKG::fmt
)

include(CTest)
include(Catch)
catch_discover_tests(${PROJECT_NAME})

