window.BENCHMARK_DATA = {
  "lastUpdate": 1702492929666,
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
      }
    ]
  }
}