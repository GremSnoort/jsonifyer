window.BENCHMARK_DATA = {
  "lastUpdate": 1702083147184,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-10 22.04 Debug c++-17": [
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
        "date": 1702079189383,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11265.154274799463,
            "unit": "ns/iter",
            "extra": "iterations: 63348\ncpu: 11264.881290648484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9066.340695598281,
            "unit": "ns/iter",
            "extra": "iterations: 77286\ncpu: 9066.270734673808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9603.404801227578,
            "unit": "ns/iter",
            "extra": "iterations: 76897\ncpu: 9603.150968178214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9132.038412408481,
            "unit": "ns/iter",
            "extra": "iterations: 76720\ncpu: 9131.603232533893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17705.15172329792,
            "unit": "ns/iter",
            "extra": "iterations: 41055\ncpu: 17704.07014979905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54297.84589859265,
            "unit": "ns/iter",
            "extra": "iterations: 15068\ncpu: 54297.19272630744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 262429.7178308849,
            "unit": "ns/iter",
            "extra": "iterations: 3264\ncpu: 262421.9362745099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 210365.25086249065,
            "unit": "ns/iter",
            "extra": "iterations: 4058\ncpu: 210363.10990635783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 212540.76590456945,
            "unit": "ns/iter",
            "extra": "iterations: 4024\ncpu: 212533.59840954278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 219260.92777364247,
            "unit": "ns/iter",
            "extra": "iterations: 4029\ncpu: 219252.469595433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 459465.4939947811,
            "unit": "ns/iter",
            "extra": "iterations: 1915\ncpu: 459449.08616187965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3906963.753138014,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3906738.4937238498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3130932.2281879266,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3130897.651006713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3192950.098305138,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3192839.6610169513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3151628.7932203785,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3151468.474576276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1850188.280876494,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1850164.5418326727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3073127.8145695543,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3072979.801324497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4910.551299359883,
            "unit": "ns/iter",
            "extra": "iterations: 142955\ncpu: 4910.543877443953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4080.9638000293717,
            "unit": "ns/iter",
            "extra": "iterations: 170525\ncpu: 4080.9640815129646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 3998.9148425016874,
            "unit": "ns/iter",
            "extra": "iterations: 175240\ncpu: 3998.7742524537784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4025.2551967420536,
            "unit": "ns/iter",
            "extra": "iterations: 174340\ncpu: 4025.0797292646403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8767.079934668367,
            "unit": "ns/iter",
            "extra": "iterations: 82655\ncpu: 8766.96146633597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31373.231447352788,
            "unit": "ns/iter",
            "extra": "iterations: 26317\ncpu: 31372.876847665004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 146071.15236962982,
            "unit": "ns/iter",
            "extra": "iterations: 5887\ncpu: 146063.54679802974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 116273.26432557526,
            "unit": "ns/iter",
            "extra": "iterations: 7347\ncpu: 116270.83163195869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 117742.38269734269,
            "unit": "ns/iter",
            "extra": "iterations: 7259\ncpu: 117738.00799008098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 117416.18727672077,
            "unit": "ns/iter",
            "extra": "iterations: 7278\ncpu: 117415.49876339649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 277528.54583068035,
            "unit": "ns/iter",
            "extra": "iterations: 3142\ncpu: 277521.0375556969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2203086.3270588405,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2203049.647058823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1786174.3078394015,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1786094.4550669242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1790985.5625000137,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1790916.6015624977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1793792.812260527,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1793708.0459770123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1077419.0391254213,
            "unit": "ns/iter",
            "extra": "iterations: 869\ncpu: 1077397.698504022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1752576.9288389245,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1752472.2846441986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5811.40790657368,
            "unit": "ns/iter",
            "extra": "iterations: 121165\ncpu: 5811.259852267544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4751.303171876145,
            "unit": "ns/iter",
            "extra": "iterations: 147263\ncpu: 4751.067817442237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4800.077760891585,
            "unit": "ns/iter",
            "extra": "iterations: 146076\ncpu: 4800.026698430931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4773.532959948702,
            "unit": "ns/iter",
            "extra": "iterations: 146587\ncpu: 4773.4505788371625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8526.889286639473,
            "unit": "ns/iter",
            "extra": "iterations: 84922\ncpu: 8526.879960434231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 22586.186565293105,
            "unit": "ns/iter",
            "extra": "iterations: 35907\ncpu: 22585.8913303813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 116637.13796864293,
            "unit": "ns/iter",
            "extra": "iterations: 7335\ncpu: 116633.3060668036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 94667.45001108544,
            "unit": "ns/iter",
            "extra": "iterations: 9022\ncpu: 94663.31190423414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 94729.87725911925,
            "unit": "ns/iter",
            "extra": "iterations: 9019\ncpu: 94728.60627563995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 94864.21490352385,
            "unit": "ns/iter",
            "extra": "iterations: 9018\ncpu: 94859.29252605901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 179942.62344189637,
            "unit": "ns/iter",
            "extra": "iterations: 4974\ncpu: 179936.02734217848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1707629.9724770715,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1707544.0366972436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1353303.2620087469,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1353266.6666666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1358062.6125730993,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1357989.1812865455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1351771.464337706,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1351732.896652111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 776631.8783557089,
            "unit": "ns/iter",
            "extra": "iterations: 1192\ncpu: 776604.1946308721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1314855.3404255542,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1314801.7021276632 ns\nthreads: 1"
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
        "date": 1702083145892,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14578.188762755766,
            "unit": "ns/iter",
            "extra": "iterations: 48802\ncpu: 14577.931232326546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 125410.22047710835,
            "unit": "ns/iter",
            "extra": "iterations: 6749\ncpu: 125403.60053341236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 236266.39228471013,
            "unit": "ns/iter",
            "extra": "iterations: 3681\ncpu: 236264.38467807657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 344365.3463531258,
            "unit": "ns/iter",
            "extra": "iterations: 2509\ncpu: 344354.84256675973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 454129.3801047138,
            "unit": "ns/iter",
            "extra": "iterations: 1910\ncpu: 454117.53926701564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 563887.4474026086,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 563867.2727272728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 556064.3693045687,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 556055.395683453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 644637.6350000094,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 644595.5999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 715948.3671083279,
            "unit": "ns/iter",
            "extra": "iterations: 1283\ncpu: 715921.2003117691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11345.12382866965,
            "unit": "ns/iter",
            "extra": "iterations: 61682\ncpu: 11344.714827664462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9299.395287507074,
            "unit": "ns/iter",
            "extra": "iterations: 75459\ncpu: 9299.232695901095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9283.915787655924,
            "unit": "ns/iter",
            "extra": "iterations: 75274\ncpu: 9283.734091452578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9348.381502354703,
            "unit": "ns/iter",
            "extra": "iterations: 75588\ncpu: 9348.068476477743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15018.164489848465,
            "unit": "ns/iter",
            "extra": "iterations: 46398\ncpu: 15017.671020302612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 58438.925119226435,
            "unit": "ns/iter",
            "extra": "iterations: 14049\ncpu: 58437.703751156616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 266595.483780419,
            "unit": "ns/iter",
            "extra": "iterations: 3206\ncpu: 266579.9750467874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 210495.50801480075,
            "unit": "ns/iter",
            "extra": "iterations: 4055\ncpu: 210489.3711467322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 216291.15840859237,
            "unit": "ns/iter",
            "extra": "iterations: 4097\ncpu: 216278.03270685906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 207816.2461688167,
            "unit": "ns/iter",
            "extra": "iterations: 4111\ncpu: 207813.2084650934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 474196.7795698913,
            "unit": "ns/iter",
            "extra": "iterations: 1860\ncpu: 474172.41935483896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3910089.2521008174,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3909972.2689075633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3182893.9795221994,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3182807.5085324133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3153634.217898868,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3153301.9455253026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3160082.6598639474,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3159892.517006805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1805169.5914396527,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1804960.8949416382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3077613.231023076,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3077377.887788779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7026.136808536158,
            "unit": "ns/iter",
            "extra": "iterations: 99716\ncpu: 7025.45629588031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71745.10852648201,
            "unit": "ns/iter",
            "extra": "iterations: 11951\ncpu: 71742.15546816176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 137400.25007829425,
            "unit": "ns/iter",
            "extra": "iterations: 6386\ncpu: 137391.95114312565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 201771.80585910255,
            "unit": "ns/iter",
            "extra": "iterations: 4301\ncpu: 201765.07788886232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 265959.9896024467,
            "unit": "ns/iter",
            "extra": "iterations: 3270\ncpu: 265934.70948012226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 329696.7035768708,
            "unit": "ns/iter",
            "extra": "iterations: 2628\ncpu: 329679.2237442919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 393953.9501585935,
            "unit": "ns/iter",
            "extra": "iterations: 2207\ncpu: 393928.0018124162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 460785.744714598,
            "unit": "ns/iter",
            "extra": "iterations: 1892\ncpu: 460748.0443974617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 522011.59170175117,
            "unit": "ns/iter",
            "extra": "iterations: 1663\ncpu: 521970.59530968266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5177.9624554006,
            "unit": "ns/iter",
            "extra": "iterations: 135652\ncpu: 5177.61699053461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4208.97303490751,
            "unit": "ns/iter",
            "extra": "iterations: 166697\ncpu: 4208.775802803886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4100.680753295161,
            "unit": "ns/iter",
            "extra": "iterations: 170398\ncpu: 4100.3350978297485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4133.800788129822,
            "unit": "ns/iter",
            "extra": "iterations: 169769\ncpu: 4133.533801813045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7355.975452914457,
            "unit": "ns/iter",
            "extra": "iterations: 95327\ncpu: 7355.44494214649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34449.31604794492,
            "unit": "ns/iter",
            "extra": "iterations: 24028\ncpu: 34447.91909438989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 144777.4531117517,
            "unit": "ns/iter",
            "extra": "iterations: 5897\ncpu: 144767.37324062997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 116202.46140207375,
            "unit": "ns/iter",
            "extra": "iterations: 7332\ncpu: 116198.33606110197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 114424.48777867283,
            "unit": "ns/iter",
            "extra": "iterations: 7446\ncpu: 114416.58608648993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 116299.54012513654,
            "unit": "ns/iter",
            "extra": "iterations: 7352\ncpu: 116294.8449401524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 289837.07363183453,
            "unit": "ns/iter",
            "extra": "iterations: 3015\ncpu: 289815.2902155888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2210894.0496454244,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 2210745.153664305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1823587.7123287779,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1823454.2074363974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1792699.8000000082,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1792602.692307687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1825655.2426614685,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1825552.837573394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1070099.1461449913,
            "unit": "ns/iter",
            "extra": "iterations: 869\ncpu: 1070073.762945913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1758608.6497175142,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1758503.201506598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7178.009251237823,
            "unit": "ns/iter",
            "extra": "iterations: 96960\ncpu: 7177.805280528048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53638.5690000003,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53630.83000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98044.08628976796,
            "unit": "ns/iter",
            "extra": "iterations: 8738\ncpu: 98036.55298695306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 141404.0407492629,
            "unit": "ns/iter",
            "extra": "iterations: 6086\ncpu: 141389.7305290829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 185569.53514787517,
            "unit": "ns/iter",
            "extra": "iterations: 4666\ncpu: 185558.50835833588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 231221.01542142904,
            "unit": "ns/iter",
            "extra": "iterations: 3761\ncpu: 231196.67641584648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 279637.4306083619,
            "unit": "ns/iter",
            "extra": "iterations: 3156\ncpu: 279625.0950570337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 318532.7806664221,
            "unit": "ns/iter",
            "extra": "iterations: 2731\ncpu: 318508.38520688395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 362637.3234557679,
            "unit": "ns/iter",
            "extra": "iterations: 2396\ncpu: 362631.51085141633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5868.833274410915,
            "unit": "ns/iter",
            "extra": "iterations: 118800\ncpu: 5868.267676767702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4814.029068649048,
            "unit": "ns/iter",
            "extra": "iterations: 145552\ncpu: 4813.946905573272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4788.923533109206,
            "unit": "ns/iter",
            "extra": "iterations: 146364\ncpu: 4788.661146183498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4812.308975605727,
            "unit": "ns/iter",
            "extra": "iterations: 146018\ncpu: 4811.938939034932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7285.792009082427,
            "unit": "ns/iter",
            "extra": "iterations: 96009\ncpu: 7285.508650230705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23631.06667633425,
            "unit": "ns/iter",
            "extra": "iterations: 34480\ncpu: 23629.680974478128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 121027.34218330558,
            "unit": "ns/iter",
            "extra": "iterations: 7081\ncpu: 121021.70597373293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 94078.35974539153,
            "unit": "ns/iter",
            "extra": "iterations: 9112\ncpu: 94073.06848112428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 96413.41636018932,
            "unit": "ns/iter",
            "extra": "iterations: 8973\ncpu: 96407.87919313493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 90899.58569299562,
            "unit": "ns/iter",
            "extra": "iterations: 9394\ncpu: 90898.30743027486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 182014.4735444372,
            "unit": "ns/iter",
            "extra": "iterations: 4895\ncpu: 182005.53626149046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1693708.2967033351,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1693619.2307692266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1343142.106104647,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1343057.84883721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1350365.0738061483,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1350276.8451519527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1341458.9826589196,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1341388.4393063548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 732361.7256145991,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 732321.5701823932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1297488.7712692013,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1297410.878661084 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}