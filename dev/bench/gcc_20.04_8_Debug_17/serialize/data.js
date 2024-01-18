window.BENCHMARK_DATA = {
  "lastUpdate": 1705573962747,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-8 20.04 Debug c++-17": [
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
        "date": 1702398827356,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8485.71047935962,
            "unit": "ns/iter",
            "extra": "iterations: 82944\ncpu: 8485.362413194445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99851.97661673452,
            "unit": "ns/iter",
            "extra": "iterations: 8211\ncpu: 99845.39033004505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 190800.22792517918,
            "unit": "ns/iter",
            "extra": "iterations: 4598\ncpu: 190793.73640713355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 285134.7678630196,
            "unit": "ns/iter",
            "extra": "iterations: 3037\ncpu: 285122.78564372734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 371931.11438475654,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 371923.1802426341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 462020.5917065228,
            "unit": "ns/iter",
            "extra": "iterations: 1881\ncpu: 461984.79532163736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 546601.3416666763,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 546566.9230769231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 512379.68100002717,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512329.79999999894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 585061.871999983,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 585054.3000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6618.216964713849,
            "unit": "ns/iter",
            "extra": "iterations: 106303\ncpu: 6617.797239964995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5438.2722844810905,
            "unit": "ns/iter",
            "extra": "iterations: 128318\ncpu: 5438.237036113412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5412.323284220675,
            "unit": "ns/iter",
            "extra": "iterations: 129431\ncpu: 5412.231227449374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5423.362150005305,
            "unit": "ns/iter",
            "extra": "iterations: 128502\ncpu: 5423.304695646759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9373.152366094731,
            "unit": "ns/iter",
            "extra": "iterations: 74997\ncpu: 9372.960251743394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 52130.31113626363,
            "unit": "ns/iter",
            "extra": "iterations: 15903\ncpu: 52129.981764446995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 214421.98825294612,
            "unit": "ns/iter",
            "extra": "iterations: 4001\ncpu: 214421.0697325668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 172449.09740391406,
            "unit": "ns/iter",
            "extra": "iterations: 4969\ncpu: 172446.8907224789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 172247.89730165715,
            "unit": "ns/iter",
            "extra": "iterations: 4966\ncpu: 172247.9057591625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 174440.4994882296,
            "unit": "ns/iter",
            "extra": "iterations: 4885\ncpu: 174437.97338792225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 370854.5499139463,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 370842.8141135972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3077764.9640523787,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3077716.0130718956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2510581.4973117243,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2510532.5268817195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2468906.332453865,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2468902.9023746694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2504831.7807487817,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2504793.3155080257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1477934.9259842501,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1477903.1496063033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2423952.9701897725,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2423863.4146341435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10081660.123809602,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10081570.47619048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5846788.393749947,
            "unit": "ns/iter",
            "extra": "iterations: 160\ncpu: 5846663.750000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12170785.413793223,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12170186.206896545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 50869.54929316775,
            "unit": "ns/iter",
            "extra": "iterations: 16199\ncpu: 50868.76350392009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 216315.50327950958,
            "unit": "ns/iter",
            "extra": "iterations: 3964\ncpu: 216313.2946518662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 174398.9109253977,
            "unit": "ns/iter",
            "extra": "iterations: 4906\ncpu: 174398.61394211126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 173580.70540431188,
            "unit": "ns/iter",
            "extra": "iterations: 4922\ncpu: 173566.47704185254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 174360.03324495358,
            "unit": "ns/iter",
            "extra": "iterations: 4903\ncpu: 174354.55843361345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 370450.6865671534,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 370421.02345415915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3063385.5606557056,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3063324.590163936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2529866.5284553505,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2529786.7208672087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2489084.458666639,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2488952.533333342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2537562.940700793,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2537478.706199457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1463404.877358448,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1463387.1069182456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2444275.9007832897,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2444262.663185378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10222206.943396104,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 10221850.000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5830487.739130607,
            "unit": "ns/iter",
            "extra": "iterations: 161\ncpu: 5830339.130434795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 50402.036964979256,
            "unit": "ns/iter",
            "extra": "iterations: 16448\ncpu: 50401.76921206214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 212666.33407738106,
            "unit": "ns/iter",
            "extra": "iterations: 4032\ncpu: 212663.6904761913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 172505.05633802537,
            "unit": "ns/iter",
            "extra": "iterations: 4970\ncpu: 172501.48893360104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 170650.98648110774,
            "unit": "ns/iter",
            "extra": "iterations: 5030\ncpu: 170646.4811133203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 171636.55392943142,
            "unit": "ns/iter",
            "extra": "iterations: 4988\ncpu: 171629.97193263797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 369778.7185908294,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 369765.8319185063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3065603.2491802,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3065589.5081967264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2512304.4623656613,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2512302.1505376464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2488244.92780751,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2488206.149732617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2523664.5822102497,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2523624.797843656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1453340.3198127463,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1453321.9968798812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2438323.9216710688,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2438287.206266318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2952.785621851599,
            "unit": "ns/iter",
            "extra": "iterations: 237235\ncpu: 2952.715661685676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20884.64579168786,
            "unit": "ns/iter",
            "extra": "iterations: 33517\ncpu: 20884.563057552776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16362.87353990386,
            "unit": "ns/iter",
            "extra": "iterations: 42891\ncpu: 16362.386048355189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15767.723729194111,
            "unit": "ns/iter",
            "extra": "iterations: 44460\ncpu: 15767.620332883456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12315.872448171851,
            "unit": "ns/iter",
            "extra": "iterations: 56871\ncpu: 12315.8586977546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 83697.725621416,
            "unit": "ns/iter",
            "extra": "iterations: 8368\ncpu: 83696.66586998173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 194397.56144242926,
            "unit": "ns/iter",
            "extra": "iterations: 3605\ncpu: 194396.865464633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 47344.96488135769,
            "unit": "ns/iter",
            "extra": "iterations: 14750\ncpu: 47344.98983050845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 47207.945960515295,
            "unit": "ns/iter",
            "extra": "iterations: 14841\ncpu: 47206.02385284005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 47691.157248995005,
            "unit": "ns/iter",
            "extra": "iterations: 14671\ncpu: 47690.00749778492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 100260.39579458896,
            "unit": "ns/iter",
            "extra": "iterations: 6991\ncpu: 100256.28665426973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 89861.60197537029,
            "unit": "ns/iter",
            "extra": "iterations: 7796\ncpu: 89862.7757824527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26809.80052845108,
            "unit": "ns/iter",
            "extra": "iterations: 26114\ncpu: 26810.163130887304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 130647.04212488362,
            "unit": "ns/iter",
            "extra": "iterations: 5365\ncpu: 130646.7847157522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 103999.92193307809,
            "unit": "ns/iter",
            "extra": "iterations: 6725\ncpu: 103998.86988847487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 103758.62514862533,
            "unit": "ns/iter",
            "extra": "iterations: 6728\ncpu: 103754.99405469644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 105083.64130271628,
            "unit": "ns/iter",
            "extra": "iterations: 6663\ncpu: 105083.31082095276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 184369.71011058058,
            "unit": "ns/iter",
            "extra": "iterations: 3798\ncpu: 184367.6671932597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 822701.4112808416,
            "unit": "ns/iter",
            "extra": "iterations: 851\ncpu: 822690.2467685103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 695884.9224652072,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 695881.610337965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 688906.2972440685,
            "unit": "ns/iter",
            "extra": "iterations: 1016\ncpu: 688880.8070866121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 696851.3389661915,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 696836.3817097393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 441992.7070707178,
            "unit": "ns/iter",
            "extra": "iterations: 1584\ncpu: 441978.4090909121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 680488.1885325873,
            "unit": "ns/iter",
            "extra": "iterations: 1029\ncpu: 680477.2594752227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26758.747543489724,
            "unit": "ns/iter",
            "extra": "iterations: 26155\ncpu: 26757.931561843074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 129818.83848861017,
            "unit": "ns/iter",
            "extra": "iterations: 5399\ncpu: 129819.18873865584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 104328.74823281598,
            "unit": "ns/iter",
            "extra": "iterations: 6649\ncpu: 104322.7252218392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 104185.0792256087,
            "unit": "ns/iter",
            "extra": "iterations: 6715\ncpu: 104172.68801191394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 106908.46688034214,
            "unit": "ns/iter",
            "extra": "iterations: 6552\ncpu: 106902.64041514063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 185413.0976645539,
            "unit": "ns/iter",
            "extra": "iterations: 3768\ncpu: 185403.15817410024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 826458.3676123038,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 826442.316784867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 700490.2494989535,
            "unit": "ns/iter",
            "extra": "iterations: 998\ncpu: 700495.8917835728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 694079.1233830906,
            "unit": "ns/iter",
            "extra": "iterations: 1005\ncpu: 694075.8208955274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 697864.2917082717,
            "unit": "ns/iter",
            "extra": "iterations: 1001\ncpu: 697867.0329670268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 441843.85299685167,
            "unit": "ns/iter",
            "extra": "iterations: 1585\ncpu: 441834.0063091489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 685024.3655913936,
            "unit": "ns/iter",
            "extra": "iterations: 1023\ncpu: 685013.2942326524 ns\nthreads: 1"
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702398827356,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8485.71047935962,
            "unit": "ns/iter",
            "extra": "iterations: 82944\ncpu: 8485.362413194445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99851.97661673452,
            "unit": "ns/iter",
            "extra": "iterations: 8211\ncpu: 99845.39033004505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 190800.22792517918,
            "unit": "ns/iter",
            "extra": "iterations: 4598\ncpu: 190793.73640713355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 285134.7678630196,
            "unit": "ns/iter",
            "extra": "iterations: 3037\ncpu: 285122.78564372734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 371931.11438475654,
            "unit": "ns/iter",
            "extra": "iterations: 2308\ncpu: 371923.1802426341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 462020.5917065228,
            "unit": "ns/iter",
            "extra": "iterations: 1881\ncpu: 461984.79532163736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 546601.3416666763,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 546566.9230769231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 512379.68100002717,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512329.79999999894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 585061.871999983,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 585054.3000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6618.216964713849,
            "unit": "ns/iter",
            "extra": "iterations: 106303\ncpu: 6617.797239964995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5438.2722844810905,
            "unit": "ns/iter",
            "extra": "iterations: 128318\ncpu: 5438.237036113412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5412.323284220675,
            "unit": "ns/iter",
            "extra": "iterations: 129431\ncpu: 5412.231227449374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5423.362150005305,
            "unit": "ns/iter",
            "extra": "iterations: 128502\ncpu: 5423.304695646759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9373.152366094731,
            "unit": "ns/iter",
            "extra": "iterations: 74997\ncpu: 9372.960251743394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 52130.31113626363,
            "unit": "ns/iter",
            "extra": "iterations: 15903\ncpu: 52129.981764446995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 214421.98825294612,
            "unit": "ns/iter",
            "extra": "iterations: 4001\ncpu: 214421.0697325668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 172449.09740391406,
            "unit": "ns/iter",
            "extra": "iterations: 4969\ncpu: 172446.8907224789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 172247.89730165715,
            "unit": "ns/iter",
            "extra": "iterations: 4966\ncpu: 172247.9057591625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 174440.4994882296,
            "unit": "ns/iter",
            "extra": "iterations: 4885\ncpu: 174437.97338792225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 370854.5499139463,
            "unit": "ns/iter",
            "extra": "iterations: 2324\ncpu: 370842.8141135972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3077764.9640523787,
            "unit": "ns/iter",
            "extra": "iterations: 306\ncpu: 3077716.0130718956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2510581.4973117243,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2510532.5268817195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2468906.332453865,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2468902.9023746694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2504831.7807487817,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2504793.3155080257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1477934.9259842501,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1477903.1496063033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2423952.9701897725,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2423863.4146341435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10081660.123809602,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10081570.47619048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5846788.393749947,
            "unit": "ns/iter",
            "extra": "iterations: 160\ncpu: 5846663.750000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12170785.413793223,
            "unit": "ns/iter",
            "extra": "iterations: 87\ncpu: 12170186.206896545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 50869.54929316775,
            "unit": "ns/iter",
            "extra": "iterations: 16199\ncpu: 50868.76350392009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 216315.50327950958,
            "unit": "ns/iter",
            "extra": "iterations: 3964\ncpu: 216313.2946518662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 174398.9109253977,
            "unit": "ns/iter",
            "extra": "iterations: 4906\ncpu: 174398.61394211126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 173580.70540431188,
            "unit": "ns/iter",
            "extra": "iterations: 4922\ncpu: 173566.47704185254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 174360.03324495358,
            "unit": "ns/iter",
            "extra": "iterations: 4903\ncpu: 174354.55843361345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 370450.6865671534,
            "unit": "ns/iter",
            "extra": "iterations: 2345\ncpu: 370421.02345415915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3063385.5606557056,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3063324.590163936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2529866.5284553505,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2529786.7208672087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2489084.458666639,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2488952.533333342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2537562.940700793,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2537478.706199457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1463404.877358448,
            "unit": "ns/iter",
            "extra": "iterations: 636\ncpu: 1463387.1069182456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2444275.9007832897,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2444262.663185378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10222206.943396104,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 10221850.000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5830487.739130607,
            "unit": "ns/iter",
            "extra": "iterations: 161\ncpu: 5830339.130434795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 50402.036964979256,
            "unit": "ns/iter",
            "extra": "iterations: 16448\ncpu: 50401.76921206214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 212666.33407738106,
            "unit": "ns/iter",
            "extra": "iterations: 4032\ncpu: 212663.6904761913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 172505.05633802537,
            "unit": "ns/iter",
            "extra": "iterations: 4970\ncpu: 172501.48893360104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 170650.98648110774,
            "unit": "ns/iter",
            "extra": "iterations: 5030\ncpu: 170646.4811133203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 171636.55392943142,
            "unit": "ns/iter",
            "extra": "iterations: 4988\ncpu: 171629.97193263797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 369778.7185908294,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 369765.8319185063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3065603.2491802,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3065589.5081967264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2512304.4623656613,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2512302.1505376464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2488244.92780751,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2488206.149732617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2523664.5822102497,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2523624.797843656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1453340.3198127463,
            "unit": "ns/iter",
            "extra": "iterations: 641\ncpu: 1453321.9968798812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2438323.9216710688,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2438287.206266318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2952.785621851599,
            "unit": "ns/iter",
            "extra": "iterations: 237235\ncpu: 2952.715661685676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20884.64579168786,
            "unit": "ns/iter",
            "extra": "iterations: 33517\ncpu: 20884.563057552776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16362.87353990386,
            "unit": "ns/iter",
            "extra": "iterations: 42891\ncpu: 16362.386048355189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15767.723729194111,
            "unit": "ns/iter",
            "extra": "iterations: 44460\ncpu: 15767.620332883456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12315.872448171851,
            "unit": "ns/iter",
            "extra": "iterations: 56871\ncpu: 12315.8586977546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 83697.725621416,
            "unit": "ns/iter",
            "extra": "iterations: 8368\ncpu: 83696.66586998173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 194397.56144242926,
            "unit": "ns/iter",
            "extra": "iterations: 3605\ncpu: 194396.865464633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 47344.96488135769,
            "unit": "ns/iter",
            "extra": "iterations: 14750\ncpu: 47344.98983050845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 47207.945960515295,
            "unit": "ns/iter",
            "extra": "iterations: 14841\ncpu: 47206.02385284005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 47691.157248995005,
            "unit": "ns/iter",
            "extra": "iterations: 14671\ncpu: 47690.00749778492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 100260.39579458896,
            "unit": "ns/iter",
            "extra": "iterations: 6991\ncpu: 100256.28665426973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 89861.60197537029,
            "unit": "ns/iter",
            "extra": "iterations: 7796\ncpu: 89862.7757824527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26809.80052845108,
            "unit": "ns/iter",
            "extra": "iterations: 26114\ncpu: 26810.163130887304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 130647.04212488362,
            "unit": "ns/iter",
            "extra": "iterations: 5365\ncpu: 130646.7847157522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 103999.92193307809,
            "unit": "ns/iter",
            "extra": "iterations: 6725\ncpu: 103998.86988847487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 103758.62514862533,
            "unit": "ns/iter",
            "extra": "iterations: 6728\ncpu: 103754.99405469644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 105083.64130271628,
            "unit": "ns/iter",
            "extra": "iterations: 6663\ncpu: 105083.31082095276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 184369.71011058058,
            "unit": "ns/iter",
            "extra": "iterations: 3798\ncpu: 184367.6671932597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 822701.4112808416,
            "unit": "ns/iter",
            "extra": "iterations: 851\ncpu: 822690.2467685103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 695884.9224652072,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 695881.610337965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 688906.2972440685,
            "unit": "ns/iter",
            "extra": "iterations: 1016\ncpu: 688880.8070866121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 696851.3389661915,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 696836.3817097393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 441992.7070707178,
            "unit": "ns/iter",
            "extra": "iterations: 1584\ncpu: 441978.4090909121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 680488.1885325873,
            "unit": "ns/iter",
            "extra": "iterations: 1029\ncpu: 680477.2594752227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26758.747543489724,
            "unit": "ns/iter",
            "extra": "iterations: 26155\ncpu: 26757.931561843074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 129818.83848861017,
            "unit": "ns/iter",
            "extra": "iterations: 5399\ncpu: 129819.18873865584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 104328.74823281598,
            "unit": "ns/iter",
            "extra": "iterations: 6649\ncpu: 104322.7252218392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 104185.0792256087,
            "unit": "ns/iter",
            "extra": "iterations: 6715\ncpu: 104172.68801191394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 106908.46688034214,
            "unit": "ns/iter",
            "extra": "iterations: 6552\ncpu: 106902.64041514063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 185413.0976645539,
            "unit": "ns/iter",
            "extra": "iterations: 3768\ncpu: 185403.15817410024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 826458.3676123038,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 826442.316784867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 700490.2494989535,
            "unit": "ns/iter",
            "extra": "iterations: 998\ncpu: 700495.8917835728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 694079.1233830906,
            "unit": "ns/iter",
            "extra": "iterations: 1005\ncpu: 694075.8208955274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 697864.2917082717,
            "unit": "ns/iter",
            "extra": "iterations: 1001\ncpu: 697867.0329670268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 441843.85299685167,
            "unit": "ns/iter",
            "extra": "iterations: 1585\ncpu: 441834.0063091489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 685024.3655913936,
            "unit": "ns/iter",
            "extra": "iterations: 1023\ncpu: 685013.2942326524 ns\nthreads: 1"
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
        "date": 1702409119857,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8238.354862221438,
            "unit": "ns/iter",
            "extra": "iterations: 85064\ncpu: 8237.808003385686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 96208.14568568017,
            "unit": "ns/iter",
            "extra": "iterations: 8889\ncpu: 96200.89998875014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 185579.49893887932,
            "unit": "ns/iter",
            "extra": "iterations: 4712\ncpu: 185573.17487266558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 278488.57992327306,
            "unit": "ns/iter",
            "extra": "iterations: 3128\ncpu: 278476.56649616366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 361013.4043716068,
            "unit": "ns/iter",
            "extra": "iterations: 2379\ncpu: 360999.7898276586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 450933.18611985556,
            "unit": "ns/iter",
            "extra": "iterations: 1902\ncpu: 450922.23974763433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 538314.2620221955,
            "unit": "ns/iter",
            "extra": "iterations: 1622\ncpu: 538294.5129469791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 502244.8979999581,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502243.7000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 572994.7819999666,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572988.1999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6342.121330635537,
            "unit": "ns/iter",
            "extra": "iterations: 110203\ncpu: 6342.0024863206945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5195.692085881984,
            "unit": "ns/iter",
            "extra": "iterations: 134557\ncpu: 5195.711111276259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5207.997264297155,
            "unit": "ns/iter",
            "extra": "iterations: 134152\ncpu: 5208.070695926999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5237.429101496854,
            "unit": "ns/iter",
            "extra": "iterations: 133945\ncpu: 5237.199596849452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9129.708745831385,
            "unit": "ns/iter",
            "extra": "iterations: 76768\ncpu: 9129.534441433922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 50213.90124129886,
            "unit": "ns/iter",
            "extra": "iterations: 16515\ncpu: 50213.32122313052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 217203.50514686588,
            "unit": "ns/iter",
            "extra": "iterations: 3983\ncpu: 217206.52774290735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 168707.60450098265,
            "unit": "ns/iter",
            "extra": "iterations: 5110\ncpu: 168703.65949119412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 166583.49064248477,
            "unit": "ns/iter",
            "extra": "iterations: 5183\ncpu: 166585.66467296932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 167200.84431950407,
            "unit": "ns/iter",
            "extra": "iterations: 5158\ncpu: 167196.10314075157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 362509.4765072869,
            "unit": "ns/iter",
            "extra": "iterations: 2405\ncpu: 362509.68814968946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2980395.4038461945,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2980278.5256410292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2443173.6404199777,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2443076.6404199526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2428919.148825145,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2428782.2454308043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2454018.468420983,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2453894.210526314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1475321.473851013,
            "unit": "ns/iter",
            "extra": "iterations: 631\ncpu: 1475247.702060221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2374518.5535714733,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2374368.877551016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10185194.019047253,
            "unit": "ns/iter",
            "extra": "iterations: 105\ncpu: 10184967.619047638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5719434.938650278,
            "unit": "ns/iter",
            "extra": "iterations: 163\ncpu: 5719166.257668707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12051581.079545444,
            "unit": "ns/iter",
            "extra": "iterations: 88\ncpu: 12050980.681818191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 50199.245610848055,
            "unit": "ns/iter",
            "extra": "iterations: 16518\ncpu: 50197.83872139473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 211209.7434516533,
            "unit": "ns/iter",
            "extra": "iterations: 4085\ncpu: 211194.76132191007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 169406.78216460213,
            "unit": "ns/iter",
            "extra": "iterations: 5091\ncpu: 169397.62325672695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 169450.0652900749,
            "unit": "ns/iter",
            "extra": "iterations: 5085\ncpu: 169442.71386430683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 168488.01278520806,
            "unit": "ns/iter",
            "extra": "iterations: 5084\ncpu: 168485.0314712834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 363409.3499792039,
            "unit": "ns/iter",
            "extra": "iterations: 2403\ncpu: 363396.04660840775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3031139.1456312044,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3030959.870550159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2447289.8684209846,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2447181.578947372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2441800.3141361657,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2441680.628272247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2467645.6137566552,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2467488.3597883596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1474100.4936507717,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1474060.793650797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2402214.4097938337,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2402214.9484536084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10280733.773585035,
            "unit": "ns/iter",
            "extra": "iterations: 106\ncpu: 10280465.09433964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 5887276.679245173,
            "unit": "ns/iter",
            "extra": "iterations: 159\ncpu: 5887158.490566025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 49934.822883543275,
            "unit": "ns/iter",
            "extra": "iterations: 16667\ncpu: 49935.50728985401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 207864.01158860643,
            "unit": "ns/iter",
            "extra": "iterations: 4142\ncpu: 207859.10188314706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 166356.341392644,
            "unit": "ns/iter",
            "extra": "iterations: 5170\ncpu: 166354.70019342416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 167707.3534919983,
            "unit": "ns/iter",
            "extra": "iterations: 5126\ncpu: 167703.51150994972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 169294.7257176564,
            "unit": "ns/iter",
            "extra": "iterations: 5086\ncpu: 169296.97208021968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 359478.5584092789,
            "unit": "ns/iter",
            "extra": "iterations: 2414\ncpu: 359468.10273405135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3012470.1483872184,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3012377.7419354776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2479422.153846187,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2479375.066312998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2459777.701846908,
            "unit": "ns/iter",
            "extra": "iterations: 379\ncpu: 2459793.667546172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2481668.850666665,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2481701.3333333386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1490509.618210803,
            "unit": "ns/iter",
            "extra": "iterations: 626\ncpu: 1490488.9776357803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2406403.945876361,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2406436.8556701057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2967.1239509963584,
            "unit": "ns/iter",
            "extra": "iterations: 235819\ncpu: 2967.036583142157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 20144.872504016028,
            "unit": "ns/iter",
            "extra": "iterations: 34856\ncpu: 20144.930571494173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16260.122340913267,
            "unit": "ns/iter",
            "extra": "iterations: 43624\ncpu: 16259.758389877241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15464.852156602732,
            "unit": "ns/iter",
            "extra": "iterations: 45210\ncpu: 15465.069674850676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12416.095480790118,
            "unit": "ns/iter",
            "extra": "iterations: 56116\ncpu: 12416.278779670725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 80891.06220372385,
            "unit": "ns/iter",
            "extra": "iterations: 8649\ncpu: 80889.70979303996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 192279.37565122577,
            "unit": "ns/iter",
            "extra": "iterations: 3647\ncpu: 192277.04962983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 47436.02629254805,
            "unit": "ns/iter",
            "extra": "iterations: 14719\ncpu: 47435.92635369224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 47036.28029639725,
            "unit": "ns/iter",
            "extra": "iterations: 14845\ncpu: 47035.93128999644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 47811.67907040414,
            "unit": "ns/iter",
            "extra": "iterations: 14673\ncpu: 47811.78354801335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 100800.27364329998,
            "unit": "ns/iter",
            "extra": "iterations: 6947\ncpu: 100799.02116021395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 88926.35862507919,
            "unit": "ns/iter",
            "extra": "iterations: 7855\ncpu: 88926.41629535268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 23767.050640654918,
            "unit": "ns/iter",
            "extra": "iterations: 29423\ncpu: 23767.035992250963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 115613.58038956363,
            "unit": "ns/iter",
            "extra": "iterations: 6058\ncpu: 115611.73654671466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 92770.89373007603,
            "unit": "ns/iter",
            "extra": "iterations: 7528\ncpu: 92770.21785334796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 92565.25673890492,
            "unit": "ns/iter",
            "extra": "iterations: 7568\ncpu: 92562.01109936484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 94097.48195841651,
            "unit": "ns/iter",
            "extra": "iterations: 7455\ncpu: 94098.9134808849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 173428.77480158635,
            "unit": "ns/iter",
            "extra": "iterations: 4032\ncpu: 173429.46428571403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 808191.2899884839,
            "unit": "ns/iter",
            "extra": "iterations: 869\ncpu: 808184.3498273977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 674952.0482625596,
            "unit": "ns/iter",
            "extra": "iterations: 1036\ncpu: 674946.0424710438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 677813.0310378422,
            "unit": "ns/iter",
            "extra": "iterations: 1031\ncpu: 677798.836081476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 685185.0626222739,
            "unit": "ns/iter",
            "extra": "iterations: 1022\ncpu: 685195.1076320903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 436161.3714996909,
            "unit": "ns/iter",
            "extra": "iterations: 1607\ncpu: 436143.80833851814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 664219.0909090895,
            "unit": "ns/iter",
            "extra": "iterations: 1056\ncpu: 664229.1666666646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 24063.54712366472,
            "unit": "ns/iter",
            "extra": "iterations: 29030\ncpu: 24063.303479159807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 115883.71999337182,
            "unit": "ns/iter",
            "extra": "iterations: 6032\ncpu: 115883.05702917841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 93568.07172432347,
            "unit": "ns/iter",
            "extra": "iterations: 7487\ncpu: 93569.44036329657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 91966.37427670158,
            "unit": "ns/iter",
            "extra": "iterations: 7604\ncpu: 91963.8742766975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 94317.71078827041,
            "unit": "ns/iter",
            "extra": "iterations: 7434\ncpu: 94317.75625504559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 175997.29813507877,
            "unit": "ns/iter",
            "extra": "iterations: 3968\ncpu: 175997.2530241924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 806523.3499420666,
            "unit": "ns/iter",
            "extra": "iterations: 863\ncpu: 806524.1019698771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 716838.6856316014,
            "unit": "ns/iter",
            "extra": "iterations: 1037\ncpu: 716848.8910318267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 675585.681467207,
            "unit": "ns/iter",
            "extra": "iterations: 1036\ncpu: 675566.4092664107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 686147.9001956914,
            "unit": "ns/iter",
            "extra": "iterations: 1022\ncpu: 686149.6086105735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 437011.3483146148,
            "unit": "ns/iter",
            "extra": "iterations: 1602\ncpu: 437003.99500624504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 665226.5654648943,
            "unit": "ns/iter",
            "extra": "iterations: 1054\ncpu: 665235.6736242856 ns\nthreads: 1"
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
        "date": 1702412556627,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7670.130698185497,
            "unit": "ns/iter",
            "extra": "iterations: 90950\ncpu: 7669.766904892798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71064.97523841547,
            "unit": "ns/iter",
            "extra": "iterations: 11954\ncpu: 71064.23791199598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 136163.48043038306,
            "unit": "ns/iter",
            "extra": "iterations: 6413\ncpu: 136154.76376111025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 200832.49988466047,
            "unit": "ns/iter",
            "extra": "iterations: 4335\ncpu: 200830.26528258363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 265999.75811390614,
            "unit": "ns/iter",
            "extra": "iterations: 3266\ncpu: 265985.57868952863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 327708.19015151134,
            "unit": "ns/iter",
            "extra": "iterations: 2640\ncpu: 327692.80303030316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 391467.1279748686,
            "unit": "ns/iter",
            "extra": "iterations: 2227\ncpu: 391447.507858105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 455999.62166404125,
            "unit": "ns/iter",
            "extra": "iterations: 1911\ncpu: 455970.3819989535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 519939.5911799746,
            "unit": "ns/iter",
            "extra": "iterations: 1678\ncpu: 519912.5744934445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5955.302713044992,
            "unit": "ns/iter",
            "extra": "iterations: 101915\ncpu: 5954.903596134038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5034.964172381037,
            "unit": "ns/iter",
            "extra": "iterations: 138971\ncpu: 5034.535262752661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5001.625485469931,
            "unit": "ns/iter",
            "extra": "iterations: 139813\ncpu: 5001.399011536842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5011.681147847689,
            "unit": "ns/iter",
            "extra": "iterations: 139008\ncpu: 5011.581347836087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8597.212567254903,
            "unit": "ns/iter",
            "extra": "iterations: 81593\ncpu: 8596.913950951664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36938.34930620508,
            "unit": "ns/iter",
            "extra": "iterations: 22413\ncpu: 36936.95623075896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 153498.39769504126,
            "unit": "ns/iter",
            "extra": "iterations: 5640\ncpu: 153493.72340425546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 120872.9035025973,
            "unit": "ns/iter",
            "extra": "iterations: 7109\ncpu: 120869.71444647627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 119823.3636110401,
            "unit": "ns/iter",
            "extra": "iterations: 7178\ncpu: 119819.6015603232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 121839.45022689317,
            "unit": "ns/iter",
            "extra": "iterations: 7052\ncpu: 121832.87010777062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 270442.3557483683,
            "unit": "ns/iter",
            "extra": "iterations: 3227\ncpu: 270428.75735977764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2176194.820512856,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2175966.200466201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1762450.458174815,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1762367.8707224333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1781870.0862069684,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1781793.8697318009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1769392.028625902,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1769316.7938931242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1074337.0496535676,
            "unit": "ns/iter",
            "extra": "iterations: 866\ncpu: 1074289.1454965353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1727195.328996292,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1727123.4200743458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7215304.2600001525,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7214782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4029589.3405171987,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4029443.9655172373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8862055.300812976,
            "unit": "ns/iter",
            "extra": "iterations: 123\ncpu: 8861676.422764216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 36130.75569024207,
            "unit": "ns/iter",
            "extra": "iterations: 22934\ncpu: 36128.62126100974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 152704.21149425415,
            "unit": "ns/iter",
            "extra": "iterations: 5655\ncpu: 152696.0212201594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 120948.21002386945,
            "unit": "ns/iter",
            "extra": "iterations: 7123\ncpu: 120943.31040291983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 120933.64638783822,
            "unit": "ns/iter",
            "extra": "iterations: 7101\ncpu: 120927.33417828481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 121746.41052631481,
            "unit": "ns/iter",
            "extra": "iterations: 7030\ncpu: 121740.09957325787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 276107.0082382696,
            "unit": "ns/iter",
            "extra": "iterations: 3156\ncpu: 276081.14702154766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2183960.1764705707,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2183831.2941176407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1786526.1573895984,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1786426.8714011507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1803718.14893622,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1803569.6324951644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1781447.7495220494,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1781410.7074569708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1069132.7137930978,
            "unit": "ns/iter",
            "extra": "iterations: 870\ncpu: 1069082.8735632175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1734736.878957187,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1734651.9553072664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7220492.95999966,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7220258.000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4064058.722943791,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4063549.783549775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 35248.88361793481,
            "unit": "ns/iter",
            "extra": "iterations: 23483\ncpu: 35246.16105267651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 147864.41135972246,
            "unit": "ns/iter",
            "extra": "iterations: 5810\ncpu: 147854.87091222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 118816.8654702303,
            "unit": "ns/iter",
            "extra": "iterations: 7188\ncpu: 118808.01335559339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 118756.53931187047,
            "unit": "ns/iter",
            "extra": "iterations: 7237\ncpu: 118750.54580627364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 120277.97727591354,
            "unit": "ns/iter",
            "extra": "iterations: 7129\ncpu: 120268.67723383284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 268956.1819023953,
            "unit": "ns/iter",
            "extra": "iterations: 3238\ncpu: 268940.76590487966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2173880.0046838755,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 2173705.854800939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1774207.8479086913,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1774116.159695823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1795098.1653846463,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1794983.2692307765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1778202.5352381598,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1778106.666666669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1060324.1262798945,
            "unit": "ns/iter",
            "extra": "iterations: 879\ncpu: 1060250.8532423156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1726145.0055555212,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1726059.4444444429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2938.753705602311,
            "unit": "ns/iter",
            "extra": "iterations: 240919\ncpu: 2938.5959596378843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15876.45567965241,
            "unit": "ns/iter",
            "extra": "iterations: 45126\ncpu: 15875.477551743968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12277.761603781533,
            "unit": "ns/iter",
            "extra": "iterations: 57115\ncpu: 12276.792436312691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12261.262908507426,
            "unit": "ns/iter",
            "extra": "iterations: 57404\ncpu: 12260.406940282935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10195.60918916563,
            "unit": "ns/iter",
            "extra": "iterations: 68189\ncpu: 10194.61496722347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 63222.415388778165,
            "unit": "ns/iter",
            "extra": "iterations: 11086\ncpu: 63221.72108966272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 140952.16058834703,
            "unit": "ns/iter",
            "extra": "iterations: 4963\ncpu: 140942.61535361691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35661.05710795524,
            "unit": "ns/iter",
            "extra": "iterations: 19647\ncpu: 35660.681020003045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35578.82934633515,
            "unit": "ns/iter",
            "extra": "iterations: 19689\ncpu: 35577.90136624537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35665.501806155255,
            "unit": "ns/iter",
            "extra": "iterations: 19655\ncpu: 35665.11829051082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73698.71110878265,
            "unit": "ns/iter",
            "extra": "iterations: 9533\ncpu: 73696.45442148365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66663.67884633079,
            "unit": "ns/iter",
            "extra": "iterations: 10783\ncpu: 66659.19502921158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19841.35303133462,
            "unit": "ns/iter",
            "extra": "iterations: 35232\ncpu: 19840.196412352376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 94750.29443690837,
            "unit": "ns/iter",
            "extra": "iterations: 7370\ncpu: 94741.92672998733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 76169.22142312443,
            "unit": "ns/iter",
            "extra": "iterations: 9177\ncpu: 76165.30456576125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75315.12802062486,
            "unit": "ns/iter",
            "extra": "iterations: 9311\ncpu: 75311.64214370018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 76567.87131630545,
            "unit": "ns/iter",
            "extra": "iterations: 9162\ncpu: 76563.62148002679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 145403.8318473998,
            "unit": "ns/iter",
            "extra": "iterations: 4823\ncpu: 145395.4385237425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 611685.5039232688,
            "unit": "ns/iter",
            "extra": "iterations: 1147\ncpu: 611637.6634699277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 519789.8842729817,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 519761.2759643919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 516075.1297935037,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 516058.03834807663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 516192.6818851549,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 516158.68924889097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 337416.89548578014,
            "unit": "ns/iter",
            "extra": "iterations: 2038\ncpu: 337396.51619234076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 503226.0474478795,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 503184.687275342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19959.780667977735,
            "unit": "ns/iter",
            "extra": "iterations: 35061\ncpu: 19958.552237529053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 97457.43221624912,
            "unit": "ns/iter",
            "extra": "iterations: 7251\ncpu: 97449.2483795335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77604.48347382208,
            "unit": "ns/iter",
            "extra": "iterations: 9016\ncpu: 77602.70629991211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 77627.17922855684,
            "unit": "ns/iter",
            "extra": "iterations: 9022\ncpu: 77622.37863001533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 77786.98114911516,
            "unit": "ns/iter",
            "extra": "iterations: 8859\ncpu: 77780.17834970151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 146560.35239891088,
            "unit": "ns/iter",
            "extra": "iterations: 4773\ncpu: 146549.82191493813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 609078.4677137668,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 609020.9424083714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 516645.367452155,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 516639.9116347619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 513628.3198825723,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 513601.6874541438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 514694.0146842739,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 514633.6270190875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 337744.5532017359,
            "unit": "ns/iter",
            "extra": "iterations: 2077\ncpu: 337732.64323542966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 503303.6095100607,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 503277.1613832878 ns\nthreads: 1"
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
        "date": 1702418385113,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7673.0847654664885,
            "unit": "ns/iter",
            "extra": "iterations: 91181\ncpu: 7673.044822934603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72103.25281041404,
            "unit": "ns/iter",
            "extra": "iterations: 11831\ncpu: 72097.85309779394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 138217.62561264556,
            "unit": "ns/iter",
            "extra": "iterations: 6325\ncpu: 138215.39920948618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 204000.1740862231,
            "unit": "ns/iter",
            "extra": "iterations: 4268\ncpu: 203990.862230553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 269295.4260244135,
            "unit": "ns/iter",
            "extra": "iterations: 3197\ncpu: 269297.4976540506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 333247.40392760816,
            "unit": "ns/iter",
            "extra": "iterations: 2597\ncpu: 333234.9634193302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 398414.7169638639,
            "unit": "ns/iter",
            "extra": "iterations: 2187\ncpu: 398404.9839963419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 462517.8599574093,
            "unit": "ns/iter",
            "extra": "iterations: 1878\ncpu: 462502.1831735889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 527487.2286751264,
            "unit": "ns/iter",
            "extra": "iterations: 1653\ncpu: 527460.3750756196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5959.612495322564,
            "unit": "ns/iter",
            "extra": "iterations: 117596\ncpu: 5959.498622402129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4997.5425028841855,
            "unit": "ns/iter",
            "extra": "iterations: 140414\ncpu: 4997.3656473001265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4997.352155390878,
            "unit": "ns/iter",
            "extra": "iterations: 140137\ncpu: 4997.2526884406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4995.7882568884515,
            "unit": "ns/iter",
            "extra": "iterations: 140014\ncpu: 4995.606867884634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8622.880547511515,
            "unit": "ns/iter",
            "extra": "iterations: 80802\ncpu: 8622.644241479169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36061.1384439867,
            "unit": "ns/iter",
            "extra": "iterations: 22789\ncpu: 36059.612093553915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 153540.84047108956,
            "unit": "ns/iter",
            "extra": "iterations: 5604\ncpu: 153532.619557459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 118390.02367110006,
            "unit": "ns/iter",
            "extra": "iterations: 7224\ncpu: 118385.24363233632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 120844.86093552518,
            "unit": "ns/iter",
            "extra": "iterations: 7119\ncpu: 120838.12333192864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 122693.67387568188,
            "unit": "ns/iter",
            "extra": "iterations: 6982\ncpu: 122686.42222858775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 271065.91118011996,
            "unit": "ns/iter",
            "extra": "iterations: 3220\ncpu: 271057.08074534155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2221646.7822966673,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2221544.4976076577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1817167.657534284,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1817054.0117416824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1788055.4299423734,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1788028.9827255313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1831265.992126038,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1831152.9527559008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1072482.6172413852,
            "unit": "ns/iter",
            "extra": "iterations: 870\ncpu: 1072445.6321839083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1753801.327032222,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1753692.8166351602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7184454.229999916,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7184174.999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3998478.5489360415,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3998159.1489361613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8836986.983739763,
            "unit": "ns/iter",
            "extra": "iterations: 123\ncpu: 8836818.699187003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35614.15162252005,
            "unit": "ns/iter",
            "extra": "iterations: 23143\ncpu: 35612.41412090038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 152607.08485709765,
            "unit": "ns/iter",
            "extra": "iterations: 5633\ncpu: 152605.48553168823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 119530.74397883711,
            "unit": "ns/iter",
            "extra": "iterations: 7183\ncpu: 119525.26799387457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 122081.40212615073,
            "unit": "ns/iter",
            "extra": "iterations: 7055\ncpu: 122075.64847625737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 123093.90258992901,
            "unit": "ns/iter",
            "extra": "iterations: 6950\ncpu: 123093.41007194202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 279380.2119078102,
            "unit": "ns/iter",
            "extra": "iterations: 3124\ncpu: 279373.2714468616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2250807.071942531,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 2250717.2661870574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1843408.8627451079,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1843267.6470588243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1797430.6621881414,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1797321.305182343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1837365.4288536916,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1837283.9920948637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1059588.8419244175,
            "unit": "ns/iter",
            "extra": "iterations: 873\ncpu: 1059548.4536082495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1763475.2129277913,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1763419.0114068487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7180989.929999555,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7180935.999999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3893353.79166648,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3893278.749999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34986.129611505436,
            "unit": "ns/iter",
            "extra": "iterations: 23501\ncpu: 34986.413344112756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 146700.56530646514,
            "unit": "ns/iter",
            "extra": "iterations: 5857\ncpu: 146695.56086733757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 117524.8246477833,
            "unit": "ns/iter",
            "extra": "iterations: 7311\ncpu: 117525.8104226513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 120258.26087564134,
            "unit": "ns/iter",
            "extra": "iterations: 7149\ncpu: 120254.72093999077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 120550.24810446493,
            "unit": "ns/iter",
            "extra": "iterations: 7122\ncpu: 120548.69418702564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 272484.0750156942,
            "unit": "ns/iter",
            "extra": "iterations: 3186\ncpu: 272477.96610169514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2226782.7200956773,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2226800.9569378044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1846919.3574218722,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1846891.0156249907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1789965.462882062,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 1789965.9388646341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1822506.8627451295,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1822501.7647058822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1052815.5005701105,
            "unit": "ns/iter",
            "extra": "iterations: 877\ncpu: 1052824.4013683016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1753763.8210921832,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1753708.4745762732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2912.4494079610636,
            "unit": "ns/iter",
            "extra": "iterations: 240018\ncpu: 2912.286161871179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16071.111820357924,
            "unit": "ns/iter",
            "extra": "iterations: 43865\ncpu: 16070.591587826337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12587.158689361218,
            "unit": "ns/iter",
            "extra": "iterations: 55637\ncpu: 12587.26387116484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12672.053804848536,
            "unit": "ns/iter",
            "extra": "iterations: 55311\ncpu: 12671.620473323534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10182.615948976867,
            "unit": "ns/iter",
            "extra": "iterations: 68832\ncpu: 10182.095536959549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 62749.68045934676,
            "unit": "ns/iter",
            "extra": "iterations: 10972\ncpu: 62745.78928180835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 144356.80126893878,
            "unit": "ns/iter",
            "extra": "iterations: 4886\ncpu: 144351.92386410138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36172.23122580746,
            "unit": "ns/iter",
            "extra": "iterations: 19375\ncpu: 36170.93677419308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35971.38630882182,
            "unit": "ns/iter",
            "extra": "iterations: 19487\ncpu: 35969.446297531984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36441.07199916498,
            "unit": "ns/iter",
            "extra": "iterations: 19153\ncpu: 36439.22100976353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 72976.94771378163,
            "unit": "ns/iter",
            "extra": "iterations: 9601\ncpu: 72971.49255285985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65890.77841497006,
            "unit": "ns/iter",
            "extra": "iterations: 10637\ncpu: 65891.39795055056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20018.2311165735,
            "unit": "ns/iter",
            "extra": "iterations: 34991\ncpu: 20017.887456774348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 98656.63473728659,
            "unit": "ns/iter",
            "extra": "iterations: 7099\ncpu: 98648.65474010323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 79348.16232442172,
            "unit": "ns/iter",
            "extra": "iterations: 8828\ncpu: 79344.4608065249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 77228.61364648465,
            "unit": "ns/iter",
            "extra": "iterations: 8984\ncpu: 77222.39536954547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 79192.88387097097,
            "unit": "ns/iter",
            "extra": "iterations: 8835\ncpu: 79189.77928692709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 147047.73562736606,
            "unit": "ns/iter",
            "extra": "iterations: 4766\ncpu: 147044.5027276517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 625092.5437500245,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 625046.9642857073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 528944.1942555037,
            "unit": "ns/iter",
            "extra": "iterations: 1323\ncpu: 528929.7808012087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 518343.3158283999,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 518333.80177514924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 529323.3981900683,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 529328.4313725544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 336347.27815208456,
            "unit": "ns/iter",
            "extra": "iterations: 2078\ncpu: 336333.20500481204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 511645.4930707547,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 511649.81765135034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20168.33601545975,
            "unit": "ns/iter",
            "extra": "iterations: 34674\ncpu: 20167.583780354154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 99407.92370958738,
            "unit": "ns/iter",
            "extra": "iterations: 7052\ncpu: 99406.28190584193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 80273.95510764854,
            "unit": "ns/iter",
            "extra": "iterations: 8732\ncpu: 80269.19377004125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 77866.31110370375,
            "unit": "ns/iter",
            "extra": "iterations: 8997\ncpu: 77863.1543847949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79900.92884023461,
            "unit": "ns/iter",
            "extra": "iterations: 8769\ncpu: 79898.91663815752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 147171.9265572404,
            "unit": "ns/iter",
            "extra": "iterations: 4752\ncpu: 147164.4360269374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 623733.7026785639,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 623739.2857142738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 530424.0624529711,
            "unit": "ns/iter",
            "extra": "iterations: 1329\ncpu: 530429.1196388293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 515120.5947136769,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 515105.21292217827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 526214.0803906586,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 526205.1840721309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 338491.9082125652,
            "unit": "ns/iter",
            "extra": "iterations: 2070\ncpu: 338478.5990338219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 511071.9503649602,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 511076.9343065635 ns\nthreads: 1"
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
        "date": 1702479580923,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7652.718384441216,
            "unit": "ns/iter",
            "extra": "iterations: 91213\ncpu: 7652.38946202844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 74762.69129243607,
            "unit": "ns/iter",
            "extra": "iterations: 12047\ncpu: 74759.31767244956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 135979.4733746107,
            "unit": "ns/iter",
            "extra": "iterations: 6460\ncpu: 135976.33126934984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 201184.04413215825,
            "unit": "ns/iter",
            "extra": "iterations: 4056\ncpu: 201177.4408284024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 266031.89520864375,
            "unit": "ns/iter",
            "extra": "iterations: 3235\ncpu: 266023.27666151477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 328049.84900613397,
            "unit": "ns/iter",
            "extra": "iterations: 2616\ncpu: 328044.4189602446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 394620.7532701728,
            "unit": "ns/iter",
            "extra": "iterations: 2217\ncpu: 394598.42129003134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 456549.408709332,
            "unit": "ns/iter",
            "extra": "iterations: 1906\ncpu: 456532.42392444925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 521050.1720430077,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 521027.7777777777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5961.038570020428,
            "unit": "ns/iter",
            "extra": "iterations: 117708\ncpu: 5960.735039249666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5032.512414524699,
            "unit": "ns/iter",
            "extra": "iterations: 139514\ncpu: 5032.167381051367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5034.867640631229,
            "unit": "ns/iter",
            "extra": "iterations: 139567\ncpu: 5034.722391396243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5047.7898601527495,
            "unit": "ns/iter",
            "extra": "iterations: 138365\ncpu: 5047.674628699456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9157.62979175839,
            "unit": "ns/iter",
            "extra": "iterations: 79955\ncpu: 9157.168407229054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36051.63900724938,
            "unit": "ns/iter",
            "extra": "iterations: 22765\ncpu: 36050.292115088945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 152755.1832711739,
            "unit": "ns/iter",
            "extra": "iterations: 5631\ncpu: 152748.42834310076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 118543.57734385639,
            "unit": "ns/iter",
            "extra": "iterations: 7221\ncpu: 118539.55130868289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 121044.22848664681,
            "unit": "ns/iter",
            "extra": "iterations: 7077\ncpu: 121039.40935424594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 121563.24198581032,
            "unit": "ns/iter",
            "extra": "iterations: 7050\ncpu: 121559.06382978748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 273841.4844876237,
            "unit": "ns/iter",
            "extra": "iterations: 3191\ncpu: 273826.3240363515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2197657.6273585903,
            "unit": "ns/iter",
            "extra": "iterations: 424\ncpu: 2197556.603773588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1795647.1734104785,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1795546.435452795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1795113.6969112488,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1795095.9459459488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1799022.0657640274,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1798950.0967117993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1069064.4660529261,
            "unit": "ns/iter",
            "extra": "iterations: 869\ncpu: 1069028.7686996527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1740515.2509362684,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1740438.5767790277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7184486.440000342,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7184284.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4042003.0652174065,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4041808.2608695575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8862566.41463409,
            "unit": "ns/iter",
            "extra": "iterations: 123\ncpu: 8862233.33333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35780.88542028452,
            "unit": "ns/iter",
            "extra": "iterations: 23032\ncpu: 35779.745571378895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 151126.9413938711,
            "unit": "ns/iter",
            "extra": "iterations: 5682\ncpu: 151119.25378387878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 119144.82908838167,
            "unit": "ns/iter",
            "extra": "iterations: 7185\ncpu: 119140.16701461337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 121762.00823044746,
            "unit": "ns/iter",
            "extra": "iterations: 7047\ncpu: 121757.58478785283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 122859.93171427987,
            "unit": "ns/iter",
            "extra": "iterations: 7000\ncpu: 122854.8428571433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 279905.2787781363,
            "unit": "ns/iter",
            "extra": "iterations: 3110\ncpu: 279893.5369774916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2216942.610978463,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2216889.9761336655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1806764.467455601,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1806698.0276134096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1801162.9055876508,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1801104.8169556789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1823722.224171491,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1823630.7992202705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1065335.5120275347,
            "unit": "ns/iter",
            "extra": "iterations: 873\ncpu: 1065284.536082475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1749886.6728972378,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1749815.8878504694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7184110.670000336,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7183802.000000057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4010841.961206877,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4010649.999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 35477.17336835037,
            "unit": "ns/iter",
            "extra": "iterations: 23228\ncpu: 35475.69743413099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 145058.80272910953,
            "unit": "ns/iter",
            "extra": "iterations: 5936\ncpu: 145052.81334231768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 116965.1977677973,
            "unit": "ns/iter",
            "extra": "iterations: 7347\ncpu: 116961.37198856642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 120307.73489605774,
            "unit": "ns/iter",
            "extra": "iterations: 7167\ncpu: 120303.0835775083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 119036.27550311845,
            "unit": "ns/iter",
            "extra": "iterations: 7205\ncpu: 119035.10062456576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 275153.7888433703,
            "unit": "ns/iter",
            "extra": "iterations: 3173\ncpu: 275142.6095178062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2198184.891764654,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2198104.4705882412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1807947.99220269,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1807873.294346978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1800025.290944184,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1799965.703275534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1803859.8166023283,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1803815.8301158305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1064933.8167239223,
            "unit": "ns/iter",
            "extra": "iterations: 873\ncpu: 1064898.6254295534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1737269.2271880566,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1737227.9329608988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2997.666719664487,
            "unit": "ns/iter",
            "extra": "iterations: 232714\ncpu: 2997.5420473198815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15800.775330894188,
            "unit": "ns/iter",
            "extra": "iterations: 44274\ncpu: 15800.311695351638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12767.312716467646,
            "unit": "ns/iter",
            "extra": "iterations: 54858\ncpu: 12766.661198002088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12763.965815088113,
            "unit": "ns/iter",
            "extra": "iterations: 54761\ncpu: 12763.331568086804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10256.146706805213,
            "unit": "ns/iter",
            "extra": "iterations: 68429\ncpu: 10255.87543293055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 63492.13635539211,
            "unit": "ns/iter",
            "extra": "iterations: 11030\ncpu: 63488.85766092499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 140549.0654618515,
            "unit": "ns/iter",
            "extra": "iterations: 4980\ncpu: 140544.7791164649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36500.15907458622,
            "unit": "ns/iter",
            "extra": "iterations: 19494\ncpu: 36497.204267980065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35860.43652298879,
            "unit": "ns/iter",
            "extra": "iterations: 19511\ncpu: 35859.930295730366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35908.02814008204,
            "unit": "ns/iter",
            "extra": "iterations: 19474\ncpu: 35907.37906952818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73140.36510923109,
            "unit": "ns/iter",
            "extra": "iterations: 9567\ncpu: 73138.26695933918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65091.921583342235,
            "unit": "ns/iter",
            "extra": "iterations: 10661\ncpu: 65088.472000749985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19720.451410216163,
            "unit": "ns/iter",
            "extra": "iterations: 35491\ncpu: 19720.055788791415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 94557.9335763486,
            "unit": "ns/iter",
            "extra": "iterations: 7407\ncpu: 94550.92480086448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75957.82223665444,
            "unit": "ns/iter",
            "extra": "iterations: 9237\ncpu: 75956.28450795817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75111.12455783361,
            "unit": "ns/iter",
            "extra": "iterations: 9329\ncpu: 75108.77907600025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75938.78946796917,
            "unit": "ns/iter",
            "extra": "iterations: 9210\ncpu: 75934.69055374619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 145343.19533527602,
            "unit": "ns/iter",
            "extra": "iterations: 4802\ncpu: 145337.60932944756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 615555.932218305,
            "unit": "ns/iter",
            "extra": "iterations: 1136\ncpu: 615529.6654929593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 520217.30192880327,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 520206.52818990656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 516100.3370206346,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 516084.88200589304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 517993.55185182695,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 517978.5925925958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 337231.0850652265,
            "unit": "ns/iter",
            "extra": "iterations: 2069\ncpu: 337221.314644751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 504321.1127167787,
            "unit": "ns/iter",
            "extra": "iterations: 1384\ncpu: 504298.8439306367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19695.829503959692,
            "unit": "ns/iter",
            "extra": "iterations: 35602\ncpu: 19694.803662715556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 95142.72738370148,
            "unit": "ns/iter",
            "extra": "iterations: 7373\ncpu: 95141.67909941665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 76158.00522022895,
            "unit": "ns/iter",
            "extra": "iterations: 9195\ncpu: 76156.03045133248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 75562.81403887823,
            "unit": "ns/iter",
            "extra": "iterations: 9260\ncpu: 75560.59395248485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 76367.34847988944,
            "unit": "ns/iter",
            "extra": "iterations: 9177\ncpu: 76362.88547455508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 144515.6961920451,
            "unit": "ns/iter",
            "extra": "iterations: 4832\ncpu: 144508.7541390729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 612156.2923211243,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 612135.0785340227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 517374.4158050267,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 517352.1418020689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 516215.6506646907,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 516209.0103397266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 517872.3902439257,
            "unit": "ns/iter",
            "extra": "iterations: 1353\ncpu: 517844.78935699275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 337480.5096432121,
            "unit": "ns/iter",
            "extra": "iterations: 2074\ncpu: 337470.10607522144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 504305.3847262374,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 504286.6714697458 ns\nthreads: 1"
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
        "date": 1702488583643,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7498.345709872005,
            "unit": "ns/iter",
            "extra": "iterations: 93214\ncpu: 7498.206278026906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70413.04469597041,
            "unit": "ns/iter",
            "extra": "iterations: 12104\ncpu: 70409.41837409121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 135118.23227799067,
            "unit": "ns/iter",
            "extra": "iterations: 6475\ncpu: 135113.9150579151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 199317.23699289974,
            "unit": "ns/iter",
            "extra": "iterations: 4363\ncpu: 199309.00756360302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 266353.76445526455,
            "unit": "ns/iter",
            "extra": "iterations: 3286\ncpu: 266343.3353621425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 325216.79494910705,
            "unit": "ns/iter",
            "extra": "iterations: 2653\ncpu: 325202.6385224274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 389513.40509156615,
            "unit": "ns/iter",
            "extra": "iterations: 2239\ncpu: 389472.0857525682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 453373.52650729567,
            "unit": "ns/iter",
            "extra": "iterations: 1924\ncpu: 453339.0852390854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 519861.641543026,
            "unit": "ns/iter",
            "extra": "iterations: 1685\ncpu: 519812.34421365015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5844.720459555166,
            "unit": "ns/iter",
            "extra": "iterations: 119768\ncpu: 5844.376628147747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4930.571309747741,
            "unit": "ns/iter",
            "extra": "iterations: 141867\ncpu: 4930.47784192236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4973.776892712968,
            "unit": "ns/iter",
            "extra": "iterations: 140856\ncpu: 4973.5637814505635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4903.752812140262,
            "unit": "ns/iter",
            "extra": "iterations: 142596\ncpu: 4903.535863558591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8559.630639545341,
            "unit": "ns/iter",
            "extra": "iterations: 81855\ncpu: 8559.26088815589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36105.82508453857,
            "unit": "ns/iter",
            "extra": "iterations: 22771\ncpu: 36104.391550656546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 153093.70284698124,
            "unit": "ns/iter",
            "extra": "iterations: 5620\ncpu: 153085.62277580082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 118648.63617521283,
            "unit": "ns/iter",
            "extra": "iterations: 7237\ncpu: 118644.02376675463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 120249.0520498163,
            "unit": "ns/iter",
            "extra": "iterations: 7147\ncpu: 120241.7797677347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 121412.74911810116,
            "unit": "ns/iter",
            "extra": "iterations: 7087\ncpu: 121407.7465782416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 277218.48214850464,
            "unit": "ns/iter",
            "extra": "iterations: 3165\ncpu: 277207.77251184767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2148130.4592074146,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2148038.9277389287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1747813.4588015114,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1747745.5056179771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1767346.608365022,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1767282.5095056985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1753013.7495291224,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1752926.1770244814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1053989.2120181313,
            "unit": "ns/iter",
            "extra": "iterations: 882\ncpu: 1053948.6394557834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1708375.1133455525,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1708269.6526508182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7111485.490000291,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7111102.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3965495.5617021536,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3965277.44680851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8995234.934959663,
            "unit": "ns/iter",
            "extra": "iterations: 123\ncpu: 8994934.14634147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35727.108254105835,
            "unit": "ns/iter",
            "extra": "iterations: 23140\ncpu: 35726.43474503019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 151445.8506779376,
            "unit": "ns/iter",
            "extra": "iterations: 5679\ncpu: 151442.8772671238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 118448.25873933124,
            "unit": "ns/iter",
            "extra": "iterations: 7266\ncpu: 118439.6504266446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 121497.54967633437,
            "unit": "ns/iter",
            "extra": "iterations: 7106\ncpu: 121492.26006191933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 122117.07757885531,
            "unit": "ns/iter",
            "extra": "iterations: 7038\ncpu: 122107.72946859962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 280711.9492776808,
            "unit": "ns/iter",
            "extra": "iterations: 3115\ncpu: 280697.2712680581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2155053.117783007,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2154884.7575057745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1760714.996226479,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1760604.1509434052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1777324.093333326,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1777190.4761904776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1765465.3239170844,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1765323.3521657337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1046400.1781285098,
            "unit": "ns/iter",
            "extra": "iterations: 887\ncpu: 1046330.5524239023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1710057.2673991967,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1709947.6190476245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7101349.289999916,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7100651.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3912751.676470602,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3912499.5798319415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 35316.193415637485,
            "unit": "ns/iter",
            "extra": "iterations: 23328\ncpu: 35313.948902606324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 146240.46039017,
            "unit": "ns/iter",
            "extra": "iterations: 5895\ncpu: 146227.65055131467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 116877.40500475946,
            "unit": "ns/iter",
            "extra": "iterations: 7353\ncpu: 116873.62981096125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 119310.69349244318,
            "unit": "ns/iter",
            "extra": "iterations: 7207\ncpu: 119301.54016928005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 119510.54731707224,
            "unit": "ns/iter",
            "extra": "iterations: 7175\ncpu: 119504.23693379725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 274253.30783699395,
            "unit": "ns/iter",
            "extra": "iterations: 3190\ncpu: 274235.83072100155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2146601.822170865,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2146527.020785222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1757453.0301317924,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1757319.5856873796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1756989.3547169855,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1756923.5849056658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1758055.9209039924,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1757903.7664783425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1042682.5022371403,
            "unit": "ns/iter",
            "extra": "iterations: 894\ncpu: 1042644.0715883662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1701256.4440366377,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1701148.256880732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2895.9162702385197,
            "unit": "ns/iter",
            "extra": "iterations: 241742\ncpu: 2895.833988301575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15578.353837597204,
            "unit": "ns/iter",
            "extra": "iterations: 44950\ncpu: 15577.615127919917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12228.945301713775,
            "unit": "ns/iter",
            "extra": "iterations: 57223\ncpu: 12228.163500690276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12611.76610200026,
            "unit": "ns/iter",
            "extra": "iterations: 55490\ncpu: 12610.805550549656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10124.300015871559,
            "unit": "ns/iter",
            "extra": "iterations: 69303\ncpu: 10123.554535878664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 63449.6578494446,
            "unit": "ns/iter",
            "extra": "iterations: 11039\ncpu: 63444.34278467248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 138530.22704225482,
            "unit": "ns/iter",
            "extra": "iterations: 5325\ncpu: 138524.78873239603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 34868.81258706673,
            "unit": "ns/iter",
            "extra": "iterations: 20100\ncpu: 34866.13432835836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35316.36318683894,
            "unit": "ns/iter",
            "extra": "iterations: 19819\ncpu: 35313.68888440325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 34947.40253581508,
            "unit": "ns/iter",
            "extra": "iterations: 20033\ncpu: 34944.42170418838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 68872.1401768181,
            "unit": "ns/iter",
            "extra": "iterations: 10180\ncpu: 68869.3418467583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 63841.29674537516,
            "unit": "ns/iter",
            "extra": "iterations: 10969\ncpu: 63840.185978667774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19616.264775480082,
            "unit": "ns/iter",
            "extra": "iterations: 35921\ncpu: 19614.42053394948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 94178.348107235,
            "unit": "ns/iter",
            "extra": "iterations: 7423\ncpu: 94172.490906641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75271.4873145576,
            "unit": "ns/iter",
            "extra": "iterations: 9302\ncpu: 75265.11502902629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75684.68497854493,
            "unit": "ns/iter",
            "extra": "iterations: 9320\ncpu: 75678.20815450685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75569.69401857018,
            "unit": "ns/iter",
            "extra": "iterations: 9262\ncpu: 75568.34377024474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 147615.49746300746,
            "unit": "ns/iter",
            "extra": "iterations: 4730\ncpu: 147607.90697674415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 603886.6465517415,
            "unit": "ns/iter",
            "extra": "iterations: 1160\ncpu: 603850.2586206916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 564717.8223684487,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 564669.2982456131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 511220.29411763774,
            "unit": "ns/iter",
            "extra": "iterations: 1241\ncpu: 511193.0701047454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 507244.4339622888,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 507227.2133526823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 332885.9166269669,
            "unit": "ns/iter",
            "extra": "iterations: 2099\ncpu: 332867.1748451675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 495852.49645393074,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 495800.1418439733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19956.431882901048,
            "unit": "ns/iter",
            "extra": "iterations: 35116\ncpu: 19954.724342180238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 94494.22403560915,
            "unit": "ns/iter",
            "extra": "iterations: 7414\ncpu: 94492.41974642625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 76552.28938207179,
            "unit": "ns/iter",
            "extra": "iterations: 9192\ncpu: 76545.15883376796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 75823.64063347319,
            "unit": "ns/iter",
            "extra": "iterations: 9219\ncpu: 75817.98459702774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 76717.09760912145,
            "unit": "ns/iter",
            "extra": "iterations: 9118\ncpu: 76709.01513489765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 148245.35714285498,
            "unit": "ns/iter",
            "extra": "iterations: 4718\ncpu: 148232.40779991465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 604667.0655172389,
            "unit": "ns/iter",
            "extra": "iterations: 1160\ncpu: 604655.4310344855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 507987.0847825872,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 507936.3768115965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 508302.2142338458,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 508254.5388525772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 507266.7335263991,
            "unit": "ns/iter",
            "extra": "iterations: 1381\ncpu: 507216.7994207069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 335692.4315789476,
            "unit": "ns/iter",
            "extra": "iterations: 2090\ncpu: 335664.30622009764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 497205.49040514685,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 497154.4420753425 ns\nthreads: 1"
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
        "date": 1702490822839,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7689.31377889989,
            "unit": "ns/iter",
            "extra": "iterations: 91045\ncpu: 7688.492503706958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71627.5874515166,
            "unit": "ns/iter",
            "extra": "iterations: 11858\ncpu: 71619.8347107438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 137318.79971791938,
            "unit": "ns/iter",
            "extra": "iterations: 6381\ncpu: 137309.90440369846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 202215.3201764417,
            "unit": "ns/iter",
            "extra": "iterations: 4307\ncpu: 202196.72625957747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 272109.50711632916,
            "unit": "ns/iter",
            "extra": "iterations: 3232\ncpu: 272105.6311881188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 330223.6798161775,
            "unit": "ns/iter",
            "extra": "iterations: 2611\ncpu: 330191.9571045578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 399422.3940081659,
            "unit": "ns/iter",
            "extra": "iterations: 2203\ncpu: 399382.9323649567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 460750.50185088004,
            "unit": "ns/iter",
            "extra": "iterations: 1891\ncpu: 460735.3781068217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 525582.6295180657,
            "unit": "ns/iter",
            "extra": "iterations: 1660\ncpu: 525558.9759036144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5928.294504505949,
            "unit": "ns/iter",
            "extra": "iterations: 117842\ncpu: 5928.218292289677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5032.457093702044,
            "unit": "ns/iter",
            "extra": "iterations: 138919\ncpu: 5031.881168162731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5064.935209120289,
            "unit": "ns/iter",
            "extra": "iterations: 137720\ncpu: 5064.58103398198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5025.980795984196,
            "unit": "ns/iter",
            "extra": "iterations: 139450\ncpu: 5025.913230548583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8625.908749983766,
            "unit": "ns/iter",
            "extra": "iterations: 81063\ncpu: 8625.106398726923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36210.89675901358,
            "unit": "ns/iter",
            "extra": "iterations: 22956\ncpu: 36209.897194633195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 149285.47616571398,
            "unit": "ns/iter",
            "extra": "iterations: 5769\ncpu: 149272.4215635293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 118410.64898184215,
            "unit": "ns/iter",
            "extra": "iterations: 7219\ncpu: 118403.10292284243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 118896.87453364095,
            "unit": "ns/iter",
            "extra": "iterations: 7237\ncpu: 118886.76247063716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 120364.31247375032,
            "unit": "ns/iter",
            "extra": "iterations: 7143\ncpu: 120358.08483830304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 277663.339155275,
            "unit": "ns/iter",
            "extra": "iterations: 3149\ncpu: 277636.07494442735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2158313.241299234,
            "unit": "ns/iter",
            "extra": "iterations: 431\ncpu: 2158259.164733176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1775150.7900763971,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1775015.4580152705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1767485.9487664283,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1767379.1271347245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1769031.2152379712,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1768908.3809523797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1075916.4704519801,
            "unit": "ns/iter",
            "extra": "iterations: 863\ncpu: 1075857.4739281565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1719435.287037009,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1719333.8888888857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7220788.639999683,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7219833.999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4003549.717948671,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 4003261.965811977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8946335.524590304,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 8945755.737704903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 36527.391431352014,
            "unit": "ns/iter",
            "extra": "iterations: 22594\ncpu: 36526.878817385164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 154669.47883789084,
            "unit": "ns/iter",
            "extra": "iterations: 5576\ncpu: 154661.49569583905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 119848.64803456924,
            "unit": "ns/iter",
            "extra": "iterations: 7174\ncpu: 119842.80735991032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 122155.90451192022,
            "unit": "ns/iter",
            "extra": "iterations: 7048\ncpu: 122151.47559591367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 122812.50835594635,
            "unit": "ns/iter",
            "extra": "iterations: 7001\ncpu: 122806.22768175948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 281263.0652382325,
            "unit": "ns/iter",
            "extra": "iterations: 3127\ncpu: 281246.72209785914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2170109.927738947,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2170018.6480186423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1779698.5640534782,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1779591.2045889145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1770792.2121212592,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1770676.3257575755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1781905.7255277387,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1781804.7984644969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1065702.8612384053,
            "unit": "ns/iter",
            "extra": "iterations: 872\ncpu: 1065666.5137614668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1724584.574861413,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1724507.9482439954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7184645.020000744,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7184355.000000054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3940164.8312234855,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3939937.5527426004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 35214.982344181764,
            "unit": "ns/iter",
            "extra": "iterations: 23505\ncpu: 35213.19293767288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 142415.8306183611,
            "unit": "ns/iter",
            "extra": "iterations: 6016\ncpu: 142405.0864361694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 116886.951049914,
            "unit": "ns/iter",
            "extra": "iterations: 7334\ncpu: 116878.86555767631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 119358.20989027091,
            "unit": "ns/iter",
            "extra": "iterations: 7199\ncpu: 119349.86803722708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 122311.91443998416,
            "unit": "ns/iter",
            "extra": "iterations: 7223\ncpu: 122305.15021459213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 278275.3157061498,
            "unit": "ns/iter",
            "extra": "iterations: 3158\ncpu: 278257.5680810635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2163511.983796327,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2163324.5370370275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1788345.3403846682,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1788233.0769230847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1769491.8068180887,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1769344.8863636467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1781206.1950285838,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1781122.9445506674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1064367.588571388,
            "unit": "ns/iter",
            "extra": "iterations: 875\ncpu: 1064273.257142856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1724331.2518518097,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1724245.9259259293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2941.628866932275,
            "unit": "ns/iter",
            "extra": "iterations: 237947\ncpu: 2941.3600507676038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16125.414742635041,
            "unit": "ns/iter",
            "extra": "iterations: 43615\ncpu: 16124.026137796563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12777.93615935676,
            "unit": "ns/iter",
            "extra": "iterations: 54871\ncpu: 12776.362741703302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12630.895248748746,
            "unit": "ns/iter",
            "extra": "iterations: 55417\ncpu: 12630.29575761955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10186.443107237557,
            "unit": "ns/iter",
            "extra": "iterations: 68717\ncpu: 10185.745885297638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64354.88463656357,
            "unit": "ns/iter",
            "extra": "iterations: 10896\ncpu: 64350.403817914514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 139773.90357355963,
            "unit": "ns/iter",
            "extra": "iterations: 5009\ncpu: 139763.505689759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35613.61112523205,
            "unit": "ns/iter",
            "extra": "iterations: 19667\ncpu: 35611.47099201681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35690.955085257694,
            "unit": "ns/iter",
            "extra": "iterations: 19704\ncpu: 35606.795574502925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35604.30208651336,
            "unit": "ns/iter",
            "extra": "iterations: 19650\ncpu: 35601.52671755768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 70050.16998300116,
            "unit": "ns/iter",
            "extra": "iterations: 10001\ncpu: 70047.0352964712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 64486.83928242992,
            "unit": "ns/iter",
            "extra": "iterations: 10870\ncpu: 64481.646734130045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19524.313634845916,
            "unit": "ns/iter",
            "extra": "iterations: 35908\ncpu: 19523.610337529153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 94233.67268804584,
            "unit": "ns/iter",
            "extra": "iterations: 7418\ncpu: 94226.97492585484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75726.02422932204,
            "unit": "ns/iter",
            "extra": "iterations: 9245\ncpu: 75720.40021633402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 74780.01771990077,
            "unit": "ns/iter",
            "extra": "iterations: 9368\ncpu: 74777.14560204951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75694.65491047887,
            "unit": "ns/iter",
            "extra": "iterations: 9215\ncpu: 75690.46120455803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 146797.10484378698,
            "unit": "ns/iter",
            "extra": "iterations: 4769\ncpu: 146792.87062277083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 608558.873912977,
            "unit": "ns/iter",
            "extra": "iterations: 1150\ncpu: 608516.2608695659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 518499.72888888896,
            "unit": "ns/iter",
            "extra": "iterations: 1350\ncpu: 518461.77777777996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 517881.48002964666,
            "unit": "ns/iter",
            "extra": "iterations: 1352\ncpu: 517860.2810650852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 517040.1349557094,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 517000.3687315656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 340899.33300878596,
            "unit": "ns/iter",
            "extra": "iterations: 2054\ncpu: 340894.9853943578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 503815.8267433228,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 503768.7275341391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19933.343984208892,
            "unit": "ns/iter",
            "extra": "iterations: 34958\ncpu: 19932.31878253896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 95470.04818455027,
            "unit": "ns/iter",
            "extra": "iterations: 7326\ncpu: 95463.34971334992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77076.3111502954,
            "unit": "ns/iter",
            "extra": "iterations: 9076\ncpu: 77069.50198325237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 75813.33948740775,
            "unit": "ns/iter",
            "extra": "iterations: 9208\ncpu: 75812.32623805346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 76713.89810660137,
            "unit": "ns/iter",
            "extra": "iterations: 9137\ncpu: 76708.4163292106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 147839.25846022874,
            "unit": "ns/iter",
            "extra": "iterations: 4728\ncpu: 147830.94331641254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 608729.500866548,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 608681.8024263465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 518106.0480059054,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 518057.16395864205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 515936.57300890924,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 515929.35103245283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 515013.04926467675,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 514979.6323529397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 341263.5836177579,
            "unit": "ns/iter",
            "extra": "iterations: 2051\ncpu: 341248.41540711763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 505080.9015096822,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 505030.6973400497 ns\nthreads: 1"
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
        "date": 1705573961457,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7673.346292770019,
            "unit": "ns/iter",
            "extra": "iterations: 91362\ncpu: 7673.0555373131065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71336.94477184594,
            "unit": "ns/iter",
            "extra": "iterations: 11878\ncpu: 71332.25290452939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 136818.90029600656,
            "unit": "ns/iter",
            "extra": "iterations: 6419\ncpu: 136816.07727060292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 201415.98492926912,
            "unit": "ns/iter",
            "extra": "iterations: 4313\ncpu: 201411.245073035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 270761.4913793248,
            "unit": "ns/iter",
            "extra": "iterations: 3248\ncpu: 270747.99876847287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 329273.47586205,
            "unit": "ns/iter",
            "extra": "iterations: 2610\ncpu: 329268.62068965513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 394079.38621940155,
            "unit": "ns/iter",
            "extra": "iterations: 2206\ncpu: 394075.24932003615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 458888.8911099525,
            "unit": "ns/iter",
            "extra": "iterations: 1901\ncpu: 458880.01052077836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 528817.3707258542,
            "unit": "ns/iter",
            "extra": "iterations: 1667\ncpu: 528802.9994001195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5861.415688608343,
            "unit": "ns/iter",
            "extra": "iterations: 119284\ncpu: 5861.319204587371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4972.822352725324,
            "unit": "ns/iter",
            "extra": "iterations: 141674\ncpu: 4972.708471561469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5004.389371405823,
            "unit": "ns/iter",
            "extra": "iterations: 139661\ncpu: 5004.389915581302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5006.189599999971,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5006.059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8589.031238854786,
            "unit": "ns/iter",
            "extra": "iterations: 81309\ncpu: 8588.570760924367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35870.67154047389,
            "unit": "ns/iter",
            "extra": "iterations: 22980\ncpu: 35869.66492602264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 150252.39968488226,
            "unit": "ns/iter",
            "extra": "iterations: 5712\ncpu: 150243.43487394945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 124098.48247308865,
            "unit": "ns/iter",
            "extra": "iterations: 7246\ncpu: 124093.69307203968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 120719.75318787548,
            "unit": "ns/iter",
            "extra": "iterations: 7058\ncpu: 120712.79399263256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 121456.75580406979,
            "unit": "ns/iter",
            "extra": "iterations: 7064\ncpu: 121451.67044167612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 267736.68534484884,
            "unit": "ns/iter",
            "extra": "iterations: 3248\ncpu: 267726.1083743835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2166318.743589761,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2166222.610722616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1788800.6781608043,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1788728.3524904198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1793287.3269230116,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1793168.6538461554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1803216.339147214,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1803110.0775193828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1062008.4942792028,
            "unit": "ns/iter",
            "extra": "iterations: 874\ncpu: 1061957.322654462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1729230.229050249,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1729183.0540037206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7168813.440000577,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7168334.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3908417.2510460285,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3908307.1129707145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8910643.96694125,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 8910099.999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35902.543556734774,
            "unit": "ns/iter",
            "extra": "iterations: 22993\ncpu: 35901.70486669851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 153372.13684960504,
            "unit": "ns/iter",
            "extra": "iterations: 5612\ncpu: 153367.7655024947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 119110.6593025003,
            "unit": "ns/iter",
            "extra": "iterations: 7197\ncpu: 119109.4761706268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 121645.26575497552,
            "unit": "ns/iter",
            "extra": "iterations: 7093\ncpu: 121642.77456647405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 121686.1282414539,
            "unit": "ns/iter",
            "extra": "iterations: 7057\ncpu: 121682.21623919472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 284091.5821917704,
            "unit": "ns/iter",
            "extra": "iterations: 3066\ncpu: 284085.6490541426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2190636.4211765644,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2190606.117647061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1795239.0385357523,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1795189.788053959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1801074.011627958,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1801045.5426356678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1811839.5700388849,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1811788.1322957166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1055239.9943182163,
            "unit": "ns/iter",
            "extra": "iterations: 880\ncpu: 1055225.340909088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1734845.5869158108,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1734797.757009342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7163897.970000335,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7163511.000000043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3995815.824786362,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3995700.0000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34757.631453134636,
            "unit": "ns/iter",
            "extra": "iterations: 23845\ncpu: 34757.110505347235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 146303.0438416843,
            "unit": "ns/iter",
            "extra": "iterations: 5862\ncpu: 146301.0917775499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 117570.9512429653,
            "unit": "ns/iter",
            "extra": "iterations: 7281\ncpu: 117568.6993544846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 119574.80601588004,
            "unit": "ns/iter",
            "extra": "iterations: 7181\ncpu: 119572.31583344901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 119031.53022931615,
            "unit": "ns/iter",
            "extra": "iterations: 7195\ncpu: 119030.5628908965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 269323.9049089284,
            "unit": "ns/iter",
            "extra": "iterations: 3239\ncpu: 269319.91355356615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2158945.192129459,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2158876.388888889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1787616.6195029689,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1787607.4569789758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1795089.3082852173,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1795026.7822735964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1799012.367504821,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1798999.8065764066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1049070.5084746128,
            "unit": "ns/iter",
            "extra": "iterations: 885\ncpu: 1049050.8474576266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1730990.9628942164,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1730974.9536178182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2931.9074785036614,
            "unit": "ns/iter",
            "extra": "iterations: 239112\ncpu: 2931.822744153367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15816.119454619093,
            "unit": "ns/iter",
            "extra": "iterations: 44226\ncpu: 15815.983810428317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11918.538265175152,
            "unit": "ns/iter",
            "extra": "iterations: 58761\ncpu: 11918.335290413657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12059.679324823008,
            "unit": "ns/iter",
            "extra": "iterations: 58118\ncpu: 12059.583949895028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10123.166503061262,
            "unit": "ns/iter",
            "extra": "iterations: 69272\ncpu: 10123.025176117377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 62558.17500223407,
            "unit": "ns/iter",
            "extra": "iterations: 11177\ncpu: 62555.39948107758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 140666.42548511183,
            "unit": "ns/iter",
            "extra": "iterations: 4999\ncpu: 140663.59271854375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35514.69513063213,
            "unit": "ns/iter",
            "extra": "iterations: 19674\ncpu: 35513.57121073514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35955.53198705008,
            "unit": "ns/iter",
            "extra": "iterations: 19461\ncpu: 35954.79163455175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36030.7268232376,
            "unit": "ns/iter",
            "extra": "iterations: 19416\ncpu: 36029.86196950962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 72843.90842490872,
            "unit": "ns/iter",
            "extra": "iterations: 9555\ncpu: 72841.97802197885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 64641.82180506036,
            "unit": "ns/iter",
            "extra": "iterations: 10814\ncpu: 64640.133160717574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19415.31726929873,
            "unit": "ns/iter",
            "extra": "iterations: 36064\ncpu: 19415.319986690454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93519.78400427352,
            "unit": "ns/iter",
            "extra": "iterations: 7477\ncpu: 93517.640765013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75244.82210968724,
            "unit": "ns/iter",
            "extra": "iterations: 9281\ncpu: 75243.01260639899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75216.43473582766,
            "unit": "ns/iter",
            "extra": "iterations: 9293\ncpu: 75214.7530399214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75426.23398508808,
            "unit": "ns/iter",
            "extra": "iterations: 9257\ncpu: 75423.72258831133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 142013.70938956508,
            "unit": "ns/iter",
            "extra": "iterations: 4931\ncpu: 142013.79030622658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 608888.0677672109,
            "unit": "ns/iter",
            "extra": "iterations: 1151\ncpu: 608870.2867072178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 513574.55685987626,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 513561.7754952323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 516080.7028023978,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 516065.5604719745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 515153.21270307526,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 515135.3028064968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 336655.8744588249,
            "unit": "ns/iter",
            "extra": "iterations: 2079\ncpu: 336656.758056756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 502025.4365591528,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 502008.38709677215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19801.593919682397,
            "unit": "ns/iter",
            "extra": "iterations: 35360\ncpu: 19801.43099547514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 94528.65144555194,
            "unit": "ns/iter",
            "extra": "iterations: 7402\ncpu: 94526.53336936058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 76051.35711179255,
            "unit": "ns/iter",
            "extra": "iterations: 9196\ncpu: 76048.94519356238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 76156.71213936043,
            "unit": "ns/iter",
            "extra": "iterations: 9185\ncpu: 76156.74469243376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 76628.43587217099,
            "unit": "ns/iter",
            "extra": "iterations: 9138\ncpu: 76625.60735390616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 141843.92602350967,
            "unit": "ns/iter",
            "extra": "iterations: 4934\ncpu: 141842.64288609696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 609342.9101221962,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 609315.4450261728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 513371.013245022,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 513352.02354672475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 513833.4299410208,
            "unit": "ns/iter",
            "extra": "iterations: 1356\ncpu: 513827.064896752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 514918.9277818438,
            "unit": "ns/iter",
            "extra": "iterations: 1357\ncpu: 514898.9683124474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 337846.785714273,
            "unit": "ns/iter",
            "extra": "iterations: 2072\ncpu: 337839.91312741477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 503962.80158159754,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 503953.5585909422 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}