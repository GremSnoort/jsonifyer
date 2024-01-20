window.BENCHMARK_DATA = {
  "lastUpdate": 1705774884486,
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
      }
    ]
  }
}