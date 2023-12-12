window.BENCHMARK_DATA = {
  "lastUpdate": 1702409108896,
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
      },
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
          "id": "c96a03d62fd108220d1ee9e00340d51e289dfa36",
          "message": "Add compare for BMs, add parse data BMs",
          "timestamp": "2023-12-12T22:17:35+03:00",
          "tree_id": "f2fe56f9afc9ca6399f84dbb8347c53db7125ceb",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c96a03d62fd108220d1ee9e00340d51e289dfa36"
        },
        "date": 1702409108561,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7646.421056645845,
            "unit": "ns/iter",
            "extra": "iterations: 91781\ncpu: 7646.207820790797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55805.18749999896,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55803.64999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101392.45330607065,
            "unit": "ns/iter",
            "extra": "iterations: 5868\ncpu: 101389.38309475119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 147477.82882574628,
            "unit": "ns/iter",
            "extra": "iterations: 5842\ncpu: 147474.54638822316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 193765.8110712757,
            "unit": "ns/iter",
            "extra": "iterations: 4462\ncpu: 193762.147019274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 240355.24784902352,
            "unit": "ns/iter",
            "extra": "iterations: 3603\ncpu: 240347.68248681663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 285792.1504454121,
            "unit": "ns/iter",
            "extra": "iterations: 3031\ncpu: 285782.2170900692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 332310.1091186631,
            "unit": "ns/iter",
            "extra": "iterations: 2621\ncpu: 332307.36360167863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 380105.41437908064,
            "unit": "ns/iter",
            "extra": "iterations: 2295\ncpu: 380095.42483660136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6258.235763742768,
            "unit": "ns/iter",
            "extra": "iterations: 111353\ncpu: 6258.110693021286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5286.200881151161,
            "unit": "ns/iter",
            "extra": "iterations: 131192\ncpu: 5285.749893286172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5323.0357228661205,
            "unit": "ns/iter",
            "extra": "iterations: 133192\ncpu: 5322.978106793197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5220.168345849526,
            "unit": "ns/iter",
            "extra": "iterations: 134093\ncpu: 5219.980908772277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8775.1448058371,
            "unit": "ns/iter",
            "extra": "iterations: 79907\ncpu: 8774.850764013161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 28557.63759941281,
            "unit": "ns/iter",
            "extra": "iterations: 28543\ncpu: 28556.952667904552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 148845.93371508308,
            "unit": "ns/iter",
            "extra": "iterations: 5763\ncpu: 148842.87697379832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 115157.76603774175,
            "unit": "ns/iter",
            "extra": "iterations: 7420\ncpu: 115156.5229110512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 117555.67823820088,
            "unit": "ns/iter",
            "extra": "iterations: 7288\ncpu: 117552.14050493953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 110337.86086281089,
            "unit": "ns/iter",
            "extra": "iterations: 7719\ncpu: 110335.10817463385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 328055.74653886387,
            "unit": "ns/iter",
            "extra": "iterations: 2817\ncpu: 328045.97089101863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1769844.6857143391,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1769786.6666666633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1407960.9668175073,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1407912.8205128186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1416531.855182911,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1416429.420731708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1394734.7027027234,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1394665.7657657638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 773408.5709487834,
            "unit": "ns/iter",
            "extra": "iterations: 1191\ncpu: 773383.7111670858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1356687.4655929806,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1356588.8726207924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36123.27655468875,
            "unit": "ns/iter",
            "extra": "iterations: 22802\ncpu: 36121.156038944035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 167554.71542347057,
            "unit": "ns/iter",
            "extra": "iterations: 5148\ncpu: 167547.8243978246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 136434.21345817868,
            "unit": "ns/iter",
            "extra": "iterations: 6301\ncpu: 136425.59911125238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136727.2408887554,
            "unit": "ns/iter",
            "extra": "iterations: 6256\ncpu: 136720.6841432224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132390.44889779715,
            "unit": "ns/iter",
            "extra": "iterations: 6487\ncpu: 132381.51687991337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 299664.5454545444,
            "unit": "ns/iter",
            "extra": "iterations: 2882\ncpu: 299652.0471894521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1805457.98446593,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1805357.6699029114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1428140.986175125,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1428088.1720430057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1441750.4046511827,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1441684.8062015462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1429674.3655913975,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1429605.376344086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 796549.5368782206,
            "unit": "ns/iter",
            "extra": "iterations: 1166\ncpu: 796517.0668953679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1383038.5223214035,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1382975.5952381026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6489228.9097223785,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6488983.333333327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2991250.774919688,
            "unit": "ns/iter",
            "extra": "iterations: 311\ncpu: 2991043.0868167332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27173.583669555643,
            "unit": "ns/iter",
            "extra": "iterations: 30238\ncpu: 27172.541173358197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 136706.48103475396,
            "unit": "ns/iter",
            "extra": "iterations: 6301\ncpu: 136698.46056181542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107498.9279347143,
            "unit": "ns/iter",
            "extra": "iterations: 7965\ncpu: 107496.1456371629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 106604.882755193,
            "unit": "ns/iter",
            "extra": "iterations: 8043\ncpu: 106602.80989680406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 102410.35614474726,
            "unit": "ns/iter",
            "extra": "iterations: 8373\ncpu: 102408.43186432582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 265711.97578172607,
            "unit": "ns/iter",
            "extra": "iterations: 3262\ncpu: 265705.4874310254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1782318.072657749,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1782282.9827915828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1398622.6332335405,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1398564.520958075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1406640.8195489224,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1406564.66165414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1385344.4977711556,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1385274.2942050477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 763429.2600492077,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 763387.9409351943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1349574.416185004,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1349492.919075139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3048.5201613606314,
            "unit": "ns/iter",
            "extra": "iterations: 229548\ncpu: 3048.3772457176538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18790.18965192362,
            "unit": "ns/iter",
            "extra": "iterations: 37147\ncpu: 18789.374646674005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15135.058957156165,
            "unit": "ns/iter",
            "extra": "iterations: 47102\ncpu: 15127.616661712762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15408.603901537646,
            "unit": "ns/iter",
            "extra": "iterations: 45418\ncpu: 15407.56087894676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11207.898656331436,
            "unit": "ns/iter",
            "extra": "iterations: 62441\ncpu: 11207.330119632861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 93768.86925557817,
            "unit": "ns/iter",
            "extra": "iterations: 7442\ncpu: 93768.97339424916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 120554.01537663909,
            "unit": "ns/iter",
            "extra": "iterations: 5788\ncpu: 120552.48790601209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30386.71879060876,
            "unit": "ns/iter",
            "extra": "iterations: 23086\ncpu: 30386.745213549406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30561.93283031901,
            "unit": "ns/iter",
            "extra": "iterations: 23061\ncpu: 30561.627856554274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29942.8802052149,
            "unit": "ns/iter",
            "extra": "iterations: 23390\ncpu: 29942.368533561446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59918.937741519425,
            "unit": "ns/iter",
            "extra": "iterations: 11645\ncpu: 59914.11764705912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55699.12688052498,
            "unit": "ns/iter",
            "extra": "iterations: 12563\ncpu: 55695.34346891665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22289.610346040612,
            "unit": "ns/iter",
            "extra": "iterations: 31297\ncpu: 22288.02441128546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 107223.45326170634,
            "unit": "ns/iter",
            "extra": "iterations: 6515\ncpu: 107218.11204911758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88263.98617916675,
            "unit": "ns/iter",
            "extra": "iterations: 7959\ncpu: 88264.06583741741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88732.95040588395,
            "unit": "ns/iter",
            "extra": "iterations: 7884\ncpu: 88729.32521562761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 87930.85705305848,
            "unit": "ns/iter",
            "extra": "iterations: 7954\ncpu: 87926.67840080489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 156240.9459156235,
            "unit": "ns/iter",
            "extra": "iterations: 4456\ncpu: 156232.38330341235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 521172.98222225584,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 521150.7407407394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 438198.18061674736,
            "unit": "ns/iter",
            "extra": "iterations: 1589\ncpu: 438162.2404027695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 442102.62855340785,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 442081.3644977881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 429958.75414874015,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 429949.9692685885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 273019.31690141495,
            "unit": "ns/iter",
            "extra": "iterations: 2556\ncpu: 273017.13615023036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 427481.6882245508,
            "unit": "ns/iter",
            "extra": "iterations: 1639\ncpu: 427477.91336180555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22792.891676168147,
            "unit": "ns/iter",
            "extra": "iterations: 30695\ncpu: 22792.949991855632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107813.15642286862,
            "unit": "ns/iter",
            "extra": "iterations: 6508\ncpu: 107810.92501536566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89139.09395289645,
            "unit": "ns/iter",
            "extra": "iterations: 7855\ncpu: 89133.81285805191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89724.26089185037,
            "unit": "ns/iter",
            "extra": "iterations: 7804\ncpu: 89718.72116863202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89254.54256135301,
            "unit": "ns/iter",
            "extra": "iterations: 7824\ncpu: 89249.52709611472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 156664.96014330772,
            "unit": "ns/iter",
            "extra": "iterations: 4466\ncpu: 156663.41244962133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 521005.2146558182,
            "unit": "ns/iter",
            "extra": "iterations: 1351\ncpu: 520991.04367135465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 436145.9315920633,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 436138.6815920423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 432716.41315134807,
            "unit": "ns/iter",
            "extra": "iterations: 1612\ncpu: 432696.0918114221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 429729.408615388,
            "unit": "ns/iter",
            "extra": "iterations: 1625\ncpu: 429703.07692307694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 273662.4875292259,
            "unit": "ns/iter",
            "extra": "iterations: 2566\ncpu: 273649.1816056119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 425292.437082078,
            "unit": "ns/iter",
            "extra": "iterations: 1645\ncpu: 425262.5531914921 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}