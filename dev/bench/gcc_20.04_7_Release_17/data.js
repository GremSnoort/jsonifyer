window.BENCHMARK_DATA = {
  "lastUpdate": 1702285127269,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-7 20.04 Release c++-17": [
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
          "id": "2a00f1e1b9f17dcc00e5a75bc03c76022553da63",
          "message": "Commented 12 gcc build",
          "timestamp": "2023-12-09T04:07:37+03:00",
          "tree_id": "2348f9686cb6bdf1d1325a0eaab297a2d9a173d8",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/2a00f1e1b9f17dcc00e5a75bc03c76022553da63"
        },
        "date": 1702084738056,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1634.7111929679284,
            "unit": "ns/iter",
            "extra": "iterations: 404772\ncpu: 1634.6644530748176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 20559.092109845184,
            "unit": "ns/iter",
            "extra": "iterations: 40202\ncpu: 20558.73090891001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 42648.789851383895,
            "unit": "ns/iter",
            "extra": "iterations: 19648\ncpu: 42648.36115635179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52313.918199999425,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52313.41 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 69901.57017056651,
            "unit": "ns/iter",
            "extra": "iterations: 12605\ncpu: 69899.79373264579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 88365.087075242,
            "unit": "ns/iter",
            "extra": "iterations: 9888\ncpu: 88362.54045307447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 106109.48084362799,
            "unit": "ns/iter",
            "extra": "iterations: 8013\ncpu: 106108.2615749407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 120486.25689778717,
            "unit": "ns/iter",
            "extra": "iterations: 6995\ncpu: 120484.84631879923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 141610.8782847031,
            "unit": "ns/iter",
            "extra": "iterations: 6203\ncpu: 141608.59261647606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1391.2423391230857,
            "unit": "ns/iter",
            "extra": "iterations: 494493\ncpu: 1391.2079645212395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1152.6198544312456,
            "unit": "ns/iter",
            "extra": "iterations: 608922\ncpu: 1152.5717579591483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1123.4556652218828,
            "unit": "ns/iter",
            "extra": "iterations: 624318\ncpu: 1123.3810333836284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1129.0980187291213,
            "unit": "ns/iter",
            "extra": "iterations: 619249\ncpu: 1129.0571321067964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2182.6976068599743,
            "unit": "ns/iter",
            "extra": "iterations: 321168\ncpu: 2182.614394958405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7661.566728484321,
            "unit": "ns/iter",
            "extra": "iterations: 101913\ncpu: 7661.307193390454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 42044.253558944925,
            "unit": "ns/iter",
            "extra": "iterations: 19739\ncpu: 42042.788388469504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 33400.66121663873,
            "unit": "ns/iter",
            "extra": "iterations: 24954\ncpu: 33398.96209024602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 32637.535907275364,
            "unit": "ns/iter",
            "extra": "iterations: 25538\ncpu: 32635.734983162398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 32779.33497366484,
            "unit": "ns/iter",
            "extra": "iterations: 26011\ncpu: 32776.75214332388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 74564.20763563144,
            "unit": "ns/iter",
            "extra": "iterations: 11944\ncpu: 74562.5669792363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 669707.8820000115,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 669695.1999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 545062.4420000167,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 545058.1999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 545677.8599999837,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 545665.8999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 541092.8500000125,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541082.2999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 386291.9740088133,
            "unit": "ns/iter",
            "extra": "iterations: 2270\ncpu: 386286.7841409682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 582258.2499999953,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 582236.7999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 866.8837922313545,
            "unit": "ns/iter",
            "extra": "iterations: 804645\ncpu: 866.8679976884196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13638.241616523732,
            "unit": "ns/iter",
            "extra": "iterations: 60327\ncpu: 13637.674673031981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 29184.204602230762,
            "unit": "ns/iter",
            "extra": "iterations: 28421\ncpu: 29183.828858942386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 43764.21768458467,
            "unit": "ns/iter",
            "extra": "iterations: 19124\ncpu: 43763.982430453965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 59183.90817477244,
            "unit": "ns/iter",
            "extra": "iterations: 14190\ncpu: 59183.030303030246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 61417.847699999584,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61417.330000000096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 73124.34162015724,
            "unit": "ns/iter",
            "extra": "iterations: 11826\ncpu: 73124.02333840677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 85351.10212306051,
            "unit": "ns/iter",
            "extra": "iterations: 10174\ncpu: 85349.60684096706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 97135.75844707976,
            "unit": "ns/iter",
            "extra": "iterations: 8938\ncpu: 97135.22040725022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 706.3099555981303,
            "unit": "ns/iter",
            "extra": "iterations: 993652\ncpu: 706.2978789354777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 576.1151818755719,
            "unit": "ns/iter",
            "extra": "iterations: 1226278\ncpu: 576.1111265145388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 583.0555866620148,
            "unit": "ns/iter",
            "extra": "iterations: 1200180\ncpu: 583.0492926061057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 584.2917586337545,
            "unit": "ns/iter",
            "extra": "iterations: 1196986\ncpu: 584.2885380447239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1151.1829757368846,
            "unit": "ns/iter",
            "extra": "iterations: 608414\ncpu: 1151.1761728033828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5019.1878600000455,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5019.07199999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 26803.522120200774,
            "unit": "ns/iter",
            "extra": "iterations: 31148\ncpu: 26803.15911133936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 21474.341952098817,
            "unit": "ns/iter",
            "extra": "iterations: 38830\ncpu: 21474.1153747103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 21426.231920135455,
            "unit": "ns/iter",
            "extra": "iterations: 38966\ncpu: 21425.9893240261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21608.536287616662,
            "unit": "ns/iter",
            "extra": "iterations: 38746\ncpu: 21608.23826975694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 50826.71761988806,
            "unit": "ns/iter",
            "extra": "iterations: 16453\ncpu: 50826.48757065581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 559827.5471817623,
            "unit": "ns/iter",
            "extra": "iterations: 1579\ncpu: 559818.1760607961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 454193.8012519648,
            "unit": "ns/iter",
            "extra": "iterations: 1917\ncpu: 454179.81220657117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 457238.28423235635,
            "unit": "ns/iter",
            "extra": "iterations: 1928\ncpu: 457222.4066390047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 465579.37172773917,
            "unit": "ns/iter",
            "extra": "iterations: 1910\ncpu: 465566.91099476547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 273050.1160686468,
            "unit": "ns/iter",
            "extra": "iterations: 3205\ncpu: 273038.43993759766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 457492.36656281824,
            "unit": "ns/iter",
            "extra": "iterations: 1926\ncpu: 457477.20664589567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 670.5263795098616,
            "unit": "ns/iter",
            "extra": "iterations: 1046513\ncpu: 670.5195253188413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6245.404465537195,
            "unit": "ns/iter",
            "extra": "iterations: 131272\ncpu: 6245.2221341946815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12172.84165308196,
            "unit": "ns/iter",
            "extra": "iterations: 68091\ncpu: 12172.582279596461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17670.493185207095,
            "unit": "ns/iter",
            "extra": "iterations: 47617\ncpu: 17669.94350757084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23588.95114611115,
            "unit": "ns/iter",
            "extra": "iterations: 35555\ncpu: 23588.73857404011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29103.06191430001,
            "unit": "ns/iter",
            "extra": "iterations: 27958\ncpu: 29102.121038700945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34844.129762446966,
            "unit": "ns/iter",
            "extra": "iterations: 24121\ncpu: 34842.759421251416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40988.47501215429,
            "unit": "ns/iter",
            "extra": "iterations: 20570\ncpu: 40987.3894020416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 46110.2830292369,
            "unit": "ns/iter",
            "extra": "iterations: 18196\ncpu: 46108.51835568231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 634.2699998006154,
            "unit": "ns/iter",
            "extra": "iterations: 1103386\ncpu: 634.2664307866901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 507.5180106044471,
            "unit": "ns/iter",
            "extra": "iterations: 1387155\ncpu: 507.5092545533856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 510.0617465173799,
            "unit": "ns/iter",
            "extra": "iterations: 1366571\ncpu: 510.05231341803534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 492.70855770205964,
            "unit": "ns/iter",
            "extra": "iterations: 1402082\ncpu: 492.70385041673654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 971.2360942705506,
            "unit": "ns/iter",
            "extra": "iterations: 724935\ncpu: 971.1797609440894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2867.337042100258,
            "unit": "ns/iter",
            "extra": "iterations: 279428\ncpu: 2867.2169574989025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14464.708970583011,
            "unit": "ns/iter",
            "extra": "iterations: 56362\ncpu: 14463.613782335571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11185.421534905436,
            "unit": "ns/iter",
            "extra": "iterations: 72682\ncpu: 11185.120112269933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10844.175033431227,
            "unit": "ns/iter",
            "extra": "iterations: 74780\ncpu: 10843.884728537128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10586.650402882486,
            "unit": "ns/iter",
            "extra": "iterations: 76325\ncpu: 10586.427775957976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 33690.526298595476,
            "unit": "ns/iter",
            "extra": "iterations: 24488\ncpu: 33689.21104214303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 281114.3800131413,
            "unit": "ns/iter",
            "extra": "iterations: 3042\ncpu: 281100.39447731565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 217883.05666156643,
            "unit": "ns/iter",
            "extra": "iterations: 3918\ncpu: 217875.5487493617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 219792.48692561666,
            "unit": "ns/iter",
            "extra": "iterations: 3939\ncpu: 219786.77329271662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 216712.7843625515,
            "unit": "ns/iter",
            "extra": "iterations: 4016\ncpu: 216708.09262948306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 112947.37475702718,
            "unit": "ns/iter",
            "extra": "iterations: 7717\ncpu: 112945.13411947663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 209112.73599422633,
            "unit": "ns/iter",
            "extra": "iterations: 4159\ncpu: 209100.8175042086 ns\nthreads: 1"
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
          "id": "2a00f1e1b9f17dcc00e5a75bc03c76022553da63",
          "message": "Commented 12 gcc build",
          "timestamp": "2023-12-09T04:07:37+03:00",
          "tree_id": "2348f9686cb6bdf1d1325a0eaab297a2d9a173d8",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/2a00f1e1b9f17dcc00e5a75bc03c76022553da63"
        },
        "date": 1702084992696,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1667.9085011693605,
            "unit": "ns/iter",
            "extra": "iterations: 400639\ncpu: 1667.8456166274377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 20026.16244855721,
            "unit": "ns/iter",
            "extra": "iterations: 40579\ncpu: 20025.180512087536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 41830.615263532265,
            "unit": "ns/iter",
            "extra": "iterations: 19694\ncpu: 41829.45059408956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52231.40359999831,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52227.66999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 70327.36577844458,
            "unit": "ns/iter",
            "extra": "iterations: 12647\ncpu: 70322.81173400808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 88318.51048387216,
            "unit": "ns/iter",
            "extra": "iterations: 9920\ncpu: 88313.42741935483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 105575.46187282738,
            "unit": "ns/iter",
            "extra": "iterations: 8052\ncpu: 105565.26328862393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 121804.44771008527,
            "unit": "ns/iter",
            "extra": "iterations: 7009\ncpu: 121797.51747752889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 141867.57923673978,
            "unit": "ns/iter",
            "extra": "iterations: 6184\ncpu: 141853.3958602847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1444.6857814039736,
            "unit": "ns/iter",
            "extra": "iterations: 484007\ncpu: 1444.5935699277084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1190.801844321202,
            "unit": "ns/iter",
            "extra": "iterations: 587967\ncpu: 1190.6799191111072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1153.1819299685978,
            "unit": "ns/iter",
            "extra": "iterations: 611554\ncpu: 1153.1038959764799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1160.1166072467327,
            "unit": "ns/iter",
            "extra": "iterations: 603333\ncpu: 1160.088375739436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2178.536970998323,
            "unit": "ns/iter",
            "extra": "iterations: 321360\ncpu: 2178.470562608911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7192.237660261845,
            "unit": "ns/iter",
            "extra": "iterations: 116372\ncpu: 7191.620836627378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 41727.706546842186,
            "unit": "ns/iter",
            "extra": "iterations: 19918\ncpu: 41726.232553469315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 33129.67011412271,
            "unit": "ns/iter",
            "extra": "iterations: 25236\ncpu: 33127.686638135994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 32576.519235289896,
            "unit": "ns/iter",
            "extra": "iterations: 25526\ncpu: 32574.95494789624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 31870.965748928014,
            "unit": "ns/iter",
            "extra": "iterations: 25897\ncpu: 31868.55234197015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 74184.84781679774,
            "unit": "ns/iter",
            "extra": "iterations: 11703\ncpu: 74182.79928223537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 666231.9609999941,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 666202.3999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 543912.1519999901,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543897.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 572211.8349999903,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572147.7999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 536754.4949999967,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536748.8999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 385227.22026433685,
            "unit": "ns/iter",
            "extra": "iterations: 2270\ncpu: 385214.8017621146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 536987.1529999841,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536981.9999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 892.6171778640452,
            "unit": "ns/iter",
            "extra": "iterations: 784009\ncpu: 892.5144991958028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13798.888522283827,
            "unit": "ns/iter",
            "extra": "iterations: 59707\ncpu: 13797.91146766708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 29577.845893702583,
            "unit": "ns/iter",
            "extra": "iterations: 28091\ncpu: 29575.67904310979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 43916.82778041105,
            "unit": "ns/iter",
            "extra": "iterations: 18999\ncpu: 43914.984999210465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 58568.67971704772,
            "unit": "ns/iter",
            "extra": "iterations: 14278\ncpu: 58565.10015408316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 61752.87290000142,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61752.21999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 74119.49892380579,
            "unit": "ns/iter",
            "extra": "iterations: 11615\ncpu: 74113.56866121395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 86568.76792659878,
            "unit": "ns/iter",
            "extra": "iterations: 10027\ncpu: 86564.26648050245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 98031.6814379427,
            "unit": "ns/iter",
            "extra": "iterations: 8846\ncpu: 98024.37259778423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 724.7254968402747,
            "unit": "ns/iter",
            "extra": "iterations: 967967\ncpu: 724.6826596361185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 609.8022725092497,
            "unit": "ns/iter",
            "extra": "iterations: 1146750\ncpu: 609.7644647918005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 587.9605021835217,
            "unit": "ns/iter",
            "extra": "iterations: 1194623\ncpu: 587.9372823058011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 589.3281965497947,
            "unit": "ns/iter",
            "extra": "iterations: 1190823\ncpu: 589.2992493426777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1171.3840563914573,
            "unit": "ns/iter",
            "extra": "iterations: 600943\ncpu: 1171.302269932428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5737.308073886922,
            "unit": "ns/iter",
            "extra": "iterations: 140106\ncpu: 5737.250367578808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 26687.686712927403,
            "unit": "ns/iter",
            "extra": "iterations: 31128\ncpu: 26686.182857877033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 21091.32618791495,
            "unit": "ns/iter",
            "extra": "iterations: 38113\ncpu: 21091.121139768555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 21142.726390802974,
            "unit": "ns/iter",
            "extra": "iterations: 38449\ncpu: 21141.790423678143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21243.7594233337,
            "unit": "ns/iter",
            "extra": "iterations: 39052\ncpu: 21243.511215814724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 52658.831162229064,
            "unit": "ns/iter",
            "extra": "iterations: 15737\ncpu: 52655.53790430166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 558716.0167417789,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 558677.5273663854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 451325.58841778454,
            "unit": "ns/iter",
            "extra": "iterations: 1934\ncpu: 451316.85625646584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 452941.89646201895,
            "unit": "ns/iter",
            "extra": "iterations: 1922\ncpu: 452911.0301768981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 458987.6227106245,
            "unit": "ns/iter",
            "extra": "iterations: 1911\ncpu: 458948.9795918369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 271649.9401921271,
            "unit": "ns/iter",
            "extra": "iterations: 3227\ncpu: 271630.6166718304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 455441.863495358,
            "unit": "ns/iter",
            "extra": "iterations: 1934\ncpu: 455414.3226473626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 686.1260165223159,
            "unit": "ns/iter",
            "extra": "iterations: 1023588\ncpu: 686.1189267556886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6261.429927569843,
            "unit": "ns/iter",
            "extra": "iterations: 129780\ncpu: 6261.1619664046875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11984.503372128256,
            "unit": "ns/iter",
            "extra": "iterations: 68651\ncpu: 11984.032279209297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17817.112639578914,
            "unit": "ns/iter",
            "extra": "iterations: 47106\ncpu: 17816.244215174327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23340.17938300299,
            "unit": "ns/iter",
            "extra": "iterations: 35689\ncpu: 23339.390288324168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29330.618380117285,
            "unit": "ns/iter",
            "extra": "iterations: 28607\ncpu: 29329.447338064118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34866.695522763315,
            "unit": "ns/iter",
            "extra": "iterations: 23854\ncpu: 34864.2994885555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 41310.55800156943,
            "unit": "ns/iter",
            "extra": "iterations: 20396\ncpu: 41309.05569719557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 46386.458202458074,
            "unit": "ns/iter",
            "extra": "iterations: 18147\ncpu: 46384.34451975524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 651.3804874782055,
            "unit": "ns/iter",
            "extra": "iterations: 1075084\ncpu: 651.363149298099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 522.3415040893758,
            "unit": "ns/iter",
            "extra": "iterations: 1340798\ncpu: 522.3362505015657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 523.5727595817224,
            "unit": "ns/iter",
            "extra": "iterations: 1337652\ncpu: 523.5430440802245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 507.989769285226,
            "unit": "ns/iter",
            "extra": "iterations: 1379669\ncpu: 507.97517375544413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 974.2510227515966,
            "unit": "ns/iter",
            "extra": "iterations: 714983\ncpu: 974.2074986398258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2985.307034820847,
            "unit": "ns/iter",
            "extra": "iterations: 267569\ncpu: 2985.245301212017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14962.457763650236,
            "unit": "ns/iter",
            "extra": "iterations: 55367\ncpu: 14961.733523579123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11596.095110004126,
            "unit": "ns/iter",
            "extra": "iterations: 70634\ncpu: 11595.874508027295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11372.833972511353,
            "unit": "ns/iter",
            "extra": "iterations: 71446\ncpu: 11372.471516949958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10746.671475701589,
            "unit": "ns/iter",
            "extra": "iterations: 76384\ncpu: 10746.211248429016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34113.08709597712,
            "unit": "ns/iter",
            "extra": "iterations: 24318\ncpu: 34112.71486141911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 286528.7936247169,
            "unit": "ns/iter",
            "extra": "iterations: 3043\ncpu: 286515.51100887224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 220263.54437869473,
            "unit": "ns/iter",
            "extra": "iterations: 3887\ncpu: 220245.0990481067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 214519.9686402301,
            "unit": "ns/iter",
            "extra": "iterations: 3986\ncpu: 214505.51931761132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 215772.36227544257,
            "unit": "ns/iter",
            "extra": "iterations: 4008\ncpu: 215750.99800399417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 112474.32328979956,
            "unit": "ns/iter",
            "extra": "iterations: 7733\ncpu: 112464.9683176012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 209037.94644992467,
            "unit": "ns/iter",
            "extra": "iterations: 4183\ncpu: 209019.69878077778 ns\nthreads: 1"
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
          "id": "2a00f1e1b9f17dcc00e5a75bc03c76022553da63",
          "message": "Commented 12 gcc build",
          "timestamp": "2023-12-09T04:07:37+03:00",
          "tree_id": "2348f9686cb6bdf1d1325a0eaab297a2d9a173d8",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/2a00f1e1b9f17dcc00e5a75bc03c76022553da63"
        },
        "date": 1702085597353,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1675.8302183473247,
            "unit": "ns/iter",
            "extra": "iterations: 419103\ncpu: 1675.747489280678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 20504.194499511097,
            "unit": "ns/iter",
            "extra": "iterations: 39851\ncpu: 20503.989862236835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 42399.29317994135,
            "unit": "ns/iter",
            "extra": "iterations: 19384\ncpu: 42397.2915806851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52249.01089999889,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52246.889999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 69503.7243135686,
            "unit": "ns/iter",
            "extra": "iterations: 12565\ncpu: 69502.06923995225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 86767.24605963368,
            "unit": "ns/iter",
            "extra": "iterations: 9961\ncpu: 86765.55566710167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 104142.84456148942,
            "unit": "ns/iter",
            "extra": "iterations: 8164\ncpu: 104140.43361097501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 121182.17426387346,
            "unit": "ns/iter",
            "extra": "iterations: 7064\ncpu: 121178.86466591174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 141581.33009236425,
            "unit": "ns/iter",
            "extra": "iterations: 6171\ncpu: 141577.44287797742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1404.4430112226435,
            "unit": "ns/iter",
            "extra": "iterations: 498721\ncpu: 1404.4429651047374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1169.974102852301,
            "unit": "ns/iter",
            "extra": "iterations: 603078\ncpu: 1169.9334082821802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1173.214444829507,
            "unit": "ns/iter",
            "extra": "iterations: 594358\ncpu: 1173.2053745385792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1170.7031458716904,
            "unit": "ns/iter",
            "extra": "iterations: 598149\ncpu: 1170.6870696097471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2186.7348477742416,
            "unit": "ns/iter",
            "extra": "iterations: 319854\ncpu: 2186.563869765579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7521.570249667543,
            "unit": "ns/iter",
            "extra": "iterations: 109666\ncpu: 7521.363047799691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 41564.86151905028,
            "unit": "ns/iter",
            "extra": "iterations: 19815\ncpu: 41564.01211203639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 33138.94048566762,
            "unit": "ns/iter",
            "extra": "iterations: 25120\ncpu: 33138.51512738851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 32601.101774078663,
            "unit": "ns/iter",
            "extra": "iterations: 25478\ncpu: 32600.19624774315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 32261.023480083717,
            "unit": "ns/iter",
            "extra": "iterations: 23850\ncpu: 32260.846960167713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 72075.36315042067,
            "unit": "ns/iter",
            "extra": "iterations: 11973\ncpu: 72073.39012778725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 680504.8599562276,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 680490.2990517889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 549164.4329999872,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549146.6999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 538775.9190000452,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538769.1999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 549939.1349999883,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549922.4999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 394099.58281936625,
            "unit": "ns/iter",
            "extra": "iterations: 2270\ncpu: 394088.0176211449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 543263.263999961,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543240.7999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 872.4214120735015,
            "unit": "ns/iter",
            "extra": "iterations: 802267\ncpu: 872.4002109023553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13857.864383236829,
            "unit": "ns/iter",
            "extra": "iterations: 59034\ncpu: 13857.597316800468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 29374.862479872838,
            "unit": "ns/iter",
            "extra": "iterations: 27945\ncpu: 29374.414027554154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 44325.13708297655,
            "unit": "ns/iter",
            "extra": "iterations: 18704\ncpu: 44324.91445680072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 59743.72568899167,
            "unit": "ns/iter",
            "extra": "iterations: 14006\ncpu: 59742.26045980292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 62072.114099999,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62071.74000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 73727.4947044734,
            "unit": "ns/iter",
            "extra": "iterations: 11708\ncpu: 73725.4526819266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 86288.88884449827,
            "unit": "ns/iter",
            "extra": "iterations: 10013\ncpu: 86288.99430740027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 98685.12749546341,
            "unit": "ns/iter",
            "extra": "iterations: 8816\ncpu: 98682.0213248638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 715.0624164903442,
            "unit": "ns/iter",
            "extra": "iterations: 974438\ncpu: 715.0625283496765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 598.7183608828889,
            "unit": "ns/iter",
            "extra": "iterations: 1166262\ncpu: 598.7229284671914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 598.9269710414904,
            "unit": "ns/iter",
            "extra": "iterations: 1171056\ncpu: 598.9179851347834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 602.8074901377072,
            "unit": "ns/iter",
            "extra": "iterations: 1152876\ncpu: 602.807587286058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1161.0715463330926,
            "unit": "ns/iter",
            "extra": "iterations: 604126\ncpu: 1161.057295994543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5188.682904844088,
            "unit": "ns/iter",
            "extra": "iterations: 153096\ncpu: 5188.625437633905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24389.71937225351,
            "unit": "ns/iter",
            "extra": "iterations: 33899\ncpu: 24389.33596861269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 19590.834637134634,
            "unit": "ns/iter",
            "extra": "iterations: 42440\ncpu: 19590.73515551366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 19645.813395659654,
            "unit": "ns/iter",
            "extra": "iterations: 42357\ncpu: 19645.418702929877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 19325.28399375665,
            "unit": "ns/iter",
            "extra": "iterations: 42927\ncpu: 19325.18228620665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 52502.2721622276,
            "unit": "ns/iter",
            "extra": "iterations: 15928\ncpu: 52501.85836263198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 567989.8620466202,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 567979.9870466338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 463164.5902335498,
            "unit": "ns/iter",
            "extra": "iterations: 1884\ncpu: 463161.19957537047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 460089.9554740719,
            "unit": "ns/iter",
            "extra": "iterations: 1909\ncpu: 460084.02304871683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 469093.63993626996,
            "unit": "ns/iter",
            "extra": "iterations: 1883\ncpu: 469087.20127456303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 273275.0635068136,
            "unit": "ns/iter",
            "extra": "iterations: 3228\ncpu: 273271.5923172248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 456952.97589096986,
            "unit": "ns/iter",
            "extra": "iterations: 1908\ncpu: 456945.0209643572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 669.2536309434263,
            "unit": "ns/iter",
            "extra": "iterations: 1050278\ncpu: 669.2487131978413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6196.6609731634235,
            "unit": "ns/iter",
            "extra": "iterations: 131612\ncpu: 6196.491961219331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12044.189662592527,
            "unit": "ns/iter",
            "extra": "iterations: 69708\ncpu: 12043.766856027929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17887.536831311027,
            "unit": "ns/iter",
            "extra": "iterations: 46808\ncpu: 17886.9958126816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23240.48415872085,
            "unit": "ns/iter",
            "extra": "iterations: 35761\ncpu: 23240.26453398951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28822.96418780518,
            "unit": "ns/iter",
            "extra": "iterations: 28817\ncpu: 28822.146649547292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 35057.19188651064,
            "unit": "ns/iter",
            "extra": "iterations: 24108\ncpu: 35057.03500912583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40581.36795860482,
            "unit": "ns/iter",
            "extra": "iterations: 20486\ncpu: 40580.567216635725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 46008.82665567221,
            "unit": "ns/iter",
            "extra": "iterations: 18195\ncpu: 46008.5463039296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 644.9901836241777,
            "unit": "ns/iter",
            "extra": "iterations: 1088691\ncpu: 644.9707033492554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 503.8136559529091,
            "unit": "ns/iter",
            "extra": "iterations: 1379003\ncpu: 503.78135508045074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 555.3799671103607,
            "unit": "ns/iter",
            "extra": "iterations: 1355441\ncpu: 555.3545303705549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 500.7097739999722,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 500.70139999999697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 950.8860412195588,
            "unit": "ns/iter",
            "extra": "iterations: 741347\ncpu: 950.8618770966891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2850.300128379629,
            "unit": "ns/iter",
            "extra": "iterations: 281976\ncpu: 2850.2195222288724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14529.494115178259,
            "unit": "ns/iter",
            "extra": "iterations: 57181\ncpu: 14529.333170109008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11084.025993220119,
            "unit": "ns/iter",
            "extra": "iterations: 73750\ncpu: 11083.807457627267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10820.246237832342,
            "unit": "ns/iter",
            "extra": "iterations: 76020\ncpu: 10820.024993422849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10478.260481029825,
            "unit": "ns/iter",
            "extra": "iterations: 78332\ncpu: 10478.116223254901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 33359.7727402566,
            "unit": "ns/iter",
            "extra": "iterations: 24505\ncpu: 33359.36747602506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 286137.45837415365,
            "unit": "ns/iter",
            "extra": "iterations: 3063\ncpu: 286130.0032647712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 220679.27235977404,
            "unit": "ns/iter",
            "extra": "iterations: 3958\ncpu: 220671.8292066717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 215911.49724310258,
            "unit": "ns/iter",
            "extra": "iterations: 3990\ncpu: 215905.23809523677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 216372.14217891084,
            "unit": "ns/iter",
            "extra": "iterations: 4002\ncpu: 216370.13993003208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 112751.92309687239,
            "unit": "ns/iter",
            "extra": "iterations: 7711\ncpu: 112749.46180780619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 208589.10478468073,
            "unit": "ns/iter",
            "extra": "iterations: 4180\ncpu: 208584.64114832683 ns\nthreads: 1"
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
          "id": "08a1871a28562639bf0f45a39f33526d4fa6ea0d",
          "message": "rm typeid -> tuple_name set",
          "timestamp": "2023-12-11T00:33:38+03:00",
          "tree_id": "fbafa482ecf5561fe3f71808e32dcdc5e65d7018",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/08a1871a28562639bf0f45a39f33526d4fa6ea0d"
        },
        "date": 1702244225368,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1813.614668576868,
            "unit": "ns/iter",
            "extra": "iterations: 390181\ncpu: 1813.4509368728875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 27420.576613571695,
            "unit": "ns/iter",
            "extra": "iterations: 30197\ncpu: 27417.85939000563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 55923.21007509865,
            "unit": "ns/iter",
            "extra": "iterations: 15047\ncpu: 55919.419153319584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 69560.63558984999,
            "unit": "ns/iter",
            "extra": "iterations: 12571\ncpu: 69555.46098162439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 100445.59548058492,
            "unit": "ns/iter",
            "extra": "iterations: 9426\ncpu: 100437.29047315934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 124093.48284770953,
            "unit": "ns/iter",
            "extra": "iterations: 6967\ncpu: 124082.56064303136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 154941.1324060716,
            "unit": "ns/iter",
            "extra": "iterations: 5536\ncpu: 154927.6192196532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 167770.04792079242,
            "unit": "ns/iter",
            "extra": "iterations: 5050\ncpu: 167756.97029702965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 190412.94725638823,
            "unit": "ns/iter",
            "extra": "iterations: 4228\ncpu: 190399.76348155152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1543.3891758196714,
            "unit": "ns/iter",
            "extra": "iterations: 454039\ncpu: 1543.2859291822972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1251.955506841843,
            "unit": "ns/iter",
            "extra": "iterations: 559277\ncpu: 1251.8760828712777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1251.9099819540213,
            "unit": "ns/iter",
            "extra": "iterations: 561343\ncpu: 1251.8225042442853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1259.366090118448,
            "unit": "ns/iter",
            "extra": "iterations: 556068\ncpu: 1259.328535358985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2363.128035707585,
            "unit": "ns/iter",
            "extra": "iterations: 296183\ncpu: 2363.0893737993015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 8131.6843342295815,
            "unit": "ns/iter",
            "extra": "iterations: 100410\ncpu: 8131.274773428943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 47306.53175101303,
            "unit": "ns/iter",
            "extra": "iterations: 17527\ncpu: 47304.358988988446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 39416.73400673426,
            "unit": "ns/iter",
            "extra": "iterations: 21978\ncpu: 39413.65001365001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 36248.60984865095,
            "unit": "ns/iter",
            "extra": "iterations: 22663\ncpu: 36246.476635926316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 36928.69184684847,
            "unit": "ns/iter",
            "extra": "iterations: 22200\ncpu: 36926.64414414422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 89363.21767810365,
            "unit": "ns/iter",
            "extra": "iterations: 9854\ncpu: 89357.17475137021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 850625.0054054091,
            "unit": "ns/iter",
            "extra": "iterations: 1110\ncpu: 850571.7117117101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 712855.3082650526,
            "unit": "ns/iter",
            "extra": "iterations: 1343\ncpu: 712804.690990318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 699096.8142532132,
            "unit": "ns/iter",
            "extra": "iterations: 1319\ncpu: 699061.9408642895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 698350.8873771552,
            "unit": "ns/iter",
            "extra": "iterations: 1323\ncpu: 698294.1043083894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 506551.05074973434,
            "unit": "ns/iter",
            "extra": "iterations: 1734\ncpu: 506516.03229527286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1027.287323578133,
            "unit": "ns/iter",
            "extra": "iterations: 678204\ncpu: 1027.1959469422193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 21070.833620514957,
            "unit": "ns/iter",
            "extra": "iterations: 39464\ncpu: 21069.258057976847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 44656.72611976243,
            "unit": "ns/iter",
            "extra": "iterations: 18687\ncpu: 44655.76604056302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 56403.51959999634,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56398.36000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 74714.1980410709,
            "unit": "ns/iter",
            "extra": "iterations: 11639\ncpu: 74708.57461981254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 93383.55502290491,
            "unit": "ns/iter",
            "extra": "iterations: 9387\ncpu: 93377.73516565465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 111449.88323965664,
            "unit": "ns/iter",
            "extra": "iterations: 7828\ncpu: 111440.43178334185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 129953.58400238295,
            "unit": "ns/iter",
            "extra": "iterations: 6726\ncpu: 129946.77371394537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 147725.15341583372,
            "unit": "ns/iter",
            "extra": "iterations: 5899\ncpu: 147715.1720630613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 886.6123686671014,
            "unit": "ns/iter",
            "extra": "iterations: 788169\ncpu: 886.555802118582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 722.0380748059711,
            "unit": "ns/iter",
            "extra": "iterations: 970458\ncpu: 722.0269192484403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 732.9863364002348,
            "unit": "ns/iter",
            "extra": "iterations: 956117\ncpu: 732.9688730563289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 730.800534310122,
            "unit": "ns/iter",
            "extra": "iterations: 957122\ncpu: 730.7519835506902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1382.6068752797185,
            "unit": "ns/iter",
            "extra": "iterations: 518408\ncpu: 1382.5048996157473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6853.062299038572,
            "unit": "ns/iter",
            "extra": "iterations: 120981\ncpu: 6852.645456724593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 35081.994117646536,
            "unit": "ns/iter",
            "extra": "iterations: 23630\ncpu: 35078.64578925078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 28071.556532917682,
            "unit": "ns/iter",
            "extra": "iterations: 29558\ncpu: 28069.80512889923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 27406.408814389113,
            "unit": "ns/iter",
            "extra": "iterations: 30246\ncpu: 27404.767572571647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 28111.005115176074,
            "unit": "ns/iter",
            "extra": "iterations: 29520\ncpu: 28109.065040650232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 59935.80519999569,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59931.780000000144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 640890.0060000065,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 640850.9999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 533245.6309999998,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533201.3000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 533582.1220000412,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533570.4000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 526067.2709999881,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526053.6000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 392743.40701754374,
            "unit": "ns/iter",
            "extra": "iterations: 1995\ncpu: 392725.21303258074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 529121.6449999751,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529069.4999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 677.0654067336035,
            "unit": "ns/iter",
            "extra": "iterations: 1028044\ncpu: 677.0146997599269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6227.5955451619375,
            "unit": "ns/iter",
            "extra": "iterations: 129567\ncpu: 6227.175129469708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11927.20974182314,
            "unit": "ns/iter",
            "extra": "iterations: 69371\ncpu: 11926.48945524792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17883.162910670384,
            "unit": "ns/iter",
            "extra": "iterations: 47879\ncpu: 17882.16754735893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24005.114467092084,
            "unit": "ns/iter",
            "extra": "iterations: 35128\ncpu: 24003.598269186932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29981.383791720324,
            "unit": "ns/iter",
            "extra": "iterations: 27924\ncpu: 29979.6125196964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 36127.97287004022,
            "unit": "ns/iter",
            "extra": "iterations: 23369\ncpu: 36125.76062304756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 41874.16546220866,
            "unit": "ns/iter",
            "extra": "iterations: 19926\ncpu: 41871.6099568404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 47008.63236216348,
            "unit": "ns/iter",
            "extra": "iterations: 17539\ncpu: 47007.28661839313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 646.728090133786,
            "unit": "ns/iter",
            "extra": "iterations: 1077243\ncpu: 646.687794675854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 516.6923784972242,
            "unit": "ns/iter",
            "extra": "iterations: 1351492\ncpu: 516.6606239622586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 506.91945974647734,
            "unit": "ns/iter",
            "extra": "iterations: 1384165\ncpu: 506.89050799579496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 520.967352495878,
            "unit": "ns/iter",
            "extra": "iterations: 1349996\ncpu: 520.9512472629516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 948.5469883527932,
            "unit": "ns/iter",
            "extra": "iterations: 733054\ncpu: 948.5168896152226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2953.221766413674,
            "unit": "ns/iter",
            "extra": "iterations: 271069\ncpu: 2953.17354621885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14900.370976360458,
            "unit": "ns/iter",
            "extra": "iterations: 54273\ncpu: 14899.393805391264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11914.730418366371,
            "unit": "ns/iter",
            "extra": "iterations: 69389\ncpu: 11913.807664038897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11721.077116212335,
            "unit": "ns/iter",
            "extra": "iterations: 69700\ncpu: 11720.291248206662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10885.712074386705,
            "unit": "ns/iter",
            "extra": "iterations: 74099\ncpu: 10884.982253471708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 34112.494973315035,
            "unit": "ns/iter",
            "extra": "iterations: 24171\ncpu: 34110.43812833583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 278152.30868582835,
            "unit": "ns/iter",
            "extra": "iterations: 3097\ncpu: 278129.5447206941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 220133.13894523616,
            "unit": "ns/iter",
            "extra": "iterations: 3944\ncpu: 220116.4300202808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 217978.5516896129,
            "unit": "ns/iter",
            "extra": "iterations: 3995\ncpu: 217975.09386733532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 215317.37973386727,
            "unit": "ns/iter",
            "extra": "iterations: 3908\ncpu: 215309.4933469779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 112463.81639470039,
            "unit": "ns/iter",
            "extra": "iterations: 7783\ncpu: 112460.0154182205 ns\nthreads: 1"
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
          "id": "ee321988d93ff16926e7194dec34c10291baefc2",
          "message": "add delta",
          "timestamp": "2023-12-11T11:53:54+03:00",
          "tree_id": "290f299ec6b77fff1939bc5ef8e8a991dcfff337",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/ee321988d93ff16926e7194dec34c10291baefc2"
        },
        "date": 1702285126120,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1784.8244263231682,
            "unit": "ns/iter",
            "extra": "iterations: 395606\ncpu: 1784.7929505619227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 26839.344415023974,
            "unit": "ns/iter",
            "extra": "iterations: 30591\ncpu: 26838.459023895917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 54862.91120047396,
            "unit": "ns/iter",
            "extra": "iterations: 15169\ncpu: 54861.26969477224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 69420.51861431054,
            "unit": "ns/iter",
            "extra": "iterations: 12759\ncpu: 69416.93706403323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 100541.39620642259,
            "unit": "ns/iter",
            "extra": "iterations: 9437\ncpu: 100535.29723429061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 124778.61810344963,
            "unit": "ns/iter",
            "extra": "iterations: 6960\ncpu: 124770.7614942528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 146818.21015851552,
            "unit": "ns/iter",
            "extra": "iterations: 5867\ncpu: 146813.70376683155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 171300.09408074967,
            "unit": "ns/iter",
            "extra": "iterations: 5102\ncpu: 171296.41317130526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 191523.59435626215,
            "unit": "ns/iter",
            "extra": "iterations: 4536\ncpu: 191515.16754850108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1600.2118665687906,
            "unit": "ns/iter",
            "extra": "iterations: 442925\ncpu: 1600.1627815092845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1310.1228725086794,
            "unit": "ns/iter",
            "extra": "iterations: 537370\ncpu: 1310.0844855499936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1329.111150813807,
            "unit": "ns/iter",
            "extra": "iterations: 523334\ncpu: 1329.088306893877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1351.5893874197152,
            "unit": "ns/iter",
            "extra": "iterations: 518479\ncpu: 1351.575859388711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2373.6368131402833,
            "unit": "ns/iter",
            "extra": "iterations: 295275\ncpu: 2373.62594191855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 8762.781801160036,
            "unit": "ns/iter",
            "extra": "iterations: 92929\ncpu: 8762.654284453733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 50954.82883107251,
            "unit": "ns/iter",
            "extra": "iterations: 16066\ncpu: 50954.89854350807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 40083.451668052956,
            "unit": "ns/iter",
            "extra": "iterations: 20473\ncpu: 40083.42206808959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 39477.710094457114,
            "unit": "ns/iter",
            "extra": "iterations: 20962\ncpu: 39476.56712145785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 39537.35606352331,
            "unit": "ns/iter",
            "extra": "iterations: 20780\ncpu: 39536.74687199216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 90626.6861941822,
            "unit": "ns/iter",
            "extra": "iterations: 9764\ncpu: 90622.61368291666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 852334.194852938,
            "unit": "ns/iter",
            "extra": "iterations: 1088\ncpu: 852331.2499999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 705570.7278911313,
            "unit": "ns/iter",
            "extra": "iterations: 1323\ncpu: 705549.5842781535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 710680.1972686136,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 710671.3960546284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 699413.8147286924,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 699395.5038759679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 506642.8800461514,
            "unit": "ns/iter",
            "extra": "iterations: 1734\ncpu: 506634.8904267606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1037.0087591217837,
            "unit": "ns/iter",
            "extra": "iterations: 648581\ncpu: 1036.9787274064495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 21135.348509429954,
            "unit": "ns/iter",
            "extra": "iterations: 39448\ncpu: 21135.008111944862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 44974.82320855847,
            "unit": "ns/iter",
            "extra": "iterations: 18700\ncpu: 44974.25133689843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 56468.729800002395,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56468.16000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 75005.11543762978,
            "unit": "ns/iter",
            "extra": "iterations: 11608\ncpu: 75002.050310131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 96545.57113755425,
            "unit": "ns/iter",
            "extra": "iterations: 9327\ncpu: 96544.2049962476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 111871.26315113713,
            "unit": "ns/iter",
            "extra": "iterations: 7794\ncpu: 111868.59122401872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 130508.09143708444,
            "unit": "ns/iter",
            "extra": "iterations: 6715\ncpu: 130507.10349962756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 148824.26175068066,
            "unit": "ns/iter",
            "extra": "iterations: 5872\ncpu: 148821.03201634903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 883.9316742947054,
            "unit": "ns/iter",
            "extra": "iterations: 788971\ncpu: 883.9191808063941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 708.2493616935488,
            "unit": "ns/iter",
            "extra": "iterations: 988945\ncpu: 708.245251252597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 717.4269074033239,
            "unit": "ns/iter",
            "extra": "iterations: 956287\ncpu: 717.4145418687078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 714.1911825450785,
            "unit": "ns/iter",
            "extra": "iterations: 975633\ncpu: 714.1885319582207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1421.9650955534514,
            "unit": "ns/iter",
            "extra": "iterations: 484179\ncpu: 1421.9232969624836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6315.369995422899,
            "unit": "ns/iter",
            "extra": "iterations: 131080\ncpu: 6315.105279218752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 33216.70248399586,
            "unit": "ns/iter",
            "extra": "iterations: 24839\ncpu: 33215.78163372127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 26098.349087002807,
            "unit": "ns/iter",
            "extra": "iterations: 31654\ncpu: 26098.136096543803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 25551.352751810646,
            "unit": "ns/iter",
            "extra": "iterations: 32306\ncpu: 25550.755277657292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 26104.179667317654,
            "unit": "ns/iter",
            "extra": "iterations: 31742\ncpu: 26103.82458572235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 60451.023699999954,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60449.54000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 647566.9099999664,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 647551.7000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 537097.2789999655,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537095.2000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 534885.2110000167,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534864.7 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 529626.4810000366,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529597.8999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 390275.28372927994,
            "unit": "ns/iter",
            "extra": "iterations: 2231\ncpu: 390259.16629314085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 535578.6790000253,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 535574.7999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 665.3812306075405,
            "unit": "ns/iter",
            "extra": "iterations: 1044541\ncpu: 665.3492778167616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6184.387640067432,
            "unit": "ns/iter",
            "extra": "iterations: 132347\ncpu: 6184.158311106394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11900.47035376189,
            "unit": "ns/iter",
            "extra": "iterations: 70245\ncpu: 11899.930244145567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17732.798455159107,
            "unit": "ns/iter",
            "extra": "iterations: 47513\ncpu: 17732.300633510753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23622.33104087237,
            "unit": "ns/iter",
            "extra": "iterations: 35624\ncpu: 23621.40972378183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29476.709287958172,
            "unit": "ns/iter",
            "extra": "iterations: 28327\ncpu: 29475.89225826956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 35381.432009780074,
            "unit": "ns/iter",
            "extra": "iterations: 23724\ncpu: 35379.91485415599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 41201.48778195233,
            "unit": "ns/iter",
            "extra": "iterations: 20216\ncpu: 41201.36525524315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 46443.86945550293,
            "unit": "ns/iter",
            "extra": "iterations: 17833\ncpu: 46442.57836595061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 637.3536673561784,
            "unit": "ns/iter",
            "extra": "iterations: 1108946\ncpu: 637.338608011575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 515.7565879262679,
            "unit": "ns/iter",
            "extra": "iterations: 1359912\ncpu: 515.7475630776148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 503.366354373125,
            "unit": "ns/iter",
            "extra": "iterations: 1371893\ncpu: 503.35725891159166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 516.7029323531139,
            "unit": "ns/iter",
            "extra": "iterations: 1368355\ncpu: 516.6987368044112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 935.4634873442756,
            "unit": "ns/iter",
            "extra": "iterations: 747371\ncpu: 935.4544128685753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2832.8556573627275,
            "unit": "ns/iter",
            "extra": "iterations: 283215\ncpu: 2832.8118214077595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14132.16584669139,
            "unit": "ns/iter",
            "extra": "iterations: 56709\ncpu: 14131.749810435716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10947.77305557779,
            "unit": "ns/iter",
            "extra": "iterations: 75318\ncpu: 10947.599511404922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11112.87694908372,
            "unit": "ns/iter",
            "extra": "iterations: 73945\ncpu: 11112.824396510838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10706.929854031041,
            "unit": "ns/iter",
            "extra": "iterations: 76797\ncpu: 10706.604424652009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 33142.950597705625,
            "unit": "ns/iter",
            "extra": "iterations: 24594\ncpu: 33142.359925184835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 275713.868103983,
            "unit": "ns/iter",
            "extra": "iterations: 3154\ncpu: 275698.1927710866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 221750.82358896098,
            "unit": "ns/iter",
            "extra": "iterations: 3951\ncpu: 221741.83750948842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 217747.45344436856,
            "unit": "ns/iter",
            "extra": "iterations: 3963\ncpu: 217729.37168811352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 216718.47348952264,
            "unit": "ns/iter",
            "extra": "iterations: 4055\ncpu: 216707.17632552332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 113080.38114278844,
            "unit": "ns/iter",
            "extra": "iterations: 7753\ncpu: 113073.15877724743 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}