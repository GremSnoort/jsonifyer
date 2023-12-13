window.BENCHMARK_DATA = {
  "lastUpdate": 1702489575964,
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
      }
    ]
  }
}