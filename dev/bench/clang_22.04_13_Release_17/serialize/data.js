window.BENCHMARK_DATA = {
  "lastUpdate": 1705576296789,
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
      },
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
        "date": 1702493553987,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 739.376760192787,
            "unit": "ns/iter",
            "extra": "iterations: 940593\ncpu: 739.3682496042392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11313.554149418067,
            "unit": "ns/iter",
            "extra": "iterations: 71986\ncpu: 11313.378990359235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25282.049899543556,
            "unit": "ns/iter",
            "extra": "iterations: 33347\ncpu: 25280.798872462292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39559.55880319828,
            "unit": "ns/iter",
            "extra": "iterations: 20254\ncpu: 39558.511898884164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50179.20819935575,
            "unit": "ns/iter",
            "extra": "iterations: 16172\ncpu: 50177.12094978977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51718.567700004314,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51717.05000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61904.78131069068,
            "unit": "ns/iter",
            "extra": "iterations: 13901\ncpu: 61900.85605352132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 71415.04182446437,
            "unit": "ns/iter",
            "extra": "iterations: 12146\ncpu: 71411.61699324881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 81755.30195381935,
            "unit": "ns/iter",
            "extra": "iterations: 10697\ncpu: 81751.3134523698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 621.2635932893687,
            "unit": "ns/iter",
            "extra": "iterations: 1126383\ncpu: 621.2293686960824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 543.6170635464172,
            "unit": "ns/iter",
            "extra": "iterations: 1277507\ncpu: 543.5836359409378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 537.6526768357498,
            "unit": "ns/iter",
            "extra": "iterations: 1305067\ncpu: 537.6448871973628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 533.7075418687424,
            "unit": "ns/iter",
            "extra": "iterations: 1318705\ncpu: 533.6763718951543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1033.132639738073,
            "unit": "ns/iter",
            "extra": "iterations: 677052\ncpu: 1033.0735305412265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4313.156396550866,
            "unit": "ns/iter",
            "extra": "iterations: 186155\ncpu: 4313.009588783537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19781.658525446113,
            "unit": "ns/iter",
            "extra": "iterations: 41599\ncpu: 19780.273564268373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15822.4624691271,
            "unit": "ns/iter",
            "extra": "iterations: 51824\ncpu: 15821.578805186786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15062.99521995479,
            "unit": "ns/iter",
            "extra": "iterations: 54602\ncpu: 15061.981246108237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15621.581090894992,
            "unit": "ns/iter",
            "extra": "iterations: 52324\ncpu: 15620.768672119872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 48307.77036520959,
            "unit": "ns/iter",
            "extra": "iterations: 17223\ncpu: 48305.03396620792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 486988.8581678149,
            "unit": "ns/iter",
            "extra": "iterations: 1812\ncpu: 486956.89845474606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 399124.7543859553,
            "unit": "ns/iter",
            "extra": "iterations: 2166\ncpu: 399105.67867036146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 403025.2345960661,
            "unit": "ns/iter",
            "extra": "iterations: 2191\ncpu: 403007.6220903711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 399526.38776452385,
            "unit": "ns/iter",
            "extra": "iterations: 2174\ncpu: 399505.7497700094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 247018.86362340837,
            "unit": "ns/iter",
            "extra": "iterations: 3505\ncpu: 247009.15834522093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 398180.2865013595,
            "unit": "ns/iter",
            "extra": "iterations: 2178\ncpu: 398159.22865013755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2013851.1750545853,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2013631.5098468247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 799834.7313558898,
            "unit": "ns/iter",
            "extra": "iterations: 1180\ncpu: 799815.8474576271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2565835.631578888,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2565730.747922439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4266.977708469569,
            "unit": "ns/iter",
            "extra": "iterations: 185003\ncpu: 4266.856213142477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19682.280028889352,
            "unit": "ns/iter",
            "extra": "iterations: 41535\ncpu: 19681.791260382764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15681.95663853439,
            "unit": "ns/iter",
            "extra": "iterations: 52489\ncpu: 15681.708548457747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15084.446955760755,
            "unit": "ns/iter",
            "extra": "iterations: 54907\ncpu: 15084.479210301042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15885.864823055255,
            "unit": "ns/iter",
            "extra": "iterations: 52361\ncpu: 15884.58776570359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 48563.37345519781,
            "unit": "ns/iter",
            "extra": "iterations: 17397\ncpu: 48560.68862447583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 499760.7517241668,
            "unit": "ns/iter",
            "extra": "iterations: 1740\ncpu: 499734.827586206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 414008.39356670144,
            "unit": "ns/iter",
            "extra": "iterations: 2114\ncpu: 413988.4105960267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 406217.9273405029,
            "unit": "ns/iter",
            "extra": "iterations: 2147\ncpu: 406185.70097810804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 405120.4051804035,
            "unit": "ns/iter",
            "extra": "iterations: 2162\ncpu: 405093.70952821284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 243586.05174784656,
            "unit": "ns/iter",
            "extra": "iterations: 3633\ncpu: 243578.53014038078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 403127.15420343657,
            "unit": "ns/iter",
            "extra": "iterations: 2153\ncpu: 403123.26985601475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2008535.2733331597,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 2008372.2222222239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 783373.0298634598,
            "unit": "ns/iter",
            "extra": "iterations: 1172\ncpu: 783360.4948805454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4351.474365571804,
            "unit": "ns/iter",
            "extra": "iterations: 184615\ncpu: 4351.442732172337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19706.722477555708,
            "unit": "ns/iter",
            "extra": "iterations: 41993\ncpu: 19705.496154120992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15781.173447822997,
            "unit": "ns/iter",
            "extra": "iterations: 52523\ncpu: 15780.932163052372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15078.051540943388,
            "unit": "ns/iter",
            "extra": "iterations: 54869\ncpu: 15077.812608212229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15764.869281911622,
            "unit": "ns/iter",
            "extra": "iterations: 52793\ncpu: 15764.726384179796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48328.29347134819,
            "unit": "ns/iter",
            "extra": "iterations: 17293\ncpu: 48326.69866419929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 490082.4414261287,
            "unit": "ns/iter",
            "extra": "iterations: 1767\ncpu: 490074.58970005705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 402776.90069606906,
            "unit": "ns/iter",
            "extra": "iterations: 2155\ncpu: 402777.49419953744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 397805.36599816143,
            "unit": "ns/iter",
            "extra": "iterations: 2194\ncpu: 397794.89516864246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 399977.7851239762,
            "unit": "ns/iter",
            "extra": "iterations: 2178\ncpu: 399974.9770431576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 245227.46564672719,
            "unit": "ns/iter",
            "extra": "iterations: 3595\ncpu: 245227.67732962477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 394628.27202189184,
            "unit": "ns/iter",
            "extra": "iterations: 2191\ncpu: 394615.4267457761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 335.303558495591,
            "unit": "ns/iter",
            "extra": "iterations: 2084926\ncpu: 335.29736786821275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1723.6875183924717,
            "unit": "ns/iter",
            "extra": "iterations: 404379\ncpu: 1723.6243721854867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1342.8260727107727,
            "unit": "ns/iter",
            "extra": "iterations: 521902\ncpu: 1342.8283470843176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1317.8537013220312,
            "unit": "ns/iter",
            "extra": "iterations: 531864\ncpu: 1317.820533068614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1078.264115353823,
            "unit": "ns/iter",
            "extra": "iterations: 649966\ncpu: 1078.2342460990246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8300.416963106562,
            "unit": "ns/iter",
            "extra": "iterations: 84053\ncpu: 8300.428301190917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20191.5774466622,
            "unit": "ns/iter",
            "extra": "iterations: 34966\ncpu: 20191.385917748703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4756.927169852008,
            "unit": "ns/iter",
            "extra": "iterations: 146162\ncpu: 4756.73704519648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4663.106477582626,
            "unit": "ns/iter",
            "extra": "iterations: 148435\ncpu: 4662.952807626241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4701.046491328095,
            "unit": "ns/iter",
            "extra": "iterations: 148931\ncpu: 4700.872215992645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9788.4922591089,
            "unit": "ns/iter",
            "extra": "iterations: 74733\ncpu: 9788.406727951462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8889.70727890397,
            "unit": "ns/iter",
            "extra": "iterations: 78597\ncpu: 8889.442345127693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2421.0675168815455,
            "unit": "ns/iter",
            "extra": "iterations: 288476\ncpu: 2420.9868411930606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 12061.241713948652,
            "unit": "ns/iter",
            "extra": "iterations: 57808\ncpu: 12061.065942430021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9533.955239327795,
            "unit": "ns/iter",
            "extra": "iterations: 73435\ncpu: 9533.876217062716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9460.383445671725,
            "unit": "ns/iter",
            "extra": "iterations: 74180\ncpu: 9460.377460231754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9970.033970731152,
            "unit": "ns/iter",
            "extra": "iterations: 69972\ncpu: 9969.736466015092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24583.343964513588,
            "unit": "ns/iter",
            "extra": "iterations: 28407\ncpu: 24582.785933044324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98072.29722144222,
            "unit": "ns/iter",
            "extra": "iterations: 7126\ncpu: 98069.42183553187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83154.45323827496,
            "unit": "ns/iter",
            "extra": "iterations: 8415\ncpu: 83153.78490790281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 82701.46325272052,
            "unit": "ns/iter",
            "extra": "iterations: 8436\ncpu: 82701.52916073924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83353.46741973382,
            "unit": "ns/iter",
            "extra": "iterations: 8410\ncpu: 83350.32104637331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 52111.499032739135,
            "unit": "ns/iter",
            "extra": "iterations: 13440\ncpu: 52109.48660714259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83683.03559483204,
            "unit": "ns/iter",
            "extra": "iterations: 8372\ncpu: 83680.78117534632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2373.4915042376324,
            "unit": "ns/iter",
            "extra": "iterations: 295206\ncpu: 2373.4720839007614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11749.663475087627,
            "unit": "ns/iter",
            "extra": "iterations: 58905\ncpu: 11749.69017910194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 10005.021622200142,
            "unit": "ns/iter",
            "extra": "iterations: 74923\ncpu: 10004.683475034342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9285.769959762862,
            "unit": "ns/iter",
            "extra": "iterations: 75552\ncpu: 9285.279013129899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9785.751602165206,
            "unit": "ns/iter",
            "extra": "iterations: 72090\ncpu: 9785.11721459283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23716.007447527783,
            "unit": "ns/iter",
            "extra": "iterations: 29540\ncpu: 23715.866621530477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96244.93670366291,
            "unit": "ns/iter",
            "extra": "iterations: 7299\ncpu: 96241.2659268398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 80780.90969163386,
            "unit": "ns/iter",
            "extra": "iterations: 8626\ncpu: 80779.61975423113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81093.0460009158,
            "unit": "ns/iter",
            "extra": "iterations: 8652\ncpu: 81088.80027739289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82045.24308485535,
            "unit": "ns/iter",
            "extra": "iterations: 8532\ncpu: 82039.52180028179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 52500.98877082311,
            "unit": "ns/iter",
            "extra": "iterations: 13269\ncpu: 52497.904891099985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83081.30517098686,
            "unit": "ns/iter",
            "extra": "iterations: 8451\ncpu: 83075.1390368017 ns\nthreads: 1"
          }
        ]
      },
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
        "date": 1702504640791,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 740.9583430034191,
            "unit": "ns/iter",
            "extra": "iterations: 943635\ncpu: 740.9530167914502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11186.121739010969,
            "unit": "ns/iter",
            "extra": "iterations: 72294\ncpu: 11185.655794395107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 24844.088026389443,
            "unit": "ns/iter",
            "extra": "iterations: 33649\ncpu: 24843.085975809092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39026.104523537055,
            "unit": "ns/iter",
            "extra": "iterations: 21775\ncpu: 39025.827784156136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49786.605339199385,
            "unit": "ns/iter",
            "extra": "iterations: 15920\ncpu: 49785.596733668295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51918.63559999774,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51918.40000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 62712.3197863318,
            "unit": "ns/iter",
            "extra": "iterations: 13853\ncpu: 62711.484876921946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 72189.97475921537,
            "unit": "ns/iter",
            "extra": "iterations: 12044\ncpu: 72187.08070408508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 83018.32974199085,
            "unit": "ns/iter",
            "extra": "iterations: 10581\ncpu: 83017.33295529734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 611.7201787037633,
            "unit": "ns/iter",
            "extra": "iterations: 1147150\ncpu: 611.6849583751043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 519.0528960082823,
            "unit": "ns/iter",
            "extra": "iterations: 1338135\ncpu: 519.0403808285413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 516.6447438512286,
            "unit": "ns/iter",
            "extra": "iterations: 1353491\ncpu: 516.6447357241392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 508.60552104702043,
            "unit": "ns/iter",
            "extra": "iterations: 1377275\ncpu: 508.5916755912938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1013.1657553399712,
            "unit": "ns/iter",
            "extra": "iterations: 690934\ncpu: 1013.1533547343162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4405.810411165285,
            "unit": "ns/iter",
            "extra": "iterations: 180633\ncpu: 4405.708812896866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19891.440019933412,
            "unit": "ns/iter",
            "extra": "iterations: 42139\ncpu: 19891.404637034575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15760.674823377682,
            "unit": "ns/iter",
            "extra": "iterations: 52513\ncpu: 15760.225087121287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15046.803184504439,
            "unit": "ns/iter",
            "extra": "iterations: 54828\ncpu: 15046.817319617727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15535.9405970371,
            "unit": "ns/iter",
            "extra": "iterations: 53196\ncpu: 15535.386119257088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47838.17054085213,
            "unit": "ns/iter",
            "extra": "iterations: 17380\ncpu: 47837.54315304945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 489018.9479574682,
            "unit": "ns/iter",
            "extra": "iterations: 1787\ncpu: 489013.3184107433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 402815.62320184713,
            "unit": "ns/iter",
            "extra": "iterations: 2155\ncpu: 402795.6844547561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 401504.44960520713,
            "unit": "ns/iter",
            "extra": "iterations: 2153\ncpu: 401496.330701347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 404145.31267473736,
            "unit": "ns/iter",
            "extra": "iterations: 2146\ncpu: 404131.54706430604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 247060.3438824755,
            "unit": "ns/iter",
            "extra": "iterations: 3539\ncpu: 247057.13478383646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 399089.4225806434,
            "unit": "ns/iter",
            "extra": "iterations: 2170\ncpu: 399076.8663594476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2017090.2319473568,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2016868.49015317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 779700.0873146275,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 779666.9686985165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2574119.6871507396,
            "unit": "ns/iter",
            "extra": "iterations: 358\ncpu: 2573860.61452513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4278.823528787108,
            "unit": "ns/iter",
            "extra": "iterations: 188399\ncpu: 4278.776957414851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19741.414921589247,
            "unit": "ns/iter",
            "extra": "iterations: 41832\ncpu: 19740.638745458084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15805.22303193012,
            "unit": "ns/iter",
            "extra": "iterations: 52145\ncpu: 15804.999520567677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15100.13970372573,
            "unit": "ns/iter",
            "extra": "iterations: 54544\ncpu: 15099.602156057475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15586.207146407325,
            "unit": "ns/iter",
            "extra": "iterations: 52306\ncpu: 15586.244407907394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 48214.92385347472,
            "unit": "ns/iter",
            "extra": "iterations: 17335\ncpu: 48213.5275454285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 503400.95362321,
            "unit": "ns/iter",
            "extra": "iterations: 1725\ncpu: 503395.9420289858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 413857.6772511895,
            "unit": "ns/iter",
            "extra": "iterations: 2110\ncpu: 413858.67298578314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 409799.2766651228,
            "unit": "ns/iter",
            "extra": "iterations: 2147\ncpu: 409786.49278062244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 408021.17287981533,
            "unit": "ns/iter",
            "extra": "iterations: 2146\ncpu: 408017.66076421086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 243570.58173211818,
            "unit": "ns/iter",
            "extra": "iterations: 3591\ncpu: 243557.75549986132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 405337.92478079774,
            "unit": "ns/iter",
            "extra": "iterations: 2167\ncpu: 405336.5482233508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2026564.7901785502,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 2026402.232142851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 786404.4923599415,
            "unit": "ns/iter",
            "extra": "iterations: 1178\ncpu: 786380.0509337818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4291.017292291015,
            "unit": "ns/iter",
            "extra": "iterations: 188292\ncpu: 4291.072908036468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19655.446207733945,
            "unit": "ns/iter",
            "extra": "iterations: 41967\ncpu: 19654.773989086636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15730.236175575,
            "unit": "ns/iter",
            "extra": "iterations: 52787\ncpu: 15730.274499403258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15059.021189597199,
            "unit": "ns/iter",
            "extra": "iterations: 55027\ncpu: 15058.325912733628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15674.545158453244,
            "unit": "ns/iter",
            "extra": "iterations: 53423\ncpu: 15673.97937218062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48407.09215607719,
            "unit": "ns/iter",
            "extra": "iterations: 17351\ncpu: 48404.59339519317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 496385.22821105435,
            "unit": "ns/iter",
            "extra": "iterations: 1744\ncpu: 496372.93577981833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 406818.5900795822,
            "unit": "ns/iter",
            "extra": "iterations: 2137\ncpu: 406813.476836686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 397962.6973684283,
            "unit": "ns/iter",
            "extra": "iterations: 2204\ncpu: 397948.82032667747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 404042.4371559741,
            "unit": "ns/iter",
            "extra": "iterations: 2180\ncpu: 404028.2110091765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 246397.31800336926,
            "unit": "ns/iter",
            "extra": "iterations: 3566\ncpu: 246391.5872125633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 397283.0184077321,
            "unit": "ns/iter",
            "extra": "iterations: 2173\ncpu: 397269.53520478786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 320.3068331176177,
            "unit": "ns/iter",
            "extra": "iterations: 2190435\ncpu: 320.30341005325465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1720.6625211707137,
            "unit": "ns/iter",
            "extra": "iterations: 407993\ncpu: 1720.6611387940452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1344.6504906710468,
            "unit": "ns/iter",
            "extra": "iterations: 521225\ncpu: 1344.603194397816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1292.2642422943386,
            "unit": "ns/iter",
            "extra": "iterations: 540731\ncpu: 1292.2504905396563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1083.658201135151,
            "unit": "ns/iter",
            "extra": "iterations: 646819\ncpu: 1083.624166884398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8226.157118608595,
            "unit": "ns/iter",
            "extra": "iterations: 84834\ncpu: 8226.16521677632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19914.903598348366,
            "unit": "ns/iter",
            "extra": "iterations: 35155\ncpu: 19914.6323424833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4734.921880503742,
            "unit": "ns/iter",
            "extra": "iterations: 147620\ncpu: 4734.9735808155865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4641.620258237716,
            "unit": "ns/iter",
            "extra": "iterations: 149707\ncpu: 4641.545819500822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4698.917493055087,
            "unit": "ns/iter",
            "extra": "iterations: 149042\ncpu: 4698.930502811302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9928.210025355009,
            "unit": "ns/iter",
            "extra": "iterations: 70601\ncpu: 9927.94011416275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8938.270789075741,
            "unit": "ns/iter",
            "extra": "iterations: 78142\ncpu: 8938.380128484167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2413.5741263258574,
            "unit": "ns/iter",
            "extra": "iterations: 289553\ncpu: 2413.5581396151993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 12084.934476031629,
            "unit": "ns/iter",
            "extra": "iterations: 57933\ncpu: 12084.830752766266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9494.269582880968,
            "unit": "ns/iter",
            "extra": "iterations: 73840\ncpu: 9494.134615384539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9375.668888710627,
            "unit": "ns/iter",
            "extra": "iterations: 74706\ncpu: 9375.296495596098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9994.32797165842,
            "unit": "ns/iter",
            "extra": "iterations: 70003\ncpu: 9994.321671928446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24679.595327862113,
            "unit": "ns/iter",
            "extra": "iterations: 28381\ncpu: 24679.165638983868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98816.30090369092,
            "unit": "ns/iter",
            "extra": "iterations: 7082\ncpu: 98812.242304433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84848.34343924386,
            "unit": "ns/iter",
            "extra": "iterations: 8246\ncpu: 84849.33300994396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83268.82401630802,
            "unit": "ns/iter",
            "extra": "iterations: 8336\ncpu: 83268.85796545178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84082.59963899197,
            "unit": "ns/iter",
            "extra": "iterations: 8310\ncpu: 84080.28880866441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 51990.296952623976,
            "unit": "ns/iter",
            "extra": "iterations: 13487\ncpu: 51988.18121153692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83904.86155689588,
            "unit": "ns/iter",
            "extra": "iterations: 8350\ncpu: 83901.1856287433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2346.114242213904,
            "unit": "ns/iter",
            "extra": "iterations: 299504\ncpu: 2346.0948768630597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11629.675530677441,
            "unit": "ns/iter",
            "extra": "iterations: 60206\ncpu: 11629.384114540127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9346.183639131503,
            "unit": "ns/iter",
            "extra": "iterations: 74886\ncpu: 9346.175520123841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9308.82779315493,
            "unit": "ns/iter",
            "extra": "iterations: 75148\ncpu: 9308.46862191952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9786.14143482186,
            "unit": "ns/iter",
            "extra": "iterations: 71312\ncpu: 9786.26318151207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23574.25563605993,
            "unit": "ns/iter",
            "extra": "iterations: 29675\ncpu: 23573.29064869409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 96704.52237569483,
            "unit": "ns/iter",
            "extra": "iterations: 7240\ncpu: 96704.44751381114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82246.21699776569,
            "unit": "ns/iter",
            "extra": "iterations: 8507\ncpu: 82246.1502292233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81465.70976374974,
            "unit": "ns/iter",
            "extra": "iterations: 8593\ncpu: 81462.9233096701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82049.69371481295,
            "unit": "ns/iter",
            "extra": "iterations: 8528\ncpu: 82049.28470919226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 52718.67922821476,
            "unit": "ns/iter",
            "extra": "iterations: 13268\ncpu: 52717.15405486875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82736.94705117376,
            "unit": "ns/iter",
            "extra": "iterations: 8461\ncpu: 82736.55596265243 ns\nthreads: 1"
          }
        ]
      },
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
        "date": 1705576296025,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 727.9728705013005,
            "unit": "ns/iter",
            "extra": "iterations: 955307\ncpu: 727.9513287351605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11258.959201117797,
            "unit": "ns/iter",
            "extra": "iterations: 73703\ncpu: 11258.45487971996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25368.237602064553,
            "unit": "ns/iter",
            "extra": "iterations: 33312\ncpu: 25367.71133525456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39678.72557566989,
            "unit": "ns/iter",
            "extra": "iterations: 21106\ncpu: 39675.262958400446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50614.06347474589,
            "unit": "ns/iter",
            "extra": "iterations: 15581\ncpu: 50613.246903279665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51856.69559999724,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51850.32999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 63409.250380458,
            "unit": "ns/iter",
            "extra": "iterations: 13799\ncpu: 63407.03674179287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 72047.83566579313,
            "unit": "ns/iter",
            "extra": "iterations: 11933\ncpu: 72041.90899187126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 83533.56203960985,
            "unit": "ns/iter",
            "extra": "iterations: 10453\ncpu: 83530.58452119015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 610.22581677625,
            "unit": "ns/iter",
            "extra": "iterations: 1146642\ncpu: 610.1951611749789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 517.6798641852198,
            "unit": "ns/iter",
            "extra": "iterations: 1344773\ncpu: 517.6608989026404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 503.2449765822524,
            "unit": "ns/iter",
            "extra": "iterations: 1404273\ncpu: 503.22465788347455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 500.0789529999565,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 500.08000000000055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1031.816511259592,
            "unit": "ns/iter",
            "extra": "iterations: 649048\ncpu: 1031.7318595851145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4220.373353060705,
            "unit": "ns/iter",
            "extra": "iterations: 185192\ncpu: 4220.07538122597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19656.441293873737,
            "unit": "ns/iter",
            "extra": "iterations: 41086\ncpu: 19656.021515844808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15798.75173604545,
            "unit": "ns/iter",
            "extra": "iterations: 52130\ncpu: 15798.766545175546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15090.211527609834,
            "unit": "ns/iter",
            "extra": "iterations: 54929\ncpu: 15089.801379963224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15710.090386584252,
            "unit": "ns/iter",
            "extra": "iterations: 52718\ncpu: 15709.884669372888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 48176.313892758175,
            "unit": "ns/iter",
            "extra": "iterations: 17232\ncpu: 48174.14113277612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 498114.054957495,
            "unit": "ns/iter",
            "extra": "iterations: 1765\ncpu: 497922.60623229534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 410729.33165603346,
            "unit": "ns/iter",
            "extra": "iterations: 2186\ncpu: 410708.05123513215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 398852.3456221142,
            "unit": "ns/iter",
            "extra": "iterations: 2170\ncpu: 398839.170506912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 395873.2472324887,
            "unit": "ns/iter",
            "extra": "iterations: 2168\ncpu: 395863.3763837649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 246470.35779038066,
            "unit": "ns/iter",
            "extra": "iterations: 3530\ncpu: 246459.09348441852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 396687.3102189768,
            "unit": "ns/iter",
            "extra": "iterations: 2192\ncpu: 396675.638686132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2028084.5614034627,
            "unit": "ns/iter",
            "extra": "iterations: 456\ncpu: 2027829.605263154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 791918.8289036754,
            "unit": "ns/iter",
            "extra": "iterations: 1204\ncpu: 791894.6013289059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2555870.849582117,
            "unit": "ns/iter",
            "extra": "iterations: 359\ncpu: 2555512.534818937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4347.693044601102,
            "unit": "ns/iter",
            "extra": "iterations: 181945\ncpu: 4347.492374069105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19857.51022889734,
            "unit": "ns/iter",
            "extra": "iterations: 41940\ncpu: 19855.80114449211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15795.96391485421,
            "unit": "ns/iter",
            "extra": "iterations: 52099\ncpu: 15795.099714006057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15091.481907140513,
            "unit": "ns/iter",
            "extra": "iterations: 54469\ncpu: 15090.407387688489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15739.638533673029,
            "unit": "ns/iter",
            "extra": "iterations: 51612\ncpu: 15738.789428815027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 48365.03306122359,
            "unit": "ns/iter",
            "extra": "iterations: 17150\ncpu: 48362.431486880785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 506645.94212961406,
            "unit": "ns/iter",
            "extra": "iterations: 1728\ncpu: 506638.4837962969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 412508.53644593793,
            "unit": "ns/iter",
            "extra": "iterations: 2099\ncpu: 412489.94759409234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 409178.7836829641,
            "unit": "ns/iter",
            "extra": "iterations: 2145\ncpu: 409164.89510489407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 407825.43773231865,
            "unit": "ns/iter",
            "extra": "iterations: 2152\ncpu: 407804.0427509286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 241465.03276430638,
            "unit": "ns/iter",
            "extra": "iterations: 3632\ncpu: 241452.25770925047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 407615.65629354876,
            "unit": "ns/iter",
            "extra": "iterations: 2153\ncpu: 407598.93172317423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2023607.663716875,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 2023356.6371681355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 786733.8543771381,
            "unit": "ns/iter",
            "extra": "iterations: 1188\ncpu: 786682.4915824891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4389.717730480728,
            "unit": "ns/iter",
            "extra": "iterations: 183757\ncpu: 4389.495910359894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19700.4021150048,
            "unit": "ns/iter",
            "extra": "iterations: 41702\ncpu: 19699.506018895892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15817.199086651077,
            "unit": "ns/iter",
            "extra": "iterations: 51897\ncpu: 15816.413280151055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15129.148722846086,
            "unit": "ns/iter",
            "extra": "iterations: 54457\ncpu: 15128.591365664613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15786.296503656411,
            "unit": "ns/iter",
            "extra": "iterations: 52512\ncpu: 15785.982251675756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48644.27292779241,
            "unit": "ns/iter",
            "extra": "iterations: 17228\ncpu: 48642.62247504062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 500290.243488105,
            "unit": "ns/iter",
            "extra": "iterations: 1766\ncpu: 500263.080407699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 408057.9578651702,
            "unit": "ns/iter",
            "extra": "iterations: 2136\ncpu: 408052.94943820196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 403622.11157212086,
            "unit": "ns/iter",
            "extra": "iterations: 2169\ncpu: 403598.2941447659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 405516.78428635857,
            "unit": "ns/iter",
            "extra": "iterations: 2151\ncpu: 405494.1887494173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 244922.25874514517,
            "unit": "ns/iter",
            "extra": "iterations: 3602\ncpu: 244908.71737923342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 396655.8858695985,
            "unit": "ns/iter",
            "extra": "iterations: 2208\ncpu: 396623.2336956515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 314.4632321635398,
            "unit": "ns/iter",
            "extra": "iterations: 2226620\ncpu: 314.45828205980354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1696.8016250892329,
            "unit": "ns/iter",
            "extra": "iterations: 412285\ncpu: 1696.7212001406767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1340.517233454467,
            "unit": "ns/iter",
            "extra": "iterations: 522153\ncpu: 1340.4783655365404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1336.1593944056524,
            "unit": "ns/iter",
            "extra": "iterations: 521273\ncpu: 1336.1014286180264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1076.5106057370012,
            "unit": "ns/iter",
            "extra": "iterations: 650827\ncpu: 1076.4664035143019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8352.710983139648,
            "unit": "ns/iter",
            "extra": "iterations: 84393\ncpu: 8352.6346971905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20245.15557553943,
            "unit": "ns/iter",
            "extra": "iterations: 34472\ncpu: 20244.57530749571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4792.687862856219,
            "unit": "ns/iter",
            "extra": "iterations: 145891\ncpu: 4792.629428820153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4764.526334768895,
            "unit": "ns/iter",
            "extra": "iterations: 146973\ncpu: 4764.39550121451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4813.039089736152,
            "unit": "ns/iter",
            "extra": "iterations: 145716\ncpu: 4812.776908506967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9974.747385965922,
            "unit": "ns/iter",
            "extra": "iterations: 70198\ncpu: 9974.208666913604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9005.196248379196,
            "unit": "ns/iter",
            "extra": "iterations: 78686\ncpu: 9004.69333807796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2475.0512602087233,
            "unit": "ns/iter",
            "extra": "iterations: 281739\ncpu: 2474.9221797479063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 12363.907162132127,
            "unit": "ns/iter",
            "extra": "iterations: 56701\ncpu: 12363.21228902473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9736.403893957595,
            "unit": "ns/iter",
            "extra": "iterations: 72009\ncpu: 9736.112152647616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9530.37950214376,
            "unit": "ns/iter",
            "extra": "iterations: 72993\ncpu: 9529.979587083664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10207.352861233507,
            "unit": "ns/iter",
            "extra": "iterations: 68432\ncpu: 10206.571487023633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24523.7512871684,
            "unit": "ns/iter",
            "extra": "iterations: 28551\ncpu: 24522.608665195334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99193.50531386436,
            "unit": "ns/iter",
            "extra": "iterations: 7057\ncpu: 99188.0685843857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84911.6686878584,
            "unit": "ns/iter",
            "extra": "iterations: 8246\ncpu: 84906.83967984444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83879.56262735117,
            "unit": "ns/iter",
            "extra": "iterations: 8343\ncpu: 83878.28119381408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 84507.55020466518,
            "unit": "ns/iter",
            "extra": "iterations: 8306\ncpu: 84503.43125451518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 52884.295233059354,
            "unit": "ns/iter",
            "extra": "iterations: 13237\ncpu: 52881.72546649588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83998.02452512001,
            "unit": "ns/iter",
            "extra": "iterations: 8318\ncpu: 83991.00745371402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2377.6506819762203,
            "unit": "ns/iter",
            "extra": "iterations: 294365\ncpu: 2377.54216703749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11740.585188169587,
            "unit": "ns/iter",
            "extra": "iterations: 59574\ncpu: 11724.158189814274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9350.73474457402,
            "unit": "ns/iter",
            "extra": "iterations: 74875\ncpu: 9350.45208681123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9329.637536922679,
            "unit": "ns/iter",
            "extra": "iterations: 75158\ncpu: 9329.169216849838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9719.889979862503,
            "unit": "ns/iter",
            "extra": "iterations: 72005\ncpu: 9719.190334004612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23592.19878964923,
            "unit": "ns/iter",
            "extra": "iterations: 29413\ncpu: 23590.820385543746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98735.89017907252,
            "unit": "ns/iter",
            "extra": "iterations: 7148\ncpu: 98728.86121992255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83225.92362683071,
            "unit": "ns/iter",
            "extra": "iterations: 8393\ncpu: 83223.12641487016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 81265.265381941,
            "unit": "ns/iter",
            "extra": "iterations: 8614\ncpu: 81264.36034362733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81809.0303277794,
            "unit": "ns/iter",
            "extra": "iterations: 8573\ncpu: 81805.86725766874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 53569.6033014279,
            "unit": "ns/iter",
            "extra": "iterations: 13267\ncpu: 53567.58121655251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83046.0596871194,
            "unit": "ns/iter",
            "extra": "iterations: 8310\ncpu: 83046.11311672843 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}