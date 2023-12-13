window.BENCHMARK_DATA = {
  "lastUpdate": 1702489624262,
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
      }
    ]
  }
}