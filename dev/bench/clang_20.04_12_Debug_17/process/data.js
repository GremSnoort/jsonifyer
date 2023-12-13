window.BENCHMARK_DATA = {
  "lastUpdate": 1702492212001,
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
      }
    ]
  }
}