window.BENCHMARK_DATA = {
  "lastUpdate": 1702084993766,
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
      }
    ]
  }
}