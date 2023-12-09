window.BENCHMARK_DATA = {
  "lastUpdate": 1702085580332,
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
      }
    ]
  }
}