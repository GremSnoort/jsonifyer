#pragma once

// std
#include <typeinfo>
#include <fstream>
#include <sstream>

// internal
#include <jsonifyer/getters.hpp>

namespace jsonifyer::parser {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// \brief from_string
    /// \param data
    /// \param filename
    /// \param out_value
    /// \param error_msg
    /// \return
    ///
    template<typename Class>
    inline auto from_string(
            const std::string& data,
            const std::string& filename,
            Class& out_value,
            std::string& error_msg) noexcept -> bool {
        ::boost::json::error_code ec;
        const auto& jv = ::boost::json::parse(data, ec);
        if (ec.failed()) {
            error_msg = fmt::format("!!! Failed to parse JSON: '{}' :: {} !!!", data, ec.message());
            return false;
        }
        return jsonifyer::parser::get<0, Class>(
                    jv,
                    filename,
                    std::tuple_name<Class>::name,
                    out_value,
                    error_msg);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// \brief from_file
    /// \param filename
    /// \param out_value
    /// \param error_msg
    /// \return
    ///
    template<typename Class>
    inline auto from_file(
            const std::string& filename,
            Class& out_value,
            std::string& error_msg) noexcept -> bool {
        if (std::ifstream file(filename); file) {
            std::ostringstream ss;
            ss << file.rdbuf();
            auto data = ss.str();
            return jsonifyer::parser::from_string<Class>(data, filename, out_value, error_msg);
        } else {
            error_msg = fmt::format("!!! Failed to open file: '{}' !!!", filename);
        }
        return false;
    }

}
