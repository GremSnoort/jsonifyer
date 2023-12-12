window.BENCHMARK_DATA = {
  "lastUpdate": 1702392426500,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-11 18.04 Debug c++-17": [
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
        "date": 1702392425862,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9065.722641925098,
            "unit": "ns/iter",
            "extra": "iterations: 77171\ncpu: 9065.069780098742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 109605.39686584189,
            "unit": "ns/iter",
            "extra": "iterations: 7849\ncpu: 109600.45865715378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 212284.2406779521,
            "unit": "ns/iter",
            "extra": "iterations: 4130\ncpu: 212275.52058111384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 315796.6073374521,
            "unit": "ns/iter",
            "extra": "iterations: 2753\ncpu: 315788.41264075565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 413147.3840194198,
            "unit": "ns/iter",
            "extra": "iterations: 2065\ncpu: 413136.12590799027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 513377.2435446021,
            "unit": "ns/iter",
            "extra": "iterations: 1704\ncpu: 513364.3779342723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 611876.8079659275,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 611841.6785206258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 570248.9580000929,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 570242.6999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 651078.7409999921,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 651065.4000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7259.77356729583,
            "unit": "ns/iter",
            "extra": "iterations: 96426\ncpu: 7259.617737954497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5969.849619175635,
            "unit": "ns/iter",
            "extra": "iterations: 116983\ncpu: 5969.737483224059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5973.291659207603,
            "unit": "ns/iter",
            "extra": "iterations: 117315\ncpu: 5973.046072539746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 6012.979555294872,
            "unit": "ns/iter",
            "extra": "iterations: 116167\ncpu: 6012.910723355176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10456.132380881518,
            "unit": "ns/iter",
            "extra": "iterations: 66845\ncpu: 10456.017652778813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 53215.61353499935,
            "unit": "ns/iter",
            "extra": "iterations: 15471\ncpu: 53215.06043565373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 213900.93244935098,
            "unit": "ns/iter",
            "extra": "iterations: 3997\ncpu: 213896.64748561408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 175519.52873562882,
            "unit": "ns/iter",
            "extra": "iterations: 4872\ncpu: 175517.54926108356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 173744.7917261003,
            "unit": "ns/iter",
            "extra": "iterations: 4907\ncpu: 173733.93111881026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 177348.41097030902,
            "unit": "ns/iter",
            "extra": "iterations: 4813\ncpu: 177346.8522750888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 406210.4432457852,
            "unit": "ns/iter",
            "extra": "iterations: 2132\ncpu: 406199.577861164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3366392.814285746,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3366076.785714294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2745514.926686398,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2745385.3372434042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2744056.0117302593,
            "unit": "ns/iter",
            "extra": "iterations: 341\ncpu: 2744011.143695013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2755431.8635015003,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2755404.1543026716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1597999.4540728896,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1597938.3015597942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2653787.1346703405,
            "unit": "ns/iter",
            "extra": "iterations: 349\ncpu: 2653726.3610315146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 11082373.031579088,
            "unit": "ns/iter",
            "extra": "iterations: 95\ncpu: 11082008.421052635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6325718.869862918,
            "unit": "ns/iter",
            "extra": "iterations: 146\ncpu: 6325654.1095890375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 13607759.29487236,
            "unit": "ns/iter",
            "extra": "iterations: 78\ncpu: 13607271.794871787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 52576.687707003446,
            "unit": "ns/iter",
            "extra": "iterations: 15700\ncpu: 52575.197452229346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 224858.84243862858,
            "unit": "ns/iter",
            "extra": "iterations: 3789\ncpu: 224858.43230403858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 179361.11927180618,
            "unit": "ns/iter",
            "extra": "iterations: 4779\ncpu: 179352.16572504686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 174320.39359967905,
            "unit": "ns/iter",
            "extra": "iterations: 4906\ncpu: 174317.50917244088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 178604.0434964365,
            "unit": "ns/iter",
            "extra": "iterations: 4782\ncpu: 178596.8423253873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 414241.12583410024,
            "unit": "ns/iter",
            "extra": "iterations: 2098\ncpu: 414217.34985700675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3382638.3236365393,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3382422.1818181854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2784502.298507491,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2784444.4776119357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2783255.552238717,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2783075.820895516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2795323.859281453,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2795103.293413182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1630427.5429072033,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1630325.0437828475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2692573.1242772467,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2692464.1618497167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11369164.03191527,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11368539.361702107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6409599.687074871,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 6409192.517006844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 54080.93092447904,
            "unit": "ns/iter",
            "extra": "iterations: 15360\ncpu: 54077.77343750022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 224661.0500786614,
            "unit": "ns/iter",
            "extra": "iterations: 3814\ncpu: 224649.13476664986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 175314.11154558932,
            "unit": "ns/iter",
            "extra": "iterations: 4859\ncpu: 175301.95513480107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 179026.35349516876,
            "unit": "ns/iter",
            "extra": "iterations: 4778\ncpu: 179014.2946839679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 176944.60336940383,
            "unit": "ns/iter",
            "extra": "iterations: 4808\ncpu: 176934.92096505908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 403470.44967385684,
            "unit": "ns/iter",
            "extra": "iterations: 2146\ncpu: 403440.7269338316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3490330.0769233103,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3490213.186813183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2763295.979228467,
            "unit": "ns/iter",
            "extra": "iterations: 337\ncpu: 2763182.4925816073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2785284.913173399,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2785154.4910179707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2795144.924471335,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2794953.7764350437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1644315.9206349342,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1644201.0582010606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2702472.4840581864,
            "unit": "ns/iter",
            "extra": "iterations: 345\ncpu: 2702339.420289863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3322.9504543074513,
            "unit": "ns/iter",
            "extra": "iterations: 210210\ncpu: 3322.8837828837823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 22935.276667543643,
            "unit": "ns/iter",
            "extra": "iterations: 30524\ncpu: 22933.485126457657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 17282.929960801026,
            "unit": "ns/iter",
            "extra": "iterations: 40563\ncpu: 17281.838128343625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17341.66761744012,
            "unit": "ns/iter",
            "extra": "iterations: 40318\ncpu: 17340.788233543273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13519.759681402566,
            "unit": "ns/iter",
            "extra": "iterations: 51852\ncpu: 13518.96937437327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 93221.53487444103,
            "unit": "ns/iter",
            "extra": "iterations: 7527\ncpu: 93215.59718347233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 219574.65391849462,
            "unit": "ns/iter",
            "extra": "iterations: 3190\ncpu: 219560.1880877728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 53960.80103378985,
            "unit": "ns/iter",
            "extra": "iterations: 12962\ncpu: 53960.276191945166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 53440.69496304337,
            "unit": "ns/iter",
            "extra": "iterations: 13123\ncpu: 53437.48380705623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 53821.14657955232,
            "unit": "ns/iter",
            "extra": "iterations: 13010\ncpu: 53817.617217524654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 107240.80100948084,
            "unit": "ns/iter",
            "extra": "iterations: 6538\ncpu: 107233.29764453987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 90248.061454682,
            "unit": "ns/iter",
            "extra": "iterations: 7713\ncpu: 90246.14287566389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 29756.26371136913,
            "unit": "ns/iter",
            "extra": "iterations: 23393\ncpu: 29756.260419783932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 147643.43376292987,
            "unit": "ns/iter",
            "extra": "iterations: 4733\ncpu: 147643.31290935964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 119230.98039215831,
            "unit": "ns/iter",
            "extra": "iterations: 5865\ncpu: 119224.8763853371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 118644.8348002633,
            "unit": "ns/iter",
            "extra": "iterations: 5908\ncpu: 118636.15436696072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 120364.84890108414,
            "unit": "ns/iter",
            "extra": "iterations: 5824\ncpu: 120355.71771977856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 207002.88898703543,
            "unit": "ns/iter",
            "extra": "iterations: 3396\ncpu: 206989.2815076571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 934181.6146667649,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 934130.8000000102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 785182.7207206998,
            "unit": "ns/iter",
            "extra": "iterations: 888\ncpu: 785172.7477477498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 785000.4781635398,
            "unit": "ns/iter",
            "extra": "iterations: 893\ncpu: 784919.3729003429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 788218.4026995851,
            "unit": "ns/iter",
            "extra": "iterations: 889\ncpu: 788195.8380202372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 505457.3644859575,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 505435.9453630451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 767771.3059210166,
            "unit": "ns/iter",
            "extra": "iterations: 912\ncpu: 767753.9473684173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 29942.377561013836,
            "unit": "ns/iter",
            "extra": "iterations: 23477\ncpu: 29941.295736252578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 147697.1315178467,
            "unit": "ns/iter",
            "extra": "iterations: 4737\ncpu: 147692.3369221043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 118582.86808149608,
            "unit": "ns/iter",
            "extra": "iterations: 5890\ncpu: 118582.682512734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 117569.32194546977,
            "unit": "ns/iter",
            "extra": "iterations: 5942\ncpu: 117566.24032312434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 119187.37295641689,
            "unit": "ns/iter",
            "extra": "iterations: 5872\ncpu: 119187.22752043635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 207223.52869823028,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 207212.36686390484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 935639.3600000957,
            "unit": "ns/iter",
            "extra": "iterations: 750\ncpu: 935628.933333343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 786792.9797068352,
            "unit": "ns/iter",
            "extra": "iterations: 887\ncpu: 786791.8827508369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 784021.0112232509,
            "unit": "ns/iter",
            "extra": "iterations: 891\ncpu: 784003.5914702504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 784379.7281878688,
            "unit": "ns/iter",
            "extra": "iterations: 894\ncpu: 784308.5011185812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 500984.0149999718,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500941.5999999902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 766396.8140043276,
            "unit": "ns/iter",
            "extra": "iterations: 914\ncpu: 766374.3982494463 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}