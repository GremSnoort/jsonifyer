window.BENCHMARK_DATA = {
  "lastUpdate": 1702394254931,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-15 18.04 Debug c++-17": [
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
        "date": 1702394253874,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8799.088141347385,
            "unit": "ns/iter",
            "extra": "iterations: 79520\ncpu: 8798.370221327968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99269.13842927071,
            "unit": "ns/iter",
            "extra": "iterations: 8582\ncpu: 99263.55161966909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 193896.18980974745,
            "unit": "ns/iter",
            "extra": "iterations: 4573\ncpu: 193881.58757926963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 288340.2818029762,
            "unit": "ns/iter",
            "extra": "iterations: 2995\ncpu: 288327.01168614347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 375842.0852747284,
            "unit": "ns/iter",
            "extra": "iterations: 2275\ncpu: 375808.96703296714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 475962.85147452075,
            "unit": "ns/iter",
            "extra": "iterations: 1865\ncpu: 475930.9383378017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 567123.1878668978,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 567107.8277886496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 530734.6109999571,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530741.3999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 598951.3769999348,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598936.8000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6887.448049781578,
            "unit": "ns/iter",
            "extra": "iterations: 101886\ncpu: 6887.267141707385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5678.888418550757,
            "unit": "ns/iter",
            "extra": "iterations: 122843\ncpu: 5678.953623731109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5614.246675664738,
            "unit": "ns/iter",
            "extra": "iterations: 125213\ncpu: 5614.161468857067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5685.883279004613,
            "unit": "ns/iter",
            "extra": "iterations: 122403\ncpu: 5685.818975025126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9645.963560967888,
            "unit": "ns/iter",
            "extra": "iterations: 72587\ncpu: 9645.944866160613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 45640.90116696935,
            "unit": "ns/iter",
            "extra": "iterations: 18081\ncpu: 45640.666998506764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 194293.15979969854,
            "unit": "ns/iter",
            "extra": "iterations: 4393\ncpu: 194286.9109947644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 154118.32138979147,
            "unit": "ns/iter",
            "extra": "iterations: 5526\ncpu: 154111.49113282628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 156108.21735142302,
            "unit": "ns/iter",
            "extra": "iterations: 5452\ncpu: 156108.45561261958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 160078.46022513605,
            "unit": "ns/iter",
            "extra": "iterations: 5330\ncpu: 160076.22889305817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 400851.32541899994,
            "unit": "ns/iter",
            "extra": "iterations: 2148\ncpu: 400839.5251396649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3065540.9837660734,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3065571.7532467507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2543105.3616439262,
            "unit": "ns/iter",
            "extra": "iterations: 365\ncpu: 2543015.342465754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2494888.8426667205,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2494915.7333333287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2588764.13333332,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2588758.8888888857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1508685.938311679,
            "unit": "ns/iter",
            "extra": "iterations: 616\ncpu: 1508505.032467533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2473960.713158057,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2473868.421052637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 10342057.339805905,
            "unit": "ns/iter",
            "extra": "iterations: 103\ncpu: 10341201.941747585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 5940074.177215282,
            "unit": "ns/iter",
            "extra": "iterations: 158\ncpu: 5939882.278481011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 12398205.964705886,
            "unit": "ns/iter",
            "extra": "iterations: 85\ncpu: 12396530.588235317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 45669.79136929561,
            "unit": "ns/iter",
            "extra": "iterations: 18075\ncpu: 45665.36099585065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 194109.29069766056,
            "unit": "ns/iter",
            "extra": "iterations: 4386\ncpu: 194097.74281805774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 156564.81017756442,
            "unit": "ns/iter",
            "extra": "iterations: 5463\ncpu: 156553.92641405883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 157442.57719234325,
            "unit": "ns/iter",
            "extra": "iterations: 5428\ncpu: 157435.8142962411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 161104.86257086933,
            "unit": "ns/iter",
            "extra": "iterations: 5290\ncpu: 161085.51984877093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 409225.91654947505,
            "unit": "ns/iter",
            "extra": "iterations: 2133\ncpu: 409199.4842944234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 3076671.516556335,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3076426.821192061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 2589838.685236731,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2589716.434540391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 2518393.588076074,
            "unit": "ns/iter",
            "extra": "iterations: 369\ncpu: 2518117.6151761366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 2609487.186629436,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2609322.841225635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1514462.8412438796,
            "unit": "ns/iter",
            "extra": "iterations: 611\ncpu: 1514389.1980360008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 2511829.1972972117,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2511605.945945949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 10554664.386138866,
            "unit": "ns/iter",
            "extra": "iterations: 101\ncpu: 10554299.009900946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 6042848.928571361,
            "unit": "ns/iter",
            "extra": "iterations: 154\ncpu: 6042457.142857164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 45740.658183222935,
            "unit": "ns/iter",
            "extra": "iterations: 18153\ncpu: 45738.13694706089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 187845.75606526987,
            "unit": "ns/iter",
            "extra": "iterations: 4534\ncpu: 187836.7004852236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 154672.99945612796,
            "unit": "ns/iter",
            "extra": "iterations: 5516\ncpu: 154662.7810007257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 156858.4756816619,
            "unit": "ns/iter",
            "extra": "iterations: 5428\ncpu: 156849.06042741265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 157645.3025802943,
            "unit": "ns/iter",
            "extra": "iterations: 5387\ncpu: 157633.1167625772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 403205.7447307178,
            "unit": "ns/iter",
            "extra": "iterations: 2135\ncpu: 403186.60421545414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 3083963.7062704978,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3083748.8448844855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 2601114.9861110044,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2601004.7222222197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 2545508.9618528206,
            "unit": "ns/iter",
            "extra": "iterations: 367\ncpu: 2545264.8501362433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 2602384.3435752606,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2602290.5027933028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1530321.5024630483,
            "unit": "ns/iter",
            "extra": "iterations: 609\ncpu: 1530197.701149426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 2502953.5456990143,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2502758.8709677397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3172.095730537991,
            "unit": "ns/iter",
            "extra": "iterations: 221152\ncpu: 3171.8691216900647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 21382.831791395693,
            "unit": "ns/iter",
            "extra": "iterations: 32751\ncpu: 21381.88452260995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 16696.5967472689,
            "unit": "ns/iter",
            "extra": "iterations: 41934\ncpu: 16695.941240997803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 15688.875957704471,
            "unit": "ns/iter",
            "extra": "iterations: 44638\ncpu: 15689.04296787491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 12714.70274201807,
            "unit": "ns/iter",
            "extra": "iterations: 54996\ncpu: 12714.248308968003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 92083.24826412035,
            "unit": "ns/iter",
            "extra": "iterations: 7633\ncpu: 92078.4095375346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 199531.97979512732,
            "unit": "ns/iter",
            "extra": "iterations: 3514\ncpu: 199510.3870233369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 49728.87814767978,
            "unit": "ns/iter",
            "extra": "iterations: 14058\ncpu: 49728.78787878803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 48970.31125735538,
            "unit": "ns/iter",
            "extra": "iterations: 14284\ncpu: 48967.69812377455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 50218.225240075815,
            "unit": "ns/iter",
            "extra": "iterations: 13954\ncpu: 50217.9160097467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 104770.89279278005,
            "unit": "ns/iter",
            "extra": "iterations: 6660\ncpu: 104760.96096096182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 92997.1781224974,
            "unit": "ns/iter",
            "extra": "iterations: 7478\ncpu: 92992.17705268836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 26867.681055709105,
            "unit": "ns/iter",
            "extra": "iterations: 25992\ncpu: 26865.208525700047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 130353.23786497467,
            "unit": "ns/iter",
            "extra": "iterations: 5377\ncpu: 130346.10377534061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 106532.87583585687,
            "unit": "ns/iter",
            "extra": "iterations: 6580\ncpu: 106528.2826747719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 106186.4085106435,
            "unit": "ns/iter",
            "extra": "iterations: 6580\ncpu: 106183.43465045479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 106441.55308114924,
            "unit": "ns/iter",
            "extra": "iterations: 6556\ncpu: 106433.75533862298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 193573.36846472864,
            "unit": "ns/iter",
            "extra": "iterations: 3615\ncpu: 193551.61825726155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 829144.6948131034,
            "unit": "ns/iter",
            "extra": "iterations: 829\ncpu: 829045.8383594737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 710453.6178862031,
            "unit": "ns/iter",
            "extra": "iterations: 984\ncpu: 710424.5934959262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 698484.1287425172,
            "unit": "ns/iter",
            "extra": "iterations: 1002\ncpu: 698464.7704590815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 716959.9159835174,
            "unit": "ns/iter",
            "extra": "iterations: 976\ncpu: 716957.2745901692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 459019.79086232354,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 459003.6679536674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 692477.1331987716,
            "unit": "ns/iter",
            "extra": "iterations: 991\ncpu: 692485.9737638754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 26293.23578274662,
            "unit": "ns/iter",
            "extra": "iterations: 26605\ncpu: 26293.223078369094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 129936.04677928671,
            "unit": "ns/iter",
            "extra": "iterations: 5387\ncpu: 129934.56469277825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 104581.28643966415,
            "unit": "ns/iter",
            "extra": "iterations: 6696\ncpu: 104577.58363201808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 104984.99339833722,
            "unit": "ns/iter",
            "extra": "iterations: 6665\ncpu: 104982.73068267097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 105030.12661265892,
            "unit": "ns/iter",
            "extra": "iterations: 6666\ncpu: 105030.22802280194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 194981.69378657872,
            "unit": "ns/iter",
            "extra": "iterations: 3589\ncpu: 194979.35358038265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 818573.2023391653,
            "unit": "ns/iter",
            "extra": "iterations: 855\ncpu: 818543.274853802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 713628.4445574061,
            "unit": "ns/iter",
            "extra": "iterations: 983\ncpu: 713615.0559511731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 696577.1043737424,
            "unit": "ns/iter",
            "extra": "iterations: 1006\ncpu: 696547.813121267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 712172.3513237833,
            "unit": "ns/iter",
            "extra": "iterations: 982\ncpu: 712172.7087576323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 451322.0044958749,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 451310.14771998074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 688164.6205881992,
            "unit": "ns/iter",
            "extra": "iterations: 1020\ncpu: 688172.7450980309 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}