window.BENCHMARK_DATA = {
  "lastUpdate": 1702394182584,
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
        "date": 1702394182199,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 8421.805613129558,
            "unit": "ns/iter",
            "extra": "iterations: 82984\ncpu: 8421.24144413381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 61158.140180230585,
            "unit": "ns/iter",
            "extra": "iterations: 13982\ncpu: 61155.95765984837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 111698.91709033572,
            "unit": "ns/iter",
            "extra": "iterations: 7671\ncpu: 111698.97014730806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 164754.43526276335,
            "unit": "ns/iter",
            "extra": "iterations: 5252\ncpu: 164749.94287890324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 214495.34579208167,
            "unit": "ns/iter",
            "extra": "iterations: 4040\ncpu: 214486.8316831682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 264504.9398289562,
            "unit": "ns/iter",
            "extra": "iterations: 3274\ncpu: 264491.50885766634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 314776.1023593456,
            "unit": "ns/iter",
            "extra": "iterations: 2755\ncpu: 314761.8511796731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 368943.3186813302,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 368926.45815722714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 418580.04420949775,
            "unit": "ns/iter",
            "extra": "iterations: 2081\ncpu: 418566.7467563674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6959.747000762673,
            "unit": "ns/iter",
            "extra": "iterations: 99692\ncpu: 6959.392930225095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5730.6743251843045,
            "unit": "ns/iter",
            "extra": "iterations: 122478\ncpu: 5730.290337856598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5705.353488712622,
            "unit": "ns/iter",
            "extra": "iterations: 122796\ncpu: 5705.156519756345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5663.915270499769,
            "unit": "ns/iter",
            "extra": "iterations: 124030\ncpu: 5663.896637910182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9969.446000368791,
            "unit": "ns/iter",
            "extra": "iterations: 70269\ncpu: 9969.01051672856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31052.473556229732,
            "unit": "ns/iter",
            "extra": "iterations: 26320\ncpu: 31051.671732522806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 141985.20151714262,
            "unit": "ns/iter",
            "extra": "iterations: 6064\ncpu: 141980.59036939315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 111925.1440755858,
            "unit": "ns/iter",
            "extra": "iterations: 7621\ncpu: 111921.04710667912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 111162.07794578077,
            "unit": "ns/iter",
            "extra": "iterations: 7672\ncpu: 111156.67361835238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 107492.89020997158,
            "unit": "ns/iter",
            "extra": "iterations: 7906\ncpu: 107488.76802428532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 359344.2425967889,
            "unit": "ns/iter",
            "extra": "iterations: 2634\ncpu: 359328.2839787392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1990697.8758029388,
            "unit": "ns/iter",
            "extra": "iterations: 467\ncpu: 1990615.8458244116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1531395.3278417978,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1531385.5024711697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1548679.6383333968,
            "unit": "ns/iter",
            "extra": "iterations: 600\ncpu: 1548647.833333335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1544436.0232557957,
            "unit": "ns/iter",
            "extra": "iterations: 602\ncpu: 1544383.7209302303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 856850.9517176974,
            "unit": "ns/iter",
            "extra": "iterations: 1077\ncpu: 856807.7065923832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1496450.4620355263,
            "unit": "ns/iter",
            "extra": "iterations: 619\ncpu: 1496399.838449115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 40589.63461724018,
            "unit": "ns/iter",
            "extra": "iterations: 20718\ncpu: 40588.39173665399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 175728.37334689783,
            "unit": "ns/iter",
            "extra": "iterations: 4915\ncpu: 175725.0050864702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 139681.13049117255,
            "unit": "ns/iter",
            "extra": "iterations: 6169\ncpu: 139680.90452261292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136068.65339024278,
            "unit": "ns/iter",
            "extra": "iterations: 6327\ncpu: 136066.55602971368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 133838.70388049545,
            "unit": "ns/iter",
            "extra": "iterations: 6494\ncpu: 133834.09300893135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 314745.22008699813,
            "unit": "ns/iter",
            "extra": "iterations: 2758\ncpu: 314742.02320522245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1995034.9188034455,
            "unit": "ns/iter",
            "extra": "iterations: 468\ncpu: 1994995.9401709454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1571494.5733556685,
            "unit": "ns/iter",
            "extra": "iterations: 593\ncpu: 1571470.9949409747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1587404.7619862556,
            "unit": "ns/iter",
            "extra": "iterations: 584\ncpu: 1587359.246575345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1586520.9880952407,
            "unit": "ns/iter",
            "extra": "iterations: 588\ncpu: 1586494.0476190506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 875307.9643191752,
            "unit": "ns/iter",
            "extra": "iterations: 1065\ncpu: 875289.8591549324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1529276.5172980535,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1529220.0988467846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 5363799.93999958,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 5363609.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3320827.5444841185,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3320749.822064055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29303.93218456493,
            "unit": "ns/iter",
            "extra": "iterations: 27914\ncpu: 29303.22060614733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 143168.63287532591,
            "unit": "ns/iter",
            "extra": "iterations: 5968\ncpu: 143167.610589812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 109792.87512806492,
            "unit": "ns/iter",
            "extra": "iterations: 7808\ncpu: 109790.9195696721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 105598.69893538035,
            "unit": "ns/iter",
            "extra": "iterations: 8078\ncpu: 105597.89551869256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103225.83736689971,
            "unit": "ns/iter",
            "extra": "iterations: 8264\ncpu: 103221.22458857733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 278356.77443126903,
            "unit": "ns/iter",
            "extra": "iterations: 3121\ncpu: 278349.15091316914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1979408.8195328908,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1979328.8747346122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1539330.9851729781,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1539269.1927512346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1544664.6842976466,
            "unit": "ns/iter",
            "extra": "iterations: 605\ncpu: 1544593.3884297574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1534188.2257002061,
            "unit": "ns/iter",
            "extra": "iterations: 607\ncpu: 1534179.4069192833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 847255.1506849712,
            "unit": "ns/iter",
            "extra": "iterations: 1095\ncpu: 847244.5662100402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1493396.9871794607,
            "unit": "ns/iter",
            "extra": "iterations: 624\ncpu: 1493341.5064102625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3083.82409891655,
            "unit": "ns/iter",
            "extra": "iterations: 228475\ncpu: 3083.723383302354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 20488.638858044807,
            "unit": "ns/iter",
            "extra": "iterations: 34222\ncpu: 20488.825901466967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 16433.601879188536,
            "unit": "ns/iter",
            "extra": "iterations: 42678\ncpu: 16433.28178452592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15813.323959910427,
            "unit": "ns/iter",
            "extra": "iterations: 44203\ncpu: 15813.155215709257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 12080.081513476749,
            "unit": "ns/iter",
            "extra": "iterations: 57880\ncpu: 12079.443676572208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 105093.3464637349,
            "unit": "ns/iter",
            "extra": "iterations: 6702\ncpu: 105089.83885407382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 136558.70622568522,
            "unit": "ns/iter",
            "extra": "iterations: 5140\ncpu: 136549.9221789874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 33692.19040493928,
            "unit": "ns/iter",
            "extra": "iterations: 20719\ncpu: 33690.873111636596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 33769.78283120806,
            "unit": "ns/iter",
            "extra": "iterations: 20712\ncpu: 33767.90266512164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 33648.607836537485,
            "unit": "ns/iter",
            "extra": "iterations: 20800\ncpu: 33647.43750000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 67209.21822542544,
            "unit": "ns/iter",
            "extra": "iterations: 10425\ncpu: 67205.09352518037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 62119.455668094684,
            "unit": "ns/iter",
            "extra": "iterations: 11256\ncpu: 62115.78713574922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 24840.3477475563,
            "unit": "ns/iter",
            "extra": "iterations: 28236\ncpu: 24839.261935118404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 117679.69515479179,
            "unit": "ns/iter",
            "extra": "iterations: 5944\ncpu: 117678.36473754987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 95600.1204704034,
            "unit": "ns/iter",
            "extra": "iterations: 7313\ncpu: 95597.0190072472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 95113.57467354905,
            "unit": "ns/iter",
            "extra": "iterations: 7352\ncpu: 95107.8073993474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 95435.55411669904,
            "unit": "ns/iter",
            "extra": "iterations: 7336\ncpu: 95430.83424209278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 171764.47230392948,
            "unit": "ns/iter",
            "extra": "iterations: 4080\ncpu: 171755.8333333344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 584565.698664419,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 584555.258764603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 476912.36655293277,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 476897.0648464115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 477920.5283276922,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 477911.5358361838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 472604.8006757322,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 472587.5000000053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 306577.3153744695,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 306574.20061322686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 474841.97658867255,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 474835.6521739112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 24664.850250408177,
            "unit": "ns/iter",
            "extra": "iterations: 28354\ncpu: 24664.572899767423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 125402.02221028479,
            "unit": "ns/iter",
            "extra": "iterations: 5583\ncpu: 125399.48056600468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 99259.28205127528,
            "unit": "ns/iter",
            "extra": "iterations: 7020\ncpu: 99257.94871794904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 99570.89658604824,
            "unit": "ns/iter",
            "extra": "iterations: 7030\ncpu: 99568.70554765267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 99862.4545068686,
            "unit": "ns/iter",
            "extra": "iterations: 7067\ncpu: 99859.19060421687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 177390.3323186022,
            "unit": "ns/iter",
            "extra": "iterations: 3942\ncpu: 177382.0395738212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 585631.0928869995,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 585612.0502092049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 483919.7692837897,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 483918.73278237303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 475199.8128813284,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 475198.9152542415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 476306.0136240231,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 476295.3678474177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 307855.8649247053,
            "unit": "ns/iter",
            "extra": "iterations: 2258\ncpu: 307851.9043401246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 477747.46648798865,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 477731.3672922224 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}