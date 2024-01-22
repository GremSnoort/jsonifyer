window.BENCHMARK_DATA = {
  "lastUpdate": 1705963556153,
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
        "date": 1702504022126,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1523.1691957132036,
            "unit": "ns/iter",
            "extra": "iterations: 477914\ncpu: 1523.0252723293315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16595.66229613051,
            "unit": "ns/iter",
            "extra": "iterations: 50032\ncpu: 16594.497521586185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35231.48100025779,
            "unit": "ns/iter",
            "extra": "iterations: 23474\ncpu: 35228.018232938586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52197.35297759478,
            "unit": "ns/iter",
            "extra": "iterations: 16154\ncpu: 52194.80004952332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58475.00620000119,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58469.22999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72424.94521789595,
            "unit": "ns/iter",
            "extra": "iterations: 12139\ncpu: 72419.70508279101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 87041.66321553747,
            "unit": "ns/iter",
            "extra": "iterations: 10045\ncpu: 87038.52663016427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99872.00185100365,
            "unit": "ns/iter",
            "extra": "iterations: 8644\ncpu: 99866.75150393338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115510.33514026346,
            "unit": "ns/iter",
            "extra": "iterations: 7379\ncpu: 115501.49071689941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1256.8536613764413,
            "unit": "ns/iter",
            "extra": "iterations: 558260\ncpu: 1256.8025651130272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 990.0622458494335,
            "unit": "ns/iter",
            "extra": "iterations: 708979\ncpu: 990.0352478705306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 982.2833647634641,
            "unit": "ns/iter",
            "extra": "iterations: 715343\ncpu: 982.1614246592187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 953.3056661607606,
            "unit": "ns/iter",
            "extra": "iterations: 728818\ncpu: 953.2514290261776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1910.3424370552282,
            "unit": "ns/iter",
            "extra": "iterations: 366114\ncpu: 1910.1604964573908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5366.635749999205,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5366.50700000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29967.658316414312,
            "unit": "ns/iter",
            "extra": "iterations: 27584\ncpu: 29966.426189095153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23852.89402054512,
            "unit": "ns/iter",
            "extra": "iterations: 34167\ncpu: 23851.298036116747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22424.878364880453,
            "unit": "ns/iter",
            "extra": "iterations: 37037\ncpu: 22423.814023813997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24401.245263849185,
            "unit": "ns/iter",
            "extra": "iterations: 33466\ncpu: 24400.959182453786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 71841.48037064077,
            "unit": "ns/iter",
            "extra": "iterations: 12303\ncpu: 71838.91733723474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 591297.0629999564,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 591252.9000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 567158.7511400242,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 567125.6677524422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 573677.6774193645,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 573675.1810401576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 576414.9433719261,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 576347.940797942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 334164.3565448965,
            "unit": "ns/iter",
            "extra": "iterations: 2628\ncpu: 334152.7777777777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 574219.3838051065,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 574212.6398946681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2390549.546153591,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2390492.564102559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1079954.1047730583,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 1079876.135040746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3305266.171428554,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3304846.0714285737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8630.334472296758,
            "unit": "ns/iter",
            "extra": "iterations: 99213\ncpu: 8629.981958009548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46255.82902186718,
            "unit": "ns/iter",
            "extra": "iterations: 18014\ncpu: 46256.10081048059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36146.393622149306,
            "unit": "ns/iter",
            "extra": "iterations: 22829\ncpu: 36144.81142406586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36138.44147301863,
            "unit": "ns/iter",
            "extra": "iterations: 23109\ncpu: 36138.63862564378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36001.92393280612,
            "unit": "ns/iter",
            "extra": "iterations: 23098\ncpu: 36001.34643692093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 84880.22515648683,
            "unit": "ns/iter",
            "extra": "iterations: 10224\ncpu: 84878.36463223748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 610560.8309999298,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 610548.7000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 610404.7855626399,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 610390.5874026885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 590331.0710305664,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 590278.6908077999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 599841.6210884119,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 599777.3469387726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 345569.4792000031,
            "unit": "ns/iter",
            "extra": "iterations: 2500\ncpu: 345544.4799999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 583284.259557339,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 583202.8839704876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2518905.062500086,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2518789.673913053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1130259.8479318456,
            "unit": "ns/iter",
            "extra": "iterations: 822\ncpu: 1130185.6447688567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5666.3132200003465,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5666.249000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 31137.5241999173,
            "unit": "ns/iter",
            "extra": "iterations: 26591\ncpu: 31135.320221127367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 24551.905296947974,
            "unit": "ns/iter",
            "extra": "iterations: 33642\ncpu: 24549.90785327859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23875.521998849952,
            "unit": "ns/iter",
            "extra": "iterations: 34820\ncpu: 23872.596209075327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23923.56829368396,
            "unit": "ns/iter",
            "extra": "iterations: 34132\ncpu: 23922.178600726613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70761.04293380771,
            "unit": "ns/iter",
            "extra": "iterations: 12298\ncpu: 70753.62660595238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 588762.5929999558,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 588706.700000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 591047.0936255315,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 591029.0836653423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 579762.9188641065,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 579752.2650439483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 578180.5658761766,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 578182.9380764188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 334568.3785633206,
            "unit": "ns/iter",
            "extra": "iterations: 2631\ncpu: 334563.473964273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 568685.027116375,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 568676.6534391547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 540.9963363778176,
            "unit": "ns/iter",
            "extra": "iterations: 1291072\ncpu: 540.9853981807364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3254.6086343130714,
            "unit": "ns/iter",
            "extra": "iterations: 214771\ncpu: 3254.5855818523073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2428.375480737581,
            "unit": "ns/iter",
            "extra": "iterations: 287839\ncpu: 2428.3401484857864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2557.890098115697,
            "unit": "ns/iter",
            "extra": "iterations: 273453\ncpu: 2557.925859288429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2054.62468339456,
            "unit": "ns/iter",
            "extra": "iterations: 342303\ncpu: 2054.4736680660258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17985.95025667142,
            "unit": "ns/iter",
            "extra": "iterations: 38960\ncpu: 17985.082135523742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32324.42434331825,
            "unit": "ns/iter",
            "extra": "iterations: 21624\ncpu: 32321.503884572856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7592.237790319019,
            "unit": "ns/iter",
            "extra": "iterations: 92140\ncpu: 7591.869980464477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7550.93676054075,
            "unit": "ns/iter",
            "extra": "iterations: 93565\ncpu: 7550.327579757435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7536.213948273118,
            "unit": "ns/iter",
            "extra": "iterations: 91868\ncpu: 7536.021247877389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14790.025142083432,
            "unit": "ns/iter",
            "extra": "iterations: 47331\ncpu: 14790.095286387319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14222.042578928822,
            "unit": "ns/iter",
            "extra": "iterations: 49602\ncpu: 14220.529414136508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5265.200558127099,
            "unit": "ns/iter",
            "extra": "iterations: 133303\ncpu: 5265.001537849883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26532.774130832906,
            "unit": "ns/iter",
            "extra": "iterations: 26232\ncpu: 26530.218816712735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21345.27899514347,
            "unit": "ns/iter",
            "extra": "iterations: 32721\ncpu: 21345.371473976706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21261.84496194941,
            "unit": "ns/iter",
            "extra": "iterations: 32850\ncpu: 21261.680365297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21757.598273280597,
            "unit": "ns/iter",
            "extra": "iterations: 32084\ncpu: 21757.922952250476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48669.32905565372,
            "unit": "ns/iter",
            "extra": "iterations: 14338\ncpu: 48668.573022737066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 163686.14079008048,
            "unit": "ns/iter",
            "extra": "iterations: 4354\ncpu: 163677.35415709607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 137524.86802130137,
            "unit": "ns/iter",
            "extra": "iterations: 5069\ncpu: 137509.4693233376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 134457.85876031162,
            "unit": "ns/iter",
            "extra": "iterations: 5211\ncpu: 134449.29955862783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 136335.01220693844,
            "unit": "ns/iter",
            "extra": "iterations: 5161\ncpu: 136334.6832009308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 85067.90345664442,
            "unit": "ns/iter",
            "extra": "iterations: 8245\ncpu: 85059.72104305733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 135488.16408968068,
            "unit": "ns/iter",
            "extra": "iterations: 5174\ncpu: 135480.18940858156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5146.269874968791,
            "unit": "ns/iter",
            "extra": "iterations: 136126\ncpu: 5145.871472018581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25962.643505722594,
            "unit": "ns/iter",
            "extra": "iterations: 25330\ncpu: 25961.034346624776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20622.49905632573,
            "unit": "ns/iter",
            "extra": "iterations: 33910\ncpu: 20620.710704807072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20393.708557159232,
            "unit": "ns/iter",
            "extra": "iterations: 34439\ncpu: 20391.759342605925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20948.428212114373,
            "unit": "ns/iter",
            "extra": "iterations: 33397\ncpu: 20947.07608467813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 53874.45073774417,
            "unit": "ns/iter",
            "extra": "iterations: 14707\ncpu: 53865.93458897149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 159626.8162014969,
            "unit": "ns/iter",
            "extra": "iterations: 4407\ncpu: 159612.2532334933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 131764.71229476994,
            "unit": "ns/iter",
            "extra": "iterations: 5238\ncpu: 131760.93928980402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129266.35081241453,
            "unit": "ns/iter",
            "extra": "iterations: 5416\ncpu: 129267.4298375175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130455.48910815663,
            "unit": "ns/iter",
            "extra": "iterations: 5371\ncpu: 130453.82610314815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82159.8399197864,
            "unit": "ns/iter",
            "extra": "iterations: 8477\ncpu: 82161.03574377784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130694.85067706188,
            "unit": "ns/iter",
            "extra": "iterations: 5391\ncpu: 130682.54498237962 ns\nthreads: 1"
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
        "date": 1705575641759,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1434.0801951603114,
            "unit": "ns/iter",
            "extra": "iterations: 478171\ncpu: 1434.0317585131681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16730.056176583643,
            "unit": "ns/iter",
            "extra": "iterations: 49291\ncpu: 16729.64435698201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34891.22064461886,
            "unit": "ns/iter",
            "extra": "iterations: 23735\ncpu: 34890.99641879081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52060.78331380804,
            "unit": "ns/iter",
            "extra": "iterations: 16217\ncpu: 52060.04193130668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57615.2142000069,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57615.160000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 73556.32055202324,
            "unit": "ns/iter",
            "extra": "iterations: 12101\ncpu: 73557.02834476491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 87312.11257545227,
            "unit": "ns/iter",
            "extra": "iterations: 9940\ncpu: 87309.79879275657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 101431.16079757187,
            "unit": "ns/iter",
            "extra": "iterations: 8576\ncpu: 101430.45708955225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 117263.30910083567,
            "unit": "ns/iter",
            "extra": "iterations: 7318\ncpu: 117258.88220825349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1230.9859640632712,
            "unit": "ns/iter",
            "extra": "iterations: 570393\ncpu: 1230.975485323276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 995.6318290630135,
            "unit": "ns/iter",
            "extra": "iterations: 703464\ncpu: 995.6306221782474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 990.5221265133398,
            "unit": "ns/iter",
            "extra": "iterations: 706076\ncpu: 990.5110781275673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 973.8103093041408,
            "unit": "ns/iter",
            "extra": "iterations: 720262\ncpu: 973.8063371384288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1896.9136719938665,
            "unit": "ns/iter",
            "extra": "iterations: 370853\ncpu: 1896.8750421326001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5713.493810000045,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5713.558000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31649.294794794354,
            "unit": "ns/iter",
            "extra": "iterations: 25974\ncpu: 31649.141449141454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24779.37839885725,
            "unit": "ns/iter",
            "extra": "iterations: 32989\ncpu: 24779.371911849394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24003.009713882177,
            "unit": "ns/iter",
            "extra": "iterations: 33972\ncpu: 24002.543270928996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24409.73704288688,
            "unit": "ns/iter",
            "extra": "iterations: 33553\ncpu: 24409.978243376132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 72802.58363133864,
            "unit": "ns/iter",
            "extra": "iterations: 12304\ncpu: 72801.01592977898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 552667.8559999709,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 552626.8999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 562784.070141588,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 562753.0888030877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 563055.6844502452,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 563053.0253741064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 561451.0373230971,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 561426.9626769623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 332903.10853889456,
            "unit": "ns/iter",
            "extra": "iterations: 2635\ncpu: 332873.24478178326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 572334.2994758144,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 572339.5806028829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2416924.192207616,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2416879.740259743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1111633.1634845147,
            "unit": "ns/iter",
            "extra": "iterations: 838\ncpu: 1111626.6109785233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3310893.792857022,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3310756.785714286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8628.293489396112,
            "unit": "ns/iter",
            "extra": "iterations: 98593\ncpu: 8628.323511811204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 45577.60778162643,
            "unit": "ns/iter",
            "extra": "iterations: 18171\ncpu: 45577.6456991909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36421.29451756313,
            "unit": "ns/iter",
            "extra": "iterations: 22946\ncpu: 36420.23882158108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36195.48100383543,
            "unit": "ns/iter",
            "extra": "iterations: 22952\ncpu: 36195.83478563956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 35691.00220673985,
            "unit": "ns/iter",
            "extra": "iterations: 23111\ncpu: 35690.13024101089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 84668.41105370385,
            "unit": "ns/iter",
            "extra": "iterations: 10259\ncpu: 84668.40822692258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 609277.0770000016,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609221.4999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 611210.0920590442,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 611206.8868587501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 596140.6906721998,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 596104.3209876518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 588276.2266211683,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 588246.6211604076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 342930.15255562065,
            "unit": "ns/iter",
            "extra": "iterations: 2563\ncpu: 342841.59188451094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 576121.6098864373,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 576082.164328657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2537364.220108761,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2537178.5326086986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1124291.1811594432,
            "unit": "ns/iter",
            "extra": "iterations: 828\ncpu: 1124250.0000000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5699.5556500010025,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5699.22499999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 31218.476477459797,
            "unit": "ns/iter",
            "extra": "iterations: 26549\ncpu: 31216.8104260048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 24426.45917100325,
            "unit": "ns/iter",
            "extra": "iterations: 33824\ncpu: 24424.964522232895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24235.959286341626,
            "unit": "ns/iter",
            "extra": "iterations: 34190\ncpu: 24234.764551038355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 24222.788993792296,
            "unit": "ns/iter",
            "extra": "iterations: 33999\ncpu: 24221.79769993239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 71084.8918412302,
            "unit": "ns/iter",
            "extra": "iterations: 12269\ncpu: 71081.24541527458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 596780.1410000675,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 596752.0000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 597970.8098201889,
            "unit": "ns/iter",
            "extra": "iterations: 1446\ncpu: 597937.7593360996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 594317.8315291117,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 594302.3680649535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 579739.1096989958,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 579718.0602006683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 336826.0983103176,
            "unit": "ns/iter",
            "extra": "iterations: 2604\ncpu: 336805.33794162807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 576621.0223096764,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 576595.0131233593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 552.3798920090693,
            "unit": "ns/iter",
            "extra": "iterations: 1267884\ncpu: 552.3480065999702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3294.828217117426,
            "unit": "ns/iter",
            "extra": "iterations: 211517\ncpu: 3294.56544864008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2460.177966012348,
            "unit": "ns/iter",
            "extra": "iterations: 284397\ncpu: 2460.05689230197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2662.2441266524997,
            "unit": "ns/iter",
            "extra": "iterations: 263904\ncpu: 2662.151388383662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2045.4571472821838,
            "unit": "ns/iter",
            "extra": "iterations: 342207\ncpu: 2045.3503288944898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18081.07517084166,
            "unit": "ns/iter",
            "extra": "iterations: 38632\ncpu: 18080.05539449178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31635.999138325336,
            "unit": "ns/iter",
            "extra": "iterations: 22050\ncpu: 31634.46712018157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7453.438016529436,
            "unit": "ns/iter",
            "extra": "iterations: 93654\ncpu: 7453.094368633477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7393.053029827256,
            "unit": "ns/iter",
            "extra": "iterations: 95550\ncpu: 7392.8341182626245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7542.28017607239,
            "unit": "ns/iter",
            "extra": "iterations: 94280\ncpu: 7541.990878235019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14888.219002169888,
            "unit": "ns/iter",
            "extra": "iterations: 46100\ncpu: 14887.66160520596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13935.837057048613,
            "unit": "ns/iter",
            "extra": "iterations: 50711\ncpu: 13935.708228983896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5172.765616630055,
            "unit": "ns/iter",
            "extra": "iterations: 134408\ncpu: 5172.483780727344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26639.23586572661,
            "unit": "ns/iter",
            "extra": "iterations: 26036\ncpu: 26636.737594099992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21017.73100950577,
            "unit": "ns/iter",
            "extra": "iterations: 33135\ncpu: 21017.178210351696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21028.92637283693,
            "unit": "ns/iter",
            "extra": "iterations: 33398\ncpu: 21028.00766512971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21398.669961626918,
            "unit": "ns/iter",
            "extra": "iterations: 32575\ncpu: 21398.45587106706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49123.11229646117,
            "unit": "ns/iter",
            "extra": "iterations: 14248\ncpu: 49120.36777091505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156586.968652042,
            "unit": "ns/iter",
            "extra": "iterations: 4466\ncpu: 156583.78862516538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 135020.77331281747,
            "unit": "ns/iter",
            "extra": "iterations: 5201\ncpu: 135014.90098058098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133229.31534952932,
            "unit": "ns/iter",
            "extra": "iterations: 5264\ncpu: 133226.53875380056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 133980.15004784602,
            "unit": "ns/iter",
            "extra": "iterations: 5225\ncpu: 133973.16746411554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 85359.08783132763,
            "unit": "ns/iter",
            "extra": "iterations: 8300\ncpu: 85354.3734939764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 136104.70844634535,
            "unit": "ns/iter",
            "extra": "iterations: 5162\ncpu: 136095.09879891615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5209.254988535737,
            "unit": "ns/iter",
            "extra": "iterations: 134759\ncpu: 5209.096238470194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26564.561224490077,
            "unit": "ns/iter",
            "extra": "iterations: 26460\ncpu: 26564.255479970256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21020.742414208627,
            "unit": "ns/iter",
            "extra": "iterations: 33220\ncpu: 21020.003010234792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20980.104166040248,
            "unit": "ns/iter",
            "extra": "iterations: 33389\ncpu: 20979.54416125065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21314.80948460059,
            "unit": "ns/iter",
            "extra": "iterations: 32790\ncpu: 21314.10795974386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47612.00258697505,
            "unit": "ns/iter",
            "extra": "iterations: 14689\ncpu: 47612.47191776161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 159979.70159451515,
            "unit": "ns/iter",
            "extra": "iterations: 4390\ncpu: 159976.78815489914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 133820.93244019686,
            "unit": "ns/iter",
            "extra": "iterations: 5225\ncpu: 133819.59808612554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 132892.29683052097,
            "unit": "ns/iter",
            "extra": "iterations: 5269\ncpu: 132888.13816663632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 134212.99156442867,
            "unit": "ns/iter",
            "extra": "iterations: 5216\ncpu: 134211.31134969377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 84144.31921550827,
            "unit": "ns/iter",
            "extra": "iterations: 8311\ncpu: 84142.93105522775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 133212.17746853968,
            "unit": "ns/iter",
            "extra": "iterations: 5246\ncpu: 133205.50895920617 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705773460466,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1393.2467935787654,
            "unit": "ns/iter",
            "extra": "iterations: 493307\ncpu: 1393.1975423012445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17353.420169815356,
            "unit": "ns/iter",
            "extra": "iterations: 48052\ncpu: 17353.017564305337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 36517.43653997715,
            "unit": "ns/iter",
            "extra": "iterations: 22786\ncpu: 36516.01860791714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 54902.87960814762,
            "unit": "ns/iter",
            "extra": "iterations: 15516\ncpu: 54899.86465583913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58996.099199998745,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58996.81000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 74057.09272588576,
            "unit": "ns/iter",
            "extra": "iterations: 11809\ncpu: 74055.94885257013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 89136.30731507856,
            "unit": "ns/iter",
            "extra": "iterations: 9788\ncpu: 89132.51941152438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 102441.41183678337,
            "unit": "ns/iter",
            "extra": "iterations: 8161\ncpu: 102439.28440142133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 117939.34070185274,
            "unit": "ns/iter",
            "extra": "iterations: 7238\ncpu: 117936.93009118552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1211.14858320171,
            "unit": "ns/iter",
            "extra": "iterations: 578558\ncpu: 1211.145295717974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 988.4749284920799,
            "unit": "ns/iter",
            "extra": "iterations: 709012\ncpu: 988.460138897507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 970.8289070311388,
            "unit": "ns/iter",
            "extra": "iterations: 722198\ncpu: 970.8337602707294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 962.9005102425765,
            "unit": "ns/iter",
            "extra": "iterations: 727693\ncpu: 962.8996018925557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1973.9148417804206,
            "unit": "ns/iter",
            "extra": "iterations: 354634\ncpu: 1973.9029534675226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5731.8361000000095,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5731.913999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31083.204051271456,
            "unit": "ns/iter",
            "extra": "iterations: 26214\ncpu: 31082.81452658886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24767.27863498784,
            "unit": "ns/iter",
            "extra": "iterations: 33377\ncpu: 24767.0581538185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24226.883520301104,
            "unit": "ns/iter",
            "extra": "iterations: 33963\ncpu: 24226.546535936126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24426.440164691707,
            "unit": "ns/iter",
            "extra": "iterations: 33517\ncpu: 24426.061401676703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 73016.37013306403,
            "unit": "ns/iter",
            "extra": "iterations: 12174\ncpu: 73015.54131756199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 569886.0119999836,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569869.1999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 571114.339987108,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 571093.2388924658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 565621.1300597289,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 565617.1201061723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 565262.8793216109,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 565241.6829745587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 333534.2012265158,
            "unit": "ns/iter",
            "extra": "iterations: 2609\ncpu: 333524.4921425838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 585516.6589250152,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 585515.0630391516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2400931.612402966,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2400888.1136950837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1106757.4273808878,
            "unit": "ns/iter",
            "extra": "iterations: 840\ncpu: 1106741.6666666684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3312669.4321428626,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3312639.2857142836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8601.903831375043,
            "unit": "ns/iter",
            "extra": "iterations: 97589\ncpu: 8601.663097275288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 45669.91731582462,
            "unit": "ns/iter",
            "extra": "iterations: 17972\ncpu: 45668.37302470523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36278.235417119315,
            "unit": "ns/iter",
            "extra": "iterations: 22955\ncpu: 36277.13352210856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36145.34574329738,
            "unit": "ns/iter",
            "extra": "iterations: 23046\ncpu: 36145.02733663108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36342.80401349339,
            "unit": "ns/iter",
            "extra": "iterations: 22823\ncpu: 36341.99710818031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 84715.78984940457,
            "unit": "ns/iter",
            "extra": "iterations: 10226\ncpu: 84714.51202816343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 625856.6230000042,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 625824.6000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 610995.9019886737,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 610994.8153409121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 611229.3060649044,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 611212.5528913925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 608717.393305488,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 608698.953974895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 350289.72349858686,
            "unit": "ns/iter",
            "extra": "iterations: 2481\ncpu: 350289.1979040709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 600380.9017857632,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 600379.739010988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2542855.5412086374,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2542779.670329671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1131804.4890510903,
            "unit": "ns/iter",
            "extra": "iterations: 822\ncpu: 1131791.6058394087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5672.247469999547,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5672.213999999941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 31197.63729516093,
            "unit": "ns/iter",
            "extra": "iterations: 26545\ncpu: 31196.66980598997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 24706.46347201954,
            "unit": "ns/iter",
            "extra": "iterations: 33577\ncpu: 24705.366768919248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23886.59887527017,
            "unit": "ns/iter",
            "extra": "iterations: 34675\ncpu: 23886.160057678415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 24255.96503128538,
            "unit": "ns/iter",
            "extra": "iterations: 34202\ncpu: 24255.11373603886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 71517.77880296709,
            "unit": "ns/iter",
            "extra": "iterations: 12247\ncpu: 71515.11390544608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 590315.0099999266,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590316.9000000048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 590730.182002766,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 590725.1014885003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 586191.8582941584,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 586175.3525856258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 581285.8892551243,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 581279.4990112035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 337675.25134097924,
            "unit": "ns/iter",
            "extra": "iterations: 2610\ncpu: 337668.69731800654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 579103.0728609656,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 579081.8850267382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 539.3881576633792,
            "unit": "ns/iter",
            "extra": "iterations: 1279663\ncpu: 539.3738038843044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3282.2290239445438,
            "unit": "ns/iter",
            "extra": "iterations: 213410\ncpu: 3282.156881120829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2662.0818916942135,
            "unit": "ns/iter",
            "extra": "iterations: 263531\ncpu: 2662.1145140419953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2679.3606403658246,
            "unit": "ns/iter",
            "extra": "iterations: 262350\ncpu: 2679.314655993898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2057.193688389491,
            "unit": "ns/iter",
            "extra": "iterations: 340547\ncpu: 2057.0957900084254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18152.715575621743,
            "unit": "ns/iter",
            "extra": "iterations: 38541\ncpu: 18152.19376767591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32726.672799623862,
            "unit": "ns/iter",
            "extra": "iterations: 21360\ncpu: 32726.156367040938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7765.8438039964885,
            "unit": "ns/iter",
            "extra": "iterations: 90284\ncpu: 7765.746976208398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7648.049452111143,
            "unit": "ns/iter",
            "extra": "iterations: 91442\ncpu: 7647.9363968418065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7682.54974334115,
            "unit": "ns/iter",
            "extra": "iterations: 90977\ncpu: 7682.3933521660065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15352.859469930281,
            "unit": "ns/iter",
            "extra": "iterations: 45428\ncpu: 15352.392797393699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14023.76755094952,
            "unit": "ns/iter",
            "extra": "iterations: 50097\ncpu: 14023.380641555563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5296.931627494771,
            "unit": "ns/iter",
            "extra": "iterations: 131939\ncpu: 5296.863702165461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 27127.574624841778,
            "unit": "ns/iter",
            "extra": "iterations: 25789\ncpu: 27127.007638915544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21497.03218525826,
            "unit": "ns/iter",
            "extra": "iterations: 32344\ncpu: 21497.019539945537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21480.278925113016,
            "unit": "ns/iter",
            "extra": "iterations: 32636\ncpu: 21480.037382032344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21692.261594742304,
            "unit": "ns/iter",
            "extra": "iterations: 32256\ncpu: 21692.348710317197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51566.902955453734,
            "unit": "ns/iter",
            "extra": "iterations: 13602\ncpu: 51565.61535068296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 177248.0510004945,
            "unit": "ns/iter",
            "extra": "iterations: 4098\ncpu: 177247.51098096537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 143123.53794369265,
            "unit": "ns/iter",
            "extra": "iterations: 4902\ncpu: 143117.1154630781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 141789.47575573018,
            "unit": "ns/iter",
            "extra": "iterations: 4929\ncpu: 141790.13998782757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 142315.10330073556,
            "unit": "ns/iter",
            "extra": "iterations: 4908\ncpu: 142315.24042380042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 89443.7242966706,
            "unit": "ns/iter",
            "extra": "iterations: 7820\ncpu: 89440.49872122692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 142747.74582825933,
            "unit": "ns/iter",
            "extra": "iterations: 4914\ncpu: 142747.11029710952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5165.302161972168,
            "unit": "ns/iter",
            "extra": "iterations: 136172\ncpu: 5165.154363599033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 27988.329943976525,
            "unit": "ns/iter",
            "extra": "iterations: 26062\ncpu: 27988.653978972958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21230.813565482207,
            "unit": "ns/iter",
            "extra": "iterations: 33025\ncpu: 21230.434519303617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21201.634260098934,
            "unit": "ns/iter",
            "extra": "iterations: 33018\ncpu: 21201.323520503756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21527.239714435167,
            "unit": "ns/iter",
            "extra": "iterations: 32497\ncpu: 21526.651690925082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49968.94440077179,
            "unit": "ns/iter",
            "extra": "iterations: 13993\ncpu: 49969.163153005116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 161102.33417373936,
            "unit": "ns/iter",
            "extra": "iterations: 4363\ncpu: 161104.21728168882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 135418.4640765447,
            "unit": "ns/iter",
            "extra": "iterations: 5122\ncpu: 135415.97032409144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 135470.3422119157,
            "unit": "ns/iter",
            "extra": "iterations: 5181\ncpu: 135469.77417487127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 135954.88114753558,
            "unit": "ns/iter",
            "extra": "iterations: 5124\ncpu: 135951.60031225442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 86994.2746706511,
            "unit": "ns/iter",
            "extra": "iterations: 8046\ncpu: 86994.56872980435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 135379.06584283602,
            "unit": "ns/iter",
            "extra": "iterations: 5179\ncpu: 135377.58254489317 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705774894049,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1435.046313030259,
            "unit": "ns/iter",
            "extra": "iterations: 491352\ncpu: 1434.9671925625623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16735.454277584584,
            "unit": "ns/iter",
            "extra": "iterations: 49549\ncpu: 16734.96740600214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34566.58654436838,
            "unit": "ns/iter",
            "extra": "iterations: 22786\ncpu: 34565.707013078194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51395.43260551398,
            "unit": "ns/iter",
            "extra": "iterations: 16396\ncpu: 51394.68772871432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57315.30890000158,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57315.20999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72773.56559405943,
            "unit": "ns/iter",
            "extra": "iterations: 12120\ncpu: 72774.20792079205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85764.91189034031,
            "unit": "ns/iter",
            "extra": "iterations: 10067\ncpu: 85763.74292241975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99094.69949553403,
            "unit": "ns/iter",
            "extra": "iterations: 8722\ncpu: 99093.60238477417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114688.92824105569,
            "unit": "ns/iter",
            "extra": "iterations: 7567\ncpu: 114688.0005286111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1279.6208415632577,
            "unit": "ns/iter",
            "extra": "iterations: 547291\ncpu: 1279.6207136605572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 991.6581746715013,
            "unit": "ns/iter",
            "extra": "iterations: 706744\ncpu: 991.6592146519795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 968.9839824516959,
            "unit": "ns/iter",
            "extra": "iterations: 721209\ncpu: 968.9923447988026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 958.0923156182176,
            "unit": "ns/iter",
            "extra": "iterations: 731783\ncpu: 958.0803325576038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1910.2204319309094,
            "unit": "ns/iter",
            "extra": "iterations: 365614\ncpu: 1910.2394875469731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5536.41137999989,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5536.391999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31841.918999496876,
            "unit": "ns/iter",
            "extra": "iterations: 25827\ncpu: 31841.82444728382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 25251.85684404824,
            "unit": "ns/iter",
            "extra": "iterations: 32510\ncpu: 25252.10396800984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24201.818355693955,
            "unit": "ns/iter",
            "extra": "iterations: 33984\ncpu: 24201.792019774057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24546.975276280056,
            "unit": "ns/iter",
            "extra": "iterations: 33571\ncpu: 24546.793363319546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 72557.66282373681,
            "unit": "ns/iter",
            "extra": "iterations: 12317\ncpu: 72557.34350897161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 593612.3409999255,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 593618.099999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 565322.9829620251,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 565315.4652686763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 571853.0595632216,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 571834.2819324952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 560419.8850574458,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 560419.6679438056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 333837.57397574093,
            "unit": "ns/iter",
            "extra": "iterations: 2636\ncpu: 333833.3080424887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 568045.5124508697,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 568034.2070773259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2388165.200000003,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2388169.3506493554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1096139.2446808885,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 1096109.3380614643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3303471.0716844616,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3303422.9390681046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8581.457383766645,
            "unit": "ns/iter",
            "extra": "iterations: 97369\ncpu: 8581.357516252583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 45501.24239124909,
            "unit": "ns/iter",
            "extra": "iterations: 18367\ncpu: 45501.64425328038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36569.53055311318,
            "unit": "ns/iter",
            "extra": "iterations: 22780\ncpu: 36569.192273924426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36346.288391960676,
            "unit": "ns/iter",
            "extra": "iterations: 22941\ncpu: 36345.743428795664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 35898.14339935625,
            "unit": "ns/iter",
            "extra": "iterations: 22922\ncpu: 35898.47744524907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 84165.60378633735,
            "unit": "ns/iter",
            "extra": "iterations: 10353\ncpu: 84164.58997392048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 615050.6049999648,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 615056.199999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 599357.7720385671,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 599347.4517906331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 588619.501722951,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 588607.1674707116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 589966.993914811,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 589951.9269776843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 349996.9573796336,
            "unit": "ns/iter",
            "extra": "iterations: 2534\ncpu: 349989.81846882444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 578356.6753506722,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 578362.1910487618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2537892.791327814,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2537833.6043360536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1132030.1790498968,
            "unit": "ns/iter",
            "extra": "iterations: 821\ncpu: 1132024.482338613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5633.466540000427,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5633.295000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30565.756717585,
            "unit": "ns/iter",
            "extra": "iterations: 26907\ncpu: 30565.84160255695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 24420.077232405463,
            "unit": "ns/iter",
            "extra": "iterations: 33820\ncpu: 24419.852158486254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23676.801917390338,
            "unit": "ns/iter",
            "extra": "iterations: 34839\ncpu: 23676.351215591887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23399.687990669318,
            "unit": "ns/iter",
            "extra": "iterations: 35156\ncpu: 23399.527818864444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70805.56580864196,
            "unit": "ns/iter",
            "extra": "iterations: 12354\ncpu: 70806.18423182816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 590589.5409999856,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590594.6999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 580363.537342982,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 580368.4071381371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 579387.9335548152,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 579384.784053158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 573481.3480553435,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 573476.3348714605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 333397.80491493887,
            "unit": "ns/iter",
            "extra": "iterations: 2645\ncpu: 333400.64272211795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 570643.0313930742,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 570637.3446697221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 537.6431019164485,
            "unit": "ns/iter",
            "extra": "iterations: 1300035\ncpu: 537.6479094793643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3265.889271937718,
            "unit": "ns/iter",
            "extra": "iterations: 214652\ncpu: 3265.849374801998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2559.7454796699126,
            "unit": "ns/iter",
            "extra": "iterations: 272823\ncpu: 2559.7412974712556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2456.590536136706,
            "unit": "ns/iter",
            "extra": "iterations: 286289\ncpu: 2456.575697983515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2038.3002652936275,
            "unit": "ns/iter",
            "extra": "iterations: 343393\ncpu: 2038.3196512450634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17963.60295678701,
            "unit": "ns/iter",
            "extra": "iterations: 38623\ncpu: 17962.892576961887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31346.647592120113,
            "unit": "ns/iter",
            "extra": "iterations: 22281\ncpu: 31346.568825456678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7462.351394192898,
            "unit": "ns/iter",
            "extra": "iterations: 93997\ncpu: 7462.133897890273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7428.36288862689,
            "unit": "ns/iter",
            "extra": "iterations: 94467\ncpu: 7428.428975197721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7631.779075908472,
            "unit": "ns/iter",
            "extra": "iterations: 94666\ncpu: 7631.847759491254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15212.071304649604,
            "unit": "ns/iter",
            "extra": "iterations: 46112\ncpu: 15211.905794587012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14579.33992588665,
            "unit": "ns/iter",
            "extra": "iterations: 48034\ncpu: 14579.327143273425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5320.4781270658095,
            "unit": "ns/iter",
            "extra": "iterations: 131601\ncpu: 5320.439814287155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26556.48871408987,
            "unit": "ns/iter",
            "extra": "iterations: 26316\ncpu: 26556.342149263088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21339.183766015944,
            "unit": "ns/iter",
            "extra": "iterations: 32857\ncpu: 21338.804516541462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21171.09469536108,
            "unit": "ns/iter",
            "extra": "iterations: 32990\ncpu: 21171.279175507847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21539.29033541253,
            "unit": "ns/iter",
            "extra": "iterations: 32676\ncpu: 21538.835842820223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49080.511178293105,
            "unit": "ns/iter",
            "extra": "iterations: 14224\ncpu: 49080.940663666755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159243.59487775134,
            "unit": "ns/iter",
            "extra": "iterations: 4295\ncpu: 159241.51338765965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133722.60248328402,
            "unit": "ns/iter",
            "extra": "iterations: 5235\ncpu: 133721.48997134808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132874.08917797633,
            "unit": "ns/iter",
            "extra": "iterations: 5304\ncpu: 132872.09653092077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134356.23892616297,
            "unit": "ns/iter",
            "extra": "iterations: 5215\ncpu: 134355.80057526357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83813.19094936026,
            "unit": "ns/iter",
            "extra": "iterations: 8353\ncpu: 83813.9231413864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 133837.74067666387,
            "unit": "ns/iter",
            "extra": "iterations: 5202\ncpu: 133835.25567089682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5243.274906588312,
            "unit": "ns/iter",
            "extra": "iterations: 128731\ncpu: 5243.319014068091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26076.790446381445,
            "unit": "ns/iter",
            "extra": "iterations: 26838\ncpu: 26076.40286161407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20810.74193356456,
            "unit": "ns/iter",
            "extra": "iterations: 33596\ncpu: 20810.923919514044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20661.95417503031,
            "unit": "ns/iter",
            "extra": "iterations: 33868\ncpu: 20662.135349002245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21056.751812788796,
            "unit": "ns/iter",
            "extra": "iterations: 33374\ncpu: 21056.858632468364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47740.13367819422,
            "unit": "ns/iter",
            "extra": "iterations: 14692\ncpu: 47739.41600871192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 157919.35826242695,
            "unit": "ns/iter",
            "extra": "iterations: 4466\ncpu: 157920.71204657608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 132194.37886209408,
            "unit": "ns/iter",
            "extra": "iterations: 5308\ncpu: 132195.5162019568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 130337.56959435482,
            "unit": "ns/iter",
            "extra": "iterations: 5374\ncpu: 130334.87160402002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 131490.7504206373,
            "unit": "ns/iter",
            "extra": "iterations: 5349\ncpu: 131490.7085436528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82551.02393868132,
            "unit": "ns/iter",
            "extra": "iterations: 8480\ncpu: 82549.74056603794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130697.80419839403,
            "unit": "ns/iter",
            "extra": "iterations: 5383\ncpu: 130698.99684190763 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705778471423,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1431.7184307751336,
            "unit": "ns/iter",
            "extra": "iterations: 488292\ncpu: 1431.6968125629749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16583.745108661347,
            "unit": "ns/iter",
            "extra": "iterations: 49833\ncpu: 16583.266108803404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34841.79953752448,
            "unit": "ns/iter",
            "extra": "iterations: 23785\ncpu: 34840.639058229994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51768.89340349366,
            "unit": "ns/iter",
            "extra": "iterations: 16342\ncpu: 51768.75535430179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57556.35269999857,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57556.23999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71258.17172310353,
            "unit": "ns/iter",
            "extra": "iterations: 11932\ncpu: 71257.91149849145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84802.53806363344,
            "unit": "ns/iter",
            "extra": "iterations: 10246\ncpu: 84801.58110482142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97887.18159203281,
            "unit": "ns/iter",
            "extra": "iterations: 8844\ncpu: 97882.6209859791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115433.13700232973,
            "unit": "ns/iter",
            "extra": "iterations: 7686\ncpu: 115429.50819672135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1216.726789676778,
            "unit": "ns/iter",
            "extra": "iterations: 448852\ncpu: 1216.6740930195251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 993.6289502242023,
            "unit": "ns/iter",
            "extra": "iterations: 705846\ncpu: 993.5753691315092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 969.1976872300224,
            "unit": "ns/iter",
            "extra": "iterations: 717927\ncpu: 969.1234624133077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 959.8325020057833,
            "unit": "ns/iter",
            "extra": "iterations: 729155\ncpu: 959.8167742112445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1906.144053537616,
            "unit": "ns/iter",
            "extra": "iterations: 367891\ncpu: 1906.1167574091248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5758.35487000063,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5758.002000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31488.243755711508,
            "unit": "ns/iter",
            "extra": "iterations: 26264\ncpu: 31486.71184891873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 25452.29520832132,
            "unit": "ns/iter",
            "extra": "iterations: 32306\ncpu: 25450.63765244851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24267.3735530365,
            "unit": "ns/iter",
            "extra": "iterations: 33864\ncpu: 24266.141034727127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24752.13545165658,
            "unit": "ns/iter",
            "extra": "iterations: 33045\ncpu: 24750.788318958985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 73299.32937635966,
            "unit": "ns/iter",
            "extra": "iterations: 11962\ncpu: 73296.35512456123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 581629.0820000632,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 581577.7000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 568045.2248676914,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 568013.2275132276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 555587.0856407066,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 555556.2137797794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 563040.9594855234,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 562995.0482315117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 335650.4900990131,
            "unit": "ns/iter",
            "extra": "iterations: 2626\ncpu: 335635.14851485164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 586769.4871794584,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 586757.1992110462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2379503.910486018,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2379370.843989775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1102352.5191846136,
            "unit": "ns/iter",
            "extra": "iterations: 834\ncpu: 1102269.184652275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3288064.627659598,
            "unit": "ns/iter",
            "extra": "iterations: 282\ncpu: 3287946.808510639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8541.114270538073,
            "unit": "ns/iter",
            "extra": "iterations: 96009\ncpu: 8540.667020800107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46459.46982128611,
            "unit": "ns/iter",
            "extra": "iterations: 17794\ncpu: 46456.76632572773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37194.21251852389,
            "unit": "ns/iter",
            "extra": "iterations: 22271\ncpu: 37192.384715549495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36560.09203027655,
            "unit": "ns/iter",
            "extra": "iterations: 22460\ncpu: 36558.81567230641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36142.61015686343,
            "unit": "ns/iter",
            "extra": "iterations: 22822\ncpu: 36141.71413548317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 85208.69696066975,
            "unit": "ns/iter",
            "extra": "iterations: 10068\ncpu: 85206.31704410062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 615760.2389999966,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 615758.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 598853.7213792808,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 598841.1034482755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 590283.8864864486,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 590267.0945945933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 586534.0476190089,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 586526.666666665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 351135.2010975981,
            "unit": "ns/iter",
            "extra": "iterations: 2551\ncpu: 351127.4402195207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 583948.7418477989,
            "unit": "ns/iter",
            "extra": "iterations: 1472\ncpu: 583932.5407608729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2572633.1739131357,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2572549.184782606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1130593.6541262027,
            "unit": "ns/iter",
            "extra": "iterations: 824\ncpu: 1130569.5388349588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5532.462850000001,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5532.161000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 31348.12737241897,
            "unit": "ns/iter",
            "extra": "iterations: 26081\ncpu: 31347.8049154558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 24694.36383317748,
            "unit": "ns/iter",
            "extra": "iterations: 33257\ncpu: 24693.454009682242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23901.812307233344,
            "unit": "ns/iter",
            "extra": "iterations: 33395\ncpu: 23901.377451714325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 24069.120417304486,
            "unit": "ns/iter",
            "extra": "iterations: 33932\ncpu: 24068.348461629048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 71057.33500892423,
            "unit": "ns/iter",
            "extra": "iterations: 12334\ncpu: 71054.68623317637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 596307.2419999662,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 596273.1999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 595929.5967633423,
            "unit": "ns/iter",
            "extra": "iterations: 1483\ncpu: 595927.5118004053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 580262.1650943826,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 580256.5363881412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 573775.806535992,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 573743.0065359438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 332705.7298311627,
            "unit": "ns/iter",
            "extra": "iterations: 2665\ncpu: 332693.8461538463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 580901.9927297354,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 580866.2921348321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 537.5359633709129,
            "unit": "ns/iter",
            "extra": "iterations: 1306065\ncpu: 537.4925443986328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3248.573803600897,
            "unit": "ns/iter",
            "extra": "iterations: 215877\ncpu: 3248.4044154773574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2636.077942411066,
            "unit": "ns/iter",
            "extra": "iterations: 265709\ncpu: 2635.9231339548246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2609.5807247073594,
            "unit": "ns/iter",
            "extra": "iterations: 277381\ncpu: 2609.4436893658954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2035.8450497321255,
            "unit": "ns/iter",
            "extra": "iterations: 344446\ncpu: 2035.6929678381991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18508.353239750533,
            "unit": "ns/iter",
            "extra": "iterations: 37827\ncpu: 18507.17212573027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32559.84548199676,
            "unit": "ns/iter",
            "extra": "iterations: 21525\ncpu: 32557.867595818963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7648.0531904479285,
            "unit": "ns/iter",
            "extra": "iterations: 91915\ncpu: 7647.702768862646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7610.1891173149625,
            "unit": "ns/iter",
            "extra": "iterations: 92128\ncpu: 7610.059916637635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7650.7211237492875,
            "unit": "ns/iter",
            "extra": "iterations: 91693\ncpu: 7650.3593513137575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14494.750378781764,
            "unit": "ns/iter",
            "extra": "iterations: 48181\ncpu: 14494.041219567875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14502.87630143733,
            "unit": "ns/iter",
            "extra": "iterations: 48408\ncpu: 14502.098826640326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5393.435145702235,
            "unit": "ns/iter",
            "extra": "iterations: 129922\ncpu: 5393.1836024692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26515.19564557773,
            "unit": "ns/iter",
            "extra": "iterations: 26364\ncpu: 26513.461538461594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21248.04144231552,
            "unit": "ns/iter",
            "extra": "iterations: 33058\ncpu: 21246.80561437487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21337.806119961464,
            "unit": "ns/iter",
            "extra": "iterations: 32778\ncpu: 21336.49398987132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21620.342495108125,
            "unit": "ns/iter",
            "extra": "iterations: 32199\ncpu: 21619.509922668392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49181.15168067619,
            "unit": "ns/iter",
            "extra": "iterations: 14280\ncpu: 49177.7100840339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 162059.9355806863,
            "unit": "ns/iter",
            "extra": "iterations: 4331\ncpu: 162048.94943431197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 136272.33547008553,
            "unit": "ns/iter",
            "extra": "iterations: 5148\ncpu: 136269.07536907692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 135803.80023274338,
            "unit": "ns/iter",
            "extra": "iterations: 5156\ncpu: 135801.39643134238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 136814.93578701344,
            "unit": "ns/iter",
            "extra": "iterations: 5108\ncpu: 136809.25998433758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83965.98368820347,
            "unit": "ns/iter",
            "extra": "iterations: 8031\ncpu: 83958.09986303066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134402.35516712838,
            "unit": "ns/iter",
            "extra": "iterations: 5206\ncpu: 134395.52439493072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5226.030311829579,
            "unit": "ns/iter",
            "extra": "iterations: 134304\ncpu: 5225.699160114311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26218.879944819866,
            "unit": "ns/iter",
            "extra": "iterations: 26821\ncpu: 26217.165653778487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20907.29475253473,
            "unit": "ns/iter",
            "extra": "iterations: 33540\ncpu: 20906.52057245096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20786.006158329532,
            "unit": "ns/iter",
            "extra": "iterations: 33613\ncpu: 20785.490732752205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21144.694108421623,
            "unit": "ns/iter",
            "extra": "iterations: 33149\ncpu: 21144.474946454004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47823.47230958877,
            "unit": "ns/iter",
            "extra": "iterations: 14626\ncpu: 47820.74388076062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 158230.70205091772,
            "unit": "ns/iter",
            "extra": "iterations: 4437\ncpu: 158228.487716926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 132075.57207462235,
            "unit": "ns/iter",
            "extra": "iterations: 5307\ncpu: 132071.5658564172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 130779.83786848607,
            "unit": "ns/iter",
            "extra": "iterations: 5292\ncpu: 130772.58125472385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 131385.05609755398,
            "unit": "ns/iter",
            "extra": "iterations: 5330\ncpu: 131379.2307692317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82599.75546625651,
            "unit": "ns/iter",
            "extra": "iterations: 8461\ncpu: 82593.21593192434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130739.86556341518,
            "unit": "ns/iter",
            "extra": "iterations: 5378\ncpu: 130734.97582744499 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705953619639,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1437.4873687210718,
            "unit": "ns/iter",
            "extra": "iterations: 487797\ncpu: 1437.4163842746061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 18433.602520097604,
            "unit": "ns/iter",
            "extra": "iterations: 43411\ncpu: 18432.302872543827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 38948.01869858071,
            "unit": "ns/iter",
            "extra": "iterations: 21392\ncpu: 38947.29805534778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 47926.07022073741,
            "unit": "ns/iter",
            "extra": "iterations: 12005\ncpu: 47925.922532278215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 64058.4783494706,
            "unit": "ns/iter",
            "extra": "iterations: 13741\ncpu: 64053.278509569886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 80822.64948358099,
            "unit": "ns/iter",
            "extra": "iterations: 10844\ncpu: 80817.85319070454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 96420.15929987992,
            "unit": "ns/iter",
            "extra": "iterations: 9027\ncpu: 96411.21081200852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 111415.38903932796,
            "unit": "ns/iter",
            "extra": "iterations: 7755\ncpu: 111408.7943262412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 126699.4619743512,
            "unit": "ns/iter",
            "extra": "iterations: 6706\ncpu: 126688.63704145535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1184.5613639682135,
            "unit": "ns/iter",
            "extra": "iterations: 575468\ncpu: 1184.454739446849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 955.9976752073543,
            "unit": "ns/iter",
            "extra": "iterations: 734259\ncpu: 955.9570941588714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 950.2855987939417,
            "unit": "ns/iter",
            "extra": "iterations: 740931\ncpu: 950.2610904389203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 933.4420148093113,
            "unit": "ns/iter",
            "extra": "iterations: 751416\ncpu: 933.4102547723238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1894.0404327527133,
            "unit": "ns/iter",
            "extra": "iterations: 370096\ncpu: 1894.036141973975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5389.161309999509,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5388.967999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29626.66224537782,
            "unit": "ns/iter",
            "extra": "iterations: 27443\ncpu: 29624.946252231915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23328.505846710235,
            "unit": "ns/iter",
            "extra": "iterations: 35319\ncpu: 23327.990599960372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23942.80307418138,
            "unit": "ns/iter",
            "extra": "iterations: 35912\ncpu: 23941.99710403207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24448.369140799135,
            "unit": "ns/iter",
            "extra": "iterations: 33345\ncpu: 24447.716299295265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 72594.69736079703,
            "unit": "ns/iter",
            "extra": "iterations: 12087\ncpu: 72591.70182841062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 592680.644999973,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592667.6000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 583650.2143826138,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 583630.7327001346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 580316.3407109886,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 580291.1468812872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 584954.5169376802,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 584933.4688346883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 348433.98601119104,
            "unit": "ns/iter",
            "extra": "iterations: 2502\ncpu: 348407.03437250276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 579601.9838275128,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 579559.36657682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2645608.9373222343,
            "unit": "ns/iter",
            "extra": "iterations: 351\ncpu: 2645419.088319092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1198360.6358907463,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 1198243.042912871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3594988.540540589,
            "unit": "ns/iter",
            "extra": "iterations: 259\ncpu: 3594936.6795366756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8468.428331818053,
            "unit": "ns/iter",
            "extra": "iterations: 98970\ncpu: 8467.992320905332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46315.648254997264,
            "unit": "ns/iter",
            "extra": "iterations: 17851\ncpu: 46314.727466248565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37005.625961707396,
            "unit": "ns/iter",
            "extra": "iterations: 22356\ncpu: 37004.49543746658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 37399.25505471142,
            "unit": "ns/iter",
            "extra": "iterations: 22207\ncpu: 37398.311343270194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36595.53449955818,
            "unit": "ns/iter",
            "extra": "iterations: 22580\ncpu: 36594.2028343666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 85894.78062284255,
            "unit": "ns/iter",
            "extra": "iterations: 10115\ncpu: 85891.7844784976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 639704.2490000331,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 639693.0000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 516625.33299997903,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516616.00000000617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 517534.5639999022,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517515.0999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 517025.58700003463,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516984.89999999705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 379673.1657217622,
            "unit": "ns/iter",
            "extra": "iterations: 2293\ncpu: 379663.3231574351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 507673.723000039,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507660.3999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2825810.2765958747,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2825724.924012148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1243031.36015839,
            "unit": "ns/iter",
            "extra": "iterations: 758\ncpu: 1242919.393139838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5653.400830000237,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5653.184000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30970.36865043543,
            "unit": "ns/iter",
            "extra": "iterations: 26616\ncpu: 30969.72873459578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 24468.344805156637,
            "unit": "ns/iter",
            "extra": "iterations: 33822\ncpu: 24467.722192655852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24021.997883138923,
            "unit": "ns/iter",
            "extra": "iterations: 34485\ncpu: 24020.394374365675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 24025.075554915573,
            "unit": "ns/iter",
            "extra": "iterations: 34690\ncpu: 24024.142404150956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 74049.87033732641,
            "unit": "ns/iter",
            "extra": "iterations: 11769\ncpu: 74047.44668196114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 601036.8239999479,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 601035.699999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 607155.4240946932,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 607122.7715877418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 609515.5209622169,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 609495.0515463883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 605585.4329824478,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 604303.9298245589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 356569.5717751636,
            "unit": "ns/iter",
            "extra": "iterations: 2473\ncpu: 356549.6562879097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 602210.8068340473,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 602166.0390516054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 539.908505922778,
            "unit": "ns/iter",
            "extra": "iterations: 1298554\ncpu: 539.8721192957672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3397.6409996413317,
            "unit": "ns/iter",
            "extra": "iterations: 206114\ncpu: 3397.378635124256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2451.655061783541,
            "unit": "ns/iter",
            "extra": "iterations: 285512\ncpu: 2451.422707276736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2582.398359461297,
            "unit": "ns/iter",
            "extra": "iterations: 270399\ncpu: 2582.238839640685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2054.8778496166697,
            "unit": "ns/iter",
            "extra": "iterations: 339958\ncpu: 2054.7094052794737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18633.88442495072,
            "unit": "ns/iter",
            "extra": "iterations: 37162\ncpu: 18633.54232818472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 39629.090971197904,
            "unit": "ns/iter",
            "extra": "iterations: 17566\ncpu: 39624.87760446314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 9109.675641657059,
            "unit": "ns/iter",
            "extra": "iterations: 77066\ncpu: 9109.542470090568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 9083.218219623031,
            "unit": "ns/iter",
            "extra": "iterations: 76950\ncpu: 9083.095516569196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 9083.287269561873,
            "unit": "ns/iter",
            "extra": "iterations: 76973\ncpu: 9083.196705338269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 17790.134107682108,
            "unit": "ns/iter",
            "extra": "iterations: 39431\ncpu: 17789.678171996566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 16335.236003003194,
            "unit": "ns/iter",
            "extra": "iterations: 42652\ncpu: 16334.265685079254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5263.61428218048,
            "unit": "ns/iter",
            "extra": "iterations: 133411\ncpu: 5263.556978060261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 28223.450252543294,
            "unit": "ns/iter",
            "extra": "iterations: 24946\ncpu: 28222.336246291896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21692.27641193981,
            "unit": "ns/iter",
            "extra": "iterations: 32296\ncpu: 21691.711047808003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21668.978585796864,
            "unit": "ns/iter",
            "extra": "iterations: 32315\ncpu: 21667.71158904519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22060.98985283342,
            "unit": "ns/iter",
            "extra": "iterations: 31733\ncpu: 22060.366180316756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 53391.44739250031,
            "unit": "ns/iter",
            "extra": "iterations: 13116\ncpu: 53389.23452271971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 185942.62898087816,
            "unit": "ns/iter",
            "extra": "iterations: 3768\ncpu: 185939.2781316363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 156640.91567882296,
            "unit": "ns/iter",
            "extra": "iterations: 4471\ncpu: 156635.62961306234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 157400.4625728502,
            "unit": "ns/iter",
            "extra": "iterations: 4462\ncpu: 157389.75795607336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 157953.74678692513,
            "unit": "ns/iter",
            "extra": "iterations: 4435\ncpu: 157946.71927846575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 97706.97486385127,
            "unit": "ns/iter",
            "extra": "iterations: 7161\ncpu: 97702.2901829347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 152939.30984072186,
            "unit": "ns/iter",
            "extra": "iterations: 4583\ncpu: 152933.27514728252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5169.689417299077,
            "unit": "ns/iter",
            "extra": "iterations: 132641\ncpu: 5169.542599950219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 28684.337187658886,
            "unit": "ns/iter",
            "extra": "iterations: 25253\ncpu: 28683.35247297347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21573.01454127968,
            "unit": "ns/iter",
            "extra": "iterations: 32253\ncpu: 21572.687811986325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21288.985632359654,
            "unit": "ns/iter",
            "extra": "iterations: 32782\ncpu: 21288.7041669211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21768.64859381325,
            "unit": "ns/iter",
            "extra": "iterations: 32037\ncpu: 21768.37094609363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 54646.165105387656,
            "unit": "ns/iter",
            "extra": "iterations: 12810\ncpu: 54642.99765807977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 182010.2007271022,
            "unit": "ns/iter",
            "extra": "iterations: 3851\ncpu: 182007.166969619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 152020.66855030897,
            "unit": "ns/iter",
            "extra": "iterations: 4601\ncpu: 152018.23516626767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 151665.05416575697,
            "unit": "ns/iter",
            "extra": "iterations: 4597\ncpu: 151661.75766804497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 151743.26592976213,
            "unit": "ns/iter",
            "extra": "iterations: 4614\ncpu: 151739.4018205446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 97502.83429618734,
            "unit": "ns/iter",
            "extra": "iterations: 7097\ncpu: 97499.61955755822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 149321.02691156304,
            "unit": "ns/iter",
            "extra": "iterations: 4682\ncpu: 149306.70653566933 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705955078330,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1410.020970233553,
            "unit": "ns/iter",
            "extra": "iterations: 499756\ncpu: 1409.9636622671867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16448.60395192397,
            "unit": "ns/iter",
            "extra": "iterations: 50254\ncpu: 16447.860866796673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34593.369868758375,
            "unit": "ns/iter",
            "extra": "iterations: 23849\ncpu: 34591.52165709255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51662.98749695014,
            "unit": "ns/iter",
            "extra": "iterations: 16396\ncpu: 51659.64869480362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57910.399000002144,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57907.85000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72061.3418023357,
            "unit": "ns/iter",
            "extra": "iterations: 12162\ncpu: 72058.04144055257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85220.55783805462,
            "unit": "ns/iter",
            "extra": "iterations: 10028\ncpu: 85213.55205424808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98642.0243161065,
            "unit": "ns/iter",
            "extra": "iterations: 8554\ncpu: 98635.42202478368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 116577.68091972747,
            "unit": "ns/iter",
            "extra": "iterations: 7437\ncpu: 116571.17117117104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1217.2954699713134,
            "unit": "ns/iter",
            "extra": "iterations: 571652\ncpu: 1217.2662738869096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 958.2565579897699,
            "unit": "ns/iter",
            "extra": "iterations: 731741\ncpu: 958.2371358171804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 932.8145267342398,
            "unit": "ns/iter",
            "extra": "iterations: 749019\ncpu: 932.764455908328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 926.9671106865306,
            "unit": "ns/iter",
            "extra": "iterations: 755747\ncpu: 926.9289854938239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1843.3834395891067,
            "unit": "ns/iter",
            "extra": "iterations: 374411\ncpu: 1843.3133641906902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5559.648679999895,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5559.430999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31984.001931247516,
            "unit": "ns/iter",
            "extra": "iterations: 25890\ncpu: 31983.10544611819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 25346.192418928164,
            "unit": "ns/iter",
            "extra": "iterations: 32502\ncpu: 25345.16952802906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24530.64309405246,
            "unit": "ns/iter",
            "extra": "iterations: 33768\ncpu: 24530.481520966558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23972.76648095324,
            "unit": "ns/iter",
            "extra": "iterations: 33205\ncpu: 23971.11880740858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 72935.90073952061,
            "unit": "ns/iter",
            "extra": "iterations: 12170\ncpu: 72931.20788824988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 572290.7310000097,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572279.5000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 562564.4178712151,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 562529.697766098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 561908.2142857442,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 561867.503217505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 559940.3230088584,
            "unit": "ns/iter",
            "extra": "iterations: 1582\ncpu: 559913.5903919089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 333444.07472775265,
            "unit": "ns/iter",
            "extra": "iterations: 2663\ncpu: 333437.21366879455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 573079.5527868723,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 573048.9836065591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2438230.4778067414,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2438142.5587467337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1128643.7714988224,
            "unit": "ns/iter",
            "extra": "iterations: 814\ncpu: 1128534.7665847675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3294324.1743773427,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3294201.779359435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8484.529352023616,
            "unit": "ns/iter",
            "extra": "iterations: 99448\ncpu: 8483.94336738796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46458.12404908815,
            "unit": "ns/iter",
            "extra": "iterations: 18009\ncpu: 46457.01593647625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37073.92316544239,
            "unit": "ns/iter",
            "extra": "iterations: 22594\ncpu: 37071.718155262344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36549.619547693044,
            "unit": "ns/iter",
            "extra": "iterations: 22949\ncpu: 36547.6404200621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36031.44276992323,
            "unit": "ns/iter",
            "extra": "iterations: 23423\ncpu: 36029.103872262196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 84704.59261784476,
            "unit": "ns/iter",
            "extra": "iterations: 10268\ncpu: 84700.44799376714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 609642.5719999842,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609636.2999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 597454.1420689626,
            "unit": "ns/iter",
            "extra": "iterations: 1450\ncpu: 597413.6551724127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 606782.9505154866,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 606748.9347079031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 598817.328681138,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 598790.5792044691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 341842.5425867785,
            "unit": "ns/iter",
            "extra": "iterations: 2536\ncpu: 341825.39432176796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 581554.6297786613,
            "unit": "ns/iter",
            "extra": "iterations: 1491\ncpu: 581520.7243460793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2555719.016483566,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2555581.0439560576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1123318.4219512036,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 1123289.14634146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5704.27589000019,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5704.0540000000565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30683.38867246331,
            "unit": "ns/iter",
            "extra": "iterations: 26696\ncpu: 30682.46179202882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 24563.538683312152,
            "unit": "ns/iter",
            "extra": "iterations: 33645\ncpu: 24561.46529945023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23947.407358968132,
            "unit": "ns/iter",
            "extra": "iterations: 34407\ncpu: 23946.118522393794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23954.355709585223,
            "unit": "ns/iter",
            "extra": "iterations: 34337\ncpu: 23953.073943559302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70878.4511740905,
            "unit": "ns/iter",
            "extra": "iterations: 12350\ncpu: 70875.08502024258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 583706.5050000092,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583661.2000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 580957.3344327215,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 580924.8680738795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 588532.8839815272,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 588503.6255767934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 575468.599346449,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 575453.333333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 335836.3930901882,
            "unit": "ns/iter",
            "extra": "iterations: 2605\ncpu: 335826.1420345479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 570615.5029315966,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 570580.1302931613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 540.3513888255496,
            "unit": "ns/iter",
            "extra": "iterations: 1295303\ncpu: 540.3463899952376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3266.6778997632077,
            "unit": "ns/iter",
            "extra": "iterations: 213595\ncpu: 3266.630773192252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2646.7963545180055,
            "unit": "ns/iter",
            "extra": "iterations: 263998\ncpu: 2646.807172781626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2648.5927079360313,
            "unit": "ns/iter",
            "extra": "iterations: 264589\ncpu: 2648.5326298523387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2040.2541151091773,
            "unit": "ns/iter",
            "extra": "iterations: 343065\ncpu: 2040.2291111013792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18045.445818031727,
            "unit": "ns/iter",
            "extra": "iterations: 38666\ncpu: 18044.411110536425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32053.4270015013,
            "unit": "ns/iter",
            "extra": "iterations: 22021\ncpu: 32051.9549520915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7585.013062551089,
            "unit": "ns/iter",
            "extra": "iterations: 92325\ncpu: 7584.446249661619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7511.17230392947,
            "unit": "ns/iter",
            "extra": "iterations: 93219\ncpu: 7510.819682682709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7626.219185046551,
            "unit": "ns/iter",
            "extra": "iterations: 92447\ncpu: 7625.563836576617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15220.866046796198,
            "unit": "ns/iter",
            "extra": "iterations: 46031\ncpu: 15220.460124698664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14159.223401613657,
            "unit": "ns/iter",
            "extra": "iterations: 48330\ncpu: 14159.288226774159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5298.527509982376,
            "unit": "ns/iter",
            "extra": "iterations: 131734\ncpu: 5298.352741129797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26667.54250533645,
            "unit": "ns/iter",
            "extra": "iterations: 26232\ncpu: 26666.758157975237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21486.86949178725,
            "unit": "ns/iter",
            "extra": "iterations: 32565\ncpu: 21486.298172885028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21106.99404237234,
            "unit": "ns/iter",
            "extra": "iterations: 32899\ncpu: 21104.975835132067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21592.338206205714,
            "unit": "ns/iter",
            "extra": "iterations: 32356\ncpu: 21590.31709729303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49315.76838391141,
            "unit": "ns/iter",
            "extra": "iterations: 14170\ncpu: 49313.78969654198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 160004.24542960778,
            "unit": "ns/iter",
            "extra": "iterations: 4376\ncpu: 159993.82998171708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 134813.8543670615,
            "unit": "ns/iter",
            "extra": "iterations: 5198\ncpu: 134804.29011158078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133636.66114286217,
            "unit": "ns/iter",
            "extra": "iterations: 5250\ncpu: 133625.25714285581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134738.605582289,
            "unit": "ns/iter",
            "extra": "iterations: 5195\ncpu: 134736.34263715096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84011.45450185244,
            "unit": "ns/iter",
            "extra": "iterations: 8341\ncpu: 84010.39443711714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 135252.66235271,
            "unit": "ns/iter",
            "extra": "iterations: 5177\ncpu: 135245.50898203786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5217.903827911581,
            "unit": "ns/iter",
            "extra": "iterations: 133885\ncpu: 5217.652462934553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26384.09549311581,
            "unit": "ns/iter",
            "extra": "iterations: 26515\ncpu: 26382.172355270435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21060.706222690947,
            "unit": "ns/iter",
            "extra": "iterations: 33185\ncpu: 21059.499773994197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20777.26668247249,
            "unit": "ns/iter",
            "extra": "iterations: 33748\ncpu: 20776.09339812738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21145.207885196534,
            "unit": "ns/iter",
            "extra": "iterations: 33100\ncpu: 21144.129909365718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47675.28427706728,
            "unit": "ns/iter",
            "extra": "iterations: 14711\ncpu: 47673.99904833091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 157720.18519350517,
            "unit": "ns/iter",
            "extra": "iterations: 4444\ncpu: 157709.76597659517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 131364.86375562448,
            "unit": "ns/iter",
            "extra": "iterations: 5336\ncpu: 131353.41079460212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 130197.88058593807,
            "unit": "ns/iter",
            "extra": "iterations: 5393\ncpu: 130198.42388281111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130185.15465073264,
            "unit": "ns/iter",
            "extra": "iterations: 5354\ncpu: 130185.95442659697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82289.36277158033,
            "unit": "ns/iter",
            "extra": "iterations: 8515\ncpu: 82285.12037580763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130103.16373403047,
            "unit": "ns/iter",
            "extra": "iterations: 5399\ncpu: 130097.57362474316 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705957138741,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1412.1299321277797,
            "unit": "ns/iter",
            "extra": "iterations: 491218\ncpu: 1412.099312321617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16786.188972217416,
            "unit": "ns/iter",
            "extra": "iterations: 49203\ncpu: 16785.665508200724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34856.539290955654,
            "unit": "ns/iter",
            "extra": "iterations: 23835\ncpu: 34856.047828823146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52371.450853908114,
            "unit": "ns/iter",
            "extra": "iterations: 16278\ncpu: 52370.561494041045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58382.081000002014,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58380.499999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 73683.42547674243,
            "unit": "ns/iter",
            "extra": "iterations: 11956\ncpu: 73681.39846102371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 87490.52722920597,
            "unit": "ns/iter",
            "extra": "iterations: 10026\ncpu: 87487.74187113505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99772.66407695018,
            "unit": "ns/iter",
            "extra": "iterations: 8109\ncpu: 99769.82365273153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 118608.81851302464,
            "unit": "ns/iter",
            "extra": "iterations: 7411\ncpu: 118594.92646066667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1206.9891010739032,
            "unit": "ns/iter",
            "extra": "iterations: 573818\ncpu: 1206.929200547909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 961.3103716872864,
            "unit": "ns/iter",
            "extra": "iterations: 727924\ncpu: 961.2625768624214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 945.217507552511,
            "unit": "ns/iter",
            "extra": "iterations: 734186\ncpu: 945.1543614288483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 947.2427045298004,
            "unit": "ns/iter",
            "extra": "iterations: 736690\ncpu: 947.1935278068129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1929.68794070023,
            "unit": "ns/iter",
            "extra": "iterations: 362633\ncpu: 1929.5872135189047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5507.817789999763,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5507.711000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31133.466935242308,
            "unit": "ns/iter",
            "extra": "iterations: 26312\ncpu: 31132.79492246885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 25131.714507203757,
            "unit": "ns/iter",
            "extra": "iterations: 32894\ncpu: 25131.276220587348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24424.36560999856,
            "unit": "ns/iter",
            "extra": "iterations: 33533\ncpu: 24424.01813139302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24542.223859668455,
            "unit": "ns/iter",
            "extra": "iterations: 33521\ncpu: 24541.603770770536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 71429.29726328849,
            "unit": "ns/iter",
            "extra": "iterations: 12716\ncpu: 71422.4756212646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 586802.7010000105,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 586765.500000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 554945.1057692505,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 554869.3589743582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 561848.6145966888,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 561801.6005121651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 556576.4731391999,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 556564.3365695799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 324541.76980850636,
            "unit": "ns/iter",
            "extra": "iterations: 2663\ncpu: 324515.32106646564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 562399.9702265055,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 562357.0226537215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2400300.3711339417,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2400153.092783501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1101604.1662707988,
            "unit": "ns/iter",
            "extra": "iterations: 842\ncpu: 1101577.5534441832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3336267.032257941,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3336091.0394265326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8580.63093667223,
            "unit": "ns/iter",
            "extra": "iterations: 97761\ncpu: 8580.485060504692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 45848.6555167216,
            "unit": "ns/iter",
            "extra": "iterations: 18027\ncpu: 45847.911466134094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36647.43557249378,
            "unit": "ns/iter",
            "extra": "iterations: 22568\ncpu: 36646.92484934416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36477.66117126955,
            "unit": "ns/iter",
            "extra": "iterations: 22625\ncpu: 36476.37127071806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36109.36592142468,
            "unit": "ns/iter",
            "extra": "iterations: 23035\ncpu: 36107.84458432832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 84583.06565950008,
            "unit": "ns/iter",
            "extra": "iterations: 10326\ncpu: 84580.18593840818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 622473.0620000401,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 622442.4000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 612836.422096338,
            "unit": "ns/iter",
            "extra": "iterations: 1412\ncpu: 612813.1019830012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 602954.2824106609,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 602941.6958654479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 617241.6104972385,
            "unit": "ns/iter",
            "extra": "iterations: 1448\ncpu: 617223.4806629859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 347442.4348855368,
            "unit": "ns/iter",
            "extra": "iterations: 2534\ncpu: 347427.1112865059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 595437.8150917619,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 595421.1420802167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2536636.7762432564,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2536511.8784530247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1129687.1516991123,
            "unit": "ns/iter",
            "extra": "iterations: 824\ncpu: 1129642.9611650498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5632.43056000033,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5632.313999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 31092.961726264522,
            "unit": "ns/iter",
            "extra": "iterations: 26624\ncpu: 31091.50766225964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 24246.341228981542,
            "unit": "ns/iter",
            "extra": "iterations: 33605\ncpu: 24245.689629519402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23743.615581354992,
            "unit": "ns/iter",
            "extra": "iterations: 34798\ncpu: 23743.200758664323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23992.866286180608,
            "unit": "ns/iter",
            "extra": "iterations: 34342\ncpu: 23992.455302544924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70605.20324219941,
            "unit": "ns/iter",
            "extra": "iterations: 12399\ncpu: 70602.52439712881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 581845.3020000334,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 581834.7000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 586302.2315369577,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 586286.294078513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 583172.0040623345,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 583147.1225457038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 579186.252311785,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 579176.6182298553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 335615.0553013214,
            "unit": "ns/iter",
            "extra": "iterations: 2622\ncpu: 335602.6697177739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 590837.933512411,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 590805.2384150425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 545.9233364474994,
            "unit": "ns/iter",
            "extra": "iterations: 1280152\ncpu: 545.9211874839914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3317.715731322868,
            "unit": "ns/iter",
            "extra": "iterations: 210885\ncpu: 3317.701590914497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2455.426620896397,
            "unit": "ns/iter",
            "extra": "iterations: 284611\ncpu: 2455.3797990942026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2550.29577916624,
            "unit": "ns/iter",
            "extra": "iterations: 274306\ncpu: 2550.254095790814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2036.031488691041,
            "unit": "ns/iter",
            "extra": "iterations: 343933\ncpu: 2035.9695056886153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17911.853941507434,
            "unit": "ns/iter",
            "extra": "iterations: 39046\ncpu: 17911.504379449976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31058.71799653662,
            "unit": "ns/iter",
            "extra": "iterations: 22521\ncpu: 31058.065805248163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7622.970892590605,
            "unit": "ns/iter",
            "extra": "iterations: 91901\ncpu: 7622.863733800425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7627.501373372583,
            "unit": "ns/iter",
            "extra": "iterations: 92109\ncpu: 7627.247065976161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7620.7903257279795,
            "unit": "ns/iter",
            "extra": "iterations: 92224\ncpu: 7620.652975364342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15174.167615419696,
            "unit": "ns/iter",
            "extra": "iterations: 46201\ncpu: 15173.794939503667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14510.118182966124,
            "unit": "ns/iter",
            "extra": "iterations: 47528\ncpu: 14509.61117656973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5282.528800222456,
            "unit": "ns/iter",
            "extra": "iterations: 132933\ncpu: 5282.421971970852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26812.332848227983,
            "unit": "ns/iter",
            "extra": "iterations: 26111\ncpu: 26811.40898471935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21360.091323640587,
            "unit": "ns/iter",
            "extra": "iterations: 32675\ncpu: 21359.706197398904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21375.4120014617,
            "unit": "ns/iter",
            "extra": "iterations: 32796\ncpu: 21374.484693255086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21676.507742916456,
            "unit": "ns/iter",
            "extra": "iterations: 32223\ncpu: 21675.849548459195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49339.228529222004,
            "unit": "ns/iter",
            "extra": "iterations: 14217\ncpu: 49337.19490750519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 163122.8586046386,
            "unit": "ns/iter",
            "extra": "iterations: 4300\ncpu: 163119.5116279083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 136957.5835289525,
            "unit": "ns/iter",
            "extra": "iterations: 5112\ncpu: 136949.72613458458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 134803.98688524656,
            "unit": "ns/iter",
            "extra": "iterations: 5185\ncpu: 134799.55641272763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 135732.0726429773,
            "unit": "ns/iter",
            "extra": "iterations: 5176\ncpu: 135728.30370942803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84685.68782493874,
            "unit": "ns/iter",
            "extra": "iterations: 8271\ncpu: 84683.012936767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 135389.82395994235,
            "unit": "ns/iter",
            "extra": "iterations: 5192\ncpu: 135387.23035439017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5180.119673450881,
            "unit": "ns/iter",
            "extra": "iterations: 135477\ncpu: 5179.951578496776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26221.76742108451,
            "unit": "ns/iter",
            "extra": "iterations: 26864\ncpu: 26220.782459797472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21000.700610325897,
            "unit": "ns/iter",
            "extra": "iterations: 33261\ncpu: 20999.46483869974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20684.231513540573,
            "unit": "ns/iter",
            "extra": "iterations: 33795\ncpu: 20683.145435715593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20984.16769424308,
            "unit": "ns/iter",
            "extra": "iterations: 33412\ncpu: 20983.134801867513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47364.5620220622,
            "unit": "ns/iter",
            "extra": "iterations: 14777\ncpu: 47363.53116329429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 180996.38376552094,
            "unit": "ns/iter",
            "extra": "iterations: 4435\ncpu: 180990.0563697862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128939.10927152967,
            "unit": "ns/iter",
            "extra": "iterations: 5436\ncpu: 128936.69977925133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127549.68724954626,
            "unit": "ns/iter",
            "extra": "iterations: 5490\ncpu: 127546.22950819763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129510.73222835478,
            "unit": "ns/iter",
            "extra": "iterations: 5430\ncpu: 129508.72928176878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82604.73504778353,
            "unit": "ns/iter",
            "extra": "iterations: 8477\ncpu: 82603.42102158729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129147.65090174093,
            "unit": "ns/iter",
            "extra": "iterations: 5434\ncpu: 129139.82333455974 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705958566071,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1418.7717786481574,
            "unit": "ns/iter",
            "extra": "iterations: 490423\ncpu: 1418.7130293644466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16692.23421802621,
            "unit": "ns/iter",
            "extra": "iterations: 49471\ncpu: 16691.821471164923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35452.46107399458,
            "unit": "ns/iter",
            "extra": "iterations: 23352\ncpu: 35451.010620075365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52851.9882256639,
            "unit": "ns/iter",
            "extra": "iterations: 15882\ncpu: 52850.251857448675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57863.59270000503,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57862.460000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 75537.02880026822,
            "unit": "ns/iter",
            "extra": "iterations: 11736\ncpu: 75535.18234492157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 86003.74011523905,
            "unit": "ns/iter",
            "extra": "iterations: 10066\ncpu: 85999.5827538248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 100651.31491712695,
            "unit": "ns/iter",
            "extra": "iterations: 8688\ncpu: 100649.04465930023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115254.68366801564,
            "unit": "ns/iter",
            "extra": "iterations: 7470\ncpu: 115251.3788487281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1230.305996037842,
            "unit": "ns/iter",
            "extra": "iterations: 569893\ncpu: 1230.2853342645026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 979.5253850261929,
            "unit": "ns/iter",
            "extra": "iterations: 713393\ncpu: 979.4807350226316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 978.4223745878969,
            "unit": "ns/iter",
            "extra": "iterations: 719468\ncpu: 978.4029310546106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 965.4137826492698,
            "unit": "ns/iter",
            "extra": "iterations: 725666\ncpu: 965.4076393271853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1919.670782208786,
            "unit": "ns/iter",
            "extra": "iterations: 364877\ncpu: 1919.6392208881346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5709.21875999943,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5709.095000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31529.024124241205,
            "unit": "ns/iter",
            "extra": "iterations: 25949\ncpu: 31526.598327488562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24817.943821569646,
            "unit": "ns/iter",
            "extra": "iterations: 33358\ncpu: 24817.75286288149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24297.934591011915,
            "unit": "ns/iter",
            "extra": "iterations: 33925\ncpu: 24297.23507737658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24195.859809477286,
            "unit": "ns/iter",
            "extra": "iterations: 33697\ncpu: 24195.008457726264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 72590.94139580341,
            "unit": "ns/iter",
            "extra": "iterations: 12337\ncpu: 72584.6802302017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 541551.7389999423,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541506.899999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 565725.8535645539,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 565698.2016698784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 563713.2512953788,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 563676.4896373065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 556058.8895311068,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 556025.3692999374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 327536.6716020962,
            "unit": "ns/iter",
            "extra": "iterations: 2634\ncpu: 327511.5034168564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 556651.1832159256,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 556636.1947469569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2376820.048593311,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2376653.7084398973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1097345.348341201,
            "unit": "ns/iter",
            "extra": "iterations: 844\ncpu: 1097291.9431279614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3292725.558303766,
            "unit": "ns/iter",
            "extra": "iterations: 283\ncpu: 3292589.0459364033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8419.455294129491,
            "unit": "ns/iter",
            "extra": "iterations: 100177\ncpu: 8418.741826966281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 45913.62477866551,
            "unit": "ns/iter",
            "extra": "iterations: 18072\ncpu: 45910.91190792392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36590.36003544543,
            "unit": "ns/iter",
            "extra": "iterations: 22570\ncpu: 36588.34736375704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36181.56666521694,
            "unit": "ns/iter",
            "extra": "iterations: 23003\ncpu: 36179.31574142502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 35467.377516123335,
            "unit": "ns/iter",
            "extra": "iterations: 23101\ncpu: 35464.984199818275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 85141.90814943638,
            "unit": "ns/iter",
            "extra": "iterations: 10332\ncpu: 85141.18273325586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 618201.9080000601,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 618178.2999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 592733.9028651397,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 592713.4171907768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 605413.3016194926,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 605393.9946018878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 602007.0737647772,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 601997.5643702169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 339942.0857929845,
            "unit": "ns/iter",
            "extra": "iterations: 2541\ncpu: 339933.33333333425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 579377.0465116387,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 579367.1760797381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2556491.3424656494,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2556363.8356164326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1118577.0191386936,
            "unit": "ns/iter",
            "extra": "iterations: 836\ncpu: 1118548.4449760804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5616.7016100005185,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5616.499000000062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29208.239330966353,
            "unit": "ns/iter",
            "extra": "iterations: 27861\ncpu: 29207.487168443473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 22918.553872430308,
            "unit": "ns/iter",
            "extra": "iterations: 35714\ncpu: 22918.205745645835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22296.30506761319,
            "unit": "ns/iter",
            "extra": "iterations: 36605\ncpu: 22295.577106952504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22598.659906611985,
            "unit": "ns/iter",
            "extra": "iterations: 36193\ncpu: 22597.546486889692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70949.55302230988,
            "unit": "ns/iter",
            "extra": "iterations: 12325\ncpu: 70947.31845841811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 597591.1130000213,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597586.9999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 598731.6328337954,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 598706.8801089919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 594130.5385665454,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 594057.8839590467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 589771.8501344073,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 589766.8682795694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 334051.19992372324,
            "unit": "ns/iter",
            "extra": "iterations: 2621\ncpu: 334041.73979397124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 577352.021897831,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 577328.8652952865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 541.7763184773306,
            "unit": "ns/iter",
            "extra": "iterations: 1287451\ncpu: 541.7481519685036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3233.2306710330213,
            "unit": "ns/iter",
            "extra": "iterations: 216204\ncpu: 3233.176074448201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2594.178529148643,
            "unit": "ns/iter",
            "extra": "iterations: 269463\ncpu: 2594.1272085592395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2468.162561334285,
            "unit": "ns/iter",
            "extra": "iterations: 284508\ncpu: 2467.954152431563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2064.762381553885,
            "unit": "ns/iter",
            "extra": "iterations: 338972\ncpu: 2064.630411951426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18187.604393600315,
            "unit": "ns/iter",
            "extra": "iterations: 38374\ncpu: 18186.201594829698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 32598.227149405295,
            "unit": "ns/iter",
            "extra": "iterations: 21378\ncpu: 32596.37010010284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7642.323561606934,
            "unit": "ns/iter",
            "extra": "iterations: 91352\ncpu: 7641.760443121132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7589.011501611071,
            "unit": "ns/iter",
            "extra": "iterations: 92161\ncpu: 7588.718655396543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7597.871052118009,
            "unit": "ns/iter",
            "extra": "iterations: 92138\ncpu: 7597.368078317289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15062.340575644665,
            "unit": "ns/iter",
            "extra": "iterations: 46348\ncpu: 15061.81064986631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 12997.320792812328,
            "unit": "ns/iter",
            "extra": "iterations: 53985\ncpu: 12996.991756969519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5303.471235360795,
            "unit": "ns/iter",
            "extra": "iterations: 132350\ncpu: 5303.244427653927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26546.626982317186,
            "unit": "ns/iter",
            "extra": "iterations: 26358\ncpu: 26545.91395401786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21437.44862447255,
            "unit": "ns/iter",
            "extra": "iterations: 32642\ncpu: 21437.093315360704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21201.764116382932,
            "unit": "ns/iter",
            "extra": "iterations: 33029\ncpu: 21201.404826061942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21657.03735044239,
            "unit": "ns/iter",
            "extra": "iterations: 32262\ncpu: 21656.357324406676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 48824.155338447556,
            "unit": "ns/iter",
            "extra": "iterations: 14330\ncpu: 48823.16817864606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 161853.81555863467,
            "unit": "ns/iter",
            "extra": "iterations: 4332\ncpu: 161852.56232686824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 136719.956267081,
            "unit": "ns/iter",
            "extra": "iterations: 5122\ncpu: 136717.16126513045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133541.38796562018,
            "unit": "ns/iter",
            "extra": "iterations: 5235\ncpu: 133536.98185291234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134361.54299944206,
            "unit": "ns/iter",
            "extra": "iterations: 5221\ncpu: 134354.5489369839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83621.12674542902,
            "unit": "ns/iter",
            "extra": "iterations: 8379\ncpu: 83619.59661057331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131457.08569816954,
            "unit": "ns/iter",
            "extra": "iterations: 5321\ncpu: 131456.32399924917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5137.570387779493,
            "unit": "ns/iter",
            "extra": "iterations: 136160\ncpu: 5137.468419506472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25943.429090100686,
            "unit": "ns/iter",
            "extra": "iterations: 26992\ncpu: 25942.94235329031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20845.924160734205,
            "unit": "ns/iter",
            "extra": "iterations: 33571\ncpu: 20845.333770218414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20486.557875428585,
            "unit": "ns/iter",
            "extra": "iterations: 34341\ncpu: 20486.1914329811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20793.61956682793,
            "unit": "ns/iter",
            "extra": "iterations: 33751\ncpu: 20793.081686468744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47240.658661630594,
            "unit": "ns/iter",
            "extra": "iterations: 14824\ncpu: 47240.366972476746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 156601.22483221625,
            "unit": "ns/iter",
            "extra": "iterations: 4470\ncpu: 156594.6532438469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130894.53196260994,
            "unit": "ns/iter",
            "extra": "iterations: 5350\ncpu: 130891.88785046608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128628.27755326752,
            "unit": "ns/iter",
            "extra": "iterations: 5444\ncpu: 128626.15723732607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 130103.26124952752,
            "unit": "ns/iter",
            "extra": "iterations: 5378\ncpu: 130098.66121234743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82258.296919099,
            "unit": "ns/iter",
            "extra": "iterations: 8504\ncpu: 82255.60912511748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129838.33530609397,
            "unit": "ns/iter",
            "extra": "iterations: 5407\ncpu: 129836.17532827756 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705960007251,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1432.8827074839364,
            "unit": "ns/iter",
            "extra": "iterations: 488616\ncpu: 1432.825367978126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17452.11945314805,
            "unit": "ns/iter",
            "extra": "iterations: 48203\ncpu: 17451.142045100933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35150.46649462058,
            "unit": "ns/iter",
            "extra": "iterations: 23250\ncpu: 35148.61935483872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51999.17605590183,
            "unit": "ns/iter",
            "extra": "iterations: 16171\ncpu: 51996.456619875076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57457.646800003204,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57453.72 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72825.21928731151,
            "unit": "ns/iter",
            "extra": "iterations: 12039\ncpu: 72817.10274939773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 86511.03917280026,
            "unit": "ns/iter",
            "extra": "iterations: 10058\ncpu: 86505.04076357136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98217.84192953697,
            "unit": "ns/iter",
            "extra": "iterations: 8686\ncpu: 98211.44370250986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115596.94221206622,
            "unit": "ns/iter",
            "extra": "iterations: 7441\ncpu: 115590.52546700698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1216.20079103294,
            "unit": "ns/iter",
            "extra": "iterations: 575703\ncpu: 1216.1651059660962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1016.679485957665,
            "unit": "ns/iter",
            "extra": "iterations: 703055\ncpu: 1016.6260107672937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 992.1503350932057,
            "unit": "ns/iter",
            "extra": "iterations: 705923\ncpu: 992.0859640499035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 967.8166007206798,
            "unit": "ns/iter",
            "extra": "iterations: 724583\ncpu: 967.7557988525806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1922.9956550783802,
            "unit": "ns/iter",
            "extra": "iterations: 365254\ncpu: 1922.8613512788377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5721.38764999977,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5721.18999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31163.874562227382,
            "unit": "ns/iter",
            "extra": "iterations: 26555\ncpu: 31163.035209941605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24893.187458465807,
            "unit": "ns/iter",
            "extra": "iterations: 33106\ncpu: 24892.043738295164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24322.917575899704,
            "unit": "ns/iter",
            "extra": "iterations: 33728\ncpu: 24322.129981024715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24424.746179381473,
            "unit": "ns/iter",
            "extra": "iterations: 33437\ncpu: 24423.74315877619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 72314.1913680854,
            "unit": "ns/iter",
            "extra": "iterations: 12280\ncpu: 72310.0570032572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 573577.5370000056,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573559.1000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 571501.7720685493,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 571475.2964426883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 576636.7251808369,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 576598.3563445096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 571944.8855622171,
            "unit": "ns/iter",
            "extra": "iterations: 1503\ncpu: 571899.4011976055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 334982.895295911,
            "unit": "ns/iter",
            "extra": "iterations: 2636\ncpu: 334961.68437025783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 569833.5859831386,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 569805.1265412077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2407689.1162791112,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2407567.9586563264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1107194.1937424822,
            "unit": "ns/iter",
            "extra": "iterations: 831\ncpu: 1107155.4753309286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3317142.3807828003,
            "unit": "ns/iter",
            "extra": "iterations: 281\ncpu: 3316933.8078291905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8479.415502436841,
            "unit": "ns/iter",
            "extra": "iterations: 98062\ncpu: 8478.789949215785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46259.10302013813,
            "unit": "ns/iter",
            "extra": "iterations: 17880\ncpu: 46257.052572706896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37081.63003352003,
            "unit": "ns/iter",
            "extra": "iterations: 22375\ncpu: 37079.9329608938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36658.37371408461,
            "unit": "ns/iter",
            "extra": "iterations: 22552\ncpu: 36656.10588861315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36471.6966026858,
            "unit": "ns/iter",
            "extra": "iterations: 22871\ncpu: 36468.88199029329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 85811.7586071986,
            "unit": "ns/iter",
            "extra": "iterations: 10224\ncpu: 85804.73395931105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 620561.9229999684,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 620530.2999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 612945.6961483611,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 612905.7061340914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 608849.0838573917,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 608811.4605171179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 589750.9822404357,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 589707.923497266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 344902.5799522572,
            "unit": "ns/iter",
            "extra": "iterations: 2514\ncpu: 344880.6284805086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 598625.9663922905,
            "unit": "ns/iter",
            "extra": "iterations: 1458\ncpu: 598580.1097393654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2536932.986301558,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2536766.301369867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1142059.4024691777,
            "unit": "ns/iter",
            "extra": "iterations: 810\ncpu: 1141952.8395061698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5683.936419999326,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5683.357999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 31111.39051927483,
            "unit": "ns/iter",
            "extra": "iterations: 26306\ncpu: 31109.446514103292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 24576.370590321185,
            "unit": "ns/iter",
            "extra": "iterations: 33846\ncpu: 24574.706021391004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23910.308339576553,
            "unit": "ns/iter",
            "extra": "iterations: 34702\ncpu: 23908.838107313673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23571.63050857294,
            "unit": "ns/iter",
            "extra": "iterations: 35059\ncpu: 23571.21138651969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 69788.77561450218,
            "unit": "ns/iter",
            "extra": "iterations: 12327\ncpu: 69785.87653119165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 597264.8470000194,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597235.3000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 588293.932203407,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 588275.7288135637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 585668.951283764,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 585649.9012508221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 587525.8919463063,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 587477.6510067113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 340876.123599863,
            "unit": "ns/iter",
            "extra": "iterations: 2589\ncpu: 340858.6713016588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 575561.3917663286,
            "unit": "ns/iter",
            "extra": "iterations: 1506\ncpu: 575528.0212483379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 549.6127999215902,
            "unit": "ns/iter",
            "extra": "iterations: 1265914\ncpu: 549.5991828828804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3263.2729484048486,
            "unit": "ns/iter",
            "extra": "iterations: 214187\ncpu: 3263.1252130147795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2564.73810877309,
            "unit": "ns/iter",
            "extra": "iterations: 272659\ncpu: 2564.6815252751608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2678.2508253733113,
            "unit": "ns/iter",
            "extra": "iterations: 260791\ncpu: 2678.197483808869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2034.8958495364134,
            "unit": "ns/iter",
            "extra": "iterations: 344588\ncpu: 2034.8250664561745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18093.734048355196,
            "unit": "ns/iter",
            "extra": "iterations: 38507\ncpu: 18092.178045550285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31978.68364134213,
            "unit": "ns/iter",
            "extra": "iterations: 21915\ncpu: 31977.49942961429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 8042.391970416611,
            "unit": "ns/iter",
            "extra": "iterations: 87078\ncpu: 8041.83260984405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7761.419744727313,
            "unit": "ns/iter",
            "extra": "iterations: 90100\ncpu: 7760.970033296411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7941.606547895435,
            "unit": "ns/iter",
            "extra": "iterations: 88181\ncpu: 7941.126773341297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14682.7005985524,
            "unit": "ns/iter",
            "extra": "iterations: 47615\ncpu: 14682.27449333185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14381.39440245612,
            "unit": "ns/iter",
            "extra": "iterations: 48557\ncpu: 14381.12939431991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5291.829260005952,
            "unit": "ns/iter",
            "extra": "iterations: 132447\ncpu: 5291.598903712369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26872.87407263224,
            "unit": "ns/iter",
            "extra": "iterations: 25745\ncpu: 26871.699359099035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21866.492831317602,
            "unit": "ns/iter",
            "extra": "iterations: 32084\ncpu: 21866.310310434874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21955.907334548385,
            "unit": "ns/iter",
            "extra": "iterations: 31263\ncpu: 21955.049099574604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21956.178767948233,
            "unit": "ns/iter",
            "extra": "iterations: 31622\ncpu: 21955.369679337142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49134.7206782523,
            "unit": "ns/iter",
            "extra": "iterations: 14213\ncpu: 49131.33750791606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 162719.98704004526,
            "unit": "ns/iter",
            "extra": "iterations: 4321\ncpu: 162718.56051839725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 136279.7978163463,
            "unit": "ns/iter",
            "extra": "iterations: 5129\ncpu: 136272.5287580425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 135397.33719359324,
            "unit": "ns/iter",
            "extra": "iterations: 5181\ncpu: 135392.43389306962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 136294.14252289425,
            "unit": "ns/iter",
            "extra": "iterations: 5129\ncpu: 136289.66660167894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84444.40660399575,
            "unit": "ns/iter",
            "extra": "iterations: 8298\ncpu: 84440.11810074591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 134508.85978071444,
            "unit": "ns/iter",
            "extra": "iterations: 5199\ncpu: 134505.6356991737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5184.792820315103,
            "unit": "ns/iter",
            "extra": "iterations: 135187\ncpu: 5184.5347555607905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26128.79732864647,
            "unit": "ns/iter",
            "extra": "iterations: 26728\ncpu: 26128.112840466474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20992.494837007103,
            "unit": "ns/iter",
            "extra": "iterations: 33314\ncpu: 20991.378999819965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20714.9536241327,
            "unit": "ns/iter",
            "extra": "iterations: 33746\ncpu: 20713.444556391863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21161.567059892484,
            "unit": "ns/iter",
            "extra": "iterations: 33060\ncpu: 21160.148215366153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47831.17071169779,
            "unit": "ns/iter",
            "extra": "iterations: 14627\ncpu: 47827.380870992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 157561.20567694283,
            "unit": "ns/iter",
            "extra": "iterations: 4439\ncpu: 157549.62829466164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 131672.93497461773,
            "unit": "ns/iter",
            "extra": "iterations: 5321\ncpu: 131665.87107686594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 130085.79784866385,
            "unit": "ns/iter",
            "extra": "iterations: 5392\ncpu: 130078.07863501443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 131677.82531026256,
            "unit": "ns/iter",
            "extra": "iterations: 5318\ncpu: 131674.1444151953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82693.55351646077,
            "unit": "ns/iter",
            "extra": "iterations: 8446\ncpu: 82688.71655221378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130833.84159341131,
            "unit": "ns/iter",
            "extra": "iterations: 5347\ncpu: 130823.73293435427 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705962083864,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1429.2919462394264,
            "unit": "ns/iter",
            "extra": "iterations: 484072\ncpu: 1429.2489547009536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 17168.977022269275,
            "unit": "ns/iter",
            "extra": "iterations: 48003\ncpu: 17168.174905735057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35457.76797526014,
            "unit": "ns/iter",
            "extra": "iterations: 23282\ncpu: 35456.812129542144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52539.21763975221,
            "unit": "ns/iter",
            "extra": "iterations: 16100\ncpu: 52537.42857142858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 58434.446199999,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58429.809999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72879.54131988178,
            "unit": "ns/iter",
            "extra": "iterations: 11895\ncpu: 72876.76334594372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 87184.2357468371,
            "unit": "ns/iter",
            "extra": "iterations: 9875\ncpu: 87180.27341772147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 103002.41697761707,
            "unit": "ns/iter",
            "extra": "iterations: 8576\ncpu: 103000.66464552235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 117470.39966202568,
            "unit": "ns/iter",
            "extra": "iterations: 7101\ncpu: 117468.7649626814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1229.2583484879092,
            "unit": "ns/iter",
            "extra": "iterations: 569684\ncpu: 1229.2534106627538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 996.951750493276,
            "unit": "ns/iter",
            "extra": "iterations: 707572\ncpu: 996.8883731973569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 976.4609244524165,
            "unit": "ns/iter",
            "extra": "iterations: 716727\ncpu: 976.420450185356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 972.4047796438786,
            "unit": "ns/iter",
            "extra": "iterations: 720765\ncpu: 972.3546509611326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1923.2600336581984,
            "unit": "ns/iter",
            "extra": "iterations: 364249\ncpu: 1923.1371946113795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5731.2264699999105,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5731.170000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 32011.21271041313,
            "unit": "ns/iter",
            "extra": "iterations: 25664\ncpu: 32011.412874064856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 25423.106222304654,
            "unit": "ns/iter",
            "extra": "iterations: 32046\ncpu: 25422.723584846768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24489.77407462372,
            "unit": "ns/iter",
            "extra": "iterations: 33635\ncpu: 24488.485208859885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24544.67192409981,
            "unit": "ns/iter",
            "extra": "iterations: 33413\ncpu: 24542.92939873703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 72213.54118123643,
            "unit": "ns/iter",
            "extra": "iterations: 12360\ncpu: 72212.68608414211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 568703.6749999379,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 568691.3999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 559180.3333333015,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 559170.9385113271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 561575.6745827731,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 561543.7098844674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 586253.0110965394,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 586162.0757180154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 330734.1484848576,
            "unit": "ns/iter",
            "extra": "iterations: 2640\ncpu: 330716.0227272732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 573018.391332895,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 573009.3893630978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2417402.795337017,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2417246.3730570017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1105867.600478385,
            "unit": "ns/iter",
            "extra": "iterations: 836\ncpu: 1105848.5645933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3304116.7071429202,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3303958.92857143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8624.417677005114,
            "unit": "ns/iter",
            "extra": "iterations: 97822\ncpu: 8624.29514833065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 45805.876368035875,
            "unit": "ns/iter",
            "extra": "iterations: 18183\ncpu: 45775.9500632459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36661.10147213584,
            "unit": "ns/iter",
            "extra": "iterations: 22824\ncpu: 36660.83946722744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36348.29533295609,
            "unit": "ns/iter",
            "extra": "iterations: 22991\ncpu: 36346.43121221349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 35784.139198694786,
            "unit": "ns/iter",
            "extra": "iterations: 23312\ncpu: 35781.95778997956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 84906.40615864063,
            "unit": "ns/iter",
            "extra": "iterations: 10262\ncpu: 84901.36425647975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 603597.1090000203,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603575.6000000063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 607533.499651539,
            "unit": "ns/iter",
            "extra": "iterations: 1435\ncpu: 607526.9686411151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 606757.4513646222,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 606739.2582225363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 590545.4328358758,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 590515.5359565818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 343126.3277013684,
            "unit": "ns/iter",
            "extra": "iterations: 2545\ncpu: 343125.3831041245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 582224.9409396093,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 582198.9261744973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2561674.314207674,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2561588.7978142127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1113140.6301204327,
            "unit": "ns/iter",
            "extra": "iterations: 830\ncpu: 1113100.1204819295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5724.423330000263,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5724.355999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30804.18181481338,
            "unit": "ns/iter",
            "extra": "iterations: 26989\ncpu: 30801.722924154154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 24513.09350251662,
            "unit": "ns/iter",
            "extra": "iterations: 33967\ncpu: 24512.111755527356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23701.60297342864,
            "unit": "ns/iter",
            "extra": "iterations: 35111\ncpu: 23700.042721654292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23978.0361334601,
            "unit": "ns/iter",
            "extra": "iterations: 34677\ncpu: 23977.183724082188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 71093.10802800365,
            "unit": "ns/iter",
            "extra": "iterations: 12145\ncpu: 71088.01976121837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 581512.5770000123,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 581468.1999999962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 585349.9274575894,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 585294.7118644033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 594058.0499667022,
            "unit": "ns/iter",
            "extra": "iterations: 1501\ncpu: 594057.6948700872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 584882.9513841714,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 584853.8825118175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 332248.12086659216,
            "unit": "ns/iter",
            "extra": "iterations: 2631\ncpu: 332219.91638160514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 570004.2119635548,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 570007.6072821865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 544.8951801823999,
            "unit": "ns/iter",
            "extra": "iterations: 1286169\ncpu: 544.8532813339482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3284.6504276401565,
            "unit": "ns/iter",
            "extra": "iterations: 212328\ncpu: 3284.615312158522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2652.382035605244,
            "unit": "ns/iter",
            "extra": "iterations: 263499\ncpu: 2652.3049423337434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2616.500352783681,
            "unit": "ns/iter",
            "extra": "iterations: 266452\ncpu: 2616.4029543782794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2028.3814779531672,
            "unit": "ns/iter",
            "extra": "iterations: 347467\ncpu: 2028.3336259270723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18155.721368861366,
            "unit": "ns/iter",
            "extra": "iterations: 38280\ncpu: 18155.540752351346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 33069.29390579259,
            "unit": "ns/iter",
            "extra": "iterations: 21102\ncpu: 33068.84655482927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7732.795284920583,
            "unit": "ns/iter",
            "extra": "iterations: 90306\ncpu: 7732.63902730712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7672.4053879065,
            "unit": "ns/iter",
            "extra": "iterations: 91130\ncpu: 7672.256117634052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7727.272279681345,
            "unit": "ns/iter",
            "extra": "iterations: 90789\ncpu: 7727.11121391364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15449.770956993392,
            "unit": "ns/iter",
            "extra": "iterations: 45319\ncpu: 15449.378847724189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14448.82452294315,
            "unit": "ns/iter",
            "extra": "iterations: 47898\ncpu: 14448.509332331201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5301.781633794432,
            "unit": "ns/iter",
            "extra": "iterations: 132232\ncpu: 5301.1200012099625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26357.434107069013,
            "unit": "ns/iter",
            "extra": "iterations: 26581\ncpu: 26355.046837966776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21223.907981420714,
            "unit": "ns/iter",
            "extra": "iterations: 32939\ncpu: 21223.731746561887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21309.300493512663,
            "unit": "ns/iter",
            "extra": "iterations: 32826\ncpu: 21307.88399439471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21528.803532349513,
            "unit": "ns/iter",
            "extra": "iterations: 32443\ncpu: 21528.588601547428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49096.16936848431,
            "unit": "ns/iter",
            "extra": "iterations: 14188\ncpu: 49091.18973780739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 161767.09032406867,
            "unit": "ns/iter",
            "extra": "iterations: 4351\ncpu: 161755.52746495116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133649.98776524296,
            "unit": "ns/iter",
            "extra": "iterations: 5231\ncpu: 133647.69642515696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131395.1283553738,
            "unit": "ns/iter",
            "extra": "iterations: 5290\ncpu: 131389.86767485717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132522.21343648294,
            "unit": "ns/iter",
            "extra": "iterations: 5299\ncpu: 132520.85299113137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83410.98544847689,
            "unit": "ns/iter",
            "extra": "iterations: 8384\ncpu: 83410.41269083913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132495.04422603457,
            "unit": "ns/iter",
            "extra": "iterations: 5291\ncpu: 132492.28879229087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5165.428963811908,
            "unit": "ns/iter",
            "extra": "iterations: 135072\ncpu: 5165.123045486884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26281.272171364893,
            "unit": "ns/iter",
            "extra": "iterations: 26656\ncpu: 26280.953631452558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20757.67298212238,
            "unit": "ns/iter",
            "extra": "iterations: 33674\ncpu: 20756.73219694753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20556.037339522623,
            "unit": "ns/iter",
            "extra": "iterations: 34039\ncpu: 20555.589177120437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20802.10917354999,
            "unit": "ns/iter",
            "extra": "iterations: 33662\ncpu: 20800.992216742972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48209.01369579937,
            "unit": "ns/iter",
            "extra": "iterations: 14530\ncpu: 48208.245010323706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 155867.50857270462,
            "unit": "ns/iter",
            "extra": "iterations: 4491\ncpu: 155861.3894455575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130399.9517756969,
            "unit": "ns/iter",
            "extra": "iterations: 5350\ncpu: 130398.39252336293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129136.6378039775,
            "unit": "ns/iter",
            "extra": "iterations: 5428\ncpu: 129135.05895357378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 131665.30997557854,
            "unit": "ns/iter",
            "extra": "iterations: 5323\ncpu: 131664.4561337581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 84308.44211409033,
            "unit": "ns/iter",
            "extra": "iterations: 8344\ncpu: 84306.74736337537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 131350.04020007065,
            "unit": "ns/iter",
            "extra": "iterations: 5398\ncpu: 131149.01815487092 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705963549096,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1391.9477816726026,
            "unit": "ns/iter",
            "extra": "iterations: 501797\ncpu: 1391.4236234971515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16332.077953739032,
            "unit": "ns/iter",
            "extra": "iterations: 50453\ncpu: 16331.062573087827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 35174.99312555067,
            "unit": "ns/iter",
            "extra": "iterations: 23711\ncpu: 35172.94926405467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51966.27618872147,
            "unit": "ns/iter",
            "extra": "iterations: 16257\ncpu: 51964.83976133359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 57480.27120000643,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57479.57999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 72913.75574973162,
            "unit": "ns/iter",
            "extra": "iterations: 12131\ncpu: 72909.12538125462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 86406.2671686804,
            "unit": "ns/iter",
            "extra": "iterations: 9960\ncpu: 86400.86345381527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99492.51318973675,
            "unit": "ns/iter",
            "extra": "iterations: 8681\ncpu: 99488.04285220605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 117859.26482588913,
            "unit": "ns/iter",
            "extra": "iterations: 7352\ncpu: 117851.91784548433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1259.906428682297,
            "unit": "ns/iter",
            "extra": "iterations: 553706\ncpu: 1259.7903941803047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 990.6541598994095,
            "unit": "ns/iter",
            "extra": "iterations: 709296\ncpu: 990.5898242764657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 977.8370353406458,
            "unit": "ns/iter",
            "extra": "iterations: 716143\ncpu: 977.7861404775293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 966.6438660595117,
            "unit": "ns/iter",
            "extra": "iterations: 727159\ncpu: 966.5939636310628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1982.586867296323,
            "unit": "ns/iter",
            "extra": "iterations: 322584\ncpu: 1982.501301986457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6014.326353979392,
            "unit": "ns/iter",
            "extra": "iterations: 137262\ncpu: 6013.914266147949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31877.757997218643,
            "unit": "ns/iter",
            "extra": "iterations: 25884\ncpu: 31875.162262401456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 25478.556486915473,
            "unit": "ns/iter",
            "extra": "iterations: 32211\ncpu: 25476.523547856337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 24381.217189760453,
            "unit": "ns/iter",
            "extra": "iterations: 33869\ncpu: 24379.355753048596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 24322.049633438313,
            "unit": "ns/iter",
            "extra": "iterations: 33828\ncpu: 24320.468251152826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 72869.88428745045,
            "unit": "ns/iter",
            "extra": "iterations: 12315\ncpu: 72863.05318717021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 580082.7759999266,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579455.4000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 571887.2470277658,
            "unit": "ns/iter",
            "extra": "iterations: 1514\ncpu: 571855.2840158533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 567281.8817766157,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 567240.1698236432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 571641.8958885835,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 571591.3793103455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 325690.18542539835,
            "unit": "ns/iter",
            "extra": "iterations: 2621\ncpu: 325674.85692483874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 571782.1673151739,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 571746.8871595343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2385618.203045904,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2385448.4771573595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1085909.633059772,
            "unit": "ns/iter",
            "extra": "iterations: 853\ncpu: 1085888.5111371642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3299477.1392858573,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3299264.2857142887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8479.551664746637,
            "unit": "ns/iter",
            "extra": "iterations: 99865\ncpu: 8479.039703599847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46427.09519802117,
            "unit": "ns/iter",
            "extra": "iterations: 17826\ncpu: 46422.59059800289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36862.01555426358,
            "unit": "ns/iter",
            "extra": "iterations: 22309\ncpu: 36859.08826034315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36700.87357342398,
            "unit": "ns/iter",
            "extra": "iterations: 22519\ncpu: 36698.36582441501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36243.61491167194,
            "unit": "ns/iter",
            "extra": "iterations: 23096\ncpu: 36240.807932109325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 84044.25297444637,
            "unit": "ns/iter",
            "extra": "iterations: 10254\ncpu: 84041.13516676413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 617118.5739999601,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 617089.9999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 610059.75505931,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 610022.0516399167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 595862.2873880396,
            "unit": "ns/iter",
            "extra": "iterations: 1451\ncpu: 595792.4190213665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 503866.29900003754,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503844.8999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 343128.95973415667,
            "unit": "ns/iter",
            "extra": "iterations: 2558\ncpu: 343101.09460515936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 582315.3477970181,
            "unit": "ns/iter",
            "extra": "iterations: 1498\ncpu: 582260.1468624842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2535885.3777174526,
            "unit": "ns/iter",
            "extra": "iterations: 368\ncpu: 2535660.3260869617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1112701.5844312573,
            "unit": "ns/iter",
            "extra": "iterations: 835\ncpu: 1112641.4371257462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5625.723160000007,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5625.320999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 31068.364274127613,
            "unit": "ns/iter",
            "extra": "iterations: 26513\ncpu: 31067.770527665674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 24560.74047100115,
            "unit": "ns/iter",
            "extra": "iterations: 33503\ncpu: 24559.23648628469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 24081.098865002645,
            "unit": "ns/iter",
            "extra": "iterations: 34097\ncpu: 24080.90741120926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 24840.946072124025,
            "unit": "ns/iter",
            "extra": "iterations: 33415\ncpu: 24839.802483914398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 70891.21572630072,
            "unit": "ns/iter",
            "extra": "iterations: 12247\ncpu: 70886.82942761472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 578959.5190000228,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578924.9000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 585825.7463863079,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 585813.0749014496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 590069.3739892057,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 590040.9703504044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 571661.9306736484,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 571630.0850228915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 333147.2334718751,
            "unit": "ns/iter",
            "extra": "iterations: 2647\ncpu: 333145.03211182245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 573605.3385723924,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 573569.4171578228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 546.1881371066246,
            "unit": "ns/iter",
            "extra": "iterations: 1274512\ncpu: 546.1453481803223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3263.4607720142517,
            "unit": "ns/iter",
            "extra": "iterations: 219996\ncpu: 3263.2406952853644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2686.67520233558,
            "unit": "ns/iter",
            "extra": "iterations: 270590\ncpu: 2686.6432610222023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2663.678270343881,
            "unit": "ns/iter",
            "extra": "iterations: 262503\ncpu: 2663.6118444360554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2042.5594190826105,
            "unit": "ns/iter",
            "extra": "iterations: 340909\ncpu: 2042.4711579923057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 18290.851849921175,
            "unit": "ns/iter",
            "extra": "iterations: 38380\ncpu: 18289.481500781658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31312.214416834126,
            "unit": "ns/iter",
            "extra": "iterations: 22335\ncpu: 31312.003581822664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7415.554182680288,
            "unit": "ns/iter",
            "extra": "iterations: 94449\ncpu: 7414.949867124109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7340.4761585514725,
            "unit": "ns/iter",
            "extra": "iterations: 95464\ncpu: 7339.76472806512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7337.718296731569,
            "unit": "ns/iter",
            "extra": "iterations: 95487\ncpu: 7337.319216228372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14783.020098700697,
            "unit": "ns/iter",
            "extra": "iterations: 47416\ncpu: 14782.242281086395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14157.536635170794,
            "unit": "ns/iter",
            "extra": "iterations: 49952\ncpu: 14156.634368994437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5285.139398474555,
            "unit": "ns/iter",
            "extra": "iterations: 132297\ncpu: 5284.713183216562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26733.46090251515,
            "unit": "ns/iter",
            "extra": "iterations: 26127\ncpu: 26730.057029126896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21227.629845614203,
            "unit": "ns/iter",
            "extra": "iterations: 32581\ncpu: 21225.674472852275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21070.257307828444,
            "unit": "ns/iter",
            "extra": "iterations: 33252\ncpu: 21068.594370263363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21482.996990911714,
            "unit": "ns/iter",
            "extra": "iterations: 32568\ncpu: 21481.08265782337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49382.98632839465,
            "unit": "ns/iter",
            "extra": "iterations: 14190\ncpu: 49377.71670190275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 161008.46769302766,
            "unit": "ns/iter",
            "extra": "iterations: 4287\ncpu: 160993.77186843817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 135829.62867647616,
            "unit": "ns/iter",
            "extra": "iterations: 5168\ncpu: 135820.20123839038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 133697.3880198368,
            "unit": "ns/iter",
            "extra": "iterations: 5242\ncpu: 133692.1404044251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 134524.0539969153,
            "unit": "ns/iter",
            "extra": "iterations: 5204\ncpu: 134520.1575710991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83115.3100394928,
            "unit": "ns/iter",
            "extra": "iterations: 8357\ncpu: 83109.38135694618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 135397.97531099824,
            "unit": "ns/iter",
            "extra": "iterations: 5225\ncpu: 135144.03827751236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5207.709084960234,
            "unit": "ns/iter",
            "extra": "iterations: 134486\ncpu: 5207.606739735011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26071.002716280633,
            "unit": "ns/iter",
            "extra": "iterations: 26875\ncpu: 26068.643720930406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 20758.4984147717,
            "unit": "ns/iter",
            "extra": "iterations: 30595\ncpu: 20757.071416898576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20633.672378523792,
            "unit": "ns/iter",
            "extra": "iterations: 33731\ncpu: 20632.533870920208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 20909.56392639446,
            "unit": "ns/iter",
            "extra": "iterations: 33476\ncpu: 20908.842155574344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 47228.94979079675,
            "unit": "ns/iter",
            "extra": "iterations: 14818\ncpu: 47225.35429882493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153111.9114754111,
            "unit": "ns/iter",
            "extra": "iterations: 4575\ncpu: 153099.27868852502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129592.63938054137,
            "unit": "ns/iter",
            "extra": "iterations: 5424\ncpu: 129587.5368731559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 128210.16133163283,
            "unit": "ns/iter",
            "extra": "iterations: 5467\ncpu: 128204.00585330071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129293.88372092211,
            "unit": "ns/iter",
            "extra": "iterations: 5418\ncpu: 129285.93576965586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81926.04393550754,
            "unit": "ns/iter",
            "extra": "iterations: 8558\ncpu: 81919.28020565578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 127843.61665142007,
            "unit": "ns/iter",
            "extra": "iterations: 5465\ncpu: 127830.72278133378 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}