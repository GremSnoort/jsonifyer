window.BENCHMARK_DATA = {
  "lastUpdate": 1702490349847,
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
      }
    ]
  }
}