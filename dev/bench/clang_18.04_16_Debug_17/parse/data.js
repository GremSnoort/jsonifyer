window.BENCHMARK_DATA = {
  "lastUpdate": 1705952943551,
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
        "date": 1705574972700,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7634.130778714462,
            "unit": "ns/iter",
            "extra": "iterations: 91651\ncpu: 7633.669027070081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55179.094000004625,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55176.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101317.7470803323,
            "unit": "ns/iter",
            "extra": "iterations: 8477\ncpu: 101310.5225905391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 147201.5181258576,
            "unit": "ns/iter",
            "extra": "iterations: 5848\ncpu: 147196.7510259918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 193032.64721602196,
            "unit": "ns/iter",
            "extra": "iterations: 4490\ncpu: 193016.0579064588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 239878.5365650858,
            "unit": "ns/iter",
            "extra": "iterations: 3610\ncpu: 239863.79501385044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 286174.82756349567,
            "unit": "ns/iter",
            "extra": "iterations: 3033\ncpu: 286145.0049455986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 331770.7313432773,
            "unit": "ns/iter",
            "extra": "iterations: 2613\ncpu: 331751.09070034465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 377984.3622559839,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 377962.21258134494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6298.7540814031245,
            "unit": "ns/iter",
            "extra": "iterations: 111175\ncpu: 6298.366539239933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5154.441201247044,
            "unit": "ns/iter",
            "extra": "iterations: 135326\ncpu: 5154.136677356895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5211.434242826124,
            "unit": "ns/iter",
            "extra": "iterations: 134434\ncpu: 5211.455435380927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5151.28062437813,
            "unit": "ns/iter",
            "extra": "iterations: 135815\ncpu: 5150.894967418913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9042.778911608804,
            "unit": "ns/iter",
            "extra": "iterations: 77417\ncpu: 9042.231034527298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28879.601646297015,
            "unit": "ns/iter",
            "extra": "iterations: 28063\ncpu: 28878.284573994173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 145160.87146965085,
            "unit": "ns/iter",
            "extra": "iterations: 5913\ncpu: 145153.22171486547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 112229.48510303027,
            "unit": "ns/iter",
            "extra": "iterations: 7619\ncpu: 112223.02139388376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 108405.16793796318,
            "unit": "ns/iter",
            "extra": "iterations: 7866\ncpu: 108395.69031273833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 100584.56931455682,
            "unit": "ns/iter",
            "extra": "iterations: 8447\ncpu: 100577.94483248497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 310097.82277193066,
            "unit": "ns/iter",
            "extra": "iterations: 2951\ncpu: 310077.19417146745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1819857.923529374,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1819758.8235294083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1417779.7752292939,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1417695.1070336371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1417439.7981650776,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1417345.107033643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1408116.5820669143,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1408046.8085106388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 781648.7639123136,
            "unit": "ns/iter",
            "extra": "iterations: 1186\ncpu: 781590.7251264757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1374490.9911242058,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1374406.0650887603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 33208.9945549149,
            "unit": "ns/iter",
            "extra": "iterations: 24793\ncpu: 33208.159561166496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 173923.84336372913,
            "unit": "ns/iter",
            "extra": "iterations: 4935\ncpu: 173922.28976697085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 137261.98890825134,
            "unit": "ns/iter",
            "extra": "iterations: 6311\ncpu: 137257.96228806896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 139996.9127538582,
            "unit": "ns/iter",
            "extra": "iterations: 6155\ncpu: 139996.0519902517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 135836.88216710518,
            "unit": "ns/iter",
            "extra": "iterations: 6331\ncpu: 135832.6330753438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 288558.075818296,
            "unit": "ns/iter",
            "extra": "iterations: 2994\ncpu: 288552.9726118905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1857999.4811880798,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1857980.7920792056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1455958.470312524,
            "unit": "ns/iter",
            "extra": "iterations: 640\ncpu: 1455949.3749999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1438454.5634921808,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1438435.3968253888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1431510.8384614808,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1431502.3076923147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 797734.3896995034,
            "unit": "ns/iter",
            "extra": "iterations: 1165\ncpu: 797702.8326180248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1403813.2721804883,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1403773.6842105256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6634478.070921444,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6634319.148936137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3156360.6033334206,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3156379.9999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24165.976787142357,
            "unit": "ns/iter",
            "extra": "iterations: 32482\ncpu: 24165.793362477616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 137983.32489180905,
            "unit": "ns/iter",
            "extra": "iterations: 6239\ncpu: 137983.52300048075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 105636.15395043984,
            "unit": "ns/iter",
            "extra": "iterations: 8113\ncpu: 105633.64969801504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 101067.7412835415,
            "unit": "ns/iter",
            "extra": "iterations: 8461\ncpu: 101066.80061458466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 96921.2984531346,
            "unit": "ns/iter",
            "extra": "iterations: 8792\ncpu: 96919.27888989953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 268428.68599630496,
            "unit": "ns/iter",
            "extra": "iterations: 3242\ncpu: 268429.27205428755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1857636.2185037725,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1857593.897637801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1428889.247706412,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1428867.737003061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1417262.4006070695,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1417253.5660091098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1372784.3140740904,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1372785.185185179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 764958.796707828,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 764954.8971193379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1365912.93548391,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1365891.935483881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2942.7751752499485,
            "unit": "ns/iter",
            "extra": "iterations: 237803\ncpu: 2942.683229395753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18313.29169061911,
            "unit": "ns/iter",
            "extra": "iterations: 38270\ncpu: 18312.90828325053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14889.554835030654,
            "unit": "ns/iter",
            "extra": "iterations: 47342\ncpu: 14889.586413755213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14628.433702490378,
            "unit": "ns/iter",
            "extra": "iterations: 43071\ncpu: 14628.476236911169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11320.045179018976,
            "unit": "ns/iter",
            "extra": "iterations: 61865\ncpu: 11319.915946011552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 97720.09154031987,
            "unit": "ns/iter",
            "extra": "iterations: 7057\ncpu: 97719.20079353839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 119891.54687233474,
            "unit": "ns/iter",
            "extra": "iterations: 5835\ncpu: 119890.14567266508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30516.786041840875,
            "unit": "ns/iter",
            "extra": "iterations: 22897\ncpu: 30516.86683845071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30743.30140125097,
            "unit": "ns/iter",
            "extra": "iterations: 22694\ncpu: 30743.015775094755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30148.00393326152,
            "unit": "ns/iter",
            "extra": "iterations: 23136\ncpu: 30148.059301521676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59270.42984693742,
            "unit": "ns/iter",
            "extra": "iterations: 11760\ncpu: 59270.49319727886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56703.86089706782,
            "unit": "ns/iter",
            "extra": "iterations: 12329\ncpu: 56703.93381458339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21537.496846489892,
            "unit": "ns/iter",
            "extra": "iterations: 32662\ncpu: 21537.13795848385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 104745.5264498697,
            "unit": "ns/iter",
            "extra": "iterations: 6673\ncpu: 104744.44777461246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83551.58591886562,
            "unit": "ns/iter",
            "extra": "iterations: 8380\ncpu: 83547.3627684965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 83692.99209769587,
            "unit": "ns/iter",
            "extra": "iterations: 8352\ncpu: 83691.15181992321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83604.64998207836,
            "unit": "ns/iter",
            "extra": "iterations: 8371\ncpu: 83604.71867160527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 153470.32580575376,
            "unit": "ns/iter",
            "extra": "iterations: 4561\ncpu: 153470.31352773728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 533495.496941962,
            "unit": "ns/iter",
            "extra": "iterations: 1308\ncpu: 533489.7553516802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 431649.6631644226,
            "unit": "ns/iter",
            "extra": "iterations: 1618\ncpu: 431644.00494437985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 431350.76398277684,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 431346.15857405897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 430734.18988900864,
            "unit": "ns/iter",
            "extra": "iterations: 1622\ncpu: 430729.28483353625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 271757.57165048143,
            "unit": "ns/iter",
            "extra": "iterations: 2575\ncpu: 271746.7961165047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 422163.46389892476,
            "unit": "ns/iter",
            "extra": "iterations: 1662\ncpu: 422153.8507821871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21490.97468043486,
            "unit": "ns/iter",
            "extra": "iterations: 32544\ncpu: 21490.563544739503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 104044.87232461858,
            "unit": "ns/iter",
            "extra": "iterations: 6728\ncpu: 104042.77645659936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 85182.65714284958,
            "unit": "ns/iter",
            "extra": "iterations: 8225\ncpu: 85179.27051671679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86476.2094885946,
            "unit": "ns/iter",
            "extra": "iterations: 8115\ncpu: 86472.37215033859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 83861.70230105515,
            "unit": "ns/iter",
            "extra": "iterations: 8344\ncpu: 83855.7766059451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 153223.42957130613,
            "unit": "ns/iter",
            "extra": "iterations: 4572\ncpu: 153213.18897637862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 531080.549019582,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 531042.0814479595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 426477.46711328876,
            "unit": "ns/iter",
            "extra": "iterations: 1642\ncpu: 426446.8940316677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 424539.02791260846,
            "unit": "ns/iter",
            "extra": "iterations: 1648\ncpu: 424516.3228155353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 430778.7367773309,
            "unit": "ns/iter",
            "extra": "iterations: 1626\ncpu: 430762.66912669264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 271177.96916833107,
            "unit": "ns/iter",
            "extra": "iterations: 2465\ncpu: 271180.4462474678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 421271.9446116959,
            "unit": "ns/iter",
            "extra": "iterations: 1661\ncpu: 421261.28838049225 ns\nthreads: 1"
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
        "date": 1705772748351,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7206.13046692174,
            "unit": "ns/iter",
            "extra": "iterations: 97404\ncpu: 7205.549053426964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51388.17160000144,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51382.630000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95182.4949002184,
            "unit": "ns/iter",
            "extra": "iterations: 9020\ncpu: 95176.84035476719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 137394.86964886368,
            "unit": "ns/iter",
            "extra": "iterations: 6237\ncpu: 137384.04681738018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 180504.18608042807,
            "unit": "ns/iter",
            "extra": "iterations: 4799\ncpu: 180490.5813711189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 222777.96829896324,
            "unit": "ns/iter",
            "extra": "iterations: 3880\ncpu: 222760.3092783504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 266169.47835432814,
            "unit": "ns/iter",
            "extra": "iterations: 3257\ncpu: 266152.4101934295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 309665.1201854514,
            "unit": "ns/iter",
            "extra": "iterations: 2804\ncpu: 309645.22111269605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 351646.70427074865,
            "unit": "ns/iter",
            "extra": "iterations: 2482\ncpu: 351620.1047542307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6038.357172888414,
            "unit": "ns/iter",
            "extra": "iterations: 116543\ncpu: 6037.867568193718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4927.291971833715,
            "unit": "ns/iter",
            "extra": "iterations: 141589\ncpu: 4927.084024888943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5029.7351395618025,
            "unit": "ns/iter",
            "extra": "iterations: 140440\ncpu: 5029.681002563377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5004.001365426595,
            "unit": "ns/iter",
            "extra": "iterations: 139883\ncpu: 5003.779587226458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8869.760614915424,
            "unit": "ns/iter",
            "extra": "iterations: 78710\ncpu: 8869.308855291594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27535.80604712569,
            "unit": "ns/iter",
            "extra": "iterations: 29667\ncpu: 27534.779384501308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 135509.23444673332,
            "unit": "ns/iter",
            "extra": "iterations: 6317\ncpu: 135501.7571632104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104327.52931097864,
            "unit": "ns/iter",
            "extra": "iterations: 8171\ncpu: 104320.54828050417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 104119.2107377733,
            "unit": "ns/iter",
            "extra": "iterations: 8214\ncpu: 104111.79693206739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 100142.96873512937,
            "unit": "ns/iter",
            "extra": "iterations: 8412\ncpu: 100137.23252496409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 301469.27698909916,
            "unit": "ns/iter",
            "extra": "iterations: 3029\ncpu: 301447.50742819416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1690600.179816502,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1690492.2935779805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1340156.4927953363,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1340071.3256484158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1340481.634393146,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1340414.3063583814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1299297.7626404061,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1299222.4719101116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 776024.3264291593,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 775935.5426677711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1290115.6499303696,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1290050.6276150644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32395.15070797008,
            "unit": "ns/iter",
            "extra": "iterations: 25566\ncpu: 32392.54087459917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 163628.4897142884,
            "unit": "ns/iter",
            "extra": "iterations: 5250\ncpu: 163620.72380952342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 128670.19981985452,
            "unit": "ns/iter",
            "extra": "iterations: 6661\ncpu: 128667.45233448382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 132475.5816720706,
            "unit": "ns/iter",
            "extra": "iterations: 6471\ncpu: 132470.80822129548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 128195.54334133698,
            "unit": "ns/iter",
            "extra": "iterations: 6668\ncpu: 128188.15236952613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 300549.06717451976,
            "unit": "ns/iter",
            "extra": "iterations: 2888\ncpu: 300526.7313019383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1712334.088397775,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1712169.6132596799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1351658.6956522285,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1351559.2753623133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1358968.3961988771,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1358915.3508771982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1332990.4733812348,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1332946.9064748203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 793170.8818493263,
            "unit": "ns/iter",
            "extra": "iterations: 1168\ncpu: 793132.534246577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1313234.5801418298,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1313154.4680851107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6473144.555555797,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6472667.361111098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2990640.4134615115,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2990344.551282061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 23772.935191923134,
            "unit": "ns/iter",
            "extra": "iterations: 34363\ncpu: 23771.382009719793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 129706.46784419652,
            "unit": "ns/iter",
            "extra": "iterations: 6624\ncpu: 129697.94685990369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 98520.09580355,
            "unit": "ns/iter",
            "extra": "iterations: 8674\ncpu: 98513.18884021198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 96392.15854070446,
            "unit": "ns/iter",
            "extra": "iterations: 8881\ncpu: 96385.04672897197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94770.52091887218,
            "unit": "ns/iter",
            "extra": "iterations: 9011\ncpu: 94758.98346465458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 264702.95731708506,
            "unit": "ns/iter",
            "extra": "iterations: 3280\ncpu: 264685.30487804936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1687840.5597826287,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1687714.6739130418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1353348.2583453697,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1352857.1843251127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1317278.8217822618,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 1317204.8090523388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1285512.3775932922,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1285448.6860304216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 754653.5515840502,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 754609.3419983779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1283359.7520660593,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1283300.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3006.2225290059073,
            "unit": "ns/iter",
            "extra": "iterations: 232882\ncpu: 3006.130572564665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19583.805349724265,
            "unit": "ns/iter",
            "extra": "iterations: 35628\ncpu: 19583.743123386168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15444.893604823186,
            "unit": "ns/iter",
            "extra": "iterations: 47098\ncpu: 15443.776805809273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15203.22570621604,
            "unit": "ns/iter",
            "extra": "iterations: 46020\ncpu: 15202.333767926877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11172.354435438621,
            "unit": "ns/iter",
            "extra": "iterations: 62553\ncpu: 11171.120489824694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 97661.94709660347,
            "unit": "ns/iter",
            "extra": "iterations: 7164\ncpu: 97656.90954773841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 117594.35948261156,
            "unit": "ns/iter",
            "extra": "iterations: 5953\ncpu: 117587.35091550513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29297.15678001956,
            "unit": "ns/iter",
            "extra": "iterations: 23702\ncpu: 29295.456079655705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29364.96230440978,
            "unit": "ns/iter",
            "extra": "iterations: 23902\ncpu: 29363.739436030308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28817.315793820664,
            "unit": "ns/iter",
            "extra": "iterations: 24212\ncpu: 28816.02098133156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60933.43018310984,
            "unit": "ns/iter",
            "extra": "iterations: 11523\ncpu: 60933.33333333361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54271.13384113402,
            "unit": "ns/iter",
            "extra": "iterations: 12866\ncpu: 54267.90766360947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20676.99243521173,
            "unit": "ns/iter",
            "extra": "iterations: 33841\ncpu: 20676.04089713672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 102644.2346998439,
            "unit": "ns/iter",
            "extra": "iterations: 6830\ncpu: 102639.31185944326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 82190.76486486118,
            "unit": "ns/iter",
            "extra": "iterations: 8510\ncpu: 82185.2173913038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 81955.49150755802,
            "unit": "ns/iter",
            "extra": "iterations: 8537\ncpu: 81953.41454843558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 80896.09332716612,
            "unit": "ns/iter",
            "extra": "iterations: 8647\ncpu: 80893.94009483095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 151127.28182996667,
            "unit": "ns/iter",
            "extra": "iterations: 4634\ncpu: 151118.3858437653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 497129.43100997905,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 497117.49644381675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 411370.08406815864,
            "unit": "ns/iter",
            "extra": "iterations: 1701\ncpu: 411352.73368606326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 409419.8237704719,
            "unit": "ns/iter",
            "extra": "iterations: 1708\ncpu: 409397.4824355946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 404213.9336027479,
            "unit": "ns/iter",
            "extra": "iterations: 1732\ncpu: 404193.995381061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 267106.9387133425,
            "unit": "ns/iter",
            "extra": "iterations: 2627\ncpu: 267096.57403882756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 401689.12607948703,
            "unit": "ns/iter",
            "extra": "iterations: 1737\ncpu: 401663.0397236618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20785.900261062998,
            "unit": "ns/iter",
            "extra": "iterations: 33708\ncpu: 20784.5110952888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 102767.2112903158,
            "unit": "ns/iter",
            "extra": "iterations: 6820\ncpu: 102760.29325513153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 83378.03464286253,
            "unit": "ns/iter",
            "extra": "iterations: 8400\ncpu: 83374.35714285643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 84322.17922484859,
            "unit": "ns/iter",
            "extra": "iterations: 8308\ncpu: 84322.02696196496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 82839.15407355133,
            "unit": "ns/iter",
            "extra": "iterations: 8457\ncpu: 82831.67789996458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 150645.15779261806,
            "unit": "ns/iter",
            "extra": "iterations: 4639\ncpu: 150634.94287562033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 486223.58437935304,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 486209.6234309613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 402557.598044898,
            "unit": "ns/iter",
            "extra": "iterations: 1739\ncpu: 402556.7567567583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 406063.62340675166,
            "unit": "ns/iter",
            "extra": "iterations: 1726\ncpu: 406038.1807647706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 397554.4121659622,
            "unit": "ns/iter",
            "extra": "iterations: 1759\ncpu: 397533.54178510036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 267997.9045976875,
            "unit": "ns/iter",
            "extra": "iterations: 2610\ncpu: 267982.1839080452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 395933.13470317255,
            "unit": "ns/iter",
            "extra": "iterations: 1752\ncpu: 395903.0251141546 ns\nthreads: 1"
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
        "date": 1705774176840,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7141.972523314854,
            "unit": "ns/iter",
            "extra": "iterations: 97792\ncpu: 7141.613833442409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51338.20650000871,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51337.95 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94192.10639465398,
            "unit": "ns/iter",
            "extra": "iterations: 9117\ncpu: 94188.65854996162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 136487.94137221735,
            "unit": "ns/iter",
            "extra": "iterations: 6311\ncpu: 136480.47852955162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 180131.1315022896,
            "unit": "ns/iter",
            "extra": "iterations: 4806\ncpu: 180123.8243861839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 222029.57252885986,
            "unit": "ns/iter",
            "extra": "iterations: 3895\ncpu: 222017.79204107812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 267554.9364885714,
            "unit": "ns/iter",
            "extra": "iterations: 3275\ncpu: 267407.26717557246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 306290.98307475366,
            "unit": "ns/iter",
            "extra": "iterations: 2836\ncpu: 306286.7418899859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 348812.4621848639,
            "unit": "ns/iter",
            "extra": "iterations: 2499\ncpu: 348808.08323329344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5876.517089835664,
            "unit": "ns/iter",
            "extra": "iterations: 118550\ncpu: 5876.392239561362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4931.497712323516,
            "unit": "ns/iter",
            "extra": "iterations: 141847\ncpu: 4931.335875979056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4931.238491808631,
            "unit": "ns/iter",
            "extra": "iterations: 142051\ncpu: 4931.121921000203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4911.633234425707,
            "unit": "ns/iter",
            "extra": "iterations: 142557\ncpu: 4911.441739093833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8685.459927150694,
            "unit": "ns/iter",
            "extra": "iterations: 80441\ncpu: 8685.222709812166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27448.700959524624,
            "unit": "ns/iter",
            "extra": "iterations: 29598\ncpu: 27447.783634029318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 140092.9063010028,
            "unit": "ns/iter",
            "extra": "iterations: 6126\ncpu: 140089.471106758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 107294.99715909331,
            "unit": "ns/iter",
            "extra": "iterations: 8096\ncpu: 107291.63784584984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 107666.46036778402,
            "unit": "ns/iter",
            "extra": "iterations: 7885\ncpu: 107662.49841471146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 102628.6476132975,
            "unit": "ns/iter",
            "extra": "iterations: 8275\ncpu: 102624.96676737159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 308858.1568027191,
            "unit": "ns/iter",
            "extra": "iterations: 2940\ncpu: 308845.85034013574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1718041.9055555966,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1717939.0740740742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1346613.6695652113,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1346524.63768116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1343242.9086957083,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1343163.4782608717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1319800.6269502337,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1319750.2127659589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 736589.2593476322,
            "unit": "ns/iter",
            "extra": "iterations: 1257\ncpu: 736549.5624502797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1291977.1140472253,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1291915.1599443664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36760.87286510172,
            "unit": "ns/iter",
            "extra": "iterations: 22425\ncpu: 36759.21516164991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 166715.62729559423,
            "unit": "ns/iter",
            "extra": "iterations: 5173\ncpu: 166713.125845737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 132220.54303215983,
            "unit": "ns/iter",
            "extra": "iterations: 6530\ncpu: 132213.9509954061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 139833.1325554871,
            "unit": "ns/iter",
            "extra": "iterations: 6171\ncpu: 139828.77977637298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 131771.86908420274,
            "unit": "ns/iter",
            "extra": "iterations: 6508\ncpu: 131768.05470190503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 297771.35097972106,
            "unit": "ns/iter",
            "extra": "iterations: 2909\ncpu: 297759.3331041586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1738486.0863039324,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1738425.7035647235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1372830.6897057926,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1372767.6470588206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1373958.6224189282,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1373882.7433628386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1354693.9373179246,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1354634.9854227419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 765787.2329217726,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 765739.506172841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1321808.6562499888,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1321723.8636363612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6455325.578231385,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 6455118.367346949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2978953.788461543,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2978799.9999999884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24826.487157791224,
            "unit": "ns/iter",
            "extra": "iterations: 33094\ncpu: 24826.22529763704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 133693.68884053404,
            "unit": "ns/iter",
            "extra": "iterations: 6434\ncpu: 133693.09916070904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 101068.89312617727,
            "unit": "ns/iter",
            "extra": "iterations: 8496\ncpu: 101068.32627118661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 101424.38720697587,
            "unit": "ns/iter",
            "extra": "iterations: 8489\ncpu: 101423.98397926745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 98329.46903166597,
            "unit": "ns/iter",
            "extra": "iterations: 8654\ncpu: 98329.45458747423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 267986.67637142335,
            "unit": "ns/iter",
            "extra": "iterations: 3263\ncpu: 267989.15108795615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1715550.5827206073,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1715540.4411764669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1342327.0406385823,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1342326.1248185753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1326349.5599999584,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1326334.7142857132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1312481.6028369856,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1312488.5106383003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 715492.8920585942,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 715496.4533538925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1286435.31249995,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1286434.5833333365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2925.2504634583624,
            "unit": "ns/iter",
            "extra": "iterations: 240043\ncpu: 2925.1946526247516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19278.845519940132,
            "unit": "ns/iter",
            "extra": "iterations: 36283\ncpu: 19278.835818427404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14766.223439047966,
            "unit": "ns/iter",
            "extra": "iterations: 47391\ncpu: 14766.333270030198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13866.063343304628,
            "unit": "ns/iter",
            "extra": "iterations: 50471\ncpu: 13866.172653603142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11222.271484656547,
            "unit": "ns/iter",
            "extra": "iterations: 62405\ncpu: 11222.011056806412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 97058.02110816631,
            "unit": "ns/iter",
            "extra": "iterations: 7201\ncpu: 97058.07526732422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 119431.53659784465,
            "unit": "ns/iter",
            "extra": "iterations: 5861\ncpu: 119432.4859239028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29144.682790542895,
            "unit": "ns/iter",
            "extra": "iterations: 23981\ncpu: 29144.622826404102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29331.169848446505,
            "unit": "ns/iter",
            "extra": "iterations: 23886\ncpu: 29330.787909235627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28929.1264035686,
            "unit": "ns/iter",
            "extra": "iterations: 24224\ncpu: 28928.9093461031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59061.08381918678,
            "unit": "ns/iter",
            "extra": "iterations: 11835\ncpu: 59061.622306717574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53803.53295174018,
            "unit": "ns/iter",
            "extra": "iterations: 12928\ncpu: 53804.0222772279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20111.192560300344,
            "unit": "ns/iter",
            "extra": "iterations: 34867\ncpu: 20111.38325637439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 105147.98756368249,
            "unit": "ns/iter",
            "extra": "iterations: 6674\ncpu: 105146.8984117484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 81777.7211178664,
            "unit": "ns/iter",
            "extra": "iterations: 8552\ncpu: 81776.87090739084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 81925.4393442741,
            "unit": "ns/iter",
            "extra": "iterations: 8540\ncpu: 81925.31615925053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 81443.00081271371,
            "unit": "ns/iter",
            "extra": "iterations: 8613\ncpu: 81443.77104377156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 154473.11444984516,
            "unit": "ns/iter",
            "extra": "iterations: 4526\ncpu: 154474.39239946855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 503951.50503600435,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 503941.87050359976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 411043.6672504621,
            "unit": "ns/iter",
            "extra": "iterations: 1713\ncpu: 411047.343841215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 414606.9840520133,
            "unit": "ns/iter",
            "extra": "iterations: 1693\ncpu: 414606.08387478057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 411640.7601172516,
            "unit": "ns/iter",
            "extra": "iterations: 1705\ncpu: 411639.8240469262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 261043.22856079479,
            "unit": "ns/iter",
            "extra": "iterations: 2682\ncpu: 261038.66517524564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 402813.08745683666,
            "unit": "ns/iter",
            "extra": "iterations: 1738\ncpu: 402816.05293440935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20617.57647301757,
            "unit": "ns/iter",
            "extra": "iterations: 33927\ncpu: 20617.53175936554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 102289.45385514086,
            "unit": "ns/iter",
            "extra": "iterations: 6848\ncpu: 102289.15011682289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 83246.50457843136,
            "unit": "ns/iter",
            "extra": "iterations: 8409\ncpu: 83245.40373409427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 84400.85736659245,
            "unit": "ns/iter",
            "extra": "iterations: 8301\ncpu: 84398.48211058884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 83077.39850338,
            "unit": "ns/iter",
            "extra": "iterations: 8419\ncpu: 83077.3488537831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 149048.6487524106,
            "unit": "ns/iter",
            "extra": "iterations: 4689\ncpu: 149047.8140328442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 496726.2850035412,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 496721.5351812377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 412687.05272401846,
            "unit": "ns/iter",
            "extra": "iterations: 1707\ncpu: 412690.0995899277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 408836.33196721354,
            "unit": "ns/iter",
            "extra": "iterations: 1708\ncpu: 408839.34426229715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 404299.22632792825,
            "unit": "ns/iter",
            "extra": "iterations: 1732\ncpu: 404297.3441108547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 260016.04834507668,
            "unit": "ns/iter",
            "extra": "iterations: 2689\ncpu: 260013.79695053922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 401652.35755481396,
            "unit": "ns/iter",
            "extra": "iterations: 1734\ncpu: 401645.15570933954 ns\nthreads: 1"
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
        "date": 1705777743929,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7131.451441073942,
            "unit": "ns/iter",
            "extra": "iterations: 97809\ncpu: 7131.425533437619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50706.247499999794,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50705.75999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94553.72654215737,
            "unit": "ns/iter",
            "extra": "iterations: 8835\ncpu: 94552.84663271082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 138191.42944496818,
            "unit": "ns/iter",
            "extra": "iterations: 6378\ncpu: 138192.1135152085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 178813.60939404837,
            "unit": "ns/iter",
            "extra": "iterations: 4918\ncpu: 178812.89141927604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 221549.50731585606,
            "unit": "ns/iter",
            "extra": "iterations: 3964\ncpu: 221547.931382442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 263475.2374662254,
            "unit": "ns/iter",
            "extra": "iterations: 3331\ncpu: 263472.83098168735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 310109.6426771992,
            "unit": "ns/iter",
            "extra": "iterations: 2779\ncpu: 310107.0169125584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 358183.9453966072,
            "unit": "ns/iter",
            "extra": "iterations: 2509\ncpu: 358179.9123156636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5706.706892232434,
            "unit": "ns/iter",
            "extra": "iterations: 119758\ncpu: 5706.68347834801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4805.8274416463255,
            "unit": "ns/iter",
            "extra": "iterations: 147892\ncpu: 4805.801530846835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4710.28344913353,
            "unit": "ns/iter",
            "extra": "iterations: 147956\ncpu: 4710.025953661896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4868.48661388726,
            "unit": "ns/iter",
            "extra": "iterations: 142984\ncpu: 4868.155877580706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8438.486408884159,
            "unit": "ns/iter",
            "extra": "iterations: 84283\ncpu: 8438.057496766844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28082.77407765583,
            "unit": "ns/iter",
            "extra": "iterations: 28948\ncpu: 28081.159320160292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 130619.33170357984,
            "unit": "ns/iter",
            "extra": "iterations: 6545\ncpu: 130611.58135981661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103267.86094494551,
            "unit": "ns/iter",
            "extra": "iterations: 8191\ncpu: 103264.24124038543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 101353.62154951194,
            "unit": "ns/iter",
            "extra": "iterations: 8622\ncpu: 101347.57596845264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 94325.59164839982,
            "unit": "ns/iter",
            "extra": "iterations: 8669\ncpu: 94324.93943938176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 303922.4566395622,
            "unit": "ns/iter",
            "extra": "iterations: 2952\ncpu: 303916.12466124684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1683361.3339552989,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1683335.0746268625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1311813.121508351,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1311810.7541899427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1339512.8479880616,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1339503.4277198198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1269882.689847051,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1269866.6203059817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 731375.8999211815,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 731373.758865248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1257329.7826086762,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 1257326.6304347822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35233.809884334805,
            "unit": "ns/iter",
            "extra": "iterations: 23775\ncpu: 35233.71608832807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 160876.41196844648,
            "unit": "ns/iter",
            "extra": "iterations: 5197\ncpu: 160874.31210313604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 129494.92682212306,
            "unit": "ns/iter",
            "extra": "iterations: 6819\ncpu: 129492.3449186098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 134766.6898811309,
            "unit": "ns/iter",
            "extra": "iterations: 6562\ncpu: 134764.18774763803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 125621.36239860667,
            "unit": "ns/iter",
            "extra": "iterations: 6904\ncpu: 125614.5712630357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 284812.7726683834,
            "unit": "ns/iter",
            "extra": "iterations: 3088\ncpu: 284801.6515544031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1724865.9634369886,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1724787.202925045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1357447.4495677645,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1357392.507204611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1385128.9575114013,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1385068.8922610066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1333648.5764376111,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1333599.2987377252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 748473.6255110828,
            "unit": "ns/iter",
            "extra": "iterations: 1223\ncpu: 748436.4677023739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1295762.9904762218,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1295697.8231292565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6123422.62000008,
            "unit": "ns/iter",
            "extra": "iterations: 150\ncpu: 6123070.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2855449.818461798,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2855321.538461536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 22488.074720444252,
            "unit": "ns/iter",
            "extra": "iterations: 36844\ncpu: 22486.77939420249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 126520.1992216742,
            "unit": "ns/iter",
            "extra": "iterations: 6681\ncpu: 126514.32420296382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 95056.87612169224,
            "unit": "ns/iter",
            "extra": "iterations: 9138\ncpu: 95052.48413219523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 94050.47996992314,
            "unit": "ns/iter",
            "extra": "iterations: 9311\ncpu: 94045.76307593219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 90395.8509836667,
            "unit": "ns/iter",
            "extra": "iterations: 9556\ncpu: 90391.29342821299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 273073.718372535,
            "unit": "ns/iter",
            "extra": "iterations: 3146\ncpu: 273058.5823267637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1682698.2629629162,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1682610.5555555546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1352908.7819767871,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1352845.7848837154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1325780.039886102,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1325707.6923076897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1286473.2369146275,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1286412.2589531704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 718956.3419607272,
            "unit": "ns/iter",
            "extra": "iterations: 1275\ncpu: 718926.6666666676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1262261.62499994,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 1262209.5430107526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2757.203560622538,
            "unit": "ns/iter",
            "extra": "iterations: 253158\ncpu: 2757.0007663198476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18524.019037223596,
            "unit": "ns/iter",
            "extra": "iterations: 37558\ncpu: 18522.855317109676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14033.157984804575,
            "unit": "ns/iter",
            "extra": "iterations: 49087\ncpu: 14032.067553527422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14541.920395442357,
            "unit": "ns/iter",
            "extra": "iterations: 48452\ncpu: 14541.304796499537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10981.407019480717,
            "unit": "ns/iter",
            "extra": "iterations: 63395\ncpu: 10981.167284486071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 95325.2150808445,
            "unit": "ns/iter",
            "extra": "iterations: 7546\ncpu: 95323.68142062033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 116708.06455498631,
            "unit": "ns/iter",
            "extra": "iterations: 5809\ncpu: 116697.3661559648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28956.90195213736,
            "unit": "ns/iter",
            "extra": "iterations: 24947\ncpu: 28955.56579949499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28883.812725235806,
            "unit": "ns/iter",
            "extra": "iterations: 24141\ncpu: 28882.05956671225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28159.703788476556,
            "unit": "ns/iter",
            "extra": "iterations: 25340\ncpu: 28158.216258879384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59279.72878479698,
            "unit": "ns/iter",
            "extra": "iterations: 11784\ncpu: 59276.96877121518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52629.47024823938,
            "unit": "ns/iter",
            "extra": "iterations: 13495\ncpu: 52625.86143015986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 18871.312554182063,
            "unit": "ns/iter",
            "extra": "iterations: 36912\ncpu: 18870.22377546579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 95866.23390293593,
            "unit": "ns/iter",
            "extra": "iterations: 7315\ncpu: 95863.39029391656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 77777.39403973118,
            "unit": "ns/iter",
            "extra": "iterations: 8758\ncpu: 77777.11806348524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 79682.95488038979,
            "unit": "ns/iter",
            "extra": "iterations: 8821\ncpu: 79678.75524317022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 75724.74397985692,
            "unit": "ns/iter",
            "extra": "iterations: 9136\ncpu: 75720.74211908926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 144673.49495366195,
            "unit": "ns/iter",
            "extra": "iterations: 4855\ncpu: 144667.37384139915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 491640.70490669075,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 491602.2114720051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 401141.6273611527,
            "unit": "ns/iter",
            "extra": "iterations: 1747\ncpu: 401111.96336577693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 405399.89382574253,
            "unit": "ns/iter",
            "extra": "iterations: 1733\ncpu: 405386.49740334396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 396721.6487414399,
            "unit": "ns/iter",
            "extra": "iterations: 1748\ncpu: 396716.8192219675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 261239.74429728132,
            "unit": "ns/iter",
            "extra": "iterations: 2718\ncpu: 261238.63134657775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 391486.6530160594,
            "unit": "ns/iter",
            "extra": "iterations: 1807\ncpu: 391488.4338682869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20079.58478304139,
            "unit": "ns/iter",
            "extra": "iterations: 35237\ncpu: 20079.45341544394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 101213.47416074706,
            "unit": "ns/iter",
            "extra": "iterations: 7179\ncpu: 101211.38041509951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 79159.0860063411,
            "unit": "ns/iter",
            "extra": "iterations: 8511\ncpu: 79157.22006814728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 83031.34841061966,
            "unit": "ns/iter",
            "extra": "iterations: 8777\ncpu: 82947.45357183566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 79965.40807865994,
            "unit": "ns/iter",
            "extra": "iterations: 8442\ncpu: 79963.93034825861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 141825.0000000013,
            "unit": "ns/iter",
            "extra": "iterations: 4795\ncpu: 141824.400417101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 480915.1272974731,
            "unit": "ns/iter",
            "extra": "iterations: 1469\ncpu: 480913.54663035244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 403143.6387133719,
            "unit": "ns/iter",
            "extra": "iterations: 1741\ncpu: 403146.06547961326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 394829.30118443567,
            "unit": "ns/iter",
            "extra": "iterations: 1773\ncpu: 394828.3699943674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 397859.9678161531,
            "unit": "ns/iter",
            "extra": "iterations: 1740\ncpu: 397853.3908045965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 252461.41693577784,
            "unit": "ns/iter",
            "extra": "iterations: 2787\ncpu: 252458.34230355098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 401049.3742365066,
            "unit": "ns/iter",
            "extra": "iterations: 1801\ncpu: 401047.14047751407 ns\nthreads: 1"
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
        "date": 1705952942636,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7118.534025200101,
            "unit": "ns/iter",
            "extra": "iterations: 99441\ncpu: 7118.125320541829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50243.20429999989,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50242.02999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94490.95076290087,
            "unit": "ns/iter",
            "extra": "iterations: 9241\ncpu: 94487.01439238177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 135727.00775808407,
            "unit": "ns/iter",
            "extra": "iterations: 6316\ncpu: 135724.8258391387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 179129.66673525298,
            "unit": "ns/iter",
            "extra": "iterations: 4861\ncpu: 179129.27381197285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 220815.97167644638,
            "unit": "ns/iter",
            "extra": "iterations: 3919\ncpu: 220811.63562133207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 263196.55916261324,
            "unit": "ns/iter",
            "extra": "iterations: 3296\ncpu: 263194.84223300964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 303131.6172148367,
            "unit": "ns/iter",
            "extra": "iterations: 2858\ncpu: 303126.3121063679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 342792.27129335364,
            "unit": "ns/iter",
            "extra": "iterations: 2536\ncpu: 342775.2760252365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5986.0404497452655,
            "unit": "ns/iter",
            "extra": "iterations: 117133\ncpu: 5985.8588100706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4925.58788961838,
            "unit": "ns/iter",
            "extra": "iterations: 141581\ncpu: 4925.49070849902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4858.860267449734,
            "unit": "ns/iter",
            "extra": "iterations: 143653\ncpu: 4858.8682450070655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4879.966168563571,
            "unit": "ns/iter",
            "extra": "iterations: 143210\ncpu: 4879.851267369601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8803.88225468189,
            "unit": "ns/iter",
            "extra": "iterations: 79621\ncpu: 8803.921076098015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27247.860593674865,
            "unit": "ns/iter",
            "extra": "iterations: 29848\ncpu: 27247.262798177435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 134665.59557785478,
            "unit": "ns/iter",
            "extra": "iterations: 6377\ncpu: 134666.3634938058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103901.89583844204,
            "unit": "ns/iter",
            "extra": "iterations: 8170\ncpu: 103897.22154222755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 103300.49854652186,
            "unit": "ns/iter",
            "extra": "iterations: 8256\ncpu: 103298.80087209275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98738.09597019292,
            "unit": "ns/iter",
            "extra": "iterations: 8586\ncpu: 98736.72257162859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 308935.16146538715,
            "unit": "ns/iter",
            "extra": "iterations: 2948\ncpu: 308922.96472184616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1698752.612844079,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1698677.6146789028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1328952.573257437,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1328896.0170697009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1323494.4786932475,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1323425.568181819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1300886.8417367595,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 1300842.8571428554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 753532.19983614,
            "unit": "ns/iter",
            "extra": "iterations: 1221\ncpu: 753479.7706797693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1278117.3587258046,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1278068.1440443222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32647.887542974364,
            "unit": "ns/iter",
            "extra": "iterations: 25014\ncpu: 32646.837770848382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 165989.50604722046,
            "unit": "ns/iter",
            "extra": "iterations: 5209\ncpu: 165977.73085045078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 129369.57216339075,
            "unit": "ns/iter",
            "extra": "iterations: 6610\ncpu: 129364.99243570326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 135628.60763069932,
            "unit": "ns/iter",
            "extra": "iterations: 6369\ncpu: 135626.3777673103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 127745.26716528783,
            "unit": "ns/iter",
            "extra": "iterations: 6685\ncpu: 127742.90201944677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 278482.71851854696,
            "unit": "ns/iter",
            "extra": "iterations: 3105\ncpu: 278478.1320450888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1696008.0455373744,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1695982.331511849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1375838.1310751028,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1375806.0382916054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1365981.6057972184,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1365324.9275362324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1326181.8252148363,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1326137.249283672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 776852.6040269348,
            "unit": "ns/iter",
            "extra": "iterations: 1192\ncpu: 776831.1241610728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1312079.5860139516,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1312011.7482517455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6417904.9517241735,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 6417613.103448322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3049941.1672131885,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3049784.262295103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24280.953884919974,
            "unit": "ns/iter",
            "extra": "iterations: 34132\ncpu: 24280.361537560068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 129916.13331285198,
            "unit": "ns/iter",
            "extra": "iterations: 6511\ncpu: 129911.41145753348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 98049.77900298394,
            "unit": "ns/iter",
            "extra": "iterations: 8706\ncpu: 98045.03790489341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 96001.42890729984,
            "unit": "ns/iter",
            "extra": "iterations: 8932\ncpu: 95996.78683385579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 93868.86085424996,
            "unit": "ns/iter",
            "extra": "iterations: 9084\ncpu: 93866.2593571112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 271942.6849358026,
            "unit": "ns/iter",
            "extra": "iterations: 3193\ncpu: 271929.47071719536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1695031.9893048427,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1694940.8199643467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1330218.2094691582,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1330158.3931133426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1302512.4206127527,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1302474.3732590505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1270119.096730156,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 1270099.727520443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 733732.4406912704,
            "unit": "ns/iter",
            "extra": "iterations: 1273\ncpu: 733706.6771406116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1261866.6657645882,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 1261817.1853856612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2961.2452063857468,
            "unit": "ns/iter",
            "extra": "iterations: 237347\ncpu: 2961.207851795053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18719.968312792847,
            "unit": "ns/iter",
            "extra": "iterations: 37239\ncpu: 18720.054244206407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14073.359981496124,
            "unit": "ns/iter",
            "extra": "iterations: 49722\ncpu: 14072.923454406608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15584.895407366343,
            "unit": "ns/iter",
            "extra": "iterations: 44898\ncpu: 15584.124014432622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11108.135704540691,
            "unit": "ns/iter",
            "extra": "iterations: 63034\ncpu: 11107.56893105314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 98317.03556368931,
            "unit": "ns/iter",
            "extra": "iterations: 7114\ncpu: 98312.63705369712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 117430.70887772106,
            "unit": "ns/iter",
            "extra": "iterations: 5970\ncpu: 117428.81072026718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28816.91338550269,
            "unit": "ns/iter",
            "extra": "iterations: 24407\ncpu: 28815.581595443917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29001.413225539447,
            "unit": "ns/iter",
            "extra": "iterations: 24120\ncpu: 29000.50165837481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27811.606841663786,
            "unit": "ns/iter",
            "extra": "iterations: 25257\ncpu: 27810.52777447833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 57801.98640296608,
            "unit": "ns/iter",
            "extra": "iterations: 12135\ncpu: 57802.24969097697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53362.98957620569,
            "unit": "ns/iter",
            "extra": "iterations: 13143\ncpu: 53360.24499733699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20611.78404474563,
            "unit": "ns/iter",
            "extra": "iterations: 33970\ncpu: 20611.003826906228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101072.41651006126,
            "unit": "ns/iter",
            "extra": "iterations: 6917\ncpu: 101069.33641752267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 80196.44289150948,
            "unit": "ns/iter",
            "extra": "iterations: 8729\ncpu: 80192.46190858092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 80366.99126034118,
            "unit": "ns/iter",
            "extra": "iterations: 8696\ncpu: 80366.75482980661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 79454.0298626132,
            "unit": "ns/iter",
            "extra": "iterations: 8807\ncpu: 79451.16384694027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 153098.67154398907,
            "unit": "ns/iter",
            "extra": "iterations: 4579\ncpu: 153097.53221227395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 490428.3182780225,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 490414.396612566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 407741.86329259677,
            "unit": "ns/iter",
            "extra": "iterations: 1719\ncpu: 407740.4886561926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 406279.2398609425,
            "unit": "ns/iter",
            "extra": "iterations: 1726\ncpu: 406273.8702201631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 399640.4812287034,
            "unit": "ns/iter",
            "extra": "iterations: 1758\ncpu: 399632.2525597232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 262138.85162981832,
            "unit": "ns/iter",
            "extra": "iterations: 2669\ncpu: 262127.35106781294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 395334.6808390498,
            "unit": "ns/iter",
            "extra": "iterations: 1764\ncpu: 395311.5646258522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20610.23834564126,
            "unit": "ns/iter",
            "extra": "iterations: 33850\ncpu: 20609.051698670643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 100404.87141616242,
            "unit": "ns/iter",
            "extra": "iterations: 6906\ncpu: 100402.22994497442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 81124.00951827405,
            "unit": "ns/iter",
            "extra": "iterations: 8615\ncpu: 81120.51073708672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 83195.1306520723,
            "unit": "ns/iter",
            "extra": "iterations: 8404\ncpu: 83195.44264635866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 81698.1393691636,
            "unit": "ns/iter",
            "extra": "iterations: 8560\ncpu: 81691.93925233577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 152087.04322329134,
            "unit": "ns/iter",
            "extra": "iterations: 4604\ncpu: 152076.23805386605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 487136.75226160453,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 487121.08559499396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 396430.7909348362,
            "unit": "ns/iter",
            "extra": "iterations: 1765\ncpu: 396431.78470255545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 397364.24081404245,
            "unit": "ns/iter",
            "extra": "iterations: 1769\ncpu: 397344.7710570933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 391548.3761877861,
            "unit": "ns/iter",
            "extra": "iterations: 1789\ncpu: 391540.46953605226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 256829.59860448792,
            "unit": "ns/iter",
            "extra": "iterations: 2723\ncpu: 256817.7745134082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 390954.67957356875,
            "unit": "ns/iter",
            "extra": "iterations: 1782\ncpu: 390945.342312004 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}