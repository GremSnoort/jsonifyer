window.BENCHMARK_DATA = {
  "lastUpdate": 1705771618258,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-11 22.04 Debug c++-17": [
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397900279,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6948.958592585551,
            "unit": "ns/iter",
            "extra": "iterations: 100610\ncpu: 6948.74266971474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51436.89540000196,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51433.3 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94980.05118546673,
            "unit": "ns/iter",
            "extra": "iterations: 9026\ncpu: 94974.451584312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 138288.02802383635,
            "unit": "ns/iter",
            "extra": "iterations: 6209\ncpu: 138279.48139797067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 182906.25021007503,
            "unit": "ns/iter",
            "extra": "iterations: 4760\ncpu: 182897.4999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 225217.74798020223,
            "unit": "ns/iter",
            "extra": "iterations: 3837\ncpu: 225211.44123012776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 269269.3487577617,
            "unit": "ns/iter",
            "extra": "iterations: 3220\ncpu: 269248.13664596266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 313034.50430107326,
            "unit": "ns/iter",
            "extra": "iterations: 2790\ncpu: 313013.4408602151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 355171.43941248296,
            "unit": "ns/iter",
            "extra": "iterations: 2451\ncpu: 355150.1835985312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5759.432015230681,
            "unit": "ns/iter",
            "extra": "iterations: 121336\ncpu: 5758.911617327102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4601.065671702308,
            "unit": "ns/iter",
            "extra": "iterations: 148481\ncpu: 4601.013597699367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4674.007605577699,
            "unit": "ns/iter",
            "extra": "iterations: 149890\ncpu: 4673.865501367672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4711.320853999856,
            "unit": "ns/iter",
            "extra": "iterations: 148993\ncpu: 4711.063607015083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7286.098838483399,
            "unit": "ns/iter",
            "extra": "iterations: 95823\ncpu: 7285.868737150789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25640.62250199329,
            "unit": "ns/iter",
            "extra": "iterations: 31375\ncpu: 25638.858964143423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 130611.04761182868,
            "unit": "ns/iter",
            "extra": "iterations: 6595\ncpu: 130599.36315390485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 101985.29453851518,
            "unit": "ns/iter",
            "extra": "iterations: 8386\ncpu: 101980.3481993802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 102323.69369908731,
            "unit": "ns/iter",
            "extra": "iterations: 8348\ncpu: 102318.98658361261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99125.46502440161,
            "unit": "ns/iter",
            "extra": "iterations: 8606\ncpu: 99120.64838484765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 212280.59088740454,
            "unit": "ns/iter",
            "extra": "iterations: 4192\ncpu: 212270.63454198468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1717972.6672827173,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1717939.7412199634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1340681.040404098,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1340586.0028859999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1347994.933139542,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1347936.91860465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1325167.8017118475,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1325044.7931526403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 728249.2401883986,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 728205.3375196231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1298470.8559440365,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1298344.475524474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32926.30287606913,
            "unit": "ns/iter",
            "extra": "iterations: 24756\ncpu: 32923.21053481984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 158934.9222283603,
            "unit": "ns/iter",
            "extra": "iterations: 5439\ncpu: 158926.5122265124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 127778.08564305642,
            "unit": "ns/iter",
            "extra": "iterations: 6819\ncpu: 127772.92858190324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 126739.94822768579,
            "unit": "ns/iter",
            "extra": "iterations: 6799\ncpu: 126732.88718929252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 122882.56001715119,
            "unit": "ns/iter",
            "extra": "iterations: 6998\ncpu: 122877.03629608436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 223353.525406233,
            "unit": "ns/iter",
            "extra": "iterations: 3877\ncpu: 223341.47536755243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1753445.4041353022,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1753325.9398496202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1385484.5955224268,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1385394.1791044748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1382435.408011818,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1382304.005934711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1343533.2023122043,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1343463.728323695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 765046.4605263482,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 764981.4967105244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1332518.696839139,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1332485.775862063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6211522.106666886,
            "unit": "ns/iter",
            "extra": "iterations: 150\ncpu: 6211232.66666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2837220.573170796,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2837098.475609748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24424.590214818232,
            "unit": "ns/iter",
            "extra": "iterations: 32539\ncpu: 24422.92633455236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 126287.72680638764,
            "unit": "ns/iter",
            "extra": "iterations: 6823\ncpu: 126282.16327128782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 98398.99289235374,
            "unit": "ns/iter",
            "extra": "iterations: 8723\ncpu: 98391.67717528343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 98523.42209208496,
            "unit": "ns/iter",
            "extra": "iterations: 8709\ncpu: 98517.78619818614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94344.49845678826,
            "unit": "ns/iter",
            "extra": "iterations: 9072\ncpu: 94339.47310405625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 192849.8688888946,
            "unit": "ns/iter",
            "extra": "iterations: 4500\ncpu: 192841.20000000056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1724455.562730646,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1724278.597785978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1343618.5714286054,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1343562.9148629166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1354252.9112080776,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1354151.8195050962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1327570.2578347262,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1327500.7122507112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 722210.5968992308,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 722156.3565891436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1297807.4353268293,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1297747.8442280916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2629.230011559365,
            "unit": "ns/iter",
            "extra": "iterations: 267317\ncpu: 2629.0800809525736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17371.105577690305,
            "unit": "ns/iter",
            "extra": "iterations: 40160\ncpu: 17369.977589641523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14137.735823491337,
            "unit": "ns/iter",
            "extra": "iterations: 49448\ncpu: 14136.496926063755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14169.198506193476,
            "unit": "ns/iter",
            "extra": "iterations: 49404\ncpu: 14168.854748603391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10135.531570064693,
            "unit": "ns/iter",
            "extra": "iterations: 68736\ncpu: 10135.019494879003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 70717.26660314336,
            "unit": "ns/iter",
            "extra": "iterations: 10495\ncpu: 70712.9871367318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 115870.06590305494,
            "unit": "ns/iter",
            "extra": "iterations: 6024\ncpu: 115861.08897742389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28012.939178104374,
            "unit": "ns/iter",
            "extra": "iterations: 24991\ncpu: 28011.14401184426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28103.99783263028,
            "unit": "ns/iter",
            "extra": "iterations: 24915\ncpu: 28102.23158739693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28140.761786203027,
            "unit": "ns/iter",
            "extra": "iterations: 24902\ncpu: 28138.944663079266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 51408.71449498222,
            "unit": "ns/iter",
            "extra": "iterations: 13653\ncpu: 51406.03530359599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53037.18959616609,
            "unit": "ns/iter",
            "extra": "iterations: 13149\ncpu: 53033.257281922146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20566.57325084622,
            "unit": "ns/iter",
            "extra": "iterations: 33945\ncpu: 20566.121667403044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101960.79206049095,
            "unit": "ns/iter",
            "extra": "iterations: 6877\ncpu: 101951.25781590857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84170.17997587113,
            "unit": "ns/iter",
            "extra": "iterations: 8290\ncpu: 84164.92159228018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84546.16861798325,
            "unit": "ns/iter",
            "extra": "iterations: 8285\ncpu: 84539.69824984828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83406.45565857983,
            "unit": "ns/iter",
            "extra": "iterations: 8412\ncpu: 83398.51402757953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 122776.44634060607,
            "unit": "ns/iter",
            "extra": "iterations: 5684\ncpu: 122774.96481351176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 502918.70208182954,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 502873.2950466611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 411542.69982342893,
            "unit": "ns/iter",
            "extra": "iterations: 1699\ncpu: 411538.08122424927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 418469.21863795974,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 418447.3715651149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 411377.7577895178,
            "unit": "ns/iter",
            "extra": "iterations: 1701\ncpu: 411356.1434450349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 254931.7068902639,
            "unit": "ns/iter",
            "extra": "iterations: 2743\ncpu: 254912.21290557904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 406597.76000000525,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 406559.24637681013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21080.84799252437,
            "unit": "ns/iter",
            "extra": "iterations: 33176\ncpu: 21078.9576802507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 103422.8140428629,
            "unit": "ns/iter",
            "extra": "iterations: 6765\ncpu: 103416.39320029471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86245.64993198981,
            "unit": "ns/iter",
            "extra": "iterations: 8087\ncpu: 86241.96859156677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86281.83754156322,
            "unit": "ns/iter",
            "extra": "iterations: 8119\ncpu: 86277.27552654303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 85965.54990792066,
            "unit": "ns/iter",
            "extra": "iterations: 8145\ncpu: 85958.91958256694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 124904.48297379272,
            "unit": "ns/iter",
            "extra": "iterations: 5609\ncpu: 124893.92048493504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 498830.7273375932,
            "unit": "ns/iter",
            "extra": "iterations: 1401\ncpu: 498789.22198429634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 415651.76945928327,
            "unit": "ns/iter",
            "extra": "iterations: 1683\ncpu: 415630.83778966166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 417547.08711219014,
            "unit": "ns/iter",
            "extra": "iterations: 1676\ncpu: 417524.5823389026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 411118.4193548377,
            "unit": "ns/iter",
            "extra": "iterations: 1705\ncpu: 411106.33431084757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 259648.89235337143,
            "unit": "ns/iter",
            "extra": "iterations: 2694\ncpu: 259632.66518188696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 407867.0221703732,
            "unit": "ns/iter",
            "extra": "iterations: 1714\ncpu: 407842.6487747888 ns\nthreads: 1"
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397900279,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6948.958592585551,
            "unit": "ns/iter",
            "extra": "iterations: 100610\ncpu: 6948.74266971474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51436.89540000196,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51433.3 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94980.05118546673,
            "unit": "ns/iter",
            "extra": "iterations: 9026\ncpu: 94974.451584312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 138288.02802383635,
            "unit": "ns/iter",
            "extra": "iterations: 6209\ncpu: 138279.48139797067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 182906.25021007503,
            "unit": "ns/iter",
            "extra": "iterations: 4760\ncpu: 182897.4999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 225217.74798020223,
            "unit": "ns/iter",
            "extra": "iterations: 3837\ncpu: 225211.44123012776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 269269.3487577617,
            "unit": "ns/iter",
            "extra": "iterations: 3220\ncpu: 269248.13664596266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 313034.50430107326,
            "unit": "ns/iter",
            "extra": "iterations: 2790\ncpu: 313013.4408602151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 355171.43941248296,
            "unit": "ns/iter",
            "extra": "iterations: 2451\ncpu: 355150.1835985312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5759.432015230681,
            "unit": "ns/iter",
            "extra": "iterations: 121336\ncpu: 5758.911617327102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4601.065671702308,
            "unit": "ns/iter",
            "extra": "iterations: 148481\ncpu: 4601.013597699367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4674.007605577699,
            "unit": "ns/iter",
            "extra": "iterations: 149890\ncpu: 4673.865501367672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4711.320853999856,
            "unit": "ns/iter",
            "extra": "iterations: 148993\ncpu: 4711.063607015083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7286.098838483399,
            "unit": "ns/iter",
            "extra": "iterations: 95823\ncpu: 7285.868737150789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25640.62250199329,
            "unit": "ns/iter",
            "extra": "iterations: 31375\ncpu: 25638.858964143423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 130611.04761182868,
            "unit": "ns/iter",
            "extra": "iterations: 6595\ncpu: 130599.36315390485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 101985.29453851518,
            "unit": "ns/iter",
            "extra": "iterations: 8386\ncpu: 101980.3481993802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 102323.69369908731,
            "unit": "ns/iter",
            "extra": "iterations: 8348\ncpu: 102318.98658361261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 99125.46502440161,
            "unit": "ns/iter",
            "extra": "iterations: 8606\ncpu: 99120.64838484765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 212280.59088740454,
            "unit": "ns/iter",
            "extra": "iterations: 4192\ncpu: 212270.63454198468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1717972.6672827173,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1717939.7412199634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1340681.040404098,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1340586.0028859999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1347994.933139542,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1347936.91860465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1325167.8017118475,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1325044.7931526403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 728249.2401883986,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 728205.3375196231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1298470.8559440365,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1298344.475524474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32926.30287606913,
            "unit": "ns/iter",
            "extra": "iterations: 24756\ncpu: 32923.21053481984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 158934.9222283603,
            "unit": "ns/iter",
            "extra": "iterations: 5439\ncpu: 158926.5122265124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 127778.08564305642,
            "unit": "ns/iter",
            "extra": "iterations: 6819\ncpu: 127772.92858190324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 126739.94822768579,
            "unit": "ns/iter",
            "extra": "iterations: 6799\ncpu: 126732.88718929252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 122882.56001715119,
            "unit": "ns/iter",
            "extra": "iterations: 6998\ncpu: 122877.03629608436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 223353.525406233,
            "unit": "ns/iter",
            "extra": "iterations: 3877\ncpu: 223341.47536755243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1753445.4041353022,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1753325.9398496202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1385484.5955224268,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1385394.1791044748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1382435.408011818,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1382304.005934711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1343533.2023122043,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1343463.728323695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 765046.4605263482,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 764981.4967105244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1332518.696839139,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1332485.775862063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6211522.106666886,
            "unit": "ns/iter",
            "extra": "iterations: 150\ncpu: 6211232.66666667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2837220.573170796,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2837098.475609748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24424.590214818232,
            "unit": "ns/iter",
            "extra": "iterations: 32539\ncpu: 24422.92633455236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 126287.72680638764,
            "unit": "ns/iter",
            "extra": "iterations: 6823\ncpu: 126282.16327128782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 98398.99289235374,
            "unit": "ns/iter",
            "extra": "iterations: 8723\ncpu: 98391.67717528343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 98523.42209208496,
            "unit": "ns/iter",
            "extra": "iterations: 8709\ncpu: 98517.78619818614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94344.49845678826,
            "unit": "ns/iter",
            "extra": "iterations: 9072\ncpu: 94339.47310405625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 192849.8688888946,
            "unit": "ns/iter",
            "extra": "iterations: 4500\ncpu: 192841.20000000056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1724455.562730646,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1724278.597785978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1343618.5714286054,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1343562.9148629166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1354252.9112080776,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1354151.8195050962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1327570.2578347262,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1327500.7122507112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 722210.5968992308,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 722156.3565891436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1297807.4353268293,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1297747.8442280916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2629.230011559365,
            "unit": "ns/iter",
            "extra": "iterations: 267317\ncpu: 2629.0800809525736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17371.105577690305,
            "unit": "ns/iter",
            "extra": "iterations: 40160\ncpu: 17369.977589641523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14137.735823491337,
            "unit": "ns/iter",
            "extra": "iterations: 49448\ncpu: 14136.496926063755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14169.198506193476,
            "unit": "ns/iter",
            "extra": "iterations: 49404\ncpu: 14168.854748603391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10135.531570064693,
            "unit": "ns/iter",
            "extra": "iterations: 68736\ncpu: 10135.019494879003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 70717.26660314336,
            "unit": "ns/iter",
            "extra": "iterations: 10495\ncpu: 70712.9871367318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 115870.06590305494,
            "unit": "ns/iter",
            "extra": "iterations: 6024\ncpu: 115861.08897742389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28012.939178104374,
            "unit": "ns/iter",
            "extra": "iterations: 24991\ncpu: 28011.14401184426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28103.99783263028,
            "unit": "ns/iter",
            "extra": "iterations: 24915\ncpu: 28102.23158739693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28140.761786203027,
            "unit": "ns/iter",
            "extra": "iterations: 24902\ncpu: 28138.944663079266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 51408.71449498222,
            "unit": "ns/iter",
            "extra": "iterations: 13653\ncpu: 51406.03530359599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53037.18959616609,
            "unit": "ns/iter",
            "extra": "iterations: 13149\ncpu: 53033.257281922146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20566.57325084622,
            "unit": "ns/iter",
            "extra": "iterations: 33945\ncpu: 20566.121667403044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101960.79206049095,
            "unit": "ns/iter",
            "extra": "iterations: 6877\ncpu: 101951.25781590857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84170.17997587113,
            "unit": "ns/iter",
            "extra": "iterations: 8290\ncpu: 84164.92159228018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84546.16861798325,
            "unit": "ns/iter",
            "extra": "iterations: 8285\ncpu: 84539.69824984828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83406.45565857983,
            "unit": "ns/iter",
            "extra": "iterations: 8412\ncpu: 83398.51402757953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 122776.44634060607,
            "unit": "ns/iter",
            "extra": "iterations: 5684\ncpu: 122774.96481351176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 502918.70208182954,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 502873.2950466611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 411542.69982342893,
            "unit": "ns/iter",
            "extra": "iterations: 1699\ncpu: 411538.08122424927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 418469.21863795974,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 418447.3715651149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 411377.7577895178,
            "unit": "ns/iter",
            "extra": "iterations: 1701\ncpu: 411356.1434450349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 254931.7068902639,
            "unit": "ns/iter",
            "extra": "iterations: 2743\ncpu: 254912.21290557904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 406597.76000000525,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 406559.24637681013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21080.84799252437,
            "unit": "ns/iter",
            "extra": "iterations: 33176\ncpu: 21078.9576802507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 103422.8140428629,
            "unit": "ns/iter",
            "extra": "iterations: 6765\ncpu: 103416.39320029471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86245.64993198981,
            "unit": "ns/iter",
            "extra": "iterations: 8087\ncpu: 86241.96859156677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86281.83754156322,
            "unit": "ns/iter",
            "extra": "iterations: 8119\ncpu: 86277.27552654303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 85965.54990792066,
            "unit": "ns/iter",
            "extra": "iterations: 8145\ncpu: 85958.91958256694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 124904.48297379272,
            "unit": "ns/iter",
            "extra": "iterations: 5609\ncpu: 124893.92048493504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 498830.7273375932,
            "unit": "ns/iter",
            "extra": "iterations: 1401\ncpu: 498789.22198429634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 415651.76945928327,
            "unit": "ns/iter",
            "extra": "iterations: 1683\ncpu: 415630.83778966166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 417547.08711219014,
            "unit": "ns/iter",
            "extra": "iterations: 1676\ncpu: 417524.5823389026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 411118.4193548377,
            "unit": "ns/iter",
            "extra": "iterations: 1705\ncpu: 411106.33431084757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 259648.89235337143,
            "unit": "ns/iter",
            "extra": "iterations: 2694\ncpu: 259632.66518188696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 407867.0221703732,
            "unit": "ns/iter",
            "extra": "iterations: 1714\ncpu: 407842.6487747888 ns\nthreads: 1"
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
          "id": "c96a03d62fd108220d1ee9e00340d51e289dfa36",
          "message": "Add compare for BMs, add parse data BMs",
          "timestamp": "2023-12-12T22:17:35+03:00",
          "tree_id": "f2fe56f9afc9ca6399f84dbb8347c53db7125ceb",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c96a03d62fd108220d1ee9e00340d51e289dfa36"
        },
        "date": 1702409089533,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7172.9053611567015,
            "unit": "ns/iter",
            "extra": "iterations: 97423\ncpu: 7172.427455528983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53205.825999998524,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53203.45 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98160.37103038836,
            "unit": "ns/iter",
            "extra": "iterations: 8754\ncpu: 98156.16860863604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 143194.87410729015,
            "unit": "ns/iter",
            "extra": "iterations: 6021\ncpu: 143188.3740242485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 188348.13991322232,
            "unit": "ns/iter",
            "extra": "iterations: 4610\ncpu: 188338.546637744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 234069.63540540688,
            "unit": "ns/iter",
            "extra": "iterations: 3700\ncpu: 234056.89189189184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 278547.0360244436,
            "unit": "ns/iter",
            "extra": "iterations: 3109\ncpu: 278528.88388549373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 324570.3879149428,
            "unit": "ns/iter",
            "extra": "iterations: 2681\ncpu: 324568.96680343157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 369063.3481953214,
            "unit": "ns/iter",
            "extra": "iterations: 2355\ncpu: 369062.46284501074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5827.851792584486,
            "unit": "ns/iter",
            "extra": "iterations: 120608\ncpu: 5827.811587954362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4726.284402802288,
            "unit": "ns/iter",
            "extra": "iterations: 148033\ncpu: 4726.26036086548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4837.487719443238,
            "unit": "ns/iter",
            "extra": "iterations: 145026\ncpu: 4837.422944851261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4764.98143180091,
            "unit": "ns/iter",
            "extra": "iterations: 146864\ncpu: 4764.921968624037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7302.0351129299415,
            "unit": "ns/iter",
            "extra": "iterations: 96033\ncpu: 7302.015973675716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25183.486721001547,
            "unit": "ns/iter",
            "extra": "iterations: 32269\ncpu: 25183.01775698041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 118948.62428710655,
            "unit": "ns/iter",
            "extra": "iterations: 7189\ncpu: 118947.03018500491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 93058.19085552251,
            "unit": "ns/iter",
            "extra": "iterations: 9164\ncpu: 93057.16935835891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 93469.14270057176,
            "unit": "ns/iter",
            "extra": "iterations: 9124\ncpu: 93467.66768960992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 89972.12320523703,
            "unit": "ns/iter",
            "extra": "iterations: 9472\ncpu: 89970.96706081058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 204307.93101077527,
            "unit": "ns/iter",
            "extra": "iterations: 4363\ncpu: 204303.20880128324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1727590.6238361127,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1727600.5586592187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1360611.6969252925,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1360617.8623718885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1365694.3588234955,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1365665.7352941188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1359821.1038012349,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1359799.707602343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 734839.4896988885,
            "unit": "ns/iter",
            "extra": "iterations: 1262\ncpu: 734833.8351822505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1315302.88477958,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1315309.246088192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32199.785171547894,
            "unit": "ns/iter",
            "extra": "iterations: 25532\ncpu: 32198.868087106326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 145772.66389407558,
            "unit": "ns/iter",
            "extra": "iterations: 5891\ncpu: 145769.835342047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 116451.81609508836,
            "unit": "ns/iter",
            "extra": "iterations: 7319\ncpu: 116450.45771280224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 119841.10133816909,
            "unit": "ns/iter",
            "extra": "iterations: 7174\ncpu: 119839.83830499025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 114622.73744139585,
            "unit": "ns/iter",
            "extra": "iterations: 7465\ncpu: 114620.3215003347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 213558.10982230192,
            "unit": "ns/iter",
            "extra": "iterations: 4052\ncpu: 213554.71372161925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1765065.1553030885,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1765010.7954545468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1385525.1160714421,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1385507.2916666646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1415348.7853881272,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1415318.1126331843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1400977.531818195,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1400950.6060606039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 761799.6158885957,
            "unit": "ns/iter",
            "extra": "iterations: 1221\ncpu: 761775.1842751822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1351019.1991278573,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1350999.1279069758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6235240.446666618,
            "unit": "ns/iter",
            "extra": "iterations: 150\ncpu: 6235131.333333327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2761465.581602419,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2761456.9732937654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 23745.16123574214,
            "unit": "ns/iter",
            "extra": "iterations: 34279\ncpu: 23745.100498847572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 113979.16591211672,
            "unit": "ns/iter",
            "extra": "iterations: 7510\ncpu: 113975.9520639152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 90429.78078141501,
            "unit": "ns/iter",
            "extra": "iterations: 9470\ncpu: 90428.28933474096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 89288.57411273368,
            "unit": "ns/iter",
            "extra": "iterations: 9580\ncpu: 89287.55741127348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 86981.98951440185,
            "unit": "ns/iter",
            "extra": "iterations: 9823\ncpu: 86981.7265601141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 183959.39868588443,
            "unit": "ns/iter",
            "extra": "iterations: 4718\ncpu: 183954.98092412064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1737638.847299872,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1737563.1284916124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1356749.473837168,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1356716.7151162848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1362693.638888898,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1362690.9356725132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1351698.941860408,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1351669.0406976738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 721705.8428792594,
            "unit": "ns/iter",
            "extra": "iterations: 1292\ncpu: 721698.7616099094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1311551.4894217118,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1311528.7729196006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2630.2678447719213,
            "unit": "ns/iter",
            "extra": "iterations: 264153\ncpu: 2630.2442145272016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17450.562159336132,
            "unit": "ns/iter",
            "extra": "iterations: 40179\ncpu: 17450.2426640783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14409.680471061394,
            "unit": "ns/iter",
            "extra": "iterations: 48656\ncpu: 14409.618546530779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 12577.523591182862,
            "unit": "ns/iter",
            "extra": "iterations: 55614\ncpu: 12577.602761894479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10280.557782083499,
            "unit": "ns/iter",
            "extra": "iterations: 68118\ncpu: 10280.52643941391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 65323.24740532528,
            "unit": "ns/iter",
            "extra": "iterations: 10695\ncpu: 65323.03880317841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 117968.17407469283,
            "unit": "ns/iter",
            "extra": "iterations: 5917\ncpu: 117965.77657596851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28066.963961793725,
            "unit": "ns/iter",
            "extra": "iterations: 24918\ncpu: 28066.325547796885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28479.50114108718,
            "unit": "ns/iter",
            "extra": "iterations: 24538\ncpu: 28478.72687260572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28023.74139035827,
            "unit": "ns/iter",
            "extra": "iterations: 24972\ncpu: 28023.4422553259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56731.41769897415,
            "unit": "ns/iter",
            "extra": "iterations: 12351\ncpu: 56729.81944781818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53606.32179771669,
            "unit": "ns/iter",
            "extra": "iterations: 13061\ncpu: 53606.132761656634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21500.422801902747,
            "unit": "ns/iter",
            "extra": "iterations: 32585\ncpu: 21500.181064907145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 105149.37045385622,
            "unit": "ns/iter",
            "extra": "iterations: 6654\ncpu: 105149.05320108224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 85177.13526334644,
            "unit": "ns/iter",
            "extra": "iterations: 8221\ncpu: 85176.70599683766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 85553.49303688791,
            "unit": "ns/iter",
            "extra": "iterations: 8186\ncpu: 85552.76081114115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84900.93976487812,
            "unit": "ns/iter",
            "extra": "iterations: 8251\ncpu: 84900.48478972298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 123967.25517974293,
            "unit": "ns/iter",
            "extra": "iterations: 5647\ncpu: 123966.53090136423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 506286.4238266968,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 506283.82671480195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 419281.6291192083,
            "unit": "ns/iter",
            "extra": "iterations: 1669\ncpu: 419274.29598562076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 419681.6548831642,
            "unit": "ns/iter",
            "extra": "iterations: 1669\ncpu: 419674.8352306797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 418800.3423099875,
            "unit": "ns/iter",
            "extra": "iterations: 1671\ncpu: 418794.13524835295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 260865.95085630773,
            "unit": "ns/iter",
            "extra": "iterations: 2686\ncpu: 260867.6470588263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 409857.10381233285,
            "unit": "ns/iter",
            "extra": "iterations: 1705\ncpu: 409844.8680351904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21133.986817041856,
            "unit": "ns/iter",
            "extra": "iterations: 33073\ncpu: 21133.640734133423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 105725.83494704083,
            "unit": "ns/iter",
            "extra": "iterations: 6610\ncpu: 105725.4765506802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86950.03214596013,
            "unit": "ns/iter",
            "extra": "iterations: 8057\ncpu: 86949.6835050257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86790.5763888993,
            "unit": "ns/iter",
            "extra": "iterations: 8064\ncpu: 86789.22371031815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86320.00616143699,
            "unit": "ns/iter",
            "extra": "iterations: 8115\ncpu: 86318.75539125026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 123916.79203540106,
            "unit": "ns/iter",
            "extra": "iterations: 5650\ncpu: 123914.69026548731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 507845.2047930375,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 507842.8467683394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 422605.1748041209,
            "unit": "ns/iter",
            "extra": "iterations: 1659\ncpu: 422607.65521398676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 419891.4052758226,
            "unit": "ns/iter",
            "extra": "iterations: 1668\ncpu: 419879.3165467598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 415692.6980344936,
            "unit": "ns/iter",
            "extra": "iterations: 1679\ncpu: 415682.6086956553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 264397.09777274315,
            "unit": "ns/iter",
            "extra": "iterations: 2649\ncpu: 264392.41223102785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 411955.0017699286,
            "unit": "ns/iter",
            "extra": "iterations: 1695\ncpu: 411947.5516224148 ns\nthreads: 1"
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
          "id": "a2fdd4a8b08935139af31fad37c86ca12b1dc63b",
          "message": "Add BMs; Setters Improve",
          "timestamp": "2023-12-12T23:14:54+03:00",
          "tree_id": "e41c2c9b1f31589e76e0363e3cfb6528364c4fdc",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2fdd4a8b08935139af31fad37c86ca12b1dc63b"
        },
        "date": 1702412525440,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7104.265827942914,
            "unit": "ns/iter",
            "extra": "iterations: 98165\ncpu: 7104.284622828911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53149.298699997875,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53147.53999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 97784.23346078249,
            "unit": "ns/iter",
            "extra": "iterations: 8631\ncpu: 97785.36670142508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 142573.60746737645,
            "unit": "ns/iter",
            "extra": "iterations: 6053\ncpu: 142572.5590616223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 188015.98871038872,
            "unit": "ns/iter",
            "extra": "iterations: 4606\ncpu: 188014.26400347377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 232061.24799357634,
            "unit": "ns/iter",
            "extra": "iterations: 3738\ncpu: 232058.45371856604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 277481.3733631456,
            "unit": "ns/iter",
            "extra": "iterations: 3131\ncpu: 277479.23985946976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 322122.1900000054,
            "unit": "ns/iter",
            "extra": "iterations: 2700\ncpu: 322115.22222222254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 365213.27616645826,
            "unit": "ns/iter",
            "extra": "iterations: 2379\ncpu: 365210.2143757882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5753.609782429647,
            "unit": "ns/iter",
            "extra": "iterations: 121340\ncpu: 5753.6195813416825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4666.850312419016,
            "unit": "ns/iter",
            "extra": "iterations: 149959\ncpu: 4666.869611027003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4664.038592228304,
            "unit": "ns/iter",
            "extra": "iterations: 149797\ncpu: 4663.911827339662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4722.315440111564,
            "unit": "ns/iter",
            "extra": "iterations: 149144\ncpu: 4722.325403636751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7101.354862905712,
            "unit": "ns/iter",
            "extra": "iterations: 98655\ncpu: 7101.454563884231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24998.971386422396,
            "unit": "ns/iter",
            "extra": "iterations: 32537\ncpu: 24997.83938285643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 123760.23530261814,
            "unit": "ns/iter",
            "extra": "iterations: 6923\ncpu: 123759.84399826643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 94097.33569216983,
            "unit": "ns/iter",
            "extra": "iterations: 9044\ncpu: 94096.6275984079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 94484.87609248621,
            "unit": "ns/iter",
            "extra": "iterations: 9039\ncpu: 94484.3677397943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 91285.29723650032,
            "unit": "ns/iter",
            "extra": "iterations: 9336\ncpu: 91282.84061696641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 202330.81364354497,
            "unit": "ns/iter",
            "extra": "iterations: 4427\ncpu: 202320.5782697088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1659426.3602151037,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1659381.5412186342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1318132.2958748466,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1318048.2219061183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1315629.6813031689,
            "unit": "ns/iter",
            "extra": "iterations: 706\ncpu: 1315592.0679886688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1311569.868458282,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 1311491.654879772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 715401.6656346866,
            "unit": "ns/iter",
            "extra": "iterations: 1292\ncpu: 715382.0433436527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1266575.6092896245,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 1266480.054644806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 31903.213255481216,
            "unit": "ns/iter",
            "extra": "iterations: 25861\ncpu: 31901.442326282726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 150675.2910330419,
            "unit": "ns/iter",
            "extra": "iterations: 5721\ncpu: 150670.75686068874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 118183.86543752888,
            "unit": "ns/iter",
            "extra": "iterations: 7268\ncpu: 118183.26912493109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 119242.1661807577,
            "unit": "ns/iter",
            "extra": "iterations: 7203\ncpu: 119242.62113008453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 117336.36089309638,
            "unit": "ns/iter",
            "extra": "iterations: 7390\ncpu: 117332.28687415466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 211841.53780844153,
            "unit": "ns/iter",
            "extra": "iterations: 3769\ncpu: 211836.05730963164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1687633.0054347108,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1687609.2391304364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1352577.5884059456,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1352569.855072467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1343542.787572235,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1343509.6820809236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1338492.616379336,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1338499.4252873585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 744215.7113071278,
            "unit": "ns/iter",
            "extra": "iterations: 1247\ncpu: 744209.542902966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1302435.3393854257,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1302424.7206703913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6075956.594771674,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6075811.764705918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2723559.851311957,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2723443.1486880374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 23921.315752664075,
            "unit": "ns/iter",
            "extra": "iterations: 34318\ncpu: 23920.047788332828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 119819.48756635861,
            "unit": "ns/iter",
            "extra": "iterations: 7158\ncpu: 119813.5233305394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 94649.00926425171,
            "unit": "ns/iter",
            "extra": "iterations: 9283\ncpu: 94644.5761068621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 94866.94373730027,
            "unit": "ns/iter",
            "extra": "iterations: 9349\ncpu: 94864.21007594453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 87400.86253203553,
            "unit": "ns/iter",
            "extra": "iterations: 9755\ncpu: 87397.07842132247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 184310.45739719752,
            "unit": "ns/iter",
            "extra": "iterations: 4718\ncpu: 184303.92115303065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1663758.787500009,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1663726.7857142922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1359681.7791841663,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1359665.9634317805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1360048.426760495,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1360051.4084507073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1308581.4789326442,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1308542.8370786528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 710737.7923954056,
            "unit": "ns/iter",
            "extra": "iterations: 1315\ncpu: 710738.403041825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1263911.5318860058,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 1263896.2008141112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2606.817264775399,
            "unit": "ns/iter",
            "extra": "iterations: 267064\ncpu: 2606.856783392737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17271.919124338034,
            "unit": "ns/iter",
            "extra": "iterations: 40655\ncpu: 17271.049071455072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13620.877188232887,
            "unit": "ns/iter",
            "extra": "iterations: 51697\ncpu: 13620.883223397776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 12546.474941621018,
            "unit": "ns/iter",
            "extra": "iterations: 55670\ncpu: 12546.308604275206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10103.51520048557,
            "unit": "ns/iter",
            "extra": "iterations: 69307\ncpu: 10103.432553710285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 62616.65553964766,
            "unit": "ns/iter",
            "extra": "iterations: 11174\ncpu: 62617.47807410044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 113694.65203965653,
            "unit": "ns/iter",
            "extra": "iterations: 6153\ncpu: 113688.59093125266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27826.629373978514,
            "unit": "ns/iter",
            "extra": "iterations: 25063\ncpu: 27826.999960100395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27899.786247057145,
            "unit": "ns/iter",
            "extra": "iterations: 25071\ncpu: 27899.864385146204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27664.13573177142,
            "unit": "ns/iter",
            "extra": "iterations: 25322\ncpu: 27664.5130716373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55161.56681592592,
            "unit": "ns/iter",
            "extra": "iterations: 12729\ncpu: 55159.6119098123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52292.564198545864,
            "unit": "ns/iter",
            "extra": "iterations: 13357\ncpu: 52292.49082877911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21142.106097671538,
            "unit": "ns/iter",
            "extra": "iterations: 33111\ncpu: 21141.97396635535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 102668.62305434387,
            "unit": "ns/iter",
            "extra": "iterations: 6810\ncpu: 102668.59030836943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 84541.19733656112,
            "unit": "ns/iter",
            "extra": "iterations: 8260\ncpu: 84542.26392251719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84040.85165165197,
            "unit": "ns/iter",
            "extra": "iterations: 8325\ncpu: 84037.4174174178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83567.36356033385,
            "unit": "ns/iter",
            "extra": "iterations: 8370\ncpu: 83566.85782556699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 122139.72600348853,
            "unit": "ns/iter",
            "extra": "iterations: 5730\ncpu: 122137.90575916234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 493509.40706716833,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 493506.501766788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 402424.2673950545,
            "unit": "ns/iter",
            "extra": "iterations: 1739\ncpu: 402408.51063829946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 403995.95320624136,
            "unit": "ns/iter",
            "extra": "iterations: 1731\ncpu: 404001.2709416449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 402553.56544200465,
            "unit": "ns/iter",
            "extra": "iterations: 1742\ncpu: 402558.5533869106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 257552.30407639747,
            "unit": "ns/iter",
            "extra": "iterations: 2723\ncpu: 257555.63716489152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 397913.1880681502,
            "unit": "ns/iter",
            "extra": "iterations: 1760\ncpu: 397907.9545454522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21582.22586031149,
            "unit": "ns/iter",
            "extra": "iterations: 32343\ncpu: 21582.49080171906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 105161.00165413557,
            "unit": "ns/iter",
            "extra": "iterations: 6650\ncpu: 105160.34586466265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86763.6323547599,
            "unit": "ns/iter",
            "extra": "iterations: 8073\ncpu: 86762.93818902466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86683.85883806141,
            "unit": "ns/iter",
            "extra": "iterations: 8090\ncpu: 86680.96415327616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 85989.67981808909,
            "unit": "ns/iter",
            "extra": "iterations: 8136\ncpu: 85989.6509341199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 124807.28098290294,
            "unit": "ns/iter",
            "extra": "iterations: 5616\ncpu: 124807.40740740596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 492342.478656404,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 492336.17914625787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 403632.7223502274,
            "unit": "ns/iter",
            "extra": "iterations: 1736\ncpu: 403620.6221198143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 404566.2623045499,
            "unit": "ns/iter",
            "extra": "iterations: 1727\ncpu: 404565.95251882006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 399850.3375214049,
            "unit": "ns/iter",
            "extra": "iterations: 1751\ncpu: 399843.7464306122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 257099.87041117996,
            "unit": "ns/iter",
            "extra": "iterations: 2724\ncpu: 257103.30396476042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 396325.6949828946,
            "unit": "ns/iter",
            "extra": "iterations: 1754\ncpu: 396321.8358038779 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702418346017,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6900.303076391294,
            "unit": "ns/iter",
            "extra": "iterations: 101255\ncpu: 6900.029628166511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50179.625800001304,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50175.66999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 93453.52391210503,
            "unit": "ns/iter",
            "extra": "iterations: 9284\ncpu: 93446.98405859544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 134809.16635426614,
            "unit": "ns/iter",
            "extra": "iterations: 6402\ncpu: 134803.32708528583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 176976.24621986132,
            "unit": "ns/iter",
            "extra": "iterations: 4894\ncpu: 176962.8524724152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 220299.1346202594,
            "unit": "ns/iter",
            "extra": "iterations: 3937\ncpu: 220290.80518161025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 263426.48280023,
            "unit": "ns/iter",
            "extra": "iterations: 3314\ncpu: 263411.7984308992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 305400.6636300036,
            "unit": "ns/iter",
            "extra": "iterations: 2854\ncpu: 305389.69866853533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 347392.6355661724,
            "unit": "ns/iter",
            "extra": "iterations: 2508\ncpu: 347377.9505582135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5699.264506889217,
            "unit": "ns/iter",
            "extra": "iterations: 121494\ncpu: 5698.929988312182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4675.372318518955,
            "unit": "ns/iter",
            "extra": "iterations: 150057\ncpu: 4675.033487274836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4635.651452779602,
            "unit": "ns/iter",
            "extra": "iterations: 150126\ncpu: 4635.418248671115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4699.178432623011,
            "unit": "ns/iter",
            "extra": "iterations: 148975\ncpu: 4698.881691558977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7146.777071233893,
            "unit": "ns/iter",
            "extra": "iterations: 97973\ncpu: 7146.623049207437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25002.690858145645,
            "unit": "ns/iter",
            "extra": "iterations: 32477\ncpu: 25002.749638205485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 132098.1063046483,
            "unit": "ns/iter",
            "extra": "iterations: 6519\ncpu: 132094.92253413115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 101428.8930260063,
            "unit": "ns/iter",
            "extra": "iterations: 8460\ncpu: 101427.60047281327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 102804.9913751785,
            "unit": "ns/iter",
            "extra": "iterations: 8348\ncpu: 102806.02539530437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 95771.35848209551,
            "unit": "ns/iter",
            "extra": "iterations: 8907\ncpu: 95772.42618165466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 196318.10165325805,
            "unit": "ns/iter",
            "extra": "iterations: 4476\ncpu: 196316.68900804286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1661552.9892666035,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1661515.7423971372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1305309.5161290525,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1305288.3590462822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1298253.741620098,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1298239.804469273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1292809.2347222117,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1292785.9722222213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 722257.9049103529,
            "unit": "ns/iter",
            "extra": "iterations: 1283\ncpu: 722252.1434138736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1255722.9431664753,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 1255727.0635994587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 31946.14881252071,
            "unit": "ns/iter",
            "extra": "iterations: 25811\ncpu: 31944.965324861456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 162125.61358094664,
            "unit": "ns/iter",
            "extra": "iterations: 5331\ncpu: 162126.54286250225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125108.7673742379,
            "unit": "ns/iter",
            "extra": "iterations: 6878\ncpu: 125107.63303285818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 125732.75179591778,
            "unit": "ns/iter",
            "extra": "iterations: 6821\ncpu: 125734.33514147482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 119842.8809788686,
            "unit": "ns/iter",
            "extra": "iterations: 7192\ncpu: 119841.76863181271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 206976.94079732397,
            "unit": "ns/iter",
            "extra": "iterations: 4189\ncpu: 206962.28216758103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1687691.9782213813,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1687575.1361161484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1335738.8292682893,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1335643.9024390264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1337657.9279539,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1337565.2737752178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1327101.7169275088,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1327015.6472261772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 754822.3698297093,
            "unit": "ns/iter",
            "extra": "iterations: 1233\ncpu: 754764.8824006491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1295040.5416666577,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1292625.1388888983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6166536.350993461,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 6166366.225165569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2863876.69018408,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2863848.7730061337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 23980.801573145476,
            "unit": "ns/iter",
            "extra": "iterations: 34199\ncpu: 23981.0637737946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 129154.84964877673,
            "unit": "ns/iter",
            "extra": "iterations: 6691\ncpu: 129154.23703482274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 99208.2055945697,
            "unit": "ns/iter",
            "extra": "iterations: 8687\ncpu: 99206.88384943026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 98360.06828876937,
            "unit": "ns/iter",
            "extra": "iterations: 8713\ncpu: 98360.41547113542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 93421.65895953432,
            "unit": "ns/iter",
            "extra": "iterations: 9169\ncpu: 93421.82353582713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 178910.26839825904,
            "unit": "ns/iter",
            "extra": "iterations: 4851\ncpu: 178912.24489795955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1667083.7871198624,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1667078.890876566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1300029.1655076505,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1300013.073713485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1291100.252077601,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1291088.5041551262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1281810.5439560218,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1281804.1208791137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 716028.007698261,
            "unit": "ns/iter",
            "extra": "iterations: 1299\ncpu: 716030.100076979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1250117.6510066967,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 1250103.8926174506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2675.3667689985987,
            "unit": "ns/iter",
            "extra": "iterations: 262544\ncpu: 2675.394600524078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17420.790588820844,
            "unit": "ns/iter",
            "extra": "iterations: 40165\ncpu: 17420.80169301643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14316.141147874732,
            "unit": "ns/iter",
            "extra": "iterations: 53072\ncpu: 14316.15352728372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13677.480945866802,
            "unit": "ns/iter",
            "extra": "iterations: 51170\ncpu: 13677.498534297452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10253.386750197657,
            "unit": "ns/iter",
            "extra": "iterations: 68318\ncpu: 10253.258292104601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63275.008577876295,
            "unit": "ns/iter",
            "extra": "iterations: 11075\ncpu: 63275.702031602465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 113520.54340784476,
            "unit": "ns/iter",
            "extra": "iterations: 6174\ncpu: 113519.51733074232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27581.317835876936,
            "unit": "ns/iter",
            "extra": "iterations: 25359\ncpu: 27581.580503963236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27706.377502572806,
            "unit": "ns/iter",
            "extra": "iterations: 25274\ncpu: 27706.041782068594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27571.047111742202,
            "unit": "ns/iter",
            "extra": "iterations: 25344\ncpu: 27571.401515151458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 53128.153164076284,
            "unit": "ns/iter",
            "extra": "iterations: 13195\ncpu: 53127.53315649887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52080.65977233649,
            "unit": "ns/iter",
            "extra": "iterations: 13441\ncpu: 52079.919648835974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20356.072083079136,
            "unit": "ns/iter",
            "extra": "iterations: 34377\ncpu: 20356.13637024762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 102269.59372262903,
            "unit": "ns/iter",
            "extra": "iterations: 6850\ncpu: 102268.17518248131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83100.10688470666,
            "unit": "ns/iter",
            "extra": "iterations: 8439\ncpu: 83098.24623770565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 83169.83210200454,
            "unit": "ns/iter",
            "extra": "iterations: 8392\ncpu: 83169.75691134435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82383.89478025412,
            "unit": "ns/iter",
            "extra": "iterations: 8487\ncpu: 82383.78696830462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 122769.50699486237,
            "unit": "ns/iter",
            "extra": "iterations: 5647\ncpu: 122769.80697715728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 486897.20931849757,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 486897.56606397976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 399502.8980057214,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 399492.6495726549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 403672.53222092235,
            "unit": "ns/iter",
            "extra": "iterations: 1738\ncpu: 403677.1001150778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 399543.2247575678,
            "unit": "ns/iter",
            "extra": "iterations: 1753\ncpu: 399538.33428408427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 264166.3635682201,
            "unit": "ns/iter",
            "extra": "iterations: 2668\ncpu: 264168.81559220597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 395441.76341049426,
            "unit": "ns/iter",
            "extra": "iterations: 1771\ncpu: 395436.36363636795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20986.590696700234,
            "unit": "ns/iter",
            "extra": "iterations: 33386\ncpu: 20986.62613071349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 101335.29018245106,
            "unit": "ns/iter",
            "extra": "iterations: 6906\ncpu: 101335.17231393044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 84411.10907335911,
            "unit": "ns/iter",
            "extra": "iterations: 8288\ncpu: 84411.92084942119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 84599.54546552374,
            "unit": "ns/iter",
            "extra": "iterations: 8281\ncpu: 84600.50718512175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 83478.3377056957,
            "unit": "ns/iter",
            "extra": "iterations: 8386\ncpu: 83476.72310994622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 123490.03351561034,
            "unit": "ns/iter",
            "extra": "iterations: 5669\ncpu: 123490.29811254036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 483410.33264174237,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 483400.6224066306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 396554.9420783572,
            "unit": "ns/iter",
            "extra": "iterations: 1761\ncpu: 396558.8869960273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 396056.8521246601,
            "unit": "ns/iter",
            "extra": "iterations: 1765\ncpu: 396060.90651557606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 393399.220662548,
            "unit": "ns/iter",
            "extra": "iterations: 1781\ncpu: 393396.18192027224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 256128.5797950245,
            "unit": "ns/iter",
            "extra": "iterations: 2732\ncpu: 256131.77159590178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 390843.38095238176,
            "unit": "ns/iter",
            "extra": "iterations: 1785\ncpu: 390842.2408963626 ns\nthreads: 1"
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
          "id": "93a417e35b7cddb2aff5c69874155ac65b18afac",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:35:38+03:00",
          "tree_id": "ac2b7d38c5e0b561e002516e4bf347cf5169f70d",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/93a417e35b7cddb2aff5c69874155ac65b18afac"
        },
        "date": 1702420965545,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6886.233790351235,
            "unit": "ns/iter",
            "extra": "iterations: 101236\ncpu: 6886.185744201667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50428.38489999894,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50426.89999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 93438.89521739025,
            "unit": "ns/iter",
            "extra": "iterations: 9200\ncpu: 93433.54347826088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 135951.72952135906,
            "unit": "ns/iter",
            "extra": "iterations: 6226\ncpu: 135942.515258593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 178255.84932070618,
            "unit": "ns/iter",
            "extra": "iterations: 4858\ncpu: 178247.6945244957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 221151.12960122793,
            "unit": "ns/iter",
            "extra": "iterations: 3912\ncpu: 221135.9406952965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 265268.13946407515,
            "unit": "ns/iter",
            "extra": "iterations: 3284\ncpu: 265258.61753958574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 307269.186046496,
            "unit": "ns/iter",
            "extra": "iterations: 2838\ncpu: 307239.3234672304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 348899.59508459223,
            "unit": "ns/iter",
            "extra": "iterations: 2482\ncpu: 348873.8517324736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5728.800266311743,
            "unit": "ns/iter",
            "extra": "iterations: 122413\ncpu: 5728.417733410664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4638.192816496753,
            "unit": "ns/iter",
            "extra": "iterations: 149899\ncpu: 4638.145017645209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4652.678574958524,
            "unit": "ns/iter",
            "extra": "iterations: 151771\ncpu: 4652.483017177189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4694.2011016336955,
            "unit": "ns/iter",
            "extra": "iterations: 149596\ncpu: 4693.852108345143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7180.02328353937,
            "unit": "ns/iter",
            "extra": "iterations: 98138\ncpu: 7179.700014265641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25229.94842743838,
            "unit": "ns/iter",
            "extra": "iterations: 32304\ncpu: 25228.454680534927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 133548.93789784182,
            "unit": "ns/iter",
            "extra": "iterations: 6441\ncpu: 133544.86880919104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104545.1479765942,
            "unit": "ns/iter",
            "extra": "iterations: 8204\ncpu: 104542.94246708907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 103786.9329260859,
            "unit": "ns/iter",
            "extra": "iterations: 8185\ncpu: 103786.25534514376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 98961.4417419513,
            "unit": "ns/iter",
            "extra": "iterations: 8634\ncpu: 98959.76372480877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 203531.58185053867,
            "unit": "ns/iter",
            "extra": "iterations: 4496\ncpu: 203529.5818505336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1669467.7163374715,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1669345.0628366307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1308256.8225351847,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1308190.563380282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1308267.3070422336,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1308167.887323944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1309542.0602240653,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 1309503.641456584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 712386.3294931214,
            "unit": "ns/iter",
            "extra": "iterations: 1302\ncpu: 712331.874039939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1259315.3183673099,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1259239.1836734698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32380.06299119789,
            "unit": "ns/iter",
            "extra": "iterations: 25448\ncpu: 32377.365608299344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 161080.57353489342,
            "unit": "ns/iter",
            "extra": "iterations: 5358\ncpu: 161075.51325121315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 125215.51984877033,
            "unit": "ns/iter",
            "extra": "iterations: 6877\ncpu: 125203.99883670203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 126417.95219941443,
            "unit": "ns/iter",
            "extra": "iterations: 6820\ncpu: 126413.8856304985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 123413.76467212159,
            "unit": "ns/iter",
            "extra": "iterations: 6969\ncpu: 123405.32357583601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 209015.4135102534,
            "unit": "ns/iter",
            "extra": "iterations: 4145\ncpu: 209007.11700844407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1693647.4054546123,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1693511.6363636383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1344476.6681158748,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1344421.3043478276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1340543.277056307,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1340462.0490620483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1335373.2435529926,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1335316.6189111767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 745529.5036203109,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 745433.2260659665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1287883.9861303777,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 1287800.6934812763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6102899.013071796,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6102715.686274498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2708617.3594202064,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2708389.2753623216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24249.022272242455,
            "unit": "ns/iter",
            "extra": "iterations: 33764\ncpu: 24248.012676223036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 128904.36723079938,
            "unit": "ns/iter",
            "extra": "iterations: 6677\ncpu: 128899.55069642075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 100500.33139060541,
            "unit": "ns/iter",
            "extra": "iterations: 8579\ncpu: 100496.7828418235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 102567.38380281389,
            "unit": "ns/iter",
            "extra": "iterations: 8520\ncpu: 102566.15023474178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 96781.74886979768,
            "unit": "ns/iter",
            "extra": "iterations: 8848\ncpu: 96776.95524412284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 181965.55625657566,
            "unit": "ns/iter",
            "extra": "iterations: 4755\ncpu: 181960.29442691916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1649881.037168139,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1649829.5575221248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1295940.4527777785,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1295915.4166666684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1291183.4674965565,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1291079.3914246268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1286506.9696969788,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1286442.0110192813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 706815.7727272939,
            "unit": "ns/iter",
            "extra": "iterations: 1320\ncpu: 706787.0454545475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1248611.1691275055,
            "unit": "ns/iter",
            "extra": "iterations: 745\ncpu: 1248555.4362416088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2661.7522736589563,
            "unit": "ns/iter",
            "extra": "iterations: 263452\ncpu: 2661.591105780166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17184.488017482476,
            "unit": "ns/iter",
            "extra": "iterations: 40726\ncpu: 17183.90954181603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14145.206023339992,
            "unit": "ns/iter",
            "extra": "iterations: 49441\ncpu: 14144.531866264797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14150.539090177308,
            "unit": "ns/iter",
            "extra": "iterations: 49680\ncpu: 14150.213365539568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10076.85338991689,
            "unit": "ns/iter",
            "extra": "iterations: 69279\ncpu: 10076.629281600439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63371.378029961474,
            "unit": "ns/iter",
            "extra": "iterations: 11015\ncpu: 63370.45846572866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 107834.89633958606,
            "unit": "ns/iter",
            "extra": "iterations: 6502\ncpu: 107832.95908951061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27464.03514276627,
            "unit": "ns/iter",
            "extra": "iterations: 25496\ncpu: 27462.05287103862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27536.264950883997,
            "unit": "ns/iter",
            "extra": "iterations: 25450\ncpu: 27535.414538310455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27388.804718677875,
            "unit": "ns/iter",
            "extra": "iterations: 25558\ncpu: 27387.436419125108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55128.06072778921,
            "unit": "ns/iter",
            "extra": "iterations: 12696\ncpu: 55127.46534341532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51936.56352322607,
            "unit": "ns/iter",
            "extra": "iterations: 13499\ncpu: 51932.83946959043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20228.00562868058,
            "unit": "ns/iter",
            "extra": "iterations: 34644\ncpu: 20228.10299041685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 100796.9189111313,
            "unit": "ns/iter",
            "extra": "iterations: 6943\ncpu: 100793.7779058043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83096.6595896125,
            "unit": "ns/iter",
            "extra": "iterations: 8431\ncpu: 83092.12430316645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 83590.98611277297,
            "unit": "ns/iter",
            "extra": "iterations: 8353\ncpu: 83587.08248533441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82725.32655473772,
            "unit": "ns/iter",
            "extra": "iterations: 8458\ncpu: 82722.99598013586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 121041.63168831024,
            "unit": "ns/iter",
            "extra": "iterations: 5775\ncpu: 121042.33766233866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 487573.21478382475,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 487546.931659697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 403004.3368116044,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 402993.68115942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 401872.2385057308,
            "unit": "ns/iter",
            "extra": "iterations: 1740\ncpu: 401847.0114942584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 395518.08573039545,
            "unit": "ns/iter",
            "extra": "iterations: 1773\ncpu: 395508.4602368828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 253311.93743219625,
            "unit": "ns/iter",
            "extra": "iterations: 2765\ncpu: 253308.1012658232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 392996.0214084621,
            "unit": "ns/iter",
            "extra": "iterations: 1775\ncpu: 392986.53521126666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21118.016004581797,
            "unit": "ns/iter",
            "extra": "iterations: 33178\ncpu: 21117.62010971118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 103438.94388659095,
            "unit": "ns/iter",
            "extra": "iterations: 6772\ncpu: 103431.98464264657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 85547.3834797452,
            "unit": "ns/iter",
            "extra": "iterations: 8196\ncpu: 85543.42362127815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 85875.42524224118,
            "unit": "ns/iter",
            "extra": "iterations: 8153\ncpu: 85875.89844229193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84863.17514261909,
            "unit": "ns/iter",
            "extra": "iterations: 8239\ncpu: 84861.17247238682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 122695.13437280717,
            "unit": "ns/iter",
            "extra": "iterations: 5708\ncpu: 122693.16748423192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 485222.856944429,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 485202.5000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 396521.2903225958,
            "unit": "ns/iter",
            "extra": "iterations: 1767\ncpu: 396523.1465761176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 396998.29875281645,
            "unit": "ns/iter",
            "extra": "iterations: 1764\ncpu: 396979.875283445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 397780.929218576,
            "unit": "ns/iter",
            "extra": "iterations: 1766\ncpu: 397773.2163080473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 254555.70327271332,
            "unit": "ns/iter",
            "extra": "iterations: 2750\ncpu: 254541.12727272685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 391625.84429452015,
            "unit": "ns/iter",
            "extra": "iterations: 1779\ncpu: 391603.54131534026 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421412429,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6726.2408446629415,
            "unit": "ns/iter",
            "extra": "iterations: 103710\ncpu: 6726.037990550573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56962.5609739136,
            "unit": "ns/iter",
            "extra": "iterations: 14375\ncpu: 56961.113043478275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 90031.90056579774,
            "unit": "ns/iter",
            "extra": "iterations: 9544\ncpu: 90031.7057837385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 130588.82995461061,
            "unit": "ns/iter",
            "extra": "iterations: 6610\ncpu: 130589.83358547658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 172179.13583930055,
            "unit": "ns/iter",
            "extra": "iterations: 5028\ncpu: 172176.4120922832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 214235.29483056706,
            "unit": "ns/iter",
            "extra": "iterations: 4043\ncpu: 214232.64902300268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 256271.77020276227,
            "unit": "ns/iter",
            "extra": "iterations: 3403\ncpu: 256261.9453423451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 295374.5944387874,
            "unit": "ns/iter",
            "extra": "iterations: 2949\ncpu: 295373.31298745336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 335783.52770245285,
            "unit": "ns/iter",
            "extra": "iterations: 2581\ncpu: 335775.7845796199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5554.691951749959,
            "unit": "ns/iter",
            "extra": "iterations: 126425\ncpu: 5554.573067035799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4591.837953526008,
            "unit": "ns/iter",
            "extra": "iterations: 152086\ncpu: 4591.7138987151975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4573.176885665435,
            "unit": "ns/iter",
            "extra": "iterations: 152771\ncpu: 4573.066223301535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4587.23016876147,
            "unit": "ns/iter",
            "extra": "iterations: 152701\ncpu: 4587.259415458962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 6999.084392729289,
            "unit": "ns/iter",
            "extra": "iterations: 100293\ncpu: 6998.9710149262755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25012.946258442145,
            "unit": "ns/iter",
            "extra": "iterations: 32433\ncpu: 25012.237535843113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 125605.5542539116,
            "unit": "ns/iter",
            "extra": "iterations: 6829\ncpu: 125603.33870259191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 97441.9236469822,
            "unit": "ns/iter",
            "extra": "iterations: 8906\ncpu: 97430.5861217157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 95173.415881111,
            "unit": "ns/iter",
            "extra": "iterations: 9017\ncpu: 95170.03437950563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 91712.80855419011,
            "unit": "ns/iter",
            "extra": "iterations: 9282\ncpu: 91706.97048049985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 193759.03541169217,
            "unit": "ns/iter",
            "extra": "iterations: 4603\ncpu: 193750.51053660616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1607130.5674740463,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1607029.0657439462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1264637.6867305767,
            "unit": "ns/iter",
            "extra": "iterations: 731\ncpu: 1264601.778385774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1263529.8394557636,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1263456.734693876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1260807.9112022044,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 1260721.174863389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 704974.3107387637,
            "unit": "ns/iter",
            "extra": "iterations: 1313\ncpu: 704962.4523990846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1222218.4605263171,
            "unit": "ns/iter",
            "extra": "iterations: 760\ncpu: 1222157.3684210526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 31821.8407596503,
            "unit": "ns/iter",
            "extra": "iterations: 25854\ncpu: 31819.98143420735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 154142.7355666432,
            "unit": "ns/iter",
            "extra": "iterations: 5612\ncpu: 154135.4062722734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 118880.72480620607,
            "unit": "ns/iter",
            "extra": "iterations: 7224\ncpu: 118875.23532668863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 119026.10255324525,
            "unit": "ns/iter",
            "extra": "iterations: 7089\ncpu: 119022.09056284389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 114786.38813151194,
            "unit": "ns/iter",
            "extra": "iterations: 7482\ncpu: 114781.51563753014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 203048.4995287505,
            "unit": "ns/iter",
            "extra": "iterations: 4244\ncpu: 203038.43072572927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1635700.4684210639,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1635610.5263157948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1301579.0181563492,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1301532.4022346393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1297104.5869262866,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1297051.3212795553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1286733.43370167,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 1286660.2209944755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 731680.5552050268,
            "unit": "ns/iter",
            "extra": "iterations: 1268\ncpu: 731652.050473183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1250178.4433962225,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 1250115.6334231747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6000710.535483684,
            "unit": "ns/iter",
            "extra": "iterations: 155\ncpu: 6000468.3870967915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2694874.040462362,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2694681.7919074986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 23781.9452424488,
            "unit": "ns/iter",
            "extra": "iterations: 34461\ncpu: 23781.44279040071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 121526.40098800034,
            "unit": "ns/iter",
            "extra": "iterations: 7085\ncpu: 121519.44954128393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 93500.46034858505,
            "unit": "ns/iter",
            "extra": "iterations: 9180\ncpu: 93496.12200435712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 93727.66539092582,
            "unit": "ns/iter",
            "extra": "iterations: 9145\ncpu: 93721.11536358652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 89341.34906054114,
            "unit": "ns/iter",
            "extra": "iterations: 9580\ncpu: 89339.64509394548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 176266.6081574702,
            "unit": "ns/iter",
            "extra": "iterations: 4928\ncpu: 176251.8668831175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1613394.417962014,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1613319.3436960238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1257137.7503373958,
            "unit": "ns/iter",
            "extra": "iterations: 741\ncpu: 1257032.6585695022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1260329.598105555,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 1260308.3897158294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1254502.4285714747,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 1254419.8113207545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 700417.0210210235,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 700400.5255255233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1219935.05235604,
            "unit": "ns/iter",
            "extra": "iterations: 764\ncpu: 1219858.9005235564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2600.8654312913827,
            "unit": "ns/iter",
            "extra": "iterations: 270687\ncpu: 2600.797969610676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17036.4736481689,
            "unit": "ns/iter",
            "extra": "iterations: 40889\ncpu: 17035.207513022986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13938.235171738133,
            "unit": "ns/iter",
            "extra": "iterations: 49989\ncpu: 13937.910340274915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14009.065347409663,
            "unit": "ns/iter",
            "extra": "iterations: 49826\ncpu: 14008.158391201314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10011.719223919928,
            "unit": "ns/iter",
            "extra": "iterations: 69632\ncpu: 10011.790556066206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 61892.83147656732,
            "unit": "ns/iter",
            "extra": "iterations: 11310\ncpu: 61890.07073386389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 110149.80742021074,
            "unit": "ns/iter",
            "extra": "iterations: 6361\ncpu: 110143.0435466121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27175.08797801329,
            "unit": "ns/iter",
            "extra": "iterations: 25836\ncpu: 27173.695618516733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27017.49037608333,
            "unit": "ns/iter",
            "extra": "iterations: 25925\ncpu: 27015.405978785002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 26747.645246178294,
            "unit": "ns/iter",
            "extra": "iterations: 26221\ncpu: 26747.183555165924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 54231.22926980256,
            "unit": "ns/iter",
            "extra": "iterations: 12928\ncpu: 54227.38242574254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 50693.960826824994,
            "unit": "ns/iter",
            "extra": "iterations: 13836\ncpu: 50694.3914426137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 19822.586853265468,
            "unit": "ns/iter",
            "extra": "iterations: 35370\ncpu: 19821.916878710676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 99236.92968750426,
            "unit": "ns/iter",
            "extra": "iterations: 7040\ncpu: 99234.31818181783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 81162.66584680093,
            "unit": "ns/iter",
            "extra": "iterations: 8538\ncpu: 81160.54111033055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 82739.93161183529,
            "unit": "ns/iter",
            "extra": "iterations: 8481\ncpu: 82733.47482608253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 81050.33699930503,
            "unit": "ns/iter",
            "extra": "iterations: 8638\ncpu: 81051.11136837225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 119423.53725489839,
            "unit": "ns/iter",
            "extra": "iterations: 5865\ncpu: 119421.02301790322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 474901.91360543115,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 474877.0748299321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 389640.9822024436,
            "unit": "ns/iter",
            "extra": "iterations: 1798\ncpu: 389612.12458286947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 388170.83997784776,
            "unit": "ns/iter",
            "extra": "iterations: 1806\ncpu: 388156.31229235494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 387852.74944566906,
            "unit": "ns/iter",
            "extra": "iterations: 1804\ncpu: 387826.88470066054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 248099.82528408512,
            "unit": "ns/iter",
            "extra": "iterations: 2816\ncpu: 248091.19318181474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 382052.192665572,
            "unit": "ns/iter",
            "extra": "iterations: 1827\ncpu: 382035.1395730675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20649.374403814858,
            "unit": "ns/iter",
            "extra": "iterations: 33966\ncpu: 20648.71636342241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 101277.1083236651,
            "unit": "ns/iter",
            "extra": "iterations: 6896\ncpu: 101267.41589327085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 83558.5359952333,
            "unit": "ns/iter",
            "extra": "iterations: 8390\ncpu: 83553.94517282481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 83380.98703307485,
            "unit": "ns/iter",
            "extra": "iterations: 8406\ncpu: 83377.63502260392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 82659.3108857176,
            "unit": "ns/iter",
            "extra": "iterations: 8479\ncpu: 82656.8345323732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 120076.87480679652,
            "unit": "ns/iter",
            "extra": "iterations: 5823\ncpu: 120072.98643311008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 473160.8417849843,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 473156.59229209484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 389039.34128746204,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 389018.81243063125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 390076.06725958997,
            "unit": "ns/iter",
            "extra": "iterations: 1799\ncpu: 390065.036131187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 386894.4713024153,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 386861.6997792503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 250349.31736955082,
            "unit": "ns/iter",
            "extra": "iterations: 2798\ncpu: 250337.09792709415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 383223.1501650354,
            "unit": "ns/iter",
            "extra": "iterations: 1818\ncpu: 383189.05390538863 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702422455452,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7158.506668029794,
            "unit": "ns/iter",
            "extra": "iterations: 97780\ncpu: 7158.554919206383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51390.96049999807,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51392.83999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95529.18563805951,
            "unit": "ns/iter",
            "extra": "iterations: 8996\ncpu: 95532.53668297024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 139920.58200972353,
            "unit": "ns/iter",
            "extra": "iterations: 6170\ncpu: 139921.05348460298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 183830.26140461635,
            "unit": "ns/iter",
            "extra": "iterations: 4713\ncpu: 183830.87205601536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 227772.66167586402,
            "unit": "ns/iter",
            "extra": "iterations: 3807\ncpu: 227773.9690044654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 271210.1280526011,
            "unit": "ns/iter",
            "extra": "iterations: 3194\ncpu: 271211.23982467124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 315306.73495286,
            "unit": "ns/iter",
            "extra": "iterations: 2758\ncpu: 315306.01885424234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 358480.46867270797,
            "unit": "ns/iter",
            "extra": "iterations: 2426\ncpu: 358481.4921681782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5640.235276192091,
            "unit": "ns/iter",
            "extra": "iterations: 124696\ncpu: 5640.1985629049905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4627.5492484725,
            "unit": "ns/iter",
            "extra": "iterations: 151558\ncpu: 4627.621768563852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4632.495423227222,
            "unit": "ns/iter",
            "extra": "iterations: 151089\ncpu: 4632.5079919782365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4644.394506998506,
            "unit": "ns/iter",
            "extra": "iterations: 151247\ncpu: 4644.418071102233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7146.368798535176,
            "unit": "ns/iter",
            "extra": "iterations: 97739\ncpu: 7146.477864516725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24921.029792190588,
            "unit": "ns/iter",
            "extra": "iterations: 32626\ncpu: 24921.17636241032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 125113.05403036914,
            "unit": "ns/iter",
            "extra": "iterations: 6848\ncpu: 125112.36857476668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 97124.56734693435,
            "unit": "ns/iter",
            "extra": "iterations: 8820\ncpu: 97123.43537414944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 95551.69928427687,
            "unit": "ns/iter",
            "extra": "iterations: 8942\ncpu: 95553.38850369038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 92250.33120051696,
            "unit": "ns/iter",
            "extra": "iterations: 9221\ncpu: 92251.0031449951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 194266.3641908092,
            "unit": "ns/iter",
            "extra": "iterations: 4591\ncpu: 194265.12742321947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1643283.2938052488,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1643266.194690261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1290032.259052913,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1290039.4150417792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1295020.8844011002,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1294985.097493035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1286031.0940525993,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1285981.7427385906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 718749.8595810767,
            "unit": "ns/iter",
            "extra": "iterations: 1289\ncpu: 718738.9449185403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1249942.1805929795,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 1249914.2857142827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32455.173689101808,
            "unit": "ns/iter",
            "extra": "iterations: 25822\ncpu: 32454.209588722864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 152925.33368851343,
            "unit": "ns/iter",
            "extra": "iterations: 5631\ncpu: 152925.59048126446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 118959.52013283194,
            "unit": "ns/iter",
            "extra": "iterations: 7227\ncpu: 118957.39587657386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 120964.10028129196,
            "unit": "ns/iter",
            "extra": "iterations: 7110\ncpu: 120965.78059071742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 117573.31320495566,
            "unit": "ns/iter",
            "extra": "iterations: 7270\ncpu: 117573.10866574974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 204282.21052631547,
            "unit": "ns/iter",
            "extra": "iterations: 4237\ncpu: 204282.44040594698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1671607.3859964616,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1671584.0215439799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1336700.8350071595,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1336718.794835011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1323777.7246790263,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1323765.1925820243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1312746.4338028186,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1312730.8450704254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 753057.8204509128,
            "unit": "ns/iter",
            "extra": "iterations: 1242\ncpu: 753035.1046698857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1277181.3232461682,
            "unit": "ns/iter",
            "extra": "iterations: 727\ncpu: 1277183.081155432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6131844.868421192,
            "unit": "ns/iter",
            "extra": "iterations: 152\ncpu: 6131816.447368406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2805114.930930978,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2805084.3843843793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 23889.74416843704,
            "unit": "ns/iter",
            "extra": "iterations: 34339\ncpu: 23889.586184804582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 121626.65968218453,
            "unit": "ns/iter",
            "extra": "iterations: 7111\ncpu: 121626.36759949404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 94285.9637163256,
            "unit": "ns/iter",
            "extra": "iterations: 9095\ncpu: 94286.31115997813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 94305.442781688,
            "unit": "ns/iter",
            "extra": "iterations: 9088\ncpu: 94305.38072183075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 89784.28539962022,
            "unit": "ns/iter",
            "extra": "iterations: 9534\ncpu: 89781.17264526954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 176693.17869485565,
            "unit": "ns/iter",
            "extra": "iterations: 4919\ncpu: 176690.32323642977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1648163.5802469496,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1648111.9929453298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1297097.3005540592,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1297089.7506925145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1287311.0812672314,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1287298.0716253438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1280804.8189300306,
            "unit": "ns/iter",
            "extra": "iterations: 729\ncpu: 1280820.3017832632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 713725.8989280344,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 713714.1653905018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1246875.0682731308,
            "unit": "ns/iter",
            "extra": "iterations: 747\ncpu: 1246861.4457831283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2647.7446460277974,
            "unit": "ns/iter",
            "extra": "iterations: 266391\ncpu: 2647.6791633350867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17244.436341222958,
            "unit": "ns/iter",
            "extra": "iterations: 40560\ncpu: 17244.181459566087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13064.224544690605,
            "unit": "ns/iter",
            "extra": "iterations: 53535\ncpu: 13063.851685812977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13548.885823725464,
            "unit": "ns/iter",
            "extra": "iterations: 51692\ncpu: 13548.963089065988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10107.737689326035,
            "unit": "ns/iter",
            "extra": "iterations: 69391\ncpu: 10107.404418440423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 61965.363740627276,
            "unit": "ns/iter",
            "extra": "iterations: 11335\ncpu: 61964.861049845655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 111969.07427478695,
            "unit": "ns/iter",
            "extra": "iterations: 6274\ncpu: 111967.9630219952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27311.759419839196,
            "unit": "ns/iter",
            "extra": "iterations: 25717\ncpu: 27311.467122914702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27228.094163060672,
            "unit": "ns/iter",
            "extra": "iterations: 25647\ncpu: 27227.812219752715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27288.49254137157,
            "unit": "ns/iter",
            "extra": "iterations: 25742\ncpu: 27287.864190816646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 52688.50391920427,
            "unit": "ns/iter",
            "extra": "iterations: 13268\ncpu: 52686.169731685084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 46006.168299902085,
            "unit": "ns/iter",
            "extra": "iterations: 15205\ncpu: 46004.70240052592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20724.949708434175,
            "unit": "ns/iter",
            "extra": "iterations: 33783\ncpu: 20724.51232868611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101803.26299694377,
            "unit": "ns/iter",
            "extra": "iterations: 6867\ncpu: 101802.11154798335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83344.79983269579,
            "unit": "ns/iter",
            "extra": "iterations: 8368\ncpu: 83346.73757170179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 82941.8403181739,
            "unit": "ns/iter",
            "extra": "iterations: 8423\ncpu: 82942.01590882086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82432.58379460505,
            "unit": "ns/iter",
            "extra": "iterations: 8491\ncpu: 82431.98680956413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 120798.67466344497,
            "unit": "ns/iter",
            "extra": "iterations: 5794\ncpu: 120798.49844666851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 483812.8717059588,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 483820.5270457648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 400845.7139575,
            "unit": "ns/iter",
            "extra": "iterations: 1741\ncpu: 400844.34233199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 393422.46460674953,
            "unit": "ns/iter",
            "extra": "iterations: 1780\ncpu: 393429.88764045085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 392385.2212290502,
            "unit": "ns/iter",
            "extra": "iterations: 1790\ncpu: 392393.46368715394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 253838.11960856486,
            "unit": "ns/iter",
            "extra": "iterations: 2759\ncpu: 253847.84342152614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 390492.0541899615,
            "unit": "ns/iter",
            "extra": "iterations: 1790\ncpu: 390499.7765363162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21360.352430715215,
            "unit": "ns/iter",
            "extra": "iterations: 32727\ncpu: 21360.760228557196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 104544.97865989589,
            "unit": "ns/iter",
            "extra": "iterations: 6701\ncpu: 104543.82927921208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 85693.8954656848,
            "unit": "ns/iter",
            "extra": "iterations: 8160\ncpu: 85694.31372549068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 85339.79403529814,
            "unit": "ns/iter",
            "extra": "iterations: 8215\ncpu: 85338.53925745617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84207.65282291795,
            "unit": "ns/iter",
            "extra": "iterations: 8307\ncpu: 84208.28217166246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 123508.62177902686,
            "unit": "ns/iter",
            "extra": "iterations: 5666\ncpu: 123511.06600776686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 482514.07936509483,
            "unit": "ns/iter",
            "extra": "iterations: 1449\ncpu: 482514.009661843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 393816.23833613825,
            "unit": "ns/iter",
            "extra": "iterations: 1779\ncpu: 393816.4137155714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 395010.3224167115,
            "unit": "ns/iter",
            "extra": "iterations: 1771\ncpu: 395012.42236024945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 393981.34985917044,
            "unit": "ns/iter",
            "extra": "iterations: 1775\ncpu: 393977.2394366234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 257147.01130561376,
            "unit": "ns/iter",
            "extra": "iterations: 2742\ncpu: 257148.97884756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 389947.2275013964,
            "unit": "ns/iter",
            "extra": "iterations: 1789\ncpu: 389950.47512577014 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702453360285,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6781.957904338644,
            "unit": "ns/iter",
            "extra": "iterations: 103051\ncpu: 6781.569320045415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57643.90174225775,
            "unit": "ns/iter",
            "extra": "iterations: 14177\ncpu: 57641.44741482683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 91944.80894046884,
            "unit": "ns/iter",
            "extra": "iterations: 9306\ncpu: 91941.13475177306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 133989.62709237053,
            "unit": "ns/iter",
            "extra": "iterations: 6452\ncpu: 133983.2610043397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 175941.50384614686,
            "unit": "ns/iter",
            "extra": "iterations: 4940\ncpu: 175929.028340081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 217615.41855203774,
            "unit": "ns/iter",
            "extra": "iterations: 3978\ncpu: 217603.4690799396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 259910.60561695948,
            "unit": "ns/iter",
            "extra": "iterations: 3347\ncpu: 259891.72393187915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 301968.48677801125,
            "unit": "ns/iter",
            "extra": "iterations: 2874\ncpu: 301954.59290187893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 341920.35145785415,
            "unit": "ns/iter",
            "extra": "iterations: 2538\ncpu: 341907.48620961333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5636.603541849733,
            "unit": "ns/iter",
            "extra": "iterations: 124003\ncpu: 5636.537825697768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4619.01127849185,
            "unit": "ns/iter",
            "extra": "iterations: 152148\ncpu: 4618.876357231122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4567.477883679958,
            "unit": "ns/iter",
            "extra": "iterations: 154230\ncpu: 4567.2644751345315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4645.071014665503,
            "unit": "ns/iter",
            "extra": "iterations: 150828\ncpu: 4644.859044739704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7080.034567551556,
            "unit": "ns/iter",
            "extra": "iterations: 98821\ncpu: 7079.447688244394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25164.960921035992,
            "unit": "ns/iter",
            "extra": "iterations: 32268\ncpu: 25163.855832403628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 125099.39341875877,
            "unit": "ns/iter",
            "extra": "iterations: 6868\ncpu: 125094.30693069324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 97705.18439312672,
            "unit": "ns/iter",
            "extra": "iterations: 8791\ncpu: 97699.95449891925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98113.11522162307,
            "unit": "ns/iter",
            "extra": "iterations: 8731\ncpu: 98108.15485053253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 93741.0162637369,
            "unit": "ns/iter",
            "extra": "iterations: 9100\ncpu: 93738.18681318681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 196996.78197482106,
            "unit": "ns/iter",
            "extra": "iterations: 4527\ncpu: 196989.68411751703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1648402.264184435,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1648303.014184399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1292986.2172702295,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1292923.1197771581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1293878.8022284152,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1293802.92479109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1287188.0152143782,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1287117.1507607168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 725353.0940438791,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 725319.5924764877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1250479.5471698183,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 1250411.5902964966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32031.95953129253,
            "unit": "ns/iter",
            "extra": "iterations: 25773\ncpu: 32029.713265820737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 154172.3481983636,
            "unit": "ns/iter",
            "extra": "iterations: 5606\ncpu: 154164.96610774146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 120003.54499720926,
            "unit": "ns/iter",
            "extra": "iterations: 7156\ncpu: 119997.37283398528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 120650.01293588594,
            "unit": "ns/iter",
            "extra": "iterations: 7112\ncpu: 120643.54611923496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 118257.84270128515,
            "unit": "ns/iter",
            "extra": "iterations: 7241\ncpu: 118252.6308520921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 206255.50178528833,
            "unit": "ns/iter",
            "extra": "iterations: 4201\ncpu: 206244.44179957142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1677902.142086309,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1677821.0431654637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1327250.5667613773,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1327147.4431818228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1331856.1057142883,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1331767.0000000093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1311948.8309859636,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1311887.464788737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 752503.1474878155,
            "unit": "ns/iter",
            "extra": "iterations: 1234\ncpu: 752449.8379254454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1284190.7734807197,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 1284125.828729284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6172329.960264921,
            "unit": "ns/iter",
            "extra": "iterations: 151\ncpu: 6172223.841059642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2814325.4878786495,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2814181.212121205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24073.518675845928,
            "unit": "ns/iter",
            "extra": "iterations: 34135\ncpu: 24072.15467994746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 121489.4399492534,
            "unit": "ns/iter",
            "extra": "iterations: 7094\ncpu: 121482.3512827736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 95337.35988919933,
            "unit": "ns/iter",
            "extra": "iterations: 9025\ncpu: 95333.13019390531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 94592.40092469974,
            "unit": "ns/iter",
            "extra": "iterations: 9084\ncpu: 94587.23029502436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 91214.78373776072,
            "unit": "ns/iter",
            "extra": "iterations: 9396\ncpu: 91212.36696466623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 179303.85457551162,
            "unit": "ns/iter",
            "extra": "iterations: 4841\ncpu: 179293.5550506089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1649910.5848056958,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1649833.5689045968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1289351.212707213,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 1289286.187845303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1289294.5489654958,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1289230.344827584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1276353.0328767227,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 1276301.6438356186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 721400.6197835829,
            "unit": "ns/iter",
            "extra": "iterations: 1294\ncpu: 721368.9335394148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1248518.530040001,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 1248453.2710280356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2629.686864470717,
            "unit": "ns/iter",
            "extra": "iterations: 265920\ncpu: 2629.5363267148227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17353.38226405788,
            "unit": "ns/iter",
            "extra": "iterations: 40370\ncpu: 17353.153331682068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 12895.304486705962,
            "unit": "ns/iter",
            "extra": "iterations: 54160\ncpu: 12895.11816838999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13374.209643682669,
            "unit": "ns/iter",
            "extra": "iterations: 54502\ncpu: 13373.911049135744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 9952.566625899342,
            "unit": "ns/iter",
            "extra": "iterations: 70318\ncpu: 9952.285332347261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63315.01059070643,
            "unit": "ns/iter",
            "extra": "iterations: 10953\ncpu: 63313.92312608409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 112564.87115477504,
            "unit": "ns/iter",
            "extra": "iterations: 6209\ncpu: 112564.79304235856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27497.029069535325,
            "unit": "ns/iter",
            "extra": "iterations: 25525\ncpu: 27488.99118511258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27369.179487177196,
            "unit": "ns/iter",
            "extra": "iterations: 25584\ncpu: 27369.172138836646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27375.270522899576,
            "unit": "ns/iter",
            "extra": "iterations: 25569\ncpu: 27374.410418866493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 56201.86930725651,
            "unit": "ns/iter",
            "extra": "iterations: 12472\ncpu: 56201.178640153485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51948.50727635401,
            "unit": "ns/iter",
            "extra": "iterations: 13537\ncpu: 51946.84198862355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20432.0965970195,
            "unit": "ns/iter",
            "extra": "iterations: 34411\ncpu: 20431.626514777457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101362.07193618266,
            "unit": "ns/iter",
            "extra": "iterations: 6895\ncpu: 101361.88542421957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83108.6734162197,
            "unit": "ns/iter",
            "extra": "iterations: 8445\ncpu: 83106.80876258113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 82545.82940066251,
            "unit": "ns/iter",
            "extra": "iterations: 8476\ncpu: 82544.95044832502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 81482.3260844291,
            "unit": "ns/iter",
            "extra": "iterations: 8599\ncpu: 81481.23037562352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 122178.61939520843,
            "unit": "ns/iter",
            "extra": "iterations: 5754\ncpu: 122174.5915884605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 482447.13999996876,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 482441.51724138024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 396882.86564621166,
            "unit": "ns/iter",
            "extra": "iterations: 1764\ncpu: 396853.4580498818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 393642.2159730502,
            "unit": "ns/iter",
            "extra": "iterations: 1778\ncpu: 393621.99100112077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 393711.9729881397,
            "unit": "ns/iter",
            "extra": "iterations: 1777\ncpu: 393693.9786156483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 256449.88831926853,
            "unit": "ns/iter",
            "extra": "iterations: 2731\ncpu: 256435.81105821754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 397072.00279324286,
            "unit": "ns/iter",
            "extra": "iterations: 1790\ncpu: 397053.7988826841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21072.776435226482,
            "unit": "ns/iter",
            "extra": "iterations: 33270\ncpu: 21071.71626089595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 101406.77646038405,
            "unit": "ns/iter",
            "extra": "iterations: 6916\ncpu: 101399.7831116253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 83906.87193656132,
            "unit": "ns/iter",
            "extra": "iterations: 8324\ncpu: 83900.21624219202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 84018.10331174347,
            "unit": "ns/iter",
            "extra": "iterations: 8334\ncpu: 84015.53875689986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 82928.07653181069,
            "unit": "ns/iter",
            "extra": "iterations: 8454\ncpu: 82925.25431748324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 124335.10842515949,
            "unit": "ns/iter",
            "extra": "iterations: 5626\ncpu: 124327.05296835974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 480697.9278350731,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 480691.75257731613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 395710.5790067843,
            "unit": "ns/iter",
            "extra": "iterations: 1772\ncpu: 395705.6997742639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 395832.45993227384,
            "unit": "ns/iter",
            "extra": "iterations: 1772\ncpu: 395805.81264108006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 393162.75730332854,
            "unit": "ns/iter",
            "extra": "iterations: 1780\ncpu: 393129.88764044986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 256264.76033659637,
            "unit": "ns/iter",
            "extra": "iterations: 2733\ncpu: 256246.98133918675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 390439.0866889993,
            "unit": "ns/iter",
            "extra": "iterations: 1788\ncpu: 390408.4451901597 ns\nthreads: 1"
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
          "id": "6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d",
          "message": "fail-fast: false",
          "timestamp": "2023-12-13T17:51:42+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d"
        },
        "date": 1702479566069,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7062.4948578844815,
            "unit": "ns/iter",
            "extra": "iterations: 97139\ncpu: 7061.952459877083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51546.868299999456,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51543.93000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95295.37842636686,
            "unit": "ns/iter",
            "extra": "iterations: 9011\ncpu: 95290.24525579844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 138969.53994845503,
            "unit": "ns/iter",
            "extra": "iterations: 6208\ncpu: 138964.65850515463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 182629.0862505262,
            "unit": "ns/iter",
            "extra": "iterations: 4742\ncpu: 182616.13243357232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 225235.15332639765,
            "unit": "ns/iter",
            "extra": "iterations: 3848\ncpu: 225218.81496881513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 268630.90529249073,
            "unit": "ns/iter",
            "extra": "iterations: 3231\ncpu: 268620.14856081695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 312416.1138968584,
            "unit": "ns/iter",
            "extra": "iterations: 2792\ncpu: 312402.5787965615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 355177.7593275733,
            "unit": "ns/iter",
            "extra": "iterations: 2439\ncpu: 355153.587535875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5707.495419991188,
            "unit": "ns/iter",
            "extra": "iterations: 121943\ncpu: 5706.870423066513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4699.992293103609,
            "unit": "ns/iter",
            "extra": "iterations: 149217\ncpu: 4699.830448273325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4630.054630575778,
            "unit": "ns/iter",
            "extra": "iterations: 151655\ncpu: 4629.967360126608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4685.889770539749,
            "unit": "ns/iter",
            "extra": "iterations: 149089\ncpu: 4685.690426523755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7059.481531981004,
            "unit": "ns/iter",
            "extra": "iterations: 98278\ncpu: 7059.391725513345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24797.927076032345,
            "unit": "ns/iter",
            "extra": "iterations: 32815\ncpu: 24798.02529331098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 127058.8391484326,
            "unit": "ns/iter",
            "extra": "iterations: 6764\ncpu: 127056.57894736838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 96515.99050417892,
            "unit": "ns/iter",
            "extra": "iterations: 8846\ncpu: 96516.30115306338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98256.32855833092,
            "unit": "ns/iter",
            "extra": "iterations: 8726\ncpu: 98255.4664221864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 94196.33962472323,
            "unit": "ns/iter",
            "extra": "iterations: 9060\ncpu: 94194.7461368652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 194441.33268102346,
            "unit": "ns/iter",
            "extra": "iterations: 4599\ncpu: 194430.74581430794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1670116.7661869973,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1670026.0791366932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1302996.8469101402,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1302936.938202243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1311745.6905766341,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1311687.060478197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1304681.4682651144,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1304580.1128349782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 735206.3490494236,
            "unit": "ns/iter",
            "extra": "iterations: 1315\ncpu: 735164.9429657785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1267533.3528610542,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 1267440.3269754802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32215.45199044897,
            "unit": "ns/iter",
            "extra": "iterations: 25547\ncpu: 32213.727639253146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 153625.85086622278,
            "unit": "ns/iter",
            "extra": "iterations: 5599\ncpu: 153610.48401500267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 121621.87105449109,
            "unit": "ns/iter",
            "extra": "iterations: 7065\ncpu: 121620.0849256897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 121965.37163605439,
            "unit": "ns/iter",
            "extra": "iterations: 7023\ncpu: 121953.88010821548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 119052.27286606349,
            "unit": "ns/iter",
            "extra": "iterations: 7205\ncpu: 119046.25954198446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 204388.53199527235,
            "unit": "ns/iter",
            "extra": "iterations: 4235\ncpu: 204376.38724911542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1701625.9432233754,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1701589.010989004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1336705.1412103756,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1336624.4956772372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1338393.8196247616,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1338341.1255411317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1345013.1647398341,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1344910.8381502843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 742647.408473237,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 742627.498001597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1294242.065734255,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1294158.6013985963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6114291.313725573,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6114117.647058818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2764383.236686235,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2764248.2248520753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 23687.91608675366,
            "unit": "ns/iter",
            "extra": "iterations: 34488\ncpu: 23687.007074924477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 124688.33102053,
            "unit": "ns/iter",
            "extra": "iterations: 6918\ncpu: 124689.07198612257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 94878.6255773075,
            "unit": "ns/iter",
            "extra": "iterations: 9094\ncpu: 94877.13877281715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 95065.15816834096,
            "unit": "ns/iter",
            "extra": "iterations: 9041\ncpu: 95065.49054308102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 90518.14226956583,
            "unit": "ns/iter",
            "extra": "iterations: 9482\ncpu: 90516.35730858444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 176594.45078459274,
            "unit": "ns/iter",
            "extra": "iterations: 4907\ncpu: 176589.9938862847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1672911.3059034934,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1672876.923076918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1303147.9650350036,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1303151.4685314642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1304438.525874111,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1304407.4125874075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1302589.1171548555,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1302593.444909345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 705817.2287878592,
            "unit": "ns/iter",
            "extra": "iterations: 1320\ncpu: 705797.7272727306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1263771.817320727,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 1263749.120433014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2572.5468151643167,
            "unit": "ns/iter",
            "extra": "iterations: 273405\ncpu: 2572.462829867795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17216.610458255214,
            "unit": "ns/iter",
            "extra": "iterations: 40676\ncpu: 17216.710099321495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13493.484562722437,
            "unit": "ns/iter",
            "extra": "iterations: 51855\ncpu: 13493.391186963741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13474.716507845456,
            "unit": "ns/iter",
            "extra": "iterations: 51945\ncpu: 13474.526903455626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 9990.78801514164,
            "unit": "ns/iter",
            "extra": "iterations: 70005\ncpu: 9990.422112706223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63269.88452132838,
            "unit": "ns/iter",
            "extra": "iterations: 11041\ncpu: 63265.16619871387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 113925.07851368099,
            "unit": "ns/iter",
            "extra": "iterations: 6432\ncpu: 113923.74067164151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27677.878453257246,
            "unit": "ns/iter",
            "extra": "iterations: 25266\ncpu: 27676.688039262226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27803.550507856417,
            "unit": "ns/iter",
            "extra": "iterations: 25204\ncpu: 27803.04316775128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27855.662743070545,
            "unit": "ns/iter",
            "extra": "iterations: 25147\ncpu: 27854.567145186298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 54758.06791624093,
            "unit": "ns/iter",
            "extra": "iterations: 12751\ncpu: 54758.2934671795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 52279.67088323099,
            "unit": "ns/iter",
            "extra": "iterations: 13360\ncpu: 52278.720059880136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20206.990540735187,
            "unit": "ns/iter",
            "extra": "iterations: 34675\ncpu: 20204.801730353418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 108947.56999557452,
            "unit": "ns/iter",
            "extra": "iterations: 6779\ncpu: 108943.84127452543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83908.40116833257,
            "unit": "ns/iter",
            "extra": "iterations: 8388\ncpu: 83905.32904148758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84214.87542046615,
            "unit": "ns/iter",
            "extra": "iterations: 8324\ncpu: 84212.43392599733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83530.2071889193,
            "unit": "ns/iter",
            "extra": "iterations: 8374\ncpu: 83524.39694291801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 121987.7719512258,
            "unit": "ns/iter",
            "extra": "iterations: 5740\ncpu: 121977.33449477343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 492709.0451339923,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 492667.2073342651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 399570.97653116815,
            "unit": "ns/iter",
            "extra": "iterations: 1747\ncpu: 399550.7727532916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 407959.28728960804,
            "unit": "ns/iter",
            "extra": "iterations: 1723\ncpu: 407941.9036564152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 401318.2266207909,
            "unit": "ns/iter",
            "extra": "iterations: 1743\ncpu: 401309.2943201362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 257376.23646407778,
            "unit": "ns/iter",
            "extra": "iterations: 2715\ncpu: 257365.5248618792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 396818.40249433805,
            "unit": "ns/iter",
            "extra": "iterations: 1764\ncpu: 396806.6893424041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21053.154179453326,
            "unit": "ns/iter",
            "extra": "iterations: 33234\ncpu: 21052.21159053969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 103069.45316194338,
            "unit": "ns/iter",
            "extra": "iterations: 6768\ncpu: 103067.6418439699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 85347.16208288117,
            "unit": "ns/iter",
            "extra": "iterations: 8181\ncpu: 85342.37868231177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 85349.69978033115,
            "unit": "ns/iter",
            "extra": "iterations: 8194\ncpu: 85344.03221869828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84721.68523001949,
            "unit": "ns/iter",
            "extra": "iterations: 8260\ncpu: 84715.71428571445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 122171.11087867034,
            "unit": "ns/iter",
            "extra": "iterations: 5736\ncpu: 122161.66317991684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 490597.3358992009,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 490553.6738978259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 402006.8955224344,
            "unit": "ns/iter",
            "extra": "iterations: 1742\ncpu: 401983.5820895541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 403540.77758521534,
            "unit": "ns/iter",
            "extra": "iterations: 1731\ncpu: 403523.05025996844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 400335.032073252,
            "unit": "ns/iter",
            "extra": "iterations: 1746\ncpu: 400317.1248568098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 253261.38740042588,
            "unit": "ns/iter",
            "extra": "iterations: 2762\ncpu: 253244.60535843825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 395924.73223419004,
            "unit": "ns/iter",
            "extra": "iterations: 1759\ncpu: 395903.3541785094 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702488586194,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6801.250055990019,
            "unit": "ns/iter",
            "extra": "iterations: 102697\ncpu: 6801.182118270252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50049.094899998185,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50046.05 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 92890.49083656723,
            "unit": "ns/iter",
            "extra": "iterations: 9276\ncpu: 92887.79646399307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 135563.37180091688,
            "unit": "ns/iter",
            "extra": "iterations: 6369\ncpu: 135556.85350918514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 178386.3247845729,
            "unit": "ns/iter",
            "extra": "iterations: 4874\ncpu: 178382.00656544926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 218807.5300076016,
            "unit": "ns/iter",
            "extra": "iterations: 3949\ncpu: 218798.98708533813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 262373.96856107295,
            "unit": "ns/iter",
            "extra": "iterations: 3308\ncpu: 262361.94074969785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 304028.3561452495,
            "unit": "ns/iter",
            "extra": "iterations: 2864\ncpu: 304013.8966480447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 347197.2025518167,
            "unit": "ns/iter",
            "extra": "iterations: 2508\ncpu: 347190.6698564588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5664.965578146823,
            "unit": "ns/iter",
            "extra": "iterations: 123991\ncpu: 5664.845029074696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4669.240065461776,
            "unit": "ns/iter",
            "extra": "iterations: 149705\ncpu: 4669.127283657853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4595.9025622140725,
            "unit": "ns/iter",
            "extra": "iterations: 152056\ncpu: 4595.777213658128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4643.497663197201,
            "unit": "ns/iter",
            "extra": "iterations: 151703\ncpu: 4643.227886066849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7114.875590422441,
            "unit": "ns/iter",
            "extra": "iterations: 98023\ncpu: 7114.418044744602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25175.285199716975,
            "unit": "ns/iter",
            "extra": "iterations: 31094\ncpu: 25174.689650736487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 134932.48538654792,
            "unit": "ns/iter",
            "extra": "iterations: 6364\ncpu: 134930.4525455686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104441.16062742843,
            "unit": "ns/iter",
            "extra": "iterations: 8224\ncpu: 104441.99902723759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 102914.05512376127,
            "unit": "ns/iter",
            "extra": "iterations: 8363\ncpu: 102913.34449360317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 104080.1702253874,
            "unit": "ns/iter",
            "extra": "iterations: 8430\ncpu: 104080.99644128098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 200666.8316050451,
            "unit": "ns/iter",
            "extra": "iterations: 4436\ncpu: 200663.32281334526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1650038.4262877314,
            "unit": "ns/iter",
            "extra": "iterations: 563\ncpu: 1649934.9911190036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1295354.186629554,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1295314.6239554319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1296177.3784916673,
            "unit": "ns/iter",
            "extra": "iterations: 716\ncpu: 1296119.413407821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1285661.7825484641,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1285585.8725761776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 700573.6895770575,
            "unit": "ns/iter",
            "extra": "iterations: 1324\ncpu: 700541.6918428979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1250441.3324360559,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 1250383.983849263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32218.052277908868,
            "unit": "ns/iter",
            "extra": "iterations: 25001\ncpu: 32216.695332186682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 166166.07110003757,
            "unit": "ns/iter",
            "extra": "iterations: 5218\ncpu: 166157.53162131095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 129192.99788965774,
            "unit": "ns/iter",
            "extra": "iterations: 6634\ncpu: 129183.81067229401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 128601.02649700444,
            "unit": "ns/iter",
            "extra": "iterations: 6680\ncpu: 128593.95209580865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 123351.65837169877,
            "unit": "ns/iter",
            "extra": "iterations: 6952\ncpu: 123341.28308400471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 211391.16650341754,
            "unit": "ns/iter",
            "extra": "iterations: 4084\ncpu: 211381.31733594442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1674943.5216606823,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1674833.032490965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1327949.5221112764,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1327855.6348074258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1327213.5398860488,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1327136.3247863164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1303214.6587412406,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1303125.4545454541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 729733.6551452954,
            "unit": "ns/iter",
            "extra": "iterations: 1273\ncpu: 729683.6606441473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1277356.5769230379,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1277282.9670329671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6093010.512986749,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6092535.714285729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2752527.1436950155,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2752256.89149562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24102.233167272207,
            "unit": "ns/iter",
            "extra": "iterations: 32719\ncpu: 24100.78242000058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 132480.1918881605,
            "unit": "ns/iter",
            "extra": "iterations: 6509\ncpu: 132474.83484406277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 102269.70930923877,
            "unit": "ns/iter",
            "extra": "iterations: 8411\ncpu: 102261.16989656414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 101553.94284369863,
            "unit": "ns/iter",
            "extra": "iterations: 8503\ncpu: 101546.81876984535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 96672.41467251223,
            "unit": "ns/iter",
            "extra": "iterations: 8901\ncpu: 96603.01089765214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 184150.98514745117,
            "unit": "ns/iter",
            "extra": "iterations: 4713\ncpu: 184150.26522384916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1653974.521276568,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1653944.1489361743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1288375.4854771912,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1288358.2295988936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1292146.2673130562,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1292126.4542936254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1272538.7847411814,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 1272492.9155313328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 693611.7088607567,
            "unit": "ns/iter",
            "extra": "iterations: 1343\ncpu: 693595.7557706599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1241495.0173333636,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 1241423.5999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2600.7508876244146,
            "unit": "ns/iter",
            "extra": "iterations: 270103\ncpu: 2600.722317042019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17233.208276981877,
            "unit": "ns/iter",
            "extra": "iterations: 40667\ncpu: 17232.276784616603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14107.818205601194,
            "unit": "ns/iter",
            "extra": "iterations: 49688\ncpu: 14107.382064079828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 12902.131180553275,
            "unit": "ns/iter",
            "extra": "iterations: 54627\ncpu: 12902.26261738706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10056.50788874089,
            "unit": "ns/iter",
            "extra": "iterations: 69783\ncpu: 10056.11825229642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 62882.812606932675,
            "unit": "ns/iter",
            "extra": "iterations: 11105\ncpu: 62881.92705988275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 112441.59845560284,
            "unit": "ns/iter",
            "extra": "iterations: 6216\ncpu: 112438.1595881595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27370.67645214187,
            "unit": "ns/iter",
            "extra": "iterations: 25514\ncpu: 27370.31825664333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27194.64606631822,
            "unit": "ns/iter",
            "extra": "iterations: 25663\ncpu: 27192.709348088854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27209.923265978643,
            "unit": "ns/iter",
            "extra": "iterations: 25634\ncpu: 27209.553717718594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 54153.69570267744,
            "unit": "ns/iter",
            "extra": "iterations: 12915\ncpu: 54151.87766163416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51682.00926947897,
            "unit": "ns/iter",
            "extra": "iterations: 13593\ncpu: 51679.41587581812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20259.38186964035,
            "unit": "ns/iter",
            "extra": "iterations: 34627\ncpu: 20259.19080486307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 103093.36891771371,
            "unit": "ns/iter",
            "extra": "iterations: 6782\ncpu: 103088.91182542106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83587.4185574433,
            "unit": "ns/iter",
            "extra": "iterations: 8374\ncpu: 83586.25507523397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 83844.42620589379,
            "unit": "ns/iter",
            "extra": "iterations: 8334\ncpu: 83845.15238780988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83138.91213488043,
            "unit": "ns/iter",
            "extra": "iterations: 8422\ncpu: 83136.85585371657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 123369.1602891796,
            "unit": "ns/iter",
            "extra": "iterations: 5671\ncpu: 123368.62987127514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 484900.3772537817,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 484893.6199722606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 399556.8459783203,
            "unit": "ns/iter",
            "extra": "iterations: 1753\ncpu: 399560.4107244668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 397763.52787260985,
            "unit": "ns/iter",
            "extra": "iterations: 1758\ncpu: 397759.442548351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 398309.28254689474,
            "unit": "ns/iter",
            "extra": "iterations: 1759\ncpu: 398291.0176236505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 249466.26131905807,
            "unit": "ns/iter",
            "extra": "iterations: 2805\ncpu: 249462.4242424274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 390760.9126539747,
            "unit": "ns/iter",
            "extra": "iterations: 1786\ncpu: 390745.1287793976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20924.732274751495,
            "unit": "ns/iter",
            "extra": "iterations: 33441\ncpu: 20924.930474567194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 103939.1740872559,
            "unit": "ns/iter",
            "extra": "iterations: 6738\ncpu: 103932.93262095467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 84861.7174176376,
            "unit": "ns/iter",
            "extra": "iterations: 8256\ncpu: 84860.59835271248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 85133.26194818942,
            "unit": "ns/iter",
            "extra": "iterations: 8223\ncpu: 85134.02651100513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84537.87195934168,
            "unit": "ns/iter",
            "extra": "iterations: 8263\ncpu: 84533.93440639062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 124520.2990920357,
            "unit": "ns/iter",
            "extra": "iterations: 5617\ncpu: 124521.29250489581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 485069.5402778468,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 485059.166666662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 397192.9406109016,
            "unit": "ns/iter",
            "extra": "iterations: 1768\ncpu: 397196.6628959258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 395774.0266138439,
            "unit": "ns/iter",
            "extra": "iterations: 1766\ncpu: 395761.94790487346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 396023.4676871325,
            "unit": "ns/iter",
            "extra": "iterations: 1764\ncpu: 395990.47619047674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 250505.1061851966,
            "unit": "ns/iter",
            "extra": "iterations: 2797\ncpu: 250485.44869503047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 393556.99831649923,
            "unit": "ns/iter",
            "extra": "iterations: 1782\ncpu: 393532.1548821597 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702490792255,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6878.054604526744,
            "unit": "ns/iter",
            "extra": "iterations: 101878\ncpu: 6877.371954690906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50914.041900000484,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50909.45000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94323.60736599914,
            "unit": "ns/iter",
            "extra": "iterations: 9123\ncpu: 94314.46892469582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 137224.55765865408,
            "unit": "ns/iter",
            "extra": "iterations: 6287\ncpu: 137213.98123111183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 180653.5057495309,
            "unit": "ns/iter",
            "extra": "iterations: 4783\ncpu: 180632.6573280369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 223708.46941935123,
            "unit": "ns/iter",
            "extra": "iterations: 3875\ncpu: 223684.59354838697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 266880.40221402084,
            "unit": "ns/iter",
            "extra": "iterations: 3252\ncpu: 266859.93234932347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 309700.5138691307,
            "unit": "ns/iter",
            "extra": "iterations: 2812\ncpu: 309673.86201991467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 353853.1113811172,
            "unit": "ns/iter",
            "extra": "iterations: 2469\ncpu: 353814.74281085446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5739.11251491593,
            "unit": "ns/iter",
            "extra": "iterations: 124028\ncpu: 5738.776727835653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4786.463006403801,
            "unit": "ns/iter",
            "extra": "iterations: 148350\ncpu: 4786.143579373104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4626.61277521421,
            "unit": "ns/iter",
            "extra": "iterations: 151700\ncpu: 4626.357284113385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4721.21950398749,
            "unit": "ns/iter",
            "extra": "iterations: 148585\ncpu: 4720.7820439479065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7072.441638445112,
            "unit": "ns/iter",
            "extra": "iterations: 99509\ncpu: 7072.1643268448115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24971.499076697,
            "unit": "ns/iter",
            "extra": "iterations: 32492\ncpu: 24970.811276621942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 127337.48232509514,
            "unit": "ns/iter",
            "extra": "iterations: 6761\ncpu: 127335.91184736001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 101612.47155544776,
            "unit": "ns/iter",
            "extra": "iterations: 8332\ncpu: 101606.9131060969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 99770.07806474116,
            "unit": "ns/iter",
            "extra": "iterations: 8557\ncpu: 99766.15636321128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97206.06893015966,
            "unit": "ns/iter",
            "extra": "iterations: 8777\ncpu: 97202.15335536053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 195585.4509632222,
            "unit": "ns/iter",
            "extra": "iterations: 4568\ncpu: 195577.56129597223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1679615.802893303,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1679504.8824593099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1314379.5092198118,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1314310.070921984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1316775.2588904789,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1316712.8022759617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1309231.6591549297,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1309185.0704225383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 720438.2959501429,
            "unit": "ns/iter",
            "extra": "iterations: 1284\ncpu: 720372.1962616842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1272960.7739726056,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 1272909.726027396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 31731.50380118171,
            "unit": "ns/iter",
            "extra": "iterations: 25913\ncpu: 31729.645351753883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 155126.1364126579,
            "unit": "ns/iter",
            "extra": "iterations: 5564\ncpu: 155119.12293314177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 123058.72269868631,
            "unit": "ns/iter",
            "extra": "iterations: 6996\ncpu: 123050.57175528853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 123525.93133601033,
            "unit": "ns/iter",
            "extra": "iterations: 6976\ncpu: 123518.74999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 121304.87024734795,
            "unit": "ns/iter",
            "extra": "iterations: 7075\ncpu: 121302.00706713807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 205480.2630579198,
            "unit": "ns/iter",
            "extra": "iterations: 4212\ncpu: 205470.7977207975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1705677.4065934776,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1705531.318681314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1343253.9567722392,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1343173.6311239148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1391281.8446043413,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1391177.553956828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1335032.4870317383,
            "unit": "ns/iter",
            "extra": "iterations: 694\ncpu: 1334962.6801152693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 747068.6287571797,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 746994.800974818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1296313.0322580533,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1296253.716690046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6129251.289474262,
            "unit": "ns/iter",
            "extra": "iterations: 152\ncpu: 6128926.315789482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2839295.544342574,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2839034.250764517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 23939.945649629513,
            "unit": "ns/iter",
            "extra": "iterations: 34204\ncpu: 23939.127002689806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 123325.5188895193,
            "unit": "ns/iter",
            "extra": "iterations: 6988\ncpu: 123320.87864911267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 97630.21413980289,
            "unit": "ns/iter",
            "extra": "iterations: 8812\ncpu: 97626.72492056324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 96531.62758310766,
            "unit": "ns/iter",
            "extra": "iterations: 8904\ncpu: 96522.1698113208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 94187.84281961144,
            "unit": "ns/iter",
            "extra": "iterations: 9136\ncpu: 94183.29684763585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 177889.80914310564,
            "unit": "ns/iter",
            "extra": "iterations: 4878\ncpu: 177876.24026240333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1668076.1232141857,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1668014.6428571392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1313330.118143502,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1313229.5358649832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1305763.6573426174,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1305693.0069930097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1304320.4005601907,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 1304273.109243692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 715204.3117783221,
            "unit": "ns/iter",
            "extra": "iterations: 1299\ncpu: 715195.688991536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1263610.4864498528,
            "unit": "ns/iter",
            "extra": "iterations: 738\ncpu: 1263557.452574521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2550.8963183876654,
            "unit": "ns/iter",
            "extra": "iterations: 274282\ncpu: 2550.8327196097357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17246.64362973312,
            "unit": "ns/iter",
            "extra": "iterations: 40587\ncpu: 17246.231551974888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13501.363646888984,
            "unit": "ns/iter",
            "extra": "iterations: 51814\ncpu: 13501.219747558564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13963.119215069102,
            "unit": "ns/iter",
            "extra": "iterations: 52183\ncpu: 13962.33064407948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10093.343821162982,
            "unit": "ns/iter",
            "extra": "iterations: 69382\ncpu: 10092.779106973032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 61892.151238942104,
            "unit": "ns/iter",
            "extra": "iterations: 11300\ncpu: 61888.63716814131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 113870.80619900799,
            "unit": "ns/iter",
            "extra": "iterations: 6130\ncpu: 113863.67047308348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27484.834921007885,
            "unit": "ns/iter",
            "extra": "iterations: 25509\ncpu: 27482.711984005644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27659.56750888327,
            "unit": "ns/iter",
            "extra": "iterations: 25330\ncpu: 27657.224634820457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27863.705516120197,
            "unit": "ns/iter",
            "extra": "iterations: 25217\ncpu: 27862.204068683688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55572.19830050251,
            "unit": "ns/iter",
            "extra": "iterations: 12592\ncpu: 55570.9180432018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54351.92360184474,
            "unit": "ns/iter",
            "extra": "iterations: 13482\ncpu: 54349.65880433139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20424.991444006933,
            "unit": "ns/iter",
            "extra": "iterations: 34245\ncpu: 20423.495400788408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101395.55228191498,
            "unit": "ns/iter",
            "extra": "iterations: 6924\ncpu: 101386.72732524505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83461.51834643798,
            "unit": "ns/iter",
            "extra": "iterations: 8394\ncpu: 83457.31474863054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 82407.3062426337,
            "unit": "ns/iter",
            "extra": "iterations: 8490\ncpu: 82405.06478209641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83126.41304348213,
            "unit": "ns/iter",
            "extra": "iterations: 8418\ncpu: 83125.46923259644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 121321.96847940472,
            "unit": "ns/iter",
            "extra": "iterations: 5774\ncpu: 121313.7512989264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 491906.831795615,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 491893.89638041065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 400434.81124499836,
            "unit": "ns/iter",
            "extra": "iterations: 1743\ncpu: 400412.5071715426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 402073.9413118213,
            "unit": "ns/iter",
            "extra": "iterations: 1738\ncpu: 402050.74798619066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 397754.3047185727,
            "unit": "ns/iter",
            "extra": "iterations: 1759\ncpu: 397721.7168845983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 252335.27407140264,
            "unit": "ns/iter",
            "extra": "iterations: 2773\ncpu: 252321.67327803632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 395228.11877825885,
            "unit": "ns/iter",
            "extra": "iterations: 1768\ncpu: 395203.6199094991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21045.16274951228,
            "unit": "ns/iter",
            "extra": "iterations: 33315\ncpu: 21044.040222122225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 103110.10418509392,
            "unit": "ns/iter",
            "extra": "iterations: 6786\ncpu: 103100.47155909223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 84631.17703292114,
            "unit": "ns/iter",
            "extra": "iterations: 8264\ncpu: 84629.15053242979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 85711.79272326324,
            "unit": "ns/iter",
            "extra": "iterations: 8163\ncpu: 85707.53399485558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84543.36688468436,
            "unit": "ns/iter",
            "extra": "iterations: 8256\ncpu: 84538.11773255676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 123960.35456474804,
            "unit": "ns/iter",
            "extra": "iterations: 5652\ncpu: 123950.53078556417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 487958.50487467233,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 487930.64066852216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 399937.8597491273,
            "unit": "ns/iter",
            "extra": "iterations: 1754\ncpu: 399929.1904218913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 399508.0645345447,
            "unit": "ns/iter",
            "extra": "iterations: 1751\ncpu: 399497.8869217601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 397499.0198976679,
            "unit": "ns/iter",
            "extra": "iterations: 1759\ncpu: 397457.4189880597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 257051.38376790792,
            "unit": "ns/iter",
            "extra": "iterations: 2723\ncpu: 257036.65075284534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 394405.42412235134,
            "unit": "ns/iter",
            "extra": "iterations: 1766\ncpu: 394373.61268403375 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "380c708d79f348a900173c4fb482ef4fb63a6372",
          "message": "Update parser.hpp",
          "timestamp": "2024-01-18T13:25:10+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/380c708d79f348a900173c4fb482ef4fb63a6372"
        },
        "date": 1705573931284,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7147.387245038314,
            "unit": "ns/iter",
            "extra": "iterations: 97907\ncpu: 7147.240748873932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53261.52049999564,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53259.63 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 96534.68010044977,
            "unit": "ns/iter",
            "extra": "iterations: 8362\ncpu: 96532.61181535517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 142725.00293207084,
            "unit": "ns/iter",
            "extra": "iterations: 6139\ncpu: 142717.999674214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 185322.6998075517,
            "unit": "ns/iter",
            "extra": "iterations: 4677\ncpu: 185321.12465255504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 227941.73508542916,
            "unit": "ns/iter",
            "extra": "iterations: 3805\ncpu: 227931.11695137987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 272946.3768115621,
            "unit": "ns/iter",
            "extra": "iterations: 3174\ncpu: 272942.5645872716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 316948.3059294422,
            "unit": "ns/iter",
            "extra": "iterations: 2749\ncpu: 316935.9403419424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 359807.65809124976,
            "unit": "ns/iter",
            "extra": "iterations: 2410\ncpu: 359794.5643153524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5689.055846000258,
            "unit": "ns/iter",
            "extra": "iterations: 123948\ncpu: 5688.9372962855405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4668.909012704003,
            "unit": "ns/iter",
            "extra": "iterations: 149955\ncpu: 4668.73528725284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4631.578956741722,
            "unit": "ns/iter",
            "extra": "iterations: 151602\ncpu: 4631.655914829622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4705.903705236233,
            "unit": "ns/iter",
            "extra": "iterations: 149842\ncpu: 4704.116335873792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7160.526543878979,
            "unit": "ns/iter",
            "extra": "iterations: 97838\ncpu: 7160.655369079496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24958.589315322475,
            "unit": "ns/iter",
            "extra": "iterations: 32570\ncpu: 24957.93675161191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 122905.46457707754,
            "unit": "ns/iter",
            "extra": "iterations: 6987\ncpu: 122898.6260197508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 95654.85706278017,
            "unit": "ns/iter",
            "extra": "iterations: 8920\ncpu: 95646.96188340792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 95520.90417086604,
            "unit": "ns/iter",
            "extra": "iterations: 8943\ncpu: 95522.08431175232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 92187.79060057779,
            "unit": "ns/iter",
            "extra": "iterations: 9341\ncpu: 92186.10427149141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 206195.74987811665,
            "unit": "ns/iter",
            "extra": "iterations: 4102\ncpu: 206186.76255485055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1645279.3404256122,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1645218.7943262442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1275027.4219177747,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 1274974.79452055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1282550.3724138015,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1282487.999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1267267.9891008497,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 1267204.087193462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 707969.4009181272,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 707930.1453710785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1249951.1621984094,
            "unit": "ns/iter",
            "extra": "iterations: 746\ncpu: 1249880.1608579098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 32589.911334995024,
            "unit": "ns/iter",
            "extra": "iterations: 24914\ncpu: 32588.881753231144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 148736.8735116348,
            "unit": "ns/iter",
            "extra": "iterations: 5795\ncpu: 148739.17169974095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 117896.35734830609,
            "unit": "ns/iter",
            "extra": "iterations: 7301\ncpu: 117893.411861389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 119552.40404462989,
            "unit": "ns/iter",
            "extra": "iterations: 7170\ncpu: 119550.40446304047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 116175.59750134833,
            "unit": "ns/iter",
            "extra": "iterations: 7364\ncpu: 116170.00271591503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 217268.24224072855,
            "unit": "ns/iter",
            "extra": "iterations: 3963\ncpu: 217271.4105475654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1673455.2779783926,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1673450.1805054187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1311315.7710672964,
            "unit": "ns/iter",
            "extra": "iterations: 712\ncpu: 1311239.0449438142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1310592.666666665,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1310498.1715893059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1293286.5041667202,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1293233.1944444443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 740772.7486077878,
            "unit": "ns/iter",
            "extra": "iterations: 1257\ncpu: 740723.6276849642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1269189.527322322,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 1269129.2349726735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6085930.2679733345,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6085690.849673188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2768324.6597632323,
            "unit": "ns/iter",
            "extra": "iterations: 338\ncpu: 2768197.928994079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 24026.1964540873,
            "unit": "ns/iter",
            "extra": "iterations: 34293\ncpu: 24025.232554748745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 120976.2289122808,
            "unit": "ns/iter",
            "extra": "iterations: 7125\ncpu: 120968.43508771926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 93173.60472936432,
            "unit": "ns/iter",
            "extra": "iterations: 9219\ncpu: 93170.86451892844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 92247.49854697874,
            "unit": "ns/iter",
            "extra": "iterations: 9291\ncpu: 92242.85868044314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 86962.98985863729,
            "unit": "ns/iter",
            "extra": "iterations: 9762\ncpu: 86960.24380249932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 189547.2978583923,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 189535.7298951057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1643752.5809859415,
            "unit": "ns/iter",
            "extra": "iterations: 568\ncpu: 1643708.2746478878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1269664.5784447729,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 1269612.4147339733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1274077.7285130064,
            "unit": "ns/iter",
            "extra": "iterations: 733\ncpu: 1274031.1050477517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1264289.6441137397,
            "unit": "ns/iter",
            "extra": "iterations: 739\ncpu: 1264243.572395134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 722725.7935034826,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 722704.9497293121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1237257.0598405094,
            "unit": "ns/iter",
            "extra": "iterations: 752\ncpu: 1237210.1063829807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2571.0000184267587,
            "unit": "ns/iter",
            "extra": "iterations: 271345\ncpu: 2570.9683244577964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16592.557360695155,
            "unit": "ns/iter",
            "extra": "iterations: 42102\ncpu: 16592.026507054292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 13493.697677105783,
            "unit": "ns/iter",
            "extra": "iterations: 51918\ncpu: 13493.886513347981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 13895.703080066989,
            "unit": "ns/iter",
            "extra": "iterations: 50421\ncpu: 13895.882667935988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10009.194139090838,
            "unit": "ns/iter",
            "extra": "iterations: 70228\ncpu: 10008.873953408918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 64483.94892398209,
            "unit": "ns/iter",
            "extra": "iterations: 10827\ncpu: 64484.09531726207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 112375.46045014802,
            "unit": "ns/iter",
            "extra": "iterations: 6220\ncpu: 112370.24115755605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27083.60054347789,
            "unit": "ns/iter",
            "extra": "iterations: 25760\ncpu: 27083.3579192549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27297.568632038383,
            "unit": "ns/iter",
            "extra": "iterations: 25644\ncpu: 27297.66027140859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27108.914729878485,
            "unit": "ns/iter",
            "extra": "iterations: 25859\ncpu: 27108.557948876434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 54637.35572722127,
            "unit": "ns/iter",
            "extra": "iterations: 12816\ncpu: 54633.62983770287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51411.26242384749,
            "unit": "ns/iter",
            "extra": "iterations: 13623\ncpu: 51409.01416721711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21097.92356899488,
            "unit": "ns/iter",
            "extra": "iterations: 33141\ncpu: 21097.045955161102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 101638.23275737642,
            "unit": "ns/iter",
            "extra": "iterations: 6887\ncpu: 101631.46507913458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83787.09971305123,
            "unit": "ns/iter",
            "extra": "iterations: 8364\ncpu: 83786.29842180724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 82900.22500886767,
            "unit": "ns/iter",
            "extra": "iterations: 8453\ncpu: 82891.52963444866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 83049.43087694372,
            "unit": "ns/iter",
            "extra": "iterations: 8427\ncpu: 83048.75993829344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 123277.93068261987,
            "unit": "ns/iter",
            "extra": "iterations: 5684\ncpu: 123279.89092188641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 484172.98755185504,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 484173.3748271095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 398952.5524515657,
            "unit": "ns/iter",
            "extra": "iterations: 1754\ncpu: 398926.7388825492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 397941.1932916358,
            "unit": "ns/iter",
            "extra": "iterations: 1759\ncpu: 397945.36668560957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 403771.85402299254,
            "unit": "ns/iter",
            "extra": "iterations: 1740\ncpu: 403748.8505747122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 257608.06445669508,
            "unit": "ns/iter",
            "extra": "iterations: 2715\ncpu: 257611.01289134298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 392643.46335964923,
            "unit": "ns/iter",
            "extra": "iterations: 1774\ncpu: 392631.2288613294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21538.62028852008,
            "unit": "ns/iter",
            "extra": "iterations: 32580\ncpu: 21538.959484346222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 103855.3536729974,
            "unit": "ns/iter",
            "extra": "iterations: 6752\ncpu: 103853.42120853197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 85578.80053744862,
            "unit": "ns/iter",
            "extra": "iterations: 8187\ncpu: 85580.1392451435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86000.70033132126,
            "unit": "ns/iter",
            "extra": "iterations: 8149\ncpu: 85999.70548533494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84793.20329536776,
            "unit": "ns/iter",
            "extra": "iterations: 8254\ncpu: 84790.3804216136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 127762.86821987918,
            "unit": "ns/iter",
            "extra": "iterations: 5494\ncpu: 127762.61376046466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 493070.0100154594,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 493059.7072419057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 395502.18434489105,
            "unit": "ns/iter",
            "extra": "iterations: 1763\ncpu: 395502.38230289525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 396345.22915488743,
            "unit": "ns/iter",
            "extra": "iterations: 1763\ncpu: 396328.64435620856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 395111.5437112391,
            "unit": "ns/iter",
            "extra": "iterations: 1773\ncpu: 395110.8291032131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 267596.9242761488,
            "unit": "ns/iter",
            "extra": "iterations: 2694\ncpu: 267569.4877505582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 393132.7525252118,
            "unit": "ns/iter",
            "extra": "iterations: 1782\ncpu: 393113.74859708565 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T20:20:02+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705771614519,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6767.28612290753,
            "unit": "ns/iter",
            "extra": "iterations: 103134\ncpu: 6767.241646789614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50041.96510000156,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50040.51999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 92349.78535900201,
            "unit": "ns/iter",
            "extra": "iterations: 9248\ncpu: 92347.81574394461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 134501.73717048837,
            "unit": "ns/iter",
            "extra": "iterations: 6411\ncpu: 134499.62564342536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 177043.80319803752,
            "unit": "ns/iter",
            "extra": "iterations: 4878\ncpu: 177037.4538745387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 220465.61594937817,
            "unit": "ns/iter",
            "extra": "iterations: 3950\ncpu: 220457.03797468348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 260517.27399999436,
            "unit": "ns/iter",
            "extra": "iterations: 3000\ncpu: 260501.93333333352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 303149.5862670213,
            "unit": "ns/iter",
            "extra": "iterations: 2869\ncpu: 303147.92610665737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 344895.0791765669,
            "unit": "ns/iter",
            "extra": "iterations: 2526\ncpu: 344886.4608076013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5609.1712647365575,
            "unit": "ns/iter",
            "extra": "iterations: 124690\ncpu: 5609.028791402682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4621.5371484882735,
            "unit": "ns/iter",
            "extra": "iterations: 151204\ncpu: 4621.416761461335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4570.541669944566,
            "unit": "ns/iter",
            "extra": "iterations: 152556\ncpu: 4570.553108366762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4641.621366105992,
            "unit": "ns/iter",
            "extra": "iterations: 150940\ncpu: 4641.575460447859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7182.599823511717,
            "unit": "ns/iter",
            "extra": "iterations: 97457\ncpu: 7182.560513867656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24589.057583081572,
            "unit": "ns/iter",
            "extra": "iterations: 33100\ncpu: 24588.803625377666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 127832.90461308572,
            "unit": "ns/iter",
            "extra": "iterations: 6720\ncpu: 127830.87797619063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 97811.9231644833,
            "unit": "ns/iter",
            "extra": "iterations: 8785\ncpu: 97809.57313602741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 97674.89551216236,
            "unit": "ns/iter",
            "extra": "iterations: 8757\ncpu: 97671.89676829966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 93951.1312252068,
            "unit": "ns/iter",
            "extra": "iterations: 9076\ncpu: 93948.71088585276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 196113.0365558466,
            "unit": "ns/iter",
            "extra": "iterations: 4541\ncpu: 196107.88372605154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1647806.3914590837,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1647762.9893238456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1299170.4461538491,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1299140.6993007006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1307796.7913165851,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 1307775.7703081244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1297148.8995815185,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1297114.2259414254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 726409.298273176,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 726373.076923076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1262479.0027210074,
            "unit": "ns/iter",
            "extra": "iterations: 735\ncpu: 1262437.4149659832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 31540.15765092834,
            "unit": "ns/iter",
            "extra": "iterations: 26121\ncpu: 31539.89510355651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 156194.11541244967,
            "unit": "ns/iter",
            "extra": "iterations: 5528\ncpu: 156190.35817655595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 121359.31209473344,
            "unit": "ns/iter",
            "extra": "iterations: 7094\ncpu: 121356.48435297425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 121387.33238675678,
            "unit": "ns/iter",
            "extra": "iterations: 7043\ncpu: 121384.7508164131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 118074.46925609898,
            "unit": "ns/iter",
            "extra": "iterations: 7286\ncpu: 118074.67746362872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 207974.9137764884,
            "unit": "ns/iter",
            "extra": "iterations: 4152\ncpu: 207971.72447013482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1675154.5837838126,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1675126.1261261303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1325373.4371427787,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1325329.5714285786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1329034.7324749674,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1328986.1230329105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1322893.0539771577,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1322870.1704545456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 748785.7687349317,
            "unit": "ns/iter",
            "extra": "iterations: 1241\ncpu: 748768.0096696209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1283201.2372413813,
            "unit": "ns/iter",
            "extra": "iterations: 725\ncpu: 1283159.172413789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6097511.183006615,
            "unit": "ns/iter",
            "extra": "iterations: 153\ncpu: 6097354.901960774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2771084.76991161,
            "unit": "ns/iter",
            "extra": "iterations: 339\ncpu: 2770938.9380530943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 23617.155952757752,
            "unit": "ns/iter",
            "extra": "iterations: 34799\ncpu: 23617.16715997585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 121520.61421104496,
            "unit": "ns/iter",
            "extra": "iterations: 7079\ncpu: 121518.10990252838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 97089.32375889648,
            "unit": "ns/iter",
            "extra": "iterations: 8843\ncpu: 97087.36854008789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 95706.82522149321,
            "unit": "ns/iter",
            "extra": "iterations: 8691\ncpu: 95703.14118053141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 90864.34340222008,
            "unit": "ns/iter",
            "extra": "iterations: 9435\ncpu: 90860.38155802876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 178632.3235903643,
            "unit": "ns/iter",
            "extra": "iterations: 4824\ncpu: 178625.2902155899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1661347.2991149193,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1661327.7876106284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1297866.736070397,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1297817.7419354778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1303643.0349650679,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1303618.041958044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1295792.87604451,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1295753.4818941527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 719411.8195198223,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 719403.2532920188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1255038.3355794644,
            "unit": "ns/iter",
            "extra": "iterations: 742\ncpu: 1255005.9299191302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2513.710040002583,
            "unit": "ns/iter",
            "extra": "iterations: 279980\ncpu: 2513.6913350953814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 16460.773699946345,
            "unit": "ns/iter",
            "extra": "iterations: 42479\ncpu: 16460.52166953087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 12909.828489820045,
            "unit": "ns/iter",
            "extra": "iterations: 54265\ncpu: 12909.632359716274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14005.137882240484,
            "unit": "ns/iter",
            "extra": "iterations: 54416\ncpu: 14004.574022346364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10002.0871526885,
            "unit": "ns/iter",
            "extra": "iterations: 70038\ncpu: 10001.911819298055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 63703.19914560702,
            "unit": "ns/iter",
            "extra": "iterations: 11002\ncpu: 63699.918196691324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 112449.26767596618,
            "unit": "ns/iter",
            "extra": "iterations: 6209\ncpu: 112448.26864229309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 27554.500965591833,
            "unit": "ns/iter",
            "extra": "iterations: 25373\ncpu: 27554.526465140007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 27509.55480017289,
            "unit": "ns/iter",
            "extra": "iterations: 25447\ncpu: 27509.144496404526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 27364.67368174087,
            "unit": "ns/iter",
            "extra": "iterations: 25564\ncpu: 27364.438272570595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 55991.720367414884,
            "unit": "ns/iter",
            "extra": "iterations: 12520\ncpu: 55990.36741214062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 51735.30967169697,
            "unit": "ns/iter",
            "extra": "iterations: 13524\ncpu: 51734.47944395172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20316.073128214743,
            "unit": "ns/iter",
            "extra": "iterations: 34419\ncpu: 20315.038205642435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 102414.83773144936,
            "unit": "ns/iter",
            "extra": "iterations: 6859\ncpu: 102413.25266073871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83473.60824619881,
            "unit": "ns/iter",
            "extra": "iterations: 8416\ncpu: 83472.20769962022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 83173.03363041299,
            "unit": "ns/iter",
            "extra": "iterations: 8415\ncpu: 83173.08377896562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82796.23503012031,
            "unit": "ns/iter",
            "extra": "iterations: 8467\ncpu: 82794.88602810916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 123889.7756512653,
            "unit": "ns/iter",
            "extra": "iterations: 5643\ncpu: 123884.86620591894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 483220.8154802531,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 483208.98410504614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 396865.0011325135,
            "unit": "ns/iter",
            "extra": "iterations: 1766\ncpu: 396865.232163078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 395626.1761716405,
            "unit": "ns/iter",
            "extra": "iterations: 1771\ncpu: 395626.3128176186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 396643.2406568748,
            "unit": "ns/iter",
            "extra": "iterations: 1766\ncpu: 396636.69309173117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 254761.08272594566,
            "unit": "ns/iter",
            "extra": "iterations: 2744\ncpu: 254748.97959183427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 390241.4600335553,
            "unit": "ns/iter",
            "extra": "iterations: 1789\ncpu: 390234.82392398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 20882.737480214677,
            "unit": "ns/iter",
            "extra": "iterations: 33487\ncpu: 20882.058709350134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 101145.41396760316,
            "unit": "ns/iter",
            "extra": "iterations: 6916\ncpu: 101144.66454598054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 83823.84882606786,
            "unit": "ns/iter",
            "extra": "iterations: 8348\ncpu: 83821.633924293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 84259.90274434841,
            "unit": "ns/iter",
            "extra": "iterations: 8308\ncpu: 84257.00529610034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 83627.24047761297,
            "unit": "ns/iter",
            "extra": "iterations: 8375\ncpu: 83625.08656716387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 123570.2587486807,
            "unit": "ns/iter",
            "extra": "iterations: 5658\ncpu: 123565.92435489496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 483928.2657876298,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 483920.6800832835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 396041.8361581711,
            "unit": "ns/iter",
            "extra": "iterations: 1770\ncpu: 396022.3163841867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 396466.60045403696,
            "unit": "ns/iter",
            "extra": "iterations: 1762\ncpu: 396460.1021566382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 396858.7293317898,
            "unit": "ns/iter",
            "extra": "iterations: 1766\ncpu: 396855.83238958137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 256345.36946176348,
            "unit": "ns/iter",
            "extra": "iterations: 2731\ncpu: 256343.35408275513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 392420.19403825805,
            "unit": "ns/iter",
            "extra": "iterations: 1778\ncpu: 392420.35995500616 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}