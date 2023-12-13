window.BENCHMARK_DATA = {
  "lastUpdate": 1702503250816,
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
      }
    ]
  }
}