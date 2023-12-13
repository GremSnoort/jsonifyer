window.BENCHMARK_DATA = {
  "lastUpdate": 1702493610816,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-14 22.04 Release c++-17": [
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
        "date": 1702490992465,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1403.2023592544576,
            "unit": "ns/iter",
            "extra": "iterations: 502023\ncpu: 1403.1570266700928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16899.738416869637,
            "unit": "ns/iter",
            "extra": "iterations: 48562\ncpu: 16899.386351468227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35194.04751693725,
            "unit": "ns/iter",
            "extra": "iterations: 23318\ncpu: 35192.34068101896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52556.75608383031,
            "unit": "ns/iter",
            "extra": "iterations: 15985\ncpu: 52552.0800750704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58302.74820000341,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58300.86000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 73319.4031523939,
            "unit": "ns/iter",
            "extra": "iterations: 11864\ncpu: 73314.86850977753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 87918.44334523745,
            "unit": "ns/iter",
            "extra": "iterations: 9805\ncpu: 87911.61652218256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 101926.70672146759,
            "unit": "ns/iter",
            "extra": "iterations: 8272\ncpu: 101922.87234042549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 118643.47092942143,
            "unit": "ns/iter",
            "extra": "iterations: 7241\ncpu: 118630.90733324128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1279.1552199185412,
            "unit": "ns/iter",
            "extra": "iterations: 546225\ncpu: 1279.0606435077107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1056.3380813696397,
            "unit": "ns/iter",
            "extra": "iterations: 667153\ncpu: 1056.226382853707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1030.4302122310203,
            "unit": "ns/iter",
            "extra": "iterations: 676150\ncpu: 1030.4135177105663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1020.7096516686378,
            "unit": "ns/iter",
            "extra": "iterations: 683975\ncpu: 1020.6988559523372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2025.022858626812,
            "unit": "ns/iter",
            "extra": "iterations: 346565\ncpu: 2024.9326966081405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5614.701619999778,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5614.347000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30256.731735783032,
            "unit": "ns/iter",
            "extra": "iterations: 27417\ncpu: 30254.130648867533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23991.46597607148,
            "unit": "ns/iter",
            "extra": "iterations: 34270\ncpu: 23989.903705865192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23813.174258338506,
            "unit": "ns/iter",
            "extra": "iterations: 34753\ncpu: 23811.224930221902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23740.83722072903,
            "unit": "ns/iter",
            "extra": "iterations: 34599\ncpu: 23739.284372380684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65712.26426761814,
            "unit": "ns/iter",
            "extra": "iterations: 13422\ncpu: 65707.39085084174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 595327.766999958,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595284.4000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 601594.2543312454,
            "unit": "ns/iter",
            "extra": "iterations: 1443\ncpu: 601532.4324324318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 605291.5937281941,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 605258.1184669004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 604235.5777003412,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 604209.059233449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 345954.41666664433,
            "unit": "ns/iter",
            "extra": "iterations: 2496\ncpu: 345925.5208333328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 593873.5786941639,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 593864.4673539511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2539198.2309782715,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2539148.369565215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1150580.9133663012,
            "unit": "ns/iter",
            "extra": "iterations: 808\ncpu: 1150549.133663366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3395926.1208791,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3395742.4908424895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8823.034443957466,
            "unit": "ns/iter",
            "extra": "iterations: 95982\ncpu: 8822.902210831213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 48607.34046293696,
            "unit": "ns/iter",
            "extra": "iterations: 17065\ncpu: 48606.686199824275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38052.40573714353,
            "unit": "ns/iter",
            "extra": "iterations: 21997\ncpu: 38051.37973360007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37900.61648810378,
            "unit": "ns/iter",
            "extra": "iterations: 22028\ncpu: 37899.77301616145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38247.03200510248,
            "unit": "ns/iter",
            "extra": "iterations: 21934\ncpu: 38246.11106045416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78516.8149446473,
            "unit": "ns/iter",
            "extra": "iterations: 10840\ncpu: 78515.42435424366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 636741.1410000159,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 636731.6999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 514059.360000033,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514024.4999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 507187.3649999361,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507180.6999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 504668.00000003783,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504649.4999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 367113.49230126827,
            "unit": "ns/iter",
            "extra": "iterations: 2403\ncpu: 367110.77819392335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 624174.2489362342,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 624165.8156028406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2729095.3918129047,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2728990.9356725123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1189918.1643312445,
            "unit": "ns/iter",
            "extra": "iterations: 785\ncpu: 1189887.006369431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5537.482590000309,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5537.386000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29989.887634291463,
            "unit": "ns/iter",
            "extra": "iterations: 27366\ncpu: 29989.644083899657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23656.35320629848,
            "unit": "ns/iter",
            "extra": "iterations: 35056\ncpu: 23655.86204929265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23387.3361134514,
            "unit": "ns/iter",
            "extra": "iterations: 35610\ncpu: 23387.284470654253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23648.952772190758,
            "unit": "ns/iter",
            "extra": "iterations: 34810\ncpu: 23648.454467107036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64449.02130512413,
            "unit": "ns/iter",
            "extra": "iterations: 13424\ncpu: 64447.68325387361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 617643.3440000437,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 617613.7000000068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 610613.1695988205,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 610608.3040112586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 612841.7565094648,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 612827.726952849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 611343.5665266456,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 611331.0924369752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 352655.92276907724,
            "unit": "ns/iter",
            "extra": "iterations: 2499\ncpu: 352652.98119247763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 602333.5590659395,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 602329.9450549444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 557.6692021392313,
            "unit": "ns/iter",
            "extra": "iterations: 1254467\ncpu: 557.6623378693931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3350.1686933935257,
            "unit": "ns/iter",
            "extra": "iterations: 209451\ncpu: 3350.138218485454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2495.8944535405735,
            "unit": "ns/iter",
            "extra": "iterations: 280341\ncpu: 2495.816166739778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2592.36594001445,
            "unit": "ns/iter",
            "extra": "iterations: 269730\ncpu: 2592.3416008601134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2102.482959733061,
            "unit": "ns/iter",
            "extra": "iterations: 332976\ncpu: 2102.4368122627397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17794.41136664346,
            "unit": "ns/iter",
            "extra": "iterations: 39308\ncpu: 17794.074997455988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32826.23085574972,
            "unit": "ns/iter",
            "extra": "iterations: 21338\ncpu: 32826.02868122599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7797.647921569714,
            "unit": "ns/iter",
            "extra": "iterations: 90068\ncpu: 7797.545188080152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7775.635504365118,
            "unit": "ns/iter",
            "extra": "iterations: 90034\ncpu: 7775.461492325068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7794.492892898396,
            "unit": "ns/iter",
            "extra": "iterations: 89699\ncpu: 7794.293135932355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14749.967726977298,
            "unit": "ns/iter",
            "extra": "iterations: 47439\ncpu: 14749.596323699914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14688.11812593169,
            "unit": "ns/iter",
            "extra": "iterations: 47661\ncpu: 14687.706930194656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4510.953822773377,
            "unit": "ns/iter",
            "extra": "iterations: 155293\ncpu: 4510.917427057268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22707.165845597916,
            "unit": "ns/iter",
            "extra": "iterations: 30854\ncpu: 22706.517793479117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18108.4204842005,
            "unit": "ns/iter",
            "extra": "iterations: 38703\ncpu: 18108.255174017548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18232.864226098525,
            "unit": "ns/iter",
            "extra": "iterations: 38461\ncpu: 18232.703257845787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18550.233616116413,
            "unit": "ns/iter",
            "extra": "iterations: 37720\ncpu: 18550.05302226938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46609.99827161981,
            "unit": "ns/iter",
            "extra": "iterations: 15043\ncpu: 46608.85461676546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159137.59200001162,
            "unit": "ns/iter",
            "extra": "iterations: 4375\ncpu: 159135.56571428475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132817.61522439518,
            "unit": "ns/iter",
            "extra": "iterations: 5281\ncpu: 132814.67525089753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132865.03037205228,
            "unit": "ns/iter",
            "extra": "iterations: 5268\ncpu: 132862.68033409238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132289.06918001786,
            "unit": "ns/iter",
            "extra": "iterations: 5305\ncpu: 132284.2789820915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82649.90902655112,
            "unit": "ns/iter",
            "extra": "iterations: 8475\ncpu: 82647.81120943818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134190.09856733028,
            "unit": "ns/iter",
            "extra": "iterations: 5235\ncpu: 134188.63419293228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4416.100159990063,
            "unit": "ns/iter",
            "extra": "iterations: 159385\ncpu: 4415.944411331018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 21745.4815205281,
            "unit": "ns/iter",
            "extra": "iterations: 32252\ncpu: 21745.04216792761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17749.29050307506,
            "unit": "ns/iter",
            "extra": "iterations: 39497\ncpu: 17748.78345190757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17494.07283518336,
            "unit": "ns/iter",
            "extra": "iterations: 40269\ncpu: 17493.948198365968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17926.214604493554,
            "unit": "ns/iter",
            "extra": "iterations: 38988\ncpu: 17926.054170513806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44825.19035435794,
            "unit": "ns/iter",
            "extra": "iterations: 15634\ncpu: 44824.7665344763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156060.27157472275,
            "unit": "ns/iter",
            "extra": "iterations: 4496\ncpu: 156058.91903914613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129616.88995746351,
            "unit": "ns/iter",
            "extra": "iterations: 5407\ncpu: 129615.2579988903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129991.06674083734,
            "unit": "ns/iter",
            "extra": "iterations: 5394\ncpu: 129989.69225064816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130079.79509111478,
            "unit": "ns/iter",
            "extra": "iterations: 5378\ncpu: 130078.83971736617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80982.53483773941,
            "unit": "ns/iter",
            "extra": "iterations: 8597\ncpu: 80980.0395486803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130952.08739495525,
            "unit": "ns/iter",
            "extra": "iterations: 5355\ncpu: 130945.71428571497 ns\nthreads: 1"
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
        "date": 1702493607007,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1443.783755114633,
            "unit": "ns/iter",
            "extra": "iterations: 515670\ncpu: 1443.8078616169257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16761.63337615151,
            "unit": "ns/iter",
            "extra": "iterations: 46710\ncpu: 16761.907514450868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35563.898474103305,
            "unit": "ns/iter",
            "extra": "iterations: 23265\ncpu: 35564.48312916399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52923.27864843949,
            "unit": "ns/iter",
            "extra": "iterations: 15952\ncpu: 52924.12236710132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 59277.21450000262,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59277.270000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 76737.24675762393,
            "unit": "ns/iter",
            "extra": "iterations: 11874\ncpu: 76736.44938521138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 88498.3293913772,
            "unit": "ns/iter",
            "extra": "iterations: 9809\ncpu: 88498.62371291674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 102826.77351383166,
            "unit": "ns/iter",
            "extra": "iterations: 8495\ncpu: 102826.1330194232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 120283.73091868435,
            "unit": "ns/iter",
            "extra": "iterations: 7206\ncpu: 120281.84845961684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1225.5997165986162,
            "unit": "ns/iter",
            "extra": "iterations: 570216\ncpu: 1225.5855675743937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1006.5675439235864,
            "unit": "ns/iter",
            "extra": "iterations: 700707\ncpu: 1006.5709347844391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1003.594739456718,
            "unit": "ns/iter",
            "extra": "iterations: 696468\ncpu: 1003.6112211903484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 995.0173982931345,
            "unit": "ns/iter",
            "extra": "iterations: 699264\ncpu: 995.0337783726886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2027.4177029106465,
            "unit": "ns/iter",
            "extra": "iterations: 345559\ncpu: 2027.3993731895293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5606.104969999706,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5606.013000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30456.097202205437,
            "unit": "ns/iter",
            "extra": "iterations: 27057\ncpu: 30456.295967771763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23661.22238463694,
            "unit": "ns/iter",
            "extra": "iterations: 34890\ncpu: 23661.33562625391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23946.58941838996,
            "unit": "ns/iter",
            "extra": "iterations: 34456\ncpu: 23946.334455537493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23934.14388238159,
            "unit": "ns/iter",
            "extra": "iterations: 34417\ncpu: 23933.954150565074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65449.33264325825,
            "unit": "ns/iter",
            "extra": "iterations: 13525\ncpu: 65449.722735674666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 612153.2770000612,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 612097.6999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 606072.5177699977,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 606043.832752614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 608995.9576570516,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 608944.7424135491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 611189.8310055941,
            "unit": "ns/iter",
            "extra": "iterations: 1432\ncpu: 611158.5195530722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 348616.80256821995,
            "unit": "ns/iter",
            "extra": "iterations: 2492\ncpu: 348597.07062600314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 601092.1527297726,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 601037.0421561863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2550978.5726025295,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2550850.9589041057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1143559.0853960381,
            "unit": "ns/iter",
            "extra": "iterations: 808\ncpu: 1143450.8663366346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3410140.9597066375,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3409882.0512820524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8982.165631051297,
            "unit": "ns/iter",
            "extra": "iterations: 93986\ncpu: 8981.3993573511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 48256.955780532124,
            "unit": "ns/iter",
            "extra": "iterations: 17187\ncpu: 48255.05905626353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37989.83633158322,
            "unit": "ns/iter",
            "extra": "iterations: 22124\ncpu: 37989.91592840372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37768.576726575404,
            "unit": "ns/iter",
            "extra": "iterations: 21922\ncpu: 37765.96569656053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38129.12863202891,
            "unit": "ns/iter",
            "extra": "iterations: 21923\ncpu: 38127.72886922407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 80341.27868547844,
            "unit": "ns/iter",
            "extra": "iterations: 10772\ncpu: 80333.33642777576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 639540.1710000215,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 639536.2999999961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 512028.85200007126,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511990.5999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 509340.6599999071,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509292.09999999614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 506833.81500005,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506842.6000000059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 368117.8598564561,
            "unit": "ns/iter",
            "extra": "iterations: 2369\ncpu: 368104.89658083755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 505063.9549999687,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504975.5999999945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2707973.7354652975,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2707802.034883731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1160915.1359102,
            "unit": "ns/iter",
            "extra": "iterations: 802\ncpu: 1160812.4688279293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5440.535339999997,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5438.412000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29782.862322784622,
            "unit": "ns/iter",
            "extra": "iterations: 27579\ncpu: 29779.846985024964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23436.958047335545,
            "unit": "ns/iter",
            "extra": "iterations: 35111\ncpu: 23435.644100139467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23205.097889269273,
            "unit": "ns/iter",
            "extra": "iterations: 35438\ncpu: 23203.10683447132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23385.70284560941,
            "unit": "ns/iter",
            "extra": "iterations: 35177\ncpu: 23383.82465815741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64543.730171648735,
            "unit": "ns/iter",
            "extra": "iterations: 13516\ncpu: 64537.75525303382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 615712.5119999591,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 615700.5999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 618329.477192993,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 618273.6842105304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 615430.4427266192,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 615406.5354884043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 612282.2433936152,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 612265.3685674551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 353716.9269685872,
            "unit": "ns/iter",
            "extra": "iterations: 2451\ncpu: 353722.1950224409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 606262.465696465,
            "unit": "ns/iter",
            "extra": "iterations: 1443\ncpu: 606255.9944559952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 559.171330293179,
            "unit": "ns/iter",
            "extra": "iterations: 1254746\ncpu: 559.1741276720561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3334.2600676221614,
            "unit": "ns/iter",
            "extra": "iterations: 207919\ncpu: 3334.1051082392587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2496.7451002136386,
            "unit": "ns/iter",
            "extra": "iterations: 279553\ncpu: 2496.5870514714384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2491.5420435833566,
            "unit": "ns/iter",
            "extra": "iterations: 280566\ncpu: 2491.412359302266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2101.8484625965984,
            "unit": "ns/iter",
            "extra": "iterations: 333647\ncpu: 2101.6967034020945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17538.892117435782,
            "unit": "ns/iter",
            "extra": "iterations: 39784\ncpu: 17537.776493062596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32710.71861856059,
            "unit": "ns/iter",
            "extra": "iterations: 21398\ncpu: 32710.8374614448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7740.787776734715,
            "unit": "ns/iter",
            "extra": "iterations: 90565\ncpu: 7740.823717771729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7722.033190766787,
            "unit": "ns/iter",
            "extra": "iterations: 90718\ncpu: 7715.91415154646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7710.43715558573,
            "unit": "ns/iter",
            "extra": "iterations: 90915\ncpu: 7710.041247318975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15380.029793314869,
            "unit": "ns/iter",
            "extra": "iterations: 45480\ncpu: 15379.544854881276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14688.032946265024,
            "unit": "ns/iter",
            "extra": "iterations: 47623\ncpu: 14686.897087541536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4481.5060880663805,
            "unit": "ns/iter",
            "extra": "iterations: 156700\ncpu: 4481.223356732626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22682.663246421154,
            "unit": "ns/iter",
            "extra": "iterations: 30797\ncpu: 22680.715654122178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18223.4617229892,
            "unit": "ns/iter",
            "extra": "iterations: 38352\ncpu: 18222.601168127047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18167.7547982159,
            "unit": "ns/iter",
            "extra": "iterations: 38556\ncpu: 18166.35283743114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18637.181591180004,
            "unit": "ns/iter",
            "extra": "iterations: 37645\ncpu: 18636.278390224754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 45910.50108431516,
            "unit": "ns/iter",
            "extra": "iterations: 15217\ncpu: 45906.565025958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160961.37525867965,
            "unit": "ns/iter",
            "extra": "iterations: 4349\ncpu: 160949.62060243718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134569.40000000343,
            "unit": "ns/iter",
            "extra": "iterations: 5205\ncpu: 134557.9058597507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133647.66488344534,
            "unit": "ns/iter",
            "extra": "iterations: 5234\ncpu: 133644.1727168507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133195.84872185465,
            "unit": "ns/iter",
            "extra": "iterations: 5242\ncpu: 133192.36932468356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82370.61478782177,
            "unit": "ns/iter",
            "extra": "iterations: 8507\ncpu: 82370.38909133624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133581.91349810548,
            "unit": "ns/iter",
            "extra": "iterations: 5260\ncpu: 133576.46387832513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4375.777489981192,
            "unit": "ns/iter",
            "extra": "iterations: 159449\ncpu: 4375.850585453691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 22023.809346971928,
            "unit": "ns/iter",
            "extra": "iterations: 31775\ncpu: 22022.958300550465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17679.783686866922,
            "unit": "ns/iter",
            "extra": "iterations: 39600\ncpu: 17678.459595959703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17544.997013501954,
            "unit": "ns/iter",
            "extra": "iterations: 39846\ncpu: 17544.11735180448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 18038.129257820805,
            "unit": "ns/iter",
            "extra": "iterations: 38899\ncpu: 18036.869842412496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44796.61714358567,
            "unit": "ns/iter",
            "extra": "iterations: 15656\ncpu: 44794.379151762805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 159839.33683251162,
            "unit": "ns/iter",
            "extra": "iterations: 4382\ncpu: 159827.45321770865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130498.38183173758,
            "unit": "ns/iter",
            "extra": "iterations: 5361\ncpu: 130491.28893862951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 130372.08592152385,
            "unit": "ns/iter",
            "extra": "iterations: 5377\ncpu: 130362.00483541079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130768.57287185335,
            "unit": "ns/iter",
            "extra": "iterations: 5345\ncpu: 130770.6641721249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81423.5953958869,
            "unit": "ns/iter",
            "extra": "iterations: 8601\ncpu: 81423.81118474505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 131133.05271026632,
            "unit": "ns/iter",
            "extra": "iterations: 5350\ncpu: 131126.22429906545 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}