window.BENCHMARK_DATA = {
  "lastUpdate": 1702084977464,
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
      }
    ]
  }
}