window.BENCHMARK_DATA = {
  "lastUpdate": 1702310760495,
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
      },
      {
        "commit": {
          "author": {
            "email": "a.patenkova@3opinion.ai",
            "name": "a.patenkova"
          },
          "committer": {
            "email": "a.patenkova@3opinion.ai",
            "name": "a.patenkova"
          },
          "distinct": true,
          "id": "85d3fc64843f115b47e5a722ba83cd4466299644",
          "message": "Simple Inheritance V1",
          "timestamp": "2023-12-11T18:41:15+03:00",
          "tree_id": "8007add2e1aa04b15f12fdb3fdfca620b2eec68e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/85d3fc64843f115b47e5a722ba83cd4466299644"
        },
        "date": 1702309469407,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15121.12225212659,
            "unit": "ns/iter",
            "extra": "iterations: 46445\ncpu: 15120.045214770162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 146742.9453314824,
            "unit": "ns/iter",
            "extra": "iterations: 5762\ncpu: 146734.9878514405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 285487.3570038923,
            "unit": "ns/iter",
            "extra": "iterations: 3084\ncpu: 285461.44617380033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 409739.4474431716,
            "unit": "ns/iter",
            "extra": "iterations: 2112\ncpu: 409736.2689393941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 546331.6937888174,
            "unit": "ns/iter",
            "extra": "iterations: 1610\ncpu: 546297.1428571426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 546316.2830000102,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 546318.6000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 651183.1969999947,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 651149.9 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 764886.6336876586,
            "unit": "ns/iter",
            "extra": "iterations: 1223\ncpu: 764814.554374489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 861495.6750232312,
            "unit": "ns/iter",
            "extra": "iterations: 1077\ncpu: 861444.2896935926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12044.504907193745,
            "unit": "ns/iter",
            "extra": "iterations: 58078\ncpu: 12043.835875891049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9997.114034584702,
            "unit": "ns/iter",
            "extra": "iterations: 69742\ncpu: 9996.271973846466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9931.31329432268,
            "unit": "ns/iter",
            "extra": "iterations: 70579\ncpu: 9930.958217033394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9971.707366325454,
            "unit": "ns/iter",
            "extra": "iterations: 70320\ncpu: 9971.75056882821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16728.333558453975,
            "unit": "ns/iter",
            "extra": "iterations: 42940\ncpu: 16728.374476013018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 61440.11167658295,
            "unit": "ns/iter",
            "extra": "iterations: 13951\ncpu: 61437.88975700668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 314203.36143695534,
            "unit": "ns/iter",
            "extra": "iterations: 2728\ncpu: 314191.6422287389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 252253.00147929456,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 252249.76331361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 250470.0859489588,
            "unit": "ns/iter",
            "extra": "iterations: 3409\ncpu: 250467.38046347833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 259804.32434782444,
            "unit": "ns/iter",
            "extra": "iterations: 3450\ncpu: 259783.24637681243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 560747.8090967358,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 560716.1434977581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4583778.881773421,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4583698.522167494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3780167.209677368,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3780042.7419354767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3726833.1880000005,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3726698.4000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3718642.683999974,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3718534.40000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2128338.9565217807,
            "unit": "ns/iter",
            "extra": "iterations: 437\ncpu: 2128252.8604118982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7617.437173231121,
            "unit": "ns/iter",
            "extra": "iterations: 91808\ncpu: 7617.164081561515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 93502.7840122989,
            "unit": "ns/iter",
            "extra": "iterations: 9107\ncpu: 93501.40551224307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 182085.3377510824,
            "unit": "ns/iter",
            "extra": "iterations: 4829\ncpu: 182078.1735348932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 268922.5329153691,
            "unit": "ns/iter",
            "extra": "iterations: 3190\ncpu: 268914.8275862061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 355631.25071574835,
            "unit": "ns/iter",
            "extra": "iterations: 2445\ncpu: 355623.0265848671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 441182.6126903493,
            "unit": "ns/iter",
            "extra": "iterations: 1970\ncpu: 441180.96446700697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 528682.6796116608,
            "unit": "ns/iter",
            "extra": "iterations: 1648\ncpu: 528671.7233009713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 507539.51899997675,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507542.2999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 562543.9979999954,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562522.8999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5746.289955821847,
            "unit": "ns/iter",
            "extra": "iterations: 121553\ncpu: 5746.114863475163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4828.934196630085,
            "unit": "ns/iter",
            "extra": "iterations: 144871\ncpu: 4828.831167038252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4686.1398240052995,
            "unit": "ns/iter",
            "extra": "iterations: 149209\ncpu: 4685.997493448794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4699.164822941763,
            "unit": "ns/iter",
            "extra": "iterations: 148341\ncpu: 4699.061621534159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8385.638993892024,
            "unit": "ns/iter",
            "extra": "iterations: 83331\ncpu: 8385.603196889517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 45989.095683652224,
            "unit": "ns/iter",
            "extra": "iterations: 17955\ncpu: 45988.281815650196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 193629.97011545792,
            "unit": "ns/iter",
            "extra": "iterations: 4417\ncpu: 193626.42064749714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 157515.818687433,
            "unit": "ns/iter",
            "extra": "iterations: 5394\ncpu: 157513.40378198028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 156691.3482960791,
            "unit": "ns/iter",
            "extra": "iterations: 5458\ncpu: 156690.52766581203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 157184.33167312367,
            "unit": "ns/iter",
            "extra": "iterations: 5421\ncpu: 157182.14351595694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 360538.10410619015,
            "unit": "ns/iter",
            "extra": "iterations: 2411\ncpu: 360532.8079635014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2875978.9722222444,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2875941.0493827257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2419439.73575129,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2419380.0518134795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2365250.513994958,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2365214.75826972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2389593.7692307495,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2389529.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1424695.134762631,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1424674.4257274203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2330317.875311733,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2330226.6832917687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7058.428727173783,
            "unit": "ns/iter",
            "extra": "iterations: 99063\ncpu: 7058.246772256033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51667.916299999204,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51667.319999999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95588.44523756379,
            "unit": "ns/iter",
            "extra": "iterations: 8966\ncpu: 95587.73142984611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 138717.28322861373,
            "unit": "ns/iter",
            "extra": "iterations: 6207\ncpu: 138716.51361366158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 182466.59726603318,
            "unit": "ns/iter",
            "extra": "iterations: 4755\ncpu: 182463.30178759174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 226897.50248106435,
            "unit": "ns/iter",
            "extra": "iterations: 3829\ncpu: 226882.13632802243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 270276.2732648593,
            "unit": "ns/iter",
            "extra": "iterations: 3213\ncpu: 270263.52318705246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 313762.54814280977,
            "unit": "ns/iter",
            "extra": "iterations: 2773\ncpu: 313753.19148936035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 356778.6478296529,
            "unit": "ns/iter",
            "extra": "iterations: 2442\ncpu: 356763.1449631447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5887.853995023189,
            "unit": "ns/iter",
            "extra": "iterations: 118948\ncpu: 5887.664357534409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4799.640628633212,
            "unit": "ns/iter",
            "extra": "iterations: 146222\ncpu: 4799.422795475367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4768.786136905087,
            "unit": "ns/iter",
            "extra": "iterations: 146028\ncpu: 4770.049579532695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4796.121263766108,
            "unit": "ns/iter",
            "extra": "iterations: 146103\ncpu: 4795.96312190711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7291.930988089212,
            "unit": "ns/iter",
            "extra": "iterations: 95882\ncpu: 7291.7972090695475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25530.49142248822,
            "unit": "ns/iter",
            "extra": "iterations: 31944\ncpu: 25530.008765338975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 118430.36761669346,
            "unit": "ns/iter",
            "extra": "iterations: 7263\ncpu: 118426.39405204481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 92409.5739683215,
            "unit": "ns/iter",
            "extra": "iterations: 9281\ncpu: 92408.1887727609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 92585.58773350214,
            "unit": "ns/iter",
            "extra": "iterations: 9261\ncpu: 92583.38192419898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 89417.80219321324,
            "unit": "ns/iter",
            "extra": "iterations: 9575\ncpu: 89417.1488250664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 199120.49509804003,
            "unit": "ns/iter",
            "extra": "iterations: 4488\ncpu: 199137.2326203181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1703757.3559633496,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1703737.7981651372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1319345.3428164874,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1319317.4964438195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1336819.260806874,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1336818.1556195905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1320631.180911691,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1320563.3903133937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 708268.3136954952,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 708256.4651874544 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "a.patenkova@3opinion.ai",
            "name": "a.patenkova"
          },
          "committer": {
            "email": "a.patenkova@3opinion.ai",
            "name": "a.patenkova"
          },
          "distinct": true,
          "id": "825d4b8b89216ec0a9dcc887895418d7e677e406",
          "message": "set(CMAKE_VERBOSE_MAKEFILE OFF)",
          "timestamp": "2023-12-11T18:58:08+03:00",
          "tree_id": "455cf7a424831f799b54c049bdff16a090b6030a",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/825d4b8b89216ec0a9dcc887895418d7e677e406"
        },
        "date": 1702310554675,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15370.533409814403,
            "unit": "ns/iter",
            "extra": "iterations: 46199\ncpu: 15370.237451027078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 148374.76281035863,
            "unit": "ns/iter",
            "extra": "iterations: 5679\ncpu: 148366.2440570523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 281590.84938190633,
            "unit": "ns/iter",
            "extra": "iterations: 3074\ncpu: 281588.5491216655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 413735.15990452253,
            "unit": "ns/iter",
            "extra": "iterations: 2095\ncpu: 413707.78042959404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 550681.7837837856,
            "unit": "ns/iter",
            "extra": "iterations: 1591\ncpu: 550654.5568824639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 553779.7190000332,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 553732.3000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 663597.5771428499,
            "unit": "ns/iter",
            "extra": "iterations: 1400\ncpu: 663560.0714285715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 764860.0894780427,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 764803.2311516163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 876656.854048942,
            "unit": "ns/iter",
            "extra": "iterations: 1062\ncpu: 876597.7401129935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11955.450408423398,
            "unit": "ns/iter",
            "extra": "iterations: 53376\ncpu: 11955.236435851324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9949.013745752816,
            "unit": "ns/iter",
            "extra": "iterations: 71222\ncpu: 9948.445704978813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9814.709758600373,
            "unit": "ns/iter",
            "extra": "iterations: 71127\ncpu: 9814.187298775418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9802.467172176865,
            "unit": "ns/iter",
            "extra": "iterations: 71479\ncpu: 9802.48464584004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16032.427436707556,
            "unit": "ns/iter",
            "extra": "iterations: 43686\ncpu: 16032.426864441713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63118.84494134928,
            "unit": "ns/iter",
            "extra": "iterations: 13640\ncpu: 63118.49706744873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 328969.80259740254,
            "unit": "ns/iter",
            "extra": "iterations: 2695\ncpu: 328970.16697588173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 253424.52644088172,
            "unit": "ns/iter",
            "extra": "iterations: 3366\ncpu: 253427.21330956608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 253560.51216617782,
            "unit": "ns/iter",
            "extra": "iterations: 3370\ncpu: 253552.5816023739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 250633.1841409793,
            "unit": "ns/iter",
            "extra": "iterations: 3405\ncpu: 250633.36270190883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 588803.9796721268,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 588799.6721311478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4618549.19895285,
            "unit": "ns/iter",
            "extra": "iterations: 191\ncpu: 4618463.3507853495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3779985.6032386664,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3779958.2995951422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3777479.4308941127,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3777445.9349593422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3738228.9116467983,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3738118.4738955884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2173558.1728971335,
            "unit": "ns/iter",
            "extra": "iterations: 428\ncpu: 2173503.5046729012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7542.279787907238,
            "unit": "ns/iter",
            "extra": "iterations: 93167\ncpu: 7542.194124529074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 95862.43106926836,
            "unit": "ns/iter",
            "extra": "iterations: 8922\ncpu: 95860.26675633258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 185388.8545415997,
            "unit": "ns/iter",
            "extra": "iterations: 4723\ncpu: 185384.67076010996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 274610.1494616871,
            "unit": "ns/iter",
            "extra": "iterations: 3158\ncpu: 274602.3115896133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 364987.7467668044,
            "unit": "ns/iter",
            "extra": "iterations: 2397\ncpu: 364985.2315394244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 451903.1167274411,
            "unit": "ns/iter",
            "extra": "iterations: 1919\ncpu: 451900.52110474126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 542463.4863523692,
            "unit": "ns/iter",
            "extra": "iterations: 1612\ncpu: 542440.6947890813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 505152.80000001896,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505158.60000000143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 600901.5106215554,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 600866.0110149496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5833.462844269323,
            "unit": "ns/iter",
            "extra": "iterations: 120291\ncpu: 5833.44472986343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4811.724270427039,
            "unit": "ns/iter",
            "extra": "iterations: 145222\ncpu: 4811.728939141435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4715.429355531033,
            "unit": "ns/iter",
            "extra": "iterations: 148122\ncpu: 4715.384615384605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4768.422176378918,
            "unit": "ns/iter",
            "extra": "iterations: 146877\ncpu: 4768.318388856001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8309.962382333571,
            "unit": "ns/iter",
            "extra": "iterations: 84455\ncpu: 8309.872713279325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47549.166263395295,
            "unit": "ns/iter",
            "extra": "iterations: 17358\ncpu: 47547.33264200926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 195516.23913537592,
            "unit": "ns/iter",
            "extra": "iterations: 4395\ncpu: 195515.47212741757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 158232.51188063668,
            "unit": "ns/iter",
            "extra": "iterations: 5429\ncpu: 158230.0607846752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 160134.47401751304,
            "unit": "ns/iter",
            "extra": "iterations: 5369\ncpu: 160132.5945241198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 159543.48660216565,
            "unit": "ns/iter",
            "extra": "iterations: 5374\ncpu: 159537.23483438732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 370812.8787750006,
            "unit": "ns/iter",
            "extra": "iterations: 2351\ncpu: 370783.1986388745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2956834.730158724,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2956718.0952380933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2454512.9601064185,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2454428.989361716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2444459.390501247,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2444374.406332465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2426338.838120194,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2426313.8381201015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1448243.3722742023,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1448192.9906541966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2365890.2020461177,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2365798.976982091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7027.766335997546,
            "unit": "ns/iter",
            "extra": "iterations: 99596\ncpu: 7027.768183461239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51446.17180000069,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51446.17999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 97180.23295705805,
            "unit": "ns/iter",
            "extra": "iterations: 9036\ncpu: 97176.35015493553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 137628.4301512477,
            "unit": "ns/iter",
            "extra": "iterations: 6149\ncpu: 137623.87380061726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 181275.17190426722,
            "unit": "ns/iter",
            "extra": "iterations: 4805\ncpu: 181267.76274713766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 223867.28829759383,
            "unit": "ns/iter",
            "extra": "iterations: 3871\ncpu: 223864.66029449762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 267077.9156144106,
            "unit": "ns/iter",
            "extra": "iterations: 3247\ncpu: 267070.18786572124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 310849.3250089287,
            "unit": "ns/iter",
            "extra": "iterations: 2803\ncpu: 310842.5258651442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 353471.03478964727,
            "unit": "ns/iter",
            "extra": "iterations: 2472\ncpu: 353453.9239482189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5778.555810144303,
            "unit": "ns/iter",
            "extra": "iterations: 120892\ncpu: 5778.55937531017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4728.542878644572,
            "unit": "ns/iter",
            "extra": "iterations: 148827\ncpu: 4728.476687697836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4727.979653048282,
            "unit": "ns/iter",
            "extra": "iterations: 148032\ncpu: 4727.762916126266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4721.767368166241,
            "unit": "ns/iter",
            "extra": "iterations: 148634\ncpu: 4721.727868455453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7214.692047795859,
            "unit": "ns/iter",
            "extra": "iterations: 97080\ncpu: 7214.446847960439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26204.74782469099,
            "unit": "ns/iter",
            "extra": "iterations: 31145\ncpu: 26204.430887782873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 121721.38216922288,
            "unit": "ns/iter",
            "extra": "iterations: 7044\ncpu: 121718.34185122035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 91697.179758473,
            "unit": "ns/iter",
            "extra": "iterations: 9357\ncpu: 91697.23201880995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 91558.843753328,
            "unit": "ns/iter",
            "extra": "iterations: 9389\ncpu: 91542.44328469517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 88292.50342323321,
            "unit": "ns/iter",
            "extra": "iterations: 9640\ncpu: 88289.78215767602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 204835.37121737128,
            "unit": "ns/iter",
            "extra": "iterations: 4329\ncpu: 204832.22453222523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1675173.424954809,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1675154.2495479186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1324890.804285701,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1324849.8571428515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1333321.3510791766,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1333222.1582733777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1304978.1938202211,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1304908.9887640337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 722490.1859922106,
            "unit": "ns/iter",
            "extra": "iterations: 1285\ncpu: 722457.7431906656 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "a.patenkova@3opinion.ai",
            "name": "a.patenkova"
          },
          "committer": {
            "email": "a.patenkova@3opinion.ai",
            "name": "a.patenkova"
          },
          "distinct": true,
          "id": "2f550c1607320f8cf14031a2e95845f60ee8b88b",
          "message": "Upd",
          "timestamp": "2023-12-11T19:02:05+03:00",
          "tree_id": "337d408608d901b7b5b76fdd59c6fa5b12dc6c2e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/2f550c1607320f8cf14031a2e95845f60ee8b88b"
        },
        "date": 1702310759392,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15233.52789885701,
            "unit": "ns/iter",
            "extra": "iterations: 46113\ncpu: 15232.97334807972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 147585.68848758485,
            "unit": "ns/iter",
            "extra": "iterations: 5759\ncpu: 147571.19291543675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 278850.8817860631,
            "unit": "ns/iter",
            "extra": "iterations: 3113\ncpu: 278842.7561837455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 423888.9579395112,
            "unit": "ns/iter",
            "extra": "iterations: 2116\ncpu: 423875.5671077504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 547969.479477606,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 547959.4527363186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 549532.1500000046,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549528.0000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 653445.8440000036,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653444.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 765300.0647010555,
            "unit": "ns/iter",
            "extra": "iterations: 1221\ncpu: 765278.2964782966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 880857.8078358135,
            "unit": "ns/iter",
            "extra": "iterations: 1072\ncpu: 880799.8134328362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12021.993952293818,
            "unit": "ns/iter",
            "extra": "iterations: 59196\ncpu: 12021.111223731321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9801.002318317529,
            "unit": "ns/iter",
            "extra": "iterations: 72035\ncpu: 9800.989796626634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9749.092576103174,
            "unit": "ns/iter",
            "extra": "iterations: 71876\ncpu: 9749.074795481103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9880.910694547461,
            "unit": "ns/iter",
            "extra": "iterations: 66043\ncpu: 9880.889723362061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15891.013633373412,
            "unit": "ns/iter",
            "extra": "iterations: 44083\ncpu: 15891.187078919278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 61814.22298024979,
            "unit": "ns/iter",
            "extra": "iterations: 13925\ncpu: 61812.739676840174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 319739.3162808048,
            "unit": "ns/iter",
            "extra": "iterations: 2678\ncpu: 319742.60642270336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 255943.02125748454,
            "unit": "ns/iter",
            "extra": "iterations: 3340\ncpu: 255938.68263473056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 278892.19475096196,
            "unit": "ns/iter",
            "extra": "iterations: 3353\ncpu: 278895.0193856245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 253633.42397137178,
            "unit": "ns/iter",
            "extra": "iterations: 3354\ncpu: 253623.82230172888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 568560.7840466918,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 568552.7237354068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4567107.024509839,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4567113.725490194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3863787.6370967985,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3863678.6290322593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3752887.499999957,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3752802.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3728790.722891586,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3728781.526104418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2160698.618604659,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2160652.7906976747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7664.390070844297,
            "unit": "ns/iter",
            "extra": "iterations: 91327\ncpu: 7664.36760213301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 95771.7303834147,
            "unit": "ns/iter",
            "extra": "iterations: 8972\ncpu: 95771.72313865382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 185337.57263871082,
            "unit": "ns/iter",
            "extra": "iterations: 4722\ncpu: 185333.39686573533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 272934.3626373641,
            "unit": "ns/iter",
            "extra": "iterations: 3185\ncpu: 272924.61538461567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 360846.45764119376,
            "unit": "ns/iter",
            "extra": "iterations: 2408\ncpu: 360846.4700996681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 449566.1283505144,
            "unit": "ns/iter",
            "extra": "iterations: 1940\ncpu: 449560.72164948477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 536868.0253399238,
            "unit": "ns/iter",
            "extra": "iterations: 1618\ncpu: 536868.0469715717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 501133.6780000022,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501118.6999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 572644.0720000027,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572650.2999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5852.209778506704,
            "unit": "ns/iter",
            "extra": "iterations: 119507\ncpu: 5852.206146920267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4831.00429187495,
            "unit": "ns/iter",
            "extra": "iterations: 145624\ncpu: 4831.058067351504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4698.536658307263,
            "unit": "ns/iter",
            "extra": "iterations: 149134\ncpu: 4698.420883232496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4803.108226323412,
            "unit": "ns/iter",
            "extra": "iterations: 146092\ncpu: 4803.166497823302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8187.527747970507,
            "unit": "ns/iter",
            "extra": "iterations: 85736\ncpu: 8187.39152747974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46159.0557554953,
            "unit": "ns/iter",
            "extra": "iterations: 18061\ncpu: 46159.509440230526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 195504.40990372136,
            "unit": "ns/iter",
            "extra": "iterations: 4362\ncpu: 195502.47592847212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 159252.80416202152,
            "unit": "ns/iter",
            "extra": "iterations: 5382\ncpu: 159254.45930880806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 158646.93834474942,
            "unit": "ns/iter",
            "extra": "iterations: 5401\ncpu: 158644.52879096498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 159675.2651543362,
            "unit": "ns/iter",
            "extra": "iterations: 5378\ncpu: 159676.9431015246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 368839.77947413374,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 368835.92027141666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2922214.1718749483,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2922182.5000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2443285.9028870957,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2443293.4383202028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2430840.8403142476,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2430791.884816749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2415325.6344648344,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2415314.0992167103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1439398.966981117,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1439378.4591195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2351458.3484848063,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2351450.252525258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6898.10968503912,
            "unit": "ns/iter",
            "extra": "iterations: 101600\ncpu: 6897.861220472405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50876.23900000153,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50876.8400000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 93546.62929061973,
            "unit": "ns/iter",
            "extra": "iterations: 9177\ncpu: 93546.67102538988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 135744.43298478535,
            "unit": "ns/iter",
            "extra": "iterations: 6312\ncpu: 135743.78960709795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 179045.9384932888,
            "unit": "ns/iter",
            "extra": "iterations: 4845\ncpu: 179046.026831785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 221290.1038000619,
            "unit": "ns/iter",
            "extra": "iterations: 3921\ncpu: 221287.75822494333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 264311.6183810026,
            "unit": "ns/iter",
            "extra": "iterations: 3286\ncpu: 264302.0998174076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 307334.2079943395,
            "unit": "ns/iter",
            "extra": "iterations: 2827\ncpu: 307330.2794481767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 349283.3730923763,
            "unit": "ns/iter",
            "extra": "iterations: 2490\ncpu: 349268.0722891573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5735.263402765521,
            "unit": "ns/iter",
            "extra": "iterations: 121654\ncpu: 5735.329705558392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4686.185136071815,
            "unit": "ns/iter",
            "extra": "iterations: 150068\ncpu: 4686.118959405088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4661.918784074722,
            "unit": "ns/iter",
            "extra": "iterations: 149121\ncpu: 4661.974503926351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4677.325748696561,
            "unit": "ns/iter",
            "extra": "iterations: 148458\ncpu: 4677.316816877536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7156.641423133132,
            "unit": "ns/iter",
            "extra": "iterations: 97728\ncpu: 7156.352324819917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25483.424192612307,
            "unit": "ns/iter",
            "extra": "iterations: 31026\ncpu: 25480.777412492465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 123808.02174852678,
            "unit": "ns/iter",
            "extra": "iterations: 6943\ncpu: 123798.37246147136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 96444.6814269546,
            "unit": "ns/iter",
            "extra": "iterations: 8830\ncpu: 96436.37599093902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 94806.1608090191,
            "unit": "ns/iter",
            "extra": "iterations: 9048\ncpu: 94803.08355437742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 91815.62889913292,
            "unit": "ns/iter",
            "extra": "iterations: 9329\ncpu: 91809.34719691296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 197431.4105916264,
            "unit": "ns/iter",
            "extra": "iterations: 4513\ncpu: 197424.37403057772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1659523.6071428384,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1659404.2857142657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1311350.1016949473,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1311293.079096056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1314402.1489361676,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1314307.8014184367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1298634.1382681585,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1298585.7541899572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 715998.1400928382,
            "unit": "ns/iter",
            "extra": "iterations: 1292\ncpu: 715948.3746129993 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}