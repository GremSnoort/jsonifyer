window.BENCHMARK_DATA = {
  "lastUpdate": 1702420967710,
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
      }
    ]
  }
}