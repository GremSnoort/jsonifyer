window.BENCHMARK_DATA = {
  "lastUpdate": 1702490311263,
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
      }
    ]
  }
}