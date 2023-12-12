window.BENCHMARK_DATA = {
  "lastUpdate": 1702398845809,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-8 18.04 Debug c++-17": [
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702398845446,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7710.757125493769,
            "unit": "ns/iter",
            "extra": "iterations: 91327\ncpu: 7710.770089896745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55310.70349999822,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55306.62 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101661.82241317652,
            "unit": "ns/iter",
            "extra": "iterations: 8379\ncpu: 101656.20002386923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 147554.92293200982,
            "unit": "ns/iter",
            "extra": "iterations: 5839\ncpu: 147549.80304846715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 193951.60768542832,
            "unit": "ns/iter",
            "extra": "iterations: 4476\ncpu: 193946.3583556746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 239798.2296849096,
            "unit": "ns/iter",
            "extra": "iterations: 3618\ncpu: 239789.6351575455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 286579.19102606585,
            "unit": "ns/iter",
            "extra": "iterations: 3031\ncpu: 286575.05773672066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 332235.331034495,
            "unit": "ns/iter",
            "extra": "iterations: 2610\ncpu: 332220.45977011503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 378124.8400871574,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 378117.21132897626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6300.487515397949,
            "unit": "ns/iter",
            "extra": "iterations: 111217\ncpu: 6286.086659413585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5190.664228576172,
            "unit": "ns/iter",
            "extra": "iterations: 135762\ncpu: 5190.621086902075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5157.835350379394,
            "unit": "ns/iter",
            "extra": "iterations: 136338\ncpu: 5157.657439598641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5077.024264017713,
            "unit": "ns/iter",
            "extra": "iterations: 138930\ncpu: 5076.94522421363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8825.116769547334,
            "unit": "ns/iter",
            "extra": "iterations: 79704\ncpu: 8825.037639265294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30291.2752211727,
            "unit": "ns/iter",
            "extra": "iterations: 26902\ncpu: 30290.75161698016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 147535.55322080746,
            "unit": "ns/iter",
            "extra": "iterations: 5806\ncpu: 147533.0520151568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 115899.40203528205,
            "unit": "ns/iter",
            "extra": "iterations: 7370\ncpu: 115897.2184531885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 114393.75472710234,
            "unit": "ns/iter",
            "extra": "iterations: 7457\ncpu: 114393.01327611656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 112335.89472990467,
            "unit": "ns/iter",
            "extra": "iterations: 7590\ncpu: 112332.00263504629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 327201.6480565399,
            "unit": "ns/iter",
            "extra": "iterations: 2830\ncpu: 327194.41696113156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1806128.7898833316,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1806081.1284046662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1402137.7579425012,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1402092.1331316174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1397549.1909774146,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1397525.563909778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1382405.0820894728,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1382360.447761197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 779093.0486985581,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 779080.1847187247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1364665.6872247208,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1364613.5095447886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37060.7765383228,
            "unit": "ns/iter",
            "extra": "iterations: 22232\ncpu: 37060.120546959384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 171762.7222775214,
            "unit": "ns/iter",
            "extra": "iterations: 5023\ncpu: 171757.77423850313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 138251.89480416212,
            "unit": "ns/iter",
            "extra": "iterations: 6255\ncpu: 138248.52118305364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 134348.83609375168,
            "unit": "ns/iter",
            "extra": "iterations: 6400\ncpu: 134342.39062499965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132026.78283605218,
            "unit": "ns/iter",
            "extra": "iterations: 6502\ncpu: 132022.3777299293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 298820.6117809022,
            "unit": "ns/iter",
            "extra": "iterations: 2903\ncpu: 298808.37065105047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1819062.992156847,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1818999.215686276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1439636.1488372153,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1439562.945736442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1464812.2901235183,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1464729.0123456703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1407728.5212121035,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1407648.1818181807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 805742.2081526521,
            "unit": "ns/iter",
            "extra": "iterations: 1153\ncpu: 805724.8915871676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1388175.9044776498,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1388113.2835820895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6537429.762237674,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6537154.545454542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2970475.5318471217,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2970409.235668802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28768.30468613221,
            "unit": "ns/iter",
            "extra": "iterations: 28531\ncpu: 28767.29872769961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 138754.44087237102,
            "unit": "ns/iter",
            "extra": "iterations: 6190\ncpu: 138752.31017770554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107403.91766917202,
            "unit": "ns/iter",
            "extra": "iterations: 7980\ncpu: 107401.0776942352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 108493.67861650766,
            "unit": "ns/iter",
            "extra": "iterations: 7922\ncpu: 108491.63090128702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105178.84183360034,
            "unit": "ns/iter",
            "extra": "iterations: 8137\ncpu: 105175.27344230123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 265670.1620795107,
            "unit": "ns/iter",
            "extra": "iterations: 3270\ncpu: 265664.8623853215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1806363.089320332,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1806320.1941747598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1406423.6410256703,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1406380.0904977324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1397524.4086826243,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1397477.2455089784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1378891.710059123,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1378869.822485208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 766760.2483552378,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 766733.2236842106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1353534.068214831,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1353503.7735849062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2908.0522246853034,
            "unit": "ns/iter",
            "extra": "iterations: 240461\ncpu: 2907.9231143512106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18794.805360457984,
            "unit": "ns/iter",
            "extra": "iterations: 37161\ncpu: 18794.284330346447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15114.02941494125,
            "unit": "ns/iter",
            "extra": "iterations: 46303\ncpu: 15113.437574239304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15104.98417203555,
            "unit": "ns/iter",
            "extra": "iterations: 48269\ncpu: 15104.644803082796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10907.189411800722,
            "unit": "ns/iter",
            "extra": "iterations: 64468\ncpu: 10906.69324315947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 94118.2026557208,
            "unit": "ns/iter",
            "extra": "iterations: 6326\ncpu: 94118.4950995892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121767.64486143693,
            "unit": "ns/iter",
            "extra": "iterations: 5702\ncpu: 121767.9936864264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30010.88874194496,
            "unit": "ns/iter",
            "extra": "iterations: 23441\ncpu: 30010.97649417683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30005.634306007232,
            "unit": "ns/iter",
            "extra": "iterations: 23372\ncpu: 30005.724798904754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29862.234233081934,
            "unit": "ns/iter",
            "extra": "iterations: 23451\ncpu: 29861.997356189633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59854.234816781565,
            "unit": "ns/iter",
            "extra": "iterations: 11707\ncpu: 59853.00247714994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55536.593007649244,
            "unit": "ns/iter",
            "extra": "iterations: 12671\ncpu: 55534.74074658666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21566.86652078883,
            "unit": "ns/iter",
            "extra": "iterations: 32447\ncpu: 21566.22183869065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 106401.40788072463,
            "unit": "ns/iter",
            "extra": "iterations: 6573\ncpu: 106396.3791267311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87165.87518685286,
            "unit": "ns/iter",
            "extra": "iterations: 8028\ncpu: 87166.14349775767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 86761.86716915549,
            "unit": "ns/iter",
            "extra": "iterations: 8093\ncpu: 86762.16483380795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 86714.09972779287,
            "unit": "ns/iter",
            "extra": "iterations: 8082\ncpu: 86711.25958920953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 149741.50867422842,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 149738.14521310964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 551314.9398663727,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 551292.4276169342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 426721.1898656588,
            "unit": "ns/iter",
            "extra": "iterations: 1638\ncpu: 426711.17216116894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 423363.9599756865,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 423350.57610672666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 421952.2654654117,
            "unit": "ns/iter",
            "extra": "iterations: 1665\ncpu: 421953.5135135075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 271079.8763045724,
            "unit": "ns/iter",
            "extra": "iterations: 2587\ncpu: 271074.6810977952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 415144.48693586193,
            "unit": "ns/iter",
            "extra": "iterations: 1684\ncpu: 415145.54631829646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21763.312891270398,
            "unit": "ns/iter",
            "extra": "iterations: 32107\ncpu: 21763.378702463582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107857.1500845772,
            "unit": "ns/iter",
            "extra": "iterations: 6503\ncpu: 107854.92849454212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88365.07460238063,
            "unit": "ns/iter",
            "extra": "iterations: 7922\ncpu: 88361.46175208152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88462.63997980156,
            "unit": "ns/iter",
            "extra": "iterations: 7919\ncpu: 88460.76524813824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87764.90078820025,
            "unit": "ns/iter",
            "extra": "iterations: 7993\ncpu: 87762.11685224464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 150708.22073722913,
            "unit": "ns/iter",
            "extra": "iterations: 4639\ncpu: 150708.73032981303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 516188.4627856251,
            "unit": "ns/iter",
            "extra": "iterations: 1357\ncpu: 516176.78703021695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 427940.087248306,
            "unit": "ns/iter",
            "extra": "iterations: 1639\ncpu: 427936.30262354465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 423247.822531801,
            "unit": "ns/iter",
            "extra": "iterations: 1651\ncpu: 423239.4912174475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 420230.2552552933,
            "unit": "ns/iter",
            "extra": "iterations: 1665\ncpu: 420221.14114114415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 269084.71038460935,
            "unit": "ns/iter",
            "extra": "iterations: 2600\ncpu: 269072.92307692696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 416837.76968970755,
            "unit": "ns/iter",
            "extra": "iterations: 1676\ncpu: 416826.61097851244 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}