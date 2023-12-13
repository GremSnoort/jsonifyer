window.BENCHMARK_DATA = {
  "lastUpdate": 1702503297588,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-16 18.04 Debug c++-17": [
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
        "date": 1702489623380,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7275.211551671122,
            "unit": "ns/iter",
            "extra": "iterations: 96090\ncpu: 7275.199292330109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51951.83729999826,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51947.8 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95794.60352521336,
            "unit": "ns/iter",
            "extra": "iterations: 8964\ncpu: 95793.46273984827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 138508.4717133931,
            "unit": "ns/iter",
            "extra": "iterations: 6169\ncpu: 138504.19841141187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 183403.46473817376,
            "unit": "ns/iter",
            "extra": "iterations: 4736\ncpu: 183405.48986486474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 226556.78219894427,
            "unit": "ns/iter",
            "extra": "iterations: 3820\ncpu: 226546.46596858636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 269421.915532186,
            "unit": "ns/iter",
            "extra": "iterations: 3232\ncpu: 269424.56683168304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 311043.14306253253,
            "unit": "ns/iter",
            "extra": "iterations: 2782\ncpu: 311031.30841121497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 356223.2159509497,
            "unit": "ns/iter",
            "extra": "iterations: 2445\ncpu: 356222.29038854816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6176.717611308631,
            "unit": "ns/iter",
            "extra": "iterations: 114523\ncpu: 6176.207399387024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5089.0006269954465,
            "unit": "ns/iter",
            "extra": "iterations: 137162\ncpu: 5088.817602542981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5125.967449252982,
            "unit": "ns/iter",
            "extra": "iterations: 138430\ncpu: 5125.709744997462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5047.094981084427,
            "unit": "ns/iter",
            "extra": "iterations: 138775\ncpu: 5046.961628535388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8798.554015507045,
            "unit": "ns/iter",
            "extra": "iterations: 79579\ncpu: 8798.65416755677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27233.277220077478,
            "unit": "ns/iter",
            "extra": "iterations: 29785\ncpu: 27232.563370824235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 136699.6341035897,
            "unit": "ns/iter",
            "extra": "iterations: 6275\ncpu: 136694.91633466145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 106284.2958778357,
            "unit": "ns/iter",
            "extra": "iterations: 8054\ncpu: 106279.50086913338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 106537.15384615098,
            "unit": "ns/iter",
            "extra": "iterations: 8034\ncpu: 106533.66940502866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 101540.1211867481,
            "unit": "ns/iter",
            "extra": "iterations: 8359\ncpu: 101534.74099772713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 313360.941600817,
            "unit": "ns/iter",
            "extra": "iterations: 2911\ncpu: 313351.56303675723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1729310.4143126193,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1729204.3314500963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1356763.3386860937,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1356756.350364965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1380747.095096488,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1380723.1797919776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1344174.5478260508,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1344161.5942028975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 754428.1078431667,
            "unit": "ns/iter",
            "extra": "iterations: 1224\ncpu: 754408.9052287603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1318190.461647717,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1318150.284090905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33731.381371256924,
            "unit": "ns/iter",
            "extra": "iterations: 24328\ncpu: 33730.8656691877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 169063.51658488988,
            "unit": "ns/iter",
            "extra": "iterations: 5095\ncpu: 169062.19823356267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 133425.31125213348,
            "unit": "ns/iter",
            "extra": "iterations: 6461\ncpu: 133424.06748181424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137151.94020950844,
            "unit": "ns/iter",
            "extra": "iterations: 6205\ncpu: 137147.92908944414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 131860.2401847605,
            "unit": "ns/iter",
            "extra": "iterations: 6495\ncpu: 131857.65973826032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 288299.46593552915,
            "unit": "ns/iter",
            "extra": "iterations: 3009\ncpu: 288296.14489863784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1793363.483685275,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1793341.0748560466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1411268.0198170147,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1411202.2865853654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1410897.6814701573,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1410912.7105666164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1388545.2615843918,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1388500.1494768278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 786527.1950596543,
            "unit": "ns/iter",
            "extra": "iterations: 1174\ncpu: 786529.8977853447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1360845.7982456912,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1359863.59649122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6497593.812500529,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6497658.3333333535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2999686.0739549063,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2999533.118971065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 23760.07924726821,
            "unit": "ns/iter",
            "extra": "iterations: 34222\ncpu: 23759.59032201507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 128510.32894343321,
            "unit": "ns/iter",
            "extra": "iterations: 6682\ncpu: 128506.07602514217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 102090.00345485577,
            "unit": "ns/iter",
            "extra": "iterations: 8394\ncpu: 102087.2170598042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 99643.30957916977,
            "unit": "ns/iter",
            "extra": "iterations: 8602\ncpu: 99642.11811206675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 98026.61638327719,
            "unit": "ns/iter",
            "extra": "iterations: 8704\ncpu: 98026.53952205881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 268962.8206000821,
            "unit": "ns/iter",
            "extra": "iterations: 3233\ncpu: 268956.38725641934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1768489.9297913413,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1768452.3719165113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1389313.3681072928,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1389300.8941877754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1384067.8385186375,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1384034.9629629566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1330299.420000074,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1330290.4285714286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 736209.6854200299,
            "unit": "ns/iter",
            "extra": "iterations: 1262\ncpu: 736192.2345483359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1326520.3769559585,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1326493.5988620175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2949.274333789136,
            "unit": "ns/iter",
            "extra": "iterations: 237725\ncpu: 2949.0697234199256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18601.687327238167,
            "unit": "ns/iter",
            "extra": "iterations: 37624\ncpu: 18601.764830959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15369.204148375718,
            "unit": "ns/iter",
            "extra": "iterations: 45560\ncpu: 15368.834503950848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15012.085283779852,
            "unit": "ns/iter",
            "extra": "iterations: 46656\ncpu: 15012.037037037022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11214.330055029,
            "unit": "ns/iter",
            "extra": "iterations: 62329\ncpu: 11214.054452983279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 96580.52355802798,
            "unit": "ns/iter",
            "extra": "iterations: 7195\ncpu: 96576.01111883254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 122428.59689921625,
            "unit": "ns/iter",
            "extra": "iterations: 5547\ncpu: 122428.1954209481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29904.062572271483,
            "unit": "ns/iter",
            "extra": "iterations: 23349\ncpu: 29903.019401259215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30181.76218960767,
            "unit": "ns/iter",
            "extra": "iterations: 23237\ncpu: 30182.088909927897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29457.842346702117,
            "unit": "ns/iter",
            "extra": "iterations: 23761\ncpu: 29456.64744749795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 61639.67782869067,
            "unit": "ns/iter",
            "extra": "iterations: 11348\ncpu: 61639.41663729286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55676.32171496168,
            "unit": "ns/iter",
            "extra": "iterations: 12595\ncpu: 55676.10162763036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19899.6296538425,
            "unit": "ns/iter",
            "extra": "iterations: 35186\ncpu: 19899.434434149927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101995.11208406703,
            "unit": "ns/iter",
            "extra": "iterations: 6852\ncpu: 101994.62930531161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 81485.03341093933,
            "unit": "ns/iter",
            "extra": "iterations: 8590\ncpu: 81480.38416763685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 80598.95705238591,
            "unit": "ns/iter",
            "extra": "iterations: 8685\ncpu: 80598.94070235988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 80204.63531163445,
            "unit": "ns/iter",
            "extra": "iterations: 8728\ncpu: 80202.77268560996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 147996.3363694134,
            "unit": "ns/iter",
            "extra": "iterations: 4721\ncpu: 147995.99661088962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 516576.4008842998,
            "unit": "ns/iter",
            "extra": "iterations: 1357\ncpu: 516571.2601326456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 419289.4307138479,
            "unit": "ns/iter",
            "extra": "iterations: 1667\ncpu: 419288.542291542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 422291.68474980217,
            "unit": "ns/iter",
            "extra": "iterations: 1659\ncpu: 422257.74562989257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 416699.1423465985,
            "unit": "ns/iter",
            "extra": "iterations: 1679\ncpu: 416674.5681953499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 267781.7159265105,
            "unit": "ns/iter",
            "extra": "iterations: 2612\ncpu: 267766.3476263399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 411117.04985338514,
            "unit": "ns/iter",
            "extra": "iterations: 1705\ncpu: 411100.5865102606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20777.127969826524,
            "unit": "ns/iter",
            "extra": "iterations: 33672\ncpu: 20776.003801378112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 102348.22354322327,
            "unit": "ns/iter",
            "extra": "iterations: 6813\ncpu: 102342.18405988609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 82385.05572867536,
            "unit": "ns/iter",
            "extra": "iterations: 8344\ncpu: 82379.93767976962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 83092.61318289409,
            "unit": "ns/iter",
            "extra": "iterations: 8420\ncpu: 83091.53206650833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 81183.633379887,
            "unit": "ns/iter",
            "extra": "iterations: 8592\ncpu: 81178.32867784046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 150151.355608077,
            "unit": "ns/iter",
            "extra": "iterations: 4654\ncpu: 150143.51095831388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 501624.2064516274,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 501598.63799282897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 416031.6116389127,
            "unit": "ns/iter",
            "extra": "iterations: 1684\ncpu: 416014.8456057016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 414010.8254437943,
            "unit": "ns/iter",
            "extra": "iterations: 1690\ncpu: 413991.24260354554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 405906.5664939143,
            "unit": "ns/iter",
            "extra": "iterations: 1737\ncpu: 405885.2619458841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 262478.70700636273,
            "unit": "ns/iter",
            "extra": "iterations: 2669\ncpu: 262469.6515548883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 403217.26998838165,
            "unit": "ns/iter",
            "extra": "iterations: 1726\ncpu: 403211.2977983797 ns\nthreads: 1"
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
        "date": 1702492244363,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7141.2413284577515,
            "unit": "ns/iter",
            "extra": "iterations: 97647\ncpu: 7140.776470347272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53555.49959999735,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53552.89 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98879.80170330443,
            "unit": "ns/iter",
            "extra": "iterations: 8689\ncpu: 98875.70491425942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 143754.3770683519,
            "unit": "ns/iter",
            "extra": "iterations: 5983\ncpu: 143742.5706167475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 189573.59675204594,
            "unit": "ns/iter",
            "extra": "iterations: 4372\ncpu: 189563.88380603833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 234814.59614341098,
            "unit": "ns/iter",
            "extra": "iterations: 3682\ncpu: 234811.4611624117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 280968.6314940536,
            "unit": "ns/iter",
            "extra": "iterations: 3099\ncpu: 280968.79638593085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 324701.88549049495,
            "unit": "ns/iter",
            "extra": "iterations: 2681\ncpu: 324694.59157030936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 368693.1036973881,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 368693.03017424536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6099.941149813516,
            "unit": "ns/iter",
            "extra": "iterations: 114749\ncpu: 6099.857950831813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4997.355331328242,
            "unit": "ns/iter",
            "extra": "iterations: 139937\ncpu: 4997.346663141279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5028.625096233263,
            "unit": "ns/iter",
            "extra": "iterations: 140284\ncpu: 5028.613384277611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5031.217847637299,
            "unit": "ns/iter",
            "extra": "iterations: 139391\ncpu: 5031.22009311935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8830.935766036,
            "unit": "ns/iter",
            "extra": "iterations: 79226\ncpu: 8830.81816575367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27704.960453514435,
            "unit": "ns/iter",
            "extra": "iterations: 29459\ncpu: 27704.586034828022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 141464.2571711123,
            "unit": "ns/iter",
            "extra": "iterations: 6066\ncpu: 141460.89680184636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 108911.93739640129,
            "unit": "ns/iter",
            "extra": "iterations: 7843\ncpu: 108911.22019635346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 108786.57130136574,
            "unit": "ns/iter",
            "extra": "iterations: 7861\ncpu: 108785.31993385067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 103227.751730847,
            "unit": "ns/iter",
            "extra": "iterations: 8233\ncpu: 103226.57597473555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 305582.26622073515,
            "unit": "ns/iter",
            "extra": "iterations: 2990\ncpu: 305575.4180602002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1780919.4971097917,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1780905.5876685919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1397790.737556557,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1397768.6274509795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1406921.1263318732,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1406896.4992389684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1367335.337758047,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1367264.454277288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 760980.8405916513,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 760967.7074774031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1345865.4541483955,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1345840.6113537108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35421.56933396068,
            "unit": "ns/iter",
            "extra": "iterations: 23257\ncpu: 35421.546201143734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 167204.73932453827,
            "unit": "ns/iter",
            "extra": "iterations: 5152\ncpu: 167202.96972049665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 135636.37135616047,
            "unit": "ns/iter",
            "extra": "iterations: 6312\ncpu: 135636.3910012673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136957.5978398988,
            "unit": "ns/iter",
            "extra": "iterations: 6296\ncpu: 136954.03430749642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132074.1376118403,
            "unit": "ns/iter",
            "extra": "iterations: 6482\ncpu: 132073.85066337566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 286735.9067460375,
            "unit": "ns/iter",
            "extra": "iterations: 3024\ncpu: 286729.13359788345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1814516.28543682,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1814499.0291262097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1420419.7607362408,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1420377.14723927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1458296.9796556812,
            "unit": "ns/iter",
            "extra": "iterations: 639\ncpu: 1458242.5665101758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1398742.1819548332,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1398740.4511278202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 781046.947723441,
            "unit": "ns/iter",
            "extra": "iterations: 1186\ncpu: 781040.6408094437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1370797.1153845666,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1370774.5562130155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6472458.993055991,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6472333.333333314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3014352.1511256006,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 3014353.0546623673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24015.776861208356,
            "unit": "ns/iter",
            "extra": "iterations: 33943\ncpu: 24015.27560910943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 133841.66713572107,
            "unit": "ns/iter",
            "extra": "iterations: 6396\ncpu: 133838.74296435367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 102587.20550568085,
            "unit": "ns/iter",
            "extra": "iterations: 8355\ncpu: 102584.26092160416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103628.76575160613,
            "unit": "ns/iter",
            "extra": "iterations: 8269\ncpu: 103624.50114886991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101118.97978136028,
            "unit": "ns/iter",
            "extra": "iterations: 8507\ncpu: 101112.28400141034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 269141.1175193878,
            "unit": "ns/iter",
            "extra": "iterations: 3225\ncpu: 269130.2325581392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1774145.7295239475,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1774062.2857142864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1396620.3398202271,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1396596.5568862285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1393017.1714284876,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1392896.9924812033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1342659.8501441586,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1342596.1095100904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 743311.0111642664,
            "unit": "ns/iter",
            "extra": "iterations: 1254\ncpu: 743285.0877192985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1339007.3505746287,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1339007.7586206906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2901.5000186704606,
            "unit": "ns/iter",
            "extra": "iterations: 241023\ncpu: 2901.4463349970833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19357.749160819698,
            "unit": "ns/iter",
            "extra": "iterations: 36047\ncpu: 19357.716314811165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14545.646741844572,
            "unit": "ns/iter",
            "extra": "iterations: 48064\ncpu: 14545.07323568575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14897.213342126417,
            "unit": "ns/iter",
            "extra": "iterations: 47009\ncpu: 14897.202663319802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11178.856356772782,
            "unit": "ns/iter",
            "extra": "iterations: 62516\ncpu: 11178.69825324716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 98545.21320809284,
            "unit": "ns/iter",
            "extra": "iterations: 7026\ncpu: 98542.96897238816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 122711.49007901808,
            "unit": "ns/iter",
            "extra": "iterations: 5695\ncpu: 122710.88674275695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30082.355235433995,
            "unit": "ns/iter",
            "extra": "iterations: 23255\ncpu: 30082.37368307889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30350.950069289454,
            "unit": "ns/iter",
            "extra": "iterations: 23092\ncpu: 30349.900398406608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29815.240522536445,
            "unit": "ns/iter",
            "extra": "iterations: 23424\ncpu: 29815.023053278903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56404.63505770447,
            "unit": "ns/iter",
            "extra": "iterations: 12391\ncpu: 56405.01977241562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55049.23374989653,
            "unit": "ns/iter",
            "extra": "iterations: 12723\ncpu: 55048.38481490179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20489.195657263506,
            "unit": "ns/iter",
            "extra": "iterations: 34172\ncpu: 20489.195832845453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 104357.13010432619,
            "unit": "ns/iter",
            "extra": "iterations: 6710\ncpu: 104355.55886736189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 81841.00457156207,
            "unit": "ns/iter",
            "extra": "iterations: 8531\ncpu: 81839.03411089025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 82272.18964710803,
            "unit": "ns/iter",
            "extra": "iterations: 8558\ncpu: 82272.00280439264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 80664.00207732104,
            "unit": "ns/iter",
            "extra": "iterations: 8665\ncpu: 80664.76630121199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 151778.2294869037,
            "unit": "ns/iter",
            "extra": "iterations: 4619\ncpu: 151777.6575016228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 514969.9318012915,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 514932.320237213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 426277.36758407747,
            "unit": "ns/iter",
            "extra": "iterations: 1635\ncpu: 426271.00917431305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 428774.9573431146,
            "unit": "ns/iter",
            "extra": "iterations: 1641\ncpu: 428774.223034729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 424166.8072508194,
            "unit": "ns/iter",
            "extra": "iterations: 1655\ncpu: 424170.57401812915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 269808.01926038146,
            "unit": "ns/iter",
            "extra": "iterations: 2596\ncpu: 269803.42835131305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 413710.4556737575,
            "unit": "ns/iter",
            "extra": "iterations: 1692\ncpu: 413698.1087470487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21061.809101601662,
            "unit": "ns/iter",
            "extra": "iterations: 33159\ncpu: 21061.03018788275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 106169.4882093555,
            "unit": "ns/iter",
            "extra": "iterations: 6573\ncpu: 106169.20736345515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 83986.49802039479,
            "unit": "ns/iter",
            "extra": "iterations: 8335\ncpu: 83981.2117576494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 84458.5736696145,
            "unit": "ns/iter",
            "extra": "iterations: 8287\ncpu: 84455.94304332048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84407.82573563706,
            "unit": "ns/iter",
            "extra": "iterations: 8292\ncpu: 84403.31644959115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 153791.56799300815,
            "unit": "ns/iter",
            "extra": "iterations: 4574\ncpu: 153775.6886751217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 509158.87944811257,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 509132.31663034944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 421099.09735577897,
            "unit": "ns/iter",
            "extra": "iterations: 1664\ncpu: 421063.3413461558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 427519.95365853055,
            "unit": "ns/iter",
            "extra": "iterations: 1640\ncpu: 427503.7195121976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 414591.3274021104,
            "unit": "ns/iter",
            "extra": "iterations: 1686\ncpu: 414585.349940687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 265497.9056675329,
            "unit": "ns/iter",
            "extra": "iterations: 2629\ncpu: 265489.27348801517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 410512.189634865,
            "unit": "ns/iter",
            "extra": "iterations: 1698\ncpu: 410502.17903415434 ns\nthreads: 1"
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
        "date": 1702503296624,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7272.412040933309,
            "unit": "ns/iter",
            "extra": "iterations: 96255\ncpu: 7272.172874136409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51969.89909999275,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51968.91999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95655.39317954017,
            "unit": "ns/iter",
            "extra": "iterations: 8973\ncpu: 95648.37846873957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 138353.22256293942,
            "unit": "ns/iter",
            "extra": "iterations: 6196\ncpu: 138349.45125887668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 183770.69305674086,
            "unit": "ns/iter",
            "extra": "iterations: 4724\ncpu: 183759.31414055882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 226184.65445027323,
            "unit": "ns/iter",
            "extra": "iterations: 3820\ncpu: 226176.51832460728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 269569.9511511957,
            "unit": "ns/iter",
            "extra": "iterations: 3214\ncpu: 269560.08089607954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 313861.22659920785,
            "unit": "ns/iter",
            "extra": "iterations: 2767\ncpu: 313852.4756053489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 355564.87592439284,
            "unit": "ns/iter",
            "extra": "iterations: 2434\ncpu: 355547.78142974514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6041.463531926414,
            "unit": "ns/iter",
            "extra": "iterations: 116033\ncpu: 6041.205519119552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5025.376842466886,
            "unit": "ns/iter",
            "extra": "iterations: 139419\ncpu: 5025.0632984026615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4995.764307771157,
            "unit": "ns/iter",
            "extra": "iterations: 140221\ncpu: 4995.609787407025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5005.269638426676,
            "unit": "ns/iter",
            "extra": "iterations: 139446\ncpu: 5005.002653356854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8803.709765920246,
            "unit": "ns/iter",
            "extra": "iterations: 79460\ncpu: 8803.167631512717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26988.562697540125,
            "unit": "ns/iter",
            "extra": "iterations: 30057\ncpu: 26986.625411717752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 149776.99249040303,
            "unit": "ns/iter",
            "extra": "iterations: 5726\ncpu: 149771.58574921408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 110481.18792637094,
            "unit": "ns/iter",
            "extra": "iterations: 7769\ncpu: 110476.27751319356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 108653.26695508523,
            "unit": "ns/iter",
            "extra": "iterations: 7859\ncpu: 108651.8513805828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 105805.37832463653,
            "unit": "ns/iter",
            "extra": "iterations: 8046\ncpu: 105801.97613721088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 325731.6354313855,
            "unit": "ns/iter",
            "extra": "iterations: 2828\ncpu: 325726.30834511947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1725782.8379888537,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1725685.1024208548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1376976.0538922607,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1376893.2634730511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1338131.7202897926,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1338048.5507246344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1335214.7896995877,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1335197.1387696709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 753149.7716150383,
            "unit": "ns/iter",
            "extra": "iterations: 1226\ncpu: 753109.7063621517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1308693.9985815976,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1308629.3617021285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33929.45224059027,
            "unit": "ns/iter",
            "extra": "iterations: 24257\ncpu: 33929.09675557566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 187710.96620448364,
            "unit": "ns/iter",
            "extra": "iterations: 4616\ncpu: 187698.09358752167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 139474.47707758448,
            "unit": "ns/iter",
            "extra": "iterations: 6173\ncpu: 139466.159079864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 139694.11424405014,
            "unit": "ns/iter",
            "extra": "iterations: 6171\ncpu: 139682.83908604764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132670.28096864888,
            "unit": "ns/iter",
            "extra": "iterations: 6442\ncpu: 132658.36696678033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 318196.9597511951,
            "unit": "ns/iter",
            "extra": "iterations: 2733\ncpu: 318180.2414928656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1771116.453510443,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1771005.1233396556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1427591.6753845545,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1427468.3076922984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1393121.005970212,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1393036.1194029811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1374510.8183160755,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1374409.3057607126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 786386.223817632,
            "unit": "ns/iter",
            "extra": "iterations: 1184\ncpu: 786338.3445945951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1343437.2557803649,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1343327.023121387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6509213.251747751,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6508953.846153869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3031672.7435065303,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3031454.545454557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24606.75615091603,
            "unit": "ns/iter",
            "extra": "iterations: 33369\ncpu: 24605.19044622253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 141711.13190437527,
            "unit": "ns/iter",
            "extra": "iterations: 6065\ncpu: 141709.31574608327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106594.81556410727,
            "unit": "ns/iter",
            "extra": "iterations: 8057\ncpu: 106591.74630755887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107158.54965243083,
            "unit": "ns/iter",
            "extra": "iterations: 8056\ncpu: 107152.23435948373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101274.5675869512,
            "unit": "ns/iter",
            "extra": "iterations: 8367\ncpu: 101266.3917772199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 282206.5586701416,
            "unit": "ns/iter",
            "extra": "iterations: 3068\ncpu: 282201.2711864415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1733710.8286777968,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1733653.6312849107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1385602.853333357,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1385525.1851851933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1330590.2889843949,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1330477.2532188932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1327364.2435896406,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1327286.8945868947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 742169.0975999809,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 742116.0799999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1304163.279720323,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1304084.8951048972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2923.4735102259283,
            "unit": "ns/iter",
            "extra": "iterations: 237771\ncpu: 2923.1950069604763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19779.019663159685,
            "unit": "ns/iter",
            "extra": "iterations: 35447\ncpu: 19777.848619065007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14347.771069775334,
            "unit": "ns/iter",
            "extra": "iterations: 48814\ncpu: 14347.160650633068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 16009.422068647818,
            "unit": "ns/iter",
            "extra": "iterations: 47606\ncpu: 16009.055581229271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11300.814475982244,
            "unit": "ns/iter",
            "extra": "iterations: 61868\ncpu: 11299.812504040969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 100701.41212208488,
            "unit": "ns/iter",
            "extra": "iterations: 6913\ncpu: 100694.79242007737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 120236.44262859209,
            "unit": "ns/iter",
            "extra": "iterations: 5813\ncpu: 120228.65990022426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30119.75007529211,
            "unit": "ns/iter",
            "extra": "iterations: 23243\ncpu: 30117.342855913612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29758.638094022415,
            "unit": "ns/iter",
            "extra": "iterations: 23484\ncpu: 29756.03389541831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29140.447877577073,
            "unit": "ns/iter",
            "extra": "iterations: 23982\ncpu: 29137.769994162343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60433.4787454614,
            "unit": "ns/iter",
            "extra": "iterations: 11574\ncpu: 60429.514428892355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54832.28099820502,
            "unit": "ns/iter",
            "extra": "iterations: 12783\ncpu: 54829.63310646928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20365.202070128285,
            "unit": "ns/iter",
            "extra": "iterations: 34394\ncpu: 20364.69733092997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 104124.99955044338,
            "unit": "ns/iter",
            "extra": "iterations: 6673\ncpu: 104117.45841450655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 82054.98734177474,
            "unit": "ns/iter",
            "extra": "iterations: 8532\ncpu: 82046.31973745897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 81528.6469150292,
            "unit": "ns/iter",
            "extra": "iterations: 8590\ncpu: 81523.48079161893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 81748.6909705927,
            "unit": "ns/iter",
            "extra": "iterations: 8572\ncpu: 81742.2071861877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 154875.1299822922,
            "unit": "ns/iter",
            "extra": "iterations: 4516\ncpu: 154871.25775022033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 511329.62109088775,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 511291.49090909533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 424300.1043689276,
            "unit": "ns/iter",
            "extra": "iterations: 1648\ncpu: 424289.32038834965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 416869.84619955433,
            "unit": "ns/iter",
            "extra": "iterations: 1684\ncpu: 416856.7695961997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 414644.97508902015,
            "unit": "ns/iter",
            "extra": "iterations: 1686\ncpu: 414633.15539739165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 270084.890003847,
            "unit": "ns/iter",
            "extra": "iterations: 2591\ncpu: 270081.7830953264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 410061.0310668238,
            "unit": "ns/iter",
            "extra": "iterations: 1706\ncpu: 410055.0410316601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21041.79268695828,
            "unit": "ns/iter",
            "extra": "iterations: 33283\ncpu: 21041.345431601767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 104927.96089887164,
            "unit": "ns/iter",
            "extra": "iterations: 6675\ncpu: 104925.51310861399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 84176.26850072271,
            "unit": "ns/iter",
            "extra": "iterations: 8324\ncpu: 84172.63334935158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 85217.1423535197,
            "unit": "ns/iter",
            "extra": "iterations: 8226\ncpu: 85213.90712375316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84493.66827444227,
            "unit": "ns/iter",
            "extra": "iterations: 8293\ncpu: 84492.0414807672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 155034.3119610715,
            "unit": "ns/iter",
            "extra": "iterations: 4523\ncpu: 155026.66371877122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 497040.71834992303,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 497026.38691322505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 416546.3347131805,
            "unit": "ns/iter",
            "extra": "iterations: 1691\ncpu: 416530.81017149886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 410274.45043987414,
            "unit": "ns/iter",
            "extra": "iterations: 1705\ncpu: 410266.568914958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 412759.395772167,
            "unit": "ns/iter",
            "extra": "iterations: 1703\ncpu: 412748.7962419192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 261491.56955871495,
            "unit": "ns/iter",
            "extra": "iterations: 2674\ncpu: 261484.81675392608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 403936.3426086904,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 403931.0724637655 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}