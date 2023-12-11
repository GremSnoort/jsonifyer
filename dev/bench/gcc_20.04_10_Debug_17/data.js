window.BENCHMARK_DATA = {
  "lastUpdate": 1702285118498,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-10 20.04 Debug c++-17": [
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
        "date": 1702084741531,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14428.40442860233,
            "unit": "ns/iter",
            "extra": "iterations: 46290\ncpu: 14427.869950313245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 121845.50905432511,
            "unit": "ns/iter",
            "extra": "iterations: 6958\ncpu: 121841.03190572007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 231353.88191686402,
            "unit": "ns/iter",
            "extra": "iterations: 3777\ncpu: 231347.02144559176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 334363.9022877029,
            "unit": "ns/iter",
            "extra": "iterations: 2579\ncpu: 334357.5804575418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 442618.3951120264,
            "unit": "ns/iter",
            "extra": "iterations: 1964\ncpu: 442605.54989816714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 547439.3777498403,
            "unit": "ns/iter",
            "extra": "iterations: 1591\ncpu: 547428.2212445003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 529322.5409999992,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529300.8999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 612595.371999987,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 612580.7000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 698036.1005291091,
            "unit": "ns/iter",
            "extra": "iterations: 1323\ncpu: 698028.571428572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11080.485470846583,
            "unit": "ns/iter",
            "extra": "iterations: 62908\ncpu: 11080.26483118207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9112.452335352664,
            "unit": "ns/iter",
            "extra": "iterations: 76755\ncpu: 9112.17770829261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9077.322977505619,
            "unit": "ns/iter",
            "extra": "iterations: 77219\ncpu: 9077.206387029104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9149.458647599338,
            "unit": "ns/iter",
            "extra": "iterations: 76501\ncpu: 9149.426804878365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14844.491386126692,
            "unit": "ns/iter",
            "extra": "iterations: 48062\ncpu: 14844.340643335707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54850.29993969151,
            "unit": "ns/iter",
            "extra": "iterations: 14923\ncpu: 54849.58788447355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 251291.6734393355,
            "unit": "ns/iter",
            "extra": "iterations: 3396\ncpu: 251283.7161366313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 198477.63951593975,
            "unit": "ns/iter",
            "extra": "iterations: 4297\ncpu: 198474.00511985132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 197838.14461467843,
            "unit": "ns/iter",
            "extra": "iterations: 4308\ncpu: 197826.20705663803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 204501.19588819888,
            "unit": "ns/iter",
            "extra": "iterations: 4329\ncpu: 204491.1526911528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 467584.60116834426,
            "unit": "ns/iter",
            "extra": "iterations: 1883\ncpu: 467580.5098247485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3826432.1188523993,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3826257.786885235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3067414.996699707,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3067223.4323432385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3066130.0297029065,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3066003.960396039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3148554.3594771507,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3148402.9411764727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1741585.1144465408,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1741505.253283305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2977989.4775641533,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2977800.3205128205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6685.244665812869,
            "unit": "ns/iter",
            "extra": "iterations: 105405\ncpu: 6685.071865661034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71667.0025499703,
            "unit": "ns/iter",
            "extra": "iterations: 12157\ncpu: 71664.67878588467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 134846.05983694558,
            "unit": "ns/iter",
            "extra": "iterations: 6501\ncpu: 134840.70143054912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 198999.37556663435,
            "unit": "ns/iter",
            "extra": "iterations: 4412\ncpu: 198987.89664551217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 262229.9079624668,
            "unit": "ns/iter",
            "extra": "iterations: 3303\ncpu: 262221.64698758745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 325298.54221389355,
            "unit": "ns/iter",
            "extra": "iterations: 2665\ncpu: 325286.86679174454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 388710.7425122953,
            "unit": "ns/iter",
            "extra": "iterations: 2237\ncpu: 388691.81940098415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 451943.2998960347,
            "unit": "ns/iter",
            "extra": "iterations: 1924\ncpu: 451928.5343035364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 516682.37360049953,
            "unit": "ns/iter",
            "extra": "iterations: 1697\ncpu: 516658.98644666874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5009.776500000385,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5009.571000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4135.2153512084415,
            "unit": "ns/iter",
            "extra": "iterations: 169472\ncpu: 4135.011093277966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4116.425182993834,
            "unit": "ns/iter",
            "extra": "iterations: 171044\ncpu: 4116.22623418535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4135.990323878301,
            "unit": "ns/iter",
            "extra": "iterations: 169076\ncpu: 4135.87558257824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7153.749144788542,
            "unit": "ns/iter",
            "extra": "iterations: 97929\ncpu: 7153.4305466205315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32615.612947344423,
            "unit": "ns/iter",
            "extra": "iterations: 26322\ncpu: 32613.672973178425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 134383.43107808795,
            "unit": "ns/iter",
            "extra": "iterations: 6326\ncpu: 134379.48150489968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 107038.70238840173,
            "unit": "ns/iter",
            "extra": "iterations: 7997\ncpu: 107035.86344879329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 106546.33951623212,
            "unit": "ns/iter",
            "extra": "iterations: 7979\ncpu: 106542.67452061684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 107013.75711766019,
            "unit": "ns/iter",
            "extra": "iterations: 7938\ncpu: 107009.33484504945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 283348.87296416797,
            "unit": "ns/iter",
            "extra": "iterations: 3070\ncpu: 283339.7068403902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2185663.2658822862,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2185579.294117638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1779337.7003816895,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1779291.7938931317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1769135.236641164,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1769083.7786259511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1771187.5555555124,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1771128.352490421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1024862.0340285284,
            "unit": "ns/iter",
            "extra": "iterations: 911\ncpu: 1024837.2118551097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1717780.515769957,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1717638.9610389546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7018.033260178731,
            "unit": "ns/iter",
            "extra": "iterations: 99789\ncpu: 7017.735421739869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50242.49389999796,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50239.589999999625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 93068.82962077268,
            "unit": "ns/iter",
            "extra": "iterations: 9203\ncpu: 93065.10920352038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 135398.0512015075,
            "unit": "ns/iter",
            "extra": "iterations: 6367\ncpu: 135393.38778074447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 178048.21765913288,
            "unit": "ns/iter",
            "extra": "iterations: 4870\ncpu: 178043.5934291589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 220182.5820630194,
            "unit": "ns/iter",
            "extra": "iterations: 3936\ncpu: 220179.90345528448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 263522.42506069306,
            "unit": "ns/iter",
            "extra": "iterations: 3296\ncpu: 263522.02669903013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 306339.5419013939,
            "unit": "ns/iter",
            "extra": "iterations: 2840\ncpu: 306333.8028169012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 348631.242679512,
            "unit": "ns/iter",
            "extra": "iterations: 2493\ncpu: 348616.12515041954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5779.7144912080685,
            "unit": "ns/iter",
            "extra": "iterations: 120963\ncpu: 5779.61608095035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4709.569765579227,
            "unit": "ns/iter",
            "extra": "iterations: 149816\ncpu: 4709.4669461205785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4724.588589707739,
            "unit": "ns/iter",
            "extra": "iterations: 147551\ncpu: 4724.490515143882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4692.397713622424,
            "unit": "ns/iter",
            "extra": "iterations: 148182\ncpu: 4692.306757905807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7608.539763633997,
            "unit": "ns/iter",
            "extra": "iterations: 97476\ncpu: 7608.289219910459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23082.25022004043,
            "unit": "ns/iter",
            "extra": "iterations: 35221\ncpu: 23081.550779364545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 116616.4329517597,
            "unit": "ns/iter",
            "extra": "iterations: 7338\ncpu: 116613.9411283732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 90868.06595970444,
            "unit": "ns/iter",
            "extra": "iterations: 9430\ncpu: 90865.3022269348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 89505.3541340035,
            "unit": "ns/iter",
            "extra": "iterations: 9567\ncpu: 89502.94763248668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 87319.8960396016,
            "unit": "ns/iter",
            "extra": "iterations: 9696\ncpu: 87318.16212871361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 182160.4295068496,
            "unit": "ns/iter",
            "extra": "iterations: 4887\ncpu: 182155.0849191714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1640844.5168739487,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1640594.849023095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1292261.4541666792,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1292213.194444436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1299029.336592141,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1298957.960893841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1286255.186721975,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1286200.9681881033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 723392.1293842556,
            "unit": "ns/iter",
            "extra": "iterations: 1283\ncpu: 723363.9906469246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1249729.135935355,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 1249674.2934051058 ns\nthreads: 1"
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
        "date": 1702084976856,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14188.61113025899,
            "unit": "ns/iter",
            "extra": "iterations: 49325\ncpu: 14187.114039533704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124608.47977381373,
            "unit": "ns/iter",
            "extra": "iterations: 6897\ncpu: 124601.13092648976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 233335.9898041305,
            "unit": "ns/iter",
            "extra": "iterations: 3727\ncpu: 233327.60933726857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 341120.038234136,
            "unit": "ns/iter",
            "extra": "iterations: 2537\ncpu: 341115.6878202603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 449850.92192347534,
            "unit": "ns/iter",
            "extra": "iterations: 1934\ncpu: 449849.58634953457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 559082.4867827195,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 559073.0496453901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 538304.7010000155,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538294.3000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 622858.8859999888,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 622830.5000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 715349.897160396,
            "unit": "ns/iter",
            "extra": "iterations: 1303\ncpu: 715336.7613200315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11199.878373205818,
            "unit": "ns/iter",
            "extra": "iterations: 62700\ncpu: 11199.708133971306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9218.90718981583,
            "unit": "ns/iter",
            "extra": "iterations: 76511\ncpu: 9218.71103501456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9075.918391905225,
            "unit": "ns/iter",
            "extra": "iterations: 77284\ncpu: 9075.76859375808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9365.570294799658,
            "unit": "ns/iter",
            "extra": "iterations: 75475\ncpu: 9365.28784365685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14663.203235188945,
            "unit": "ns/iter",
            "extra": "iterations: 47787\ncpu: 14663.178270240856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50355.94089999904,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50355.00000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 267020.1766729236,
            "unit": "ns/iter",
            "extra": "iterations: 3198\ncpu: 267019.2307692305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 208979.36548347236,
            "unit": "ns/iter",
            "extra": "iterations: 4085\ncpu: 208976.47490820088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 206948.85154539044,
            "unit": "ns/iter",
            "extra": "iterations: 4109\ncpu: 206934.5582866876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 219043.7794437751,
            "unit": "ns/iter",
            "extra": "iterations: 4135\ncpu: 219033.8814993951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 472449.53039267595,
            "unit": "ns/iter",
            "extra": "iterations: 1859\ncpu: 472428.9940828394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3867883.6846473347,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3867644.813278015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3118480.744966473,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3118444.966442955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3229948.0939597427,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3229579.865771816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3114713.379999993,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3114471.3333333363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1792138.9653179087,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1791935.4527938385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3029546.0553746163,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3029301.9543973915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6640.457643400042,
            "unit": "ns/iter",
            "extra": "iterations: 105143\ncpu: 6639.802935050352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71131.78769742325,
            "unit": "ns/iter",
            "extra": "iterations: 12030\ncpu: 71126.85785536167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 137151.2179806816,
            "unit": "ns/iter",
            "extra": "iterations: 6418\ncpu: 137140.9317544404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 202105.739716477,
            "unit": "ns/iter",
            "extra": "iterations: 4303\ncpu: 202091.74994190113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 266524.8586291267,
            "unit": "ns/iter",
            "extra": "iterations: 3268\ncpu: 266498.68421052623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 331491.1704155545,
            "unit": "ns/iter",
            "extra": "iterations: 2623\ncpu: 331464.5825390769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 395320.97185656364,
            "unit": "ns/iter",
            "extra": "iterations: 2203\ncpu: 395299.5914661805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 460531.536262578,
            "unit": "ns/iter",
            "extra": "iterations: 1889\ncpu: 460518.7400741129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 524344.9182200832,
            "unit": "ns/iter",
            "extra": "iterations: 1663\ncpu: 524338.0637402266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5037.273976133079,
            "unit": "ns/iter",
            "extra": "iterations: 139691\ncpu: 5037.264390690868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4151.273063889316,
            "unit": "ns/iter",
            "extra": "iterations: 168792\ncpu: 4151.2222143229255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4126.693106464476,
            "unit": "ns/iter",
            "extra": "iterations: 169202\ncpu: 4126.629117859158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4169.875492598448,
            "unit": "ns/iter",
            "extra": "iterations: 167733\ncpu: 4169.817507586458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7197.805510334324,
            "unit": "ns/iter",
            "extra": "iterations: 97054\ncpu: 7197.655944113529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 33830.336741789666,
            "unit": "ns/iter",
            "extra": "iterations: 24449\ncpu: 33829.93987484142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 148225.32969696925,
            "unit": "ns/iter",
            "extra": "iterations: 5775\ncpu: 148223.16883116862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 117449.65080456482,
            "unit": "ns/iter",
            "extra": "iterations: 7271\ncpu: 117445.81213038115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 115117.81066126787,
            "unit": "ns/iter",
            "extra": "iterations: 7410\ncpu: 115116.03238866333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 116947.1011097443,
            "unit": "ns/iter",
            "extra": "iterations: 7299\ncpu: 116944.40334292321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 283222.5013003922,
            "unit": "ns/iter",
            "extra": "iterations: 3076\ncpu: 283216.8400520159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2205857.801418415,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 2205752.245862894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1806219.168932085,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1806180.7766990305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1803083.7771317994,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1803006.2015503955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1800967.4776698535,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1800854.1747572876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1067756.3841743139,
            "unit": "ns/iter",
            "extra": "iterations: 872\ncpu: 1067725.6880733948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1752596.9999999872,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1752530.1318267428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6941.016771280856,
            "unit": "ns/iter",
            "extra": "iterations: 101006\ncpu: 6940.729263608104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51647.9363000002,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51646.17000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95231.18043938836,
            "unit": "ns/iter",
            "extra": "iterations: 8967\ncpu: 95229.03981264663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 138371.6635678809,
            "unit": "ns/iter",
            "extra": "iterations: 6239\ncpu: 138369.8349094405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 181890.59454926717,
            "unit": "ns/iter",
            "extra": "iterations: 4770\ncpu: 181886.3522012578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 225083.02652795613,
            "unit": "ns/iter",
            "extra": "iterations: 3845\ncpu: 225077.91937581386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 270315.4377894366,
            "unit": "ns/iter",
            "extra": "iterations: 3239\ncpu: 270307.4096943492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 312182.6024619871,
            "unit": "ns/iter",
            "extra": "iterations: 2762\ncpu: 312175.4163649531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 355512.4240816273,
            "unit": "ns/iter",
            "extra": "iterations: 2450\ncpu: 355494.00000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5863.9831984281545,
            "unit": "ns/iter",
            "extra": "iterations: 119096\ncpu: 5863.784677906906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4727.272772056663,
            "unit": "ns/iter",
            "extra": "iterations: 148186\ncpu: 4727.088928778729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4716.200372635483,
            "unit": "ns/iter",
            "extra": "iterations: 148134\ncpu: 4716.193446474085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4720.704406364676,
            "unit": "ns/iter",
            "extra": "iterations: 148694\ncpu: 4720.630287704934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7202.397501080584,
            "unit": "ns/iter",
            "extra": "iterations: 97162\ncpu: 7202.389823181841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23348.341078147216,
            "unit": "ns/iter",
            "extra": "iterations: 34819\ncpu: 23347.764151756062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 119035.21609641465,
            "unit": "ns/iter",
            "extra": "iterations: 7219\ncpu: 119034.81091563917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 90418.03408489485,
            "unit": "ns/iter",
            "extra": "iterations: 9447\ncpu: 90415.073568329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 92007.01341057986,
            "unit": "ns/iter",
            "extra": "iterations: 9321\ncpu: 92004.98873511453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 87719.35317664251,
            "unit": "ns/iter",
            "extra": "iterations: 9743\ncpu: 87716.84286154172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 188264.0659802444,
            "unit": "ns/iter",
            "extra": "iterations: 4759\ncpu: 188259.97058205455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1690625.8021778571,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1690555.3539019886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1321660.8650568062,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1321616.761363624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1329484.6214285728,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1329433.714285711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1317568.1200564941,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1317551.5536723225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 729841.5531078001,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 729811.8804091255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1279502.3956043646,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1279450.5494505425 ns\nthreads: 1"
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
        "date": 1702085585827,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 13952.216513650881,
            "unit": "ns/iter",
            "extra": "iterations: 49886\ncpu: 13951.988533857195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 123354.24279056543,
            "unit": "ns/iter",
            "extra": "iterations: 6866\ncpu: 123347.8735799592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 232035.8855002635,
            "unit": "ns/iter",
            "extra": "iterations: 3738\ncpu: 232031.78170144465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 339289.1634577576,
            "unit": "ns/iter",
            "extra": "iterations: 2545\ncpu: 339278.9783889981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 447240.0525502339,
            "unit": "ns/iter",
            "extra": "iterations: 1941\ncpu: 447208.3462132924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 554008.5054243804,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 553968.9853222722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 533129.9270000044,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533082.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 618210.9249999997,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 618210.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 702839.0315142161,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 702825.9800153719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11103.514842536206,
            "unit": "ns/iter",
            "extra": "iterations: 63062\ncpu: 11102.985950334612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9055.562424101488,
            "unit": "ns/iter",
            "extra": "iterations: 77406\ncpu: 9055.363925277094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9040.401604566789,
            "unit": "ns/iter",
            "extra": "iterations: 77778\ncpu: 9039.648743860735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9259.067081595611,
            "unit": "ns/iter",
            "extra": "iterations: 77443\ncpu: 9259.049881848585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14473.104304498802,
            "unit": "ns/iter",
            "extra": "iterations: 48368\ncpu: 14472.095186900411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55709.34032554541,
            "unit": "ns/iter",
            "extra": "iterations: 14683\ncpu: 55708.49962541722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 255157.2853309462,
            "unit": "ns/iter",
            "extra": "iterations: 3354\ncpu: 255138.1335718547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 199831.70749414424,
            "unit": "ns/iter",
            "extra": "iterations: 4270\ncpu: 199829.55503512904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 204911.54511713915,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 204898.2602644394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 196048.2434982698,
            "unit": "ns/iter",
            "extra": "iterations: 4345\ncpu: 196042.32451093214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 457337.5986535601,
            "unit": "ns/iter",
            "extra": "iterations: 1931\ncpu: 457304.55722423614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3849431.691358062,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3849272.4279835424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3123113.513422866,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3123041.6107382663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3122014.6287625195,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3121836.7892976557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3081314.910299035,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3081245.182724251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1777878.6998087938,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1777782.6003824042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3022019.181818182,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3021943.1818181807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6615.762454607177,
            "unit": "ns/iter",
            "extra": "iterations: 105744\ncpu: 6615.277462551078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 69655.70868140916,
            "unit": "ns/iter",
            "extra": "iterations: 12210\ncpu: 69654.40622440631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 133949.70088333514,
            "unit": "ns/iter",
            "extra": "iterations: 6566\ncpu: 133944.57812975915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 197296.53387903294,
            "unit": "ns/iter",
            "extra": "iterations: 4398\ncpu: 197294.2928603909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 260244.65738245772,
            "unit": "ns/iter",
            "extra": "iterations: 3339\ncpu: 260229.26025756224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 322564.6135265745,
            "unit": "ns/iter",
            "extra": "iterations: 2691\ncpu: 322560.94388703007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 385675.9389110216,
            "unit": "ns/iter",
            "extra": "iterations: 2259\ncpu: 385667.9946879141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 449495.57422681275,
            "unit": "ns/iter",
            "extra": "iterations: 1940\ncpu: 449472.2164948442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 512292.7516185943,
            "unit": "ns/iter",
            "extra": "iterations: 1699\ncpu: 512285.63861095015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5030.428048032854,
            "unit": "ns/iter",
            "extra": "iterations: 138655\ncpu: 5030.2167249648755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4160.761760369023,
            "unit": "ns/iter",
            "extra": "iterations: 168192\ncpu: 4160.69254185695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4134.679902429896,
            "unit": "ns/iter",
            "extra": "iterations: 169314\ncpu: 4134.493308291096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4121.49854753083,
            "unit": "ns/iter",
            "extra": "iterations: 169711\ncpu: 4121.3951953615015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7226.066310347544,
            "unit": "ns/iter",
            "extra": "iterations: 97104\ncpu: 7225.674534519674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32114.25526704547,
            "unit": "ns/iter",
            "extra": "iterations: 25726\ncpu: 32113.77594651341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 138602.4082965843,
            "unit": "ns/iter",
            "extra": "iterations: 6123\ncpu: 138593.64690511223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 109497.02702007363,
            "unit": "ns/iter",
            "extra": "iterations: 7772\ncpu: 109491.9840452911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 107426.02635228966,
            "unit": "ns/iter",
            "extra": "iterations: 7931\ncpu: 107418.56008069625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 108986.9709495794,
            "unit": "ns/iter",
            "extra": "iterations: 7814\ncpu: 108982.92807780951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 273286.1609878061,
            "unit": "ns/iter",
            "extra": "iterations: 3199\ncpu: 273260.20631447434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2177363.8209302844,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2177253.488372096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1786444.2068965062,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1786383.9080459788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1769166.1897533168,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1769076.0910815913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1756574.4660377393,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1756442.452830189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1040291.930880697,
            "unit": "ns/iter",
            "extra": "iterations: 897\ncpu: 1040235.0055741385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1714156.974264678,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1714044.4852941213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7000.163198324125,
            "unit": "ns/iter",
            "extra": "iterations: 100240\ncpu: 6999.947126895432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52209.341599998996,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52205.63000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95897.57943507895,
            "unit": "ns/iter",
            "extra": "iterations: 8957\ncpu: 95893.94886680819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 141742.90895789486,
            "unit": "ns/iter",
            "extra": "iterations: 6151\ncpu: 141730.02763778187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 184289.70710497868,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 184283.16012725412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 228176.69038866137,
            "unit": "ns/iter",
            "extra": "iterations: 3808\ncpu: 228169.80042016646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 273076.01907441905,
            "unit": "ns/iter",
            "extra": "iterations: 3198\ncpu: 272610.19387117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 316313.962949515,
            "unit": "ns/iter",
            "extra": "iterations: 2753\ncpu: 316299.055575736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 360203.1832092685,
            "unit": "ns/iter",
            "extra": "iterations: 2418\ncpu: 360187.6757650964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5773.416618661117,
            "unit": "ns/iter",
            "extra": "iterations: 121514\ncpu: 5773.296081110002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4763.998701590099,
            "unit": "ns/iter",
            "extra": "iterations: 147103\ncpu: 4763.851179105795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4729.500020303603,
            "unit": "ns/iter",
            "extra": "iterations: 147756\ncpu: 4729.344324426792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4734.358730223092,
            "unit": "ns/iter",
            "extra": "iterations: 147774\ncpu: 4734.1210226426665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7144.997831553368,
            "unit": "ns/iter",
            "extra": "iterations: 98227\ncpu: 7144.671017133793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23214.73641069944,
            "unit": "ns/iter",
            "extra": "iterations: 34770\ncpu: 23214.069600230137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 116231.78488056613,
            "unit": "ns/iter",
            "extra": "iterations: 7368\ncpu: 116228.59663409197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 90368.26153521336,
            "unit": "ns/iter",
            "extra": "iterations: 9471\ncpu: 90365.00897476477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 88741.25939028228,
            "unit": "ns/iter",
            "extra": "iterations: 9611\ncpu: 88737.12412860237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 87547.90261085617,
            "unit": "ns/iter",
            "extra": "iterations: 9652\ncpu: 87545.34811437942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 182830.6590815914,
            "unit": "ns/iter",
            "extra": "iterations: 4878\ncpu: 182822.3862238637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1695695.6058394276,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1695595.6204379674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1339822.0907780663,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1339750.5763688707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1337548.4790764805,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1337512.6984127127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1329953.570815464,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1329884.4062947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 734745.4924782076,
            "unit": "ns/iter",
            "extra": "iterations: 1263\ncpu: 734707.9968329413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1292910.1752434254,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1292853.5465924805 ns\nthreads: 1"
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
          "id": "eb4c9017982624f35d7f984bbdbdb6b1b2fadb5b",
          "message": "Update tests",
          "timestamp": "2023-12-11T00:21:04+03:00",
          "tree_id": "b7c2be71002823c470a40ff3fe5ee758bd4d79c7",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/eb4c9017982624f35d7f984bbdbdb6b1b2fadb5b"
        },
        "date": 1702243928633,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15852.073629303095,
            "unit": "ns/iter",
            "extra": "iterations: 43135\ncpu: 15850.520459023994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 151178.81133415463,
            "unit": "ns/iter",
            "extra": "iterations: 5629\ncpu: 151168.8221709007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 290626.69775131985,
            "unit": "ns/iter",
            "extra": "iterations: 3024\ncpu: 290607.2751322752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 420667.4398058245,
            "unit": "ns/iter",
            "extra": "iterations: 2060\ncpu: 420647.66990291275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 560161.8281150168,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 560119.2332268374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 560293.1889999922,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 560284.3999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 669808.3212996519,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 669406.78700361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 786125.230281055,
            "unit": "ns/iter",
            "extra": "iterations: 1103\ncpu: 786094.469628286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 883157.3176583564,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 883147.888675623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11964.320088111077,
            "unit": "ns/iter",
            "extra": "iterations: 58562\ncpu: 11964.200334688032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9938.324809382077,
            "unit": "ns/iter",
            "extra": "iterations: 70429\ncpu: 9938.194493745468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9960.479065058109,
            "unit": "ns/iter",
            "extra": "iterations: 70122\ncpu: 9959.835714896879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9989.596026395668,
            "unit": "ns/iter",
            "extra": "iterations: 70163\ncpu: 9989.34481136783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16556.73016170219,
            "unit": "ns/iter",
            "extra": "iterations: 42733\ncpu: 16556.36393419606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63085.32415269954,
            "unit": "ns/iter",
            "extra": "iterations: 13543\ncpu: 63080.89049693565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 315555.19123064826,
            "unit": "ns/iter",
            "extra": "iterations: 2714\ncpu: 315532.90346352244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 254832.8482861332,
            "unit": "ns/iter",
            "extra": "iterations: 3355\ncpu: 254813.0551415802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 253181.01632531304,
            "unit": "ns/iter",
            "extra": "iterations: 3369\ncpu: 253175.51202137172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 263098.9800535911,
            "unit": "ns/iter",
            "extra": "iterations: 3359\ncpu: 263083.4772253644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 586693.1758827483,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 586664.8900732838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4637559.55223887,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4637192.537313426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3785947.5731708026,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3785812.6016260255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3810857.0931175146,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3810646.153846153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3773070.2550607114,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3772825.506072873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2224553.5861243983,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2224454.5454545487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7776.7428454479905,
            "unit": "ns/iter",
            "extra": "iterations: 90397\ncpu: 7776.026859298426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 97802.24928726022,
            "unit": "ns/iter",
            "extra": "iterations: 8769\ncpu: 97797.18325920863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 191817.06295976066,
            "unit": "ns/iter",
            "extra": "iterations: 4622\ncpu: 191805.90653396794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 279821.510302645,
            "unit": "ns/iter",
            "extra": "iterations: 3106\ncpu: 279818.8023180934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 371286.91834118095,
            "unit": "ns/iter",
            "extra": "iterations: 2339\ncpu: 371282.04360837926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 461722.8308510545,
            "unit": "ns/iter",
            "extra": "iterations: 1880\ncpu: 461702.44680851174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 554321.4229550019,
            "unit": "ns/iter",
            "extra": "iterations: 1577\ncpu: 554301.5218769811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 517229.9739999744,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517192.00000000146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 588248.2740000228,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 588198.8000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5767.080484952342,
            "unit": "ns/iter",
            "extra": "iterations: 121414\ncpu: 5766.728713327963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4786.913566058755,
            "unit": "ns/iter",
            "extra": "iterations: 146181\ncpu: 4786.46814565503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4744.030904553247,
            "unit": "ns/iter",
            "extra": "iterations: 147454\ncpu: 4743.960150284167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4711.799045132882,
            "unit": "ns/iter",
            "extra": "iterations: 147874\ncpu: 4711.592977805445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8523.93458775902,
            "unit": "ns/iter",
            "extra": "iterations: 82003\ncpu: 8523.694255088221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47639.549245478265,
            "unit": "ns/iter",
            "extra": "iterations: 17362\ncpu: 47636.00967630437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 201451.3725859634,
            "unit": "ns/iter",
            "extra": "iterations: 4246\ncpu: 201442.53414978817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 162362.0013348669,
            "unit": "ns/iter",
            "extra": "iterations: 5244\ncpu: 162360.81235697912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 160702.55278454366,
            "unit": "ns/iter",
            "extra": "iterations: 5333\ncpu: 160697.71235702283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 164393.22704475405,
            "unit": "ns/iter",
            "extra": "iterations: 5184\ncpu: 164392.11033950586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 374439.8333333431,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 374428.39347079064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2968021.0636942536,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2967904.140127408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2460968.8005249714,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2460836.220472446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2441899.69633512,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2441787.9581151865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2447235.5145118283,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2447070.7124010604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1481648.3142857081,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1481503.3333333316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2386636.8951405575,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2386451.9181585656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7008.275063083344,
            "unit": "ns/iter",
            "extra": "iterations: 99868\ncpu: 7008.257900428572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51847.70960000264,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51840.99000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 97810.2582289733,
            "unit": "ns/iter",
            "extra": "iterations: 9023\ncpu: 97802.8150282608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 137905.44963971118,
            "unit": "ns/iter",
            "extra": "iterations: 6245\ncpu: 137896.92554043245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 182512.87965675927,
            "unit": "ns/iter",
            "extra": "iterations: 4778\ncpu: 182507.05316031774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 225111.2958441655,
            "unit": "ns/iter",
            "extra": "iterations: 3850\ncpu: 225104.20779220774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 267750.5411402161,
            "unit": "ns/iter",
            "extra": "iterations: 3245\ncpu: 267745.4545454544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 311778.01611170603,
            "unit": "ns/iter",
            "extra": "iterations: 2793\ncpu: 311776.94235588936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 354634.7864117211,
            "unit": "ns/iter",
            "extra": "iterations: 2458\ncpu: 354623.84052074765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5821.141426919171,
            "unit": "ns/iter",
            "extra": "iterations: 120161\ncpu: 5820.748828654888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4743.074475453387,
            "unit": "ns/iter",
            "extra": "iterations: 147270\ncpu: 4742.922523256617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4761.085088269245,
            "unit": "ns/iter",
            "extra": "iterations: 146824\ncpu: 4761.00092627907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4835.706231022643,
            "unit": "ns/iter",
            "extra": "iterations: 144583\ncpu: 4835.653569230173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7309.489747650767,
            "unit": "ns/iter",
            "extra": "iterations: 95978\ncpu: 7309.4021546604545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25769.697622068677,
            "unit": "ns/iter",
            "extra": "iterations: 31540\ncpu: 25768.972733037583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 112899.9579787253,
            "unit": "ns/iter",
            "extra": "iterations: 7520\ncpu: 112899.70744680858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 90415.41149035146,
            "unit": "ns/iter",
            "extra": "iterations: 9434\ncpu: 90413.9919440327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 90031.1271383327,
            "unit": "ns/iter",
            "extra": "iterations: 9470\ncpu: 90029.25026399118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 87126.19807948217,
            "unit": "ns/iter",
            "extra": "iterations: 9789\ncpu: 87123.8430891819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 207078.37724412297,
            "unit": "ns/iter",
            "extra": "iterations: 4289\ncpu: 207077.73373746788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1681187.7906137407,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1681145.126353797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1325705.012857189,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1325689.7142857076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1318176.0710227021,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1318138.2102272739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1308878.5154929808,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1308858.3098591575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 738461.156972101,
            "unit": "ns/iter",
            "extra": "iterations: 1255\ncpu: 738446.533864533 ns\nthreads: 1"
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
        "date": 1702244257852,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15153.132379452958,
            "unit": "ns/iter",
            "extra": "iterations: 43821\ncpu: 15152.011592615416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 147766.02883103373,
            "unit": "ns/iter",
            "extra": "iterations: 5723\ncpu: 147759.287087192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 295852.54929123534,
            "unit": "ns/iter",
            "extra": "iterations: 3104\ncpu: 295519.8131443299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 427857.27891480544,
            "unit": "ns/iter",
            "extra": "iterations: 2101\ncpu: 427816.3255592573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 548401.4106250079,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 548384.375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 552107.6400000026,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 552113.3000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 656854.246999984,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 656810.3000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 761395.2858319681,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 761351.5650741351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 875730.0581613721,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 875689.3058161355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12033.786254035513,
            "unit": "ns/iter",
            "extra": "iterations: 58228\ncpu: 12032.857044720768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9924.82091618913,
            "unit": "ns/iter",
            "extra": "iterations: 70051\ncpu: 9924.5349816562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9944.325897104867,
            "unit": "ns/iter",
            "extra": "iterations: 70421\ncpu: 9944.138822226316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9931.690300415194,
            "unit": "ns/iter",
            "extra": "iterations: 70436\ncpu: 9931.510875120663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16338.34764549299,
            "unit": "ns/iter",
            "extra": "iterations: 42854\ncpu: 16337.133056424143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63078.574290979384,
            "unit": "ns/iter",
            "extra": "iterations: 13575\ncpu: 63075.29281767963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 316954.98538460664,
            "unit": "ns/iter",
            "extra": "iterations: 2600\ncpu: 316941.1923076922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 250874.17805807362,
            "unit": "ns/iter",
            "extra": "iterations: 3409\ncpu: 250871.311234966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 247540.79002320586,
            "unit": "ns/iter",
            "extra": "iterations: 3448\ncpu: 247533.61368909475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 247767.43914569193,
            "unit": "ns/iter",
            "extra": "iterations: 3418\ncpu: 247769.9239321248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 598342.3168643024,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 598317.5230566524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4536884.8059701715,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4536730.348258693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3753990.485943789,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3753908.0321285115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3740514.1847388456,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3740354.2168674786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3725825.440000108,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3725583.9999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2208248.990740721,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2208236.3425925956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7672.692890091683,
            "unit": "ns/iter",
            "extra": "iterations: 91267\ncpu: 7672.452255470246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 95330.20685037987,
            "unit": "ns/iter",
            "extra": "iterations: 8963\ncpu: 95329.61062144363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 184165.088191951,
            "unit": "ns/iter",
            "extra": "iterations: 4751\ncpu: 184162.40791412332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 272547.2756349945,
            "unit": "ns/iter",
            "extra": "iterations: 3189\ncpu: 272545.7196613355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 364129.4881791792,
            "unit": "ns/iter",
            "extra": "iterations: 2411\ncpu: 364114.5582745748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 452362.9377891961,
            "unit": "ns/iter",
            "extra": "iterations: 1945\ncpu: 452360.6683804616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 537198.3366153822,
            "unit": "ns/iter",
            "extra": "iterations: 1625\ncpu: 537198.6461538452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 500218.01500002993,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500224.5999999957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 571925.7619999781,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571877.6000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5861.573740059834,
            "unit": "ns/iter",
            "extra": "iterations: 119589\ncpu: 5861.335072623725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4818.306176336916,
            "unit": "ns/iter",
            "extra": "iterations: 145426\ncpu: 4818.130870683384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4804.598362118981,
            "unit": "ns/iter",
            "extra": "iterations: 145676\ncpu: 4804.5752217249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4840.8457185108455,
            "unit": "ns/iter",
            "extra": "iterations: 144716\ncpu: 4840.74393985462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8568.53988264774,
            "unit": "ns/iter",
            "extra": "iterations: 81464\ncpu: 8568.448639890023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47246.35630583534,
            "unit": "ns/iter",
            "extra": "iterations: 17238\ncpu: 47244.79638009067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 202748.50980855455,
            "unit": "ns/iter",
            "extra": "iterations: 4231\ncpu: 202746.25384069883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 162401.32229832822,
            "unit": "ns/iter",
            "extra": "iterations: 5256\ncpu: 162394.84398782393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 159001.4912671906,
            "unit": "ns/iter",
            "extra": "iterations: 5382\ncpu: 158998.68078781076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 162449.00341556038,
            "unit": "ns/iter",
            "extra": "iterations: 5270\ncpu: 162440.79696394666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 372604.449163456,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 372591.97769197833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2878588.700617354,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2878549.382716035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2420089.174025876,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2419997.922077933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2410218.592207717,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2410214.285714297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2406674.3617570745,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2406574.677002585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1422981.184732756,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1422973.1297709844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2344042.7035176978,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2343945.22613066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6994.417854035778,
            "unit": "ns/iter",
            "extra": "iterations: 100011\ncpu: 6994.319624841246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50316.589099998055,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50315.22999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 93976.32045528946,
            "unit": "ns/iter",
            "extra": "iterations: 9137\ncpu: 93972.46360949968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 136732.9684627555,
            "unit": "ns/iter",
            "extra": "iterations: 6310\ncpu: 136732.01267828784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 180713.89330282802,
            "unit": "ns/iter",
            "extra": "iterations: 4808\ncpu: 180709.65058236208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 223547.36466649236,
            "unit": "ns/iter",
            "extra": "iterations: 3883\ncpu: 223545.42879217013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 266898.94756210025,
            "unit": "ns/iter",
            "extra": "iterations: 3261\ncpu: 266896.0441582336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 309533.30640570493,
            "unit": "ns/iter",
            "extra": "iterations: 2810\ncpu: 309525.1601423495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 363183.68709416216,
            "unit": "ns/iter",
            "extra": "iterations: 2464\ncpu: 363181.20941558614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5824.840830507013,
            "unit": "ns/iter",
            "extra": "iterations: 120601\ncpu: 5824.483213240351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4784.823655252812,
            "unit": "ns/iter",
            "extra": "iterations: 146310\ncpu: 4784.586836169801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4741.504373631462,
            "unit": "ns/iter",
            "extra": "iterations: 147932\ncpu: 4741.331152150991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4717.7825117996845,
            "unit": "ns/iter",
            "extra": "iterations: 140895\ncpu: 4717.78061677134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7296.9569775889,
            "unit": "ns/iter",
            "extra": "iterations: 94997\ncpu: 7296.808320262771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26162.544567484507,
            "unit": "ns/iter",
            "extra": "iterations: 31155\ncpu: 26162.3591718825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 114544.04511670237,
            "unit": "ns/iter",
            "extra": "iterations: 7669\ncpu: 114540.67023079959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 86529.58682453178,
            "unit": "ns/iter",
            "extra": "iterations: 9882\ncpu: 86527.67658368818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 86336.24335791622,
            "unit": "ns/iter",
            "extra": "iterations: 9899\ncpu: 86319.0928376606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 84176.1179203315,
            "unit": "ns/iter",
            "extra": "iterations: 10117\ncpu: 84173.41109024535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 201773.07833371413,
            "unit": "ns/iter",
            "extra": "iterations: 4417\ncpu: 201769.0966719491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1655163.5514184318,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1655137.9432624327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1313069.90960454,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1313034.7457627133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1307384.4219409944,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1307397.3277074492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1299028.7852161725,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1299001.5341701568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 714622.3847340023,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 714621.2027756458 ns\nthreads: 1"
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
        "date": 1702285117525,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15528.439904680283,
            "unit": "ns/iter",
            "extra": "iterations: 46160\ncpu: 15526.548960138649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 146965.1306469111,
            "unit": "ns/iter",
            "extra": "iterations: 5534\ncpu: 146955.14998192986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 278314.40307592874,
            "unit": "ns/iter",
            "extra": "iterations: 3121\ncpu: 278306.15187439916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 409151.3102310113,
            "unit": "ns/iter",
            "extra": "iterations: 2121\ncpu: 409136.5865157943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 549512.7815021775,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 549493.6685288644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 550117.6320000241,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 550116.5000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 657301.3805436513,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 657288.6266094425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 777042.9045267276,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 777005.1851851848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 862121.7823639886,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 862093.245778611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11990.45833689641,
            "unit": "ns/iter",
            "extra": "iterations: 58457\ncpu: 11989.674461570026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9875.836554491014,
            "unit": "ns/iter",
            "extra": "iterations: 70782\ncpu: 9875.40193834592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9935.188513292866,
            "unit": "ns/iter",
            "extra": "iterations: 70377\ncpu: 9934.54111428451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9937.408569524561,
            "unit": "ns/iter",
            "extra": "iterations: 70529\ncpu: 9936.996129251818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16497.53119714558,
            "unit": "ns/iter",
            "extra": "iterations: 43161\ncpu: 16497.249832024263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 62973.95141158946,
            "unit": "ns/iter",
            "extra": "iterations: 13460\ncpu: 62971.46359583952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 315796.7827522861,
            "unit": "ns/iter",
            "extra": "iterations: 2725\ncpu: 315784.73394495423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 251587.24316377076,
            "unit": "ns/iter",
            "extra": "iterations: 3401\ncpu: 251573.1255513078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 249596.34414255142,
            "unit": "ns/iter",
            "extra": "iterations: 3423\ncpu: 249586.88285129968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 262928.21702498366,
            "unit": "ns/iter",
            "extra": "iterations: 3442\ncpu: 262924.2882045326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 573912.1971185097,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 573904.846103472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4544276.960784293,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4544064.705882342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3747715.7309238003,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3747591.566265065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3775974.662650549,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3775687.9518072377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3747844.27710856,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3747828.5140562304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2156927.046296228,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2156895.6018518545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7650.004275143435,
            "unit": "ns/iter",
            "extra": "iterations: 91225\ncpu: 7650.003836667571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 95675.22381058386,
            "unit": "ns/iter",
            "extra": "iterations: 8954\ncpu: 95674.25731516618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 186511.1850285388,
            "unit": "ns/iter",
            "extra": "iterations: 4729\ncpu: 186511.63036582773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 274073.94847626553,
            "unit": "ns/iter",
            "extra": "iterations: 3183\ncpu: 274067.6720075407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 361090.0806652665,
            "unit": "ns/iter",
            "extra": "iterations: 2405\ncpu: 361089.4802494799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 449957.0733470836,
            "unit": "ns/iter",
            "extra": "iterations: 1936\ncpu: 449955.52685950283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 541084.5960469472,
            "unit": "ns/iter",
            "extra": "iterations: 1619\ncpu: 541083.1377393454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 502476.4940000068,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502481.600000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 573022.5500000188,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573022.8999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5858.399472935447,
            "unit": "ns/iter",
            "extra": "iterations: 119530\ncpu: 5858.287459215256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4849.078600749048,
            "unit": "ns/iter",
            "extra": "iterations: 144706\ncpu: 4849.069838154606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4829.892858135874,
            "unit": "ns/iter",
            "extra": "iterations: 143856\ncpu: 4829.827049271516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4814.412869113884,
            "unit": "ns/iter",
            "extra": "iterations: 144874\ncpu: 4814.257906870761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8551.89065861514,
            "unit": "ns/iter",
            "extra": "iterations: 81808\ncpu: 8551.743105808737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47376.52163970196,
            "unit": "ns/iter",
            "extra": "iterations: 17491\ncpu: 47374.46115144937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 206338.86076248574,
            "unit": "ns/iter",
            "extra": "iterations: 4223\ncpu: 206328.43949798692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 163322.06077347766,
            "unit": "ns/iter",
            "extra": "iterations: 5249\ncpu: 163314.02171842242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 160783.40146670907,
            "unit": "ns/iter",
            "extra": "iterations: 5318\ncpu: 160777.58555848006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 162645.467211566,
            "unit": "ns/iter",
            "extra": "iterations: 5261\ncpu: 162635.94373693204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 370993.14968016866,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 370981.91897654487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2934837.4433962996,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2934684.591194963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2446054.8903394374,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2445992.1671018163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2428992.429319284,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2428921.989528795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2453780.66842094,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2453701.3157894714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1437198.237366046,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1437139.5099540572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2378305.519084068,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2378293.8931297665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7000.688553939448,
            "unit": "ns/iter",
            "extra": "iterations: 99982\ncpu: 7000.358064451605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50200.43569999757,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50201.0300000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 92255.62087143207,
            "unit": "ns/iter",
            "extra": "iterations: 9295\ncpu: 92248.76815492184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 134756.30269933082,
            "unit": "ns/iter",
            "extra": "iterations: 6409\ncpu: 134753.51848962373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 177131.8661062083,
            "unit": "ns/iter",
            "extra": "iterations: 4877\ncpu: 177120.77096575804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 219761.50088674712,
            "unit": "ns/iter",
            "extra": "iterations: 3947\ncpu: 219756.57461363112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 262261.1255280585,
            "unit": "ns/iter",
            "extra": "iterations: 3314\ncpu: 262228.99818949954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 304233.9254201554,
            "unit": "ns/iter",
            "extra": "iterations: 2856\ncpu: 304225.42016806855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 346338.3545562982,
            "unit": "ns/iter",
            "extra": "iterations: 2513\ncpu: 346325.0298448081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5760.947300337041,
            "unit": "ns/iter",
            "extra": "iterations: 121367\ncpu: 5760.896289765706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4741.284330688264,
            "unit": "ns/iter",
            "extra": "iterations: 147958\ncpu: 4741.165736222468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4742.342720779914,
            "unit": "ns/iter",
            "extra": "iterations: 147715\ncpu: 4742.395152828052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4660.367070240484,
            "unit": "ns/iter",
            "extra": "iterations: 150241\ncpu: 4660.41227095137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7245.924144272619,
            "unit": "ns/iter",
            "extra": "iterations: 96789\ncpu: 7245.997995639969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26040.57895408169,
            "unit": "ns/iter",
            "extra": "iterations: 31360\ncpu: 26040.666454081682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 111650.21612818667,
            "unit": "ns/iter",
            "extra": "iterations: 7676\ncpu: 111650.67743616304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 86574.39725888146,
            "unit": "ns/iter",
            "extra": "iterations: 9850\ncpu: 86573.25888324906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 87590.59223399592,
            "unit": "ns/iter",
            "extra": "iterations: 9812\ncpu: 87590.65430085543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 83717.32853622203,
            "unit": "ns/iter",
            "extra": "iterations: 10145\ncpu: 83715.9093149331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 200473.43073788218,
            "unit": "ns/iter",
            "extra": "iterations: 4418\ncpu: 200470.1448619274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1618818.973776234,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1618786.8881118959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1304127.707865201,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1304125.280898888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1294722.2350487206,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1294705.702364398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1285735.405517228,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1285693.241379312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 719406.3333333692,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 719385.6589147339 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}