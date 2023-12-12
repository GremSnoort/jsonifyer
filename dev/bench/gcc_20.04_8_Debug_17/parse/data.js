window.BENCHMARK_DATA = {
  "lastUpdate": 1702390834757,
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
          "id": "7f7a954178065768f16bab445a1789e66eddbd11",
          "message": "Add Clang Builds",
          "timestamp": "2023-12-12T14:44:55+03:00",
          "tree_id": "5a4deefbb08f6ba5a30c260d4700f1c6aeccac34",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7f7a954178065768f16bab445a1789e66eddbd11"
        },
        "date": 1702382295422,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7603.2273812883195,
            "unit": "ns/iter",
            "extra": "iterations: 92114\ncpu: 7603.277460538029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55396.868799999764,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55395.19999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102222.75564266597,
            "unit": "ns/iter",
            "extra": "iterations: 8418\ncpu: 102222.42813019718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 148576.36611740643,
            "unit": "ns/iter",
            "extra": "iterations: 5826\ncpu: 148571.52420185372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 195215.62835854766,
            "unit": "ns/iter",
            "extra": "iterations: 4429\ncpu: 195216.93384511178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 240635.1853185532,
            "unit": "ns/iter",
            "extra": "iterations: 3610\ncpu: 240623.1855955678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 287072.9685221974,
            "unit": "ns/iter",
            "extra": "iterations: 3018\ncpu: 287068.7210072898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 332397.64397704846,
            "unit": "ns/iter",
            "extra": "iterations: 2615\ncpu: 332390.6692160613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 379352.29595827893,
            "unit": "ns/iter",
            "extra": "iterations: 2301\ncpu: 379348.7179487175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6314.251769400378,
            "unit": "ns/iter",
            "extra": "iterations: 110772\ncpu: 6314.123605243207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5189.620896646643,
            "unit": "ns/iter",
            "extra": "iterations: 135438\ncpu: 5189.60262260223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5195.533092973159,
            "unit": "ns/iter",
            "extra": "iterations: 134243\ncpu: 5195.423225047111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5148.686950582807,
            "unit": "ns/iter",
            "extra": "iterations: 136167\ncpu: 5148.676992222784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8723.020801136638,
            "unit": "ns/iter",
            "extra": "iterations: 80236\ncpu: 8722.952290742322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29539.34691650082,
            "unit": "ns/iter",
            "extra": "iterations: 27485\ncpu: 29538.941240676715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 149245.53196307394,
            "unit": "ns/iter",
            "extra": "iterations: 5741\ncpu: 149242.30970214235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 116356.22754654642,
            "unit": "ns/iter",
            "extra": "iterations: 7304\ncpu: 116351.61555312155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 116917.54376473864,
            "unit": "ns/iter",
            "extra": "iterations: 7209\ncpu: 116916.34068525468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111830.62805358521,
            "unit": "ns/iter",
            "extra": "iterations: 7614\ncpu: 111827.89598108744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 316824.55490533286,
            "unit": "ns/iter",
            "extra": "iterations: 2905\ncpu: 316816.3166953533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1799421.0310077316,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1799394.7674418634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1424468.191424251,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1424445.3292496195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1424340.412844079,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1424327.9816513788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1399875.3619909373,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1399816.4404223217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 758765.7203947648,
            "unit": "ns/iter",
            "extra": "iterations: 1216\ncpu: 758762.0065789485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1358142.0791789293,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1358104.692082109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36554.14071195089,
            "unit": "ns/iter",
            "extra": "iterations: 22642\ncpu: 36553.175514530645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 180633.64689914658,
            "unit": "ns/iter",
            "extra": "iterations: 4789\ncpu: 180629.0248486115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 141436.29392446476,
            "unit": "ns/iter",
            "extra": "iterations: 6090\ncpu: 141435.1559934318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 137818.05285073622,
            "unit": "ns/iter",
            "extra": "iterations: 6244\ncpu: 137815.5509288919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 135547.76893939998,
            "unit": "ns/iter",
            "extra": "iterations: 6336\ncpu: 135546.41729798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 296116.28001364094,
            "unit": "ns/iter",
            "extra": "iterations: 2932\ncpu: 296113.3697135061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1820618.5303326095,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1820547.358121336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1458992.9403453837,
            "unit": "ns/iter",
            "extra": "iterations: 637\ncpu: 1458937.2056514958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1442091.8699691028,
            "unit": "ns/iter",
            "extra": "iterations: 646\ncpu: 1442043.4984520103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1425858.1221374245,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1425803.6641221317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 786367.2470389147,
            "unit": "ns/iter",
            "extra": "iterations: 1182\ncpu: 786338.1556683539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1390008.596412571,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1389967.4140508126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6477533.881944374,
            "unit": "ns/iter",
            "extra": "iterations: 144\ncpu: 6477322.9166666325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2921430.7218749626,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2921339.6874999907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27575.588272980003,
            "unit": "ns/iter",
            "extra": "iterations: 29658\ncpu: 27574.88367388224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 141286.08223900452,
            "unit": "ns/iter",
            "extra": "iterations: 6092\ncpu: 141279.85883125433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 108491.54692638689,
            "unit": "ns/iter",
            "extra": "iterations: 7906\ncpu: 108487.11105489563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 108421.75610064846,
            "unit": "ns/iter",
            "extra": "iterations: 7909\ncpu: 108418.34618788677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 104202.81022341896,
            "unit": "ns/iter",
            "extra": "iterations: 8236\ncpu: 104198.17872753796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 258518.33997620063,
            "unit": "ns/iter",
            "extra": "iterations: 3362\ncpu: 258501.63593099485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1889303.9769230096,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1889263.4615384578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1409003.9122541682,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1408968.9863842651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1410679.1374622094,
            "unit": "ns/iter",
            "extra": "iterations: 662\ncpu: 1410614.803625379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1386587.4071322202,
            "unit": "ns/iter",
            "extra": "iterations: 673\ncpu: 1386547.3997028205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 750280.5608380159,
            "unit": "ns/iter",
            "extra": "iterations: 1241\ncpu: 750258.6623690595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1355522.91436864,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1355529.3178519632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2928.774224660079,
            "unit": "ns/iter",
            "extra": "iterations: 238476\ncpu: 2928.6804542176396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18606.15032714683,
            "unit": "ns/iter",
            "extra": "iterations: 37598\ncpu: 18605.949784562923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14964.037631883031,
            "unit": "ns/iter",
            "extra": "iterations: 46822\ncpu: 14963.978471658558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15325.792064033982,
            "unit": "ns/iter",
            "extra": "iterations: 46976\ncpu: 15325.48748297001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10907.246791969343,
            "unit": "ns/iter",
            "extra": "iterations: 64058\ncpu: 10906.642417808835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 90888.57009829115,
            "unit": "ns/iter",
            "extra": "iterations: 7732\ncpu: 90886.09674081783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 116385.41427385905,
            "unit": "ns/iter",
            "extra": "iterations: 6025\ncpu: 116382.20746887922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29873.418557934645,
            "unit": "ns/iter",
            "extra": "iterations: 23397\ncpu: 29872.79993161517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30107.894150060252,
            "unit": "ns/iter",
            "extra": "iterations: 23231\ncpu: 30106.82708449942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29796.21989082257,
            "unit": "ns/iter",
            "extra": "iterations: 23448\ncpu: 29795.603036506203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 53808.44091819493,
            "unit": "ns/iter",
            "extra": "iterations: 12982\ncpu: 53807.28701278665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 55480.23733523658,
            "unit": "ns/iter",
            "extra": "iterations: 12594\ncpu: 55479.53787517844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 23403.26905694563,
            "unit": "ns/iter",
            "extra": "iterations: 29871\ncpu: 23402.825482909833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 109123.9201432141,
            "unit": "ns/iter",
            "extra": "iterations: 6424\ncpu: 109119.86301369869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 90368.30179193283,
            "unit": "ns/iter",
            "extra": "iterations: 7757\ncpu: 90366.27562201854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 91060.54629872665,
            "unit": "ns/iter",
            "extra": "iterations: 7646\ncpu: 91056.26471357507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 90166.28613873837,
            "unit": "ns/iter",
            "extra": "iterations: 7741\ncpu: 90165.98630667944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 159571.00708748453,
            "unit": "ns/iter",
            "extra": "iterations: 4515\ncpu: 159566.4451827252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 530052.1737481164,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 530041.122913507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 442425.4640605183,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 442423.0769230697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 437494.3809524157,
            "unit": "ns/iter",
            "extra": "iterations: 1596\ncpu: 437488.9097744366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 434949.261031734,
            "unit": "ns/iter",
            "extra": "iterations: 1609\ncpu: 434943.008079556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 272472.73831773864,
            "unit": "ns/iter",
            "extra": "iterations: 2568\ncpu: 272474.3380062283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 428892.9797421912,
            "unit": "ns/iter",
            "extra": "iterations: 1629\ncpu: 428891.28299570264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 23266.98466961445,
            "unit": "ns/iter",
            "extra": "iterations: 30071\ncpu: 23267.11449569355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 112472.19246861573,
            "unit": "ns/iter",
            "extra": "iterations: 6214\ncpu: 112471.72513678689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 93357.44613537073,
            "unit": "ns/iter",
            "extra": "iterations: 7491\ncpu: 93356.14737685313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 93182.13348386622,
            "unit": "ns/iter",
            "extra": "iterations: 7529\ncpu: 93180.59503254053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 92896.67122559923,
            "unit": "ns/iter",
            "extra": "iterations: 7531\ncpu: 92893.74585048489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 156313.15004472368,
            "unit": "ns/iter",
            "extra": "iterations: 4472\ncpu: 156313.8416815728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 528233.3031674386,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 528231.2217194634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 442872.4706253552,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 442874.3524952683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 439448.900062881,
            "unit": "ns/iter",
            "extra": "iterations: 1591\ncpu: 439437.6492771828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 435978.93948846485,
            "unit": "ns/iter",
            "extra": "iterations: 1603\ncpu: 435980.91079226485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 273607.69143524556,
            "unit": "ns/iter",
            "extra": "iterations: 2557\ncpu: 273601.99452483386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 430677.8858728917,
            "unit": "ns/iter",
            "extra": "iterations: 1621\ncpu: 430671.3756940188 ns\nthreads: 1"
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
          "id": "89047ca37b911c271e1749e8de13632f782d585c",
          "message": "cmt clang 15 build",
          "timestamp": "2023-12-12T16:57:18+03:00",
          "tree_id": "2f2c9ed08ef5734141953c56ba19061c15b85598",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/89047ca37b911c271e1749e8de13632f782d585c"
        },
        "date": 1702390833364,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7707.639092022207,
            "unit": "ns/iter",
            "extra": "iterations: 90663\ncpu: 7707.611704885126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 56773.5730000038,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56768.00999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 104989.77157792475,
            "unit": "ns/iter",
            "extra": "iterations: 8226\ncpu: 104981.63141259419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 151765.40035273443,
            "unit": "ns/iter",
            "extra": "iterations: 5670\ncpu: 151752.53968253967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 199757.30514365467,
            "unit": "ns/iter",
            "extra": "iterations: 4316\ncpu: 199756.37164040777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 246311.25419391185,
            "unit": "ns/iter",
            "extra": "iterations: 3517\ncpu: 246297.8106340631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 294111.3130730007,
            "unit": "ns/iter",
            "extra": "iterations: 2945\ncpu: 294091.5110356536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 342737.5718221096,
            "unit": "ns/iter",
            "extra": "iterations: 2541\ncpu: 342719.795356159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 388547.85752566735,
            "unit": "ns/iter",
            "extra": "iterations: 2239\ncpu: 388516.882536847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6161.620976526424,
            "unit": "ns/iter",
            "extra": "iterations: 113832\ncpu: 6161.391348654168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5063.392251763298,
            "unit": "ns/iter",
            "extra": "iterations: 137812\ncpu: 5063.161408295362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5069.157062587055,
            "unit": "ns/iter",
            "extra": "iterations: 138639\ncpu: 5068.899804528302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5089.199208826248,
            "unit": "ns/iter",
            "extra": "iterations: 137770\ncpu: 5089.183421644774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8738.026276817951,
            "unit": "ns/iter",
            "extra": "iterations: 79005\ncpu: 8737.387507119793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29414.102337173797,
            "unit": "ns/iter",
            "extra": "iterations: 27683\ncpu: 29413.329480186425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 149295.02763204306,
            "unit": "ns/iter",
            "extra": "iterations: 5718\ncpu: 149283.99790136408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 116247.78831326771,
            "unit": "ns/iter",
            "extra": "iterations: 7393\ncpu: 116241.47166238337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 116575.37257843834,
            "unit": "ns/iter",
            "extra": "iterations: 7330\ncpu: 116568.86766712133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 111825.90708949926,
            "unit": "ns/iter",
            "extra": "iterations: 7631\ncpu: 111822.42170095655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 321368.9845668324,
            "unit": "ns/iter",
            "extra": "iterations: 2851\ncpu: 321328.93721501227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1770227.584761956,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1770134.095238092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1398249.6036035528,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1398179.579579576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1388527.0761194017,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1388438.3582089576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1385620.4008942228,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1385521.3114754052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 766670.6619718662,
            "unit": "ns/iter",
            "extra": "iterations: 1207\ncpu: 766628.7489643738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1347643.2830188917,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1347578.809869376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 36260.703951979325,
            "unit": "ns/iter",
            "extra": "iterations: 22824\ncpu: 36258.33771468637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 177549.30298661467,
            "unit": "ns/iter",
            "extra": "iterations: 4855\ncpu: 177535.46858908323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 139206.52483417213,
            "unit": "ns/iter",
            "extra": "iterations: 6181\ncpu: 139199.36903413685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 138730.1515687876,
            "unit": "ns/iter",
            "extra": "iterations: 6215\ncpu: 138718.64843121433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 137246.0521516558,
            "unit": "ns/iter",
            "extra": "iterations: 6251\ncpu: 137240.10558310692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 303581.2310115561,
            "unit": "ns/iter",
            "extra": "iterations: 2857\ncpu: 303561.8830941536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1803153.0096899115,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1803121.7054263647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1426546.4700460653,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1426493.0875576115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1418375.1068702883,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1418272.3664122173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1419195.0958904037,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1419114.6118721417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 794063.1460290005,
            "unit": "ns/iter",
            "extra": "iterations: 1171\ncpu: 794023.5695986316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1378966.6711111043,
            "unit": "ns/iter",
            "extra": "iterations: 675\ncpu: 1378909.9259259347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6532458.5454544565,
            "unit": "ns/iter",
            "extra": "iterations: 143\ncpu: 6531790.209790225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 2968185.088888825,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2967997.1428571264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27733.41023472925,
            "unit": "ns/iter",
            "extra": "iterations: 29566\ncpu: 27731.898126225973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 139737.28573746543,
            "unit": "ns/iter",
            "extra": "iterations: 6163\ncpu: 139729.4174914817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 109793.23285567915,
            "unit": "ns/iter",
            "extra": "iterations: 7816\ncpu: 109786.31013306063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 109016.07782002763,
            "unit": "ns/iter",
            "extra": "iterations: 7890\ncpu: 109010.11406844071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 105721.29922039756,
            "unit": "ns/iter",
            "extra": "iterations: 8081\ncpu: 105715.50550674414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 263501.51094223675,
            "unit": "ns/iter",
            "extra": "iterations: 3290\ncpu: 263485.9878419453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1764789.2405303083,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1764683.9015151546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1383357.203264083,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1383294.807121658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1375148.0147492527,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1375075.9587020667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1377280.3293943913,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1377186.7060561385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 754974.4874899175,
            "unit": "ns/iter",
            "extra": "iterations: 1239\ncpu: 754923.0831315547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1340585.543884896,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1340508.2014388482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 2872.9091926963824,
            "unit": "ns/iter",
            "extra": "iterations: 243824\ncpu: 2872.8640330730263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 18590.8844980771,
            "unit": "ns/iter",
            "extra": "iterations: 37705\ncpu: 18590.091499801165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14001.301193260215,
            "unit": "ns/iter",
            "extra": "iterations: 50031\ncpu: 14000.211868641387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15159.180074720172,
            "unit": "ns/iter",
            "extra": "iterations: 44165\ncpu: 15158.415034529584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 10782.123053859803,
            "unit": "ns/iter",
            "extra": "iterations: 64037\ncpu: 10781.201492886996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 89900.32297418643,
            "unit": "ns/iter",
            "extra": "iterations: 7787\ncpu: 89893.69461923721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 120501.66969177549,
            "unit": "ns/iter",
            "extra": "iterations: 5840\ncpu: 120491.6438356156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29230.43810952752,
            "unit": "ns/iter",
            "extra": "iterations: 23994\ncpu: 29229.140618488233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 29382.762840067477,
            "unit": "ns/iter",
            "extra": "iterations: 23929\ncpu: 29380.91855071238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 29551.911212389292,
            "unit": "ns/iter",
            "extra": "iterations: 23697\ncpu: 29549.107481959676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 59028.589892364915,
            "unit": "ns/iter",
            "extra": "iterations: 11892\ncpu: 59027.52270433919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 54840.0558592817,
            "unit": "ns/iter",
            "extra": "iterations: 12621\ncpu: 54836.3996513749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 22906.994502257425,
            "unit": "ns/iter",
            "extra": "iterations: 30558\ncpu: 22905.766084167673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 107670.03236744758,
            "unit": "ns/iter",
            "extra": "iterations: 6488\ncpu: 107663.1165228097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 87708.75642794871,
            "unit": "ns/iter",
            "extra": "iterations: 7973\ncpu: 87701.98168819628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 87764.78469616966,
            "unit": "ns/iter",
            "extra": "iterations: 7998\ncpu: 87760.07751938044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 87634.61910112663,
            "unit": "ns/iter",
            "extra": "iterations: 8010\ncpu: 87631.76029962659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 155348.27676588457,
            "unit": "ns/iter",
            "extra": "iterations: 4502\ncpu: 155337.56108396422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 519520.2919161814,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 519481.1377245533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 431467.852469132,
            "unit": "ns/iter",
            "extra": "iterations: 1620\ncpu: 431439.93827160506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 426830.85844470194,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 426823.26852976537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 427678.61566705094,
            "unit": "ns/iter",
            "extra": "iterations: 1634\ncpu: 427670.80783353286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 271304.7224806219,
            "unit": "ns/iter",
            "extra": "iterations: 2580\ncpu: 271300.3488372072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 420891.82321107644,
            "unit": "ns/iter",
            "extra": "iterations: 1663\ncpu: 420846.9031870113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 22774.884096595662,
            "unit": "ns/iter",
            "extra": "iterations: 30767\ncpu: 22773.487827867626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 111280.3162123846,
            "unit": "ns/iter",
            "extra": "iterations: 6347\ncpu: 111274.93303923038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 91093.979039186,
            "unit": "ns/iter",
            "extra": "iterations: 7681\ncpu: 91089.57167035501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 91335.0475632061,
            "unit": "ns/iter",
            "extra": "iterations: 7674\ncpu: 91328.09486578178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 91512.07642149691,
            "unit": "ns/iter",
            "extra": "iterations: 7668\ncpu: 91502.51695357217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 154260.91576625858,
            "unit": "ns/iter",
            "extra": "iterations: 4535\ncpu: 154250.58434399037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 523838.28064991767,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 523823.7075332381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 430714.4165636741,
            "unit": "ns/iter",
            "extra": "iterations: 1618\ncpu: 430687.4536464792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 428921.4237392516,
            "unit": "ns/iter",
            "extra": "iterations: 1626\ncpu: 428877.7367773703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 426349.7105423538,
            "unit": "ns/iter",
            "extra": "iterations: 1641\ncpu: 426323.1566118283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 273202.17887764436,
            "unit": "ns/iter",
            "extra": "iterations: 2566\ncpu: 273173.53858144896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 422393.9565217319,
            "unit": "ns/iter",
            "extra": "iterations: 1656\ncpu: 422385.74879227066 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}