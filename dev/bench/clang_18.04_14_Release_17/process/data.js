window.BENCHMARK_DATA = {
  "lastUpdate": 1702492951455,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-14 18.04 Release c++-17": [
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
        "date": 1702490317308,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1460.3841341091322,
            "unit": "ns/iter",
            "extra": "iterations: 487007\ncpu: 1460.306730704076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16500.534681905927,
            "unit": "ns/iter",
            "extra": "iterations: 49435\ncpu: 16500.09912005664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35032.63484426296,
            "unit": "ns/iter",
            "extra": "iterations: 23694\ncpu: 35030.27348695873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51690.85461641626,
            "unit": "ns/iter",
            "extra": "iterations: 16398\ncpu: 51615.81900231736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57806.92419999696,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57803.32999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72369.3327298194,
            "unit": "ns/iter",
            "extra": "iterations: 12151\ncpu: 72366.41428689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85967.74341453523,
            "unit": "ns/iter",
            "extra": "iterations: 10098\ncpu: 85962.12121212122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99021.93046847833,
            "unit": "ns/iter",
            "extra": "iterations: 8773\ncpu: 99015.05756297735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114695.11971364282,
            "unit": "ns/iter",
            "extra": "iterations: 7543\ncpu: 114689.46042688587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1226.6879717615848,
            "unit": "ns/iter",
            "extra": "iterations: 566891\ncpu: 1226.5726568246832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1000.274219397287,
            "unit": "ns/iter",
            "extra": "iterations: 697602\ncpu: 1000.2641907563346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1002.5376586600869,
            "unit": "ns/iter",
            "extra": "iterations: 699215\ncpu: 1002.4770635641388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 961.786064443144,
            "unit": "ns/iter",
            "extra": "iterations: 727836\ncpu: 961.7365725245817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1911.377633733545,
            "unit": "ns/iter",
            "extra": "iterations: 368251\ncpu: 1911.2808926520188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5684.766269999955,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5684.529999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31500.51867267716,
            "unit": "ns/iter",
            "extra": "iterations: 26188\ncpu: 31499.457766916148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 25153.082036385993,
            "unit": "ns/iter",
            "extra": "iterations: 32705\ncpu: 25151.88809050606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24129.922893411684,
            "unit": "ns/iter",
            "extra": "iterations: 33953\ncpu: 24129.08432244572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24510.36812235027,
            "unit": "ns/iter",
            "extra": "iterations: 33478\ncpu: 24507.521357309215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 72763.22650466714,
            "unit": "ns/iter",
            "extra": "iterations: 12428\ncpu: 72760.13035082094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 574797.16499995,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 574786.8999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 557780.1461640624,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 557754.4312169313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 561394.5935064524,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 561355.0649350637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 558519.3252551074,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 558508.6096938776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 332514.3802122729,
            "unit": "ns/iter",
            "extra": "iterations: 2638\ncpu: 332500.5307050801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 576853.3785385294,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 576813.2323897304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2379735.6445012013,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2379598.4654731485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1085428.9247685368,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1085337.9629629636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3325890.8250002963,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3325808.92857142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8551.437009756695,
            "unit": "ns/iter",
            "extra": "iterations: 98293\ncpu: 8551.166410629472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 45419.13201355875,
            "unit": "ns/iter",
            "extra": "iterations: 18286\ncpu: 45417.87706442094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 35006.117847268666,
            "unit": "ns/iter",
            "extra": "iterations: 23505\ncpu: 35004.56924058716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36062.982463449356,
            "unit": "ns/iter",
            "extra": "iterations: 24007\ncpu: 36060.07831049282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36063.19110138434,
            "unit": "ns/iter",
            "extra": "iterations: 23307\ncpu: 36061.63813446606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 84807.6609689414,
            "unit": "ns/iter",
            "extra": "iterations: 10238\ncpu: 84803.80933776089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 607595.6989999441,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 607556.2999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 608374.5031534232,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 608317.7295024549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 605793.2319444761,
            "unit": "ns/iter",
            "extra": "iterations: 1440\ncpu: 605765.9722222189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 599820.1865464207,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 599798.4049930656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 344976.50374458777,
            "unit": "ns/iter",
            "extra": "iterations: 2537\ncpu: 344950.926290895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 596719.5881148152,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 596682.035519125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2536507.8715847014,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2536508.4699453386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1133045.3671970698,
            "unit": "ns/iter",
            "extra": "iterations: 817\ncpu: 1133004.406364746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5633.085819999906,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5633.030999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 31126.288472398584,
            "unit": "ns/iter",
            "extra": "iterations: 26571\ncpu: 31124.357382108436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 24589.282379183645,
            "unit": "ns/iter",
            "extra": "iterations: 33625\ncpu: 24588.10408921927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24062.354678515476,
            "unit": "ns/iter",
            "extra": "iterations: 34434\ncpu: 24060.936864726576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 24207.039766084345,
            "unit": "ns/iter",
            "extra": "iterations: 34200\ncpu: 24206.292397660665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 71400.76658257181,
            "unit": "ns/iter",
            "extra": "iterations: 12287\ncpu: 71400.7568975343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 601001.5990000283,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600987.0999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 579702.0346702818,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 579695.9891230444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 574073.4973649586,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 574049.80237154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 575282.837467348,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 575271.605744125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 331719.92958299787,
            "unit": "ns/iter",
            "extra": "iterations: 2542\ncpu: 331713.3752950454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 570945.7550752874,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 570903.6018336578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 539.2855955561172,
            "unit": "ns/iter",
            "extra": "iterations: 1297065\ncpu: 539.2860804971231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3258.5912403314164,
            "unit": "ns/iter",
            "extra": "iterations: 214483\ncpu: 3258.506268562068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2438.1123645265907,
            "unit": "ns/iter",
            "extra": "iterations: 286772\ncpu: 2438.064385644345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2648.57085644773,
            "unit": "ns/iter",
            "extra": "iterations: 263180\ncpu: 2648.426552169607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2044.2495533627196,
            "unit": "ns/iter",
            "extra": "iterations: 342560\ncpu: 2044.250058383935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18156.10538780476,
            "unit": "ns/iter",
            "extra": "iterations: 38847\ncpu: 18115.25986562675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31630.571622230174,
            "unit": "ns/iter",
            "extra": "iterations: 22130\ncpu: 31630.56936285582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7546.180643908678,
            "unit": "ns/iter",
            "extra": "iterations: 92746\ncpu: 7545.9545425138385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7485.113888026406,
            "unit": "ns/iter",
            "extra": "iterations: 93469\ncpu: 7484.796028629859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7473.586140109985,
            "unit": "ns/iter",
            "extra": "iterations: 93969\ncpu: 7473.448690525516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14274.319601602128,
            "unit": "ns/iter",
            "extra": "iterations: 48695\ncpu: 14273.407947427977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13469.255656632462,
            "unit": "ns/iter",
            "extra": "iterations: 51886\ncpu: 13469.253748602685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5555.285770016675,
            "unit": "ns/iter",
            "extra": "iterations: 128166\ncpu: 5555.094954980215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26623.121083214766,
            "unit": "ns/iter",
            "extra": "iterations: 26329\ncpu: 26622.659424968544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21159.094180054148,
            "unit": "ns/iter",
            "extra": "iterations: 32990\ncpu: 21158.836010912484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21048.43349561504,
            "unit": "ns/iter",
            "extra": "iterations: 33276\ncpu: 21047.33742036322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21444.197321237487,
            "unit": "ns/iter",
            "extra": "iterations: 32627\ncpu: 21443.154442639305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48985.74248987624,
            "unit": "ns/iter",
            "extra": "iterations: 14314\ncpu: 48985.7272600256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160932.47698650474,
            "unit": "ns/iter",
            "extra": "iterations: 4367\ncpu: 160928.37188000762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134138.05532826314,
            "unit": "ns/iter",
            "extra": "iterations: 5133\ncpu: 134133.2943697627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131376.97040089543,
            "unit": "ns/iter",
            "extra": "iterations: 5338\ncpu: 131369.72648932302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132168.9322161467,
            "unit": "ns/iter",
            "extra": "iterations: 5311\ncpu: 132164.26285068915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83661.38769670331,
            "unit": "ns/iter",
            "extra": "iterations: 8388\ncpu: 83661.33762517858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131634.39029892467,
            "unit": "ns/iter",
            "extra": "iterations: 5319\ncpu: 131634.40496333782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5131.885647607761,
            "unit": "ns/iter",
            "extra": "iterations: 136263\ncpu: 5131.6578968611275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26050.377471163014,
            "unit": "ns/iter",
            "extra": "iterations: 26961\ncpu: 26048.755609954846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20801.04087573748,
            "unit": "ns/iter",
            "extra": "iterations: 33663\ncpu: 20800.020794343876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20442.633444465013,
            "unit": "ns/iter",
            "extra": "iterations: 34194\ncpu: 20442.247177867324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20793.919056797862,
            "unit": "ns/iter",
            "extra": "iterations: 33715\ncpu: 20792.979386029987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47235.034099337056,
            "unit": "ns/iter",
            "extra": "iterations: 14839\ncpu: 47231.90915829972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154083.5124148526,
            "unit": "ns/iter",
            "extra": "iterations: 4551\ncpu: 154077.03801362583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129140.84121436696,
            "unit": "ns/iter",
            "extra": "iterations: 5435\ncpu: 129136.55933762505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126319.56529581692,
            "unit": "ns/iter",
            "extra": "iterations: 5544\ncpu: 126312.51803751971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128470.94001463149,
            "unit": "ns/iter",
            "extra": "iterations: 5468\ncpu: 128469.51353328441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82057.00480374439,
            "unit": "ns/iter",
            "extra": "iterations: 8535\ncpu: 82054.89162273004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127695.54764073345,
            "unit": "ns/iter",
            "extra": "iterations: 5489\ncpu: 127690.43541628809 ns\nthreads: 1"
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
        "date": 1702492947860,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1426.0975829543436,
            "unit": "ns/iter",
            "extra": "iterations: 493826\ncpu: 1425.9915435801277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16778.82217857019,
            "unit": "ns/iter",
            "extra": "iterations: 49381\ncpu: 16778.220368157796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 36175.11288503464,
            "unit": "ns/iter",
            "extra": "iterations: 23050\ncpu: 36173.362255965294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52739.70870183413,
            "unit": "ns/iter",
            "extra": "iterations: 16169\ncpu: 52738.39445853179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58398.93630000006,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58394.570000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 73549.5443860968,
            "unit": "ns/iter",
            "extra": "iterations: 11997\ncpu: 73545.40301742103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 86570.71930875382,
            "unit": "ns/iter",
            "extra": "iterations: 10011\ncpu: 86566.93636999294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 100874.76160485372,
            "unit": "ns/iter",
            "extra": "iterations: 8574\ncpu: 100871.22696524371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 116704.02741585863,
            "unit": "ns/iter",
            "extra": "iterations: 7368\ncpu: 116702.71444082519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1269.0573057397742,
            "unit": "ns/iter",
            "extra": "iterations: 555878\ncpu: 1269.0291754665611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1011.5541827840449,
            "unit": "ns/iter",
            "extra": "iterations: 699558\ncpu: 1011.5388573928101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 985.1466904032023,
            "unit": "ns/iter",
            "extra": "iterations: 712262\ncpu: 985.1457750097583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 990.7064998644511,
            "unit": "ns/iter",
            "extra": "iterations: 705107\ncpu: 990.68311617953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1924.6294650076652,
            "unit": "ns/iter",
            "extra": "iterations: 364921\ncpu: 1924.6277961531384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5653.162470000552,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5653.075999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31844.59121161479,
            "unit": "ns/iter",
            "extra": "iterations: 25693\ncpu: 31843.607208188998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 25337.878045794743,
            "unit": "ns/iter",
            "extra": "iterations: 32668\ncpu: 25336.944410432232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24494.626945770382,
            "unit": "ns/iter",
            "extra": "iterations: 33727\ncpu: 24494.12933258215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24805.64766682526,
            "unit": "ns/iter",
            "extra": "iterations: 33088\ncpu: 24804.651233075438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 72110.04626479163,
            "unit": "ns/iter",
            "extra": "iterations: 12342\ncpu: 72108.15102900683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 559197.268000048,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559197.6999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 554137.6452228972,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 554131.8471337568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 573761.1388158228,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 573728.1578947362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 570228.0745381964,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 570209.5646438018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 331821.97445673833,
            "unit": "ns/iter",
            "extra": "iterations: 2623\ncpu: 331819.44338543696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 567493.9276485717,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 567459.7545219635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2396756.6417526347,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2396615.721649484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1105369.0465394435,
            "unit": "ns/iter",
            "extra": "iterations: 838\ncpu: 1105336.2768496403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3286920.273049673,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3286807.446808513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8727.114992965035,
            "unit": "ns/iter",
            "extra": "iterations: 95945\ncpu: 8726.568346448488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 45961.813145333086,
            "unit": "ns/iter",
            "extra": "iterations: 18014\ncpu: 45961.34117908303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36835.82828462031,
            "unit": "ns/iter",
            "extra": "iterations: 22514\ncpu: 36834.52962601026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36717.18220764967,
            "unit": "ns/iter",
            "extra": "iterations: 22875\ncpu: 36716.65136612026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 35867.89631555774,
            "unit": "ns/iter",
            "extra": "iterations: 23070\ncpu: 35867.52925877785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 85151.85006959806,
            "unit": "ns/iter",
            "extra": "iterations: 10058\ncpu: 85147.45476237795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 613593.8800000531,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 613584.8999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 611298.74639171,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 611274.0893470767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 594469.2440678378,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 594447.050847457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 598683.3303448544,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 598656.3448275877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 343241.1416241409,
            "unit": "ns/iter",
            "extra": "iterations: 2549\ncpu: 343222.518634759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 592194.0006816728,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 592178.5276073628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2519694.5479449336,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2519623.01369863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1135906.8317072499,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 1135861.8292682972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5583.21071000023,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5582.718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 31550.4260872916,
            "unit": "ns/iter",
            "extra": "iterations: 25821\ncpu: 31549.006622516572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 25002.722009250047,
            "unit": "ns/iter",
            "extra": "iterations: 32868\ncpu: 25002.068881586914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24016.789735344628,
            "unit": "ns/iter",
            "extra": "iterations: 34195\ncpu: 24016.13978651852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 24501.472607850847,
            "unit": "ns/iter",
            "extra": "iterations: 33495\ncpu: 24499.86565158972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 71419.54942097097,
            "unit": "ns/iter",
            "extra": "iterations: 12262\ncpu: 71417.7051052034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 576013.4820000076,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 575995.7 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 577450.9684418004,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 577425.9040105218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 573348.0249507453,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 573279.3171372308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 572549.9711665087,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 572496.5268676291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 339023.2338403427,
            "unit": "ns/iter",
            "extra": "iterations: 2630\ncpu: 339001.59695817257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 583035.7826666841,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 583018.9999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 541.7842445946758,
            "unit": "ns/iter",
            "extra": "iterations: 1296774\ncpu: 541.78361071397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3322.8629488438414,
            "unit": "ns/iter",
            "extra": "iterations: 211432\ncpu: 3322.8201029172546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2667.169286608955,
            "unit": "ns/iter",
            "extra": "iterations: 273034\ncpu: 2667.0700352337194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2684.8445927234775,
            "unit": "ns/iter",
            "extra": "iterations: 263617\ncpu: 2684.5560035961125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2055.071559272955,
            "unit": "ns/iter",
            "extra": "iterations: 341563\ncpu: 2054.9181263778564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18000.164344546134,
            "unit": "ns/iter",
            "extra": "iterations: 38973\ncpu: 17999.32004208057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32298.267401633762,
            "unit": "ns/iter",
            "extra": "iterations: 21679\ncpu: 32297.55523778815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7583.369503018473,
            "unit": "ns/iter",
            "extra": "iterations: 92619\ncpu: 7582.82857728977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7514.119669757038,
            "unit": "ns/iter",
            "extra": "iterations: 93265\ncpu: 7513.849782876744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7536.616756100508,
            "unit": "ns/iter",
            "extra": "iterations: 92993\ncpu: 7536.323164109031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15120.445330147268,
            "unit": "ns/iter",
            "extra": "iterations: 46040\ncpu: 15120.23892267579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14478.351004429911,
            "unit": "ns/iter",
            "extra": "iterations: 48535\ncpu: 14477.146389203812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5256.228245086354,
            "unit": "ns/iter",
            "extra": "iterations: 133602\ncpu: 5255.243933474021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26570.818612582832,
            "unit": "ns/iter",
            "extra": "iterations: 26380\ncpu: 26569.51099317657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21265.38370393203,
            "unit": "ns/iter",
            "extra": "iterations: 32830\ncpu: 21264.227840389693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21185.906505541985,
            "unit": "ns/iter",
            "extra": "iterations: 33018\ncpu: 21185.24441213859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22845.715290264037,
            "unit": "ns/iter",
            "extra": "iterations: 31144\ncpu: 22843.80619059869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49316.24860905326,
            "unit": "ns/iter",
            "extra": "iterations: 14199\ncpu: 49314.32495246221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159471.79713115128,
            "unit": "ns/iter",
            "extra": "iterations: 4392\ncpu: 159459.4262295068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133445.47236468436,
            "unit": "ns/iter",
            "extra": "iterations: 5265\ncpu: 133436.18233618143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131671.19684150082,
            "unit": "ns/iter",
            "extra": "iterations: 5319\ncpu: 131657.56721188163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132788.40117602673,
            "unit": "ns/iter",
            "extra": "iterations: 5272\ncpu: 132779.9506828549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83433.41149809473,
            "unit": "ns/iter",
            "extra": "iterations: 8384\ncpu: 83431.69131679284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132771.67974227676,
            "unit": "ns/iter",
            "extra": "iterations: 5277\ncpu: 132769.16808792856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5215.790462223419,
            "unit": "ns/iter",
            "extra": "iterations: 134329\ncpu: 5215.5416924119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25813.57713396339,
            "unit": "ns/iter",
            "extra": "iterations: 26992\ncpu: 25811.85906935402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20888.452366758054,
            "unit": "ns/iter",
            "extra": "iterations: 33548\ncpu: 20887.28985334441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20685.991754346993,
            "unit": "ns/iter",
            "extra": "iterations: 33836\ncpu: 20684.714505260712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21031.144886280224,
            "unit": "ns/iter",
            "extra": "iterations: 33371\ncpu: 21029.843277096938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47455.154897956425,
            "unit": "ns/iter",
            "extra": "iterations: 14700\ncpu: 47451.455782312245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 157935.81930137458,
            "unit": "ns/iter",
            "extra": "iterations: 4466\ncpu: 157927.63098970163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 131697.74436936597,
            "unit": "ns/iter",
            "extra": "iterations: 5328\ncpu: 131689.63963963912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129602.90133285357,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 129595.61273602577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 132026.81275795988,
            "unit": "ns/iter",
            "extra": "iterations: 5330\ncpu: 132025.04690431518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82740.3187098703,
            "unit": "ns/iter",
            "extra": "iterations: 6542\ncpu: 82735.38673188604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130411.64448599645,
            "unit": "ns/iter",
            "extra": "iterations: 5350\ncpu: 130404.24299065594 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}