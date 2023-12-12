window.BENCHMARK_DATA = {
  "lastUpdate": 1702392467869,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-13 20.04 Debug c++-17": [
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
        "date": 1702392467418,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7245.434755822571,
            "unit": "ns/iter",
            "extra": "iterations: 97388\ncpu: 7245.215016223765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51551.03470000313,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51549.53 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94465.89921711119,
            "unit": "ns/iter",
            "extra": "iterations: 9069\ncpu: 94464.94652111587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 136507.9324131314,
            "unit": "ns/iter",
            "extra": "iterations: 6303\ncpu: 136505.61637315567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 180847.53927681647,
            "unit": "ns/iter",
            "extra": "iterations: 4812\ncpu: 180847.5893599334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 223002.43627451424,
            "unit": "ns/iter",
            "extra": "iterations: 3876\ncpu: 222994.45304437558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 265898.9874310376,
            "unit": "ns/iter",
            "extra": "iterations: 3262\ncpu: 265876.3028816676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 309197.5838068447,
            "unit": "ns/iter",
            "extra": "iterations: 2816\ncpu: 309181.0014204546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 352240.74545457173,
            "unit": "ns/iter",
            "extra": "iterations: 2475\ncpu: 352219.43434343423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5880.528184925807,
            "unit": "ns/iter",
            "extra": "iterations: 119053\ncpu: 5880.188655472765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4844.398211914833,
            "unit": "ns/iter",
            "extra": "iterations: 144624\ncpu: 4843.935308109295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4824.486083209878,
            "unit": "ns/iter",
            "extra": "iterations: 144358\ncpu: 4824.087338422538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4873.160865992728,
            "unit": "ns/iter",
            "extra": "iterations: 143604\ncpu: 4873.101724185962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7706.427008946369,
            "unit": "ns/iter",
            "extra": "iterations: 90881\ncpu: 7705.931932967291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25657.653107774462,
            "unit": "ns/iter",
            "extra": "iterations: 31566\ncpu: 25656.47215358294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 131327.0111314321,
            "unit": "ns/iter",
            "extra": "iterations: 6558\ncpu: 131326.95943885323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 100763.61713882587,
            "unit": "ns/iter",
            "extra": "iterations: 8507\ncpu: 100761.2554366995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 98687.27911017943,
            "unit": "ns/iter",
            "extra": "iterations: 8631\ncpu: 98686.10821457536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 95075.98394341073,
            "unit": "ns/iter",
            "extra": "iterations: 8906\ncpu: 95074.96070065134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 220556.3993530659,
            "unit": "ns/iter",
            "extra": "iterations: 4019\ncpu: 220553.34660363218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1705262.769372704,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1705198.1549815496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1338305.7662339227,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1338266.378066377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1339817.2769010523,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1339775.4662840783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1326356.8300000576,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1326323.7142857115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 758526.5004095115,
            "unit": "ns/iter",
            "extra": "iterations: 1221\ncpu: 758509.0090090072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1297915.224089617,
            "unit": "ns/iter",
            "extra": "iterations: 714\ncpu: 1297876.3305322153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35286.06512164932,
            "unit": "ns/iter",
            "extra": "iterations: 23387\ncpu: 35285.71428571421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 169559.11454866375,
            "unit": "ns/iter",
            "extra": "iterations: 5107\ncpu: 169556.1582142162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 129489.36447051597,
            "unit": "ns/iter",
            "extra": "iterations: 6648\ncpu: 129487.9813477738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 129476.20681852206,
            "unit": "ns/iter",
            "extra": "iterations: 6629\ncpu: 129471.83587268082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 123579.3774156249,
            "unit": "ns/iter",
            "extra": "iterations: 6934\ncpu: 123574.5024516872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 243496.50815062394,
            "unit": "ns/iter",
            "extra": "iterations: 3558\ncpu: 243487.57729061315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1751085.615819091,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1751069.679849336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1377662.5103856567,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1377595.8456973326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1374097.0974889803,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1374082.5701624872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1355847.9240874562,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1355765.5474452544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 784938.22516559,
            "unit": "ns/iter",
            "extra": "iterations: 1208\ncpu: 784904.63576159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1327354.4857549153,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1327309.8290598341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6370367.431506802,
            "unit": "ns/iter",
            "extra": "iterations: 146\ncpu: 6370167.12328767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2889183.787037149,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2889049.3827160387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28095.53464096654,
            "unit": "ns/iter",
            "extra": "iterations: 29315\ncpu: 28093.747228381508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 142230.17371201274,
            "unit": "ns/iter",
            "extra": "iterations: 6056\ncpu: 142222.17635402892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 105040.65716033957,
            "unit": "ns/iter",
            "extra": "iterations: 8170\ncpu: 105039.09424724618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103388.10002399528,
            "unit": "ns/iter",
            "extra": "iterations: 8338\ncpu: 103386.35164308028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 98845.33163913828,
            "unit": "ns/iter",
            "extra": "iterations: 8657\ncpu: 98844.27630819027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 210551.9770752721,
            "unit": "ns/iter",
            "extra": "iterations: 4144\ncpu: 210547.4420849429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1721094.6549816462,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1721053.505535057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1336059.317596529,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1335986.4091559406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1348659.3424855892,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1348577.890173411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1313794.7633801661,
            "unit": "ns/iter",
            "extra": "iterations: 710\ncpu: 1313728.3098591552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 756372.2883833881,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 756334.3623070669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1299615.7832168245,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1299518.7412587383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2746.210611937262,
            "unit": "ns/iter",
            "extra": "iterations: 254487\ncpu: 2746.1084456180533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 17757.070059637335,
            "unit": "ns/iter",
            "extra": "iterations: 39238\ncpu: 17755.66797492243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14626.565101121447,
            "unit": "ns/iter",
            "extra": "iterations: 47864\ncpu: 14626.380996155805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 12699.235246124912,
            "unit": "ns/iter",
            "extra": "iterations: 55155\ncpu: 12699.07352007989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11085.314371304534,
            "unit": "ns/iter",
            "extra": "iterations: 63425\ncpu: 11084.673236105646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 74991.52064613209,
            "unit": "ns/iter",
            "extra": "iterations: 9348\ncpu: 74988.53230637511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 114283.93663463139,
            "unit": "ns/iter",
            "extra": "iterations: 6139\ncpu: 114276.78775044766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 28525.638035562522,
            "unit": "ns/iter",
            "extra": "iterations: 24577\ncpu: 28523.953289661258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 28619.31148745138,
            "unit": "ns/iter",
            "extra": "iterations: 24505\ncpu: 28618.175882473082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29042.618431956886,
            "unit": "ns/iter",
            "extra": "iterations: 24132\ncpu: 29041.41389027024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 58150.57767434383,
            "unit": "ns/iter",
            "extra": "iterations: 12031\ncpu: 58147.011885961125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54460.685311966976,
            "unit": "ns/iter",
            "extra": "iterations: 12854\ncpu: 54460.10580364093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21060.947807305085,
            "unit": "ns/iter",
            "extra": "iterations: 33338\ncpu: 21060.70550122984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 106343.8856189429,
            "unit": "ns/iter",
            "extra": "iterations: 6592\ncpu: 106337.83373786465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 85354.91707316563,
            "unit": "ns/iter",
            "extra": "iterations: 8200\ncpu: 85351.3048780498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 84150.73889555574,
            "unit": "ns/iter",
            "extra": "iterations: 8330\ncpu: 84143.27731092421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84768.51258471592,
            "unit": "ns/iter",
            "extra": "iterations: 8264\ncpu: 84766.59002904163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 129951.9161554225,
            "unit": "ns/iter",
            "extra": "iterations: 5379\ncpu: 129950.0278862238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 513054.64615386666,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 513019.4139194136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 423881.4736523391,
            "unit": "ns/iter",
            "extra": "iterations: 1651\ncpu: 423867.71653543593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 420760.9873874362,
            "unit": "ns/iter",
            "extra": "iterations: 1665\ncpu: 420749.7897897827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 420775.3062575432,
            "unit": "ns/iter",
            "extra": "iterations: 1662\ncpu: 420775.27075812704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 270425.3591032489,
            "unit": "ns/iter",
            "extra": "iterations: 2587\ncpu: 270419.9845380719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 412234.77095633635,
            "unit": "ns/iter",
            "extra": "iterations: 1694\ncpu: 412229.4569067251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21993.90904818659,
            "unit": "ns/iter",
            "extra": "iterations: 31918\ncpu: 21993.480167930065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 106184.53633481012,
            "unit": "ns/iter",
            "extra": "iterations: 6619\ncpu: 106184.48406103662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88406.9846425005,
            "unit": "ns/iter",
            "extra": "iterations: 7944\ncpu: 88403.94008056461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88516.93122628907,
            "unit": "ns/iter",
            "extra": "iterations: 7910\ncpu: 88513.71681415876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88299.96062594255,
            "unit": "ns/iter",
            "extra": "iterations: 7924\ncpu: 88296.23927309459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 135314.30312983744,
            "unit": "ns/iter",
            "extra": "iterations: 5176\ncpu: 135312.44204018652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 507251.7252349794,
            "unit": "ns/iter",
            "extra": "iterations: 1383\ncpu: 507251.2653651445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 419613.31856288406,
            "unit": "ns/iter",
            "extra": "iterations: 1670\ncpu: 419606.407185624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 420997.17098136933,
            "unit": "ns/iter",
            "extra": "iterations: 1661\ncpu: 420992.2335942189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 414881.30202140537,
            "unit": "ns/iter",
            "extra": "iterations: 1682\ncpu: 414875.5053507729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 271500.6101432342,
            "unit": "ns/iter",
            "extra": "iterations: 2583\ncpu: 271491.8312040271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 414085.7519241666,
            "unit": "ns/iter",
            "extra": "iterations: 1689\ncpu: 414079.27767909813 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}