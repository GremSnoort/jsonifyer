window.BENCHMARK_DATA = {
  "lastUpdate": 1702079196282,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-10 20.04 Release c++-17": [
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
        "date": 1702079195051,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1314.2999784199967,
            "unit": "ns/iter",
            "extra": "iterations: 556070\ncpu: 1314.2023486251733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1011.1374722711201,
            "unit": "ns/iter",
            "extra": "iterations: 698279\ncpu: 1011.1171895474445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1001.7159186618414,
            "unit": "ns/iter",
            "extra": "iterations: 695762\ncpu: 1001.6971320652752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1010.6708728444551,
            "unit": "ns/iter",
            "extra": "iterations: 692632\ncpu: 1010.6060649811155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2621.283799762047,
            "unit": "ns/iter",
            "extra": "iterations: 270638\ncpu: 2621.1311789179645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6125.161459038904,
            "unit": "ns/iter",
            "extra": "iterations: 132882\ncpu: 6124.897277283607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 33630.04169881064,
            "unit": "ns/iter",
            "extra": "iterations: 24629\ncpu: 33628.90494944983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 29719.395800545008,
            "unit": "ns/iter",
            "extra": "iterations: 26051\ncpu: 29718.920578864516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 29919.587360329482,
            "unit": "ns/iter",
            "extra": "iterations: 28102\ncpu: 29911.518753113673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29544.589525367555,
            "unit": "ns/iter",
            "extra": "iterations: 27495\ncpu: 29544.328059647236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64123.56846351206,
            "unit": "ns/iter",
            "extra": "iterations: 13635\ncpu: 64121.327466079994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 632871.7460000064,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 632829.7000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 534822.8840000217,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534784.7999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 512196.6130000146,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512185.3000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 510636.369999986,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510601.6999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 364977.3183932297,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 364961.01479915465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 511447.6409999895,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511443.3000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 652.7982964926166,
            "unit": "ns/iter",
            "extra": "iterations: 1059109\ncpu: 652.7584035259831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 542.9772088100747,
            "unit": "ns/iter",
            "extra": "iterations: 1279354\ncpu: 542.9558980547988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 517.0320904604885,
            "unit": "ns/iter",
            "extra": "iterations: 1355730\ncpu: 517.0196130497948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 531.6402896445276,
            "unit": "ns/iter",
            "extra": "iterations: 1300905\ncpu: 531.6355921454671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1337.9910172459847,
            "unit": "ns/iter",
            "extra": "iterations: 525340\ncpu: 1337.956180759123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4319.128341288778,
            "unit": "ns/iter",
            "extra": "iterations: 184360\ncpu: 4319.090366673894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24201.607890263298,
            "unit": "ns/iter",
            "extra": "iterations: 34118\ncpu: 24200.923266311027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 19360.470613057958,
            "unit": "ns/iter",
            "extra": "iterations: 42655\ncpu: 19360.072676122385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 18631.956469622073,
            "unit": "ns/iter",
            "extra": "iterations: 45049\ncpu: 18631.277053874634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 19349.740923626607,
            "unit": "ns/iter",
            "extra": "iterations: 42528\ncpu: 19349.301636568827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 44152.34595625214,
            "unit": "ns/iter",
            "extra": "iterations: 18881\ncpu: 44151.34261956462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 531872.2439467177,
            "unit": "ns/iter",
            "extra": "iterations: 1652\ncpu: 531853.6924939468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 434748.2229362331,
            "unit": "ns/iter",
            "extra": "iterations: 2023\ncpu: 434740.53386060236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 431447.6015151436,
            "unit": "ns/iter",
            "extra": "iterations: 1980\ncpu: 431422.3737373742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 429896.53385672375,
            "unit": "ns/iter",
            "extra": "iterations: 2038\ncpu: 429877.4288518156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 256371.397447056,
            "unit": "ns/iter",
            "extra": "iterations: 3447\ncpu: 256362.22802436847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 432506.9536260539,
            "unit": "ns/iter",
            "extra": "iterations: 2027\ncpu: 432480.75974346255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 552.0120630575345,
            "unit": "ns/iter",
            "extra": "iterations: 1259548\ncpu: 551.9892850451098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 426.5185949005089,
            "unit": "ns/iter",
            "extra": "iterations: 1643300\ncpu: 426.49656179638436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 433.28399263311104,
            "unit": "ns/iter",
            "extra": "iterations: 1616968\ncpu: 433.2803122881832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 431.88586379413533,
            "unit": "ns/iter",
            "extra": "iterations: 1618829\ncpu: 431.87890753130745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1064.6835901220047,
            "unit": "ns/iter",
            "extra": "iterations: 670785\ncpu: 1064.674224975208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2498.408929475802,
            "unit": "ns/iter",
            "extra": "iterations: 319862\ncpu: 2498.3871169441754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9937.102319753756,
            "unit": "ns/iter",
            "extra": "iterations: 86992\ncpu: 9936.752804855625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10206.502624459057,
            "unit": "ns/iter",
            "extra": "iterations: 80207\ncpu: 10205.954592491875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10285.67081164919,
            "unit": "ns/iter",
            "extra": "iterations: 79936\ncpu: 10285.166883506847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10184.261795324024,
            "unit": "ns/iter",
            "extra": "iterations: 80498\ncpu: 10183.85674178235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 32066.2153284669,
            "unit": "ns/iter",
            "extra": "iterations: 26030\ncpu: 32064.233576642302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 269863.91664074844,
            "unit": "ns/iter",
            "extra": "iterations: 3215\ncpu: 269847.93157076085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 206443.85602836678,
            "unit": "ns/iter",
            "extra": "iterations: 4230\ncpu: 206434.58628841554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 205172.28993097058,
            "unit": "ns/iter",
            "extra": "iterations: 4201\ncpu: 205166.0080933107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 206124.79175500837,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 206121.46054181442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 112760.06007752287,
            "unit": "ns/iter",
            "extra": "iterations: 7740\ncpu: 112756.00775193804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 197000.00498865722,
            "unit": "ns/iter",
            "extra": "iterations: 4410\ncpu: 196996.07709750606 ns\nthreads: 1"
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
          "id": "e14131d2c0b6933d59d5ef852d1eb404bdeb503f",
          "message": "migrate to generate in exms and rn old code",
          "timestamp": "2023-12-09T02:43:57+03:00",
          "tree_id": "16ab7d6558ec956e05945d5b292b9221abcf5461",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/e14131d2c0b6933d59d5ef852d1eb404bdeb503f"
        },
        "date": 1702079195051,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1314.2999784199967,
            "unit": "ns/iter",
            "extra": "iterations: 556070\ncpu: 1314.2023486251733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1011.1374722711201,
            "unit": "ns/iter",
            "extra": "iterations: 698279\ncpu: 1011.1171895474445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1001.7159186618414,
            "unit": "ns/iter",
            "extra": "iterations: 695762\ncpu: 1001.6971320652752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1010.6708728444551,
            "unit": "ns/iter",
            "extra": "iterations: 692632\ncpu: 1010.6060649811155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2621.283799762047,
            "unit": "ns/iter",
            "extra": "iterations: 270638\ncpu: 2621.1311789179645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6125.161459038904,
            "unit": "ns/iter",
            "extra": "iterations: 132882\ncpu: 6124.897277283607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 33630.04169881064,
            "unit": "ns/iter",
            "extra": "iterations: 24629\ncpu: 33628.90494944983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 29719.395800545008,
            "unit": "ns/iter",
            "extra": "iterations: 26051\ncpu: 29718.920578864516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 29919.587360329482,
            "unit": "ns/iter",
            "extra": "iterations: 28102\ncpu: 29911.518753113673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29544.589525367555,
            "unit": "ns/iter",
            "extra": "iterations: 27495\ncpu: 29544.328059647236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64123.56846351206,
            "unit": "ns/iter",
            "extra": "iterations: 13635\ncpu: 64121.327466079994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 632871.7460000064,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 632829.7000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 534822.8840000217,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534784.7999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 512196.6130000146,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512185.3000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 510636.369999986,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510601.6999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 364977.3183932297,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 364961.01479915465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 511447.6409999895,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511443.3000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 652.7982964926166,
            "unit": "ns/iter",
            "extra": "iterations: 1059109\ncpu: 652.7584035259831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 542.9772088100747,
            "unit": "ns/iter",
            "extra": "iterations: 1279354\ncpu: 542.9558980547988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 517.0320904604885,
            "unit": "ns/iter",
            "extra": "iterations: 1355730\ncpu: 517.0196130497948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 531.6402896445276,
            "unit": "ns/iter",
            "extra": "iterations: 1300905\ncpu: 531.6355921454671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1337.9910172459847,
            "unit": "ns/iter",
            "extra": "iterations: 525340\ncpu: 1337.956180759123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4319.128341288778,
            "unit": "ns/iter",
            "extra": "iterations: 184360\ncpu: 4319.090366673894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24201.607890263298,
            "unit": "ns/iter",
            "extra": "iterations: 34118\ncpu: 24200.923266311027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 19360.470613057958,
            "unit": "ns/iter",
            "extra": "iterations: 42655\ncpu: 19360.072676122385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 18631.956469622073,
            "unit": "ns/iter",
            "extra": "iterations: 45049\ncpu: 18631.277053874634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 19349.740923626607,
            "unit": "ns/iter",
            "extra": "iterations: 42528\ncpu: 19349.301636568827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 44152.34595625214,
            "unit": "ns/iter",
            "extra": "iterations: 18881\ncpu: 44151.34261956462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 531872.2439467177,
            "unit": "ns/iter",
            "extra": "iterations: 1652\ncpu: 531853.6924939468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 434748.2229362331,
            "unit": "ns/iter",
            "extra": "iterations: 2023\ncpu: 434740.53386060236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 431447.6015151436,
            "unit": "ns/iter",
            "extra": "iterations: 1980\ncpu: 431422.3737373742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 429896.53385672375,
            "unit": "ns/iter",
            "extra": "iterations: 2038\ncpu: 429877.4288518156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 256371.397447056,
            "unit": "ns/iter",
            "extra": "iterations: 3447\ncpu: 256362.22802436847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 432506.9536260539,
            "unit": "ns/iter",
            "extra": "iterations: 2027\ncpu: 432480.75974346255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 552.0120630575345,
            "unit": "ns/iter",
            "extra": "iterations: 1259548\ncpu: 551.9892850451098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 426.5185949005089,
            "unit": "ns/iter",
            "extra": "iterations: 1643300\ncpu: 426.49656179638436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 433.28399263311104,
            "unit": "ns/iter",
            "extra": "iterations: 1616968\ncpu: 433.2803122881832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 431.88586379413533,
            "unit": "ns/iter",
            "extra": "iterations: 1618829\ncpu: 431.87890753130745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1064.6835901220047,
            "unit": "ns/iter",
            "extra": "iterations: 670785\ncpu: 1064.674224975208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2498.408929475802,
            "unit": "ns/iter",
            "extra": "iterations: 319862\ncpu: 2498.3871169441754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9937.102319753756,
            "unit": "ns/iter",
            "extra": "iterations: 86992\ncpu: 9936.752804855625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10206.502624459057,
            "unit": "ns/iter",
            "extra": "iterations: 80207\ncpu: 10205.954592491875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10285.67081164919,
            "unit": "ns/iter",
            "extra": "iterations: 79936\ncpu: 10285.166883506847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10184.261795324024,
            "unit": "ns/iter",
            "extra": "iterations: 80498\ncpu: 10183.85674178235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 32066.2153284669,
            "unit": "ns/iter",
            "extra": "iterations: 26030\ncpu: 32064.233576642302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 269863.91664074844,
            "unit": "ns/iter",
            "extra": "iterations: 3215\ncpu: 269847.93157076085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 206443.85602836678,
            "unit": "ns/iter",
            "extra": "iterations: 4230\ncpu: 206434.58628841554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 205172.28993097058,
            "unit": "ns/iter",
            "extra": "iterations: 4201\ncpu: 205166.0080933107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 206124.79175500837,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 206121.46054181442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 112760.06007752287,
            "unit": "ns/iter",
            "extra": "iterations: 7740\ncpu: 112756.00775193804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 197000.00498865722,
            "unit": "ns/iter",
            "extra": "iterations: 4410\ncpu: 196996.07709750606 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}