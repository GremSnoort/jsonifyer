window.BENCHMARK_DATA = {
  "lastUpdate": 1702083179749,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-8 18.04 Release c++-17": [
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
        "date": 1702079226395,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1448.6811119475656,
            "unit": "ns/iter",
            "extra": "iterations: 499448\ncpu: 1448.6851484038377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1170.8291747661938,
            "unit": "ns/iter",
            "extra": "iterations: 620406\ncpu: 1170.781230355606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1096.1030467971946,
            "unit": "ns/iter",
            "extra": "iterations: 638244\ncpu: 1096.0862930164642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1098.3322886572705,
            "unit": "ns/iter",
            "extra": "iterations: 636561\ncpu: 1098.2878310169808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2877.924098128755,
            "unit": "ns/iter",
            "extra": "iterations: 244658\ncpu: 2877.8543926624106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7301.383766662412,
            "unit": "ns/iter",
            "extra": "iterations: 113655\ncpu: 7301.101579340986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 41913.267086419975,
            "unit": "ns/iter",
            "extra": "iterations: 19694\ncpu: 41885.00558545753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 33520.218718168435,
            "unit": "ns/iter",
            "extra": "iterations: 24543\ncpu: 33518.81188118809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 34044.773998926765,
            "unit": "ns/iter",
            "extra": "iterations: 24199\ncpu: 34043.74974172484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 33928.17848380718,
            "unit": "ns/iter",
            "extra": "iterations: 24456\ncpu: 33927.96450768733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 80902.16202091023,
            "unit": "ns/iter",
            "extra": "iterations: 10906\ncpu: 80898.77131854025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 672585.2600000052,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 672550.1000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 536888.3340000253,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536826.8999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 541875.4130000138,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541860.7000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 541455.190000022,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541422.5000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 395574.00315457315,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 395554.93465525005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 550814.000999992,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 550786.6999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 714.0685072830915,
            "unit": "ns/iter",
            "extra": "iterations: 977064\ncpu: 714.052508331082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 568.9333094507998,
            "unit": "ns/iter",
            "extra": "iterations: 1236607\ncpu: 568.929013017071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 563.4427139972074,
            "unit": "ns/iter",
            "extra": "iterations: 1235904\ncpu: 563.4277419605417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 569.950118603948,
            "unit": "ns/iter",
            "extra": "iterations: 1225507\ncpu: 569.9461528983513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1531.8036398941235,
            "unit": "ns/iter",
            "extra": "iterations: 485124\ncpu: 1531.8077439994684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5382.753915307263,
            "unit": "ns/iter",
            "extra": "iterations: 147498\ncpu: 5382.788919171777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 28629.646032347475,
            "unit": "ns/iter",
            "extra": "iterations: 28997\ncpu: 28629.05817843229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 22710.25415702757,
            "unit": "ns/iter",
            "extra": "iterations: 36745\ncpu: 22710.306164103895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 22042.102085591952,
            "unit": "ns/iter",
            "extra": "iterations: 37831\ncpu: 22041.167296661435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 22493.218897045685,
            "unit": "ns/iter",
            "extra": "iterations: 37191\ncpu: 22492.654136753536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 56163.561775926704,
            "unit": "ns/iter",
            "extra": "iterations: 14415\ncpu: 56159.41727367325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 550830.1799746408,
            "unit": "ns/iter",
            "extra": "iterations: 1578\ncpu: 550811.2167300365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 456855.9340944549,
            "unit": "ns/iter",
            "extra": "iterations: 1927\ncpu: 456848.365334718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 456165.48412696406,
            "unit": "ns/iter",
            "extra": "iterations: 1890\ncpu: 456144.28571428615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 459536.8677002604,
            "unit": "ns/iter",
            "extra": "iterations: 1935\ncpu: 459531.52454780415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 275015.2890282186,
            "unit": "ns/iter",
            "extra": "iterations: 3190\ncpu: 274991.0658307213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 452691.7162935835,
            "unit": "ns/iter",
            "extra": "iterations: 1921\ncpu: 452676.3144195743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 635.8837762031948,
            "unit": "ns/iter",
            "extra": "iterations: 1095619\ncpu: 635.8500537139264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 521.4083954231772,
            "unit": "ns/iter",
            "extra": "iterations: 1342946\ncpu: 521.3914036752044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 486.8743954282526,
            "unit": "ns/iter",
            "extra": "iterations: 1441723\ncpu: 486.85246749895686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 499.1721407136116,
            "unit": "ns/iter",
            "extra": "iterations: 1399239\ncpu: 499.16075809779085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1202.9480408653758,
            "unit": "ns/iter",
            "extra": "iterations: 625761\ncpu: 1202.9143714613122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2708.7532840056406,
            "unit": "ns/iter",
            "extra": "iterations: 295980\ncpu: 2708.7593756334895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13220.673600098145,
            "unit": "ns/iter",
            "extra": "iterations: 64951\ncpu: 13220.105926005712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10973.567356992786,
            "unit": "ns/iter",
            "extra": "iterations: 74699\ncpu: 10973.441411531618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11157.387169801028,
            "unit": "ns/iter",
            "extra": "iterations: 73327\ncpu: 11157.015833185636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10618.34084692269,
            "unit": "ns/iter",
            "extra": "iterations: 76040\ncpu: 10618.36664913204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40359.062018526674,
            "unit": "ns/iter",
            "extra": "iterations: 20510\ncpu: 40357.454900048644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 300069.81852357794,
            "unit": "ns/iter",
            "extra": "iterations: 2926\ncpu: 300051.7088175005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 233158.21721748536,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 233144.80277185526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 228852.6120189684,
            "unit": "ns/iter",
            "extra": "iterations: 3794\ncpu: 228844.359515023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 225795.52213306096,
            "unit": "ns/iter",
            "extra": "iterations: 3863\ncpu: 225783.45845198105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 116353.43558282603,
            "unit": "ns/iter",
            "extra": "iterations: 7498\ncpu: 116348.42624699995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 214321.35243693998,
            "unit": "ns/iter",
            "extra": "iterations: 4083\ncpu: 214309.84570169094 ns\nthreads: 1"
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
        "date": 1702083178743,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1648.008232073449,
            "unit": "ns/iter",
            "extra": "iterations: 413869\ncpu: 1647.8926906823174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 20526.852672622546,
            "unit": "ns/iter",
            "extra": "iterations: 40522\ncpu: 20524.83835940971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 41944.8746103945,
            "unit": "ns/iter",
            "extra": "iterations: 19571\ncpu: 41942.64983904756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52284.97000000516,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52274.770000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 69537.97719921044,
            "unit": "ns/iter",
            "extra": "iterations: 12675\ncpu: 69534.21696252469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 87626.38516077418,
            "unit": "ns/iter",
            "extra": "iterations: 10014\ncpu: 87621.14040343519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 101702.33154506054,
            "unit": "ns/iter",
            "extra": "iterations: 8388\ncpu: 101697.50834525512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 118430.6965050441,
            "unit": "ns/iter",
            "extra": "iterations: 7239\ncpu: 118426.82690979424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 137506.74766791024,
            "unit": "ns/iter",
            "extra": "iterations: 6432\ncpu: 137495.50684079618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1453.5563505444118,
            "unit": "ns/iter",
            "extra": "iterations: 481628\ncpu: 1453.5494198842252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1211.0985943944725,
            "unit": "ns/iter",
            "extra": "iterations: 579181\ncpu: 1211.017453956537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1189.0650982280188,
            "unit": "ns/iter",
            "extra": "iterations: 589801\ncpu: 1189.005952855285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1214.8850564348195,
            "unit": "ns/iter",
            "extra": "iterations: 576683\ncpu: 1214.795823702102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2192.4356841406343,
            "unit": "ns/iter",
            "extra": "iterations: 319408\ncpu: 2192.287607073087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7774.1272737558065,
            "unit": "ns/iter",
            "extra": "iterations: 106047\ncpu: 7773.581525172803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 41232.782372304995,
            "unit": "ns/iter",
            "extra": "iterations: 20048\ncpu: 41231.14525139671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 32866.633655138074,
            "unit": "ns/iter",
            "extra": "iterations: 25274\ncpu: 32864.869035372314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 32532.722881288708,
            "unit": "ns/iter",
            "extra": "iterations: 25794\ncpu: 32530.879274249757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 32602.545171701422,
            "unit": "ns/iter",
            "extra": "iterations: 25713\ncpu: 32600.898378252274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 85827.18540145592,
            "unit": "ns/iter",
            "extra": "iterations: 10275\ncpu: 85823.42579075425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 642423.3490000119,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 642364.8000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 529408.7940000055,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529363.1000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 524680.108000041,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524663.1999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 517733.0220000158,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517679.4999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 366329.30217939604,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 366309.13663034426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 517992.01300002553,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517989.5000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 892.0963915336577,
            "unit": "ns/iter",
            "extra": "iterations: 784239\ncpu: 892.0450270899549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13867.249642892642,
            "unit": "ns/iter",
            "extra": "iterations: 60206\ncpu: 13867.016576420932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 29895.872701148728,
            "unit": "ns/iter",
            "extra": "iterations: 27840\ncpu: 29895.1939655173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 44212.80555852028,
            "unit": "ns/iter",
            "extra": "iterations: 18746\ncpu: 44212.167929158146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 58876.908353324136,
            "unit": "ns/iter",
            "extra": "iterations: 14174\ncpu: 58874.37561732739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 61378.263398599935,
            "unit": "ns/iter",
            "extra": "iterations: 13994\ncpu: 61376.768615120745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 72788.9429680245,
            "unit": "ns/iter",
            "extra": "iterations: 11853\ncpu: 72786.23977052228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 85115.72928935984,
            "unit": "ns/iter",
            "extra": "iterations: 10188\ncpu: 85112.14173537501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 95987.96878817893,
            "unit": "ns/iter",
            "extra": "iterations: 9003\ncpu: 95983.22781295079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 706.7794910274935,
            "unit": "ns/iter",
            "extra": "iterations: 990191\ncpu: 706.7752585107344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 582.035955861788,
            "unit": "ns/iter",
            "extra": "iterations: 1207842\ncpu: 581.9955755802467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 580.9314577287072,
            "unit": "ns/iter",
            "extra": "iterations: 1211165\ncpu: 580.9042533428579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 588.3871745882387,
            "unit": "ns/iter",
            "extra": "iterations: 1188110\ncpu: 588.3539402917223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1109.8247557054644,
            "unit": "ns/iter",
            "extra": "iterations: 631410\ncpu: 1109.7773237674407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5234.850200000096,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5234.6980000000085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 27457.564904996983,
            "unit": "ns/iter",
            "extra": "iterations: 31315\ncpu: 27456.27015807136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20966.77372575756,
            "unit": "ns/iter",
            "extra": "iterations: 39651\ncpu: 20965.9529393963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 21310.985748705476,
            "unit": "ns/iter",
            "extra": "iterations: 39014\ncpu: 21309.64269236688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21237.663165696154,
            "unit": "ns/iter",
            "extra": "iterations: 39132\ncpu: 21236.617090871907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 50428.67160000242,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50425.18999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 537336.3343558293,
            "unit": "ns/iter",
            "extra": "iterations: 1630\ncpu: 537315.3374233139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 458577.8552631532,
            "unit": "ns/iter",
            "extra": "iterations: 1976\ncpu: 458564.47368420975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 443207.8461538457,
            "unit": "ns/iter",
            "extra": "iterations: 1989\ncpu: 443187.38059326255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 445839.4892230557,
            "unit": "ns/iter",
            "extra": "iterations: 1995\ncpu: 445826.81704260496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 267621.3019202318,
            "unit": "ns/iter",
            "extra": "iterations: 3385\ncpu: 267607.0901033976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 442359.31738033786,
            "unit": "ns/iter",
            "extra": "iterations: 1985\ncpu: 442352.84634760633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 658.7888155936643,
            "unit": "ns/iter",
            "extra": "iterations: 1061764\ncpu: 658.752133242417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6175.243017410715,
            "unit": "ns/iter",
            "extra": "iterations: 133081\ncpu: 6174.9445826225865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11832.270928203237,
            "unit": "ns/iter",
            "extra": "iterations: 70491\ncpu: 11831.308961427778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17577.78823704457,
            "unit": "ns/iter",
            "extra": "iterations: 47029\ncpu: 17577.51812711309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23533.3320702808,
            "unit": "ns/iter",
            "extra": "iterations: 35628\ncpu: 23532.2555293589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 30666.94990008083,
            "unit": "ns/iter",
            "extra": "iterations: 28523\ncpu: 30665.757458892753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 35541.55112826001,
            "unit": "ns/iter",
            "extra": "iterations: 23842\ncpu: 35540.487375220255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40930.061124692795,
            "unit": "ns/iter",
            "extra": "iterations: 20450\ncpu: 40928.748166259094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 46673.52744736584,
            "unit": "ns/iter",
            "extra": "iterations: 17907\ncpu: 46671.854582006796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 669.3789271209357,
            "unit": "ns/iter",
            "extra": "iterations: 1045486\ncpu: 669.3672607763256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 538.4551164550853,
            "unit": "ns/iter",
            "extra": "iterations: 1312051\ncpu: 538.4269361480614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 519.8808630657778,
            "unit": "ns/iter",
            "extra": "iterations: 1350488\ncpu: 519.8654116141729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 523.0532813549214,
            "unit": "ns/iter",
            "extra": "iterations: 1340300\ncpu: 523.0393941654849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 994.9674826536134,
            "unit": "ns/iter",
            "extra": "iterations: 698704\ncpu: 994.9080010991828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2686.6853626270185,
            "unit": "ns/iter",
            "extra": "iterations: 298585\ncpu: 2686.5827151397416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13374.019747975277,
            "unit": "ns/iter",
            "extra": "iterations: 60867\ncpu: 13373.6261028144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10633.619350606463,
            "unit": "ns/iter",
            "extra": "iterations: 76225\ncpu: 10633.120367333595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10609.485928656486,
            "unit": "ns/iter",
            "extra": "iterations: 77036\ncpu: 10609.117815047335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10101.058087589392,
            "unit": "ns/iter",
            "extra": "iterations: 80809\ncpu: 10100.75610389931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 39818.008524371005,
            "unit": "ns/iter",
            "extra": "iterations: 20764\ncpu: 39816.995761895654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 272198.8104234532,
            "unit": "ns/iter",
            "extra": "iterations: 3070\ncpu: 272190.1302931594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 210397.64719157602,
            "unit": "ns/iter",
            "extra": "iterations: 3988\ncpu: 210389.61885656865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 205555.99900645306,
            "unit": "ns/iter",
            "extra": "iterations: 4026\ncpu: 205537.40685543884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 199893.53990946282,
            "unit": "ns/iter",
            "extra": "iterations: 4197\ncpu: 199881.93948058094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108317.97609364941,
            "unit": "ns/iter",
            "extra": "iterations: 8115\ncpu: 108312.58163893964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 200768.71694213946,
            "unit": "ns/iter",
            "extra": "iterations: 4356\ncpu: 200757.8053259893 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}