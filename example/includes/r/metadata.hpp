#pragma once

#include <string>
#include <vector>

#include <jsonifyer/sbind.hpp>

namespace example::real {

    enum class mode_e : int8_t {
        MONO,
        ARRAY,
    };

    enum class ssl_t : int8_t {
        SSL_NONE = -1,
        SSL_0 = 0,
        SSL_1 = 1,
        SSL_2 = 2,
    };

    enum class ufc_t : int8_t {
        UFC_NONE = -1,
        UFC_0 = 0,
        UFC_1 = 1,
    };

    enum class prn_t : int8_t {
        PRN_NONE = -1,
        PRN_0 = 0,
        PRN_1 = 1,
    };

    template<mode_e mode>
    struct data_t;

    template<>
    struct data_t<mode_e::MONO> {
        int64_t object_id;
        int64_t packt_idx;
        int64_t timestamp;
        int64_t iunit_width;
        int64_t iunit_height;

        struct essential_t {
            struct bbox_t {
                int64_t x;
                int64_t y;
                int64_t width;
                int64_t height;

                using self_t = bbox_t;
                inline bool operator==(const self_t& other) const {
                    return
                            x == other.x &&
                            y == other.y &&
                            width == other.width &&
                            height == other.height;
                }

                inline bool operator==(self_t& other) const {
                    return operator==(static_cast<const self_t&>(other));
                }

                SBIND_ID_CLASS(int8_t, (x) (y) (width) (height) (COUNT))
            } bbox;
            double score;
            int8_t ssl_class;
            int8_t ufc_class;
            int8_t prn_class;

            using self_t = essential_t;
            inline bool operator==(const self_t& other) const {
                return
                        bbox == other.bbox &&
                        std::abs(score - other.score) < 0.0000001 &&
                        ssl_class == other.ssl_class &&
                        ufc_class == other.ufc_class &&
                        prn_class == other.prn_class;
            }

            inline bool operator==(self_t& other) const {
                return operator==(static_cast<const self_t&>(other));
            }

            SBIND_ID_CLASS(int8_t, (bbox) (score) (ssl_class) (ufc_class) (prn_class) (COUNT))
        };

        std::vector<essential_t> essentials;

        data_t() = default;
        data_t(data_t&&) = default;
        data_t(const data_t&) = default;
        data_t(data_t&) = default;
        ~data_t() = default;

        data_t& operator=(data_t&&) = default;
        data_t& operator=(const data_t&) = default;
        data_t& operator=(data_t&) = default;

        using self_t = data_t<mode_e::MONO>;
        inline bool operator==(const self_t& other) const {
            if (
                    object_id == other.object_id &&
                    packt_idx == other.packt_idx &&
                    timestamp == other.timestamp &&
                    iunit_width == other.iunit_width &&
                    iunit_height == other.iunit_height) {
                if (essentials.size() == other.essentials.size()) {
                    std::size_t i = 0;
                    for (const auto& d : other.essentials) {
                        if (!(d == essentials.at(i++))) {
                            return false;
                        }
                    }
                    return true;
                }
            }
            return false;
        }

        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        SBIND_ID_CLASS(int8_t, (object_id) (packt_idx) (timestamp) (iunit_width) (iunit_height) (essentials) (COUNT))

    };

    template<>
    struct data_t<mode_e::ARRAY> {
        std::vector<data_t<mode_e::MONO>> data;

        using self_t = data_t<mode_e::ARRAY>;
        inline bool operator==(const self_t& other) const {
            return data == other.data;
        }

        inline bool operator==(self_t& other) const {
            return operator==(static_cast<const self_t&>(other));
        }

        SBIND_ID_CLASS(int8_t, (data) (COUNT))
    };

}

namespace std {

    SBIND_IFACE(::example::real::data_t<example::real::mode_e::MONO>::essential_t::bbox_t, (x) (y) (width) (height))
    SBIND_IFACE(::example::real::data_t<example::real::mode_e::MONO>::essential_t, (bbox) (score) (ssl_class) (ufc_class) (prn_class))
    SBIND_IFACE(::example::real::data_t<example::real::mode_e::MONO>, (object_id) (packt_idx) (timestamp) (iunit_width) (iunit_height) (essentials))
    SBIND_IFACE(::example::real::data_t<example::real::mode_e::ARRAY>, (data))
}
