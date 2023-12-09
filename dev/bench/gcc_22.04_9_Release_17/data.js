window.BENCHMARK_DATA = {
  "lastUpdate": 1702083123488,
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
      },
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
          "id": "d661ce52eef5dbad84699818ef2a482adbf7e5f8",
          "message": "Add more BMs and Fixes",
          "timestamp": "2023-12-09T03:49:20+03:00",
          "tree_id": "613bf928395c34e1ed6771def2c6aa8cfc3bb289",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d661ce52eef5dbad84699818ef2a482adbf7e5f8"
        },
        "date": 1702083123147,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1627.4209199690576,
            "unit": "ns/iter",
            "extra": "iterations: 436406\ncpu: 1627.385049701425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 18988.061088545783,
            "unit": "ns/iter",
            "extra": "iterations: 43085\ncpu: 18987.28791922943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 39777.485522955474,
            "unit": "ns/iter",
            "extra": "iterations: 20757\ncpu: 39775.16500457677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52263.21049999853,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52257.299999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 65821.80313891369,
            "unit": "ns/iter",
            "extra": "iterations: 13253\ncpu: 65819.80683618806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 82760.9430601585,
            "unit": "ns/iter",
            "extra": "iterations: 10555\ncpu: 82756.6650876362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 100500.6294917991,
            "unit": "ns/iter",
            "extra": "iterations: 8599\ncpu: 100496.04605186645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 114157.52763478748,
            "unit": "ns/iter",
            "extra": "iterations: 7382\ncpu: 114148.15768084527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 132768.89600245393,
            "unit": "ns/iter",
            "extra": "iterations: 6529\ncpu: 132761.9237249194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1393.3572349013982,
            "unit": "ns/iter",
            "extra": "iterations: 445438\ncpu: 1393.2488921017036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1149.13848183582,
            "unit": "ns/iter",
            "extra": "iterations: 608643\ncpu: 1149.0468139779796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1138.7394871778656,
            "unit": "ns/iter",
            "extra": "iterations: 616081\ncpu: 1138.7340301031825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1164.8992254915502,
            "unit": "ns/iter",
            "extra": "iterations: 599477\ncpu: 1164.8597027075275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2098.351578614364,
            "unit": "ns/iter",
            "extra": "iterations: 328706\ncpu: 2098.3432003066578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6175.508328360161,
            "unit": "ns/iter",
            "extra": "iterations: 132379\ncpu: 6175.368449678571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31671.18002367225,
            "unit": "ns/iter",
            "extra": "iterations: 26191\ncpu: 31671.032033904736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 27206.706535947975,
            "unit": "ns/iter",
            "extra": "iterations: 30600\ncpu: 27205.751633986954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 27835.82230777019,
            "unit": "ns/iter",
            "extra": "iterations: 29613\ncpu: 27834.5118697869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 27632.991914475675,
            "unit": "ns/iter",
            "extra": "iterations: 29559\ncpu: 27631.66548259414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 63946.655998256785,
            "unit": "ns/iter",
            "extra": "iterations: 13779\ncpu: 63945.59111691698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 686807.697424881,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 686768.5264663807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 520800.59799999394,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520779.10000000213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 518602.5630000017,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518591.7000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 514433.1629999783,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514382.60000000114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 368079.61276774795,
            "unit": "ns/iter",
            "extra": "iterations: 2381\ncpu: 368048.4670306596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 517923.3700000054,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517829.40000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 849.8200558364463,
            "unit": "ns/iter",
            "extra": "iterations: 825984\ncpu: 849.7334088795925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13147.803534673469,
            "unit": "ns/iter",
            "extra": "iterations: 64617\ncpu: 13146.735379234582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27508.666056328606,
            "unit": "ns/iter",
            "extra": "iterations: 30038\ncpu: 27506.06232106001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41173.0772424027,
            "unit": "ns/iter",
            "extra": "iterations: 20235\ncpu: 41170.447244872725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 55218.568908995956,
            "unit": "ns/iter",
            "extra": "iterations: 15252\ncpu: 55217.34854445325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 57637.68390000053,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57633.819999999854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 68823.70894811994,
            "unit": "ns/iter",
            "extra": "iterations: 12606\ncpu: 68821.56909408211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 80241.73348815771,
            "unit": "ns/iter",
            "extra": "iterations: 10765\ncpu: 80240.10218300048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 91121.90525871929,
            "unit": "ns/iter",
            "extra": "iterations: 9489\ncpu: 91116.45062704182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 651.3030188919122,
            "unit": "ns/iter",
            "extra": "iterations: 1070194\ncpu: 651.2997643417956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 594.4038787255786,
            "unit": "ns/iter",
            "extra": "iterations: 1174922\ncpu: 594.3585191187124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 599.7058548197817,
            "unit": "ns/iter",
            "extra": "iterations: 1168644\ncpu: 599.6485670572058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 593.695230208979,
            "unit": "ns/iter",
            "extra": "iterations: 1183490\ncpu: 593.649460493961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1104.1229146556707,
            "unit": "ns/iter",
            "extra": "iterations: 637125\ncpu: 1104.0353148911042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4519.661533458002,
            "unit": "ns/iter",
            "extra": "iterations: 175264\ncpu: 4519.292610005486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 21744.78634372718,
            "unit": "ns/iter",
            "extra": "iterations: 38356\ncpu: 21743.07539889462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 17385.33347936751,
            "unit": "ns/iter",
            "extra": "iterations: 47934\ncpu: 17383.871573413417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 17327.640416631977,
            "unit": "ns/iter",
            "extra": "iterations: 48292\ncpu: 17326.339766420922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 17694.718393359828,
            "unit": "ns/iter",
            "extra": "iterations: 47229\ncpu: 17693.410828092936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 45204.45971385655,
            "unit": "ns/iter",
            "extra": "iterations: 18592\ncpu: 45200.801419965355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 553571.5969868234,
            "unit": "ns/iter",
            "extra": "iterations: 1593\ncpu: 553556.8110483368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 437285.1499750893,
            "unit": "ns/iter",
            "extra": "iterations: 2007\ncpu: 437257.3492775281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 440480.18954249594,
            "unit": "ns/iter",
            "extra": "iterations: 1989\ncpu: 440438.51181498106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 439281.6573005523,
            "unit": "ns/iter",
            "extra": "iterations: 1993\ncpu: 439236.9292523817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 257241.35691318428,
            "unit": "ns/iter",
            "extra": "iterations: 3421\ncpu: 257218.35720549393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 440975.430583495,
            "unit": "ns/iter",
            "extra": "iterations: 1988\ncpu: 440935.0603621722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 629.7497017439632,
            "unit": "ns/iter",
            "extra": "iterations: 1110623\ncpu: 629.737993900721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5983.725806918898,
            "unit": "ns/iter",
            "extra": "iterations: 138056\ncpu: 5981.855913542346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11567.461781549679,
            "unit": "ns/iter",
            "extra": "iterations: 72465\ncpu: 11566.401711170924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17112.092512369734,
            "unit": "ns/iter",
            "extra": "iterations: 48707\ncpu: 17110.846490237578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22752.191007300793,
            "unit": "ns/iter",
            "extra": "iterations: 37119\ncpu: 22749.562218809864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27712.19340878806,
            "unit": "ns/iter",
            "extra": "iterations: 30040\ncpu: 27709.324234354288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33324.58867909461,
            "unit": "ns/iter",
            "extra": "iterations: 25051\ncpu: 33324.39822761561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39041.56098692095,
            "unit": "ns/iter",
            "extra": "iterations: 21562\ncpu: 39039.871069474146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 44728.55267748593,
            "unit": "ns/iter",
            "extra": "iterations: 18917\ncpu: 44726.87529735128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 585.1181637867269,
            "unit": "ns/iter",
            "extra": "iterations: 1200427\ncpu: 585.0989689502151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 440.5488004799072,
            "unit": "ns/iter",
            "extra": "iterations: 1596972\ncpu: 440.5419130704867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 436.0087190349541,
            "unit": "ns/iter",
            "extra": "iterations: 1602815\ncpu: 435.995607727655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 448.26232756866176,
            "unit": "ns/iter",
            "extra": "iterations: 1577947\ncpu: 448.2464873661773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 961.2515896011786,
            "unit": "ns/iter",
            "extra": "iterations: 722351\ncpu: 961.2047328791632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2461.649986123541,
            "unit": "ns/iter",
            "extra": "iterations: 324290\ncpu: 2461.584692713331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9529.184076019483,
            "unit": "ns/iter",
            "extra": "iterations: 84715\ncpu: 9528.861476716042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9493.557277589072,
            "unit": "ns/iter",
            "extra": "iterations: 86203\ncpu: 9493.326218345117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10323.054678067554,
            "unit": "ns/iter",
            "extra": "iterations: 80343\ncpu: 10322.848287965287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9921.098714060556,
            "unit": "ns/iter",
            "extra": "iterations: 82430\ncpu: 9920.942617978744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30699.682505803383,
            "unit": "ns/iter",
            "extra": "iterations: 26706\ncpu: 30699.135025836662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 272169.4263813512,
            "unit": "ns/iter",
            "extra": "iterations: 3131\ncpu: 272153.7527946321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 211249.0413487571,
            "unit": "ns/iter",
            "extra": "iterations: 4063\ncpu: 211241.25030765426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 214481.17524509854,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 214473.28431372528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 212577.1928536456,
            "unit": "ns/iter",
            "extra": "iterations: 4086\ncpu: 212567.9148311289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 109702.08648173924,
            "unit": "ns/iter",
            "extra": "iterations: 7967\ncpu: 109696.39764026705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 203035.7861150075,
            "unit": "ns/iter",
            "extra": "iterations: 4278\ncpu: 203026.20383356785 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}