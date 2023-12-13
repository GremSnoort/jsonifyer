window.BENCHMARK_DATA = {
  "lastUpdate": 1702491004563,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-13 22.04 Release c++-17": [
      {
        "commit": {
          "author": {
            "name": "GremSnoort",
            "username": "GremSnoort",
            "email": "33685945+GremSnoort@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T17:22:18Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702491004095,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 739.5762234611768,
            "unit": "ns/iter",
            "extra": "iterations: 941121\ncpu: 739.5486871507491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11241.75377793395,
            "unit": "ns/iter",
            "extra": "iterations: 73519\ncpu: 11241.109101048707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24769.258626834962,
            "unit": "ns/iter",
            "extra": "iterations: 33674\ncpu: 24768.42370968699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39747.98882813371,
            "unit": "ns/iter",
            "extra": "iterations: 21214\ncpu: 39745.82351277459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49985.000947149725,
            "unit": "ns/iter",
            "extra": "iterations: 15837\ncpu: 49982.31988381639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51790.64029999836,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51786.59000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 62778.814943023404,
            "unit": "ns/iter",
            "extra": "iterations: 13866\ncpu: 62776.871484206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 72527.03836830369,
            "unit": "ns/iter",
            "extra": "iterations: 11963\ncpu: 72523.5726824375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 83147.99033358558,
            "unit": "ns/iter",
            "extra": "iterations: 10552\ncpu: 83144.94882486737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 627.4095281672647,
            "unit": "ns/iter",
            "extra": "iterations: 1116773\ncpu: 627.4024354098814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 521.848723704451,
            "unit": "ns/iter",
            "extra": "iterations: 1343145\ncpu: 521.8202055623185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 517.0426982090306,
            "unit": "ns/iter",
            "extra": "iterations: 1356989\ncpu: 517.0288042128569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 512.765971826026,
            "unit": "ns/iter",
            "extra": "iterations: 1367220\ncpu: 512.7456444463946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1022.8886762792542,
            "unit": "ns/iter",
            "extra": "iterations: 685137\ncpu: 1022.9059297629512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4318.512025055138,
            "unit": "ns/iter",
            "extra": "iterations: 186153\ncpu: 4318.256487942709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19775.36939085166,
            "unit": "ns/iter",
            "extra": "iterations: 41517\ncpu: 19774.528506394985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15912.667349819372,
            "unit": "ns/iter",
            "extra": "iterations: 51721\ncpu: 15911.832717851537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15115.696886143096,
            "unit": "ns/iter",
            "extra": "iterations: 54402\ncpu: 15115.350538583107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15583.562146409418,
            "unit": "ns/iter",
            "extra": "iterations: 52497\ncpu: 15582.414233194282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 48340.17537633946,
            "unit": "ns/iter",
            "extra": "iterations: 17471\ncpu: 48337.828401350926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 486647.7280453574,
            "unit": "ns/iter",
            "extra": "iterations: 1765\ncpu: 486629.2351274798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 403178.95072062366,
            "unit": "ns/iter",
            "extra": "iterations: 2151\ncpu: 403162.2501162245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 401367.7415626662,
            "unit": "ns/iter",
            "extra": "iterations: 2163\ncpu: 401353.6754507622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 402767.7218326193,
            "unit": "ns/iter",
            "extra": "iterations: 2139\ncpu: 402748.8546049562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 247887.14607061716,
            "unit": "ns/iter",
            "extra": "iterations: 3512\ncpu: 247877.30637813243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 400312.08375752065,
            "unit": "ns/iter",
            "extra": "iterations: 2161\ncpu: 400275.0115687195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2043304.2885462185,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2043041.8502202677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 816041.3685120885,
            "unit": "ns/iter",
            "extra": "iterations: 1156\ncpu: 816010.986159172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2569439.632312198,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2569077.994428966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4342.797816748349,
            "unit": "ns/iter",
            "extra": "iterations: 180648\ncpu: 4342.619901687259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19744.47326860228,
            "unit": "ns/iter",
            "extra": "iterations: 41917\ncpu: 19743.340410811892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15846.477739137203,
            "unit": "ns/iter",
            "extra": "iterations: 52334\ncpu: 15846.180303435709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15144.97829551183,
            "unit": "ns/iter",
            "extra": "iterations: 54597\ncpu: 15143.890689964637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15769.019248288821,
            "unit": "ns/iter",
            "extra": "iterations: 51589\ncpu: 15768.987574870616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 48552.57010696386,
            "unit": "ns/iter",
            "extra": "iterations: 17295\ncpu: 48550.52327262187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 507252.00466471975,
            "unit": "ns/iter",
            "extra": "iterations: 1715\ncpu: 507226.4723032083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 413699.9861904791,
            "unit": "ns/iter",
            "extra": "iterations: 2100\ncpu: 413678.4761904774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 410482.5650956432,
            "unit": "ns/iter",
            "extra": "iterations: 2143\ncpu: 410461.9225384982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 405165.5841538102,
            "unit": "ns/iter",
            "extra": "iterations: 2133\ncpu: 405150.58602906985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 243497.75430916777,
            "unit": "ns/iter",
            "extra": "iterations: 3655\ncpu: 243481.94254446003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 405494.5415699125,
            "unit": "ns/iter",
            "extra": "iterations: 2153\ncpu: 405496.93450998625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2051477.276404512,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 2051277.7528089918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 809018.4515571747,
            "unit": "ns/iter",
            "extra": "iterations: 1156\ncpu: 809008.391003465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4409.534158347123,
            "unit": "ns/iter",
            "extra": "iterations: 179795\ncpu: 4409.545871687218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20259.795562558,
            "unit": "ns/iter",
            "extra": "iterations: 40609\ncpu: 20259.540988450844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16203.722936795119,
            "unit": "ns/iter",
            "extra": "iterations: 50613\ncpu: 16203.785588682751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15458.741510111508,
            "unit": "ns/iter",
            "extra": "iterations: 52857\ncpu: 15458.760429082184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 16083.794069837904,
            "unit": "ns/iter",
            "extra": "iterations: 51061\ncpu: 16083.64113511285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 49448.02524329162,
            "unit": "ns/iter",
            "extra": "iterations: 16955\ncpu: 49448.13919197911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 500288.97309940157,
            "unit": "ns/iter",
            "extra": "iterations: 1710\ncpu: 500297.3099415193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 413005.0603204174,
            "unit": "ns/iter",
            "extra": "iterations: 2122\ncpu: 412994.29783223243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 408039.78188540763,
            "unit": "ns/iter",
            "extra": "iterations: 2164\ncpu: 408034.9353049907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 418911.26478872076,
            "unit": "ns/iter",
            "extra": "iterations: 2130\ncpu: 418917.84037558554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 249598.30788804503,
            "unit": "ns/iter",
            "extra": "iterations: 3537\ncpu: 249591.82923381357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 404538.6784059322,
            "unit": "ns/iter",
            "extra": "iterations: 2158\ncpu: 404545.22706209385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 314.74755166316834,
            "unit": "ns/iter",
            "extra": "iterations: 2230698\ncpu: 314.7526917583649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1700.0548486210532,
            "unit": "ns/iter",
            "extra": "iterations: 411715\ncpu: 1700.0811240785386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1270.7159267443274,
            "unit": "ns/iter",
            "extra": "iterations: 551657\ncpu: 1270.7029911702414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1337.0790168320761,
            "unit": "ns/iter",
            "extra": "iterations: 523939\ncpu: 1337.0793164853117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1083.74860027956,
            "unit": "ns/iter",
            "extra": "iterations: 645486\ncpu: 1083.7365953715448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8267.370118746001,
            "unit": "ns/iter",
            "extra": "iterations: 85224\ncpu: 8267.297944241072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20154.547987797992,
            "unit": "ns/iter",
            "extra": "iterations: 34415\ncpu: 20154.110126398286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4796.722126882189,
            "unit": "ns/iter",
            "extra": "iterations: 145095\ncpu: 4796.677349322945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4765.762217359604,
            "unit": "ns/iter",
            "extra": "iterations: 146697\ncpu: 4765.713681943118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4773.084925357742,
            "unit": "ns/iter",
            "extra": "iterations: 147035\ncpu: 4773.166933043152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10014.966117464073,
            "unit": "ns/iter",
            "extra": "iterations: 69859\ncpu: 10014.782633590607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9074.133265140676,
            "unit": "ns/iter",
            "extra": "iterations: 76254\ncpu: 9074.1744695361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2477.7839973293385,
            "unit": "ns/iter",
            "extra": "iterations: 278566\ncpu: 2477.7973622049844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 12447.176577723085,
            "unit": "ns/iter",
            "extra": "iterations: 56553\ncpu: 12447.390943009335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9735.308591418221,
            "unit": "ns/iter",
            "extra": "iterations: 72037\ncpu: 9735.3096325499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9581.333980714786,
            "unit": "ns/iter",
            "extra": "iterations: 73115\ncpu: 9581.073651097582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10159.673687419185,
            "unit": "ns/iter",
            "extra": "iterations: 68891\ncpu: 10159.713170080166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24871.949772986165,
            "unit": "ns/iter",
            "extra": "iterations: 28192\ncpu: 24872.080732122748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99871.56874282232,
            "unit": "ns/iter",
            "extra": "iterations: 6968\ncpu: 99873.32089552311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84806.27676176418,
            "unit": "ns/iter",
            "extra": "iterations: 8202\ncpu: 84806.31553279623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 87874.08596406004,
            "unit": "ns/iter",
            "extra": "iterations: 8236\ncpu: 87821.0053423984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83731.17356458979,
            "unit": "ns/iter",
            "extra": "iterations: 8360\ncpu: 83727.2966507168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 51946.942969449505,
            "unit": "ns/iter",
            "extra": "iterations: 13484\ncpu: 51943.97804805643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83359.33149237456,
            "unit": "ns/iter",
            "extra": "iterations: 8329\ncpu: 83359.22679793503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2374.9030432878485,
            "unit": "ns/iter",
            "extra": "iterations: 294977\ncpu: 2374.8444794000898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11774.736669415552,
            "unit": "ns/iter",
            "extra": "iterations: 59431\ncpu: 11774.334943043134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9385.741022995488,
            "unit": "ns/iter",
            "extra": "iterations: 74663\ncpu: 9385.125162396482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9391.147106572364,
            "unit": "ns/iter",
            "extra": "iterations: 74531\ncpu: 9390.615985294593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9814.281202228132,
            "unit": "ns/iter",
            "extra": "iterations: 71301\ncpu: 9813.831503064494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23501.93977680471,
            "unit": "ns/iter",
            "extra": "iterations: 29839\ncpu: 23499.98994604345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98109.0926733232,
            "unit": "ns/iter",
            "extra": "iterations: 7111\ncpu: 98104.27506679817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81592.55340148523,
            "unit": "ns/iter",
            "extra": "iterations: 8511\ncpu: 81587.9567618386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81113.1943254326,
            "unit": "ns/iter",
            "extra": "iterations: 8635\ncpu: 81109.5541401266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81603.60631112744,
            "unit": "ns/iter",
            "extra": "iterations: 8588\ncpu: 81599.74382859882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 52512.29230070355,
            "unit": "ns/iter",
            "extra": "iterations: 13209\ncpu: 52508.89545007195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82936.45060411001,
            "unit": "ns/iter",
            "extra": "iterations: 8442\ncpu: 82936.74484719294 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}