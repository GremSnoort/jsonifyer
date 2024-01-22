window.BENCHMARK_DATA = {
  "lastUpdate": 1705962023277,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-8 18.04 Release c++-17": [
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
        "date": 1702490310869,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 575.1554754679254,
            "unit": "ns/iter",
            "extra": "iterations: 1215613\ncpu: 575.1286799334987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5374.959040000249,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5374.717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10143.650168590757,
            "unit": "ns/iter",
            "extra": "iterations: 81262\ncpu: 10143.267455883435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15334.096197607627,
            "unit": "ns/iter",
            "extra": "iterations: 54492\ncpu: 15333.849005358581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20141.938431436876,
            "unit": "ns/iter",
            "extra": "iterations: 41401\ncpu: 20141.721214463418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25111.1789166257,
            "unit": "ns/iter",
            "extra": "iterations: 33211\ncpu: 25110.062930956596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30096.228024617165,
            "unit": "ns/iter",
            "extra": "iterations: 28111\ncpu: 30096.1438582761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34941.16263334841,
            "unit": "ns/iter",
            "extra": "iterations: 24091\ncpu: 34939.761736748165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39302.419747564934,
            "unit": "ns/iter",
            "extra": "iterations: 20124\ncpu: 39300.28821307893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 581.9111309527135,
            "unit": "ns/iter",
            "extra": "iterations: 1205099\ncpu: 581.9092871208085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 440.71330186417947,
            "unit": "ns/iter",
            "extra": "iterations: 1588221\ncpu: 440.6748179252136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 429.3345903167647,
            "unit": "ns/iter",
            "extra": "iterations: 1625585\ncpu: 429.3047118421989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 436.69588660398296,
            "unit": "ns/iter",
            "extra": "iterations: 1605559\ncpu: 436.66897323611244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 881.6655282452417,
            "unit": "ns/iter",
            "extra": "iterations: 794082\ncpu: 881.6215453819644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1723.102812805103,
            "unit": "ns/iter",
            "extra": "iterations: 455595\ncpu: 1723.0369077799367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9395.347597355305,
            "unit": "ns/iter",
            "extra": "iterations: 86488\ncpu: 9394.993525113303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7242.56357317948,
            "unit": "ns/iter",
            "extra": "iterations: 112225\ncpu: 7242.226776564939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7659.238970058565,
            "unit": "ns/iter",
            "extra": "iterations: 111152\ncpu: 7659.042572333396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7346.091832687,
            "unit": "ns/iter",
            "extra": "iterations: 110930\ncpu: 7346.069593437295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35618.855242130805,
            "unit": "ns/iter",
            "extra": "iterations: 23149\ncpu: 35618.32044580757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 244750.4962258775,
            "unit": "ns/iter",
            "extra": "iterations: 3577\ncpu: 244734.10679340275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 184538.16000896398,
            "unit": "ns/iter",
            "extra": "iterations: 4456\ncpu: 184537.02872531395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 189989.41627856385,
            "unit": "ns/iter",
            "extra": "iterations: 4509\ncpu: 189989.31026835245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 185189.00089685252,
            "unit": "ns/iter",
            "extra": "iterations: 4460\ncpu: 185187.04035874497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97387.88898846282,
            "unit": "ns/iter",
            "extra": "iterations: 8927\ncpu: 97386.79287554578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 185649.1067176843,
            "unit": "ns/iter",
            "extra": "iterations: 4704\ncpu: 185645.36564625887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5263.610185360476,
            "unit": "ns/iter",
            "extra": "iterations: 152729\ncpu: 5263.590411775109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23595.506429194622,
            "unit": "ns/iter",
            "extra": "iterations: 35541\ncpu: 23595.07329563042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18886.194547788702,
            "unit": "ns/iter",
            "extra": "iterations: 45963\ncpu: 18885.581881078226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18268.597727221317,
            "unit": "ns/iter",
            "extra": "iterations: 45847\ncpu: 18268.344711758687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18052.709690694814,
            "unit": "ns/iter",
            "extra": "iterations: 46168\ncpu: 18052.430254721887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50915.39350577318,
            "unit": "ns/iter",
            "extra": "iterations: 16353\ncpu: 50915.21433376141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 267611.83892824367,
            "unit": "ns/iter",
            "extra": "iterations: 3247\ncpu: 267602.03264551837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 205338.54045155554,
            "unit": "ns/iter",
            "extra": "iterations: 4252\ncpu: 205336.4534336777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 204800.3721698341,
            "unit": "ns/iter",
            "extra": "iterations: 4240\ncpu: 204797.52358490558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 203583.30285982837,
            "unit": "ns/iter",
            "extra": "iterations: 4266\ncpu: 203579.69995311924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108705.96771367086,
            "unit": "ns/iter",
            "extra": "iterations: 7991\ncpu: 108702.7155549998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 195334.48913286603,
            "unit": "ns/iter",
            "extra": "iterations: 4463\ncpu: 195330.94331167304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 791680.5451532806,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 791671.9138359571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 436018.98613173893,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 436007.4294205021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1664.0841623380363,
            "unit": "ns/iter",
            "extra": "iterations: 472052\ncpu: 1663.9785447365998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9278.535423913156,
            "unit": "ns/iter",
            "extra": "iterations: 91139\ncpu: 9278.243123141634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6677.608931366375,
            "unit": "ns/iter",
            "extra": "iterations: 121370\ncpu: 6677.456537859423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6636.617231352759,
            "unit": "ns/iter",
            "extra": "iterations: 123461\ncpu: 6636.4252678983685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6242.589911092794,
            "unit": "ns/iter",
            "extra": "iterations: 131035\ncpu: 6242.3833326973445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34135.29885802009,
            "unit": "ns/iter",
            "extra": "iterations: 24694\ncpu: 34134.59544828716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 245729.2589547964,
            "unit": "ns/iter",
            "extra": "iterations: 3406\ncpu: 245715.41397533767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 194718.24495676707,
            "unit": "ns/iter",
            "extra": "iterations: 4511\ncpu: 194706.56173797455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 194331.20628296144,
            "unit": "ns/iter",
            "extra": "iterations: 4552\ncpu: 194317.7065026356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 194001.16360453292,
            "unit": "ns/iter",
            "extra": "iterations: 4572\ncpu: 193992.95713035789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97121.39661426657,
            "unit": "ns/iter",
            "extra": "iterations: 9097\ncpu: 97114.05958008126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 186172.2099704198,
            "unit": "ns/iter",
            "extra": "iterations: 4734\ncpu: 186164.2585551332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 209.20582652919757,
            "unit": "ns/iter",
            "extra": "iterations: 3302412\ncpu: 209.1875271771055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1419.1413020387058,
            "unit": "ns/iter",
            "extra": "iterations: 489540\ncpu: 1419.1183560076754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1042.1525630966455,
            "unit": "ns/iter",
            "extra": "iterations: 687001\ncpu: 1042.124101711642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1124.2135384010137,
            "unit": "ns/iter",
            "extra": "iterations: 620413\ncpu: 1124.1730911505736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 844.0014646773643,
            "unit": "ns/iter",
            "extra": "iterations: 827486\ncpu: 843.9876928431433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9505.174846711243,
            "unit": "ns/iter",
            "extra": "iterations: 72738\ncpu: 9504.980890318708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12093.381716703505,
            "unit": "ns/iter",
            "extra": "iterations: 57692\ncpu: 12093.056229633297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2732.716419134773,
            "unit": "ns/iter",
            "extra": "iterations: 255927\ncpu: 2732.6366502948217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2743.496594689225,
            "unit": "ns/iter",
            "extra": "iterations: 254896\ncpu: 2743.461647103128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2713.07903930456,
            "unit": "ns/iter",
            "extra": "iterations: 258188\ncpu: 2712.950640618454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5016.010792229124,
            "unit": "ns/iter",
            "extra": "iterations: 146031\ncpu: 5016.032212338475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5131.7952112884905,
            "unit": "ns/iter",
            "extra": "iterations: 136780\ncpu: 5131.640590729629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1972.5135713296413,
            "unit": "ns/iter",
            "extra": "iterations: 353871\ncpu: 1972.4854537387705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10099.597627064715,
            "unit": "ns/iter",
            "extra": "iterations: 69197\ncpu: 10099.10834284732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8109.68822084805,
            "unit": "ns/iter",
            "extra": "iterations: 85923\ncpu: 8109.549247582153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7983.137061175734,
            "unit": "ns/iter",
            "extra": "iterations: 86538\ncpu: 7982.807552751398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8101.505428505507,
            "unit": "ns/iter",
            "extra": "iterations: 86580\ncpu: 8101.0995610995415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18016.546408039292,
            "unit": "ns/iter",
            "extra": "iterations: 38614\ncpu: 18015.789609986074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 58681.72004384984,
            "unit": "ns/iter",
            "extra": "iterations: 11859\ncpu: 58679.8549624755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42698.71624588703,
            "unit": "ns/iter",
            "extra": "iterations: 16398\ncpu: 42697.011830711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42765.74691131677,
            "unit": "ns/iter",
            "extra": "iterations: 16350\ncpu: 42763.20489296599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44096.76192880606,
            "unit": "ns/iter",
            "extra": "iterations: 15844\ncpu: 44093.82100479671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25465.047287444413,
            "unit": "ns/iter",
            "extra": "iterations: 27428\ncpu: 25463.39507073048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43594.090454459205,
            "unit": "ns/iter",
            "extra": "iterations: 15997\ncpu: 43592.29230480727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1916.278511602272,
            "unit": "ns/iter",
            "extra": "iterations: 364150\ncpu: 1916.1914046409454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10103.917609515958,
            "unit": "ns/iter",
            "extra": "iterations: 68940\ncpu: 10103.346388163585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8069.955879633832,
            "unit": "ns/iter",
            "extra": "iterations: 86536\ncpu: 8069.439308495847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8095.4807629908055,
            "unit": "ns/iter",
            "extra": "iterations: 86292\ncpu: 8095.448013720729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7963.676686884099,
            "unit": "ns/iter",
            "extra": "iterations: 86891\ncpu: 7963.485286163071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17668.21013285089,
            "unit": "ns/iter",
            "extra": "iterations: 39594\ncpu: 17667.409203414758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55072.293903693935,
            "unit": "ns/iter",
            "extra": "iterations: 12647\ncpu: 55068.624970348465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 40127.79948736152,
            "unit": "ns/iter",
            "extra": "iterations: 17166\ncpu: 40124.64173365895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42411.99400795139,
            "unit": "ns/iter",
            "extra": "iterations: 16355\ncpu: 42410.92020788785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42502.73840276407,
            "unit": "ns/iter",
            "extra": "iterations: 16491\ncpu: 42502.46194894138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25362.052629664446,
            "unit": "ns/iter",
            "extra": "iterations: 27456\ncpu: 25361.49839743583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42611.94477827619,
            "unit": "ns/iter",
            "extra": "iterations: 16642\ncpu: 42611.18855906706 ns\nthreads: 1"
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
        "date": 1702492928583,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 588.3409215808589,
            "unit": "ns/iter",
            "extra": "iterations: 1193688\ncpu: 588.3181367325466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5301.878280000665,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5301.764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10144.783379813274,
            "unit": "ns/iter",
            "extra": "iterations: 81756\ncpu: 10144.412642497187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15370.398537510866,
            "unit": "ns/iter",
            "extra": "iterations: 54838\ncpu: 15369.369780079507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20140.999306236583,
            "unit": "ns/iter",
            "extra": "iterations: 41801\ncpu: 20139.65694600608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24845.83646385506,
            "unit": "ns/iter",
            "extra": "iterations: 33381\ncpu: 24845.34615499836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29836.652025568976,
            "unit": "ns/iter",
            "extra": "iterations: 27844\ncpu: 29835.824594167505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34564.83859867213,
            "unit": "ns/iter",
            "extra": "iterations: 24120\ncpu: 34564.14593698176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39762.42868382185,
            "unit": "ns/iter",
            "extra": "iterations: 21608\ncpu: 39760.658089596494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 592.9417000994581,
            "unit": "ns/iter",
            "extra": "iterations: 1182472\ncpu: 592.9390294231076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 439.9312742998019,
            "unit": "ns/iter",
            "extra": "iterations: 1585404\ncpu: 439.9141165280277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 427.4160084316458,
            "unit": "ns/iter",
            "extra": "iterations: 1627205\ncpu: 427.400481193212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 432.43924263575855,
            "unit": "ns/iter",
            "extra": "iterations: 1620462\ncpu: 432.4318620245336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 885.4821611885145,
            "unit": "ns/iter",
            "extra": "iterations: 793915\ncpu: 885.4876151729093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1765.8140881657037,
            "unit": "ns/iter",
            "extra": "iterations: 458115\ncpu: 1765.6952948495457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9719.090731184448,
            "unit": "ns/iter",
            "extra": "iterations: 85847\ncpu: 9718.949992428397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7064.033611253794,
            "unit": "ns/iter",
            "extra": "iterations: 115021\ncpu: 7063.889202841221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7433.550870660425,
            "unit": "ns/iter",
            "extra": "iterations: 109572\ncpu: 7433.507647939249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7059.747980741801,
            "unit": "ns/iter",
            "extra": "iterations: 114027\ncpu: 7059.589395494038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35851.73483437964,
            "unit": "ns/iter",
            "extra": "iterations: 23095\ncpu: 35850.93310240299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 251604.277461582,
            "unit": "ns/iter",
            "extra": "iterations: 3514\ncpu: 251593.96698918607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 176583.39319385486,
            "unit": "ns/iter",
            "extra": "iterations: 4349\ncpu: 176582.0648424921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 188225.9776085852,
            "unit": "ns/iter",
            "extra": "iterations: 4466\ncpu: 188221.31661441986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 184865.72123287755,
            "unit": "ns/iter",
            "extra": "iterations: 4380\ncpu: 184859.817351598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 96617.74400363826,
            "unit": "ns/iter",
            "extra": "iterations: 8797\ncpu: 96613.44776628414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 188398.7528483777,
            "unit": "ns/iter",
            "extra": "iterations: 4564\ncpu: 188393.27344434743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5070.999397549405,
            "unit": "ns/iter",
            "extra": "iterations: 161009\ncpu: 5070.733934127898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24187.797945698887,
            "unit": "ns/iter",
            "extra": "iterations: 34659\ncpu: 24186.999047866342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 17816.67830262241,
            "unit": "ns/iter",
            "extra": "iterations: 46236\ncpu: 17816.177870057978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18395.171061048713,
            "unit": "ns/iter",
            "extra": "iterations: 45323\ncpu: 18395.300399355692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17787.21329258265,
            "unit": "ns/iter",
            "extra": "iterations: 46462\ncpu: 17786.236063880202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49711.16606111046,
            "unit": "ns/iter",
            "extra": "iterations: 16789\ncpu: 49709.66108761687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 281426.7449535398,
            "unit": "ns/iter",
            "extra": "iterations: 3121\ncpu: 281414.7388657478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 200651.617732577,
            "unit": "ns/iter",
            "extra": "iterations: 4128\ncpu: 200643.67732558187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 210386.122518154,
            "unit": "ns/iter",
            "extra": "iterations: 4130\ncpu: 210371.93704600554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 198793.4707012661,
            "unit": "ns/iter",
            "extra": "iterations: 4164\ncpu: 198782.44476464854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109329.64717691504,
            "unit": "ns/iter",
            "extra": "iterations: 7970\ncpu: 109326.51191969872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 193670.9674669202,
            "unit": "ns/iter",
            "extra": "iterations: 4457\ncpu: 193666.54700471088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 791915.7377185378,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 791870.5245628649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 440291.256601907,
            "unit": "ns/iter",
            "extra": "iterations: 2007\ncpu: 440276.93074240175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1794.150694941283,
            "unit": "ns/iter",
            "extra": "iterations: 458456\ncpu: 1793.1051180484174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8803.640556818491,
            "unit": "ns/iter",
            "extra": "iterations: 92813\ncpu: 8803.453180050225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 6698.755583929336,
            "unit": "ns/iter",
            "extra": "iterations: 122181\ncpu: 6698.509588233844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6963.000878502636,
            "unit": "ns/iter",
            "extra": "iterations: 117245\ncpu: 6962.771973218432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6445.6752812570685,
            "unit": "ns/iter",
            "extra": "iterations: 128619\ncpu: 6445.557810276861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34066.38129118525,
            "unit": "ns/iter",
            "extra": "iterations: 24737\ncpu: 34065.230221934864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 261700.18977237615,
            "unit": "ns/iter",
            "extra": "iterations: 3383\ncpu: 261698.46290275056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 194166.0532949999,
            "unit": "ns/iter",
            "extra": "iterations: 4522\ncpu: 194157.20919946977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 194260.72844159545,
            "unit": "ns/iter",
            "extra": "iterations: 4511\ncpu: 194258.87829749507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 192074.23003760356,
            "unit": "ns/iter",
            "extra": "iterations: 4521\ncpu: 192068.3255916832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96290.5464535389,
            "unit": "ns/iter",
            "extra": "iterations: 9009\ncpu: 96289.12198912157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 186572.616705545,
            "unit": "ns/iter",
            "extra": "iterations: 4717\ncpu: 186568.5393258418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 206.61771395259348,
            "unit": "ns/iter",
            "extra": "iterations: 3394759\ncpu: 206.61446070251296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1436.067276618477,
            "unit": "ns/iter",
            "extra": "iterations: 491077\ncpu: 1436.0257149082438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1131.3253471407497,
            "unit": "ns/iter",
            "extra": "iterations: 622658\ncpu: 1131.3329307581262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1136.2234846942363,
            "unit": "ns/iter",
            "extra": "iterations: 613787\ncpu: 1136.2013206535885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 846.5074133132268,
            "unit": "ns/iter",
            "extra": "iterations: 824665\ncpu: 846.4794795462403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9738.152680620215,
            "unit": "ns/iter",
            "extra": "iterations: 72334\ncpu: 9737.929604335508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11784.092955662472,
            "unit": "ns/iter",
            "extra": "iterations: 55392\ncpu: 11783.562608318794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2929.9090865751705,
            "unit": "ns/iter",
            "extra": "iterations: 251712\ncpu: 2929.8400553012957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2796.5777272043333,
            "unit": "ns/iter",
            "extra": "iterations: 246947\ncpu: 2796.479406512334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2796.4328622541375,
            "unit": "ns/iter",
            "extra": "iterations: 250701\ncpu: 2796.3941109129937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4949.7583381760805,
            "unit": "ns/iter",
            "extra": "iterations: 141098\ncpu: 4949.620830911832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5032.6711422158405,
            "unit": "ns/iter",
            "extra": "iterations: 131455\ncpu: 5032.3106766573765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1942.9559321184008,
            "unit": "ns/iter",
            "extra": "iterations: 358152\ncpu: 1942.8354441689519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10215.398944847242,
            "unit": "ns/iter",
            "extra": "iterations: 68047\ncpu: 10215.456963569175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8111.284537806978,
            "unit": "ns/iter",
            "extra": "iterations: 84878\ncpu: 8111.124201795544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8064.700850453509,
            "unit": "ns/iter",
            "extra": "iterations: 86542\ncpu: 8064.460030967576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8310.496192569575,
            "unit": "ns/iter",
            "extra": "iterations: 86410\ncpu: 8310.18400648065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18034.191497019823,
            "unit": "ns/iter",
            "extra": "iterations: 38904\ncpu: 18033.42072794574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 53544.714723929545,
            "unit": "ns/iter",
            "extra": "iterations: 11084\ncpu: 53545.02887044292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41908.60594233342,
            "unit": "ns/iter",
            "extra": "iterations: 15886\ncpu: 41907.811909858305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 42176.081524020425,
            "unit": "ns/iter",
            "extra": "iterations: 16719\ncpu: 42174.705424965745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43972.93497584195,
            "unit": "ns/iter",
            "extra": "iterations: 16763\ncpu: 43971.305852174824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25301.337270580112,
            "unit": "ns/iter",
            "extra": "iterations: 27515\ncpu: 25300.534254043476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43827.12274614178,
            "unit": "ns/iter",
            "extra": "iterations: 16139\ncpu: 43825.86281677998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1926.9143736111419,
            "unit": "ns/iter",
            "extra": "iterations: 362762\ncpu: 1926.8528677204265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10222.764845361975,
            "unit": "ns/iter",
            "extra": "iterations: 67900\ncpu: 10222.079528718768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8075.476675020906,
            "unit": "ns/iter",
            "extra": "iterations: 86581\ncpu: 8075.413774384639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8112.265185356656,
            "unit": "ns/iter",
            "extra": "iterations: 86185\ncpu: 8112.324650461302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8048.282932614947,
            "unit": "ns/iter",
            "extra": "iterations: 86844\ncpu: 8048.053981852575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17724.819141110893,
            "unit": "ns/iter",
            "extra": "iterations: 39423\ncpu: 17724.3182913527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54716.85252985847,
            "unit": "ns/iter",
            "extra": "iterations: 12728\ncpu: 54714.41703331292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42628.20136745718,
            "unit": "ns/iter",
            "extra": "iterations: 16527\ncpu: 42627.30078054168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40089.9072423252,
            "unit": "ns/iter",
            "extra": "iterations: 17163\ncpu: 40089.01707160709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41694.76583786536,
            "unit": "ns/iter",
            "extra": "iterations: 16369\ncpu: 41683.31602419166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24796.02281422463,
            "unit": "ns/iter",
            "extra": "iterations: 28228\ncpu: 24796.237778092476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42004.859808666886,
            "unit": "ns/iter",
            "extra": "iterations: 16934\ncpu: 42004.43486476881 ns\nthreads: 1"
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
        "date": 1702503992424,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 575.7977280092719,
            "unit": "ns/iter",
            "extra": "iterations: 1221924\ncpu: 575.7810633067196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5316.96549000003,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5316.783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10230.81306771134,
            "unit": "ns/iter",
            "extra": "iterations: 80917\ncpu: 10230.227269918558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15164.61370158515,
            "unit": "ns/iter",
            "extra": "iterations: 54709\ncpu: 15163.439287868536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19670.83849672185,
            "unit": "ns/iter",
            "extra": "iterations: 42414\ncpu: 19669.665676427594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25127.806024783116,
            "unit": "ns/iter",
            "extra": "iterations: 33329\ncpu: 25126.46944102734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29836.015439512994,
            "unit": "ns/iter",
            "extra": "iterations: 28304\ncpu: 29833.84327303562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34584.77022815058,
            "unit": "ns/iter",
            "extra": "iterations: 24063\ncpu: 34583.14840211113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39220.78050792974,
            "unit": "ns/iter",
            "extra": "iterations: 21814\ncpu: 39218.49729531493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 580.7606830304632,
            "unit": "ns/iter",
            "extra": "iterations: 1205510\ncpu: 580.728903119841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 452.39555715935245,
            "unit": "ns/iter",
            "extra": "iterations: 1607305\ncpu: 452.3766802193735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 438.2996880725282,
            "unit": "ns/iter",
            "extra": "iterations: 1598769\ncpu: 438.28345433267697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 441.0291979401751,
            "unit": "ns/iter",
            "extra": "iterations: 1578947\ncpu: 440.99732289937475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 900.4926390729943,
            "unit": "ns/iter",
            "extra": "iterations: 776193\ncpu: 900.4590353172481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1747.8848044740507,
            "unit": "ns/iter",
            "extra": "iterations: 457049\ncpu: 1747.7815288951529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9783.414296741284,
            "unit": "ns/iter",
            "extra": "iterations: 82914\ncpu: 9782.811105482775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7394.846976579576,
            "unit": "ns/iter",
            "extra": "iterations: 109859\ncpu: 7394.447428066899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7300.071674651556,
            "unit": "ns/iter",
            "extra": "iterations: 110011\ncpu: 7299.714573997147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6977.783223095463,
            "unit": "ns/iter",
            "extra": "iterations: 115206\ncpu: 6977.3562140860795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35949.03306963734,
            "unit": "ns/iter",
            "extra": "iterations: 23133\ncpu: 35946.288851424404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 252319.3636887598,
            "unit": "ns/iter",
            "extra": "iterations: 3470\ncpu: 252302.04610951064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 189421.9559329688,
            "unit": "ns/iter",
            "extra": "iterations: 4357\ncpu: 189409.73146660553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 194486.36127698736,
            "unit": "ns/iter",
            "extra": "iterations: 4354\ncpu: 194472.92145153883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 190017.14547118839,
            "unit": "ns/iter",
            "extra": "iterations: 4372\ncpu: 190006.6102470268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97768.72824256307,
            "unit": "ns/iter",
            "extra": "iterations: 8905\ncpu: 97763.31274564838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 190669.01851072704,
            "unit": "ns/iter",
            "extra": "iterations: 4754\ncpu: 190657.10980227136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5162.047752669797,
            "unit": "ns/iter",
            "extra": "iterations: 161792\ncpu: 5161.736056170886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23484.410621612697,
            "unit": "ns/iter",
            "extra": "iterations: 34684\ncpu: 23483.064237112274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18254.71888416698,
            "unit": "ns/iter",
            "extra": "iterations: 45885\ncpu: 18253.71472158653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18173.006829506314,
            "unit": "ns/iter",
            "extra": "iterations: 44952\ncpu: 18171.683128670596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18184.552629849983,
            "unit": "ns/iter",
            "extra": "iterations: 45649\ncpu: 18183.182545072224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49387.14949651627,
            "unit": "ns/iter",
            "extra": "iterations: 16783\ncpu: 49383.304534350515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 249997.99116162537,
            "unit": "ns/iter",
            "extra": "iterations: 3168\ncpu: 249983.39646464583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 207030.84695820013,
            "unit": "ns/iter",
            "extra": "iterations: 4208\ncpu: 207021.31653992384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 205811.10448823986,
            "unit": "ns/iter",
            "extra": "iterations: 4211\ncpu: 205805.88933744899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 205088.27406701705,
            "unit": "ns/iter",
            "extra": "iterations: 4207\ncpu: 205078.77347278304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107259.67348709918,
            "unit": "ns/iter",
            "extra": "iterations: 8064\ncpu: 107255.93998015819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 195989.04878048206,
            "unit": "ns/iter",
            "extra": "iterations: 4428\ncpu: 195979.5392953931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 784775.9573770813,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 784734.2622950829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 437412.1052109597,
            "unit": "ns/iter",
            "extra": "iterations: 2015\ncpu: 437403.17617866106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1776.3517081668897,
            "unit": "ns/iter",
            "extra": "iterations: 454698\ncpu: 1776.2781010692718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9841.670725871345,
            "unit": "ns/iter",
            "extra": "iterations: 83596\ncpu: 9841.460117709039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7403.478086599139,
            "unit": "ns/iter",
            "extra": "iterations: 110024\ncpu: 7403.053879153685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7302.99099925194,
            "unit": "ns/iter",
            "extra": "iterations: 112324\ncpu: 7302.6334532245555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7216.022535409221,
            "unit": "ns/iter",
            "extra": "iterations: 113599\ncpu: 7215.7554203822165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34171.85981845875,
            "unit": "ns/iter",
            "extra": "iterations: 24347\ncpu: 34170.11130734791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 239495.4016489967,
            "unit": "ns/iter",
            "extra": "iterations: 3396\ncpu: 239476.32508834044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 193005.58556562927,
            "unit": "ns/iter",
            "extra": "iterations: 4517\ncpu: 192987.66880673042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 193243.9845747051,
            "unit": "ns/iter",
            "extra": "iterations: 4538\ncpu: 193230.9167033937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 182336.14553795147,
            "unit": "ns/iter",
            "extra": "iterations: 4796\ncpu: 182328.31526271868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 93112.56014075477,
            "unit": "ns/iter",
            "extra": "iterations: 9378\ncpu: 93109.37300063994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 175497.76890672097,
            "unit": "ns/iter",
            "extra": "iterations: 4985\ncpu: 175491.3941825484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 205.95564204279313,
            "unit": "ns/iter",
            "extra": "iterations: 3399345\ncpu: 205.94608667257944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1395.6373492919347,
            "unit": "ns/iter",
            "extra": "iterations: 501466\ncpu: 1395.562610426233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1031.6949895882813,
            "unit": "ns/iter",
            "extra": "iterations: 678567\ncpu: 1031.6623119014032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1108.2028149049315,
            "unit": "ns/iter",
            "extra": "iterations: 632064\ncpu: 1108.1380999392425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 838.2919807799716,
            "unit": "ns/iter",
            "extra": "iterations: 831839\ncpu: 838.2690640857172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9762.391017081478,
            "unit": "ns/iter",
            "extra": "iterations: 72649\ncpu: 9762.090324711913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12612.158512827522,
            "unit": "ns/iter",
            "extra": "iterations: 55434\ncpu: 12611.815853086513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2810.232744860757,
            "unit": "ns/iter",
            "extra": "iterations: 248723\ncpu: 2810.152257732488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2814.50301626782,
            "unit": "ns/iter",
            "extra": "iterations: 246994\ncpu: 2814.4226175534723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2824.6028279708976,
            "unit": "ns/iter",
            "extra": "iterations: 247598\ncpu: 2824.517968642723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4863.417925387166,
            "unit": "ns/iter",
            "extra": "iterations: 143863\ncpu: 4863.210137422396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5083.951840250249,
            "unit": "ns/iter",
            "extra": "iterations: 137916\ncpu: 5083.808985179386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1956.7589450654114,
            "unit": "ns/iter",
            "extra": "iterations: 358354\ncpu: 1956.6632436082753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10088.568423950417,
            "unit": "ns/iter",
            "extra": "iterations: 68989\ncpu: 10088.247401759567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8107.872521539932,
            "unit": "ns/iter",
            "extra": "iterations: 86697\ncpu: 8107.414328062104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8042.615623241523,
            "unit": "ns/iter",
            "extra": "iterations: 87037\ncpu: 8042.369337178489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8083.748692371983,
            "unit": "ns/iter",
            "extra": "iterations: 86416\ncpu: 8083.53082762449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17805.591571875848,
            "unit": "ns/iter",
            "extra": "iterations: 39297\ncpu: 17805.094536478486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54707.56584443556,
            "unit": "ns/iter",
            "extra": "iterations: 12689\ncpu: 54705.950035463655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43685.26126857317,
            "unit": "ns/iter",
            "extra": "iterations: 16018\ncpu: 43684.1553252595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43150.119100156975,
            "unit": "ns/iter",
            "extra": "iterations: 16314\ncpu: 43149.00085815802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43391.6574684344,
            "unit": "ns/iter",
            "extra": "iterations: 16235\ncpu: 43390.16322759496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25175.60390430133,
            "unit": "ns/iter",
            "extra": "iterations: 27713\ncpu: 25174.777180384663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42928.50677655338,
            "unit": "ns/iter",
            "extra": "iterations: 16380\ncpu: 42927.25885225957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1938.1708946628203,
            "unit": "ns/iter",
            "extra": "iterations: 361164\ncpu: 1938.0674707335356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10005.578516902639,
            "unit": "ns/iter",
            "extra": "iterations: 69692\ncpu: 10005.369339378802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7969.3814278073,
            "unit": "ns/iter",
            "extra": "iterations: 87841\ncpu: 7969.127172960226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8017.3651397439535,
            "unit": "ns/iter",
            "extra": "iterations: 87016\ncpu: 8017.054334834886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7914.390595824263,
            "unit": "ns/iter",
            "extra": "iterations: 88365\ncpu: 7914.159452271762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17708.74516137088,
            "unit": "ns/iter",
            "extra": "iterations: 39629\ncpu: 17707.878069090846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53806.94643685635,
            "unit": "ns/iter",
            "extra": "iterations: 12938\ncpu: 53805.83552326525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41991.85163331221,
            "unit": "ns/iter",
            "extra": "iterations: 16439\ncpu: 41990.248798588465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41643.087143627956,
            "unit": "ns/iter",
            "extra": "iterations: 16731\ncpu: 41641.50977227931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41718.51666567508,
            "unit": "ns/iter",
            "extra": "iterations: 16771\ncpu: 41716.68952358189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24951.88430135482,
            "unit": "ns/iter",
            "extra": "iterations: 28047\ncpu: 24951.092808499994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41974.59979802381,
            "unit": "ns/iter",
            "extra": "iterations: 16834\ncpu: 41973.06641321197 ns\nthreads: 1"
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
        "date": 1705575637978,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 585.0627150456529,
            "unit": "ns/iter",
            "extra": "iterations: 1188120\ncpu: 585.03669662997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5255.3969300004155,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5255.435999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10188.97884787931,
            "unit": "ns/iter",
            "extra": "iterations: 81363\ncpu: 10188.629966938288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15317.125501079268,
            "unit": "ns/iter",
            "extra": "iterations: 55131\ncpu: 15316.932397380777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19957.081378949522,
            "unit": "ns/iter",
            "extra": "iterations: 41829\ncpu: 19956.56840947667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24798.37915498117,
            "unit": "ns/iter",
            "extra": "iterations: 33514\ncpu: 24797.83970877841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29902.968070076477,
            "unit": "ns/iter",
            "extra": "iterations: 28312\ncpu: 29901.864933597073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34698.7033043877,
            "unit": "ns/iter",
            "extra": "iterations: 24301\ncpu: 34696.70795440517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39600.241694275894,
            "unit": "ns/iter",
            "extra": "iterations: 21130\ncpu: 39596.76762896358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 584.8523669290126,
            "unit": "ns/iter",
            "extra": "iterations: 1200036\ncpu: 584.8062891446594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 439.70887082764347,
            "unit": "ns/iter",
            "extra": "iterations: 1589164\ncpu: 439.6836953265987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 425.31527805667895,
            "unit": "ns/iter",
            "extra": "iterations: 1628499\ncpu: 425.28058046090337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 432.65794798080697,
            "unit": "ns/iter",
            "extra": "iterations: 1618172\ncpu: 432.6322541732281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 881.7504503265538,
            "unit": "ns/iter",
            "extra": "iterations: 792203\ncpu: 881.6803268859115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1738.835902951248,
            "unit": "ns/iter",
            "extra": "iterations: 457461\ncpu: 1738.7694251531814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9737.65883923098,
            "unit": "ns/iter",
            "extra": "iterations: 83169\ncpu: 9737.566881891102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7548.0366602725635,
            "unit": "ns/iter",
            "extra": "iterations: 108428\ncpu: 7547.662043014717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7470.641728696597,
            "unit": "ns/iter",
            "extra": "iterations: 108683\ncpu: 7470.364270401064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7412.841913244251,
            "unit": "ns/iter",
            "extra": "iterations: 111831\ncpu: 7412.4062200999815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35613.14323916101,
            "unit": "ns/iter",
            "extra": "iterations: 23185\ncpu: 35610.67500539151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 248237.9108658829,
            "unit": "ns/iter",
            "extra": "iterations: 3534\ncpu: 248227.95698924654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 195993.7970753593,
            "unit": "ns/iter",
            "extra": "iterations: 4445\ncpu: 195987.7390326209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 183521.52692737468,
            "unit": "ns/iter",
            "extra": "iterations: 4475\ncpu: 183515.4636871513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 192862.94918291076,
            "unit": "ns/iter",
            "extra": "iterations: 4467\ncpu: 192858.22699798548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97360.90162647651,
            "unit": "ns/iter",
            "extra": "iterations: 8915\ncpu: 97357.24060572052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186121.33154737044,
            "unit": "ns/iter",
            "extra": "iterations: 4666\ncpu: 186113.00900128603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5034.32677313463,
            "unit": "ns/iter",
            "extra": "iterations: 159548\ncpu: 5034.2166620703365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23508.72887695996,
            "unit": "ns/iter",
            "extra": "iterations: 35021\ncpu: 23507.66968390397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18133.05947988289,
            "unit": "ns/iter",
            "extra": "iterations: 44990\ncpu: 18132.196043565233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18579.239874972034,
            "unit": "ns/iter",
            "extra": "iterations: 44790\ncpu: 18578.70953337791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18046.67003969335,
            "unit": "ns/iter",
            "extra": "iterations: 45854\ncpu: 18046.512845117104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49723.66131822319,
            "unit": "ns/iter",
            "extra": "iterations: 16765\ncpu: 49722.82135401141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 267932.279112753,
            "unit": "ns/iter",
            "extra": "iterations: 3246\ncpu: 267926.0320394339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 201759.04233055655,
            "unit": "ns/iter",
            "extra": "iterations: 4205\ncpu: 201753.43638525505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 205283.07368174486,
            "unit": "ns/iter",
            "extra": "iterations: 4248\ncpu: 205273.30508474514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 205676.7644015923,
            "unit": "ns/iter",
            "extra": "iterations: 4253\ncpu: 205661.8857277211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108934.47047072486,
            "unit": "ns/iter",
            "extra": "iterations: 8009\ncpu: 108927.43163940526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 199141.873377357,
            "unit": "ns/iter",
            "extra": "iterations: 4391\ncpu: 199126.21270781252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 789480.5185185632,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 789424.6913580236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 443249.0923614261,
            "unit": "ns/iter",
            "extra": "iterations: 2003\ncpu: 443214.028956566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1779.2604557883037,
            "unit": "ns/iter",
            "extra": "iterations: 454246\ncpu: 1779.157989283347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9495.590805393078,
            "unit": "ns/iter",
            "extra": "iterations: 86790\ncpu: 9494.995967277337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7608.4445316077845,
            "unit": "ns/iter",
            "extra": "iterations: 107079\ncpu: 7607.998767265316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7349.556040888182,
            "unit": "ns/iter",
            "extra": "iterations: 111035\ncpu: 7349.268248750402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6626.850979723576,
            "unit": "ns/iter",
            "extra": "iterations: 123198\ncpu: 6626.83728631957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34091.82789087993,
            "unit": "ns/iter",
            "extra": "iterations: 24560\ncpu: 34090.504885993396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 258407.04818577756,
            "unit": "ns/iter",
            "extra": "iterations: 3445\ncpu: 258402.2641509436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 192892.82545215436,
            "unit": "ns/iter",
            "extra": "iterations: 4589\ncpu: 192887.5572020056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 180188.30801135476,
            "unit": "ns/iter",
            "extra": "iterations: 4581\ncpu: 180169.43898711953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 192111.23561348533,
            "unit": "ns/iter",
            "extra": "iterations: 4605\ncpu: 192099.761129207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96289.52810586306,
            "unit": "ns/iter",
            "extra": "iterations: 9144\ncpu: 96284.68941382325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 183656.43248366864,
            "unit": "ns/iter",
            "extra": "iterations: 4747\ncpu: 183644.78618074607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 207.6389106437341,
            "unit": "ns/iter",
            "extra": "iterations: 3374727\ncpu: 207.6254464435186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1393.6740858601486,
            "unit": "ns/iter",
            "extra": "iterations: 502795\ncpu: 1393.577302876916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1173.8802277418658,
            "unit": "ns/iter",
            "extra": "iterations: 625796\ncpu: 1173.8874968839712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1116.9114846878638,
            "unit": "ns/iter",
            "extra": "iterations: 625485\ncpu: 1116.8171898606633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 850.8990253491671,
            "unit": "ns/iter",
            "extra": "iterations: 824603\ncpu: 850.8330675488694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9467.614820047684,
            "unit": "ns/iter",
            "extra": "iterations: 72213\ncpu: 9467.35906277263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12202.01745421435,
            "unit": "ns/iter",
            "extra": "iterations: 56949\ncpu: 12201.683962843988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2763.217920894644,
            "unit": "ns/iter",
            "extra": "iterations: 255735\ncpu: 2763.110641875375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2677.263102716793,
            "unit": "ns/iter",
            "extra": "iterations: 253726\ncpu: 2677.03546345271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2734.4153090837945,
            "unit": "ns/iter",
            "extra": "iterations: 256031\ncpu: 2734.213435091838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4858.805226558025,
            "unit": "ns/iter",
            "extra": "iterations: 144378\ncpu: 4858.460430259461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5086.424794522189,
            "unit": "ns/iter",
            "extra": "iterations: 136998\ncpu: 5086.07643907207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1952.4985131176,
            "unit": "ns/iter",
            "extra": "iterations: 355778\ncpu: 1952.3250453934916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10015.607702699888,
            "unit": "ns/iter",
            "extra": "iterations: 68833\ncpu: 10015.334214693537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8119.7968223067255,
            "unit": "ns/iter",
            "extra": "iterations: 86289\ncpu: 8119.639815040135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8005.264147208202,
            "unit": "ns/iter",
            "extra": "iterations: 85865\ncpu: 8004.519885867298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8063.913288366812,
            "unit": "ns/iter",
            "extra": "iterations: 86286\ncpu: 8063.318498945369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17874.56647679378,
            "unit": "ns/iter",
            "extra": "iterations: 39149\ncpu: 17873.337760862043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55014.22783709131,
            "unit": "ns/iter",
            "extra": "iterations: 12645\ncpu: 55014.09252669002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43865.12159720743,
            "unit": "ns/iter",
            "extra": "iterations: 16053\ncpu: 43862.20644116385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43033.607784063875,
            "unit": "ns/iter",
            "extra": "iterations: 16264\ncpu: 43031.228480079124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41884.80041542083,
            "unit": "ns/iter",
            "extra": "iterations: 16369\ncpu: 41881.17172704444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25151.06320067443,
            "unit": "ns/iter",
            "extra": "iterations: 28544\ncpu: 25150.7882567264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42736.49113475243,
            "unit": "ns/iter",
            "extra": "iterations: 16356\ncpu: 42736.11518708792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1920.3775470985474,
            "unit": "ns/iter",
            "extra": "iterations: 364238\ncpu: 1920.2949719688506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9908.205063254656,
            "unit": "ns/iter",
            "extra": "iterations: 69876\ncpu: 9907.320109908875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7961.284105130766,
            "unit": "ns/iter",
            "extra": "iterations: 87890\ncpu: 7960.824894754807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8006.1354402319985,
            "unit": "ns/iter",
            "extra": "iterations: 87522\ncpu: 8005.979068119976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7961.752682178173,
            "unit": "ns/iter",
            "extra": "iterations: 87895\ncpu: 7961.465384834262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17542.996596512236,
            "unit": "ns/iter",
            "extra": "iterations: 39959\ncpu: 17540.909432167777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53646.13636364265,
            "unit": "ns/iter",
            "extra": "iterations: 13002\ncpu: 53641.76280572155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41792.87269092844,
            "unit": "ns/iter",
            "extra": "iterations: 16511\ncpu: 41789.11029010911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41674.39815750183,
            "unit": "ns/iter",
            "extra": "iterations: 16825\ncpu: 41672.27340267491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41897.83356266458,
            "unit": "ns/iter",
            "extra": "iterations: 16715\ncpu: 41896.29673945566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24844.973444722928,
            "unit": "ns/iter",
            "extra": "iterations: 28130\ncpu: 24844.600071098488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41022.45675486318,
            "unit": "ns/iter",
            "extra": "iterations: 17158\ncpu: 41021.64005128812 ns\nthreads: 1"
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
        "date": 1705774881055,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 593.3493433803351,
            "unit": "ns/iter",
            "extra": "iterations: 1197040\ncpu: 593.2863563456527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5315.117510000391,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5314.751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10267.787216251629,
            "unit": "ns/iter",
            "extra": "iterations: 81322\ncpu: 10267.359386143973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15369.110475910276,
            "unit": "ns/iter",
            "extra": "iterations: 54401\ncpu: 15368.750574437967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20155.909097446598,
            "unit": "ns/iter",
            "extra": "iterations: 41715\ncpu: 20154.814814814803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25112.03249282546,
            "unit": "ns/iter",
            "extra": "iterations: 33115\ncpu: 25111.387588706024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29612.809930721603,
            "unit": "ns/iter",
            "extra": "iterations: 28437\ncpu: 29610.802827302443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34639.04277919834,
            "unit": "ns/iter",
            "extra": "iterations: 24194\ncpu: 34637.13730677025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38378.18939893022,
            "unit": "ns/iter",
            "extra": "iterations: 21262\ncpu: 38374.97883548114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 569.6017276859144,
            "unit": "ns/iter",
            "extra": "iterations: 1193967\ncpu: 569.568170644582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 436.9223714467161,
            "unit": "ns/iter",
            "extra": "iterations: 1599901\ncpu: 436.886344842588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 428.30685784858474,
            "unit": "ns/iter",
            "extra": "iterations: 1630628\ncpu: 428.2800246285481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 428.88670674049865,
            "unit": "ns/iter",
            "extra": "iterations: 1633151\ncpu: 428.87852990935926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 899.5835877631184,
            "unit": "ns/iter",
            "extra": "iterations: 793932\ncpu: 899.5471904394831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1737.7079517491015,
            "unit": "ns/iter",
            "extra": "iterations: 457195\ncpu: 1737.572370651471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9223.564808924504,
            "unit": "ns/iter",
            "extra": "iterations: 88028\ncpu: 9222.879083927839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7302.055096196698,
            "unit": "ns/iter",
            "extra": "iterations: 112113\ncpu: 7301.560033180819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7176.762456516545,
            "unit": "ns/iter",
            "extra": "iterations: 112973\ncpu: 7176.4952687810455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7134.019535944348,
            "unit": "ns/iter",
            "extra": "iterations: 113176\ncpu: 7133.300346363185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35650.500497295805,
            "unit": "ns/iter",
            "extra": "iterations: 23125\ncpu: 35647.965405405404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 244049.74788970355,
            "unit": "ns/iter",
            "extra": "iterations: 3554\ncpu: 244029.62858750657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 195979.08937794456,
            "unit": "ns/iter",
            "extra": "iterations: 4453\ncpu: 195969.9528407814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 185327.98188729747,
            "unit": "ns/iter",
            "extra": "iterations: 4472\ncpu: 185314.8479427553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 187867.43493839164,
            "unit": "ns/iter",
            "extra": "iterations: 4465\ncpu: 187853.4378499445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98297.0838222074,
            "unit": "ns/iter",
            "extra": "iterations: 8864\ncpu: 98289.72247292394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 184433.0183150342,
            "unit": "ns/iter",
            "extra": "iterations: 4641\ncpu: 184425.98577892742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5285.8981009109575,
            "unit": "ns/iter",
            "extra": "iterations: 156812\ncpu: 5285.620998392977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23461.59390302523,
            "unit": "ns/iter",
            "extra": "iterations: 35329\ncpu: 23460.092275467683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18000.13599288637,
            "unit": "ns/iter",
            "extra": "iterations: 44995\ncpu: 17999.09989998884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17704.590824535982,
            "unit": "ns/iter",
            "extra": "iterations: 46232\ncpu: 17703.819865028563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17452.07590836549,
            "unit": "ns/iter",
            "extra": "iterations: 46925\ncpu: 17451.041022908914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50789.68511943851,
            "unit": "ns/iter",
            "extra": "iterations: 16619\ncpu: 50787.72489319451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 271035.385377955,
            "unit": "ns/iter",
            "extra": "iterations: 3228\ncpu: 271021.93308550137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 206602.82527264487,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 206588.57278330915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 206163.08282063153,
            "unit": "ns/iter",
            "extra": "iterations: 4226\ncpu: 206149.5504022725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 206164.41310000612,
            "unit": "ns/iter",
            "extra": "iterations: 4229\ncpu: 206150.62662568004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108165.82017599345,
            "unit": "ns/iter",
            "extra": "iterations: 8069\ncpu: 108161.65571942001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 192639.64821509848,
            "unit": "ns/iter",
            "extra": "iterations: 4426\ncpu: 192622.75192047047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 763128.3795082008,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 763096.5573770498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 433445.2213438831,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 433415.0691699607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1759.1844640496975,
            "unit": "ns/iter",
            "extra": "iterations: 453503\ncpu: 1759.1616814001202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9868.921216441053,
            "unit": "ns/iter",
            "extra": "iterations: 84180\ncpu: 9868.44024708954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7165.160691170565,
            "unit": "ns/iter",
            "extra": "iterations: 115109\ncpu: 7164.859394139496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7350.788084901038,
            "unit": "ns/iter",
            "extra": "iterations: 112177\ncpu: 7350.283926295053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7079.596521784635,
            "unit": "ns/iter",
            "extra": "iterations: 115979\ncpu: 7079.349709861308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 35092.61829114732,
            "unit": "ns/iter",
            "extra": "iterations: 24613\ncpu: 35090.375005078706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 257915.05586429313,
            "unit": "ns/iter",
            "extra": "iterations: 3419\ncpu: 257902.45685873055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 194347.0010988866,
            "unit": "ns/iter",
            "extra": "iterations: 4550\ncpu: 194334.41758241836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 193384.53588728132,
            "unit": "ns/iter",
            "extra": "iterations: 4542\ncpu: 193377.5209158968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 192344.56207722728,
            "unit": "ns/iter",
            "extra": "iterations: 4583\ncpu: 192333.31878682165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96399.5315374544,
            "unit": "ns/iter",
            "extra": "iterations: 9132\ncpu: 96395.70740254059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 185408.91199999303,
            "unit": "ns/iter",
            "extra": "iterations: 4750\ncpu: 185399.8315789475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 205.3174115209058,
            "unit": "ns/iter",
            "extra": "iterations: 3425301\ncpu: 205.31483218554976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1433.2849947310342,
            "unit": "ns/iter",
            "extra": "iterations: 503883\ncpu: 1433.2188226234966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1161.6735851236958,
            "unit": "ns/iter",
            "extra": "iterations: 597243\ncpu: 1161.5761088870026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1125.6745845868343,
            "unit": "ns/iter",
            "extra": "iterations: 621249\ncpu: 1125.6414094831546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 853.4798699493216,
            "unit": "ns/iter",
            "extra": "iterations: 823371\ncpu: 853.4175966848477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9435.481089338962,
            "unit": "ns/iter",
            "extra": "iterations: 74614\ncpu: 9435.089929503782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12303.949417982685,
            "unit": "ns/iter",
            "extra": "iterations: 56957\ncpu: 12302.749442561962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2714.91688933758,
            "unit": "ns/iter",
            "extra": "iterations: 256357\ncpu: 2714.7532542509052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2740.654413312019,
            "unit": "ns/iter",
            "extra": "iterations: 256610\ncpu: 2740.4298351584125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2733.424331020073,
            "unit": "ns/iter",
            "extra": "iterations: 255501\ncpu: 2733.306718956102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5130.127811320593,
            "unit": "ns/iter",
            "extra": "iterations: 136146\ncpu: 5129.731317849925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5177.9053166355425,
            "unit": "ns/iter",
            "extra": "iterations: 135029\ncpu: 5177.68923712684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1960.837794968235,
            "unit": "ns/iter",
            "extra": "iterations: 358725\ncpu: 1960.788347620056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10164.449708519096,
            "unit": "ns/iter",
            "extra": "iterations: 68958\ncpu: 10163.708344209479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8121.732856795338,
            "unit": "ns/iter",
            "extra": "iterations: 86317\ncpu: 8121.225251109344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8078.015398822307,
            "unit": "ns/iter",
            "extra": "iterations: 86630\ncpu: 8077.267690176566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8162.6123982980735,
            "unit": "ns/iter",
            "extra": "iterations: 85544\ncpu: 8162.404142897264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17840.9829402013,
            "unit": "ns/iter",
            "extra": "iterations: 39215\ncpu: 17840.576310085147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55173.58133459555,
            "unit": "ns/iter",
            "extra": "iterations: 12633\ncpu: 55169.278872793984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43787.313548226695,
            "unit": "ns/iter",
            "extra": "iterations: 16039\ncpu: 43786.85703597431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43691.52828427833,
            "unit": "ns/iter",
            "extra": "iterations: 16069\ncpu: 43690.55323915578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43420.65444733354,
            "unit": "ns/iter",
            "extra": "iterations: 16122\ncpu: 43416.524004465326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25304.278817094222,
            "unit": "ns/iter",
            "extra": "iterations: 27796\ncpu: 25302.93207655783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42737.84906813263,
            "unit": "ns/iter",
            "extra": "iterations: 16365\ncpu: 42734.14604338483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1932.171705323198,
            "unit": "ns/iter",
            "extra": "iterations: 360612\ncpu: 1932.0482956751605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10064.130927463724,
            "unit": "ns/iter",
            "extra": "iterations: 69275\ncpu: 10063.444243955255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8037.700694822385,
            "unit": "ns/iter",
            "extra": "iterations: 86497\ncpu: 8037.505347006258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8087.5176664394385,
            "unit": "ns/iter",
            "extra": "iterations: 86803\ncpu: 8087.1663421770145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8027.244918710417,
            "unit": "ns/iter",
            "extra": "iterations: 87527\ncpu: 8026.51181921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17660.96752429358,
            "unit": "ns/iter",
            "extra": "iterations: 39722\ncpu: 17659.317254921563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54304.286494078755,
            "unit": "ns/iter",
            "extra": "iterations: 12824\ncpu: 54299.87523393611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42497.27335240359,
            "unit": "ns/iter",
            "extra": "iterations: 16433\ncpu: 42495.308221262196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42069.4533085585,
            "unit": "ns/iter",
            "extra": "iterations: 16684\ncpu: 42066.33301366616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42134.77652926435,
            "unit": "ns/iter",
            "extra": "iterations: 16642\ncpu: 42132.2437207067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25099.80656137107,
            "unit": "ns/iter",
            "extra": "iterations: 27921\ncpu: 25097.83317216451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42145.13684273289,
            "unit": "ns/iter",
            "extra": "iterations: 16793\ncpu: 42144.69124039747 ns\nthreads: 1"
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
        "date": 1705778438050,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 603.896099747578,
            "unit": "ns/iter",
            "extra": "iterations: 1139516\ncpu: 603.8839296683856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5273.4142899998915,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5273.292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10363.622901925435,
            "unit": "ns/iter",
            "extra": "iterations: 80133\ncpu: 10363.41831704791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15605.903135499368,
            "unit": "ns/iter",
            "extra": "iterations: 53580\ncpu: 15605.931317655839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20432.31586047978,
            "unit": "ns/iter",
            "extra": "iterations: 40768\ncpu: 20431.99077708007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25374.04120184437,
            "unit": "ns/iter",
            "extra": "iterations: 33615\ncpu: 25373.82716049383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30217.444750468156,
            "unit": "ns/iter",
            "extra": "iterations: 27231\ncpu: 30216.705225661935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34425.5492010804,
            "unit": "ns/iter",
            "extra": "iterations: 24095\ncpu: 34424.25814484334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39767.52352777827,
            "unit": "ns/iter",
            "extra": "iterations: 21634\ncpu: 39766.252195617984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 580.9221864050583,
            "unit": "ns/iter",
            "extra": "iterations: 1199302\ncpu: 580.8953041018864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 440.6877113091845,
            "unit": "ns/iter",
            "extra": "iterations: 1585059\ncpu: 440.66353366026107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 433.50728242043914,
            "unit": "ns/iter",
            "extra": "iterations: 1623636\ncpu: 433.4948843213626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 438.38990426838586,
            "unit": "ns/iter",
            "extra": "iterations: 1594040\ncpu: 438.38730521191394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 893.5339068187557,
            "unit": "ns/iter",
            "extra": "iterations: 785373\ncpu: 893.5137826230341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1764.9408643531956,
            "unit": "ns/iter",
            "extra": "iterations: 452130\ncpu: 1764.8625395350869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9942.451805460747,
            "unit": "ns/iter",
            "extra": "iterations: 81752\ncpu: 9941.964722575582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7380.762241140981,
            "unit": "ns/iter",
            "extra": "iterations: 103483\ncpu: 7380.346530347993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7220.517284934303,
            "unit": "ns/iter",
            "extra": "iterations: 111629\ncpu: 7220.407779340493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7273.013262126322,
            "unit": "ns/iter",
            "extra": "iterations: 111973\ncpu: 7272.875603940233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35983.652639762135,
            "unit": "ns/iter",
            "extra": "iterations: 23146\ncpu: 35982.999222327875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 261860.86227545814,
            "unit": "ns/iter",
            "extra": "iterations: 3507\ncpu: 261852.7801539776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 186996.6617083473,
            "unit": "ns/iter",
            "extra": "iterations: 4437\ncpu: 186992.90060851895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 184861.24525745393,
            "unit": "ns/iter",
            "extra": "iterations: 4428\ncpu: 184857.88166214983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 188132.63422896556,
            "unit": "ns/iter",
            "extra": "iterations: 4429\ncpu: 188129.57778279492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98685.46998635722,
            "unit": "ns/iter",
            "extra": "iterations: 8796\ncpu: 98683.87903592525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 188540.0761761064,
            "unit": "ns/iter",
            "extra": "iterations: 4634\ncpu: 188537.5053949074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5064.607226019694,
            "unit": "ns/iter",
            "extra": "iterations: 159756\ncpu: 5064.465184406223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23935.33325669739,
            "unit": "ns/iter",
            "extra": "iterations: 34796\ncpu: 23935.05287964131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18361.28310522716,
            "unit": "ns/iter",
            "extra": "iterations: 44789\ncpu: 18361.046239031934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18314.518408803197,
            "unit": "ns/iter",
            "extra": "iterations: 44897\ncpu: 18314.257077310303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18078.873301403066,
            "unit": "ns/iter",
            "extra": "iterations: 46141\ncpu: 18078.04772328296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50170.220659524675,
            "unit": "ns/iter",
            "extra": "iterations: 16709\ncpu: 50168.855108025615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 273455.43640895706,
            "unit": "ns/iter",
            "extra": "iterations: 3208\ncpu: 273452.30673316895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 208438.13192101696,
            "unit": "ns/iter",
            "extra": "iterations: 4154\ncpu: 208432.1617717858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 207107.54843337127,
            "unit": "ns/iter",
            "extra": "iterations: 4181\ncpu: 207102.10475962766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 206440.90099953505,
            "unit": "ns/iter",
            "extra": "iterations: 4202\ncpu: 206436.19704902483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109815.43887266732,
            "unit": "ns/iter",
            "extra": "iterations: 7877\ncpu: 109810.80360543345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 199358.20839098256,
            "unit": "ns/iter",
            "extra": "iterations: 4338\ncpu: 199353.55002305092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 789261.3871773384,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 789230.6411323877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 444057.81913829496,
            "unit": "ns/iter",
            "extra": "iterations: 1996\ncpu: 444045.1903807585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1771.155950609207,
            "unit": "ns/iter",
            "extra": "iterations: 448828\ncpu: 1771.1089771582895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9556.697012835324,
            "unit": "ns/iter",
            "extra": "iterations: 86403\ncpu: 9556.37882943882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7318.8508598431745,
            "unit": "ns/iter",
            "extra": "iterations: 112753\ncpu: 7318.572454834938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7389.89852690263,
            "unit": "ns/iter",
            "extra": "iterations: 111330\ncpu: 7389.722446779846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7294.042367236104,
            "unit": "ns/iter",
            "extra": "iterations: 111100\ncpu: 7293.904590459018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34331.2006795757,
            "unit": "ns/iter",
            "extra": "iterations: 24427\ncpu: 34330.454005813095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 259470.14789964198,
            "unit": "ns/iter",
            "extra": "iterations: 3428\ncpu: 259461.08518086327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 194183.74928649623,
            "unit": "ns/iter",
            "extra": "iterations: 4555\ncpu: 194181.22941822172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 195278.64237102144,
            "unit": "ns/iter",
            "extra": "iterations: 4555\ncpu: 195273.15038419332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 194235.29689548718,
            "unit": "ns/iter",
            "extra": "iterations: 4574\ncpu: 194231.91954525615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96911.74253154203,
            "unit": "ns/iter",
            "extra": "iterations: 9038\ncpu: 96908.29829608306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 185369.05505569105,
            "unit": "ns/iter",
            "extra": "iterations: 4668\ncpu: 185366.77377891983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 209.24130640494133,
            "unit": "ns/iter",
            "extra": "iterations: 3346803\ncpu: 209.23487280249242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1458.1389907755372,
            "unit": "ns/iter",
            "extra": "iterations: 476564\ncpu: 1458.1200006714735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1190.0711337300734,
            "unit": "ns/iter",
            "extra": "iterations: 585545\ncpu: 1190.0465378408135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1180.9242819443468,
            "unit": "ns/iter",
            "extra": "iterations: 589648\ncpu: 1180.907083548153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 871.2726523633352,
            "unit": "ns/iter",
            "extra": "iterations: 809463\ncpu: 871.2742892510171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9760.962920817528,
            "unit": "ns/iter",
            "extra": "iterations: 72062\ncpu: 9760.567289278713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12780.228326559145,
            "unit": "ns/iter",
            "extra": "iterations: 54606\ncpu: 12780.064461780794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2873.033185147126,
            "unit": "ns/iter",
            "extra": "iterations: 242488\ncpu: 2872.9396918610505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2843.554323010981,
            "unit": "ns/iter",
            "extra": "iterations: 245292\ncpu: 2843.392772695382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2840.665012669006,
            "unit": "ns/iter",
            "extra": "iterations: 246272\ncpu: 2840.555158523908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5227.893439486815,
            "unit": "ns/iter",
            "extra": "iterations: 133267\ncpu: 5227.7345479376245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5387.072835825285,
            "unit": "ns/iter",
            "extra": "iterations: 128467\ncpu: 5386.9188196190435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1970.2613798378927,
            "unit": "ns/iter",
            "extra": "iterations: 357013\ncpu: 1970.2061269477686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10013.253488474234,
            "unit": "ns/iter",
            "extra": "iterations: 68583\ncpu: 10013.176734759414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8217.80477463381,
            "unit": "ns/iter",
            "extra": "iterations: 86792\ncpu: 8217.511982671262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8132.7897372005855,
            "unit": "ns/iter",
            "extra": "iterations: 85883\ncpu: 8132.496535985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8186.992173191903,
            "unit": "ns/iter",
            "extra": "iterations: 85731\ncpu: 8186.823902672234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18052.37284664839,
            "unit": "ns/iter",
            "extra": "iterations: 39067\ncpu: 18051.721401694605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56520.424214872684,
            "unit": "ns/iter",
            "extra": "iterations: 12100\ncpu: 56520.58677685875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 45009.25782759692,
            "unit": "ns/iter",
            "extra": "iterations: 15522\ncpu: 45007.41528153554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44801.6720867207,
            "unit": "ns/iter",
            "extra": "iterations: 15498\ncpu: 44800.612982320985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44740.44036580202,
            "unit": "ns/iter",
            "extra": "iterations: 15637\ncpu: 44738.84376798654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25777.63577900949,
            "unit": "ns/iter",
            "extra": "iterations: 27368\ncpu: 25776.640602162915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 44186.03688059227,
            "unit": "ns/iter",
            "extra": "iterations: 15862\ncpu: 44185.08384819113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1940.7517521596874,
            "unit": "ns/iter",
            "extra": "iterations: 360555\ncpu: 1940.6853323348753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10234.482746925285,
            "unit": "ns/iter",
            "extra": "iterations: 67814\ncpu: 10234.22892028193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8088.532319480549,
            "unit": "ns/iter",
            "extra": "iterations: 86140\ncpu: 8088.353842581979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8133.251567006574,
            "unit": "ns/iter",
            "extra": "iterations: 86311\ncpu: 8133.04445551555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8105.115624052194,
            "unit": "ns/iter",
            "extra": "iterations: 85778\ncpu: 8105.056074984374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17672.630833873525,
            "unit": "ns/iter",
            "extra": "iterations: 39982\ncpu: 17671.999899954906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 55161.46620975564,
            "unit": "ns/iter",
            "extra": "iterations: 12548\ncpu: 55159.6429709917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43431.992398279246,
            "unit": "ns/iter",
            "extra": "iterations: 16049\ncpu: 43430.406878932554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 43264.488670133156,
            "unit": "ns/iter",
            "extra": "iterations: 16152\ncpu: 43264.15923724539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43429.795055423245,
            "unit": "ns/iter",
            "extra": "iterations: 16058\ncpu: 43428.90148212751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25581.469133555525,
            "unit": "ns/iter",
            "extra": "iterations: 27457\ncpu: 25581.5129110973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43187.4102344374,
            "unit": "ns/iter",
            "extra": "iterations: 16337\ncpu: 43186.447940258724 ns\nthreads: 1"
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
        "date": 1705953599699,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 589.4902718673609,
            "unit": "ns/iter",
            "extra": "iterations: 1176125\ncpu: 589.4540121160592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5350.535960000116,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5350.432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10374.35320969641,
            "unit": "ns/iter",
            "extra": "iterations: 80397\ncpu: 10373.817430998672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15325.164058778437,
            "unit": "ns/iter",
            "extra": "iterations: 54578\ncpu: 15324.533694895383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20165.063411342726,
            "unit": "ns/iter",
            "extra": "iterations: 41491\ncpu: 20164.076546720982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25023.99201644212,
            "unit": "ns/iter",
            "extra": "iterations: 33569\ncpu: 25023.429354463944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30019.575256988734,
            "unit": "ns/iter",
            "extra": "iterations: 27725\ncpu: 30018.719567177643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34702.09214551467,
            "unit": "ns/iter",
            "extra": "iterations: 24190\ncpu: 34700.417527904065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39252.93757099436,
            "unit": "ns/iter",
            "extra": "iterations: 22009\ncpu: 39251.15180153576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 576.6002465421126,
            "unit": "ns/iter",
            "extra": "iterations: 1219264\ncpu: 576.5557746312539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 435.2358207454706,
            "unit": "ns/iter",
            "extra": "iterations: 1730433\ncpu: 435.21737045005534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 424.38323247876,
            "unit": "ns/iter",
            "extra": "iterations: 1647256\ncpu: 424.3823667966614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 425.9044694936303,
            "unit": "ns/iter",
            "extra": "iterations: 1641036\ncpu: 425.88596471984755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 874.3147630431048,
            "unit": "ns/iter",
            "extra": "iterations: 799449\ncpu: 874.2996739004002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1742.9444321136807,
            "unit": "ns/iter",
            "extra": "iterations: 455047\ncpu: 1742.8648029763974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9696.463456360932,
            "unit": "ns/iter",
            "extra": "iterations: 83585\ncpu: 9696.16438356165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7294.150307190141,
            "unit": "ns/iter",
            "extra": "iterations: 111006\ncpu: 7293.921049312661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7362.243851164401,
            "unit": "ns/iter",
            "extra": "iterations: 110834\ncpu: 7362.055867333135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7108.913273441708,
            "unit": "ns/iter",
            "extra": "iterations: 114763\ncpu: 7108.834728963182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36514.54986952313,
            "unit": "ns/iter",
            "extra": "iterations: 22609\ncpu: 36512.592330487845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 245553.57548497367,
            "unit": "ns/iter",
            "extra": "iterations: 3557\ncpu: 245542.14225470836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 187170.6107637295,
            "unit": "ns/iter",
            "extra": "iterations: 4478\ncpu: 187165.8106297454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 193494.91013874311,
            "unit": "ns/iter",
            "extra": "iterations: 4685\ncpu: 193488.28175026682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 188940.60876370405,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 188928.16901408427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 99421.61300979854,
            "unit": "ns/iter",
            "extra": "iterations: 8778\ncpu: 99418.35269993155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186602.36600041584,
            "unit": "ns/iter",
            "extra": "iterations: 4653\ncpu: 186587.7713303246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5094.097066167342,
            "unit": "ns/iter",
            "extra": "iterations: 160200\ncpu: 5093.898252184757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23355.8242506047,
            "unit": "ns/iter",
            "extra": "iterations: 35562\ncpu: 23355.21905404645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 17990.190283667725,
            "unit": "ns/iter",
            "extra": "iterations: 45511\ncpu: 17989.50583375448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17910.519133981335,
            "unit": "ns/iter",
            "extra": "iterations: 46096\ncpu: 17909.443335647353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17448.503721554724,
            "unit": "ns/iter",
            "extra": "iterations: 46889\ncpu: 17447.70628505623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 51549.18142307211,
            "unit": "ns/iter",
            "extra": "iterations: 16106\ncpu: 51548.33602384221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 269997.0164392116,
            "unit": "ns/iter",
            "extra": "iterations: 3224\ncpu: 269988.95781637833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 204556.16760788078,
            "unit": "ns/iter",
            "extra": "iterations: 4427\ncpu: 204553.78360063332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 205734.21365900227,
            "unit": "ns/iter",
            "extra": "iterations: 4217\ncpu: 205730.49561299448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 205723.04411417196,
            "unit": "ns/iter",
            "extra": "iterations: 4239\ncpu: 205717.07949988212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 109397.8608695715,
            "unit": "ns/iter",
            "extra": "iterations: 7935\ncpu: 109396.1940768746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 197143.89325461577,
            "unit": "ns/iter",
            "extra": "iterations: 4403\ncpu: 197137.17919600283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 788952.1791043937,
            "unit": "ns/iter",
            "extra": "iterations: 1206\ncpu: 788926.3681592057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 442718.50245581043,
            "unit": "ns/iter",
            "extra": "iterations: 2036\ncpu: 442691.20825147565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1762.9099520794925,
            "unit": "ns/iter",
            "extra": "iterations: 458467\ncpu: 1762.8058289909739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9379.470399161959,
            "unit": "ns/iter",
            "extra": "iterations: 87734\ncpu: 9379.03891307815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7375.991450833743,
            "unit": "ns/iter",
            "extra": "iterations: 110888\ncpu: 7375.595195151844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7452.646661945008,
            "unit": "ns/iter",
            "extra": "iterations: 110124\ncpu: 7452.384584650028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6939.419355388872,
            "unit": "ns/iter",
            "extra": "iterations: 117094\ncpu: 6939.0327429245135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34018.69732937579,
            "unit": "ns/iter",
            "extra": "iterations: 24601\ncpu: 34018.304133978345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 259812.88081394124,
            "unit": "ns/iter",
            "extra": "iterations: 3440\ncpu: 259806.30813953446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 193962.2529670447,
            "unit": "ns/iter",
            "extra": "iterations: 4550\ncpu: 193954.41758241737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 193459.944738014,
            "unit": "ns/iter",
            "extra": "iterations: 4542\ncpu: 193455.15191545477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 191502.93358258315,
            "unit": "ns/iter",
            "extra": "iterations: 4547\ncpu: 191490.5432153072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96137.89870215859,
            "unit": "ns/iter",
            "extra": "iterations: 9092\ncpu: 96135.56973163187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 173193.36614999754,
            "unit": "ns/iter",
            "extra": "iterations: 4774\ncpu: 173181.4411395064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 206.70117642820182,
            "unit": "ns/iter",
            "extra": "iterations: 3387032\ncpu: 206.68768408447164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1434.4978655079587,
            "unit": "ns/iter",
            "extra": "iterations: 494497\ncpu: 1434.422049072094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1170.1626748525387,
            "unit": "ns/iter",
            "extra": "iterations: 598433\ncpu: 1170.133999963241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1176.3558989580656,
            "unit": "ns/iter",
            "extra": "iterations: 594961\ncpu: 1176.3216412504253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 846.0854399041278,
            "unit": "ns/iter",
            "extra": "iterations: 828044\ncpu: 846.050451425286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9584.5830507556,
            "unit": "ns/iter",
            "extra": "iterations: 73136\ncpu: 9584.003773791226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11655.746986148652,
            "unit": "ns/iter",
            "extra": "iterations: 60139\ncpu: 11655.1505678512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2773.666697032453,
            "unit": "ns/iter",
            "extra": "iterations: 252476\ncpu: 2773.4758947385017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2626.002803753198,
            "unit": "ns/iter",
            "extra": "iterations: 254302\ncpu: 2625.7894157340493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2706.308674478133,
            "unit": "ns/iter",
            "extra": "iterations: 257906\ncpu: 2706.237931649517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5112.370135167754,
            "unit": "ns/iter",
            "extra": "iterations: 136053\ncpu: 5112.276098285226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5181.460932594044,
            "unit": "ns/iter",
            "extra": "iterations: 135343\ncpu: 5181.289021227559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1970.1705076392184,
            "unit": "ns/iter",
            "extra": "iterations: 355075\ncpu: 1970.1249031894533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10416.235538469673,
            "unit": "ns/iter",
            "extra": "iterations: 67887\ncpu: 10415.790946720317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8167.9477052564225,
            "unit": "ns/iter",
            "extra": "iterations: 85783\ncpu: 8167.744191739569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8197.37024104575,
            "unit": "ns/iter",
            "extra": "iterations: 85917\ncpu: 8197.129788051237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8198.166561343576,
            "unit": "ns/iter",
            "extra": "iterations: 85452\ncpu: 8197.624397322501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18062.048192459915,
            "unit": "ns/iter",
            "extra": "iterations: 38948\ncpu: 18061.69508062019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54396.84806564761,
            "unit": "ns/iter",
            "extra": "iterations: 12795\ncpu: 54393.61469323915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43297.81788507706,
            "unit": "ns/iter",
            "extra": "iterations: 16237\ncpu: 43297.25934593801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43718.44353949923,
            "unit": "ns/iter",
            "extra": "iterations: 16330\ncpu: 43716.289038579285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43315.156874809436,
            "unit": "ns/iter",
            "extra": "iterations: 16255\ncpu: 43313.70655183013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25094.01803679027,
            "unit": "ns/iter",
            "extra": "iterations: 27832\ncpu: 25093.155360735822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42834.94529767911,
            "unit": "ns/iter",
            "extra": "iterations: 16343\ncpu: 42833.37820473597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1918.412884221285,
            "unit": "ns/iter",
            "extra": "iterations: 364601\ncpu: 1918.3726868549138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10077.207111610365,
            "unit": "ns/iter",
            "extra": "iterations: 69267\ncpu: 10076.736396841197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7945.471250863394,
            "unit": "ns/iter",
            "extra": "iterations: 86820\ncpu: 7945.023036166798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7955.447391156317,
            "unit": "ns/iter",
            "extra": "iterations: 87970\ncpu: 7954.764124133192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7983.069716849851,
            "unit": "ns/iter",
            "extra": "iterations: 87798\ncpu: 7982.680698877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17695.228483347615,
            "unit": "ns/iter",
            "extra": "iterations: 39574\ncpu: 17693.978369636578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53855.69239684319,
            "unit": "ns/iter",
            "extra": "iterations: 12942\ncpu: 53854.75197032969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42302.02337754854,
            "unit": "ns/iter",
            "extra": "iterations: 16811\ncpu: 42301.15400630535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41647.70190059036,
            "unit": "ns/iter",
            "extra": "iterations: 16679\ncpu: 41646.303735235466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41744.30537955789,
            "unit": "ns/iter",
            "extra": "iterations: 16730\ncpu: 41742.90496114813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24835.40595399031,
            "unit": "ns/iter",
            "extra": "iterations: 28082\ncpu: 24833.327398333222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42128.89977980229,
            "unit": "ns/iter",
            "extra": "iterations: 16803\ncpu: 42128.35803130352 ns\nthreads: 1"
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
        "date": 1705955037338,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 597.1750814089127,
            "unit": "ns/iter",
            "extra": "iterations: 1174625\ncpu: 597.1514313078642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5211.420640000597,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5211.228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10238.328097147803,
            "unit": "ns/iter",
            "extra": "iterations: 80784\ncpu: 10237.965438700734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15219.24583805967,
            "unit": "ns/iter",
            "extra": "iterations: 54662\ncpu: 15218.773553839956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20343.400649272797,
            "unit": "ns/iter",
            "extra": "iterations: 41585\ncpu: 20342.61392328965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25569.653303099065,
            "unit": "ns/iter",
            "extra": "iterations: 33075\ncpu: 25568.568405139835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30077.67204028405,
            "unit": "ns/iter",
            "extra": "iterations: 27604\ncpu: 30076.539631937405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35566.82152914924,
            "unit": "ns/iter",
            "extra": "iterations: 23791\ncpu: 35565.608843680406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38872.62107833988,
            "unit": "ns/iter",
            "extra": "iterations: 21292\ncpu: 38870.40202893104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 574.8446212690116,
            "unit": "ns/iter",
            "extra": "iterations: 1220167\ncpu: 574.833690798062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 437.3875217788049,
            "unit": "ns/iter",
            "extra": "iterations: 1696604\ncpu: 437.3771369158621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 429.0018902223813,
            "unit": "ns/iter",
            "extra": "iterations: 1630496\ncpu: 428.9870076344863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 435.038375316156,
            "unit": "ns/iter",
            "extra": "iterations: 1607205\ncpu: 435.0179348620745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 892.1093739831636,
            "unit": "ns/iter",
            "extra": "iterations: 783669\ncpu: 892.0776501303499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1778.524395189877,
            "unit": "ns/iter",
            "extra": "iterations: 453696\ncpu: 1778.4360011990423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9959.730977634505,
            "unit": "ns/iter",
            "extra": "iterations: 82495\ncpu: 9959.28601733438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7225.497322600185,
            "unit": "ns/iter",
            "extra": "iterations: 112796\ncpu: 7225.289017341048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7276.086937354912,
            "unit": "ns/iter",
            "extra": "iterations: 111149\ncpu: 7275.851334694879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7115.154773344506,
            "unit": "ns/iter",
            "extra": "iterations: 109263\ncpu: 7114.583161729031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35691.16027243599,
            "unit": "ns/iter",
            "extra": "iterations: 23198\ncpu: 35690.13277006631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 245000.65352449677,
            "unit": "ns/iter",
            "extra": "iterations: 3348\ncpu: 244993.0704898447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 184818.03143112944,
            "unit": "ns/iter",
            "extra": "iterations: 4486\ncpu: 184805.14935354458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 184904.8188308855,
            "unit": "ns/iter",
            "extra": "iterations: 4482\ncpu: 184892.94957608142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 186147.8174496634,
            "unit": "ns/iter",
            "extra": "iterations: 4470\ncpu: 186138.1208053693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97122.71859352186,
            "unit": "ns/iter",
            "extra": "iterations: 8987\ncpu: 97120.162456882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 186378.19524725032,
            "unit": "ns/iter",
            "extra": "iterations: 4671\ncpu: 186366.47398843968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5039.607765755252,
            "unit": "ns/iter",
            "extra": "iterations: 161916\ncpu: 5039.2536870970025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24192.26339482635,
            "unit": "ns/iter",
            "extra": "iterations: 33987\ncpu: 24190.94359608085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18450.65599587958,
            "unit": "ns/iter",
            "extra": "iterations: 44639\ncpu: 18449.40522861175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18092.169283188796,
            "unit": "ns/iter",
            "extra": "iterations: 46372\ncpu: 18090.699128784607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18270.174911116435,
            "unit": "ns/iter",
            "extra": "iterations: 45566\ncpu: 18268.678400561792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 50772.27708054013,
            "unit": "ns/iter",
            "extra": "iterations: 16414\ncpu: 50768.606067990666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 269776.7402837989,
            "unit": "ns/iter",
            "extra": "iterations: 3242\ncpu: 269760.7341147427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 204932.28337291643,
            "unit": "ns/iter",
            "extra": "iterations: 4210\ncpu: 204917.43467933405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 204489.29472450327,
            "unit": "ns/iter",
            "extra": "iterations: 4265\ncpu: 204476.29542790202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 205059.61616160753,
            "unit": "ns/iter",
            "extra": "iterations: 4257\ncpu: 205053.72327930588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108881.69996230585,
            "unit": "ns/iter",
            "extra": "iterations: 7959\ncpu: 108875.97688151733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 195959.98031672114,
            "unit": "ns/iter",
            "extra": "iterations: 4420\ncpu: 195954.6153846159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 785466.1243822129,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 785421.0873146665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 443264.3054040628,
            "unit": "ns/iter",
            "extra": "iterations: 2017\ncpu: 443238.8696083321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1739.5203515021576,
            "unit": "ns/iter",
            "extra": "iterations: 460310\ncpu: 1739.4362494840404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9387.23113889766,
            "unit": "ns/iter",
            "extra": "iterations: 87813\ncpu: 9386.974593738927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7041.069976061041,
            "unit": "ns/iter",
            "extra": "iterations: 117383\ncpu: 7040.925006176338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6954.259390784599,
            "unit": "ns/iter",
            "extra": "iterations: 116018\ncpu: 6953.970073609258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6506.446467803537,
            "unit": "ns/iter",
            "extra": "iterations: 126083\ncpu: 6506.134054551348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34140.96314056824,
            "unit": "ns/iter",
            "extra": "iterations: 24607\ncpu: 34138.948266753476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 259195.84730364388,
            "unit": "ns/iter",
            "extra": "iterations: 3412\ncpu: 259188.18874560343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 192911.37142233044,
            "unit": "ns/iter",
            "extra": "iterations: 4577\ncpu: 192904.6318549271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 192526.25418568784,
            "unit": "ns/iter",
            "extra": "iterations: 4599\ncpu: 192520.04783648634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 191242.49934697073,
            "unit": "ns/iter",
            "extra": "iterations: 4594\ncpu: 191233.93556813165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95909.97924900912,
            "unit": "ns/iter",
            "extra": "iterations: 9108\ncpu: 95907.23539745278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 183981.9262760098,
            "unit": "ns/iter",
            "extra": "iterations: 4761\ncpu: 183976.45452636117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 206.8410651602246,
            "unit": "ns/iter",
            "extra": "iterations: 3387772\ncpu: 206.8362628890017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1424.9136686697866,
            "unit": "ns/iter",
            "extra": "iterations: 491884\ncpu: 1424.8548438249704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1171.0308059026834,
            "unit": "ns/iter",
            "extra": "iterations: 594042\ncpu: 1170.976126267162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1063.5360737287037,
            "unit": "ns/iter",
            "extra": "iterations: 658956\ncpu: 1063.466301240145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 864.2465410749237,
            "unit": "ns/iter",
            "extra": "iterations: 808705\ncpu: 864.2101878929861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9381.918345098766,
            "unit": "ns/iter",
            "extra": "iterations: 75219\ncpu: 9381.709408527076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12352.490373224584,
            "unit": "ns/iter",
            "extra": "iterations: 56561\ncpu: 12352.094199183162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2737.907185911946,
            "unit": "ns/iter",
            "extra": "iterations: 275066\ncpu: 2737.6727767154052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2766.784624422039,
            "unit": "ns/iter",
            "extra": "iterations: 253636\ncpu: 2766.5985901055096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2699.24317210886,
            "unit": "ns/iter",
            "extra": "iterations: 259121\ncpu: 2699.0259376893514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5070.580607476759,
            "unit": "ns/iter",
            "extra": "iterations: 137816\ncpu: 5070.439571602746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5087.785441421283,
            "unit": "ns/iter",
            "extra": "iterations: 137431\ncpu: 5087.483173374291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1947.7545286505385,
            "unit": "ns/iter",
            "extra": "iterations: 359765\ncpu: 1947.6196961905623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9945.204888927232,
            "unit": "ns/iter",
            "extra": "iterations: 70404\ncpu: 9944.6622351002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8098.549895202626,
            "unit": "ns/iter",
            "extra": "iterations: 85880\ncpu: 8097.994876571851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8011.629056711292,
            "unit": "ns/iter",
            "extra": "iterations: 87725\ncpu: 8011.3741806782455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8108.23482102736,
            "unit": "ns/iter",
            "extra": "iterations: 86913\ncpu: 8107.689298493936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17797.68279351222,
            "unit": "ns/iter",
            "extra": "iterations: 39334\ncpu: 17796.58819342054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51874.438993614414,
            "unit": "ns/iter",
            "extra": "iterations: 12679\ncpu: 51871.717012382316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44389.139147502894,
            "unit": "ns/iter",
            "extra": "iterations: 15789\ncpu: 44386.4209259604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44309.593668884794,
            "unit": "ns/iter",
            "extra": "iterations: 15795\ncpu: 44306.869262424756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44003.380733944345,
            "unit": "ns/iter",
            "extra": "iterations: 15914\ncpu: 44002.46323991459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25294.802847678337,
            "unit": "ns/iter",
            "extra": "iterations: 27461\ncpu: 25294.239102727646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43687.89405668703,
            "unit": "ns/iter",
            "extra": "iterations: 16018\ncpu: 43685.060556873425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1933.2689862726727,
            "unit": "ns/iter",
            "extra": "iterations: 364171\ncpu: 1933.2319157758207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10061.906484327084,
            "unit": "ns/iter",
            "extra": "iterations: 69614\ncpu: 10061.707415175108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8116.456415027693,
            "unit": "ns/iter",
            "extra": "iterations: 85970\ncpu: 8115.959055484417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8048.141226949856,
            "unit": "ns/iter",
            "extra": "iterations: 86931\ncpu: 8047.652736078031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7940.91595701159,
            "unit": "ns/iter",
            "extra": "iterations: 87836\ncpu: 7940.423061159329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17624.172615904656,
            "unit": "ns/iter",
            "extra": "iterations: 39753\ncpu: 17623.105174452063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54782.27057425678,
            "unit": "ns/iter",
            "extra": "iterations: 12625\ncpu: 54781.077227723006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42778.65489784375,
            "unit": "ns/iter",
            "extra": "iterations: 16201\ncpu: 42777.72976976676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42885.053512318824,
            "unit": "ns/iter",
            "extra": "iterations: 16314\ncpu: 42882.49356381017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42896.1281957232,
            "unit": "ns/iter",
            "extra": "iterations: 16350\ncpu: 42893.522935780005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25287.541762503806,
            "unit": "ns/iter",
            "extra": "iterations: 27824\ncpu: 25286.28522139177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42512.53728293729,
            "unit": "ns/iter",
            "extra": "iterations: 16643\ncpu: 42509.968154780036 ns\nthreads: 1"
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
        "date": 1705957046516,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 585.9244109723882,
            "unit": "ns/iter",
            "extra": "iterations: 1199010\ncpu: 585.9197170999408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5471.326759999329,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5470.811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10386.231684314449,
            "unit": "ns/iter",
            "extra": "iterations: 79522\ncpu: 10385.630391589748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15591.700154500291,
            "unit": "ns/iter",
            "extra": "iterations: 53721\ncpu: 15590.988626421695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20230.31571232902,
            "unit": "ns/iter",
            "extra": "iterations: 41617\ncpu: 20229.264483264047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25307.968320473254,
            "unit": "ns/iter",
            "extra": "iterations: 33176\ncpu: 25305.880757173873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30308.895785136385,
            "unit": "ns/iter",
            "extra": "iterations: 27664\ncpu: 30306.947657605553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35350.267396337345,
            "unit": "ns/iter",
            "extra": "iterations: 23755\ncpu: 35349.13070932437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40466.81840240968,
            "unit": "ns/iter",
            "extra": "iterations: 20606\ncpu: 40465.61195768226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 589.6881032270824,
            "unit": "ns/iter",
            "extra": "iterations: 1186742\ncpu: 589.6770317389959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 434.6746196546723,
            "unit": "ns/iter",
            "extra": "iterations: 1624379\ncpu: 434.6661708874597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 434.3397205042387,
            "unit": "ns/iter",
            "extra": "iterations: 1607180\ncpu: 434.3401485832331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 432.9646822857822,
            "unit": "ns/iter",
            "extra": "iterations: 1618876\ncpu: 432.9492190878114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 879.5833813855204,
            "unit": "ns/iter",
            "extra": "iterations: 797744\ncpu: 879.575402635433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1747.763449807063,
            "unit": "ns/iter",
            "extra": "iterations: 456698\ncpu: 1747.7135875348674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9789.191597952391,
            "unit": "ns/iter",
            "extra": "iterations: 83075\ncpu: 9789.026783027384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7479.793747070468,
            "unit": "ns/iter",
            "extra": "iterations: 108813\ncpu: 7479.656842472854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7611.433754266646,
            "unit": "ns/iter",
            "extra": "iterations: 107222\ncpu: 7611.3120441700385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7591.801829893702,
            "unit": "ns/iter",
            "extra": "iterations: 107110\ncpu: 7591.516198300826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35812.52546346389,
            "unit": "ns/iter",
            "extra": "iterations: 23033\ncpu: 35812.52550688157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 243466.56942102968,
            "unit": "ns/iter",
            "extra": "iterations: 3558\ncpu: 243458.6284429451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 192687.3833671559,
            "unit": "ns/iter",
            "extra": "iterations: 4437\ncpu: 192681.33874239377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 195864.91245489087,
            "unit": "ns/iter",
            "extra": "iterations: 4432\ncpu: 195857.37815884544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 189066.71199457563,
            "unit": "ns/iter",
            "extra": "iterations: 4427\ncpu: 189065.21346284216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98722.45934041527,
            "unit": "ns/iter",
            "extra": "iterations: 8854\ncpu: 98718.71470521807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 187027.20836927256,
            "unit": "ns/iter",
            "extra": "iterations: 4636\ncpu: 187023.36065573833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5177.337481196663,
            "unit": "ns/iter",
            "extra": "iterations: 156225\ncpu: 5177.19443110898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23307.54934275102,
            "unit": "ns/iter",
            "extra": "iterations: 35679\ncpu: 23306.80792623109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18044.630736346127,
            "unit": "ns/iter",
            "extra": "iterations: 44911\ncpu: 18043.71534813298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18038.303462994067,
            "unit": "ns/iter",
            "extra": "iterations: 45452\ncpu: 18037.294288480116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17622.7120358983,
            "unit": "ns/iter",
            "extra": "iterations: 46353\ncpu: 17621.951114275224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49698.29562419901,
            "unit": "ns/iter",
            "extra": "iterations: 16477\ncpu: 49694.8473629911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 270397.15913313685,
            "unit": "ns/iter",
            "extra": "iterations: 3230\ncpu: 270378.48297213635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 206772.03598665225,
            "unit": "ns/iter",
            "extra": "iterations: 4196\ncpu: 206757.34032411728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 204711.16341116966,
            "unit": "ns/iter",
            "extra": "iterations: 4198\ncpu: 204703.40638399322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 203925.77118646368,
            "unit": "ns/iter",
            "extra": "iterations: 4248\ncpu: 203914.1713747645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108248.85315729704,
            "unit": "ns/iter",
            "extra": "iterations: 8029\ncpu: 108242.69522979159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 197477.19483463373,
            "unit": "ns/iter",
            "extra": "iterations: 4414\ncpu: 197466.42501132877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 786246.0282391781,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 786212.7076411941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 445392.15739348345,
            "unit": "ns/iter",
            "extra": "iterations: 1995\ncpu: 445368.7218045095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1758.226588580988,
            "unit": "ns/iter",
            "extra": "iterations: 454714\ncpu: 1758.1508376694012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9574.323657256336,
            "unit": "ns/iter",
            "extra": "iterations: 86502\ncpu: 9574.030658250644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7463.599881419666,
            "unit": "ns/iter",
            "extra": "iterations: 109630\ncpu: 7463.607589163529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7190.463569389523,
            "unit": "ns/iter",
            "extra": "iterations: 113476\ncpu: 7189.942366667823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6896.3126975780215,
            "unit": "ns/iter",
            "extra": "iterations: 117676\ncpu: 6895.929501342689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 33885.48122228194,
            "unit": "ns/iter",
            "extra": "iterations: 24577\ncpu: 33882.67892745258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 260693.90202402102,
            "unit": "ns/iter",
            "extra": "iterations: 3409\ncpu: 260685.8316221762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 195219.86885977624,
            "unit": "ns/iter",
            "extra": "iterations: 4499\ncpu: 195212.3583018453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 193765.19960385602,
            "unit": "ns/iter",
            "extra": "iterations: 4544\ncpu: 193759.83714788692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 193518.02526362942,
            "unit": "ns/iter",
            "extra": "iterations: 4552\ncpu: 193509.86379613462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 96660.54792404466,
            "unit": "ns/iter",
            "extra": "iterations: 9056\ncpu: 96659.50750883405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 186390.25355705002,
            "unit": "ns/iter",
            "extra": "iterations: 4709\ncpu: 186383.4572095975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 210.27865710123535,
            "unit": "ns/iter",
            "extra": "iterations: 3349292\ncpu: 210.2759030863837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1448.9218870062164,
            "unit": "ns/iter",
            "extra": "iterations: 484132\ncpu: 1448.87055596408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1185.6764735855045,
            "unit": "ns/iter",
            "extra": "iterations: 588802\ncpu: 1185.6347295016014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1084.9070579320257,
            "unit": "ns/iter",
            "extra": "iterations: 643928\ncpu: 1084.8251667888278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 877.4386444340797,
            "unit": "ns/iter",
            "extra": "iterations: 799194\ncpu: 877.3785839233021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9994.120771858054,
            "unit": "ns/iter",
            "extra": "iterations: 71101\ncpu: 9993.46563339476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12971.457262128786,
            "unit": "ns/iter",
            "extra": "iterations: 54378\ncpu: 12971.05447055794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2861.0391038896655,
            "unit": "ns/iter",
            "extra": "iterations: 245193\ncpu: 2861.0413021579043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2857.4527090831934,
            "unit": "ns/iter",
            "extra": "iterations: 245692\ncpu: 2857.3726454259804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2847.935798677335,
            "unit": "ns/iter",
            "extra": "iterations: 246132\ncpu: 2847.9088456600452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5173.839839299759,
            "unit": "ns/iter",
            "extra": "iterations: 135158\ncpu: 5173.744062504653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5382.415089278084,
            "unit": "ns/iter",
            "extra": "iterations: 130490\ncpu: 5382.102843129719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 2003.3772188323621,
            "unit": "ns/iter",
            "extra": "iterations: 346128\ncpu: 2003.2531317893952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10191.549398334399,
            "unit": "ns/iter",
            "extra": "iterations: 67978\ncpu: 10190.899997057875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8120.950660446364,
            "unit": "ns/iter",
            "extra": "iterations: 86381\ncpu: 8120.7580370684345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8106.587876888923,
            "unit": "ns/iter",
            "extra": "iterations: 86166\ncpu: 8106.335445535426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8179.727734385664,
            "unit": "ns/iter",
            "extra": "iterations: 85266\ncpu: 8179.318837520358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18042.329410855502,
            "unit": "ns/iter",
            "extra": "iterations: 38751\ncpu: 18041.149905809052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 56666.66536553897,
            "unit": "ns/iter",
            "extra": "iterations: 12297\ncpu: 56662.02325770506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 44314.270086885146,
            "unit": "ns/iter",
            "extra": "iterations: 15769\ncpu: 44311.02162470667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 44387.857813002796,
            "unit": "ns/iter",
            "extra": "iterations: 15775\ncpu: 44385.9207606975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 44315.18693537266,
            "unit": "ns/iter",
            "extra": "iterations: 15829\ncpu: 44312.249668330966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25463.43296293408,
            "unit": "ns/iter",
            "extra": "iterations: 27358\ncpu: 25462.90298998431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43678.132826133966,
            "unit": "ns/iter",
            "extra": "iterations: 16036\ncpu: 43677.319780493395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1932.3451215329326,
            "unit": "ns/iter",
            "extra": "iterations: 361548\ncpu: 1932.3464657528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10292.639641224921,
            "unit": "ns/iter",
            "extra": "iterations: 68232\ncpu: 10292.45661859526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8159.21511614421,
            "unit": "ns/iter",
            "extra": "iterations: 85842\ncpu: 8158.664756180047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8158.586340174791,
            "unit": "ns/iter",
            "extra": "iterations: 85638\ncpu: 8158.071183353196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8022.378733695347,
            "unit": "ns/iter",
            "extra": "iterations: 86409\ncpu: 8021.976877408681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17622.50064123619,
            "unit": "ns/iter",
            "extra": "iterations: 39767\ncpu: 17622.521185907837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53287.65357424278,
            "unit": "ns/iter",
            "extra": "iterations: 12730\ncpu: 53185.96229379429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42031.50692760039,
            "unit": "ns/iter",
            "extra": "iterations: 17322\ncpu: 42031.16845629889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42030.6275504105,
            "unit": "ns/iter",
            "extra": "iterations: 16762\ncpu: 42028.41546354851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41946.818603535816,
            "unit": "ns/iter",
            "extra": "iterations: 16814\ncpu: 41945.67622219638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25080.378669620346,
            "unit": "ns/iter",
            "extra": "iterations: 27932\ncpu: 25079.006157811807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41756.292999988385,
            "unit": "ns/iter",
            "extra": "iterations: 17000\ncpu: 41754.735294117374 ns\nthreads: 1"
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
        "date": 1705958499822,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 590.9539512542553,
            "unit": "ns/iter",
            "extra": "iterations: 1190217\ncpu: 590.9551787615201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5297.744549999379,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5297.552999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10276.229916930792,
            "unit": "ns/iter",
            "extra": "iterations: 80777\ncpu: 10276.138009581933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15327.112085805378,
            "unit": "ns/iter",
            "extra": "iterations: 54262\ncpu: 15326.744314621652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20202.218381131657,
            "unit": "ns/iter",
            "extra": "iterations: 41597\ncpu: 20202.04822463158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 24959.570475395718,
            "unit": "ns/iter",
            "extra": "iterations: 33572\ncpu: 24959.087930418205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29938.759477031967,
            "unit": "ns/iter",
            "extra": "iterations: 28147\ncpu: 29938.15681955448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34582.97564934718,
            "unit": "ns/iter",
            "extra": "iterations: 24024\ncpu: 34580.93156843159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 38079.92086003529,
            "unit": "ns/iter",
            "extra": "iterations: 21999\ncpu: 38077.88081276421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 575.1317279325967,
            "unit": "ns/iter",
            "extra": "iterations: 1218595\ncpu: 575.096976435978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 433.4860360102318,
            "unit": "ns/iter",
            "extra": "iterations: 1675524\ncpu: 433.47024572611315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 427.6354052441943,
            "unit": "ns/iter",
            "extra": "iterations: 1644231\ncpu: 427.6264709764022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 422.8262139814787,
            "unit": "ns/iter",
            "extra": "iterations: 1638843\ncpu: 422.80883525755644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 880.0406404714165,
            "unit": "ns/iter",
            "extra": "iterations: 795414\ncpu: 880.0052551250027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1740.728339664007,
            "unit": "ns/iter",
            "extra": "iterations: 457299\ncpu: 1740.6449609555239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9660.15356698071,
            "unit": "ns/iter",
            "extra": "iterations: 84315\ncpu: 9660.048627171913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7412.938153485123,
            "unit": "ns/iter",
            "extra": "iterations: 109222\ncpu: 7412.854553112005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7201.5544669617575,
            "unit": "ns/iter",
            "extra": "iterations: 111765\ncpu: 7201.368049031462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7074.7559297314865,
            "unit": "ns/iter",
            "extra": "iterations: 112484\ncpu: 7074.399914654525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35958.52870182059,
            "unit": "ns/iter",
            "extra": "iterations: 23117\ncpu: 35956.78937578418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 242996.20095557635,
            "unit": "ns/iter",
            "extra": "iterations: 3558\ncpu: 242981.92804946558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 186992.28263311033,
            "unit": "ns/iter",
            "extra": "iterations: 4451\ncpu: 186991.35025836897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 196673.53654709674,
            "unit": "ns/iter",
            "extra": "iterations: 4460\ncpu: 196668.5650224216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 188402.73650156314,
            "unit": "ns/iter",
            "extra": "iterations: 4482\ncpu: 188400.06693440428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 98327.46424133585,
            "unit": "ns/iter",
            "extra": "iterations: 8851\ncpu: 98324.8559484805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 189811.15004373895,
            "unit": "ns/iter",
            "extra": "iterations: 4572\ncpu: 189808.2895888016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5097.677544220437,
            "unit": "ns/iter",
            "extra": "iterations: 159656\ncpu: 5097.584180989131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24427.031145716857,
            "unit": "ns/iter",
            "extra": "iterations: 34162\ncpu: 24426.225045372033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18432.43253009395,
            "unit": "ns/iter",
            "extra": "iterations: 44279\ncpu: 18431.9541995076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18476.49896800795,
            "unit": "ns/iter",
            "extra": "iterations: 44574\ncpu: 18476.05779153768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 18576.850445076594,
            "unit": "ns/iter",
            "extra": "iterations: 46284\ncpu: 18576.555613170865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49701.67406042054,
            "unit": "ns/iter",
            "extra": "iterations: 16816\ncpu: 49701.171503330406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 270130.89990701707,
            "unit": "ns/iter",
            "extra": "iterations: 3227\ncpu: 270126.1233343677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 204967.05767861134,
            "unit": "ns/iter",
            "extra": "iterations: 4213\ncpu: 204963.61262758216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 206134.54806549623,
            "unit": "ns/iter",
            "extra": "iterations: 4213\ncpu: 206127.43887965762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 203492.10497885876,
            "unit": "ns/iter",
            "extra": "iterations: 4258\ncpu: 203483.67778299656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108644.34638403085,
            "unit": "ns/iter",
            "extra": "iterations: 8020\ncpu: 108642.70573566046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 196050.30324176946,
            "unit": "ns/iter",
            "extra": "iterations: 4442\ncpu: 196041.01755965737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 787032.5004101102,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 786997.2108285447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 432885.18860506295,
            "unit": "ns/iter",
            "extra": "iterations: 2036\ncpu: 432876.47347740835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1758.1296062099818,
            "unit": "ns/iter",
            "extra": "iterations: 458620\ncpu: 1758.1252453011173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9994.668026580237,
            "unit": "ns/iter",
            "extra": "iterations: 81868\ncpu: 9994.420286314536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7411.343037150414,
            "unit": "ns/iter",
            "extra": "iterations: 110472\ncpu: 7411.3214208125455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7180.448781596461,
            "unit": "ns/iter",
            "extra": "iterations: 109980\ncpu: 7179.925440989289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6512.875542356965,
            "unit": "ns/iter",
            "extra": "iterations: 125609\ncpu: 6512.56757079507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34215.85287488264,
            "unit": "ns/iter",
            "extra": "iterations: 24401\ncpu: 34214.83955575582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 259411.48417630678,
            "unit": "ns/iter",
            "extra": "iterations: 3381\ncpu: 259412.86601597062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 193705.53129837915,
            "unit": "ns/iter",
            "extra": "iterations: 4521\ncpu: 193698.40743198336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 193396.94567137843,
            "unit": "ns/iter",
            "extra": "iterations: 4528\ncpu: 193396.33392226143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 192560.4197039972,
            "unit": "ns/iter",
            "extra": "iterations: 4527\ncpu: 192555.0695825039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 98298.13061500096,
            "unit": "ns/iter",
            "extra": "iterations: 8927\ncpu: 98296.93065979553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 186346.66688008737,
            "unit": "ns/iter",
            "extra": "iterations: 4686\ncpu: 186342.12548015406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 206.2402345006756,
            "unit": "ns/iter",
            "extra": "iterations: 2642210\ncpu: 206.2406091870057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1386.7054995574003,
            "unit": "ns/iter",
            "extra": "iterations: 507259\ncpu: 1386.6498179430996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1123.4097452826743,
            "unit": "ns/iter",
            "extra": "iterations: 622455\ncpu: 1123.3997638383598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1186.004125585374,
            "unit": "ns/iter",
            "extra": "iterations: 620518\ncpu: 1185.9946045078366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 845.397355360248,
            "unit": "ns/iter",
            "extra": "iterations: 829527\ncpu: 845.3897220946399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9744.399042418223,
            "unit": "ns/iter",
            "extra": "iterations: 72892\ncpu: 9744.368380617834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12816.344901713777,
            "unit": "ns/iter",
            "extra": "iterations: 54891\ncpu: 12815.638264925065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2797.11411854851,
            "unit": "ns/iter",
            "extra": "iterations: 250564\ncpu: 2797.0418735332983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2807.985947774981,
            "unit": "ns/iter",
            "extra": "iterations: 249996\ncpu: 2807.8705259284156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2783.3342603827105,
            "unit": "ns/iter",
            "extra": "iterations: 250616\ncpu: 2783.3179046828636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5161.580525422014,
            "unit": "ns/iter",
            "extra": "iterations: 135510\ncpu: 5161.439008191296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5316.098531846784,
            "unit": "ns/iter",
            "extra": "iterations: 132820\ncpu: 5316.063092907651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1978.6981231774728,
            "unit": "ns/iter",
            "extra": "iterations: 353896\ncpu: 1978.6869588805464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10173.186451013156,
            "unit": "ns/iter",
            "extra": "iterations: 68876\ncpu: 10173.01527382534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8154.139471359938,
            "unit": "ns/iter",
            "extra": "iterations: 84935\ncpu: 8153.931830223154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8112.450851612481,
            "unit": "ns/iter",
            "extra": "iterations: 86483\ncpu: 8112.046298116342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8059.995237656909,
            "unit": "ns/iter",
            "extra": "iterations: 86722\ncpu: 8059.491247895506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17830.72983501379,
            "unit": "ns/iter",
            "extra": "iterations: 39276\ncpu: 17829.5854975049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 54884.48115735651,
            "unit": "ns/iter",
            "extra": "iterations: 12684\ncpu: 54883.215074109576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43511.09383805186,
            "unit": "ns/iter",
            "extra": "iterations: 16326\ncpu: 43508.51402670561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43239.268777614896,
            "unit": "ns/iter",
            "extra": "iterations: 16296\ncpu: 43236.929307805505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43462.29037410309,
            "unit": "ns/iter",
            "extra": "iterations: 16279\ncpu: 43458.154677805294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25193.132330122546,
            "unit": "ns/iter",
            "extra": "iterations: 27711\ncpu: 25191.609830031743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42704.51628504412,
            "unit": "ns/iter",
            "extra": "iterations: 16334\ncpu: 42701.13872903168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1912.9217946316753,
            "unit": "ns/iter",
            "extra": "iterations: 368031\ncpu: 1908.3897823824582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10017.74627571892,
            "unit": "ns/iter",
            "extra": "iterations: 69745\ncpu: 10016.918775539383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 7932.817161663298,
            "unit": "ns/iter",
            "extra": "iterations: 87509\ncpu: 7932.366956541599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 7963.801250766091,
            "unit": "ns/iter",
            "extra": "iterations: 88106\ncpu: 7963.596122852072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7922.414307089295,
            "unit": "ns/iter",
            "extra": "iterations: 88222\ncpu: 7922.045521525252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17560.562512573575,
            "unit": "ns/iter",
            "extra": "iterations: 39768\ncpu: 17559.44980889146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 53401.80140259005,
            "unit": "ns/iter",
            "extra": "iterations: 12976\ncpu: 53397.21023427864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41767.956610208894,
            "unit": "ns/iter",
            "extra": "iterations: 16709\ncpu: 41765.306122449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41520.60502106971,
            "unit": "ns/iter",
            "extra": "iterations: 16849\ncpu: 41518.65392604931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41544.38226244782,
            "unit": "ns/iter",
            "extra": "iterations: 16902\ncpu: 41544.07762395004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25019.97705701836,
            "unit": "ns/iter",
            "extra": "iterations: 28026\ncpu: 25019.660315421304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42178.986135797335,
            "unit": "ns/iter",
            "extra": "iterations: 16878\ncpu: 42178.000947979875 ns\nthreads: 1"
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
        "date": 1705959960250,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 598.8707592269618,
            "unit": "ns/iter",
            "extra": "iterations: 1168478\ncpu: 598.8451643933391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5314.009500000338,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5313.592000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10414.020388543799,
            "unit": "ns/iter",
            "extra": "iterations: 80094\ncpu: 10413.621494743675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15500.734744983001,
            "unit": "ns/iter",
            "extra": "iterations: 54310\ncpu: 15500.648131099239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20006.07472748212,
            "unit": "ns/iter",
            "extra": "iterations: 41832\ncpu: 20006.306177089322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25027.815585111468,
            "unit": "ns/iter",
            "extra": "iterations: 33609\ncpu: 25027.57297152549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 29749.370843176966,
            "unit": "ns/iter",
            "extra": "iterations: 28357\ncpu: 29749.113093768752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 34556.2739074745,
            "unit": "ns/iter",
            "extra": "iterations: 24187\ncpu: 34555.9970231943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 39565.441021046274,
            "unit": "ns/iter",
            "extra": "iterations: 21194\ncpu: 39565.41002170427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 572.0415534995288,
            "unit": "ns/iter",
            "extra": "iterations: 1224590\ncpu: 572.0346401652797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 440.3733575231856,
            "unit": "ns/iter",
            "extra": "iterations: 1583584\ncpu: 440.37714450259693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 429.24524953752115,
            "unit": "ns/iter",
            "extra": "iterations: 1649471\ncpu: 429.23422115332727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 431.7782704321288,
            "unit": "ns/iter",
            "extra": "iterations: 1622729\ncpu: 431.77548438463845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 886.7213910081704,
            "unit": "ns/iter",
            "extra": "iterations: 792950\ncpu: 886.7095024906988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1735.061561058134,
            "unit": "ns/iter",
            "extra": "iterations: 456165\ncpu: 1735.0568325057807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9522.0317749049,
            "unit": "ns/iter",
            "extra": "iterations: 86861\ncpu: 9521.941953235626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7503.350455023116,
            "unit": "ns/iter",
            "extra": "iterations: 109335\ncpu: 7503.283486532203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7489.05222178983,
            "unit": "ns/iter",
            "extra": "iterations: 107886\ncpu: 7489.04399087927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 6966.462289870398,
            "unit": "ns/iter",
            "extra": "iterations: 117011\ncpu: 6966.2638555349595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 35677.58699518529,
            "unit": "ns/iter",
            "extra": "iterations: 23053\ncpu: 35677.60378258808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 246785.4181046648,
            "unit": "ns/iter",
            "extra": "iterations: 3535\ncpu: 246782.51768033986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 175497.42024341648,
            "unit": "ns/iter",
            "extra": "iterations: 4683\ncpu: 175490.4121289771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 184392.21366570616,
            "unit": "ns/iter",
            "extra": "iterations: 4493\ncpu: 184382.59514800843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 186481.1607983722,
            "unit": "ns/iter",
            "extra": "iterations: 4459\ncpu: 186473.37968154257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 97055.81459237725,
            "unit": "ns/iter",
            "extra": "iterations: 8991\ncpu: 97051.40696251809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 187667.30525634967,
            "unit": "ns/iter",
            "extra": "iterations: 4642\ncpu: 187656.74278328315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5101.710191801301,
            "unit": "ns/iter",
            "extra": "iterations: 159540\ncpu: 5101.47862604989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 24229.7232610076,
            "unit": "ns/iter",
            "extra": "iterations: 34014\ncpu: 24228.785206091532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 18790.438217943247,
            "unit": "ns/iter",
            "extra": "iterations: 45094\ncpu: 18789.85230851109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 17995.72881319137,
            "unit": "ns/iter",
            "extra": "iterations: 45913\ncpu: 17995.029730141796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17894.54801867483,
            "unit": "ns/iter",
            "extra": "iterations: 46055\ncpu: 17893.777005754026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49577.02929395822,
            "unit": "ns/iter",
            "extra": "iterations: 16727\ncpu: 49574.89687331865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 269345.4922887308,
            "unit": "ns/iter",
            "extra": "iterations: 3242\ncpu: 269331.8322023453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 204998.45735154476,
            "unit": "ns/iter",
            "extra": "iterations: 4244\ncpu: 204987.77097078256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 204629.42471222725,
            "unit": "ns/iter",
            "extra": "iterations: 4257\ncpu: 204618.98050270134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 203343.03904606533,
            "unit": "ns/iter",
            "extra": "iterations: 4277\ncpu: 203335.67921440172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107787.28435900343,
            "unit": "ns/iter",
            "extra": "iterations: 8011\ncpu: 107782.33678691859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 197369.10670941166,
            "unit": "ns/iter",
            "extra": "iterations: 4367\ncpu: 197358.27799404613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 785216.4983579427,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 785185.9605911374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 437937.91728577635,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 437917.08766715956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1816.750727835867,
            "unit": "ns/iter",
            "extra": "iterations: 438629\ncpu: 1816.7683851272982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9520.141182234553,
            "unit": "ns/iter",
            "extra": "iterations: 85719\ncpu: 9519.975734667905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7245.196356238783,
            "unit": "ns/iter",
            "extra": "iterations: 112576\ncpu: 7245.226335986354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7339.235360487517,
            "unit": "ns/iter",
            "extra": "iterations: 115219\ncpu: 7339.123755630602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 6922.225626530055,
            "unit": "ns/iter",
            "extra": "iterations: 119228\ncpu: 6922.235548696601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34157.122931056314,
            "unit": "ns/iter",
            "extra": "iterations: 24469\ncpu: 34156.29980792003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 260089.47719297363,
            "unit": "ns/iter",
            "extra": "iterations: 3420\ncpu: 260089.21052631608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 194357.9258772045,
            "unit": "ns/iter",
            "extra": "iterations: 4560\ncpu: 194352.9166666673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 191994.86363635425,
            "unit": "ns/iter",
            "extra": "iterations: 4576\ncpu: 191992.43881118842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 191582.46672466613,
            "unit": "ns/iter",
            "extra": "iterations: 4598\ncpu: 191580.83949543277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95349.56815202995,
            "unit": "ns/iter",
            "extra": "iterations: 9156\ncpu: 95349.82525120178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 184292.20117598376,
            "unit": "ns/iter",
            "extra": "iterations: 4762\ncpu: 184293.2801343969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 206.38766400140452,
            "unit": "ns/iter",
            "extra": "iterations: 3386252\ncpu: 206.3882428124087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1426.7561552664095,
            "unit": "ns/iter",
            "extra": "iterations: 490718\ncpu: 1426.7414278669132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1180.9144406708103,
            "unit": "ns/iter",
            "extra": "iterations: 594453\ncpu: 1180.9155643928207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1129.1085758662027,
            "unit": "ns/iter",
            "extra": "iterations: 620672\ncpu: 1129.0887940812531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 856.0036907664202,
            "unit": "ns/iter",
            "extra": "iterations: 814465\ncpu: 855.9952852486028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9431.334690301917,
            "unit": "ns/iter",
            "extra": "iterations: 74185\ncpu: 9431.293388151247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12330.494468792445,
            "unit": "ns/iter",
            "extra": "iterations: 56588\ncpu: 12330.508234961522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2752.764272305629,
            "unit": "ns/iter",
            "extra": "iterations: 253568\ncpu: 2752.766516279664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2741.730882777663,
            "unit": "ns/iter",
            "extra": "iterations: 256078\ncpu: 2741.736892665509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2744.9751850903285,
            "unit": "ns/iter",
            "extra": "iterations: 254605\ncpu: 2744.990082677084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5126.254073415645,
            "unit": "ns/iter",
            "extra": "iterations: 137354\ncpu: 5126.20382369644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5252.316195179758,
            "unit": "ns/iter",
            "extra": "iterations: 133231\ncpu: 5252.313650726974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1960.474344783922,
            "unit": "ns/iter",
            "extra": "iterations: 356867\ncpu: 1960.4580978347683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10219.434411342785,
            "unit": "ns/iter",
            "extra": "iterations: 68274\ncpu: 10219.311890324338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8102.300768271848,
            "unit": "ns/iter",
            "extra": "iterations: 86688\ncpu: 8102.282899593981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8053.546907389282,
            "unit": "ns/iter",
            "extra": "iterations: 86351\ncpu: 8053.390232886706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8046.7175447877635,
            "unit": "ns/iter",
            "extra": "iterations: 86966\ncpu: 8046.717107835273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 17758.98055590904,
            "unit": "ns/iter",
            "extra": "iterations: 39395\ncpu: 17758.814570376864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 57164.71152161125,
            "unit": "ns/iter",
            "extra": "iterations: 12559\ncpu: 57164.97332590199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 43824.07067819219,
            "unit": "ns/iter",
            "extra": "iterations: 16087\ncpu: 43823.1802076209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43491.095388819274,
            "unit": "ns/iter",
            "extra": "iterations: 16113\ncpu: 43490.0018618503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43372.849598304834,
            "unit": "ns/iter",
            "extra": "iterations: 16057\ncpu: 43372.22395217008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25361.234802734685,
            "unit": "ns/iter",
            "extra": "iterations: 27653\ncpu: 25361.10367772081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 43115.209454055235,
            "unit": "ns/iter",
            "extra": "iterations: 16247\ncpu: 43115.215116636944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1937.9495992837353,
            "unit": "ns/iter",
            "extra": "iterations: 360729\ncpu: 1937.945382821987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10139.705217064187,
            "unit": "ns/iter",
            "extra": "iterations: 68966\ncpu: 10139.631122582177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8066.655557729625,
            "unit": "ns/iter",
            "extra": "iterations: 86897\ncpu: 8066.600688171125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8055.174216957708,
            "unit": "ns/iter",
            "extra": "iterations: 86266\ncpu: 8055.008925880484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 7991.931408644374,
            "unit": "ns/iter",
            "extra": "iterations: 87460\ncpu: 7991.901440658602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17594.05673562903,
            "unit": "ns/iter",
            "extra": "iterations: 39781\ncpu: 17593.9292627133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51664.946816828524,
            "unit": "ns/iter",
            "extra": "iterations: 12786\ncpu: 51664.210855622856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43091.88418982036,
            "unit": "ns/iter",
            "extra": "iterations: 16268\ncpu: 43091.71379395192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42766.237515301196,
            "unit": "ns/iter",
            "extra": "iterations: 16340\ncpu: 42766.15667074626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 42746.218635363046,
            "unit": "ns/iter",
            "extra": "iterations: 16356\ncpu: 42745.40229885068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25206.390500556434,
            "unit": "ns/iter",
            "extra": "iterations: 27749\ncpu: 25206.47230530806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42790.922409638486,
            "unit": "ns/iter",
            "extra": "iterations: 16600\ncpu: 42790.17469879574 ns\nthreads: 1"
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
        "date": 1705962022528,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 598.668406558562,
            "unit": "ns/iter",
            "extra": "iterations: 1173253\ncpu: 598.6559591153826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5477.058980000038,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5476.619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10774.38576877781,
            "unit": "ns/iter",
            "extra": "iterations: 75763\ncpu: 10774.108733814654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15852.58208501328,
            "unit": "ns/iter",
            "extra": "iterations: 52604\ncpu: 15851.817352292608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20779.58578830659,
            "unit": "ns/iter",
            "extra": "iterations: 40530\ncpu: 20779.12163829261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25436.27593940921,
            "unit": "ns/iter",
            "extra": "iterations: 32547\ncpu: 25434.559252772902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30357.197819816472,
            "unit": "ns/iter",
            "extra": "iterations: 28071\ncpu: 30355.765736881476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 35856.93047155837,
            "unit": "ns/iter",
            "extra": "iterations: 23645\ncpu: 35854.81920067668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40628.723987541955,
            "unit": "ns/iter",
            "extra": "iterations: 20865\ncpu: 40627.59166067577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 581.5434041961773,
            "unit": "ns/iter",
            "extra": "iterations: 1209284\ncpu: 581.5072389943141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 441.2957689870385,
            "unit": "ns/iter",
            "extra": "iterations: 1587374\ncpu: 441.29600207638504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 425.7700137944167,
            "unit": "ns/iter",
            "extra": "iterations: 1628202\ncpu: 425.7644935947749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 434.71051793265354,
            "unit": "ns/iter",
            "extra": "iterations: 1610383\ncpu: 434.6903190110679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 887.5276437942268,
            "unit": "ns/iter",
            "extra": "iterations: 792800\ncpu: 887.527623612512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1760.0192979117628,
            "unit": "ns/iter",
            "extra": "iterations: 462278\ncpu: 1759.9755990983758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9641.771644392424,
            "unit": "ns/iter",
            "extra": "iterations: 84329\ncpu: 9641.41398569888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7492.695632798981,
            "unit": "ns/iter",
            "extra": "iterations: 107712\ncpu: 7492.224636066542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7405.815284822177,
            "unit": "ns/iter",
            "extra": "iterations: 109612\ncpu: 7405.336094588203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7835.577145361354,
            "unit": "ns/iter",
            "extra": "iterations: 109527\ncpu: 7817.686050015072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 36253.34610881912,
            "unit": "ns/iter",
            "extra": "iterations: 23065\ncpu: 36251.59765879042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 244192.82838746128,
            "unit": "ns/iter",
            "extra": "iterations: 3572\ncpu: 244177.26763717787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 186242.1480369059,
            "unit": "ns/iter",
            "extra": "iterations: 4661\ncpu: 186234.906672388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 175584.24034975603,
            "unit": "ns/iter",
            "extra": "iterations: 4689\ncpu: 175576.56216677345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 179015.55876686668,
            "unit": "ns/iter",
            "extra": "iterations: 4671\ncpu: 179006.48683365431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 95384.17303469646,
            "unit": "ns/iter",
            "extra": "iterations: 9108\ncpu: 95376.86649099711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 178004.25477448525,
            "unit": "ns/iter",
            "extra": "iterations: 4922\ncpu: 177995.00203169443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5159.3114132514065,
            "unit": "ns/iter",
            "extra": "iterations: 156660\ncpu: 5159.050810672804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 23781.623756919587,
            "unit": "ns/iter",
            "extra": "iterations: 34491\ncpu: 23780.39198631529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 17976.088011104115,
            "unit": "ns/iter",
            "extra": "iterations: 45392\ncpu: 17975.687345787737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 18021.822838137872,
            "unit": "ns/iter",
            "extra": "iterations: 45100\ncpu: 18021.09756097563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 17724.581004371492,
            "unit": "ns/iter",
            "extra": "iterations: 45979\ncpu: 17724.378520628925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 49192.58798006621,
            "unit": "ns/iter",
            "extra": "iterations: 17055\ncpu: 49191.49809440054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 270584.3058823475,
            "unit": "ns/iter",
            "extra": "iterations: 3230\ncpu: 270580.06191950664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 207600.27776455786,
            "unit": "ns/iter",
            "extra": "iterations: 4205\ncpu: 207592.34244946597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 206141.16524418115,
            "unit": "ns/iter",
            "extra": "iterations: 4218\ncpu: 206135.6092935047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 205833.1827830381,
            "unit": "ns/iter",
            "extra": "iterations: 4240\ncpu: 205823.53773584866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108801.64291974643,
            "unit": "ns/iter",
            "extra": "iterations: 7987\ncpu: 108800.17528483838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 196138.42355605727,
            "unit": "ns/iter",
            "extra": "iterations: 4415\ncpu: 196135.062287656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 784950.9393442763,
            "unit": "ns/iter",
            "extra": "iterations: 1220\ncpu: 784943.6885245865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 444186.4101265678,
            "unit": "ns/iter",
            "extra": "iterations: 1975\ncpu: 444157.4177215197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1772.5981136421378,
            "unit": "ns/iter",
            "extra": "iterations: 451558\ncpu: 1772.5970971613908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9667.589141435434,
            "unit": "ns/iter",
            "extra": "iterations: 84781\ncpu: 9667.268609712108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7564.281670909517,
            "unit": "ns/iter",
            "extra": "iterations: 107654\ncpu: 7563.8471399111895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7331.139234389695,
            "unit": "ns/iter",
            "extra": "iterations: 111754\ncpu: 7330.640513986078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7315.154162902542,
            "unit": "ns/iter",
            "extra": "iterations: 112926\ncpu: 7314.68395232274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 34084.216953438416,
            "unit": "ns/iter",
            "extra": "iterations: 24526\ncpu: 34082.30857049655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 259952.15610326614,
            "unit": "ns/iter",
            "extra": "iterations: 3408\ncpu: 259937.49999999927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 194134.79399426148,
            "unit": "ns/iter",
            "extra": "iterations: 4529\ncpu: 194123.6696842582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 194046.84893195672,
            "unit": "ns/iter",
            "extra": "iterations: 4541\ncpu: 194036.97423475087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 193492.07959542563,
            "unit": "ns/iter",
            "extra": "iterations: 4548\ncpu: 193484.98240984976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 97331.7435611573,
            "unit": "ns/iter",
            "extra": "iterations: 8969\ncpu: 97327.6619467057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 186569.25068812075,
            "unit": "ns/iter",
            "extra": "iterations: 4723\ncpu: 186557.6963794187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 206.5883818489289,
            "unit": "ns/iter",
            "extra": "iterations: 3383998\ncpu: 206.58856772373866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1390.7223876817966,
            "unit": "ns/iter",
            "extra": "iterations: 505327\ncpu: 1390.655159926155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1165.508646946503,
            "unit": "ns/iter",
            "extra": "iterations: 601484\ncpu: 1165.4441348398236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1164.8566032399592,
            "unit": "ns/iter",
            "extra": "iterations: 600955\ncpu: 1164.7604229933993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 884.213806618222,
            "unit": "ns/iter",
            "extra": "iterations: 799124\ncpu: 884.1567766704585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9663.130836078128,
            "unit": "ns/iter",
            "extra": "iterations: 72266\ncpu: 9663.130656186811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 12693.132779940031,
            "unit": "ns/iter",
            "extra": "iterations: 57825\ncpu: 12692.733246865544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2807.5826787522965,
            "unit": "ns/iter",
            "extra": "iterations: 248123\ncpu: 2807.5285241593865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2867.5368647701775,
            "unit": "ns/iter",
            "extra": "iterations: 249398\ncpu: 2867.379449714934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2809.6011452846324,
            "unit": "ns/iter",
            "extra": "iterations: 247624\ncpu: 2809.560866474992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 5213.070625350939,
            "unit": "ns/iter",
            "extra": "iterations: 135348\ncpu: 5212.8084641073465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 5318.131835753992,
            "unit": "ns/iter",
            "extra": "iterations: 132703\ncpu: 5317.750917462282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1971.6379198048128,
            "unit": "ns/iter",
            "extra": "iterations: 354659\ncpu: 1971.4917709687468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10190.610790290979,
            "unit": "ns/iter",
            "extra": "iterations: 68228\ncpu: 10189.845811103936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8153.960693182634,
            "unit": "ns/iter",
            "extra": "iterations: 85634\ncpu: 8153.928346217539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8141.889640479039,
            "unit": "ns/iter",
            "extra": "iterations: 85892\ncpu: 8141.300703208686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8132.105460738894,
            "unit": "ns/iter",
            "extra": "iterations: 86307\ncpu: 8131.553639913272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18081.775012825103,
            "unit": "ns/iter",
            "extra": "iterations: 38980\ncpu: 18080.084658799537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 55193.71529450766,
            "unit": "ns/iter",
            "extra": "iterations: 12037\ncpu: 55191.92489823043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42939.339420306314,
            "unit": "ns/iter",
            "extra": "iterations: 16319\ncpu: 42937.833200564106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 43338.52623457134,
            "unit": "ns/iter",
            "extra": "iterations: 16200\ncpu: 43337.70370370379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 43332.96537741918,
            "unit": "ns/iter",
            "extra": "iterations: 16030\ncpu: 43331.441048034976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25215.579046240062,
            "unit": "ns/iter",
            "extra": "iterations: 27680\ncpu: 25215.556358381535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 42579.47068383276,
            "unit": "ns/iter",
            "extra": "iterations: 15998\ncpu: 42579.49743718003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1926.0254577776466,
            "unit": "ns/iter",
            "extra": "iterations: 361147\ncpu: 1925.9927397984704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10116.68137205229,
            "unit": "ns/iter",
            "extra": "iterations: 69181\ncpu: 10116.271808733607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8122.510039047337,
            "unit": "ns/iter",
            "extra": "iterations: 86562\ncpu: 8122.427855178976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8064.257088869409,
            "unit": "ns/iter",
            "extra": "iterations: 85733\ncpu: 8064.117667642572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8264.527036172442,
            "unit": "ns/iter",
            "extra": "iterations: 85700\ncpu: 8264.529754959174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 17621.199591692803,
            "unit": "ns/iter",
            "extra": "iterations: 39676\ncpu: 17621.189131968982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 54854.44051955808,
            "unit": "ns/iter",
            "extra": "iterations: 12626\ncpu: 54851.980041185336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 43479.160560605225,
            "unit": "ns/iter",
            "extra": "iterations: 16268\ncpu: 43479.13695598682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 44136.60000000206,
            "unit": "ns/iter",
            "extra": "iterations: 16035\ncpu: 44136.63236669794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 43136.160546484,
            "unit": "ns/iter",
            "extra": "iterations: 16176\ncpu: 43134.94683481717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25405.006196998143,
            "unit": "ns/iter",
            "extra": "iterations: 27594\ncpu: 25404.678553309088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 43066.38710260118,
            "unit": "ns/iter",
            "extra": "iterations: 16608\ncpu: 43065.53468208123 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}