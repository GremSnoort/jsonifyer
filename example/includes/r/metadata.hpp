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

                DEFINE_ID_CLASS(int8_t, (x) (y) (width) (height) (COUNT))
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

            DEFINE_ID_CLASS(int8_t, (bbox) (score) (ssl_class) (ufc_class) (prn_class) (COUNT))
        };

        std::vector<essential_t> detections;

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
                if (detections.size() == other.detections.size()) {
                    std::size_t i = 0;
                    for (const auto& d : other.detections) {
                        if (!(d == detections.at(i++))) {
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

        DEFINE_ID_CLASS(int8_t, (object_id) (packt_idx) (timestamp) (iunit_width) (iunit_height) (detections) (COUNT))

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

        DEFINE_ID_CLASS(int8_t, (data) (COUNT))
    };

}

namespace std {

    TUPLE_GET_IMPL_HEADER(::example::real::data_t<example::real::mode_e::MONO>::essential_t::bbox_t) {
        using type_t = ::example::real::data_t<example::real::mode_e::MONO>::essential_t::bbox_t;
        TUPLE_BRANCH(x,         type_t) else
        TUPLE_BRANCH(y,         type_t) else
        TUPLE_BRANCH(width,     type_t) else
        TUPLE_BRANCH(height,    type_t)
    }

    TUPLE_DEFINE(::example::real::data_t<example::real::mode_e::MONO>::essential_t::bbox_t)

    TUPLE_ELEMENT(x, ::example::real::data_t<example::real::mode_e::MONO>::essential_t::bbox_t)
    TUPLE_ELEMENT(y, ::example::real::data_t<example::real::mode_e::MONO>::essential_t::bbox_t)
    TUPLE_ELEMENT(width, ::example::real::data_t<example::real::mode_e::MONO>::essential_t::bbox_t)
    TUPLE_ELEMENT(height, ::example::real::data_t<example::real::mode_e::MONO>::essential_t::bbox_t)

    TUPLE_GETS(::example::real::data_t<example::real::mode_e::MONO>::essential_t::bbox_t)

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::real::data_t<example::real::mode_e::MONO>::essential_t) {
        using type_t = ::example::real::data_t<example::real::mode_e::MONO>::essential_t;
        TUPLE_BRANCH(bbox,      type_t) else
        TUPLE_BRANCH(score,     type_t) else
        TUPLE_BRANCH(ssl_class, type_t) else
        TUPLE_BRANCH(ufc_class, type_t) else
        TUPLE_BRANCH(prn_class, type_t)
    }

    TUPLE_DEFINE(::example::real::data_t<example::real::mode_e::MONO>::essential_t)

    TUPLE_ELEMENT(bbox, ::example::real::data_t<example::real::mode_e::MONO>::essential_t)
    TUPLE_ELEMENT(score, ::example::real::data_t<example::real::mode_e::MONO>::essential_t)
    TUPLE_ELEMENT(ssl_class, ::example::real::data_t<example::real::mode_e::MONO>::essential_t)
    TUPLE_ELEMENT(ufc_class, ::example::real::data_t<example::real::mode_e::MONO>::essential_t)
    TUPLE_ELEMENT(prn_class, ::example::real::data_t<example::real::mode_e::MONO>::essential_t)

    TUPLE_GETS(::example::real::data_t<example::real::mode_e::MONO>::essential_t)

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::real::data_t<example::real::mode_e::MONO>) {
        using type_t = ::example::real::data_t<example::real::mode_e::MONO>;
        TUPLE_BRANCH(object_id,     type_t) else
        TUPLE_BRANCH(packt_idx,     type_t) else
        TUPLE_BRANCH(timestamp,     type_t) else
        TUPLE_BRANCH(iunit_width,   type_t) else
        TUPLE_BRANCH(iunit_height,  type_t) else
        TUPLE_BRANCH(detections,    type_t)
    }

    TUPLE_DEFINE(::example::real::data_t<example::real::mode_e::MONO>)

    TUPLE_ELEMENT(object_id, ::example::real::data_t<example::real::mode_e::MONO>)
    TUPLE_ELEMENT(packt_idx, ::example::real::data_t<example::real::mode_e::MONO>)
    TUPLE_ELEMENT(timestamp, ::example::real::data_t<example::real::mode_e::MONO>)
    TUPLE_ELEMENT(iunit_width, ::example::real::data_t<example::real::mode_e::MONO>)
    TUPLE_ELEMENT(iunit_height, ::example::real::data_t<example::real::mode_e::MONO>)
    TUPLE_ELEMENT(detections, ::example::real::data_t<example::real::mode_e::MONO>)

    TUPLE_GETS(::example::real::data_t<example::real::mode_e::MONO>)

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    TUPLE_GET_IMPL_HEADER(::example::real::data_t<example::real::mode_e::ARRAY>) {
        TUPLE_BRANCH(data, ::example::real::data_t<example::real::mode_e::ARRAY>)
    }

    TUPLE_DEFINE(::example::real::data_t<example::real::mode_e::ARRAY>)

    TUPLE_ELEMENT(data, ::example::real::data_t<example::real::mode_e::ARRAY>)

    TUPLE_GETS(::example::real::data_t<example::real::mode_e::ARRAY>)
}
