window.BENCHMARK_DATA = {
  "lastUpdate": 1702394208318,
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
        "date": 1702394207521,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9062.760528059482,
            "unit": "ns/iter",
            "extra": "iterations: 76961\ncpu: 9062.865607255624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 106971.02228900643,
            "unit": "ns/iter",
            "extra": "iterations: 7986\ncpu: 106972.26396193338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 207488.99716044246,
            "unit": "ns/iter",
            "extra": "iterations: 4226\ncpu: 207490.08518693794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 308936.2251798628,
            "unit": "ns/iter",
            "extra": "iterations: 2780\ncpu: 308925.6474820144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 405247.2461176769,
            "unit": "ns/iter",
            "extra": "iterations: 2125\ncpu: 405251.811764706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 500610.7154424867,
            "unit": "ns/iter",
            "extra": "iterations: 1729\ncpu: 500592.5390399076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 599030.7890033989,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 599008.3848797255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 559721.4829999757,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559675.9999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 644795.2370000393,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 644747.6999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 7207.053548613164,
            "unit": "ns/iter",
            "extra": "iterations: 97052\ncpu: 7207.077649095324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5941.347098651255,
            "unit": "ns/iter",
            "extra": "iterations: 117566\ncpu: 5940.958270248209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5826.823355659707,
            "unit": "ns/iter",
            "extra": "iterations: 120185\ncpu: 5826.541581728156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5929.582551507705,
            "unit": "ns/iter",
            "extra": "iterations: 117993\ncpu: 5929.382251489488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 10548.633776947054,
            "unit": "ns/iter",
            "extra": "iterations: 66424\ncpu: 10548.1587980248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 58660.909373241135,
            "unit": "ns/iter",
            "extra": "iterations: 14168\ncpu: 58658.89328063238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 213100.59885315676,
            "unit": "ns/iter",
            "extra": "iterations: 4011\ncpu: 213090.6008476688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 184193.70374243724,
            "unit": "ns/iter",
            "extra": "iterations: 4783\ncpu: 184188.8772736777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 175309.05414274655,
            "unit": "ns/iter",
            "extra": "iterations: 4876\ncpu: 175303.40442986018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 178803.76994124675,
            "unit": "ns/iter",
            "extra": "iterations: 4764\ncpu: 178796.24265323248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 398253.96757991565,
            "unit": "ns/iter",
            "extra": "iterations: 2190\ncpu: 398234.2465753416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3275519.6236932045,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3275412.5435540085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2711182.5520231877,
            "unit": "ns/iter",
            "extra": "iterations: 346\ncpu: 2711105.2023121403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2662146.9971750574,
            "unit": "ns/iter",
            "extra": "iterations: 354\ncpu: 2661969.209039547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2691175.590778045,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2691097.4063400575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1587391.9897786302,
            "unit": "ns/iter",
            "extra": "iterations: 587\ncpu: 1587346.848381605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2599529.8879550076,
            "unit": "ns/iter",
            "extra": "iterations: 357\ncpu: 2599443.1372549036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 11054698.333333353,
            "unit": "ns/iter",
            "extra": "iterations: 96\ncpu: 11054149.999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 6307018.77702683,
            "unit": "ns/iter",
            "extra": "iterations: 148\ncpu: 6306687.162162158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 13341699.227847625,
            "unit": "ns/iter",
            "extra": "iterations: 79\ncpu: 13341181.012658227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 53449.62147442236,
            "unit": "ns/iter",
            "extra": "iterations: 15423\ncpu: 53447.19574661225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 222275.27972938222,
            "unit": "ns/iter",
            "extra": "iterations: 3843\ncpu: 222267.34322144263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 181034.76896847005,
            "unit": "ns/iter",
            "extra": "iterations: 4692\ncpu: 181026.8542199492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 175203.17827068217,
            "unit": "ns/iter",
            "extra": "iterations: 4869\ncpu: 175193.71534195956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 179553.50189634933,
            "unit": "ns/iter",
            "extra": "iterations: 4746\ncpu: 179547.23978086858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 414348.068571447,
            "unit": "ns/iter",
            "extra": "iterations: 2100\ncpu: 414344.9523809532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3304089.8333331933,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3304030.496453903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2723955.8976607868,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2723733.6257309895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2694594.761494343,
            "unit": "ns/iter",
            "extra": "iterations: 348\ncpu: 2694501.4367816243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2742951.964705753,
            "unit": "ns/iter",
            "extra": "iterations: 340\ncpu: 2742879.705882368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1607958.9257340035,
            "unit": "ns/iter",
            "extra": "iterations: 579\ncpu: 1607901.7271157128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2636219.532578072,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2636131.1614731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 11274247.670213114,
            "unit": "ns/iter",
            "extra": "iterations: 94\ncpu: 11273872.340425478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6509421.284722489,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6509252.777777745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 55441.23644237112,
            "unit": "ns/iter",
            "extra": "iterations: 15010\ncpu: 55428.58760826083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 215105.0215971745,
            "unit": "ns/iter",
            "extra": "iterations: 3982\ncpu: 215101.25565042722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 177677.08397421532,
            "unit": "ns/iter",
            "extra": "iterations: 4811\ncpu: 177670.9623778833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 180600.96204933783,
            "unit": "ns/iter",
            "extra": "iterations: 4743\ncpu: 180594.32848408245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 181676.65498195117,
            "unit": "ns/iter",
            "extra": "iterations: 4707\ncpu: 181672.10537497397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 400091.02713888726,
            "unit": "ns/iter",
            "extra": "iterations: 2174\ncpu: 400086.5685372595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3310609.2198583144,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3310499.9999999907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2719967.174927167,
            "unit": "ns/iter",
            "extra": "iterations: 343\ncpu: 2719877.5510204104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2706308.149855714,
            "unit": "ns/iter",
            "extra": "iterations: 347\ncpu: 2706233.1412103837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2721567.1257311027,
            "unit": "ns/iter",
            "extra": "iterations: 342\ncpu: 2721554.9707602197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1617068.309440685,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1616992.6573426535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2652385.0708213164,
            "unit": "ns/iter",
            "extra": "iterations: 353\ncpu: 2652269.121813027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3249.2762311447027,
            "unit": "ns/iter",
            "extra": "iterations: 216851\ncpu: 3249.317734296794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 22930.227558640105,
            "unit": "ns/iter",
            "extra": "iterations: 30524\ncpu: 22930.140217533783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16578.190612710638,
            "unit": "ns/iter",
            "extra": "iterations: 42206\ncpu: 16578.08842344681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 17442.223873897987,
            "unit": "ns/iter",
            "extra": "iterations: 40094\ncpu: 17442.023744201102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 13458.32956231746,
            "unit": "ns/iter",
            "extra": "iterations: 51887\ncpu: 13458.105113034177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 92666.03542630364,
            "unit": "ns/iter",
            "extra": "iterations: 7565\ncpu: 92666.33179114462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 213991.62063686587,
            "unit": "ns/iter",
            "extra": "iterations: 3266\ncpu: 213980.43478260573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 52618.78455406824,
            "unit": "ns/iter",
            "extra": "iterations: 13298\ncpu: 52617.41615280468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 52249.35413869933,
            "unit": "ns/iter",
            "extra": "iterations: 13410\ncpu: 52249.51528709905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 52381.283875793524,
            "unit": "ns/iter",
            "extra": "iterations: 13365\ncpu: 52378.51851851819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 101906.77140398363,
            "unit": "ns/iter",
            "extra": "iterations: 6973\ncpu: 101904.20192169772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 98564.47096048316,
            "unit": "ns/iter",
            "extra": "iterations: 7111\ncpu: 98556.58838419369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 29643.257377531532,
            "unit": "ns/iter",
            "extra": "iterations: 23619\ncpu: 29641.940810364013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 144763.28651219458,
            "unit": "ns/iter",
            "extra": "iterations: 4834\ncpu: 144757.5299958615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 116527.73601863945,
            "unit": "ns/iter",
            "extra": "iterations: 6008\ncpu: 116527.59653794851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 114406.83248564875,
            "unit": "ns/iter",
            "extra": "iterations: 6095\ncpu: 114408.28547990065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 117647.56332321276,
            "unit": "ns/iter",
            "extra": "iterations: 5922\ncpu: 117640.40864572646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 206986.59774882262,
            "unit": "ns/iter",
            "extra": "iterations: 3376\ncpu: 206977.8732227521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 912686.8424478295,
            "unit": "ns/iter",
            "extra": "iterations: 768\ncpu: 912645.5729166669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 765267.1794310393,
            "unit": "ns/iter",
            "extra": "iterations: 914\ncpu: 765253.2822757021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 762323.0195228028,
            "unit": "ns/iter",
            "extra": "iterations: 922\ncpu: 762331.9956616034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 770155.516519884,
            "unit": "ns/iter",
            "extra": "iterations: 908\ncpu: 770126.1013215873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 495379.0658174413,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 495371.19603679504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 749858.0557342218,
            "unit": "ns/iter",
            "extra": "iterations: 933\ncpu: 749867.8456591598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 29269.018480579158,
            "unit": "ns/iter",
            "extra": "iterations: 23917\ncpu: 29269.385792532637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 142931.3024400216,
            "unit": "ns/iter",
            "extra": "iterations: 4877\ncpu: 142925.8150502377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 115756.69725983775,
            "unit": "ns/iter",
            "extra": "iterations: 6058\ncpu: 115752.34400792408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 114024.45389262089,
            "unit": "ns/iter",
            "extra": "iterations: 6127\ncpu: 114018.80202382973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 115926.71314740751,
            "unit": "ns/iter",
            "extra": "iterations: 6024\ncpu: 115924.8007968121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 206406.94604952453,
            "unit": "ns/iter",
            "extra": "iterations: 3392\ncpu: 206399.0860849041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 909632.3623377619,
            "unit": "ns/iter",
            "extra": "iterations: 770\ncpu: 909634.9350649199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 771538.9626783859,
            "unit": "ns/iter",
            "extra": "iterations: 911\ncpu: 771512.9527991212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 763130.8671023279,
            "unit": "ns/iter",
            "extra": "iterations: 918\ncpu: 763101.1982570805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 763853.2893012211,
            "unit": "ns/iter",
            "extra": "iterations: 916\ncpu: 763840.0655021756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 494850.4471831513,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 494822.9577464813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 750850.9381003231,
            "unit": "ns/iter",
            "extra": "iterations: 937\ncpu: 750816.2219850519 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}