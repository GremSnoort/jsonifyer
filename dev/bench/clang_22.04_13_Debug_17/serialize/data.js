window.BENCHMARK_DATA = {
  "lastUpdate": 1702492206007,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-13 22.04 Debug c++-17": [
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
        "date": 1702489595518,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7991.864162478362,
            "unit": "ns/iter",
            "extra": "iterations: 87347\ncpu: 7991.411267702382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 79090.43400628064,
            "unit": "ns/iter",
            "extra": "iterations: 11145\ncpu: 79089.932705249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 146761.8756901314,
            "unit": "ns/iter",
            "extra": "iterations: 5977\ncpu: 146759.37761418775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 216974.6711409507,
            "unit": "ns/iter",
            "extra": "iterations: 4023\ncpu: 216975.316927666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 286109.59396752616,
            "unit": "ns/iter",
            "extra": "iterations: 3017\ncpu: 286107.6897580377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 353130.10597382917,
            "unit": "ns/iter",
            "extra": "iterations: 2444\ncpu: 353131.0556464814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 421392.4721279993,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 421386.33058652456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 490457.8407427956,
            "unit": "ns/iter",
            "extra": "iterations: 1777\ncpu: 490443.2189082728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 559175.5529185508,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 559152.9185375251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6204.960658778087,
            "unit": "ns/iter",
            "extra": "iterations: 113240\ncpu: 6204.560226068529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5179.114437687211,
            "unit": "ns/iter",
            "extra": "iterations: 135174\ncpu: 5178.949354165738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5306.3779824444255,
            "unit": "ns/iter",
            "extra": "iterations: 134202\ncpu: 5306.0453644506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5210.605271412636,
            "unit": "ns/iter",
            "extra": "iterations: 133892\ncpu: 5210.273952140529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9125.685671828565,
            "unit": "ns/iter",
            "extra": "iterations: 76716\ncpu: 9124.834454351125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32274.900303582748,
            "unit": "ns/iter",
            "extra": "iterations: 24705\ncpu: 32273.199757134167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 132521.9089210695,
            "unit": "ns/iter",
            "extra": "iterations: 6423\ncpu: 132514.16783434522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 107527.06430463328,
            "unit": "ns/iter",
            "extra": "iterations: 7931\ncpu: 107521.90139957152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 102531.31017399686,
            "unit": "ns/iter",
            "extra": "iterations: 8276\ncpu: 102523.85210246492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 104627.06259204981,
            "unit": "ns/iter",
            "extra": "iterations: 8148\ncpu: 104624.05498281807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 275970.2484906345,
            "unit": "ns/iter",
            "extra": "iterations: 3147\ncpu: 275952.3037813795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2334778.619647307,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2334653.148614605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1933144.4577320917,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1933047.0103092815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1922860.3409091237,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1922736.3636363635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1902054.1311474927,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1901950.4098360697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1108363.3909416108,
            "unit": "ns/iter",
            "extra": "iterations: 839\ncpu: 1108257.926102505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1853830.8273809166,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1853758.9285714286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7540971.209999724,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7540511.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4292119.577981677,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4291973.853211021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9485924.113043793,
            "unit": "ns/iter",
            "extra": "iterations: 115\ncpu: 9484759.130434785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 31914.56640305165,
            "unit": "ns/iter",
            "extra": "iterations: 25669\ncpu: 31913.38969184614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 137391.29627847642,
            "unit": "ns/iter",
            "extra": "iterations: 6234\ncpu: 137378.95412255335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 109940.59404409403,
            "unit": "ns/iter",
            "extra": "iterations: 7757\ncpu: 109932.22895449286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 105521.72583043875,
            "unit": "ns/iter",
            "extra": "iterations: 8068\ncpu: 105512.2954883492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 107824.87029765948,
            "unit": "ns/iter",
            "extra": "iterations: 7895\ncpu: 107821.49461684538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 273845.84717399813,
            "unit": "ns/iter",
            "extra": "iterations: 3167\ncpu: 273823.55541522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2368924.203045506,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2368865.4822335145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1955061.298319203,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1954896.2184873894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1931999.0186336732,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1931937.8881987608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1910649.8497943035,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1910539.0946502078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1101163.9141835272,
            "unit": "ns/iter",
            "extra": "iterations: 839\ncpu: 1101099.7616209802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1873202.4607645464,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1873059.7585513045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7596741.610000209,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7595817.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4293424.479262666,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4293168.66359445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 31270.319401054854,
            "unit": "ns/iter",
            "extra": "iterations: 26246\ncpu: 31268.898117808472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 135188.59075126093,
            "unit": "ns/iter",
            "extra": "iterations: 6336\ncpu: 135187.4368686867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 108521.78962061445,
            "unit": "ns/iter",
            "extra": "iterations: 7881\ncpu: 108519.12193884022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 104490.87893640858,
            "unit": "ns/iter",
            "extra": "iterations: 8161\ncpu: 104484.04607278471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 106001.96834496406,
            "unit": "ns/iter",
            "extra": "iterations: 8024\ncpu: 105995.63808574219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 271236.2333125546,
            "unit": "ns/iter",
            "extra": "iterations: 3206\ncpu: 271225.79538365424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2350564.7449494493,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2350436.6161616184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1946093.0665279708,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1946062.1621621612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1935018.8381744209,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1934937.96680498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1910078.5857144077,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1910035.7142857187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1105549.4851367217,
            "unit": "ns/iter",
            "extra": "iterations: 841\ncpu: 1105486.8014268747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1860973.3380001215,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1860878.5999999924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3105.0073928045476,
            "unit": "ns/iter",
            "extra": "iterations: 225219\ncpu: 3104.893903267488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16231.307050955944,
            "unit": "ns/iter",
            "extra": "iterations: 43058\ncpu: 16230.860699521623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12482.346263650103,
            "unit": "ns/iter",
            "extra": "iterations: 56044\ncpu: 12481.694739847224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12909.59499316469,
            "unit": "ns/iter",
            "extra": "iterations: 55604\ncpu: 12909.15221926485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10537.858083929877,
            "unit": "ns/iter",
            "extra": "iterations: 66793\ncpu: 10531.780276376288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 63721.98442622547,
            "unit": "ns/iter",
            "extra": "iterations: 10980\ncpu: 63718.56102003613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 143362.20928805464,
            "unit": "ns/iter",
            "extra": "iterations: 4888\ncpu: 143359.12438625126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38368.1289809806,
            "unit": "ns/iter",
            "extra": "iterations: 18243\ncpu: 38367.242229896474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38860.79365520287,
            "unit": "ns/iter",
            "extra": "iterations: 17999\ncpu: 38859.369964998295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38498.64341128102,
            "unit": "ns/iter",
            "extra": "iterations: 18175\ncpu: 38497.716643741565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 77693.8527443177,
            "unit": "ns/iter",
            "extra": "iterations: 8964\ncpu: 77690.85229808264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 69486.15542754799,
            "unit": "ns/iter",
            "extra": "iterations: 10069\ncpu: 69479.12404409528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19620.780106471746,
            "unit": "ns/iter",
            "extra": "iterations: 35690\ncpu: 19620.123283833153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 95731.10057392601,
            "unit": "ns/iter",
            "extra": "iterations: 7318\ncpu: 95724.66520907282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 76553.29056562904,
            "unit": "ns/iter",
            "extra": "iterations: 9158\ncpu: 76550.3275824407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79424.81709945078,
            "unit": "ns/iter",
            "extra": "iterations: 8819\ncpu: 79421.9526023365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 77907.84779705916,
            "unit": "ns/iter",
            "extra": "iterations: 8988\ncpu: 77906.11927013683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 148133.7458200975,
            "unit": "ns/iter",
            "extra": "iterations: 4725\ncpu: 148127.34391534352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 658425.4981202974,
            "unit": "ns/iter",
            "extra": "iterations: 1064\ncpu: 658371.0526315784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 556656.6915739574,
            "unit": "ns/iter",
            "extra": "iterations: 1258\ncpu: 556636.4069952264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 561131.3853579324,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 561109.8954143217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 553507.8838862301,
            "unit": "ns/iter",
            "extra": "iterations: 1266\ncpu: 553475.0394944747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 360556.83522142976,
            "unit": "ns/iter",
            "extra": "iterations: 1942\ncpu: 360548.5581874362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 543905.2282608099,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 543876.2422360219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19543.186197664218,
            "unit": "ns/iter",
            "extra": "iterations: 35849\ncpu: 19542.37775112288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 95500.6241318212,
            "unit": "ns/iter",
            "extra": "iterations: 7343\ncpu: 95494.64796404769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 76763.17761210662,
            "unit": "ns/iter",
            "extra": "iterations: 9121\ncpu: 76759.80703870185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 77558.24260223273,
            "unit": "ns/iter",
            "extra": "iterations: 9023\ncpu: 77556.42247589465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 77906.85067822978,
            "unit": "ns/iter",
            "extra": "iterations: 8994\ncpu: 77903.29108294538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 147989.13199577617,
            "unit": "ns/iter",
            "extra": "iterations: 4735\ncpu: 147981.0137275613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 658447.0759850849,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 658390.7129455843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 558528.6903432013,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 558521.3088587401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 554750.888888867,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 554734.1269841166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 553368.4810126368,
            "unit": "ns/iter",
            "extra": "iterations: 1264\ncpu: 553319.2246835398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 360814.42319585354,
            "unit": "ns/iter",
            "extra": "iterations: 1940\ncpu: 360801.03092783777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 540734.6697531332,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 540687.7314814823 ns\nthreads: 1"
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
        "date": 1702489595518,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7991.864162478362,
            "unit": "ns/iter",
            "extra": "iterations: 87347\ncpu: 7991.411267702382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 79090.43400628064,
            "unit": "ns/iter",
            "extra": "iterations: 11145\ncpu: 79089.932705249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 146761.8756901314,
            "unit": "ns/iter",
            "extra": "iterations: 5977\ncpu: 146759.37761418775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 216974.6711409507,
            "unit": "ns/iter",
            "extra": "iterations: 4023\ncpu: 216975.316927666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 286109.59396752616,
            "unit": "ns/iter",
            "extra": "iterations: 3017\ncpu: 286107.6897580377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 353130.10597382917,
            "unit": "ns/iter",
            "extra": "iterations: 2444\ncpu: 353131.0556464814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 421392.4721279993,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 421386.33058652456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 490457.8407427956,
            "unit": "ns/iter",
            "extra": "iterations: 1777\ncpu: 490443.2189082728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 559175.5529185508,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 559152.9185375251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6204.960658778087,
            "unit": "ns/iter",
            "extra": "iterations: 113240\ncpu: 6204.560226068529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5179.114437687211,
            "unit": "ns/iter",
            "extra": "iterations: 135174\ncpu: 5178.949354165738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5306.3779824444255,
            "unit": "ns/iter",
            "extra": "iterations: 134202\ncpu: 5306.0453644506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5210.605271412636,
            "unit": "ns/iter",
            "extra": "iterations: 133892\ncpu: 5210.273952140529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9125.685671828565,
            "unit": "ns/iter",
            "extra": "iterations: 76716\ncpu: 9124.834454351125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32274.900303582748,
            "unit": "ns/iter",
            "extra": "iterations: 24705\ncpu: 32273.199757134167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 132521.9089210695,
            "unit": "ns/iter",
            "extra": "iterations: 6423\ncpu: 132514.16783434522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 107527.06430463328,
            "unit": "ns/iter",
            "extra": "iterations: 7931\ncpu: 107521.90139957152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 102531.31017399686,
            "unit": "ns/iter",
            "extra": "iterations: 8276\ncpu: 102523.85210246492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 104627.06259204981,
            "unit": "ns/iter",
            "extra": "iterations: 8148\ncpu: 104624.05498281807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 275970.2484906345,
            "unit": "ns/iter",
            "extra": "iterations: 3147\ncpu: 275952.3037813795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2334778.619647307,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2334653.148614605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1933144.4577320917,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1933047.0103092815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1922860.3409091237,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1922736.3636363635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1902054.1311474927,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1901950.4098360697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1108363.3909416108,
            "unit": "ns/iter",
            "extra": "iterations: 839\ncpu: 1108257.926102505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1853830.8273809166,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1853758.9285714286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7540971.209999724,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7540511.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4292119.577981677,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4291973.853211021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9485924.113043793,
            "unit": "ns/iter",
            "extra": "iterations: 115\ncpu: 9484759.130434785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 31914.56640305165,
            "unit": "ns/iter",
            "extra": "iterations: 25669\ncpu: 31913.38969184614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 137391.29627847642,
            "unit": "ns/iter",
            "extra": "iterations: 6234\ncpu: 137378.95412255335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 109940.59404409403,
            "unit": "ns/iter",
            "extra": "iterations: 7757\ncpu: 109932.22895449286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 105521.72583043875,
            "unit": "ns/iter",
            "extra": "iterations: 8068\ncpu: 105512.2954883492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 107824.87029765948,
            "unit": "ns/iter",
            "extra": "iterations: 7895\ncpu: 107821.49461684538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 273845.84717399813,
            "unit": "ns/iter",
            "extra": "iterations: 3167\ncpu: 273823.55541522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2368924.203045506,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2368865.4822335145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1955061.298319203,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1954896.2184873894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1931999.0186336732,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1931937.8881987608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1910649.8497943035,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1910539.0946502078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1101163.9141835272,
            "unit": "ns/iter",
            "extra": "iterations: 839\ncpu: 1101099.7616209802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1873202.4607645464,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1873059.7585513045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7596741.610000209,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7595817.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4293424.479262666,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4293168.66359445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 31270.319401054854,
            "unit": "ns/iter",
            "extra": "iterations: 26246\ncpu: 31268.898117808472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 135188.59075126093,
            "unit": "ns/iter",
            "extra": "iterations: 6336\ncpu: 135187.4368686867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 108521.78962061445,
            "unit": "ns/iter",
            "extra": "iterations: 7881\ncpu: 108519.12193884022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 104490.87893640858,
            "unit": "ns/iter",
            "extra": "iterations: 8161\ncpu: 104484.04607278471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 106001.96834496406,
            "unit": "ns/iter",
            "extra": "iterations: 8024\ncpu: 105995.63808574219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 271236.2333125546,
            "unit": "ns/iter",
            "extra": "iterations: 3206\ncpu: 271225.79538365424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2350564.7449494493,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2350436.6161616184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1946093.0665279708,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1946062.1621621612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1935018.8381744209,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1934937.96680498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1910078.5857144077,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1910035.7142857187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1105549.4851367217,
            "unit": "ns/iter",
            "extra": "iterations: 841\ncpu: 1105486.8014268747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1860973.3380001215,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1860878.5999999924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3105.0073928045476,
            "unit": "ns/iter",
            "extra": "iterations: 225219\ncpu: 3104.893903267488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16231.307050955944,
            "unit": "ns/iter",
            "extra": "iterations: 43058\ncpu: 16230.860699521623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12482.346263650103,
            "unit": "ns/iter",
            "extra": "iterations: 56044\ncpu: 12481.694739847224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12909.59499316469,
            "unit": "ns/iter",
            "extra": "iterations: 55604\ncpu: 12909.15221926485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10537.858083929877,
            "unit": "ns/iter",
            "extra": "iterations: 66793\ncpu: 10531.780276376288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 63721.98442622547,
            "unit": "ns/iter",
            "extra": "iterations: 10980\ncpu: 63718.56102003613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 143362.20928805464,
            "unit": "ns/iter",
            "extra": "iterations: 4888\ncpu: 143359.12438625126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38368.1289809806,
            "unit": "ns/iter",
            "extra": "iterations: 18243\ncpu: 38367.242229896474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38860.79365520287,
            "unit": "ns/iter",
            "extra": "iterations: 17999\ncpu: 38859.369964998295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38498.64341128102,
            "unit": "ns/iter",
            "extra": "iterations: 18175\ncpu: 38497.716643741565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 77693.8527443177,
            "unit": "ns/iter",
            "extra": "iterations: 8964\ncpu: 77690.85229808264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 69486.15542754799,
            "unit": "ns/iter",
            "extra": "iterations: 10069\ncpu: 69479.12404409528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19620.780106471746,
            "unit": "ns/iter",
            "extra": "iterations: 35690\ncpu: 19620.123283833153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 95731.10057392601,
            "unit": "ns/iter",
            "extra": "iterations: 7318\ncpu: 95724.66520907282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 76553.29056562904,
            "unit": "ns/iter",
            "extra": "iterations: 9158\ncpu: 76550.3275824407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 79424.81709945078,
            "unit": "ns/iter",
            "extra": "iterations: 8819\ncpu: 79421.9526023365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 77907.84779705916,
            "unit": "ns/iter",
            "extra": "iterations: 8988\ncpu: 77906.11927013683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 148133.7458200975,
            "unit": "ns/iter",
            "extra": "iterations: 4725\ncpu: 148127.34391534352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 658425.4981202974,
            "unit": "ns/iter",
            "extra": "iterations: 1064\ncpu: 658371.0526315784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 556656.6915739574,
            "unit": "ns/iter",
            "extra": "iterations: 1258\ncpu: 556636.4069952264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 561131.3853579324,
            "unit": "ns/iter",
            "extra": "iterations: 1243\ncpu: 561109.8954143217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 553507.8838862301,
            "unit": "ns/iter",
            "extra": "iterations: 1266\ncpu: 553475.0394944747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 360556.83522142976,
            "unit": "ns/iter",
            "extra": "iterations: 1942\ncpu: 360548.5581874362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 543905.2282608099,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 543876.2422360219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19543.186197664218,
            "unit": "ns/iter",
            "extra": "iterations: 35849\ncpu: 19542.37775112288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 95500.6241318212,
            "unit": "ns/iter",
            "extra": "iterations: 7343\ncpu: 95494.64796404769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 76763.17761210662,
            "unit": "ns/iter",
            "extra": "iterations: 9121\ncpu: 76759.80703870185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 77558.24260223273,
            "unit": "ns/iter",
            "extra": "iterations: 9023\ncpu: 77556.42247589465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 77906.85067822978,
            "unit": "ns/iter",
            "extra": "iterations: 8994\ncpu: 77903.29108294538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 147989.13199577617,
            "unit": "ns/iter",
            "extra": "iterations: 4735\ncpu: 147981.0137275613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 658447.0759850849,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 658390.7129455843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 558528.6903432013,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 558521.3088587401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 554750.888888867,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 554734.1269841166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 553368.4810126368,
            "unit": "ns/iter",
            "extra": "iterations: 1264\ncpu: 553319.2246835398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 360814.42319585354,
            "unit": "ns/iter",
            "extra": "iterations: 1940\ncpu: 360801.03092783777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 540734.6697531332,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 540687.7314814823 ns\nthreads: 1"
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
        "date": 1702492205465,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7646.099420891258,
            "unit": "ns/iter",
            "extra": "iterations: 91520\ncpu: 7646.008522727274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 73345.77125139486,
            "unit": "ns/iter",
            "extra": "iterations: 11611\ncpu: 73343.71716475757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 140908.81123596054,
            "unit": "ns/iter",
            "extra": "iterations: 6230\ncpu: 140905.29695024076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 205976.30960853412,
            "unit": "ns/iter",
            "extra": "iterations: 4215\ncpu: 205974.44839857653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 272601.8731108177,
            "unit": "ns/iter",
            "extra": "iterations: 3176\ncpu: 272597.6070528966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 338065.75507813186,
            "unit": "ns/iter",
            "extra": "iterations: 2560\ncpu: 338053.2421874999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 403341.1947148757,
            "unit": "ns/iter",
            "extra": "iterations: 2157\ncpu: 403331.9425127492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 469068.7961164908,
            "unit": "ns/iter",
            "extra": "iterations: 1854\ncpu: 469057.82092772383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 534724.2680981382,
            "unit": "ns/iter",
            "extra": "iterations: 1630\ncpu: 534721.5337423311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5987.317172701934,
            "unit": "ns/iter",
            "extra": "iterations: 116889\ncpu: 5987.201533078389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4985.494273121908,
            "unit": "ns/iter",
            "extra": "iterations: 140216\ncpu: 4985.519484224342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5007.275162884048,
            "unit": "ns/iter",
            "extra": "iterations: 139670\ncpu: 5007.157585737817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5080.672427155,
            "unit": "ns/iter",
            "extra": "iterations: 138067\ncpu: 5080.636937139216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8833.611180563134,
            "unit": "ns/iter",
            "extra": "iterations: 79191\ncpu: 8833.483602934686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34652.52252516717,
            "unit": "ns/iter",
            "extra": "iterations: 23840\ncpu: 34652.1602348993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 132067.91224552327,
            "unit": "ns/iter",
            "extra": "iterations: 6484\ncpu: 132063.57186921677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 107021.81950000522,
            "unit": "ns/iter",
            "extra": "iterations: 8000\ncpu: 107018.57500000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 104103.8589196484,
            "unit": "ns/iter",
            "extra": "iterations: 8201\ncpu: 104101.64614071482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 103133.99034981971,
            "unit": "ns/iter",
            "extra": "iterations: 8290\ncpu: 103131.5440289502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 314028.2865370547,
            "unit": "ns/iter",
            "extra": "iterations: 2778\ncpu: 314017.78257739375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2225849.9664269793,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 2225793.7649880126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1851293.1065089165,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1851240.0394477332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1821003.1862745204,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1820995.0980392187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1818762.6842104453,
            "unit": "ns/iter",
            "extra": "iterations: 475\ncpu: 1818704.6315789472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1043974.109111424,
            "unit": "ns/iter",
            "extra": "iterations: 889\ncpu: 1043967.7165354347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1764974.9714285333,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1764906.2857142894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7138988.990000143,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7138749.000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4069175.9385967082,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4068890.7894736812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8857110.821137633,
            "unit": "ns/iter",
            "extra": "iterations: 123\ncpu: 8856920.32520326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 32454.54075989616,
            "unit": "ns/iter",
            "extra": "iterations: 25135\ncpu: 32453.80942908296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 133864.03136270648,
            "unit": "ns/iter",
            "extra": "iterations: 6377\ncpu: 133861.0318331502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 109562.7932015107,
            "unit": "ns/iter",
            "extra": "iterations: 7737\ncpu: 109559.07974667217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 105164.9420806683,
            "unit": "ns/iter",
            "extra": "iterations: 8132\ncpu: 105163.45302508585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 106030.86293027806,
            "unit": "ns/iter",
            "extra": "iterations: 8047\ncpu: 106026.51919970138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 317550.57231105363,
            "unit": "ns/iter",
            "extra": "iterations: 2752\ncpu: 317552.21656976733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2277740.1167881745,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2277708.7591240956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1863892.0359279893,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1863888.0239520918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1826831.0157479865,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1826715.3543307167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1838984.7795273953,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1838925.9842519753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1042674.4080717372,
            "unit": "ns/iter",
            "extra": "iterations: 892\ncpu: 1042605.7174887895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1777568.9444445358,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1777497.8927202974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7202539.750001051,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7201927.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4006537.3347643437,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4006318.0257510557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32100.832960125135,
            "unit": "ns/iter",
            "extra": "iterations: 25455\ncpu: 32099.222156747193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 131847.7574073995,
            "unit": "ns/iter",
            "extra": "iterations: 6480\ncpu: 131844.12037037074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 106813.5222722687,
            "unit": "ns/iter",
            "extra": "iterations: 7992\ncpu: 106804.45445445365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 103753.20816574774,
            "unit": "ns/iter",
            "extra": "iterations: 8205\ncpu: 103748.226691042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 104032.75381422458,
            "unit": "ns/iter",
            "extra": "iterations: 8193\ncpu: 104025.33870377099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 312773.7545228845,
            "unit": "ns/iter",
            "extra": "iterations: 2819\ncpu: 312758.56686768366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2238212.4674698072,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2238107.710843383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1843529.745059301,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1843454.1501976282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1809509.107212432,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1809425.7309941628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1821572.2943469286,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1821519.2982456046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1046558.6467942331,
            "unit": "ns/iter",
            "extra": "iterations: 889\ncpu: 1046506.186726657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1766721.2813689436,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1766658.3650190206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3011.483850366494,
            "unit": "ns/iter",
            "extra": "iterations: 231739\ncpu: 3011.3636461709084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15798.189945990216,
            "unit": "ns/iter",
            "extra": "iterations: 45176\ncpu: 15797.837347263974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12129.387911458603,
            "unit": "ns/iter",
            "extra": "iterations: 57691\ncpu: 12128.597181536106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12558.29008944566,
            "unit": "ns/iter",
            "extra": "iterations: 55900\ncpu: 12557.824686941069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10374.346347327044,
            "unit": "ns/iter",
            "extra": "iterations: 67389\ncpu: 10374.086275208125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 64531.71908874523,
            "unit": "ns/iter",
            "extra": "iterations: 10886\ncpu: 64530.21311776622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 143299.2681381774,
            "unit": "ns/iter",
            "extra": "iterations: 4893\ncpu: 143295.34028203567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36963.82959404047,
            "unit": "ns/iter",
            "extra": "iterations: 18943\ncpu: 36964.03948688187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37023.79904686201,
            "unit": "ns/iter",
            "extra": "iterations: 18885\ncpu: 37021.826846703836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37059.94155638198,
            "unit": "ns/iter",
            "extra": "iterations: 18890\ncpu: 37057.70248808867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 74453.22301317837,
            "unit": "ns/iter",
            "extra": "iterations: 9412\ncpu: 74450.0531236719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66200.22328603358,
            "unit": "ns/iter",
            "extra": "iterations: 11698\ncpu: 66197.40126517262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18314.72190576105,
            "unit": "ns/iter",
            "extra": "iterations: 38095\ncpu: 18313.988712429567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 86390.35944246227,
            "unit": "ns/iter",
            "extra": "iterations: 8107\ncpu: 86385.88873812737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 70151.9846616567,
            "unit": "ns/iter",
            "extra": "iterations: 9975\ncpu: 70149.56390977366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 70681.83512833454,
            "unit": "ns/iter",
            "extra": "iterations: 9935\ncpu: 70677.85606441885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 70307.3716956473,
            "unit": "ns/iter",
            "extra": "iterations: 9949\ncpu: 70304.63363152047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 139293.83609171864,
            "unit": "ns/iter",
            "extra": "iterations: 5015\ncpu: 139291.80458623986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 611518.7504363239,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 611492.2338568934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 514973.89338237554,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 514952.64705881494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 516182.53988189826,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 516156.49926144036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 511788.5241581081,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 511791.94729135657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 338648.5478387227,
            "unit": "ns/iter",
            "extra": "iterations: 2059\ncpu: 338640.8450704207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 513162.95833338477,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 513150.6578947393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19860.17525597826,
            "unit": "ns/iter",
            "extra": "iterations: 35257\ncpu: 19859.51158635157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 88303.94015151937,
            "unit": "ns/iter",
            "extra": "iterations: 7920\ncpu: 88303.54797979757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 70752.4211857546,
            "unit": "ns/iter",
            "extra": "iterations: 9884\ncpu: 70752.16511533706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 70554.0450513977,
            "unit": "ns/iter",
            "extra": "iterations: 9922\ncpu: 70553.5476718393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 70316.20733057197,
            "unit": "ns/iter",
            "extra": "iterations: 9931\ncpu: 70314.47991138867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 138150.4070569776,
            "unit": "ns/iter",
            "extra": "iterations: 5073\ncpu: 138147.90065050422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 617637.968586335,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 617626.2652705021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 516637.91734319524,
            "unit": "ns/iter",
            "extra": "iterations: 1355\ncpu: 516635.1291512872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 515956.1550960477,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 515944.3870014785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 515091.3195876725,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 515087.33431516576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 339544.10949614085,
            "unit": "ns/iter",
            "extra": "iterations: 2064\ncpu: 339529.79651162744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 509969.87134510616,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 509957.7485380101 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}