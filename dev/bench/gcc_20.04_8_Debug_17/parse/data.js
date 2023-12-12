window.BENCHMARK_DATA = {
  "lastUpdate": 1702381136424,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse gcc-8 20.04 Debug c++-17": [
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381136122,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7435.3611486160335,
            "unit": "ns/iter",
            "extra": "iterations: 94061\ncpu: 7434.878429955029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53523.203099996404,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53518.08 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 97895.96676153102,
            "unit": "ns/iter",
            "extra": "iterations: 8785\ncpu: 97892.32783153097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 142277.4851583166,
            "unit": "ns/iter",
            "extra": "iterations: 6064\ncpu: 142267.10092348288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 187129.4936243716,
            "unit": "ns/iter",
            "extra": "iterations: 4627\ncpu: 187121.87162308188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 231703.92532120802,
            "unit": "ns/iter",
            "extra": "iterations: 3736\ncpu: 231688.86509635972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 276908.4439847314,
            "unit": "ns/iter",
            "extra": "iterations: 3142\ncpu: 276895.0350095482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 320539.24098600744,
            "unit": "ns/iter",
            "extra": "iterations: 2718\ncpu: 320534.65783664444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 364454.0855569731,
            "unit": "ns/iter",
            "extra": "iterations: 2361\ncpu: 364442.39728928433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6135.556468317099,
            "unit": "ns/iter",
            "extra": "iterations: 113940\ncpu: 6135.509039845525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5039.213796234129,
            "unit": "ns/iter",
            "extra": "iterations: 138777\ncpu: 5039.146976804513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5064.718793026323,
            "unit": "ns/iter",
            "extra": "iterations: 137998\ncpu: 5064.553109465357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5075.735652639783,
            "unit": "ns/iter",
            "extra": "iterations: 138231\ncpu: 5075.772438888526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8687.540767729466,
            "unit": "ns/iter",
            "extra": "iterations: 80419\ncpu: 8687.317673684092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29751.69820477408,
            "unit": "ns/iter",
            "extra": "iterations: 27406\ncpu: 29751.080055462277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 148624.45151198783,
            "unit": "ns/iter",
            "extra": "iterations: 5754\ncpu: 148618.80431004523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 113478.64879925222,
            "unit": "ns/iter",
            "extra": "iterations: 7537\ncpu: 113476.40971208719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 115366.29562635181,
            "unit": "ns/iter",
            "extra": "iterations: 7408\ncpu: 115362.79697624162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 109578.5902885091,
            "unit": "ns/iter",
            "extra": "iterations: 7764\ncpu: 109574.61360123631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 321096.43504004437,
            "unit": "ns/iter",
            "extra": "iterations: 2871\ncpu: 321083.62939742324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1735480.1287312957,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1735399.0671641787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1367914.079411789,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1367853.3823529433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1366625.3240058918,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1366538.8807069228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1355544.2222221973,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1355501.4619883045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 750232.5064934865,
            "unit": "ns/iter",
            "extra": "iterations: 1232\ncpu: 750202.1915584422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1323326.3888889204,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1323255.2706552683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36749.73624026873,
            "unit": "ns/iter",
            "extra": "iterations: 22475\ncpu: 36749.99777530591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 180976.475334446,
            "unit": "ns/iter",
            "extra": "iterations: 4784\ncpu: 180970.08779264247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 139653.1164828041,
            "unit": "ns/iter",
            "extra": "iterations: 6164\ncpu: 139644.289422453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 141942.77644151603,
            "unit": "ns/iter",
            "extra": "iterations: 6070\ncpu: 141933.39373970364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 137938.11234151345,
            "unit": "ns/iter",
            "extra": "iterations: 6231\ncpu: 137933.36543090985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 302114.95895653806,
            "unit": "ns/iter",
            "extra": "iterations: 2875\ncpu: 302098.0521739133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1762543.7121211654,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1762490.909090914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1403450.2337858682,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1403422.3227752673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1393861.3478260585,
            "unit": "ns/iter",
            "extra": "iterations: 667\ncpu: 1393802.098950521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1387888.0074626645,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1387853.2835820948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 773991.259567352,
            "unit": "ns/iter",
            "extra": "iterations: 1202\ncpu: 773978.8685524159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1356980.001453513,
            "unit": "ns/iter",
            "extra": "iterations: 688\ncpu: 1356639.0988372064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6333631.156462461,
            "unit": "ns/iter",
            "extra": "iterations: 147\ncpu: 6333410.884353711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2860464.073619634,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2860386.1963190064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27276.620462264207,
            "unit": "ns/iter",
            "extra": "iterations: 30026\ncpu: 27275.587823886017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 139889.95824532825,
            "unit": "ns/iter",
            "extra": "iterations: 6155\ncpu: 139883.50934199794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108370.79797851379,
            "unit": "ns/iter",
            "extra": "iterations: 7915\ncpu: 108364.39671509799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 108472.97789846158,
            "unit": "ns/iter",
            "extra": "iterations: 7918\ncpu: 108472.35412983043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 103770.11853918413,
            "unit": "ns/iter",
            "extra": "iterations: 8242\ncpu: 103765.54234409129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 262308.3722054344,
            "unit": "ns/iter",
            "extra": "iterations: 3310\ncpu: 262308.0362537772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1730139.7044610686,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1730106.6914498196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1355700.080058292,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1355694.7598253328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1363725.4102189941,
            "unit": "ns/iter",
            "extra": "iterations: 685\ncpu: 1363693.2846715357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1347333.9466090798,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1347306.9264069207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 740332.6799046773,
            "unit": "ns/iter",
            "extra": "iterations: 1259\ncpu: 740332.3272438458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1310546.8438818012,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1310532.3488045053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2889.0431355157543,
            "unit": "ns/iter",
            "extra": "iterations: 243558\ncpu: 2889.066259371484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18557.0521573192,
            "unit": "ns/iter",
            "extra": "iterations: 37732\ncpu: 18556.789992579306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14662.894550780173,
            "unit": "ns/iter",
            "extra": "iterations: 47805\ncpu: 14662.982951574058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15137.23328656026,
            "unit": "ns/iter",
            "extra": "iterations: 46325\ncpu: 15137.340528872153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10853.910770087481,
            "unit": "ns/iter",
            "extra": "iterations: 64642\ncpu: 10853.477615172826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 89749.19659105787,
            "unit": "ns/iter",
            "extra": "iterations: 7803\ncpu: 89748.6992182501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 117187.11821835632,
            "unit": "ns/iter",
            "extra": "iterations: 5972\ncpu: 117177.74614869345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29064.260831673877,
            "unit": "ns/iter",
            "extra": "iterations: 24096\ncpu: 29062.570551128567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29272.60623585692,
            "unit": "ns/iter",
            "extra": "iterations: 23862\ncpu: 29270.86162098727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 28933.64135021152,
            "unit": "ns/iter",
            "extra": "iterations: 24174\ncpu: 28931.75725986583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 57571.8950207397,
            "unit": "ns/iter",
            "extra": "iterations: 12050\ncpu: 57568.74688796655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 53731.564846150206,
            "unit": "ns/iter",
            "extra": "iterations: 13000\ncpu: 53728.37692307705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22362.853862346,
            "unit": "ns/iter",
            "extra": "iterations: 31354\ncpu: 22362.365248453174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 106647.4842585405,
            "unit": "ns/iter",
            "extra": "iterations: 6575\ncpu: 106643.92395437193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 86690.0339318981,
            "unit": "ns/iter",
            "extra": "iterations: 8075\ncpu: 86683.34365325057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 86000.51199217103,
            "unit": "ns/iter",
            "extra": "iterations: 8172\ncpu: 85994.45668134994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 86137.37956024936,
            "unit": "ns/iter",
            "extra": "iterations: 8141\ncpu: 86132.57585063235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 154357.02595687943,
            "unit": "ns/iter",
            "extra": "iterations: 4546\ncpu: 154349.9780026416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 505903.2103746131,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 505887.3198847261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 420543.0035949753,
            "unit": "ns/iter",
            "extra": "iterations: 1669\ncpu: 420518.2144996989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 414958.36538465787,
            "unit": "ns/iter",
            "extra": "iterations: 1664\ncpu: 414935.6971153791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 419349.6534828679,
            "unit": "ns/iter",
            "extra": "iterations: 1694\ncpu: 419325.56080283015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 264459.77668802626,
            "unit": "ns/iter",
            "extra": "iterations: 2651\ncpu: 264440.81478687475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 407865.8536300084,
            "unit": "ns/iter",
            "extra": "iterations: 1708\ncpu: 407821.37002341886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22529.974045652038,
            "unit": "ns/iter",
            "extra": "iterations: 31016\ncpu: 22528.70453959248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109683.07681476825,
            "unit": "ns/iter",
            "extra": "iterations: 6392\ncpu: 109675.28160200262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 89137.44042308183,
            "unit": "ns/iter",
            "extra": "iterations: 7847\ncpu: 89131.91028418537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 89373.26950082676,
            "unit": "ns/iter",
            "extra": "iterations: 7833\ncpu: 89371.4796374308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 89520.13496226283,
            "unit": "ns/iter",
            "extra": "iterations: 7817\ncpu: 89516.50249456409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 152939.08842199628,
            "unit": "ns/iter",
            "extra": "iterations: 4569\ncpu: 152929.50317355897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 504202.7703383432,
            "unit": "ns/iter",
            "extra": "iterations: 1389\ncpu: 504180.12958963285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 419836.16576575994,
            "unit": "ns/iter",
            "extra": "iterations: 1665\ncpu: 419799.93993994116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 416653.6357694397,
            "unit": "ns/iter",
            "extra": "iterations: 1683\ncpu: 416642.483660132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 415656.5341246124,
            "unit": "ns/iter",
            "extra": "iterations: 1685\ncpu: 415659.4065281916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 262857.1042137298,
            "unit": "ns/iter",
            "extra": "iterations: 2658\ncpu: 262848.3822422867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 410690.94138334197,
            "unit": "ns/iter",
            "extra": "iterations: 1706\ncpu: 410683.8218053884 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}