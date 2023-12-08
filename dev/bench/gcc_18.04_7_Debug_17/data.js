window.BENCHMARK_DATA = {
  "lastUpdate": 1702079183601,
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
      }
    ]
  }
}