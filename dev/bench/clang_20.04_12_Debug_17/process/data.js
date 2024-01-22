window.BENCHMARK_DATA = {
  "lastUpdate": 1705956376980,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-12 20.04 Debug c++-17": [
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
        "date": 1702489572721,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15453.979924109106,
            "unit": "ns/iter",
            "extra": "iterations: 45328\ncpu: 15453.723967525591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 123343.3374179426,
            "unit": "ns/iter",
            "extra": "iterations: 6855\ncpu: 123339.48942377829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 235122.5973333385,
            "unit": "ns/iter",
            "extra": "iterations: 3750\ncpu: 235100.5866666668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 339862.4733542489,
            "unit": "ns/iter",
            "extra": "iterations: 2552\ncpu: 339863.6755485892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 445111.37506410974,
            "unit": "ns/iter",
            "extra": "iterations: 1949\ncpu: 445106.7213955874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 553219.743475469,
            "unit": "ns/iter",
            "extra": "iterations: 1571\ncpu: 553213.0490133674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 531916.8589999208,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531904.2999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 616209.3179999602,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 616186.4000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 702876.9354593229,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 702853.227031131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12155.324251343902,
            "unit": "ns/iter",
            "extra": "iterations: 57403\ncpu: 12155.146943539545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10289.799448088545,
            "unit": "ns/iter",
            "extra": "iterations: 68127\ncpu: 10289.468199098754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10182.633893259066,
            "unit": "ns/iter",
            "extra": "iterations: 68521\ncpu: 10182.484201923491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10255.414798632883,
            "unit": "ns/iter",
            "extra": "iterations: 68209\ncpu: 10255.04405576977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16499.713184689383,
            "unit": "ns/iter",
            "extra": "iterations: 42428\ncpu: 16499.61581974169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54023.148086851856,
            "unit": "ns/iter",
            "extra": "iterations: 15106\ncpu: 54022.08394015627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 248055.78393273702,
            "unit": "ns/iter",
            "extra": "iterations: 3448\ncpu: 248052.46519721553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 195536.05986236708,
            "unit": "ns/iter",
            "extra": "iterations: 4360\ncpu: 195527.4541284406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 196188.5643861009,
            "unit": "ns/iter",
            "extra": "iterations: 4341\ncpu: 196183.5291407509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 193602.52978625539,
            "unit": "ns/iter",
            "extra": "iterations: 4398\ncpu: 193594.63392451077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 454567.82362041017,
            "unit": "ns/iter",
            "extra": "iterations: 1939\ncpu: 454545.6936565234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3774690.5243899734,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3774613.4146341393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3073706.529801181,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3073567.880794698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3112721.969899708,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3112612.04013378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3058540.646864731,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3058350.1650164975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1819067.5736740397,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1818972.1021610966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2997406.2225806527,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2997265.1612903248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11669247.771739382,
            "unit": "ns/iter",
            "extra": "iterations: 92\ncpu: 11668536.95652176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5348027.259999526,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5347541.999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15355413.333334554,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 15354724.637681162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53500.48829999423,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53496.55999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 278551.5154270976,
            "unit": "ns/iter",
            "extra": "iterations: 3079\ncpu: 278537.80448197504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 226939.71390729691,
            "unit": "ns/iter",
            "extra": "iterations: 3775\ncpu: 226923.73509933878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 228491.94219499352,
            "unit": "ns/iter",
            "extra": "iterations: 3754\ncpu: 228477.6771443807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 229355.28766754275,
            "unit": "ns/iter",
            "extra": "iterations: 3730\ncpu: 229344.20911528167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 470301.7920522633,
            "unit": "ns/iter",
            "extra": "iterations: 1837\ncpu: 470280.1850843762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3864181.5020919503,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3863853.5564853693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3155521.5288135204,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3155340.338983062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3140585.7499998542,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3140415.540540546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3122984.2449663575,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3122819.127516777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1849421.3944224603,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1849338.2470119456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3047470.4705881653,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3047333.3333333177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11967343.87640467,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 11966553.932584269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5415865.379999331,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5415723.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55848.07983826821,
            "unit": "ns/iter",
            "extra": "iterations: 14592\ncpu: 55848.26617324539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 253239.1828115826,
            "unit": "ns/iter",
            "extra": "iterations: 3386\ncpu: 253223.92203189482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 200351.300702577,
            "unit": "ns/iter",
            "extra": "iterations: 4270\ncpu: 200339.92974238898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 196286.98758335138,
            "unit": "ns/iter",
            "extra": "iterations: 4349\ncpu: 196278.27086686654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 193926.80122531942,
            "unit": "ns/iter",
            "extra": "iterations: 4407\ncpu: 193921.10279101532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 456503.45759163453,
            "unit": "ns/iter",
            "extra": "iterations: 1910\ncpu: 456476.07329842943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3825616.65983592,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3825413.5245901733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3096262.1357614365,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3096121.8543046517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3113507.486666549,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3113316.3333333395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3075525.0264026397,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3075390.4290428944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1820570.9723864626,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1820484.4181459507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3007444.4129031836,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3007285.483870978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6161.143794240625,
            "unit": "ns/iter",
            "extra": "iterations: 113725\ncpu: 6160.809848318303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34077.757727935554,
            "unit": "ns/iter",
            "extra": "iterations: 20510\ncpu: 34075.47050219383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27007.824871825615,
            "unit": "ns/iter",
            "extra": "iterations: 25941\ncpu: 27006.079179677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26930.87869230864,
            "unit": "ns/iter",
            "extra": "iterations: 26000\ncpu: 26929.52307692309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21808.425236121468,
            "unit": "ns/iter",
            "extra": "iterations: 32081\ncpu: 21807.15376702739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 131652.99434175593,
            "unit": "ns/iter",
            "extra": "iterations: 5302\ncpu: 131645.37910222614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 256223.41837477955,
            "unit": "ns/iter",
            "extra": "iterations: 2732\ncpu: 256209.69985359148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 65793.27309501694,
            "unit": "ns/iter",
            "extra": "iterations: 10630\ncpu: 65792.35183443065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66698.2902087932,
            "unit": "ns/iter",
            "extra": "iterations: 10489\ncpu: 66695.05195919533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65939.85013648726,
            "unit": "ns/iter",
            "extra": "iterations: 10623\ncpu: 65935.24428127566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 135431.621130029,
            "unit": "ns/iter",
            "extra": "iterations: 5168\ncpu: 135416.75696594574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 122356.67039888485,
            "unit": "ns/iter",
            "extra": "iterations: 5716\ncpu: 122347.51574527677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42763.94687499901,
            "unit": "ns/iter",
            "extra": "iterations: 16320\ncpu: 42761.9240196082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 208935.06020864006,
            "unit": "ns/iter",
            "extra": "iterations: 3355\ncpu: 208922.9210134096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 168887.68751507992,
            "unit": "ns/iter",
            "extra": "iterations: 4141\ncpu: 168877.95218546237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 168556.03199424324,
            "unit": "ns/iter",
            "extra": "iterations: 4157\ncpu: 168546.66827038725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 170688.8496588836,
            "unit": "ns/iter",
            "extra": "iterations: 4104\ncpu: 170689.57115009605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 286792.5105863082,
            "unit": "ns/iter",
            "extra": "iterations: 2456\ncpu: 286786.1970683999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1115094.098726017,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1115074.3630573251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 941800.2258065501,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 941730.6451612855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 957551.2067567001,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 957480 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 946868.4405405653,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 946813.3783783698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 623136.5115864158,
            "unit": "ns/iter",
            "extra": "iterations: 1122\ncpu: 623127.2727272756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 927784.8320104649,
            "unit": "ns/iter",
            "extra": "iterations: 756\ncpu: 927754.1005291053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43183.13866321831,
            "unit": "ns/iter",
            "extra": "iterations: 16248\ncpu: 43181.425406203525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 212192.00272891668,
            "unit": "ns/iter",
            "extra": "iterations: 3298\ncpu: 212192.78350515652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 173560.68145760553,
            "unit": "ns/iter",
            "extra": "iterations: 4034\ncpu: 173559.32077342388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 170035.2238661379,
            "unit": "ns/iter",
            "extra": "iterations: 4123\ncpu: 170022.7989328153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 171361.020843557,
            "unit": "ns/iter",
            "extra": "iterations: 4078\ncpu: 171346.983815595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 285956.0449346839,
            "unit": "ns/iter",
            "extra": "iterations: 2448\ncpu: 285942.11601306865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1115047.602870785,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1114962.9984051066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 929068.6153846838,
            "unit": "ns/iter",
            "extra": "iterations: 754\ncpu: 929005.8355437671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 941035.4523490376,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 940964.966442964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 938003.9785809455,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 937976.1713520689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 629778.0879712747,
            "unit": "ns/iter",
            "extra": "iterations: 1114\ncpu: 629746.1400359104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 929805.0703851179,
            "unit": "ns/iter",
            "extra": "iterations: 753\ncpu: 929774.5019920326 ns\nthreads: 1"
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
        "date": 1702492201600,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15637.070568023339,
            "unit": "ns/iter",
            "extra": "iterations: 44822\ncpu: 15636.316987193792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 127555.64965476765,
            "unit": "ns/iter",
            "extra": "iterations: 6662\ncpu: 127554.92344641249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 238605.15405777123,
            "unit": "ns/iter",
            "extra": "iterations: 3635\ncpu: 238597.44154057774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 347223.484078978,
            "unit": "ns/iter",
            "extra": "iterations: 2481\ncpu: 347221.4026602178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 459465.9144667287,
            "unit": "ns/iter",
            "extra": "iterations: 1894\ncpu: 459429.1446673709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 569195.7201834176,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 569176.7365661856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 546319.6330000528,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 546326.0000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 633597.964000046,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 633552.2999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 721053.7171874698,
            "unit": "ns/iter",
            "extra": "iterations: 1280\ncpu: 721025.3906250006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12311.625050421053,
            "unit": "ns/iter",
            "extra": "iterations: 57021\ncpu: 12311.1380017888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10335.333510512748,
            "unit": "ns/iter",
            "extra": "iterations: 67728\ncpu: 10335.136132766374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10405.012264739864,
            "unit": "ns/iter",
            "extra": "iterations: 67266\ncpu: 10405.122944726907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10453.984567900408,
            "unit": "ns/iter",
            "extra": "iterations: 67068\ncpu: 10453.688793463345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16826.126408882395,
            "unit": "ns/iter",
            "extra": "iterations: 41611\ncpu: 16825.7768378554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54209.92823889722,
            "unit": "ns/iter",
            "extra": "iterations: 15036\ncpu: 54207.88108539496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 259238.3383731427,
            "unit": "ns/iter",
            "extra": "iterations: 3307\ncpu: 259239.3710311463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 204800.61490684323,
            "unit": "ns/iter",
            "extra": "iterations: 4186\ncpu: 204795.36550406125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 204856.83026094642,
            "unit": "ns/iter",
            "extra": "iterations: 4177\ncpu: 204854.41704572717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 199224.88016818467,
            "unit": "ns/iter",
            "extra": "iterations: 4281\ncpu: 199221.35015183338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 452368.88265565725,
            "unit": "ns/iter",
            "extra": "iterations: 1943\ncpu: 452361.2454966548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3934603.1313558705,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3934457.203389828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3175899.8941977117,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3175762.7986348206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3214305.1280278014,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3214254.325259525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3208563.2006920166,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3208479.930795842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1844357.7529881105,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1844359.960159367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3113876.639730602,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3113780.808080808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11824929.100000897,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11824755.555555556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5458974.150000131,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5458478.999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15510717.000000462,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 15510498.529411756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53243.880299999095,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53241.50999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 290689.8588832493,
            "unit": "ns/iter",
            "extra": "iterations: 2955\ncpu: 290692.89340101555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 232219.1548264621,
            "unit": "ns/iter",
            "extra": "iterations: 3688\ncpu: 232213.3676789595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 231549.48271205314,
            "unit": "ns/iter",
            "extra": "iterations: 3702\ncpu: 231544.46245272824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 230510.13125335608,
            "unit": "ns/iter",
            "extra": "iterations: 3718\ncpu: 230497.82140935975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 476402.1821663202,
            "unit": "ns/iter",
            "extra": "iterations: 1828\ncpu: 476396.33479212143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4000837.4248925336,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4000742.918454936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3249950.355400645,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3249809.4076655013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3248559.909091048,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3248534.615384599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3268605.6097559277,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3268496.864111491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1869517.1512096324,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1869441.7338709643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3144658.6250002855,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3144563.851351369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12058422.258426137,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 12058046.06741575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5353948.040000205,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5353823.999999961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55558.52570333427,
            "unit": "ns/iter",
            "extra": "iterations: 14609\ncpu: 55556.45150249826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 264495.47951955476,
            "unit": "ns/iter",
            "extra": "iterations: 3247\ncpu: 264490.29873729445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 208024.9284845591,
            "unit": "ns/iter",
            "extra": "iterations: 4111\ncpu: 208016.24908781346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 204052.5051202722,
            "unit": "ns/iter",
            "extra": "iterations: 4199\ncpu: 204048.96403905624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 198964.37820811023,
            "unit": "ns/iter",
            "extra": "iterations: 4286\ncpu: 198954.92300513302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 454159.2401247072,
            "unit": "ns/iter",
            "extra": "iterations: 1924\ncpu: 454155.2494802483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3969878.2669493044,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3969760.1694915253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3220765.356401102,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3220756.401384068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3227959.224913695,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3227911.7647058927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3212154.413792773,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3212141.0344827427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1855756.575697157,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1855727.4900398357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3131655.6677854545,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3131563.087248333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6219.458943151633,
            "unit": "ns/iter",
            "extra": "iterations: 112807\ncpu: 6219.471309404603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34673.728001980795,
            "unit": "ns/iter",
            "extra": "iterations: 20195\ncpu: 34672.973508293915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27891.476786350846,
            "unit": "ns/iter",
            "extra": "iterations: 25093\ncpu: 27890.885904435505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27160.590702900932,
            "unit": "ns/iter",
            "extra": "iterations: 25793\ncpu: 27159.713875857764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21860.253392107737,
            "unit": "ns/iter",
            "extra": "iterations: 31986\ncpu: 21860.313887325512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 131059.86557133094,
            "unit": "ns/iter",
            "extra": "iterations: 5356\ncpu: 131056.23599701199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 268221.4491201034,
            "unit": "ns/iter",
            "extra": "iterations: 2614\ncpu: 268217.48278499907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67443.95144509543,
            "unit": "ns/iter",
            "extra": "iterations: 10380\ncpu: 67442.68786127168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 68319.15703847965,
            "unit": "ns/iter",
            "extra": "iterations: 10265\ncpu: 68317.05796395568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 68160.29098879511,
            "unit": "ns/iter",
            "extra": "iterations: 10265\ncpu: 68125.7769118366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 137094.62233104708,
            "unit": "ns/iter",
            "extra": "iterations: 5105\ncpu: 137090.96963761115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 120111.4999140206,
            "unit": "ns/iter",
            "extra": "iterations: 5815\ncpu: 120109.14875322563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 41475.2852490045,
            "unit": "ns/iter",
            "extra": "iterations: 16887\ncpu: 41473.31083081667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 204619.4645255546,
            "unit": "ns/iter",
            "extra": "iterations: 3425\ncpu: 204620.08759123937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 168270.11364728594,
            "unit": "ns/iter",
            "extra": "iterations: 4162\ncpu: 168265.54541086132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 171136.3730100344,
            "unit": "ns/iter",
            "extra": "iterations: 4083\ncpu: 171136.7621846696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 170351.7206418536,
            "unit": "ns/iter",
            "extra": "iterations: 4113\ncpu: 170343.37466569565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 285616.9151020219,
            "unit": "ns/iter",
            "extra": "iterations: 2450\ncpu: 285617.7551020421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1162324.1262458672,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1162324.9169435124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 971505.8091922168,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 971445.961002803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 983193.2059237947,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 983168.2651622045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 978510.2335663587,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 978470.6293706315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 632228.1663653261,
            "unit": "ns/iter",
            "extra": "iterations: 1106\ncpu: 632229.8372513475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 960971.347050725,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 960966.1179698274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42596.78146300175,
            "unit": "ns/iter",
            "extra": "iterations: 16432\ncpu: 42596.57984420609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 210287.28382439056,
            "unit": "ns/iter",
            "extra": "iterations: 3326\ncpu: 210285.3878532745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 171168.2501223735,
            "unit": "ns/iter",
            "extra": "iterations: 4086\ncpu: 171164.4884973054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 171542.78843789644,
            "unit": "ns/iter",
            "extra": "iterations: 4065\ncpu: 171542.68142681482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 170517.22510397577,
            "unit": "ns/iter",
            "extra": "iterations: 4087\ncpu: 170506.41057009794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 281332.9394184191,
            "unit": "ns/iter",
            "extra": "iterations: 2476\ncpu: 281328.9579967661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1152436.484552731,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1152384.0650406468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 969494.847856209,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 969495.9889349891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 990643.2762040668,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 990622.2379603455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 980603.949720779,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 980585.8938547524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 635684.644545439,
            "unit": "ns/iter",
            "extra": "iterations: 1100\ncpu: 635671.4545454555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 965187.1602210382,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 965128.867403305 ns\nthreads: 1"
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
        "date": 1702503243149,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15040.780198316561,
            "unit": "ns/iter",
            "extra": "iterations: 46592\ncpu: 15040.603537087913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 120573.36976346392,
            "unit": "ns/iter",
            "extra": "iterations: 7018\ncpu: 120563.82160159592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 226746.48087002398,
            "unit": "ns/iter",
            "extra": "iterations: 3816\ncpu: 226734.14570230618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 335319.83571152797,
            "unit": "ns/iter",
            "extra": "iterations: 2593\ncpu: 335312.6108754336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 440407.5920523124,
            "unit": "ns/iter",
            "extra": "iterations: 1988\ncpu: 440387.4748490946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 542291.196249991,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 542284.8124999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 521459.7670000103,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521430.1999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 604253.5249999901,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 604252.4999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 689284.5991057683,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 689243.5171385995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11907.085095136426,
            "unit": "ns/iter",
            "extra": "iterations: 58652\ncpu: 11906.502762054159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9952.20419610075,
            "unit": "ns/iter",
            "extra": "iterations: 70780\ncpu: 9951.302627860976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9990.720821247649,
            "unit": "ns/iter",
            "extra": "iterations: 69991\ncpu: 9989.75582574904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10007.782679412046,
            "unit": "ns/iter",
            "extra": "iterations: 70090\ncpu: 10007.61164217435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16274.846432639499,
            "unit": "ns/iter",
            "extra": "iterations: 43043\ncpu: 16274.60911181844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54631.08601431806,
            "unit": "ns/iter",
            "extra": "iterations: 14951\ncpu: 54625.623704099955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 248483.29866745556,
            "unit": "ns/iter",
            "extra": "iterations: 3452\ncpu: 248468.59791425266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 194306.71438354987,
            "unit": "ns/iter",
            "extra": "iterations: 4380\ncpu: 194283.78995433752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 195394.15910132884,
            "unit": "ns/iter",
            "extra": "iterations: 4362\ncpu: 195383.67721228808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 191420.9680755363,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 191399.66276978486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 450337.95846154296,
            "unit": "ns/iter",
            "extra": "iterations: 1950\ncpu: 450314.6153846161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3753930.016129043,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3753720.161290318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3022258.315961097,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3022185.9934853404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3029983.022875608,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3029882.6797385607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2993179.8774192254,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2993078.387096774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1769884.6845124287,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1769772.4665391983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2945376.031745928,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2945258.095238102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11517674.468085175,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11517227.659574453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5110577.120000244,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5110078.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 14963906.084506266,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14962898.591549324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53657.12230000099,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53653.60999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 279092.23958333395,
            "unit": "ns/iter",
            "extra": "iterations: 3072\ncpu: 279078.90624999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 225667.17603590823,
            "unit": "ns/iter",
            "extra": "iterations: 3789\ncpu: 225659.75191343334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 223347.9864548228,
            "unit": "ns/iter",
            "extra": "iterations: 3839\ncpu: 223339.7759833291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 223969.35561358128,
            "unit": "ns/iter",
            "extra": "iterations: 3830\ncpu: 223956.3446475196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 477099.10471488914,
            "unit": "ns/iter",
            "extra": "iterations: 1824\ncpu: 477090.8991228042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3827196.479508131,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3826983.196721318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3108281.073333501,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3108223.333333342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3071320.1518153525,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3071232.673267341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3035913.9739416293,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3035814.9837133414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1818861.0547945504,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1818776.712328764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 2996777.6483871485,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2996592.258064505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11717666.439560892,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11717307.692307742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5078261.8199991705,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5077988.999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54071.28635964937,
            "unit": "ns/iter",
            "extra": "iterations: 14831\ncpu: 54068.95691457085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 253410.40668438637,
            "unit": "ns/iter",
            "extra": "iterations: 3381\ncpu: 253403.31262939874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 201068.98180529565,
            "unit": "ns/iter",
            "extra": "iterations: 4232\ncpu: 201063.58695652042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 198753.70637505743,
            "unit": "ns/iter",
            "extra": "iterations: 4298\ncpu: 198748.58073522573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 194270.450261776,
            "unit": "ns/iter",
            "extra": "iterations: 4393\ncpu: 194263.16867744134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 451482.69067355467,
            "unit": "ns/iter",
            "extra": "iterations: 1930\ncpu: 451453.41968911956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3781570.0769232744,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3781352.631578946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3034541.0032572374,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3034403.583061907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3029985.9381109243,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3029762.8664495023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3002324.4419358126,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3002318.387096774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1776161.3659003929,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1776072.6053639941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 2950791.908227685,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2950586.7088607633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6119.656243963644,
            "unit": "ns/iter",
            "extra": "iterations: 113886\ncpu: 6119.648595964353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34080.11416346573,
            "unit": "ns/iter",
            "extra": "iterations: 20567\ncpu: 34078.217532941024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26791.835539910833,
            "unit": "ns/iter",
            "extra": "iterations: 26134\ncpu: 26790.319124512047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26705.34188523564,
            "unit": "ns/iter",
            "extra": "iterations: 26193\ncpu: 26702.370862444055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21637.357001548025,
            "unit": "ns/iter",
            "extra": "iterations: 32350\ncpu: 21636.092735703314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 127441.43653531493,
            "unit": "ns/iter",
            "extra": "iterations: 5507\ncpu: 127441.36553477398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 252924.65471013854,
            "unit": "ns/iter",
            "extra": "iterations: 2760\ncpu: 252916.05072463638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 64737.3583016642,
            "unit": "ns/iter",
            "extra": "iterations: 10787\ncpu: 64732.52062668133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65111.530335402465,
            "unit": "ns/iter",
            "extra": "iterations: 10763\ncpu: 65105.67685589583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 64055.743899092435,
            "unit": "ns/iter",
            "extra": "iterations: 10941\ncpu: 64052.764829539796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 132490.12488208732,
            "unit": "ns/iter",
            "extra": "iterations: 5301\ncpu: 132486.51197887358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 119777.23995899266,
            "unit": "ns/iter",
            "extra": "iterations: 5851\ncpu: 119773.44043753317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40787.206947046616,
            "unit": "ns/iter",
            "extra": "iterations: 17072\ncpu: 40785.51429240869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 197578.95368539018,
            "unit": "ns/iter",
            "extra": "iterations: 3541\ncpu: 197573.0019768395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 163082.26783217784,
            "unit": "ns/iter",
            "extra": "iterations: 4290\ncpu: 163078.8111888093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 159745.77431998003,
            "unit": "ns/iter",
            "extra": "iterations: 4338\ncpu: 159739.48824343065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 161332.95206268012,
            "unit": "ns/iter",
            "extra": "iterations: 4339\ncpu: 161323.87646923185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 277167.3160601107,
            "unit": "ns/iter",
            "extra": "iterations: 2528\ncpu: 277146.67721518787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1098295.9545455263,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1098215.8307209995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 918922.8412072696,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 918873.8845144224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 919382.5209973783,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 919348.031496061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 910702.565669653,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 910664.6293888222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 605013.0189819054,
            "unit": "ns/iter",
            "extra": "iterations: 1159\ncpu: 604970.1466781639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 907318.3604650999,
            "unit": "ns/iter",
            "extra": "iterations: 774\ncpu: 907255.5555555433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 41200.355954130326,
            "unit": "ns/iter",
            "extra": "iterations: 17005\ncpu: 41197.018523962994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 204106.0873108382,
            "unit": "ns/iter",
            "extra": "iterations: 3436\ncpu: 204097.03143189615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 163542.7396587785,
            "unit": "ns/iter",
            "extra": "iterations: 4279\ncpu: 163533.13858378105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 162704.13055620596,
            "unit": "ns/iter",
            "extra": "iterations: 4297\ncpu: 162694.27507563212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 164257.58348969158,
            "unit": "ns/iter",
            "extra": "iterations: 4264\ncpu: 164247.30300187596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 279284.3185805383,
            "unit": "ns/iter",
            "extra": "iterations: 2508\ncpu: 279277.9106858053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1090253.4439253309,
            "unit": "ns/iter",
            "extra": "iterations: 642\ncpu: 1090201.8691588754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 922796.722589074,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 922763.8044914168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 925290.7569352612,
            "unit": "ns/iter",
            "extra": "iterations: 757\ncpu: 925241.0832232459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 913876.7630208674,
            "unit": "ns/iter",
            "extra": "iterations: 768\ncpu: 913784.24479166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 614836.4114537417,
            "unit": "ns/iter",
            "extra": "iterations: 1135\ncpu: 614799.1189427387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 913477.1019608451,
            "unit": "ns/iter",
            "extra": "iterations: 765\ncpu: 913464.5751633935 ns\nthreads: 1"
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
        "date": 1705574924397,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15460.495639568135,
            "unit": "ns/iter",
            "extra": "iterations: 45523\ncpu: 15460.582562660633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 123355.87689768235,
            "unit": "ns/iter",
            "extra": "iterations: 6060\ncpu: 123354.42244224426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 232593.06251678363,
            "unit": "ns/iter",
            "extra": "iterations: 3727\ncpu: 232592.99704856452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 338648.1655525131,
            "unit": "ns/iter",
            "extra": "iterations: 2543\ncpu: 338641.4077860796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 446269.76488866674,
            "unit": "ns/iter",
            "extra": "iterations: 1931\ncpu: 446264.836872087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 555186.2381865006,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 555170.3065134101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 534213.1649999828,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534195.6999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 617888.680999954,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 617877.5000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 739652.0758620368,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 738023.2950191565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11955.57992654045,
            "unit": "ns/iter",
            "extra": "iterations: 58535\ncpu: 11955.030323737932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10009.841643111818,
            "unit": "ns/iter",
            "extra": "iterations: 69697\ncpu: 10009.214169906883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10013.67353380116,
            "unit": "ns/iter",
            "extra": "iterations: 69704\ncpu: 10013.093940089522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10163.482377839526,
            "unit": "ns/iter",
            "extra": "iterations: 69458\ncpu: 10162.990584237969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16722.741941636225,
            "unit": "ns/iter",
            "extra": "iterations: 41944\ncpu: 16722.53242418462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54924.65148475023,
            "unit": "ns/iter",
            "extra": "iterations: 14952\ncpu: 54921.93686463352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 254950.80905276243,
            "unit": "ns/iter",
            "extra": "iterations: 3336\ncpu: 254933.8429256597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 202246.581257407,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 202239.288256228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 204577.19490506247,
            "unit": "ns/iter",
            "extra": "iterations: 4161\ncpu: 204571.49723624127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 197240.3629802139,
            "unit": "ns/iter",
            "extra": "iterations: 4295\ncpu: 197230.1746216532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 479157.2731788227,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 479135.87196467875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3833646.4074071255,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3833530.45267489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3100300.0602005315,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3100237.458193974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3109404.3277591276,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3109346.8227424715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3096643.7433335157,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3096539.9999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1823934.399209495,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1823881.6205533545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3018990.739413442,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3018853.4201954347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11772939.866666043,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11772511.111111091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5312568.220000458,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5312598.999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15480148.956521919,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 15480017.391304351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53946.91049999665,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53943.91000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 283516.3524457434,
            "unit": "ns/iter",
            "extra": "iterations: 3087\ncpu: 283508.19565921644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 233594.13254987,
            "unit": "ns/iter",
            "extra": "iterations: 3659\ncpu: 233589.0133916376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 233468.21923699157,
            "unit": "ns/iter",
            "extra": "iterations: 3722\ncpu: 233466.01289629232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 228506.61567162283,
            "unit": "ns/iter",
            "extra": "iterations: 3752\ncpu: 228502.23880596968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 513427.38839548716,
            "unit": "ns/iter",
            "extra": "iterations: 1689\ncpu: 513410.0651272928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3898695.668067471,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3898689.915966379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3165129.20608109,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3165079.391891896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3154496.145762712,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3154439.661016961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3140239.8508477854,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3140204.0677966024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1876554.965517205,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1876478.4989857937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3058061.331081198,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3057927.3648648434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12059937.2888882,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 12059331.111111188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5216117.140000734,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5216142.000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54667.54161055233,
            "unit": "ns/iter",
            "extra": "iterations: 14852\ncpu: 54665.76218691107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 272069.02792761184,
            "unit": "ns/iter",
            "extra": "iterations: 3151\ncpu: 272058.3624246266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 206573.73536527628,
            "unit": "ns/iter",
            "extra": "iterations: 4134\ncpu: 206566.01354620158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 205764.11234597492,
            "unit": "ns/iter",
            "extra": "iterations: 4139\ncpu: 205755.42401546158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 201086.5751062854,
            "unit": "ns/iter",
            "extra": "iterations: 4234\ncpu: 201078.38923004194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 489291.2638418027,
            "unit": "ns/iter",
            "extra": "iterations: 1770\ncpu: 489259.32203389774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3841597.863453833,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3841440.16064258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3100195.9099997594,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3100024.3333333326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3131241.799999695,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3131072.333333336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3100866.458471818,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3100744.8504983434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1846105.924603163,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1846074.8015872948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3023938.863636458,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3023877.2727272767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6185.319646414262,
            "unit": "ns/iter",
            "extra": "iterations: 113466\ncpu: 6185.184108014744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34522.190339784735,
            "unit": "ns/iter",
            "extra": "iterations: 20248\ncpu: 34520.89589095231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27861.168347492363,
            "unit": "ns/iter",
            "extra": "iterations: 25186\ncpu: 27859.69586278093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27186.39057043391,
            "unit": "ns/iter",
            "extra": "iterations: 25770\ncpu: 27185.31625921604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21910.786057690853,
            "unit": "ns/iter",
            "extra": "iterations: 32032\ncpu: 21909.730894105975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 136978.21326550603,
            "unit": "ns/iter",
            "extra": "iterations: 5111\ncpu: 136972.1189591071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 260017.9881349406,
            "unit": "ns/iter",
            "extra": "iterations: 2697\ncpu: 260002.7808676313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66646.64067861647,
            "unit": "ns/iter",
            "extra": "iterations: 10492\ncpu: 66644.11932901201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66335.99280370728,
            "unit": "ns/iter",
            "extra": "iterations: 10561\ncpu: 66335.60268913886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66604.39236276818,
            "unit": "ns/iter",
            "extra": "iterations: 10475\ncpu: 66602.13842482073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 136831.13401664887,
            "unit": "ns/iter",
            "extra": "iterations: 5171\ncpu: 136757.33900599266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 124080.44997342222,
            "unit": "ns/iter",
            "extra": "iterations: 5647\ncpu: 124074.07472994554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 40582.79751105429,
            "unit": "ns/iter",
            "extra": "iterations: 17196\ncpu: 40580.48383344976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 198986.62695034526,
            "unit": "ns/iter",
            "extra": "iterations: 3525\ncpu: 198979.60283687752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 164491.87262044547,
            "unit": "ns/iter",
            "extra": "iterations: 4255\ncpu: 164482.06815510924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 164350.88188234874,
            "unit": "ns/iter",
            "extra": "iterations: 4250\ncpu: 164342.0000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 165646.91080253987,
            "unit": "ns/iter",
            "extra": "iterations: 4249\ncpu: 165643.3984466918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 287666.25745808793,
            "unit": "ns/iter",
            "extra": "iterations: 2447\ncpu: 287660.11442582955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1112691.9872408195,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1112696.8102073404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 934075.2818791727,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 934037.4496644201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 946595.2489851265,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 946537.8890392527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 939707.1303762964,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 939666.3978494585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 617839.2829694757,
            "unit": "ns/iter",
            "extra": "iterations: 1145\ncpu: 617830.3930131064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 926482.9682119221,
            "unit": "ns/iter",
            "extra": "iterations: 755\ncpu: 926487.6821192157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42318.08090673964,
            "unit": "ns/iter",
            "extra": "iterations: 16587\ncpu: 42317.56194610257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 205691.87599411418,
            "unit": "ns/iter",
            "extra": "iterations: 3395\ncpu: 205690.72164948317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 168600.26436506244,
            "unit": "ns/iter",
            "extra": "iterations: 4142\ncpu: 168595.65427329898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 165633.30652070732,
            "unit": "ns/iter",
            "extra": "iterations: 4202\ncpu: 165625.15468824678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 167085.74982080783,
            "unit": "ns/iter",
            "extra": "iterations: 4185\ncpu: 167078.3990442049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 286291.30557836255,
            "unit": "ns/iter",
            "extra": "iterations: 2438\ncpu: 286271.0828548023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1119428.8621795704,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1119341.6666666751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 933407.8823528938,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 933357.0855614837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 938439.6528149341,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 938434.4504021446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 946211.8308524333,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 946207.8484438328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 620150.8732269129,
            "unit": "ns/iter",
            "extra": "iterations: 1128\ncpu: 620119.5921985857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 928764.0572569649,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 928723.0359520736 ns\nthreads: 1"
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
        "date": 1705772764541,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15704.182294241535,
            "unit": "ns/iter",
            "extra": "iterations: 44494\ncpu: 15702.699240347014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 127192.57689998251,
            "unit": "ns/iter",
            "extra": "iterations: 6658\ncpu: 127180.35446079903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 238284.5905598284,
            "unit": "ns/iter",
            "extra": "iterations: 3644\ncpu: 238263.85839736558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 347266.3627569814,
            "unit": "ns/iter",
            "extra": "iterations: 2481\ncpu: 347236.15477629966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 461175.47658077156,
            "unit": "ns/iter",
            "extra": "iterations: 1708\ncpu: 461130.09367681475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 567625.6603650362,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 567575.55410691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 546341.0099999919,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 546307.6999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 631801.2640000462,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 631768.1999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 721824.4949258977,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 721804.6057767362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12299.627238444777,
            "unit": "ns/iter",
            "extra": "iterations: 57015\ncpu: 12299.380864684754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10294.936914859405,
            "unit": "ns/iter",
            "extra": "iterations: 68146\ncpu: 10294.689343468443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10259.252611809077,
            "unit": "ns/iter",
            "extra": "iterations: 68152\ncpu: 10259.079704190633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10261.875080649814,
            "unit": "ns/iter",
            "extra": "iterations: 68196\ncpu: 10261.305648425134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16675.41149773103,
            "unit": "ns/iter",
            "extra": "iterations: 42304\ncpu: 16674.969270045396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 57512.5873271974,
            "unit": "ns/iter",
            "extra": "iterations: 14251\ncpu: 57510.91853203277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 258184.6906843716,
            "unit": "ns/iter",
            "extra": "iterations: 3317\ncpu: 258177.0575821524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 200511.7411847677,
            "unit": "ns/iter",
            "extra": "iterations: 4254\ncpu: 200502.82087447093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 202009.54526015947,
            "unit": "ns/iter",
            "extra": "iterations: 4209\ncpu: 202007.0087906862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 196031.9863929855,
            "unit": "ns/iter",
            "extra": "iterations: 4336\ncpu: 196027.3062730629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 458878.83177569887,
            "unit": "ns/iter",
            "extra": "iterations: 1926\ncpu: 458858.15160955396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3925773.3983051474,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3925658.898305082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3168143.7380950917,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3168073.1292516934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3154756.423729033,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3154668.1355932164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3156491.8605443467,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3156351.3605442136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1829272.2638888233,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1829232.3412698351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3072771.0165565624,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3072683.1125827786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11713570.274725877,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11712883.516483517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5369781.699999976,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5369501.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15734365.826088453,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 15733820.28985504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 56859.15980000118,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56856.379999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 297361.7001733121,
            "unit": "ns/iter",
            "extra": "iterations: 2885\ncpu: 297357.5043327564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 234362.0521572814,
            "unit": "ns/iter",
            "extra": "iterations: 3662\ncpu: 234347.351174221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 235694.4770541228,
            "unit": "ns/iter",
            "extra": "iterations: 3639\ncpu: 235687.00192360464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 231488.30945947216,
            "unit": "ns/iter",
            "extra": "iterations: 3700\ncpu: 231467.4054054063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 481453.3009387252,
            "unit": "ns/iter",
            "extra": "iterations: 1811\ncpu: 481403.4235229139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3996884.969957008,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3996513.304721035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3229076.4444447006,
            "unit": "ns/iter",
            "extra": "iterations: 288\ncpu: 3228807.638888886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3197841.9931505574,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3197707.5342465653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3200453.7972508054,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3200222.6804123744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1876528.2686867656,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1876371.3131313073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3122436.859060651,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3122219.7986577223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12056928.409090905,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12055788.636363635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5302580.439999929,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5301875.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56808.94769975673,
            "unit": "ns/iter",
            "extra": "iterations: 14455\ncpu: 56804.78035281945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 265002.97754537134,
            "unit": "ns/iter",
            "extra": "iterations: 3251\ncpu: 264982.00553675875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 207215.3727667876,
            "unit": "ns/iter",
            "extra": "iterations: 4142\ncpu: 207195.77498792953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 202969.77336172224,
            "unit": "ns/iter",
            "extra": "iterations: 4227\ncpu: 202961.32008516658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 198891.30717280207,
            "unit": "ns/iter",
            "extra": "iterations: 4294\ncpu: 198869.9347927333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 457596.8974895835,
            "unit": "ns/iter",
            "extra": "iterations: 1912\ncpu: 457595.5543933049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3959691.7702128654,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3959433.617021272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3180093.758503455,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3180031.292517004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3163776.240677889,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3163624.0677965996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3162346.2338980758,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3162123.0508474405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1833363.6311638763,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1833307.1005917124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3079501.1523178765,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3079379.470198673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6109.292887576558,
            "unit": "ns/iter",
            "extra": "iterations: 114532\ncpu: 6109.18695211823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34403.500049090006,
            "unit": "ns/iter",
            "extra": "iterations: 20372\ncpu: 34402.52797957967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 26124.5769762137,
            "unit": "ns/iter",
            "extra": "iterations: 26781\ncpu: 26124.461371868114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 25301.199335068442,
            "unit": "ns/iter",
            "extra": "iterations: 27672\ncpu: 25300.50231280726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21884.969755729988,
            "unit": "ns/iter",
            "extra": "iterations: 31973\ncpu: 21884.580739999332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 131277.328784806,
            "unit": "ns/iter",
            "extra": "iterations: 5423\ncpu: 131271.86059376743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 264394.7862277754,
            "unit": "ns/iter",
            "extra": "iterations: 2643\ncpu: 264393.64358683396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67312.33734476549,
            "unit": "ns/iter",
            "extra": "iterations: 10387\ncpu: 67305.9882545484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67233.36912105588,
            "unit": "ns/iter",
            "extra": "iterations: 10376\ncpu: 67228.94178874239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66931.06739317886,
            "unit": "ns/iter",
            "extra": "iterations: 10461\ncpu: 66922.90412006486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 135265.78307186413,
            "unit": "ns/iter",
            "extra": "iterations: 5163\ncpu: 135255.31667634903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 124062.16029045694,
            "unit": "ns/iter",
            "extra": "iterations: 5646\ncpu: 124061.56571023623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42937.08798968398,
            "unit": "ns/iter",
            "extra": "iterations: 16286\ncpu: 42934.962544516966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 209411.06892416306,
            "unit": "ns/iter",
            "extra": "iterations: 3337\ncpu: 209407.01228648555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 171620.63414635978,
            "unit": "ns/iter",
            "extra": "iterations: 4100\ncpu: 171612.36585366167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 169257.7769156351,
            "unit": "ns/iter",
            "extra": "iterations: 4124\ncpu: 169249.05431619834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 172154.63182490773,
            "unit": "ns/iter",
            "extra": "iterations: 4066\ncpu: 172139.49827840546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 291875.37817575893,
            "unit": "ns/iter",
            "extra": "iterations: 2401\ncpu: 291860.22490629036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1152332.2652389847,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1152215.321252058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 967280.1671271165,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 967244.0607734771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 970468.0027700565,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 970437.5346260401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 997545.1731301924,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 997509.9722991728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 628910.1160072271,
            "unit": "ns/iter",
            "extra": "iterations: 1112\ncpu: 628887.3201438815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 977184.3687074851,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 977133.741496593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44021.28200931249,
            "unit": "ns/iter",
            "extra": "iterations: 15886\ncpu: 44021.20735238597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 217314.8009301998,
            "unit": "ns/iter",
            "extra": "iterations: 3225\ncpu: 217314.29457364255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 172656.2694108929,
            "unit": "ns/iter",
            "extra": "iterations: 4057\ncpu: 172653.75893517354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 172198.72579453661,
            "unit": "ns/iter",
            "extra": "iterations: 4059\ncpu: 172190.34244888104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 173487.79195630687,
            "unit": "ns/iter",
            "extra": "iterations: 4028\ncpu: 173481.10724925523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 291201.2052130816,
            "unit": "ns/iter",
            "extra": "iterations: 2417\ncpu: 291192.8009929651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1154574.259016283,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1154510.983606558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 963953.8099173283,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 963911.0192837514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 958965.0191257106,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 958932.9234972702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 963617.5372927181,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 963600.1381215536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 633657.0902527827,
            "unit": "ns/iter",
            "extra": "iterations: 1108\ncpu: 633654.1516245474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 951869.5081520991,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 951831.793478261 ns\nthreads: 1"
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
        "date": 1705774149011,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15233.339414876016,
            "unit": "ns/iter",
            "extra": "iterations: 46315\ncpu: 15233.133973874556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124686.3484483435,
            "unit": "ns/iter",
            "extra": "iterations: 6638\ncpu: 124681.21422115093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 233362.58276938423,
            "unit": "ns/iter",
            "extra": "iterations: 3842\ncpu: 233358.43310775634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 341443.8593064963,
            "unit": "ns/iter",
            "extra": "iterations: 2509\ncpu: 341437.14627341554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 449511.237075675,
            "unit": "ns/iter",
            "extra": "iterations: 1915\ncpu: 449494.4125326375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 558850.6509980765,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 558826.8512556345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 544102.002000045,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544054.3 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 628598.2699999977,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 628574.8 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 714968.2961807707,
            "unit": "ns/iter",
            "extra": "iterations: 1283\ncpu: 714945.7521434148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11988.115524955601,
            "unit": "ns/iter",
            "extra": "iterations: 58100\ncpu: 11987.962134251295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10194.486872787778,
            "unit": "ns/iter",
            "extra": "iterations: 69474\ncpu: 10194.035178627977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10196.419908097812,
            "unit": "ns/iter",
            "extra": "iterations: 68334\ncpu: 10196.02686803056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10183.7647127382,
            "unit": "ns/iter",
            "extra": "iterations: 68631\ncpu: 10183.05721904096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16513.174222813894,
            "unit": "ns/iter",
            "extra": "iterations: 42107\ncpu: 16512.14524900847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 53998.02188097294,
            "unit": "ns/iter",
            "extra": "iterations: 15173\ncpu: 53995.814934422946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 246699.46153846206,
            "unit": "ns/iter",
            "extra": "iterations: 3458\ncpu: 246686.75534991344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 192736.29692133234,
            "unit": "ns/iter",
            "extra": "iterations: 4385\ncpu: 192721.55074116305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 194692.01161468207,
            "unit": "ns/iter",
            "extra": "iterations: 4391\ncpu: 194684.05830107038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 188141.21236558477,
            "unit": "ns/iter",
            "extra": "iterations: 4464\ncpu: 188129.68189964152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 456798.6657990755,
            "unit": "ns/iter",
            "extra": "iterations: 1921\ncpu: 456770.952628839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3864331.012244534,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3864119.183673458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3120500.9900333965,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3120310.9634551564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3155220.808219162,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3155073.972602741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3121637.066445439,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3121443.8538206015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1831963.2156862116,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1831843.5294117604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3051387.2203946924,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3051331.57894736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11755747.076923039,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11755014.285714285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5300832.34000017,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5300685.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15303602.101448962,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 15302901.449275363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 52031.63700000459,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52029.33999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 278471.96202943963,
            "unit": "ns/iter",
            "extra": "iterations: 3055\ncpu: 278460.55646481185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 222945.99973849047,
            "unit": "ns/iter",
            "extra": "iterations: 3824\ncpu: 222931.98221757243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 220353.2980269918,
            "unit": "ns/iter",
            "extra": "iterations: 3852\ncpu: 220342.2637590865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 218764.41687784786,
            "unit": "ns/iter",
            "extra": "iterations: 3946\ncpu: 218751.82463253956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 475952.04120880424,
            "unit": "ns/iter",
            "extra": "iterations: 1820\ncpu: 475929.5054945064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3965053.420833442,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3964813.749999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3156418.88927346,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3156255.3633218086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3207535.1833912223,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3207379.238754328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3135549.176870721,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3135357.8231292698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1849261.8039999797,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1849172.600000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3110598.277591869,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3110499.3311036695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12064068.49425271,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12063659.770114977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5263587.480000069,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5263564.000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54359.65401037376,
            "unit": "ns/iter",
            "extra": "iterations: 15223\ncpu: 54359.02910070261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 253259.43095379064,
            "unit": "ns/iter",
            "extra": "iterations: 3418\ncpu: 253254.91515506082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 198616.5058193812,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 198612.75605214087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 193916.7135712599,
            "unit": "ns/iter",
            "extra": "iterations: 4399\ncpu: 193910.88883837275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 189204.02200546218,
            "unit": "ns/iter",
            "extra": "iterations: 4408\ncpu: 189201.7241379317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 459859.014323658,
            "unit": "ns/iter",
            "extra": "iterations: 1885\ncpu: 459852.67904509424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3885875.7426156704,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3885778.059071724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3137948.0969898487,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3137894.648829418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3134170.792516896,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3133599.319727878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3112252.3993289233,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3112216.1073825327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1824710.9999998477,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1824667.8571428568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3062868.8675496266,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3062830.4635761627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6135.420153040982,
            "unit": "ns/iter",
            "extra": "iterations: 114087\ncpu: 6135.270451497525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 33909.349492674264,
            "unit": "ns/iter",
            "extra": "iterations: 20401\ncpu: 33908.61722464594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27633.331724113108,
            "unit": "ns/iter",
            "extra": "iterations: 25271\ncpu: 27632.970598710126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 26246.126607734033,
            "unit": "ns/iter",
            "extra": "iterations: 26357\ncpu: 26245.775315855408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21425.67166212224,
            "unit": "ns/iter",
            "extra": "iterations: 32296\ncpu: 21425.31273222688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 132025.8105643065,
            "unit": "ns/iter",
            "extra": "iterations: 5263\ncpu: 132023.73171195053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 261359.58580550636,
            "unit": "ns/iter",
            "extra": "iterations: 2663\ncpu: 261354.11190386966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 65438.257703079566,
            "unit": "ns/iter",
            "extra": "iterations: 10710\ncpu: 65437.36694677764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66389.39967759853,
            "unit": "ns/iter",
            "extra": "iterations: 10546\ncpu: 66388.11871799716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65492.44728915851,
            "unit": "ns/iter",
            "extra": "iterations: 10624\ncpu: 65491.330948795665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 123421.88661971827,
            "unit": "ns/iter",
            "extra": "iterations: 5680\ncpu: 123418.99647887425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 122079.30667373222,
            "unit": "ns/iter",
            "extra": "iterations: 5664\ncpu: 122074.41737288101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42475.07507507504,
            "unit": "ns/iter",
            "extra": "iterations: 16317\ncpu: 42474.14965986398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 205332.9712187876,
            "unit": "ns/iter",
            "extra": "iterations: 3405\ncpu: 205329.83847283054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 168488.68945594848,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 168481.89696678045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 166388.6961456378,
            "unit": "ns/iter",
            "extra": "iterations: 4229\ncpu: 166385.15015370335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 171291.06105006812,
            "unit": "ns/iter",
            "extra": "iterations: 4095\ncpu: 171287.4481074486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 298719.6815666404,
            "unit": "ns/iter",
            "extra": "iterations: 2349\ncpu: 298718.26309067867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1146498.412903303,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1146479.3548386998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 949988.8324250472,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 949973.7057220616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 952117.7785325849,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 952058.8315217375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 952104.2287670529,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 952047.1232876696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 619387.9884135915,
            "unit": "ns/iter",
            "extra": "iterations: 1122\ncpu: 619379.322638148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 942548.7152496141,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 942521.8623481804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42831.76935669768,
            "unit": "ns/iter",
            "extra": "iterations: 16493\ncpu: 42829.93997453497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 215945.27882534804,
            "unit": "ns/iter",
            "extra": "iterations: 3235\ncpu: 215942.3183925814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 170946.58137254696,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 170942.91666666794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 168677.7264977514,
            "unit": "ns/iter",
            "extra": "iterations: 4223\ncpu: 168668.43476201777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 172297.87093643818,
            "unit": "ns/iter",
            "extra": "iterations: 4122\ncpu: 172284.6918971393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 295991.07412008377,
            "unit": "ns/iter",
            "extra": "iterations: 2415\ncpu: 295974.0786749493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1147166.3382353343,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1147077.9411764704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 953045.9364005126,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 952990.7983761746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 955217.0344351517,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 955167.6308539906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 959903.3879782235,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 959888.2513661142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 631488.1831368057,
            "unit": "ns/iter",
            "extra": "iterations: 1103\ncpu: 631459.4741613762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 946025.8035230517,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 945961.924119234 ns\nthreads: 1"
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
        "date": 1705777703072,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15370.462037795856,
            "unit": "ns/iter",
            "extra": "iterations: 45137\ncpu: 15369.058643684783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124036.22616083168,
            "unit": "ns/iter",
            "extra": "iterations: 6827\ncpu: 124030.0571261169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 233559.83565682074,
            "unit": "ns/iter",
            "extra": "iterations: 3730\ncpu: 233539.1420911529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 342657.39415484545,
            "unit": "ns/iter",
            "extra": "iterations: 2532\ncpu: 342635.74249605066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 449077.4041344121,
            "unit": "ns/iter",
            "extra": "iterations: 1935\ncpu: 449053.9018087855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 558115.8704062206,
            "unit": "ns/iter",
            "extra": "iterations: 1551\ncpu: 558057.6402321081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 541365.4950000363,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 621139.5249999897,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 621083.2999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 710172.8453292451,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 710105.8958652375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12037.713514906565,
            "unit": "ns/iter",
            "extra": "iterations: 58195\ncpu: 12037.740355700653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10091.807871404011,
            "unit": "ns/iter",
            "extra": "iterations: 69365\ncpu: 10091.11223239384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10102.523712472399,
            "unit": "ns/iter",
            "extra": "iterations: 69183\ncpu: 10102.36329734185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10258.693844983478,
            "unit": "ns/iter",
            "extra": "iterations: 68302\ncpu: 10258.130069397675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16631.97378633844,
            "unit": "ns/iter",
            "extra": "iterations: 42001\ncpu: 16631.523058974773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 53916.99763391139,
            "unit": "ns/iter",
            "extra": "iterations: 15215\ncpu: 53913.67729214584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 255988.43300505166,
            "unit": "ns/iter",
            "extra": "iterations: 3351\ncpu: 255982.33363175148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 196080.639577589,
            "unit": "ns/iter",
            "extra": "iterations: 4356\ncpu: 196067.72268135892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 197748.9125202531,
            "unit": "ns/iter",
            "extra": "iterations: 4321\ncpu: 197744.82758620667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 190629.42687304894,
            "unit": "ns/iter",
            "extra": "iterations: 4458\ncpu: 190612.78600269178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 455536.2222800856,
            "unit": "ns/iter",
            "extra": "iterations: 1921\ncpu: 455527.4336283192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3808491.3016531994,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3808243.8016528925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3106766.2760943347,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3106460.942760942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3107981.143812611,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3107877.926421405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3110022.762542146,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3109845.15050167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1813500.7721022437,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1813423.9685658112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3017902.271241668,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3017645.4248365965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11628289.88171969,
            "unit": "ns/iter",
            "extra": "iterations: 93\ncpu: 11627597.849462355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5263885.069999787,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5263530.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15456241.565218171,
            "unit": "ns/iter",
            "extra": "iterations: 69\ncpu: 15455330.43478261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53136.38239999818,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53130.5800000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 289487.0802551981,
            "unit": "ns/iter",
            "extra": "iterations: 2978\ncpu: 289481.0275352581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 229300.67094360833,
            "unit": "ns/iter",
            "extra": "iterations: 3741\ncpu: 229286.92862870853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 225764.79106438177,
            "unit": "ns/iter",
            "extra": "iterations: 3805\ncpu: 225759.34296977616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 224698.71114022148,
            "unit": "ns/iter",
            "extra": "iterations: 3815\ncpu: 224680.10484927762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 476768.192943743,
            "unit": "ns/iter",
            "extra": "iterations: 1814\ncpu: 476765.04961411067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3943066.9201683984,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3942875.630252114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3172866.6825938956,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3172522.866894187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3144586.9966216222,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3144529.7297297325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3154825.1081080954,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3154570.608108114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1863592.456000106,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1863512.7999999952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3064321.6047294755,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3064167.2297297255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11900736.733333714,
            "unit": "ns/iter",
            "extra": "iterations: 90\ncpu: 11900141.111111078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5416649.100000086,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5415752.000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 53034.39434513496,
            "unit": "ns/iter",
            "extra": "iterations: 15385\ncpu: 53032.356191095445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 263328.93652254174,
            "unit": "ns/iter",
            "extra": "iterations: 3261\ncpu: 263304.26249616523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 207453.27255371126,
            "unit": "ns/iter",
            "extra": "iterations: 4190\ncpu: 207445.34606205137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 201146.208097939,
            "unit": "ns/iter",
            "extra": "iterations: 4248\ncpu: 201134.3220338989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 198306.35446490243,
            "unit": "ns/iter",
            "extra": "iterations: 4401\ncpu: 198295.91002045112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 454869.8856843129,
            "unit": "ns/iter",
            "extra": "iterations: 1907\ncpu: 454840.63974829356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3868104.6597513533,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3867612.0331950127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3120977.802675718,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3120803.0100334566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3112479.1666665412,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3112205.6666666493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3118990.5566664794,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3118701.333333339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1820898.753424537,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1820754.5988258321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3021125.9577923445,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3020891.5584415523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6152.56267862597,
            "unit": "ns/iter",
            "extra": "iterations: 113715\ncpu: 6152.112737985312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34207.10091473847,
            "unit": "ns/iter",
            "extra": "iterations: 20443\ncpu: 34204.16768576025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27021.048149867718,
            "unit": "ns/iter",
            "extra": "iterations: 25836\ncpu: 27018.25359962864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27662.18842583692,
            "unit": "ns/iter",
            "extra": "iterations: 25315\ncpu: 27658.814931858644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21652.709326135522,
            "unit": "ns/iter",
            "extra": "iterations: 32232\ncpu: 21651.44887068739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 131870.4121303555,
            "unit": "ns/iter",
            "extra": "iterations: 5309\ncpu: 131865.07816914716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 260918.53718130852,
            "unit": "ns/iter",
            "extra": "iterations: 2824\ncpu: 260904.9220963171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 66202.59500141969,
            "unit": "ns/iter",
            "extra": "iterations: 10563\ncpu: 66199.30890845388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 66323.76695718359,
            "unit": "ns/iter",
            "extra": "iterations: 10556\ncpu: 66318.85183781738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 66237.63235989261,
            "unit": "ns/iter",
            "extra": "iterations: 10581\ncpu: 66232.9741990356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 132842.98669959648,
            "unit": "ns/iter",
            "extra": "iterations: 5263\ncpu: 132829.29887896674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 122743.24238179055,
            "unit": "ns/iter",
            "extra": "iterations: 5710\ncpu: 122736.54991243359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42777.015110731525,
            "unit": "ns/iter",
            "extra": "iterations: 16346\ncpu: 42773.10657041478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 206027.517678261,
            "unit": "ns/iter",
            "extra": "iterations: 3394\ncpu: 206023.36476134538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 168209.42211540366,
            "unit": "ns/iter",
            "extra": "iterations: 4160\ncpu: 168202.427884616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 168012.63149039104,
            "unit": "ns/iter",
            "extra": "iterations: 4160\ncpu: 168008.77403846392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 170687.1102458046,
            "unit": "ns/iter",
            "extra": "iterations: 4109\ncpu: 170683.23192990993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 290589.14279783977,
            "unit": "ns/iter",
            "extra": "iterations: 2409\ncpu: 290585.9277708556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1131369.1709677097,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1131359.0322580761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 940127.6787634644,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 940075.6720430051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 951096.0927694512,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 951051.1596180233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 951063.0990501721,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 951003.9348711086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 622790.7838078103,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 622777.1352313159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 934746.6890080589,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 934718.7667560333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43980.4448349444,
            "unit": "ns/iter",
            "extra": "iterations: 15934\ncpu: 43979.20170704151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 214438.1100580624,
            "unit": "ns/iter",
            "extra": "iterations: 3271\ncpu: 214434.57658208374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 171586.14816638603,
            "unit": "ns/iter",
            "extra": "iterations: 4063\ncpu: 171584.32192961095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 170452.43815821185,
            "unit": "ns/iter",
            "extra": "iterations: 4083\ncpu: 170447.93044330188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 171694.45892419227,
            "unit": "ns/iter",
            "extra": "iterations: 4090\ncpu: 171682.81173594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 286541.194672138,
            "unit": "ns/iter",
            "extra": "iterations: 2440\ncpu: 286531.6803278704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1128284.81935484,
            "unit": "ns/iter",
            "extra": "iterations: 620\ncpu: 1128204.6774193493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 943226.2897573892,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 943200.9433962369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 950990.8468834606,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 950992.2764227539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 946286.3054054467,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 946272.5675675764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 623343.9044643368,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 623329.4642857093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 937838.8978495083,
            "unit": "ns/iter",
            "extra": "iterations: 744\ncpu: 937790.5913978524 ns\nthreads: 1"
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
        "date": 1705952854499,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15817.899519371342,
            "unit": "ns/iter",
            "extra": "iterations: 44317\ncpu: 15817.747139923735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 125704.52614182667,
            "unit": "ns/iter",
            "extra": "iterations: 6656\ncpu: 125703.04987980769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 236604.09224890385,
            "unit": "ns/iter",
            "extra": "iterations: 3664\ncpu: 236594.73253275105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 345130.3991193022,
            "unit": "ns/iter",
            "extra": "iterations: 2498\ncpu: 345121.69735788647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 455108.6961760108,
            "unit": "ns/iter",
            "extra": "iterations: 1909\ncpu: 455068.15086432674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 564003.2649690629,
            "unit": "ns/iter",
            "extra": "iterations: 1453\ncpu: 563980.8671713694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 543356.7259999564,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543327.5999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 630235.9130000923,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 630183.1 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 716303.493426106,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 716287.4709976794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12304.144372889037,
            "unit": "ns/iter",
            "extra": "iterations: 56832\ncpu: 12303.462837837827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10366.804156320452,
            "unit": "ns/iter",
            "extra": "iterations: 67656\ncpu: 10366.68144732176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10429.29232081646,
            "unit": "ns/iter",
            "extra": "iterations: 66817\ncpu: 10428.871395004271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10575.332103714876,
            "unit": "ns/iter",
            "extra": "iterations: 65603\ncpu: 10574.860905751266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16865.885907495216,
            "unit": "ns/iter",
            "extra": "iterations: 41554\ncpu: 16864.487173316666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55984.018521060905,
            "unit": "ns/iter",
            "extra": "iterations: 14578\ncpu: 55981.27315132384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 252953.00471418875,
            "unit": "ns/iter",
            "extra": "iterations: 3394\ncpu: 252943.6652916913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 196256.01870669017,
            "unit": "ns/iter",
            "extra": "iterations: 4330\ncpu: 196250.46189376464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 199788.65749882846,
            "unit": "ns/iter",
            "extra": "iterations: 4254\ncpu: 199775.83450869782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 193169.4523483603,
            "unit": "ns/iter",
            "extra": "iterations: 4386\ncpu: 193159.25672594598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 470301.45840040495,
            "unit": "ns/iter",
            "extra": "iterations: 1863\ncpu: 470278.4219001623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3929830.2869197284,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3929585.232067504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3168663.2286686967,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3168501.365187716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3210586.8724137316,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3210454.8275862094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3200830.2076125448,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3200821.107266435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1839944.478087792,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1839827.689243033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3098481.464882713,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3098223.0769230807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11772734.714286044,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11772390.109890115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5342511.960000139,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5342431.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15582228.176469926,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 15581545.58823531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53662.591900001644,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53662.50999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 285725.52269693936,
            "unit": "ns/iter",
            "extra": "iterations: 2996\ncpu: 285716.98931909224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 229966.8853860622,
            "unit": "ns/iter",
            "extra": "iterations: 3743\ncpu: 229965.8562650271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 226647.01825396938,
            "unit": "ns/iter",
            "extra": "iterations: 3780\ncpu: 226642.77777777863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 223787.17560847735,
            "unit": "ns/iter",
            "extra": "iterations: 3821\ncpu: 223787.8827532066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 498242.0464449355,
            "unit": "ns/iter",
            "extra": "iterations: 1744\ncpu: 498244.5527522969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4039460.8304347415,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4039286.086956527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3253988.2937061726,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3253896.5034965146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3265955.2288735914,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3265948.943661967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3255300.5489510475,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3255110.4895104766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1873616.7907443529,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1873600.0000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3152722.7986347615,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3152661.77474402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 11992750.606740823,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 11992686.516853947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5198338.809999541,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5198153.0000000475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 56133.54452874053,
            "unit": "ns/iter",
            "extra": "iterations: 14631\ncpu: 56134.31754493887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 258548.3567567589,
            "unit": "ns/iter",
            "extra": "iterations: 3330\ncpu: 258540.18018018003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 203530.27382074468,
            "unit": "ns/iter",
            "extra": "iterations: 4240\ncpu: 203533.0896226424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 200181.20521779463,
            "unit": "ns/iter",
            "extra": "iterations: 4293\ncpu: 200178.17377125454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 195524.40657084266,
            "unit": "ns/iter",
            "extra": "iterations: 4383\ncpu: 195522.26785306918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 474908.3010869239,
            "unit": "ns/iter",
            "extra": "iterations: 1840\ncpu: 474911.9565217387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3959901.9617023086,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3959810.2127659395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3176888.1228667805,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3176876.791808865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3198263.999999804,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3198197.250859101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3199378.7457044404,
            "unit": "ns/iter",
            "extra": "iterations: 291\ncpu: 3199424.3986254316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1843129.7176938432,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1843098.4095427443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3106340.6399997952,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3106327.3333333307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6238.221902809014,
            "unit": "ns/iter",
            "extra": "iterations: 112707\ncpu: 6238.246071672568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34378.19400933119,
            "unit": "ns/iter",
            "extra": "iterations: 20365\ncpu: 34378.68401669527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27205.909511764836,
            "unit": "ns/iter",
            "extra": "iterations: 25705\ncpu: 27206.002723205595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27082.656200394442,
            "unit": "ns/iter",
            "extra": "iterations: 25829\ncpu: 27083.050060010144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21881.190135119592,
            "unit": "ns/iter",
            "extra": "iterations: 31972\ncpu: 21881.29613411738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 135431.64651162602,
            "unit": "ns/iter",
            "extra": "iterations: 5160\ncpu: 135433.56589147286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 266229.6324200938,
            "unit": "ns/iter",
            "extra": "iterations: 2628\ncpu: 266224.08675799146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67446.91568816171,
            "unit": "ns/iter",
            "extra": "iterations: 10390\ncpu: 67446.5640038488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 67626.62938343367,
            "unit": "ns/iter",
            "extra": "iterations: 10380\ncpu: 67625.1059730245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 67591.00279868426,
            "unit": "ns/iter",
            "extra": "iterations: 10362\ncpu: 67591.30476741954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 130249.3711684999,
            "unit": "ns/iter",
            "extra": "iterations: 5383\ncpu: 130248.9503994056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 124878.72276871747,
            "unit": "ns/iter",
            "extra": "iterations: 5591\ncpu: 124874.1548917916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42711.152591055434,
            "unit": "ns/iter",
            "extra": "iterations: 16364\ncpu: 42710.773649474315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 208716.34616529895,
            "unit": "ns/iter",
            "extra": "iterations: 3351\ncpu: 208717.27842434813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 170905.47413580047,
            "unit": "ns/iter",
            "extra": "iterations: 4079\ncpu: 170905.6386369199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 173625.72781358683,
            "unit": "ns/iter",
            "extra": "iterations: 4034\ncpu: 173622.53346554333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 172027.0594594536,
            "unit": "ns/iter",
            "extra": "iterations: 4070\ncpu: 172026.83046683008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 294857.32928866684,
            "unit": "ns/iter",
            "extra": "iterations: 2390\ncpu: 294857.90794979513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1162442.149501638,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1162442.857142857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 972686.98890441,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 972672.6768377209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 980711.2436975326,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 980677.1708683482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1008284.658708016,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1008279.2134831409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 636962.6814479718,
            "unit": "ns/iter",
            "extra": "iterations: 1105\ncpu: 636948.8687782808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 959909.0617285147,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 959922.3593964156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43787.701348148905,
            "unit": "ns/iter",
            "extra": "iterations: 16022\ncpu: 43786.77443515141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 215296.8549923324,
            "unit": "ns/iter",
            "extra": "iterations: 3255\ncpu: 215296.8049155157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 173399.8694575369,
            "unit": "ns/iter",
            "extra": "iterations: 4037\ncpu: 173395.29353480157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 176327.01700000552,
            "unit": "ns/iter",
            "extra": "iterations: 4000\ncpu: 176325.25000000143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 174195.3688032022,
            "unit": "ns/iter",
            "extra": "iterations: 3994\ncpu: 174187.98197295854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 288978.6863560794,
            "unit": "ns/iter",
            "extra": "iterations: 2404\ncpu: 288979.3677204664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1156597.376859642,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1156536.0330578638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 971163.1345353844,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 971155.6171983416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 987895.9886845566,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 987898.8684582856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 975874.2420028982,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 975824.3393602223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 636492.6112116178,
            "unit": "ns/iter",
            "extra": "iterations: 1106\ncpu: 636493.3092224228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 964937.593663889,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 964924.5179063422 ns\nthreads: 1"
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
        "date": 1705954331985,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15246.314190378003,
            "unit": "ns/iter",
            "extra": "iterations: 45552\ncpu: 15245.150597119778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 122937.54277415112,
            "unit": "ns/iter",
            "extra": "iterations: 6885\ncpu: 122925.95497458242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 232678.95195918845,
            "unit": "ns/iter",
            "extra": "iterations: 3726\ncpu: 232667.92807300057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 338921.5784506507,
            "unit": "ns/iter",
            "extra": "iterations: 2543\ncpu: 338905.66260322445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 446679.40438358363,
            "unit": "ns/iter",
            "extra": "iterations: 1825\ncpu: 446631.2876712328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 555642.7132822863,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 555640.6768837809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 532942.5030000721,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532869.2999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 618553.1840000066,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 618558.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 714947.5704493431,
            "unit": "ns/iter",
            "extra": "iterations: 1313\ncpu: 714937.471439452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12048.346941229816,
            "unit": "ns/iter",
            "extra": "iterations: 58177\ncpu: 12048.14617460508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10112.476149865619,
            "unit": "ns/iter",
            "extra": "iterations: 69182\ncpu: 10112.555288948015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10085.00654958859,
            "unit": "ns/iter",
            "extra": "iterations: 69470\ncpu: 10084.312652943723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10215.391899965709,
            "unit": "ns/iter",
            "extra": "iterations: 68617\ncpu: 10215.295043502356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16512.01189745538,
            "unit": "ns/iter",
            "extra": "iterations: 42362\ncpu: 16511.123176431673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54992.644598134255,
            "unit": "ns/iter",
            "extra": "iterations: 14893\ncpu: 54993.02356811931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 259032.45422327064,
            "unit": "ns/iter",
            "extra": "iterations: 3386\ncpu: 259020.14176018903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 202630.07000472635,
            "unit": "ns/iter",
            "extra": "iterations: 4214\ncpu: 202619.5301376366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 201909.05456702554,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 201886.95136417623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 200144.8239023155,
            "unit": "ns/iter",
            "extra": "iterations: 4259\ncpu: 200134.65602254024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 453036.42313624045,
            "unit": "ns/iter",
            "extra": "iterations: 1945\ncpu: 453006.8380462732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3840797.2098764605,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3840290.5349794226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3088630.900000074,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3088452.333333341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3123941.5589227052,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3123683.8383838455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3106170.3344481387,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3106049.8327759085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1827174.0359282857,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1827095.0099800394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3033565.4934641058,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3033534.967320262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11735117.703296766,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11734586.81318683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5137883.649999822,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5137448.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15345739.900000613,
            "unit": "ns/iter",
            "extra": "iterations: 70\ncpu: 15344180.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 54465.00489999834,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54461.01999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 285853.32232230343,
            "unit": "ns/iter",
            "extra": "iterations: 2997\ncpu: 285828.89556222904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 233927.7485683016,
            "unit": "ns/iter",
            "extra": "iterations: 3667\ncpu: 233906.38123806976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 231483.50201773297,
            "unit": "ns/iter",
            "extra": "iterations: 3717\ncpu: 231462.95399515727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 230238.49610318974,
            "unit": "ns/iter",
            "extra": "iterations: 3721\ncpu: 230229.15882827208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 480575.55271922343,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 480547.94672585797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 3914991.34033612,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3914792.8571428554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3152874.4372882117,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3152787.4576271153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3166676.4693878563,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3166454.081632649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3145920.6587838535,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3145485.1351351407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1866866.2395209945,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1866711.7764471117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3063843.508250489,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3063574.9174917606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12004585.842696339,
            "unit": "ns/iter",
            "extra": "iterations: 89\ncpu: 12003535.955056202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5318016.280000392,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5317854.99999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 55250.9993909802,
            "unit": "ns/iter",
            "extra": "iterations: 14778\ncpu: 55249.85113005847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 259976.940909093,
            "unit": "ns/iter",
            "extra": "iterations: 3300\ncpu: 259964.90909090935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 209096.3202534586,
            "unit": "ns/iter",
            "extra": "iterations: 4103\ncpu: 209086.64391908416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 202692.33713202018,
            "unit": "ns/iter",
            "extra": "iterations: 4212\ncpu: 202674.6676163344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 201001.98068315675,
            "unit": "ns/iter",
            "extra": "iterations: 4245\ncpu: 200990.93050647795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 453124.04273056576,
            "unit": "ns/iter",
            "extra": "iterations: 1919\ncpu: 453077.80093799013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3849873.6611569626,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3849578.9256198434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3121688.9966666866,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3121569.0000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3135427.1644292856,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3135309.3959731674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3107626.7056856025,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3107386.2876254115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1835674.7376725266,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1835512.6232741592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3054154.2973856386,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3054044.7712418297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6076.006246858736,
            "unit": "ns/iter",
            "extra": "iterations: 115418\ncpu: 6075.460500095292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 34118.11109488691,
            "unit": "ns/iter",
            "extra": "iterations: 20550\ncpu: 34115.182481751566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 28014.38288952662,
            "unit": "ns/iter",
            "extra": "iterations: 25762\ncpu: 28012.0177004889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 28186.908009085706,
            "unit": "ns/iter",
            "extra": "iterations: 25546\ncpu: 28185.84905660365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 21886.369743958134,
            "unit": "ns/iter",
            "extra": "iterations: 31987\ncpu: 21884.09979054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 130755.49729428,
            "unit": "ns/iter",
            "extra": "iterations: 5359\ncpu: 130748.06866952652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 261216.39308292736,
            "unit": "ns/iter",
            "extra": "iterations: 2689\ncpu: 261194.04983265337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 65705.62018054679,
            "unit": "ns/iter",
            "extra": "iterations: 10634\ncpu: 65702.56723716397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 65994.96368768011,
            "unit": "ns/iter",
            "extra": "iterations: 10630\ncpu: 65992.53998118504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 65971.38882091931,
            "unit": "ns/iter",
            "extra": "iterations: 10627\ncpu: 65968.26009221765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 135225.69459459168,
            "unit": "ns/iter",
            "extra": "iterations: 5180\ncpu: 135222.08494208654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 123004.54882332265,
            "unit": "ns/iter",
            "extra": "iterations: 5694\ncpu: 122997.04952581682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 42367.14577011786,
            "unit": "ns/iter",
            "extra": "iterations: 16478\ncpu: 42367.44143706804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 200817.70100432876,
            "unit": "ns/iter",
            "extra": "iterations: 3485\ncpu: 200806.8005738875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 165146.3796274411,
            "unit": "ns/iter",
            "extra": "iterations: 4241\ncpu: 165144.65927847193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 165368.1865848103,
            "unit": "ns/iter",
            "extra": "iterations: 4234\ncpu: 165354.06235238686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 166663.27218654542,
            "unit": "ns/iter",
            "extra": "iterations: 4203\ncpu: 166661.45610278324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 292275.8333333775,
            "unit": "ns/iter",
            "extra": "iterations: 2400\ncpu: 292257.9166666672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1121857.8541665818,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1121826.44230769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 950646.6122995132,
            "unit": "ns/iter",
            "extra": "iterations: 748\ncpu: 950619.2513368959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 963775.8059701613,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 963677.3405698753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 950374.3265306221,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 950363.5374149629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 618772.8556337797,
            "unit": "ns/iter",
            "extra": "iterations: 1136\ncpu: 618730.8098591556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 932003.8561916713,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 932011.5845539268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 42984.35776784918,
            "unit": "ns/iter",
            "extra": "iterations: 16343\ncpu: 42981.34981337589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 207067.1842105441,
            "unit": "ns/iter",
            "extra": "iterations: 3382\ncpu: 207068.80544056732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 168299.92036680787,
            "unit": "ns/iter",
            "extra": "iterations: 4144\ncpu: 168301.11003860956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 169331.00216815452,
            "unit": "ns/iter",
            "extra": "iterations: 4151\ncpu: 169329.1736930893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 168358.36146305807,
            "unit": "ns/iter",
            "extra": "iterations: 4183\ncpu: 168353.47836480857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 291934.06792455027,
            "unit": "ns/iter",
            "extra": "iterations: 2385\ncpu: 291918.0293501106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1121557.5833333356,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1121542.3076923215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 935571.8674699162,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 935489.0227577045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 942577.8652290672,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 942563.0727762771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 947256.0337837262,
            "unit": "ns/iter",
            "extra": "iterations: 740\ncpu: 947223.1081081061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 621017.5119786508,
            "unit": "ns/iter",
            "extra": "iterations: 1127\ncpu: 620998.1366459577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 937353.6058588136,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 937360.7190412673 ns\nthreads: 1"
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
        "date": 1705956373978,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15613.409311550075,
            "unit": "ns/iter",
            "extra": "iterations: 42850\ncpu: 15613.661610268378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 128495.97619046831,
            "unit": "ns/iter",
            "extra": "iterations: 6636\ncpu: 128492.91742013261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 239838.1350750465,
            "unit": "ns/iter",
            "extra": "iterations: 3598\ncpu: 239838.24346859372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 349393.80203252035,
            "unit": "ns/iter",
            "extra": "iterations: 2460\ncpu: 349394.3495934958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 462336.7292553323,
            "unit": "ns/iter",
            "extra": "iterations: 1880\ncpu: 462319.8404255319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 576500.4056727914,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 576503.9577836408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 551197.290999994,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 551188.1000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 638252.1490000953,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 638240.7000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 725700.3055773233,
            "unit": "ns/iter",
            "extra": "iterations: 1273\ncpu: 725684.9960722706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12299.823262680717,
            "unit": "ns/iter",
            "extra": "iterations: 56898\ncpu: 12299.574677493069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10326.712273256115,
            "unit": "ns/iter",
            "extra": "iterations: 67863\ncpu: 10326.391406215473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10371.886033172572,
            "unit": "ns/iter",
            "extra": "iterations: 67467\ncpu: 10371.44085256494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10477.049671501656,
            "unit": "ns/iter",
            "extra": "iterations: 66819\ncpu: 10476.602463371199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16796.583557047878,
            "unit": "ns/iter",
            "extra": "iterations: 41720\ncpu: 16796.148130393092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54129.82245465931,
            "unit": "ns/iter",
            "extra": "iterations: 15106\ncpu: 54128.05507745273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 260045.52785391032,
            "unit": "ns/iter",
            "extra": "iterations: 3285\ncpu: 260037.50380517502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 199076.74795799717,
            "unit": "ns/iter",
            "extra": "iterations: 4285\ncpu: 199067.28121353584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 201133.24071886938,
            "unit": "ns/iter",
            "extra": "iterations: 4229\ncpu: 201123.7408370774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 191125.77140931375,
            "unit": "ns/iter",
            "extra": "iterations: 4449\ncpu: 191111.66554281925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 452619.35872361786,
            "unit": "ns/iter",
            "extra": "iterations: 1943\ncpu: 452595.52238806046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3947138.0765955974,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3947037.4468085035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3197537.2006918467,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3197419.3771626316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3255081.715789394,
            "unit": "ns/iter",
            "extra": "iterations: 285\ncpu: 3254961.052631575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3203357.6931035924,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3203246.2068965496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1845393.8804781053,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1845257.3705179319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3127356.2861951627,
            "unit": "ns/iter",
            "extra": "iterations: 297\ncpu: 3127224.579124575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 11701370.263736052,
            "unit": "ns/iter",
            "extra": "iterations: 91\ncpu: 11701163.736263731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 5358023.68000077,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5358114.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 15645713.470587786,
            "unit": "ns/iter",
            "extra": "iterations: 68\ncpu: 15645010.294117637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 53234.21129999133,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53235.05000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 291183.47168530145,
            "unit": "ns/iter",
            "extra": "iterations: 2949\ncpu: 291180.4340454384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 229964.2468540896,
            "unit": "ns/iter",
            "extra": "iterations: 3735\ncpu: 229967.871485944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 230047.38982597645,
            "unit": "ns/iter",
            "extra": "iterations: 3735\ncpu: 230040.34805890292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 224877.27703236687,
            "unit": "ns/iter",
            "extra": "iterations: 3801\ncpu: 224874.98026835057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 485609.3964065007,
            "unit": "ns/iter",
            "extra": "iterations: 1781\ncpu: 485606.2886019087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4013157.362068937,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4013051.724137952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3272776.7007042826,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3272757.7464788505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3285821.0880279737,
            "unit": "ns/iter",
            "extra": "iterations: 284\ncpu: 3285808.098591543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3241892.519163737,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3241939.3728223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 1898215.7745900159,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1898162.5000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3176185.352739663,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3176111.643835599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 12087653.420453845,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12087073.863636358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 5320674.780000445,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5320660.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 54603.905642677484,
            "unit": "ns/iter",
            "extra": "iterations: 14922\ncpu: 54601.655274092256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 263927.20911611104,
            "unit": "ns/iter",
            "extra": "iterations: 3247\ncpu: 263911.0563597167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 203595.978105662,
            "unit": "ns/iter",
            "extra": "iterations: 4202\ncpu: 203586.60161827705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 201363.4942366538,
            "unit": "ns/iter",
            "extra": "iterations: 4251\ncpu: 201355.5398729717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 193933.50717048495,
            "unit": "ns/iter",
            "extra": "iterations: 4393\ncpu: 193922.62690644292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 452548.69535731775,
            "unit": "ns/iter",
            "extra": "iterations: 1917\ncpu: 452525.7172665641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 3974381.1623934484,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3974276.4957265025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3216919.6747406228,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3216780.2768165967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3260379.9685312035,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3260186.013986011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3206281.0689655542,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3206143.7931034467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 1854116.6067863484,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1854037.524950101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3119463.560402809,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3119302.3489932963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6168.425284613332,
            "unit": "ns/iter",
            "extra": "iterations: 113136\ncpu: 6168.102107198397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 35180.945245673814,
            "unit": "ns/iter",
            "extra": "iterations: 20108\ncpu: 35178.30216829119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 27904.30408797499,
            "unit": "ns/iter",
            "extra": "iterations: 25098\ncpu: 27902.80102000165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 27966.73950351195,
            "unit": "ns/iter",
            "extra": "iterations: 25056\ncpu: 27965.345625797978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 22021.317711119867,
            "unit": "ns/iter",
            "extra": "iterations: 31771\ncpu: 22020.081206131497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 130770.74613234497,
            "unit": "ns/iter",
            "extra": "iterations: 5365\ncpu: 130764.5479962716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 270224.0293209633,
            "unit": "ns/iter",
            "extra": "iterations: 2592\ncpu: 270206.3271604906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 67549.31295137109,
            "unit": "ns/iter",
            "extra": "iterations: 10385\ncpu: 67544.7857486756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 68440.72055224393,
            "unit": "ns/iter",
            "extra": "iterations: 10213\ncpu: 68436.01292470389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 68205.80506575387,
            "unit": "ns/iter",
            "extra": "iterations: 10265\ncpu: 68205.92303945478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 137341.26951051108,
            "unit": "ns/iter",
            "extra": "iterations: 5087\ncpu: 137334.51936308085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 113691.32819096044,
            "unit": "ns/iter",
            "extra": "iterations: 6158\ncpu: 113682.93277038145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43037.83103872066,
            "unit": "ns/iter",
            "extra": "iterations: 16270\ncpu: 43035.05838967473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 208160.84915202274,
            "unit": "ns/iter",
            "extra": "iterations: 3361\ncpu: 208150.01487652422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 169713.90108829632,
            "unit": "ns/iter",
            "extra": "iterations: 4135\ncpu: 169700.1209189822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 171645.9093581797,
            "unit": "ns/iter",
            "extra": "iterations: 4082\ncpu: 171633.56197942304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 173581.29779867208,
            "unit": "ns/iter",
            "extra": "iterations: 4043\ncpu: 173567.87039327362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 292341.8279030968,
            "unit": "ns/iter",
            "extra": "iterations: 2394\ncpu: 292324.9373433556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1157773.3818181844,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1157769.421487607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 973984.2169680459,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 973993.880389434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 986767.4166666687,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 986741.6666666707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 982153.6530898554,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 982137.3595505736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 634031.827898572,
            "unit": "ns/iter",
            "extra": "iterations: 1104\ncpu: 634016.6666666757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 961196.0330122693,
            "unit": "ns/iter",
            "extra": "iterations: 727\ncpu: 961177.9917469049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 43724.781113194476,
            "unit": "ns/iter",
            "extra": "iterations: 15990\ncpu: 43722.77048155175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 213004.98414150902,
            "unit": "ns/iter",
            "extra": "iterations: 3279\ncpu: 213000.94541018913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 172453.15884386838,
            "unit": "ns/iter",
            "extra": "iterations: 4048\ncpu: 172447.35671936773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 172550.08771929436,
            "unit": "ns/iter",
            "extra": "iterations: 4047\ncpu: 172546.7012601922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 172514.95153752292,
            "unit": "ns/iter",
            "extra": "iterations: 4065\ncpu: 172513.2349323494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 294532.9974747582,
            "unit": "ns/iter",
            "extra": "iterations: 2376\ncpu: 294528.0723905734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1155146.1854306078,
            "unit": "ns/iter",
            "extra": "iterations: 604\ncpu: 1155146.3576158877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 968444.1135734619,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 968407.0637119218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 984305.6802816443,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 984246.9014084403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 984682.7116737032,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 984632.9113924061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 648754.7534884154,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 648750.0465116254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 968073.5236110472,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 968055.8333333402 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}