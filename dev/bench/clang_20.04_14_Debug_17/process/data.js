window.BENCHMARK_DATA = {
  "lastUpdate": 1702489568719,
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
      }
    ]
  }
}