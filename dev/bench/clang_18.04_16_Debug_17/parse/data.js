window.BENCHMARK_DATA = {
  "lastUpdate": 1702394272989,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Parse clang-16 18.04 Debug c++-17": [
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394270738,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7430.885041492542,
            "unit": "ns/iter",
            "extra": "iterations: 94234\ncpu: 7430.721395674598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54529.21309999965,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54528.11999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100682.48997067925,
            "unit": "ns/iter",
            "extra": "iterations: 8525\ncpu: 100681.17302052783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146617.5397362276,
            "unit": "ns/iter",
            "extra": "iterations: 5914\ncpu: 146616.38484950963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 191359.98323272786,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 191351.71026156947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 239671.12938596663,
            "unit": "ns/iter",
            "extra": "iterations: 3648\ncpu: 239660.66337719304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 282928.5733376661,
            "unit": "ns/iter",
            "extra": "iterations: 3068\ncpu: 282917.79661016964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 328765.8379297554,
            "unit": "ns/iter",
            "extra": "iterations: 2647\ncpu: 328745.0321118247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 373374.01030483615,
            "unit": "ns/iter",
            "extra": "iterations: 2329\ncpu: 373359.7252039508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6252.200809442137,
            "unit": "ns/iter",
            "extra": "iterations: 112176\ncpu: 6252.047675082018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5125.863851999211,
            "unit": "ns/iter",
            "extra": "iterations: 136594\ncpu: 5125.547242192183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5096.185476363231,
            "unit": "ns/iter",
            "extra": "iterations: 137500\ncpu: 5095.961454545452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5046.942329664714,
            "unit": "ns/iter",
            "extra": "iterations: 138286\ncpu: 5046.7089944029085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9060.848638394038,
            "unit": "ns/iter",
            "extra": "iterations: 76968\ncpu: 9060.504365450586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30752.74140851155,
            "unit": "ns/iter",
            "extra": "iterations: 26567\ncpu: 30752.542628072457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 146564.4338009011,
            "unit": "ns/iter",
            "extra": "iterations: 5846\ncpu: 146562.05952788223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 111618.03432972253,
            "unit": "ns/iter",
            "extra": "iterations: 7661\ncpu: 111614.07127006924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 110867.76414115529,
            "unit": "ns/iter",
            "extra": "iterations: 7708\ncpu: 110860.92371562017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 105520.55080545474,
            "unit": "ns/iter",
            "extra": "iterations: 8070\ncpu: 105514.65923172254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 324883.32718893694,
            "unit": "ns/iter",
            "extra": "iterations: 2821\ncpu: 324869.15987238655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1779373.403070907,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1779300.1919385765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1386803.8567164068,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1386693.2835820925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1395660.7828052957,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1395617.1945701353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1378481.5163205115,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1378376.1127596465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 779041.5578058583,
            "unit": "ns/iter",
            "extra": "iterations: 1185\ncpu: 779009.1983122382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1345510.4034832765,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1345512.7721335252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37157.36902614908,
            "unit": "ns/iter",
            "extra": "iterations: 22180\ncpu: 37157.461677186664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 180101.4186288723,
            "unit": "ns/iter",
            "extra": "iterations: 4799\ncpu: 180100.45842883928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 139207.02054350966,
            "unit": "ns/iter",
            "extra": "iterations: 6182\ncpu: 139202.96020705265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 141537.1838550391,
            "unit": "ns/iter",
            "extra": "iterations: 6070\ncpu: 141532.22405271794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 130734.7712587669,
            "unit": "ns/iter",
            "extra": "iterations: 6562\ncpu: 130732.32246266368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 303591.00876576203,
            "unit": "ns/iter",
            "extra": "iterations: 2852\ncpu: 303588.92005610117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1825596.3497051452,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1825539.0962671938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1422768.305810358,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1422762.8440366946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1422758.3816794578,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1422761.52671755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1420055.0412213223,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1420038.3206106839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 803273.4670710226,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 803253.7261698416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1388949.9791356048,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1388935.1713859912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6597076.645389537,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6597031.205673774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3079833.698675445,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3079611.5894039543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27289.973833522956,
            "unit": "ns/iter",
            "extra": "iterations: 29962\ncpu: 27288.211734864228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 139732.21681848634,
            "unit": "ns/iter",
            "extra": "iterations: 6148\ncpu: 139724.18672739126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 104690.87917580512,
            "unit": "ns/iter",
            "extra": "iterations: 8202\ncpu: 104690.22189709842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103730.09338663648,
            "unit": "ns/iter",
            "extra": "iterations: 8256\ncpu: 103726.27180232563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101063.03404108575,
            "unit": "ns/iter",
            "extra": "iterations: 8666\ncpu: 101058.6429725366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 267731.18348337105,
            "unit": "ns/iter",
            "extra": "iterations: 3221\ncpu: 267716.2371934175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1781635.650763269,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1781553.6259541903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1379029.236686411,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1378919.526627212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1378621.6568047293,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1378514.4970414205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1369874.0073746503,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1369800.8849557522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 767622.9818780507,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 767582.289950572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1342137.3684972138,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1342030.2023121289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3012.029527482688,
            "unit": "ns/iter",
            "extra": "iterations: 232055\ncpu: 3011.9661287194845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19606.582400046744,
            "unit": "ns/iter",
            "extra": "iterations: 35716\ncpu: 19606.08130809719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14636.83279074149,
            "unit": "ns/iter",
            "extra": "iterations: 47611\ncpu: 14636.205918800348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15956.05616419611,
            "unit": "ns/iter",
            "extra": "iterations: 43996\ncpu: 15955.684607691643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11219.269974352355,
            "unit": "ns/iter",
            "extra": "iterations: 62380\ncpu: 11219.166399486938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 103320.95386441647,
            "unit": "ns/iter",
            "extra": "iterations: 6741\ncpu: 103320.18988280719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 123457.20063581716,
            "unit": "ns/iter",
            "extra": "iterations: 5662\ncpu: 123456.16389968235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29951.638500662055,
            "unit": "ns/iter",
            "extra": "iterations: 23397\ncpu: 29950.950976621025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30118.031053760165,
            "unit": "ns/iter",
            "extra": "iterations: 23250\ncpu: 30117.17419354848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30068.608919601353,
            "unit": "ns/iter",
            "extra": "iterations: 23297\ncpu: 30068.686955401834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62451.11987886961,
            "unit": "ns/iter",
            "extra": "iterations: 11228\ncpu: 62451.300320626535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56558.588354058105,
            "unit": "ns/iter",
            "extra": "iterations: 12382\ncpu: 56557.987401065744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20976.560584728988,
            "unit": "ns/iter",
            "extra": "iterations: 33383\ncpu: 20975.912889794276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 103860.18285798522,
            "unit": "ns/iter",
            "extra": "iterations: 6732\ncpu: 103858.71954842507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83922.77039961475,
            "unit": "ns/iter",
            "extra": "iterations: 8358\ncpu: 83922.02680067114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 83793.41651727015,
            "unit": "ns/iter",
            "extra": "iterations: 8367\ncpu: 83792.49432293538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82807.00023634835,
            "unit": "ns/iter",
            "extra": "iterations: 8462\ncpu: 82807.1141574099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 154722.670712866,
            "unit": "ns/iter",
            "extra": "iterations: 4531\ncpu: 154718.93621717356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 517800.3067258483,
            "unit": "ns/iter",
            "extra": "iterations: 1353\ncpu: 517795.34368070186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 423220.2366828621,
            "unit": "ns/iter",
            "extra": "iterations: 1652\ncpu: 423209.7457627166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 429224.94175353216,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 429225.56713672343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 426433.0382978804,
            "unit": "ns/iter",
            "extra": "iterations: 1645\ncpu: 426421.8237082112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 271876.09231962106,
            "unit": "ns/iter",
            "extra": "iterations: 2578\ncpu: 271869.8991466272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 418894.71274685493,
            "unit": "ns/iter",
            "extra": "iterations: 1671\ncpu: 418868.5218432039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21465.17192143921,
            "unit": "ns/iter",
            "extra": "iterations: 32637\ncpu: 21464.788430309134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109145.24292637636,
            "unit": "ns/iter",
            "extra": "iterations: 6397\ncpu: 109144.16132562149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86112.4319526665,
            "unit": "ns/iter",
            "extra": "iterations: 8112\ncpu: 86110.8604536488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86037.5201672463,
            "unit": "ns/iter",
            "extra": "iterations: 8132\ncpu: 86036.59616330554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84783.32236922372,
            "unit": "ns/iter",
            "extra": "iterations: 8239\ncpu: 84781.8303192128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 156706.20098369336,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 156703.4875922179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 520460.78729835054,
            "unit": "ns/iter",
            "extra": "iterations: 992\ncpu: 520424.29435483046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 434454.0557620731,
            "unit": "ns/iter",
            "extra": "iterations: 1614\ncpu: 434450.12391574227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 429315.8423312632,
            "unit": "ns/iter",
            "extra": "iterations: 1630\ncpu: 429312.69938650774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 425822.2799756645,
            "unit": "ns/iter",
            "extra": "iterations: 1643\ncpu: 425817.9549604409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 268870.6268255079,
            "unit": "ns/iter",
            "extra": "iterations: 2602\ncpu: 268871.0222905471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 421627.57824771304,
            "unit": "ns/iter",
            "extra": "iterations: 1655\ncpu: 421628.8821752232 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702394270738,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7430.885041492542,
            "unit": "ns/iter",
            "extra": "iterations: 94234\ncpu: 7430.721395674598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54529.21309999965,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54528.11999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100682.48997067925,
            "unit": "ns/iter",
            "extra": "iterations: 8525\ncpu: 100681.17302052783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146617.5397362276,
            "unit": "ns/iter",
            "extra": "iterations: 5914\ncpu: 146616.38484950963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 191359.98323272786,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 191351.71026156947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 239671.12938596663,
            "unit": "ns/iter",
            "extra": "iterations: 3648\ncpu: 239660.66337719304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 282928.5733376661,
            "unit": "ns/iter",
            "extra": "iterations: 3068\ncpu: 282917.79661016964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 328765.8379297554,
            "unit": "ns/iter",
            "extra": "iterations: 2647\ncpu: 328745.0321118247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 373374.01030483615,
            "unit": "ns/iter",
            "extra": "iterations: 2329\ncpu: 373359.7252039508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6252.200809442137,
            "unit": "ns/iter",
            "extra": "iterations: 112176\ncpu: 6252.047675082018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5125.863851999211,
            "unit": "ns/iter",
            "extra": "iterations: 136594\ncpu: 5125.547242192183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5096.185476363231,
            "unit": "ns/iter",
            "extra": "iterations: 137500\ncpu: 5095.961454545452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5046.942329664714,
            "unit": "ns/iter",
            "extra": "iterations: 138286\ncpu: 5046.7089944029085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 9060.848638394038,
            "unit": "ns/iter",
            "extra": "iterations: 76968\ncpu: 9060.504365450586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30752.74140851155,
            "unit": "ns/iter",
            "extra": "iterations: 26567\ncpu: 30752.542628072457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 146564.4338009011,
            "unit": "ns/iter",
            "extra": "iterations: 5846\ncpu: 146562.05952788223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 111618.03432972253,
            "unit": "ns/iter",
            "extra": "iterations: 7661\ncpu: 111614.07127006924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 110867.76414115529,
            "unit": "ns/iter",
            "extra": "iterations: 7708\ncpu: 110860.92371562017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 105520.55080545474,
            "unit": "ns/iter",
            "extra": "iterations: 8070\ncpu: 105514.65923172254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 324883.32718893694,
            "unit": "ns/iter",
            "extra": "iterations: 2821\ncpu: 324869.15987238655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1779373.403070907,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1779300.1919385765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1386803.8567164068,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1386693.2835820925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1395660.7828052957,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1395617.1945701353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1378481.5163205115,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1378376.1127596465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 779041.5578058583,
            "unit": "ns/iter",
            "extra": "iterations: 1185\ncpu: 779009.1983122382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1345510.4034832765,
            "unit": "ns/iter",
            "extra": "iterations: 689\ncpu: 1345512.7721335252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_parse",
            "value": 37157.36902614908,
            "unit": "ns/iter",
            "extra": "iterations: 22180\ncpu: 37157.461677186664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_parse",
            "value": 180101.4186288723,
            "unit": "ns/iter",
            "extra": "iterations: 4799\ncpu: 180100.45842883928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_parse",
            "value": 139207.02054350966,
            "unit": "ns/iter",
            "extra": "iterations: 6182\ncpu: 139202.96020705265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_parse",
            "value": 141537.1838550391,
            "unit": "ns/iter",
            "extra": "iterations: 6070\ncpu: 141532.22405271794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_parse",
            "value": 130734.7712587669,
            "unit": "ns/iter",
            "extra": "iterations: 6562\ncpu: 130732.32246266368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_parse",
            "value": 303591.00876576203,
            "unit": "ns/iter",
            "extra": "iterations: 2852\ncpu: 303588.92005610117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_parse",
            "value": 1825596.3497051452,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1825539.0962671938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_parse",
            "value": 1422768.305810358,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1422762.8440366946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_parse",
            "value": 1422758.3816794578,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1422761.52671755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_parse",
            "value": 1420055.0412213223,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1420038.3206106839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_parse",
            "value": 803273.4670710226,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 803253.7261698416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_parse",
            "value": 1388949.9791356048,
            "unit": "ns/iter",
            "extra": "iterations: 671\ncpu: 1388935.1713859912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_parse",
            "value": 6597076.645389537,
            "unit": "ns/iter",
            "extra": "iterations: 141\ncpu: 6597031.205673774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_parse",
            "value": 3079833.698675445,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3079611.5894039543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_parse",
            "value": 27289.973833522956,
            "unit": "ns/iter",
            "extra": "iterations: 29962\ncpu: 27288.211734864228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_parse",
            "value": 139732.21681848634,
            "unit": "ns/iter",
            "extra": "iterations: 6148\ncpu: 139724.18672739126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_parse",
            "value": 104690.87917580512,
            "unit": "ns/iter",
            "extra": "iterations: 8202\ncpu: 104690.22189709842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_parse",
            "value": 103730.09338663648,
            "unit": "ns/iter",
            "extra": "iterations: 8256\ncpu: 103726.27180232563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_parse",
            "value": 101063.03404108575,
            "unit": "ns/iter",
            "extra": "iterations: 8666\ncpu: 101058.6429725366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_parse",
            "value": 267731.18348337105,
            "unit": "ns/iter",
            "extra": "iterations: 3221\ncpu: 267716.2371934175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_parse",
            "value": 1781635.650763269,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1781553.6259541903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_parse",
            "value": 1379029.236686411,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1378919.526627212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_parse",
            "value": 1378621.6568047293,
            "unit": "ns/iter",
            "extra": "iterations: 676\ncpu: 1378514.4970414205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_parse",
            "value": 1369874.0073746503,
            "unit": "ns/iter",
            "extra": "iterations: 678\ncpu: 1369800.8849557522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_parse",
            "value": 767622.9818780507,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 767582.289950572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_parse",
            "value": 1342137.3684972138,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1342030.2023121289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_parse",
            "value": 3012.029527482688,
            "unit": "ns/iter",
            "extra": "iterations: 232055\ncpu: 3011.9661287194845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_parse",
            "value": 19606.582400046744,
            "unit": "ns/iter",
            "extra": "iterations: 35716\ncpu: 19606.08130809719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_parse",
            "value": 14636.83279074149,
            "unit": "ns/iter",
            "extra": "iterations: 47611\ncpu: 14636.205918800348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_parse",
            "value": 15956.05616419611,
            "unit": "ns/iter",
            "extra": "iterations: 43996\ncpu: 15955.684607691643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_parse",
            "value": 11219.269974352355,
            "unit": "ns/iter",
            "extra": "iterations: 62380\ncpu: 11219.166399486938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_parse",
            "value": 103320.95386441647,
            "unit": "ns/iter",
            "extra": "iterations: 6741\ncpu: 103320.18988280719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_parse",
            "value": 123457.20063581716,
            "unit": "ns/iter",
            "extra": "iterations: 5662\ncpu: 123456.16389968235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_parse",
            "value": 29951.638500662055,
            "unit": "ns/iter",
            "extra": "iterations: 23397\ncpu: 29950.950976621025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_parse",
            "value": 30118.031053760165,
            "unit": "ns/iter",
            "extra": "iterations: 23250\ncpu: 30117.17419354848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_parse",
            "value": 30068.608919601353,
            "unit": "ns/iter",
            "extra": "iterations: 23297\ncpu: 30068.686955401834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_parse",
            "value": 62451.11987886961,
            "unit": "ns/iter",
            "extra": "iterations: 11228\ncpu: 62451.300320626535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_parse",
            "value": 56558.588354058105,
            "unit": "ns/iter",
            "extra": "iterations: 12382\ncpu: 56557.987401065744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_parse",
            "value": 20976.560584728988,
            "unit": "ns/iter",
            "extra": "iterations: 33383\ncpu: 20975.912889794276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_parse",
            "value": 103860.18285798522,
            "unit": "ns/iter",
            "extra": "iterations: 6732\ncpu: 103858.71954842507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_parse",
            "value": 83922.77039961475,
            "unit": "ns/iter",
            "extra": "iterations: 8358\ncpu: 83922.02680067114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_parse",
            "value": 83793.41651727015,
            "unit": "ns/iter",
            "extra": "iterations: 8367\ncpu: 83792.49432293538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_parse",
            "value": 82807.00023634835,
            "unit": "ns/iter",
            "extra": "iterations: 8462\ncpu: 82807.1141574099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_parse",
            "value": 154722.670712866,
            "unit": "ns/iter",
            "extra": "iterations: 4531\ncpu: 154718.93621717356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_parse",
            "value": 517800.3067258483,
            "unit": "ns/iter",
            "extra": "iterations: 1353\ncpu: 517795.34368070186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_parse",
            "value": 423220.2366828621,
            "unit": "ns/iter",
            "extra": "iterations: 1652\ncpu: 423209.7457627166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_parse",
            "value": 429224.94175353216,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 429225.56713672343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_parse",
            "value": 426433.0382978804,
            "unit": "ns/iter",
            "extra": "iterations: 1645\ncpu: 426421.8237082112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_parse",
            "value": 271876.09231962106,
            "unit": "ns/iter",
            "extra": "iterations: 2578\ncpu: 271869.8991466272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_parse",
            "value": 418894.71274685493,
            "unit": "ns/iter",
            "extra": "iterations: 1671\ncpu: 418868.5218432039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_parse",
            "value": 21465.17192143921,
            "unit": "ns/iter",
            "extra": "iterations: 32637\ncpu: 21464.788430309134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_parse",
            "value": 109145.24292637636,
            "unit": "ns/iter",
            "extra": "iterations: 6397\ncpu: 109144.16132562149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_parse",
            "value": 86112.4319526665,
            "unit": "ns/iter",
            "extra": "iterations: 8112\ncpu: 86110.8604536488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_parse",
            "value": 86037.5201672463,
            "unit": "ns/iter",
            "extra": "iterations: 8132\ncpu: 86036.59616330554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_parse",
            "value": 84783.32236922372,
            "unit": "ns/iter",
            "extra": "iterations: 8239\ncpu: 84781.8303192128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_parse",
            "value": 156706.20098369336,
            "unit": "ns/iter",
            "extra": "iterations: 4473\ncpu: 156703.4875922179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_parse",
            "value": 520460.78729835054,
            "unit": "ns/iter",
            "extra": "iterations: 992\ncpu: 520424.29435483046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_parse",
            "value": 434454.0557620731,
            "unit": "ns/iter",
            "extra": "iterations: 1614\ncpu: 434450.12391574227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_parse",
            "value": 429315.8423312632,
            "unit": "ns/iter",
            "extra": "iterations: 1630\ncpu: 429312.69938650774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_parse",
            "value": 425822.2799756645,
            "unit": "ns/iter",
            "extra": "iterations: 1643\ncpu: 425817.9549604409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_parse",
            "value": 268870.6268255079,
            "unit": "ns/iter",
            "extra": "iterations: 2602\ncpu: 268871.0222905471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_parse",
            "value": 421627.57824771304,
            "unit": "ns/iter",
            "extra": "iterations: 1655\ncpu: 421628.8821752232 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}