window.BENCHMARK_DATA = {
  "lastUpdate": 1705960641469,
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
        "date": 1702504653110,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1402.0000643054307,
            "unit": "ns/iter",
            "extra": "iterations: 497625\ncpu: 1402.0099472494348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16594.232580517797,
            "unit": "ns/iter",
            "extra": "iterations: 48839\ncpu: 16594.21364073794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35380.08997615425,
            "unit": "ns/iter",
            "extra": "iterations: 23484\ncpu: 35379.7819792199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52006.19324868525,
            "unit": "ns/iter",
            "extra": "iterations: 16145\ncpu: 52004.77547228243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58171.13680000148,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58170.239999999925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72962.36404457409,
            "unit": "ns/iter",
            "extra": "iterations: 12026\ncpu: 72960.66855147186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 86670.53632178325,
            "unit": "ns/iter",
            "extra": "iterations: 9994\ncpu: 86667.66059635782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 102516.58784568383,
            "unit": "ns/iter",
            "extra": "iterations: 8606\ncpu: 102510.72507552871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 118401.13156811724,
            "unit": "ns/iter",
            "extra": "iterations: 7289\ncpu: 118396.47413911372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1204.0760992040305,
            "unit": "ns/iter",
            "extra": "iterations: 575985\ncpu: 1204.0063543321432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1008.3169115053006,
            "unit": "ns/iter",
            "extra": "iterations: 691884\ncpu: 1008.268727127668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 989.951689361012,
            "unit": "ns/iter",
            "extra": "iterations: 707960\ncpu: 989.8951918187477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 974.6331275981372,
            "unit": "ns/iter",
            "extra": "iterations: 716617\ncpu: 974.6047051632858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1977.2614152284725,
            "unit": "ns/iter",
            "extra": "iterations: 354176\ncpu: 1977.238435128298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5592.076049999832,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5592.005999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30304.143095276206,
            "unit": "ns/iter",
            "extra": "iterations: 26996\ncpu: 30303.845014076174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23946.71755568384,
            "unit": "ns/iter",
            "extra": "iterations: 34120\ncpu: 23946.52696365769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23662.673375952076,
            "unit": "ns/iter",
            "extra": "iterations: 34728\ncpu: 23662.40785533289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23888.67900052223,
            "unit": "ns/iter",
            "extra": "iterations: 34458\ncpu: 23887.88670265248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64742.10197030302,
            "unit": "ns/iter",
            "extra": "iterations: 13602\ncpu: 64740.85428613442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 606422.2419998941,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 606385.1000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 602380.1417808195,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 602368.7671232881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 604396.8657025148,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 604374.6556473839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 504685.7109999791,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504681.39999999903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 351418.5461879591,
            "unit": "ns/iter",
            "extra": "iterations: 2479\ncpu: 351411.29487696715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 595812.8713007328,
            "unit": "ns/iter",
            "extra": "iterations: 1453\ncpu: 595777.6324845139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2535351.3460491216,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2535239.2370572165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1127067.04854373,
            "unit": "ns/iter",
            "extra": "iterations: 824\ncpu: 1126992.7184466019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3370825.047619165,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3370708.7912087897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8927.638384909607,
            "unit": "ns/iter",
            "extra": "iterations: 94360\ncpu: 8927.02204323864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 47964.72908483427,
            "unit": "ns/iter",
            "extra": "iterations: 17057\ncpu: 47963.63956147022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38008.68624681169,
            "unit": "ns/iter",
            "extra": "iterations: 21944\ncpu: 38007.555596062746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37850.31476537487,
            "unit": "ns/iter",
            "extra": "iterations: 22099\ncpu: 37848.264627358745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38250.54214164728,
            "unit": "ns/iter",
            "extra": "iterations: 21843\ncpu: 38248.64258572542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79039.7016070154,
            "unit": "ns/iter",
            "extra": "iterations: 10952\ncpu: 79035.02556610682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 637392.1690000088,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 637374.7999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 511690.82600006275,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511675.0000000039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 507197.4139999611,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507183.09999999887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 501207.96900000644,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501183.4000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 364625.3477537496,
            "unit": "ns/iter",
            "extra": "iterations: 2404\ncpu: 364610.89850249427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 617625.9717114334,
            "unit": "ns/iter",
            "extra": "iterations: 1414\ncpu: 617583.0268741171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2694598.4492754904,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2694464.057971011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1195014.808729192,
            "unit": "ns/iter",
            "extra": "iterations: 779\ncpu: 1194955.9691912706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5547.4181700003555,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5547.196999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29641.838619901413,
            "unit": "ns/iter",
            "extra": "iterations: 28027\ncpu: 29640.496663931026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23478.658044839143,
            "unit": "ns/iter",
            "extra": "iterations: 35414\ncpu: 23477.27452419949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23611.114747577416,
            "unit": "ns/iter",
            "extra": "iterations: 35199\ncpu: 23609.795732833358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23565.557162340734,
            "unit": "ns/iter",
            "extra": "iterations: 35198\ncpu: 23564.31047218597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63428.79563183205,
            "unit": "ns/iter",
            "extra": "iterations: 13461\ncpu: 63427.41995394112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 609650.6650000038,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609622.8999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 613648.2759830969,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 613604.4241573059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 611668.3821479066,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 611643.933054396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 603397.9653019288,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 603389.6599583613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 348805.21340246405,
            "unit": "ns/iter",
            "extra": "iterations: 2507\ncpu: 348776.78500199696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 599355.6071428474,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 599317.3763736255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 550.8385201758184,
            "unit": "ns/iter",
            "extra": "iterations: 1273800\ncpu: 550.8040508714041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3326.160919376005,
            "unit": "ns/iter",
            "extra": "iterations: 210099\ncpu: 3325.966330158657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2692.065948652885,
            "unit": "ns/iter",
            "extra": "iterations: 258398\ncpu: 2691.9101541033556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2612.78594521709,
            "unit": "ns/iter",
            "extra": "iterations: 268478\ncpu: 2612.624498096676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2072.6915361317647,
            "unit": "ns/iter",
            "extra": "iterations: 337777\ncpu: 2072.4969432495222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17669.205889031466,
            "unit": "ns/iter",
            "extra": "iterations: 39633\ncpu: 17668.478288295013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 33400.061086512185,
            "unit": "ns/iter",
            "extra": "iterations: 21003\ncpu: 33397.62891015563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7764.490114013456,
            "unit": "ns/iter",
            "extra": "iterations: 90077\ncpu: 7764.239483997082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7748.963307672691,
            "unit": "ns/iter",
            "extra": "iterations: 89501\ncpu: 7748.808393202306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7651.022765192439,
            "unit": "ns/iter",
            "extra": "iterations: 91104\ncpu: 7650.455523357855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14634.3153809225,
            "unit": "ns/iter",
            "extra": "iterations: 47923\ncpu: 14634.158963337246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14686.022216171554,
            "unit": "ns/iter",
            "extra": "iterations: 47758\ncpu: 14685.60031827125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4448.107514730271,
            "unit": "ns/iter",
            "extra": "iterations: 157504\ncpu: 4448.044494108095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22610.530758506357,
            "unit": "ns/iter",
            "extra": "iterations: 30837\ncpu: 22609.673444239103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18030.936108444785,
            "unit": "ns/iter",
            "extra": "iterations: 38581\ncpu: 18029.820377906006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18085.379773544515,
            "unit": "ns/iter",
            "extra": "iterations: 38860\ncpu: 18084.037570767072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18500.752581948258,
            "unit": "ns/iter",
            "extra": "iterations: 37859\ncpu: 18499.60907578137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46548.57266608547,
            "unit": "ns/iter",
            "extra": "iterations: 15007\ncpu: 46545.165589392476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159612.4307304866,
            "unit": "ns/iter",
            "extra": "iterations: 4367\ncpu: 159601.12205175398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134251.04751869582,
            "unit": "ns/iter",
            "extra": "iterations: 5219\ncpu: 134237.95746311595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 134256.58604114552,
            "unit": "ns/iter",
            "extra": "iterations: 5201\ncpu: 134254.06652566692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132212.90886747252,
            "unit": "ns/iter",
            "extra": "iterations: 5289\ncpu: 132209.11325392523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82021.7270387286,
            "unit": "ns/iter",
            "extra": "iterations: 8547\ncpu: 82018.7083187091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134519.68339398332,
            "unit": "ns/iter",
            "extra": "iterations: 5221\ncpu: 134511.6452786822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4318.908663301076,
            "unit": "ns/iter",
            "extra": "iterations: 159662\ncpu: 4318.792198519401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 21797.85547326877,
            "unit": "ns/iter",
            "extra": "iterations: 32001\ncpu: 21798.012562107087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17650.016877849554,
            "unit": "ns/iter",
            "extra": "iterations: 39697\ncpu: 17649.159886137662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17213.620966685372,
            "unit": "ns/iter",
            "extra": "iterations: 38089\ncpu: 17213.583974375848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17888.246110615924,
            "unit": "ns/iter",
            "extra": "iterations: 39145\ncpu: 17887.760889002482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44079.359201069565,
            "unit": "ns/iter",
            "extra": "iterations: 15721\ncpu: 44078.824502258656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 157231.90385478246,
            "unit": "ns/iter",
            "extra": "iterations: 4462\ncpu: 157227.0058269827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129790.13902259692,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 129791.09589041142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 130349.2741965449,
            "unit": "ns/iter",
            "extra": "iterations: 5383\ncpu: 130348.74605238657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130706.41848739257,
            "unit": "ns/iter",
            "extra": "iterations: 5355\ncpu: 130704.59383753623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80961.76390008561,
            "unit": "ns/iter",
            "extra": "iterations: 8687\ncpu: 80960.63082767357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 131150.17106494942,
            "unit": "ns/iter",
            "extra": "iterations: 5343\ncpu: 131147.07093393302 ns\nthreads: 1"
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
        "date": 1705576305815,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1370.6796410476559,
            "unit": "ns/iter",
            "extra": "iterations: 500345\ncpu: 1370.6826289859996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16896.676575675534,
            "unit": "ns/iter",
            "extra": "iterations: 48979\ncpu: 16895.73082341412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35689.65605342803,
            "unit": "ns/iter",
            "extra": "iterations: 23210\ncpu: 35689.314950452404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52873.536343059284,
            "unit": "ns/iter",
            "extra": "iterations: 15904\ncpu: 52872.85588531185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58710.80960000654,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58708.889999999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74005.49445378601,
            "unit": "ns/iter",
            "extra": "iterations: 11900\ncpu: 74001.09243697482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 87877.37713414729,
            "unit": "ns/iter",
            "extra": "iterations: 9840\ncpu: 87875.12195121954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 102473.47003525452,
            "unit": "ns/iter",
            "extra": "iterations: 8510\ncpu: 102470.18801410108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 118553.39628020735,
            "unit": "ns/iter",
            "extra": "iterations: 7366\ncpu: 118551.56122726052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1238.697437317947,
            "unit": "ns/iter",
            "extra": "iterations: 563199\ncpu: 1238.6234705672412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1012.0022643473325,
            "unit": "ns/iter",
            "extra": "iterations: 691590\ncpu: 1011.9799303055294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1014.3502936046863,
            "unit": "ns/iter",
            "extra": "iterations: 687489\ncpu: 1014.3264837691952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 994.4364465719824,
            "unit": "ns/iter",
            "extra": "iterations: 705257\ncpu: 994.4001973748565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1975.1473736284272,
            "unit": "ns/iter",
            "extra": "iterations: 355776\ncpu: 1975.127889458538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5574.77300999949,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5574.455999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30306.70935851536,
            "unit": "ns/iter",
            "extra": "iterations: 27109\ncpu: 30306.470175956325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23878.958854994227,
            "unit": "ns/iter",
            "extra": "iterations: 34585\ncpu: 23878.033829694952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23654.64501246576,
            "unit": "ns/iter",
            "extra": "iterations: 34897\ncpu: 23654.119265266374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23806.854954066162,
            "unit": "ns/iter",
            "extra": "iterations: 34396\ncpu: 23806.01523432959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65590.50968934949,
            "unit": "ns/iter",
            "extra": "iterations: 13520\ncpu: 65590.03698224842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 613468.1089999959,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 613367.7999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 607465.4891380036,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 607448.9138051876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 610211.5707282838,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 610185.0840336113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 607174.9570423089,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 607131.6197183097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 353196.27099391166,
            "unit": "ns/iter",
            "extra": "iterations: 2465\ncpu: 353186.69371196756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 604749.6636553627,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 604721.9596942306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2546461.789617684,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2546361.7486338764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1163572.0839599788,
            "unit": "ns/iter",
            "extra": "iterations: 798\ncpu: 1163526.4411027592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3407581.3602937646,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3407352.205882358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8833.413833038521,
            "unit": "ns/iter",
            "extra": "iterations: 95843\ncpu: 8833.216823346485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 49226.37404038909,
            "unit": "ns/iter",
            "extra": "iterations: 16934\ncpu: 49223.473485295995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 39460.88100866858,
            "unit": "ns/iter",
            "extra": "iterations: 21573\ncpu: 39460.13535437806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 38283.987250376944,
            "unit": "ns/iter",
            "extra": "iterations: 21883\ncpu: 38281.94488872637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38482.2749655454,
            "unit": "ns/iter",
            "extra": "iterations: 21770\ncpu: 38480.927882407224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79597.02391904066,
            "unit": "ns/iter",
            "extra": "iterations: 10870\ncpu: 79595.3081876724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 636289.9359999119,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 636291.5999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 516675.63599994534,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516645.50000000274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 514035.87099991913,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514037.5000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 510262.13900001947,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510255.60000000073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 368948.2978016969,
            "unit": "ns/iter",
            "extra": "iterations: 2411\ncpu: 368930.60970551666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 624012.9921483878,
            "unit": "ns/iter",
            "extra": "iterations: 1401\ncpu: 623985.5817273402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2700340.3855073685,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2700267.5362319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1171213.9948651642,
            "unit": "ns/iter",
            "extra": "iterations: 779\ncpu: 1171163.414634146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5494.643650000626,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5494.526000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30268.627539502006,
            "unit": "ns/iter",
            "extra": "iterations: 27466\ncpu: 30267.796548460145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23731.867443055588,
            "unit": "ns/iter",
            "extra": "iterations: 35034\ncpu: 23731.161157732527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23523.90067554109,
            "unit": "ns/iter",
            "extra": "iterations: 35379\ncpu: 23523.417846745164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23419.08980152262,
            "unit": "ns/iter",
            "extra": "iterations: 34966\ncpu: 23418.051821769717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64500.358788775564,
            "unit": "ns/iter",
            "extra": "iterations: 13540\ncpu: 64497.98375184611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 617109.3320000409,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 617092.3999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 614857.1197183122,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 614843.3098591504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 617619.0684544692,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 617612.2794636535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 614048.0645161874,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 614038.7096774213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 353739.9242979113,
            "unit": "ns/iter",
            "extra": "iterations: 2457\ncpu: 353727.96092796157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 603414.65440671,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 603408.6051353213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 569.4129438412418,
            "unit": "ns/iter",
            "extra": "iterations: 1220735\ncpu: 569.3899986483567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3377.6763686092804,
            "unit": "ns/iter",
            "extra": "iterations: 207656\ncpu: 3377.5888970220135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2430.1469917285076,
            "unit": "ns/iter",
            "extra": "iterations: 287125\ncpu: 2430.0165433173725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2630.102420120855,
            "unit": "ns/iter",
            "extra": "iterations: 263210\ncpu: 2630.0756050301843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2112.5923033072177,
            "unit": "ns/iter",
            "extra": "iterations: 299973\ncpu: 2112.504792097966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17690.33378674641,
            "unit": "ns/iter",
            "extra": "iterations: 39699\ncpu: 17690.155923322956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 33131.90997393874,
            "unit": "ns/iter",
            "extra": "iterations: 21105\ncpu: 33130.869462212766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7804.21877881118,
            "unit": "ns/iter",
            "extra": "iterations: 90027\ncpu: 7804.102102702483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7805.987019776079,
            "unit": "ns/iter",
            "extra": "iterations: 89906\ncpu: 7805.720419104297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7803.437450773965,
            "unit": "ns/iter",
            "extra": "iterations: 90145\ncpu: 7802.999611736693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15484.090832744827,
            "unit": "ns/iter",
            "extra": "iterations: 45248\ncpu: 15483.871110325092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14798.616526957558,
            "unit": "ns/iter",
            "extra": "iterations: 47002\ncpu: 14797.978809412409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4479.888078915609,
            "unit": "ns/iter",
            "extra": "iterations: 156521\ncpu: 4479.68451517692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22810.42417146372,
            "unit": "ns/iter",
            "extra": "iterations: 30747\ncpu: 22808.950466712122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18275.126225523163,
            "unit": "ns/iter",
            "extra": "iterations: 38249\ncpu: 18274.34965620046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18225.870729864557,
            "unit": "ns/iter",
            "extra": "iterations: 38377\ncpu: 18224.457357271578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18778.474963695477,
            "unit": "ns/iter",
            "extra": "iterations: 37186\ncpu: 18777.459258860934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 45935.45329562006,
            "unit": "ns/iter",
            "extra": "iterations: 15202\ncpu: 45931.449809235186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 161004.3955102866,
            "unit": "ns/iter",
            "extra": "iterations: 4321\ncpu: 160997.22286507642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133784.95313393784,
            "unit": "ns/iter",
            "extra": "iterations: 5249\ncpu: 133778.2053724514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 134581.49894776207,
            "unit": "ns/iter",
            "extra": "iterations: 5227\ncpu: 134573.63688540444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134926.86964043358,
            "unit": "ns/iter",
            "extra": "iterations: 5201\ncpu: 134927.03326283218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82625.48100518216,
            "unit": "ns/iter",
            "extra": "iterations: 8476\ncpu: 82624.56347333668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134184.00057824966,
            "unit": "ns/iter",
            "extra": "iterations: 5188\ncpu: 134176.81187355227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4353.681319574239,
            "unit": "ns/iter",
            "extra": "iterations: 159991\ncpu: 4353.689895056608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 21951.840574272195,
            "unit": "ns/iter",
            "extra": "iterations: 31971\ncpu: 21950.849207093783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17683.213179952974,
            "unit": "ns/iter",
            "extra": "iterations: 39727\ncpu: 17682.15319555996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17574.394278452677,
            "unit": "ns/iter",
            "extra": "iterations: 40129\ncpu: 17573.124174537184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17993.295526377617,
            "unit": "ns/iter",
            "extra": "iterations: 38917\ncpu: 17992.45059999475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44105.00790039293,
            "unit": "ns/iter",
            "extra": "iterations: 15822\ncpu: 44104.49374288972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155301.46590653548,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 155295.79700424583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129768.59510566117,
            "unit": "ns/iter",
            "extra": "iterations: 5394\ncpu: 129767.11160548871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129447.12285872019,
            "unit": "ns/iter",
            "extra": "iterations: 5429\ncpu: 129445.16485540626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130319.19851714776,
            "unit": "ns/iter",
            "extra": "iterations: 5395\ncpu: 130315.94068581895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80974.91442855049,
            "unit": "ns/iter",
            "extra": "iterations: 8601\ncpu: 80973.75886524784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130729.67176711201,
            "unit": "ns/iter",
            "extra": "iterations: 5359\ncpu: 130720.65683896164 ns\nthreads: 1"
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
        "date": 1705774119214,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1380.7386237480816,
            "unit": "ns/iter",
            "extra": "iterations: 510735\ncpu: 1380.7461795255856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16869.680121794874,
            "unit": "ns/iter",
            "extra": "iterations: 48606\ncpu: 16868.937991194503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35463.81052855139,
            "unit": "ns/iter",
            "extra": "iterations: 23555\ncpu: 35463.13309276164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 53024.373377031974,
            "unit": "ns/iter",
            "extra": "iterations: 15866\ncpu: 53024.656498172204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58623.661600006475,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58624.03 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74122.31183527519,
            "unit": "ns/iter",
            "extra": "iterations: 11753\ncpu: 74120.47136901216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 88480.06528129897,
            "unit": "ns/iter",
            "extra": "iterations: 9865\ncpu: 88478.10440952863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 103751.00798872902,
            "unit": "ns/iter",
            "extra": "iterations: 8512\ncpu: 103749.58881578947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 119875.35482108817,
            "unit": "ns/iter",
            "extra": "iterations: 7322\ncpu: 119871.68806337073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1260.2988875741469,
            "unit": "ns/iter",
            "extra": "iterations: 556082\ncpu: 1260.2738445049476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1030.7523457463008,
            "unit": "ns/iter",
            "extra": "iterations: 678995\ncpu: 1030.722022989861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1034.4317175016522,
            "unit": "ns/iter",
            "extra": "iterations: 676535\ncpu: 1034.4376861507533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1026.1981454883085,
            "unit": "ns/iter",
            "extra": "iterations: 682983\ncpu: 1026.2031412202068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2021.3342161597418,
            "unit": "ns/iter",
            "extra": "iterations: 346614\ncpu: 2021.3248743559072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5662.950679999312,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5662.786000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30380.015384612212,
            "unit": "ns/iter",
            "extra": "iterations: 27235\ncpu: 30379.39049017806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23774.341409946577,
            "unit": "ns/iter",
            "extra": "iterations: 34668\ncpu: 23773.753894080997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23708.900735504205,
            "unit": "ns/iter",
            "extra": "iterations: 35350\ncpu: 23708.7015558699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24010.95459938071,
            "unit": "ns/iter",
            "extra": "iterations: 34559\ncpu: 24010.570329002487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65739.81886183892,
            "unit": "ns/iter",
            "extra": "iterations: 13636\ncpu: 65738.07568201804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 600023.4220000494,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600005.2000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 605661.4397212585,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 605653.6585365869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 622703.0741258516,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 622513.1468531459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 607870.7990196067,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 607838.6554621838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 353035.99878837925,
            "unit": "ns/iter",
            "extra": "iterations: 2476\ncpu: 353024.8788368341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 604408.244784419,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 604380.9457579954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2548863.49447499,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2548763.5359116034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1147788.2182490416,
            "unit": "ns/iter",
            "extra": "iterations: 811\ncpu: 1147764.9815043132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3390257.454212494,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3390065.9340659264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8687.025467122185,
            "unit": "ns/iter",
            "extra": "iterations: 96281\ncpu: 8686.658842346858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 48565.037189844756,
            "unit": "ns/iter",
            "extra": "iterations: 16967\ncpu: 48562.60977191014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38029.4981996127,
            "unit": "ns/iter",
            "extra": "iterations: 21662\ncpu: 38029.374019019524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37819.69061386584,
            "unit": "ns/iter",
            "extra": "iterations: 21617\ncpu: 37818.818522459085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38112.579027777356,
            "unit": "ns/iter",
            "extra": "iterations: 21600\ncpu: 38111.342592592664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 80978.61202136082,
            "unit": "ns/iter",
            "extra": "iterations: 11047\ncpu: 80977.21553362907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 634321.3559999868,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 634310.1000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 521453.21199998306,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521428.2000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 506226.3879999591,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506214.8000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 503263.0059999974,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503256.8000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 370763.02185793506,
            "unit": "ns/iter",
            "extra": "iterations: 2379\ncpu: 370747.1626733923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 502730.5649999789,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502727.60000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2714819.9444442517,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2714750.2923976574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1182270.4580152603,
            "unit": "ns/iter",
            "extra": "iterations: 786\ncpu: 1182242.1119592858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5568.726349999906,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5568.649999999949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30184.66449652876,
            "unit": "ns/iter",
            "extra": "iterations: 27648\ncpu: 30184.84881365719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23987.940109154308,
            "unit": "ns/iter",
            "extra": "iterations: 34446\ncpu: 23987.55152993105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23467.716912705266,
            "unit": "ns/iter",
            "extra": "iterations: 35293\ncpu: 23466.96512056207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23942.66173349092,
            "unit": "ns/iter",
            "extra": "iterations: 33920\ncpu: 23941.94575471696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64268.40051928562,
            "unit": "ns/iter",
            "extra": "iterations: 13480\ncpu: 64268.79821958443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 617134.8500000704,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 617123.8999999957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 623436.272022555,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 623399.0133897116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 621902.2169349088,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 621886.0041987406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 618129.8089573355,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 618103.0790762735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 354219.135812453,
            "unit": "ns/iter",
            "extra": "iterations: 2474\ncpu: 354197.41309620166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 605862.7037552067,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 605837.0653685669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 569.2627779673469,
            "unit": "ns/iter",
            "extra": "iterations: 1227797\ncpu: 569.2427982801676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3371.9400727050443,
            "unit": "ns/iter",
            "extra": "iterations: 212641\ncpu: 3371.8210505029638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2733.092786959611,
            "unit": "ns/iter",
            "extra": "iterations: 268583\ncpu: 2732.9335810531384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2620.4015747460858,
            "unit": "ns/iter",
            "extra": "iterations: 276870\ncpu: 2620.2824430237943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2122.0984795298773,
            "unit": "ns/iter",
            "extra": "iterations: 329043\ncpu: 2122.02234966251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17606.6081526812,
            "unit": "ns/iter",
            "extra": "iterations: 39717\ncpu: 17605.85895208601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32745.056563654278,
            "unit": "ns/iter",
            "extra": "iterations: 21162\ncpu: 32743.157546545637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7714.38656426475,
            "unit": "ns/iter",
            "extra": "iterations: 90624\ncpu: 7713.70387535315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7672.052609160815,
            "unit": "ns/iter",
            "extra": "iterations: 91562\ncpu: 7672.100871540558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7709.0312364817455,
            "unit": "ns/iter",
            "extra": "iterations: 90151\ncpu: 7708.854033787735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15328.045842892247,
            "unit": "ns/iter",
            "extra": "iterations: 45765\ncpu: 15327.689282202537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14809.63107369588,
            "unit": "ns/iter",
            "extra": "iterations: 47397\ncpu: 14809.270628942753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4442.526297213466,
            "unit": "ns/iter",
            "extra": "iterations: 155834\ncpu: 4442.515753943308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22459.715918603986,
            "unit": "ns/iter",
            "extra": "iterations: 31058\ncpu: 22459.607830510377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18028.00823468739,
            "unit": "ns/iter",
            "extra": "iterations: 38860\ncpu: 18027.26196603219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18002.90727146401,
            "unit": "ns/iter",
            "extra": "iterations: 38823\ncpu: 18001.486232387964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18514.177960904883,
            "unit": "ns/iter",
            "extra": "iterations: 37497\ncpu: 18513.0783796036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 45889.58641489677,
            "unit": "ns/iter",
            "extra": "iterations: 15252\ncpu: 45887.61473904996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160195.42153492643,
            "unit": "ns/iter",
            "extra": "iterations: 4365\ncpu: 160189.64490263522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134380.8948077087,
            "unit": "ns/iter",
            "extra": "iterations: 5200\ncpu: 134371.78846153858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133586.27011054932,
            "unit": "ns/iter",
            "extra": "iterations: 5246\ncpu: 133579.66069386137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133150.2580216537,
            "unit": "ns/iter",
            "extra": "iterations: 5267\ncpu: 133147.18055819222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82848.2999293406,
            "unit": "ns/iter",
            "extra": "iterations: 8492\ncpu: 82846.50259067459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133880.59511543263,
            "unit": "ns/iter",
            "extra": "iterations: 5241\ncpu: 133878.57279145284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4393.232181784803,
            "unit": "ns/iter",
            "extra": "iterations: 159177\ncpu: 4393.157931108101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 22169.26573868928,
            "unit": "ns/iter",
            "extra": "iterations: 31610\ncpu: 22169.180639038543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17712.991693888314,
            "unit": "ns/iter",
            "extra": "iterations: 39489\ncpu: 17712.889665476527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17699.347145442138,
            "unit": "ns/iter",
            "extra": "iterations: 39796\ncpu: 17698.63051562981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 18050.06613081955,
            "unit": "ns/iter",
            "extra": "iterations: 38817\ncpu: 18048.945049849273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44156.130478649706,
            "unit": "ns/iter",
            "extra": "iterations: 15857\ncpu: 44155.912215425335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156235.9485064832,
            "unit": "ns/iter",
            "extra": "iterations: 4486\ncpu: 156231.23049487104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130019.10663198191,
            "unit": "ns/iter",
            "extra": "iterations: 5383\ncpu: 130014.52721530697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129681.86807096322,
            "unit": "ns/iter",
            "extra": "iterations: 5412\ncpu: 129672.2838137478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130373.99329359921,
            "unit": "ns/iter",
            "extra": "iterations: 5368\ncpu: 130371.23695976078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81680.2412865474,
            "unit": "ns/iter",
            "extra": "iterations: 8550\ncpu: 81678.7134502921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130426.12071534773,
            "unit": "ns/iter",
            "extra": "iterations: 5368\ncpu: 130411.27049180308 ns\nthreads: 1"
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
        "date": 1705775560755,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1438.495031584235,
            "unit": "ns/iter",
            "extra": "iterations: 496134\ncpu: 1438.408171985794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16995.31925380292,
            "unit": "ns/iter",
            "extra": "iterations: 40579\ncpu: 16993.84657088642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35175.117096720445,
            "unit": "ns/iter",
            "extra": "iterations: 23408\ncpu: 35172.902426520865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52781.56310861548,
            "unit": "ns/iter",
            "extra": "iterations: 16020\ncpu: 52778.43320848939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58670.70269999885,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58666.72 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 73750.84430935688,
            "unit": "ns/iter",
            "extra": "iterations: 11844\ncpu: 73745.94731509629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 87463.23788141251,
            "unit": "ns/iter",
            "extra": "iterations: 9799\ncpu: 87458.55699561183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 101689.14031805171,
            "unit": "ns/iter",
            "extra": "iterations: 8552\ncpu: 101681.36108512628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 120445.43368789436,
            "unit": "ns/iter",
            "extra": "iterations: 7427\ncpu: 120438.62932543429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1301.274525833476,
            "unit": "ns/iter",
            "extra": "iterations: 536995\ncpu: 1301.2499185281085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1039.0838779419016,
            "unit": "ns/iter",
            "extra": "iterations: 668829\ncpu: 1039.029707144875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1043.1450119782096,
            "unit": "ns/iter",
            "extra": "iterations: 670386\ncpu: 1043.0739902086257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1061.3356920395713,
            "unit": "ns/iter",
            "extra": "iterations: 670424\ncpu: 1061.2445258522962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2005.7676694704774,
            "unit": "ns/iter",
            "extra": "iterations: 348822\ncpu: 2005.6315255345153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5583.75113000011,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5583.483000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30027.39143741969,
            "unit": "ns/iter",
            "extra": "iterations: 27445\ncpu: 30027.17799234832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23966.538783577646,
            "unit": "ns/iter",
            "extra": "iterations: 34396\ncpu: 23965.964065589054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23928.000580149997,
            "unit": "ns/iter",
            "extra": "iterations: 34474\ncpu: 23927.13929338053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24242.81257385895,
            "unit": "ns/iter",
            "extra": "iterations: 33848\ncpu: 24242.309737650718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65911.09065197558,
            "unit": "ns/iter",
            "extra": "iterations: 13436\ncpu: 65910.5388508486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 596439.8309999979,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 596409.9000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 608296.9058576655,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 608279.6373779636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 607061.4136490033,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 607046.587743731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 604670.9438989923,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 604643.6886395523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 353447.65533981484,
            "unit": "ns/iter",
            "extra": "iterations: 2472\ncpu: 353437.1359223296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 599155.2935461991,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 599132.8938237354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2552907.445055008,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2552788.736263737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1113575.1606279728,
            "unit": "ns/iter",
            "extra": "iterations: 828\ncpu: 1113538.4057971032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3389015.911764659,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3388854.4117646976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8922.426543625443,
            "unit": "ns/iter",
            "extra": "iterations: 95036\ncpu: 8922.00850204134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 48501.384566067376,
            "unit": "ns/iter",
            "extra": "iterations: 17157\ncpu: 48498.43212682857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37983.013737887275,
            "unit": "ns/iter",
            "extra": "iterations: 21983\ncpu: 37979.80712368657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 38021.04411831705,
            "unit": "ns/iter",
            "extra": "iterations: 22009\ncpu: 38018.61056840381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38093.89043906501,
            "unit": "ns/iter",
            "extra": "iterations: 21933\ncpu: 38091.31445766666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78099.04977417561,
            "unit": "ns/iter",
            "extra": "iterations: 10849\ncpu: 78092.37717762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 639651.3219999633,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 639588.400000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 515796.5719999993,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515783.70000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 515580.9269999736,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515535.9999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 516713.9310000266,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516710.0000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 377182.62666096946,
            "unit": "ns/iter",
            "extra": "iterations: 2333\ncpu: 377155.80797256844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 504897.42600007047,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504878.80000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2754691.5366569636,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2754522.5806451524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1190439.976933554,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 1190365.6716417903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5687.177790000533,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5686.561999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30148.073810293125,
            "unit": "ns/iter",
            "extra": "iterations: 27801\ncpu: 30146.138628106844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 24098.683553723084,
            "unit": "ns/iter",
            "extra": "iterations: 34938\ncpu: 24097.435457095427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23509.966236596145,
            "unit": "ns/iter",
            "extra": "iterations: 35808\ncpu: 23508.836014298508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 24198.630189003634,
            "unit": "ns/iter",
            "extra": "iterations: 35026\ncpu: 24197.379089819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64714.503644203025,
            "unit": "ns/iter",
            "extra": "iterations: 13446\ncpu: 64710.33764688342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 622732.4400000499,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 622694.8999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 616348.6005686207,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 616312.2956645326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 615441.486619727,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 615405.1408450666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 614599.0619717728,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 614570.6338028134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 353319.90485667106,
            "unit": "ns/iter",
            "extra": "iterations: 2512\ncpu: 353303.4235668802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 602506.6590436471,
            "unit": "ns/iter",
            "extra": "iterations: 1443\ncpu: 602469.3693693717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 590.8311242487617,
            "unit": "ns/iter",
            "extra": "iterations: 1193179\ncpu: 590.8155440214719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3407.5019427905318,
            "unit": "ns/iter",
            "extra": "iterations: 204860\ncpu: 3407.4382505125686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2634.8343160955706,
            "unit": "ns/iter",
            "extra": "iterations: 265578\ncpu: 2634.8131245811187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2747.9531586344233,
            "unit": "ns/iter",
            "extra": "iterations: 254113\ncpu: 2747.840921164997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2123.787755858202,
            "unit": "ns/iter",
            "extra": "iterations: 329333\ncpu: 2123.770773047348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17768.849156651293,
            "unit": "ns/iter",
            "extra": "iterations: 39604\ncpu: 17768.26835673158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32694.93681835225,
            "unit": "ns/iter",
            "extra": "iterations: 21272\ncpu: 32694.36348251203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7798.397717296319,
            "unit": "ns/iter",
            "extra": "iterations: 89981\ncpu: 7797.780642580065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7780.602565239441,
            "unit": "ns/iter",
            "extra": "iterations: 90206\ncpu: 7779.984701682732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7799.956104787844,
            "unit": "ns/iter",
            "extra": "iterations: 89782\ncpu: 7799.41413646393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 16135.711739131555,
            "unit": "ns/iter",
            "extra": "iterations: 46000\ncpu: 16134.869565217412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14078.109863025662,
            "unit": "ns/iter",
            "extra": "iterations: 49498\ncpu: 14077.704149662524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4538.1965849587405,
            "unit": "ns/iter",
            "extra": "iterations: 154493\ncpu: 4537.925342895788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22662.869382476096,
            "unit": "ns/iter",
            "extra": "iterations: 30930\ncpu: 22661.487229227558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18244.468732908867,
            "unit": "ns/iter",
            "extra": "iterations: 38395\ncpu: 18243.35981247535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18461.03375941415,
            "unit": "ns/iter",
            "extra": "iterations: 37708\ncpu: 18460.878328206156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18683.3349202955,
            "unit": "ns/iter",
            "extra": "iterations: 37388\ncpu: 18682.62811597312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46727.99145070529,
            "unit": "ns/iter",
            "extra": "iterations: 14972\ncpu: 46724.56585626459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160205.17468642126,
            "unit": "ns/iter",
            "extra": "iterations: 4385\ncpu: 160200.7525655623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132161.06828526713,
            "unit": "ns/iter",
            "extra": "iterations: 5272\ncpu: 132158.49772382143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132937.31622641062,
            "unit": "ns/iter",
            "extra": "iterations: 5300\ncpu: 132928.2075471705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133722.79514619822,
            "unit": "ns/iter",
            "extra": "iterations: 5233\ncpu: 133713.45308618248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82000.66834524115,
            "unit": "ns/iter",
            "extra": "iterations: 8539\ncpu: 81993.66436350867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133108.75123527079,
            "unit": "ns/iter",
            "extra": "iterations: 5262\ncpu: 133100.85518814268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4414.445832330758,
            "unit": "ns/iter",
            "extra": "iterations: 157954\ncpu: 4414.1439912886235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 22061.75858496826,
            "unit": "ns/iter",
            "extra": "iterations: 31858\ncpu: 22059.997488856527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17756.350934593796,
            "unit": "ns/iter",
            "extra": "iterations: 39429\ncpu: 17755.08128534843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17683.971618646352,
            "unit": "ns/iter",
            "extra": "iterations: 39533\ncpu: 17682.9813067563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17938.91531328386,
            "unit": "ns/iter",
            "extra": "iterations: 39038\ncpu: 17938.767354885214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44462.317543974714,
            "unit": "ns/iter",
            "extra": "iterations: 15749\ncpu: 44459.87681757528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154238.32413334507,
            "unit": "ns/iter",
            "extra": "iterations: 4529\ncpu: 154229.675425038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129571.06773352895,
            "unit": "ns/iter",
            "extra": "iterations: 5374\ncpu: 129567.62188313999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129241.69478212585,
            "unit": "ns/iter",
            "extra": "iterations: 5347\ncpu: 129239.23695530172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128789.49907611267,
            "unit": "ns/iter",
            "extra": "iterations: 5412\ncpu: 128780.67257945337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81847.98544141256,
            "unit": "ns/iter",
            "extra": "iterations: 8586\ncpu: 81842.58094572532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129708.21542751098,
            "unit": "ns/iter",
            "extra": "iterations: 5380\ncpu: 129699.85130111495 ns\nthreads: 1"
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
        "date": 1705779126461,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1366.7933940988441,
            "unit": "ns/iter",
            "extra": "iterations: 511694\ncpu: 1366.7371515007019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16995.582771629637,
            "unit": "ns/iter",
            "extra": "iterations: 48513\ncpu: 16994.8591099293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 36176.10521050419,
            "unit": "ns/iter",
            "extra": "iterations: 22992\ncpu: 36175.04349338899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 53669.08081964912,
            "unit": "ns/iter",
            "extra": "iterations: 15714\ncpu: 53667.271223113145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 59684.21500000432,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59679.91000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74833.70864049383,
            "unit": "ns/iter",
            "extra": "iterations: 11666\ncpu: 74827.0358306189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 88913.00596893049,
            "unit": "ns/iter",
            "extra": "iterations: 9717\ncpu: 88911.36153133678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 102208.87757779,
            "unit": "ns/iter",
            "extra": "iterations: 8389\ncpu: 102200.16688520683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 121513.47004857096,
            "unit": "ns/iter",
            "extra": "iterations: 7412\ncpu: 121505.9767943876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1209.2837018521316,
            "unit": "ns/iter",
            "extra": "iterations: 579256\ncpu: 1209.161924952008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1009.3542846460016,
            "unit": "ns/iter",
            "extra": "iterations: 695390\ncpu: 1009.2814104315564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1010.2436137162068,
            "unit": "ns/iter",
            "extra": "iterations: 693635\ncpu: 1010.2109899298625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 984.542620662603,
            "unit": "ns/iter",
            "extra": "iterations: 712835\ncpu: 984.5293791690931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1967.0769232925318,
            "unit": "ns/iter",
            "extra": "iterations: 356745\ncpu: 1966.9366073806227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5582.762859999093,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5582.221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30062.046379349304,
            "unit": "ns/iter",
            "extra": "iterations: 27426\ncpu: 30060.336906584947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23545.210680971915,
            "unit": "ns/iter",
            "extra": "iterations: 35053\ncpu: 23543.422816877304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23132.01702175789,
            "unit": "ns/iter",
            "extra": "iterations: 35249\ncpu: 23130.38384067633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23620.76755377804,
            "unit": "ns/iter",
            "extra": "iterations: 34494\ncpu: 23619.11636806402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65338.201913802535,
            "unit": "ns/iter",
            "extra": "iterations: 13481\ncpu: 65335.01965729545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 618240.4899999483,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 617751.5000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 602560.8999999735,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 602515.9722222234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 601704.045738083,
            "unit": "ns/iter",
            "extra": "iterations: 1443\ncpu: 601680.526680526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 606547.0577190258,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 606498.052851183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 351962.53858648974,
            "unit": "ns/iter",
            "extra": "iterations: 2462\ncpu: 351930.5036555655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 601831.1201657333,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 601795.1657458548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2547440.816438398,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2547404.1095890435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1152715.1722016037,
            "unit": "ns/iter",
            "extra": "iterations: 813\ncpu: 1152659.9015990177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3389944.531135447,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3389900.3663003626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8815.213087718737,
            "unit": "ns/iter",
            "extra": "iterations: 96411\ncpu: 8814.398771924365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 48199.955710956994,
            "unit": "ns/iter",
            "extra": "iterations: 17160\ncpu: 48195.36713286701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38048.030418425486,
            "unit": "ns/iter",
            "extra": "iterations: 21796\ncpu: 38045.870801981895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 38318.951417005286,
            "unit": "ns/iter",
            "extra": "iterations: 21736\ncpu: 38317.34449760768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38126.81001425624,
            "unit": "ns/iter",
            "extra": "iterations: 21749\ncpu: 38125.81727895548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78611.84765695618,
            "unit": "ns/iter",
            "extra": "iterations: 11054\ncpu: 78610.81961280969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 636321.7969999368,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 636255.9999999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 510342.5009999682,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510286.7000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 504723.9629999467,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504725.4999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 506259.97299994197,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506216.80000000424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 368572.8776371288,
            "unit": "ns/iter",
            "extra": "iterations: 2370\ncpu: 368559.95780590654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 619243.7358357366,
            "unit": "ns/iter",
            "extra": "iterations: 1412\ncpu: 619229.3201133141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2699906.203488261,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2699788.3720930154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1165162.6516853885,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 1165131.4606741532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5551.034179999307,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5550.815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30029.52004158597,
            "unit": "ns/iter",
            "extra": "iterations: 27892\ncpu: 30028.80037286675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23308.492781763744,
            "unit": "ns/iter",
            "extra": "iterations: 35535\ncpu: 23307.49401998023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23273.15069067665,
            "unit": "ns/iter",
            "extra": "iterations: 35762\ncpu: 23272.40087243447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23613.50099874582,
            "unit": "ns/iter",
            "extra": "iterations: 35044\ncpu: 23612.76966099758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64448.36849172351,
            "unit": "ns/iter",
            "extra": "iterations: 13406\ncpu: 64446.69550947295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 616393.3589999715,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 616383.7000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 618698.9262933736,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 618689.5109851159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 614967.4166666445,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 614925.2100840345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 608926.5658262867,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 608906.2324929975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 347692.4538248048,
            "unit": "ns/iter",
            "extra": "iterations: 2523\ncpu: 347677.6852952838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 600060.6565934645,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 600013.3928571455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 552.7444667015731,
            "unit": "ns/iter",
            "extra": "iterations: 1277493\ncpu: 552.6974316101972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3257.289610100329,
            "unit": "ns/iter",
            "extra": "iterations: 215286\ncpu: 3257.1486301942678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2502.456998663166,
            "unit": "ns/iter",
            "extra": "iterations: 279782\ncpu: 2502.3164463761063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2715.9562974828054,
            "unit": "ns/iter",
            "extra": "iterations: 257857\ncpu: 2715.7346901577353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2074.595486657009,
            "unit": "ns/iter",
            "extra": "iterations: 337178\ncpu: 2074.5271043780867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17596.358445200618,
            "unit": "ns/iter",
            "extra": "iterations: 39928\ncpu: 17595.877579643402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32469.510442886058,
            "unit": "ns/iter",
            "extra": "iterations: 22647\ncpu: 32468.10173532909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7625.920915316456,
            "unit": "ns/iter",
            "extra": "iterations: 91990\ncpu: 7625.606044135208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7639.594972252393,
            "unit": "ns/iter",
            "extra": "iterations: 90816\ncpu: 7639.386231501141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7639.653990778734,
            "unit": "ns/iter",
            "extra": "iterations: 91749\ncpu: 7639.306150475713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15338.3415120393,
            "unit": "ns/iter",
            "extra": "iterations: 45647\ncpu: 15338.087935680309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14635.609393566392,
            "unit": "ns/iter",
            "extra": "iterations: 47969\ncpu: 14634.570243282136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4464.710213519852,
            "unit": "ns/iter",
            "extra": "iterations: 157409\ncpu: 4464.448030290557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22725.588434155936,
            "unit": "ns/iter",
            "extra": "iterations: 30763\ncpu: 22724.513213925766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18453.674965785714,
            "unit": "ns/iter",
            "extra": "iterations: 37996\ncpu: 18452.952942414748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18383.496220133464,
            "unit": "ns/iter",
            "extra": "iterations: 37832\ncpu: 18382.356206386095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18799.87914889104,
            "unit": "ns/iter",
            "extra": "iterations: 37269\ncpu: 18798.99648501431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46578.4880245449,
            "unit": "ns/iter",
            "extra": "iterations: 14989\ncpu: 46576.11581826668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159079.4184413394,
            "unit": "ns/iter",
            "extra": "iterations: 4414\ncpu: 159075.19256909902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133729.48240243286,
            "unit": "ns/iter",
            "extra": "iterations: 5228\ncpu: 133726.91277735156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 134123.5697027767,
            "unit": "ns/iter",
            "extra": "iterations: 5215\ncpu: 134118.92617449563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133671.40125930164,
            "unit": "ns/iter",
            "extra": "iterations: 5241\ncpu: 133665.4455256624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82021.50360050853,
            "unit": "ns/iter",
            "extra": "iterations: 8471\ncpu: 82013.49309408599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132565.33907937197,
            "unit": "ns/iter",
            "extra": "iterations: 5279\ncpu: 132559.80299299356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4395.5083919602075,
            "unit": "ns/iter",
            "extra": "iterations: 159200\ncpu: 4395.325376884417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 22887.21240403732,
            "unit": "ns/iter",
            "extra": "iterations: 31393\ncpu: 22886.18800369511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 18038.371862531236,
            "unit": "ns/iter",
            "extra": "iterations: 38845\ncpu: 18037.345861758276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17769.24868638045,
            "unit": "ns/iter",
            "extra": "iterations: 39395\ncpu: 17768.968143165264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 18307.960584705477,
            "unit": "ns/iter",
            "extra": "iterations: 38310\ncpu: 18307.055599060426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44720.712463953874,
            "unit": "ns/iter",
            "extra": "iterations: 15605\ncpu: 44716.815123357366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156480.89017858016,
            "unit": "ns/iter",
            "extra": "iterations: 4480\ncpu: 156470.625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 131203.78258426843,
            "unit": "ns/iter",
            "extra": "iterations: 5340\ncpu: 131200.88014981154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 131275.2869451311,
            "unit": "ns/iter",
            "extra": "iterations: 5339\ncpu: 131275.31372916396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130900.90503840946,
            "unit": "ns/iter",
            "extra": "iterations: 5339\ncpu: 130898.46413185966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82166.90892039792,
            "unit": "ns/iter",
            "extra": "iterations: 8531\ncpu: 82164.09565115505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 131102.29680194228,
            "unit": "ns/iter",
            "extra": "iterations: 5347\ncpu: 131094.57639798115 ns\nthreads: 1"
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
        "date": 1705954285006,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1404.817446517994,
            "unit": "ns/iter",
            "extra": "iterations: 502083\ncpu: 1404.7573807517883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16880.276915836064,
            "unit": "ns/iter",
            "extra": "iterations: 48856\ncpu: 16879.83870967742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35899.80075367333,
            "unit": "ns/iter",
            "extra": "iterations: 23087\ncpu: 35898.2327716897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 53287.758437618606,
            "unit": "ns/iter",
            "extra": "iterations: 15822\ncpu: 53287.65642775878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58938.99949999195,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58936.53999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74554.57206826578,
            "unit": "ns/iter",
            "extra": "iterations: 11836\ncpu: 74552.03616086516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 88647.43119266436,
            "unit": "ns/iter",
            "extra": "iterations: 9810\ncpu: 88644.1590214067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 102299.38428152507,
            "unit": "ns/iter",
            "extra": "iterations: 8525\ncpu: 102294.45161290323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115769.59223953151,
            "unit": "ns/iter",
            "extra": "iterations: 7448\ncpu: 115767.84371643388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1247.6949927457438,
            "unit": "ns/iter",
            "extra": "iterations: 560367\ncpu: 1247.6521636713062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1039.1030033333689,
            "unit": "ns/iter",
            "extra": "iterations: 676182\ncpu: 1039.0683277579103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1030.2403777324903,
            "unit": "ns/iter",
            "extra": "iterations: 676140\ncpu: 1030.2039518442919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1035.6867803792813,
            "unit": "ns/iter",
            "extra": "iterations: 677614\ncpu: 1035.6503850274662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2000.5710374090036,
            "unit": "ns/iter",
            "extra": "iterations: 350238\ncpu: 2000.478246221141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5655.193849999023,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5654.953000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30255.226604992335,
            "unit": "ns/iter",
            "extra": "iterations: 27025\ncpu: 30254.12395929693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24602.88083870245,
            "unit": "ns/iter",
            "extra": "iterations: 34768\ncpu: 24602.315347445932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23284.641181310344,
            "unit": "ns/iter",
            "extra": "iterations: 35249\ncpu: 23284.01373088591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23987.575423680206,
            "unit": "ns/iter",
            "extra": "iterations: 34578\ncpu: 23986.607091214086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65519.8813043188,
            "unit": "ns/iter",
            "extra": "iterations: 13463\ncpu: 65516.85359875215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 590664.9180000159,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590657.9999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 603546.4013840602,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 603524.7750865049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 604187.1768802195,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 604151.114206127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 601156.8943710861,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 601133.2870048642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 348064.5667596685,
            "unit": "ns/iter",
            "extra": "iterations: 2509\ncpu: 348052.77002789953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 600133.5501730291,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 600106.9896193766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2544767.416893604,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2544623.7057220647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1151814.8133498244,
            "unit": "ns/iter",
            "extra": "iterations: 809\ncpu: 1151776.1433869002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3410103.433823759,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3410032.3529411806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8759.27900761443,
            "unit": "ns/iter",
            "extra": "iterations: 96535\ncpu: 8759.062516185835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 48421.827304074475,
            "unit": "ns/iter",
            "extra": "iterations: 17111\ncpu: 48419.99298696749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38148.55483663834,
            "unit": "ns/iter",
            "extra": "iterations: 21792\ncpu: 38146.56754772373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37805.47964191743,
            "unit": "ns/iter",
            "extra": "iterations: 22006\ncpu: 37803.9807325276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38103.8388924126,
            "unit": "ns/iter",
            "extra": "iterations: 22066\ncpu: 38102.12544185622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79985.49108292194,
            "unit": "ns/iter",
            "extra": "iterations: 10878\ncpu: 79983.58154072416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 639074.9509999978,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 639044.6999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 516847.8990000267,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516840.70000000304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 513492.923000058,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513459.59999999736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 510090.1669999303,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510070.80000000115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 372453.44156396686,
            "unit": "ns/iter",
            "extra": "iterations: 2353\ncpu: 372440.0764980869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 500175.2780000288,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500174.60000000114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2695651.8538012677,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2695482.7485380173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1170504.6982543545,
            "unit": "ns/iter",
            "extra": "iterations: 802\ncpu: 1170469.5760598497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5458.653220000542,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5458.494000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29826.61861393698,
            "unit": "ns/iter",
            "extra": "iterations: 27560\ncpu: 29826.11393323659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23822.308106404853,
            "unit": "ns/iter",
            "extra": "iterations: 34923\ncpu: 23821.120751367267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23134.78584974042,
            "unit": "ns/iter",
            "extra": "iterations: 35858\ncpu: 23133.593619276144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23646.985628880106,
            "unit": "ns/iter",
            "extra": "iterations: 34792\ncpu: 23645.97608645656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64449.12802614164,
            "unit": "ns/iter",
            "extra": "iterations: 13466\ncpu: 64447.794445269654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 611946.9939999363,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 611919.9999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 616475.1729957905,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 616450.2109704674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 615843.9601398691,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 615812.9370629357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 611788.3668516268,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 611749.3065187243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 355177.9027833443,
            "unit": "ns/iter",
            "extra": "iterations: 2479\ncpu: 355159.90318676975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 603759.882920157,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 603746.9008264467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 574.1435636079617,
            "unit": "ns/iter",
            "extra": "iterations: 1243414\ncpu: 574.1440903834085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3349.8756827343996,
            "unit": "ns/iter",
            "extra": "iterations: 209818\ncpu: 3349.7350084359014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2493.0711716239975,
            "unit": "ns/iter",
            "extra": "iterations: 280491\ncpu: 2493.010827441879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2628.2762002067134,
            "unit": "ns/iter",
            "extra": "iterations: 265246\ncpu: 2628.248870859485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2125.4432573956756,
            "unit": "ns/iter",
            "extra": "iterations: 332290\ncpu: 2125.4428360769343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17772.113512553842,
            "unit": "ns/iter",
            "extra": "iterations: 39467\ncpu: 17771.67000278712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32832.83352806159,
            "unit": "ns/iter",
            "extra": "iterations: 21397\ncpu: 32832.107304762096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7775.513172052561,
            "unit": "ns/iter",
            "extra": "iterations: 90153\ncpu: 7774.993621953769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7739.345181979202,
            "unit": "ns/iter",
            "extra": "iterations: 90587\ncpu: 7739.055272831653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7732.558397384407,
            "unit": "ns/iter",
            "extra": "iterations: 90552\ncpu: 7732.130709426501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14753.107126211065,
            "unit": "ns/iter",
            "extra": "iterations: 47206\ncpu: 14752.61407448208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14870.885753892053,
            "unit": "ns/iter",
            "extra": "iterations: 46890\ncpu: 14870.65045852006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4510.676770934384,
            "unit": "ns/iter",
            "extra": "iterations: 155017\ncpu: 4510.518846320051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22564.42542842556,
            "unit": "ns/iter",
            "extra": "iterations: 31044\ncpu: 22563.49697203944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18233.09656518377,
            "unit": "ns/iter",
            "extra": "iterations: 38430\ncpu: 18232.269060629515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18290.22660291623,
            "unit": "ns/iter",
            "extra": "iterations: 38274\ncpu: 18289.682290850025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18324.88061210712,
            "unit": "ns/iter",
            "extra": "iterations: 37575\ncpu: 18324.52960745164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46472.200451799254,
            "unit": "ns/iter",
            "extra": "iterations: 15051\ncpu: 46471.48362235075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 158257.39963873912,
            "unit": "ns/iter",
            "extra": "iterations: 4429\ncpu: 158255.90426732885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133250.1785645648,
            "unit": "ns/iter",
            "extra": "iterations: 5197\ncpu: 133248.22012699436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132297.0857412565,
            "unit": "ns/iter",
            "extra": "iterations: 5295\ncpu: 132293.4655335245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131777.31936877233,
            "unit": "ns/iter",
            "extra": "iterations: 5323\ncpu: 131774.82622581313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81780.50350058649,
            "unit": "ns/iter",
            "extra": "iterations: 8570\ncpu: 81778.27304550725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133625.29842534356,
            "unit": "ns/iter",
            "extra": "iterations: 5271\ncpu: 133622.0641244566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4385.045025358202,
            "unit": "ns/iter",
            "extra": "iterations: 159710\ncpu: 4384.954605221942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 21920.939396795187,
            "unit": "ns/iter",
            "extra": "iterations: 31830\ncpu: 21920.87967326423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17646.923903448416,
            "unit": "ns/iter",
            "extra": "iterations: 39647\ncpu: 17646.59116704905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17430.33741628666,
            "unit": "ns/iter",
            "extra": "iterations: 40167\ncpu: 17429.994771827674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17926.782573101227,
            "unit": "ns/iter",
            "extra": "iterations: 39089\ncpu: 17926.20686126522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44700.8109370021,
            "unit": "ns/iter",
            "extra": "iterations: 15635\ncpu: 44699.974416373574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153575.28142920215,
            "unit": "ns/iter",
            "extra": "iterations: 4534\ncpu: 153573.5553595063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129708.58456973276,
            "unit": "ns/iter",
            "extra": "iterations: 5392\ncpu: 129705.37833827967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129459.3748847506,
            "unit": "ns/iter",
            "extra": "iterations: 5423\ncpu: 129456.75825189025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129261.07615893465,
            "unit": "ns/iter",
            "extra": "iterations: 5436\ncpu: 129257.63428992002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80283.50316274754,
            "unit": "ns/iter",
            "extra": "iterations: 8695\ncpu: 80283.46175963235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129891.13579556673,
            "unit": "ns/iter",
            "extra": "iterations: 5361\ncpu: 129888.17384816302 ns\nthreads: 1"
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
        "date": 1705955725199,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1377.4335514649179,
            "unit": "ns/iter",
            "extra": "iterations: 506422\ncpu: 1377.4123162105914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16603.783154993474,
            "unit": "ns/iter",
            "extra": "iterations: 49344\ncpu: 16603.356031128405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35203.28231407943,
            "unit": "ns/iter",
            "extra": "iterations: 23612\ncpu: 35202.33779434185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52798.25246351287,
            "unit": "ns/iter",
            "extra": "iterations: 16034\ncpu: 52797.798428339804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58469.281099996806,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58467.57 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 73445.54981084033,
            "unit": "ns/iter",
            "extra": "iterations: 11895\ncpu: 73444.14459857089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 87686.56274608776,
            "unit": "ns/iter",
            "extra": "iterations: 9905\ncpu: 87684.6643109541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 101921.33383827168,
            "unit": "ns/iter",
            "extra": "iterations: 8582\ncpu: 101917.95618736892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 119752.63616133857,
            "unit": "ns/iter",
            "extra": "iterations: 7190\ncpu: 119749.80528511813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1273.931776966533,
            "unit": "ns/iter",
            "extra": "iterations: 548671\ncpu: 1273.8956496698363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1005.6409990672885,
            "unit": "ns/iter",
            "extra": "iterations: 694728\ncpu: 1005.5854953305458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1067.226723330527,
            "unit": "ns/iter",
            "extra": "iterations: 671563\ncpu: 1067.193398087745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 997.9401884629789,
            "unit": "ns/iter",
            "extra": "iterations: 704329\ncpu: 997.9141849902531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1994.2240877014503,
            "unit": "ns/iter",
            "extra": "iterations: 350461\ncpu: 1994.1465669503912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5304.523170000266,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5304.330999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 28644.595199182142,
            "unit": "ns/iter",
            "extra": "iterations: 29370\ncpu: 28643.786176370486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 21871.179978756194,
            "unit": "ns/iter",
            "extra": "iterations: 37660\ncpu: 21870.48858204995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22332.876980277637,
            "unit": "ns/iter",
            "extra": "iterations: 37116\ncpu: 22332.096669899744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22333.064857747555,
            "unit": "ns/iter",
            "extra": "iterations: 36449\ncpu: 22332.30266948343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65596.56598720765,
            "unit": "ns/iter",
            "extra": "iterations: 13442\ncpu: 65593.88483856551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 594257.3799999309,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594236.2999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 602155.5079805605,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 602122.7619708526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 602681.102706418,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 602656.7661346281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 602540.1845730118,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 602506.2672176302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 350591.8166061822,
            "unit": "ns/iter",
            "extra": "iterations: 2481\ncpu: 350578.39580814197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 611112.7550452272,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 611081.2804453705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2539363.803278872,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2539252.7322404385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1168848.8817610748,
            "unit": "ns/iter",
            "extra": "iterations: 795\ncpu: 1168823.1446540873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3410966.9926473717,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3410781.6176470546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8641.903058920123,
            "unit": "ns/iter",
            "extra": "iterations: 97420\ncpu: 8641.679326626974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 48594.81051159569,
            "unit": "ns/iter",
            "extra": "iterations: 17162\ncpu: 48591.749213378374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38055.70319780703,
            "unit": "ns/iter",
            "extra": "iterations: 21890\ncpu: 38054.42211055256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37606.59997270607,
            "unit": "ns/iter",
            "extra": "iterations: 21986\ncpu: 37605.29427817714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38399.70766472213,
            "unit": "ns/iter",
            "extra": "iterations: 21749\ncpu: 38397.86197066546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 80281.98379565243,
            "unit": "ns/iter",
            "extra": "iterations: 10923\ncpu: 80278.49491897848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 633777.7400000278,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 633745.1999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 511547.7360000114,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511519.7000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 507973.5269999901,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507967.19999999594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 507849.37799994624,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507823.5999999947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 373165.6268084717,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 373148.42553191766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 500544.56899999874,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500546.3999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2701588.6180757163,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2701538.192419835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1154061.614143812,
            "unit": "ns/iter",
            "extra": "iterations: 806\ncpu: 1154013.2754342477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5642.4916100002065,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5642.415999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29559.086973566245,
            "unit": "ns/iter",
            "extra": "iterations: 28066\ncpu: 29558.01325447163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23848.681833705294,
            "unit": "ns/iter",
            "extra": "iterations: 35142\ncpu: 23847.481645893884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23587.779534910398,
            "unit": "ns/iter",
            "extra": "iterations: 35348\ncpu: 23587.563652823443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23602.82166761189,
            "unit": "ns/iter",
            "extra": "iterations: 35260\ncpu: 23602.4446965401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64285.54158649831,
            "unit": "ns/iter",
            "extra": "iterations: 13514\ncpu: 64284.112771940185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 618772.1050000619,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 618739.3000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 609606.0794097214,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 609589.6697118729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 608788.0774103012,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 608761.3652357513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 606470.6841370083,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 606444.3745632444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 353956.363891083,
            "unit": "ns/iter",
            "extra": "iterations: 2498\ncpu: 353944.91593274614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 601734.3141469522,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 601708.5298196957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 576.7205127888113,
            "unit": "ns/iter",
            "extra": "iterations: 1212195\ncpu: 576.6922813573733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3370.1719074026405,
            "unit": "ns/iter",
            "extra": "iterations: 207350\ncpu: 3370.0467808053872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2741.5648828904827,
            "unit": "ns/iter",
            "extra": "iterations: 266588\ncpu: 2741.474484973067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2741.4363920770534,
            "unit": "ns/iter",
            "extra": "iterations: 265305\ncpu: 2741.28757467819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2118.6117208349656,
            "unit": "ns/iter",
            "extra": "iterations: 330113\ncpu: 2118.540620938895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17768.491632332665,
            "unit": "ns/iter",
            "extra": "iterations: 39318\ncpu: 17768.538582837442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32482.264594709068,
            "unit": "ns/iter",
            "extra": "iterations: 21429\ncpu: 32481.380372392636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7778.736594041799,
            "unit": "ns/iter",
            "extra": "iterations: 89960\ncpu: 7778.594931080529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7764.966648205765,
            "unit": "ns/iter",
            "extra": "iterations: 90280\ncpu: 7764.680992467917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7737.0875077513465,
            "unit": "ns/iter",
            "extra": "iterations: 90312\ncpu: 7736.698334662123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15218.34684960358,
            "unit": "ns/iter",
            "extra": "iterations: 45772\ncpu: 15218.10058551087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14694.307692308457,
            "unit": "ns/iter",
            "extra": "iterations: 47658\ncpu: 14693.789080532022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4511.993278729311,
            "unit": "ns/iter",
            "extra": "iterations: 155179\ncpu: 4511.943626392689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22724.951269596295,
            "unit": "ns/iter",
            "extra": "iterations: 30679\ncpu: 22724.557514912838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18064.65075950102,
            "unit": "ns/iter",
            "extra": "iterations: 38578\ncpu: 18064.68194307632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18095.82155394843,
            "unit": "ns/iter",
            "extra": "iterations: 38740\ncpu: 18095.818275683992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18621.83868133151,
            "unit": "ns/iter",
            "extra": "iterations: 37553\ncpu: 18621.439032833438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46645.88536438561,
            "unit": "ns/iter",
            "extra": "iterations: 14943\ncpu: 46644.743358094456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159617.70038732747,
            "unit": "ns/iter",
            "extra": "iterations: 4389\ncpu: 159616.5641376162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132454.58845788683,
            "unit": "ns/iter",
            "extra": "iterations: 5285\ncpu: 132454.81551560803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131974.34162425922,
            "unit": "ns/iter",
            "extra": "iterations: 5307\ncpu: 131970.05841341606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132692.8617101898,
            "unit": "ns/iter",
            "extra": "iterations: 5286\ncpu: 132692.01664774792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81759.13337997753,
            "unit": "ns/iter",
            "extra": "iterations: 8577\ncpu: 81757.05957794005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132929.79230913692,
            "unit": "ns/iter",
            "extra": "iterations: 5253\ncpu: 132928.13630306302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4429.480568816689,
            "unit": "ns/iter",
            "extra": "iterations: 157942\ncpu: 4429.361411150896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 22221.56647581569,
            "unit": "ns/iter",
            "extra": "iterations: 31613\ncpu: 22221.060955935845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17844.048372838828,
            "unit": "ns/iter",
            "extra": "iterations: 36198\ncpu: 17843.375324603883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17709.666328908566,
            "unit": "ns/iter",
            "extra": "iterations: 39476\ncpu: 17709.69703110739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 18133.85034896283,
            "unit": "ns/iter",
            "extra": "iterations: 38543\ncpu: 18133.868666165003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44476.27760473669,
            "unit": "ns/iter",
            "extra": "iterations: 15731\ncpu: 44475.48789015308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156258.36501223856,
            "unit": "ns/iter",
            "extra": "iterations: 4493\ncpu: 156256.93300689704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130969.98325581384,
            "unit": "ns/iter",
            "extra": "iterations: 5375\ncpu: 130968.83720930257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 130287.61193477374,
            "unit": "ns/iter",
            "extra": "iterations: 5396\ncpu: 130286.08228317325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129848.83651882395,
            "unit": "ns/iter",
            "extra": "iterations: 5389\ncpu: 129843.84858044279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 80634.705258309,
            "unit": "ns/iter",
            "extra": "iterations: 8672\ncpu: 80634.00599630932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129851.8915863651,
            "unit": "ns/iter",
            "extra": "iterations: 5396\ncpu: 129848.70274277216 ns\nthreads: 1"
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
        "date": 1705957650011,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1421.7659206812284,
            "unit": "ns/iter",
            "extra": "iterations: 487275\ncpu: 1421.703965932995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16949.211048187764,
            "unit": "ns/iter",
            "extra": "iterations: 48913\ncpu: 16948.86431010161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35557.95986765674,
            "unit": "ns/iter",
            "extra": "iterations: 23273\ncpu: 35557.001675761625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 53391.202151079604,
            "unit": "ns/iter",
            "extra": "iterations: 15899\ncpu: 53388.24454368201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58747.250299995816,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58744.93000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 73733.66266777746,
            "unit": "ns/iter",
            "extra": "iterations: 11920\ncpu: 73732.0889261745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 87269.19546686183,
            "unit": "ns/iter",
            "extra": "iterations: 9971\ncpu: 87267.68629024165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 102538.72727272402,
            "unit": "ns/iter",
            "extra": "iterations: 8580\ncpu: 102535.9906759907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 119545.8975522461,
            "unit": "ns/iter",
            "extra": "iterations: 7272\ncpu: 119540.38778877871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1234.142575063168,
            "unit": "ns/iter",
            "extra": "iterations: 567722\ncpu: 1234.121982237786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1031.8040778089246,
            "unit": "ns/iter",
            "extra": "iterations: 682082\ncpu: 1031.7872337930055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1030.9796107631396,
            "unit": "ns/iter",
            "extra": "iterations: 670697\ncpu: 1030.961223920786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1017.5299307151428,
            "unit": "ns/iter",
            "extra": "iterations: 688607\ncpu: 1017.4883496682436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1988.7069217942096,
            "unit": "ns/iter",
            "extra": "iterations: 353810\ncpu: 1988.6116842373008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5623.732200000404,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5623.721999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30595.456987856138,
            "unit": "ns/iter",
            "extra": "iterations: 27097\ncpu: 30594.71897258002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23684.442861672753,
            "unit": "ns/iter",
            "extra": "iterations: 34679\ncpu: 23682.848409700397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23551.0997392075,
            "unit": "ns/iter",
            "extra": "iterations: 34510\ncpu: 23550.32454361057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23618.299593497795,
            "unit": "ns/iter",
            "extra": "iterations: 34440\ncpu: 23617.026713124276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65093.3847234532,
            "unit": "ns/iter",
            "extra": "iterations: 13524\ncpu: 65091.53356994962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 599909.8379999168,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 599889.6000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 607378.0671279763,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 607350.1730103791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 612876.4812985156,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 612852.1524347217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 604957.3494736474,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 604932.9824561393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 352023.4533279091,
            "unit": "ns/iter",
            "extra": "iterations: 2464\ncpu: 352001.6233766238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 607259.4284717189,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 607230.495464061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2569096.258953047,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2568996.4187327786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1160744.7884855394,
            "unit": "ns/iter",
            "extra": "iterations: 799\ncpu: 1160706.007509387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3428541.9595589163,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3428357.7205882357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8832.838824391007,
            "unit": "ns/iter",
            "extra": "iterations: 95610\ncpu: 8832.575044451434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 48355.13809248789,
            "unit": "ns/iter",
            "extra": "iterations: 17300\ncpu: 48353.838150288946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38195.034774609834,
            "unit": "ns/iter",
            "extra": "iterations: 21740\ncpu: 38193.771849125966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 38041.653490173936,
            "unit": "ns/iter",
            "extra": "iterations: 21933\ncpu: 38040.89727807437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 37850.09833884145,
            "unit": "ns/iter",
            "extra": "iterations: 21792\ncpu: 37849.18777533042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79382.56927766389,
            "unit": "ns/iter",
            "extra": "iterations: 10826\ncpu: 79381.17494919652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 646657.3249999783,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 646613.9999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 518979.8280000559,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518952.8999999951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 516097.50399995846,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516059.9999999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 514327.5010000252,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514326.0999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 377576.5491803302,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 377566.5660051793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 506234.3570000394,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506233.0999999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2727529.612903226,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2727368.0351906037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1175509.361355135,
            "unit": "ns/iter",
            "extra": "iterations: 797\ncpu: 1175470.263488086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5504.732789999025,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5504.61299999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29515.382961063584,
            "unit": "ns/iter",
            "extra": "iterations: 27713\ncpu: 29514.928012124234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23514.449096016677,
            "unit": "ns/iter",
            "extra": "iterations: 35233\ncpu: 23512.777793545934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23344.84186862144,
            "unit": "ns/iter",
            "extra": "iterations: 35363\ncpu: 23344.345785142596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23557.400698345707,
            "unit": "ns/iter",
            "extra": "iterations: 35226\ncpu: 23556.31067961164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64496.808536132,
            "unit": "ns/iter",
            "extra": "iterations: 13355\ncpu: 64493.979782852926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 617610.1490000292,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 617582.800000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 630795.4740582942,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 630781.2366737716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 617397.1389280903,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 617364.7390691116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 613234.4877365099,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 613197.1969166097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 360293.82946683967,
            "unit": "ns/iter",
            "extra": "iterations: 2457\ncpu: 360279.1208791215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 606420.1862881238,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 606390.6509695292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 586.4524232007112,
            "unit": "ns/iter",
            "extra": "iterations: 1204894\ncpu: 586.4505093394098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3361.16186207071,
            "unit": "ns/iter",
            "extra": "iterations: 208585\ncpu: 3361.1467746961516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2743.6772673736778,
            "unit": "ns/iter",
            "extra": "iterations: 255549\ncpu: 2743.665598378392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2736.0070189551725,
            "unit": "ns/iter",
            "extra": "iterations: 256021\ncpu: 2735.9060389577285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2110.1737849155998,
            "unit": "ns/iter",
            "extra": "iterations: 331191\ncpu: 2110.1388624690853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17700.986801773324,
            "unit": "ns/iter",
            "extra": "iterations: 39475\ncpu: 17699.858138062147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32872.82547147404,
            "unit": "ns/iter",
            "extra": "iterations: 21263\ncpu: 32872.17702111641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7789.181787558848,
            "unit": "ns/iter",
            "extra": "iterations: 89060\ncpu: 7788.901863912003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7747.531168000548,
            "unit": "ns/iter",
            "extra": "iterations: 90702\ncpu: 7747.358382395057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7769.914524599102,
            "unit": "ns/iter",
            "extra": "iterations: 90061\ncpu: 7769.599493676535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14845.380872804037,
            "unit": "ns/iter",
            "extra": "iterations: 47273\ncpu: 14845.05108624383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14790.799694806588,
            "unit": "ns/iter",
            "extra": "iterations: 47183\ncpu: 14790.763622491382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4534.156697857857,
            "unit": "ns/iter",
            "extra": "iterations: 153997\ncpu: 4534.003909167053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22804.61636653724,
            "unit": "ns/iter",
            "extra": "iterations: 30709\ncpu: 22804.526360350086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18291.91223002659,
            "unit": "ns/iter",
            "extra": "iterations: 38430\ncpu: 18291.83710642725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18230.39500181743,
            "unit": "ns/iter",
            "extra": "iterations: 38534\ncpu: 18230.290133388524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18712.91882037808,
            "unit": "ns/iter",
            "extra": "iterations: 37300\ncpu: 18712.345844503932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 45805.95877773217,
            "unit": "ns/iter",
            "extra": "iterations: 15283\ncpu: 45805.12333965876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 161277.75622691878,
            "unit": "ns/iter",
            "extra": "iterations: 4336\ncpu: 161273.6392988919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134315.6042105148,
            "unit": "ns/iter",
            "extra": "iterations: 5225\ncpu: 134312.4976076562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 135106.74348581643,
            "unit": "ns/iter",
            "extra": "iterations: 5181\ncpu: 135097.9347616313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133271.4742505726,
            "unit": "ns/iter",
            "extra": "iterations: 5204\ncpu: 133268.9085318981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83289.42380106899,
            "unit": "ns/iter",
            "extra": "iterations: 8445\ncpu: 83285.03256364717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134361.96769201322,
            "unit": "ns/iter",
            "extra": "iterations: 5169\ncpu: 134358.1737279944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4410.831610754227,
            "unit": "ns/iter",
            "extra": "iterations: 158193\ncpu: 4410.758377424985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 22106.850230412805,
            "unit": "ns/iter",
            "extra": "iterations: 31682\ncpu: 22106.173852660664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17973.64284613574,
            "unit": "ns/iter",
            "extra": "iterations: 38930\ncpu: 17973.334189570865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17903.731008305094,
            "unit": "ns/iter",
            "extra": "iterations: 39254\ncpu: 17903.45952004901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 18157.35916677554,
            "unit": "ns/iter",
            "extra": "iterations: 38645\ncpu: 18157.282960279274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44550.210603170446,
            "unit": "ns/iter",
            "extra": "iterations: 15750\ncpu: 44548.48888888912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 158966.2635166031,
            "unit": "ns/iter",
            "extra": "iterations: 4402\ncpu: 158962.6079054956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 132927.97836810295,
            "unit": "ns/iter",
            "extra": "iterations: 5270\ncpu: 132921.68880455312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 133422.392455709,
            "unit": "ns/iter",
            "extra": "iterations: 5249\ncpu: 133418.78453038514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 133734.60053721833,
            "unit": "ns/iter",
            "extra": "iterations: 5212\ncpu: 133729.10590943837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82183.79976289702,
            "unit": "ns/iter",
            "extra": "iterations: 8435\ncpu: 82180.4149377603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 132869.12962961305,
            "unit": "ns/iter",
            "extra": "iterations: 5292\ncpu: 132866.6288737698 ns\nthreads: 1"
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
        "date": 1705959190781,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1368.5050099102518,
            "unit": "ns/iter",
            "extra": "iterations: 511087\ncpu: 1368.452924844498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16622.66041510315,
            "unit": "ns/iter",
            "extra": "iterations: 47988\ncpu: 16622.774443610902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35261.24129554403,
            "unit": "ns/iter",
            "extra": "iterations: 23465\ncpu: 35260.11932665673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52603.8096213546,
            "unit": "ns/iter",
            "extra": "iterations: 16110\ncpu: 52603.699565487244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 59118.685800001454,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59119.17000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74291.3392963082,
            "unit": "ns/iter",
            "extra": "iterations: 11795\ncpu: 74288.40186519711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 88382.00834266041,
            "unit": "ns/iter",
            "extra": "iterations: 9829\ncpu: 88377.8919523858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 102877.53080346555,
            "unit": "ns/iter",
            "extra": "iterations: 8538\ncpu: 102872.26516748656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 119668.35840585106,
            "unit": "ns/iter",
            "extra": "iterations: 7126\ncpu: 119659.87931518369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1214.3985232173488,
            "unit": "ns/iter",
            "extra": "iterations: 576659\ncpu: 1214.3405374753559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1020.8977861844592,
            "unit": "ns/iter",
            "extra": "iterations: 689398\ncpu: 1020.8552969402292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1010.6593365974504,
            "unit": "ns/iter",
            "extra": "iterations: 692581\ncpu: 1010.6560821044742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1007.1202367717274,
            "unit": "ns/iter",
            "extra": "iterations: 695353\ncpu: 1007.1043052952964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1996.166737081108,
            "unit": "ns/iter",
            "extra": "iterations: 350306\ncpu: 1996.0717201532364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5422.213260000035,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5422.133999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30555.885051524823,
            "unit": "ns/iter",
            "extra": "iterations: 27073\ncpu: 30555.50179145275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23877.20151707388,
            "unit": "ns/iter",
            "extra": "iterations: 34672\ncpu: 23876.759344716236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23864.175087759406,
            "unit": "ns/iter",
            "extra": "iterations: 34754\ncpu: 23862.004373597265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23946.089496400924,
            "unit": "ns/iter",
            "extra": "iterations: 34750\ncpu: 23945.706474820236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 63221.06098531274,
            "unit": "ns/iter",
            "extra": "iterations: 13823\ncpu: 63220.285032192725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 610743.3729999912,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 610615.7000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 599610.9125606578,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 599588.8965995841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 601878.4961779071,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 601863.58582349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 604820.3487072418,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 604785.3948287907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 355219.12126109184,
            "unit": "ns/iter",
            "extra": "iterations: 2474\ncpu: 355198.6661277282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 599673.3222683105,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 599645.4356846483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2534464.7002723482,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2534385.5585831064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1151540.6899508708,
            "unit": "ns/iter",
            "extra": "iterations: 816\ncpu: 1151470.588235297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3414879.2389705605,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3407545.588235299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8766.163665967872,
            "unit": "ns/iter",
            "extra": "iterations: 96422\ncpu: 8766.045093443434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 48565.832426421905,
            "unit": "ns/iter",
            "extra": "iterations: 17091\ncpu: 48564.69486864425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38328.35543964472,
            "unit": "ns/iter",
            "extra": "iterations: 21472\ncpu: 38327.85488077499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37569.67223656419,
            "unit": "ns/iter",
            "extra": "iterations: 22083\ncpu: 37568.690848163824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38164.53731478575,
            "unit": "ns/iter",
            "extra": "iterations: 22069\ncpu: 38162.970682858424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 77572.12204234258,
            "unit": "ns/iter",
            "extra": "iterations: 11242\ncpu: 77571.15281978312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 633098.1569999495,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 633092.4000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 509892.68799992255,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509873.90000000235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 509854.4059999313,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509834.20000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 507234.2350000554,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507230.50000000565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 371015.08498941513,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 371005.1585623677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 618919.6742370465,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 618901.561391058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2708280.529069855,
            "unit": "ns/iter",
            "extra": "iterations: 344\ncpu: 2708243.6046511484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1191578.9640102456,
            "unit": "ns/iter",
            "extra": "iterations: 778\ncpu: 1191551.542416448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5556.886069999791,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5556.8360000000175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29917.570215878524,
            "unit": "ns/iter",
            "extra": "iterations: 27330\ncpu: 29916.19465788527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23423.52436882972,
            "unit": "ns/iter",
            "extra": "iterations: 34737\ncpu: 23423.22595503367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22995.347418238456,
            "unit": "ns/iter",
            "extra": "iterations: 35499\ncpu: 22994.599847883153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23602.025331759458,
            "unit": "ns/iter",
            "extra": "iterations: 34739\ncpu: 23601.54869167219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64142.60929203823,
            "unit": "ns/iter",
            "extra": "iterations: 13560\ncpu: 64140.43510324489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 612350.5289999684,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 612354.2999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 614785.8140351067,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 614767.3684210537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 617431.6511954595,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 617414.4163150475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 615565.771287815,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 615450.5277973281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 356642.62685968657,
            "unit": "ns/iter",
            "extra": "iterations: 2487\ncpu: 356626.81946119654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 601521.1614011364,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 601506.1813186824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 578.797835993279,
            "unit": "ns/iter",
            "extra": "iterations: 1201475\ncpu: 578.790237000349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3331.5860271310507,
            "unit": "ns/iter",
            "extra": "iterations: 210236\ncpu: 3331.47082326529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2716.6462297910034,
            "unit": "ns/iter",
            "extra": "iterations: 258487\ncpu: 2716.5768491258846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2698.1229862583655,
            "unit": "ns/iter",
            "extra": "iterations: 259281\ncpu: 2697.8737354453065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2083.4338653420377,
            "unit": "ns/iter",
            "extra": "iterations: 336586\ncpu: 2083.342741528157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17313.10194571723,
            "unit": "ns/iter",
            "extra": "iterations: 40345\ncpu: 17313.000371793263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32763.80451057749,
            "unit": "ns/iter",
            "extra": "iterations: 21372\ncpu: 32763.04510574575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7765.604295126572,
            "unit": "ns/iter",
            "extra": "iterations: 90009\ncpu: 7765.424568654311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7747.332927585752,
            "unit": "ns/iter",
            "extra": "iterations: 90368\ncpu: 7747.386242917757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7744.8498246317695,
            "unit": "ns/iter",
            "extra": "iterations: 90381\ncpu: 7744.597869021223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15304.372637088798,
            "unit": "ns/iter",
            "extra": "iterations: 45865\ncpu: 15304.11206802577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14712.878118032751,
            "unit": "ns/iter",
            "extra": "iterations: 47546\ncpu: 14712.261809615831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4499.824025765117,
            "unit": "ns/iter",
            "extra": "iterations: 155250\ncpu: 4499.724315619995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22665.44253431687,
            "unit": "ns/iter",
            "extra": "iterations: 30888\ncpu: 22663.950401450387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18150.514911827097,
            "unit": "ns/iter",
            "extra": "iterations: 38560\ncpu: 18150.186721991806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 18132.804502707877,
            "unit": "ns/iter",
            "extra": "iterations: 38599\ncpu: 18132.029327184657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18644.417229504197,
            "unit": "ns/iter",
            "extra": "iterations: 37459\ncpu: 18644.024133052084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 46127.2483698912,
            "unit": "ns/iter",
            "extra": "iterations: 15183\ncpu: 46125.653691628904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159763.9267075024,
            "unit": "ns/iter",
            "extra": "iterations: 4407\ncpu: 159761.35693215407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132532.57175313425,
            "unit": "ns/iter",
            "extra": "iterations: 5282\ncpu: 132527.35706172042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133026.06260639668,
            "unit": "ns/iter",
            "extra": "iterations: 5287\ncpu: 133023.56724040178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131156.286747891,
            "unit": "ns/iter",
            "extra": "iterations: 5252\ncpu: 131155.5597867476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 82273.57987127427,
            "unit": "ns/iter",
            "extra": "iterations: 8545\ncpu: 82271.62083089403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132545.78192496212,
            "unit": "ns/iter",
            "extra": "iterations: 5278\ncpu: 132542.02349374694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4390.357411223337,
            "unit": "ns/iter",
            "extra": "iterations: 159164\ncpu: 4390.3257017919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 22257.81817315074,
            "unit": "ns/iter",
            "extra": "iterations: 31464\ncpu: 22257.500635647146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17945.88431110459,
            "unit": "ns/iter",
            "extra": "iterations: 38932\ncpu: 17945.276379328003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17703.657388612555,
            "unit": "ns/iter",
            "extra": "iterations: 39412\ncpu: 17702.123718664247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 18244.851132517266,
            "unit": "ns/iter",
            "extra": "iterations: 38410\ncpu: 18244.043217911814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44935.52318219775,
            "unit": "ns/iter",
            "extra": "iterations: 15637\ncpu: 44933.970710493886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156599.87961511826,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 156594.36115462182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 131451.0915216051,
            "unit": "ns/iter",
            "extra": "iterations: 5343\ncpu: 131449.2232827996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 130689.1889055359,
            "unit": "ns/iter",
            "extra": "iterations: 5336\ncpu: 130690.12368815536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129442.54178246009,
            "unit": "ns/iter",
            "extra": "iterations: 5397\ncpu: 129436.61293311299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81485.41074745239,
            "unit": "ns/iter",
            "extra": "iterations: 8616\ncpu: 81481.75487465241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 131165.60876897757,
            "unit": "ns/iter",
            "extra": "iterations: 5337\ncpu: 131159.45287614912 ns\nthreads: 1"
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
        "date": 1705960637886,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1370.2665845120516,
            "unit": "ns/iter",
            "extra": "iterations: 516099\ncpu: 1370.278570584326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16617.263791229634,
            "unit": "ns/iter",
            "extra": "iterations: 48781\ncpu: 16617.117320268142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35447.06658963512,
            "unit": "ns/iter",
            "extra": "iterations: 23367\ncpu: 35446.44156288783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52507.098052635156,
            "unit": "ns/iter",
            "extra": "iterations: 16073\ncpu: 52505.68655509237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58896.38040000591,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58896.75000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 73709.05424153367,
            "unit": "ns/iter",
            "extra": "iterations: 11965\ncpu: 73708.93439197663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 87661.66720387117,
            "unit": "ns/iter",
            "extra": "iterations: 9928\ncpu: 87660.75745366646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 101527.07808653888,
            "unit": "ns/iter",
            "extra": "iterations: 8529\ncpu: 101526.43920741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 117474.084581146,
            "unit": "ns/iter",
            "extra": "iterations: 7413\ncpu: 117471.96816403605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1259.2463270281523,
            "unit": "ns/iter",
            "extra": "iterations: 551665\ncpu: 1259.1940761150315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 981.8447672336711,
            "unit": "ns/iter",
            "extra": "iterations: 712195\ncpu: 981.7978222256542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1003.7352690056563,
            "unit": "ns/iter",
            "extra": "iterations: 698052\ncpu: 1003.707460189212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 981.6339039491904,
            "unit": "ns/iter",
            "extra": "iterations: 714725\ncpu: 981.5892825912076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1974.7682949836883,
            "unit": "ns/iter",
            "extra": "iterations: 355111\ncpu: 1974.780279968796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5626.583930001061,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5626.557000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30246.990321292513,
            "unit": "ns/iter",
            "extra": "iterations: 27483\ncpu: 30245.657315431345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23824.212467425932,
            "unit": "ns/iter",
            "extra": "iterations: 34923\ncpu: 23823.216791226412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23609.177206849625,
            "unit": "ns/iter",
            "extra": "iterations: 34914\ncpu: 23608.148593687336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23693.570267840492,
            "unit": "ns/iter",
            "extra": "iterations: 34461\ncpu: 23692.95435419751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65249.531360423905,
            "unit": "ns/iter",
            "extra": "iterations: 13584\ncpu: 65246.186690223636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 607344.6309999326,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 607314.8999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 605709.2491252302,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 605680.8957312817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 598493.1399580016,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 598452.2743177059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 610060.6112676213,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 610028.1690140853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 355407.43518521485,
            "unit": "ns/iter",
            "extra": "iterations: 2484\ncpu: 355393.27697262436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 608129.7361013283,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 608098.0295566507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2563846.54143672,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2563712.4309392306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1148929.7962732748,
            "unit": "ns/iter",
            "extra": "iterations: 805\ncpu: 1148858.881987576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3408930.531365154,
            "unit": "ns/iter",
            "extra": "iterations: 271\ncpu: 3408785.608856091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8707.099375746173,
            "unit": "ns/iter",
            "extra": "iterations: 97076\ncpu: 8706.676212452105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 48454.58552402848,
            "unit": "ns/iter",
            "extra": "iterations: 17270\ncpu: 48452.92414591775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 38619.916794141966,
            "unit": "ns/iter",
            "extra": "iterations: 21573\ncpu: 38619.84424975655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39599.35238592242,
            "unit": "ns/iter",
            "extra": "iterations: 21082\ncpu: 39596.376055402434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 38011.95916034016,
            "unit": "ns/iter",
            "extra": "iterations: 21866\ncpu: 38010.01097594443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79537.0928695949,
            "unit": "ns/iter",
            "extra": "iterations: 10897\ncpu: 79533.10085344623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 642260.7209999568,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 642264.9000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 516402.1780000212,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516399.49999999854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 511247.11399995704,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511199.0999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 510339.0020000234,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510320.30000000366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 372315.51490633906,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 372302.25724020397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 502881.65400002076,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502843.09999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2722053.3615160366,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2721960.349854229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1165739.166246827,
            "unit": "ns/iter",
            "extra": "iterations: 794\ncpu: 1165681.234256924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5479.445930000111,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5478.97599999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29975.347559407546,
            "unit": "ns/iter",
            "extra": "iterations: 27227\ncpu: 29973.963345208962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23634.466811214974,
            "unit": "ns/iter",
            "extra": "iterations: 34590\ncpu: 23633.677363399845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23347.34865410286,
            "unit": "ns/iter",
            "extra": "iterations: 35181\ncpu: 23346.22949887723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23586.887496056057,
            "unit": "ns/iter",
            "extra": "iterations: 34861\ncpu: 23585.413499326012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 63861.79809384206,
            "unit": "ns/iter",
            "extra": "iterations: 13640\ncpu: 63858.570381231744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 622281.9130000516,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 622271.3000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 619141.1039885983,
            "unit": "ns/iter",
            "extra": "iterations: 1404\ncpu: 619115.5982905978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 620936.5014244461,
            "unit": "ns/iter",
            "extra": "iterations: 1404\ncpu: 620917.0940170928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 625715.6304192934,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 625693.6034115162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 353978.9670682409,
            "unit": "ns/iter",
            "extra": "iterations: 2490\ncpu: 353960.4819277101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 608324.368128102,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 608305.8455114831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 545.2650817342289,
            "unit": "ns/iter",
            "extra": "iterations: 1287037\ncpu: 545.2408128126881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3332.7827532413194,
            "unit": "ns/iter",
            "extra": "iterations: 210254\ncpu: 3332.5691782320314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2711.6348063795367,
            "unit": "ns/iter",
            "extra": "iterations: 258263\ncpu: 2711.498356326702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2689.7079837559195,
            "unit": "ns/iter",
            "extra": "iterations: 279981\ncpu: 2689.6125094202935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2086.8168443197164,
            "unit": "ns/iter",
            "extra": "iterations: 336517\ncpu: 2086.736182718856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17599.207708399146,
            "unit": "ns/iter",
            "extra": "iterations: 39671\ncpu: 17598.525371178042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 33380.579758558175,
            "unit": "ns/iter",
            "extra": "iterations: 20957\ncpu: 33379.82058500751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7907.000315272859,
            "unit": "ns/iter",
            "extra": "iterations: 88812\ncpu: 7906.976534702538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7860.739577619919,
            "unit": "ns/iter",
            "extra": "iterations: 89351\ncpu: 7860.500721872155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7832.742141465014,
            "unit": "ns/iter",
            "extra": "iterations: 89266\ncpu: 7832.734747832366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15416.703451628298,
            "unit": "ns/iter",
            "extra": "iterations: 45254\ncpu: 15416.659300835585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14927.196474141116,
            "unit": "ns/iter",
            "extra": "iterations: 47024\ncpu: 14926.741663831403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 4370.515809469292,
            "unit": "ns/iter",
            "extra": "iterations: 124767\ncpu: 4370.497006419935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 22484.04502741975,
            "unit": "ns/iter",
            "extra": "iterations: 31181\ncpu: 22483.688784837188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 18004.773651178784,
            "unit": "ns/iter",
            "extra": "iterations: 38719\ncpu: 18004.643714972106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 17984.652810981053,
            "unit": "ns/iter",
            "extra": "iterations: 38901\ncpu: 17984.49911313319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 18388.612601947894,
            "unit": "ns/iter",
            "extra": "iterations: 38010\ncpu: 18388.405682714976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 45732.9240580866,
            "unit": "ns/iter",
            "extra": "iterations: 15288\ncpu: 45733.18942961785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159577.73649569842,
            "unit": "ns/iter",
            "extra": "iterations: 4406\ncpu: 159576.7816613711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133639.49532176743,
            "unit": "ns/iter",
            "extra": "iterations: 5237\ncpu: 133638.97269428946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133207.68409920426,
            "unit": "ns/iter",
            "extra": "iterations: 5201\ncpu: 133203.46087290943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133680.58279283732,
            "unit": "ns/iter",
            "extra": "iterations: 5242\ncpu: 133680.00763067382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81909.73157585623,
            "unit": "ns/iter",
            "extra": "iterations: 8535\ncpu: 81906.87756297716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134761.38285605304,
            "unit": "ns/iter",
            "extra": "iterations: 5203\ncpu: 134761.0993657526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4364.252339008794,
            "unit": "ns/iter",
            "extra": "iterations: 160645\ncpu: 4364.186249182953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 22224.39328842118,
            "unit": "ns/iter",
            "extra": "iterations: 31468\ncpu: 22224.0911402056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 17858.732012140055,
            "unit": "ns/iter",
            "extra": "iterations: 39207\ncpu: 17858.45129696216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 17471.318597979123,
            "unit": "ns/iter",
            "extra": "iterations: 40085\ncpu: 17471.450667331865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 17946.786703883878,
            "unit": "ns/iter",
            "extra": "iterations: 39049\ncpu: 17946.9051704268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 44918.01664426096,
            "unit": "ns/iter",
            "extra": "iterations: 15621\ncpu: 44916.95153959383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156773.87007169164,
            "unit": "ns/iter",
            "extra": "iterations: 4464\ncpu: 156774.86559139815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 131347.7163731731,
            "unit": "ns/iter",
            "extra": "iterations: 5338\ncpu: 131348.50131135195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 130252.49971883206,
            "unit": "ns/iter",
            "extra": "iterations: 5335\ncpu: 130252.1087160267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130571.31630940319,
            "unit": "ns/iter",
            "extra": "iterations: 5365\ncpu: 130568.4808946872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81111.62213740226,
            "unit": "ns/iter",
            "extra": "iterations: 8646\ncpu: 81108.29285218554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 131719.87683340104,
            "unit": "ns/iter",
            "extra": "iterations: 5318\ncpu: 131708.4242196315 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}