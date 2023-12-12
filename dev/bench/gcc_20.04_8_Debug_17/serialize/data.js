window.BENCHMARK_DATA = {
  "lastUpdate": 1702409120667,
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
      }
    ]
  }
}