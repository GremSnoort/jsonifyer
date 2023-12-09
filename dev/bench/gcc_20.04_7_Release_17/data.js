window.BENCHMARK_DATA = {
  "lastUpdate": 1702085598522,
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
      }
    ]
  }
}