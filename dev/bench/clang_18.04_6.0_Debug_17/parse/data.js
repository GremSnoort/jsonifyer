window.BENCHMARK_DATA = {
  "lastUpdate": 1702392474764,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-6.0 18.04 Debug c++-17": [
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
        "date": 1702392472637,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8283.39441457124,
            "unit": "ns/iter",
            "extra": "iterations: 84434\ncpu: 8283.062510363125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59584.14719999609,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59583.53 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 110358.01241679995,
            "unit": "ns/iter",
            "extra": "iterations: 7812\ncpu: 110353.0977982591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 159902.51421139753,
            "unit": "ns/iter",
            "extra": "iterations: 5383\ncpu: 159898.01226082118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 210307.33973267124,
            "unit": "ns/iter",
            "extra": "iterations: 4115\ncpu: 210300.92345078985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 260807.19246987242,
            "unit": "ns/iter",
            "extra": "iterations: 3320\ncpu: 260800.33132530132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 314444.2873481171,
            "unit": "ns/iter",
            "extra": "iterations: 2798\ncpu: 314413.65260900627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 361326.8250207677,
            "unit": "ns/iter",
            "extra": "iterations: 2406\ncpu: 361307.7722360763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 411506.4616477176,
            "unit": "ns/iter",
            "extra": "iterations: 2112\ncpu: 411486.7424242421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6809.070757059884,
            "unit": "ns/iter",
            "extra": "iterations: 102647\ncpu: 6808.844876128858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5625.200011254318,
            "unit": "ns/iter",
            "extra": "iterations: 124403\ncpu: 5624.94473605943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5614.254469081369,
            "unit": "ns/iter",
            "extra": "iterations: 124746\ncpu: 5614.103859041581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5638.577410392936,
            "unit": "ns/iter",
            "extra": "iterations: 124544\ncpu: 5638.347893114081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9772.899489974854,
            "unit": "ns/iter",
            "extra": "iterations: 71565\ncpu: 9772.703137008311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 32656.675262044293,
            "unit": "ns/iter",
            "extra": "iterations: 25091\ncpu: 32655.513929297394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 145115.4823113232,
            "unit": "ns/iter",
            "extra": "iterations: 5936\ncpu: 145104.51482479778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113401.7347318061,
            "unit": "ns/iter",
            "extra": "iterations: 7532\ncpu: 113393.64046733953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 112481.69398978661,
            "unit": "ns/iter",
            "extra": "iterations: 7637\ncpu: 112475.25206232829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 108672.7462039065,
            "unit": "ns/iter",
            "extra": "iterations: 7837\ncpu: 108666.07120071455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 381362.9717400075,
            "unit": "ns/iter",
            "extra": "iterations: 2477\ncpu: 381343.2781590628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1959269.4336841688,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1959138.105263155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1530424.6985172657,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1530358.8138385508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1534367.9323431351,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1534280.8580858097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1546975.3983334538,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1546868.9999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 850940.6209751503,
            "unit": "ns/iter",
            "extra": "iterations: 1087\ncpu: 850895.5841766348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1486154.2740383435,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1486101.6025641016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 39808.42517905835,
            "unit": "ns/iter",
            "extra": "iterations: 20803\ncpu: 39807.09513050999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 175167.02089675146,
            "unit": "ns/iter",
            "extra": "iterations: 4929\ncpu: 175158.75431121918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 141356.99195930493,
            "unit": "ns/iter",
            "extra": "iterations: 6094\ncpu: 141351.0666229079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 138525.25308146302,
            "unit": "ns/iter",
            "extra": "iterations: 6247\ncpu: 138522.01056507122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132477.20792693557,
            "unit": "ns/iter",
            "extra": "iterations: 6459\ncpu: 132470.2740362283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 338803.1684910212,
            "unit": "ns/iter",
            "extra": "iterations: 2558\ncpu: 338792.6505082102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1969917.5285412422,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1969829.598308657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1575603.1692048018,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1575540.6091370592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1567938.3777402434,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1567841.8212478948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1582172.998299371,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1582096.0884353758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 895410.3417132709,
            "unit": "ns/iter",
            "extra": "iterations: 1074\ncpu: 895378.58472998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1518478.1143790025,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1518398.3660130785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5321485.059999987,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5321130.000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3338314.2142854794,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3338140.714285715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29163.96482697373,
            "unit": "ns/iter",
            "extra": "iterations: 28175\ncpu: 29162.66903283033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 146190.28066316512,
            "unit": "ns/iter",
            "extra": "iterations: 5911\ncpu: 146183.75909321514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 111281.34039256013,
            "unit": "ns/iter",
            "extra": "iterations: 7744\ncpu: 111272.9855371906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 106993.59678224042,
            "unit": "ns/iter",
            "extra": "iterations: 8018\ncpu: 106989.52357196283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103878.82895215067,
            "unit": "ns/iter",
            "extra": "iterations: 8255\ncpu: 103874.2216838281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 297205.7808452552,
            "unit": "ns/iter",
            "extra": "iterations: 2934\ncpu: 297183.7423312896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1961038.4663865587,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1960912.3949579753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1529140.2639345655,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1529038.8524590177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1524747.9034368852,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1524709.4926350168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1534187.3234322793,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1534095.7095709578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 845807.3254329105,
            "unit": "ns/iter",
            "extra": "iterations: 1097\ncpu: 845782.7711941701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1485106.2468153848,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1485014.8089172032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3086.150374649672,
            "unit": "ns/iter",
            "extra": "iterations: 227279\ncpu: 3086.1188231204937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20449.55298623162,
            "unit": "ns/iter",
            "extra": "iterations: 34207\ncpu: 20448.607010260894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16442.94559579465,
            "unit": "ns/iter",
            "extra": "iterations: 42607\ncpu: 16442.204332621382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15784.91991254104,
            "unit": "ns/iter",
            "extra": "iterations: 44364\ncpu: 15784.086196014736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11864.829253397971,
            "unit": "ns/iter",
            "extra": "iterations: 58947\ncpu: 11864.32727704542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 113096.73653659107,
            "unit": "ns/iter",
            "extra": "iterations: 6202\ncpu: 113089.68074814537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 134654.2011130327,
            "unit": "ns/iter",
            "extra": "iterations: 5211\ncpu: 134646.6129341769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33086.46133509246,
            "unit": "ns/iter",
            "extra": "iterations: 21182\ncpu: 33084.93060145385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33375.30922621569,
            "unit": "ns/iter",
            "extra": "iterations: 20962\ncpu: 33374.02919568715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33077.397391672275,
            "unit": "ns/iter",
            "extra": "iterations: 21163\ncpu: 33075.9249633795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 64827.181068814054,
            "unit": "ns/iter",
            "extra": "iterations: 10797\ncpu: 64823.08048532025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61672.0544829398,
            "unit": "ns/iter",
            "extra": "iterations: 11343\ncpu: 61669.75227012251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24609.93550648642,
            "unit": "ns/iter",
            "extra": "iterations: 28530\ncpu: 24608.99053627789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119092.03465262332,
            "unit": "ns/iter",
            "extra": "iterations: 5887\ncpu: 119090.79327331406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 97171.55550930186,
            "unit": "ns/iter",
            "extra": "iterations: 7206\ncpu: 97166.86094920868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95718.40802537363,
            "unit": "ns/iter",
            "extra": "iterations: 7252\ncpu: 95715.12686155617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95434.04316448992,
            "unit": "ns/iter",
            "extra": "iterations: 7344\ncpu: 95428.97603485851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 169680.36734694926,
            "unit": "ns/iter",
            "extra": "iterations: 4116\ncpu: 169673.25072886466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 580774.8251864499,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 580768.6826843473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 476229.4632653219,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 476213.74149659206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 476047.2768708143,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 476016.66666666267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 469292.0636302864,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 469272.20361687726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 306112.06555944576,
            "unit": "ns/iter",
            "extra": "iterations: 2288\ncpu: 306090.3409090905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 466385.19440744125,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 466353.2623169071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24867.114055624836,
            "unit": "ns/iter",
            "extra": "iterations: 28188\ncpu: 24865.453384419096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 123457.7878306913,
            "unit": "ns/iter",
            "extra": "iterations: 5670\ncpu: 123452.9629629626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 99334.79715504327,
            "unit": "ns/iter",
            "extra": "iterations: 7030\ncpu: 99329.35988620245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 99596.90508666167,
            "unit": "ns/iter",
            "extra": "iterations: 7038\ncpu: 99588.61892583052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 99819.36708500514,
            "unit": "ns/iter",
            "extra": "iterations: 7012\ncpu: 99814.56075299531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 174536.198801218,
            "unit": "ns/iter",
            "extra": "iterations: 4004\ncpu: 174532.36763236797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 583248.4462050879,
            "unit": "ns/iter",
            "extra": "iterations: 1199\ncpu: 583225.6046705563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 479526.7958903822,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 479504.52054793737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 472907.7729729477,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 472881.14864864806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 472659.8836265254,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 472639.51285521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 304643.68804161355,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 304627.1663778168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 466613.76419501,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 466581.96392785246 ns\nthreads: 1"
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
        "date": 1702392472637,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8283.39441457124,
            "unit": "ns/iter",
            "extra": "iterations: 84434\ncpu: 8283.062510363125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59584.14719999609,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59583.53 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 110358.01241679995,
            "unit": "ns/iter",
            "extra": "iterations: 7812\ncpu: 110353.0977982591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 159902.51421139753,
            "unit": "ns/iter",
            "extra": "iterations: 5383\ncpu: 159898.01226082118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 210307.33973267124,
            "unit": "ns/iter",
            "extra": "iterations: 4115\ncpu: 210300.92345078985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 260807.19246987242,
            "unit": "ns/iter",
            "extra": "iterations: 3320\ncpu: 260800.33132530132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 314444.2873481171,
            "unit": "ns/iter",
            "extra": "iterations: 2798\ncpu: 314413.65260900627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 361326.8250207677,
            "unit": "ns/iter",
            "extra": "iterations: 2406\ncpu: 361307.7722360763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 411506.4616477176,
            "unit": "ns/iter",
            "extra": "iterations: 2112\ncpu: 411486.7424242421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6809.070757059884,
            "unit": "ns/iter",
            "extra": "iterations: 102647\ncpu: 6808.844876128858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5625.200011254318,
            "unit": "ns/iter",
            "extra": "iterations: 124403\ncpu: 5624.94473605943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5614.254469081369,
            "unit": "ns/iter",
            "extra": "iterations: 124746\ncpu: 5614.103859041581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5638.577410392936,
            "unit": "ns/iter",
            "extra": "iterations: 124544\ncpu: 5638.347893114081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9772.899489974854,
            "unit": "ns/iter",
            "extra": "iterations: 71565\ncpu: 9772.703137008311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 32656.675262044293,
            "unit": "ns/iter",
            "extra": "iterations: 25091\ncpu: 32655.513929297394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 145115.4823113232,
            "unit": "ns/iter",
            "extra": "iterations: 5936\ncpu: 145104.51482479778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113401.7347318061,
            "unit": "ns/iter",
            "extra": "iterations: 7532\ncpu: 113393.64046733953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 112481.69398978661,
            "unit": "ns/iter",
            "extra": "iterations: 7637\ncpu: 112475.25206232829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 108672.7462039065,
            "unit": "ns/iter",
            "extra": "iterations: 7837\ncpu: 108666.07120071455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 381362.9717400075,
            "unit": "ns/iter",
            "extra": "iterations: 2477\ncpu: 381343.2781590628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1959269.4336841688,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1959138.105263155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1530424.6985172657,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1530358.8138385508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1534367.9323431351,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1534280.8580858097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1546975.3983334538,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1546868.9999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 850940.6209751503,
            "unit": "ns/iter",
            "extra": "iterations: 1087\ncpu: 850895.5841766348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1486154.2740383435,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1486101.6025641016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 39808.42517905835,
            "unit": "ns/iter",
            "extra": "iterations: 20803\ncpu: 39807.09513050999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 175167.02089675146,
            "unit": "ns/iter",
            "extra": "iterations: 4929\ncpu: 175158.75431121918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 141356.99195930493,
            "unit": "ns/iter",
            "extra": "iterations: 6094\ncpu: 141351.0666229079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 138525.25308146302,
            "unit": "ns/iter",
            "extra": "iterations: 6247\ncpu: 138522.01056507122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132477.20792693557,
            "unit": "ns/iter",
            "extra": "iterations: 6459\ncpu: 132470.2740362283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 338803.1684910212,
            "unit": "ns/iter",
            "extra": "iterations: 2558\ncpu: 338792.6505082102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1969917.5285412422,
            "unit": "ns/iter",
            "extra": "iterations: 473\ncpu: 1969829.598308657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1575603.1692048018,
            "unit": "ns/iter",
            "extra": "iterations: 591\ncpu: 1575540.6091370592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1567938.3777402434,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1567841.8212478948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1582172.998299371,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1582096.0884353758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 895410.3417132709,
            "unit": "ns/iter",
            "extra": "iterations: 1074\ncpu: 895378.58472998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1518478.1143790025,
            "unit": "ns/iter",
            "extra": "iterations: 612\ncpu: 1518398.3660130785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5321485.059999987,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5321130.000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3338314.2142854794,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3338140.714285715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29163.96482697373,
            "unit": "ns/iter",
            "extra": "iterations: 28175\ncpu: 29162.66903283033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 146190.28066316512,
            "unit": "ns/iter",
            "extra": "iterations: 5911\ncpu: 146183.75909321514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 111281.34039256013,
            "unit": "ns/iter",
            "extra": "iterations: 7744\ncpu: 111272.9855371906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 106993.59678224042,
            "unit": "ns/iter",
            "extra": "iterations: 8018\ncpu: 106989.52357196283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103878.82895215067,
            "unit": "ns/iter",
            "extra": "iterations: 8255\ncpu: 103874.2216838281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 297205.7808452552,
            "unit": "ns/iter",
            "extra": "iterations: 2934\ncpu: 297183.7423312896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1961038.4663865587,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1960912.3949579753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1529140.2639345655,
            "unit": "ns/iter",
            "extra": "iterations: 610\ncpu: 1529038.8524590177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1524747.9034368852,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1524709.4926350168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1534187.3234322793,
            "unit": "ns/iter",
            "extra": "iterations: 606\ncpu: 1534095.7095709578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 845807.3254329105,
            "unit": "ns/iter",
            "extra": "iterations: 1097\ncpu: 845782.7711941701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1485106.2468153848,
            "unit": "ns/iter",
            "extra": "iterations: 628\ncpu: 1485014.8089172032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3086.150374649672,
            "unit": "ns/iter",
            "extra": "iterations: 227279\ncpu: 3086.1188231204937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20449.55298623162,
            "unit": "ns/iter",
            "extra": "iterations: 34207\ncpu: 20448.607010260894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16442.94559579465,
            "unit": "ns/iter",
            "extra": "iterations: 42607\ncpu: 16442.204332621382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15784.91991254104,
            "unit": "ns/iter",
            "extra": "iterations: 44364\ncpu: 15784.086196014736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11864.829253397971,
            "unit": "ns/iter",
            "extra": "iterations: 58947\ncpu: 11864.32727704542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 113096.73653659107,
            "unit": "ns/iter",
            "extra": "iterations: 6202\ncpu: 113089.68074814537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 134654.2011130327,
            "unit": "ns/iter",
            "extra": "iterations: 5211\ncpu: 134646.6129341769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33086.46133509246,
            "unit": "ns/iter",
            "extra": "iterations: 21182\ncpu: 33084.93060145385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33375.30922621569,
            "unit": "ns/iter",
            "extra": "iterations: 20962\ncpu: 33374.02919568715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33077.397391672275,
            "unit": "ns/iter",
            "extra": "iterations: 21163\ncpu: 33075.9249633795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 64827.181068814054,
            "unit": "ns/iter",
            "extra": "iterations: 10797\ncpu: 64823.08048532025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 61672.0544829398,
            "unit": "ns/iter",
            "extra": "iterations: 11343\ncpu: 61669.75227012251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24609.93550648642,
            "unit": "ns/iter",
            "extra": "iterations: 28530\ncpu: 24608.99053627789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 119092.03465262332,
            "unit": "ns/iter",
            "extra": "iterations: 5887\ncpu: 119090.79327331406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 97171.55550930186,
            "unit": "ns/iter",
            "extra": "iterations: 7206\ncpu: 97166.86094920868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95718.40802537363,
            "unit": "ns/iter",
            "extra": "iterations: 7252\ncpu: 95715.12686155617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95434.04316448992,
            "unit": "ns/iter",
            "extra": "iterations: 7344\ncpu: 95428.97603485851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 169680.36734694926,
            "unit": "ns/iter",
            "extra": "iterations: 4116\ncpu: 169673.25072886466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 580774.8251864499,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 580768.6826843473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 476229.4632653219,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 476213.74149659206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 476047.2768708143,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 476016.66666666267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 469292.0636302864,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 469272.20361687726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 306112.06555944576,
            "unit": "ns/iter",
            "extra": "iterations: 2288\ncpu: 306090.3409090905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 466385.19440744125,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 466353.2623169071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24867.114055624836,
            "unit": "ns/iter",
            "extra": "iterations: 28188\ncpu: 24865.453384419096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 123457.7878306913,
            "unit": "ns/iter",
            "extra": "iterations: 5670\ncpu: 123452.9629629626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 99334.79715504327,
            "unit": "ns/iter",
            "extra": "iterations: 7030\ncpu: 99329.35988620245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 99596.90508666167,
            "unit": "ns/iter",
            "extra": "iterations: 7038\ncpu: 99588.61892583052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 99819.36708500514,
            "unit": "ns/iter",
            "extra": "iterations: 7012\ncpu: 99814.56075299531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 174536.198801218,
            "unit": "ns/iter",
            "extra": "iterations: 4004\ncpu: 174532.36763236797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 583248.4462050879,
            "unit": "ns/iter",
            "extra": "iterations: 1199\ncpu: 583225.6046705563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 479526.7958903822,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 479504.52054793737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 472907.7729729477,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 472881.14864864806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 472659.8836265254,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 472639.51285521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 304643.68804161355,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 304627.1663778168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 466613.76419501,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 466581.96392785246 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}