window.BENCHMARK_DATA = {
  "lastUpdate": 1702083177249,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-7 18.04 Debug c++-17": [
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
        "date": 1702079183213,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12121.400328435908,
            "unit": "ns/iter",
            "extra": "iterations: 57850\ncpu: 12121.229040622302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9970.213645058262,
            "unit": "ns/iter",
            "extra": "iterations: 70575\ncpu: 9969.231314204748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9986.63780089294,
            "unit": "ns/iter",
            "extra": "iterations: 70083\ncpu: 9985.568540159526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10030.28002523908,
            "unit": "ns/iter",
            "extra": "iterations: 69733\ncpu: 10029.832360575341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 21109.692412670975,
            "unit": "ns/iter",
            "extra": "iterations: 34439\ncpu: 21109.05659281629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50717.02360000074,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50715.26000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 291071.65793056635,
            "unit": "ns/iter",
            "extra": "iterations: 2938\ncpu: 291070.7283866576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 234807.53463441736,
            "unit": "ns/iter",
            "extra": "iterations: 3638\ncpu: 234798.92798240788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 234026.45993984354,
            "unit": "ns/iter",
            "extra": "iterations: 3657\ncpu: 234023.7353021604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 235559.37093215194,
            "unit": "ns/iter",
            "extra": "iterations: 3626\ncpu: 235539.68560397116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 619836.2510489558,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 619801.0489510491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4114202.929515353,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4113992.951541854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3311223.1672597677,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3311180.7829181454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3315076.666666629,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3314944.680851059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3433927.759856708,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3433693.9068100364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1903017.0204918236,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1902929.0983606523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3218958.5694444547,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3218709.0277777663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5655.033397216906,
            "unit": "ns/iter",
            "extra": "iterations: 123663\ncpu: 5654.667928159598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4648.571063705908,
            "unit": "ns/iter",
            "extra": "iterations: 151132\ncpu: 4648.264431093351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5045.812239999918,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5045.285999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4755.270442735207,
            "unit": "ns/iter",
            "extra": "iterations: 111421\ncpu: 4755.203238168763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9760.447321029975,
            "unit": "ns/iter",
            "extra": "iterations: 73853\ncpu: 9759.702381758369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31596.760534783767,
            "unit": "ns/iter",
            "extra": "iterations: 26104\ncpu: 31595.80140974558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 142882.86194277788,
            "unit": "ns/iter",
            "extra": "iterations: 6012\ncpu: 142874.56753160356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 114279.46309443438,
            "unit": "ns/iter",
            "extra": "iterations: 7465\ncpu: 114275.59276624236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 113886.94674477384,
            "unit": "ns/iter",
            "extra": "iterations: 7511\ncpu: 113878.73785115166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 114710.32482308612,
            "unit": "ns/iter",
            "extra": "iterations: 7207\ncpu: 114707.97835437769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 309385.88126556535,
            "unit": "ns/iter",
            "extra": "iterations: 2813\ncpu: 309373.05367934535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2290853.323529379,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2290841.4215686284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1852668.2345924892,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1852638.5685884738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1862023.7793240917,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1861975.3479125232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1864961.45691384,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1864875.551102207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1102274.3803317267,
            "unit": "ns/iter",
            "extra": "iterations: 844\ncpu: 1102285.0710900424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1809024.6140350893,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1808960.233918129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6245.516298979477,
            "unit": "ns/iter",
            "extra": "iterations: 112369\ncpu: 6245.492084115746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5156.5682586408075,
            "unit": "ns/iter",
            "extra": "iterations: 135199\ncpu: 5156.503376504255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5179.725989447916,
            "unit": "ns/iter",
            "extra": "iterations: 136086\ncpu: 5179.676087180203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5179.862088556532,
            "unit": "ns/iter",
            "extra": "iterations: 135529\ncpu: 5179.798419526446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 11164.20626454731,
            "unit": "ns/iter",
            "extra": "iterations: 64873\ncpu: 11164.153037473234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27086.28127796384,
            "unit": "ns/iter",
            "extra": "iterations: 30173\ncpu: 27085.573194577966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 148883.94748778667,
            "unit": "ns/iter",
            "extra": "iterations: 5732\ncpu: 148882.01325889796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 120427.06790123522,
            "unit": "ns/iter",
            "extra": "iterations: 7128\ncpu: 120425.86980920334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 120550.94691756683,
            "unit": "ns/iter",
            "extra": "iterations: 7121\ncpu: 120550.90577166145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 121898.94962004058,
            "unit": "ns/iter",
            "extra": "iterations: 7106\ncpu: 121900.11258091794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 306601.07738094864,
            "unit": "ns/iter",
            "extra": "iterations: 3024\ncpu: 306599.9007936507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1843134.9266802592,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1843002.443991854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1448270.8864697304,
            "unit": "ns/iter",
            "extra": "iterations: 643\ncpu: 1448206.065318816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1444532.1317829222,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1444421.7054263563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1453495.687010933,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1453415.0234741766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 792051.6894781768,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 792001.4542343889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1396522.6992480983,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1396480.751879695 ns\nthreads: 1"
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
        "date": 1702083176634,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15503.030666518307,
            "unit": "ns/iter",
            "extra": "iterations: 44935\ncpu: 15502.574830310448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 131478.62984309776,
            "unit": "ns/iter",
            "extra": "iterations: 6246\ncpu: 131471.1975664425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 248716.70869067792,
            "unit": "ns/iter",
            "extra": "iterations: 3498\ncpu: 248708.7764436822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 362760.11998310377,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 362734.76975073916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 477251.8162816301,
            "unit": "ns/iter",
            "extra": "iterations: 1818\ncpu: 477217.821782178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 591288.5861344584,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 591250.4201680674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 569500.1560000037,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569454.2999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 662691.5927797852,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 662672.7797833937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 752695.1676205903,
            "unit": "ns/iter",
            "extra": "iterations: 1223\ncpu: 752669.6647587898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11991.256742381891,
            "unit": "ns/iter",
            "extra": "iterations: 58288\ncpu: 11991.03760636838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9915.334534211082,
            "unit": "ns/iter",
            "extra": "iterations: 70504\ncpu: 9914.982128673548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9880.676807211743,
            "unit": "ns/iter",
            "extra": "iterations: 70772\ncpu: 9880.194144576953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9939.629155139259,
            "unit": "ns/iter",
            "extra": "iterations: 70485\ncpu: 9939.328935234451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16808.430639641167,
            "unit": "ns/iter",
            "extra": "iterations: 41789\ncpu: 16807.312929239735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57684.81385189878,
            "unit": "ns/iter",
            "extra": "iterations: 14193\ncpu: 57683.89346861131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 282569.0415567188,
            "unit": "ns/iter",
            "extra": "iterations: 3032\ncpu: 282561.87335092324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 222302.0484673812,
            "unit": "ns/iter",
            "extra": "iterations: 3817\ncpu: 222298.32329054154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 220253.07346368968,
            "unit": "ns/iter",
            "extra": "iterations: 3580\ncpu: 220242.9888268154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 220077.83479834977,
            "unit": "ns/iter",
            "extra": "iterations: 3868\ncpu: 220074.61220268917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 622306.4365904361,
            "unit": "ns/iter",
            "extra": "iterations: 1443\ncpu: 622296.3270963272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3974851.5489362306,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3974636.1702127694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3299783.830449869,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3299661.937716263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3228205.804878152,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3228065.853658535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3236038.4131945428,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3235943.4027777743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1842673.08910896,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1842662.9702970295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3135001.760942605,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3134782.4915824947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7501.942262297265,
            "unit": "ns/iter",
            "extra": "iterations: 94046\ncpu: 7501.829955553643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 73404.51708447815,
            "unit": "ns/iter",
            "extra": "iterations: 11648\ncpu: 73403.31387362638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 148551.58592497377,
            "unit": "ns/iter",
            "extra": "iterations: 6238\ncpu: 148549.3908303945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 206982.620229004,
            "unit": "ns/iter",
            "extra": "iterations: 4192\ncpu: 206978.81679389265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 272763.6561811868,
            "unit": "ns/iter",
            "extra": "iterations: 3179\ncpu: 272688.4240327147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 338751.8483670171,
            "unit": "ns/iter",
            "extra": "iterations: 2572\ncpu: 338731.95956454077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 404321.07335189433,
            "unit": "ns/iter",
            "extra": "iterations: 2154\ncpu: 404313.09192200575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 471469.2825499793,
            "unit": "ns/iter",
            "extra": "iterations: 1851\ncpu: 471456.34792004264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 535101.170761668,
            "unit": "ns/iter",
            "extra": "iterations: 1628\ncpu: 535082.6167076151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5516.686699989721,
            "unit": "ns/iter",
            "extra": "iterations: 126639\ncpu: 5516.649689274275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4502.476419202499,
            "unit": "ns/iter",
            "extra": "iterations: 153854\ncpu: 4502.341830566628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4509.429710565082,
            "unit": "ns/iter",
            "extra": "iterations: 155130\ncpu: 4509.325082189133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4491.744426587824,
            "unit": "ns/iter",
            "extra": "iterations: 155560\ncpu: 4491.422602211357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7704.732652541301,
            "unit": "ns/iter",
            "extra": "iterations: 90287\ncpu: 7704.096935328502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31408.458341283476,
            "unit": "ns/iter",
            "extra": "iterations: 26201\ncpu: 31406.820350368387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 131840.8205485879,
            "unit": "ns/iter",
            "extra": "iterations: 6453\ncpu: 131834.41810010813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 105887.9677660217,
            "unit": "ns/iter",
            "extra": "iterations: 8035\ncpu: 105880.69695084008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 105342.15163528512,
            "unit": "ns/iter",
            "extra": "iterations: 8072\ncpu: 105340.2998017839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 108000.1691643324,
            "unit": "ns/iter",
            "extra": "iterations: 7874\ncpu: 107996.60909321818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 298532.5949105879,
            "unit": "ns/iter",
            "extra": "iterations: 2908\ncpu: 298527.6478679505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2170951.470862473,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2170845.454545455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1803153.202312101,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1803109.055876678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1794383.3378118908,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1794290.211132449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1787527.109405017,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1787406.9097888637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1058171.3061224567,
            "unit": "ns/iter",
            "extra": "iterations: 882\ncpu: 1058129.0249433164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1735368.7126865608,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1735234.7014925382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7771.350308436878,
            "unit": "ns/iter",
            "extra": "iterations: 90132\ncpu: 7771.201127235611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57479.90390000268,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57475.069999999556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 105919.79471670004,
            "unit": "ns/iter",
            "extra": "iterations: 8101\ncpu: 105910.89988890225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 155059.33750670234,
            "unit": "ns/iter",
            "extra": "iterations: 5591\ncpu: 155051.47558576195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 202811.66619947547,
            "unit": "ns/iter",
            "extra": "iterations: 4281\ncpu: 202800.65405278996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 250186.53783939237,
            "unit": "ns/iter",
            "extra": "iterations: 3462\ncpu: 250173.57019064104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 298286.57500858314,
            "unit": "ns/iter",
            "extra": "iterations: 2913\ncpu: 298263.5770683164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 346886.7294820739,
            "unit": "ns/iter",
            "extra": "iterations: 2510\ncpu: 346857.25099601503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 394906.3693284889,
            "unit": "ns/iter",
            "extra": "iterations: 2204\ncpu: 394885.39019963413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6624.157663707205,
            "unit": "ns/iter",
            "extra": "iterations: 110945\ncpu: 6624.033530127479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5271.96018907004,
            "unit": "ns/iter",
            "extra": "iterations: 133707\ncpu: 5271.614799524334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5340.055190560416,
            "unit": "ns/iter",
            "extra": "iterations: 120854\ncpu: 5340.0168798715495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5185.17124337952,
            "unit": "ns/iter",
            "extra": "iterations: 134995\ncpu: 5185.086855068703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8829.639911886383,
            "unit": "ns/iter",
            "extra": "iterations: 78989\ncpu: 8829.120510450988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26292.62369732729,
            "unit": "ns/iter",
            "extra": "iterations: 30898\ncpu: 26292.426694284473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 150354.09043204316,
            "unit": "ns/iter",
            "extra": "iterations: 5717\ncpu: 150338.06192058788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 117027.97129320331,
            "unit": "ns/iter",
            "extra": "iterations: 7176\ncpu: 117026.30992196206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 114001.46981234413,
            "unit": "ns/iter",
            "extra": "iterations: 7354\ncpu: 114000.55751971753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 110617.96499999476,
            "unit": "ns/iter",
            "extra": "iterations: 7600\ncpu: 110614.6842105273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 323013.6016684087,
            "unit": "ns/iter",
            "extra": "iterations: 2877\ncpu: 323005.1790059077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1812428.2156862796,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1812385.8823529407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1432613.9182098582,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1432588.8888888885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1432378.979999997,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1432354.7692307688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1425401.392638018,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1425363.3435582754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 789069.0033641431,
            "unit": "ns/iter",
            "extra": "iterations: 1189\ncpu: 789057.1068124475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1381277.5735512455,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1381204.4576523015 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}