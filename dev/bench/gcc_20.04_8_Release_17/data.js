window.BENCHMARK_DATA = {
  "lastUpdate": 1702079201992,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-8 20.04 Release c++-17": [
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
        "date": 1702079201592,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1384.7964305413695,
            "unit": "ns/iter",
            "extra": "iterations: 507640\ncpu: 1384.7289417697584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1090.0176613070616,
            "unit": "ns/iter",
            "extra": "iterations: 650235\ncpu: 1090.000230685829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1083.498699855411,
            "unit": "ns/iter",
            "extra": "iterations: 646082\ncpu: 1083.4369321541226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1104.7537768739007,
            "unit": "ns/iter",
            "extra": "iterations: 633328\ncpu: 1104.7229871409443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2609.917039055532,
            "unit": "ns/iter",
            "extra": "iterations: 264956\ncpu: 2609.766904693611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7554.02192126803,
            "unit": "ns/iter",
            "extra": "iterations: 114820\ncpu: 7553.507228705796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 41651.009244372144,
            "unit": "ns/iter",
            "extra": "iterations: 19904\ncpu: 41647.88987138264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 34167.3706924985,
            "unit": "ns/iter",
            "extra": "iterations: 24260\ncpu: 34166.467436108825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 34532.92967545819,
            "unit": "ns/iter",
            "extra": "iterations: 24003\ncpu: 34531.64604424445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 33913.05286524663,
            "unit": "ns/iter",
            "extra": "iterations: 24326\ncpu: 33912.953218778275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 73031.73923303874,
            "unit": "ns/iter",
            "extra": "iterations: 11865\ncpu: 73027.53476611884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 686047.3840000053,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 686012.2000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 547226.118999987,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 547196.1000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 554190.8289999923,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 554168.2999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 549525.5790000045,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549480.5999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 405157.68116592127,
            "unit": "ns/iter",
            "extra": "iterations: 2230\ncpu: 405128.9237668165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 555609.4030000054,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555575.7999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 740.0924348893254,
            "unit": "ns/iter",
            "extra": "iterations: 946926\ncpu: 740.0482191850264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 598.2670687258252,
            "unit": "ns/iter",
            "extra": "iterations: 1170972\ncpu: 598.23872816771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 603.774342648591,
            "unit": "ns/iter",
            "extra": "iterations: 1158779\ncpu: 603.7399711247788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 606.1617552407567,
            "unit": "ns/iter",
            "extra": "iterations: 1163715\ncpu: 606.1295076543632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1458.5330116235425,
            "unit": "ns/iter",
            "extra": "iterations: 485738\ncpu: 1458.4679395064818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5657.5976046041005,
            "unit": "ns/iter",
            "extra": "iterations: 141438\ncpu: 5657.208105318219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 29088.96641349127,
            "unit": "ns/iter",
            "extra": "iterations: 28702\ncpu: 29087.802243745988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 23300.6355249592,
            "unit": "ns/iter",
            "extra": "iterations: 35879\ncpu: 23299.314362161727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 23654.26537382037,
            "unit": "ns/iter",
            "extra": "iterations: 35271\ncpu: 23653.406481245176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 23502.114295433938,
            "unit": "ns/iter",
            "extra": "iterations: 35277\ncpu: 23500.72001587436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 53552.20291249615,
            "unit": "ns/iter",
            "extra": "iterations: 15588\ncpu: 53551.199640749284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 587125.0013342168,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 587105.1367578384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 471820.5646551695,
            "unit": "ns/iter",
            "extra": "iterations: 1856\ncpu: 471804.47198275843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 471770.9616017527,
            "unit": "ns/iter",
            "extra": "iterations: 1823\ncpu: 471759.46242457564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 470919.46178686596,
            "unit": "ns/iter",
            "extra": "iterations: 1858\ncpu: 470898.1162540375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 289399.58732763724,
            "unit": "ns/iter",
            "extra": "iterations: 3046\ncpu: 289388.8706500317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 469378.04836956825,
            "unit": "ns/iter",
            "extra": "iterations: 1840\ncpu: 469355.8695652177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 623.0734777845192,
            "unit": "ns/iter",
            "extra": "iterations: 1126286\ncpu: 623.0403290105702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 489.5409939212648,
            "unit": "ns/iter",
            "extra": "iterations: 1430395\ncpu: 489.5298851016679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 489.90945401576727,
            "unit": "ns/iter",
            "extra": "iterations: 1434089\ncpu: 489.8762908020361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 486.36611251159036,
            "unit": "ns/iter",
            "extra": "iterations: 1437203\ncpu: 486.3541893525171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1141.1159940171597,
            "unit": "ns/iter",
            "extra": "iterations: 634481\ncpu: 1141.0625377276833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2735.4179057303754,
            "unit": "ns/iter",
            "extra": "iterations: 294241\ncpu: 2735.3421175159124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 12347.581029472072,
            "unit": "ns/iter",
            "extra": "iterations: 65723\ncpu: 12346.72641236705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10490.767096947871,
            "unit": "ns/iter",
            "extra": "iterations: 78011\ncpu: 10490.452628475505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10433.447707154892,
            "unit": "ns/iter",
            "extra": "iterations: 77611\ncpu: 10433.15251704011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10471.567236350582,
            "unit": "ns/iter",
            "extra": "iterations: 78172\ncpu: 10471.539681727434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 33384.16601460055,
            "unit": "ns/iter",
            "extra": "iterations: 24793\ncpu: 33382.98713346523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 289244.1128765314,
            "unit": "ns/iter",
            "extra": "iterations: 3021\ncpu: 289237.20622310427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 222803.4132379204,
            "unit": "ns/iter",
            "extra": "iterations: 3913\ncpu: 222789.59877331986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 221573.2070975922,
            "unit": "ns/iter",
            "extra": "iterations: 3945\ncpu: 221566.9961977184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 216976.68452829873,
            "unit": "ns/iter",
            "extra": "iterations: 3975\ncpu: 216968.67924528336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 115092.05691056981,
            "unit": "ns/iter",
            "extra": "iterations: 7626\ncpu: 115088.17204301147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 209300.78478574997,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 209291.81511795838 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}