window.BENCHMARK_DATA = {
  "lastUpdate": 1705573978870,
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
          "id": "a2fdd4a8b08935139af31fad37c86ca12b1dc63b",
          "message": "Add BMs; Setters Improve",
          "timestamp": "2023-12-12T23:14:54+03:00",
          "tree_id": "e41c2c9b1f31589e76e0363e3cfb6528364c4fdc",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2fdd4a8b08935139af31fad37c86ca12b1dc63b"
        },
        "date": 1702412562761,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7806.664702928928,
            "unit": "ns/iter",
            "extra": "iterations: 89625\ncpu: 7806.267224546724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54725.13230000118,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54723.34 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101523.05606812966,
            "unit": "ns/iter",
            "extra": "iterations: 8454\ncpu: 101520.7594038325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 147433.172336776,
            "unit": "ns/iter",
            "extra": "iterations: 5820\ncpu: 147428.43642611682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 193883.4977598491,
            "unit": "ns/iter",
            "extra": "iterations: 4464\ncpu: 193875.58243727588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 239688.9089903199,
            "unit": "ns/iter",
            "extra": "iterations: 3615\ncpu: 239677.8699861689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 284729.0111658509,
            "unit": "ns/iter",
            "extra": "iterations: 3045\ncpu: 284717.4384236454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 330054.57908745203,
            "unit": "ns/iter",
            "extra": "iterations: 2630\ncpu: 330037.26235741447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 376029.7030302978,
            "unit": "ns/iter",
            "extra": "iterations: 2310\ncpu: 376004.6320346318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6559.215080311989,
            "unit": "ns/iter",
            "extra": "iterations: 108141\ncpu: 6558.892556939552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5332.941937493366,
            "unit": "ns/iter",
            "extra": "iterations: 131634\ncpu: 5332.573651184342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5268.5237231106175,
            "unit": "ns/iter",
            "extra": "iterations: 132255\ncpu: 5268.483611205625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5366.423819660225,
            "unit": "ns/iter",
            "extra": "iterations: 130598\ncpu: 5366.066095958592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8822.74106144216,
            "unit": "ns/iter",
            "extra": "iterations: 79571\ncpu: 8822.156313229689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31713.647024661514,
            "unit": "ns/iter",
            "extra": "iterations: 25829\ncpu: 31712.56726934841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 154954.3786565553,
            "unit": "ns/iter",
            "extra": "iterations: 5538\ncpu: 154947.79703864214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 121237.61723503735,
            "unit": "ns/iter",
            "extra": "iterations: 7067\ncpu: 121232.70128767531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 122748.31821433512,
            "unit": "ns/iter",
            "extra": "iterations: 6989\ncpu: 122742.62412362301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 116734.1424668793,
            "unit": "ns/iter",
            "extra": "iterations: 7321\ncpu: 116727.75577106935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 323403.2838596497,
            "unit": "ns/iter",
            "extra": "iterations: 2850\ncpu: 323387.3684210527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1776889.5144508588,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1776806.9364161827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1421452.642201778,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1421355.3516819607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1425037.670245369,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1424978.834355829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1390079.2390977996,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1389988.87218045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 778661.6037256673,
            "unit": "ns/iter",
            "extra": "iterations: 1181\ncpu: 778625.9949195606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1360997.3338235442,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1360917.941176468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38297.00692025598,
            "unit": "ns/iter",
            "extra": "iterations: 21531\ncpu: 38296.69778458965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 179065.82700683616,
            "unit": "ns/iter",
            "extra": "iterations: 4821\ncpu: 179064.63389338308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 140424.60218918085,
            "unit": "ns/iter",
            "extra": "iterations: 6121\ncpu: 140422.25126613304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 142527.73937583022,
            "unit": "ns/iter",
            "extra": "iterations: 6024\ncpu: 142523.10756972086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 135735.22517814624,
            "unit": "ns/iter",
            "extra": "iterations: 6315\ncpu: 135728.7569279498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 305131.29883843765,
            "unit": "ns/iter",
            "extra": "iterations: 2841\ncpu: 305121.85850052774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1809747.70312492,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1809615.0390625037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1439975.8343653954,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1439898.4520123817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1444749.1767443297,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1444690.2325581487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1434072.6409861904,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1434005.54699538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 801434.6077921698,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 801408.831168832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1395686.799401085,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1395602.54491018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6540923.598591485,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6540713.38028167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2981562.2499999343,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2981433.6538461517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29790.508058108633,
            "unit": "ns/iter",
            "extra": "iterations: 27674\ncpu: 29789.072775890807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 151380.6990557931,
            "unit": "ns/iter",
            "extra": "iterations: 5825\ncpu: 151367.94849785458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 112372.94816556034,
            "unit": "ns/iter",
            "extra": "iterations: 7659\ncpu: 112367.99843321518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 113084.27750755522,
            "unit": "ns/iter",
            "extra": "iterations: 7607\ncpu: 113077.79676613605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 109003.36339319774,
            "unit": "ns/iter",
            "extra": "iterations: 7851\ncpu: 108998.89186090905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 263853.7182527389,
            "unit": "ns/iter",
            "extra": "iterations: 3205\ncpu: 263845.023400936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1797317.4431599616,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1797261.464354528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1407518.1402714634,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1407452.0361990992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1409765.2714931914,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1409699.5475113133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1383023.232592509,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1382948.4444444359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 765857.3122431849,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 765828.1018898953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1350822.1574343436,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1350769.3877551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2938.0675741511113,
            "unit": "ns/iter",
            "extra": "iterations: 238094\ncpu: 2937.921997194406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19335.96635612233,
            "unit": "ns/iter",
            "extra": "iterations: 36173\ncpu: 19334.813258507653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14979.597190698534,
            "unit": "ns/iter",
            "extra": "iterations: 46702\ncpu: 14979.013746734483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15016.407776583283,
            "unit": "ns/iter",
            "extra": "iterations: 46550\ncpu: 15016.053705692695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10551.268553211889,
            "unit": "ns/iter",
            "extra": "iterations: 66188\ncpu: 10551.160331177907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 95414.75197816674,
            "unit": "ns/iter",
            "extra": "iterations: 7330\ncpu: 95411.92360163736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 120891.88246526087,
            "unit": "ns/iter",
            "extra": "iterations: 5760\ncpu: 120887.58680555514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30128.734297646082,
            "unit": "ns/iter",
            "extra": "iterations: 23229\ncpu: 30127.332214042846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29990.39292149015,
            "unit": "ns/iter",
            "extra": "iterations: 23310\ncpu: 29988.42556842569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29692.378865320763,
            "unit": "ns/iter",
            "extra": "iterations: 23478\ncpu: 29690.84249084237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59604.601689845025,
            "unit": "ns/iter",
            "extra": "iterations: 11717\ncpu: 59601.459417939855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55392.42729663255,
            "unit": "ns/iter",
            "extra": "iterations: 12551\ncpu: 55390.74974105664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22698.74620855273,
            "unit": "ns/iter",
            "extra": "iterations: 30793\ncpu: 22697.908615594595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 111922.1938530635,
            "unit": "ns/iter",
            "extra": "iterations: 6247\ncpu: 111920.23371218098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89050.16396786843,
            "unit": "ns/iter",
            "extra": "iterations: 7843\ncpu: 89046.64031620469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88594.26602603738,
            "unit": "ns/iter",
            "extra": "iterations: 7909\ncpu: 88590.58035149798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 86169.36918712192,
            "unit": "ns/iter",
            "extra": "iterations: 8107\ncpu: 86165.96768225037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 154025.18622056162,
            "unit": "ns/iter",
            "extra": "iterations: 4543\ncpu: 154019.23838873062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 529795.0188394758,
            "unit": "ns/iter",
            "extra": "iterations: 1327\ncpu: 529221.1755840214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 434263.7142857152,
            "unit": "ns/iter",
            "extra": "iterations: 1610\ncpu: 434240.37267081015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 430504.89434891066,
            "unit": "ns/iter",
            "extra": "iterations: 1628\ncpu: 430487.77641277306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 418702.0496411441,
            "unit": "ns/iter",
            "extra": "iterations: 1672\ncpu: 418681.4593301377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 273240.51133700565,
            "unit": "ns/iter",
            "extra": "iterations: 2558\ncpu: 273227.3260359649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 419886.99879878474,
            "unit": "ns/iter",
            "extra": "iterations: 1665\ncpu: 419869.06906907156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22652.094509739345,
            "unit": "ns/iter",
            "extra": "iterations: 31055\ncpu: 22651.135082917237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109992.43534213651,
            "unit": "ns/iter",
            "extra": "iterations: 6372\ncpu: 109988.10420589951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88854.3143791749,
            "unit": "ns/iter",
            "extra": "iterations: 7949\ncpu: 88849.77984652194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89419.69701206648,
            "unit": "ns/iter",
            "extra": "iterations: 7865\ncpu: 89419.21169739476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88953.04845478282,
            "unit": "ns/iter",
            "extra": "iterations: 7863\ncpu: 88951.3925982453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 154070.09353777723,
            "unit": "ns/iter",
            "extra": "iterations: 4565\ncpu: 154062.8696604614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 519453.38702460343,
            "unit": "ns/iter",
            "extra": "iterations: 1341\ncpu: 519412.3042505567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 426926.07064557966,
            "unit": "ns/iter",
            "extra": "iterations: 1642\ncpu: 426908.3434835607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 429219.0300429196,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 429212.139791532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 422722.9323671075,
            "unit": "ns/iter",
            "extra": "iterations: 1656\ncpu: 422716.3647342974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 270408.6657639868,
            "unit": "ns/iter",
            "extra": "iterations: 2585\ncpu: 270399.8452611239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 418872.15954249614,
            "unit": "ns/iter",
            "extra": "iterations: 1661\ncpu: 418859.6026490098 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702418371533,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7620.081401412062,
            "unit": "ns/iter",
            "extra": "iterations: 92050\ncpu: 7619.801195002716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53733.71929999848,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53729.33 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98877.95720695563,
            "unit": "ns/iter",
            "extra": "iterations: 8693\ncpu: 98872.95525135165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 143393.76728303477,
            "unit": "ns/iter",
            "extra": "iterations: 6003\ncpu: 143390.03831417623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 188580.13336240686,
            "unit": "ns/iter",
            "extra": "iterations: 4589\ncpu: 188570.27674874692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 233384.8128875712,
            "unit": "ns/iter",
            "extra": "iterations: 3709\ncpu: 233374.81801024516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 277037.93678158836,
            "unit": "ns/iter",
            "extra": "iterations: 3132\ncpu: 277033.65261813527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 322700.1622823232,
            "unit": "ns/iter",
            "extra": "iterations: 2699\ncpu: 322684.69803631003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 369272.009716939,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 369255.42881284317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6360.585512200202,
            "unit": "ns/iter",
            "extra": "iterations: 109996\ncpu: 6360.319466162405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5246.356553124378,
            "unit": "ns/iter",
            "extra": "iterations: 132990\ncpu: 5246.102714489809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5232.501823399272,
            "unit": "ns/iter",
            "extra": "iterations: 133816\ncpu: 5232.52824774317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5306.9219451409135,
            "unit": "ns/iter",
            "extra": "iterations: 133214\ncpu: 5306.637440509264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8697.858876302413,
            "unit": "ns/iter",
            "extra": "iterations: 79363\ncpu: 8697.806282524603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31603.436045851333,
            "unit": "ns/iter",
            "extra": "iterations: 26433\ncpu: 31601.683501683478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 152162.993824866,
            "unit": "ns/iter",
            "extra": "iterations: 5344\ncpu: 152154.60329341338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 116953.64655997597,
            "unit": "ns/iter",
            "extra": "iterations: 7311\ncpu: 116948.99466557219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 118633.76827242067,
            "unit": "ns/iter",
            "extra": "iterations: 7224\ncpu: 118628.23920265777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111430.3075919607,
            "unit": "ns/iter",
            "extra": "iterations: 7666\ncpu: 111425.09783459414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 322216.46715583315,
            "unit": "ns/iter",
            "extra": "iterations: 2862\ncpu: 322199.12648497627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1733887.8398509335,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1733827.7467411528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1386451.1417910191,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1386366.5671641817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1386057.283159452,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1385992.399403874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1383104.5375551635,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1383015.0220913112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 802342.8298700948,
            "unit": "ns/iter",
            "extra": "iterations: 770\ncpu: 801752.7272727282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1322499.0329986063,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1322444.906743182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38119.572103474595,
            "unit": "ns/iter",
            "extra": "iterations: 21802\ncpu: 38117.223190533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 174797.4947068578,
            "unit": "ns/iter",
            "extra": "iterations: 4912\ncpu: 174794.15716612394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 136194.80047430482,
            "unit": "ns/iter",
            "extra": "iterations: 6325\ncpu: 136188.44268774663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137108.83800223572,
            "unit": "ns/iter",
            "extra": "iterations: 6247\ncpu: 137102.11301424695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 130734.24426782003,
            "unit": "ns/iter",
            "extra": "iterations: 6542\ncpu: 130727.60623662476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 304237.61565460666,
            "unit": "ns/iter",
            "extra": "iterations: 2849\ncpu: 304227.5184275182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1766901.5342205002,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1766768.250950567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1407192.0060422698,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1407149.546827797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1406717.81749618,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1406656.7119155263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1389899.7742899493,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1389846.9357249576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 781192.9663016304,
            "unit": "ns/iter",
            "extra": "iterations: 1187\ncpu: 781140.9435551836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1352228.3915573354,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1352153.129548761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6427074.758620432,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 6426748.965517224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2867444.1446156166,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2867287.692307693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 29051.540536707584,
            "unit": "ns/iter",
            "extra": "iterations: 28209\ncpu: 29051.185791768527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 141985.35273747233,
            "unit": "ns/iter",
            "extra": "iterations: 6064\ncpu: 141978.56200527647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 109559.43004587464,
            "unit": "ns/iter",
            "extra": "iterations: 7848\ncpu: 109557.78542303827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 111131.41679525813,
            "unit": "ns/iter",
            "extra": "iterations: 7776\ncpu: 110897.42798353893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 104490.48264482275,
            "unit": "ns/iter",
            "extra": "iterations: 8182\ncpu: 104488.47470056196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 266996.3193587907,
            "unit": "ns/iter",
            "extra": "iterations: 3244\ncpu: 266993.15659679373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1724214.8041043237,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1724193.6567164299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1380088.4652879953,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1380084.0472673543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1374863.816176444,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1374824.4117647053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1354937.8548620774,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1354932.94629899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 744729.2829736036,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 744717.8257394057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1324194.270922017,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1324161.8439716252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2882.4171050463738,
            "unit": "ns/iter",
            "extra": "iterations: 242560\ncpu: 2882.3161279683113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18926.052045011387,
            "unit": "ns/iter",
            "extra": "iterations: 36968\ncpu: 18926.152347976724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14789.691475077361,
            "unit": "ns/iter",
            "extra": "iterations: 49150\ncpu: 14789.776195320572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14343.078994246878,
            "unit": "ns/iter",
            "extra": "iterations: 48839\ncpu: 14343.002518479127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11070.875148840385,
            "unit": "ns/iter",
            "extra": "iterations: 62987\ncpu: 11070.654261990547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 95656.29845437715,
            "unit": "ns/iter",
            "extra": "iterations: 7311\ncpu: 95654.39748324375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 118839.28249448909,
            "unit": "ns/iter",
            "extra": "iterations: 5901\ncpu: 118837.28181664212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29777.889513346894,
            "unit": "ns/iter",
            "extra": "iterations: 23487\ncpu: 29776.987269553283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29693.86542373051,
            "unit": "ns/iter",
            "extra": "iterations: 23600\ncpu: 29693.55932203405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29540.115331057546,
            "unit": "ns/iter",
            "extra": "iterations: 23697\ncpu: 29539.21593450656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 58865.14341994219,
            "unit": "ns/iter",
            "extra": "iterations: 11930\ncpu: 58862.07879295901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54845.42842663866,
            "unit": "ns/iter",
            "extra": "iterations: 12826\ncpu: 54844.41758927181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21923.63765290339,
            "unit": "ns/iter",
            "extra": "iterations: 31801\ncpu: 21923.45838181176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 108528.98183794247,
            "unit": "ns/iter",
            "extra": "iterations: 6442\ncpu: 108522.92766221773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87615.69042261393,
            "unit": "ns/iter",
            "extra": "iterations: 7998\ncpu: 87611.5903975989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87412.00610973038,
            "unit": "ns/iter",
            "extra": "iterations: 8020\ncpu: 87406.83291770722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 85220.74908736876,
            "unit": "ns/iter",
            "extra": "iterations: 8218\ncpu: 85220.04137259656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 149560.2319675579,
            "unit": "ns/iter",
            "extra": "iterations: 4686\ncpu: 149557.34101579082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 511227.1656891189,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 511191.64222873317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 418414.0486194772,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 418409.783913564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 419499.6786570297,
            "unit": "ns/iter",
            "extra": "iterations: 1668\ncpu: 419493.225419665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 409865.4678738678,
            "unit": "ns/iter",
            "extra": "iterations: 1712\ncpu: 409850.40887850453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 267233.70592732396,
            "unit": "ns/iter",
            "extra": "iterations: 2615\ncpu: 267217.24665392394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 409947.32846289524,
            "unit": "ns/iter",
            "extra": "iterations: 1711\ncpu: 409907.4225599121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22002.820683586593,
            "unit": "ns/iter",
            "extra": "iterations: 31832\ncpu: 22001.74981151065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107263.74774774996,
            "unit": "ns/iter",
            "extra": "iterations: 6549\ncpu: 107259.97862268897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87364.97412499489,
            "unit": "ns/iter",
            "extra": "iterations: 8000\ncpu: 87363.21250000145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87520.54124998665,
            "unit": "ns/iter",
            "extra": "iterations: 8000\ncpu: 87516.86249999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87502.14129216554,
            "unit": "ns/iter",
            "extra": "iterations: 8033\ncpu: 87497.22395120193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 150411.60103626188,
            "unit": "ns/iter",
            "extra": "iterations: 4632\ncpu: 150402.24525043246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 504974.53309352417,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 504951.65467625385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 415365.98217469413,
            "unit": "ns/iter",
            "extra": "iterations: 1683\ncpu: 415338.68092691794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 416485.44021413027,
            "unit": "ns/iter",
            "extra": "iterations: 1681\ncpu: 416455.0862581827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 409885.68208432465,
            "unit": "ns/iter",
            "extra": "iterations: 1708\ncpu: 409861.12412177486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 262387.9050656413,
            "unit": "ns/iter",
            "extra": "iterations: 2665\ncpu: 262372.0450281453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 405543.2462165671,
            "unit": "ns/iter",
            "extra": "iterations: 1718\ncpu: 405524.27240978164 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421386885,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7610.0073921078,
            "unit": "ns/iter",
            "extra": "iterations: 91990\ncpu: 7609.361887161648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53581.79930000233,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53578.55 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98312.76623525344,
            "unit": "ns/iter",
            "extra": "iterations: 8731\ncpu: 98303.03516206617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 143124.58032895994,
            "unit": "ns/iter",
            "extra": "iterations: 6019\ncpu: 143116.34823060306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 187400.46465740626,
            "unit": "ns/iter",
            "extra": "iterations: 4612\ncpu: 187379.53165654815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 231555.35935830098,
            "unit": "ns/iter",
            "extra": "iterations: 3740\ncpu: 231539.43850267367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 276568.29974490206,
            "unit": "ns/iter",
            "extra": "iterations: 3136\ncpu: 276547.00255102036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 321673.7837338179,
            "unit": "ns/iter",
            "extra": "iterations: 2705\ncpu: 321665.1756007392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 365155.7670311135,
            "unit": "ns/iter",
            "extra": "iterations: 2378\ncpu: 365123.84356602206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6307.744362198317,
            "unit": "ns/iter",
            "extra": "iterations: 110238\ncpu: 6307.675211814439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5204.174283823529,
            "unit": "ns/iter",
            "extra": "iterations: 134499\ncpu: 5203.6996557595185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5182.49978625886,
            "unit": "ns/iter",
            "extra": "iterations: 135678\ncpu: 5182.163652176482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5154.275683052133,
            "unit": "ns/iter",
            "extra": "iterations: 134836\ncpu: 5153.827612803699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8805.408069715517,
            "unit": "ns/iter",
            "extra": "iterations: 79408\ncpu: 8804.942826919205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29542.077531186587,
            "unit": "ns/iter",
            "extra": "iterations: 27576\ncpu: 29540.687554395146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 150669.79621185802,
            "unit": "ns/iter",
            "extra": "iterations: 5702\ncpu: 150657.20799719423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 116342.99700639313,
            "unit": "ns/iter",
            "extra": "iterations: 7349\ncpu: 116340.60416383191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 116880.94281424466,
            "unit": "ns/iter",
            "extra": "iterations: 7327\ncpu: 116873.20868022379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 113490.46508844396,
            "unit": "ns/iter",
            "extra": "iterations: 7519\ncpu: 113489.2272908632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 320662.71239553764,
            "unit": "ns/iter",
            "extra": "iterations: 2872\ncpu: 320638.30083565426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1739720.2806027054,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1739606.967984934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1404694.8434269058,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1404600.2954209726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1386406.150297588,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1386340.6250000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1353457.518950471,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1353398.9795918327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 770796.9983347036,
            "unit": "ns/iter",
            "extra": "iterations: 1201\ncpu: 770765.3621981688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1325425.920114125,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1325357.3466476458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 35870.028132770516,
            "unit": "ns/iter",
            "extra": "iterations: 22927\ncpu: 35869.11065555886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 175075.4593882941,
            "unit": "ns/iter",
            "extra": "iterations: 4937\ncpu: 175071.64269799503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 137957.29273367132,
            "unit": "ns/iter",
            "extra": "iterations: 6248\ncpu: 137951.32842509606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136952.91134807962,
            "unit": "ns/iter",
            "extra": "iterations: 6283\ncpu: 136949.05300015915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 130306.2041773865,
            "unit": "ns/iter",
            "extra": "iterations: 6607\ncpu: 130301.93733918591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 298473.0813993746,
            "unit": "ns/iter",
            "extra": "iterations: 2887\ncpu: 298463.2490474545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1773907.7900763627,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1773795.0381679456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1402058.421052615,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1402007.218045112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1399684.8455771573,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1399604.6476761622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1384043.5074184379,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1383997.3293768482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 778789.5914068721,
            "unit": "ns/iter",
            "extra": "iterations: 1187\ncpu: 778746.2510530715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1346965.8263387105,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1346915.3400868273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6410678.034482598,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 6410414.482758583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2899746.965732161,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2899593.7694703983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27745.710846640995,
            "unit": "ns/iter",
            "extra": "iterations: 29493\ncpu: 27745.17343098363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 144153.12588565098,
            "unit": "ns/iter",
            "extra": "iterations: 6069\ncpu: 144039.1497775579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 109374.5973711054,
            "unit": "ns/iter",
            "extra": "iterations: 7836\ncpu: 109367.54721796894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 108723.17307447894,
            "unit": "ns/iter",
            "extra": "iterations: 7881\ncpu: 108715.2772490805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105227.01379310046,
            "unit": "ns/iter",
            "extra": "iterations: 8120\ncpu: 105218.63300492534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 262103.03998786648,
            "unit": "ns/iter",
            "extra": "iterations: 3301\ncpu: 262087.09481975192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1740098.1548507335,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1739979.850746257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1369827.4537444238,
            "unit": "ns/iter",
            "extra": "iterations: 681\ncpu: 1369711.8942731272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1367530.1639824684,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1367453.5871156624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1342417.0735930786,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1342315.8730158715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 754319.6094003338,
            "unit": "ns/iter",
            "extra": "iterations: 1234\ncpu: 754275.3646677523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1313448.3502825066,
            "unit": "ns/iter",
            "extra": "iterations: 708\ncpu: 1313314.6892655378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2919.7105694167267,
            "unit": "ns/iter",
            "extra": "iterations: 240562\ncpu: 2919.678087145926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19121.12785774772,
            "unit": "ns/iter",
            "extra": "iterations: 36611\ncpu: 19120.250744311685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14759.891253305012,
            "unit": "ns/iter",
            "extra": "iterations: 47275\ncpu: 14759.483870967659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14832.563498291727,
            "unit": "ns/iter",
            "extra": "iterations: 47143\ncpu: 14831.232632628273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11102.409531220601,
            "unit": "ns/iter",
            "extra": "iterations: 62972\ncpu: 11101.402210506278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 93682.10307898099,
            "unit": "ns/iter",
            "extra": "iterations: 7470\ncpu: 93677.25568942403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 118247.11402470476,
            "unit": "ns/iter",
            "extra": "iterations: 5911\ncpu: 118242.97073253198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29406.315762883656,
            "unit": "ns/iter",
            "extra": "iterations: 23752\ncpu: 29406.007915122827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29614.260801489552,
            "unit": "ns/iter",
            "extra": "iterations: 23631\ncpu: 29612.864457703625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29126.051299107257,
            "unit": "ns/iter",
            "extra": "iterations: 24055\ncpu: 29125.412596133745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 58700.62136981465,
            "unit": "ns/iter",
            "extra": "iterations: 11914\ncpu: 58697.86805439012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54625.83699132861,
            "unit": "ns/iter",
            "extra": "iterations: 12803\ncpu: 54621.61212215878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22328.990143854287,
            "unit": "ns/iter",
            "extra": "iterations: 31351\ncpu: 22322.088609613736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 106751.87511437331,
            "unit": "ns/iter",
            "extra": "iterations: 6558\ncpu: 106742.69594388425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87157.80465927525,
            "unit": "ns/iter",
            "extra": "iterations: 8027\ncpu: 87153.17054939593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87807.05467770719,
            "unit": "ns/iter",
            "extra": "iterations: 7974\ncpu: 87802.99724103465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 85370.35257428676,
            "unit": "ns/iter",
            "extra": "iterations: 8177\ncpu: 85362.30891524971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 157099.24479281626,
            "unit": "ns/iter",
            "extra": "iterations: 4465\ncpu: 157090.5711086201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 510844.54258447664,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 510832.96622614295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 416434.14558477054,
            "unit": "ns/iter",
            "extra": "iterations: 1676\ncpu: 416421.18138425506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 419686.8257862084,
            "unit": "ns/iter",
            "extra": "iterations: 1590\ncpu: 419681.8867924532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 408213.77084548736,
            "unit": "ns/iter",
            "extra": "iterations: 1715\ncpu: 408191.0787172088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 268055.82580401754,
            "unit": "ns/iter",
            "extra": "iterations: 2612\ncpu: 268052.9862174588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 411186.08480566123,
            "unit": "ns/iter",
            "extra": "iterations: 1698\ncpu: 411166.2544169599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22235.562374790592,
            "unit": "ns/iter",
            "extra": "iterations: 31447\ncpu: 22235.319744331675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 108539.22042592493,
            "unit": "ns/iter",
            "extra": "iterations: 6433\ncpu: 108533.53023472692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87720.26496368919,
            "unit": "ns/iter",
            "extra": "iterations: 7986\ncpu: 87719.32131229591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87600.25698747854,
            "unit": "ns/iter",
            "extra": "iterations: 7907\ncpu: 87597.39471354446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88144.28086070047,
            "unit": "ns/iter",
            "extra": "iterations: 7947\ncpu: 88142.2423556072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 153256.49222684285,
            "unit": "ns/iter",
            "extra": "iterations: 4567\ncpu: 153254.78432231216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 508182.06023226585,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 508148.1857764862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 416058.431723298,
            "unit": "ns/iter",
            "extra": "iterations: 1677\ncpu: 416048.2409063799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 416130.0107655638,
            "unit": "ns/iter",
            "extra": "iterations: 1672\ncpu: 416120.39473683777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 410675.355882337,
            "unit": "ns/iter",
            "extra": "iterations: 1700\ncpu: 410670.6470588255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 265234.1448669187,
            "unit": "ns/iter",
            "extra": "iterations: 2630\ncpu: 265226.95817490725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 409100.7869718122,
            "unit": "ns/iter",
            "extra": "iterations: 1704\ncpu: 409086.5610328669 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702422473303,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7659.118763729778,
            "unit": "ns/iter",
            "extra": "iterations: 91501\ncpu: 7658.886788122535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54562.82899999678,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54562.68 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 99727.6631774818,
            "unit": "ns/iter",
            "extra": "iterations: 8598\ncpu: 99727.77390090717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 144861.83712312646,
            "unit": "ns/iter",
            "extra": "iterations: 5937\ncpu: 144860.60299814722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 190086.87313432174,
            "unit": "ns/iter",
            "extra": "iterations: 4556\ncpu: 190085.95258999118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 234682.9376017369,
            "unit": "ns/iter",
            "extra": "iterations: 3686\ncpu: 234675.9088442756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 279791.7777777834,
            "unit": "ns/iter",
            "extra": "iterations: 3096\ncpu: 279788.8565891473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 324880.02316891844,
            "unit": "ns/iter",
            "extra": "iterations: 2676\ncpu: 324880.5680119581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 369625.5677171884,
            "unit": "ns/iter",
            "extra": "iterations: 2348\ncpu: 369623.6371379901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6411.566379294679,
            "unit": "ns/iter",
            "extra": "iterations: 109266\ncpu: 6411.450954551287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5225.513056766281,
            "unit": "ns/iter",
            "extra": "iterations: 132843\ncpu: 5225.125900499073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5249.391189750807,
            "unit": "ns/iter",
            "extra": "iterations: 133549\ncpu: 5249.236609783669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5321.796060720849,
            "unit": "ns/iter",
            "extra": "iterations: 131750\ncpu: 5321.606072106252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8784.138047391281,
            "unit": "ns/iter",
            "extra": "iterations: 79719\ncpu: 8784.074060136234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30180.707489281605,
            "unit": "ns/iter",
            "extra": "iterations: 27052\ncpu: 30179.491349992575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 150181.1126267869,
            "unit": "ns/iter",
            "extra": "iterations: 5718\ncpu: 150176.49527806955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 116240.77993220623,
            "unit": "ns/iter",
            "extra": "iterations: 7375\ncpu: 116237.24745762719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 114425.28947015588,
            "unit": "ns/iter",
            "extra": "iterations: 7455\ncpu: 114423.08517773292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 112998.51389992017,
            "unit": "ns/iter",
            "extra": "iterations: 7554\ncpu: 112995.65792957362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 320871.5495997128,
            "unit": "ns/iter",
            "extra": "iterations: 2873\ncpu: 320859.8329272537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1760571.3017078622,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1760513.4724857714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1394408.4081942544,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1394367.223065249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1399460.6210525818,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1399384.2105263171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1364993.35119042,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1364986.6071428563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 765125.030654512,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 765110.4391052186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1343939.677745668,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1343923.9884393052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36511.10938876256,
            "unit": "ns/iter",
            "extra": "iterations: 22708\ncpu: 36448.833010392744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 172576.3155165512,
            "unit": "ns/iter",
            "extra": "iterations: 5014\ncpu: 172570.42281611447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 136880.21548448174,
            "unit": "ns/iter",
            "extra": "iterations: 6316\ncpu: 136871.2792906902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137314.15625995578,
            "unit": "ns/iter",
            "extra": "iterations: 6278\ncpu: 137308.1713921629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 129337.6508176854,
            "unit": "ns/iter",
            "extra": "iterations: 6604\ncpu: 129327.42277407595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 301172.55501561647,
            "unit": "ns/iter",
            "extra": "iterations: 2881\ncpu: 301166.15758417244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1790521.5047801165,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1790439.388145316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1411852.6365078895,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1411803.8095238113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1421207.5450381103,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1421172.0610687027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1410677.535552165,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1410609.5310136091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 784624.3459915995,
            "unit": "ns/iter",
            "extra": "iterations: 1185\ncpu: 784597.8902953546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1365729.9545454134,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1365649.7067448604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6444893.510345161,
            "unit": "ns/iter",
            "extra": "iterations: 145\ncpu: 6444884.137931008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2968647.658146943,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2968530.3514376995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28282.03870545084,
            "unit": "ns/iter",
            "extra": "iterations: 29014\ncpu: 28281.719170055978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 139945.2783555477,
            "unit": "ns/iter",
            "extra": "iterations: 6154\ncpu: 139943.90640233978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108554.79964651428,
            "unit": "ns/iter",
            "extra": "iterations: 7921\ncpu: 108554.48806968801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 108102.5246128679,
            "unit": "ns/iter",
            "extra": "iterations: 7943\ncpu: 108099.24461790301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103505.4184671057,
            "unit": "ns/iter",
            "extra": "iterations: 8285\ncpu: 103505.22631261345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 263651.1336167602,
            "unit": "ns/iter",
            "extra": "iterations: 3293\ncpu: 263646.9784391132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1786963.33584899,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1786924.3396226463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1384741.3976261362,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1384712.7596439112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1381921.4370369923,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1381897.9259259254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1359111.2982456682,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1359109.649122808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 751617.6798068975,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 751599.9195494785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1326934.8988604404,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1326921.2250712235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2903.6219916545315,
            "unit": "ns/iter",
            "extra": "iterations: 240373\ncpu: 2903.5390830084875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18690.552956846364,
            "unit": "ns/iter",
            "extra": "iterations: 37540\ncpu: 18690.751198721442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14738.923810125092,
            "unit": "ns/iter",
            "extra": "iterations: 47526\ncpu: 14738.913436855686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14810.14358865876,
            "unit": "ns/iter",
            "extra": "iterations: 47260\ncpu: 14809.796868387646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11043.105295498548,
            "unit": "ns/iter",
            "extra": "iterations: 63469\ncpu: 11042.872898580395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 94017.29773682225,
            "unit": "ns/iter",
            "extra": "iterations: 7379\ncpu: 94013.28093237607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 119394.98893805948,
            "unit": "ns/iter",
            "extra": "iterations: 5876\ncpu: 119396.25595643232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29789.006986454187,
            "unit": "ns/iter",
            "extra": "iterations: 23474\ncpu: 29788.621453523112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29870.471130064758,
            "unit": "ns/iter",
            "extra": "iterations: 23450\ncpu: 29870.550106609862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29658.570044614484,
            "unit": "ns/iter",
            "extra": "iterations: 23535\ncpu: 29657.344380709394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 58676.52878660923,
            "unit": "ns/iter",
            "extra": "iterations: 11950\ncpu: 58677.154811715394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54903.11616360929,
            "unit": "ns/iter",
            "extra": "iterations: 12689\ncpu: 54902.46670344388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22739.1844351396,
            "unit": "ns/iter",
            "extra": "iterations: 30813\ncpu: 22738.584363742477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 108983.04968073005,
            "unit": "ns/iter",
            "extra": "iterations: 6421\ncpu: 108982.41706899145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88533.51724137612,
            "unit": "ns/iter",
            "extra": "iterations: 7888\ncpu: 88529.63995943233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89577.82583768808,
            "unit": "ns/iter",
            "extra": "iterations: 7849\ncpu: 89577.83157090162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 86978.92348909818,
            "unit": "ns/iter",
            "extra": "iterations: 8025\ncpu: 86979.82554517098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 154173.08021153987,
            "unit": "ns/iter",
            "extra": "iterations: 4538\ncpu: 154167.2102247691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 514109.6140221389,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 514095.2029520341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 426274.5407725417,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 426260.5150214583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 425159.99390988564,
            "unit": "ns/iter",
            "extra": "iterations: 1642\ncpu: 425145.43239950895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 423611.8632273415,
            "unit": "ns/iter",
            "extra": "iterations: 1667\ncpu: 423607.5584882997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 270986.55096525844,
            "unit": "ns/iter",
            "extra": "iterations: 2590\ncpu: 270982.1235521227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 417888.4624105065,
            "unit": "ns/iter",
            "extra": "iterations: 1676\ncpu: 417871.06205250666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22574.142274727496,
            "unit": "ns/iter",
            "extra": "iterations: 31151\ncpu: 22574.17739398388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109940.80989788297,
            "unit": "ns/iter",
            "extra": "iterations: 6365\ncpu: 109939.89002356621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89340.57433549054,
            "unit": "ns/iter",
            "extra": "iterations: 7863\ncpu: 89338.91644410609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88990.96394323227,
            "unit": "ns/iter",
            "extra": "iterations: 7821\ncpu: 88986.22938243106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89033.4471575707,
            "unit": "ns/iter",
            "extra": "iterations: 7863\ncpu: 89031.66730255673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 152857.72552026974,
            "unit": "ns/iter",
            "extra": "iterations: 4565\ncpu: 152853.2749178522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 511980.21079502645,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 511975.2735229762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 420276.35611512564,
            "unit": "ns/iter",
            "extra": "iterations: 1668\ncpu: 420260.0719424498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 421012.6518607373,
            "unit": "ns/iter",
            "extra": "iterations: 1666\ncpu: 421004.5618247317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 416021.0695599923,
            "unit": "ns/iter",
            "extra": "iterations: 1682\ncpu: 416005.0535077277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 264942.91063989344,
            "unit": "ns/iter",
            "extra": "iterations: 2641\ncpu: 264937.82658084144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 415560.69786724733,
            "unit": "ns/iter",
            "extra": "iterations: 1688\ncpu: 415540.2843601962 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702453367777,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7663.529415640168,
            "unit": "ns/iter",
            "extra": "iterations: 91074\ncpu: 7663.283703362101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54031.59059999894,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54032.12 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 99145.74077064957,
            "unit": "ns/iter",
            "extra": "iterations: 8668\ncpu: 99145.027688048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 144515.87468587194,
            "unit": "ns/iter",
            "extra": "iterations: 5969\ncpu: 144515.86530407102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 189439.2657480377,
            "unit": "ns/iter",
            "extra": "iterations: 4572\ncpu: 189437.90463692034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 234254.75222913476,
            "unit": "ns/iter",
            "extra": "iterations: 3701\ncpu: 234251.6617130507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 284142.7273019949,
            "unit": "ns/iter",
            "extra": "iterations: 3106\ncpu: 284140.1159047006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 325251.64099703846,
            "unit": "ns/iter",
            "extra": "iterations: 2688\ncpu: 325235.37946428586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 367011.08871990343,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 367004.05576679343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6372.183984435518,
            "unit": "ns/iter",
            "extra": "iterations: 109993\ncpu: 6372.232778449537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5257.236936329443,
            "unit": "ns/iter",
            "extra": "iterations: 133500\ncpu: 5257.028464419472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5252.127869663634,
            "unit": "ns/iter",
            "extra": "iterations: 133378\ncpu: 5251.726671565018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5309.000305105846,
            "unit": "ns/iter",
            "extra": "iterations: 131102\ncpu: 5309.036475416092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8749.070592049988,
            "unit": "ns/iter",
            "extra": "iterations: 80179\ncpu: 8748.845707728948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30013.703765103142,
            "unit": "ns/iter",
            "extra": "iterations: 27144\ncpu: 30013.723106395508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 151670.28305895074,
            "unit": "ns/iter",
            "extra": "iterations: 5649\ncpu: 151670.012391574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 116253.83219831159,
            "unit": "ns/iter",
            "extra": "iterations: 7342\ncpu: 116250.54481067826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 118695.13482758778,
            "unit": "ns/iter",
            "extra": "iterations: 5800\ncpu: 118692.43103448299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 114449.94736842242,
            "unit": "ns/iter",
            "extra": "iterations: 7391\ncpu: 114447.58490055482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 323171.39460783266,
            "unit": "ns/iter",
            "extra": "iterations: 2856\ncpu: 323166.4215686272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1750231.0721062387,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1750188.4250474393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1390734.9880059746,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1390711.0944527716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1402841.7481146897,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1402807.6923076934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1380304.5887574204,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1380281.5088757407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 773823.8454469659,
            "unit": "ns/iter",
            "extra": "iterations: 1197\ncpu: 773808.0200501252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1348210.860667599,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1348184.325108855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36654.3596736276,
            "unit": "ns/iter",
            "extra": "iterations: 22551\ncpu: 36653.61624761649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 172611.847484913,
            "unit": "ns/iter",
            "extra": "iterations: 4970\ncpu: 172610.4024144874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 134801.64203560917,
            "unit": "ns/iter",
            "extra": "iterations: 6347\ncpu: 134798.0620765716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137696.8984787881,
            "unit": "ns/iter",
            "extra": "iterations: 6245\ncpu: 137696.55724579678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 130937.41490014909,
            "unit": "ns/iter",
            "extra": "iterations: 6510\ncpu: 130935.14592933987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 304976.31738213875,
            "unit": "ns/iter",
            "extra": "iterations: 2842\ncpu: 304975.7565094999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1795139.4633205005,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1795077.9922779843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1424602.4908256587,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1424588.3792048965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1423797.9327217732,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1423754.2813455674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1401261.661654179,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1401246.4661654125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 794655.6466552076,
            "unit": "ns/iter",
            "extra": "iterations: 1166\ncpu: 794631.5608919385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1365167.2126099286,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1365138.2697947172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6491442.465277527,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6491400.6944444645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3065400.3355264976,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3065304.605263155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27967.300229365886,
            "unit": "ns/iter",
            "extra": "iterations: 29211\ncpu: 27967.21440553223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 141568.11111110303,
            "unit": "ns/iter",
            "extra": "iterations: 6057\ncpu: 141561.64768036953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106842.37218942157,
            "unit": "ns/iter",
            "extra": "iterations: 7961\ncpu: 106841.54000753698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107925.95943051275,
            "unit": "ns/iter",
            "extra": "iterations: 7937\ncpu: 107922.28801814273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105114.94445809556,
            "unit": "ns/iter",
            "extra": "iterations: 8138\ncpu: 105114.58589333939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 263821.6349740331,
            "unit": "ns/iter",
            "extra": "iterations: 3271\ncpu: 263809.2326505664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1748668.4962263235,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1748551.5094339577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1391086.1907600719,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1391031.8926974654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1381684.7726595849,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1381591.530460627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1357060.9795918737,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1357012.0991253655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 756004.3208773033,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 755964.5816409439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1335779.9110473262,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1335712.1951219458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2921.746267596693,
            "unit": "ns/iter",
            "extra": "iterations: 239457\ncpu: 2921.5011463436203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18987.002472355915,
            "unit": "ns/iter",
            "extra": "iterations: 36807\ncpu: 18986.130355638834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14758.365941110658,
            "unit": "ns/iter",
            "extra": "iterations: 47412\ncpu: 14757.209145364146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14831.105924369234,
            "unit": "ns/iter",
            "extra": "iterations: 47043\ncpu: 14830.355206938348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11169.988646534577,
            "unit": "ns/iter",
            "extra": "iterations: 63681\ncpu: 11169.457137921932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 95007.75679697153,
            "unit": "ns/iter",
            "extra": "iterations: 7393\ncpu: 95007.02015419998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 119523.30227813714,
            "unit": "ns/iter",
            "extra": "iterations: 5882\ncpu: 119520.6562393733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29652.337243775582,
            "unit": "ns/iter",
            "extra": "iterations: 23612\ncpu: 29651.05454853462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29783.713382280843,
            "unit": "ns/iter",
            "extra": "iterations: 23561\ncpu: 29782.797843894543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29041.28780569201,
            "unit": "ns/iter",
            "extra": "iterations: 24044\ncpu: 29040.276160372654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59231.17328796545,
            "unit": "ns/iter",
            "extra": "iterations: 11755\ncpu: 59228.58358145486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54847.88167728547,
            "unit": "ns/iter",
            "extra": "iterations: 12711\ncpu: 54844.38675163203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 21968.742540599764,
            "unit": "ns/iter",
            "extra": "iterations: 31772\ncpu: 21967.26362835196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 109404.97094202865,
            "unit": "ns/iter",
            "extra": "iterations: 6401\ncpu: 109404.20246836513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87176.8682402918,
            "unit": "ns/iter",
            "extra": "iterations: 8007\ncpu: 87177.44473585619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87674.04210526048,
            "unit": "ns/iter",
            "extra": "iterations: 7980\ncpu: 87671.01503759374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 85497.51073957578,
            "unit": "ns/iter",
            "extra": "iterations: 8194\ncpu: 85493.54405662663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 153194.712190853,
            "unit": "ns/iter",
            "extra": "iterations: 4569\ncpu: 153186.93368351812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 516999.3449296623,
            "unit": "ns/iter",
            "extra": "iterations: 1351\ncpu: 516975.4256106615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 422422.67859306885,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 422407.51970891573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 422490.2952612197,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 422469.62332928414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 413944.4801892407,
            "unit": "ns/iter",
            "extra": "iterations: 1691\ncpu: 413920.4021289209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 270739.8648858302,
            "unit": "ns/iter",
            "extra": "iterations: 2583\ncpu: 270730.23615950136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 415964.53293770395,
            "unit": "ns/iter",
            "extra": "iterations: 1685\ncpu: 415950.68249258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22464.51529449322,
            "unit": "ns/iter",
            "extra": "iterations: 31155\ncpu: 22463.79393355809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109366.53266025255,
            "unit": "ns/iter",
            "extra": "iterations: 6537\ncpu: 109363.74483708099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88325.0712058884,
            "unit": "ns/iter",
            "extra": "iterations: 8019\ncpu: 88323.98054620263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 87631.80619767672,
            "unit": "ns/iter",
            "extra": "iterations: 8003\ncpu: 87628.50181181924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 88169.26450726076,
            "unit": "ns/iter",
            "extra": "iterations: 7996\ncpu: 88168.92196098104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 152237.2992382916,
            "unit": "ns/iter",
            "extra": "iterations: 4595\ncpu: 152238.25897714798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 510759.6883211071,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 510747.44525546656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 420349.26426427835,
            "unit": "ns/iter",
            "extra": "iterations: 1665\ncpu: 420351.9519519473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 420467.957331775,
            "unit": "ns/iter",
            "extra": "iterations: 1664\ncpu: 420460.99759614957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 412790.2281839784,
            "unit": "ns/iter",
            "extra": "iterations: 1696\ncpu: 412780.8962264153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 266005.07610352786,
            "unit": "ns/iter",
            "extra": "iterations: 2628\ncpu: 266004.0334855406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 410301.5966883263,
            "unit": "ns/iter",
            "extra": "iterations: 1691\ncpu: 410287.64044943615 ns\nthreads: 1"
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
          "id": "6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d",
          "message": "fail-fast: false",
          "timestamp": "2023-12-13T17:51:42+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d"
        },
        "date": 1702479540176,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7535.908184377995,
            "unit": "ns/iter",
            "extra": "iterations: 93764\ncpu: 7535.975427669468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53770.58569999918,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53766.76 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98974.78179723141,
            "unit": "ns/iter",
            "extra": "iterations: 8680\ncpu: 98973.0069124424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 143787.07993992342,
            "unit": "ns/iter",
            "extra": "iterations: 5992\ncpu: 143786.9158878505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 188313.21663401142,
            "unit": "ns/iter",
            "extra": "iterations: 4593\ncpu: 188311.73524929237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 233206.4767410632,
            "unit": "ns/iter",
            "extra": "iterations: 3719\ncpu: 233205.32401183102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 278222.55591155036,
            "unit": "ns/iter",
            "extra": "iterations: 3121\ncpu: 278218.6478692727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 322823.59123002994,
            "unit": "ns/iter",
            "extra": "iterations: 2691\ncpu: 322823.1512448902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 367100.5730574379,
            "unit": "ns/iter",
            "extra": "iterations: 2368\ncpu: 367096.5793918917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6266.537640459832,
            "unit": "ns/iter",
            "extra": "iterations: 111954\ncpu: 6266.463011594054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5204.270991799198,
            "unit": "ns/iter",
            "extra": "iterations: 134624\ncpu: 5204.205045162817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5145.259960805059,
            "unit": "ns/iter",
            "extra": "iterations: 135732\ncpu: 5145.311348834461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5244.419374180535,
            "unit": "ns/iter",
            "extra": "iterations: 133425\ncpu: 5244.406220723261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8810.603595653321,
            "unit": "ns/iter",
            "extra": "iterations: 79318\ncpu: 8810.326785849373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30399.224005632866,
            "unit": "ns/iter",
            "extra": "iterations: 26977\ncpu: 30398.546910330984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 151633.64835746377,
            "unit": "ns/iter",
            "extra": "iterations: 5662\ncpu: 151633.32744613205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 116930.10066930151,
            "unit": "ns/iter",
            "extra": "iterations: 7321\ncpu: 116931.17060510865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 119280.54711204022,
            "unit": "ns/iter",
            "extra": "iterations: 7185\ncpu: 119279.35977731376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111526.67587019422,
            "unit": "ns/iter",
            "extra": "iterations: 7642\ncpu: 111526.51138445458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 329463.40536672564,
            "unit": "ns/iter",
            "extra": "iterations: 2795\ncpu: 329460.10733452573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1725905.5947467731,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1725899.4371482178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1394534.0545454815,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1394492.121212118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1393910.4464555015,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1393884.4645550482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1365655.117820365,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1365629.4550810014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 753686.1616326674,
            "unit": "ns/iter",
            "extra": "iterations: 1225\ncpu: 753675.1020408176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1330626.3223021626,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1330589.208633089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36586.336170401206,
            "unit": "ns/iter",
            "extra": "iterations: 22441\ncpu: 36584.34116126747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 177319.5080412377,
            "unit": "ns/iter",
            "extra": "iterations: 4850\ncpu: 177305.5051546393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 138123.9010617757,
            "unit": "ns/iter",
            "extra": "iterations: 6216\ncpu: 138118.95109395095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136443.5795238074,
            "unit": "ns/iter",
            "extra": "iterations: 6300\ncpu: 136437.01587301597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 132255.73406729932,
            "unit": "ns/iter",
            "extra": "iterations: 6449\ncpu: 132249.0773763374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 306700.93721178046,
            "unit": "ns/iter",
            "extra": "iterations: 2819\ncpu: 306679.6736431353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1775364.4315589312,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1775285.3612167283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1424779.4486983083,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1424656.3552833006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1417409.9363635902,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1417355.9090909036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1385255.360119094,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1385159.0773809517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 772142.7777777761,
            "unit": "ns/iter",
            "extra": "iterations: 1197\ncpu: 772098.9974937341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1361425.4612006592,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1361414.6412884335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6360929.972603017,
            "unit": "ns/iter",
            "extra": "iterations: 146\ncpu: 6360925.342465745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2859005.524540001,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2858985.276073627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28755.224840674524,
            "unit": "ns/iter",
            "extra": "iterations: 28558\ncpu: 28755.02836333071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 142823.93378691774,
            "unit": "ns/iter",
            "extra": "iterations: 6026\ncpu: 142823.84666445482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 110227.51900847437,
            "unit": "ns/iter",
            "extra": "iterations: 7786\ncpu: 110227.08707937389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 110777.38167053352,
            "unit": "ns/iter",
            "extra": "iterations: 7758\ncpu: 110777.46841969599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103404.92220343472,
            "unit": "ns/iter",
            "extra": "iterations: 8278\ncpu: 103403.9623097367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 269288.42295293167,
            "unit": "ns/iter",
            "extra": "iterations: 3102\ncpu: 269288.2978723419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1724059.2987013727,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1724074.0259740266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1386488.368499269,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1386473.2540861778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1376090.7300885415,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1376071.2389380531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1347957.4428364628,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1347956.1505065174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 743062.141148331,
            "unit": "ns/iter",
            "extra": "iterations: 1254\ncpu: 743056.2998405115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1318814.7098150712,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1318798.5775248907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2919.467577827553,
            "unit": "ns/iter",
            "extra": "iterations: 240499\ncpu: 2919.4686880195045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19026.461032609634,
            "unit": "ns/iter",
            "extra": "iterations: 36800\ncpu: 19026.396739130494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14784.972923154715,
            "unit": "ns/iter",
            "extra": "iterations: 47199\ncpu: 14785.10349795552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14255.7617505047,
            "unit": "ns/iter",
            "extra": "iterations: 49083\ncpu: 14255.730089847812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11054.768282118615,
            "unit": "ns/iter",
            "extra": "iterations: 63491\ncpu: 11054.632940101796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 93607.5061312535,
            "unit": "ns/iter",
            "extra": "iterations: 7421\ncpu: 93607.49225171794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 120248.46354883176,
            "unit": "ns/iter",
            "extra": "iterations: 5816\ncpu: 120249.44979367332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29925.42512820549,
            "unit": "ns/iter",
            "extra": "iterations: 23400\ncpu: 29925.67521367501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29849.964191432493,
            "unit": "ns/iter",
            "extra": "iterations: 23486\ncpu: 29849.599761559937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29525.973950249652,
            "unit": "ns/iter",
            "extra": "iterations: 23839\ncpu: 29524.904568144593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 58654.709278007016,
            "unit": "ns/iter",
            "extra": "iterations: 11953\ncpu: 58653.76056220164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54531.85830529532,
            "unit": "ns/iter",
            "extra": "iterations: 12781\ncpu: 54532.33706282756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22360.427041712202,
            "unit": "ns/iter",
            "extra": "iterations: 31285\ncpu: 22360.389963241112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 106518.7749352803,
            "unit": "ns/iter",
            "extra": "iterations: 6567\ncpu: 106517.28338663057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 86324.6532706831,
            "unit": "ns/iter",
            "extra": "iterations: 8087\ncpu: 86324.63212563243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 86831.32238806238,
            "unit": "ns/iter",
            "extra": "iterations: 8040\ncpu: 86832.12686567195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 84461.87382615061,
            "unit": "ns/iter",
            "extra": "iterations: 8306\ncpu: 84462.70166144874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 153534.52630425588,
            "unit": "ns/iter",
            "extra": "iterations: 4562\ncpu: 153533.25295922844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 510403.3027859025,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 510395.8944281512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 421698.32930516644,
            "unit": "ns/iter",
            "extra": "iterations: 1655\ncpu: 421697.8247734133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 424200.05139056593,
            "unit": "ns/iter",
            "extra": "iterations: 1654\ncpu: 424194.5586457123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 412874.95352943393,
            "unit": "ns/iter",
            "extra": "iterations: 1700\ncpu: 412868.4705882373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 266849.4147272061,
            "unit": "ns/iter",
            "extra": "iterations: 2621\ncpu: 266849.63754292205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 411675.4747058635,
            "unit": "ns/iter",
            "extra": "iterations: 1700\ncpu: 411678.8823529389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22329.10648913347,
            "unit": "ns/iter",
            "extra": "iterations: 31468\ncpu: 22329.325028600913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 107709.3231219221,
            "unit": "ns/iter",
            "extra": "iterations: 6496\ncpu: 107709.20566502513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 87123.51628138586,
            "unit": "ns/iter",
            "extra": "iterations: 8046\ncpu: 87123.41536167116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86853.82160616214,
            "unit": "ns/iter",
            "extra": "iterations: 8044\ncpu: 86853.34410740952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 86521.78429648346,
            "unit": "ns/iter",
            "extra": "iterations: 7960\ncpu: 86522.51256281334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 152023.90834235548,
            "unit": "ns/iter",
            "extra": "iterations: 4615\ncpu: 152025.24377031592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 507371.7643678338,
            "unit": "ns/iter",
            "extra": "iterations: 1392\ncpu: 507363.29022988555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 417114.8064709516,
            "unit": "ns/iter",
            "extra": "iterations: 1669\ncpu: 417108.68783702666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 418853.03522386536,
            "unit": "ns/iter",
            "extra": "iterations: 1675\ncpu: 418856.95522388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 415030.0395981051,
            "unit": "ns/iter",
            "extra": "iterations: 1692\ncpu: 415024.76359338773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 263190.8794406673,
            "unit": "ns/iter",
            "extra": "iterations: 2646\ncpu: 263187.4149659825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 407270.9355972033,
            "unit": "ns/iter",
            "extra": "iterations: 1708\ncpu: 407270.0234192043 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702488608096,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7623.885370273179,
            "unit": "ns/iter",
            "extra": "iterations: 91608\ncpu: 7623.070037551305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54340.636599999925,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54337.43999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 99580.97739392701,
            "unit": "ns/iter",
            "extra": "iterations: 8626\ncpu: 99577.79967539996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 145041.24604244396,
            "unit": "ns/iter",
            "extra": "iterations: 5938\ncpu: 145034.00134725502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 190640.177362636,
            "unit": "ns/iter",
            "extra": "iterations: 4550\ncpu: 190635.7362637363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 235993.5159183713,
            "unit": "ns/iter",
            "extra": "iterations: 3675\ncpu: 235983.8095238096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 282192.79358392215,
            "unit": "ns/iter",
            "extra": "iterations: 3086\ncpu: 282179.58522359055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 325794.9581151686,
            "unit": "ns/iter",
            "extra": "iterations: 2674\ncpu: 325776.40239341796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 371486.2205128094,
            "unit": "ns/iter",
            "extra": "iterations: 2340\ncpu: 371463.2905982907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6311.57657902346,
            "unit": "ns/iter",
            "extra": "iterations: 110448\ncpu: 6311.079421990436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5246.3342025791335,
            "unit": "ns/iter",
            "extra": "iterations: 133449\ncpu: 5246.138225089738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5244.149582099879,
            "unit": "ns/iter",
            "extra": "iterations: 133405\ncpu: 5243.9383831190735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5289.355154615705,
            "unit": "ns/iter",
            "extra": "iterations: 132134\ncpu: 5289.045968486541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8774.830906058609,
            "unit": "ns/iter",
            "extra": "iterations: 79719\ncpu: 8774.01497760887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30519.15713005363,
            "unit": "ns/iter",
            "extra": "iterations: 26774\ncpu: 30517.12108762234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 153476.0390861995,
            "unit": "ns/iter",
            "extra": "iterations: 5603\ncpu: 153463.1625914688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 117409.82819985898,
            "unit": "ns/iter",
            "extra": "iterations: 7305\ncpu: 117400.45174537977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 119000.33542277169,
            "unit": "ns/iter",
            "extra": "iterations: 7179\ncpu: 118990.43042206431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 112527.43349622803,
            "unit": "ns/iter",
            "extra": "iterations: 7571\ncpu: 112519.60110949713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 324007.90854730876,
            "unit": "ns/iter",
            "extra": "iterations: 2843\ncpu: 323982.83503341477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1771868.019157007,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1771754.7892720276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1419303.457886819,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1419207.1975497715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1418311.6845328559,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1418233.384379783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1381001.1107784295,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1380946.4071856309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 772880.5303408804,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 772868.9110556934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1363943.4845360091,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1363903.0927835065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37078.65928565096,
            "unit": "ns/iter",
            "extra": "iterations: 22174\ncpu: 37077.67204834492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 176140.4167522016,
            "unit": "ns/iter",
            "extra": "iterations: 4871\ncpu: 176139.27324984598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 140476.0214472971,
            "unit": "ns/iter",
            "extra": "iterations: 6108\ncpu: 140473.18271119826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136626.24896595886,
            "unit": "ns/iter",
            "extra": "iterations: 6286\ncpu: 136625.00795418402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 129161.22125093691,
            "unit": "ns/iter",
            "extra": "iterations: 6635\ncpu: 129159.2614920878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 300138.7960594467,
            "unit": "ns/iter",
            "extra": "iterations: 2893\ncpu: 300134.01313515374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1799495.0660193672,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1799433.2038835003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1434467.786707803,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1434445.749613598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1445736.536434091,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1445684.9612402995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1418828.714285629,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1418753.3434650411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 792309.8465472653,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 792252.9411764741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1382591.822652707,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1382502.8315946395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6460134.805555937,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6459683.333333317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2875527.538461448,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2875359.6923077065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28717.446354618605,
            "unit": "ns/iter",
            "extra": "iterations: 28735\ncpu: 28717.254219592927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 142673.62258223878,
            "unit": "ns/iter",
            "extra": "iterations: 6049\ncpu: 142669.8462555797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 111037.77616956229,
            "unit": "ns/iter",
            "extra": "iterations: 7738\ncpu: 111035.06073920964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 110220.7675641099,
            "unit": "ns/iter",
            "extra": "iterations: 7800\ncpu: 110217.4102564099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105155.88989924562,
            "unit": "ns/iter",
            "extra": "iterations: 8138\ncpu: 105154.87834848832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 266036.4340373197,
            "unit": "ns/iter",
            "extra": "iterations: 3267\ncpu: 266030.303030303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1781210.1877395532,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1781184.6743295088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1413183.453857917,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1413126.9288956139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1405903.061654191,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1405904.0601503754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1382031.629629502,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1382000.444444442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 756229.1486595843,
            "unit": "ns/iter",
            "extra": "iterations: 1231\ncpu: 756218.1153533687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1352070.5965166797,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1352025.689404936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2939.214172745848,
            "unit": "ns/iter",
            "extra": "iterations: 238373\ncpu: 2939.192358194925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19195.734814976346,
            "unit": "ns/iter",
            "extra": "iterations: 36401\ncpu: 19195.162220818173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14774.515652062122,
            "unit": "ns/iter",
            "extra": "iterations: 47342\ncpu: 14774.217396814673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14828.597693122954,
            "unit": "ns/iter",
            "extra": "iterations: 47250\ncpu: 14828.412698412714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11058.758555283484,
            "unit": "ns/iter",
            "extra": "iterations: 63265\ncpu: 11058.661187070216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 93822.25663121608,
            "unit": "ns/iter",
            "extra": "iterations: 7427\ncpu: 93821.39491046123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121137.41598891381,
            "unit": "ns/iter",
            "extra": "iterations: 5779\ncpu: 121129.98788717792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30230.205265662244,
            "unit": "ns/iter",
            "extra": "iterations: 23131\ncpu: 30229.886299770802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30185.565747525983,
            "unit": "ns/iter",
            "extra": "iterations: 23210\ncpu: 30184.63593278765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29726.99859076697,
            "unit": "ns/iter",
            "extra": "iterations: 23417\ncpu: 29726.732715548565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 58537.562437146094,
            "unit": "ns/iter",
            "extra": "iterations: 11932\ncpu: 58535.97049949723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55357.170214458776,
            "unit": "ns/iter",
            "extra": "iterations: 12590\ncpu: 55356.34630659241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22158.35784886519,
            "unit": "ns/iter",
            "extra": "iterations: 31667\ncpu: 22157.912021978616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 108285.40810643042,
            "unit": "ns/iter",
            "extra": "iterations: 6464\ncpu: 108284.52970297044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 88417.97488642778,
            "unit": "ns/iter",
            "extra": "iterations: 7924\ncpu: 88417.20090863347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 88673.53483373827,
            "unit": "ns/iter",
            "extra": "iterations: 7909\ncpu: 88670.55253508742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 86428.73054113901,
            "unit": "ns/iter",
            "extra": "iterations: 8094\ncpu: 86426.76056337931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 156295.46915512622,
            "unit": "ns/iter",
            "extra": "iterations: 4474\ncpu: 156282.76709879085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 525666.2756554955,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 525654.6816479451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 434359.49844431074,
            "unit": "ns/iter",
            "extra": "iterations: 1607\ncpu: 434349.5332918462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 432700.73112583585,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 432665.23178807716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 423955.85991513496,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 423902.4863553614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 272275.4955165316,
            "unit": "ns/iter",
            "extra": "iterations: 2565\ncpu: 272258.3625730985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 420737.39553139836,
            "unit": "ns/iter",
            "extra": "iterations: 1656\ncpu: 420692.99516908085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22505.631120120222,
            "unit": "ns/iter",
            "extra": "iterations: 31086\ncpu: 22504.165862446378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 108171.3133292258,
            "unit": "ns/iter",
            "extra": "iterations: 6482\ncpu: 108160.38259796392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 88105.63621553988,
            "unit": "ns/iter",
            "extra": "iterations: 7980\ncpu: 88099.46115288118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 88195.76897938568,
            "unit": "ns/iter",
            "extra": "iterations: 7956\ncpu: 88192.49622925979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 87821.80754292304,
            "unit": "ns/iter",
            "extra": "iterations: 7981\ncpu: 87819.22064904172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 153254.24392380306,
            "unit": "ns/iter",
            "extra": "iterations: 4567\ncpu: 153254.30260564972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 518220.54135887686,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 518204.1358936562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 427226.3509202649,
            "unit": "ns/iter",
            "extra": "iterations: 1630\ncpu: 427222.5766871115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 427793.9541845107,
            "unit": "ns/iter",
            "extra": "iterations: 1637\ncpu: 427781.36835675355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 423974.13868611155,
            "unit": "ns/iter",
            "extra": "iterations: 1644\ncpu: 423968.67396594014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 266637.798464503,
            "unit": "ns/iter",
            "extra": "iterations: 2605\ncpu: 266638.2341650644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 417834.41760853556,
            "unit": "ns/iter",
            "extra": "iterations: 1681\ncpu: 417825.1041046929 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702490748526,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7783.293024651701,
            "unit": "ns/iter",
            "extra": "iterations: 89931\ncpu: 7783.1392956822465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55175.15700000217,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55174.37999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101368.66725936132,
            "unit": "ns/iter",
            "extra": "iterations: 8436\ncpu: 101367.42532005688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146746.44911202107,
            "unit": "ns/iter",
            "extra": "iterations: 5856\ncpu: 146745.21857923496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 193067.23976740197,
            "unit": "ns/iter",
            "extra": "iterations: 4471\ncpu: 193062.71527622448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 238600.015448277,
            "unit": "ns/iter",
            "extra": "iterations: 3625\ncpu: 238600.02758620682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 284265.03318001074,
            "unit": "ns/iter",
            "extra": "iterations: 3044\ncpu: 284259.59264126146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 330470.8306697089,
            "unit": "ns/iter",
            "extra": "iterations: 2628\ncpu: 330445.5479452057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 376424.91034482606,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 376408.1034482757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6344.743930362546,
            "unit": "ns/iter",
            "extra": "iterations: 110056\ncpu: 6344.562768045363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5287.206656633861,
            "unit": "ns/iter",
            "extra": "iterations: 132229\ncpu: 5287.1979671630315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5234.422832870161,
            "unit": "ns/iter",
            "extra": "iterations: 133483\ncpu: 5234.364675651577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5298.537783261078,
            "unit": "ns/iter",
            "extra": "iterations: 132122\ncpu: 5298.3409273247435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8818.820155214338,
            "unit": "ns/iter",
            "extra": "iterations: 79374\ncpu: 8818.795827348993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30163.250639481343,
            "unit": "ns/iter",
            "extra": "iterations: 26975\ncpu: 30162.43188137167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 160351.52326013555,
            "unit": "ns/iter",
            "extra": "iterations: 5374\ncpu: 160349.90695943453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 119835.32541108037,
            "unit": "ns/iter",
            "extra": "iterations: 7237\ncpu: 119831.80876053593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 116663.54692202741,
            "unit": "ns/iter",
            "extra": "iterations: 7310\ncpu: 116663.16005471926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111468.43727926737,
            "unit": "ns/iter",
            "extra": "iterations: 7645\ncpu: 111465.4153041202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 322529.7297672967,
            "unit": "ns/iter",
            "extra": "iterations: 2879\ncpu: 322523.3761722811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1781629.7582205576,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1781575.6286266937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1413851.145454542,
            "unit": "ns/iter",
            "extra": "iterations: 660\ncpu: 1413829.9999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1414098.742377997,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1414046.1890243876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1395269.0149924152,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1395237.7811094462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 782212.9940828646,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 782190.7861369408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1362668.6070381477,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1362650.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37983.9975896925,
            "unit": "ns/iter",
            "extra": "iterations: 21574\ncpu: 37983.30861221845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 174774.51476277225,
            "unit": "ns/iter",
            "extra": "iterations: 4911\ncpu: 174772.77540215905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 135881.58300426687,
            "unit": "ns/iter",
            "extra": "iterations: 6331\ncpu: 135878.53419680952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 136335.35777637214,
            "unit": "ns/iter",
            "extra": "iterations: 6314\ncpu: 136335.0807728857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 129782.09936189608,
            "unit": "ns/iter",
            "extra": "iterations: 6582\ncpu: 129778.15253722273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 303551.95281371946,
            "unit": "ns/iter",
            "extra": "iterations: 2861\ncpu: 303544.1104508912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1795490.5333333632,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1795453.5294117634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1429308.3932411417,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1429277.726574503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1433526.961479159,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1433471.6486902966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1417064.4535768512,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1417029.6803652938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 803827.0659721884,
            "unit": "ns/iter",
            "extra": "iterations: 1152\ncpu: 803811.1111111142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1376981.828148187,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1376953.62962963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6546570.845070882,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6546390.84507045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2927453.323899479,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2927333.9622641583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28499.910602257012,
            "unit": "ns/iter",
            "extra": "iterations: 28692\ncpu: 28499.74208838708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 143111.4131556932,
            "unit": "ns/iter",
            "extra": "iterations: 6005\ncpu: 143109.691923397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 107781.6415945947,
            "unit": "ns/iter",
            "extra": "iterations: 7977\ncpu: 107780.58167230751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107464.86654158494,
            "unit": "ns/iter",
            "extra": "iterations: 7995\ncpu: 107462.751719825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103043.56557870732,
            "unit": "ns/iter",
            "extra": "iterations: 8303\ncpu: 103041.51511501886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 261592.75278528285,
            "unit": "ns/iter",
            "extra": "iterations: 3321\ncpu: 261586.54019873554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1769753.3548386693,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1769697.153700191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1385631.1390134345,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1385598.9536621773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1400200.904191638,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1400195.6586826371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1372698.487481653,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1372668.6303387375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 764641.6264368145,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 764611.1658456493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1341472.682471326,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1341442.6724137962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2890.2248874440834,
            "unit": "ns/iter",
            "extra": "iterations: 240547\ncpu: 2890.144545556575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18605.712497016193,
            "unit": "ns/iter",
            "extra": "iterations: 37697\ncpu: 18605.167519961895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14779.645319363082,
            "unit": "ns/iter",
            "extra": "iterations: 47344\ncpu: 14779.469415343106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 14897.560115300015,
            "unit": "ns/iter",
            "extra": "iterations: 46835\ncpu: 14897.388705028327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11095.537040840361,
            "unit": "ns/iter",
            "extra": "iterations: 63295\ncpu: 11095.227111146192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 93775.2991005522,
            "unit": "ns/iter",
            "extra": "iterations: 7449\ncpu: 93772.42582897047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121502.78047511613,
            "unit": "ns/iter",
            "extra": "iterations: 5767\ncpu: 121497.79781515538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30357.482577566854,
            "unit": "ns/iter",
            "extra": "iterations: 23045\ncpu: 30356.255152961778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30221.781493004753,
            "unit": "ns/iter",
            "extra": "iterations: 23148\ncpu: 30220.502851218174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29745.377376304372,
            "unit": "ns/iter",
            "extra": "iterations: 23303\ncpu: 29743.981461614578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60043.62494626877,
            "unit": "ns/iter",
            "extra": "iterations: 11633\ncpu: 60041.25333104127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55845.8208752559,
            "unit": "ns/iter",
            "extra": "iterations: 12522\ncpu: 55845.20044721325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22905.271242044313,
            "unit": "ns/iter",
            "extra": "iterations: 30482\ncpu: 22905.25556065868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 113727.26345747366,
            "unit": "ns/iter",
            "extra": "iterations: 6149\ncpu: 113722.28004553636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89978.89377571935,
            "unit": "ns/iter",
            "extra": "iterations: 7776\ncpu: 89975.0771604943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89185.12608251828,
            "unit": "ns/iter",
            "extra": "iterations: 7852\ncpu: 89181.26591951158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 87666.01086956913,
            "unit": "ns/iter",
            "extra": "iterations: 8004\ncpu: 87663.05597201355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 158553.91022444988,
            "unit": "ns/iter",
            "extra": "iterations: 4411\ncpu: 158553.79732486967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 522624.66567390016,
            "unit": "ns/iter",
            "extra": "iterations: 1343\ncpu: 522607.7438570318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 430494.565644193,
            "unit": "ns/iter",
            "extra": "iterations: 1630\ncpu: 430489.26380367763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 432305.3856612798,
            "unit": "ns/iter",
            "extra": "iterations: 1618\ncpu: 432291.22373300034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 423877.98791542003,
            "unit": "ns/iter",
            "extra": "iterations: 1655\ncpu: 423858.97280966496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 276152.3579030634,
            "unit": "ns/iter",
            "extra": "iterations: 2537\ncpu: 276141.34804887336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 423251.23766547185,
            "unit": "ns/iter",
            "extra": "iterations: 1662\ncpu: 423231.64861612674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23110.78129325622,
            "unit": "ns/iter",
            "extra": "iterations: 30342\ncpu: 23109.818073956863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 110843.11221747937,
            "unit": "ns/iter",
            "extra": "iterations: 6327\ncpu: 110838.35941204499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89969.88868917878,
            "unit": "ns/iter",
            "extra": "iterations: 7789\ncpu: 89969.77789189917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90441.51922827667,
            "unit": "ns/iter",
            "extra": "iterations: 7723\ncpu: 90440.41175708847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90938.93731266198,
            "unit": "ns/iter",
            "extra": "iterations: 7673\ncpu: 90934.09357487292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 154858.65083923386,
            "unit": "ns/iter",
            "extra": "iterations: 4528\ncpu: 154853.51148410002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 517717.7090103452,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 517690.3988183132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 427288.65710799414,
            "unit": "ns/iter",
            "extra": "iterations: 1639\ncpu: 427266.8090298913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 427022.37431190273,
            "unit": "ns/iter",
            "extra": "iterations: 1635\ncpu: 427000.36697247066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 421355.31385543983,
            "unit": "ns/iter",
            "extra": "iterations: 1660\ncpu: 421350.7228915706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 272666.8013244892,
            "unit": "ns/iter",
            "extra": "iterations: 2567\ncpu: 272666.7315932977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 419223.35375378456,
            "unit": "ns/iter",
            "extra": "iterations: 1665\ncpu: 419222.4624624622 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "380c708d79f348a900173c4fb482ef4fb63a6372",
          "message": "Update parser.hpp",
          "timestamp": "2024-01-18T13:25:10+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/380c708d79f348a900173c4fb482ef4fb63a6372"
        },
        "date": 1705573974033,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7643.380618574798,
            "unit": "ns/iter",
            "extra": "iterations: 91727\ncpu: 7642.935013681905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55214.1440000014,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55211.76 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101309.71001529096,
            "unit": "ns/iter",
            "extra": "iterations: 8497\ncpu: 101304.96645875013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146119.80230977188,
            "unit": "ns/iter",
            "extra": "iterations: 5888\ncpu: 146112.00747282605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 192509.8086859506,
            "unit": "ns/iter",
            "extra": "iterations: 4490\ncpu: 192504.74387527845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 237729.69986242734,
            "unit": "ns/iter",
            "extra": "iterations: 3635\ncpu: 237727.6478679507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 284556.90789903724,
            "unit": "ns/iter",
            "extra": "iterations: 3051\ncpu: 284552.3434939363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 329445.64556480094,
            "unit": "ns/iter",
            "extra": "iterations: 2638\ncpu: 329431.08415466244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 374376.15905168024,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 374368.0172413792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6296.337952430137,
            "unit": "ns/iter",
            "extra": "iterations: 111205\ncpu: 6296.162942313742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5213.462353151897,
            "unit": "ns/iter",
            "extra": "iterations: 133982\ncpu: 5213.427923153867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5182.534808386454,
            "unit": "ns/iter",
            "extra": "iterations: 134594\ncpu: 5182.197571957144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5290.759448155828,
            "unit": "ns/iter",
            "extra": "iterations: 132936\ncpu: 5290.573659505325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8908.911573984928,
            "unit": "ns/iter",
            "extra": "iterations: 78495\ncpu: 8908.852793171543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31209.34251126626,
            "unit": "ns/iter",
            "extra": "iterations: 26186\ncpu: 31208.54273275795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 154289.55359638587,
            "unit": "ns/iter",
            "extra": "iterations: 5728\ncpu: 154285.80656424598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 114513.40227424445,
            "unit": "ns/iter",
            "extra": "iterations: 7475\ncpu: 114509.83277591981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 116343.59994555797,
            "unit": "ns/iter",
            "extra": "iterations: 7349\ncpu: 116341.47503061628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 110721.0080467097,
            "unit": "ns/iter",
            "extra": "iterations: 7705\ncpu: 110718.24789097991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 332886.0653429535,
            "unit": "ns/iter",
            "extra": "iterations: 2770\ncpu: 332877.761732852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1778808.2403101253,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1778743.7984496092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1401988.4468084967,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1401967.9331306994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1417122.0655487382,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1417076.6768292668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1381546.6188341093,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1381508.3707025382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 779458.8546068625,
            "unit": "ns/iter",
            "extra": "iterations: 1183\ncpu: 779430.0084530861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1357171.1591241488,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1357150.0729927027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 38158.27766313653,
            "unit": "ns/iter",
            "extra": "iterations: 21807\ncpu: 38157.036731324784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 172672.54059445695,
            "unit": "ns/iter",
            "extra": "iterations: 5013\ncpu: 172668.70137642085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 134602.42572547906,
            "unit": "ns/iter",
            "extra": "iterations: 6375\ncpu: 134599.07450980417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 135007.0620873907,
            "unit": "ns/iter",
            "extra": "iterations: 6362\ncpu: 135005.9258094938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 127988.57702115778,
            "unit": "ns/iter",
            "extra": "iterations: 6667\ncpu: 127985.46572671393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 312921.0830935244,
            "unit": "ns/iter",
            "extra": "iterations: 2780\ncpu: 312909.1726618708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1799164.5223300843,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1799105.0485436881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1432575.0292758555,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1432553.9291217234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1432748.119815626,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1432699.2319508505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1406140.2124430675,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1406069.650986342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 799120.1784482553,
            "unit": "ns/iter",
            "extra": "iterations: 1160\ncpu: 799074.6551724151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1383578.381872335,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1383534.3239227307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6567324.422535517,
            "unit": "ns/iter",
            "extra": "iterations: 142\ncpu: 6567064.084507024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2973149.0477706324,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2972992.9936305704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 28837.419220741303,
            "unit": "ns/iter",
            "extra": "iterations: 28386\ncpu: 28836.10582681594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 137780.2802303256,
            "unit": "ns/iter",
            "extra": "iterations: 6252\ncpu: 137769.80166346714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 106706.1745874131,
            "unit": "ns/iter",
            "extra": "iterations: 8059\ncpu: 106700.68246680798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 107229.51869856867,
            "unit": "ns/iter",
            "extra": "iterations: 8022\ncpu: 107224.58239840424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103078.65877403964,
            "unit": "ns/iter",
            "extra": "iterations: 8320\ncpu: 103072.57211538476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 275202.0284540083,
            "unit": "ns/iter",
            "extra": "iterations: 3163\ncpu: 275186.6898514069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1774983.4703632747,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1774872.0841300206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1404649.9427710173,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1404582.5301204766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1404969.3095599562,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1404907.1320182087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1369494.3362964261,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1369393.0370370434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 767586.71393239,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 767548.1450948043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1350348.0028901512,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1350280.3468208057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2893.9634827517702,
            "unit": "ns/iter",
            "extra": "iterations: 242050\ncpu: 2893.940921297259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18301.523526499317,
            "unit": "ns/iter",
            "extra": "iterations: 38361\ncpu: 18301.39203878938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 15362.719868060012,
            "unit": "ns/iter",
            "extra": "iterations: 45475\ncpu: 15361.770203408498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15484.240873269382,
            "unit": "ns/iter",
            "extra": "iterations: 46950\ncpu: 15483.226837060665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11006.314571047373,
            "unit": "ns/iter",
            "extra": "iterations: 63585\ncpu: 11005.606668239307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 95874.46748972056,
            "unit": "ns/iter",
            "extra": "iterations: 7290\ncpu: 95868.35390946489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 121397.76290097453,
            "unit": "ns/iter",
            "extra": "iterations: 5736\ncpu: 121395.43235704313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 30192.966859414068,
            "unit": "ns/iter",
            "extra": "iterations: 23174\ncpu: 30191.90040562696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30396.183428097607,
            "unit": "ns/iter",
            "extra": "iterations: 23039\ncpu: 30395.989409262747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30384.04778038154,
            "unit": "ns/iter",
            "extra": "iterations: 23022\ncpu: 30383.229085222712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 60114.3735395162,
            "unit": "ns/iter",
            "extra": "iterations: 11640\ncpu: 60112.405498281674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56095.259494174614,
            "unit": "ns/iter",
            "extra": "iterations: 12455\ncpu: 56093.63307908462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23281.59086060915,
            "unit": "ns/iter",
            "extra": "iterations: 30002\ncpu: 23281.23125124974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 111697.34005440571,
            "unit": "ns/iter",
            "extra": "iterations: 6249\ncpu: 111696.92750840174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 89621.58903407722,
            "unit": "ns/iter",
            "extra": "iterations: 7806\ncpu: 89619.07507045902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 89833.57404091861,
            "unit": "ns/iter",
            "extra": "iterations: 7820\ncpu: 89832.5575447576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 88031.15286222217,
            "unit": "ns/iter",
            "extra": "iterations: 7896\ncpu: 88027.77355622986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 159925.28718770642,
            "unit": "ns/iter",
            "extra": "iterations: 4363\ncpu: 159924.3639697454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 528398.1507159793,
            "unit": "ns/iter",
            "extra": "iterations: 1327\ncpu: 528388.7716654042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 428553.8147692373,
            "unit": "ns/iter",
            "extra": "iterations: 1625\ncpu: 428542.52307692886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 432811.19410318305,
            "unit": "ns/iter",
            "extra": "iterations: 1628\ncpu: 432805.7739557771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 425248.7729204655,
            "unit": "ns/iter",
            "extra": "iterations: 1647\ncpu: 425247.1766848895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 275002.9188553459,
            "unit": "ns/iter",
            "extra": "iterations: 2551\ncpu: 274996.3151705243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 423761.8291062643,
            "unit": "ns/iter",
            "extra": "iterations: 1656\ncpu: 423750.60386473144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23009.483824352843,
            "unit": "ns/iter",
            "extra": "iterations: 30447\ncpu: 23008.835024797416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109732.16217487062,
            "unit": "ns/iter",
            "extra": "iterations: 6382\ncpu: 109731.36947665199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89948.3208802443,
            "unit": "ns/iter",
            "extra": "iterations: 7816\ncpu: 89947.64585465628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 90356.57797572423,
            "unit": "ns/iter",
            "extra": "iterations: 7746\ncpu: 90354.27317325067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 90192.7574002612,
            "unit": "ns/iter",
            "extra": "iterations: 7770\ncpu: 90189.38223938248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 156857.68263205074,
            "unit": "ns/iter",
            "extra": "iterations: 4468\ncpu: 156854.05102954415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 517918.4792592861,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 517916.07407407294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 427595.0547112174,
            "unit": "ns/iter",
            "extra": "iterations: 1645\ncpu: 427584.4376899673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 428817.2014696939,
            "unit": "ns/iter",
            "extra": "iterations: 1633\ncpu: 428802.5719534609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 422818.49576786044,
            "unit": "ns/iter",
            "extra": "iterations: 1654\ncpu: 422809.4316807791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 270425.9884035336,
            "unit": "ns/iter",
            "extra": "iterations: 2587\ncpu: 270424.1979126396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 418320.29736213596,
            "unit": "ns/iter",
            "extra": "iterations: 1668\ncpu: 418313.1294964063 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}