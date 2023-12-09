window.BENCHMARK_DATA = {
  "lastUpdate": 1702083180633,
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
        "date": 1702083180184,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1534.619748570965,
            "unit": "ns/iter",
            "extra": "iterations: 456590\ncpu: 1533.473794870672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 18310.14140087502,
            "unit": "ns/iter",
            "extra": "iterations: 35021\ncpu: 18309.788412666694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 38412.96002957286,
            "unit": "ns/iter",
            "extra": "iterations: 21641\ncpu: 38412.43935123148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 56648.37136165833,
            "unit": "ns/iter",
            "extra": "iterations: 14945\ncpu: 56646.758113081305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 61750.1566000044,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61747.48000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 79886.77098267239,
            "unit": "ns/iter",
            "extra": "iterations: 11021\ncpu: 79882.9235096634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 100689.73228699571,
            "unit": "ns/iter",
            "extra": "iterations: 8920\ncpu: 100687.42152466376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 108640.61872175822,
            "unit": "ns/iter",
            "extra": "iterations: 7745\ncpu: 108634.77081988384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 124781.35860655797,
            "unit": "ns/iter",
            "extra": "iterations: 6832\ncpu: 124777.2394613583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1326.372651981626,
            "unit": "ns/iter",
            "extra": "iterations: 541414\ncpu: 1326.3768576357459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1060.1746608330366,
            "unit": "ns/iter",
            "extra": "iterations: 652997\ncpu: 1060.184503144731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1054.8275176545133,
            "unit": "ns/iter",
            "extra": "iterations: 660456\ncpu: 1054.8374153615077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1052.0310536740014,
            "unit": "ns/iter",
            "extra": "iterations: 675057\ncpu: 1052.0253845230836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2019.5322887292607,
            "unit": "ns/iter",
            "extra": "iterations: 343990\ncpu: 2019.47731038693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6143.34290805336,
            "unit": "ns/iter",
            "extra": "iterations: 135252\ncpu: 6143.204536716646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30516.28846583512,
            "unit": "ns/iter",
            "extra": "iterations: 26842\ncpu: 30515.65084568963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 26834.907429646184,
            "unit": "ns/iter",
            "extra": "iterations: 30809\ncpu: 26834.463955337684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 26732.205733341958,
            "unit": "ns/iter",
            "extra": "iterations: 31186\ncpu: 26731.65202334386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 26448.049336973607,
            "unit": "ns/iter",
            "extra": "iterations: 30768\ncpu: 26447.897165886643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 63774.40310300182,
            "unit": "ns/iter",
            "extra": "iterations: 13922\ncpu: 63773.825599769974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 601983.921999988,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 601977.2000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 608698.1367461333,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 608687.1669004228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 634980.4023464567,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 634966.3216011048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 608179.7325418752,
            "unit": "ns/iter",
            "extra": "iterations: 1432\ncpu: 608149.930167596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 341100.9068346722,
            "unit": "ns/iter",
            "extra": "iterations: 2619\ncpu: 341099.3127147761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 605518.4338184472,
            "unit": "ns/iter",
            "extra": "iterations: 1443\ncpu: 605516.9785169797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 800.8400692366772,
            "unit": "ns/iter",
            "extra": "iterations: 865437\ncpu: 800.8357627418254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12345.867665933592,
            "unit": "ns/iter",
            "extra": "iterations: 67783\ncpu: 12345.530590266011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26911.768742300348,
            "unit": "ns/iter",
            "extra": "iterations: 31653\ncpu: 26911.518655419695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40346.91841756456,
            "unit": "ns/iter",
            "extra": "iterations: 21132\ncpu: 40346.157486276614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53751.608631523435,
            "unit": "ns/iter",
            "extra": "iterations: 15594\ncpu: 53749.416442221416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 56337.42979999852,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56334.68999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 67399.6834287488,
            "unit": "ns/iter",
            "extra": "iterations: 12926\ncpu: 67400.31719015958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 78247.11280432866,
            "unit": "ns/iter",
            "extra": "iterations: 11090\ncpu: 78246.09558160492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 89289.39393330314,
            "unit": "ns/iter",
            "extra": "iterations: 9956\ncpu: 89288.99156287637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 639.5470887169265,
            "unit": "ns/iter",
            "extra": "iterations: 1088180\ncpu: 639.5358304692222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 497.463606660734,
            "unit": "ns/iter",
            "extra": "iterations: 1395640\ncpu: 497.45708062251043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 501.0048978209759,
            "unit": "ns/iter",
            "extra": "iterations: 1393681\ncpu: 501.00970021116456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 490.75877908390424,
            "unit": "ns/iter",
            "extra": "iterations: 1423554\ncpu: 490.7579199665084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1046.81643999749,
            "unit": "ns/iter",
            "extra": "iterations: 666022\ncpu: 1046.7957514916843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4398.959970726234,
            "unit": "ns/iter",
            "extra": "iterations: 180368\ncpu: 4398.913332741947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20614.063788692485,
            "unit": "ns/iter",
            "extra": "iterations: 39866\ncpu: 20613.95926353284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16415.362884159775,
            "unit": "ns/iter",
            "extra": "iterations: 50760\ncpu: 16415.395981087408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 16110.241214302627,
            "unit": "ns/iter",
            "extra": "iterations: 52244\ncpu: 16110.09685322715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 16590.864524602664,
            "unit": "ns/iter",
            "extra": "iterations: 49485\ncpu: 16590.522380519364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 44057.21600405255,
            "unit": "ns/iter",
            "extra": "iterations: 19745\ncpu: 44055.79640415298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 515925.48941177,
            "unit": "ns/iter",
            "extra": "iterations: 1700\ncpu: 515922.82352941384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 412460.34140663105,
            "unit": "ns/iter",
            "extra": "iterations: 2147\ncpu: 412458.0344666978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 408743.03187998064,
            "unit": "ns/iter",
            "extra": "iterations: 2133\ncpu: 408738.9592123775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 416772.5118659911,
            "unit": "ns/iter",
            "extra": "iterations: 2149\ncpu: 416770.54443927365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 242150.3746898305,
            "unit": "ns/iter",
            "extra": "iterations: 3627\ncpu: 242098.45602426218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 415617.8591081595,
            "unit": "ns/iter",
            "extra": "iterations: 2108\ncpu: 415618.5009487676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 629.6198602225866,
            "unit": "ns/iter",
            "extra": "iterations: 1109192\ncpu: 629.6174151995326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5539.000609999789,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5538.939999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10630.237906014563,
            "unit": "ns/iter",
            "extra": "iterations: 79523\ncpu: 10630.076833117533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15887.761009871743,
            "unit": "ns/iter",
            "extra": "iterations: 52680\ncpu: 15887.773348519317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20541.289840239035,
            "unit": "ns/iter",
            "extra": "iterations: 40060\ncpu: 20541.20569146278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25550.123979970667,
            "unit": "ns/iter",
            "extra": "iterations: 32352\ncpu: 25544.949307616353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31046.082827983537,
            "unit": "ns/iter",
            "extra": "iterations: 27044\ncpu: 31045.64413548291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36390.79423385913,
            "unit": "ns/iter",
            "extra": "iterations: 23031\ncpu: 36390.339108158354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41239.26465504309,
            "unit": "ns/iter",
            "extra": "iterations: 20249\ncpu: 41238.866116845435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 565.2637006115009,
            "unit": "ns/iter",
            "extra": "iterations: 1237536\ncpu: 565.2636367750118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 455.87786391462015,
            "unit": "ns/iter",
            "extra": "iterations: 1521868\ncpu: 455.87054856268736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 450.7211901740572,
            "unit": "ns/iter",
            "extra": "iterations: 1536750\ncpu: 450.72119733203726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 426.92918104365003,
            "unit": "ns/iter",
            "extra": "iterations: 1632529\ncpu: 426.9295063058645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 926.5317412199494,
            "unit": "ns/iter",
            "extra": "iterations: 743875\ncpu: 926.5410183162439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2379.228175328119,
            "unit": "ns/iter",
            "extra": "iterations: 325675\ncpu: 2379.2357411529592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9473.298232011788,
            "unit": "ns/iter",
            "extra": "iterations: 85125\ncpu: 9473.26754772394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9930.74961019308,
            "unit": "ns/iter",
            "extra": "iterations: 82092\ncpu: 9930.724065682482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9543.288964973213,
            "unit": "ns/iter",
            "extra": "iterations: 84993\ncpu: 9543.291800501287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9680.891881261485,
            "unit": "ns/iter",
            "extra": "iterations: 86442\ncpu: 9680.802156359212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 31383.8375222055,
            "unit": "ns/iter",
            "extra": "iterations: 26459\ncpu: 31383.46120412728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 258951.40869816273,
            "unit": "ns/iter",
            "extra": "iterations: 3472\ncpu: 258946.082949309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 195812.4627068672,
            "unit": "ns/iter",
            "extra": "iterations: 4411\ncpu: 195812.96758104768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 198734.0317899071,
            "unit": "ns/iter",
            "extra": "iterations: 4341\ncpu: 198728.05805114057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 198977.82947903554,
            "unit": "ns/iter",
            "extra": "iterations: 3935\ncpu: 198974.07878018028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 101151.73898185429,
            "unit": "ns/iter",
            "extra": "iterations: 8486\ncpu: 101151.4140938012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 189531.13075622905,
            "unit": "ns/iter",
            "extra": "iterations: 4734\ncpu: 189530.71398394724 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}