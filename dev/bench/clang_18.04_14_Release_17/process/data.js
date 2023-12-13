window.BENCHMARK_DATA = {
  "lastUpdate": 1702490319043,
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
      }
    ]
  }
}