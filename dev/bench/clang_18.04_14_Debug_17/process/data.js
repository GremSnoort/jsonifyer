window.BENCHMARK_DATA = {
  "lastUpdate": 1702394249491,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-14 18.04 Debug c++-17": [
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702392451984,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17896.497325638993,
            "unit": "ns/iter",
            "extra": "iterations: 37953\ncpu: 17894.316654809896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 164860.61297192945,
            "unit": "ns/iter",
            "extra": "iterations: 5165\ncpu: 164846.56340755083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 313654.96713614796,
            "unit": "ns/iter",
            "extra": "iterations: 2769\ncpu: 313634.99458288186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 458001.6864406762,
            "unit": "ns/iter",
            "extra": "iterations: 1888\ncpu: 457963.241525424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 610690.1761006508,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 610653.8085255068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 610457.519000022,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 610430 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 728627.122931415,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 728609.3774625687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 847162.0996343576,
            "unit": "ns/iter",
            "extra": "iterations: 1094\ncpu: 847108.4095063985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 961364.0667361664,
            "unit": "ns/iter",
            "extra": "iterations: 959\ncpu: 961284.254431699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14313.040668986534,
            "unit": "ns/iter",
            "extra": "iterations: 49448\ncpu: 14312.07328911179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11766.614317425028,
            "unit": "ns/iter",
            "extra": "iterations: 59466\ncpu: 11765.787172501938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11833.207392231414,
            "unit": "ns/iter",
            "extra": "iterations: 59062\ncpu: 11832.53868815822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11802.371344733547,
            "unit": "ns/iter",
            "extra": "iterations: 59298\ncpu: 11802.059091368992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19664.740914848895,
            "unit": "ns/iter",
            "extra": "iterations: 35525\ncpu: 19664.396903589008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 71479.35704641558,
            "unit": "ns/iter",
            "extra": "iterations: 11850\ncpu: 71477.90717299572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 357107.73618088686,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 357102.4288107202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 288243.9935636964,
            "unit": "ns/iter",
            "extra": "iterations: 2952\ncpu: 288237.1951219513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 290765.9397672677,
            "unit": "ns/iter",
            "extra": "iterations: 2922\ncpu: 290753.901437371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 290820.2014413216,
            "unit": "ns/iter",
            "extra": "iterations: 2914\ncpu: 290813.9327385034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 609097.725999959,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609083.9000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5123157.12707232,
            "unit": "ns/iter",
            "extra": "iterations: 181\ncpu: 5123050.828729267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4210201.580356961,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4207885.267857156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4224738.9409091985,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4224640.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4202182.642533921,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4201907.239818998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2379824.5692307483,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2379669.7435897384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 4076326.364035391,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4076077.631578958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15788611.268656278,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15787256.716417916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6944295.030000376,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6943841.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 19853937.018867653,
            "unit": "ns/iter",
            "extra": "iterations: 53\ncpu: 19852684.90566034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 75979.1042628785,
            "unit": "ns/iter",
            "extra": "iterations: 11260\ncpu: 75974.67140319712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 410766.63044518046,
            "unit": "ns/iter",
            "extra": "iterations: 2089\ncpu: 410751.46002872166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 320067.7894538972,
            "unit": "ns/iter",
            "extra": "iterations: 2655\ncpu: 320053.4463276855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 327795.41573896515,
            "unit": "ns/iter",
            "extra": "iterations: 2605\ncpu: 327788.7140115172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 328942.6041586361,
            "unit": "ns/iter",
            "extra": "iterations: 2597\ncpu: 328926.45360030804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 600778.728000023,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600763.299999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5178185.90555521,
            "unit": "ns/iter",
            "extra": "iterations: 180\ncpu: 5177839.99999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4207722.585585425,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4207642.792792782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4281510.7511522565,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4281337.327188935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4271904.917808171,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4271724.200913247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2421354.598958203,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2421309.1145833256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4109893.8495572605,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4109708.849557516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 16195379.492307018,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16194424.61538468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 7207434.950000788,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7206932.000000065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 64719.58775012207,
            "unit": "ns/iter",
            "extra": "iterations: 13094\ncpu: 64715.56438063255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 365154.7391489251,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 365128.6382978711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 288697.5780190123,
            "unit": "ns/iter",
            "extra": "iterations: 2948\ncpu: 288674.3554952525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 287063.95845997386,
            "unit": "ns/iter",
            "extra": "iterations: 2961\ncpu: 287055.2516041874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 289717.7115710863,
            "unit": "ns/iter",
            "extra": "iterations: 2947\ncpu: 289703.49507974193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 573117.3209999269,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573064.1999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5150812.08333312,
            "unit": "ns/iter",
            "extra": "iterations: 180\ncpu: 5150750.555555561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4198700.905405289,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4198580.630630628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4255054.322727471,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4254872.272727281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4207478.698197781,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4207198.1981982095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2403573.1266150167,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2403481.912144713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 4076038.681222694,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4075851.965065492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6636.053825948354,
            "unit": "ns/iter",
            "extra": "iterations: 105451\ncpu: 6635.612749049296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 44438.83528889306,
            "unit": "ns/iter",
            "extra": "iterations: 15767\ncpu: 44435.67577852506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 33793.19764921639,
            "unit": "ns/iter",
            "extra": "iterations: 20759\ncpu: 33790.11031359905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32451.22002781702,
            "unit": "ns/iter",
            "extra": "iterations: 21570\ncpu: 32448.873435326987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 26206.680041920703,
            "unit": "ns/iter",
            "extra": "iterations: 26716\ncpu: 26204.72750411739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 198503.19716311814,
            "unit": "ns/iter",
            "extra": "iterations: 3525\ncpu: 198484.51063829538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 342350.624755363,
            "unit": "ns/iter",
            "extra": "iterations: 2044\ncpu: 342298.2876712274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 84587.41223308534,
            "unit": "ns/iter",
            "extra": "iterations: 8289\ncpu: 84585.0886717336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 85644.69726228234,
            "unit": "ns/iter",
            "extra": "iterations: 8182\ncpu: 85641.53018821884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 85491.57587595141,
            "unit": "ns/iter",
            "extra": "iterations: 8191\ncpu: 85491.33194970105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 167418.36363636274,
            "unit": "ns/iter",
            "extra": "iterations: 4180\ncpu: 167410.81339712912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 162553.78704133537,
            "unit": "ns/iter",
            "extra": "iterations: 4306\ncpu: 162547.7937761273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 51930.8757507478,
            "unit": "ns/iter",
            "extra": "iterations: 13320\ncpu: 51930.03753753751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 256541.80263160574,
            "unit": "ns/iter",
            "extra": "iterations: 2736\ncpu: 256530.08040935895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 209202.4022679836,
            "unit": "ns/iter",
            "extra": "iterations: 3351\ncpu: 209193.46463742186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 211600.7989130253,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 211588.9492753613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 209664.22989197596,
            "unit": "ns/iter",
            "extra": "iterations: 3332\ncpu: 209660.89435774006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 366722.98639456695,
            "unit": "ns/iter",
            "extra": "iterations: 1911\ncpu: 366708.0062794408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1455412.1250000664,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1455356.0416666518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1222445.7382199366,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1222412.2164048827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1239776.1811722668,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1239772.468916528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1235879.7301586962,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1235818.1657848489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 784686.8382022437,
            "unit": "ns/iter",
            "extra": "iterations: 890\ncpu: 784670.0000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1212242.949740108,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1212175.389947995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 53225.18543696467,
            "unit": "ns/iter",
            "extra": "iterations: 13239\ncpu: 53091.11715386307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 257064.66030110407,
            "unit": "ns/iter",
            "extra": "iterations: 2723\ncpu: 257056.84906353327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 210167.85217391318,
            "unit": "ns/iter",
            "extra": "iterations: 3335\ncpu: 210158.8305847081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 213843.8786303696,
            "unit": "ns/iter",
            "extra": "iterations: 3271\ncpu: 213838.15346988654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 212350.25401149743,
            "unit": "ns/iter",
            "extra": "iterations: 3303\ncpu: 212340.2966999722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 368231.9978969411,
            "unit": "ns/iter",
            "extra": "iterations: 1902\ncpu: 368222.9232386905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1460985.5979166753,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1460933.1249999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1211147.7447916346,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1211109.895833346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1253834.453571301,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1253781.4285714433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1234307.5486726381,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1234208.8495575201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 789849.5316742181,
            "unit": "ns/iter",
            "extra": "iterations: 884\ncpu: 789799.3212669634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1215534.8420138287,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1215484.8958333533 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702392451984,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17896.497325638993,
            "unit": "ns/iter",
            "extra": "iterations: 37953\ncpu: 17894.316654809896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 164860.61297192945,
            "unit": "ns/iter",
            "extra": "iterations: 5165\ncpu: 164846.56340755083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 313654.96713614796,
            "unit": "ns/iter",
            "extra": "iterations: 2769\ncpu: 313634.99458288186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 458001.6864406762,
            "unit": "ns/iter",
            "extra": "iterations: 1888\ncpu: 457963.241525424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 610690.1761006508,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 610653.8085255068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 610457.519000022,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 610430 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 728627.122931415,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 728609.3774625687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 847162.0996343576,
            "unit": "ns/iter",
            "extra": "iterations: 1094\ncpu: 847108.4095063985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 961364.0667361664,
            "unit": "ns/iter",
            "extra": "iterations: 959\ncpu: 961284.254431699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14313.040668986534,
            "unit": "ns/iter",
            "extra": "iterations: 49448\ncpu: 14312.07328911179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11766.614317425028,
            "unit": "ns/iter",
            "extra": "iterations: 59466\ncpu: 11765.787172501938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11833.207392231414,
            "unit": "ns/iter",
            "extra": "iterations: 59062\ncpu: 11832.53868815822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11802.371344733547,
            "unit": "ns/iter",
            "extra": "iterations: 59298\ncpu: 11802.059091368992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 19664.740914848895,
            "unit": "ns/iter",
            "extra": "iterations: 35525\ncpu: 19664.396903589008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 71479.35704641558,
            "unit": "ns/iter",
            "extra": "iterations: 11850\ncpu: 71477.90717299572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 357107.73618088686,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 357102.4288107202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 288243.9935636964,
            "unit": "ns/iter",
            "extra": "iterations: 2952\ncpu: 288237.1951219513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 290765.9397672677,
            "unit": "ns/iter",
            "extra": "iterations: 2922\ncpu: 290753.901437371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 290820.2014413216,
            "unit": "ns/iter",
            "extra": "iterations: 2914\ncpu: 290813.9327385034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 609097.725999959,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609083.9000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5123157.12707232,
            "unit": "ns/iter",
            "extra": "iterations: 181\ncpu: 5123050.828729267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4210201.580356961,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4207885.267857156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4224738.9409091985,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4224640.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4202182.642533921,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4201907.239818998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2379824.5692307483,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2379669.7435897384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 4076326.364035391,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4076077.631578958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15788611.268656278,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15787256.716417916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6944295.030000376,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6943841.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 19853937.018867653,
            "unit": "ns/iter",
            "extra": "iterations: 53\ncpu: 19852684.90566034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 75979.1042628785,
            "unit": "ns/iter",
            "extra": "iterations: 11260\ncpu: 75974.67140319712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 410766.63044518046,
            "unit": "ns/iter",
            "extra": "iterations: 2089\ncpu: 410751.46002872166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 320067.7894538972,
            "unit": "ns/iter",
            "extra": "iterations: 2655\ncpu: 320053.4463276855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 327795.41573896515,
            "unit": "ns/iter",
            "extra": "iterations: 2605\ncpu: 327788.7140115172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 328942.6041586361,
            "unit": "ns/iter",
            "extra": "iterations: 2597\ncpu: 328926.45360030804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 600778.728000023,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600763.299999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5178185.90555521,
            "unit": "ns/iter",
            "extra": "iterations: 180\ncpu: 5177839.99999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4207722.585585425,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4207642.792792782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4281510.7511522565,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4281337.327188935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4271904.917808171,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4271724.200913247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2421354.598958203,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2421309.1145833256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4109893.8495572605,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4109708.849557516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 16195379.492307018,
            "unit": "ns/iter",
            "extra": "iterations: 65\ncpu: 16194424.61538468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 7207434.950000788,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7206932.000000065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 64719.58775012207,
            "unit": "ns/iter",
            "extra": "iterations: 13094\ncpu: 64715.56438063255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 365154.7391489251,
            "unit": "ns/iter",
            "extra": "iterations: 2350\ncpu: 365128.6382978711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 288697.5780190123,
            "unit": "ns/iter",
            "extra": "iterations: 2948\ncpu: 288674.3554952525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 287063.95845997386,
            "unit": "ns/iter",
            "extra": "iterations: 2961\ncpu: 287055.2516041874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 289717.7115710863,
            "unit": "ns/iter",
            "extra": "iterations: 2947\ncpu: 289703.49507974193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 573117.3209999269,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573064.1999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5150812.08333312,
            "unit": "ns/iter",
            "extra": "iterations: 180\ncpu: 5150750.555555561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4198700.905405289,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4198580.630630628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4255054.322727471,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4254872.272727281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4207478.698197781,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4207198.1981982095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2403573.1266150167,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2403481.912144713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 4076038.681222694,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4075851.965065492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6636.053825948354,
            "unit": "ns/iter",
            "extra": "iterations: 105451\ncpu: 6635.612749049296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 44438.83528889306,
            "unit": "ns/iter",
            "extra": "iterations: 15767\ncpu: 44435.67577852506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 33793.19764921639,
            "unit": "ns/iter",
            "extra": "iterations: 20759\ncpu: 33790.11031359905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32451.22002781702,
            "unit": "ns/iter",
            "extra": "iterations: 21570\ncpu: 32448.873435326987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 26206.680041920703,
            "unit": "ns/iter",
            "extra": "iterations: 26716\ncpu: 26204.72750411739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 198503.19716311814,
            "unit": "ns/iter",
            "extra": "iterations: 3525\ncpu: 198484.51063829538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 342350.624755363,
            "unit": "ns/iter",
            "extra": "iterations: 2044\ncpu: 342298.2876712274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 84587.41223308534,
            "unit": "ns/iter",
            "extra": "iterations: 8289\ncpu: 84585.0886717336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 85644.69726228234,
            "unit": "ns/iter",
            "extra": "iterations: 8182\ncpu: 85641.53018821884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 85491.57587595141,
            "unit": "ns/iter",
            "extra": "iterations: 8191\ncpu: 85491.33194970105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 167418.36363636274,
            "unit": "ns/iter",
            "extra": "iterations: 4180\ncpu: 167410.81339712912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 162553.78704133537,
            "unit": "ns/iter",
            "extra": "iterations: 4306\ncpu: 162547.7937761273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 51930.8757507478,
            "unit": "ns/iter",
            "extra": "iterations: 13320\ncpu: 51930.03753753751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 256541.80263160574,
            "unit": "ns/iter",
            "extra": "iterations: 2736\ncpu: 256530.08040935895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 209202.4022679836,
            "unit": "ns/iter",
            "extra": "iterations: 3351\ncpu: 209193.46463742186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 211600.7989130253,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 211588.9492753613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 209664.22989197596,
            "unit": "ns/iter",
            "extra": "iterations: 3332\ncpu: 209660.89435774006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 366722.98639456695,
            "unit": "ns/iter",
            "extra": "iterations: 1911\ncpu: 366708.0062794408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1455412.1250000664,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1455356.0416666518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1222445.7382199366,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1222412.2164048827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1239776.1811722668,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1239772.468916528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1235879.7301586962,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1235818.1657848489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 784686.8382022437,
            "unit": "ns/iter",
            "extra": "iterations: 890\ncpu: 784670.0000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1212242.949740108,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1212175.389947995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 53225.18543696467,
            "unit": "ns/iter",
            "extra": "iterations: 13239\ncpu: 53091.11715386307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 257064.66030110407,
            "unit": "ns/iter",
            "extra": "iterations: 2723\ncpu: 257056.84906353327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 210167.85217391318,
            "unit": "ns/iter",
            "extra": "iterations: 3335\ncpu: 210158.8305847081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 213843.8786303696,
            "unit": "ns/iter",
            "extra": "iterations: 3271\ncpu: 213838.15346988654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 212350.25401149743,
            "unit": "ns/iter",
            "extra": "iterations: 3303\ncpu: 212340.2966999722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 368231.9978969411,
            "unit": "ns/iter",
            "extra": "iterations: 1902\ncpu: 368222.9232386905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1460985.5979166753,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1460933.1249999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1211147.7447916346,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1211109.895833346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1253834.453571301,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1253781.4285714433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1234307.5486726381,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1234208.8495575201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 789849.5316742181,
            "unit": "ns/iter",
            "extra": "iterations: 884\ncpu: 789799.3212669634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1215534.8420138287,
            "unit": "ns/iter",
            "extra": "iterations: 576\ncpu: 1215484.8958333533 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394242427,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 18468.064280729457,
            "unit": "ns/iter",
            "extra": "iterations: 34396\ncpu: 18467.786951971164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 167581.59305308218,
            "unit": "ns/iter",
            "extra": "iterations: 5067\ncpu: 167579.4750345372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 315546.23915420874,
            "unit": "ns/iter",
            "extra": "iterations: 2743\ncpu: 315524.2435289828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 461395.2658836107,
            "unit": "ns/iter",
            "extra": "iterations: 1873\ncpu: 461371.86332087556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 616395.5710267773,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 616354.7116736987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 614307.2630000006,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 614300.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 734386.7031745539,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 734324.2063492066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 851683.3551058199,
            "unit": "ns/iter",
            "extra": "iterations: 1087\ncpu: 851620.7911683526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 970470.5062893003,
            "unit": "ns/iter",
            "extra": "iterations: 954\ncpu: 970395.0733752616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 14534.041230054376,
            "unit": "ns/iter",
            "extra": "iterations: 48193\ncpu: 14533.475815989865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11985.010913604543,
            "unit": "ns/iter",
            "extra": "iterations: 58001\ncpu: 11984.017516939373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11983.50789712227,
            "unit": "ns/iter",
            "extra": "iterations: 58439\ncpu: 11983.163640719371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 12120.48153205402,
            "unit": "ns/iter",
            "extra": "iterations: 57857\ncpu: 12120.047703821483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 20148.07688320502,
            "unit": "ns/iter",
            "extra": "iterations: 34728\ncpu: 20147.18094909008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 72212.79562786556,
            "unit": "ns/iter",
            "extra": "iterations: 11802\ncpu: 72206.95644805967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 367581.3097988895,
            "unit": "ns/iter",
            "extra": "iterations: 2337\ncpu: 367562.473256311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 288825.9720110735,
            "unit": "ns/iter",
            "extra": "iterations: 2894\ncpu: 288803.9737387704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 290165.66235534154,
            "unit": "ns/iter",
            "extra": "iterations: 2938\ncpu: 290147.4132062634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 284481.3928930446,
            "unit": "ns/iter",
            "extra": "iterations: 2983\ncpu: 284458.6322494137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 600378.1569999092,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600332.0000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 5188767.055866092,
            "unit": "ns/iter",
            "extra": "iterations: 179\ncpu: 5188337.430167589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 4185737.713004581,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4185491.4798206314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 4256502.9497720525,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4256301.369863017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 4232487.278538644,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4232290.410958896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2396524.6461536996,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2396494.8717948757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 4113201.105726833,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4113046.255506606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 15808054.298507959,
            "unit": "ns/iter",
            "extra": "iterations: 67\ncpu: 15807023.88059699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 7090491.440000052,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7090513.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 19687463.735850405,
            "unit": "ns/iter",
            "extra": "iterations: 53\ncpu: 19686592.452830233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 75829.46337521792,
            "unit": "ns/iter",
            "extra": "iterations: 11140\ncpu: 75827.09156193904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 417234.71734896966,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 417226.8031189082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 324999.5221205191,
            "unit": "ns/iter",
            "extra": "iterations: 2622\ncpu: 325000.6864988564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 323228.9346429944,
            "unit": "ns/iter",
            "extra": "iterations: 2647\ncpu: 323225.5005666793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 317635.8037174541,
            "unit": "ns/iter",
            "extra": "iterations: 2690\ncpu: 317629.7769516739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 598591.6790000375,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598593.699999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 5246022.350282449,
            "unit": "ns/iter",
            "extra": "iterations: 177\ncpu: 5245872.316384176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 4238210.84545466,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4238195.454545458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 4313025.125000009,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4312949.537037026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 4291792.198156639,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4291736.405529961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2429448.697127873,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2429414.6214099224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 4151774.9642854896,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4151737.0535714296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 16149679.000000449,
            "unit": "ns/iter",
            "extra": "iterations: 66\ncpu: 16149063.636363663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6998016.369999504,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6998041.000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 65481.5077483376,
            "unit": "ns/iter",
            "extra": "iterations: 12906\ncpu: 65479.95505966244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 361464.50907555135,
            "unit": "ns/iter",
            "extra": "iterations: 2369\ncpu: 361461.671591389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 282781.429470202,
            "unit": "ns/iter",
            "extra": "iterations: 3020\ncpu: 282775.16556291305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 286198.80319150613,
            "unit": "ns/iter",
            "extra": "iterations: 3008\ncpu: 286194.3151595766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 283704.0231823194,
            "unit": "ns/iter",
            "extra": "iterations: 2847\ncpu: 283697.36564804864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 567988.3130000007,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 567960.8000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 5247894.3240227215,
            "unit": "ns/iter",
            "extra": "iterations: 179\ncpu: 5247530.726257006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 4207011.42533952,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4206836.199095033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 4298760.027522637,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4298521.100917441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 4252195.767123306,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4252031.050228311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2399268.891472815,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2399205.684754518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 4113215.469026554,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4113061.946902628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 6653.316250153832,
            "unit": "ns/iter",
            "extra": "iterations: 105679\ncpu: 6653.063522554146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 44466.271240373804,
            "unit": "ns/iter",
            "extra": "iterations: 15713\ncpu: 44463.42518933382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 33082.619157452194,
            "unit": "ns/iter",
            "extra": "iterations: 21245\ncpu: 33080.92257001627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 32730.231648167566,
            "unit": "ns/iter",
            "extra": "iterations: 21442\ncpu: 32728.34623635855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 26531.05193672172,
            "unit": "ns/iter",
            "extra": "iterations: 26359\ncpu: 26529.87214992971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 193857.11018825092,
            "unit": "ns/iter",
            "extra": "iterations: 3612\ncpu: 193843.2170542623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 346972.90796635684,
            "unit": "ns/iter",
            "extra": "iterations: 2021\ncpu: 346952.1523998058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 85528.19551711177,
            "unit": "ns/iter",
            "extra": "iterations: 8209\ncpu: 85525.94713119784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 86141.69303758047,
            "unit": "ns/iter",
            "extra": "iterations: 8115\ncpu: 86142.02094885893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 86127.02821433698,
            "unit": "ns/iter",
            "extra": "iterations: 8081\ncpu: 86125.2196510336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 174434.5736763255,
            "unit": "ns/iter",
            "extra": "iterations: 4004\ncpu: 174425.19980019884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 164315.8485345767,
            "unit": "ns/iter",
            "extra": "iterations: 4265\ncpu: 164305.60375146533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 51845.668519759085,
            "unit": "ns/iter",
            "extra": "iterations: 13491\ncpu: 51842.235564450115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 257379.80227857223,
            "unit": "ns/iter",
            "extra": "iterations: 2721\ncpu: 257358.765159867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 208780.55485985577,
            "unit": "ns/iter",
            "extra": "iterations: 3354\ncpu: 208767.59093619353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 212175.63909090133,
            "unit": "ns/iter",
            "extra": "iterations: 3300\ncpu: 212163.06060606177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 210784.63037593977,
            "unit": "ns/iter",
            "extra": "iterations: 3325\ncpu: 210775.42857142788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 368200.0676455337,
            "unit": "ns/iter",
            "extra": "iterations: 1907\ncpu: 368183.74410068034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1459945.8828451359,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1459869.8744769786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1222188.8153309985,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1222174.0418118504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1231620.2495575638,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1231597.1681416049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1232941.9788733197,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1232857.7464788891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 778327.3917869021,
            "unit": "ns/iter",
            "extra": "iterations: 901\ncpu: 778262.4861265328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1212693.8301559598,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1212631.1958405497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 53433.26502485028,
            "unit": "ns/iter",
            "extra": "iterations: 13278\ncpu: 53424.37114023143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 261195.8141097253,
            "unit": "ns/iter",
            "extra": "iterations: 2679\ncpu: 261191.3773796196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 212186.41654045388,
            "unit": "ns/iter",
            "extra": "iterations: 3301\ncpu: 212181.39957588617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 213162.5136044108,
            "unit": "ns/iter",
            "extra": "iterations: 3271\ncpu: 213158.6670742857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 212690.98021307547,
            "unit": "ns/iter",
            "extra": "iterations: 3285\ncpu: 212685.69254185713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 374336.3301230983,
            "unit": "ns/iter",
            "extra": "iterations: 1869\ncpu: 374337.5066880649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1464378.248954052,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1464343.514644327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1221921.3426571875,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1221830.7692307718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1237734.4885361977,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1237669.8412698293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1240736.4814160133,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1240672.3893805186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 779230.0767519025,
            "unit": "ns/iter",
            "extra": "iterations: 899\ncpu: 779194.994438262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1213721.627382839,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1213679.7227036227 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}