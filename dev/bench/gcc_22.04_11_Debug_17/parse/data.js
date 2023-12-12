window.BENCHMARK_DATA = {
  "lastUpdate": 1702409090390,
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
      }
    ]
  }
}