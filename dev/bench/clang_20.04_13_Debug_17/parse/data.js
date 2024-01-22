window.BENCHMARK_DATA = {
  "lastUpdate": 1705957886073,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-13 20.04 Debug c++-17": [
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
        "date": 1702489619436,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7325.039817974645,
            "unit": "ns/iter",
            "extra": "iterations: 95811\ncpu: 7324.539979751803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52317.44750000189,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52316.82000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95999.91321433178,
            "unit": "ns/iter",
            "extra": "iterations: 8907\ncpu: 95995.36319748512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 140423.35845378847,
            "unit": "ns/iter",
            "extra": "iterations: 6157\ncpu: 140415.98180932275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 184228.08399061867,
            "unit": "ns/iter",
            "extra": "iterations: 4691\ncpu: 184217.1392027287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 228841.21076236028,
            "unit": "ns/iter",
            "extra": "iterations: 3791\ncpu: 228828.62041677654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 273103.9502347694,
            "unit": "ns/iter",
            "extra": "iterations: 3195\ncpu: 273088.98278560233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 316067.020348804,
            "unit": "ns/iter",
            "extra": "iterations: 2752\ncpu: 316055.0508720929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 355918.5463535414,
            "unit": "ns/iter",
            "extra": "iterations: 2427\ncpu: 355896.8685620105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5890.397410970652,
            "unit": "ns/iter",
            "extra": "iterations: 118809\ncpu: 5890.2633638865755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4844.016516734905,
            "unit": "ns/iter",
            "extra": "iterations: 144399\ncpu: 4843.649194246504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4848.317939547942,
            "unit": "ns/iter",
            "extra": "iterations: 145405\ncpu: 4841.705580963508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4868.108124634787,
            "unit": "ns/iter",
            "extra": "iterations: 143908\ncpu: 4867.841954582103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7640.196735488968,
            "unit": "ns/iter",
            "extra": "iterations: 91346\ncpu: 7639.735730081222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25344.758085299665,
            "unit": "ns/iter",
            "extra": "iterations: 31044\ncpu: 25343.161319417613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 128843.4628597142,
            "unit": "ns/iter",
            "extra": "iterations: 6637\ncpu: 128836.74853096306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 99479.6723693538,
            "unit": "ns/iter",
            "extra": "iterations: 8534\ncpu: 99474.57229903903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 99418.04041811431,
            "unit": "ns/iter",
            "extra": "iterations: 8610\ncpu: 99414.12311265946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 94592.94702799068,
            "unit": "ns/iter",
            "extra": "iterations: 8967\ncpu: 94587.40938998568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 201892.95868333124,
            "unit": "ns/iter",
            "extra": "iterations: 4405\ncpu: 201882.11123723045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1727123.8122675878,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1727042.5650557645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1352322.6637426177,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1352252.6315789497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1364883.1632353035,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1364821.4705882394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1339758.84393072,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1339679.7687861272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 752457.5488598887,
            "unit": "ns/iter",
            "extra": "iterations: 1228\ncpu: 752428.013029314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1315757.0693069566,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 1315700.707213579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34767.500655699805,
            "unit": "ns/iter",
            "extra": "iterations: 23639\ncpu: 34765.21426456278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 162990.5796010436,
            "unit": "ns/iter",
            "extra": "iterations: 5314\ncpu: 162982.17914941668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 128635.04500075035,
            "unit": "ns/iter",
            "extra": "iterations: 6711\ncpu: 128629.69751154832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 127331.44055943374,
            "unit": "ns/iter",
            "extra": "iterations: 6721\ncpu: 127324.5499181667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 122312.88524590508,
            "unit": "ns/iter",
            "extra": "iterations: 7015\ncpu: 122306.37205987157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 226485.7129750923,
            "unit": "ns/iter",
            "extra": "iterations: 3815\ncpu: 226473.39449541384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1776450.6259543188,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1776368.129770999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1399077.9320242067,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1399010.271903317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1405959.1512859876,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1405881.391830563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1386695.4345237066,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1386630.059523817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 770114.3264292373,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 770072.4937862447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1348589.4179972087,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1348532.365747466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6506855.124999649,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6506437.49999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3011664.4838710357,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3011551.935483864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28666.695614096196,
            "unit": "ns/iter",
            "extra": "iterations: 28546\ncpu: 28665.10194072733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 139828.05694353618,
            "unit": "ns/iter",
            "extra": "iterations: 6164\ncpu: 139826.8818948736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 104063.57912581299,
            "unit": "ns/iter",
            "extra": "iterations: 8259\ncpu: 104061.65395326349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 100443.91060144317,
            "unit": "ns/iter",
            "extra": "iterations: 8546\ncpu: 100438.16990404812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 99296.80083661595,
            "unit": "ns/iter",
            "extra": "iterations: 8606\ncpu: 99294.60841273496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 195457.69593386308,
            "unit": "ns/iter",
            "extra": "iterations: 4476\ncpu: 195452.16711349462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1740045.772812088,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1740009.6834264454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1354112.1694656413,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1354065.190839689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1368414.1803519716,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1368376.6862170089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1335959.5250356894,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1335930.6151645228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 754221.0767366142,
            "unit": "ns/iter",
            "extra": "iterations: 1238\ncpu: 754210.5008077542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1319976.7672778945,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1319968.2651621965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2781.5103832179752,
            "unit": "ns/iter",
            "extra": "iterations: 251319\ncpu: 2781.430373350204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18034.669621231493,
            "unit": "ns/iter",
            "extra": "iterations: 38810\ncpu: 18034.318474620035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14271.293219889114,
            "unit": "ns/iter",
            "extra": "iterations: 49011\ncpu: 14271.120768806932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14417.196312565165,
            "unit": "ns/iter",
            "extra": "iterations: 48489\ncpu: 14416.750190764948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11023.178078519162,
            "unit": "ns/iter",
            "extra": "iterations: 63399\ncpu: 11023.05556869973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 69052.98057773714,
            "unit": "ns/iter",
            "extra": "iterations: 10143\ncpu: 69050.39929015042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 122615.78563941008,
            "unit": "ns/iter",
            "extra": "iterations: 5724\ncpu: 122613.29489867242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29440.700042034572,
            "unit": "ns/iter",
            "extra": "iterations: 23790\ncpu: 29439.96216897855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29366.445762855346,
            "unit": "ns/iter",
            "extra": "iterations: 23766\ncpu: 29365.65682066803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29361.493839062376,
            "unit": "ns/iter",
            "extra": "iterations: 23860\ncpu: 29360.729253981568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59497.828756608185,
            "unit": "ns/iter",
            "extra": "iterations: 11726\ncpu: 59497.19426914526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55192.52445074338,
            "unit": "ns/iter",
            "extra": "iterations: 12699\ncpu: 55190.95991810394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21337.97947562354,
            "unit": "ns/iter",
            "extra": "iterations: 32839\ncpu: 21337.431103261475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 108474.76514330362,
            "unit": "ns/iter",
            "extra": "iterations: 6455\ncpu: 108472.84275755283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87939.04422666364,
            "unit": "ns/iter",
            "extra": "iterations: 7959\ncpu: 87935.80851865798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87337.85812243138,
            "unit": "ns/iter",
            "extra": "iterations: 8021\ncpu: 87336.14262560857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 85307.23643033067,
            "unit": "ns/iter",
            "extra": "iterations: 8180\ncpu: 85305.66014670067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 134821.3786071715,
            "unit": "ns/iter",
            "extra": "iterations: 5198\ncpu: 134818.10311658282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 516881.6494083216,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 516864.20118342905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 418033.13842484355,
            "unit": "ns/iter",
            "extra": "iterations: 1676\ncpu: 418020.286396175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 425281.4845173314,
            "unit": "ns/iter",
            "extra": "iterations: 1647\ncpu: 425277.23132969136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 414788.7587433876,
            "unit": "ns/iter",
            "extra": "iterations: 1687\ncpu: 414779.4902193212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 274655.4047151361,
            "unit": "ns/iter",
            "extra": "iterations: 2545\ncpu: 274652.53438114346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 417865.0267857078,
            "unit": "ns/iter",
            "extra": "iterations: 1680\ncpu: 417856.01190476026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22065.310534939694,
            "unit": "ns/iter",
            "extra": "iterations: 31742\ncpu: 22064.910843677284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109585.89995311262,
            "unit": "ns/iter",
            "extra": "iterations: 6397\ncpu: 109585.0242301083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90237.42232257944,
            "unit": "ns/iter",
            "extra": "iterations: 7750\ncpu: 90236.02580645084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 91205.43054650121,
            "unit": "ns/iter",
            "extra": "iterations: 7667\ncpu: 91201.56514934171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89893.03835791783,
            "unit": "ns/iter",
            "extra": "iterations: 7795\ncpu: 89890.03207184077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 135009.1158383082,
            "unit": "ns/iter",
            "extra": "iterations: 5171\ncpu: 135005.37613614192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 514220.7661290112,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 514216.2756598247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 423804.1590770992,
            "unit": "ns/iter",
            "extra": "iterations: 1647\ncpu: 423795.6891317551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 427736.0437731266,
            "unit": "ns/iter",
            "extra": "iterations: 1622\ncpu: 427719.4204685579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 419914.63918759604,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 419903.4050179171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 270061.88944725087,
            "unit": "ns/iter",
            "extra": "iterations: 2587\ncpu: 270055.3150367256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 417820.34453779605,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 417804.3817527047 ns\nthreads: 1"
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
        "date": 1702492197975,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7499.813331622972,
            "unit": "ns/iter",
            "extra": "iterations: 93567\ncpu: 7499.728536770443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53036.748800002446,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53033.41999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 97927.69976116877,
            "unit": "ns/iter",
            "extra": "iterations: 8793\ncpu: 97923.24576367566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 142658.31702868553,
            "unit": "ns/iter",
            "extra": "iterations: 6031\ncpu: 142650.95340739514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 187896.8056521889,
            "unit": "ns/iter",
            "extra": "iterations: 4600\ncpu: 187888.2173913043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 237434.14454277867,
            "unit": "ns/iter",
            "extra": "iterations: 3729\ncpu: 237416.25100563143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 275357.89118679514,
            "unit": "ns/iter",
            "extra": "iterations: 3143\ncpu: 275349.3159401847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 321028.2087952651,
            "unit": "ns/iter",
            "extra": "iterations: 2706\ncpu: 321016.8514412416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 365506.06697558716,
            "unit": "ns/iter",
            "extra": "iterations: 2374\ncpu: 365501.8955349624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6094.027772944144,
            "unit": "ns/iter",
            "extra": "iterations: 114932\ncpu: 6093.681481223685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5004.730908677108,
            "unit": "ns/iter",
            "extra": "iterations: 140391\ncpu: 5004.692608500558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4965.299180911451,
            "unit": "ns/iter",
            "extra": "iterations: 140400\ncpu: 4965.087606837609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4995.042636308514,
            "unit": "ns/iter",
            "extra": "iterations: 137207\ncpu: 4994.974017360624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7811.66942047429,
            "unit": "ns/iter",
            "extra": "iterations: 89694\ncpu: 7811.397640867846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25679.229253898968,
            "unit": "ns/iter",
            "extra": "iterations: 31524\ncpu: 25678.267351858874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 136271.20038106316,
            "unit": "ns/iter",
            "extra": "iterations: 6298\ncpu: 136263.92505557308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104472.77412253889,
            "unit": "ns/iter",
            "extra": "iterations: 8177\ncpu: 104466.57698422424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 102665.63531670527,
            "unit": "ns/iter",
            "extra": "iterations: 8336\ncpu: 102658.82917466418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97959.68680938923,
            "unit": "ns/iter",
            "extra": "iterations: 8688\ncpu: 97956.23848987142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 212269.35345849625,
            "unit": "ns/iter",
            "extra": "iterations: 4207\ncpu: 212259.92393629678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1775563.4512427233,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1775473.9961759062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1384986.9537313762,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1384889.104477614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1394432.1109444206,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1394366.266866567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1363519.6356931052,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1363439.8230088535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 764997.1507538119,
            "unit": "ns/iter",
            "extra": "iterations: 1194\ncpu: 764929.4807370176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1344698.9201742702,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1344570.2467344005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35212.389507154585,
            "unit": "ns/iter",
            "extra": "iterations: 23273\ncpu: 35212.06978043213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 171921.1695825143,
            "unit": "ns/iter",
            "extra": "iterations: 5030\ncpu: 171919.38369781314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 134662.76586125488,
            "unit": "ns/iter",
            "extra": "iterations: 6415\ncpu: 134660.06235385817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 133938.13406080395,
            "unit": "ns/iter",
            "extra": "iterations: 6415\ncpu: 133932.54871395152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 128452.03669587387,
            "unit": "ns/iter",
            "extra": "iterations: 6622\ncpu: 128450.80036242826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 235773.6567368109,
            "unit": "ns/iter",
            "extra": "iterations: 3659\ncpu: 235768.40666848974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1807834.0621359618,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1807768.9320388387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1421834.372128676,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1421802.1439509955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1434366.1551458687,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1434299.2319508516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1404670.612368106,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1404638.7631975838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 806778.6216450502,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 806741.8181818161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1375180.2023633171,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1375162.7769571668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5023278.3399997065,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5023223.999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2936115.3123029876,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2936042.5867507923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28466.14381874355,
            "unit": "ns/iter",
            "extra": "iterations: 28821\ncpu: 28464.952638700906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 145924.78497717401,
            "unit": "ns/iter",
            "extra": "iterations: 5911\ncpu: 145918.52478430013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 111413.26001561682,
            "unit": "ns/iter",
            "extra": "iterations: 7688\ncpu: 111413.6186264302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 106711.59935738717,
            "unit": "ns/iter",
            "extra": "iterations: 8092\ncpu: 106710.60306475521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103632.94712809668,
            "unit": "ns/iter",
            "extra": "iterations: 8322\ncpu: 103626.74837779398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 208006.79574664793,
            "unit": "ns/iter",
            "extra": "iterations: 4279\ncpu: 207996.6814676332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1779523.6476190656,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1779530.2857142913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1371852.8372782306,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1371773.9644970405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1400448.286786726,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1400397.5975976049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1352694.3589000353,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1352613.1693198166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 776587.8579733865,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 776572.1760797321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1344800.9093524874,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1344735.107913674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2834.012357233365,
            "unit": "ns/iter",
            "extra": "iterations: 246819\ncpu: 2833.8936629676086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18422.767752605905,
            "unit": "ns/iter",
            "extra": "iterations: 38093\ncpu: 18422.515947811873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13837.373812287875,
            "unit": "ns/iter",
            "extra": "iterations: 50833\ncpu: 13837.048767532937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14937.388535788212,
            "unit": "ns/iter",
            "extra": "iterations: 50505\ncpu: 14937.087417087363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11108.612253628919,
            "unit": "ns/iter",
            "extra": "iterations: 63116\ncpu: 11108.511312503997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 71375.75153940446,
            "unit": "ns/iter",
            "extra": "iterations: 9744\ncpu: 71372.23932676515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 123000.32558138783,
            "unit": "ns/iter",
            "extra": "iterations: 5676\ncpu: 122994.74982381891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29767.60502700261,
            "unit": "ns/iter",
            "extra": "iterations: 23513\ncpu: 29766.546165950826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29918.431758080296,
            "unit": "ns/iter",
            "extra": "iterations: 23446\ncpu: 29917.201228354694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30308.011983560104,
            "unit": "ns/iter",
            "extra": "iterations: 23115\ncpu: 30306.23404715546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60583.28741892851,
            "unit": "ns/iter",
            "extra": "iterations: 11565\ncpu: 60580.95114569821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56331.15219315584,
            "unit": "ns/iter",
            "extra": "iterations: 12425\ncpu: 56330.01207243494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21604.66412661077,
            "unit": "ns/iter",
            "extra": "iterations: 32414\ncpu: 21603.902634664177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 112952.94384551945,
            "unit": "ns/iter",
            "extra": "iterations: 6215\ncpu: 112950.44247787423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 90131.1216303491,
            "unit": "ns/iter",
            "extra": "iterations: 7753\ncpu: 90126.73803688971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87949.62193742627,
            "unit": "ns/iter",
            "extra": "iterations: 7959\ncpu: 87944.18896846387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88091.25053370897,
            "unit": "ns/iter",
            "extra": "iterations: 7963\ncpu: 88088.20796182277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 135651.29906723765,
            "unit": "ns/iter",
            "extra": "iterations: 5146\ncpu: 135646.24951418524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 529345.4592144468,
            "unit": "ns/iter",
            "extra": "iterations: 1324\ncpu: 529334.3655589166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 428366.6719803884,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 428348.3752299264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 432178.00927644694,
            "unit": "ns/iter",
            "extra": "iterations: 1617\ncpu: 432166.0482374696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 428366.51009176305,
            "unit": "ns/iter",
            "extra": "iterations: 1635\ncpu: 428342.5076452581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 274854.0891594567,
            "unit": "ns/iter",
            "extra": "iterations: 2546\ncpu: 274837.7062058117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 422870.79381441406,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 422849.848392965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22351.921378516017,
            "unit": "ns/iter",
            "extra": "iterations: 31251\ncpu: 22350.561582029426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 113469.83474164148,
            "unit": "ns/iter",
            "extra": "iterations: 6154\ncpu: 113465.03087422921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91109.25416450074,
            "unit": "ns/iter",
            "extra": "iterations: 7684\ncpu: 91104.67204581025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90895.38402597762,
            "unit": "ns/iter",
            "extra": "iterations: 7700\ncpu: 90889.8181818185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90932.42485699205,
            "unit": "ns/iter",
            "extra": "iterations: 7692\ncpu: 90927.8341133649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 131610.91774403842,
            "unit": "ns/iter",
            "extra": "iterations: 5337\ncpu: 131604.40322278396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 524033.1172932796,
            "unit": "ns/iter",
            "extra": "iterations: 1330\ncpu: 524006.46616540797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 428491.3212752511,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 428463.02881668106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 429551.0398284289,
            "unit": "ns/iter",
            "extra": "iterations: 1632\ncpu: 429547.3039215683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 420744.66787220543,
            "unit": "ns/iter",
            "extra": "iterations: 1659\ncpu: 420733.9963833646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 275912.0246422669,
            "unit": "ns/iter",
            "extra": "iterations: 2516\ncpu: 275906.7567567587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 421935.1660627792,
            "unit": "ns/iter",
            "extra": "iterations: 1656\ncpu: 421906.7028985521 ns\nthreads: 1"
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
        "date": 1702503260261,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7340.528888888449,
            "unit": "ns/iter",
            "extra": "iterations: 95400\ncpu: 7340.3228511530415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52410.98750000219,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52410.8 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 97230.95057249456,
            "unit": "ns/iter",
            "extra": "iterations: 8821\ncpu: 97229.67917469674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 141848.48819156378,
            "unit": "ns/iter",
            "extra": "iterations: 6055\ncpu: 141847.1676300578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 186349.35841753354,
            "unit": "ns/iter",
            "extra": "iterations: 4651\ncpu: 186345.6675983658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 230680.01275914494,
            "unit": "ns/iter",
            "extra": "iterations: 3762\ncpu: 230673.12599681012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 273808.8794952418,
            "unit": "ns/iter",
            "extra": "iterations: 3170\ncpu: 273806.08832807565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 318483.9546783737,
            "unit": "ns/iter",
            "extra": "iterations: 2736\ncpu: 318474.3786549706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 362656.265696455,
            "unit": "ns/iter",
            "extra": "iterations: 2405\ncpu: 362651.3513513514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6088.496604324936,
            "unit": "ns/iter",
            "extra": "iterations: 114852\ncpu: 6088.490405043012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4933.26704124902,
            "unit": "ns/iter",
            "extra": "iterations: 141847\ncpu: 4933.229465550907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4941.610534046052,
            "unit": "ns/iter",
            "extra": "iterations: 141617\ncpu: 4941.474540485956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5021.517469999708,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5021.439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7707.9420403744125,
            "unit": "ns/iter",
            "extra": "iterations: 90356\ncpu: 7707.9131435654535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25239.164400685455,
            "unit": "ns/iter",
            "extra": "iterations: 31995\ncpu: 25238.343491170483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 138631.14303273053,
            "unit": "ns/iter",
            "extra": "iterations: 6509\ncpu: 138621.73913043455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 102307.84446040446,
            "unit": "ns/iter",
            "extra": "iterations: 8358\ncpu: 102304.127781766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 101992.2348096016,
            "unit": "ns/iter",
            "extra": "iterations: 8377\ncpu: 101989.19660976501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98648.61550964031,
            "unit": "ns/iter",
            "extra": "iterations: 8614\ncpu: 98645.64662177855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 207404.89080727455,
            "unit": "ns/iter",
            "extra": "iterations: 4286\ncpu: 207400.16332244527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1729748.3283582702,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1729700.3731343325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1351918.9641254148,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1351898.9536621866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1372443.1846381465,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1372393.2053175778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1354991.6090776627,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1354905.5636896025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 770875.0526316372,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 770618.338815789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1320291.5917496984,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1320247.9374110952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35138.2406644291,
            "unit": "ns/iter",
            "extra": "iterations: 23539\ncpu: 35137.2148349547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 172995.35979900748,
            "unit": "ns/iter",
            "extra": "iterations: 4975\ncpu: 172985.1658291453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 132759.39709967232,
            "unit": "ns/iter",
            "extra": "iterations: 6482\ncpu: 132755.73896945344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 129963.56941709925,
            "unit": "ns/iter",
            "extra": "iterations: 6605\ncpu: 129957.27479182435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 127841.37269206691,
            "unit": "ns/iter",
            "extra": "iterations: 6716\ncpu: 127834.69326980354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 230510.72485364077,
            "unit": "ns/iter",
            "extra": "iterations: 3758\ncpu: 230491.72432144755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1774276.796964044,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1774182.1631878552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1391412.2092675895,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1391359.3423019496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1410020.865355687,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1409965.960665666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1379615.556213116,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1379517.0118343262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 788235.4419983197,
            "unit": "ns/iter",
            "extra": "iterations: 1181\ncpu: 788204.3183742631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1352686.5799418655,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1352642.7325581466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6548942.398601619,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6548627.272727282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2947029.5754716936,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2946898.427672971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28049.91913552669,
            "unit": "ns/iter",
            "extra": "iterations: 29197\ncpu: 28048.66938384099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 143596.42407591443,
            "unit": "ns/iter",
            "extra": "iterations: 6006\ncpu: 143590.8591408593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108627.16195405157,
            "unit": "ns/iter",
            "extra": "iterations: 7922\ncpu: 108618.73264327137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103836.30353481112,
            "unit": "ns/iter",
            "extra": "iterations: 8289\ncpu: 103830.59476414518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 104651.35711667643,
            "unit": "ns/iter",
            "extra": "iterations: 8185\ncpu: 104647.45265730027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 198752.91193248314,
            "unit": "ns/iter",
            "extra": "iterations: 4383\ncpu: 198741.47843942555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1740339.4033457006,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1740223.605947958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1348549.7206946162,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1348502.0260492028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1371742.1764705009,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1371680.7352941085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1341150.6273381512,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1341076.5467625957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 763902.8049180099,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 763836.0655737702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1315548.2189264512,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1315486.581920905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2786.04719538398,
            "unit": "ns/iter",
            "extra": "iterations: 252334\ncpu: 2785.944026567971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18590.021871391382,
            "unit": "ns/iter",
            "extra": "iterations: 38955\ncpu: 18588.792196123624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14992.885119275947,
            "unit": "ns/iter",
            "extra": "iterations: 46866\ncpu: 14991.896044040504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15070.31270414441,
            "unit": "ns/iter",
            "extra": "iterations: 46536\ncpu: 15069.53541344333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11059.34869200998,
            "unit": "ns/iter",
            "extra": "iterations: 63265\ncpu: 11058.727574488212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 73767.53790918276,
            "unit": "ns/iter",
            "extra": "iterations: 9470\ncpu: 73764.98416050676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121873.15967263552,
            "unit": "ns/iter",
            "extra": "iterations: 5743\ncpu: 121870.60769632559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29602.903904536925,
            "unit": "ns/iter",
            "extra": "iterations: 23716\ncpu: 29601.98600101188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29484.66836605721,
            "unit": "ns/iter",
            "extra": "iterations: 23734\ncpu: 29484.874020392865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29509.487888394367,
            "unit": "ns/iter",
            "extra": "iterations: 23655\ncpu: 29509.291904459835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56781.429743339686,
            "unit": "ns/iter",
            "extra": "iterations: 12312\ncpu: 56779.572774528926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55485.81654278108,
            "unit": "ns/iter",
            "extra": "iterations: 12646\ncpu: 55481.535663450864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21505.651916858224,
            "unit": "ns/iter",
            "extra": "iterations: 32475\ncpu: 21504.859122402082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 111941.5147834375,
            "unit": "ns/iter",
            "extra": "iterations: 6257\ncpu: 111938.18123701416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88519.65368566914,
            "unit": "ns/iter",
            "extra": "iterations: 7909\ncpu: 88517.10709318401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88171.44287516868,
            "unit": "ns/iter",
            "extra": "iterations: 7930\ncpu: 88169.43253467817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 86607.31032345023,
            "unit": "ns/iter",
            "extra": "iterations: 8069\ncpu: 86602.0200768374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 134608.00826921882,
            "unit": "ns/iter",
            "extra": "iterations: 5200\ncpu: 134601.2115384618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 522008.6936803208,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 521996.9516728625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 421645.26554012974,
            "unit": "ns/iter",
            "extra": "iterations: 1657\ncpu: 421630.1146650507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 435413.6135802553,
            "unit": "ns/iter",
            "extra": "iterations: 1620\ncpu: 435391.72839506203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 416342.0993456172,
            "unit": "ns/iter",
            "extra": "iterations: 1681\ncpu: 416325.34205830295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 277730.6231654141,
            "unit": "ns/iter",
            "extra": "iterations: 2521\ncpu: 277727.4494248302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 418319.2741451793,
            "unit": "ns/iter",
            "extra": "iterations: 1667\ncpu: 418316.61667667056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22223.004356950714,
            "unit": "ns/iter",
            "extra": "iterations: 31444\ncpu: 22222.417631344342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 114561.55615853186,
            "unit": "ns/iter",
            "extra": "iterations: 6081\ncpu: 114559.90790988364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91026.95923666324,
            "unit": "ns/iter",
            "extra": "iterations: 7703\ncpu: 91026.13267557978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90814.2206548356,
            "unit": "ns/iter",
            "extra": "iterations: 7727\ncpu: 90810.3144816867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90628.50945107083,
            "unit": "ns/iter",
            "extra": "iterations: 7724\ncpu: 90627.47281201382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 130591.88288287181,
            "unit": "ns/iter",
            "extra": "iterations: 5328\ncpu: 130588.71996997192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 516762.06259207363,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 516764.727540494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 424472.4404616865,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 424467.1931956254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 426991.736874251,
            "unit": "ns/iter",
            "extra": "iterations: 1638\ncpu: 426990.2319902322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 415266.453460618,
            "unit": "ns/iter",
            "extra": "iterations: 1676\ncpu: 415262.23150358413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 277450.844145576,
            "unit": "ns/iter",
            "extra": "iterations: 2528\ncpu: 277452.2943037973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 418793.90892751364,
            "unit": "ns/iter",
            "extra": "iterations: 1669\ncpu: 418792.5104853149 ns\nthreads: 1"
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
        "date": 1705574923457,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7387.269081296858,
            "unit": "ns/iter",
            "extra": "iterations: 94949\ncpu: 7386.729718059169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52785.815499998986,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52785.20000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 96935.42804053744,
            "unit": "ns/iter",
            "extra": "iterations: 8880\ncpu: 96928.26576576575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 140928.82537607648,
            "unit": "ns/iter",
            "extra": "iterations: 6116\ncpu: 140923.1360366253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 185568.82990133157,
            "unit": "ns/iter",
            "extra": "iterations: 4662\ncpu: 185560.23166023166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 229137.659962943,
            "unit": "ns/iter",
            "extra": "iterations: 3779\ncpu: 229123.9745964541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 272115.3706734025,
            "unit": "ns/iter",
            "extra": "iterations: 3178\ncpu: 272096.570169918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 316377.0946487304,
            "unit": "ns/iter",
            "extra": "iterations: 2747\ncpu: 316373.20713505626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 358425.04101220943,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 358399.1710296686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6051.277765389825,
            "unit": "ns/iter",
            "extra": "iterations: 116602\ncpu: 6051.0634465961175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4982.907606992937,
            "unit": "ns/iter",
            "extra": "iterations: 140476\ncpu: 4982.545772943428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4887.849929145929,
            "unit": "ns/iter",
            "extra": "iterations: 142546\ncpu: 4887.681169587368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4945.796783180082,
            "unit": "ns/iter",
            "extra": "iterations: 141071\ncpu: 4945.580594168892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7721.190250530527,
            "unit": "ns/iter",
            "extra": "iterations: 90528\ncpu: 7720.758218451764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25424.194073138864,
            "unit": "ns/iter",
            "extra": "iterations: 31720\ncpu: 25422.881462799483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 137270.42978928925,
            "unit": "ns/iter",
            "extra": "iterations: 6217\ncpu: 137265.38523403558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 105445.29532524769,
            "unit": "ns/iter",
            "extra": "iterations: 8086\ncpu: 105439.09225822432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 105306.62325810755,
            "unit": "ns/iter",
            "extra": "iterations: 8109\ncpu: 105302.12110001236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 100990.09900521173,
            "unit": "ns/iter",
            "extra": "iterations: 8444\ncpu: 100984.40312648038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 207516.31927851122,
            "unit": "ns/iter",
            "extra": "iterations: 4269\ncpu: 207507.23822909358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1752630.8415094202,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1752527.7358490587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1358076.0644216824,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1357991.9472913642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1378075.5392591108,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1377997.4814814802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1350971.8311499436,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1350913.973799124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 765491.7671346616,
            "unit": "ns/iter",
            "extra": "iterations: 1211\ncpu: 765473.7407101562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1324638.5393418504,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1324594.2775393385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34869.27820437066,
            "unit": "ns/iter",
            "extra": "iterations: 23702\ncpu: 34868.403510252196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 175255.19298603103,
            "unit": "ns/iter",
            "extra": "iterations: 4933\ncpu: 175249.40198662097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 135370.58805970306,
            "unit": "ns/iter",
            "extra": "iterations: 6365\ncpu: 135367.17989002334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 132772.5165378768,
            "unit": "ns/iter",
            "extra": "iterations: 6470\ncpu: 132762.44204018585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 129186.20522445273,
            "unit": "ns/iter",
            "extra": "iterations: 6661\ncpu: 129180.78366611639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 235549.14401951214,
            "unit": "ns/iter",
            "extra": "iterations: 3687\ncpu: 235536.99484675814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1784471.5593869854,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1784371.455938703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1397580.824060153,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1397493.0827067648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1407922.4667674683,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1407858.4592145025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1396419.8678679424,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1396338.4384384435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 792279.450042735,
            "unit": "ns/iter",
            "extra": "iterations: 1171\ncpu: 792243.8941076014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1354634.4029197104,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1354554.8905109486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6576002.605633746,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6575669.01408452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3070250.767213051,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3070105.5737705054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27759.64997631635,
            "unit": "ns/iter",
            "extra": "iterations: 29558\ncpu: 27757.63245145132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 150496.94701063246,
            "unit": "ns/iter",
            "extra": "iterations: 5737\ncpu: 150490.7442914414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 111353.49462504219,
            "unit": "ns/iter",
            "extra": "iterations: 7721\ncpu: 111347.46794456696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107257.26523776857,
            "unit": "ns/iter",
            "extra": "iterations: 7465\ncpu: 107253.67716008086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 106788.12437748593,
            "unit": "ns/iter",
            "extra": "iterations: 8032\ncpu: 106783.15488047815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 199626.67806794343,
            "unit": "ns/iter",
            "extra": "iterations: 4327\ncpu: 199619.13565981167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1761693.5992365777,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1761622.7099236608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1365684.912023344,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1365619.794721415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1378717.4526627287,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1378627.9585798837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1340596.3635057954,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1340554.3103448215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 768969.9588138278,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 768925.5354201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1326965.4800570216,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1326915.5270655297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2808.339193737524,
            "unit": "ns/iter",
            "extra": "iterations: 249869\ncpu: 2808.2183063925345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18665.76020394642,
            "unit": "ns/iter",
            "extra": "iterations: 37461\ncpu: 18665.39601185229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14848.886056369476,
            "unit": "ns/iter",
            "extra": "iterations: 47190\ncpu: 14848.103411739785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14948.591078858619,
            "unit": "ns/iter",
            "extra": "iterations: 46855\ncpu: 14947.926582008287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11023.995404687532,
            "unit": "ns/iter",
            "extra": "iterations: 63543\ncpu: 11023.519506475961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 70775.92980144973,
            "unit": "ns/iter",
            "extra": "iterations: 9872\ncpu: 70772.21434359803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121828.76471609646,
            "unit": "ns/iter",
            "extra": "iterations: 5759\ncpu: 121826.27192220843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29954.894750353797,
            "unit": "ns/iter",
            "extra": "iterations: 23373\ncpu: 29953.775724126022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29745.53787556448,
            "unit": "ns/iter",
            "extra": "iterations: 23498\ncpu: 29744.467614265242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29367.08025830079,
            "unit": "ns/iter",
            "extra": "iterations: 23848\ncpu: 29365.74974840642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60648.971639207324,
            "unit": "ns/iter",
            "extra": "iterations: 11530\ncpu: 60647.72766695577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52792.13948044491,
            "unit": "ns/iter",
            "extra": "iterations: 13242\ncpu: 52790.00151034645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23091.83522633727,
            "unit": "ns/iter",
            "extra": "iterations: 30375\ncpu: 23090.995884773864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 110519.96330275877,
            "unit": "ns/iter",
            "extra": "iterations: 6431\ncpu: 110514.04136215248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 90334.5211831588,
            "unit": "ns/iter",
            "extra": "iterations: 7742\ncpu: 90329.17850684487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89842.70561826641,
            "unit": "ns/iter",
            "extra": "iterations: 7796\ncpu: 89839.58440225651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88593.1323473671,
            "unit": "ns/iter",
            "extra": "iterations: 7911\ncpu: 88590.31727973586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 134166.9890532131,
            "unit": "ns/iter",
            "extra": "iterations: 5207\ncpu: 134161.20606875455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 521829.82142853906,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 521795.4613095244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 423134.3952926821,
            "unit": "ns/iter",
            "extra": "iterations: 1657\ncpu: 423115.9927579998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 424406.4265776477,
            "unit": "ns/iter",
            "extra": "iterations: 1648\ncpu: 424382.28155339806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 418562.83213863056,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 418544.6833930673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 274467.5172684558,
            "unit": "ns/iter",
            "extra": "iterations: 2548\ncpu: 274454.27786499145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 416762.75806449214,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 416746.9534050169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22252.84860087225,
            "unit": "ns/iter",
            "extra": "iterations: 31341\ncpu: 22252.171277240668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 112241.94907110615,
            "unit": "ns/iter",
            "extra": "iterations: 6244\ncpu: 112238.82126841736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90410.1466976874,
            "unit": "ns/iter",
            "extra": "iterations: 7737\ncpu: 90405.02778854794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90576.89218607456,
            "unit": "ns/iter",
            "extra": "iterations: 7717\ncpu: 90573.05947907058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90415.83430194341,
            "unit": "ns/iter",
            "extra": "iterations: 7743\ncpu: 90411.77838047127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 134763.3738227895,
            "unit": "ns/iter",
            "extra": "iterations: 5203\ncpu: 134756.75571785553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 521097.6659175988,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 521081.64794007596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 434254.955307224,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 434227.8708876503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 422896.8432203058,
            "unit": "ns/iter",
            "extra": "iterations: 1652\ncpu: 422878.20823244256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 421111.84299512004,
            "unit": "ns/iter",
            "extra": "iterations: 1656\ncpu: 421092.69323671196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 276864.4491089338,
            "unit": "ns/iter",
            "extra": "iterations: 2525\ncpu: 276849.4257425782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 433417.46937537706,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 433400.121285623 ns\nthreads: 1"
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
        "date": 1705772736798,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7190.579130793588,
            "unit": "ns/iter",
            "extra": "iterations: 96985\ncpu: 7190.607825952468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52225.393800006255,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52224.22 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95978.89970898475,
            "unit": "ns/iter",
            "extra": "iterations: 8934\ncpu: 95977.74792925904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 139878.555158997,
            "unit": "ns/iter",
            "extra": "iterations: 6164\ncpu: 139875.9409474367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 182966.39057879665,
            "unit": "ns/iter",
            "extra": "iterations: 4734\ncpu: 182965.0612589776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 226664.60104574068,
            "unit": "ns/iter",
            "extra": "iterations: 3825\ncpu: 226662.98039215675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 271558.57405103365,
            "unit": "ns/iter",
            "extra": "iterations: 3214\ncpu: 271551.92906036106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 313082.409516918,
            "unit": "ns/iter",
            "extra": "iterations: 2774\ncpu: 313073.6842105263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 356505.85802213114,
            "unit": "ns/iter",
            "extra": "iterations: 2437\ncpu: 356508.4940500618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6017.805915242512,
            "unit": "ns/iter",
            "extra": "iterations: 116073\ncpu: 6017.831881660677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4946.134755881966,
            "unit": "ns/iter",
            "extra": "iterations: 141530\ncpu: 4946.082102734397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4943.471599375343,
            "unit": "ns/iter",
            "extra": "iterations: 141599\ncpu: 4943.469233539782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4942.856424123683,
            "unit": "ns/iter",
            "extra": "iterations: 140525\ncpu: 4942.795943782247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7720.4553902326425,
            "unit": "ns/iter",
            "extra": "iterations: 90395\ncpu: 7720.436971071415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25491.481989923246,
            "unit": "ns/iter",
            "extra": "iterations: 31760\ncpu: 25490.554156171296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 133174.54065797274,
            "unit": "ns/iter",
            "extra": "iterations: 6444\ncpu: 133171.57045313445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103117.58988899313,
            "unit": "ns/iter",
            "extra": "iterations: 8288\ncpu: 103116.13175675657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 102135.24362505024,
            "unit": "ns/iter",
            "extra": "iterations: 8353\ncpu: 102134.43074344566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97342.49908466711,
            "unit": "ns/iter",
            "extra": "iterations: 8740\ncpu: 97340.28604118989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 203221.5098443217,
            "unit": "ns/iter",
            "extra": "iterations: 4368\ncpu: 203213.32417582377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1712854.1518517253,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1712845.3703703727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1356979.2412280077,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1356956.1403508768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1380659.6587535897,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1380635.1632047468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1354039.5364431958,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1354041.836734693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 748839.3177040737,
            "unit": "ns/iter",
            "extra": "iterations: 1237\ncpu: 748831.1236863374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1315318.9531248768,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1315308.948863634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35170.213241251484,
            "unit": "ns/iter",
            "extra": "iterations: 23457\ncpu: 35168.482755680576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 169799.34826162705,
            "unit": "ns/iter",
            "extra": "iterations: 5091\ncpu: 169798.13396189362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 132465.76419147337,
            "unit": "ns/iter",
            "extra": "iterations: 6518\ncpu: 132463.88462718643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 129794.87756643207,
            "unit": "ns/iter",
            "extra": "iterations: 6624\ncpu: 129793.23671497575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 127368.56609665777,
            "unit": "ns/iter",
            "extra": "iterations: 6725\ncpu: 127363.31598513029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 227571.61576742562,
            "unit": "ns/iter",
            "extra": "iterations: 3818\ncpu: 227571.84389732848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1749661.152255679,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1749619.3609022636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1391542.3168909354,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1391536.3228699588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1419623.178625936,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1419568.5496183168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1389513.209509673,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1389506.6864784576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 777425.9065420417,
            "unit": "ns/iter",
            "extra": "iterations: 1177\ncpu: 777407.5615972823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1347744.487663314,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1347720.319303342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6483642.680555432,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6483522.916666651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2936990.7398119285,
            "unit": "ns/iter",
            "extra": "iterations: 319\ncpu: 2936938.557993728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28791.66187605462,
            "unit": "ns/iter",
            "extra": "iterations: 28528\ncpu: 28791.52061132927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 145622.7333220415,
            "unit": "ns/iter",
            "extra": "iterations: 5906\ncpu: 145616.96579749483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 109112.1077078799,
            "unit": "ns/iter",
            "extra": "iterations: 7901\ncpu: 109112.09973421087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103204.53777239064,
            "unit": "ns/iter",
            "extra": "iterations: 8260\ncpu: 103202.2397094435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 102361.7282725584,
            "unit": "ns/iter",
            "extra": "iterations: 8365\ncpu: 102360.49013747758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 195725.79995508594,
            "unit": "ns/iter",
            "extra": "iterations: 4454\ncpu: 195714.81814099732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1724795.1125462626,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1724787.0848708395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1353177.9086956768,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1353147.246376817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1364777.1818181397,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1364771.7008797699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1340021.510791368,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1339975.539568346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 754561.1393841186,
            "unit": "ns/iter",
            "extra": "iterations: 1234\ncpu: 754563.9384116726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1314391.6718309862,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1314364.929577459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2833.6673227784927,
            "unit": "ns/iter",
            "extra": "iterations: 246909\ncpu: 2833.7063452526963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18592.655519547974,
            "unit": "ns/iter",
            "extra": "iterations: 37648\ncpu: 18592.073948151374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14885.674291661602,
            "unit": "ns/iter",
            "extra": "iterations: 47082\ncpu: 14885.642071279966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15052.720778661693,
            "unit": "ns/iter",
            "extra": "iterations: 46490\ncpu: 15052.682297268253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11040.813878539808,
            "unit": "ns/iter",
            "extra": "iterations: 63609\ncpu: 11040.69549906457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 70802.20805300162,
            "unit": "ns/iter",
            "extra": "iterations: 9810\ncpu: 70801.47808358855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 114656.3553191563,
            "unit": "ns/iter",
            "extra": "iterations: 6110\ncpu: 114655.81014729955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29364.32812237707,
            "unit": "ns/iter",
            "extra": "iterations: 23796\ncpu: 29364.225079845462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30727.479134533583,
            "unit": "ns/iter",
            "extra": "iterations: 23340\ncpu: 30726.67952013714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29643.920179641656,
            "unit": "ns/iter",
            "extra": "iterations: 23603\ncpu: 29644.329110706247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59542.284706276354,
            "unit": "ns/iter",
            "extra": "iterations: 11763\ncpu: 59541.59653149719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55038.849654200196,
            "unit": "ns/iter",
            "extra": "iterations: 12724\ncpu: 55039.11505815777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21418.09004666353,
            "unit": "ns/iter",
            "extra": "iterations: 32572\ncpu: 21418.21196119347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 109238.42743321718,
            "unit": "ns/iter",
            "extra": "iterations: 6401\ncpu: 109237.69723480688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87592.55297351797,
            "unit": "ns/iter",
            "extra": "iterations: 8004\ncpu: 87592.96601699048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 86283.58932743821,
            "unit": "ns/iter",
            "extra": "iterations: 8133\ncpu: 86281.470552071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 85764.47834067071,
            "unit": "ns/iter",
            "extra": "iterations: 8172\ncpu: 85763.962310327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 129810.78934580667,
            "unit": "ns/iter",
            "extra": "iterations: 5350\ncpu: 129812.44859812966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 524395.5396113922,
            "unit": "ns/iter",
            "extra": "iterations: 1338\ncpu: 524384.977578483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 429454.2988293646,
            "unit": "ns/iter",
            "extra": "iterations: 1623\ncpu: 429444.67036351905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 423200.5991535959,
            "unit": "ns/iter",
            "extra": "iterations: 1654\ncpu: 423202.4788391838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 420996.21008403104,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 420982.0528211273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 278088.98292975186,
            "unit": "ns/iter",
            "extra": "iterations: 2519\ncpu: 278092.81460897386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 420297.0404659946,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 420285.65297363786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21881.35250359636,
            "unit": "ns/iter",
            "extra": "iterations: 31994\ncpu: 21881.315246608483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107489.16950714511,
            "unit": "ns/iter",
            "extra": "iterations: 6513\ncpu: 107485.67480423936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88892.59779826693,
            "unit": "ns/iter",
            "extra": "iterations: 7812\ncpu: 88889.27291346571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89143.31284204737,
            "unit": "ns/iter",
            "extra": "iterations: 7857\ncpu: 89140.42255313759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89849.85272610626,
            "unit": "ns/iter",
            "extra": "iterations: 7795\ncpu: 89846.92751763879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 134370.42536883894,
            "unit": "ns/iter",
            "extra": "iterations: 5219\ncpu: 134370.87564667317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 520383.1822916764,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 520368.89880952274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 432984.2424242446,
            "unit": "ns/iter",
            "extra": "iterations: 1617\ncpu: 432982.31292517076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 429566.8146551851,
            "unit": "ns/iter",
            "extra": "iterations: 1624\ncpu: 429558.62068965717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 427077.58119658614,
            "unit": "ns/iter",
            "extra": "iterations: 1638\ncpu: 427068.1929181976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 274746.7522575727,
            "unit": "ns/iter",
            "extra": "iterations: 2547\ncpu: 274740.361209268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 424591.8007335179,
            "unit": "ns/iter",
            "extra": "iterations: 1636\ncpu: 424563.01955990074 ns\nthreads: 1"
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
        "date": 1705774388876,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7250.804374139902,
            "unit": "ns/iter",
            "extra": "iterations: 96659\ncpu: 7250.866448028637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51878.42819999559,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51875.41000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 96611.79460673092,
            "unit": "ns/iter",
            "extra": "iterations: 8900\ncpu: 96610.29213483144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 140184.19335939022,
            "unit": "ns/iter",
            "extra": "iterations: 6144\ncpu: 140177.44140624997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 184221.01342424896,
            "unit": "ns/iter",
            "extra": "iterations: 4693\ncpu: 184218.81525676537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 227297.34584097334,
            "unit": "ns/iter",
            "extra": "iterations: 3811\ncpu: 227289.87142482298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 270677.66833385674,
            "unit": "ns/iter",
            "extra": "iterations: 3199\ncpu: 270671.6161300404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 315211.39210716716,
            "unit": "ns/iter",
            "extra": "iterations: 2762\ncpu: 315200.8689355541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 357506.9553165208,
            "unit": "ns/iter",
            "extra": "iterations: 2417\ncpu: 357502.3996690111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5970.477791384093,
            "unit": "ns/iter",
            "extra": "iterations: 116779\ncpu: 5970.264345473075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4979.458124930259,
            "unit": "ns/iter",
            "extra": "iterations: 142352\ncpu: 4979.487467685739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4839.8984593889845,
            "unit": "ns/iter",
            "extra": "iterations: 144553\ncpu: 4839.837291512452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4870.1745442191905,
            "unit": "ns/iter",
            "extra": "iterations: 144313\ncpu: 4870.100406754769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7653.875051834439,
            "unit": "ns/iter",
            "extra": "iterations: 91638\ncpu: 7653.787729981007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25307.84141599406,
            "unit": "ns/iter",
            "extra": "iterations: 32147\ncpu: 25307.294615360704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 136028.33264691182,
            "unit": "ns/iter",
            "extra": "iterations: 6313\ncpu: 136025.66133375594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 106467.02011922808,
            "unit": "ns/iter",
            "extra": "iterations: 8052\ncpu: 106465.58618976652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 103903.519058027,
            "unit": "ns/iter",
            "extra": "iterations: 8238\ncpu: 103903.71449380915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99560.14053738173,
            "unit": "ns/iter",
            "extra": "iterations: 8560\ncpu: 99560.66588785057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 208731.19341176254,
            "unit": "ns/iter",
            "extra": "iterations: 4250\ncpu: 208729.08235294072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1709763.8600370176,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1709757.2744014736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1345091.6565217164,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1345079.130434784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1356394.3494151458,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1356386.6959064314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1325678.396576382,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1325657.6319543475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 746942.9532635056,
            "unit": "ns/iter",
            "extra": "iterations: 1241\ncpu: 746931.8291700254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1303386.2762973655,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1303361.2903225766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34703.095694580734,
            "unit": "ns/iter",
            "extra": "iterations: 23784\ncpu: 34701.807938109625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 171585.695332671,
            "unit": "ns/iter",
            "extra": "iterations: 5035\ncpu: 171584.4289970209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 133328.8913817137,
            "unit": "ns/iter",
            "extra": "iterations: 6463\ncpu: 133323.99814327707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 133013.07366796263,
            "unit": "ns/iter",
            "extra": "iterations: 6475\ncpu: 133011.35135135113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 127844.54445108035,
            "unit": "ns/iter",
            "extra": "iterations: 6704\ncpu: 127841.91527446274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 234113.78656555503,
            "unit": "ns/iter",
            "extra": "iterations: 3692\ncpu: 234113.89490790857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1746127.7209737117,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1746076.5917602894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1378018.6508875405,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1378009.763313608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1385685.9270834406,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1385651.7857142908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1369367.834067569,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1369360.9397944186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 806021.5299501116,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 805992.0133111492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1333344.8680056569,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1333319.9426111926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6454718.604167119,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6454547.222222236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2901720.031055837,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2901664.9068323076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27696.72350074554,
            "unit": "ns/iter",
            "extra": "iterations: 29548\ncpu: 27696.341545959043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 148928.65849447562,
            "unit": "ns/iter",
            "extra": "iterations: 5792\ncpu: 148925.37983425448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 111188.92009310302,
            "unit": "ns/iter",
            "extra": "iterations: 7734\ncpu: 111188.49237134706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107233.53174504386,
            "unit": "ns/iter",
            "extra": "iterations: 8017\ncpu: 107230.8843707115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103965.80503220895,
            "unit": "ns/iter",
            "extra": "iterations: 8227\ncpu: 103963.21867023289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 200727.50057804215,
            "unit": "ns/iter",
            "extra": "iterations: 4325\ncpu: 200723.28323699447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1715265.5149253667,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1715254.4776119355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1343404.4031791703,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1343370.3757225364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1356503.4526928463,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1356489.6652110694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1318211.483780057,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1318182.7926657228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 756048.0024350102,
            "unit": "ns/iter",
            "extra": "iterations: 1232\ncpu: 756046.8344155857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1313614.5393259488,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1313591.1516853906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2773.020231419343,
            "unit": "ns/iter",
            "extra": "iterations: 252874\ncpu: 2773.0059238988506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17478.665327809875,
            "unit": "ns/iter",
            "extra": "iterations: 40084\ncpu: 17478.255663107575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14688.409676200847,
            "unit": "ns/iter",
            "extra": "iterations: 47684\ncpu: 14688.33571009143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14889.78710130909,
            "unit": "ns/iter",
            "extra": "iterations: 46966\ncpu: 14889.468977558256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10949.771628617795,
            "unit": "ns/iter",
            "extra": "iterations: 64128\ncpu: 10949.844061876232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 72002.2670012238,
            "unit": "ns/iter",
            "extra": "iterations: 9764\ncpu: 72002.18148299848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 119578.32443007917,
            "unit": "ns/iter",
            "extra": "iterations: 5878\ncpu: 119572.7458319149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29634.3931249507,
            "unit": "ns/iter",
            "extra": "iterations: 23738\ncpu: 29634.084590108665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29151.705771877292,
            "unit": "ns/iter",
            "extra": "iterations: 23961\ncpu: 29150.628104002197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29208.768828887565,
            "unit": "ns/iter",
            "extra": "iterations: 23926\ncpu: 29208.63077823287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 58926.22426285033,
            "unit": "ns/iter",
            "extra": "iterations: 11870\ncpu: 58924.87784330279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54324.45280384345,
            "unit": "ns/iter",
            "extra": "iterations: 12893\ncpu: 54323.919956565835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21552.01194875706,
            "unit": "ns/iter",
            "extra": "iterations: 32472\ncpu: 21551.666050751577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 109248.20876370503,
            "unit": "ns/iter",
            "extra": "iterations: 6390\ncpu: 109248.84194053285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 86966.28774466204,
            "unit": "ns/iter",
            "extra": "iterations: 8021\ncpu: 86966.6999127293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 85253.15790756205,
            "unit": "ns/iter",
            "extra": "iterations: 8201\ncpu: 85250.85965126097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 85256.99280751123,
            "unit": "ns/iter",
            "extra": "iterations: 8203\ncpu: 85255.19931732182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 132556.5240804003,
            "unit": "ns/iter",
            "extra": "iterations: 5274\ncpu: 132552.6734926051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 516497.2196913397,
            "unit": "ns/iter",
            "extra": "iterations: 1361\ncpu: 516497.5753122675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 422029.49849312997,
            "unit": "ns/iter",
            "extra": "iterations: 1659\ncpu: 422020.3737191043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 423199.0255474874,
            "unit": "ns/iter",
            "extra": "iterations: 1644\ncpu: 423190.63260339806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 418719.68936678045,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 418711.2305854232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 268844.68483686395,
            "unit": "ns/iter",
            "extra": "iterations: 2605\ncpu: 268840.49904031074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 414390.47692307946,
            "unit": "ns/iter",
            "extra": "iterations: 1690\ncpu: 414378.7573964453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21573.250962517093,
            "unit": "ns/iter",
            "extra": "iterations: 32467\ncpu: 21573.049558012826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 110541.46417298054,
            "unit": "ns/iter",
            "extra": "iterations: 6336\ncpu: 110539.06250000109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88615.40159403111,
            "unit": "ns/iter",
            "extra": "iterations: 7779\ncpu: 88614.70626044479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88648.0739847735,
            "unit": "ns/iter",
            "extra": "iterations: 7880\ncpu: 88646.63705583646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88289.13756146104,
            "unit": "ns/iter",
            "extra": "iterations: 7931\ncpu: 88287.756903291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 130467.81924793932,
            "unit": "ns/iter",
            "extra": "iterations: 5372\ncpu: 130466.67907669442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 512613.73138688056,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 512603.0656934284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 418413.6848739361,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 418402.8211284539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 427045.8921389597,
            "unit": "ns/iter",
            "extra": "iterations: 1641\ncpu: 427044.3631931789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 414765.17740981176,
            "unit": "ns/iter",
            "extra": "iterations: 1691\ncpu: 414771.2596096946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 274002.1288056165,
            "unit": "ns/iter",
            "extra": "iterations: 2562\ncpu: 274001.3270882112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 414791.97385619243,
            "unit": "ns/iter",
            "extra": "iterations: 1683\ncpu: 414774.56922163203 ns\nthreads: 1"
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
        "date": 1705777726549,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7314.402309198753,
            "unit": "ns/iter",
            "extra": "iterations: 95531\ncpu: 7314.070825177168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51955.88670000007,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51953.36000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 96133.32535510359,
            "unit": "ns/iter",
            "extra": "iterations: 8941\ncpu: 96125.06431047981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 139276.16828951638,
            "unit": "ns/iter",
            "extra": "iterations: 6162\ncpu: 139267.6079195067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 182426.2705039025,
            "unit": "ns/iter",
            "extra": "iterations: 4743\ncpu: 182415.83386042586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 225958.07271305748,
            "unit": "ns/iter",
            "extra": "iterations: 3837\ncpu: 225948.70992963255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 268921.12333024654,
            "unit": "ns/iter",
            "extra": "iterations: 3219\ncpu: 268908.6051568812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 311989.581570425,
            "unit": "ns/iter",
            "extra": "iterations: 2789\ncpu: 311977.662244532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 354134.080163609,
            "unit": "ns/iter",
            "extra": "iterations: 2445\ncpu: 354108.3435582819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5928.457065847993,
            "unit": "ns/iter",
            "extra": "iterations: 117983\ncpu: 5928.244747124594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4902.343944727988,
            "unit": "ns/iter",
            "extra": "iterations: 143148\ncpu: 4902.178863833229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4901.033006506626,
            "unit": "ns/iter",
            "extra": "iterations: 143093\ncpu: 4900.996554688207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4897.433574905055,
            "unit": "ns/iter",
            "extra": "iterations: 141987\ncpu: 4897.364547458575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7687.799461583193,
            "unit": "ns/iter",
            "extra": "iterations: 91379\ncpu: 7687.758675406829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25595.164075015688,
            "unit": "ns/iter",
            "extra": "iterations: 31833\ncpu: 25595.21251531432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 134677.3433070974,
            "unit": "ns/iter",
            "extra": "iterations: 6350\ncpu: 134676.708661417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103019.31171019866,
            "unit": "ns/iter",
            "extra": "iterations: 8309\ncpu: 103017.90829221321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 99315.37792991365,
            "unit": "ns/iter",
            "extra": "iterations: 8618\ncpu: 99311.97493618002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 96784.63607269825,
            "unit": "ns/iter",
            "extra": "iterations: 8749\ncpu: 96784.16961938523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 207849.89173998634,
            "unit": "ns/iter",
            "extra": "iterations: 4092\ncpu: 207845.52785923745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1721846.4953617877,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1721820.7792207806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1385558.4737609231,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1385510.6413994164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1358642.9649123738,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1358626.9005847953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1335904.7758620523,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1335856.6091954021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 756047.9462102778,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 756043.9282803594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1310744.9631728427,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 1310712.4645892363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35263.331651195236,
            "unit": "ns/iter",
            "extra": "iterations: 23383\ncpu: 35262.86190822385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 167425.8101681854,
            "unit": "ns/iter",
            "extra": "iterations: 5173\ncpu: 167424.41523293988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 127376.17532660541,
            "unit": "ns/iter",
            "extra": "iterations: 6736\ncpu: 127375.38598574829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 128567.92401851247,
            "unit": "ns/iter",
            "extra": "iterations: 6699\ncpu: 128567.02492909388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 124008.38478136246,
            "unit": "ns/iter",
            "extra": "iterations: 6952\ncpu: 124006.91887226679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 226506.65435010422,
            "unit": "ns/iter",
            "extra": "iterations: 3816\ncpu: 226500.7861635228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1768244.5483870069,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1768178.747628084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1390999.6164178625,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1390974.3283582055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1403555.882530146,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1403527.861445791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1376703.9822485421,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1376683.4319526656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 783008.040336155,
            "unit": "ns/iter",
            "extra": "iterations: 1190\ncpu: 782994.4537815136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1346492.1143269562,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1346474.0955137503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6505043.8951055985,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6504909.0909091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3060354.413114734,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3060313.770491798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28012.40154492888,
            "unit": "ns/iter",
            "extra": "iterations: 29257\ncpu: 28011.860409474757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 146431.40414683905,
            "unit": "ns/iter",
            "extra": "iterations: 5884\ncpu: 146429.18082936754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107742.87103673689,
            "unit": "ns/iter",
            "extra": "iterations: 7948\ncpu: 107741.02918973318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103625.75551781536,
            "unit": "ns/iter",
            "extra": "iterations: 8246\ncpu: 103625.96410380768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101686.0629072366,
            "unit": "ns/iter",
            "extra": "iterations: 8441\ncpu: 101683.56829759513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 193228.71463631117,
            "unit": "ns/iter",
            "extra": "iterations: 4482\ncpu: 193224.96653279845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1732270.4619666222,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1732231.1688311712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1348513.4768116304,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1348488.9855072384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1357566.4439592562,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1357549.7816593936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1327878.897581859,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1327867.567567571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 758037.5321923608,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 758025.9168704146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1314780.353023987,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1314749.0857946589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2800.5366473091367,
            "unit": "ns/iter",
            "extra": "iterations: 250032\ncpu: 2800.486737697572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18270.75845132938,
            "unit": "ns/iter",
            "extra": "iterations: 38278\ncpu: 18270.599299858946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13746.429085687607,
            "unit": "ns/iter",
            "extra": "iterations: 50836\ncpu: 13746.276260917484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14993.159287462275,
            "unit": "ns/iter",
            "extra": "iterations: 50299\ncpu: 14993.18077894196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10951.675300051833,
            "unit": "ns/iter",
            "extra": "iterations: 63822\ncpu: 10951.35846573272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 71955.69123568395,
            "unit": "ns/iter",
            "extra": "iterations: 9687\ncpu: 71955.19768762239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 118521.0405156614,
            "unit": "ns/iter",
            "extra": "iterations: 5430\ncpu: 118516.92449355376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29585.351751006616,
            "unit": "ns/iter",
            "extra": "iterations: 23872\ncpu: 29585.020107238463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29451.152209564658,
            "unit": "ns/iter",
            "extra": "iterations: 23783\ncpu: 29450.67905646867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29342.91464893658,
            "unit": "ns/iter",
            "extra": "iterations: 23913\ncpu: 29342.675532137127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59284.13275234764,
            "unit": "ns/iter",
            "extra": "iterations: 11819\ncpu: 59283.64497842452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54940.225727963574,
            "unit": "ns/iter",
            "extra": "iterations: 12741\ncpu: 54939.04717055114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21544.839100238532,
            "unit": "ns/iter",
            "extra": "iterations: 31964\ncpu: 21544.8692278814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 111024.8986080387,
            "unit": "ns/iter",
            "extra": "iterations: 6322\ncpu: 111022.82505536418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87869.70993226882,
            "unit": "ns/iter",
            "extra": "iterations: 7974\ncpu: 87863.50639578632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 85514.08787989683,
            "unit": "ns/iter",
            "extra": "iterations: 8193\ncpu: 85507.57964115651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 85586.68273240399,
            "unit": "ns/iter",
            "extra": "iterations: 8154\ncpu: 85585.70026980652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 133829.8394301259,
            "unit": "ns/iter",
            "extra": "iterations: 5194\ncpu: 133828.86022333486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 514747.91935486696,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 514727.0527859289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 423130.6571774852,
            "unit": "ns/iter",
            "extra": "iterations: 1651\ncpu: 423122.89521502645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 421526.8849397451,
            "unit": "ns/iter",
            "extra": "iterations: 1660\ncpu: 421518.19277108525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 413141.94273911347,
            "unit": "ns/iter",
            "extra": "iterations: 1694\ncpu: 413123.78984651965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 271857.7676138403,
            "unit": "ns/iter",
            "extra": "iterations: 2569\ncpu: 271841.61152199283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 414086.5301774983,
            "unit": "ns/iter",
            "extra": "iterations: 1690\ncpu: 414079.0532544418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22112.579806207716,
            "unit": "ns/iter",
            "extra": "iterations: 31683\ncpu: 22112.341003061585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 110733.36048169981,
            "unit": "ns/iter",
            "extra": "iterations: 6311\ncpu: 110733.46537791131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89553.65370252088,
            "unit": "ns/iter",
            "extra": "iterations: 7765\ncpu: 89548.8345138444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90161.88013919955,
            "unit": "ns/iter",
            "extra": "iterations: 7759\ncpu: 90157.52029900854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89817.55703836636,
            "unit": "ns/iter",
            "extra": "iterations: 7793\ncpu: 89817.75952778119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 135332.21962074458,
            "unit": "ns/iter",
            "extra": "iterations: 5168\ncpu: 135323.51006192155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 507663.5246734251,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 507640.78374455613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 421936.88808660116,
            "unit": "ns/iter",
            "extra": "iterations: 1662\ncpu: 421914.1997593313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 421088.99519521004,
            "unit": "ns/iter",
            "extra": "iterations: 1665\ncpu: 421081.0210210226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 415896.73365042935,
            "unit": "ns/iter",
            "extra": "iterations: 1682\ncpu: 415879.6670630196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 273863.3635298811,
            "unit": "ns/iter",
            "extra": "iterations: 2561\ncpu: 273864.07653260406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 413061.5964071923,
            "unit": "ns/iter",
            "extra": "iterations: 1670\ncpu: 413031.0179640715 ns\nthreads: 1"
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
        "date": 1705952912567,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7311.408419668107,
            "unit": "ns/iter",
            "extra": "iterations: 95752\ncpu: 7311.1841005932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55798.985699993864,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55794.86999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 96368.06921694495,
            "unit": "ns/iter",
            "extra": "iterations: 8914\ncpu: 96364.78573031185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 139756.6964140736,
            "unit": "ns/iter",
            "extra": "iterations: 6163\ncpu: 139744.28038293033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 183909.85119930306,
            "unit": "ns/iter",
            "extra": "iterations: 4711\ncpu: 183900.78539588198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 227271.80964935975,
            "unit": "ns/iter",
            "extra": "iterations: 3793\ncpu: 227259.39889269706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 270990.7767717846,
            "unit": "ns/iter",
            "extra": "iterations: 3203\ncpu: 270988.69809553545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 312008.40523106913,
            "unit": "ns/iter",
            "extra": "iterations: 2791\ncpu: 311992.7982801864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 357737.66104488255,
            "unit": "ns/iter",
            "extra": "iterations: 2431\ncpu: 357730.8926367748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6011.342919823343,
            "unit": "ns/iter",
            "extra": "iterations: 116692\ncpu: 6010.886778870876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4846.218734656821,
            "unit": "ns/iter",
            "extra": "iterations: 144609\ncpu: 4846.09325837258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4915.686312160864,
            "unit": "ns/iter",
            "extra": "iterations: 142170\ncpu: 4915.572202293026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5134.05315,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5133.960000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7651.672430426787,
            "unit": "ns/iter",
            "extra": "iterations: 91202\ncpu: 7651.290541874082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25905.015445121047,
            "unit": "ns/iter",
            "extra": "iterations: 31272\ncpu: 25904.476848298804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 129284.48401207116,
            "unit": "ns/iter",
            "extra": "iterations: 6630\ncpu: 129279.17043740573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 100036.68876891711,
            "unit": "ns/iter",
            "extra": "iterations: 8521\ncpu: 100034.70249970668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 101231.50716570856,
            "unit": "ns/iter",
            "extra": "iterations: 8443\ncpu: 101228.87599194616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 96201.80250676793,
            "unit": "ns/iter",
            "extra": "iterations: 8856\ncpu: 96200.21454381198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 211110.92041689964,
            "unit": "ns/iter",
            "extra": "iterations: 4222\ncpu: 211103.6001894841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1740519.780487955,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1740494.3714821774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1353146.3792094584,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1353048.3162518304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1389556.2747746352,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1389535.735735737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1351138.3488371605,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1351069.767441864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 746947.7067851848,
            "unit": "ns/iter",
            "extra": "iterations: 1238\ncpu: 746934.0064620342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1321059.5985815707,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1320996.0283687958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35915.951145042076,
            "unit": "ns/iter",
            "extra": "iterations: 22925\ncpu: 35914.85278080695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 167899.9793734334,
            "unit": "ns/iter",
            "extra": "iterations: 5139\ncpu: 167891.90503989137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 132016.8113928064,
            "unit": "ns/iter",
            "extra": "iterations: 6548\ncpu: 132012.85888821035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 128680.19259035384,
            "unit": "ns/iter",
            "extra": "iterations: 6667\ncpu: 128673.1213439327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 126390.46808198442,
            "unit": "ns/iter",
            "extra": "iterations: 6830\ncpu: 126385.15373352834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 229970.13113034668,
            "unit": "ns/iter",
            "extra": "iterations: 3813\ncpu: 229953.8158929972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1777384.2476188813,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1777304.5714285728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1394602.1649174108,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1394519.9400299755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1418544.26829256,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1418486.1280487862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1386257.354694636,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1386222.3546944882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 769593.5341097843,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 769578.2029950076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1343703.773121391,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1343659.9710982651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6457423.180555742,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6457009.722222197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3033784.146580148,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3033299.348534184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29392.790922427652,
            "unit": "ns/iter",
            "extra": "iterations: 27937\ncpu: 29390.346135948785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 142630.73813856114,
            "unit": "ns/iter",
            "extra": "iterations: 6049\ncpu: 142625.92163994076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106480.14684105424,
            "unit": "ns/iter",
            "extra": "iterations: 8104\ncpu: 106473.98815399823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 104822.85504787831,
            "unit": "ns/iter",
            "extra": "iterations: 8251\ncpu: 104819.02799660646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 102156.36030989875,
            "unit": "ns/iter",
            "extra": "iterations: 8390\ncpu: 102148.42669845013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 202853.60411796154,
            "unit": "ns/iter",
            "extra": "iterations: 4274\ncpu: 202847.68366869597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1744176.9738806854,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1744096.2686567155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1357669.8052324266,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1357598.9825581382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1387479.4026746626,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1387373.6998514049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1357764.9113372888,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1357713.8081395328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 760297.6278502841,
            "unit": "ns/iter",
            "extra": "iterations: 1228\ncpu: 760256.4332247522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1322191.17755674,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1322139.062499995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2785.301105602865,
            "unit": "ns/iter",
            "extra": "iterations: 249909\ncpu: 2785.256633414578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17580.35774520899,
            "unit": "ns/iter",
            "extra": "iterations: 39844\ncpu: 17580.19024194364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14874.324282305311,
            "unit": "ns/iter",
            "extra": "iterations: 46956\ncpu: 14873.700911491693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15074.967099604468,
            "unit": "ns/iter",
            "extra": "iterations: 46504\ncpu: 15074.821520729405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11056.806247928349,
            "unit": "ns/iter",
            "extra": "iterations: 63349\ncpu: 11056.144532668257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 72689.69713816266,
            "unit": "ns/iter",
            "extra": "iterations: 9714\ncpu: 72688.39818818188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121670.73006773711,
            "unit": "ns/iter",
            "extra": "iterations: 5757\ncpu: 121667.34410283041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29587.652532343174,
            "unit": "ns/iter",
            "extra": "iterations: 23654\ncpu: 29587.186099602426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29554.218305398415,
            "unit": "ns/iter",
            "extra": "iterations: 23687\ncpu: 29553.354160509753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29396.26244381792,
            "unit": "ns/iter",
            "extra": "iterations: 23807\ncpu: 29394.110975763368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59282.49775138428,
            "unit": "ns/iter",
            "extra": "iterations: 11785\ncpu: 59281.39159949098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55238.288953617055,
            "unit": "ns/iter",
            "extra": "iterations: 12701\ncpu: 55234.831902999904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21658.99356276177,
            "unit": "ns/iter",
            "extra": "iterations: 32312\ncpu: 21658.089873730925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 107586.56866060222,
            "unit": "ns/iter",
            "extra": "iterations: 6503\ncpu: 107579.37874827106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88017.08921605618,
            "unit": "ns/iter",
            "extra": "iterations: 7947\ncpu: 88013.86686800192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87315.91014457066,
            "unit": "ns/iter",
            "extra": "iterations: 8024\ncpu: 87313.87088733878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 86054.96395732854,
            "unit": "ns/iter",
            "extra": "iterations: 8157\ncpu: 86051.28110825203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 133806.2265699908,
            "unit": "ns/iter",
            "extra": "iterations: 5239\ncpu: 133798.33937774374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 516220.84626755596,
            "unit": "ns/iter",
            "extra": "iterations: 1353\ncpu: 516164.0059127886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 422495.4086799861,
            "unit": "ns/iter",
            "extra": "iterations: 1659\ncpu: 422479.08378541615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 431454.6213711592,
            "unit": "ns/iter",
            "extra": "iterations: 1619\ncpu: 431443.1130327359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 422011.7234299795,
            "unit": "ns/iter",
            "extra": "iterations: 1656\ncpu: 421998.00724637246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 273409.38404376927,
            "unit": "ns/iter",
            "extra": "iterations: 2557\ncpu: 273404.38013296825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 419277.91397853807,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 419255.55555555725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22611.11590270272,
            "unit": "ns/iter",
            "extra": "iterations: 30957\ncpu: 22610.343379526792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 111508.46313104089,
            "unit": "ns/iter",
            "extra": "iterations: 6279\ncpu: 111506.54562828525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 90389.55863759878,
            "unit": "ns/iter",
            "extra": "iterations: 7751\ncpu: 90384.47942200917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90953.21565826739,
            "unit": "ns/iter",
            "extra": "iterations: 7702\ncpu: 90949.03921059324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89377.864124888,
            "unit": "ns/iter",
            "extra": "iterations: 7816\ncpu: 89371.08495394021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 134713.4357984099,
            "unit": "ns/iter",
            "extra": "iterations: 5179\ncpu: 134709.11372851682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 515026.2845588446,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 515018.2352941232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 420212.1741741735,
            "unit": "ns/iter",
            "extra": "iterations: 1665\ncpu: 420194.3543543516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 428006.1887599175,
            "unit": "ns/iter",
            "extra": "iterations: 1637\ncpu: 427981.91814294324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 415096.16320479143,
            "unit": "ns/iter",
            "extra": "iterations: 1685\ncpu: 415081.4836795287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 278344.2324840735,
            "unit": "ns/iter",
            "extra": "iterations: 2512\ncpu: 278330.3742038205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 416425.4492234239,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 416421.8637992863 ns\nthreads: 1"
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
        "date": 1705954318157,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7200.3411686109075,
            "unit": "ns/iter",
            "extra": "iterations: 97295\ncpu: 7199.817051235932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51996.18890000011,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51993.28 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 96708.88563709933,
            "unit": "ns/iter",
            "extra": "iterations: 8884\ncpu: 96703.18550202614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 140838.62528511064,
            "unit": "ns/iter",
            "extra": "iterations: 6138\ncpu: 140828.3154121864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 185187.7892030933,
            "unit": "ns/iter",
            "extra": "iterations: 4668\ncpu: 185176.5209940017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 229724.47800740003,
            "unit": "ns/iter",
            "extra": "iterations: 3774\ncpu: 229669.581346052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 272237.54000624525,
            "unit": "ns/iter",
            "extra": "iterations: 3187\ncpu: 272215.31220583624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 315776.3197674298,
            "unit": "ns/iter",
            "extra": "iterations: 2752\ncpu: 315754.10610465106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 360872.1876936956,
            "unit": "ns/iter",
            "extra": "iterations: 2259\ncpu: 360861.0889774237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5930.54260211507,
            "unit": "ns/iter",
            "extra": "iterations: 117858\ncpu: 5930.414566681939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4891.18724595956,
            "unit": "ns/iter",
            "extra": "iterations: 143186\ncpu: 4890.927884011005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4874.082151259464,
            "unit": "ns/iter",
            "extra": "iterations: 143674\ncpu: 4873.890195860082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4959.57973729617,
            "unit": "ns/iter",
            "extra": "iterations: 141452\ncpu: 4959.514181489128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7685.77621029594,
            "unit": "ns/iter",
            "extra": "iterations: 91300\ncpu: 7685.371303395398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26783.388628099456,
            "unit": "ns/iter",
            "extra": "iterations: 30250\ncpu: 26782.57190082645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 133535.15116097918,
            "unit": "ns/iter",
            "extra": "iterations: 6417\ncpu: 133528.62708430729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 101951.40839193112,
            "unit": "ns/iter",
            "extra": "iterations: 8389\ncpu: 101950.14900464882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 100805.26390031981,
            "unit": "ns/iter",
            "extra": "iterations: 8507\ncpu: 100797.67250499579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99316.07320489582,
            "unit": "ns/iter",
            "extra": "iterations: 8565\ncpu: 99314.8744892002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 210376.01842229185,
            "unit": "ns/iter",
            "extra": "iterations: 4234\ncpu: 210364.85592820004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1707027.2343173833,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1706982.4723247238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1364275.6141383662,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1364200.5891016237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1359677.8318713256,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1359641.5204678352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1345273.8023087627,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1345206.493506493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 748811.4497568394,
            "unit": "ns/iter",
            "extra": "iterations: 1234\ncpu: 748793.5170178303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1304789.1830987101,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1304693.6619718273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35796.918768719595,
            "unit": "ns/iter",
            "extra": "iterations: 23033\ncpu: 35796.5484305128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 169552.53094398777,
            "unit": "ns/iter",
            "extra": "iterations: 5106\ncpu: 169544.55542499022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 132503.54849599968,
            "unit": "ns/iter",
            "extra": "iterations: 6516\ncpu: 132499.07918968704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 130269.95792341113,
            "unit": "ns/iter",
            "extra": "iterations: 6607\ncpu: 130261.0110488875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 126334.0787309106,
            "unit": "ns/iter",
            "extra": "iterations: 6808\ncpu: 126332.50587544101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 232538.49691109307,
            "unit": "ns/iter",
            "extra": "iterations: 3723\ncpu: 232529.38490464757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1763450.7069944348,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1763382.6086956577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1407025.2488688256,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1406952.036199086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1419288.5195194602,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1419272.2222222225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1388421.2425150685,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1388330.089820351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 777778.8291245431,
            "unit": "ns/iter",
            "extra": "iterations: 1188\ncpu: 777761.7003366974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1347150.723188406,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1347059.4202898543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6473976.37762195,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6473697.2027972285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2985820.3173077777,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2985564.4230769128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28896.110041606615,
            "unit": "ns/iter",
            "extra": "iterations: 28362\ncpu: 28895.72315069442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 143942.9096828078,
            "unit": "ns/iter",
            "extra": "iterations: 5990\ncpu: 143939.53255425778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108421.48063580191,
            "unit": "ns/iter",
            "extra": "iterations: 7927\ncpu: 108419.35158319688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 105116.95277231968,
            "unit": "ns/iter",
            "extra": "iterations: 8152\ncpu: 105111.32237487732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101799.37166127937,
            "unit": "ns/iter",
            "extra": "iterations: 8349\ncpu: 101791.51994250866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 200545.50841596437,
            "unit": "ns/iter",
            "extra": "iterations: 4337\ncpu: 200530.48189993147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1719345.8872456825,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1719232.347504623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1356292.2798832888,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1356225.9475218672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1361902.130116965,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1361787.7192982538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1337672.99568354,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1337571.223021591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 762088.0721311014,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 762035.1639344229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1303413.8683472937,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 1303304.481792717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2798.9227288335987,
            "unit": "ns/iter",
            "extra": "iterations: 250378\ncpu: 2798.646047176657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18181.979942323207,
            "unit": "ns/iter",
            "extra": "iterations: 38489\ncpu: 18180.854270051266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14197.385071597264,
            "unit": "ns/iter",
            "extra": "iterations: 49235\ncpu: 14196.47608408648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14923.763203017874,
            "unit": "ns/iter",
            "extra": "iterations: 46656\ncpu: 14923.09456447188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10924.637048474358,
            "unit": "ns/iter",
            "extra": "iterations: 64116\ncpu: 10923.769417930022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 74096.63512225846,
            "unit": "ns/iter",
            "extra": "iterations: 9447\ncpu: 74091.40467873412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 119741.49974328185,
            "unit": "ns/iter",
            "extra": "iterations: 5843\ncpu: 119732.89406126914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29719.049238728792,
            "unit": "ns/iter",
            "extra": "iterations: 23579\ncpu: 29716.039696340187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29528.5365822818,
            "unit": "ns/iter",
            "extra": "iterations: 23741\ncpu: 29525.816098732055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29405.40523150819,
            "unit": "ns/iter",
            "extra": "iterations: 23779\ncpu: 29403.120400353404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59089.53275847064,
            "unit": "ns/iter",
            "extra": "iterations: 11829\ncpu: 59085.83143122865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54887.58794481847,
            "unit": "ns/iter",
            "extra": "iterations: 12758\ncpu: 54884.29220881018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21465.433129061243,
            "unit": "ns/iter",
            "extra": "iterations: 32473\ncpu: 21464.860037569913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 107080.3894429916,
            "unit": "ns/iter",
            "extra": "iterations: 6517\ncpu: 107070.78410311355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 86657.26542981362,
            "unit": "ns/iter",
            "extra": "iterations: 8085\ncpu: 86650.5504019793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 85607.49981611133,
            "unit": "ns/iter",
            "extra": "iterations: 8157\ncpu: 85600.57619222857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83978.11423444244,
            "unit": "ns/iter",
            "extra": "iterations: 8360\ncpu: 83973.73205741566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 131665.76348547978,
            "unit": "ns/iter",
            "extra": "iterations: 5302\ncpu: 131660.52433044065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 513064.5973645919,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 513020.4978038125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 417796.7019115729,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 417783.9904420589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 420192.7495495164,
            "unit": "ns/iter",
            "extra": "iterations: 1665\ncpu: 420170.69069069304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 423265.6924471394,
            "unit": "ns/iter",
            "extra": "iterations: 1655\ncpu: 423232.87009063084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 273596.7358564075,
            "unit": "ns/iter",
            "extra": "iterations: 2563\ncpu: 273563.67538041476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 413752.9449704049,
            "unit": "ns/iter",
            "extra": "iterations: 1690\ncpu: 413720.7100591755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21705.495760212325,
            "unit": "ns/iter",
            "extra": "iterations: 32195\ncpu: 21704.20562199085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109335.94718696018,
            "unit": "ns/iter",
            "extra": "iterations: 6381\ncpu: 109331.10797680607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88614.47239806899,
            "unit": "ns/iter",
            "extra": "iterations: 7898\ncpu: 88610.17979235297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88896.03170978017,
            "unit": "ns/iter",
            "extra": "iterations: 7884\ncpu: 88890.48706240563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88718.19171312205,
            "unit": "ns/iter",
            "extra": "iterations: 7892\ncpu: 88715.67410035516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 132964.0984603606,
            "unit": "ns/iter",
            "extra": "iterations: 5261\ncpu: 132956.16802889065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 509576.96506542974,
            "unit": "ns/iter",
            "extra": "iterations: 1374\ncpu: 509569.9417758402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 423176.27190329495,
            "unit": "ns/iter",
            "extra": "iterations: 1655\ncpu: 423149.42598186893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 427700.9583588693,
            "unit": "ns/iter",
            "extra": "iterations: 1633\ncpu: 427694.97856705677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 419999.3167067334,
            "unit": "ns/iter",
            "extra": "iterations: 1664\ncpu: 419992.66826923203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 271110.27777777344,
            "unit": "ns/iter",
            "extra": "iterations: 2574\ncpu: 271103.22455322323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 415613.22062351665,
            "unit": "ns/iter",
            "extra": "iterations: 1668\ncpu: 415606.2350119902 ns\nthreads: 1"
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
        "date": 1705956418364,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7257.586272472175,
            "unit": "ns/iter",
            "extra": "iterations: 96230\ncpu: 7257.1090096643475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52194.97560000263,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52194.03 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95414.97156187007,
            "unit": "ns/iter",
            "extra": "iterations: 9002\ncpu: 95410.18662519443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 139455.27322757329,
            "unit": "ns/iter",
            "extra": "iterations: 6178\ncpu: 139447.76626740047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 183813.70744118412,
            "unit": "ns/iter",
            "extra": "iterations: 4717\ncpu: 183806.61437354248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 227479.40654450012,
            "unit": "ns/iter",
            "extra": "iterations: 3820\ncpu: 227472.4869109947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 270803.60710942885,
            "unit": "ns/iter",
            "extra": "iterations: 3207\ncpu: 270791.3938260058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 313869.0666183957,
            "unit": "ns/iter",
            "extra": "iterations: 2762\ncpu: 313863.9753801596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 357354.5496088667,
            "unit": "ns/iter",
            "extra": "iterations: 2429\ncpu: 357342.6512968296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6011.058719533186,
            "unit": "ns/iter",
            "extra": "iterations: 116520\ncpu: 6010.841057329207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4870.40472465024,
            "unit": "ns/iter",
            "extra": "iterations: 143799\ncpu: 4870.200070932355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4871.93106641943,
            "unit": "ns/iter",
            "extra": "iterations: 143602\ncpu: 4871.760838985537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4960.894244075496,
            "unit": "ns/iter",
            "extra": "iterations: 141628\ncpu: 4960.596068574004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7647.607365506789,
            "unit": "ns/iter",
            "extra": "iterations: 91752\ncpu: 7647.444197401687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25152.292848719866,
            "unit": "ns/iter",
            "extra": "iterations: 32218\ncpu: 25152.132348376683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 134732.93768685582,
            "unit": "ns/iter",
            "extra": "iterations: 6355\ncpu: 134726.64044059807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103562.50732534795,
            "unit": "ns/iter",
            "extra": "iterations: 8259\ncpu: 103557.17399200865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 102225.51481127233,
            "unit": "ns/iter",
            "extra": "iterations: 8372\ncpu: 102219.70855231724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98387.20580079115,
            "unit": "ns/iter",
            "extra": "iterations: 8654\ncpu: 98383.75317772139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 206474.58046511907,
            "unit": "ns/iter",
            "extra": "iterations: 4300\ncpu: 206463.95348837224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1703949.4981616219,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1703883.4558823556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1354250.4739883507,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1354177.601156071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1337525.269841299,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1337472.4386724387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1331139.1212121793,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1331083.1168831142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 751838.1306121858,
            "unit": "ns/iter",
            "extra": "iterations: 1225\ncpu: 751804.1632653049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1298661.0888575062,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1298601.4104372337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 34784.94269909804,
            "unit": "ns/iter",
            "extra": "iterations: 23682\ncpu: 34784.16096613463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 170135.3700570656,
            "unit": "ns/iter",
            "extra": "iterations: 5083\ncpu: 170126.73617942163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 132117.9122401859,
            "unit": "ns/iter",
            "extra": "iterations: 6495\ncpu: 132111.193225558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 130258.22117575495,
            "unit": "ns/iter",
            "extra": "iterations: 6583\ncpu: 130251.67856600307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 126735.61468160378,
            "unit": "ns/iter",
            "extra": "iterations: 6784\ncpu: 126730.82252358484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 229315.0830238886,
            "unit": "ns/iter",
            "extra": "iterations: 3770\ncpu: 229301.77718832856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1740293.1233644302,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1740224.6728971943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1385661.3740685116,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1385578.2414307045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1380151.2396450033,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1380123.3727810627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1365503.9648608419,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1365414.2020497778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 793607.021739166,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 793548.9966555176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1335073.4655173726,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1334987.7873563163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6424038.089655118,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 6423737.9310344625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2962225.543408521,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2962067.845659163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28300.88843263027,
            "unit": "ns/iter",
            "extra": "iterations: 28736\ncpu: 28298.538418708376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 147831.75081404689,
            "unit": "ns/iter",
            "extra": "iterations: 5835\ncpu: 147823.3761782346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 109467.62242417198,
            "unit": "ns/iter",
            "extra": "iterations: 7813\ncpu: 109461.66645334696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 101903.27667182455,
            "unit": "ns/iter",
            "extra": "iterations: 8389\ncpu: 101901.18011681983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 100444.40219420161,
            "unit": "ns/iter",
            "extra": "iterations: 8568\ncpu: 100441.56162464924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 197795.26226888224,
            "unit": "ns/iter",
            "extra": "iterations: 4381\ncpu: 197792.03378224073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1720960.6425926385,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1720890.370370372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1348749.0304348047,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1348686.956521738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1347986.0419680236,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1347902.026049204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1326460.1968616762,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1326415.8345221095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 761535.2079935053,
            "unit": "ns/iter",
            "extra": "iterations: 1226\ncpu: 761506.2805872746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1311741.3755273905,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1311670.6047819923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2804.280494224032,
            "unit": "ns/iter",
            "extra": "iterations: 248875\ncpu: 2804.077548970358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18269.166027667143,
            "unit": "ns/iter",
            "extra": "iterations: 38602\ncpu: 18268.410963162547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14311.92688804283,
            "unit": "ns/iter",
            "extra": "iterations: 48966\ncpu: 14311.477351631793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14933.964478897353,
            "unit": "ns/iter",
            "extra": "iterations: 46958\ncpu: 14933.6705140764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11010.713152373499,
            "unit": "ns/iter",
            "extra": "iterations: 63403\ncpu: 11009.955364888168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 73013.70127977598,
            "unit": "ns/iter",
            "extra": "iterations: 9611\ncpu: 73010.83133909064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 120969.46046271025,
            "unit": "ns/iter",
            "extra": "iterations: 5792\ncpu: 120964.00207182426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29189.12979326265,
            "unit": "ns/iter",
            "extra": "iterations: 23992\ncpu: 29187.750083360996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29384.86401006626,
            "unit": "ns/iter",
            "extra": "iterations: 23840\ncpu: 29383.083053691495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29501.44107616758,
            "unit": "ns/iter",
            "extra": "iterations: 23751\ncpu: 29500.66523514794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59838.66572721647,
            "unit": "ns/iter",
            "extra": "iterations: 11709\ncpu: 59835.152446835964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54915.32904742766,
            "unit": "ns/iter",
            "extra": "iterations: 12755\ncpu: 54913.9474715794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21619.387668060383,
            "unit": "ns/iter",
            "extra": "iterations: 32355\ncpu: 21618.949157780866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 107504.17023242333,
            "unit": "ns/iter",
            "extra": "iterations: 6497\ncpu: 107496.55225488722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87956.43108430051,
            "unit": "ns/iter",
            "extra": "iterations: 7959\ncpu: 87953.03430079186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 85302.06309379968,
            "unit": "ns/iter",
            "extra": "iterations: 8210\ncpu: 85298.16077953659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 85357.15880772377,
            "unit": "ns/iter",
            "extra": "iterations: 8186\ncpu: 85351.74688492452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 133348.03663422485,
            "unit": "ns/iter",
            "extra": "iterations: 5241\ncpu: 133344.87693188497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 513579.2199413155,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 513534.3108504413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 420980.7034813992,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 420977.37094838324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 422917.76495469554,
            "unit": "ns/iter",
            "extra": "iterations: 1655\ncpu: 422909.184290035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 421522.29121542204,
            "unit": "ns/iter",
            "extra": "iterations: 1662\ncpu: 421492.7196149223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 276218.5439842124,
            "unit": "ns/iter",
            "extra": "iterations: 2535\ncpu: 276199.8422090741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 415408.3264095246,
            "unit": "ns/iter",
            "extra": "iterations: 1685\ncpu: 415391.6913946566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21904.60710151781,
            "unit": "ns/iter",
            "extra": "iterations: 31965\ncpu: 21903.388080713194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109458.57006568811,
            "unit": "ns/iter",
            "extra": "iterations: 6394\ncpu: 109453.08101345031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88484.6982061578,
            "unit": "ns/iter",
            "extra": "iterations: 7916\ncpu: 88482.56695300686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88572.00417879724,
            "unit": "ns/iter",
            "extra": "iterations: 7897\ncpu: 88571.090287451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88981.38867732862,
            "unit": "ns/iter",
            "extra": "iterations: 7878\ncpu: 88977.1769484631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 130823.94522340683,
            "unit": "ns/iter",
            "extra": "iterations: 5349\ncpu: 130818.54552252838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 516390.797505503,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 516363.0227439511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 425343.52908758394,
            "unit": "ns/iter",
            "extra": "iterations: 1633\ncpu: 425307.4096754401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 425542.2896969983,
            "unit": "ns/iter",
            "extra": "iterations: 1650\ncpu: 425523.93939394393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 420917.33613441646,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 420897.8991596603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 275325.0051121015,
            "unit": "ns/iter",
            "extra": "iterations: 2543\ncpu: 275305.0727487169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 418275.9796162909,
            "unit": "ns/iter",
            "extra": "iterations: 1668\ncpu: 418271.7625899337 ns\nthreads: 1"
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
        "date": 1705957885509,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7282.202238377336,
            "unit": "ns/iter",
            "extra": "iterations: 95605\ncpu: 7281.885884629466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52192.25959999676,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52188.840000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95908.81226268258,
            "unit": "ns/iter",
            "extra": "iterations: 8954\ncpu: 95905.3160598615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 139659.1424878809,
            "unit": "ns/iter",
            "extra": "iterations: 6190\ncpu: 139654.11954765752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 182099.77011975646,
            "unit": "ns/iter",
            "extra": "iterations: 4759\ncpu: 182092.68753939896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 225298.00989068625,
            "unit": "ns/iter",
            "extra": "iterations: 3842\ncpu: 225288.57365955238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 268450.5851622853,
            "unit": "ns/iter",
            "extra": "iterations: 3235\ncpu: 268439.81452859356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 311714.83959897346,
            "unit": "ns/iter",
            "extra": "iterations: 2793\ncpu: 311698.2098102401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 354455.3224756025,
            "unit": "ns/iter",
            "extra": "iterations: 2456\ncpu: 354435.05700325774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5900.382399109047,
            "unit": "ns/iter",
            "extra": "iterations: 118494\ncpu: 5899.941769203496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4842.614183376111,
            "unit": "ns/iter",
            "extra": "iterations: 145875\ncpu: 4842.436332476436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4856.266576294751,
            "unit": "ns/iter",
            "extra": "iterations: 143850\ncpu: 4856.173096976024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4908.450440018235,
            "unit": "ns/iter",
            "extra": "iterations: 142494\ncpu: 4908.177888191779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7740.496279228917,
            "unit": "ns/iter",
            "extra": "iterations: 90707\ncpu: 7740.275833177141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25674.173070265544,
            "unit": "ns/iter",
            "extra": "iterations: 31779\ncpu: 25673.526542685388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 139630.9980462436,
            "unit": "ns/iter",
            "extra": "iterations: 6142\ncpu: 139628.31325301196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 106135.93461777721,
            "unit": "ns/iter",
            "extra": "iterations: 8045\ncpu: 106132.09446861425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 105958.74641565555,
            "unit": "ns/iter",
            "extra": "iterations: 8021\ncpu: 105951.88879192095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 96765.07853641885,
            "unit": "ns/iter",
            "extra": "iterations: 8773\ncpu: 96761.79186139298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 204188.20327264917,
            "unit": "ns/iter",
            "extra": "iterations: 4339\ncpu: 204181.2168702466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1710334.4464944745,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1710254.4280442765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1341596.682080819,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1341583.5260115627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1355229.4279476022,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1355194.177583696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1335791.8163558077,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1335778.1922525123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 749252.7308002914,
            "unit": "ns/iter",
            "extra": "iterations: 1237\ncpu: 749219.7251414714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1301585.3141654509,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1301554.4179523168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36277.68173025947,
            "unit": "ns/iter",
            "extra": "iterations: 22748\ncpu: 36276.02426586948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 172598.83409770462,
            "unit": "ns/iter",
            "extra": "iterations: 5015\ncpu: 172592.20338983077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 135651.3971853021,
            "unit": "ns/iter",
            "extra": "iterations: 6395\ncpu: 135649.06958561394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 134185.81411654287,
            "unit": "ns/iter",
            "extra": "iterations: 6418\ncpu: 134178.23309442194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 129573.129266073,
            "unit": "ns/iter",
            "extra": "iterations: 6622\ncpu: 129568.7405617638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 225927.58897309462,
            "unit": "ns/iter",
            "extra": "iterations: 3827\ncpu: 225924.92814214897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1749536.4371482863,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1749487.9924953093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1380536.101644335,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1380481.464872943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1388999.7641791496,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1388936.8656716368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1390631.536873207,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1390546.1651917489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 771965.311720688,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 771941.3965087297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1338583.2893982362,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1338498.1375358216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6440668.999999647,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 6440393.79310343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2990284.1217947095,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2990169.871794867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27857.109435497212,
            "unit": "ns/iter",
            "extra": "iterations: 29442\ncpu: 27855.685755043836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 152369.62273765626,
            "unit": "ns/iter",
            "extra": "iterations: 5691\ncpu: 152362.5900544716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 111758.70904138256,
            "unit": "ns/iter",
            "extra": "iterations: 7709\ncpu: 111754.72823971909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107214.24690739937,
            "unit": "ns/iter",
            "extra": "iterations: 8003\ncpu: 107210.34612020476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105324.14589739917,
            "unit": "ns/iter",
            "extra": "iterations: 8129\ncpu: 105317.78816582628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 194729.6592592676,
            "unit": "ns/iter",
            "extra": "iterations: 4455\ncpu: 194718.63075196263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1727026.952029455,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1726947.4169741701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1348838.2943722862,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1348740.5483405422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1360054.1732746067,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1359985.168869308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1328100.9298998925,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1328044.921316172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 756923.3715670493,
            "unit": "ns/iter",
            "extra": "iterations: 1238\ncpu: 756885.1373182542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1312605.701408417,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1312550.8450704236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2784.7470051961636,
            "unit": "ns/iter",
            "extra": "iterations: 251519\ncpu: 2784.6055367586646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18347.24831634446,
            "unit": "ns/iter",
            "extra": "iterations: 38161\ncpu: 18346.353607085744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14178.239134399255,
            "unit": "ns/iter",
            "extra": "iterations: 49353\ncpu: 14177.547464186633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14894.262828829571,
            "unit": "ns/iter",
            "extra": "iterations: 47023\ncpu: 14894.070986538487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10969.558769414112,
            "unit": "ns/iter",
            "extra": "iterations: 64132\ncpu: 10968.964011725771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 70786.37673522878,
            "unit": "ns/iter",
            "extra": "iterations: 9869\ncpu: 70783.54443206047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 119579.07101399815,
            "unit": "ns/iter",
            "extra": "iterations: 5858\ncpu: 119570.05804028721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29378.331075112237,
            "unit": "ns/iter",
            "extra": "iterations: 23765\ncpu: 29376.835682726738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29328.208826604354,
            "unit": "ns/iter",
            "extra": "iterations: 23905\ncpu: 29326.71825977825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28972.19707877937,
            "unit": "ns/iter",
            "extra": "iterations: 24168\ncpu: 28971.031943065245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 58482.74273997417,
            "unit": "ns/iter",
            "extra": "iterations: 11949\ncpu: 58479.68867687655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54352.81955120403,
            "unit": "ns/iter",
            "extra": "iterations: 12879\ncpu: 54350.003882289624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21256.072942887982,
            "unit": "ns/iter",
            "extra": "iterations: 32971\ncpu: 21255.800552000084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 111058.80920012791,
            "unit": "ns/iter",
            "extra": "iterations: 6326\ncpu: 111052.68732216343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88530.06052564889,
            "unit": "ns/iter",
            "extra": "iterations: 7914\ncpu: 88525.91609805453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87377.36222638961,
            "unit": "ns/iter",
            "extra": "iterations: 7995\ncpu: 87371.03189493525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 85542.18792029154,
            "unit": "ns/iter",
            "extra": "iterations: 8179\ncpu: 85536.21469617373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 132434.46184435795,
            "unit": "ns/iter",
            "extra": "iterations: 5281\ncpu: 132427.62734330466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 516090.7013273713,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 516069.39528023696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 416744.3435068538,
            "unit": "ns/iter",
            "extra": "iterations: 1671\ncpu: 416731.5380011933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 419145.314626871,
            "unit": "ns/iter",
            "extra": "iterations: 1675\ncpu: 419144.5970149265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 416233.67082589935,
            "unit": "ns/iter",
            "extra": "iterations: 1683\ncpu: 416216.04278074414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 270494.712485225,
            "unit": "ns/iter",
            "extra": "iterations: 2539\ncpu: 270485.86057503195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 412834.52313165966,
            "unit": "ns/iter",
            "extra": "iterations: 1686\ncpu: 412818.56465005345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22319.955230059193,
            "unit": "ns/iter",
            "extra": "iterations: 31405\ncpu: 22319.382263970867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109451.25883640359,
            "unit": "ns/iter",
            "extra": "iterations: 6394\ncpu: 109449.13981857852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88915.7671964415,
            "unit": "ns/iter",
            "extra": "iterations: 7865\ncpu: 88913.97329942689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88854.36160488898,
            "unit": "ns/iter",
            "extra": "iterations: 7876\ncpu: 88852.26003047243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88465.96735829717,
            "unit": "ns/iter",
            "extra": "iterations: 7904\ncpu: 88461.5890688271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 133583.3836609955,
            "unit": "ns/iter",
            "extra": "iterations: 5239\ncpu: 133578.79366291306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 508332.3924691977,
            "unit": "ns/iter",
            "extra": "iterations: 1381\ncpu: 508319.9131064496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 421797.8073449896,
            "unit": "ns/iter",
            "extra": "iterations: 1661\ncpu: 421784.76821192354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 419947.02347980754,
            "unit": "ns/iter",
            "extra": "iterations: 1661\ncpu: 419930.22275736846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 412434.4313493868,
            "unit": "ns/iter",
            "extra": "iterations: 1697\ncpu: 412423.68886269873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 272108.5962660349,
            "unit": "ns/iter",
            "extra": "iterations: 2571\ncpu: 272104.93971217034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 412505.78994083015,
            "unit": "ns/iter",
            "extra": "iterations: 1690\ncpu: 412496.03550295834 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}