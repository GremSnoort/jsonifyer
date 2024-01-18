window.BENCHMARK_DATA = {
  "lastUpdate": 1705574936905,
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
      }
    ]
  }
}