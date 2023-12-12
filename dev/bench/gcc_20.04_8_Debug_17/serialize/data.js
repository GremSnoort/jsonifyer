window.BENCHMARK_DATA = {
  "lastUpdate": 1702398828202,
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
      }
    ]
  }
}