window.BENCHMARK_DATA = {
  "lastUpdate": 1705959070793,
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705774133107,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 774.7923018922039,
            "unit": "ns/iter",
            "extra": "iterations: 896532\ncpu: 774.7761373827148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12557.038690431662,
            "unit": "ns/iter",
            "extra": "iterations: 66373\ncpu: 12556.709806698507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27420.786224218627,
            "unit": "ns/iter",
            "extra": "iterations: 30256\ncpu: 27419.166446324685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 44312.6092827868,
            "unit": "ns/iter",
            "extra": "iterations: 18809\ncpu: 44310.330161093116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 55980.0668576203,
            "unit": "ns/iter",
            "extra": "iterations: 14314\ncpu: 55976.33086488748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 54302.05069999374,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54298.230000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 65570.34881430097,
            "unit": "ns/iter",
            "extra": "iterations: 13199\ncpu: 65566.16410334116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 76681.9051504769,
            "unit": "ns/iter",
            "extra": "iterations: 11397\ncpu: 76679.3191190664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 87665.5043961623,
            "unit": "ns/iter",
            "extra": "iterations: 9895\ncpu: 87661.5361293583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 634.1113689675046,
            "unit": "ns/iter",
            "extra": "iterations: 1119486\ncpu: 634.0873400828598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 542.8091127569324,
            "unit": "ns/iter",
            "extra": "iterations: 1293659\ncpu: 542.7841494551506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 535.5800387927917,
            "unit": "ns/iter",
            "extra": "iterations: 1303849\ncpu: 535.5291141842346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 526.3115222621939,
            "unit": "ns/iter",
            "extra": "iterations: 1297063\ncpu: 526.3158381666885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1127.2652793210225,
            "unit": "ns/iter",
            "extra": "iterations: 628202\ncpu: 1127.2148130696824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4552.999932270615,
            "unit": "ns/iter",
            "extra": "iterations: 177176\ncpu: 4552.8429358378135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19970.747828565094,
            "unit": "ns/iter",
            "extra": "iterations: 38569\ncpu: 19969.81772926444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15961.147909392976,
            "unit": "ns/iter",
            "extra": "iterations: 50416\ncpu: 15961.244446207556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15955.377156176808,
            "unit": "ns/iter",
            "extra": "iterations: 51480\ncpu: 15954.974747474747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 16181.046007050147,
            "unit": "ns/iter",
            "extra": "iterations: 49362\ncpu: 16181.12920870307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 51114.76877212514,
            "unit": "ns/iter",
            "extra": "iterations: 16101\ncpu: 51111.75703372461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 534114.9266055102,
            "unit": "ns/iter",
            "extra": "iterations: 1635\ncpu: 534102.7522935779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 435749.1289043081,
            "unit": "ns/iter",
            "extra": "iterations: 2017\ncpu: 435735.4982647491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 431484.1066666809,
            "unit": "ns/iter",
            "extra": "iterations: 2025\ncpu: 431467.75308641954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 436858.332162535,
            "unit": "ns/iter",
            "extra": "iterations: 1993\ncpu: 436839.33768188715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 267263.9335146797,
            "unit": "ns/iter",
            "extra": "iterations: 3309\ncpu: 267262.2544575398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 420722.086438133,
            "unit": "ns/iter",
            "extra": "iterations: 2013\ncpu: 420718.9766517643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2138400.170068005,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 2138288.6621315195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 815140.489522249,
            "unit": "ns/iter",
            "extra": "iterations: 1193\ncpu: 815086.6722548193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2678091.6837604963,
            "unit": "ns/iter",
            "extra": "iterations: 351\ncpu: 2677854.7008547033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4414.573203975584,
            "unit": "ns/iter",
            "extra": "iterations: 177183\ncpu: 4414.206780560205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 21405.086497289154,
            "unit": "ns/iter",
            "extra": "iterations: 38533\ncpu: 21404.333947525476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16958.06031892917,
            "unit": "ns/iter",
            "extra": "iterations: 47597\ncpu: 16957.16326659234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15993.080621040343,
            "unit": "ns/iter",
            "extra": "iterations: 50818\ncpu: 15992.410169624896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 16840.515579145373,
            "unit": "ns/iter",
            "extra": "iterations: 48045\ncpu: 16839.852221875317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 50622.609448916046,
            "unit": "ns/iter",
            "extra": "iterations: 16277\ncpu: 50620.648768200655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 533859.4877600907,
            "unit": "ns/iter",
            "extra": "iterations: 1634\ncpu: 533848.4088127296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 436125.84005901864,
            "unit": "ns/iter",
            "extra": "iterations: 2032\ncpu: 436091.73228346463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 425263.25828797586,
            "unit": "ns/iter",
            "extra": "iterations: 2021\ncpu: 425252.9935675402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 429057.0779543641,
            "unit": "ns/iter",
            "extra": "iterations: 2014\ncpu: 429037.1896722962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 255456.12492717765,
            "unit": "ns/iter",
            "extra": "iterations: 3434\ncpu: 255447.05882352908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 432984.6929824929,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 432971.15009746596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2159511.025761233,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 2159254.5667447373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 848608.0955413751,
            "unit": "ns/iter",
            "extra": "iterations: 1099\ncpu: 848579.5268425832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4651.795726351582,
            "unit": "ns/iter",
            "extra": "iterations: 172499\ncpu: 4651.484936144564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 21279.28894543476,
            "unit": "ns/iter",
            "extra": "iterations: 38907\ncpu: 21278.36379057746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 17015.987246258737,
            "unit": "ns/iter",
            "extra": "iterations: 48770\ncpu: 17014.77957760927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 16178.458132631202,
            "unit": "ns/iter",
            "extra": "iterations: 50863\ncpu: 16177.83654129718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 16961.128333946264,
            "unit": "ns/iter",
            "extra": "iterations: 48966\ncpu: 16960.850385982158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 51717.10470428791,
            "unit": "ns/iter",
            "extra": "iterations: 16198\ncpu: 51715.86615631525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 522680.4444444295,
            "unit": "ns/iter",
            "extra": "iterations: 1647\ncpu: 522659.07710989565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 434526.1827688909,
            "unit": "ns/iter",
            "extra": "iterations: 2008\ncpu: 434507.32071713154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 425788.2474176091,
            "unit": "ns/iter",
            "extra": "iterations: 2033\ncpu: 425772.5528775238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 429852.9722222376,
            "unit": "ns/iter",
            "extra": "iterations: 1980\ncpu: 429846.3636363652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 264183.62477715587,
            "unit": "ns/iter",
            "extra": "iterations: 3366\ncpu: 264167.08259061194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 422815.34280119586,
            "unit": "ns/iter",
            "extra": "iterations: 2042\ncpu: 422800.4407443667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 327.6346443129591,
            "unit": "ns/iter",
            "extra": "iterations: 2121289\ncpu: 327.63168997717736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1791.4093196715985,
            "unit": "ns/iter",
            "extra": "iterations: 392825\ncpu: 1791.3564564373373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1408.0415192392393,
            "unit": "ns/iter",
            "extra": "iterations: 524552\ncpu: 1408.0487730482284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1281.5608634249486,
            "unit": "ns/iter",
            "extra": "iterations: 562226\ncpu: 1281.5332268518325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1115.1663642312508,
            "unit": "ns/iter",
            "extra": "iterations: 634295\ncpu: 1115.1467377166903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8595.299399232605,
            "unit": "ns/iter",
            "extra": "iterations: 79232\ncpu: 8595.130755250502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21119.550132641605,
            "unit": "ns/iter",
            "extra": "iterations: 33172\ncpu: 21118.83214759444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5020.272274219745,
            "unit": "ns/iter",
            "extra": "iterations: 138254\ncpu: 5020.108640617981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4955.596547752957,
            "unit": "ns/iter",
            "extra": "iterations: 141531\ncpu: 4955.324981806019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5025.94777000013,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5025.9779999998955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10451.102158590007,
            "unit": "ns/iter",
            "extra": "iterations: 68100\ncpu: 10450.933920704972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9643.9638400562,
            "unit": "ns/iter",
            "extra": "iterations: 72926\ncpu: 9643.511230562435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2660.7807293943447,
            "unit": "ns/iter",
            "extra": "iterations: 260874\ncpu: 2660.6626187354827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 13144.985617258988,
            "unit": "ns/iter",
            "extra": "iterations: 52563\ncpu: 13144.521811920982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 10583.095750166536,
            "unit": "ns/iter",
            "extra": "iterations: 65932\ncpu: 10582.582054237731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 10573.840738219644,
            "unit": "ns/iter",
            "extra": "iterations: 67568\ncpu: 10573.576249111995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10908.409661120484,
            "unit": "ns/iter",
            "extra": "iterations: 63533\ncpu: 10908.26657012892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 26237.074700971858,
            "unit": "ns/iter",
            "extra": "iterations: 26586\ncpu: 26236.579402693143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 106462.08758248658,
            "unit": "ns/iter",
            "extra": "iterations: 6668\ncpu: 106458.80323935198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 91790.76273423259,
            "unit": "ns/iter",
            "extra": "iterations: 7578\ncpu: 91783.38611770833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 90425.38787492037,
            "unit": "ns/iter",
            "extra": "iterations: 7835\ncpu: 90424.74792597389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 89372.17593790591,
            "unit": "ns/iter",
            "extra": "iterations: 7730\ncpu: 89360.40103492874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 55705.728095721875,
            "unit": "ns/iter",
            "extra": "iterations: 12703\ncpu: 55703.0150358185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 90636.2026871351,
            "unit": "ns/iter",
            "extra": "iterations: 7815\ncpu: 90633.57645553557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2577.044110231434,
            "unit": "ns/iter",
            "extra": "iterations: 273678\ncpu: 2576.948457676557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 12643.100464020054,
            "unit": "ns/iter",
            "extra": "iterations: 54308\ncpu: 12642.746924946414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 10131.28615929686,
            "unit": "ns/iter",
            "extra": "iterations: 69982\ncpu: 10130.786487953897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 10124.843744591137,
            "unit": "ns/iter",
            "extra": "iterations: 69348\ncpu: 10124.410220914879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 10623.564436247756,
            "unit": "ns/iter",
            "extra": "iterations: 67237\ncpu: 10623.478144474033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 25217.459172317416,
            "unit": "ns/iter",
            "extra": "iterations: 27861\ncpu: 25216.998671978883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 105361.34760071202,
            "unit": "ns/iter",
            "extra": "iterations: 6752\ncpu: 105359.33056872139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 89393.87103021146,
            "unit": "ns/iter",
            "extra": "iterations: 7746\ncpu: 89390.48541182421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 87348.44224504432,
            "unit": "ns/iter",
            "extra": "iterations: 7982\ncpu: 87344.32473064428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 89337.52471824235,
            "unit": "ns/iter",
            "extra": "iterations: 7808\ncpu: 89332.87653688523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 57791.98586429682,
            "unit": "ns/iter",
            "extra": "iterations: 12380\ncpu: 57792.302100160596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 88780.0270064662,
            "unit": "ns/iter",
            "extra": "iterations: 7887\ncpu: 88774.35019652592 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705775548285,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 742.7498081196761,
            "unit": "ns/iter",
            "extra": "iterations: 944599\ncpu: 742.7432169629653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11627.631186912882,
            "unit": "ns/iter",
            "extra": "iterations: 71825\ncpu: 11627.326139923425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25480.484284958024,
            "unit": "ns/iter",
            "extra": "iterations: 32103\ncpu: 25479.96760427374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41022.49677551402,
            "unit": "ns/iter",
            "extra": "iterations: 19538\ncpu: 41022.228477838056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 50815.180385510095,
            "unit": "ns/iter",
            "extra": "iterations: 15927\ncpu: 50813.630941169125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 52342.01690000191,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52341.49999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 63655.819897963425,
            "unit": "ns/iter",
            "extra": "iterations: 13720\ncpu: 63655.92565597666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 72311.1756068506,
            "unit": "ns/iter",
            "extra": "iterations: 11782\ncpu: 72308.7506365642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 82634.64686468907,
            "unit": "ns/iter",
            "extra": "iterations: 10605\ncpu: 82631.47571900047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 600.9685543377703,
            "unit": "ns/iter",
            "extra": "iterations: 1166711\ncpu: 600.9531923501204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 519.7119490356731,
            "unit": "ns/iter",
            "extra": "iterations: 1316215\ncpu: 519.697465839547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 516.9999111838581,
            "unit": "ns/iter",
            "extra": "iterations: 1351106\ncpu: 516.9947435656421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 514.4866166418234,
            "unit": "ns/iter",
            "extra": "iterations: 1361990\ncpu: 514.4769785387557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1020.7367314367873,
            "unit": "ns/iter",
            "extra": "iterations: 684833\ncpu: 1020.7403848821547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4330.747286094714,
            "unit": "ns/iter",
            "extra": "iterations: 185526\ncpu: 4330.663626661497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19733.525617608513,
            "unit": "ns/iter",
            "extra": "iterations: 41612\ncpu: 19733.146688455236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15946.585596472258,
            "unit": "ns/iter",
            "extra": "iterations: 52140\ncpu: 15945.911008822382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 14400.935393996933,
            "unit": "ns/iter",
            "extra": "iterations: 57069\ncpu: 14400.974259230039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15390.723521626747,
            "unit": "ns/iter",
            "extra": "iterations: 53657\ncpu: 15390.381497288323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 48153.38439773892,
            "unit": "ns/iter",
            "extra": "iterations: 17318\ncpu: 48151.120221734775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 483202.06017997174,
            "unit": "ns/iter",
            "extra": "iterations: 1778\ncpu: 483199.9437570313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 401798.5428571349,
            "unit": "ns/iter",
            "extra": "iterations: 2170\ncpu: 401779.72350230423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 400813.8008337469,
            "unit": "ns/iter",
            "extra": "iterations: 2159\ncpu: 400797.96201945405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 398531.1815242363,
            "unit": "ns/iter",
            "extra": "iterations: 2165\ncpu: 398523.14087759744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 247294.45832155744,
            "unit": "ns/iter",
            "extra": "iterations: 3539\ncpu: 247295.9593105401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 395121.4901960749,
            "unit": "ns/iter",
            "extra": "iterations: 2193\ncpu: 395117.0086639306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2033834.3809525415,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 2033626.839826846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 820784.9064935005,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 820771.5151515147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2578521.0444442756,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2578410.27777778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4337.353457374073,
            "unit": "ns/iter",
            "extra": "iterations: 183810\ncpu: 4337.274903432903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19770.805156634113,
            "unit": "ns/iter",
            "extra": "iterations: 41849\ncpu: 19769.021959903435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15840.704279263366,
            "unit": "ns/iter",
            "extra": "iterations: 52252\ncpu: 15839.98507234168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15110.145146226703,
            "unit": "ns/iter",
            "extra": "iterations: 54607\ncpu: 15109.432856593385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15602.722291002872,
            "unit": "ns/iter",
            "extra": "iterations: 52501\ncpu: 15601.923772880535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 48065.56777713377,
            "unit": "ns/iter",
            "extra": "iterations: 17410\ncpu: 48062.912119471526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 507832.1173054678,
            "unit": "ns/iter",
            "extra": "iterations: 1722\ncpu: 507820.4994192808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 415894.45855043,
            "unit": "ns/iter",
            "extra": "iterations: 2111\ncpu: 415865.419232592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 408947.97793424927,
            "unit": "ns/iter",
            "extra": "iterations: 2130\ncpu: 408915.72769952944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 405819.5385333738,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 405792.3867351688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 242555.54699194353,
            "unit": "ns/iter",
            "extra": "iterations: 3607\ncpu: 242543.5264762955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 402985.0394431642,
            "unit": "ns/iter",
            "extra": "iterations: 2155\ncpu: 402963.3874709987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2038398.7130245012,
            "unit": "ns/iter",
            "extra": "iterations: 453\ncpu: 2038146.357615898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 795845.1048592966,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 795816.5387894317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4352.688548988225,
            "unit": "ns/iter",
            "extra": "iterations: 184106\ncpu: 4352.451848391696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19705.1838888366,
            "unit": "ns/iter",
            "extra": "iterations: 41884\ncpu: 19703.853500143363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15785.188151984947,
            "unit": "ns/iter",
            "extra": "iterations: 52532\ncpu: 15784.329551511471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15136.695319770912,
            "unit": "ns/iter",
            "extra": "iterations: 54805\ncpu: 15136.181005382667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15661.475438953466,
            "unit": "ns/iter",
            "extra": "iterations: 44481\ncpu: 15660.270677367867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48402.865757524785,
            "unit": "ns/iter",
            "extra": "iterations: 17379\ncpu: 48400.65021002356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 498588.06480951613,
            "unit": "ns/iter",
            "extra": "iterations: 1759\ncpu: 498563.61569073173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 409366.64028103027,
            "unit": "ns/iter",
            "extra": "iterations: 2135\ncpu: 409345.90163934376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 404464.6732718676,
            "unit": "ns/iter",
            "extra": "iterations: 2170\ncpu: 404444.37788018433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 404166.14514605846,
            "unit": "ns/iter",
            "extra": "iterations: 2122\ncpu: 404149.622997175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 246398.08015477067,
            "unit": "ns/iter",
            "extra": "iterations: 3618\ncpu: 246388.9718076279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 398404.1315669444,
            "unit": "ns/iter",
            "extra": "iterations: 2189\ncpu: 398387.4828688913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 317.5976647813001,
            "unit": "ns/iter",
            "extra": "iterations: 2200993\ncpu: 317.57897458101803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1734.4663695784616,
            "unit": "ns/iter",
            "extra": "iterations: 401452\ncpu: 1734.3911600888714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1357.8189209711563,
            "unit": "ns/iter",
            "extra": "iterations: 514963\ncpu: 1357.7552173651352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1332.3722427459893,
            "unit": "ns/iter",
            "extra": "iterations: 529195\ncpu: 1332.3024593958799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1084.2296520844336,
            "unit": "ns/iter",
            "extra": "iterations: 646565\ncpu: 1084.1723569942715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8310.611765261785,
            "unit": "ns/iter",
            "extra": "iterations: 84758\ncpu: 8310.19136836643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20037.101937440315,
            "unit": "ns/iter",
            "extra": "iterations: 34943\ncpu: 20036.49371834145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4727.678088549253,
            "unit": "ns/iter",
            "extra": "iterations: 148662\ncpu: 4727.323054983721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4652.5791477363155,
            "unit": "ns/iter",
            "extra": "iterations: 150775\ncpu: 4652.193002818747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4715.758414711592,
            "unit": "ns/iter",
            "extra": "iterations: 148995\ncpu: 4715.657572401758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10005.666927979113,
            "unit": "ns/iter",
            "extra": "iterations: 70159\ncpu: 10005.382060747574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8999.124956590022,
            "unit": "ns/iter",
            "extra": "iterations: 77747\ncpu: 8998.407655600788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2435.250143422735,
            "unit": "ns/iter",
            "extra": "iterations: 287611\ncpu: 2435.1259166026653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 12119.337288047216,
            "unit": "ns/iter",
            "extra": "iterations: 57737\ncpu: 12118.592930010283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9624.357584416262,
            "unit": "ns/iter",
            "extra": "iterations: 72794\ncpu: 9623.966260955664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9412.309521886675,
            "unit": "ns/iter",
            "extra": "iterations: 74292\ncpu: 9412.103591234494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10041.862341253445,
            "unit": "ns/iter",
            "extra": "iterations: 70159\ncpu: 10041.641129434705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24570.2565805561,
            "unit": "ns/iter",
            "extra": "iterations: 28607\ncpu: 24568.920194357866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 97736.41072688914,
            "unit": "ns/iter",
            "extra": "iterations: 7085\ncpu: 97726.95836273667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83723.98111177684,
            "unit": "ns/iter",
            "extra": "iterations: 8365\ncpu: 83721.35086670707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 81351.06164064261,
            "unit": "ns/iter",
            "extra": "iterations: 8582\ncpu: 81346.45770216707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 82885.19836667049,
            "unit": "ns/iter",
            "extra": "iterations: 8449\ncpu: 82882.05704817163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 52299.301296956524,
            "unit": "ns/iter",
            "extra": "iterations: 13339\ncpu: 52295.87675237948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83259.55332540699,
            "unit": "ns/iter",
            "extra": "iterations: 8420\ncpu: 83257.47030878857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2369.2021715645515,
            "unit": "ns/iter",
            "extra": "iterations: 293429\ncpu: 2369.1496068895826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11697.16621572044,
            "unit": "ns/iter",
            "extra": "iterations: 59874\ncpu: 11697.0454621373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9437.121246549805,
            "unit": "ns/iter",
            "extra": "iterations: 73932\ncpu: 9437.004274197918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9354.844401545854,
            "unit": "ns/iter",
            "extra": "iterations: 75110\ncpu: 9354.502729330223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9833.670809540328,
            "unit": "ns/iter",
            "extra": "iterations: 71448\ncpu: 9833.705632068102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23853.60769754792,
            "unit": "ns/iter",
            "extra": "iterations: 29360\ncpu: 23853.19822888283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 98756.38787282252,
            "unit": "ns/iter",
            "extra": "iterations: 7108\ncpu: 98755.38829487894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81315.8269671002,
            "unit": "ns/iter",
            "extra": "iterations: 8299\ncpu: 81314.95360886735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 80529.90760179653,
            "unit": "ns/iter",
            "extra": "iterations: 8669\ncpu: 80526.9581266583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81185.8136674796,
            "unit": "ns/iter",
            "extra": "iterations: 8619\ncpu: 81185.96124840448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 52532.51713535841,
            "unit": "ns/iter",
            "extra": "iterations: 13335\ncpu: 52531.856017997736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82569.2490619206,
            "unit": "ns/iter",
            "extra": "iterations: 8528\ncpu: 82568.304409006 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705779069321,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 726.5779580214207,
            "unit": "ns/iter",
            "extra": "iterations: 963634\ncpu: 726.547838702246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11210.791886597372,
            "unit": "ns/iter",
            "extra": "iterations: 73508\ncpu: 11210.219295858955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25092.277983737047,
            "unit": "ns/iter",
            "extra": "iterations: 33448\ncpu: 25090.857450370728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41213.98308205058,
            "unit": "ns/iter",
            "extra": "iterations: 20097\ncpu: 41212.60884709163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 51661.98214405681,
            "unit": "ns/iter",
            "extra": "iterations: 14953\ncpu: 51661.45923894873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 52069.08740000244,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52066.43999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 62963.486636483765,
            "unit": "ns/iter",
            "extra": "iterations: 13694\ncpu: 62959.84372717975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 72415.12623947588,
            "unit": "ns/iter",
            "extra": "iterations: 12001\ncpu: 72411.37405216231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 81815.70356472766,
            "unit": "ns/iter",
            "extra": "iterations: 10660\ncpu: 81801.76360225143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 590.3774800159367,
            "unit": "ns/iter",
            "extra": "iterations: 1184317\ncpu: 590.3598445348674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 505.6746599931182,
            "unit": "ns/iter",
            "extra": "iterations: 1388575\ncpu: 505.66962533532563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 501.13759389115364,
            "unit": "ns/iter",
            "extra": "iterations: 1402555\ncpu: 501.12672943307064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 498.75319316565344,
            "unit": "ns/iter",
            "extra": "iterations: 1406363\ncpu: 498.7343950317227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1018.3086989355755,
            "unit": "ns/iter",
            "extra": "iterations: 688590\ncpu: 1018.2603581231225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4277.072812546512,
            "unit": "ns/iter",
            "extra": "iterations: 188484\ncpu: 4276.934381698182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18767.791935076475,
            "unit": "ns/iter",
            "extra": "iterations: 43621\ncpu: 18766.942527681615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15044.803687397296,
            "unit": "ns/iter",
            "extra": "iterations: 54510\ncpu: 15044.417538066395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15109.421581460063,
            "unit": "ns/iter",
            "extra": "iterations: 54241\ncpu: 15108.740620563769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15595.398789059254,
            "unit": "ns/iter",
            "extra": "iterations: 52356\ncpu: 15595.056918022785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47950.64589905088,
            "unit": "ns/iter",
            "extra": "iterations: 17752\ncpu: 47949.36908517358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 491104.6164613339,
            "unit": "ns/iter",
            "extra": "iterations: 1786\ncpu: 491099.99999999953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 400554.473197796,
            "unit": "ns/iter",
            "extra": "iterations: 2164\ncpu: 400544.54713493586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 403815.8859122325,
            "unit": "ns/iter",
            "extra": "iterations: 2165\ncpu: 403808.03695150046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 398600.7721342263,
            "unit": "ns/iter",
            "extra": "iterations: 2146\ncpu: 398596.69151910534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 247171.46340775967,
            "unit": "ns/iter",
            "extra": "iterations: 3539\ncpu: 247171.29132523327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 395437.7476125611,
            "unit": "ns/iter",
            "extra": "iterations: 2199\ncpu: 395422.4647567083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2011034.2869565517,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 2010839.9999999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 788617.0643274848,
            "unit": "ns/iter",
            "extra": "iterations: 1197\ncpu: 788610.8604845442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2542298.5999998422,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2542105.833333331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4329.360852615617,
            "unit": "ns/iter",
            "extra": "iterations: 187517\ncpu: 4329.073630657485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19585.074227984882,
            "unit": "ns/iter",
            "extra": "iterations: 41871\ncpu: 19584.363879534732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15819.105670248944,
            "unit": "ns/iter",
            "extra": "iterations: 52361\ncpu: 15818.38391168994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15025.416194852842,
            "unit": "ns/iter",
            "extra": "iterations: 54400\ncpu: 15025.319852941271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15530.00253831155,
            "unit": "ns/iter",
            "extra": "iterations: 52791\ncpu: 15529.75317762503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 48001.99244332394,
            "unit": "ns/iter",
            "extra": "iterations: 17468\ncpu: 48000.30913670718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 503472.8951009142,
            "unit": "ns/iter",
            "extra": "iterations: 1735\ncpu: 503438.3861671487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 411449.68894118123,
            "unit": "ns/iter",
            "extra": "iterations: 2125\ncpu: 411439.1058823531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 409265.7666980234,
            "unit": "ns/iter",
            "extra": "iterations: 2126\ncpu: 409250.0940733795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 407066.14799252903,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 407058.54341736506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 241381.4190005428,
            "unit": "ns/iter",
            "extra": "iterations: 3642\ncpu: 241368.1768259201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 402975.10051188467,
            "unit": "ns/iter",
            "extra": "iterations: 2149\ncpu: 402964.26244764985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2016781.1460175142,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 2016542.0353982253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 802658.9828327014,
            "unit": "ns/iter",
            "extra": "iterations: 1165\ncpu: 802605.4077253181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4327.0635297383515,
            "unit": "ns/iter",
            "extra": "iterations: 187487\ncpu: 4326.941601284334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19741.313873134088,
            "unit": "ns/iter",
            "extra": "iterations: 41966\ncpu: 19740.687699566362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15821.367312040225,
            "unit": "ns/iter",
            "extra": "iterations: 52631\ncpu: 15820.235222587467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15117.007476500237,
            "unit": "ns/iter",
            "extra": "iterations: 55106\ncpu: 15115.829492251323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15712.108956204289,
            "unit": "ns/iter",
            "extra": "iterations: 53315\ncpu: 15711.161961924416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47543.706781118104,
            "unit": "ns/iter",
            "extra": "iterations: 17475\ncpu: 47541.344778254585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 505254.7351756211,
            "unit": "ns/iter",
            "extra": "iterations: 1737\ncpu: 505220.6678180772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 414682.8295346973,
            "unit": "ns/iter",
            "extra": "iterations: 2106\ncpu: 414653.27635327616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 407195.737827727,
            "unit": "ns/iter",
            "extra": "iterations: 2136\ncpu: 407169.75655430794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 408219.22820989485,
            "unit": "ns/iter",
            "extra": "iterations: 2134\ncpu: 408196.6729147146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 246781.8859155082,
            "unit": "ns/iter",
            "extra": "iterations: 3550\ncpu: 246764.4788732385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 404047.0503056053,
            "unit": "ns/iter",
            "extra": "iterations: 2127\ncpu: 404035.0728725922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 317.82738685936744,
            "unit": "ns/iter",
            "extra": "iterations: 2205817\ncpu: 317.8031087801014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1717.4421373062942,
            "unit": "ns/iter",
            "extra": "iterations: 407672\ncpu: 1717.2722188426028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1269.980723022479,
            "unit": "ns/iter",
            "extra": "iterations: 551850\ncpu: 1269.928060161266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1329.9026148648938,
            "unit": "ns/iter",
            "extra": "iterations: 557046\ncpu: 1329.871500737825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1091.2573082197562,
            "unit": "ns/iter",
            "extra": "iterations: 641880\ncpu: 1091.2081697513652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8170.444535505522,
            "unit": "ns/iter",
            "extra": "iterations: 86632\ncpu: 8169.9510573460675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19511.57968970475,
            "unit": "ns/iter",
            "extra": "iterations: 36159\ncpu: 19510.08324345247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4846.821440698082,
            "unit": "ns/iter",
            "extra": "iterations: 144305\ncpu: 4846.674058417907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4753.178334159896,
            "unit": "ns/iter",
            "extra": "iterations: 145104\ncpu: 4753.023348770577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4781.265031245036,
            "unit": "ns/iter",
            "extra": "iterations: 146262\ncpu: 4781.183766118295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9559.272296364396,
            "unit": "ns/iter",
            "extra": "iterations: 73207\ncpu: 9558.887811274826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9059.435970478713,
            "unit": "ns/iter",
            "extra": "iterations: 77230\ncpu: 9059.197203159327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2424.387101010568,
            "unit": "ns/iter",
            "extra": "iterations: 289356\ncpu: 2424.323324900816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 12069.34851488476,
            "unit": "ns/iter",
            "extra": "iterations: 58009\ncpu: 12069.139271492186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9512.503103902052,
            "unit": "ns/iter",
            "extra": "iterations: 73617\ncpu: 9512.2458127879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9392.232695478013,
            "unit": "ns/iter",
            "extra": "iterations: 73998\ncpu: 9391.97005324465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 9955.115028991353,
            "unit": "ns/iter",
            "extra": "iterations: 70191\ncpu: 9954.830391360745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24564.915338540843,
            "unit": "ns/iter",
            "extra": "iterations: 28549\ncpu: 24564.35251672544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 100307.68065535786,
            "unit": "ns/iter",
            "extra": "iterations: 6958\ncpu: 100307.67461914313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 86125.35113287422,
            "unit": "ns/iter",
            "extra": "iterations: 8165\ncpu: 86120.42865890863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 84922.77607770886,
            "unit": "ns/iter",
            "extra": "iterations: 8235\ncpu: 84918.51851851828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 85143.83721491873,
            "unit": "ns/iter",
            "extra": "iterations: 8287\ncpu: 85142.29516109581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 52930.390046824105,
            "unit": "ns/iter",
            "extra": "iterations: 13242\ncpu: 52928.16795046128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 85834.68700134904,
            "unit": "ns/iter",
            "extra": "iterations: 8147\ncpu: 85834.82263409848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2367.0452549069405,
            "unit": "ns/iter",
            "extra": "iterations: 295990\ncpu: 2366.9613838305613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11764.909055729318,
            "unit": "ns/iter",
            "extra": "iterations: 59432\ncpu: 11764.431619329756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9385.95727365161,
            "unit": "ns/iter",
            "extra": "iterations: 74708\ncpu: 9385.672217165404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9327.452076871125,
            "unit": "ns/iter",
            "extra": "iterations: 74463\ncpu: 9327.269919288748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9722.506202099645,
            "unit": "ns/iter",
            "extra": "iterations: 72153\ncpu: 9722.338641497896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23966.245746174263,
            "unit": "ns/iter",
            "extra": "iterations: 29209\ncpu: 23965.534595501067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 99719.6002848915,
            "unit": "ns/iter",
            "extra": "iterations: 7020\ncpu: 99717.45014245069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 83987.05252354538,
            "unit": "ns/iter",
            "extra": "iterations: 8282\ncpu: 83983.38565563897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82605.09430626752,
            "unit": "ns/iter",
            "extra": "iterations: 8483\ncpu: 82604.11411057506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 89424.66783301615,
            "unit": "ns/iter",
            "extra": "iterations: 8288\ncpu: 89417.38658301083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 53058.157233656384,
            "unit": "ns/iter",
            "extra": "iterations: 13216\ncpu: 53056.121368038774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83951.27179243136,
            "unit": "ns/iter",
            "extra": "iterations: 8363\ncpu: 83945.85674997029 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705954283168,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 740.4010951527555,
            "unit": "ns/iter",
            "extra": "iterations: 942517\ncpu: 740.3712612080207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11733.482915339064,
            "unit": "ns/iter",
            "extra": "iterations: 72170\ncpu: 11732.855757239851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25664.480765078915,
            "unit": "ns/iter",
            "extra": "iterations: 32467\ncpu: 25663.5784026858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40604.05210014647,
            "unit": "ns/iter",
            "extra": "iterations: 21689\ncpu: 40601.9825718106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53393.21886816636,
            "unit": "ns/iter",
            "extra": "iterations: 15603\ncpu: 53390.777414599754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 52621.28910001138,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52617.98999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 65570.11406067904,
            "unit": "ns/iter",
            "extra": "iterations: 13712\ncpu: 65566.33605600933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 71054.80386061168,
            "unit": "ns/iter",
            "extra": "iterations: 12226\ncpu: 71051.8239816784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 82974.4958477219,
            "unit": "ns/iter",
            "extra": "iterations: 10717\ncpu: 82971.62452178786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 608.65102003077,
            "unit": "ns/iter",
            "extra": "iterations: 1146338\ncpu: 608.6070600468612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 527.6724604793596,
            "unit": "ns/iter",
            "extra": "iterations: 1324689\ncpu: 527.6606056213951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 523.2148336155402,
            "unit": "ns/iter",
            "extra": "iterations: 1331705\ncpu: 523.1931996951283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 518.2275137925209,
            "unit": "ns/iter",
            "extra": "iterations: 1348371\ncpu: 518.2050785725879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1025.4028070188529,
            "unit": "ns/iter",
            "extra": "iterations: 682076\ncpu: 1025.3718060743981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4309.775025299566,
            "unit": "ns/iter",
            "extra": "iterations: 185772\ncpu: 4309.532652929399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18790.574514283177,
            "unit": "ns/iter",
            "extra": "iterations: 43750\ncpu: 18789.762285714256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15329.736843064697,
            "unit": "ns/iter",
            "extra": "iterations: 54895\ncpu: 15328.86783860095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15085.717016684188,
            "unit": "ns/iter",
            "extra": "iterations: 54664\ncpu: 15085.169398507225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15603.548649207985,
            "unit": "ns/iter",
            "extra": "iterations: 53043\ncpu: 15602.592236487406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 49502.165201900774,
            "unit": "ns/iter",
            "extra": "iterations: 16840\ncpu: 49500.74821852728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 487293.1149553545,
            "unit": "ns/iter",
            "extra": "iterations: 1792\ncpu: 487271.31696428556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 403140.40775337256,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 403119.33675852424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 406595.1632653613,
            "unit": "ns/iter",
            "extra": "iterations: 2156\ncpu: 406577.73654916586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 400005.0619137559,
            "unit": "ns/iter",
            "extra": "iterations: 2132\ncpu: 399987.1951219508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 251261.5874245903,
            "unit": "ns/iter",
            "extra": "iterations: 3483\ncpu: 251254.03387884056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 398182.0174071918,
            "unit": "ns/iter",
            "extra": "iterations: 2183\ncpu: 398160.69628950953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2014656.2516410856,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2014500.000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 793880.8793970387,
            "unit": "ns/iter",
            "extra": "iterations: 1194\ncpu: 793847.9061976555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2534737.873278342,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2534587.327823692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4365.382194599224,
            "unit": "ns/iter",
            "extra": "iterations: 182776\ncpu: 4365.207138792837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19908.577538061738,
            "unit": "ns/iter",
            "extra": "iterations: 41902\ncpu: 19907.608228724206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15910.117518376552,
            "unit": "ns/iter",
            "extra": "iterations: 52111\ncpu: 15909.669743432254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15222.017097468119,
            "unit": "ns/iter",
            "extra": "iterations: 54511\ncpu: 15221.25075672806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15878.912915199273,
            "unit": "ns/iter",
            "extra": "iterations: 52535\ncpu: 15878.376320548325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 49571.19251651255,
            "unit": "ns/iter",
            "extra": "iterations: 16944\ncpu: 49568.58474976382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 497939.9411765461,
            "unit": "ns/iter",
            "extra": "iterations: 1751\ncpu: 497925.87093089754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 409864.53048782144,
            "unit": "ns/iter",
            "extra": "iterations: 2132\ncpu: 409848.358348968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 402872.7413555259,
            "unit": "ns/iter",
            "extra": "iterations: 2169\ncpu: 402851.7289073318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 405178.5504375878,
            "unit": "ns/iter",
            "extra": "iterations: 2171\ncpu: 405165.91432519414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 241016.73222553742,
            "unit": "ns/iter",
            "extra": "iterations: 3671\ncpu: 241003.86815581736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 402919.8097628334,
            "unit": "ns/iter",
            "extra": "iterations: 2192\ncpu: 402905.3832116777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2017273.8886412235,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2017050.1113585783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 794345.3813559014,
            "unit": "ns/iter",
            "extra": "iterations: 1180\ncpu: 794308.1355932209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4317.012462185267,
            "unit": "ns/iter",
            "extra": "iterations: 188089\ncpu: 4316.658071444876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19679.92875700227,
            "unit": "ns/iter",
            "extra": "iterations: 41955\ncpu: 19678.979859373165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15721.502070272818,
            "unit": "ns/iter",
            "extra": "iterations: 52650\ncpu: 15720.731244064611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15017.73769092559,
            "unit": "ns/iter",
            "extra": "iterations: 55061\ncpu: 15017.048364541162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15571.989671363826,
            "unit": "ns/iter",
            "extra": "iterations: 53250\ncpu: 15571.487323943653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 49650.08348145306,
            "unit": "ns/iter",
            "extra": "iterations: 16878\ncpu: 49648.21661334307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 494104.24929813715,
            "unit": "ns/iter",
            "extra": "iterations: 1781\ncpu: 494089.38798427966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 407847.51820729196,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 407824.78991596575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 403271.7010120072,
            "unit": "ns/iter",
            "extra": "iterations: 2174\ncpu: 403252.71389144403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 404848.50396263815,
            "unit": "ns/iter",
            "extra": "iterations: 2145\ncpu: 404834.1724941714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 247471.32642193773,
            "unit": "ns/iter",
            "extra": "iterations: 3569\ncpu: 247286.13056878603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 394738.5075791679,
            "unit": "ns/iter",
            "extra": "iterations: 2177\ncpu: 394721.3596692679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 326.2979700456846,
            "unit": "ns/iter",
            "extra": "iterations: 2140393\ncpu: 326.2899383430998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1693.9713635050691,
            "unit": "ns/iter",
            "extra": "iterations: 411887\ncpu: 1693.9247900516555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1316.1075146314868,
            "unit": "ns/iter",
            "extra": "iterations: 531044\ncpu: 1316.0357710472294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1298.242723976819,
            "unit": "ns/iter",
            "extra": "iterations: 538962\ncpu: 1298.2059959700207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1079.0024283514463,
            "unit": "ns/iter",
            "extra": "iterations: 649000\ncpu: 1078.9713405238886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8474.222693632883,
            "unit": "ns/iter",
            "extra": "iterations: 83909\ncpu: 8474.045692357102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19219.65316690271,
            "unit": "ns/iter",
            "extra": "iterations: 36692\ncpu: 19219.385697154677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4775.110418539848,
            "unit": "ns/iter",
            "extra": "iterations: 146796\ncpu: 4774.954358429448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4705.307212097488,
            "unit": "ns/iter",
            "extra": "iterations: 148653\ncpu: 4705.063469960217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4697.734164717877,
            "unit": "ns/iter",
            "extra": "iterations: 148908\ncpu: 4697.574341203897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9885.486277593094,
            "unit": "ns/iter",
            "extra": "iterations: 71161\ncpu: 9884.901842301197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8914.673537541728,
            "unit": "ns/iter",
            "extra": "iterations: 78156\ncpu: 8914.25994165522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2441.2495139848065,
            "unit": "ns/iter",
            "extra": "iterations: 283427\ncpu: 2441.1668613081624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 12241.999755276787,
            "unit": "ns/iter",
            "extra": "iterations: 57208\ncpu: 12241.557124877698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9678.350033843424,
            "unit": "ns/iter",
            "extra": "iterations: 72393\ncpu: 9678.2188885666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9478.776686917055,
            "unit": "ns/iter",
            "extra": "iterations: 73744\ncpu: 9478.276198741574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10059.50437682415,
            "unit": "ns/iter",
            "extra": "iterations: 69571\ncpu: 10059.20570352581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24425.953484314112,
            "unit": "ns/iter",
            "extra": "iterations: 28657\ncpu: 24425.06891858854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98410.69061007412,
            "unit": "ns/iter",
            "extra": "iterations: 7114\ncpu: 98407.81557492148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84032.92566837322,
            "unit": "ns/iter",
            "extra": "iterations: 8341\ncpu: 84031.0993885627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 82715.1462319959,
            "unit": "ns/iter",
            "extra": "iterations: 8466\ncpu: 82710.9733049842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 82900.7550418677,
            "unit": "ns/iter",
            "extra": "iterations: 8479\ncpu: 82896.55619766472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 52638.145512008516,
            "unit": "ns/iter",
            "extra": "iterations: 13291\ncpu: 52636.00180573375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84012.03614890244,
            "unit": "ns/iter",
            "extra": "iterations: 8382\ncpu: 84008.45860176689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2404.3648572425354,
            "unit": "ns/iter",
            "extra": "iterations: 290774\ncpu: 2404.311939857094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11654.559713931712,
            "unit": "ns/iter",
            "extra": "iterations: 59986\ncpu: 11653.774213983363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9400.53865340199,
            "unit": "ns/iter",
            "extra": "iterations: 74573\ncpu: 9400.339264881486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9422.066658603482,
            "unit": "ns/iter",
            "extra": "iterations: 74394\ncpu: 9421.663037341683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9779.887846558493,
            "unit": "ns/iter",
            "extra": "iterations: 71741\ncpu: 9779.439929747303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23964.32030903279,
            "unit": "ns/iter",
            "extra": "iterations: 29253\ncpu: 23962.54059412708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97327.87383110877,
            "unit": "ns/iter",
            "extra": "iterations: 7165\ncpu: 97323.97766922544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82470.42457506899,
            "unit": "ns/iter",
            "extra": "iterations: 8472\ncpu: 82467.03257790259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 82390.79873103982,
            "unit": "ns/iter",
            "extra": "iterations: 8511\ncpu: 82385.90059922423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 82691.07624114903,
            "unit": "ns/iter",
            "extra": "iterations: 8460\ncpu: 82687.28132387593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 53112.01833674662,
            "unit": "ns/iter",
            "extra": "iterations: 13143\ncpu: 53109.17598721803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83267.40285545672,
            "unit": "ns/iter",
            "extra": "iterations: 8405\ncpu: 83263.92623438535 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705955725659,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 734.4930944394569,
            "unit": "ns/iter",
            "extra": "iterations: 954231\ncpu: 734.4937441772485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11403.737004796098,
            "unit": "ns/iter",
            "extra": "iterations: 72142\ncpu: 11403.511130825316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25557.35570469728,
            "unit": "ns/iter",
            "extra": "iterations: 32929\ncpu: 25556.52464393088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41102.186916766,
            "unit": "ns/iter",
            "extra": "iterations: 21218\ncpu: 41100.13196342726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 52969.29792696765,
            "unit": "ns/iter",
            "extra": "iterations: 15581\ncpu: 52967.04319363325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 52365.5045000055,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52364.12000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 61993.91205882421,
            "unit": "ns/iter",
            "extra": "iterations: 13600\ncpu: 61992.161764705874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 71537.59268272755,
            "unit": "ns/iter",
            "extra": "iterations: 12327\ncpu: 71534.89900219039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 81992.0337457751,
            "unit": "ns/iter",
            "extra": "iterations: 10668\ncpu: 81991.94788151486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 613.1420669390144,
            "unit": "ns/iter",
            "extra": "iterations: 1142743\ncpu: 613.1053088927259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 520.9814893653232,
            "unit": "ns/iter",
            "extra": "iterations: 1345929\ncpu: 520.9687138028838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 513.8910606906366,
            "unit": "ns/iter",
            "extra": "iterations: 1360161\ncpu: 513.8840181419695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 509.01780761882134,
            "unit": "ns/iter",
            "extra": "iterations: 1378118\ncpu: 508.98660346936856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1035.3030394794869,
            "unit": "ns/iter",
            "extra": "iterations: 676958\ncpu: 1035.2698394878253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4281.942274124038,
            "unit": "ns/iter",
            "extra": "iterations: 186762\ncpu: 4281.840524303658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 18709.892604196095,
            "unit": "ns/iter",
            "extra": "iterations: 44052\ncpu: 18709.679469717597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15015.457292366835,
            "unit": "ns/iter",
            "extra": "iterations: 55037\ncpu: 15014.971746279762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15072.6302376596,
            "unit": "ns/iter",
            "extra": "iterations: 54700\ncpu: 15072.440585009159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 16050.232814321402,
            "unit": "ns/iter",
            "extra": "iterations: 54013\ncpu: 16049.53807416731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47749.533641889546,
            "unit": "ns/iter",
            "extra": "iterations: 17285\ncpu: 47747.96065953137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 477915.8792821929,
            "unit": "ns/iter",
            "extra": "iterations: 1839\ncpu: 477898.04241435515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 395414.04164761835,
            "unit": "ns/iter",
            "extra": "iterations: 2185\ncpu: 395388.74141876353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 395424.8669097272,
            "unit": "ns/iter",
            "extra": "iterations: 2194\ncpu: 395415.8158614404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 398911.5399538208,
            "unit": "ns/iter",
            "extra": "iterations: 2165\ncpu: 398900.55427251774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 247156.65222316387,
            "unit": "ns/iter",
            "extra": "iterations: 3531\ncpu: 247149.24950438956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 400467.4087156252,
            "unit": "ns/iter",
            "extra": "iterations: 2180\ncpu: 400448.0733944954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2026141.477973589,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2025941.629955944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 789067.1224999817,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 789022.9166666678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2552867.4765839926,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2552581.5426997314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4272.121965650862,
            "unit": "ns/iter",
            "extra": "iterations: 185913\ncpu: 4271.859956000931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19678.742107539154,
            "unit": "ns/iter",
            "extra": "iterations: 41622\ncpu: 19677.70650136952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15880.061019754641,
            "unit": "ns/iter",
            "extra": "iterations: 51934\ncpu: 15879.26214040906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15036.381536750963,
            "unit": "ns/iter",
            "extra": "iterations: 53945\ncpu: 15035.792010380943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15642.658325962067,
            "unit": "ns/iter",
            "extra": "iterations: 51994\ncpu: 15641.560564680532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 48001.01927738652,
            "unit": "ns/iter",
            "extra": "iterations: 17326\ncpu: 48000.40401708402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 498870.9971330656,
            "unit": "ns/iter",
            "extra": "iterations: 1744\ncpu: 498851.6628440375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 407779.86803928757,
            "unit": "ns/iter",
            "extra": "iterations: 2137\ncpu: 407757.3233504914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 404086.30712302873,
            "unit": "ns/iter",
            "extra": "iterations: 2162\ncpu: 404070.12025902205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 402282.2509242413,
            "unit": "ns/iter",
            "extra": "iterations: 2164\ncpu: 402258.54898336553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 243610.8192074843,
            "unit": "ns/iter",
            "extra": "iterations: 3634\ncpu: 243611.0621904228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 402399.318098727,
            "unit": "ns/iter",
            "extra": "iterations: 2188\ncpu: 402380.1645338178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2022894.4513274329,
            "unit": "ns/iter",
            "extra": "iterations: 452\ncpu: 2022671.681415936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 791185.0109519904,
            "unit": "ns/iter",
            "extra": "iterations: 1187\ncpu: 791071.6090985696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4292.38680663669,
            "unit": "ns/iter",
            "extra": "iterations: 186897\ncpu: 4292.0678234535635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19737.97267364839,
            "unit": "ns/iter",
            "extra": "iterations: 41535\ncpu: 19736.83158781761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15811.02971200556,
            "unit": "ns/iter",
            "extra": "iterations: 52605\ncpu: 15809.776637201758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15103.02850537791,
            "unit": "ns/iter",
            "extra": "iterations: 54937\ncpu: 15102.444618381107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15855.415421897262,
            "unit": "ns/iter",
            "extra": "iterations: 52821\ncpu: 15854.241684178643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48262.57851812913,
            "unit": "ns/iter",
            "extra": "iterations: 17289\ncpu: 48260.45462432769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 496112.57912645605,
            "unit": "ns/iter",
            "extra": "iterations: 1763\ncpu: 496085.3091321631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 400846.3319521282,
            "unit": "ns/iter",
            "extra": "iterations: 2172\ncpu: 400836.9705340696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 395627.866332093,
            "unit": "ns/iter",
            "extra": "iterations: 2192\ncpu: 395609.5346715304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 396062.50687444746,
            "unit": "ns/iter",
            "extra": "iterations: 2182\ncpu: 396034.14298808615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 243593.3824833637,
            "unit": "ns/iter",
            "extra": "iterations: 3608\ncpu: 243582.48337028775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 392180.03273541323,
            "unit": "ns/iter",
            "extra": "iterations: 2230\ncpu: 392157.9372197301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 312.8515426969202,
            "unit": "ns/iter",
            "extra": "iterations: 2245548\ncpu: 312.8516958889314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1689.3503520362294,
            "unit": "ns/iter",
            "extra": "iterations: 414446\ncpu: 1689.3042760697522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1352.0717166556183,
            "unit": "ns/iter",
            "extra": "iterations: 516714\ncpu: 1352.0051711391584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1275.658350536275,
            "unit": "ns/iter",
            "extra": "iterations: 544965\ncpu: 1275.5465029864288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1077.2299176777362,
            "unit": "ns/iter",
            "extra": "iterations: 649763\ncpu: 1077.1515152447864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8272.257650379195,
            "unit": "ns/iter",
            "extra": "iterations: 84669\ncpu: 8271.745266862736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19732.791033392812,
            "unit": "ns/iter",
            "extra": "iterations: 35398\ncpu: 19732.14023391126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4695.0050456045665,
            "unit": "ns/iter",
            "extra": "iterations: 149437\ncpu: 4694.678024853367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4580.5410537079515,
            "unit": "ns/iter",
            "extra": "iterations: 152471\ncpu: 4580.306418925592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4663.9904755559055,
            "unit": "ns/iter",
            "extra": "iterations: 150035\ncpu: 4663.67980804479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9863.5182653878,
            "unit": "ns/iter",
            "extra": "iterations: 70817\ncpu: 9863.017354589989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8966.619883858497,
            "unit": "ns/iter",
            "extra": "iterations: 78697\ncpu: 8965.872904939259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2465.0553440362223,
            "unit": "ns/iter",
            "extra": "iterations: 283662\ncpu: 2464.9494821301464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 12159.953777404,
            "unit": "ns/iter",
            "extra": "iterations: 57288\ncpu: 12159.698366150029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9564.083061644265,
            "unit": "ns/iter",
            "extra": "iterations: 73307\ncpu: 9563.7251558514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9405.990579661753,
            "unit": "ns/iter",
            "extra": "iterations: 74095\ncpu: 9405.472703961175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10018.119415353412,
            "unit": "ns/iter",
            "extra": "iterations: 69991\ncpu: 10017.978025746255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24614.550123459318,
            "unit": "ns/iter",
            "extra": "iterations: 28350\ncpu: 24613.615520282074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98648.51865460105,
            "unit": "ns/iter",
            "extra": "iterations: 7076\ncpu: 98645.94403617944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 83849.06464333297,
            "unit": "ns/iter",
            "extra": "iterations: 8369\ncpu: 83846.20623730433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 82343.3238408935,
            "unit": "ns/iter",
            "extra": "iterations: 8498\ncpu: 82340.4095081182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 82819.87040985223,
            "unit": "ns/iter",
            "extra": "iterations: 8442\ncpu: 82818.941009241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 52120.69513376566,
            "unit": "ns/iter",
            "extra": "iterations: 13419\ncpu: 52118.190625232266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83533.75553967324,
            "unit": "ns/iter",
            "extra": "iterations: 8394\ncpu: 83531.14129139767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2380.209213721123,
            "unit": "ns/iter",
            "extra": "iterations: 295277\ncpu: 2380.166758670683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11546.593795322666,
            "unit": "ns/iter",
            "extra": "iterations: 59987\ncpu: 11546.066647773885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9299.06737216737,
            "unit": "ns/iter",
            "extra": "iterations: 75313\ncpu: 9298.568640208188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9324.315761391184,
            "unit": "ns/iter",
            "extra": "iterations: 74968\ncpu: 9323.770141927229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9729.89644138996,
            "unit": "ns/iter",
            "extra": "iterations: 71882\ncpu: 9729.420439052752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23634.689536064216,
            "unit": "ns/iter",
            "extra": "iterations: 29530\ncpu: 23633.233999323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97332.85905291904,
            "unit": "ns/iter",
            "extra": "iterations: 7180\ncpu: 97329.9442896921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 85559.84811165833,
            "unit": "ns/iter",
            "extra": "iterations: 8526\ncpu: 85557.82312925195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 80557.96284330609,
            "unit": "ns/iter",
            "extra": "iterations: 8666\ncpu: 80554.32725594184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81742.19925294614,
            "unit": "ns/iter",
            "extra": "iterations: 8567\ncpu: 81740.28247928164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 52370.9186504975,
            "unit": "ns/iter",
            "extra": "iterations: 13190\ncpu: 52369.30250189538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 82510.50182032153,
            "unit": "ns/iter",
            "extra": "iterations: 8515\ncpu: 82508.34997064043 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705957487333,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 735.284063802046,
            "unit": "ns/iter",
            "extra": "iterations: 949938\ncpu: 735.2074556444737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11587.64490297008,
            "unit": "ns/iter",
            "extra": "iterations: 71679\ncpu: 11587.012932658103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25786.257888779688,
            "unit": "ns/iter",
            "extra": "iterations: 32673\ncpu: 25786.441404217552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40466.439569453985,
            "unit": "ns/iter",
            "extra": "iterations: 20718\ncpu: 40465.48412008881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 51539.25562169468,
            "unit": "ns/iter",
            "extra": "iterations: 15120\ncpu: 51537.328042328016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 53055.63699999994,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53056.139999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 64288.02875045993,
            "unit": "ns/iter",
            "extra": "iterations: 13565\ncpu: 64288.51455952817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 74303.34084122756,
            "unit": "ns/iter",
            "extra": "iterations: 11721\ncpu: 74300.92995478204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 85157.28153635861,
            "unit": "ns/iter",
            "extra": "iterations: 10258\ncpu: 85154.16260479616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 603.5025810995862,
            "unit": "ns/iter",
            "extra": "iterations: 1157065\ncpu: 603.4890001858164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 515.2541972295733,
            "unit": "ns/iter",
            "extra": "iterations: 1360719\ncpu: 515.2469393019434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 512.8685079011309,
            "unit": "ns/iter",
            "extra": "iterations: 1367778\ncpu: 511.75263822052966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 507.4799331429905,
            "unit": "ns/iter",
            "extra": "iterations: 1382055\ncpu: 507.4667795420588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1046.9815857344686,
            "unit": "ns/iter",
            "extra": "iterations: 666114\ncpu: 1046.9338581684208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4275.550500663986,
            "unit": "ns/iter",
            "extra": "iterations: 187651\ncpu: 4275.536501270982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19824.858907797323,
            "unit": "ns/iter",
            "extra": "iterations: 41604\ncpu: 19825.00961446014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15717.749229678906,
            "unit": "ns/iter",
            "extra": "iterations: 52251\ncpu: 15717.142255650611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15011.851595160313,
            "unit": "ns/iter",
            "extra": "iterations: 54540\ncpu: 15011.494316098302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15467.09445500248,
            "unit": "ns/iter",
            "extra": "iterations: 53147\ncpu: 15466.803394359005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 48160.581074049835,
            "unit": "ns/iter",
            "extra": "iterations: 17299\ncpu: 48160.9919648535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 488121.14438203606,
            "unit": "ns/iter",
            "extra": "iterations: 1780\ncpu: 488108.2022471916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 398277.45635105204,
            "unit": "ns/iter",
            "extra": "iterations: 2165\ncpu: 398271.0854503457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 397730.4058500881,
            "unit": "ns/iter",
            "extra": "iterations: 2188\ncpu: 397729.2504570386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 402380.515653787,
            "unit": "ns/iter",
            "extra": "iterations: 2172\ncpu: 402367.4493554331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 245529.96005628447,
            "unit": "ns/iter",
            "extra": "iterations: 3555\ncpu: 245523.26300984452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 396125.8054153226,
            "unit": "ns/iter",
            "extra": "iterations: 2179\ncpu: 396117.668655346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2006945.1478261529,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 2006788.9130434764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 808348.3361847034,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 808321.1291702318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2538178.8535913313,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2537870.441988953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4327.623854974412,
            "unit": "ns/iter",
            "extra": "iterations: 182092\ncpu: 4327.626694198522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19630.771672886716,
            "unit": "ns/iter",
            "extra": "iterations: 42334\ncpu: 19630.28771200453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15711.709829012992,
            "unit": "ns/iter",
            "extra": "iterations: 52986\ncpu: 15711.223719473157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15100.369510346942,
            "unit": "ns/iter",
            "extra": "iterations: 55468\ncpu: 15100.120790365576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15788.571758192315,
            "unit": "ns/iter",
            "extra": "iterations: 52008\ncpu: 15788.424857714239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 48125.53344510423,
            "unit": "ns/iter",
            "extra": "iterations: 17297\ncpu: 48124.75573798918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 505751.3606936871,
            "unit": "ns/iter",
            "extra": "iterations: 1730\ncpu: 505738.3815028885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 411370.84016972024,
            "unit": "ns/iter",
            "extra": "iterations: 2121\ncpu: 411367.0909948141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 405951.4469273818,
            "unit": "ns/iter",
            "extra": "iterations: 2148\ncpu: 405940.40968342376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 404683.82892905775,
            "unit": "ns/iter",
            "extra": "iterations: 2157\ncpu: 404675.7997218348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 242663.88993102484,
            "unit": "ns/iter",
            "extra": "iterations: 3625\ncpu: 242657.48965517324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 401559.63100141246,
            "unit": "ns/iter",
            "extra": "iterations: 2187\ncpu: 401546.7764060346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2002935.818380962,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2002533.041575478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 779746.3322203527,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 779696.1602671097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4284.988109705424,
            "unit": "ns/iter",
            "extra": "iterations: 186791\ncpu: 4284.8740035654755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19679.85625539609,
            "unit": "ns/iter",
            "extra": "iterations: 41692\ncpu: 19678.190060443234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15781.745172132973,
            "unit": "ns/iter",
            "extra": "iterations: 52663\ncpu: 15780.880314452283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15096.488463559355,
            "unit": "ns/iter",
            "extra": "iterations: 55173\ncpu: 15095.789607235347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15719.465019957703,
            "unit": "ns/iter",
            "extra": "iterations: 53116\ncpu: 15719.16559981928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48300.57327363862,
            "unit": "ns/iter",
            "extra": "iterations: 17421\ncpu: 48296.90603294865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 489331.27927930164,
            "unit": "ns/iter",
            "extra": "iterations: 1776\ncpu: 489308.5022522544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 397753.5057313015,
            "unit": "ns/iter",
            "extra": "iterations: 2181\ncpu: 397744.06235671625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 395509.6013729746,
            "unit": "ns/iter",
            "extra": "iterations: 2185\ncpu: 395495.9725400445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 396821.1348879427,
            "unit": "ns/iter",
            "extra": "iterations: 2187\ncpu: 396802.7892089622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 241078.03666942124,
            "unit": "ns/iter",
            "extra": "iterations: 3627\ncpu: 241059.93934381005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 392284.79315009183,
            "unit": "ns/iter",
            "extra": "iterations: 2219\ncpu: 392272.23974763474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 318.8524739351389,
            "unit": "ns/iter",
            "extra": "iterations: 2199896\ncpu: 318.84389080210883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1710.269800626559,
            "unit": "ns/iter",
            "extra": "iterations: 407727\ncpu: 1710.2029053754113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1302.810695564808,
            "unit": "ns/iter",
            "extra": "iterations: 537980\ncpu: 1302.766645600205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1222.618359454588,
            "unit": "ns/iter",
            "extra": "iterations: 569908\ncpu: 1222.587856285575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1069.1281587344065,
            "unit": "ns/iter",
            "extra": "iterations: 654376\ncpu: 1069.1041541865852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8145.971295685983,
            "unit": "ns/iter",
            "extra": "iterations: 86433\ncpu: 8145.546261265906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20198.75373563231,
            "unit": "ns/iter",
            "extra": "iterations: 34800\ncpu: 20198.227011494284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4756.693954762725,
            "unit": "ns/iter",
            "extra": "iterations: 146694\ncpu: 4756.675119636754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4708.842235473983,
            "unit": "ns/iter",
            "extra": "iterations: 148747\ncpu: 4708.5702568791185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4754.5097244568515,
            "unit": "ns/iter",
            "extra": "iterations: 147309\ncpu: 4754.43998669463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10013.547092359682,
            "unit": "ns/iter",
            "extra": "iterations: 70160\ncpu: 10013.050171037601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9070.970166662732,
            "unit": "ns/iter",
            "extra": "iterations: 77162\ncpu: 9070.927399497139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2491.8281073258936,
            "unit": "ns/iter",
            "extra": "iterations: 282019\ncpu: 2486.335317833191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 12325.622284045028,
            "unit": "ns/iter",
            "extra": "iterations: 56794\ncpu: 12325.30372926728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9729.439269203287,
            "unit": "ns/iter",
            "extra": "iterations: 72031\ncpu: 9729.299884771888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9610.857191902742,
            "unit": "ns/iter",
            "extra": "iterations: 72818\ncpu: 9610.614133867877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10163.580010454543,
            "unit": "ns/iter",
            "extra": "iterations: 68866\ncpu: 10163.517555833081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24554.368087193372,
            "unit": "ns/iter",
            "extra": "iterations: 28534\ncpu: 24553.063012546292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 99385.9561961217,
            "unit": "ns/iter",
            "extra": "iterations: 7077\ncpu: 99380.99477179651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84551.48851621953,
            "unit": "ns/iter",
            "extra": "iterations: 8229\ncpu: 84549.38631668566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 83399.26655550266,
            "unit": "ns/iter",
            "extra": "iterations: 8396\ncpu: 83397.0819437823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83205.96292322302,
            "unit": "ns/iter",
            "extra": "iterations: 8388\ncpu: 83206.6523605151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 52694.70648823842,
            "unit": "ns/iter",
            "extra": "iterations: 13301\ncpu: 52692.41410420364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 84070.68202045174,
            "unit": "ns/iter",
            "extra": "iterations: 8315\ncpu: 84067.42032471404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2360.5787195829894,
            "unit": "ns/iter",
            "extra": "iterations: 296216\ncpu: 2360.5129365057774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11635.540766828573,
            "unit": "ns/iter",
            "extra": "iterations: 60196\ncpu: 11635.214964449397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9312.976015128248,
            "unit": "ns/iter",
            "extra": "iterations: 75089\ncpu: 9313.041856996424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9261.409880104471,
            "unit": "ns/iter",
            "extra": "iterations: 75566\ncpu: 9261.0843501044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9653.455281976423,
            "unit": "ns/iter",
            "extra": "iterations: 72577\ncpu: 9653.162847734255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23444.02290459909,
            "unit": "ns/iter",
            "extra": "iterations: 29863\ncpu: 23442.447175434492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97194.26714447145,
            "unit": "ns/iter",
            "extra": "iterations: 7116\ncpu: 97191.750983698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 81555.26034884555,
            "unit": "ns/iter",
            "extra": "iterations: 8600\ncpu: 81553.63953488396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 80497.82986311486,
            "unit": "ns/iter",
            "extra": "iterations: 8693\ncpu: 80492.62625100643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 81576.24640537129,
            "unit": "ns/iter",
            "extra": "iterations: 8624\ncpu: 81572.71567717992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 53029.61548964118,
            "unit": "ns/iter",
            "extra": "iterations: 13183\ncpu: 53026.57968595864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 81840.46838407013,
            "unit": "ns/iter",
            "extra": "iterations: 8540\ncpu: 81837.11943793841 ns\nthreads: 1"
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
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T17:20:02Z",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705959070186,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 723.1338142116864,
            "unit": "ns/iter",
            "extra": "iterations: 954226\ncpu: 723.0515622085334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 11181.46427943529,
            "unit": "ns/iter",
            "extra": "iterations: 73949\ncpu: 11180.926043624657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 25333.25269507677,
            "unit": "ns/iter",
            "extra": "iterations: 33487\ncpu: 25331.680950816728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 39376.446155297854,
            "unit": "ns/iter",
            "extra": "iterations: 21172\ncpu: 39374.896089174385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 49983.878401887894,
            "unit": "ns/iter",
            "extra": "iterations: 16094\ncpu: 49980.943208649136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 51301.70919999273,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51296.81000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 62587.35940000407,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 62585.870000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 71873.27922936235,
            "unit": "ns/iter",
            "extra": "iterations: 12094\ncpu: 71872.33338845709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 82907.38900534483,
            "unit": "ns/iter",
            "extra": "iterations: 10496\ncpu: 82903.8967225609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 608.4544156909539,
            "unit": "ns/iter",
            "extra": "iterations: 1167858\ncpu: 608.3993944469267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 507.8174927007961,
            "unit": "ns/iter",
            "extra": "iterations: 1376860\ncpu: 507.79723428671036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 499.5488168777773,
            "unit": "ns/iter",
            "extra": "iterations: 1394784\ncpu: 499.5348383692387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 500.1064289999704,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 500.09750000000076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1013.6019558698514,
            "unit": "ns/iter",
            "extra": "iterations: 690230\ncpu: 1013.567941121076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 3947.5239212099314,
            "unit": "ns/iter",
            "extra": "iterations: 201244\ncpu: 3947.415078213509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 19383.070925799788,
            "unit": "ns/iter",
            "extra": "iterations: 44610\ncpu: 19381.891952477024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15789.201272400243,
            "unit": "ns/iter",
            "extra": "iterations: 52342\ncpu: 15788.294295212254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15096.07729486269,
            "unit": "ns/iter",
            "extra": "iterations: 54622\ncpu: 15095.439566475041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15682.464670726642,
            "unit": "ns/iter",
            "extra": "iterations: 52874\ncpu: 15681.684759995445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 48443.138356087926,
            "unit": "ns/iter",
            "extra": "iterations: 17361\ncpu: 48441.7084269341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 491987.22533634794,
            "unit": "ns/iter",
            "extra": "iterations: 1784\ncpu: 491954.3161434963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 400837.8631090102,
            "unit": "ns/iter",
            "extra": "iterations: 2155\ncpu: 400810.3016241305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 398952.6379629427,
            "unit": "ns/iter",
            "extra": "iterations: 2160\ncpu: 398930.74074074096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 401741.3177570165,
            "unit": "ns/iter",
            "extra": "iterations: 2140\ncpu: 401719.5327102797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 246462.38820846748,
            "unit": "ns/iter",
            "extra": "iterations: 3511\ncpu: 246459.61264597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 396073.6086956563,
            "unit": "ns/iter",
            "extra": "iterations: 2185\ncpu: 396058.9473684202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2019733.9340659082,
            "unit": "ns/iter",
            "extra": "iterations: 455\ncpu: 2019475.6043956063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 806204.4111110263,
            "unit": "ns/iter",
            "extra": "iterations: 1170\ncpu: 806170.5982906006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2606548.2861112184,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2606331.6666666637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4215.895380629332,
            "unit": "ns/iter",
            "extra": "iterations: 188359\ncpu: 4215.762984513617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19649.316004948767,
            "unit": "ns/iter",
            "extra": "iterations: 42012\ncpu: 19648.712272684017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15965.954653035418,
            "unit": "ns/iter",
            "extra": "iterations: 50279\ncpu: 15965.910220967067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15038.678171470046,
            "unit": "ns/iter",
            "extra": "iterations: 54470\ncpu: 15038.465210207476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15614.402208738758,
            "unit": "ns/iter",
            "extra": "iterations: 53062\ncpu: 15614.153254683159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 49452.84859900901,
            "unit": "ns/iter",
            "extra": "iterations: 16988\ncpu: 49451.430421473786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 501388.137152832,
            "unit": "ns/iter",
            "extra": "iterations: 1728\ncpu: 501379.2824074054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 418734.218555711,
            "unit": "ns/iter",
            "extra": "iterations: 2091\ncpu: 418719.5121951228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 408220.774918079,
            "unit": "ns/iter",
            "extra": "iterations: 2137\ncpu: 408212.44735610543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 406706.84450651053,
            "unit": "ns/iter",
            "extra": "iterations: 2148\ncpu: 406705.2141527004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 241845.4239822717,
            "unit": "ns/iter",
            "extra": "iterations: 3611\ncpu: 241842.28745500004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 402502.10431982146,
            "unit": "ns/iter",
            "extra": "iterations: 2176\ncpu: 402493.3363970578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2020463.7533331355,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 2020314.4444444375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 795127.7408974966,
            "unit": "ns/iter",
            "extra": "iterations: 1181\ncpu: 795113.378492806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4384.46434914291,
            "unit": "ns/iter",
            "extra": "iterations: 183558\ncpu: 4384.3237559790505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19711.907521635825,
            "unit": "ns/iter",
            "extra": "iterations: 41826\ncpu: 19711.399607899424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15807.162245446038,
            "unit": "ns/iter",
            "extra": "iterations: 52248\ncpu: 15806.744755780068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15069.039266584079,
            "unit": "ns/iter",
            "extra": "iterations: 54703\ncpu: 15068.754912893151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15851.047418293183,
            "unit": "ns/iter",
            "extra": "iterations: 51710\ncpu: 15850.703925739674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 48697.27170950069,
            "unit": "ns/iter",
            "extra": "iterations: 17239\ncpu: 48696.2874876731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 494348.41624653403,
            "unit": "ns/iter",
            "extra": "iterations: 1785\ncpu: 494342.352941178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 403078.688022251,
            "unit": "ns/iter",
            "extra": "iterations: 2154\ncpu: 403072.93407613627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 396534.1089918586,
            "unit": "ns/iter",
            "extra": "iterations: 2202\ncpu: 396524.11444141675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 405071.11488974345,
            "unit": "ns/iter",
            "extra": "iterations: 2176\ncpu: 405069.48529411835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 246629.82894372533,
            "unit": "ns/iter",
            "extra": "iterations: 3607\ncpu: 246623.12170778884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 403276.334862431,
            "unit": "ns/iter",
            "extra": "iterations: 2180\ncpu: 403259.77064220025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 315.7435911267165,
            "unit": "ns/iter",
            "extra": "iterations: 2224572\ncpu: 315.73920736213296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1661.6928981722008,
            "unit": "ns/iter",
            "extra": "iterations: 421300\ncpu: 1661.6864467125574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1280.7221863882808,
            "unit": "ns/iter",
            "extra": "iterations: 547277\ncpu: 1280.705200474354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1260.5116651124117,
            "unit": "ns/iter",
            "extra": "iterations: 554431\ncpu: 1260.4610853289284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1075.1262212413628,
            "unit": "ns/iter",
            "extra": "iterations: 652410\ncpu: 1075.094495792522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8372.908570814196,
            "unit": "ns/iter",
            "extra": "iterations: 83551\ncpu: 8372.79266555755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 19689.90943088669,
            "unit": "ns/iter",
            "extra": "iterations: 35564\ncpu: 19689.317849510575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 4703.7588595827965,
            "unit": "ns/iter",
            "extra": "iterations: 148963\ncpu: 4703.650570947203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 4639.509421461539,
            "unit": "ns/iter",
            "extra": "iterations: 150932\ncpu: 4639.354146238029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 4696.279421741975,
            "unit": "ns/iter",
            "extra": "iterations: 148861\ncpu: 4696.260269647511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 9901.2482613366,
            "unit": "ns/iter",
            "extra": "iterations: 70744\ncpu: 9900.884880696662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 8883.960477766384,
            "unit": "ns/iter",
            "extra": "iterations: 78867\ncpu: 8883.55459190789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 2439.6129814727074,
            "unit": "ns/iter",
            "extra": "iterations: 286932\ncpu: 2439.525741290625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 12133.98195139668,
            "unit": "ns/iter",
            "extra": "iterations: 57733\ncpu: 12133.836800443203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 9558.441117110231,
            "unit": "ns/iter",
            "extra": "iterations: 73332\ncpu: 9558.161512027396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 9438.088124932954,
            "unit": "ns/iter",
            "extra": "iterations: 74088\ncpu: 9437.830687830688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 10326.458524685408,
            "unit": "ns/iter",
            "extra": "iterations: 69680\ncpu: 10326.20551090709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 24657.4973539383,
            "unit": "ns/iter",
            "extra": "iterations: 28344\ncpu: 24655.913068021055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 98048.34918421792,
            "unit": "ns/iter",
            "extra": "iterations: 7171\ncpu: 98048.06860967819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 84433.45331887563,
            "unit": "ns/iter",
            "extra": "iterations: 8301\ncpu: 84429.45428261618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 82796.23515411199,
            "unit": "ns/iter",
            "extra": "iterations: 8403\ncpu: 82793.30001189985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 83251.24141208865,
            "unit": "ns/iter",
            "extra": "iterations: 8413\ncpu: 83249.12635207416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 52474.086249168664,
            "unit": "ns/iter",
            "extra": "iterations: 13461\ncpu: 52471.71086843501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 83536.22255264048,
            "unit": "ns/iter",
            "extra": "iterations: 8407\ncpu: 83535.06601641497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 2386.7725561923303,
            "unit": "ns/iter",
            "extra": "iterations: 293589\ncpu: 2386.6643505036204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 11758.341096717544,
            "unit": "ns/iter",
            "extra": "iterations: 59596\ncpu: 11758.054231827633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 9314.63921886843,
            "unit": "ns/iter",
            "extra": "iterations: 75173\ncpu: 9314.297686669372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 9228.23290488399,
            "unit": "ns/iter",
            "extra": "iterations: 75855\ncpu: 9228.0403401225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 9671.602274141123,
            "unit": "ns/iter",
            "extra": "iterations: 72291\ncpu: 9671.573224882819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 23814.21045289005,
            "unit": "ns/iter",
            "extra": "iterations: 29389\ncpu: 23812.841539351462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 97296.81556637489,
            "unit": "ns/iter",
            "extra": "iterations: 7195\ncpu: 97294.3710910361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 82604.95396601081,
            "unit": "ns/iter",
            "extra": "iterations: 8472\ncpu: 82601.87677053956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 80748.14099608593,
            "unit": "ns/iter",
            "extra": "iterations: 8674\ncpu: 80745.90730919976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 80358.12813369377,
            "unit": "ns/iter",
            "extra": "iterations: 8616\ncpu: 80355.88440111386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 52910.24030709637,
            "unit": "ns/iter",
            "extra": "iterations: 13025\ncpu: 52906.92514395468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 83481.53057575489,
            "unit": "ns/iter",
            "extra": "iterations: 8389\ncpu: 83479.02014542841 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}