window.BENCHMARK_DATA = {
  "lastUpdate": 1705957102693,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-11 20.04 Release c++-17": [
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
        "date": 1702490349201,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 534.6872919148904,
            "unit": "ns/iter",
            "extra": "iterations: 1302352\ncpu: 534.659139771736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5640.893830612275,
            "unit": "ns/iter",
            "extra": "iterations: 141651\ncpu: 5640.3809362447155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9586.726237306479,
            "unit": "ns/iter",
            "extra": "iterations: 87448\ncpu: 9586.004253956637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14283.347666798325,
            "unit": "ns/iter",
            "extra": "iterations: 58139\ncpu: 14282.120435508006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 18943.018232533883,
            "unit": "ns/iter",
            "extra": "iterations: 44097\ncpu: 18941.714855885893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 23143.298590382044,
            "unit": "ns/iter",
            "extra": "iterations: 36180\ncpu: 23141.62244333886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 27906.696366155662,
            "unit": "ns/iter",
            "extra": "iterations: 30326\ncpu: 27904.580228187056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 32515.44088324715,
            "unit": "ns/iter",
            "extra": "iterations: 25678\ncpu: 32512.053119401786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 36865.22007772697,
            "unit": "ns/iter",
            "extra": "iterations: 22901\ncpu: 36864.26793589796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 498.5478749813254,
            "unit": "ns/iter",
            "extra": "iterations: 1405870\ncpu: 498.50619189541015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 393.7707220811478,
            "unit": "ns/iter",
            "extra": "iterations: 1777681\ncpu: 393.73082122157984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 397.77866098917866,
            "unit": "ns/iter",
            "extra": "iterations: 1758985\ncpu: 397.7483605602093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 407.2480910885533,
            "unit": "ns/iter",
            "extra": "iterations: 1780334\ncpu: 407.20909672005325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 829.8499662564763,
            "unit": "ns/iter",
            "extra": "iterations: 828307\ncpu: 829.786540497665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1696.568465633348,
            "unit": "ns/iter",
            "extra": "iterations: 468695\ncpu: 1696.4627316271778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9916.523431728103,
            "unit": "ns/iter",
            "extra": "iterations: 82559\ncpu: 9915.74146973681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7516.462161886006,
            "unit": "ns/iter",
            "extra": "iterations: 107841\ncpu: 7515.947552415133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7261.3242807785855,
            "unit": "ns/iter",
            "extra": "iterations: 111718\ncpu: 7260.658980647709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7741.86775006792,
            "unit": "ns/iter",
            "extra": "iterations: 103932\ncpu: 7741.683985682939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27867.110268219796,
            "unit": "ns/iter",
            "extra": "iterations: 29528\ncpu: 27865.287185044657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 235295.1068619578,
            "unit": "ns/iter",
            "extra": "iterations: 3687\ncpu: 235292.0802820721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 185273.379537265,
            "unit": "ns/iter",
            "extra": "iterations: 4711\ncpu: 185267.31054977688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 180481.46109815087,
            "unit": "ns/iter",
            "extra": "iterations: 4717\ncpu: 180480.45367818532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 185495.66958005138,
            "unit": "ns/iter",
            "extra": "iterations: 4691\ncpu: 185492.38968237018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 96705.55261431054,
            "unit": "ns/iter",
            "extra": "iterations: 9142\ncpu: 96703.34718879896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 177532.3880811105,
            "unit": "ns/iter",
            "extra": "iterations: 4883\ncpu: 177528.36371083345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5566.183778003278,
            "unit": "ns/iter",
            "extra": "iterations: 146813\ncpu: 5566.146730875331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27474.85108685034,
            "unit": "ns/iter",
            "extra": "iterations: 30501\ncpu: 27474.305760466854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21020.186670727522,
            "unit": "ns/iter",
            "extra": "iterations: 39417\ncpu: 21019.463683182392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20904.76215985153,
            "unit": "ns/iter",
            "extra": "iterations: 39762\ncpu: 20904.381067350714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20748.693749218124,
            "unit": "ns/iter",
            "extra": "iterations: 39915\ncpu: 20748.1924088689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45621.77733444155,
            "unit": "ns/iter",
            "extra": "iterations: 18045\ncpu: 45621.2468827931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 254427.41800642823,
            "unit": "ns/iter",
            "extra": "iterations: 3421\ncpu: 254418.59105524616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 209748.18999766506,
            "unit": "ns/iter",
            "extra": "iterations: 4279\ncpu: 209744.21593830286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 200566.63223141344,
            "unit": "ns/iter",
            "extra": "iterations: 4356\ncpu: 200562.55739210206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 197317.78226355516,
            "unit": "ns/iter",
            "extra": "iterations: 4409\ncpu: 197312.2249943294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107653.52578848766,
            "unit": "ns/iter",
            "extra": "iterations: 8085\ncpu: 107651.7625231912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 188218.86871085057,
            "unit": "ns/iter",
            "extra": "iterations: 4631\ncpu: 188215.95767652825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 792047.5920726483,
            "unit": "ns/iter",
            "extra": "iterations: 1211\ncpu: 792012.4690338592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 437614.130113389,
            "unit": "ns/iter",
            "extra": "iterations: 2029\ncpu: 437603.8442582564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1872.6643298671593,
            "unit": "ns/iter",
            "extra": "iterations: 430646\ncpu: 1872.6339034845337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10028.04355688185,
            "unit": "ns/iter",
            "extra": "iterations: 82398\ncpu: 10027.972766329334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 8107.264697321153,
            "unit": "ns/iter",
            "extra": "iterations: 106499\ncpu: 8107.187860918881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7784.02682419667,
            "unit": "ns/iter",
            "extra": "iterations: 105800\ncpu: 7783.931947069956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7860.865606715405,
            "unit": "ns/iter",
            "extra": "iterations: 104596\ncpu: 7860.748977016336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27611.51323815475,
            "unit": "ns/iter",
            "extra": "iterations: 30329\ncpu: 27611.243364436566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 242289.08248833602,
            "unit": "ns/iter",
            "extra": "iterations: 3649\ncpu: 242286.48944916436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 184783.43504593716,
            "unit": "ns/iter",
            "extra": "iterations: 4788\ncpu: 184779.51127819592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 185380.9017219826,
            "unit": "ns/iter",
            "extra": "iterations: 4762\ncpu: 185377.7824443518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 182985.8769198846,
            "unit": "ns/iter",
            "extra": "iterations: 4818\ncpu: 182983.14653383128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 94187.0099148667,
            "unit": "ns/iter",
            "extra": "iterations: 9279\ncpu: 94186.3239573231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 175250.76645392374,
            "unit": "ns/iter",
            "extra": "iterations: 5014\ncpu: 175248.16513761456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 181.848946289729,
            "unit": "ns/iter",
            "extra": "iterations: 3842375\ncpu: 181.84786752984786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1379.1832137031063,
            "unit": "ns/iter",
            "extra": "iterations: 509487\ncpu: 1379.1865150631795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1167.0916925089741,
            "unit": "ns/iter",
            "extra": "iterations: 599471\ncpu: 1167.0549534506279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1101.4757653926704,
            "unit": "ns/iter",
            "extra": "iterations: 633825\ncpu: 1101.4653887113975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 821.8841721971583,
            "unit": "ns/iter",
            "extra": "iterations: 851350\ncpu: 821.8770188524127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9281.32004049119,
            "unit": "ns/iter",
            "extra": "iterations: 75078\ncpu: 9281.274141559494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11435.210009828377,
            "unit": "ns/iter",
            "extra": "iterations: 61040\ncpu: 11435.152359108764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2580.609825692484,
            "unit": "ns/iter",
            "extra": "iterations: 270556\ncpu: 2580.5859045816887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2609.4152637361067,
            "unit": "ns/iter",
            "extra": "iterations: 267654\ncpu: 2609.394965141553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2582.543811181857,
            "unit": "ns/iter",
            "extra": "iterations: 271118\ncpu: 2582.5264276071675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4928.562823422884,
            "unit": "ns/iter",
            "extra": "iterations: 141842\ncpu: 4928.5084812678915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4921.234832166855,
            "unit": "ns/iter",
            "extra": "iterations: 141599\ncpu: 4921.178821884303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1944.72167732886,
            "unit": "ns/iter",
            "extra": "iterations: 360621\ncpu: 1944.6981734286296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10149.632991901302,
            "unit": "ns/iter",
            "extra": "iterations: 69023\ncpu: 10149.56463787439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8112.773944889888,
            "unit": "ns/iter",
            "extra": "iterations: 86010\ncpu: 8112.798511800968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8134.551857245395,
            "unit": "ns/iter",
            "extra": "iterations: 86526\ncpu: 8134.371171670866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7977.985633793773,
            "unit": "ns/iter",
            "extra": "iterations: 87497\ncpu: 7977.703235539613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18613.34388432151,
            "unit": "ns/iter",
            "extra": "iterations: 37690\ncpu: 18612.87609445479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 50893.15953194079,
            "unit": "ns/iter",
            "extra": "iterations: 13759\ncpu: 50891.99069699833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41261.85041322158,
            "unit": "ns/iter",
            "extra": "iterations: 16940\ncpu: 41261.17473435656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41404.51615357515,
            "unit": "ns/iter",
            "extra": "iterations: 17086\ncpu: 41403.90378087345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41452.76178087929,
            "unit": "ns/iter",
            "extra": "iterations: 16913\ncpu: 41451.4456335365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24853.175007108166,
            "unit": "ns/iter",
            "extra": "iterations: 28136\ncpu: 24852.786465737856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40899.37650115255,
            "unit": "ns/iter",
            "extra": "iterations: 17320\ncpu: 40898.54503464222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2326.7038034567636,
            "unit": "ns/iter",
            "extra": "iterations: 301857\ncpu: 2326.625190073433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9817.981065171292,
            "unit": "ns/iter",
            "extra": "iterations: 71350\ncpu: 9817.781359495604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8654.998943942093,
            "unit": "ns/iter",
            "extra": "iterations: 81435\ncpu: 8654.919874746807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9316.949987884167,
            "unit": "ns/iter",
            "extra": "iterations: 74282\ncpu: 9316.83853423438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8859.533491367569,
            "unit": "ns/iter",
            "extra": "iterations: 78886\ncpu: 8859.356539816865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19175.646533824398,
            "unit": "ns/iter",
            "extra": "iterations: 37087\ncpu: 19175.357942136096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52725.052327349185,
            "unit": "ns/iter",
            "extra": "iterations: 13148\ncpu: 52723.950410708574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42293.22887753158,
            "unit": "ns/iter",
            "extra": "iterations: 16428\ncpu: 42292.71365960553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41097.91881918823,
            "unit": "ns/iter",
            "extra": "iterations: 17073\ncpu: 41097.57511860823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40633.81982138918,
            "unit": "ns/iter",
            "extra": "iterations: 17244\ncpu: 40633.94803989719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24274.083674600297,
            "unit": "ns/iter",
            "extra": "iterations: 28814\ncpu: 24273.92933990404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41730.98711233894,
            "unit": "ns/iter",
            "extra": "iterations: 16993\ncpu: 41730.55375742987 ns\nthreads: 1"
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
        "date": 1702492931856,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 524.0091845690138,
            "unit": "ns/iter",
            "extra": "iterations: 1330928\ncpu: 523.9967902095381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5733.386248793426,
            "unit": "ns/iter",
            "extra": "iterations: 140904\ncpu: 5733.244620450803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9691.229765683407,
            "unit": "ns/iter",
            "extra": "iterations: 85696\ncpu: 9690.994912247947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14486.881706528678,
            "unit": "ns/iter",
            "extra": "iterations: 57239\ncpu: 14486.531910061323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 18970.059648721777,
            "unit": "ns/iter",
            "extra": "iterations: 43555\ncpu: 18969.445528641943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 23946.852130395204,
            "unit": "ns/iter",
            "extra": "iterations: 35369\ncpu: 23945.336311459192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28242.86759402444,
            "unit": "ns/iter",
            "extra": "iterations: 29115\ncpu: 28241.432251416805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 32704.454195054208,
            "unit": "ns/iter",
            "extra": "iterations: 25685\ncpu: 32703.219778080544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 36958.90162111265,
            "unit": "ns/iter",
            "extra": "iterations: 23379\ncpu: 36957.256512254615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 496.9702699482468,
            "unit": "ns/iter",
            "extra": "iterations: 1401713\ncpu: 496.95700903109207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 398.40024291209033,
            "unit": "ns/iter",
            "extra": "iterations: 1734784\ncpu: 398.38504390171937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 393.4169187574514,
            "unit": "ns/iter",
            "extra": "iterations: 1775485\ncpu: 393.4047879875079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 382.6402623185505,
            "unit": "ns/iter",
            "extra": "iterations: 1829989\ncpu: 382.62306494738493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 841.9467723533626,
            "unit": "ns/iter",
            "extra": "iterations: 831767\ncpu: 841.9261644186429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1721.3800242949508,
            "unit": "ns/iter",
            "extra": "iterations: 464294\ncpu: 1721.2318057093155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10076.943840354681,
            "unit": "ns/iter",
            "extra": "iterations: 80378\ncpu: 10076.782204085714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7345.220122745442,
            "unit": "ns/iter",
            "extra": "iterations: 107540\ncpu: 7344.5945694625225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7172.1684130489975,
            "unit": "ns/iter",
            "extra": "iterations: 114427\ncpu: 7171.807353159685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7296.452281165726,
            "unit": "ns/iter",
            "extra": "iterations: 112859\ncpu: 7295.925003765772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27686.26570161842,
            "unit": "ns/iter",
            "extra": "iterations: 29774\ncpu: 27684.85927319138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 242528.15715061873,
            "unit": "ns/iter",
            "extra": "iterations: 3678\ncpu: 242515.30723219182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 181327.23054019836,
            "unit": "ns/iter",
            "extra": "iterations: 4702\ncpu: 181323.90472139468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 182328.11732200094,
            "unit": "ns/iter",
            "extra": "iterations: 4705\ncpu: 182316.81190223186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 184919.83787847214,
            "unit": "ns/iter",
            "extra": "iterations: 4657\ncpu: 184913.67833369088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 96272.58569234012,
            "unit": "ns/iter",
            "extra": "iterations: 9114\ncpu: 96266.10708799666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 178648.63121291646,
            "unit": "ns/iter",
            "extra": "iterations: 4889\ncpu: 178639.98772755117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5475.939724579063,
            "unit": "ns/iter",
            "extra": "iterations: 147556\ncpu: 5475.712271950991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26921.395710871817,
            "unit": "ns/iter",
            "extra": "iterations: 30962\ncpu: 26920.195723790504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20943.636865705415,
            "unit": "ns/iter",
            "extra": "iterations: 39473\ncpu: 20942.920477288233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20918.33032665589,
            "unit": "ns/iter",
            "extra": "iterations: 39246\ncpu: 20917.403047444303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19989.586055261447,
            "unit": "ns/iter",
            "extra": "iterations: 40933\ncpu: 19988.349253658387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45412.60955955526,
            "unit": "ns/iter",
            "extra": "iterations: 18118\ncpu: 45409.50987967773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 257687.2803545154,
            "unit": "ns/iter",
            "extra": "iterations: 3385\ncpu: 257669.6011816839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 199481.10031991522,
            "unit": "ns/iter",
            "extra": "iterations: 4376\ncpu: 199471.16087751344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 198704.1735138732,
            "unit": "ns/iter",
            "extra": "iterations: 4357\ncpu: 198689.92425981082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 198239.2458456682,
            "unit": "ns/iter",
            "extra": "iterations: 4393\ncpu: 198234.62326428553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108211.21531397215,
            "unit": "ns/iter",
            "extra": "iterations: 8058\ncpu: 108205.86994291404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 187466.96006867965,
            "unit": "ns/iter",
            "extra": "iterations: 4658\ncpu: 187459.38170888828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 779706.4913722611,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 779673.6236647499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 445152.4556063045,
            "unit": "ns/iter",
            "extra": "iterations: 1971\ncpu: 445130.5428716379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1862.078149457963,
            "unit": "ns/iter",
            "extra": "iterations: 431225\ncpu: 1862.005217693766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9627.749006146021,
            "unit": "ns/iter",
            "extra": "iterations: 79237\ncpu: 9627.5818115275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7284.629291615209,
            "unit": "ns/iter",
            "extra": "iterations: 114613\ncpu: 7284.258330206837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7129.182958506829,
            "unit": "ns/iter",
            "extra": "iterations: 114720\ncpu: 7128.907775453296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7225.553485241159,
            "unit": "ns/iter",
            "extra": "iterations: 114368\ncpu: 7225.214220761067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27505.14524864854,
            "unit": "ns/iter",
            "extra": "iterations: 30465\ncpu: 27504.08337436408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 242285.79752747674,
            "unit": "ns/iter",
            "extra": "iterations: 3640\ncpu: 242275.5219780222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 181314.11905744646,
            "unit": "ns/iter",
            "extra": "iterations: 4838\ncpu: 181301.30219098876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 181715.58030552426,
            "unit": "ns/iter",
            "extra": "iterations: 4844\ncpu: 181708.23699421904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 182284.02059068994,
            "unit": "ns/iter",
            "extra": "iterations: 4808\ncpu: 182279.3469217971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 93245.24434102602,
            "unit": "ns/iter",
            "extra": "iterations: 9454\ncpu: 93242.44764121049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 174145.59936908018,
            "unit": "ns/iter",
            "extra": "iterations: 5072\ncpu: 174139.175867508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 182.2163842495628,
            "unit": "ns/iter",
            "extra": "iterations: 3846084\ncpu: 182.20985293093094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1404.6772461310059,
            "unit": "ns/iter",
            "extra": "iterations: 498702\ncpu: 1404.6173867359648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 999.1324364735385,
            "unit": "ns/iter",
            "extra": "iterations: 701559\ncpu: 999.0870333072489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1142.769336319935,
            "unit": "ns/iter",
            "extra": "iterations: 610716\ncpu: 1142.7260788975505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 819.9379835611413,
            "unit": "ns/iter",
            "extra": "iterations: 853951\ncpu: 819.8873237457466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9198.431024017156,
            "unit": "ns/iter",
            "extra": "iterations: 75780\ncpu: 9198.250197941386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11466.57266519712,
            "unit": "ns/iter",
            "extra": "iterations: 63999\ncpu: 11466.252597696785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2582.273808782767,
            "unit": "ns/iter",
            "extra": "iterations: 273187\ncpu: 2582.104931786665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2563.6373141170807,
            "unit": "ns/iter",
            "extra": "iterations: 272685\ncpu: 2563.5465830536978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2601.5497063230255,
            "unit": "ns/iter",
            "extra": "iterations: 269684\ncpu: 2601.324883938216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4882.989632093329,
            "unit": "ns/iter",
            "extra": "iterations: 143134\ncpu: 4882.815403747546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4928.023784611832,
            "unit": "ns/iter",
            "extra": "iterations: 142403\ncpu: 4927.646187229172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1920.6296772745814,
            "unit": "ns/iter",
            "extra": "iterations: 365357\ncpu: 1920.531699132628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10054.636439459802,
            "unit": "ns/iter",
            "extra": "iterations: 69540\ncpu: 10054.43485763596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8098.505323184962,
            "unit": "ns/iter",
            "extra": "iterations: 86978\ncpu: 8097.985697532801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8045.388732942954,
            "unit": "ns/iter",
            "extra": "iterations: 87281\ncpu: 8045.104891098838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8092.209143384713,
            "unit": "ns/iter",
            "extra": "iterations: 86620\ncpu: 8091.708612329786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18582.36662668388,
            "unit": "ns/iter",
            "extra": "iterations: 37515\ncpu: 18581.124883379976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51271.05159488903,
            "unit": "ns/iter",
            "extra": "iterations: 13606\ncpu: 51269.484051153966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41987.95477989225,
            "unit": "ns/iter",
            "extra": "iterations: 16674\ncpu: 41985.492383351375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41478.54130021222,
            "unit": "ns/iter",
            "extra": "iterations: 16828\ncpu: 41476.50938911308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41032.30243125299,
            "unit": "ns/iter",
            "extra": "iterations: 16946\ncpu: 41029.27534521421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24668.812040439352,
            "unit": "ns/iter",
            "extra": "iterations: 28288\ncpu: 24667.413744344052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40123.41125937789,
            "unit": "ns/iter",
            "extra": "iterations: 17461\ncpu: 40120.95527174857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1887.6764808557466,
            "unit": "ns/iter",
            "extra": "iterations: 369533\ncpu: 1887.5483380374585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9985.439914655117,
            "unit": "ns/iter",
            "extra": "iterations: 69834\ncpu: 9984.935704671083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8735.712092802383,
            "unit": "ns/iter",
            "extra": "iterations: 79998\ncpu: 8735.263381584426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 8944.229974160087,
            "unit": "ns/iter",
            "extra": "iterations: 77787\ncpu: 8943.989355547863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9032.904606241762,
            "unit": "ns/iter",
            "extra": "iterations: 77395\ncpu: 9032.27857096723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 20101.523737169475,
            "unit": "ns/iter",
            "extra": "iterations: 34882\ncpu: 20100.395619516945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51073.274502605316,
            "unit": "ns/iter",
            "extra": "iterations: 13621\ncpu: 51069.50297334995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42754.070641527505,
            "unit": "ns/iter",
            "extra": "iterations: 16336\ncpu: 42751.29774730682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40461.540540539434,
            "unit": "ns/iter",
            "extra": "iterations: 17242\ncpu: 40458.64748869018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40434.00606060905,
            "unit": "ns/iter",
            "extra": "iterations: 17325\ncpu: 40432.536796536544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24222.729315377026,
            "unit": "ns/iter",
            "extra": "iterations: 28439\ncpu: 24221.667428531207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41423.366304665564,
            "unit": "ns/iter",
            "extra": "iterations: 17035\ncpu: 41422.84120927428 ns\nthreads: 1"
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
        "date": 1702503985485,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 542.2699929406435,
            "unit": "ns/iter",
            "extra": "iterations: 1293319\ncpu: 542.2677622458187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5717.650035013455,
            "unit": "ns/iter",
            "extra": "iterations: 141377\ncpu: 5717.587019104946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9741.99084851826,
            "unit": "ns/iter",
            "extra": "iterations: 87199\ncpu: 9741.736717164185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14458.845155815427,
            "unit": "ns/iter",
            "extra": "iterations: 57729\ncpu: 14458.346758128506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 18719.255869176282,
            "unit": "ns/iter",
            "extra": "iterations: 44640\ncpu: 18718.064516129023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 23336.72640325621,
            "unit": "ns/iter",
            "extra": "iterations: 35863\ncpu: 23336.2044446923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 27975.493840349412,
            "unit": "ns/iter",
            "extra": "iterations: 29953\ncpu: 27975.01752745969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33753.074154852315,
            "unit": "ns/iter",
            "extra": "iterations: 25676\ncpu: 33752.19270914477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 36713.549911067246,
            "unit": "ns/iter",
            "extra": "iterations: 23051\ncpu: 36713.296603184186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 516.1404010684305,
            "unit": "ns/iter",
            "extra": "iterations: 1401307\ncpu: 516.1360786751219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 385.6233551483786,
            "unit": "ns/iter",
            "extra": "iterations: 1791271\ncpu: 385.6056397943137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 392.3710529620844,
            "unit": "ns/iter",
            "extra": "iterations: 1783616\ncpu: 392.3577720765002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 378.87193615684174,
            "unit": "ns/iter",
            "extra": "iterations: 1843518\ncpu: 378.86356412033916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 827.9378677744988,
            "unit": "ns/iter",
            "extra": "iterations: 845117\ncpu: 827.9244175658517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1699.4448002402337,
            "unit": "ns/iter",
            "extra": "iterations: 465935\ncpu: 1699.4123643855921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9900.043902438256,
            "unit": "ns/iter",
            "extra": "iterations: 82615\ncpu: 9899.859589662914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7645.182942550249,
            "unit": "ns/iter",
            "extra": "iterations: 107050\ncpu: 7645.045305931809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7638.529870988959,
            "unit": "ns/iter",
            "extra": "iterations: 105805\ncpu: 7638.373422806131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7878.906667827942,
            "unit": "ns/iter",
            "extra": "iterations: 103287\ncpu: 7878.684636014224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 28036.00952186551,
            "unit": "ns/iter",
            "extra": "iterations: 29406\ncpu: 28035.067673264028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 237376.08190942166,
            "unit": "ns/iter",
            "extra": "iterations: 3687\ncpu: 237366.04285326786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 180943.00819326856,
            "unit": "ns/iter",
            "extra": "iterations: 4760\ncpu: 180938.25630252136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 177729.8052598525,
            "unit": "ns/iter",
            "extra": "iterations: 4791\ncpu: 177725.63139219378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 185617.60919296625,
            "unit": "ns/iter",
            "extra": "iterations: 4721\ncpu: 185614.72145731814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 95028.82849374185,
            "unit": "ns/iter",
            "extra": "iterations: 9195\ncpu: 95027.52582925494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 177287.90087167473,
            "unit": "ns/iter",
            "extra": "iterations: 4933\ncpu: 177284.49219541886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5489.385826771948,
            "unit": "ns/iter",
            "extra": "iterations: 148209\ncpu: 5489.253014324363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26769.637388782212,
            "unit": "ns/iter",
            "extra": "iterations: 30683\ncpu: 26768.986083499112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20806.057848772412,
            "unit": "ns/iter",
            "extra": "iterations: 40191\ncpu: 20806.17302381123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20587.071521520425,
            "unit": "ns/iter",
            "extra": "iterations: 40729\ncpu: 20587.20567654495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19743.834525026676,
            "unit": "ns/iter",
            "extra": "iterations: 39160\ncpu: 19743.35035750766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45211.38092436437,
            "unit": "ns/iter",
            "extra": "iterations: 18694\ncpu: 45210.39905852154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 254260.02502181986,
            "unit": "ns/iter",
            "extra": "iterations: 3437\ncpu: 254241.89700319993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 196335.35278153748,
            "unit": "ns/iter",
            "extra": "iterations: 4422\ncpu: 196332.74536408854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 197245.9750905788,
            "unit": "ns/iter",
            "extra": "iterations: 4416\ncpu: 197237.18297101502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 196878.68310336897,
            "unit": "ns/iter",
            "extra": "iterations: 4421\ncpu: 196874.96041619626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107547.60056482525,
            "unit": "ns/iter",
            "extra": "iterations: 8144\ncpu: 107543.67632613007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 187741.1712505517,
            "unit": "ns/iter",
            "extra": "iterations: 4654\ncpu: 187738.50451224827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 782105.0189144672,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 782080.3453947371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 438443.9687345194,
            "unit": "ns/iter",
            "extra": "iterations: 2015\ncpu: 438430.6699751876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1877.0882743428656,
            "unit": "ns/iter",
            "extra": "iterations: 428573\ncpu: 1877.00625097707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9573.279014317777,
            "unit": "ns/iter",
            "extra": "iterations: 86397\ncpu: 9572.965496487139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7700.500060440336,
            "unit": "ns/iter",
            "extra": "iterations: 107545\ncpu: 7700.298479706164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7742.731558165346,
            "unit": "ns/iter",
            "extra": "iterations: 106619\ncpu: 7742.6546863129415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7386.538512955427,
            "unit": "ns/iter",
            "extra": "iterations: 113702\ncpu: 7386.354681535992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27462.69039994557,
            "unit": "ns/iter",
            "extra": "iterations: 30604\ncpu: 27462.560449614415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 240092.2500681613,
            "unit": "ns/iter",
            "extra": "iterations: 3667\ncpu: 240089.71911644403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 181369.62415557407,
            "unit": "ns/iter",
            "extra": "iterations: 4885\ncpu: 181360.75742067513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 181590.52125464994,
            "unit": "ns/iter",
            "extra": "iterations: 4846\ncpu: 181585.5963681384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 180831.37275912243,
            "unit": "ns/iter",
            "extra": "iterations: 4853\ncpu: 180826.2518030093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 93372.60273391755,
            "unit": "ns/iter",
            "extra": "iterations: 9437\ncpu: 93370.34015047195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 174316.57934308524,
            "unit": "ns/iter",
            "extra": "iterations: 5054\ncpu: 174310.6450336369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 183.79499554134142,
            "unit": "ns/iter",
            "extra": "iterations: 3812800\ncpu: 183.79086235837318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1417.8252403025253,
            "unit": "ns/iter",
            "extra": "iterations: 494273\ncpu: 1417.777624915778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1106.218002622386,
            "unit": "ns/iter",
            "extra": "iterations: 634552\ncpu: 1106.1933458565984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1149.8018265080393,
            "unit": "ns/iter",
            "extra": "iterations: 607498\ncpu: 1149.7970363688487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 828.8659860877377,
            "unit": "ns/iter",
            "extra": "iterations: 847024\ncpu: 828.8636449498446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9442.495517343763,
            "unit": "ns/iter",
            "extra": "iterations: 73394\ncpu: 9442.274572853372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11395.459081249182,
            "unit": "ns/iter",
            "extra": "iterations: 61170\ncpu: 11394.894556154937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2569.550002197436,
            "unit": "ns/iter",
            "extra": "iterations: 273028\ncpu: 2569.462106450624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2597.9976355716185,
            "unit": "ns/iter",
            "extra": "iterations: 267718\ncpu: 2597.936261289862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2573.3145191383264,
            "unit": "ns/iter",
            "extra": "iterations: 273322\ncpu: 2573.2187676074186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4855.678845008018,
            "unit": "ns/iter",
            "extra": "iterations: 142685\ncpu: 4855.502680730277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4934.655857270972,
            "unit": "ns/iter",
            "extra": "iterations: 142592\ncpu: 4934.620455565466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1950.5077243781018,
            "unit": "ns/iter",
            "extra": "iterations: 358346\ncpu: 1950.5009125258907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10211.681824126026,
            "unit": "ns/iter",
            "extra": "iterations: 68811\ncpu: 10211.429858598198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8174.655239926427,
            "unit": "ns/iter",
            "extra": "iterations: 86318\ncpu: 8174.3645589564185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8071.071940241254,
            "unit": "ns/iter",
            "extra": "iterations: 88087\ncpu: 8070.892413182523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8068.01894049393,
            "unit": "ns/iter",
            "extra": "iterations: 86059\ncpu: 8067.866231306374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18872.04101609814,
            "unit": "ns/iter",
            "extra": "iterations: 37083\ncpu: 18871.83884798995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51225.508962683045,
            "unit": "ns/iter",
            "extra": "iterations: 13612\ncpu: 51224.39024390271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41834.614344677626,
            "unit": "ns/iter",
            "extra": "iterations: 16717\ncpu: 41834.348268230286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41680.286195886314,
            "unit": "ns/iter",
            "extra": "iterations: 16908\ncpu: 41680.02129169573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41661.477005660825,
            "unit": "ns/iter",
            "extra": "iterations: 16765\ncpu: 41660.24455711339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25334.82929205219,
            "unit": "ns/iter",
            "extra": "iterations: 27714\ncpu: 25334.2065382118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40985.4344791174,
            "unit": "ns/iter",
            "extra": "iterations: 17048\ncpu: 40984.68442046016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1917.817979053798,
            "unit": "ns/iter",
            "extra": "iterations: 366749\ncpu: 1917.7527409754466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11261.896486702572,
            "unit": "ns/iter",
            "extra": "iterations: 62050\ncpu: 11261.518130539807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8810.380704817311,
            "unit": "ns/iter",
            "extra": "iterations: 79056\ncpu: 8810.434375632476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9027.847496548799,
            "unit": "ns/iter",
            "extra": "iterations: 77513\ncpu: 9027.377343155369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9246.699025762146,
            "unit": "ns/iter",
            "extra": "iterations: 75033\ncpu: 9246.359601775124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19750.045366006587,
            "unit": "ns/iter",
            "extra": "iterations: 35423\ncpu: 19749.397284250226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 50725.753972885526,
            "unit": "ns/iter",
            "extra": "iterations: 13718\ncpu: 50724.46420761023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42589.8879436931,
            "unit": "ns/iter",
            "extra": "iterations: 16340\ncpu: 42588.15789473711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41391.28707994113,
            "unit": "ns/iter",
            "extra": "iterations: 17051\ncpu: 41390.334877719644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40885.86494839289,
            "unit": "ns/iter",
            "extra": "iterations: 17149\ncpu: 40884.66382879455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24911.30672254364,
            "unit": "ns/iter",
            "extra": "iterations: 28635\ncpu: 24910.696699843298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 42151.387815574984,
            "unit": "ns/iter",
            "extra": "iterations: 16874\ncpu: 42151.102287543225 ns\nthreads: 1"
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
        "date": 1705575652889,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 532.197831914569,
            "unit": "ns/iter",
            "extra": "iterations: 1317568\ncpu: 532.1945432797397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5752.424414508788,
            "unit": "ns/iter",
            "extra": "iterations: 140523\ncpu: 5752.330935149405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9594.818370637877,
            "unit": "ns/iter",
            "extra": "iterations: 86181\ncpu: 9594.697207040996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14526.594892911377,
            "unit": "ns/iter",
            "extra": "iterations: 57802\ncpu: 14526.234386353417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19048.590989338452,
            "unit": "ns/iter",
            "extra": "iterations: 43615\ncpu: 19048.210478046527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 23811.880330511765,
            "unit": "ns/iter",
            "extra": "iterations: 35339\ncpu: 23811.39251252157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28143.498651288744,
            "unit": "ns/iter",
            "extra": "iterations: 29658\ncpu: 28142.53489783532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 32692.193209950125,
            "unit": "ns/iter",
            "extra": "iterations: 25449\ncpu: 32691.23344728673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37001.52113853128,
            "unit": "ns/iter",
            "extra": "iterations: 22731\ncpu: 37000.27275526818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 500.31787600005373,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 500.30330000000055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 385.1298263409891,
            "unit": "ns/iter",
            "extra": "iterations: 1703568\ncpu: 385.1155339851419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 390.21466357226154,
            "unit": "ns/iter",
            "extra": "iterations: 1789032\ncpu: 390.2049264630262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 377.1490766488158,
            "unit": "ns/iter",
            "extra": "iterations: 1853845\ncpu: 377.1405376393389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 832.876076416727,
            "unit": "ns/iter",
            "extra": "iterations: 823798\ncpu: 832.802580244186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1697.548084405985,
            "unit": "ns/iter",
            "extra": "iterations: 467740\ncpu: 1697.4402445803214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9963.36170890386,
            "unit": "ns/iter",
            "extra": "iterations: 81643\ncpu: 9962.58956677241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7742.727243845233,
            "unit": "ns/iter",
            "extra": "iterations: 103873\ncpu: 7742.235229559163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7652.141625197021,
            "unit": "ns/iter",
            "extra": "iterations: 106104\ncpu: 7651.736975043363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7946.0674095905315,
            "unit": "ns/iter",
            "extra": "iterations: 102478\ncpu: 7945.800074162265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27986.483738037085,
            "unit": "ns/iter",
            "extra": "iterations: 29363\ncpu: 27985.045805946243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 241766.62049333815,
            "unit": "ns/iter",
            "extra": "iterations: 3689\ncpu: 241746.05584169144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 182722.85627359603,
            "unit": "ns/iter",
            "extra": "iterations: 4766\ncpu: 182711.183382291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 180925.88440521352,
            "unit": "ns/iter",
            "extra": "iterations: 4758\ncpu: 180913.6401849516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 183221.40197729136,
            "unit": "ns/iter",
            "extra": "iterations: 4754\ncpu: 183209.73916701713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 94473.1391058958,
            "unit": "ns/iter",
            "extra": "iterations: 9216\ncpu: 94470.4318576392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 174974.99574553428,
            "unit": "ns/iter",
            "extra": "iterations: 4936\ncpu: 174966.06564019405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5381.653347407407,
            "unit": "ns/iter",
            "extra": "iterations: 149683\ncpu: 5381.286452035305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26354.625417955373,
            "unit": "ns/iter",
            "extra": "iterations: 31702\ncpu: 26352.397325089893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 19750.57714121677,
            "unit": "ns/iter",
            "extra": "iterations: 41787\ncpu: 19749.448393040948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20301.67893841776,
            "unit": "ns/iter",
            "extra": "iterations: 40581\ncpu: 20300.290776471804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20525.027820937612,
            "unit": "ns/iter",
            "extra": "iterations: 40545\ncpu: 20523.899371069154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44441.98553841024,
            "unit": "ns/iter",
            "extra": "iterations: 18601\ncpu: 44440.98704370708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 255685.3338205423,
            "unit": "ns/iter",
            "extra": "iterations: 3421\ncpu: 255666.0333235901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 195830.37320144253,
            "unit": "ns/iter",
            "extra": "iterations: 4448\ncpu: 195815.66996402838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 196235.5507344591,
            "unit": "ns/iter",
            "extra": "iterations: 4425\ncpu: 196225.8757062145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 196367.69555455295,
            "unit": "ns/iter",
            "extra": "iterations: 4454\ncpu: 196351.48181409822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107487.12819886014,
            "unit": "ns/iter",
            "extra": "iterations: 8167\ncpu: 107481.37627035608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 187926.92929510414,
            "unit": "ns/iter",
            "extra": "iterations: 4639\ncpu: 187911.381763311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 784017.8232405563,
            "unit": "ns/iter",
            "extra": "iterations: 1222\ncpu: 783976.5957446848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 433523.2358121371,
            "unit": "ns/iter",
            "extra": "iterations: 2044\ncpu: 433500.19569471537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1732.5634496956427,
            "unit": "ns/iter",
            "extra": "iterations: 458568\ncpu: 1732.3984665305823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9412.705499131907,
            "unit": "ns/iter",
            "extra": "iterations: 84577\ncpu: 9412.049375125665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7229.154774770331,
            "unit": "ns/iter",
            "extra": "iterations: 113817\ncpu: 7228.517708250966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7295.207952613471,
            "unit": "ns/iter",
            "extra": "iterations: 112944\ncpu: 7294.538886527846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7033.012402849877,
            "unit": "ns/iter",
            "extra": "iterations: 117473\ncpu: 7032.911392405033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27160.563856130702,
            "unit": "ns/iter",
            "extra": "iterations: 30694\ncpu: 27159.327555874177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 239853.50691245275,
            "unit": "ns/iter",
            "extra": "iterations: 3689\ncpu: 239838.41149362858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 180934.9879172484,
            "unit": "ns/iter",
            "extra": "iterations: 4883\ncpu: 180920.78640180186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 180652.68780889641,
            "unit": "ns/iter",
            "extra": "iterations: 4856\ncpu: 180642.42174629416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 180508.2386624987,
            "unit": "ns/iter",
            "extra": "iterations: 4785\ncpu: 180502.8213166145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 93064.89612188922,
            "unit": "ns/iter",
            "extra": "iterations: 9386\ncpu: 93061.58107820121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 173052.43250147646,
            "unit": "ns/iter",
            "extra": "iterations: 5089\ncpu: 173046.13873059605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 181.8229873896259,
            "unit": "ns/iter",
            "extra": "iterations: 3845404\ncpu: 181.8154087320855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1407.142586551911,
            "unit": "ns/iter",
            "extra": "iterations: 497852\ncpu: 1407.1099443207906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1046.9099935933664,
            "unit": "ns/iter",
            "extra": "iterations: 669619\ncpu: 1046.8782994508804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1037.306345648928,
            "unit": "ns/iter",
            "extra": "iterations: 675975\ncpu: 1037.2916158141982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 813.3378235782734,
            "unit": "ns/iter",
            "extra": "iterations: 858602\ncpu: 813.3220048404199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9282.41443263092,
            "unit": "ns/iter",
            "extra": "iterations: 74678\ncpu: 9281.966576501847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11471.085800456774,
            "unit": "ns/iter",
            "extra": "iterations: 61340\ncpu: 11470.70101075973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2569.2598805423218,
            "unit": "ns/iter",
            "extra": "iterations: 272733\ncpu: 2569.169847433214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2592.975922048252,
            "unit": "ns/iter",
            "extra": "iterations: 271244\ncpu: 2592.855878839722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2617.611132921346,
            "unit": "ns/iter",
            "extra": "iterations: 267459\ncpu: 2617.5211901637076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4941.054863036215,
            "unit": "ns/iter",
            "extra": "iterations: 141753\ncpu: 4940.902838035184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4948.084183150562,
            "unit": "ns/iter",
            "extra": "iterations: 141501\ncpu: 4947.885880665131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1916.684624168822,
            "unit": "ns/iter",
            "extra": "iterations: 365177\ncpu: 1916.639054485897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9993.455838818121,
            "unit": "ns/iter",
            "extra": "iterations: 69586\ncpu: 9993.007214094907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 7960.0471345797405,
            "unit": "ns/iter",
            "extra": "iterations: 88364\ncpu: 7959.82979493899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 7974.4129362783515,
            "unit": "ns/iter",
            "extra": "iterations: 88619\ncpu: 7974.25834189054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7988.475117797083,
            "unit": "ns/iter",
            "extra": "iterations: 88075\ncpu: 7988.358785126362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18445.125646261025,
            "unit": "ns/iter",
            "extra": "iterations: 37717\ncpu: 18444.316886284432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51617.51729547887,
            "unit": "ns/iter",
            "extra": "iterations: 13385\ncpu: 51615.56966753818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41474.100165957156,
            "unit": "ns/iter",
            "extra": "iterations: 16872\ncpu: 41472.88406827887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 40999.89028361294,
            "unit": "ns/iter",
            "extra": "iterations: 16889\ncpu: 40999.2243472078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41253.161729190986,
            "unit": "ns/iter",
            "extra": "iterations: 16979\ncpu: 41252.47069909869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24882.100436681194,
            "unit": "ns/iter",
            "extra": "iterations: 28167\ncpu: 24881.37181808484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40623.89034216958,
            "unit": "ns/iter",
            "extra": "iterations: 17126\ncpu: 40622.73735840265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1914.0798692188084,
            "unit": "ns/iter",
            "extra": "iterations: 367025\ncpu: 1914.0519038212876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11189.62964499999,
            "unit": "ns/iter",
            "extra": "iterations: 62648\ncpu: 11189.180819818652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8610.692373306025,
            "unit": "ns/iter",
            "extra": "iterations: 79720\ncpu: 8610.283492222627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9574.501344707489,
            "unit": "ns/iter",
            "extra": "iterations: 73622\ncpu: 9574.184347070068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9771.658484437166,
            "unit": "ns/iter",
            "extra": "iterations: 72026\ncpu: 9771.322855635619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19571.497415949863,
            "unit": "ns/iter",
            "extra": "iterations: 35990\ncpu: 19571.21978327326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51762.26717443405,
            "unit": "ns/iter",
            "extra": "iterations: 13392\ncpu: 51761.41726403896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 40048.68849739776,
            "unit": "ns/iter",
            "extra": "iterations: 17483\ncpu: 40047.41749127783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40758.2609528235,
            "unit": "ns/iter",
            "extra": "iterations: 17233\ncpu: 40756.80960947032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40239.2251351075,
            "unit": "ns/iter",
            "extra": "iterations: 17394\ncpu: 40237.99586064178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25778.36464657306,
            "unit": "ns/iter",
            "extra": "iterations: 27177\ncpu: 25776.859108805173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 40608.558627040686,
            "unit": "ns/iter",
            "extra": "iterations: 17364\ncpu: 40607.440681870015 ns\nthreads: 1"
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
        "date": 1705773463334,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 549.1411252668772,
            "unit": "ns/iter",
            "extra": "iterations: 1275413\ncpu: 549.124322866397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5106.8881200001215,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5106.826999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9743.799582413723,
            "unit": "ns/iter",
            "extra": "iterations: 85731\ncpu: 9743.399703724439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14532.478620618938,
            "unit": "ns/iter",
            "extra": "iterations: 57649\ncpu: 14531.776787108194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 18994.274670939434,
            "unit": "ns/iter",
            "extra": "iterations: 43685\ncpu: 18993.11663042234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 23773.20900019907,
            "unit": "ns/iter",
            "extra": "iterations: 35177\ncpu: 23771.671831025946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28476.54777982594,
            "unit": "ns/iter",
            "extra": "iterations: 29322\ncpu: 28475.206329718305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 33097.90983897113,
            "unit": "ns/iter",
            "extra": "iterations: 25399\ncpu: 33096.34631284695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37224.01157098093,
            "unit": "ns/iter",
            "extra": "iterations: 22470\ncpu: 37222.852692478875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 513.3194523957194,
            "unit": "ns/iter",
            "extra": "iterations: 1367703\ncpu: 513.2830007684416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 393.211240929682,
            "unit": "ns/iter",
            "extra": "iterations: 1779835\ncpu: 393.2083592018356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 399.61241568446377,
            "unit": "ns/iter",
            "extra": "iterations: 1749529\ncpu: 399.60452213138547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 389.3279323216987,
            "unit": "ns/iter",
            "extra": "iterations: 1793306\ncpu: 389.2983684881439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 843.0638205213722,
            "unit": "ns/iter",
            "extra": "iterations: 824343\ncpu: 843.064840727707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1700.3957217059376,
            "unit": "ns/iter",
            "extra": "iterations: 463409\ncpu: 1700.398352211545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9717.061642030694,
            "unit": "ns/iter",
            "extra": "iterations: 83482\ncpu: 9716.498167269603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7317.887015130319,
            "unit": "ns/iter",
            "extra": "iterations: 107271\ncpu: 7317.4809594391645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 6941.02509554237,
            "unit": "ns/iter",
            "extra": "iterations: 115917\ncpu: 6940.667028994887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7250.91808036848,
            "unit": "ns/iter",
            "extra": "iterations: 110938\ncpu: 7250.658926607637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27563.868880304955,
            "unit": "ns/iter",
            "extra": "iterations: 30026\ncpu: 27561.996269899395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 236765.22677893055,
            "unit": "ns/iter",
            "extra": "iterations: 3682\ncpu: 236750.62466050975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 181474.40400844254,
            "unit": "ns/iter",
            "extra": "iterations: 4740\ncpu: 181460.8860759499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 183688.5082627085,
            "unit": "ns/iter",
            "extra": "iterations: 4720\ncpu: 183680.4661016953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 185847.0491384727,
            "unit": "ns/iter",
            "extra": "iterations: 4701\ncpu: 185831.22739842554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 96978.64048305214,
            "unit": "ns/iter",
            "extra": "iterations: 9026\ncpu: 96971.85907378665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 179056.64278402686,
            "unit": "ns/iter",
            "extra": "iterations: 4885\ncpu: 179044.0736949846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5508.2996438959135,
            "unit": "ns/iter",
            "extra": "iterations: 147148\ncpu: 5508.306602876033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26616.064648404557,
            "unit": "ns/iter",
            "extra": "iterations: 31215\ncpu: 26615.85135351587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20981.647230469196,
            "unit": "ns/iter",
            "extra": "iterations: 39754\ncpu: 20981.247170096092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20832.865348965435,
            "unit": "ns/iter",
            "extra": "iterations: 39918\ncpu: 20832.13587855107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20505.67055697678,
            "unit": "ns/iter",
            "extra": "iterations: 40271\ncpu: 20504.18911872066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43623.15580923272,
            "unit": "ns/iter",
            "extra": "iterations: 18221\ncpu: 43619.39520333689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 255025.314285709,
            "unit": "ns/iter",
            "extra": "iterations: 3430\ncpu: 255015.6559766757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 197231.37073833004,
            "unit": "ns/iter",
            "extra": "iterations: 4429\ncpu: 197231.6324226687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 197670.82756263422,
            "unit": "ns/iter",
            "extra": "iterations: 4390\ncpu: 197662.1867881545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 197143.02169980248,
            "unit": "ns/iter",
            "extra": "iterations: 4424\ncpu: 197136.5506329102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107085.92982456253,
            "unit": "ns/iter",
            "extra": "iterations: 8151\ncpu: 107082.10035578527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 188197.21274295985,
            "unit": "ns/iter",
            "extra": "iterations: 4630\ncpu: 188194.55723542089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 785642.3910149493,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 785596.5058236237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 432438.34125061025,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 432407.12554532016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1877.6017832504829,
            "unit": "ns/iter",
            "extra": "iterations: 431235\ncpu: 1877.5393926745326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10473.1873592609,
            "unit": "ns/iter",
            "extra": "iterations: 78603\ncpu: 10472.96031958068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7711.337443345858,
            "unit": "ns/iter",
            "extra": "iterations: 106569\ncpu: 7710.966603796616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7494.470809500822,
            "unit": "ns/iter",
            "extra": "iterations: 109796\ncpu: 7494.229297970781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7006.380214519506,
            "unit": "ns/iter",
            "extra": "iterations: 111132\ncpu: 7006.232228341067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27204.691736426324,
            "unit": "ns/iter",
            "extra": "iterations: 30701\ncpu: 27204.468909807565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 246362.2681502107,
            "unit": "ns/iter",
            "extra": "iterations: 3595\ncpu: 246353.63004172553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 186058.80408249455,
            "unit": "ns/iter",
            "extra": "iterations: 4752\ncpu: 186053.09343434265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 186204.27647432016,
            "unit": "ns/iter",
            "extra": "iterations: 4731\ncpu: 186192.15810610956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 184894.9494098028,
            "unit": "ns/iter",
            "extra": "iterations: 4744\ncpu: 184893.676222596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 94150.5254711845,
            "unit": "ns/iter",
            "extra": "iterations: 9285\ncpu: 94147.2374798059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 178649.39914944363,
            "unit": "ns/iter",
            "extra": "iterations: 4938\ncpu: 178644.49169704283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 183.13399004027752,
            "unit": "ns/iter",
            "extra": "iterations: 3822202\ncpu: 183.12538165172728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1422.148331937902,
            "unit": "ns/iter",
            "extra": "iterations: 490899\ncpu: 1422.1501775314316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1161.998604752772,
            "unit": "ns/iter",
            "extra": "iterations: 604194\ncpu: 1161.9719825089253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1140.7150359363213,
            "unit": "ns/iter",
            "extra": "iterations: 613723\ncpu: 1140.6980021931695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 822.0241145262987,
            "unit": "ns/iter",
            "extra": "iterations: 852764\ncpu: 822.0151178989752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9244.558714816925,
            "unit": "ns/iter",
            "extra": "iterations: 76565\ncpu: 9244.222555998113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11014.203760074866,
            "unit": "ns/iter",
            "extra": "iterations: 63403\ncpu: 11014.127091777955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2562.982454791718,
            "unit": "ns/iter",
            "extra": "iterations: 273123\ncpu: 2562.8855863475287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2588.1830928749223,
            "unit": "ns/iter",
            "extra": "iterations: 271010\ncpu: 2588.0901073761156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2561.1335849661796,
            "unit": "ns/iter",
            "extra": "iterations: 273414\ncpu: 2560.9968765315534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4943.845244001326,
            "unit": "ns/iter",
            "extra": "iterations: 141106\ncpu: 4943.73237140869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4976.082475475299,
            "unit": "ns/iter",
            "extra": "iterations: 140369\ncpu: 4975.953380019824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1905.5323459138997,
            "unit": "ns/iter",
            "extra": "iterations: 363709\ncpu: 1905.512098958234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9967.6002266782,
            "unit": "ns/iter",
            "extra": "iterations: 69702\ncpu: 9966.979426702237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8013.599869211802,
            "unit": "ns/iter",
            "extra": "iterations: 87164\ncpu: 8013.20384562429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8017.24150714637,
            "unit": "ns/iter",
            "extra": "iterations: 87397\ncpu: 8016.677918006377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7870.498711991938,
            "unit": "ns/iter",
            "extra": "iterations: 88897\ncpu: 7870.374703308339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18550.564282113482,
            "unit": "ns/iter",
            "extra": "iterations: 37701\ncpu: 18550.412455902984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51541.826051775184,
            "unit": "ns/iter",
            "extra": "iterations: 13596\ncpu: 51538.94527802259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41419.833905120904,
            "unit": "ns/iter",
            "extra": "iterations: 16906\ncpu: 41419.89234591263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41255.64832451226,
            "unit": "ns/iter",
            "extra": "iterations: 17010\ncpu: 41255.68489124116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41457.55735085466,
            "unit": "ns/iter",
            "extra": "iterations: 16896\ncpu: 41454.764441287734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24850.191630816746,
            "unit": "ns/iter",
            "extra": "iterations: 28127\ncpu: 24849.162726206276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40545.94541661847,
            "unit": "ns/iter",
            "extra": "iterations: 17258\ncpu: 40543.29006837391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1908.5587039163681,
            "unit": "ns/iter",
            "extra": "iterations: 369328\ncpu: 1908.4388402720895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 9842.629090295113,
            "unit": "ns/iter",
            "extra": "iterations: 71144\ncpu: 9842.536264477563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9017.057605335158,
            "unit": "ns/iter",
            "extra": "iterations: 78274\ncpu: 9017.010757083943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9075.891639184847,
            "unit": "ns/iter",
            "extra": "iterations: 77325\ncpu: 9075.503394762316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9138.391263952637,
            "unit": "ns/iter",
            "extra": "iterations: 76419\ncpu: 9137.72229419378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18375.312966270132,
            "unit": "ns/iter",
            "extra": "iterations: 38068\ncpu: 18374.070085110856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51392.50281106037,
            "unit": "ns/iter",
            "extra": "iterations: 13518\ncpu: 51389.85056961083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41830.94772548757,
            "unit": "ns/iter",
            "extra": "iterations: 16509\ncpu: 41828.80852868099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41171.76859698771,
            "unit": "ns/iter",
            "extra": "iterations: 16992\ncpu: 41168.61464218459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40802.0527048997,
            "unit": "ns/iter",
            "extra": "iterations: 17228\ncpu: 40799.26863245845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24485.04875061113,
            "unit": "ns/iter",
            "extra": "iterations: 28574\ncpu: 24483.449989500758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41898.92391756516,
            "unit": "ns/iter",
            "extra": "iterations: 16837\ncpu: 41897.392647146604 ns\nthreads: 1"
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
        "date": 1705775080560,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 522.7413247797476,
            "unit": "ns/iter",
            "extra": "iterations: 1338381\ncpu: 522.713039112181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5722.440665712105,
            "unit": "ns/iter",
            "extra": "iterations: 141082\ncpu: 5722.412497696373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9859.788411451396,
            "unit": "ns/iter",
            "extra": "iterations: 85619\ncpu: 9859.330288837757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14448.224256965274,
            "unit": "ns/iter",
            "extra": "iterations: 57938\ncpu: 14447.785563878637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 18851.888131897304,
            "unit": "ns/iter",
            "extra": "iterations: 44034\ncpu: 18851.292183312893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 23216.805144820668,
            "unit": "ns/iter",
            "extra": "iterations: 36114\ncpu: 23216.26239131637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 27909.73717906485,
            "unit": "ns/iter",
            "extra": "iterations: 30146\ncpu: 27908.564983745746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 32580.049523809565,
            "unit": "ns/iter",
            "extra": "iterations: 25725\ncpu: 32578.78328474249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 36635.5775816894,
            "unit": "ns/iter",
            "extra": "iterations: 22892\ncpu: 36633.80220164249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 501.5180309999323,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 501.5040000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 393.32886843968123,
            "unit": "ns/iter",
            "extra": "iterations: 1779587\ncpu: 393.30844740942774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 397.63101417467817,
            "unit": "ns/iter",
            "extra": "iterations: 1766244\ncpu: 397.6134101517119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 389.035598719911,
            "unit": "ns/iter",
            "extra": "iterations: 1799222\ncpu: 389.01080578160935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 842.5168623532186,
            "unit": "ns/iter",
            "extra": "iterations: 824618\ncpu: 842.4854902512443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1709.3809582119688,
            "unit": "ns/iter",
            "extra": "iterations: 465492\ncpu: 1709.2976893265616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10155.788197502152,
            "unit": "ns/iter",
            "extra": "iterations: 80627\ncpu: 10155.620325697344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7742.118229689051,
            "unit": "ns/iter",
            "extra": "iterations: 103688\ncpu: 7741.866946994856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7601.793631323977,
            "unit": "ns/iter",
            "extra": "iterations: 106804\ncpu: 7601.5046252949105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7713.660014396771,
            "unit": "ns/iter",
            "extra": "iterations: 105578\ncpu: 7713.312432514361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27730.78359693877,
            "unit": "ns/iter",
            "extra": "iterations: 29653\ncpu: 27730.091390415822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 235395.44679124016,
            "unit": "ns/iter",
            "extra": "iterations: 3693\ncpu: 235389.79149742724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 181807.34542784022,
            "unit": "ns/iter",
            "extra": "iterations: 4768\ncpu: 181804.19463087237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 184532.75458957,
            "unit": "ns/iter",
            "extra": "iterations: 4739\ncpu: 184529.49989449247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 183570.13008473502,
            "unit": "ns/iter",
            "extra": "iterations: 4720\ncpu: 183566.9067796613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 94668.93214091749,
            "unit": "ns/iter",
            "extra": "iterations: 9225\ncpu: 94667.14363143616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 176388.16636122958,
            "unit": "ns/iter",
            "extra": "iterations: 4911\ncpu: 176384.87069843183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5566.076448027955,
            "unit": "ns/iter",
            "extra": "iterations: 147839\ncpu: 5565.9839419909695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26535.128156202838,
            "unit": "ns/iter",
            "extra": "iterations: 31446\ncpu: 26534.646695923126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21137.48649536376,
            "unit": "ns/iter",
            "extra": "iterations: 39579\ncpu: 21137.224285606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20845.645531265593,
            "unit": "ns/iter",
            "extra": "iterations: 39933\ncpu: 20844.91773720985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20583.361565855295,
            "unit": "ns/iter",
            "extra": "iterations: 40438\ncpu: 20582.734062020867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44490.778155311535,
            "unit": "ns/iter",
            "extra": "iterations: 18247\ncpu: 44489.998355893935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 255336.79033675793,
            "unit": "ns/iter",
            "extra": "iterations: 3415\ncpu: 255331.94729136143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 197380.9621143551,
            "unit": "ns/iter",
            "extra": "iterations: 4408\ncpu: 197376.56533575268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 196833.72104665008,
            "unit": "ns/iter",
            "extra": "iterations: 4395\ncpu: 196826.6211604103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 198039.22460495256,
            "unit": "ns/iter",
            "extra": "iterations: 4430\ncpu: 198035.77878103883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107079.85480268238,
            "unit": "ns/iter",
            "extra": "iterations: 8058\ncpu: 107077.24000992865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 188243.44879517675,
            "unit": "ns/iter",
            "extra": "iterations: 4648\ncpu: 188238.8554216864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 780327.1577629665,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 780295.7429048416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 435767.628992607,
            "unit": "ns/iter",
            "extra": "iterations: 2035\ncpu: 435745.4054054074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1865.2687943889357,
            "unit": "ns/iter",
            "extra": "iterations: 428878\ncpu: 1865.2099198373471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9668.620484967138,
            "unit": "ns/iter",
            "extra": "iterations: 85243\ncpu: 9668.451368440785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7881.5659146324215,
            "unit": "ns/iter",
            "extra": "iterations: 103763\ncpu: 7881.362335321878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7698.672955385787,
            "unit": "ns/iter",
            "extra": "iterations: 106646\ncpu: 7698.383436790856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7626.137228903453,
            "unit": "ns/iter",
            "extra": "iterations: 107849\ncpu: 7625.826850503973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27531.72221125099,
            "unit": "ns/iter",
            "extra": "iterations: 30390\ncpu: 27530.539651201037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 244472.33397844323,
            "unit": "ns/iter",
            "extra": "iterations: 3617\ncpu: 244461.37683162963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 185175.53187042155,
            "unit": "ns/iter",
            "extra": "iterations: 4785\ncpu: 185168.9655172421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 184633.7708420635,
            "unit": "ns/iter",
            "extra": "iterations: 4774\ncpu: 184629.26267281102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 185371.05959573403,
            "unit": "ns/iter",
            "extra": "iterations: 4799\ncpu: 185359.6165867887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 94810.97164115433,
            "unit": "ns/iter",
            "extra": "iterations: 9274\ncpu: 94807.0196247573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 176199.8646104598,
            "unit": "ns/iter",
            "extra": "iterations: 4993\ncpu: 176194.43220508823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 185.41473218372695,
            "unit": "ns/iter",
            "extra": "iterations: 3769095\ncpu: 185.41381949778275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1420.8153947052713,
            "unit": "ns/iter",
            "extra": "iterations: 492494\ncpu: 1420.7637047354885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1155.489158847472,
            "unit": "ns/iter",
            "extra": "iterations: 602150\ncpu: 1155.385535165652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1131.1885268028873,
            "unit": "ns/iter",
            "extra": "iterations: 618607\ncpu: 1131.16647564609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 812.3861932718768,
            "unit": "ns/iter",
            "extra": "iterations: 864057\ncpu: 812.3746465800352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9222.774953080037,
            "unit": "ns/iter",
            "extra": "iterations: 76193\ncpu: 9222.600501358398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11511.536692493013,
            "unit": "ns/iter",
            "extra": "iterations: 60789\ncpu: 11511.227360213208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2600.2905542928906,
            "unit": "ns/iter",
            "extra": "iterations: 269244\ncpu: 2600.215789395507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2609.9960602612496,
            "unit": "ns/iter",
            "extra": "iterations: 269561\ncpu: 2609.889412785971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2620.2212663234986,
            "unit": "ns/iter",
            "extra": "iterations: 265951\ncpu: 2620.166120826778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4929.8652047975165,
            "unit": "ns/iter",
            "extra": "iterations: 142238\ncpu: 4929.708657320863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4952.945692737247,
            "unit": "ns/iter",
            "extra": "iterations: 141215\ncpu: 4952.848493431988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1899.4156987620095,
            "unit": "ns/iter",
            "extra": "iterations: 371507\ncpu: 1899.3900518698151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10041.96759232572,
            "unit": "ns/iter",
            "extra": "iterations: 69212\ncpu: 10041.841010229458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8085.833665107861,
            "unit": "ns/iter",
            "extra": "iterations: 86404\ncpu: 8085.681218462088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8024.164163238385,
            "unit": "ns/iter",
            "extra": "iterations: 86548\ncpu: 8023.994777464616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7976.642047863077,
            "unit": "ns/iter",
            "extra": "iterations: 87291\ncpu: 7976.4191039168745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18443.585167096433,
            "unit": "ns/iter",
            "extra": "iterations: 37673\ncpu: 18442.669816579477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 50975.905561228145,
            "unit": "ns/iter",
            "extra": "iterations: 13702\ncpu: 50975.64589110988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41203.042805417565,
            "unit": "ns/iter",
            "extra": "iterations: 17124\ncpu: 41199.906563886914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41015.96663561117,
            "unit": "ns/iter",
            "extra": "iterations: 17174\ncpu: 41014.16676371285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41235.881432687456,
            "unit": "ns/iter",
            "extra": "iterations: 17003\ncpu: 41233.64700346975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24772.771610811044,
            "unit": "ns/iter",
            "extra": "iterations: 28377\ncpu: 24771.822250414112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40274.925206160864,
            "unit": "ns/iter",
            "extra": "iterations: 17341\ncpu: 40271.783634161664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1898.372075312132,
            "unit": "ns/iter",
            "extra": "iterations: 368971\ncpu: 1898.3077260814339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11230.13077515456,
            "unit": "ns/iter",
            "extra": "iterations: 62336\ncpu: 11229.563975872625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9790.238571886714,
            "unit": "ns/iter",
            "extra": "iterations: 71731\ncpu: 9789.873276547118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9863.71154498262,
            "unit": "ns/iter",
            "extra": "iterations: 70784\ncpu: 9863.514353526165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9547.0421667079,
            "unit": "ns/iter",
            "extra": "iterations: 73494\ncpu: 9546.607886358082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 20076.861312822817,
            "unit": "ns/iter",
            "extra": "iterations: 34841\ncpu: 20075.93926695556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 52104.5480733203,
            "unit": "ns/iter",
            "extra": "iterations: 13365\ncpu: 52101.69098391343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41612.23979195458,
            "unit": "ns/iter",
            "extra": "iterations: 16727\ncpu: 41610.59962934196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 41156.969530227245,
            "unit": "ns/iter",
            "extra": "iterations: 16902\ncpu: 41155.39581114612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40475.03075413473,
            "unit": "ns/iter",
            "extra": "iterations: 17331\ncpu: 40474.53118689028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25264.587116298917,
            "unit": "ns/iter",
            "extra": "iterations: 27756\ncpu: 25264.458135177796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 40955.78817791517,
            "unit": "ns/iter",
            "extra": "iterations: 17222\ncpu: 40955.58587852795 ns\nthreads: 1"
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
        "date": 1705778439792,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 516.8474866712673,
            "unit": "ns/iter",
            "extra": "iterations: 1353285\ncpu: 516.8330396036313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5740.197537275027,
            "unit": "ns/iter",
            "extra": "iterations: 140576\ncpu: 5739.986910994765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9817.98200673373,
            "unit": "ns/iter",
            "extra": "iterations: 85532\ncpu: 9817.601599401394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14404.553672514876,
            "unit": "ns/iter",
            "extra": "iterations: 57059\ncpu: 14404.111533675668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 18818.487260427322,
            "unit": "ns/iter",
            "extra": "iterations: 44350\ncpu: 18817.78354002253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 23541.63234388158,
            "unit": "ns/iter",
            "extra": "iterations: 35710\ncpu: 23540.93811257349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28090.06432398189,
            "unit": "ns/iter",
            "extra": "iterations: 30051\ncpu: 28088.91551029916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 32296.928734362667,
            "unit": "ns/iter",
            "extra": "iterations: 25426\ncpu: 32295.477070715013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37079.83178426296,
            "unit": "ns/iter",
            "extra": "iterations: 22917\ncpu: 37078.906488632936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 533.7968406526686,
            "unit": "ns/iter",
            "extra": "iterations: 1395668\ncpu: 533.7636171353064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 392.81211415718354,
            "unit": "ns/iter",
            "extra": "iterations: 1778250\ncpu: 392.8000562350624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 396.1309862140413,
            "unit": "ns/iter",
            "extra": "iterations: 1759689\ncpu: 396.1120970807908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 388.025522429547,
            "unit": "ns/iter",
            "extra": "iterations: 1800769\ncpu: 388.0200070081167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 855.8556699854736,
            "unit": "ns/iter",
            "extra": "iterations: 788256\ncpu: 855.8147353144138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1701.0905481048662,
            "unit": "ns/iter",
            "extra": "iterations: 468414\ncpu: 1701.0390381158552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9230.532049683881,
            "unit": "ns/iter",
            "extra": "iterations: 88238\ncpu: 9230.21034021624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7593.889642326867,
            "unit": "ns/iter",
            "extra": "iterations: 108982\ncpu: 7593.675102310448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7540.440587797522,
            "unit": "ns/iter",
            "extra": "iterations: 107520\ncpu: 7540.21112351192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7799.552621749019,
            "unit": "ns/iter",
            "extra": "iterations: 104415\ncpu: 7799.259684911179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 28156.70496056822,
            "unit": "ns/iter",
            "extra": "iterations: 29291\ncpu: 28155.416339489944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 236278.4634013434,
            "unit": "ns/iter",
            "extra": "iterations: 3675\ncpu: 236265.65986394504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 181416.51538784997,
            "unit": "ns/iter",
            "extra": "iterations: 4744\ncpu: 181408.2841483983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 182240.89230768863,
            "unit": "ns/iter",
            "extra": "iterations: 4745\ncpu: 182232.64488935773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 182639.93141407488,
            "unit": "ns/iter",
            "extra": "iterations: 4724\ncpu: 182632.3243014397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 95486.17044957887,
            "unit": "ns/iter",
            "extra": "iterations: 9164\ncpu: 95482.1366215628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 177090.93562753373,
            "unit": "ns/iter",
            "extra": "iterations: 4940\ncpu: 177083.58299595123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5587.231486433317,
            "unit": "ns/iter",
            "extra": "iterations: 145866\ncpu: 5587.075809304437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26622.00591356516,
            "unit": "ns/iter",
            "extra": "iterations: 31284\ncpu: 26620.815752461334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20506.34411977376,
            "unit": "ns/iter",
            "extra": "iterations: 40143\ncpu: 20505.799267618226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20255.68626589686,
            "unit": "ns/iter",
            "extra": "iterations: 40971\ncpu: 20254.536135315266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20329.469132814906,
            "unit": "ns/iter",
            "extra": "iterations: 41306\ncpu: 20328.797269161903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 44742.74947986167,
            "unit": "ns/iter",
            "extra": "iterations: 18745\ncpu: 44740.960256068254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 254243.29857682422,
            "unit": "ns/iter",
            "extra": "iterations: 3443\ncpu: 254241.33023525873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 196424.72383326464,
            "unit": "ns/iter",
            "extra": "iterations: 4414\ncpu: 196425.60036248268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 208854.00363886228,
            "unit": "ns/iter",
            "extra": "iterations: 4397\ncpu: 208850.1023425065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 196257.40904977205,
            "unit": "ns/iter",
            "extra": "iterations: 4420\ncpu: 196258.14479637978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107818.98224632541,
            "unit": "ns/iter",
            "extra": "iterations: 8111\ncpu: 107818.5303908274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 189330.3095807184,
            "unit": "ns/iter",
            "extra": "iterations: 4603\ncpu: 189329.54594829484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 783531.8096026835,
            "unit": "ns/iter",
            "extra": "iterations: 1208\ncpu: 783521.9370860927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 442875.7123493947,
            "unit": "ns/iter",
            "extra": "iterations: 1992\ncpu: 442863.50401606597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1873.576116508062,
            "unit": "ns/iter",
            "extra": "iterations: 424829\ncpu: 1873.5227585687505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9215.620700216823,
            "unit": "ns/iter",
            "extra": "iterations: 84888\ncpu: 9215.54401093205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7281.460312133044,
            "unit": "ns/iter",
            "extra": "iterations: 113221\ncpu: 7281.4212911032855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7206.061431774292,
            "unit": "ns/iter",
            "extra": "iterations: 114208\ncpu: 7206.034603530423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7141.881634320396,
            "unit": "ns/iter",
            "extra": "iterations: 115008\ncpu: 7141.842306622123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26857.46639359894,
            "unit": "ns/iter",
            "extra": "iterations: 31006\ncpu: 26857.588853770165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 241977.6220946323,
            "unit": "ns/iter",
            "extra": "iterations: 3657\ncpu: 241976.0185944756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 181717.76184589483,
            "unit": "ns/iter",
            "extra": "iterations: 4854\ncpu: 181715.94561186593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 182325.0766220337,
            "unit": "ns/iter",
            "extra": "iterations: 4855\ncpu: 182322.4716786811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 180977.18762885858,
            "unit": "ns/iter",
            "extra": "iterations: 4850\ncpu: 180976.72164948547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 93432.19503357401,
            "unit": "ns/iter",
            "extra": "iterations: 9383\ncpu: 93430.1822444844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 174288.18235760927,
            "unit": "ns/iter",
            "extra": "iterations: 5056\ncpu: 174288.94382911397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 182.22771218137194,
            "unit": "ns/iter",
            "extra": "iterations: 3842267\ncpu: 182.22856454275617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1421.9103054404009,
            "unit": "ns/iter",
            "extra": "iterations: 491323\ncpu: 1421.9167431608187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1157.9919050840483,
            "unit": "ns/iter",
            "extra": "iterations: 604577\ncpu: 1157.9952594954868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1141.093137814557,
            "unit": "ns/iter",
            "extra": "iterations: 613070\ncpu: 1141.085194186636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 827.4509134003719,
            "unit": "ns/iter",
            "extra": "iterations: 842949\ncpu: 827.4534995592899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9178.869075415303,
            "unit": "ns/iter",
            "extra": "iterations: 75807\ncpu: 9178.73679211676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11466.776420492804,
            "unit": "ns/iter",
            "extra": "iterations: 60824\ncpu: 11466.526371169279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2627.4370414560126,
            "unit": "ns/iter",
            "extra": "iterations: 253111\ncpu: 2627.380872423565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2745.691219671628,
            "unit": "ns/iter",
            "extra": "iterations: 257348\ncpu: 2745.6323732844317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2689.40676615372,
            "unit": "ns/iter",
            "extra": "iterations: 255980\ncpu: 2689.3511211813498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4910.355057667235,
            "unit": "ns/iter",
            "extra": "iterations: 142022\ncpu: 4910.380081959115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4929.585620085068,
            "unit": "ns/iter",
            "extra": "iterations: 141795\ncpu: 4929.490461581814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1917.3618886355275,
            "unit": "ns/iter",
            "extra": "iterations: 363797\ncpu: 1917.3709513821939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10140.914915593477,
            "unit": "ns/iter",
            "extra": "iterations: 67768\ncpu: 10140.643076378215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8139.467774775347,
            "unit": "ns/iter",
            "extra": "iterations: 86935\ncpu: 8139.512279289197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8069.941482595072,
            "unit": "ns/iter",
            "extra": "iterations: 86470\ncpu: 8069.982652943125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7997.692826626549,
            "unit": "ns/iter",
            "extra": "iterations: 87309\ncpu: 7997.401184299374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18527.712726111044,
            "unit": "ns/iter",
            "extra": "iterations: 37647\ncpu: 18527.787074667373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51280.92470170105,
            "unit": "ns/iter",
            "extra": "iterations: 13493\ncpu: 51280.21196175841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 42181.28297247036,
            "unit": "ns/iter",
            "extra": "iterations: 16673\ncpu: 42181.41906075636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41857.653421892515,
            "unit": "ns/iter",
            "extra": "iterations: 16862\ncpu: 41856.54726604199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41626.85116334029,
            "unit": "ns/iter",
            "extra": "iterations: 16891\ncpu: 41626.45195666385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 25064.44126360486,
            "unit": "ns/iter",
            "extra": "iterations: 28015\ncpu: 25063.926467963487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 41131.91897140446,
            "unit": "ns/iter",
            "extra": "iterations: 16994\ncpu: 41132.028951395005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1964.397060275732,
            "unit": "ns/iter",
            "extra": "iterations: 354455\ncpu: 1964.3847597015153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 10695.267458569691,
            "unit": "ns/iter",
            "extra": "iterations: 65412\ncpu: 10695.309729101602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8784.154146731844,
            "unit": "ns/iter",
            "extra": "iterations: 79846\ncpu: 8784.044285249007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9595.184813282358,
            "unit": "ns/iter",
            "extra": "iterations: 72998\ncpu: 9595.04917942959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9009.593303778272,
            "unit": "ns/iter",
            "extra": "iterations: 77596\ncpu: 9009.438630857285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19703.968239232414,
            "unit": "ns/iter",
            "extra": "iterations: 35547\ncpu: 19703.834360142977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51460.36604303943,
            "unit": "ns/iter",
            "extra": "iterations: 13523\ncpu: 51459.579974857836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 40529.94887025022,
            "unit": "ns/iter",
            "extra": "iterations: 17172\ncpu: 40528.98322851112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42096.56886298861,
            "unit": "ns/iter",
            "extra": "iterations: 16649\ncpu: 42096.2039762145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 41480.59183551708,
            "unit": "ns/iter",
            "extra": "iterations: 16829\ncpu: 41480.71186642098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24908.64642680454,
            "unit": "ns/iter",
            "extra": "iterations: 28294\ncpu: 24908.450554887848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41703.07062957238,
            "unit": "ns/iter",
            "extra": "iterations: 17075\ncpu: 41701.69253294258 ns\nthreads: 1"
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
        "date": 1705953632002,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 561.2738766556649,
            "unit": "ns/iter",
            "extra": "iterations: 1263682\ncpu: 561.2533849496946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5736.059875313312,
            "unit": "ns/iter",
            "extra": "iterations: 140993\ncpu: 5735.917385969517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9753.282018795013,
            "unit": "ns/iter",
            "extra": "iterations: 85239\ncpu: 9753.161111697693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14528.170750008469,
            "unit": "ns/iter",
            "extra": "iterations: 57306\ncpu: 14528.000558405749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 18918.78014599934,
            "unit": "ns/iter",
            "extra": "iterations: 44384\ncpu: 18918.470620043263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 23790.319665605202,
            "unit": "ns/iter",
            "extra": "iterations: 35168\ncpu: 23789.77195177434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28773.13611016825,
            "unit": "ns/iter",
            "extra": "iterations: 29410\ncpu: 28772.614756885436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 32886.30132812553,
            "unit": "ns/iter",
            "extra": "iterations: 25600\ncpu: 32885.32812499998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37829.753072920634,
            "unit": "ns/iter",
            "extra": "iterations: 22861\ncpu: 37829.02760159225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 509.9832394180465,
            "unit": "ns/iter",
            "extra": "iterations: 1380322\ncpu: 509.9673844218968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 400.69814221290045,
            "unit": "ns/iter",
            "extra": "iterations: 1740081\ncpu: 400.6930137160284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 401.6224100598416,
            "unit": "ns/iter",
            "extra": "iterations: 1750330\ncpu: 401.6128387218406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 393.72579941831054,
            "unit": "ns/iter",
            "extra": "iterations: 1765784\ncpu: 393.7189373105653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 844.9496847377974,
            "unit": "ns/iter",
            "extra": "iterations: 828834\ncpu: 844.9267283919348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1704.872446058348,
            "unit": "ns/iter",
            "extra": "iterations: 468100\ncpu: 1704.8149967955537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9578.141933891358,
            "unit": "ns/iter",
            "extra": "iterations: 85103\ncpu: 9577.864470112696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 8185.59375868447,
            "unit": "ns/iter",
            "extra": "iterations: 97159\ncpu: 8185.521670663542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 8472.215807099647,
            "unit": "ns/iter",
            "extra": "iterations: 97045\ncpu: 8471.955278479058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7853.728480193711,
            "unit": "ns/iter",
            "extra": "iterations: 98177\ncpu: 7853.444289395683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27771.94191052915,
            "unit": "ns/iter",
            "extra": "iterations: 29730\ncpu: 27770.13790783718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 244082.96228477906,
            "unit": "ns/iter",
            "extra": "iterations: 3659\ncpu: 244073.5720142112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 185605.70259906334,
            "unit": "ns/iter",
            "extra": "iterations: 4694\ncpu: 185599.31827865363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 180798.58959169517,
            "unit": "ns/iter",
            "extra": "iterations: 4727\ncpu: 180794.73238840653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 184971.32529609627,
            "unit": "ns/iter",
            "extra": "iterations: 4728\ncpu: 184966.34940778348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 96586.95658880161,
            "unit": "ns/iter",
            "extra": "iterations: 9076\ncpu: 96584.02379903031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 176617.74686363395,
            "unit": "ns/iter",
            "extra": "iterations: 4942\ncpu: 176610.68393363035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5624.36720674118,
            "unit": "ns/iter",
            "extra": "iterations: 144548\ncpu: 5624.212026454865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 26611.107549585355,
            "unit": "ns/iter",
            "extra": "iterations: 31260\ncpu: 26610.339091490754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 21110.19518175905,
            "unit": "ns/iter",
            "extra": "iterations: 39558\ncpu: 21109.717377016088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20815.52472767981,
            "unit": "ns/iter",
            "extra": "iterations: 39935\ncpu: 20814.89169901091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20224.653888737656,
            "unit": "ns/iter",
            "extra": "iterations: 40643\ncpu: 20222.953522131782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 43977.81988100962,
            "unit": "ns/iter",
            "extra": "iterations: 18993\ncpu: 43976.03854051483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 254938.03860779497,
            "unit": "ns/iter",
            "extra": "iterations: 3419\ncpu: 254923.5156478502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 197850.4965722267,
            "unit": "ns/iter",
            "extra": "iterations: 4376\ncpu: 197842.34460694715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 197946.18518519241,
            "unit": "ns/iter",
            "extra": "iterations: 4401\ncpu: 197938.01408770768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 196668.61452893607,
            "unit": "ns/iter",
            "extra": "iterations: 4405\ncpu: 196662.7468785477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 108049.15636635662,
            "unit": "ns/iter",
            "extra": "iterations: 8058\ncpu: 108044.96152891598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 187857.13120104265,
            "unit": "ns/iter",
            "extra": "iterations: 4596\ncpu: 187853.5465622273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 788263.7267490363,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 788222.6337448545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 438572.44928249234,
            "unit": "ns/iter",
            "extra": "iterations: 2021\ncpu: 438542.2068283049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1893.4555603262543,
            "unit": "ns/iter",
            "extra": "iterations: 426207\ncpu: 1893.3405598688012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 8905.477292343061,
            "unit": "ns/iter",
            "extra": "iterations: 91533\ncpu: 8905.158795188643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7082.961212499532,
            "unit": "ns/iter",
            "extra": "iterations: 115398\ncpu: 7082.773531603653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7247.217014513805,
            "unit": "ns/iter",
            "extra": "iterations: 113891\ncpu: 7247.02215276009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7080.475557206024,
            "unit": "ns/iter",
            "extra": "iterations: 115801\ncpu: 7080.092572602978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 27275.698108250355,
            "unit": "ns/iter",
            "extra": "iterations: 30448\ncpu: 27275.584603257947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 244016.2576805984,
            "unit": "ns/iter",
            "extra": "iterations: 3613\ncpu: 244006.89177968394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 184424.99646715887,
            "unit": "ns/iter",
            "extra": "iterations: 4812\ncpu: 184420.1995012473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 184089.5261186222,
            "unit": "ns/iter",
            "extra": "iterations: 4805\ncpu: 184077.27367325712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 182595.79341565113,
            "unit": "ns/iter",
            "extra": "iterations: 4860\ncpu: 182589.19753086535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 95168.27733275275,
            "unit": "ns/iter",
            "extra": "iterations: 9238\ncpu: 95162.44858194394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 176549.54908584352,
            "unit": "ns/iter",
            "extra": "iterations: 5032\ncpu: 176544.45548489675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 185.58290078253583,
            "unit": "ns/iter",
            "extra": "iterations: 3809379\ncpu: 185.5783317963383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1410.8604166080345,
            "unit": "ns/iter",
            "extra": "iterations: 498118\ncpu: 1410.8371911876343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1145.798612908792,
            "unit": "ns/iter",
            "extra": "iterations: 540844\ncpu: 1145.7150305818327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1144.5923630620275,
            "unit": "ns/iter",
            "extra": "iterations: 611554\ncpu: 1144.5304911749452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 817.9710519180605,
            "unit": "ns/iter",
            "extra": "iterations: 851939\ncpu: 817.9363780740164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9299.985544608764,
            "unit": "ns/iter",
            "extra": "iterations: 76027\ncpu: 9299.330501006263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 10486.154786794204,
            "unit": "ns/iter",
            "extra": "iterations: 66485\ncpu: 10485.966759419493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2575.0663238353827,
            "unit": "ns/iter",
            "extra": "iterations: 270687\ncpu: 2574.9673977693838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2593.726162928581,
            "unit": "ns/iter",
            "extra": "iterations: 269664\ncpu: 2593.6828794351295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2588.711640750977,
            "unit": "ns/iter",
            "extra": "iterations: 269785\ncpu: 2588.6350241859427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4892.65652666493,
            "unit": "ns/iter",
            "extra": "iterations: 142998\ncpu: 4892.631365473621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4960.891756986668,
            "unit": "ns/iter",
            "extra": "iterations: 141441\ncpu: 4960.767387108446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1915.797465463059,
            "unit": "ns/iter",
            "extra": "iterations: 363380\ncpu: 1915.7903572018213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10141.246411726495,
            "unit": "ns/iter",
            "extra": "iterations: 68905\ncpu: 10140.940425223182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8140.6264475063,
            "unit": "ns/iter",
            "extra": "iterations: 86269\ncpu: 8140.496586259334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8119.938098269263,
            "unit": "ns/iter",
            "extra": "iterations: 86395\ncpu: 8119.695584235216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8079.7090486060615,
            "unit": "ns/iter",
            "extra": "iterations: 86389\ncpu: 8079.305235620223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18816.026173238246,
            "unit": "ns/iter",
            "extra": "iterations: 37290\ncpu: 18815.25341914724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51585.44820981466,
            "unit": "ns/iter",
            "extra": "iterations: 13574\ncpu: 51583.37262413455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41948.28013300314,
            "unit": "ns/iter",
            "extra": "iterations: 16842\ncpu: 41947.67842299035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 41550.96683553487,
            "unit": "ns/iter",
            "extra": "iterations: 16976\ncpu: 41549.98821866234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 40805.81526789294,
            "unit": "ns/iter",
            "extra": "iterations: 17003\ncpu: 40805.19908251535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24689.95768019508,
            "unit": "ns/iter",
            "extra": "iterations: 28261\ncpu: 24689.10512720697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40792.3440228108,
            "unit": "ns/iter",
            "extra": "iterations: 17182\ncpu: 40790.839250377605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2231.7331354491043,
            "unit": "ns/iter",
            "extra": "iterations: 315336\ncpu: 2231.6982520232596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11455.920903583563,
            "unit": "ns/iter",
            "extra": "iterations: 60736\ncpu: 11455.74453371976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 9767.861711225187,
            "unit": "ns/iter",
            "extra": "iterations: 71329\ncpu: 9767.274180207147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9774.85473766024,
            "unit": "ns/iter",
            "extra": "iterations: 71987\ncpu: 9774.69126370035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9568.714965374009,
            "unit": "ns/iter",
            "extra": "iterations: 73356\ncpu: 9567.570478215772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 18625.49809662963,
            "unit": "ns/iter",
            "extra": "iterations: 37565\ncpu: 18624.876880074742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51117.696390496625,
            "unit": "ns/iter",
            "extra": "iterations: 13603\ncpu: 51115.70976990415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41847.03357804704,
            "unit": "ns/iter",
            "extra": "iterations: 16618\ncpu: 41846.804669635196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 40996.846499262705,
            "unit": "ns/iter",
            "extra": "iterations: 16925\ncpu: 40995.787296898394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40592.96151371581,
            "unit": "ns/iter",
            "extra": "iterations: 17097\ncpu: 40592.79990641641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25535.798880039674,
            "unit": "ns/iter",
            "extra": "iterations: 27501\ncpu: 25535.158721501146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41756.65928891371,
            "unit": "ns/iter",
            "extra": "iterations: 16988\ncpu: 41755.409700965436 ns\nthreads: 1"
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
        "date": 1705955090837,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 539.8915476088363,
            "unit": "ns/iter",
            "extra": "iterations: 1291599\ncpu: 539.8781665207235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5756.544253101159,
            "unit": "ns/iter",
            "extra": "iterations: 141572\ncpu: 5756.511174526035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9882.208608237554,
            "unit": "ns/iter",
            "extra": "iterations: 86545\ncpu: 9882.249696689585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14561.816023584752,
            "unit": "ns/iter",
            "extra": "iterations: 58002\ncpu: 14561.887521119961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 19026.662323710952,
            "unit": "ns/iter",
            "extra": "iterations: 43749\ncpu: 19026.240599785127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 23789.739601398116,
            "unit": "ns/iter",
            "extra": "iterations: 35173\ncpu: 23789.349785346705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 28149.30464360891,
            "unit": "ns/iter",
            "extra": "iterations: 29546\ncpu: 28148.88309754282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 32719.429355331824,
            "unit": "ns/iter",
            "extra": "iterations: 25331\ncpu: 32718.964904662243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 37616.68615924386,
            "unit": "ns/iter",
            "extra": "iterations: 22795\ncpu: 37616.582583900024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 532.7658429997483,
            "unit": "ns/iter",
            "extra": "iterations: 1350991\ncpu: 532.7610620648105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 405.5997117479317,
            "unit": "ns/iter",
            "extra": "iterations: 1722104\ncpu: 405.6014619326126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 409.3429304921837,
            "unit": "ns/iter",
            "extra": "iterations: 1711965\ncpu: 409.3403194574662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 406.4474333279777,
            "unit": "ns/iter",
            "extra": "iterations: 1743386\ncpu: 406.4497477896455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 855.8141627998349,
            "unit": "ns/iter",
            "extra": "iterations: 799743\ncpu: 855.799175485126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1715.8151246261316,
            "unit": "ns/iter",
            "extra": "iterations: 466114\ncpu: 1715.7952775501292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9835.818988788344,
            "unit": "ns/iter",
            "extra": "iterations: 79647\ncpu: 9835.671148944713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7152.47544597659,
            "unit": "ns/iter",
            "extra": "iterations: 113403\ncpu: 7152.51801098739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7430.085518382745,
            "unit": "ns/iter",
            "extra": "iterations: 111134\ncpu: 7430.053808915372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7371.173836515159,
            "unit": "ns/iter",
            "extra": "iterations: 109649\ncpu: 7371.143375680564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 28111.933683319014,
            "unit": "ns/iter",
            "extra": "iterations: 29525\ncpu: 28111.77984758673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 242747.8227030077,
            "unit": "ns/iter",
            "extra": "iterations: 3559\ncpu: 242746.9513908401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 185449.9328873549,
            "unit": "ns/iter",
            "extra": "iterations: 4634\ncpu: 185448.44626672444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 184565.71419285363,
            "unit": "ns/iter",
            "extra": "iterations: 4615\ncpu: 184563.4019501625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 189580.59715025927,
            "unit": "ns/iter",
            "extra": "iterations: 4632\ncpu: 189576.87823834203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 95010.13918438918,
            "unit": "ns/iter",
            "extra": "iterations: 9024\ncpu: 95007.33599290763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 181253.35672036913,
            "unit": "ns/iter",
            "extra": "iterations: 4903\ncpu: 181247.8686518457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5650.509331113215,
            "unit": "ns/iter",
            "extra": "iterations: 142909\ncpu: 5650.327131251356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 25733.798300827457,
            "unit": "ns/iter",
            "extra": "iterations: 32251\ncpu: 25732.696660568632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20136.215730771626,
            "unit": "ns/iter",
            "extra": "iterations: 41422\ncpu: 20135.650137608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 19969.440019400998,
            "unit": "ns/iter",
            "extra": "iterations: 41230\ncpu: 19968.5301964589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 19533.581106781276,
            "unit": "ns/iter",
            "extra": "iterations: 42068\ncpu: 19532.468859941077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45272.088872171,
            "unit": "ns/iter",
            "extra": "iterations: 18611\ncpu: 45269.888775455605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 256738.0737704925,
            "unit": "ns/iter",
            "extra": "iterations: 3416\ncpu: 256725.6147540978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 198475.0722398969,
            "unit": "ns/iter",
            "extra": "iterations: 4402\ncpu: 198471.60381644688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 198303.75646846867,
            "unit": "ns/iter",
            "extra": "iterations: 4406\ncpu: 198304.65274625632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 197691.61704055147,
            "unit": "ns/iter",
            "extra": "iterations: 4413\ncpu: 197690.66394742724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 107995.83302435186,
            "unit": "ns/iter",
            "extra": "iterations: 8091\ncpu: 107995.08095414657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 188794.36048790047,
            "unit": "ns/iter",
            "extra": "iterations: 4591\ncpu: 188791.1783925063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 787862.5432810907,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 787853.998351193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 444172.1831831451,
            "unit": "ns/iter",
            "extra": "iterations: 1998\ncpu: 444158.35835836065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1880.8695089507833,
            "unit": "ns/iter",
            "extra": "iterations: 429631\ncpu: 1880.8777765105426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 10142.478265646598,
            "unit": "ns/iter",
            "extra": "iterations: 81921\ncpu: 10142.44577092564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7523.909447428534,
            "unit": "ns/iter",
            "extra": "iterations: 110411\ncpu: 7523.868092853087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 7665.09065330848,
            "unit": "ns/iter",
            "extra": "iterations: 108402\ncpu: 7665.127027176673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7930.478167742529,
            "unit": "ns/iter",
            "extra": "iterations: 104112\ncpu: 7930.444137083187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 28260.855851446,
            "unit": "ns/iter",
            "extra": "iterations: 30642\ncpu: 28260.82174792756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 241749.60131436825,
            "unit": "ns/iter",
            "extra": "iterations: 3652\ncpu: 241748.3570646228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 183807.26419396375,
            "unit": "ns/iter",
            "extra": "iterations: 4826\ncpu: 183805.7811852464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 184750.17547169034,
            "unit": "ns/iter",
            "extra": "iterations: 4770\ncpu: 184748.63731656162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 181826.87357983307,
            "unit": "ns/iter",
            "extra": "iterations: 4841\ncpu: 181827.68023135717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 94983.3173327522,
            "unit": "ns/iter",
            "extra": "iterations: 9208\ncpu: 94982.6889661165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 175211.0619398491,
            "unit": "ns/iter",
            "extra": "iterations: 5021\ncpu: 175211.8103963358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 185.581406244656,
            "unit": "ns/iter",
            "extra": "iterations: 3777849\ncpu: 185.57883070498605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1420.4992819491795,
            "unit": "ns/iter",
            "extra": "iterations: 492305\ncpu: 1420.478361991046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1098.117894218536,
            "unit": "ns/iter",
            "extra": "iterations: 633551\ncpu: 1098.091234959775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1081.0060536922376,
            "unit": "ns/iter",
            "extra": "iterations: 646052\ncpu: 1080.95617690217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 818.825267057703,
            "unit": "ns/iter",
            "extra": "iterations: 854029\ncpu: 818.7986590619256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9125.820778883013,
            "unit": "ns/iter",
            "extra": "iterations: 76905\ncpu: 9125.524998374649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11382.46125917784,
            "unit": "ns/iter",
            "extra": "iterations: 61421\ncpu: 11382.001269923987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2555.322965020407,
            "unit": "ns/iter",
            "extra": "iterations: 267128\ncpu: 2555.318049773896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2612.7465934854076,
            "unit": "ns/iter",
            "extra": "iterations: 267282\ncpu: 2612.713538509887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2560.6762145681123,
            "unit": "ns/iter",
            "extra": "iterations: 271578\ncpu: 2560.632304531286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4873.938743067045,
            "unit": "ns/iter",
            "extra": "iterations: 142792\ncpu: 4873.958625133047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4900.008971153434,
            "unit": "ns/iter",
            "extra": "iterations: 142791\ncpu: 4899.916661414224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1936.736278745411,
            "unit": "ns/iter",
            "extra": "iterations: 318484\ncpu: 1936.743133093037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 9976.170390343643,
            "unit": "ns/iter",
            "extra": "iterations: 70092\ncpu: 9976.112823146805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8096.531407892324,
            "unit": "ns/iter",
            "extra": "iterations: 86491\ncpu: 8096.502526274413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8038.200719491194,
            "unit": "ns/iter",
            "extra": "iterations: 86728\ncpu: 8038.152615072408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 7990.768804551458,
            "unit": "ns/iter",
            "extra": "iterations: 87532\ncpu: 7990.711968194515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18592.19227917631,
            "unit": "ns/iter",
            "extra": "iterations: 37768\ncpu: 18592.096483795645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51233.06832389298,
            "unit": "ns/iter",
            "extra": "iterations: 13597\ncpu: 51233.29410899511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41110.20432021516,
            "unit": "ns/iter",
            "extra": "iterations: 16851\ncpu: 41109.88665361086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 40910.835336183925,
            "unit": "ns/iter",
            "extra": "iterations: 17059\ncpu: 40910.52230494185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 40805.333607469795,
            "unit": "ns/iter",
            "extra": "iterations: 17023\ncpu: 40804.73477060382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24708.59579719712,
            "unit": "ns/iter",
            "extra": "iterations: 28362\ncpu: 24708.328044567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40662.61866605548,
            "unit": "ns/iter",
            "extra": "iterations: 17347\ncpu: 40662.39695624574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 1948.4804653752035,
            "unit": "ns/iter",
            "extra": "iterations: 364609\ncpu: 1948.4678107232585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11123.39917570996,
            "unit": "ns/iter",
            "extra": "iterations: 62842\ncpu: 11123.337895038438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8738.65910313303,
            "unit": "ns/iter",
            "extra": "iterations: 79945\ncpu: 8738.601538557687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9063.817307071453,
            "unit": "ns/iter",
            "extra": "iterations: 77425\ncpu: 9063.718437197324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 9543.753526121967,
            "unit": "ns/iter",
            "extra": "iterations: 73310\ncpu: 9543.718455872398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 19910.346715432235,
            "unit": "ns/iter",
            "extra": "iterations: 34997\ncpu: 19910.46089664828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 50954.730777649165,
            "unit": "ns/iter",
            "extra": "iterations: 13695\ncpu: 50954.3994158446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 41938.822059797014,
            "unit": "ns/iter",
            "extra": "iterations: 16691\ncpu: 41938.45186028428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 42002.7088783906,
            "unit": "ns/iter",
            "extra": "iterations: 16512\ncpu: 42002.967538759345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40414.10787273528,
            "unit": "ns/iter",
            "extra": "iterations: 17224\ncpu: 40414.311425916814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 25629.3387716268,
            "unit": "ns/iter",
            "extra": "iterations: 27337\ncpu: 25629.216812378512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41550.24821439456,
            "unit": "ns/iter",
            "extra": "iterations: 16941\ncpu: 41550.020659937356 ns\nthreads: 1"
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
        "date": 1705957101971,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 523.4452388318977,
            "unit": "ns/iter",
            "extra": "iterations: 1347789\ncpu: 523.411231283235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5010.199189999867,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5010.056999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 9631.553984546628,
            "unit": "ns/iter",
            "extra": "iterations: 85932\ncpu: 9630.728948470882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 14489.441259221083,
            "unit": "ns/iter",
            "extra": "iterations: 58290\ncpu: 14489.227997941327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 18669.899320004806,
            "unit": "ns/iter",
            "extra": "iterations: 43971\ncpu: 18669.5617566123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 23755.554261722857,
            "unit": "ns/iter",
            "extra": "iterations: 35725\ncpu: 23755.154653603924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 27613.20356976966,
            "unit": "ns/iter",
            "extra": "iterations: 30142\ncpu: 27611.807444761474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 32638.421477699296,
            "unit": "ns/iter",
            "extra": "iterations: 25878\ncpu: 32636.614112373445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 36978.330823815246,
            "unit": "ns/iter",
            "extra": "iterations: 23112\ncpu: 36976.92973347178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 495.25733407547847,
            "unit": "ns/iter",
            "extra": "iterations: 1408562\ncpu: 495.2427369189285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 397.22512655615446,
            "unit": "ns/iter",
            "extra": "iterations: 1777076\ncpu: 397.21919602763245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 399.0298237235413,
            "unit": "ns/iter",
            "extra": "iterations: 1754744\ncpu: 399.00766151643757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 388.27596887473294,
            "unit": "ns/iter",
            "extra": "iterations: 1807019\ncpu: 388.2668084840288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 841.5622387645682,
            "unit": "ns/iter",
            "extra": "iterations: 830190\ncpu: 841.536274828653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 1712.1002550413134,
            "unit": "ns/iter",
            "extra": "iterations: 462670\ncpu: 1712.0487604556174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10321.745928951836,
            "unit": "ns/iter",
            "extra": "iterations: 79832\ncpu: 10321.52144503455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 7541.920644084408,
            "unit": "ns/iter",
            "extra": "iterations: 109116\ncpu: 7541.5851020931905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 7906.336480801896,
            "unit": "ns/iter",
            "extra": "iterations: 103893\ncpu: 7906.15152127669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 7988.327684115591,
            "unit": "ns/iter",
            "extra": "iterations: 101607\ncpu: 7988.143533417985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 27812.607879297528,
            "unit": "ns/iter",
            "extra": "iterations: 29825\ncpu: 27811.550712489454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 237107.4884667609,
            "unit": "ns/iter",
            "extra": "iterations: 3685\ncpu: 237100.2170963364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 184824.8388595529,
            "unit": "ns/iter",
            "extra": "iterations: 4735\ncpu: 184817.52903907083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 179703.34683544326,
            "unit": "ns/iter",
            "extra": "iterations: 4740\ncpu: 179695.2320675102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 184693.31771162018,
            "unit": "ns/iter",
            "extra": "iterations: 4737\ncpu: 184688.51593835742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 95236.47472551643,
            "unit": "ns/iter",
            "extra": "iterations: 9199\ncpu: 95233.68844439623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 176216.34361143384,
            "unit": "ns/iter",
            "extra": "iterations: 4962\ncpu: 176212.71664651314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 5393.100220498586,
            "unit": "ns/iter",
            "extra": "iterations: 150568\ncpu: 5393.023750066405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 27287.983667815693,
            "unit": "ns/iter",
            "extra": "iterations: 31043\ncpu: 27286.360854298815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 20449.165031480847,
            "unit": "ns/iter",
            "extra": "iterations: 40974\ncpu: 20448.547859618364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 20513.916214957204,
            "unit": "ns/iter",
            "extra": "iterations: 40771\ncpu: 20513.24961369598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 20075.11443551964,
            "unit": "ns/iter",
            "extra": "iterations: 41578\ncpu: 20074.166626581384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 45281.14315385515,
            "unit": "ns/iter",
            "extra": "iterations: 18777\ncpu: 45279.549448793674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 255215.53360726833,
            "unit": "ns/iter",
            "extra": "iterations: 3407\ncpu: 255204.4320516581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 204698.05891683995,
            "unit": "ns/iter",
            "extra": "iterations: 4413\ncpu: 204688.73782007716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 198565.56364052647,
            "unit": "ns/iter",
            "extra": "iterations: 4384\ncpu: 198560.21897810258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 196942.74853669334,
            "unit": "ns/iter",
            "extra": "iterations: 4442\ncpu: 196932.93561458922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 106903.64801179276,
            "unit": "ns/iter",
            "extra": "iterations: 8148\ncpu: 106901.44820814887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 185781.24071290228,
            "unit": "ns/iter",
            "extra": "iterations: 4657\ncpu: 185770.3027700234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 776855.941707775,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 776841.4614121509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 438708.44560877845,
            "unit": "ns/iter",
            "extra": "iterations: 2004\ncpu: 438688.4231536931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 1870.0862262508251,
            "unit": "ns/iter",
            "extra": "iterations: 426703\ncpu: 1870.0611432307653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 9088.656223407379,
            "unit": "ns/iter",
            "extra": "iterations: 90489\ncpu: 9088.142205129927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 7360.903892221257,
            "unit": "ns/iter",
            "extra": "iterations: 111042\ncpu: 7360.795915059167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 6889.164072038195,
            "unit": "ns/iter",
            "extra": "iterations: 118771\ncpu: 6888.792718761327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 7270.50574223755,
            "unit": "ns/iter",
            "extra": "iterations: 112848\ncpu: 7270.270629519309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 26734.903759640456,
            "unit": "ns/iter",
            "extra": "iterations: 31120\ncpu: 26733.65038560408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 243374.83493018564,
            "unit": "ns/iter",
            "extra": "iterations: 3653\ncpu: 243370.76375581778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 182824.8022797989,
            "unit": "ns/iter",
            "extra": "iterations: 4825\ncpu: 182813.0569948183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 182842.8616274279,
            "unit": "ns/iter",
            "extra": "iterations: 4842\ncpu: 182839.44650970565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 181093.4889570737,
            "unit": "ns/iter",
            "extra": "iterations: 4890\ncpu: 181082.9856850718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 93379.19699072126,
            "unit": "ns/iter",
            "extra": "iterations: 9371\ncpu: 93377.7718493223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 175039.16571203351,
            "unit": "ns/iter",
            "extra": "iterations: 5063\ncpu: 175027.41457633785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 188.86458742913533,
            "unit": "ns/iter",
            "extra": "iterations: 3639411\ncpu: 188.8632803494853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 1425.0359820119215,
            "unit": "ns/iter",
            "extra": "iterations: 508115\ncpu: 1424.9845015400147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 1103.6593260398151,
            "unit": "ns/iter",
            "extra": "iterations: 635913\ncpu: 1103.6325723801765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 1092.0897952068922,
            "unit": "ns/iter",
            "extra": "iterations: 642551\ncpu: 1092.0386086084964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 821.5830168035613,
            "unit": "ns/iter",
            "extra": "iterations: 852737\ncpu: 821.5588159068956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 9188.110724591477,
            "unit": "ns/iter",
            "extra": "iterations: 75891\ncpu: 9187.843090748574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 11507.211483362915,
            "unit": "ns/iter",
            "extra": "iterations: 61428\ncpu: 11506.532851468442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 2558.5287147499944,
            "unit": "ns/iter",
            "extra": "iterations: 271916\ncpu: 2558.493064034466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 2588.563246395288,
            "unit": "ns/iter",
            "extra": "iterations: 271304\ncpu: 2588.393831274119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 2568.2343645730343,
            "unit": "ns/iter",
            "extra": "iterations: 266734\ncpu: 2568.1424190391726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 4854.208999226136,
            "unit": "ns/iter",
            "extra": "iterations: 143479\ncpu: 4854.051812460321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 4877.099469309241,
            "unit": "ns/iter",
            "extra": "iterations: 141702\ncpu: 4876.924814046403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 1908.3384632394122,
            "unit": "ns/iter",
            "extra": "iterations: 361800\ncpu: 1908.2827529021563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 10036.646596179595,
            "unit": "ns/iter",
            "extra": "iterations: 69422\ncpu: 10036.504278182721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 8148.251703686884,
            "unit": "ns/iter",
            "extra": "iterations: 85990\ncpu: 8147.891615304137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 8039.121681826794,
            "unit": "ns/iter",
            "extra": "iterations: 86192\ncpu: 8038.887599777172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 8011.388175278046,
            "unit": "ns/iter",
            "extra": "iterations: 87427\ncpu: 8010.941699932451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 18951.211309204693,
            "unit": "ns/iter",
            "extra": "iterations: 37244\ncpu: 18950.641714101355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 51002.27307242852,
            "unit": "ns/iter",
            "extra": "iterations: 13696\ncpu: 51001.59170560679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 41228.876396564745,
            "unit": "ns/iter",
            "extra": "iterations: 17006\ncpu: 41226.75526284889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 40904.11176297996,
            "unit": "ns/iter",
            "extra": "iterations: 17045\ncpu: 40902.645937224836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 41128.93090267616,
            "unit": "ns/iter",
            "extra": "iterations: 17005\ncpu: 41126.18641576035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 24613.74225065086,
            "unit": "ns/iter",
            "extra": "iterations: 28454\ncpu: 24612.342728614614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 40292.565099976506,
            "unit": "ns/iter",
            "extra": "iterations: 17404\ncpu: 40289.44495518308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 2209.7584526406968,
            "unit": "ns/iter",
            "extra": "iterations: 319693\ncpu: 2209.613285245529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 11321.064235323338,
            "unit": "ns/iter",
            "extra": "iterations: 61804\ncpu: 11320.75755614518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 8777.320462841686,
            "unit": "ns/iter",
            "extra": "iterations: 80546\ncpu: 8777.105008318358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 9224.397362822016,
            "unit": "ns/iter",
            "extra": "iterations: 76142\ncpu: 9223.99201491947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 8516.955413315278,
            "unit": "ns/iter",
            "extra": "iterations: 82177\ncpu: 8516.410917896717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 20080.261029519977,
            "unit": "ns/iter",
            "extra": "iterations: 34793\ncpu: 20079.064754404782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 51476.03767987139,
            "unit": "ns/iter",
            "extra": "iterations: 13482\ncpu: 51472.630173565136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 42209.32318176724,
            "unit": "ns/iter",
            "extra": "iterations: 16582\ncpu: 42206.25376914722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 39954.53301403027,
            "unit": "ns/iter",
            "extra": "iterations: 17538\ncpu: 39951.82460941943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 40912.556792085845,
            "unit": "ns/iter",
            "extra": "iterations: 16983\ncpu: 40909.3623034797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 24388.956593691626,
            "unit": "ns/iter",
            "extra": "iterations: 29005\ncpu: 24387.35045681782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 41147.07594273432,
            "unit": "ns/iter",
            "extra": "iterations: 17184\ncpu: 41145.62383612639 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}