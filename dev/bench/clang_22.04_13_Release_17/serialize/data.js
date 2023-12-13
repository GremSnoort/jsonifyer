window.BENCHMARK_DATA = {
  "lastUpdate": 1702493554371,
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
      }
    ]
  }
}