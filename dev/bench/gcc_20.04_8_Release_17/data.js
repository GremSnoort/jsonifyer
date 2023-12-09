window.BENCHMARK_DATA = {
  "lastUpdate": 1702083212575,
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
        "date": 1702083211593,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1621.237737244816,
            "unit": "ns/iter",
            "extra": "iterations: 432570\ncpu: 1621.161661696373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 20030.461735391804,
            "unit": "ns/iter",
            "extra": "iterations: 40233\ncpu: 20028.839509855097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 41910.847873472594,
            "unit": "ns/iter",
            "extra": "iterations: 19727\ncpu: 41909.86465250673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52019.31319999744,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52018.76000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 69404.4670776984,
            "unit": "ns/iter",
            "extra": "iterations: 12651\ncpu: 69403.643980713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 92341.70023696618,
            "unit": "ns/iter",
            "extra": "iterations: 10128\ncpu: 92341.34083728283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 104341.43965516747,
            "unit": "ns/iter",
            "extra": "iterations: 8120\ncpu: 104340.08620689655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 120081.51597222472,
            "unit": "ns/iter",
            "extra": "iterations: 7200\ncpu: 120063.31944444448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 138544.0563223884,
            "unit": "ns/iter",
            "extra": "iterations: 6303\ncpu: 138541.71029668403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1419.2602537045404,
            "unit": "ns/iter",
            "extra": "iterations: 491359\ncpu: 1419.2122256842758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1162.9738720134283,
            "unit": "ns/iter",
            "extra": "iterations: 603376\ncpu: 1162.3392378881508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1131.6199027262185,
            "unit": "ns/iter",
            "extra": "iterations: 622367\ncpu: 1131.5927740384673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1135.4991384513614,
            "unit": "ns/iter",
            "extra": "iterations: 616332\ncpu: 1135.4713044268333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2158.358136685588,
            "unit": "ns/iter",
            "extra": "iterations: 323209\ncpu: 2158.263229056122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7728.208920652161,
            "unit": "ns/iter",
            "extra": "iterations: 106203\ncpu: 7728.174345357477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 40722.2091606843,
            "unit": "ns/iter",
            "extra": "iterations: 20195\ncpu: 40721.47561277544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 32718.72252074361,
            "unit": "ns/iter",
            "extra": "iterations: 25310\ncpu: 32717.743974713558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 32213.460041184164,
            "unit": "ns/iter",
            "extra": "iterations: 25739\ncpu: 32211.329111465184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 31545.065533980138,
            "unit": "ns/iter",
            "extra": "iterations: 25956\ncpu: 31544.113114501462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 75457.9332365739,
            "unit": "ns/iter",
            "extra": "iterations: 11713\ncpu: 75453.7180910101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 676003.9849999656,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 675978.6000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 542203.1259999472,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542197.0999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 532286.0709999872,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532244.200000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 535694.6209999478,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535698.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 377129.97969760926,
            "unit": "ns/iter",
            "extra": "iterations: 2315\ncpu: 377119.0928725707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 531989.5850000194,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531978.500000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 880.760512627721,
            "unit": "ns/iter",
            "extra": "iterations: 795353\ncpu: 880.7161097022298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13873.464294049061,
            "unit": "ns/iter",
            "extra": "iterations: 59990\ncpu: 13872.860476746142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 29575.75809857993,
            "unit": "ns/iter",
            "extra": "iterations: 27937\ncpu: 29574.6143107706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 44152.09616403411,
            "unit": "ns/iter",
            "extra": "iterations: 18874\ncpu: 44150.02649146986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 59070.21596277319,
            "unit": "ns/iter",
            "extra": "iterations: 14183\ncpu: 59067.55975463584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 61473.95030000098,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61472.82999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 72572.50365884419,
            "unit": "ns/iter",
            "extra": "iterations: 11889\ncpu: 72569.53486416032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 84557.76415735813,
            "unit": "ns/iter",
            "extra": "iterations: 10295\ncpu: 84555.33754249626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 96198.68320990229,
            "unit": "ns/iter",
            "extra": "iterations: 9047\ncpu: 96197.13717254349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 709.6591521355379,
            "unit": "ns/iter",
            "extra": "iterations: 987021\ncpu: 709.6378901765985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 569.0113565767357,
            "unit": "ns/iter",
            "extra": "iterations: 1223344\ncpu: 568.9991531408996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 581.235112505033,
            "unit": "ns/iter",
            "extra": "iterations: 1204568\ncpu: 581.2392492578209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 589.8905990444902,
            "unit": "ns/iter",
            "extra": "iterations: 1185922\ncpu: 589.871846546401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1147.4787557565967,
            "unit": "ns/iter",
            "extra": "iterations: 630359\ncpu: 1147.4380472080172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5449.54194076133,
            "unit": "ns/iter",
            "extra": "iterations: 146695\ncpu: 5449.527250417536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 25248.300104192465,
            "unit": "ns/iter",
            "extra": "iterations: 32632\ncpu: 25248.440181416998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 19929.666666666304,
            "unit": "ns/iter",
            "extra": "iterations: 41634\ncpu: 19929.461497814355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 19221.021134955925,
            "unit": "ns/iter",
            "extra": "iterations: 42962\ncpu: 19220.71830920351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 19388.47068277003,
            "unit": "ns/iter",
            "extra": "iterations: 42313\ncpu: 19388.405454588366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 54428.402836785535,
            "unit": "ns/iter",
            "extra": "iterations: 15299\ncpu: 54427.361265441905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 558141.6050955241,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 558131.3375796155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 458641.18339463946,
            "unit": "ns/iter",
            "extra": "iterations: 1903\ncpu: 458639.98949028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 454504.7781780834,
            "unit": "ns/iter",
            "extra": "iterations: 1943\ncpu: 454474.369531653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 453339.7170201415,
            "unit": "ns/iter",
            "extra": "iterations: 1933\ncpu: 453316.5545783747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 265229.60466523096,
            "unit": "ns/iter",
            "extra": "iterations: 3301\ncpu: 265216.72220539255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 454525.64754521975,
            "unit": "ns/iter",
            "extra": "iterations: 1935\ncpu: 454522.22222222167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 660.9358759738851,
            "unit": "ns/iter",
            "extra": "iterations: 1059712\ncpu: 660.8800315557481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6191.015741224832,
            "unit": "ns/iter",
            "extra": "iterations: 131883\ncpu: 6190.787288733155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11846.14768840431,
            "unit": "ns/iter",
            "extra": "iterations: 70168\ncpu: 11845.740223463692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17599.07047687349,
            "unit": "ns/iter",
            "extra": "iterations: 47434\ncpu: 17598.389340978996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23243.285797795965,
            "unit": "ns/iter",
            "extra": "iterations: 35924\ncpu: 23242.09720521108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28848.29385752769,
            "unit": "ns/iter",
            "extra": "iterations: 28946\ncpu: 28846.866579147238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34903.83703488753,
            "unit": "ns/iter",
            "extra": "iterations: 24134\ncpu: 34902.42396618876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40539.00444702168,
            "unit": "ns/iter",
            "extra": "iterations: 20688\ncpu: 40539.220804330995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 46427.56420404468,
            "unit": "ns/iter",
            "extra": "iterations: 18192\ncpu: 46425.47273526835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 637.3105282031861,
            "unit": "ns/iter",
            "extra": "iterations: 1107017\ncpu: 637.2768439870398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 510.74095230049915,
            "unit": "ns/iter",
            "extra": "iterations: 1373222\ncpu: 510.73220498943135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 499.55311973258233,
            "unit": "ns/iter",
            "extra": "iterations: 1406643\ncpu: 499.53748036992613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 496.6434158764084,
            "unit": "ns/iter",
            "extra": "iterations: 1405730\ncpu: 496.6170601751411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 967.0530507153442,
            "unit": "ns/iter",
            "extra": "iterations: 726682\ncpu: 966.9858342438503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2713.9894317170542,
            "unit": "ns/iter",
            "extra": "iterations: 294466\ncpu: 2713.850835070988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 12906.07823790694,
            "unit": "ns/iter",
            "extra": "iterations: 63243\ncpu: 12905.214806381948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10701.31731994799,
            "unit": "ns/iter",
            "extra": "iterations: 76103\ncpu: 10700.718762729442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10488.169176364117,
            "unit": "ns/iter",
            "extra": "iterations: 77765\ncpu: 10488.05375168789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10035.95740560378,
            "unit": "ns/iter",
            "extra": "iterations: 81067\ncpu: 10035.797550174468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 33973.33642355158,
            "unit": "ns/iter",
            "extra": "iterations: 22760\ncpu: 33973.52811950824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 281351.6723637648,
            "unit": "ns/iter",
            "extra": "iterations: 3101\ncpu: 281334.3115124153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 216163.28780367403,
            "unit": "ns/iter",
            "extra": "iterations: 4034\ncpu: 216153.792761526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 211163.28046990815,
            "unit": "ns/iter",
            "extra": "iterations: 4086\ncpu: 211153.57317669818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 214349.09300023696,
            "unit": "ns/iter",
            "extra": "iterations: 4043\ncpu: 214341.5533020028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 109513.34689266107,
            "unit": "ns/iter",
            "extra": "iterations: 7965\ncpu: 109506.90521029408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 205943.21494011208,
            "unit": "ns/iter",
            "extra": "iterations: 4257\ncpu: 205937.1858116047 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}