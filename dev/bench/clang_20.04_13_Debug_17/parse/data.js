window.BENCHMARK_DATA = {
  "lastUpdate": 1702489620323,
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
      }
    ]
  }
}