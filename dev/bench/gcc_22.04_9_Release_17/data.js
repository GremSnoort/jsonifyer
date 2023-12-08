window.BENCHMARK_DATA = {
  "lastUpdate": 1702079205137,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-9 22.04 Release c++-17": [
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "e14131d2c0b6933d59d5ef852d1eb404bdeb503f",
          "message": "migrate to generate in exms and rn old code",
          "timestamp": "2023-12-09T02:43:57+03:00",
          "tree_id": "16ab7d6558ec956e05945d5b292b9221abcf5461",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/e14131d2c0b6933d59d5ef852d1eb404bdeb503f"
        },
        "date": 1702079204054,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1423.9528594388016,
            "unit": "ns/iter",
            "extra": "iterations: 500885\ncpu: 1423.9280473561796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1069.8091207529228,
            "unit": "ns/iter",
            "extra": "iterations: 649442\ncpu: 1069.747875868823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1061.318920856136,
            "unit": "ns/iter",
            "extra": "iterations: 661302\ncpu: 1061.2531037256806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1090.8022708979643,
            "unit": "ns/iter",
            "extra": "iterations: 639835\ncpu: 1090.7549602631927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2608.845257769886,
            "unit": "ns/iter",
            "extra": "iterations: 274101\ncpu: 2608.6369622876227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6317.3637698036355,
            "unit": "ns/iter",
            "extra": "iterations: 121948\ncpu: 6317.113851805683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 33199.40676183923,
            "unit": "ns/iter",
            "extra": "iterations: 24727\ncpu: 33198.143729526426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 29105.717271765745,
            "unit": "ns/iter",
            "extra": "iterations: 28370\ncpu: 29105.526965104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 29799.456369951014,
            "unit": "ns/iter",
            "extra": "iterations: 27355\ncpu: 29798.9142752696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 31740.91134066657,
            "unit": "ns/iter",
            "extra": "iterations: 26912\ncpu: 31740.290576694373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64155.16606204225,
            "unit": "ns/iter",
            "extra": "iterations: 13507\ncpu: 64151.29932627525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 690629.4626364512,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 690597.1452560871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 535139.4870000093,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535117.1000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 542188.4490000082,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542174.7000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 536134.4840000016,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536114.2999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 387246.75077193993,
            "unit": "ns/iter",
            "extra": "iterations: 2267\ncpu: 387237.6709307457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 555248.5839999974,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555232.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 648.6434324552575,
            "unit": "ns/iter",
            "extra": "iterations: 1075813\ncpu: 648.6328014255257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 528.2921830539817,
            "unit": "ns/iter",
            "extra": "iterations: 1354442\ncpu: 528.2649976890859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 513.5494850250533,
            "unit": "ns/iter",
            "extra": "iterations: 1362008\ncpu: 513.5307575285894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 519.5721817486908,
            "unit": "ns/iter",
            "extra": "iterations: 1295085\ncpu: 519.556785848032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1404.0915915737892,
            "unit": "ns/iter",
            "extra": "iterations: 506706\ncpu: 1404.0838277028502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4774.757116604782,
            "unit": "ns/iter",
            "extra": "iterations: 173046\ncpu: 4774.613108653193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24626.70586330779,
            "unit": "ns/iter",
            "extra": "iterations: 30887\ncpu: 24625.52530190699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20112.752425086244,
            "unit": "ns/iter",
            "extra": "iterations: 41648\ncpu: 20111.496350364996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 19938.457492588543,
            "unit": "ns/iter",
            "extra": "iterations: 41828\ncpu: 19937.764177106226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 20605.779017303215,
            "unit": "ns/iter",
            "extra": "iterations: 40338\ncpu: 20604.41023352667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 45827.13513803959,
            "unit": "ns/iter",
            "extra": "iterations: 18618\ncpu: 45824.87914921058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 570377.6113621758,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 570351.6462233681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 444645.65093860874,
            "unit": "ns/iter",
            "extra": "iterations: 1971\ncpu: 444605.0228310492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 449068.7290795068,
            "unit": "ns/iter",
            "extra": "iterations: 1912\ncpu: 449046.9665271962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 446572.588950838,
            "unit": "ns/iter",
            "extra": "iterations: 1973\ncpu: 446499.8479472893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 268007.6368325274,
            "unit": "ns/iter",
            "extra": "iterations: 3296\ncpu: 267984.22330097045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 448540.8546391774,
            "unit": "ns/iter",
            "extra": "iterations: 1940\ncpu: 448524.02061855415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 585.6050131500372,
            "unit": "ns/iter",
            "extra": "iterations: 1202278\ncpu: 585.5669820124774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 446.06047553543846,
            "unit": "ns/iter",
            "extra": "iterations: 1573132\ncpu: 446.0513167362915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 449.911354283688,
            "unit": "ns/iter",
            "extra": "iterations: 1557650\ncpu: 449.87853497255634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 449.64132163207455,
            "unit": "ns/iter",
            "extra": "iterations: 1560858\ncpu: 449.6188634712462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1101.2909519971681,
            "unit": "ns/iter",
            "extra": "iterations: 636483\ncpu: 1101.2082019472643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2318.8857601972077,
            "unit": "ns/iter",
            "extra": "iterations: 347252\ncpu: 2318.7739739439758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 8639.413445747206,
            "unit": "ns/iter",
            "extra": "iterations: 95599\ncpu: 8638.770280023864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9541.53219532046,
            "unit": "ns/iter",
            "extra": "iterations: 86115\ncpu: 9541.223944725112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10355.537157019444,
            "unit": "ns/iter",
            "extra": "iterations: 79487\ncpu: 10354.94357567906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10313.512982112146,
            "unit": "ns/iter",
            "extra": "iterations: 79494\ncpu: 10313.34188743799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30202.13344027983,
            "unit": "ns/iter",
            "extra": "iterations: 27428\ncpu: 30200.605220942158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 298057.34859876835,
            "unit": "ns/iter",
            "extra": "iterations: 2926\ncpu: 298049.89747095155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 227304.0455610511,
            "unit": "ns/iter",
            "extra": "iterations: 3841\ncpu: 227288.83103358615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 227156.83851736155,
            "unit": "ns/iter",
            "extra": "iterations: 3858\ncpu: 227140.9020217727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 224424.97607408726,
            "unit": "ns/iter",
            "extra": "iterations: 3887\ncpu: 224405.788525856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 115839.26460845236,
            "unit": "ns/iter",
            "extra": "iterations: 7547\ncpu: 115835.15304094365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 217136.57695185783,
            "unit": "ns/iter",
            "extra": "iterations: 4009\ncpu: 217118.10925417827 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}