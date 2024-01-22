window.BENCHMARK_DATA = {
  "lastUpdate": 1705956392302,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-14 20.04 Debug c++-17": [
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702489566229,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15443.775802479777,
            "unit": "ns/iter",
            "extra": "iterations: 44269\ncpu: 15443.377984594188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 125699.68589174713,
            "unit": "ns/iter",
            "extra": "iterations: 6762\ncpu: 125697.08666075124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 236252.5231986844,
            "unit": "ns/iter",
            "extra": "iterations: 3664\ncpu: 236247.81659388647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 344772.90712571767,
            "unit": "ns/iter",
            "extra": "iterations: 2498\ncpu: 344765.4123298639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 454218.0424305797,
            "unit": "ns/iter",
            "extra": "iterations: 1909\ncpu: 454200.9429020428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 564697.368660585,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 564675.5526657994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 545008.4699999706,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544991.6999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 629220.837000048,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 629219.2999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 723767.0031152078,
            "unit": "ns/iter",
            "extra": "iterations: 1284\ncpu: 723732.9439252347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12315.178467505879,
            "unit": "ns/iter",
            "extra": "iterations: 56705\ncpu: 12314.825853099375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10407.159923442317,
            "unit": "ns/iter",
            "extra": "iterations: 67401\ncpu: 10406.762510941977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10246.02233501083,
            "unit": "ns/iter",
            "extra": "iterations: 68368\ncpu: 10245.645623683591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10279.630062214232,
            "unit": "ns/iter",
            "extra": "iterations: 68152\ncpu: 10279.136342293707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16747.346838890844,
            "unit": "ns/iter",
            "extra": "iterations: 41884\ncpu: 16747.00362907077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56329.04409426736,
            "unit": "ns/iter",
            "extra": "iterations: 14469\ncpu: 56325.80689750509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 252070.597054488,
            "unit": "ns/iter",
            "extra": "iterations: 3395\ncpu: 252057.378497791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 197884.01442866158,
            "unit": "ns/iter",
            "extra": "iterations: 4297\ncpu: 197865.74354200606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 197509.2106852473,
            "unit": "ns/iter",
            "extra": "iterations: 4305\ncpu: 197499.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 195021.0426703275,
            "unit": "ns/iter",
            "extra": "iterations: 4359\ncpu: 195008.35053911412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 456834.18418317253,
            "unit": "ns/iter",
            "extra": "iterations: 1922\ncpu: 456811.81061394326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3941006.406779287,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3940772.4576271074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3198293.7206897796,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3198107.2413793067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3178129.993150908,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3177935.2739726044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3175044.010238881,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3174830.7167235534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1862230.1342686082,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1862122.444889783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3104866.9297660273,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3104620.735785947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11868698.744444827,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11868146.666666647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5397327.700000005,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5396813.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15642928.970588427,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 15642152.941176455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55127.459200002704,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55125.480000000236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 296611.5219495337,
            "unit": "ns/iter",
            "extra": "iterations: 2893\ncpu: 296604.1825095055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 232265.48644984709,
            "unit": "ns/iter",
            "extra": "iterations: 3690\ncpu: 232257.72357723652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 230988.69234913104,
            "unit": "ns/iter",
            "extra": "iterations: 3712\ncpu: 230985.58728448313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 223652.72518286336,
            "unit": "ns/iter",
            "extra": "iterations: 3828\ncpu: 223642.94670846255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 477068.0892562261,
            "unit": "ns/iter",
            "extra": "iterations: 1815\ncpu: 477057.685950414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3992900.274678028,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3992706.437768251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3255169.1783216894,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3255039.160839159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3244692.1958043356,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3244589.1608391483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3237314.156794498,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3237166.550522652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1908872.6008231759,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1908787.2427983664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3179611.610169374,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3179578.6440678057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12195131.977011506,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12194635.632183932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5441983.169999958,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5441884.99999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54184.95746778493,
            "unit": "ns/iter",
            "extra": "iterations: 15212\ncpu: 54182.415198527626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 266634.4277726079,
            "unit": "ns/iter",
            "extra": "iterations: 3219\ncpu: 266620.2858030442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 206014.5005999475,
            "unit": "ns/iter",
            "extra": "iterations: 4167\ncpu: 206007.8953683703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 202175.4693396146,
            "unit": "ns/iter",
            "extra": "iterations: 4240\ncpu: 202169.8349056604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 198242.5594519185,
            "unit": "ns/iter",
            "extra": "iterations: 4306\ncpu: 198234.37064561146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 443841.65747827094,
            "unit": "ns/iter",
            "extra": "iterations: 1959\ncpu: 443827.97345584433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3954957.334745829,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3954814.830508477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3228903.307958607,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3228758.8235294125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3201142.7938144705,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3201067.01030926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3176657.870307306,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3176465.870307158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1854100.6726547473,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1853979.4411177535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3102693.7906974573,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3102485.0498338793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6275.718438321321,
            "unit": "ns/iter",
            "extra": "iterations: 111393\ncpu: 6275.3736769815305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34357.798646859585,
            "unit": "ns/iter",
            "extra": "iterations: 20397\ncpu: 34355.547384419304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28033.480285012683,
            "unit": "ns/iter",
            "extra": "iterations: 24981\ncpu: 28031.944277650982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27247.418026085514,
            "unit": "ns/iter",
            "extra": "iterations: 25685\ncpu: 27245.789371228282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21954.31198094685,
            "unit": "ns/iter",
            "extra": "iterations: 31909\ncpu: 21953.006988623958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 131636.14462810743,
            "unit": "ns/iter",
            "extra": "iterations: 5324\ncpu: 131627.51690458343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 265201.4699205318,
            "unit": "ns/iter",
            "extra": "iterations: 2643\ncpu: 265184.18463867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67175.31779376164,
            "unit": "ns/iter",
            "extra": "iterations: 10425\ncpu: 67170.48441247026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67223.08352623702,
            "unit": "ns/iter",
            "extra": "iterations: 10368\ncpu: 67222.19328703643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66452.68411073883,
            "unit": "ns/iter",
            "extra": "iterations: 10548\ncpu: 66450.63519150593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 137309.3812794343,
            "unit": "ns/iter",
            "extra": "iterations: 5096\ncpu: 137301.72684458384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 124821.57371448667,
            "unit": "ns/iter",
            "extra": "iterations: 5562\ncpu: 124818.0510607718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41781.71843615349,
            "unit": "ns/iter",
            "extra": "iterations: 16728\ncpu: 41779.447632712145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 208156.6073655941,
            "unit": "ns/iter",
            "extra": "iterations: 3367\ncpu: 208144.81734481937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 166642.90057090356,
            "unit": "ns/iter",
            "extra": "iterations: 4204\ncpu: 166628.0922930528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 166165.43733650277,
            "unit": "ns/iter",
            "extra": "iterations: 4205\ncpu: 166149.29845422274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 166040.64986925677,
            "unit": "ns/iter",
            "extra": "iterations: 4207\ncpu: 166026.00427858392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 279510.73402556276,
            "unit": "ns/iter",
            "extra": "iterations: 2504\ncpu: 279487.4999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1150564.4629323797,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1150541.8451400474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 968056.7326869231,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 967969.6675900244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 975006.5981308165,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 974942.9906542083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 951451.095367853,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 951347.9564032797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 638332.3015441314,
            "unit": "ns/iter",
            "extra": "iterations: 1101\ncpu: 638278.4741144438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 954703.1356165361,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 954701.7808219182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42133.74536256796,
            "unit": "ns/iter",
            "extra": "iterations: 16604\ncpu: 42132.648759335534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 206651.74592833477,
            "unit": "ns/iter",
            "extra": "iterations: 3377\ncpu: 206646.60941664435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 167683.45192077733,
            "unit": "ns/iter",
            "extra": "iterations: 4191\ncpu: 167681.41255070362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 167665.34585924572,
            "unit": "ns/iter",
            "extra": "iterations: 4178\ncpu: 167665.15078984984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 168321.57262903315,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 168306.530612246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 282100.85812174785,
            "unit": "ns/iter",
            "extra": "iterations: 2481\ncpu: 282080.81418782857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1151595.7298187155,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1151512.520593084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 960642.3972604093,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 960566.3013698634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 959374.4057377235,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 959285.2459016336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 954626.3502748396,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 954609.3406593408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 630046.4591194853,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 630001.5274034102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 953071.7574931849,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 952994.1416893663 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702489566229,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15443.775802479777,
            "unit": "ns/iter",
            "extra": "iterations: 44269\ncpu: 15443.377984594188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 125699.68589174713,
            "unit": "ns/iter",
            "extra": "iterations: 6762\ncpu: 125697.08666075124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 236252.5231986844,
            "unit": "ns/iter",
            "extra": "iterations: 3664\ncpu: 236247.81659388647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 344772.90712571767,
            "unit": "ns/iter",
            "extra": "iterations: 2498\ncpu: 344765.4123298639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 454218.0424305797,
            "unit": "ns/iter",
            "extra": "iterations: 1909\ncpu: 454200.9429020428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 564697.368660585,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 564675.5526657994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 545008.4699999706,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544991.6999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 629220.837000048,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 629219.2999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 723767.0031152078,
            "unit": "ns/iter",
            "extra": "iterations: 1284\ncpu: 723732.9439252347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12315.178467505879,
            "unit": "ns/iter",
            "extra": "iterations: 56705\ncpu: 12314.825853099375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10407.159923442317,
            "unit": "ns/iter",
            "extra": "iterations: 67401\ncpu: 10406.762510941977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10246.02233501083,
            "unit": "ns/iter",
            "extra": "iterations: 68368\ncpu: 10245.645623683591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10279.630062214232,
            "unit": "ns/iter",
            "extra": "iterations: 68152\ncpu: 10279.136342293707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16747.346838890844,
            "unit": "ns/iter",
            "extra": "iterations: 41884\ncpu: 16747.00362907077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56329.04409426736,
            "unit": "ns/iter",
            "extra": "iterations: 14469\ncpu: 56325.80689750509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 252070.597054488,
            "unit": "ns/iter",
            "extra": "iterations: 3395\ncpu: 252057.378497791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 197884.01442866158,
            "unit": "ns/iter",
            "extra": "iterations: 4297\ncpu: 197865.74354200606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 197509.2106852473,
            "unit": "ns/iter",
            "extra": "iterations: 4305\ncpu: 197499.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 195021.0426703275,
            "unit": "ns/iter",
            "extra": "iterations: 4359\ncpu: 195008.35053911412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 456834.18418317253,
            "unit": "ns/iter",
            "extra": "iterations: 1922\ncpu: 456811.81061394326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3941006.406779287,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3940772.4576271074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3198293.7206897796,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3198107.2413793067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3178129.993150908,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3177935.2739726044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3175044.010238881,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3174830.7167235534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1862230.1342686082,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1862122.444889783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3104866.9297660273,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3104620.735785947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11868698.744444827,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11868146.666666647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5397327.700000005,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5396813.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15642928.970588427,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 15642152.941176455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55127.459200002704,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55125.480000000236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 296611.5219495337,
            "unit": "ns/iter",
            "extra": "iterations: 2893\ncpu: 296604.1825095055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 232265.48644984709,
            "unit": "ns/iter",
            "extra": "iterations: 3690\ncpu: 232257.72357723652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 230988.69234913104,
            "unit": "ns/iter",
            "extra": "iterations: 3712\ncpu: 230985.58728448313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 223652.72518286336,
            "unit": "ns/iter",
            "extra": "iterations: 3828\ncpu: 223642.94670846255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 477068.0892562261,
            "unit": "ns/iter",
            "extra": "iterations: 1815\ncpu: 477057.685950414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3992900.274678028,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3992706.437768251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3255169.1783216894,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3255039.160839159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3244692.1958043356,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3244589.1608391483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3237314.156794498,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3237166.550522652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1908872.6008231759,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1908787.2427983664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3179611.610169374,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3179578.6440678057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12195131.977011506,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12194635.632183932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5441983.169999958,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5441884.99999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54184.95746778493,
            "unit": "ns/iter",
            "extra": "iterations: 15212\ncpu: 54182.415198527626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 266634.4277726079,
            "unit": "ns/iter",
            "extra": "iterations: 3219\ncpu: 266620.2858030442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 206014.5005999475,
            "unit": "ns/iter",
            "extra": "iterations: 4167\ncpu: 206007.8953683703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 202175.4693396146,
            "unit": "ns/iter",
            "extra": "iterations: 4240\ncpu: 202169.8349056604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 198242.5594519185,
            "unit": "ns/iter",
            "extra": "iterations: 4306\ncpu: 198234.37064561146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 443841.65747827094,
            "unit": "ns/iter",
            "extra": "iterations: 1959\ncpu: 443827.97345584433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3954957.334745829,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3954814.830508477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3228903.307958607,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3228758.8235294125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3201142.7938144705,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3201067.01030926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3176657.870307306,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3176465.870307158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1854100.6726547473,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1853979.4411177535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3102693.7906974573,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3102485.0498338793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6275.718438321321,
            "unit": "ns/iter",
            "extra": "iterations: 111393\ncpu: 6275.3736769815305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34357.798646859585,
            "unit": "ns/iter",
            "extra": "iterations: 20397\ncpu: 34355.547384419304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28033.480285012683,
            "unit": "ns/iter",
            "extra": "iterations: 24981\ncpu: 28031.944277650982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27247.418026085514,
            "unit": "ns/iter",
            "extra": "iterations: 25685\ncpu: 27245.789371228282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21954.31198094685,
            "unit": "ns/iter",
            "extra": "iterations: 31909\ncpu: 21953.006988623958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 131636.14462810743,
            "unit": "ns/iter",
            "extra": "iterations: 5324\ncpu: 131627.51690458343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 265201.4699205318,
            "unit": "ns/iter",
            "extra": "iterations: 2643\ncpu: 265184.18463867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67175.31779376164,
            "unit": "ns/iter",
            "extra": "iterations: 10425\ncpu: 67170.48441247026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67223.08352623702,
            "unit": "ns/iter",
            "extra": "iterations: 10368\ncpu: 67222.19328703643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66452.68411073883,
            "unit": "ns/iter",
            "extra": "iterations: 10548\ncpu: 66450.63519150593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 137309.3812794343,
            "unit": "ns/iter",
            "extra": "iterations: 5096\ncpu: 137301.72684458384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 124821.57371448667,
            "unit": "ns/iter",
            "extra": "iterations: 5562\ncpu: 124818.0510607718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41781.71843615349,
            "unit": "ns/iter",
            "extra": "iterations: 16728\ncpu: 41779.447632712145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 208156.6073655941,
            "unit": "ns/iter",
            "extra": "iterations: 3367\ncpu: 208144.81734481937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 166642.90057090356,
            "unit": "ns/iter",
            "extra": "iterations: 4204\ncpu: 166628.0922930528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 166165.43733650277,
            "unit": "ns/iter",
            "extra": "iterations: 4205\ncpu: 166149.29845422274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 166040.64986925677,
            "unit": "ns/iter",
            "extra": "iterations: 4207\ncpu: 166026.00427858392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 279510.73402556276,
            "unit": "ns/iter",
            "extra": "iterations: 2504\ncpu: 279487.4999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1150564.4629323797,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1150541.8451400474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 968056.7326869231,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 967969.6675900244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 975006.5981308165,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 974942.9906542083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 951451.095367853,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 951347.9564032797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 638332.3015441314,
            "unit": "ns/iter",
            "extra": "iterations: 1101\ncpu: 638278.4741144438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 954703.1356165361,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 954701.7808219182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42133.74536256796,
            "unit": "ns/iter",
            "extra": "iterations: 16604\ncpu: 42132.648759335534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 206651.74592833477,
            "unit": "ns/iter",
            "extra": "iterations: 3377\ncpu: 206646.60941664435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 167683.45192077733,
            "unit": "ns/iter",
            "extra": "iterations: 4191\ncpu: 167681.41255070362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 167665.34585924572,
            "unit": "ns/iter",
            "extra": "iterations: 4178\ncpu: 167665.15078984984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 168321.57262903315,
            "unit": "ns/iter",
            "extra": "iterations: 4165\ncpu: 168306.530612246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 282100.85812174785,
            "unit": "ns/iter",
            "extra": "iterations: 2481\ncpu: 282080.81418782857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1151595.7298187155,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1151512.520593084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 960642.3972604093,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 960566.3013698634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 959374.4057377235,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 959285.2459016336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 954626.3502748396,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 954609.3406593408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 630046.4591194853,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 630001.5274034102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 953071.7574931849,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 952994.1416893663 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702492197026,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15606.587975186034,
            "unit": "ns/iter",
            "extra": "iterations: 45456\ncpu: 15575.514783526929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 125644.3262548264,
            "unit": "ns/iter",
            "extra": "iterations: 6734\ncpu: 125639.33768933768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 235630.53476371625,
            "unit": "ns/iter",
            "extra": "iterations: 3682\ncpu: 235612.92775665392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 343694.76144963654,
            "unit": "ns/iter",
            "extra": "iterations: 2511\ncpu: 343682.7160493827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 452232.45023452345,
            "unit": "ns/iter",
            "extra": "iterations: 1919\ncpu: 452202.2928608654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 563223.5676375933,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 563194.3042071197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 539850.0939999167,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 539832.9999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 626610.5199999856,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 626605.0999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 713126.7751159545,
            "unit": "ns/iter",
            "extra": "iterations: 1294\ncpu: 713103.7867078836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12109.6719480531,
            "unit": "ns/iter",
            "extra": "iterations: 57750\ncpu: 12109.387012987014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10148.906566315667,
            "unit": "ns/iter",
            "extra": "iterations: 68958\ncpu: 10148.826822123598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10125.18368172369,
            "unit": "ns/iter",
            "extra": "iterations: 69223\ncpu: 10124.984470479481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10171.31227937734,
            "unit": "ns/iter",
            "extra": "iterations: 68839\ncpu: 10170.901669111994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16579.581379424995,
            "unit": "ns/iter",
            "extra": "iterations: 42351\ncpu: 16579.145710845096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56168.51478188603,
            "unit": "ns/iter",
            "extra": "iterations: 14511\ncpu: 56166.701123285784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 251873.63266512152,
            "unit": "ns/iter",
            "extra": "iterations: 3392\ncpu: 251871.78655660388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 198216.08744186326,
            "unit": "ns/iter",
            "extra": "iterations: 4300\ncpu: 198205.58139534865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 197826.1808335318,
            "unit": "ns/iter",
            "extra": "iterations: 4247\ncpu: 197822.65128325924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 195089.05804387675,
            "unit": "ns/iter",
            "extra": "iterations: 4376\ncpu: 195081.83272394876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 456697.679294234,
            "unit": "ns/iter",
            "extra": "iterations: 1927\ncpu: 456688.2719252719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3932001.3347456376,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3931901.2711864514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3182284.3917529304,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3182130.2405498307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3177432.5684932903,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3177381.1643835604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3136717.293918884,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3136583.78378378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1809031.703703634,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1808992.9824561425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3069220.8344370653,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3069082.781456956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11538985.903225742,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11538879.569892474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5312119.699999585,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5312002.999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15660796.5588227,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 15660161.764705874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53765.450100002,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53765.80000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 308887.6525636601,
            "unit": "ns/iter",
            "extra": "iterations: 2789\ncpu: 308707.85227680276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 232533.9829453226,
            "unit": "ns/iter",
            "extra": "iterations: 3694\ncpu: 232521.16946399544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 231545.40789828805,
            "unit": "ns/iter",
            "extra": "iterations: 3697\ncpu: 231540.05950770923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 224400.10566333774,
            "unit": "ns/iter",
            "extra": "iterations: 3814\ncpu: 224393.99580493095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 482815.95363129413,
            "unit": "ns/iter",
            "extra": "iterations: 1790\ncpu: 482807.76536312903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3997276.51072987,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3997173.390557913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3243190.9330986063,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3243059.154929585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3232907.673610915,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3232873.611111131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3199249.9134947825,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3199144.636678203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1851765.1100000874,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1851693.4000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3125215.727272794,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3125134.343434339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11952994.449437825,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 11952601.123595558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5225912.360000393,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5225713.000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53310.070850202996,
            "unit": "ns/iter",
            "extra": "iterations: 15314\ncpu: 53308.606503852956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 264882.67560900137,
            "unit": "ns/iter",
            "extra": "iterations: 3243\ncpu: 264875.0847980257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 208531.63474658842,
            "unit": "ns/iter",
            "extra": "iterations: 4104\ncpu: 208524.51267056525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 205385.4425246131,
            "unit": "ns/iter",
            "extra": "iterations: 4167\ncpu: 205380.48956083515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 199626.35704259414,
            "unit": "ns/iter",
            "extra": "iterations: 4274\ncpu: 199618.08610201222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 445676.9513320173,
            "unit": "ns/iter",
            "extra": "iterations: 1952\ncpu: 445673.0532786873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3948835.9957628893,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3948686.016949159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3224095.0657436755,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3224010.034602073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3201907.890034502,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3201670.446735396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3156232.4644066733,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3156007.4576271223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1806614.6524271301,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1806542.330097092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3091336.966777376,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3091225.5813953653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6188.3582568888805,
            "unit": "ns/iter",
            "extra": "iterations: 112718\ncpu: 6188.307102681026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34570.95289606081,
            "unit": "ns/iter",
            "extra": "iterations: 20338\ncpu: 34569.864293440536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27699.25651572017,
            "unit": "ns/iter",
            "extra": "iterations: 25285\ncpu: 27697.801067826713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27871.10166041127,
            "unit": "ns/iter",
            "extra": "iterations: 25054\ncpu: 27869.940927596388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21770.71912840586,
            "unit": "ns/iter",
            "extra": "iterations: 32125\ncpu: 21770.49027237349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 129430.0362627152,
            "unit": "ns/iter",
            "extra": "iterations: 5405\ncpu: 129427.32654949126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 265628.0043564236,
            "unit": "ns/iter",
            "extra": "iterations: 2525\ncpu: 265622.0990099027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67186.13901431009,
            "unit": "ns/iter",
            "extra": "iterations: 10409\ncpu: 67183.75444327021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66888.6016407547,
            "unit": "ns/iter",
            "extra": "iterations: 10483\ncpu: 66886.84536869255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66859.11774793005,
            "unit": "ns/iter",
            "extra": "iterations: 10497\ncpu: 66859.48366199886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 133858.5010510193,
            "unit": "ns/iter",
            "extra": "iterations: 5233\ncpu: 133853.12440282834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 124313.07255352919,
            "unit": "ns/iter",
            "extra": "iterations: 5651\ncpu: 124309.07803928475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42152.90785106245,
            "unit": "ns/iter",
            "extra": "iterations: 16571\ncpu: 42153.16516806446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 203205.2547197256,
            "unit": "ns/iter",
            "extra": "iterations: 3443\ncpu: 203202.2945106001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 166780.66238401478,
            "unit": "ns/iter",
            "extra": "iterations: 4203\ncpu: 166772.04377825392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 170366.53693111058,
            "unit": "ns/iter",
            "extra": "iterations: 4021\ncpu: 170360.1342949499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 169458.69905728058,
            "unit": "ns/iter",
            "extra": "iterations: 4137\ncpu: 169451.1723471117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 279991.6046418669,
            "unit": "ns/iter",
            "extra": "iterations: 2499\ncpu: 279979.3117246895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1152106.2800660282,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1152089.2915980355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 963087.5728022488,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 963027.472527465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 965662.4171270151,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 965655.2486187922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 960250.720164581,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 960206.8587105748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 625118.2298748161,
            "unit": "ns/iter",
            "extra": "iterations: 1118\ncpu: 625085.9570661872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 949427.8780488368,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 949402.032520313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42782.649333980626,
            "unit": "ns/iter",
            "extra": "iterations: 16366\ncpu: 42780.819992667544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 209273.73721971049,
            "unit": "ns/iter",
            "extra": "iterations: 3345\ncpu: 209262.57100149462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 171225.85501222385,
            "unit": "ns/iter",
            "extra": "iterations: 4090\ncpu: 171218.1173594121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 170402.0048768535,
            "unit": "ns/iter",
            "extra": "iterations: 4101\ncpu: 170399.4147768836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 172428.32947834057,
            "unit": "ns/iter",
            "extra": "iterations: 4064\ncpu: 172419.88188976617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 281128.4626505606,
            "unit": "ns/iter",
            "extra": "iterations: 2490\ncpu: 281110.8032128551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1143239.1617646627,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1143201.3071895542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 960145.5467032695,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 960098.3516483529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 959442.2438355762,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 959381.5068493206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 952168.2438691099,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 952103.6784741175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 620755.6932623546,
            "unit": "ns/iter",
            "extra": "iterations: 1128\ncpu: 620729.7872340407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 946872.6657646233,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 946826.1163734719 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702503247201,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15127.6892573442,
            "unit": "ns/iter",
            "extra": "iterations: 46199\ncpu: 15127.14128011429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124897.86537894445,
            "unit": "ns/iter",
            "extra": "iterations: 6782\ncpu: 124893.89560601593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 236530.11141378747,
            "unit": "ns/iter",
            "extra": "iterations: 3671\ncpu: 236527.0226096432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 347201.7069655693,
            "unit": "ns/iter",
            "extra": "iterations: 2498\ncpu: 347197.3979183348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 455553.63368419564,
            "unit": "ns/iter",
            "extra": "iterations: 1900\ncpu: 455538.6315789473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 569148.4986979356,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 569137.109375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 544053.3650000248,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544059.1999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 630076.211999949,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 630073.5 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 719292.5225155199,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 719256.9099378891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12230.900291879669,
            "unit": "ns/iter",
            "extra": "iterations: 57558\ncpu: 12230.826296952648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10170.042682219771,
            "unit": "ns/iter",
            "extra": "iterations: 68928\ncpu: 10168.919742339825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10109.360973137034,
            "unit": "ns/iter",
            "extra": "iterations: 69055\ncpu: 10109.147780754467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10134.010381223889,
            "unit": "ns/iter",
            "extra": "iterations: 69067\ncpu: 10133.948195230732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16795.103805066035,
            "unit": "ns/iter",
            "extra": "iterations: 41655\ncpu: 16795.04981394789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56864.38832717464,
            "unit": "ns/iter",
            "extra": "iterations: 14341\ncpu: 56862.094693536055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 250751.03845024036,
            "unit": "ns/iter",
            "extra": "iterations: 3407\ncpu: 250743.67478720332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 195448.93254058834,
            "unit": "ns/iter",
            "extra": "iterations: 4373\ncpu: 195440.91013034523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 196718.83989863622,
            "unit": "ns/iter",
            "extra": "iterations: 4341\ncpu: 196712.4625662286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 193045.60384616285,
            "unit": "ns/iter",
            "extra": "iterations: 4420\ncpu: 193037.17194570156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 455985.5103949937,
            "unit": "ns/iter",
            "extra": "iterations: 1924\ncpu: 455976.559251559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3945041.970338994,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3944877.9661016995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3190846.2808219576,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3190589.3835616466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3199494.579310316,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3199363.7931034407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3173344.2705480186,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3173175.3424657565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1850025.111553738,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1849943.027888444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3100385.033444901,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3100231.438127085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11895633.46666647,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11895328.888888873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5383593.749999705,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5383022.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15686847.117646942,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 15686164.705882356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53911.14939999965,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53906.84000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 288153.5648957691,
            "unit": "ns/iter",
            "extra": "iterations: 2974\ncpu: 288143.3086751844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 226897.30844846906,
            "unit": "ns/iter",
            "extra": "iterations: 3764\ncpu: 226880.39319872545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 226935.8990193387,
            "unit": "ns/iter",
            "extra": "iterations: 3773\ncpu: 226931.48688046596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 223068.64216584552,
            "unit": "ns/iter",
            "extra": "iterations: 3823\ncpu: 223063.8765367516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 478711.5422222302,
            "unit": "ns/iter",
            "extra": "iterations: 1800\ncpu: 478707.3888888887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3995175.957081443,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3995133.4763948317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3238477.080139248,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3238325.783972134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3252141.5403509806,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3252127.0175438705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3220269.0655171396,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3220128.9655172466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1905678.8624230355,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1905614.579055442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3147325.385134997,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3147188.851351343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12295847.275862636,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12295344.827586241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5276934.039999901,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5276743.00000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54226.83606882962,
            "unit": "ns/iter",
            "extra": "iterations: 15110\ncpu: 54225.903375248454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 263890.46234245936,
            "unit": "ns/iter",
            "extra": "iterations: 3253\ncpu: 263881.43252382375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 203644.62425540746,
            "unit": "ns/iter",
            "extra": "iterations: 4197\ncpu: 203632.73766976298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 197253.34248154613,
            "unit": "ns/iter",
            "extra": "iterations: 4336\ncpu: 197240.49815498112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 196382.608123713,
            "unit": "ns/iter",
            "extra": "iterations: 4333\ncpu: 196371.63627971336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 445153.5040983646,
            "unit": "ns/iter",
            "extra": "iterations: 1952\ncpu: 445133.4016393448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3941260.7215187065,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3941030.379746849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3208070.1335616303,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3208004.452054785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3211660.0793101657,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3211553.103448274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3183141.2798637697,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3183011.2627986297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1855467.0339321757,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1855366.4670658696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3111653.646666355,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3111469.333333332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6130.209277617354,
            "unit": "ns/iter",
            "extra": "iterations: 113887\ncpu: 6130.267721513404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35074.41278982559,
            "unit": "ns/iter",
            "extra": "iterations: 19969\ncpu: 35072.928038459635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28076.601100358665,
            "unit": "ns/iter",
            "extra": "iterations: 25628\ncpu: 28074.512252224125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28059.116752256232,
            "unit": "ns/iter",
            "extra": "iterations: 25704\ncpu: 28058.072673513623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22062.99491969188,
            "unit": "ns/iter",
            "extra": "iterations: 31691\ncpu: 22063.229308005473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 127512.57277849737,
            "unit": "ns/iter",
            "extra": "iterations: 5503\ncpu: 127510.2852989271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 265162.98486566334,
            "unit": "ns/iter",
            "extra": "iterations: 2643\ncpu: 265162.3533863055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66954.58813330827,
            "unit": "ns/iter",
            "extra": "iterations: 10382\ncpu: 66954.38258524441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67223.621600922,
            "unit": "ns/iter",
            "extra": "iterations: 10444\ncpu: 67222.7020298738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66643.50318471069,
            "unit": "ns/iter",
            "extra": "iterations: 10519\ncpu: 66643.48322083887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 136664.72506367872,
            "unit": "ns/iter",
            "extra": "iterations: 5103\ncpu: 136662.6886145409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 124583.29062111152,
            "unit": "ns/iter",
            "extra": "iterations: 5619\ncpu: 124584.5524114626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42886.194246370054,
            "unit": "ns/iter",
            "extra": "iterations: 16268\ncpu: 42885.2348168187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 203442.70418849305,
            "unit": "ns/iter",
            "extra": "iterations: 3438\ncpu: 203440.66317626793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 166597.67538021633,
            "unit": "ns/iter",
            "extra": "iterations: 4208\ncpu: 166586.19296577838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 166219.0533301923,
            "unit": "ns/iter",
            "extra": "iterations: 4219\ncpu: 166213.012562218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 166386.01639344863,
            "unit": "ns/iter",
            "extra": "iterations: 4209\ncpu: 166373.8892848686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 276111.96469655057,
            "unit": "ns/iter",
            "extra": "iterations: 2521\ncpu: 276102.1023403455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1141513.851307187,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1141492.6470588255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 960387.8459421782,
            "unit": "ns/iter",
            "extra": "iterations: 727\ncpu: 960314.1678129213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 959303.006944386,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 959243.8888888882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 951067.1112618309,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 950970.4206241652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 630838.1774775003,
            "unit": "ns/iter",
            "extra": "iterations: 1110\ncpu: 630807.8378378309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 946091.0783783785,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 946101.2162162197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42264.36108433381,
            "unit": "ns/iter",
            "extra": "iterations: 16600\ncpu: 42261.25903614419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 206905.11856887935,
            "unit": "ns/iter",
            "extra": "iterations: 3382\ncpu: 206896.89532821154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 167647.42276028867,
            "unit": "ns/iter",
            "extra": "iterations: 4130\ncpu: 167644.67312348436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 168570.8469313925,
            "unit": "ns/iter",
            "extra": "iterations: 4155\ncpu: 168566.4741275587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 170273.65701773344,
            "unit": "ns/iter",
            "extra": "iterations: 4111\ncpu: 170267.33154950032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 279492.1103117508,
            "unit": "ns/iter",
            "extra": "iterations: 2502\ncpu: 279485.4916067181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1133397.1831442546,
            "unit": "ns/iter",
            "extra": "iterations: 617\ncpu: 1133364.3435980526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 954104.4068026502,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 954113.8775510226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 948561.5230352265,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 948512.6016260084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 945034.8677462188,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 944978.677462901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 624927.4032114955,
            "unit": "ns/iter",
            "extra": "iterations: 1121\ncpu: 624928.010704719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 942030.0107963287,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 942002.9689608527 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1705574923792,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15859.73186376119,
            "unit": "ns/iter",
            "extra": "iterations: 44276\ncpu: 15859.544674315659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 130358.70529283048,
            "unit": "ns/iter",
            "extra": "iterations: 6386\ncpu: 130354.79173191357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 244470.17997179844,
            "unit": "ns/iter",
            "extra": "iterations: 3545\ncpu: 244446.544428773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 355725.4033786708,
            "unit": "ns/iter",
            "extra": "iterations: 2427\ncpu: 355730.24309847533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 473080.3014587171,
            "unit": "ns/iter",
            "extra": "iterations: 1851\ncpu: 473070.2863317127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 586490.9904175564,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 586485.1471594797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 563467.3019999354,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 563476.6999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 675027.3979999975,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 675016.3999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 757286.1483871228,
            "unit": "ns/iter",
            "extra": "iterations: 1240\ncpu: 757278.0645161293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12625.195631802837,
            "unit": "ns/iter",
            "extra": "iterations: 55492\ncpu: 12624.194478483383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10526.435489186097,
            "unit": "ns/iter",
            "extra": "iterations: 66764\ncpu: 10525.86873165179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10449.822094670057,
            "unit": "ns/iter",
            "extra": "iterations: 67075\ncpu: 10449.598210957887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10499.892414954023,
            "unit": "ns/iter",
            "extra": "iterations: 66552\ncpu: 10499.771607164319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16852.237922793152,
            "unit": "ns/iter",
            "extra": "iterations: 41421\ncpu: 16851.343521402185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 51479.088999997206,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51476.10999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 254144.35066104183,
            "unit": "ns/iter",
            "extra": "iterations: 3328\ncpu: 254131.67067307673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 199425.73540401075,
            "unit": "ns/iter",
            "extra": "iterations: 4282\ncpu: 199414.54927603892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 201885.23202299667,
            "unit": "ns/iter",
            "extra": "iterations: 4172\ncpu: 201877.49280920398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 194218.76416817392,
            "unit": "ns/iter",
            "extra": "iterations: 4376\ncpu: 194211.58592321712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 452072.23589742195,
            "unit": "ns/iter",
            "extra": "iterations: 1950\ncpu: 452059.1282051283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4155300.907079669,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4155020.7964601796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3318472.2989326506,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3318381.8505338095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3317806.174999711,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3317590.3571428554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3302351.3829787797,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3302093.617021271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1917814.4937761044,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1917689.6265560128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3233860.440972415,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3233521.8749999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 12314843.116280109,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12314040.697674418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5683213.810000326,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5682557.000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 16020141.909090549,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16019571.212121218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54843.878500003026,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54841.04999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 309920.8520518353,
            "unit": "ns/iter",
            "extra": "iterations: 2778\ncpu: 309906.4434845204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 233463.7761437862,
            "unit": "ns/iter",
            "extra": "iterations: 3672\ncpu: 233447.46732026193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 232824.63905486488,
            "unit": "ns/iter",
            "extra": "iterations: 3682\ncpu: 232813.57957631734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 223476.59921569788,
            "unit": "ns/iter",
            "extra": "iterations: 3825\ncpu: 223461.98692810533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 477516.59230769565,
            "unit": "ns/iter",
            "extra": "iterations: 1820\ncpu: 477518.57142857066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4186097.238738848,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4186110.360360355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3359142.093862967,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3359190.613718396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3365202.4115520357,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3365162.8158844807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3349414.794964108,
            "unit": "ns/iter",
            "extra": "iterations: 278\ncpu: 3349306.834532377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1951530.0042195038,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1951559.0717299688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3262931.7263160227,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3262707.01754385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12492796.976469917,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12492343.529411735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5617773.729999271,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5617283.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53558.07136303891,
            "unit": "ns/iter",
            "extra": "iterations: 15260\ncpu: 53556.21231979005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 268210.41255464056,
            "unit": "ns/iter",
            "extra": "iterations: 3202\ncpu: 268197.8138663335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 207568.08698812278,
            "unit": "ns/iter",
            "extra": "iterations: 4127\ncpu: 207557.18439544484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 203161.3240740484,
            "unit": "ns/iter",
            "extra": "iterations: 4212\ncpu: 203148.83665717134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 197699.81029684504,
            "unit": "ns/iter",
            "extra": "iterations: 4312\ncpu: 197694.75881261556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 441025.128231127,
            "unit": "ns/iter",
            "extra": "iterations: 1973\ncpu: 441001.7232640655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4134858.426666344,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4134425.7777777845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3335623.3142857915,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3335505.714285704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3341785.4695343,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3341598.2078853147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3310672.911347365,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3310007.0921985824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1909702.129896968,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1909627.6288659777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3231917.7847222295,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3231789.2361111157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6233.826723877491,
            "unit": "ns/iter",
            "extra": "iterations: 112566\ncpu: 6233.521667288507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35098.48159109119,
            "unit": "ns/iter",
            "extra": "iterations: 19936\ncpu: 35095.69622792939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26787.63492306905,
            "unit": "ns/iter",
            "extra": "iterations: 26126\ncpu: 26786.549797137017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25873.48644243432,
            "unit": "ns/iter",
            "extra": "iterations: 26996\ncpu: 25871.38094532525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22169.330061424887,
            "unit": "ns/iter",
            "extra": "iterations: 31582\ncpu: 22168.412386802465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 125493.24395919437,
            "unit": "ns/iter",
            "extra": "iterations: 5587\ncpu: 125486.80866296758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 277242.3860206591,
            "unit": "ns/iter",
            "extra": "iterations: 2518\ncpu: 277231.37410643336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 69344.36817642607,
            "unit": "ns/iter",
            "extra": "iterations: 10112\ncpu: 69341.37658227926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 69580.01628761474,
            "unit": "ns/iter",
            "extra": "iterations: 10069\ncpu: 69576.23398549971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 68891.11756583699,
            "unit": "ns/iter",
            "extra": "iterations: 10139\ncpu: 68890.34421540669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 139756.02369954178,
            "unit": "ns/iter",
            "extra": "iterations: 4979\ncpu: 139744.74794135347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 132510.50714682834,
            "unit": "ns/iter",
            "extra": "iterations: 5387\ncpu: 132500.0371264144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42962.931804168664,
            "unit": "ns/iter",
            "extra": "iterations: 16218\ncpu: 42963.596004439714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 212038.79878972995,
            "unit": "ns/iter",
            "extra": "iterations: 3305\ncpu: 212035.8850226949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 172351.87281673058,
            "unit": "ns/iter",
            "extra": "iterations: 4065\ncpu: 172348.0196801959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 173666.61359127922,
            "unit": "ns/iter",
            "extra": "iterations: 4032\ncpu: 173661.11111111107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 174296.41987019702,
            "unit": "ns/iter",
            "extra": "iterations: 4006\ncpu: 174297.1043434852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 280750.452247182,
            "unit": "ns/iter",
            "extra": "iterations: 2492\ncpu: 280750.8025682226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1176407.2184873573,
            "unit": "ns/iter",
            "extra": "iterations: 595\ncpu: 1176334.4537815028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 989260.6953455819,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 989247.5317348307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 987494.9137198172,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 987498.1612446978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 977782.5154060337,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 977753.5014005585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 645827.8445883451,
            "unit": "ns/iter",
            "extra": "iterations: 1081\ncpu: 645788.3441258156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 974604.3919108636,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 974578.382147847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43458.096065536025,
            "unit": "ns/iter",
            "extra": "iterations: 16114\ncpu: 43454.914980761976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 214542.7359068589,
            "unit": "ns/iter",
            "extra": "iterations: 3264\ncpu: 214536.5808823514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 176463.01059802357,
            "unit": "ns/iter",
            "extra": "iterations: 3963\ncpu: 176445.97527125877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 176078.63286361238,
            "unit": "ns/iter",
            "extra": "iterations: 3974\ncpu: 176079.4665324618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 177460.33990398954,
            "unit": "ns/iter",
            "extra": "iterations: 3957\ncpu: 177461.28380086136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 280927.78860808903,
            "unit": "ns/iter",
            "extra": "iterations: 2493\ncpu: 280927.0758122744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1181529.4060915175,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1181534.8561759756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 980587.2935392669,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 980582.7247190983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 980714.3286516638,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 980710.1123595494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 983459.2408963988,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 983454.6218487459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 641102.8450962205,
            "unit": "ns/iter",
            "extra": "iterations: 1091\ncpu: 641113.4738771751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 975356.1420612149,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 975372.2841225554 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705772755712,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15305.92909321497,
            "unit": "ns/iter",
            "extra": "iterations: 45722\ncpu: 15305.113512094835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 126178.42444445126,
            "unit": "ns/iter",
            "extra": "iterations: 6750\ncpu: 126178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 236139.00435137656,
            "unit": "ns/iter",
            "extra": "iterations: 3677\ncpu: 236130.5412020669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 345592.4794575327,
            "unit": "ns/iter",
            "extra": "iterations: 2507\ncpu: 345579.0586358198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 453906.6162303828,
            "unit": "ns/iter",
            "extra": "iterations: 1910\ncpu: 453883.9790575918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 563058.5574302528,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 563048.7345879298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 541478.9239999892,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541446.0999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 628267.0260000032,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 628238.0000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 716224.428792578,
            "unit": "ns/iter",
            "extra": "iterations: 1292\ncpu: 716191.0990712079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12317.977096928433,
            "unit": "ns/iter",
            "extra": "iterations: 56237\ncpu: 12317.751658161007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10230.106006913595,
            "unit": "ns/iter",
            "extra": "iterations: 68571\ncpu: 10229.954353881383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10319.368143289948,
            "unit": "ns/iter",
            "extra": "iterations: 67835\ncpu: 10319.09633669936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10361.474260385778,
            "unit": "ns/iter",
            "extra": "iterations: 67231\ncpu: 10360.930225639962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16946.04608116244,
            "unit": "ns/iter",
            "extra": "iterations: 41275\ncpu: 16945.71532404606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57085.87312806042,
            "unit": "ns/iter",
            "extra": "iterations: 14290\ncpu: 57085.11546536044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 253982.5462359156,
            "unit": "ns/iter",
            "extra": "iterations: 3374\ncpu: 253978.12685240112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 199191.47971083067,
            "unit": "ns/iter",
            "extra": "iterations: 4288\ncpu: 199167.9104477612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 199108.56752337684,
            "unit": "ns/iter",
            "extra": "iterations: 4280\ncpu: 199096.82242990585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 196082.71221197402,
            "unit": "ns/iter",
            "extra": "iterations: 4340\ncpu: 196062.6267281103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 444919.00202530494,
            "unit": "ns/iter",
            "extra": "iterations: 1975\ncpu: 444897.4683544306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3925728.5654005646,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3925329.5358649925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3154444.4013606724,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3154289.7959183673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3199110.791095878,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3198952.397260272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3180341.2431508903,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3179970.8904109504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1864783.9336017203,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1864708.6519114696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3093425.253333635,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3093107.9999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11901381.088888584,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11900873.333333332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5277301.989999615,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5276831.999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15670212.455882607,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 15669432.352941146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54951.141300000476,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54948.720000000154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 292748.36338889215,
            "unit": "ns/iter",
            "extra": "iterations: 2939\ncpu: 292724.56617897266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 230353.5875235426,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 230323.09760688417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 232990.75115082497,
            "unit": "ns/iter",
            "extra": "iterations: 3693\ncpu: 232979.1226644994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 232619.18369003898,
            "unit": "ns/iter",
            "extra": "iterations: 3691\ncpu: 232600.21674342992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 467856.1864224294,
            "unit": "ns/iter",
            "extra": "iterations: 1856\ncpu: 467817.56465516996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3998663.781115677,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3998343.7768240534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3238663.638888855,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3238349.9999999944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3254075.213286815,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3253824.47552449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3244744.0348431873,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3244473.5191637683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1928227.809128627,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1928150.2074688824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3145930.6114861555,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3145611.8243243224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12389657.651163118,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12388688.372093046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5403495.369999974,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5402895.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54354.70045105157,
            "unit": "ns/iter",
            "extra": "iterations: 15076\ncpu: 54354.59671000279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 263343.15176653105,
            "unit": "ns/iter",
            "extra": "iterations: 3255\ncpu: 263338.4331797233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 206363.49975867293,
            "unit": "ns/iter",
            "extra": "iterations: 4144\ncpu: 206358.20463320572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 205324.50962927812,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 205316.97159364447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 199660.57527510164,
            "unit": "ns/iter",
            "extra": "iterations: 4271\ncpu: 199646.2889253106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 433673.508542716,
            "unit": "ns/iter",
            "extra": "iterations: 1990\ncpu: 433657.13567839283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3927552.582278319,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3927231.2236286835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3201004.924657766,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3200887.328767115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3211044.072164875,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3210847.0790378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3198208.4742266284,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3197859.4501718236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1881510.9233870893,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1881441.7338709657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3100166.4366666167,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3099930.6666666847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6155.587092583906,
            "unit": "ns/iter",
            "extra": "iterations: 113919\ncpu: 6155.22520387288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34651.03537104848,
            "unit": "ns/iter",
            "extra": "iterations: 20186\ncpu: 34648.82591895354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 25510.042765555077,
            "unit": "ns/iter",
            "extra": "iterations: 27452\ncpu: 25509.58764388752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27212.347207646948,
            "unit": "ns/iter",
            "extra": "iterations: 25731\ncpu: 27211.010065679595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21777.197307047052,
            "unit": "ns/iter",
            "extra": "iterations: 32158\ncpu: 21775.9064618446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 126876.46123189045,
            "unit": "ns/iter",
            "extra": "iterations: 5520\ncpu: 126862.5362318852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 265035.6686884099,
            "unit": "ns/iter",
            "extra": "iterations: 2638\ncpu: 265020.2805155417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66954.0219138815,
            "unit": "ns/iter",
            "extra": "iterations: 10450\ncpu: 66950.15311004879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67067.1046969472,
            "unit": "ns/iter",
            "extra": "iterations: 10411\ncpu: 67059.90778983792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66554.5832858427,
            "unit": "ns/iter",
            "extra": "iterations: 10530\ncpu: 66552.44064577366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 136560.8958861465,
            "unit": "ns/iter",
            "extra": "iterations: 5129\ncpu: 136545.34997075232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 124446.58906306657,
            "unit": "ns/iter",
            "extra": "iterations: 5614\ncpu: 124439.18774492403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42247.63391183444,
            "unit": "ns/iter",
            "extra": "iterations: 16537\ncpu: 42245.59472697553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 204787.95690413218,
            "unit": "ns/iter",
            "extra": "iterations: 3411\ncpu: 204771.79712694412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 167754.9221183668,
            "unit": "ns/iter",
            "extra": "iterations: 4173\ncpu: 167740.59429666732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 167729.0727969392,
            "unit": "ns/iter",
            "extra": "iterations: 4176\ncpu: 167719.37260536544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 167868.51955843726,
            "unit": "ns/iter",
            "extra": "iterations: 4167\ncpu: 167858.62730981628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 282440.1937172527,
            "unit": "ns/iter",
            "extra": "iterations: 2483\ncpu: 282424.7281514288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1144016.8508195218,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1143897.377049168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 953504.9358798572,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 953442.8376534774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 970914.7991632224,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 970898.4658298508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 945476.7834912364,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 945388.2273342332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 638905.3002730245,
            "unit": "ns/iter",
            "extra": "iterations: 1099\ncpu: 638857.2338489533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 948757.2170963354,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 948673.9484396081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43951.453910524906,
            "unit": "ns/iter",
            "extra": "iterations: 15893\ncpu: 43948.74473038454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 206681.76208725804,
            "unit": "ns/iter",
            "extra": "iterations: 3392\ncpu: 206670.63679245103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 169360.08095698326,
            "unit": "ns/iter",
            "extra": "iterations: 4138\ncpu: 169339.97100048512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 171820.5218034109,
            "unit": "ns/iter",
            "extra": "iterations: 4059\ncpu: 171805.86351318142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 171834.16826332815,
            "unit": "ns/iter",
            "extra": "iterations: 4071\ncpu: 171824.711373126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 284669.94462543394,
            "unit": "ns/iter",
            "extra": "iterations: 2456\ncpu: 284662.90716612374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1141809.1601307518,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1141746.7320261544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 954899.7267759728,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 954851.2295081996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 961593.9986264391,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 961523.3516483546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 953093.7703803116,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 953016.1684782481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 633227.6957311014,
            "unit": "ns/iter",
            "extra": "iterations: 1101\ncpu: 633225.8855585717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 948371.5619047203,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 948318.0952381056 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705774698592,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15547.050835808292,
            "unit": "ns/iter",
            "extra": "iterations: 45106\ncpu: 15546.696670066069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 126263.55215094387,
            "unit": "ns/iter",
            "extra": "iterations: 6625\ncpu: 126258.44528301885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 238386.46438431292,
            "unit": "ns/iter",
            "extra": "iterations: 3622\ncpu: 238377.1949199337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 348208.43243240437,
            "unit": "ns/iter",
            "extra": "iterations: 2479\ncpu: 348193.9491730537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 458747.21605921007,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 458729.47702060227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 569243.583769571,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 569213.2198952882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 574960.5890000566,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 574940.1000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 634309.4069999324,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 634250.1 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 741637.6664062695,
            "unit": "ns/iter",
            "extra": "iterations: 1280\ncpu: 741606.71875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12164.493852102398,
            "unit": "ns/iter",
            "extra": "iterations: 57418\ncpu: 12163.649029920938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10347.432717023039,
            "unit": "ns/iter",
            "extra": "iterations: 68472\ncpu: 10346.896541652059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10176.47597479975,
            "unit": "ns/iter",
            "extra": "iterations: 68886\ncpu: 10176.262230351607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10245.377276454446,
            "unit": "ns/iter",
            "extra": "iterations: 68308\ncpu: 10245.170404637794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16971.709232799403,
            "unit": "ns/iter",
            "extra": "iterations: 41645\ncpu: 16970.973706327313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56752.852372338784,
            "unit": "ns/iter",
            "extra": "iterations: 14374\ncpu: 56749.36691248089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 253676.22667464172,
            "unit": "ns/iter",
            "extra": "iterations: 3344\ncpu: 253656.13038277504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 198760.12173507738,
            "unit": "ns/iter",
            "extra": "iterations: 4288\ncpu: 198750.11660447775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 198270.84859726919,
            "unit": "ns/iter",
            "extra": "iterations: 4313\ncpu: 198256.944122421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 194495.5018323439,
            "unit": "ns/iter",
            "extra": "iterations: 4366\ncpu: 194480.8520384793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 456157.666492941,
            "unit": "ns/iter",
            "extra": "iterations: 1919\ncpu: 456127.56644085416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3939341.2531648064,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3939160.759493677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3174226.2680412303,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3174072.8522336734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3190126.790377768,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3189899.3127147863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3156901.31292533,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3156737.755102045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1845162.9880715613,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1845034.7912524845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3081340.1233331207,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3081154.66666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11745391.934066523,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11744686.81318684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5337656.599999718,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5337271.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15485737.33333322,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 15484979.710144892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53975.74899999426,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53970.43000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 307178.454318367,
            "unit": "ns/iter",
            "extra": "iterations: 2802\ncpu: 307158.56531049276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 232863.7187925088,
            "unit": "ns/iter",
            "extra": "iterations: 3677\ncpu: 232850.5303236344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 236692.9854093503,
            "unit": "ns/iter",
            "extra": "iterations: 3701\ncpu: 236673.11537422307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 224779.14019429422,
            "unit": "ns/iter",
            "extra": "iterations: 3809\ncpu: 224763.74376476763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 484042.37394724716,
            "unit": "ns/iter",
            "extra": "iterations: 1781\ncpu: 484006.2886019061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4018665.5344828735,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4018627.5862069037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3269381.9017543304,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3269196.140350884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3243598.9510487206,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3243406.293706296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3211705.7889275025,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3211632.179930785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1897324.5999998709,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1897232.6530612311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3150735.5506757475,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3150626.013513512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12135199.681819389,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12134529.545454565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5355980.780000209,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5355932.00000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54380.53875866214,
            "unit": "ns/iter",
            "extra": "iterations: 15016\ncpu: 54377.23761321245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 262496.48943338706,
            "unit": "ns/iter",
            "extra": "iterations: 3265\ncpu: 262488.2082695261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 207087.45042424146,
            "unit": "ns/iter",
            "extra": "iterations: 4125\ncpu: 207080.63030302915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 202309.8361084578,
            "unit": "ns/iter",
            "extra": "iterations: 4204\ncpu: 202300.3805899152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 197220.42346108687,
            "unit": "ns/iter",
            "extra": "iterations: 4305\ncpu: 197209.47735191608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 448548.27602276026,
            "unit": "ns/iter",
            "extra": "iterations: 1931\ncpu: 448525.3236664954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3971177.1111110155,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3971023.076923081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3244033.267361285,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3243795.8333333405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3217718.551723951,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3217619.9999999893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3179765.4863015697,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3179604.109589029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1839481.9683794053,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1839432.2134387337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3114359.983277591,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3114220.066889639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6283.105553756463,
            "unit": "ns/iter",
            "extra": "iterations: 111204\ncpu: 6282.864825006355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34796.525195246766,
            "unit": "ns/iter",
            "extra": "iterations: 20103\ncpu: 34795.204695816305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28099.315721942738,
            "unit": "ns/iter",
            "extra": "iterations: 26498\ncpu: 28098.048909351794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27961.838259310778,
            "unit": "ns/iter",
            "extra": "iterations: 25714\ncpu: 27960.554561717487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21860.253388555615,
            "unit": "ns/iter",
            "extra": "iterations: 31872\ncpu: 21859.390687751027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 129161.73643411053,
            "unit": "ns/iter",
            "extra": "iterations: 5418\ncpu: 129155.98006644564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 269526.3159922838,
            "unit": "ns/iter",
            "extra": "iterations: 2595\ncpu: 269517.99614643626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67884.53642190665,
            "unit": "ns/iter",
            "extra": "iterations: 10296\ncpu: 67880.26418026374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67581.34654324818,
            "unit": "ns/iter",
            "extra": "iterations: 10371\ncpu: 67578.3530999902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66890.57967137986,
            "unit": "ns/iter",
            "extra": "iterations: 10468\ncpu: 66887.02713030296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 136718.61265130987,
            "unit": "ns/iter",
            "extra": "iterations: 5122\ncpu: 136713.86177274355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 125753.00848223291,
            "unit": "ns/iter",
            "extra": "iterations: 5541\ncpu: 125747.10341093715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42468.67104625767,
            "unit": "ns/iter",
            "extra": "iterations: 16516\ncpu: 42466.4143860496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 211254.23086198067,
            "unit": "ns/iter",
            "extra": "iterations: 3318\ncpu: 211244.18324291334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 170779.36936935835,
            "unit": "ns/iter",
            "extra": "iterations: 4107\ncpu: 170769.6372047744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 171085.20951219028,
            "unit": "ns/iter",
            "extra": "iterations: 4100\ncpu: 171078.9512195138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 171530.51676186835,
            "unit": "ns/iter",
            "extra": "iterations: 4027\ncpu: 171517.40749937907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 278968.91344236775,
            "unit": "ns/iter",
            "extra": "iterations: 2507\ncpu: 278960.1914639028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1161852.7595356994,
            "unit": "ns/iter",
            "extra": "iterations: 603\ncpu: 1161799.3366500789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 967051.1535269936,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 967041.4937759432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 977866.7664335812,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 977820.0000000112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 967237.4124999945,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 967179.8611111152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 628735.0817609716,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 628715.0044923716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 958226.0096023353,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 958195.0617284067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43306.9494531303,
            "unit": "ns/iter",
            "extra": "iterations: 16183\ncpu: 43305.88271643019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 212569.16970250008,
            "unit": "ns/iter",
            "extra": "iterations: 3294\ncpu: 212560.89860351986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 173834.21350543774,
            "unit": "ns/iter",
            "extra": "iterations: 4028\ncpu: 173828.64945382217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 174541.90556535317,
            "unit": "ns/iter",
            "extra": "iterations: 3971\ncpu: 174530.9242004518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 175508.0466399104,
            "unit": "ns/iter",
            "extra": "iterations: 3988\ncpu: 175506.31895686974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 286738.05122949847,
            "unit": "ns/iter",
            "extra": "iterations: 2440\ncpu: 286729.2213114791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1163788.345514903,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1163711.9601328732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 971463.7482614184,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 971432.9624478352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 967615.0758620899,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 967557.1034482729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 962971.0715269019,
            "unit": "ns/iter",
            "extra": "iterations: 727\ncpu: 962961.2104539216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 628395.8806103766,
            "unit": "ns/iter",
            "extra": "iterations: 1114\ncpu: 628357.6301615838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 955045.0987653713,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 954993.6899862909 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705777691204,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15651.437538996237,
            "unit": "ns/iter",
            "extra": "iterations: 44876\ncpu: 15651.212229253946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 127208.10671877969,
            "unit": "ns/iter",
            "extra": "iterations: 6653\ncpu: 127209.67984367957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 240992.23660096046,
            "unit": "ns/iter",
            "extra": "iterations: 3601\ncpu: 240987.58678144953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 351552.7909535391,
            "unit": "ns/iter",
            "extra": "iterations: 2454\ncpu: 351547.92176039115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 462716.15031982394,
            "unit": "ns/iter",
            "extra": "iterations: 1876\ncpu: 462705.4371002133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 574378.5515872882,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 574364.0873015872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 553478.0299999511,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 553465.1000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 641075.9519999374,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 641029.1000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 729114.2182820616,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 729103.7825059091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12403.377356815472,
            "unit": "ns/iter",
            "extra": "iterations: 56326\ncpu: 12403.30753115788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10268.783430146543,
            "unit": "ns/iter",
            "extra": "iterations: 68172\ncpu: 10268.49439652644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10265.725139435855,
            "unit": "ns/iter",
            "extra": "iterations: 68311\ncpu: 10265.45358727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10361.56712304452,
            "unit": "ns/iter",
            "extra": "iterations: 67488\ncpu: 10361.12790422002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16962.189760496705,
            "unit": "ns/iter",
            "extra": "iterations: 41252\ncpu: 16961.866091341013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56845.3063764649,
            "unit": "ns/iter",
            "extra": "iterations: 14381\ncpu: 56843.08462554759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 247816.7902523972,
            "unit": "ns/iter",
            "extra": "iterations: 3447\ncpu: 247809.42848854093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 193434.90919412125,
            "unit": "ns/iter",
            "extra": "iterations: 4405\ncpu: 193433.0306469917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 194076.29585798725,
            "unit": "ns/iter",
            "extra": "iterations: 4394\ncpu: 194071.25625853366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 189124.86019590692,
            "unit": "ns/iter",
            "extra": "iterations: 4492\ncpu: 189118.9893143364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 449224.6591836396,
            "unit": "ns/iter",
            "extra": "iterations: 1960\ncpu: 449211.6836734676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4000457.175965779,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4000409.8712446466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3229948.7777779726,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3229840.972222231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3223857.885813354,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3223769.550173012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3179192.989761244,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3179151.5358361853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1856871.69678715,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1856829.9196787125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3122693.9057239215,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3122619.5286195264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11853622.477778774,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11853631.111111125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5406727.9100002,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5406732.999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15729239.089552462,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15729085.074626913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54584.80700000336,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54584.66000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 288278.5658602251,
            "unit": "ns/iter",
            "extra": "iterations: 2976\ncpu: 288273.8239247309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 227709.60703888192,
            "unit": "ns/iter",
            "extra": "iterations: 3779\ncpu: 227710.6906589045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 225398.78659657922,
            "unit": "ns/iter",
            "extra": "iterations: 3805\ncpu: 225399.52693823926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 218516.1529020708,
            "unit": "ns/iter",
            "extra": "iterations: 3911\ncpu: 218512.42648938918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 468389.9216640027,
            "unit": "ns/iter",
            "extra": "iterations: 1851\ncpu: 468386.7639113998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4059290.606986842,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4059280.7860261844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3282868.6007066797,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3282877.73851592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3283552.16197171,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3283509.507042256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3249945.2202797374,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3249884.965034978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1917805.3167701173,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1917765.0103519757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3175392.2047780454,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3175366.552901021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12257114.149424627,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12256503.44827584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5362068.13999911,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5361949.000000052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54042.31387584644,
            "unit": "ns/iter",
            "extra": "iterations: 15127\ncpu: 54040.11370397278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 258325.9050195279,
            "unit": "ns/iter",
            "extra": "iterations: 3327\ncpu: 258322.2422602941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 199907.9066946689,
            "unit": "ns/iter",
            "extra": "iterations: 4287\ncpu: 199901.7261488218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 197884.04337739394,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 197879.4247274413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 192582.80452490147,
            "unit": "ns/iter",
            "extra": "iterations: 4420\ncpu: 192575.3393665156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 433818.58735686,
            "unit": "ns/iter",
            "extra": "iterations: 2009\ncpu: 433801.0950721758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3994965.283261545,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3994896.995708148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3259566.2517481484,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3259467.832167834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3249699.027874823,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3249627.8745644637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3202811.4604811724,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3202746.7353951926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1861635.6506986439,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1861605.5888223555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3126850.9158248566,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3126795.9595959466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6212.348591110354,
            "unit": "ns/iter",
            "extra": "iterations: 112358\ncpu: 6212.2198686342435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34525.85678342429,
            "unit": "ns/iter",
            "extra": "iterations: 20270\ncpu: 34526.290083867876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27556.994129232393,
            "unit": "ns/iter",
            "extra": "iterations: 25380\ncpu: 27556.650906225525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28162.575350725914,
            "unit": "ns/iter",
            "extra": "iterations: 24877\ncpu: 28162.330666881007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22033.77362949002,
            "unit": "ns/iter",
            "extra": "iterations: 31740\ncpu: 22033.818525519837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 127673.25879352093,
            "unit": "ns/iter",
            "extra": "iterations: 5487\ncpu: 127672.91780572219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 256657.15565345393,
            "unit": "ns/iter",
            "extra": "iterations: 2724\ncpu: 256657.63582966337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67526.71152350988,
            "unit": "ns/iter",
            "extra": "iterations: 10292\ncpu: 67526.25340069989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67613.29390232346,
            "unit": "ns/iter",
            "extra": "iterations: 10381\ncpu: 67612.77333590203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 67153.35929236682,
            "unit": "ns/iter",
            "extra": "iterations: 10401\ncpu: 67152.89875973476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 137480.20263365487,
            "unit": "ns/iter",
            "extra": "iterations: 5088\ncpu: 137481.9378930823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 126532.02152676863,
            "unit": "ns/iter",
            "extra": "iterations: 5528\ncpu: 126528.92547033279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42275.099945644215,
            "unit": "ns/iter",
            "extra": "iterations: 16559\ncpu: 42275.11323147604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 203387.01509436363,
            "unit": "ns/iter",
            "extra": "iterations: 3445\ncpu: 203381.19013062093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 165484.900330666,
            "unit": "ns/iter",
            "extra": "iterations: 4234\ncpu: 165475.08266414664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 164784.68835457586,
            "unit": "ns/iter",
            "extra": "iterations: 4242\ncpu: 164780.00942951182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 165307.64388745136,
            "unit": "ns/iter",
            "extra": "iterations: 4229\ncpu: 165297.70631354948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 272068.6395032673,
            "unit": "ns/iter",
            "extra": "iterations: 2577\ncpu: 272061.0399689525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1162407.0825082348,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1162342.0792079198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 964969.3388429708,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 964973.5537190198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 962968.1666667261,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 962950.550964174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 962125.8379119589,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 962100.4120879144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 638515.889807166,
            "unit": "ns/iter",
            "extra": "iterations: 1089\ncpu: 638497.1533517048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 954122.3519781319,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 954067.6671214296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42986.55315747682,
            "unit": "ns/iter",
            "extra": "iterations: 16263\ncpu: 42985.217979462825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 206234.06213191283,
            "unit": "ns/iter",
            "extra": "iterations: 3396\ncpu: 206225.17667844467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 168293.76176751353,
            "unit": "ns/iter",
            "extra": "iterations: 4164\ncpu: 168288.6407300695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 168327.23099132683,
            "unit": "ns/iter",
            "extra": "iterations: 4156\ncpu: 168318.7680461983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 168944.44173700997,
            "unit": "ns/iter",
            "extra": "iterations: 4145\ncpu: 168946.56212303924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 277894.4584493208,
            "unit": "ns/iter",
            "extra": "iterations: 2515\ncpu: 277890.3777336009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1153199.491749218,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1153199.6699669843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 966630.6740947248,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 966598.4679665588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 958405.5454545458,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 958366.3911845732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 955323.5184174428,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 955311.3233287896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 625066.3220338576,
            "unit": "ns/iter",
            "extra": "iterations: 1121\ncpu: 625061.9982158763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 951940.0395094998,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 951929.8365122661 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705952884352,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15558.086925303875,
            "unit": "ns/iter",
            "extra": "iterations: 43175\ncpu: 15557.354950781704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124833.91225710095,
            "unit": "ns/iter",
            "extra": "iterations: 6690\ncpu: 124830.25411061288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 233573.44617869443,
            "unit": "ns/iter",
            "extra": "iterations: 3716\ncpu: 233564.61248654468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 339604.49487786647,
            "unit": "ns/iter",
            "extra": "iterations: 2538\ncpu: 339593.02600472816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 449394.6785345696,
            "unit": "ns/iter",
            "extra": "iterations: 1938\ncpu: 449378.2765737871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 557663.5019230171,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 557648.5897435896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 537657.1939999621,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537648.1000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 620536.8910000288,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 620504.6000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 715866.5160796281,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 715875.8805513022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12391.15767458428,
            "unit": "ns/iter",
            "extra": "iterations: 56420\ncpu: 12390.981921304487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10368.943766262473,
            "unit": "ns/iter",
            "extra": "iterations: 67255\ncpu: 10368.994126830718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10247.917319484644,
            "unit": "ns/iter",
            "extra": "iterations: 68166\ncpu: 10247.82882962182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10298.381920986349,
            "unit": "ns/iter",
            "extra": "iterations: 68090\ncpu: 10298.33308855928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16689.31150079919,
            "unit": "ns/iter",
            "extra": "iterations: 41971\ncpu: 16689.19968549711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55086.40642108656,
            "unit": "ns/iter",
            "extra": "iterations: 14795\ncpu: 55087.15106454889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 245996.8568135727,
            "unit": "ns/iter",
            "extra": "iterations: 3471\ncpu: 245995.47680783673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 195122.1248568232,
            "unit": "ns/iter",
            "extra": "iterations: 4365\ncpu: 195121.58075601378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 194714.69876486302,
            "unit": "ns/iter",
            "extra": "iterations: 4372\ncpu: 194715.69075937758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 190725.38222122396,
            "unit": "ns/iter",
            "extra": "iterations: 4466\ncpu: 190725.41424093102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 441263.33249626786,
            "unit": "ns/iter",
            "extra": "iterations: 1991\ncpu: 441258.66398794577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3910268.2100838902,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3910257.5630252156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3132828.6452703434,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3132826.013513513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3140669.8547296654,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3140625.337837835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3112070.0234898333,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3112020.4697986543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1828189.6343874338,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1828175.6916996073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3048851.2805280425,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3048819.471947191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11702087.373626975,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11702004.395604378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5394904.889999453,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5394769.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15580505.411764655,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 15580351.470588248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53132.46509999772,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53133.18000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 285595.9028800773,
            "unit": "ns/iter",
            "extra": "iterations: 2986\ncpu: 285594.6081714667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 224635.02069687852,
            "unit": "ns/iter",
            "extra": "iterations: 3817\ncpu: 224632.82682735118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 229038.31563501782,
            "unit": "ns/iter",
            "extra": "iterations: 3748\ncpu: 229033.6446104574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 222028.57235478712,
            "unit": "ns/iter",
            "extra": "iterations: 3856\ncpu: 222029.9273858915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 464486.18639530404,
            "unit": "ns/iter",
            "extra": "iterations: 1867\ncpu: 464485.37761114095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3974153.0000000214,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3974176.068376055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3202894.3344828114,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3202876.8965517185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3186217.6678083097,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3186203.7671232866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3158226.4881354463,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3158222.37288135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1871932.9333334093,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1871909.2929292931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3096819.2292359914,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3096795.0166112916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12060015.465908432,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12059884.09090907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5319226.350000008,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5319235.000000048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 52801.138955407594,
            "unit": "ns/iter",
            "extra": "iterations: 15451\ncpu: 52801.01611546191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 258254.42822821203,
            "unit": "ns/iter",
            "extra": "iterations: 3330\ncpu: 258255.73573573385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 202973.28618734184,
            "unit": "ns/iter",
            "extra": "iterations: 4228\ncpu: 202967.10028382193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 199249.95117999663,
            "unit": "ns/iter",
            "extra": "iterations: 4322\ncpu: 199251.11059694612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 195345.71585197691,
            "unit": "ns/iter",
            "extra": "iterations: 4378\ncpu: 195345.72864321497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 429944.84661060583,
            "unit": "ns/iter",
            "extra": "iterations: 2021\ncpu: 429937.0608609603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3917913.815125796,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3917854.621848722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3178503.2798637855,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3178472.013651886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3166553.7898303317,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3166564.7457627193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3123218.2541803117,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3123214.0468227463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1820212.8258316088,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1820208.21917808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3054720.4032786125,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3054760.9836065425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6196.885080716735,
            "unit": "ns/iter",
            "extra": "iterations: 112740\ncpu: 6196.825439063355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34415.21616042358,
            "unit": "ns/iter",
            "extra": "iterations: 20346\ncpu: 34415.33962449628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27998.59137330041,
            "unit": "ns/iter",
            "extra": "iterations: 24969\ncpu: 27998.71440586328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27209.585748093006,
            "unit": "ns/iter",
            "extra": "iterations: 25779\ncpu: 27209.64350828178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21728.212793733514,
            "unit": "ns/iter",
            "extra": "iterations: 32172\ncpu: 21727.738406067503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 130472.80512725904,
            "unit": "ns/iter",
            "extra": "iterations: 5383\ncpu: 130472.1530744926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 263068.862457732,
            "unit": "ns/iter",
            "extra": "iterations: 2661\ncpu: 263072.5291243883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66842.66968542486,
            "unit": "ns/iter",
            "extra": "iterations: 10490\ncpu: 66842.20209723641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66860.755156605,
            "unit": "ns/iter",
            "extra": "iterations: 10472\ncpu: 66861.71695951156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66295.29660937269,
            "unit": "ns/iter",
            "extra": "iterations: 10529\ncpu: 66295.46015765912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 130061.73487245454,
            "unit": "ns/iter",
            "extra": "iterations: 5371\ncpu: 130062.12995717632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 123683.88380783792,
            "unit": "ns/iter",
            "extra": "iterations: 5620\ncpu: 123685.58718861322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41472.524744228846,
            "unit": "ns/iter",
            "extra": "iterations: 16812\ncpu: 41472.51368070399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 199398.69114715426,
            "unit": "ns/iter",
            "extra": "iterations: 3513\ncpu: 199398.9467691408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 164723.65644029036,
            "unit": "ns/iter",
            "extra": "iterations: 4270\ncpu: 164722.64637002486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 162877.7707169612,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 162875.53538175023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 164143.2128608313,
            "unit": "ns/iter",
            "extra": "iterations: 4261\ncpu: 164141.44567002988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 276385.9408283908,
            "unit": "ns/iter",
            "extra": "iterations: 2535\ncpu: 276385.9566074961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1122054.1639610778,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1122025.4870130003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 947738.7404891022,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 947726.4945652138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 943296.8690957928,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 943299.730094469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 934674.4466667285,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 934663.333333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 633476.0009058695,
            "unit": "ns/iter",
            "extra": "iterations: 1104\ncpu: 633469.2028985466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 933814.0478722897,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 933805.5851063881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42093.6612425165,
            "unit": "ns/iter",
            "extra": "iterations: 16531\ncpu: 42092.60782771757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 200479.86961516316,
            "unit": "ns/iter",
            "extra": "iterations: 3482\ncpu: 200470.82136703015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 164847.00911216933,
            "unit": "ns/iter",
            "extra": "iterations: 4280\ncpu: 164840.93457943873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 166479.07935377213,
            "unit": "ns/iter",
            "extra": "iterations: 4209\ncpu: 166472.27369921553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 168330.88563189816,
            "unit": "ns/iter",
            "extra": "iterations: 4162\ncpu: 168326.30946660193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 272547.5866096098,
            "unit": "ns/iter",
            "extra": "iterations: 2569\ncpu: 272544.84235111275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1126250.6688103785,
            "unit": "ns/iter",
            "extra": "iterations: 622\ncpu: 1126266.3987138234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 943337.8612244133,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 943299.4557823262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 938016.5295698423,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 937994.7580645077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 935999.4725568935,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 935950.6024096368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 621330.0826666455,
            "unit": "ns/iter",
            "extra": "iterations: 1125\ncpu: 621299.4666666671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 936634.9010696332,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 936638.1016042868 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705954325655,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15690.919802660095,
            "unit": "ns/iter",
            "extra": "iterations: 45201\ncpu: 15690.121899957969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 127706.20410023407,
            "unit": "ns/iter",
            "extra": "iterations: 6585\ncpu: 127700.21260440396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 241497.20099946018,
            "unit": "ns/iter",
            "extra": "iterations: 3602\ncpu: 241481.70460855085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 351479.04534315574,
            "unit": "ns/iter",
            "extra": "iterations: 2448\ncpu: 351473.03921568615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 462266.4269722802,
            "unit": "ns/iter",
            "extra": "iterations: 1876\ncpu: 462233.1556503197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 574161.2224422323,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 574142.9702970295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 552597.0740000048,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 552581.9999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 644606.1310000459,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 644603.7000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 730015.4462875881,
            "unit": "ns/iter",
            "extra": "iterations: 1266\ncpu: 730006.4770932067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12439.926105044276,
            "unit": "ns/iter",
            "extra": "iterations: 56242\ncpu: 12439.875893460412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10413.8518683262,
            "unit": "ns/iter",
            "extra": "iterations: 67440\ncpu: 10413.729240806644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10321.444387138401,
            "unit": "ns/iter",
            "extra": "iterations: 67862\ncpu: 10321.138486929338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10329.56686209275,
            "unit": "ns/iter",
            "extra": "iterations: 67886\ncpu: 10329.148867218553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16620.61890533199,
            "unit": "ns/iter",
            "extra": "iterations: 42168\ncpu: 16620.046006450426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56821.46807472686,
            "unit": "ns/iter",
            "extra": "iterations: 14346\ncpu: 56820.71657604902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 254388.13210352632,
            "unit": "ns/iter",
            "extra": "iterations: 3361\ncpu: 254384.85569770902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 199998.73207195738,
            "unit": "ns/iter",
            "extra": "iterations: 4281\ncpu: 199986.77879000249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 199448.9362000453,
            "unit": "ns/iter",
            "extra": "iterations: 4279\ncpu: 199442.15938303337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 195027.2419920453,
            "unit": "ns/iter",
            "extra": "iterations: 4277\ncpu: 195025.55529576787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 442416.2791519412,
            "unit": "ns/iter",
            "extra": "iterations: 1981\ncpu: 442405.24987380084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3988165.085836489,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3988037.7682403517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3204140.8517239564,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3204081.724137929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3250156.069930278,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3249926.9230769295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3216520.710344835,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3216355.8620689684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1884125.495934779,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1884052.8455284522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3126251.898648689,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3126126.6891891914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11995017.853933766,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 11994525.842696622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5152289.110000083,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5152162.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15835559.985075362,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15835223.880597036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 55228.4779000047,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55225.989999999925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 289926.1814738444,
            "unit": "ns/iter",
            "extra": "iterations: 2904\ncpu: 289919.5936639117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 230974.44513344616,
            "unit": "ns/iter",
            "extra": "iterations: 3709\ncpu: 230961.6069021304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 230254.80590604272,
            "unit": "ns/iter",
            "extra": "iterations: 3725\ncpu: 230246.8724832218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 226661.65189704704,
            "unit": "ns/iter",
            "extra": "iterations: 3769\ncpu: 226657.33616343746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 468234.8824797794,
            "unit": "ns/iter",
            "extra": "iterations: 1855\ncpu: 468224.04312668496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4045723.0347823026,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4045654.3478260594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3248270.615384544,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3248219.930069938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3294692.3957597744,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3294608.12720847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3245963.864111386,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3245818.1184668955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1926944.643749806,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1926880.0000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3172333.624573327,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3172292.150170633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12378251.39534919,
            "unit": "ns/iter",
            "extra": "iterations: 86\ncpu: 12377582.55813949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5431257.630000345,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5431304.9999999665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54615.58665776952,
            "unit": "ns/iter",
            "extra": "iterations: 14990\ncpu: 54613.1087391597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 264811.6795307142,
            "unit": "ns/iter",
            "extra": "iterations: 3239\ncpu: 264802.22290830495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 207769.61109765538,
            "unit": "ns/iter",
            "extra": "iterations: 4127\ncpu: 207759.82553913348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 202456.8005193475,
            "unit": "ns/iter",
            "extra": "iterations: 4236\ncpu: 202451.81775259765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 198393.3438661548,
            "unit": "ns/iter",
            "extra": "iterations: 4304\ncpu: 198387.9414498132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 433549.3430837578,
            "unit": "ns/iter",
            "extra": "iterations: 2017\ncpu: 433538.3242439272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4007344.0128758918,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4007201.287553645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3231624.7820068435,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3231471.9723183545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3247860.470383398,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3247780.836236917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3206484.762886545,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3206418.213058427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1875882.596774059,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1875807.8629032255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3136928.668918838,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3136966.8918918767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6233.818098549455,
            "unit": "ns/iter",
            "extra": "iterations: 112451\ncpu: 6233.662661959482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34524.606393458846,
            "unit": "ns/iter",
            "extra": "iterations: 20302\ncpu: 34524.105999409076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27129.60481432743,
            "unit": "ns/iter",
            "extra": "iterations: 25798\ncpu: 27128.789053415025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26392.666024987342,
            "unit": "ns/iter",
            "extra": "iterations: 26493\ncpu: 26392.915109651574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21830.685313591723,
            "unit": "ns/iter",
            "extra": "iterations: 32016\ncpu: 21830.15992003997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 123748.46774761514,
            "unit": "ns/iter",
            "extra": "iterations: 5674\ncpu: 123745.32957349211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 269747.4807396321,
            "unit": "ns/iter",
            "extra": "iterations: 2596\ncpu: 269729.00616332673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 68095.43289243885,
            "unit": "ns/iter",
            "extra": "iterations: 10282\ncpu: 68094.27154250171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 68249.52343672849,
            "unit": "ns/iter",
            "extra": "iterations: 10219\ncpu: 68247.8911830901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 67086.06998654877,
            "unit": "ns/iter",
            "extra": "iterations: 10402\ncpu: 67085.03172466802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 136757.80476842297,
            "unit": "ns/iter",
            "extra": "iterations: 5117\ncpu: 136753.70334180322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 126163.11335375447,
            "unit": "ns/iter",
            "extra": "iterations: 5549\ncpu: 126156.24436835444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43369.45120287698,
            "unit": "ns/iter",
            "extra": "iterations: 16128\ncpu: 43369.822668651344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 210014.66817361955,
            "unit": "ns/iter",
            "extra": "iterations: 3318\ncpu: 210007.17299577995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 172326.4525618958,
            "unit": "ns/iter",
            "extra": "iterations: 4079\ncpu: 172318.38685952278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 174372.77999002283,
            "unit": "ns/iter",
            "extra": "iterations: 4018\ncpu: 174359.35788949826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 176844.33333332627,
            "unit": "ns/iter",
            "extra": "iterations: 4044\ncpu: 176835.36102868704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 279554.18705032184,
            "unit": "ns/iter",
            "extra": "iterations: 2502\ncpu: 279544.3245403658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1167970.9982965095,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1167939.3526405317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 979272.1464435018,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 979238.7726638729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 989066.168316829,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 989009.0523337949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 966826.6395026835,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 966791.9889502795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 640089.1322991843,
            "unit": "ns/iter",
            "extra": "iterations: 1096\ncpu: 640072.3540145995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 964062.2151724091,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 964004.6896551808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43482.90691061861,
            "unit": "ns/iter",
            "extra": "iterations: 16178\ncpu: 43480.44257633825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 210799.54679504572,
            "unit": "ns/iter",
            "extra": "iterations: 3323\ncpu: 210794.34246163262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 173091.2490752198,
            "unit": "ns/iter",
            "extra": "iterations: 4055\ncpu: 173087.05302096292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 177823.01295074058,
            "unit": "ns/iter",
            "extra": "iterations: 3938\ncpu: 177820.1625190436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 177591.73766758302,
            "unit": "ns/iter",
            "extra": "iterations: 3953\ncpu: 177583.3038198837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 281538.70217041514,
            "unit": "ns/iter",
            "extra": "iterations: 2488\ncpu: 281531.9935691351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1168126.8299999677,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1168137.3333333293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 974172.9484679691,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 974131.8941504031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 980372.5938376519,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 980365.546218499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 967009.5489654441,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 966966.0689655169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 639308.2429223264,
            "unit": "ns/iter",
            "extra": "iterations: 1095\ncpu: 639295.0684931482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 969029.9834710584,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 969034.435261708 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705956388829,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15477.934319828455,
            "unit": "ns/iter",
            "extra": "iterations: 45143\ncpu: 15477.985512704074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 128437.65316686535,
            "unit": "ns/iter",
            "extra": "iterations: 6568\ncpu: 128437.14981729597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 237826.09843707838,
            "unit": "ns/iter",
            "extra": "iterations: 3647\ncpu: 237821.79873868937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 346911.7749699054,
            "unit": "ns/iter",
            "extra": "iterations: 2493\ncpu: 346905.05415162456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 457850.3030462413,
            "unit": "ns/iter",
            "extra": "iterations: 1904\ncpu: 457841.75420168095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 570148.5930309292,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 570133.1360946744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 547679.2990000377,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 547640.5999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 638254.4829999688,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 638233.4999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 723352.9374511346,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 723350.5082095385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12275.078816607973,
            "unit": "ns/iter",
            "extra": "iterations: 56955\ncpu: 12274.920551312436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10396.482416457922,
            "unit": "ns/iter",
            "extra": "iterations: 67421\ncpu: 10396.21779564229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10301.029097447845,
            "unit": "ns/iter",
            "extra": "iterations: 67841\ncpu: 10300.978759157442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10254.71578469835,
            "unit": "ns/iter",
            "extra": "iterations: 68332\ncpu: 10254.665456886965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 17041.39892426045,
            "unit": "ns/iter",
            "extra": "iterations: 41088\ncpu: 17041.26995716514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56262.15850462291,
            "unit": "ns/iter",
            "extra": "iterations: 14498\ncpu: 56260.89805490409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 250894.87973014274,
            "unit": "ns/iter",
            "extra": "iterations: 3409\ncpu: 250892.16779114123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 198034.00816611818,
            "unit": "ns/iter",
            "extra": "iterations: 4286\ncpu: 198030.91460569316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 195387.6363010617,
            "unit": "ns/iter",
            "extra": "iterations: 4358\ncpu: 195382.0100963741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 191954.31842697444,
            "unit": "ns/iter",
            "extra": "iterations: 4450\ncpu: 191951.68539325785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 450660.5988671367,
            "unit": "ns/iter",
            "extra": "iterations: 1942\ncpu: 450661.63748712704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3902008.8075311407,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3901897.4895397527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3145877.7389828404,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3145754.5762711903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3134835.909091169,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3134744.781144786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3128843.0503355972,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3128710.4026845596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1850634.5571144018,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1850561.923847697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3061829.1881188815,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3061686.79867987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11810056.299999714,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11809526.666666651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5332622.00000081,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5332560.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15858227.731343247,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15857580.5970149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53525.42619999668,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53524.91000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 294194.39717534307,
            "unit": "ns/iter",
            "extra": "iterations: 2903\ncpu: 294194.5573544606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 229682.5345659312,
            "unit": "ns/iter",
            "extra": "iterations: 3732\ncpu: 229679.71596998983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 231401.01967653952,
            "unit": "ns/iter",
            "extra": "iterations: 3710\ncpu: 231393.5849056602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 223344.23660131686,
            "unit": "ns/iter",
            "extra": "iterations: 3825\ncpu: 223336.1307189536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 472927.05734573345,
            "unit": "ns/iter",
            "extra": "iterations: 1831\ncpu: 472912.28836701426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3962868.978723275,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3962695.744680841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3206045.7931034476,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3205918.275862078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3186251.4623288796,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3186141.7808219222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3172656.426621057,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3172593.5153583516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1894954.1042946049,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1894892.0245398872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3116117.442953314,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3115906.3758389237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12148866.329545947,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12148437.500000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5373566.740000797,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5371777.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53956.54902477907,
            "unit": "ns/iter",
            "extra": "iterations: 15176\ncpu: 53955.844754876205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 266950.5294847997,
            "unit": "ns/iter",
            "extra": "iterations: 3222\ncpu: 266947.2067039102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 209623.21830640332,
            "unit": "ns/iter",
            "extra": "iterations: 4086\ncpu: 209614.75770925177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 202554.83664773888,
            "unit": "ns/iter",
            "extra": "iterations: 4224\ncpu: 202553.6695075749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 195264.8259174443,
            "unit": "ns/iter",
            "extra": "iterations: 4360\ncpu: 195259.862385322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 444758.4776808594,
            "unit": "ns/iter",
            "extra": "iterations: 1949\ncpu: 444743.8686505872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3893599.8033473114,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3893477.824267784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3172017.8163266387,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3171821.428571432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3157762.650847471,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3157611.5254237386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3144645.969696698,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3144472.3905723863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1854491.7624750158,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1854411.7764471124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3071465.6490066326,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3071306.622516537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6136.421117271639,
            "unit": "ns/iter",
            "extra": "iterations: 113992\ncpu: 6136.185872692868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34620.65960815411,
            "unit": "ns/iter",
            "extra": "iterations: 20212\ncpu: 34619.285572927016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28193.291016806066,
            "unit": "ns/iter",
            "extra": "iterations: 24813\ncpu: 28191.967920041905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27939.744625434698,
            "unit": "ns/iter",
            "extra": "iterations: 25723\ncpu: 27939.591027484985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21796.08921375767,
            "unit": "ns/iter",
            "extra": "iterations: 32013\ncpu: 21795.92353106543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 128451.23054385428,
            "unit": "ns/iter",
            "extra": "iterations: 5461\ncpu: 128450.48525910999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 264736.22331943497,
            "unit": "ns/iter",
            "extra": "iterations: 2633\ncpu: 264734.5233573871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66927.77375263593,
            "unit": "ns/iter",
            "extra": "iterations: 10462\ncpu: 66925.12903842487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67401.25611634998,
            "unit": "ns/iter",
            "extra": "iterations: 10382\ncpu: 67399.57618955798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66753.23762659838,
            "unit": "ns/iter",
            "extra": "iterations: 10466\ncpu: 66752.8950888583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 135990.87770205055,
            "unit": "ns/iter",
            "extra": "iterations: 5135\ncpu: 135988.1207400206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 125047.20068087307,
            "unit": "ns/iter",
            "extra": "iterations: 5581\ncpu: 125044.31105536646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42928.88676696209,
            "unit": "ns/iter",
            "extra": "iterations: 16285\ncpu: 42928.04421246483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 207460.2653182635,
            "unit": "ns/iter",
            "extra": "iterations: 3362\ncpu: 207459.36942296504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 169140.65408803395,
            "unit": "ns/iter",
            "extra": "iterations: 4134\ncpu: 169137.3246250608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 170018.27080804878,
            "unit": "ns/iter",
            "extra": "iterations: 4121\ncpu: 170012.1329774294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 168721.5267212175,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 168716.8271545513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 286278.32965685264,
            "unit": "ns/iter",
            "extra": "iterations: 2448\ncpu: 286270.75163398404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1146659.7271240677,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1146626.3071895356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 955717.8867666746,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 955722.1009549659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 965328.0799999454,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 965322.2068965503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 952613.7312413906,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 952599.7271487177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 652493.5379629866,
            "unit": "ns/iter",
            "extra": "iterations: 1080\ncpu: 652482.7777777762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 950735.7978289913,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 950719.8100407114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42838.97758589199,
            "unit": "ns/iter",
            "extra": "iterations: 16329\ncpu: 42838.73476636641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 208113.9544507464,
            "unit": "ns/iter",
            "extra": "iterations: 3359\ncpu: 208107.94879428536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 171153.12252386854,
            "unit": "ns/iter",
            "extra": "iterations: 4089\ncpu: 171147.39545121082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 172746.92275418626,
            "unit": "ns/iter",
            "extra": "iterations: 4052\ncpu: 172745.50839091896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 173210.8170791876,
            "unit": "ns/iter",
            "extra": "iterations: 4040\ncpu: 173211.336633664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 285620.2546939,
            "unit": "ns/iter",
            "extra": "iterations: 2450\ncpu: 285612.408163265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1139595.8792823346,
            "unit": "ns/iter",
            "extra": "iterations: 613\ncpu: 1139577.8140293644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 964160.8027586384,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 964139.4482758674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 955548.8814714152,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 955515.2588555834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 958460.2373114122,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 958463.1001371602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 637182.0718182293,
            "unit": "ns/iter",
            "extra": "iterations: 1100\ncpu: 637153.3636363645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 952893.5991847507,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 952875.9510869463 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}