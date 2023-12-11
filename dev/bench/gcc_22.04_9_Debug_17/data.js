window.BENCHMARK_DATA = {
  "lastUpdate": 1702309508133,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-9 22.04 Debug c++-17": [
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
        "date": 1702084711676,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14460.026200335777,
            "unit": "ns/iter",
            "extra": "iterations: 48778\ncpu: 14460.000410020912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 121781.4408094928,
            "unit": "ns/iter",
            "extra": "iterations: 6572\ncpu: 121782.48630553865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 229820.9283637367,
            "unit": "ns/iter",
            "extra": "iterations: 3783\ncpu: 229814.4594237378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 335791.40661478636,
            "unit": "ns/iter",
            "extra": "iterations: 2570\ncpu: 335785.3307392994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 442037.8489795922,
            "unit": "ns/iter",
            "extra": "iterations: 1960\ncpu: 442034.13265306136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 557744.9671717056,
            "unit": "ns/iter",
            "extra": "iterations: 1584\ncpu: 557733.6489898991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 531018.2820000193,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531010.3999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 625453.4300000216,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 625458.7000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 698998.0272314613,
            "unit": "ns/iter",
            "extra": "iterations: 1322\ncpu: 698982.2239031774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11069.725943202811,
            "unit": "ns/iter",
            "extra": "iterations: 63454\ncpu: 11069.72767674221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9186.827303298924,
            "unit": "ns/iter",
            "extra": "iterations: 76423\ncpu: 9186.494903366796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9127.37760215631,
            "unit": "ns/iter",
            "extra": "iterations: 76427\ncpu: 9127.356824159004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9246.70844963556,
            "unit": "ns/iter",
            "extra": "iterations: 73802\ncpu: 9246.780575052167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14981.202930794823,
            "unit": "ns/iter",
            "extra": "iterations: 46745\ncpu: 14980.990480265258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55676.13881309627,
            "unit": "ns/iter",
            "extra": "iterations: 14660\ncpu: 55674.8021828103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 252460.18402367117,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 252449.49704142025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 196380.00530443268,
            "unit": "ns/iter",
            "extra": "iterations: 4336\ncpu: 196369.0959409598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 200528.39447235866,
            "unit": "ns/iter",
            "extra": "iterations: 4378\ncpu: 200521.26541799927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 192170.816377174,
            "unit": "ns/iter",
            "extra": "iterations: 4433\ncpu: 192156.95916986227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 457270.6762252334,
            "unit": "ns/iter",
            "extra": "iterations: 1918\ncpu: 457248.7486965587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3802783.8000000333,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3802719.183673464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3082163.894039779,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3082139.735099335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3093263.820069261,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3093204.1522491355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3049652.006557358,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3049561.3114754115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1732220.1003717154,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1732196.654275089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2980842.17628213,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2980628.846153844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6657.3676596800415,
            "unit": "ns/iter",
            "extra": "iterations: 104866\ncpu: 6657.088093376318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 69562.42925835494,
            "unit": "ns/iter",
            "extra": "iterations: 12270\ncpu: 69559.30725346376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 133388.3883124798,
            "unit": "ns/iter",
            "extra": "iterations: 6554\ncpu: 133384.04028074472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 196080.4095324122,
            "unit": "ns/iter",
            "extra": "iterations: 4427\ncpu: 196068.10481138405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 259512.75404732514,
            "unit": "ns/iter",
            "extra": "iterations: 3212\ncpu: 259510.99003735924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 321348.998521806,
            "unit": "ns/iter",
            "extra": "iterations: 2706\ncpu: 321342.57206208416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 384049.09815398743,
            "unit": "ns/iter",
            "extra": "iterations: 2221\ncpu: 384044.88968932757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 447039.7968188756,
            "unit": "ns/iter",
            "extra": "iterations: 1949\ncpu: 447019.24063622317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 508498.807714776,
            "unit": "ns/iter",
            "extra": "iterations: 1711\ncpu: 508482.64172998385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5048.2321047625455,
            "unit": "ns/iter",
            "extra": "iterations: 138752\ncpu: 5048.0663341789395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4124.57351132137,
            "unit": "ns/iter",
            "extra": "iterations: 169899\ncpu: 4124.416859428252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4147.252013311455,
            "unit": "ns/iter",
            "extra": "iterations: 168876\ncpu: 4147.132807503731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4175.570065024101,
            "unit": "ns/iter",
            "extra": "iterations: 167630\ncpu: 4175.370160472486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7430.4204180998595,
            "unit": "ns/iter",
            "extra": "iterations: 94475\ncpu: 7430.25033077535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31023.12975569151,
            "unit": "ns/iter",
            "extra": "iterations: 26442\ncpu: 31021.88185462536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 135471.10772647857,
            "unit": "ns/iter",
            "extra": "iterations: 6303\ncpu: 135467.53926701608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 106294.86550142315,
            "unit": "ns/iter",
            "extra": "iterations: 8067\ncpu: 106291.29788025211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 104815.42271215725,
            "unit": "ns/iter",
            "extra": "iterations: 8119\ncpu: 104811.78716590663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 106129.29747310646,
            "unit": "ns/iter",
            "extra": "iterations: 7994\ncpu: 106126.60745559206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 270188.43901680474,
            "unit": "ns/iter",
            "extra": "iterations: 3214\ncpu: 270181.4872433101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2137922.4738041363,
            "unit": "ns/iter",
            "extra": "iterations: 439\ncpu: 2137846.2414578507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1759170.3069679437,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1759114.1242937855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1768003.6831119978,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1767907.0208728588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1755686.3201506296,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1755647.4576271253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1019284.1058951992,
            "unit": "ns/iter",
            "extra": "iterations: 916\ncpu: 1019242.139737993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1699822.087912132,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1699796.1538461472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7019.636654979624,
            "unit": "ns/iter",
            "extra": "iterations: 99539\ncpu: 7019.472769467308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51340.01979999994,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51334.60999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95056.71942844617,
            "unit": "ns/iter",
            "extra": "iterations: 9028\ncpu: 95053.94328755011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 138001.9499440257,
            "unit": "ns/iter",
            "extra": "iterations: 6253\ncpu: 137996.04989605088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 181821.5575592378,
            "unit": "ns/iter",
            "extra": "iterations: 4769\ncpu: 181817.19438037384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 224922.19045078897,
            "unit": "ns/iter",
            "extra": "iterations: 3749\ncpu: 224916.91117631298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 268345.8139390233,
            "unit": "ns/iter",
            "extra": "iterations: 3214\ncpu: 268342.9993777216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 312241.7056509222,
            "unit": "ns/iter",
            "extra": "iterations: 2796\ncpu: 312238.412017168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 355631.12601957604,
            "unit": "ns/iter",
            "extra": "iterations: 2452\ncpu: 355615.45676998416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5744.052048453784,
            "unit": "ns/iter",
            "extra": "iterations: 121848\ncpu: 5743.953942616992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4700.83500827817,
            "unit": "ns/iter",
            "extra": "iterations: 146771\ncpu: 4700.789665533302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4764.929845074501,
            "unit": "ns/iter",
            "extra": "iterations: 147103\ncpu: 4764.830085042493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4734.919213914577,
            "unit": "ns/iter",
            "extra": "iterations: 147414\ncpu: 4734.671062449971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7234.2524744326065,
            "unit": "ns/iter",
            "extra": "iterations: 97194\ncpu: 7234.308702183301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25002.122136950937,
            "unit": "ns/iter",
            "extra": "iterations: 33618\ncpu: 25001.25527990957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 115681.65604321352,
            "unit": "ns/iter",
            "extra": "iterations: 7405\ncpu: 115682.49831195193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 89960.20279941113,
            "unit": "ns/iter",
            "extra": "iterations: 9502\ncpu: 89957.01957482554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 89411.78781512707,
            "unit": "ns/iter",
            "extra": "iterations: 9520\ncpu: 89409.49579831879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 85409.40534543486,
            "unit": "ns/iter",
            "extra": "iterations: 9915\ncpu: 85404.04437720637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 188090.2985921389,
            "unit": "ns/iter",
            "extra": "iterations: 4759\ncpu: 188086.1945786923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1664337.8942652803,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1664321.8637992714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1307732.4548022477,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1307705.0847457638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1311850.3572454012,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1311849.6413199322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1297596.3146066961,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1297583.8483146075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 704854.4695586025,
            "unit": "ns/iter",
            "extra": "iterations: 1314\ncpu: 704841.8569254242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1262948.2942779493,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 1262927.2479564052 ns\nthreads: 1"
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
        "date": 1702084979110,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14269.037265217106,
            "unit": "ns/iter",
            "extra": "iterations: 49993\ncpu: 14268.137539255496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 126206.10136113883,
            "unit": "ns/iter",
            "extra": "iterations: 6906\ncpu: 126203.7214016797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 231459.22800956765,
            "unit": "ns/iter",
            "extra": "iterations: 3763\ncpu: 231449.933563646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 338156.4078998846,
            "unit": "ns/iter",
            "extra": "iterations: 2557\ncpu: 338140.94642158784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 446080.8182286272,
            "unit": "ns/iter",
            "extra": "iterations: 1942\ncpu: 446054.4284243049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 553675.5324427485,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 553662.4681933845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 555386.2339999967,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555378.9 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 619038.0869999785,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 619029.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 704023.9684372486,
            "unit": "ns/iter",
            "extra": "iterations: 1299\ncpu: 704010.3926096993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11119.139910398959,
            "unit": "ns/iter",
            "extra": "iterations: 63169\ncpu: 11119.170795801745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9128.064277336116,
            "unit": "ns/iter",
            "extra": "iterations: 76730\ncpu: 9128.003388505136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9168.03775836761,
            "unit": "ns/iter",
            "extra": "iterations: 76248\ncpu: 9167.698824887231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9172.533211129004,
            "unit": "ns/iter",
            "extra": "iterations: 76375\ncpu: 9172.327332242228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14915.90154612811,
            "unit": "ns/iter",
            "extra": "iterations: 46956\ncpu: 14915.684896498866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55038.57222334028,
            "unit": "ns/iter",
            "extra": "iterations: 14919\ncpu: 55038.246531268895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 264498.1217211838,
            "unit": "ns/iter",
            "extra": "iterations: 3393\ncpu: 264493.95814913046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 196735.80636173734,
            "unit": "ns/iter",
            "extra": "iterations: 4307\ncpu: 196734.61806361744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 196171.2736386433,
            "unit": "ns/iter",
            "extra": "iterations: 4389\ncpu: 196170.15265436313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 192616.61178075976,
            "unit": "ns/iter",
            "extra": "iterations: 4397\ncpu: 192613.28178303404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 456235.10307131265,
            "unit": "ns/iter",
            "extra": "iterations: 1921\ncpu: 456228.26652784966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3824343.1967213172,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3824300.81967214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3118483.6510067196,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3118448.9932885924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3241804.5381525215,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3241700.803212854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3093972.5050168107,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3093937.792642137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1763492.2452106837,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1763468.5823754775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3020972.4707791843,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3020855.194805202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6757.45796302366,
            "unit": "ns/iter",
            "extra": "iterations: 103742\ncpu: 6757.399124751788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70769.94594148993,
            "unit": "ns/iter",
            "extra": "iterations: 12135\ncpu: 70769.60857025137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 134706.06186519057,
            "unit": "ns/iter",
            "extra": "iterations: 6498\ncpu: 134704.6629732229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 198569.87694419015,
            "unit": "ns/iter",
            "extra": "iterations: 4372\ncpu: 198568.84720951508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 262106.3325301212,
            "unit": "ns/iter",
            "extra": "iterations: 3320\ncpu: 262100.6626506027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 326072.0781893055,
            "unit": "ns/iter",
            "extra": "iterations: 2673\ncpu: 326066.8911335564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 390787.9622132208,
            "unit": "ns/iter",
            "extra": "iterations: 2223\ncpu: 390770.4003598739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 453306.75013013417,
            "unit": "ns/iter",
            "extra": "iterations: 1921\ncpu: 453279.2816241553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 516711.4443127868,
            "unit": "ns/iter",
            "extra": "iterations: 1688\ncpu: 516691.232227486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5076.583051290761,
            "unit": "ns/iter",
            "extra": "iterations: 137686\ncpu: 5076.257571575902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4119.999764156392,
            "unit": "ns/iter",
            "extra": "iterations: 169604\ncpu: 4119.8167496049555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4181.62484319181,
            "unit": "ns/iter",
            "extra": "iterations: 167402\ncpu: 4181.514557771129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4173.231143306683,
            "unit": "ns/iter",
            "extra": "iterations: 168415\ncpu: 4173.209630971098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7458.207333446823,
            "unit": "ns/iter",
            "extra": "iterations: 93844\ncpu: 7458.0591193896435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30745.528214685135,
            "unit": "ns/iter",
            "extra": "iterations: 26830\ncpu: 30744.148341408658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 131428.1380163988,
            "unit": "ns/iter",
            "extra": "iterations: 6463\ncpu: 131422.1414203926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 105959.8946057068,
            "unit": "ns/iter",
            "extra": "iterations: 8027\ncpu: 105955.15136414586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 105864.62097378002,
            "unit": "ns/iter",
            "extra": "iterations: 8010\ncpu: 105860.31210986266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 107550.72942977463,
            "unit": "ns/iter",
            "extra": "iterations: 7839\ncpu: 107546.09006250795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 269895.6662496108,
            "unit": "ns/iter",
            "extra": "iterations: 3197\ncpu: 269879.7935564578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2165305.935034779,
            "unit": "ns/iter",
            "extra": "iterations: 431\ncpu: 2165200.6960556908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1792425.3596153616,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1792363.076923086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1809283.529182863,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1809236.1867704343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1791872.2369942095,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1791786.1271676212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1042217.1255605437,
            "unit": "ns/iter",
            "extra": "iterations: 892\ncpu: 1042202.1300448426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1732145.5176252134,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1732149.1651205868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7066.8069601727175,
            "unit": "ns/iter",
            "extra": "iterations: 99078\ncpu: 7066.602071095468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50653.026099999464,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50652.300000000134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94653.19524281494,
            "unit": "ns/iter",
            "extra": "iterations: 9081\ncpu: 94652.6704107476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 137857.3994248288,
            "unit": "ns/iter",
            "extra": "iterations: 6259\ncpu: 137855.59993609297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 181359.59086145737,
            "unit": "ns/iter",
            "extra": "iterations: 4771\ncpu: 181360.15510375064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 224156.92574385685,
            "unit": "ns/iter",
            "extra": "iterations: 3865\ncpu: 224152.03104786482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 267391.70932020835,
            "unit": "ns/iter",
            "extra": "iterations: 3251\ncpu: 267386.40418332885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 311286.06164874346,
            "unit": "ns/iter",
            "extra": "iterations: 2790\ncpu: 311286.91756272403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 353899.91954489844,
            "unit": "ns/iter",
            "extra": "iterations: 2461\ncpu: 353886.793986185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5836.024354639767,
            "unit": "ns/iter",
            "extra": "iterations: 119197\ncpu: 5835.976576591733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4824.849015166651,
            "unit": "ns/iter",
            "extra": "iterations: 145253\ncpu: 4824.71825022547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4776.109342891221,
            "unit": "ns/iter",
            "extra": "iterations: 146475\ncpu: 4776.121522444083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4812.321198611516,
            "unit": "ns/iter",
            "extra": "iterations: 144901\ncpu: 4812.197293324357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7178.697594501847,
            "unit": "ns/iter",
            "extra": "iterations: 97776\ncpu: 7178.714612993046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23772.06336529808,
            "unit": "ns/iter",
            "extra": "iterations: 34309\ncpu: 23771.7829141043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 118594.41799308168,
            "unit": "ns/iter",
            "extra": "iterations: 7225\ncpu: 118594.68512110689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 89216.88093743518,
            "unit": "ns/iter",
            "extra": "iterations: 9558\ncpu: 89215.86105879984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 88817.68134150059,
            "unit": "ns/iter",
            "extra": "iterations: 9631\ncpu: 88817.05949537852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 84630.4383248965,
            "unit": "ns/iter",
            "extra": "iterations: 10077\ncpu: 84628.50054579637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 184965.51079734336,
            "unit": "ns/iter",
            "extra": "iterations: 4816\ncpu: 184966.05066445045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1661178.2410714275,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1661106.0714285688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1337378.01410433,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1337358.5331452845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1307101.0930888257,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1307083.3568406296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1294807.9999999758,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1294802.370990223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 716578.0874612771,
            "unit": "ns/iter",
            "extra": "iterations: 1292\ncpu: 716568.7306501577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1264060.5920873177,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 1264049.6589358822 ns\nthreads: 1"
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
        "date": 1702085579676,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15081.399737446443,
            "unit": "ns/iter",
            "extra": "iterations: 48752\ncpu: 15080.62438464063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124734.4079120878,
            "unit": "ns/iter",
            "extra": "iterations: 6825\ncpu: 124730.6813186813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 235068.41837837864,
            "unit": "ns/iter",
            "extra": "iterations: 3700\ncpu: 235061.24324324334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 343288.57034975657,
            "unit": "ns/iter",
            "extra": "iterations: 2516\ncpu: 343285.81081081065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 454716.76927082427,
            "unit": "ns/iter",
            "extra": "iterations: 1920\ncpu: 454698.7500000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 560174.0756302411,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 560151.7776341307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 541330.6339999905,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541335.1000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 630251.6059999731,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 630246.4000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 715451.6941634236,
            "unit": "ns/iter",
            "extra": "iterations: 1285\ncpu: 715435.5642023348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11054.119692706718,
            "unit": "ns/iter",
            "extra": "iterations: 63262\ncpu: 11054.043501628163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9230.755992657207,
            "unit": "ns/iter",
            "extra": "iterations: 74633\ncpu: 9230.660699690497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9167.541443255817,
            "unit": "ns/iter",
            "extra": "iterations: 76466\ncpu: 9167.59997907567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9137.198510455475,
            "unit": "ns/iter",
            "extra": "iterations: 76802\ncpu: 9137.103200437485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15031.738661510253,
            "unit": "ns/iter",
            "extra": "iterations: 46545\ncpu: 15031.088194220642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55714.7007992351,
            "unit": "ns/iter",
            "extra": "iterations: 14639\ncpu: 55714.20178973964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 254832.48225286687,
            "unit": "ns/iter",
            "extra": "iterations: 3409\ncpu: 254815.60574948625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 197091.71455051482,
            "unit": "ns/iter",
            "extra": "iterations: 4316\ncpu: 197076.06580166795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 196212.61983852444,
            "unit": "ns/iter",
            "extra": "iterations: 4335\ncpu: 196202.3298731258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 193820.76258829414,
            "unit": "ns/iter",
            "extra": "iterations: 4389\ncpu: 193803.23536113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 461997.8110526434,
            "unit": "ns/iter",
            "extra": "iterations: 1900\ncpu: 461986.10526315664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3857942.1193415592,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3857831.275720156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3100353.5233332966,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3100337.6666666563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3106453.846153827,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3106375.585284274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3078116.7308969526,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3077978.0730897025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1757258.8452830527,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1757254.9056603801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3015129.7669901974,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3014940.1294498397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6749.446755399542,
            "unit": "ns/iter",
            "extra": "iterations: 103757\ncpu: 6749.426062819867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70835.12910261127,
            "unit": "ns/iter",
            "extra": "iterations: 9171\ncpu: 70832.95169556228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 135843.44026720276,
            "unit": "ns/iter",
            "extra": "iterations: 6437\ncpu: 135839.75454404228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 199894.39827585436,
            "unit": "ns/iter",
            "extra": "iterations: 4060\ncpu: 199893.44827586238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 263798.4277456698,
            "unit": "ns/iter",
            "extra": "iterations: 3287\ncpu: 263797.2315181017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 328397.73003071337,
            "unit": "ns/iter",
            "extra": "iterations: 2604\ncpu: 328387.4039938549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 392050.1870732929,
            "unit": "ns/iter",
            "extra": "iterations: 2197\ncpu: 392047.8379608552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 455902.3212977493,
            "unit": "ns/iter",
            "extra": "iterations: 1911\ncpu: 455884.61538461485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 519729.7192353493,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 519725.8661887666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5053.23796042175,
            "unit": "ns/iter",
            "extra": "iterations: 139166\ncpu: 5053.144446200938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4166.091341732917,
            "unit": "ns/iter",
            "extra": "iterations: 167470\ncpu: 4165.993909356905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4167.441445895063,
            "unit": "ns/iter",
            "extra": "iterations: 167896\ncpu: 4167.4715299947575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4395.043878727597,
            "unit": "ns/iter",
            "extra": "iterations: 168282\ncpu: 4394.6619365113675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7516.934472323198,
            "unit": "ns/iter",
            "extra": "iterations: 93182\ncpu: 7516.663089437904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31242.508786548486,
            "unit": "ns/iter",
            "extra": "iterations: 26404\ncpu: 31240.32343584299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 132854.39432668677,
            "unit": "ns/iter",
            "extra": "iterations: 6416\ncpu: 132848.65960099717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 107341.56922110921,
            "unit": "ns/iter",
            "extra": "iterations: 7960\ncpu: 107338.20351758764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 106832.6369466811,
            "unit": "ns/iter",
            "extra": "iterations: 7952\ncpu: 106825.31438631844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 107333.10971428572,
            "unit": "ns/iter",
            "extra": "iterations: 7875\ncpu: 107329.95555555579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 273386.9990515325,
            "unit": "ns/iter",
            "extra": "iterations: 3163\ncpu: 273374.73917167255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2183825.260563384,
            "unit": "ns/iter",
            "extra": "iterations: 426\ncpu: 2183634.9765258175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1795378.1538460806,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1795322.4999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1802835.3984525865,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1802672.5338491322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1788853.416184954,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1788778.420038536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1044046.5290178582,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 1043971.2053571447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1740380.5588784714,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1740323.5514018673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7167.356855231456,
            "unit": "ns/iter",
            "extra": "iterations: 97597\ncpu: 7166.552250581511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52920.51729999798,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52919.98000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 97764.94068181566,
            "unit": "ns/iter",
            "extra": "iterations: 8800\ncpu: 97765.26136363615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146332.16550811462,
            "unit": "ns/iter",
            "extra": "iterations: 6042\ncpu: 146325.48824892446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 187305.9316663078,
            "unit": "ns/iter",
            "extra": "iterations: 4639\ncpu: 187300.8838111648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 231762.8738642523,
            "unit": "ns/iter",
            "extra": "iterations: 3742\ncpu: 231753.7145911266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 279848.50621614396,
            "unit": "ns/iter",
            "extra": "iterations: 3137\ncpu: 279829.901179472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 322023.8079911275,
            "unit": "ns/iter",
            "extra": "iterations: 2703\ncpu: 322013.5405105433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 365890.6739403964,
            "unit": "ns/iter",
            "extra": "iterations: 2383\ncpu: 365885.3545950465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5776.642811633551,
            "unit": "ns/iter",
            "extra": "iterations: 120855\ncpu: 5776.690248645037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4765.814070077679,
            "unit": "ns/iter",
            "extra": "iterations: 146808\ncpu: 4765.751185221487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4958.101234752667,
            "unit": "ns/iter",
            "extra": "iterations: 147074\ncpu: 4958.14555937824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4740.85422123658,
            "unit": "ns/iter",
            "extra": "iterations: 146983\ncpu: 4740.799956457521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7244.879380256491,
            "unit": "ns/iter",
            "extra": "iterations: 96427\ncpu: 7244.936584151829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24118.944056561122,
            "unit": "ns/iter",
            "extra": "iterations: 33945\ncpu: 24118.49756959765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 115592.47636999932,
            "unit": "ns/iter",
            "extra": "iterations: 7427\ncpu: 115591.51743638073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 88309.83835247907,
            "unit": "ns/iter",
            "extra": "iterations: 9663\ncpu: 88307.68912346128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 88547.69331952019,
            "unit": "ns/iter",
            "extra": "iterations: 9655\ncpu: 88548.3687208699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 84750.41825436834,
            "unit": "ns/iter",
            "extra": "iterations: 10025\ncpu: 84749.95511221976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 189944.18668934715,
            "unit": "ns/iter",
            "extra": "iterations: 4703\ncpu: 189945.54539655443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1681548.9638989775,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1681224.9097473077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1321145.903271687,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1321141.6785206243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1315593.7968749788,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1315570.312500009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1303545.0182840952,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1303517.580872028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 706092.6799082939,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 706063.4071810582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1272835.255813959,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 1272839.808481545 ns\nthreads: 1"
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
        "date": 1702244190501,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15449.801703162899,
            "unit": "ns/iter",
            "extra": "iterations: 46032\ncpu: 15449.24400417101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 146775.75888237444,
            "unit": "ns/iter",
            "extra": "iterations: 5798\ncpu: 146770.43808209727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 276725.9667731565,
            "unit": "ns/iter",
            "extra": "iterations: 3130\ncpu: 276720.0638977636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 406034.56399437966,
            "unit": "ns/iter",
            "extra": "iterations: 2133\ncpu: 406020.25316455687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 542525.0524367548,
            "unit": "ns/iter",
            "extra": "iterations: 1621\ncpu: 542482.9734731645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 571872.4889999862,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571810.3999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 646368.4600000192,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 646346.6000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 750242.6550040835,
            "unit": "ns/iter",
            "extra": "iterations: 1229\ncpu: 750215.8665581774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 854599.8077634029,
            "unit": "ns/iter",
            "extra": "iterations: 1082\ncpu: 854574.6765249539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12151.795980732382,
            "unit": "ns/iter",
            "extra": "iterations: 57921\ncpu: 12151.447661469918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9965.40001356995,
            "unit": "ns/iter",
            "extra": "iterations: 58953\ncpu: 9965.250284124637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9915.04465308338,
            "unit": "ns/iter",
            "extra": "iterations: 70723\ncpu: 9914.67980713488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9899.933218452286,
            "unit": "ns/iter",
            "extra": "iterations: 70798\ncpu: 9899.878527642028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16169.305159419837,
            "unit": "ns/iter",
            "extra": "iterations: 43125\ncpu: 16169.03420289854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 61201.74379038025,
            "unit": "ns/iter",
            "extra": "iterations: 13930\ncpu: 61200.19382627417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 309056.3321325733,
            "unit": "ns/iter",
            "extra": "iterations: 2776\ncpu: 309038.29250720434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 248575.69979716474,
            "unit": "ns/iter",
            "extra": "iterations: 3451\ncpu: 248565.1695160818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 251555.76641705047,
            "unit": "ns/iter",
            "extra": "iterations: 3472\ncpu: 251550.05760368682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 243079.20034197302,
            "unit": "ns/iter",
            "extra": "iterations: 3509\ncpu: 243075.71957822825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 580434.3077432204,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 580407.5446724021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4584252.078817829,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4584096.55172414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3886904.9482071158,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3886688.844621511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3717344.352000055,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3717211.599999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3735214.248995951,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3735071.8875502027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2147359.133949229,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2147281.062355652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7828.207955385586,
            "unit": "ns/iter",
            "extra": "iterations: 89298\ncpu: 7828.025263723723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 95498.82125168681,
            "unit": "ns/iter",
            "extra": "iterations: 8884\ncpu: 95495.50877982914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 182876.6300189203,
            "unit": "ns/iter",
            "extra": "iterations: 4757\ncpu: 182872.46163548474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 270710.9597503895,
            "unit": "ns/iter",
            "extra": "iterations: 3205\ncpu: 270700.65522620943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 357985.68616144586,
            "unit": "ns/iter",
            "extra": "iterations: 2428\ncpu: 357977.6771004949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 446134.54038854555,
            "unit": "ns/iter",
            "extra": "iterations: 1956\ncpu: 446119.12065439526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 532400.6676866619,
            "unit": "ns/iter",
            "extra": "iterations: 1634\ncpu: 532378.88616891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 619936.3207681486,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 619921.4793741105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 568028.6810000155,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 568001.4999999941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5935.747129940038,
            "unit": "ns/iter",
            "extra": "iterations: 118116\ncpu: 5935.635307663643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4785.532654763084,
            "unit": "ns/iter",
            "extra": "iterations: 146288\ncpu: 4785.316635677566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4790.6144979825285,
            "unit": "ns/iter",
            "extra": "iterations: 145234\ncpu: 4790.544913725463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4817.851219897963,
            "unit": "ns/iter",
            "extra": "iterations: 145463\ncpu: 4817.57560341808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8715.84985796868,
            "unit": "ns/iter",
            "extra": "iterations: 80264\ncpu: 8715.715638393373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46039.938613531966,
            "unit": "ns/iter",
            "extra": "iterations: 18017\ncpu: 46038.64683354599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 192201.94944956692,
            "unit": "ns/iter",
            "extra": "iterations: 4451\ncpu: 192197.8881150306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 157096.31730592952,
            "unit": "ns/iter",
            "extra": "iterations: 5449\ncpu: 157090.64048449215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 155851.16779135357,
            "unit": "ns/iter",
            "extra": "iterations: 5483\ncpu: 155847.2916286702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 156867.54023831687,
            "unit": "ns/iter",
            "extra": "iterations: 5455\ncpu: 156863.9413382218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 371342.46950959985,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 371338.0383795283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2916453.037500055,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2916292.187500003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2395825.307692325,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2395664.1025640997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2390891.7570332894,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2390793.8618925842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2424655.874673582,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2424577.806788517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1423689.9709923805,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1423620.7633587779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2339112.138190929,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2339018.8442210997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6833.967185962411,
            "unit": "ns/iter",
            "extra": "iterations: 102639\ncpu: 6833.933495065239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50137.238400000686,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50133.840000000164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 92230.90863216601,
            "unit": "ns/iter",
            "extra": "iterations: 9314\ncpu: 92223.62035645281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 134344.16292834742,
            "unit": "ns/iter",
            "extra": "iterations: 6420\ncpu: 134336.04361370788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 177317.89553152796,
            "unit": "ns/iter",
            "extra": "iterations: 4901\ncpu: 177307.42705570316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 220117.2398682872,
            "unit": "ns/iter",
            "extra": "iterations: 3948\ncpu: 220106.50962512646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 260971.0738396593,
            "unit": "ns/iter",
            "extra": "iterations: 3318\ncpu: 260955.78661844568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 303444.37526133104,
            "unit": "ns/iter",
            "extra": "iterations: 2870\ncpu: 303421.1149825783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 346801.9056152897,
            "unit": "ns/iter",
            "extra": "iterations: 2511\ncpu: 346788.64994026243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5720.770082828705,
            "unit": "ns/iter",
            "extra": "iterations: 121335\ncpu: 5720.50603700498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4766.258396662428,
            "unit": "ns/iter",
            "extra": "iterations: 146457\ncpu: 4766.165495674549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4707.876108458984,
            "unit": "ns/iter",
            "extra": "iterations: 148517\ncpu: 4707.715615047381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4635.732377704629,
            "unit": "ns/iter",
            "extra": "iterations: 151314\ncpu: 4635.662926100732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7133.342242170921,
            "unit": "ns/iter",
            "extra": "iterations: 98030\ncpu: 7133.159236968221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25153.827534791388,
            "unit": "ns/iter",
            "extra": "iterations: 32192\ncpu: 25153.407678926276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 116688.39085465431,
            "unit": "ns/iter",
            "extra": "iterations: 7348\ncpu: 116679.00108873022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 89148.90024000744,
            "unit": "ns/iter",
            "extra": "iterations: 9583\ncpu: 89146.38422206028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 88955.36942675334,
            "unit": "ns/iter",
            "extra": "iterations: 9577\ncpu: 88951.07027252676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 84782.04260601787,
            "unit": "ns/iter",
            "extra": "iterations: 10069\ncpu: 84778.56788161701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 207102.24685021385,
            "unit": "ns/iter",
            "extra": "iterations: 4286\ncpu: 207088.75408306098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1676136.190647485,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1676066.7266186986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1323799.56090652,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 1323715.0141642895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1318439.3954480786,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1318370.839260325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1300643.8204768773,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1300572.7910238446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 713693.7678018628,
            "unit": "ns/iter",
            "extra": "iterations: 1292\ncpu: 713665.4024767812 ns\nthreads: 1"
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
        "date": 1702285102886,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15468.43977092819,
            "unit": "ns/iter",
            "extra": "iterations: 46099\ncpu: 15464.532853207227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 147430.27894003066,
            "unit": "ns/iter",
            "extra": "iterations: 5736\ncpu: 147422.38493723847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 279242.88415617455,
            "unit": "ns/iter",
            "extra": "iterations: 3099\ncpu: 279228.33171990974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 410140.8534278988,
            "unit": "ns/iter",
            "extra": "iterations: 2115\ncpu: 410139.52718676114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 556569.8214519068,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 556528.3191628513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 588584.343999969,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 588557.9999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 656362.4420000452,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 656308.9999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 758152.8213114925,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 758131.6393442624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 863649.2956441141,
            "unit": "ns/iter",
            "extra": "iterations: 1079\ncpu: 863585.6348470807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12202.021226291386,
            "unit": "ns/iter",
            "extra": "iterations: 57523\ncpu: 12201.63065208698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10056.703933717408,
            "unit": "ns/iter",
            "extra": "iterations: 69883\ncpu: 10056.171028719446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10099.748144665757,
            "unit": "ns/iter",
            "extra": "iterations: 70203\ncpu: 10098.521430708084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10039.252689405377,
            "unit": "ns/iter",
            "extra": "iterations: 69718\ncpu: 10039.02578960957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16420.325206486516,
            "unit": "ns/iter",
            "extra": "iterations: 42739\ncpu: 16419.902197056563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 61267.4762893984,
            "unit": "ns/iter",
            "extra": "iterations: 13960\ncpu: 61263.36676217774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 308322.5075757504,
            "unit": "ns/iter",
            "extra": "iterations: 2772\ncpu: 308294.19191919186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 244987.40412135716,
            "unit": "ns/iter",
            "extra": "iterations: 3494\ncpu: 244974.38465941587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 243853.407374622,
            "unit": "ns/iter",
            "extra": "iterations: 3390\ncpu: 243840.67846607586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 241626.53102862433,
            "unit": "ns/iter",
            "extra": "iterations: 3529\ncpu: 241623.43440068085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 561784.3688576958,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 561741.352903637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4654512.1732671,
            "unit": "ns/iter",
            "extra": "iterations: 202\ncpu: 4654071.782178205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3885998.1821862785,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3885821.8623481896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3799768.710203872,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3799539.9999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3764922.0927420403,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3764700.4032258047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2161891.6465115487,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2161765.3488372066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7721.015013133451,
            "unit": "ns/iter",
            "extra": "iterations: 90987\ncpu: 7720.409509050759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 95920.77259997235,
            "unit": "ns/iter",
            "extra": "iterations: 8927\ncpu: 95914.32732160893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 185014.9755731687,
            "unit": "ns/iter",
            "extra": "iterations: 4667\ncpu: 185001.92843368312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 272818.29599242966,
            "unit": "ns/iter",
            "extra": "iterations: 3169\ncpu: 272799.8106658257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 362167.6015100757,
            "unit": "ns/iter",
            "extra": "iterations: 2384\ncpu: 362143.6661073823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 447919.82188953424,
            "unit": "ns/iter",
            "extra": "iterations: 1937\ncpu: 447895.92152813385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 535201.0648949197,
            "unit": "ns/iter",
            "extra": "iterations: 1618\ncpu: 535176.6996291702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 502403.56000000477,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502394.7000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 571646.6009999976,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571489.8000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5907.853114152998,
            "unit": "ns/iter",
            "extra": "iterations: 117833\ncpu: 5907.637928254415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4811.591970422357,
            "unit": "ns/iter",
            "extra": "iterations: 145786\ncpu: 4811.388610703379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4820.149400791568,
            "unit": "ns/iter",
            "extra": "iterations: 144524\ncpu: 4819.90534444103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4850.421761449852,
            "unit": "ns/iter",
            "extra": "iterations: 144347\ncpu: 4850.224112728358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8635.096989432226,
            "unit": "ns/iter",
            "extra": "iterations: 81380\ncpu: 8634.483902678856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 45577.186129582966,
            "unit": "ns/iter",
            "extra": "iterations: 18197\ncpu: 45576.01802494896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 188861.9532318608,
            "unit": "ns/iter",
            "extra": "iterations: 4533\ncpu: 188859.3867196118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 154203.9794508054,
            "unit": "ns/iter",
            "extra": "iterations: 5499\ncpu: 154197.16312056745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 154416.23922841297,
            "unit": "ns/iter",
            "extra": "iterations: 5547\ncpu: 154407.96827113783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 155531.48016738793,
            "unit": "ns/iter",
            "extra": "iterations: 5496\ncpu: 155520.39665211076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 351819.27953075245,
            "unit": "ns/iter",
            "extra": "iterations: 2472\ncpu: 351798.0582524256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2962127.587301662,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2962035.873015871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2434412.64229759,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2434327.6762402058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2463279.554089724,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2463187.598944599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2450608.299999969,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2450444.9999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1448490.931676996,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1448421.2732919208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2384721.522959294,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2384578.5714285723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7035.474010611454,
            "unit": "ns/iter",
            "extra": "iterations: 102715\ncpu: 7035.038699313674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50476.801100001016,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50472.17999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 92840.86046765363,
            "unit": "ns/iter",
            "extra": "iterations: 9152\ncpu: 92836.16695804236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 136639.27163198605,
            "unit": "ns/iter",
            "extra": "iterations: 6391\ncpu: 136631.5600062586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 177756.15124153215,
            "unit": "ns/iter",
            "extra": "iterations: 4873\ncpu: 177745.55715165107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 220661.4907289829,
            "unit": "ns/iter",
            "extra": "iterations: 3937\ncpu: 220643.07848615732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 262200.44508320227,
            "unit": "ns/iter",
            "extra": "iterations: 3305\ncpu: 262180.4841149773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 305964.28561404557,
            "unit": "ns/iter",
            "extra": "iterations: 2850\ncpu: 305941.50877193053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 346970.6580207656,
            "unit": "ns/iter",
            "extra": "iterations: 2506\ncpu: 346965.64245809935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5737.677749025409,
            "unit": "ns/iter",
            "extra": "iterations: 122116\ncpu: 5737.311245045693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4717.153124451532,
            "unit": "ns/iter",
            "extra": "iterations: 148154\ncpu: 4717.141622905899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4782.506165266302,
            "unit": "ns/iter",
            "extra": "iterations: 145087\ncpu: 4782.147263366044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4733.809165939063,
            "unit": "ns/iter",
            "extra": "iterations: 147699\ncpu: 4733.534417971695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7209.037918407269,
            "unit": "ns/iter",
            "extra": "iterations: 96945\ncpu: 7208.788488318184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25878.001651894767,
            "unit": "ns/iter",
            "extra": "iterations: 31479\ncpu: 25877.44528098106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 116397.53432104853,
            "unit": "ns/iter",
            "extra": "iterations: 7357\ncpu: 116387.86190023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 89020.06926361866,
            "unit": "ns/iter",
            "extra": "iterations: 9601\ncpu: 89019.70628059526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 88542.58603879486,
            "unit": "ns/iter",
            "extra": "iterations: 9641\ncpu: 88537.56871693935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 83973.2027307785,
            "unit": "ns/iter",
            "extra": "iterations: 10107\ncpu: 83971.46532106353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 206356.45141138558,
            "unit": "ns/iter",
            "extra": "iterations: 4322\ncpu: 206344.6089773248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1677566.3243243094,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1677560.5405405464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1331908.0157819937,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1331784.2180774822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1330302.0386266217,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1330232.9041487835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1311935.0819209141,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1311861.4406779753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 708429.927803348,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 708383.7941628253 ns\nthreads: 1"
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
        "date": 1702309507045,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15736.691511156421,
            "unit": "ns/iter",
            "extra": "iterations: 44906\ncpu: 15735.505277691178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 148053.77223088802,
            "unit": "ns/iter",
            "extra": "iterations: 5769\ncpu: 148045.27647772577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 279485.0732412518,
            "unit": "ns/iter",
            "extra": "iterations: 3113\ncpu: 279466.36684869905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 418343.8906767569,
            "unit": "ns/iter",
            "extra": "iterations: 2113\ncpu: 418321.0127780407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 548059.0384854283,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 548047.7963997512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 547744.6989999635,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 547719.1000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 653305.247999981,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653251.0999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 765133.4535743842,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 765108.4634346759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 864807.2802303182,
            "unit": "ns/iter",
            "extra": "iterations: 1042\ncpu: 864745.5854126677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12005.494989808121,
            "unit": "ns/iter",
            "extra": "iterations: 58381\ncpu: 12005.128380808834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9848.572718590991,
            "unit": "ns/iter",
            "extra": "iterations: 71206\ncpu: 9848.559110187325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9856.171629091346,
            "unit": "ns/iter",
            "extra": "iterations: 71101\ncpu: 9855.895135089539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9836.928467009291,
            "unit": "ns/iter",
            "extra": "iterations: 71142\ncpu: 9836.536785583761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16399.002543315415,
            "unit": "ns/iter",
            "extra": "iterations: 44037\ncpu: 16397.55432931397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 61895.12088686923,
            "unit": "ns/iter",
            "extra": "iterations: 12764\ncpu: 61892.196803509854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 319855.12022472644,
            "unit": "ns/iter",
            "extra": "iterations: 2670\ncpu: 319831.98501872644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 253154.1663706248,
            "unit": "ns/iter",
            "extra": "iterations: 3378\ncpu: 253145.85553581986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 250968.33558624695,
            "unit": "ns/iter",
            "extra": "iterations: 3403\ncpu: 250951.8072289163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 250003.0418138983,
            "unit": "ns/iter",
            "extra": "iterations: 3396\ncpu: 249994.464075383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 560177.1965636007,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 560166.6666666671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4566054.226600964,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4565720.68965517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3716581.2430279097,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3716430.2788844625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3743527.387096798,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3743277.419354838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3778356.0597607996,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3778090.438247001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2140632.0552995363,
            "unit": "ns/iter",
            "extra": "iterations: 434\ncpu: 2140544.009216596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7658.9884296979035,
            "unit": "ns/iter",
            "extra": "iterations: 91441\ncpu: 7658.931988932735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 96352.03139365178,
            "unit": "ns/iter",
            "extra": "iterations: 8919\ncpu: 96349.06379638973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 184587.5235281667,
            "unit": "ns/iter",
            "extra": "iterations: 4739\ncpu: 184581.64169656028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 273188.1992457528,
            "unit": "ns/iter",
            "extra": "iterations: 3182\ncpu: 273186.17221873003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 360600.1605143056,
            "unit": "ns/iter",
            "extra": "iterations: 2411\ncpu: 360583.4093737036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 450631.09175258625,
            "unit": "ns/iter",
            "extra": "iterations: 1940\ncpu: 450615.3608247425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 535920.8012307415,
            "unit": "ns/iter",
            "extra": "iterations: 1625\ncpu: 535879.9384615404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 500217.18000004964,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500179.8999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 572155.2439999869,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572161.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5779.862528891584,
            "unit": "ns/iter",
            "extra": "iterations: 120709\ncpu: 5779.796866845061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4664.336072407924,
            "unit": "ns/iter",
            "extra": "iterations: 149929\ncpu: 4664.382474371213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4725.9314295359545,
            "unit": "ns/iter",
            "extra": "iterations: 148125\ncpu: 4725.825485232097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4801.311763657177,
            "unit": "ns/iter",
            "extra": "iterations: 145822\ncpu: 4801.222723594527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8271.995488099954,
            "unit": "ns/iter",
            "extra": "iterations: 84665\ncpu: 8271.850233272253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46513.700848457986,
            "unit": "ns/iter",
            "extra": "iterations: 17797\ncpu: 46512.31668258699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 201946.79721762895,
            "unit": "ns/iter",
            "extra": "iterations: 4241\ncpu: 201943.9990568267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 166422.11083974957,
            "unit": "ns/iter",
            "extra": "iterations: 5323\ncpu: 166420.89047529522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 158573.42487046626,
            "unit": "ns/iter",
            "extra": "iterations: 5404\ncpu: 158569.04145077604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 160555.27821970242,
            "unit": "ns/iter",
            "extra": "iterations: 5280\ncpu: 160551.9886363627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 353502.1412911107,
            "unit": "ns/iter",
            "extra": "iterations: 2463\ncpu: 353501.2586276912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2908537.7093750252,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2908436.562499994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2401180.3487179023,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2401180.769230776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2413419.405759178,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2413333.2460733005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2412676.5943152322,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2412652.4547803705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1420562.3526717464,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1420537.251908399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2337246.8070175173,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2337161.9047619053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7055.334862524749,
            "unit": "ns/iter",
            "extra": "iterations: 98963\ncpu: 7054.939724947694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51302.09270000136,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51301.06999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94037.03378304328,
            "unit": "ns/iter",
            "extra": "iterations: 9117\ncpu: 94029.22013820395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 136779.83570628503,
            "unit": "ns/iter",
            "extra": "iterations: 6251\ncpu: 136774.19612861972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 179271.48779478663,
            "unit": "ns/iter",
            "extra": "iterations: 4834\ncpu: 179267.64584195364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 222129.63650306908,
            "unit": "ns/iter",
            "extra": "iterations: 3912\ncpu: 222127.53067484652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 264196.43639683735,
            "unit": "ns/iter",
            "extra": "iterations: 3286\ncpu: 264191.11381619074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 306986.8338624349,
            "unit": "ns/iter",
            "extra": "iterations: 2835\ncpu: 306986.80776014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 350155.6757843832,
            "unit": "ns/iter",
            "extra": "iterations: 2486\ncpu: 350115.56717618555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5691.886232380605,
            "unit": "ns/iter",
            "extra": "iterations: 122592\ncpu: 5691.778419472724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4700.774868689596,
            "unit": "ns/iter",
            "extra": "iterations: 149455\ncpu: 4700.622260881196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4710.508466172714,
            "unit": "ns/iter",
            "extra": "iterations: 147233\ncpu: 4710.413426337922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4690.8123636656555,
            "unit": "ns/iter",
            "extra": "iterations: 148532\ncpu: 4690.764279751165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7180.2052055440345,
            "unit": "ns/iter",
            "extra": "iterations: 97473\ncpu: 7180.135011746875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26740.87593418303,
            "unit": "ns/iter",
            "extra": "iterations: 31846\ncpu: 26740.51372228877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 117187.92803700587,
            "unit": "ns/iter",
            "extra": "iterations: 7351\ncpu: 117185.90667936308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 89717.84892010993,
            "unit": "ns/iter",
            "extra": "iterations: 9538\ncpu: 89716.26127070766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 90674.31407596704,
            "unit": "ns/iter",
            "extra": "iterations: 9399\ncpu: 90672.85881476733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 86572.26804542076,
            "unit": "ns/iter",
            "extra": "iterations: 9864\ncpu: 86570.37712895455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 205490.00184501335,
            "unit": "ns/iter",
            "extra": "iterations: 4336\ncpu: 205484.47878228786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1683616.8137431876,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1683573.7793851902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1305443.792907778,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1305392.6241134612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1310528.911392435,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1310499.7187060607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1280883.846473058,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1280845.504840937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 717372.603875942,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 717360.7751937979 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}