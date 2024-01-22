window.BENCHMARK_DATA = {
  "lastUpdate": 1705959842465,
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
        "date": 1702503254328,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8055.435287793733,
            "unit": "ns/iter",
            "extra": "iterations: 87441\ncpu: 8055.300145240791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 76456.01998565272,
            "unit": "ns/iter",
            "extra": "iterations: 11158\ncpu: 76451.79243592042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 147074.3109243698,
            "unit": "ns/iter",
            "extra": "iterations: 5950\ncpu: 147063.86554621844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 215173.73037882074,
            "unit": "ns/iter",
            "extra": "iterations: 4039\ncpu: 215163.72864570437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 285526.7762723019,
            "unit": "ns/iter",
            "extra": "iterations: 3026\ncpu: 285512.2604097818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 354444.5288065928,
            "unit": "ns/iter",
            "extra": "iterations: 2430\ncpu: 354423.9506172842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 424764.06298824766,
            "unit": "ns/iter",
            "extra": "iterations: 2048\ncpu: 424736.76757812494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 490773.3288212384,
            "unit": "ns/iter",
            "extra": "iterations: 1773\ncpu: 490733.50253807096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 561168.5713367489,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 561133.8046272502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6171.141017953572,
            "unit": "ns/iter",
            "extra": "iterations: 113404\ncpu: 6170.703855243197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5170.387177727655,
            "unit": "ns/iter",
            "extra": "iterations: 135483\ncpu: 5170.1091649874925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5220.280659029276,
            "unit": "ns/iter",
            "extra": "iterations: 134683\ncpu: 5219.885954426311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5202.930162728126,
            "unit": "ns/iter",
            "extra": "iterations: 134212\ncpu: 5202.636127917022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9093.191837475824,
            "unit": "ns/iter",
            "extra": "iterations: 77133\ncpu: 9092.748888283859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32377.07991649979,
            "unit": "ns/iter",
            "extra": "iterations: 25389\ncpu: 32375.335775335767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 132689.80628677976,
            "unit": "ns/iter",
            "extra": "iterations: 6458\ncpu: 132680.67513161988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 108184.16721477345,
            "unit": "ns/iter",
            "extra": "iterations: 7906\ncpu: 108177.38426511499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 101773.7229189046,
            "unit": "ns/iter",
            "extra": "iterations: 8373\ncpu: 101769.48525020915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 102911.11643918883,
            "unit": "ns/iter",
            "extra": "iterations: 8279\ncpu: 102910.254861698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 259935.2117787185,
            "unit": "ns/iter",
            "extra": "iterations: 3362\ncpu: 259929.59547888246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2317633.052239024,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2317597.2636815975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1914387.9672800961,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1914353.1697341546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1898805.8739838414,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1898776.6260162594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1892603.4606059175,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1892563.2323232272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1079685.7296037374,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 1079676.4568764593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1830300.5374014797,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1830284.842519683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7335234.15000036,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7334994.999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4110955.713656745,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4110618.0616740207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9209764.45378215,
            "unit": "ns/iter",
            "extra": "iterations: 119\ncpu: 9209128.57142857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 32877.31333200177,
            "unit": "ns/iter",
            "extra": "iterations: 25015\ncpu: 32876.81391165299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 135971.87486015688,
            "unit": "ns/iter",
            "extra": "iterations: 6257\ncpu: 135970.68882851183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 109549.43368393334,
            "unit": "ns/iter",
            "extra": "iterations: 7796\ncpu: 109545.84402257549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 104640.4843539133,
            "unit": "ns/iter",
            "extra": "iterations: 8149\ncpu: 104639.57540802537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 106899.16064056508,
            "unit": "ns/iter",
            "extra": "iterations: 7993\ncpu: 106898.23595646155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 258457.09671748936,
            "unit": "ns/iter",
            "extra": "iterations: 3412\ncpu: 258451.1137162968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2344157.297229216,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2344122.418136021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1920671.8049280494,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1920641.4784394235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1912348.0448064576,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1912318.73727088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1893411.378818554,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1893357.8411405259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1075110.4739883256,
            "unit": "ns/iter",
            "extra": "iterations: 865\ncpu: 1075101.2716762961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1839720.2913384596,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1839704.3307086725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7407157.3599997,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7406982.999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4136962.0133334845,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4136852.4444444515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 31513.833333334154,
            "unit": "ns/iter",
            "extra": "iterations: 26112\ncpu: 31513.560814951023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 132605.8083656214,
            "unit": "ns/iter",
            "extra": "iterations: 6455\ncpu: 132604.7095274981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 108766.62173525179,
            "unit": "ns/iter",
            "extra": "iterations: 7849\ncpu: 108763.47305389222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 102835.21910044404,
            "unit": "ns/iter",
            "extra": "iterations: 8293\ncpu: 102830.80911612257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 106004.35977125455,
            "unit": "ns/iter",
            "extra": "iterations: 8044\ncpu: 106002.51118846331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 260606.23859232554,
            "unit": "ns/iter",
            "extra": "iterations: 3353\ncpu: 260601.9385624805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2329772.9576061303,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2329736.907730671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1914181.465164036,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1914141.1885245843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1894329.9552846637,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1894313.61788618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1886553.6012144694,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1886537.4493927162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1069733.67090074,
            "unit": "ns/iter",
            "extra": "iterations: 866\ncpu: 1069710.508083138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1820863.9465648371,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1820836.4503816883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3018.8718839707785,
            "unit": "ns/iter",
            "extra": "iterations: 233390\ncpu: 3018.845708899265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15856.938379132578,
            "unit": "ns/iter",
            "extra": "iterations: 44433\ncpu: 15856.8001260324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12407.360438242986,
            "unit": "ns/iter",
            "extra": "iterations: 56681\ncpu: 12407.147015754808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12005.978229148444,
            "unit": "ns/iter",
            "extra": "iterations: 59621\ncpu: 12005.789906241163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10285.841539584142,
            "unit": "ns/iter",
            "extra": "iterations: 67083\ncpu: 10285.75496027315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 61259.193945126266,
            "unit": "ns/iter",
            "extra": "iterations: 11627\ncpu: 61257.76210544469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 150867.03823718513,
            "unit": "ns/iter",
            "extra": "iterations: 4629\ncpu: 150854.5690213869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37680.779774910065,
            "unit": "ns/iter",
            "extra": "iterations: 18304\ncpu: 37678.8734702796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38125.62391651912,
            "unit": "ns/iter",
            "extra": "iterations: 18113\ncpu: 38123.32026721162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37298.25718985263,
            "unit": "ns/iter",
            "extra": "iterations: 18846\ncpu: 37296.290990130445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 72328.85195587415,
            "unit": "ns/iter",
            "extra": "iterations: 9970\ncpu: 72327.23169508531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 68437.3662154078,
            "unit": "ns/iter",
            "extra": "iterations: 10046\ncpu: 68436.23332669656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18987.07280086416,
            "unit": "ns/iter",
            "extra": "iterations: 36071\ncpu: 18986.756674336655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 94554.54533098976,
            "unit": "ns/iter",
            "extra": "iterations: 7357\ncpu: 94552.45344569671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 74675.32984459735,
            "unit": "ns/iter",
            "extra": "iterations: 9459\ncpu: 74674.18331747521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 76230.3915532532,
            "unit": "ns/iter",
            "extra": "iterations: 9258\ncpu: 76229.72564268761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 76158.87683863514,
            "unit": "ns/iter",
            "extra": "iterations: 9110\ncpu: 76156.9154774966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 139185.9394534998,
            "unit": "ns/iter",
            "extra": "iterations: 5087\ncpu: 139183.70355808924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 645195.9532110243,
            "unit": "ns/iter",
            "extra": "iterations: 1090\ncpu: 645181.1926605535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 542165.3887218323,
            "unit": "ns/iter",
            "extra": "iterations: 1330\ncpu: 542160.8270676641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 536572.2531746001,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 536558.4920634923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 542814.5019731609,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 542801.3417521712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 348786.37369730533,
            "unit": "ns/iter",
            "extra": "iterations: 2015\ncpu: 348757.81637717236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 538000.2334360935,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 537981.3559322042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19365.726812677083,
            "unit": "ns/iter",
            "extra": "iterations: 36162\ncpu: 19364.48481831768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 95824.53676471254,
            "unit": "ns/iter",
            "extra": "iterations: 7344\ncpu: 95818.20533769105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77914.98822744856,
            "unit": "ns/iter",
            "extra": "iterations: 9004\ncpu: 77910.67303420787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 77933.41049588534,
            "unit": "ns/iter",
            "extra": "iterations: 8994\ncpu: 77926.35090060088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 77805.9845332223,
            "unit": "ns/iter",
            "extra": "iterations: 8987\ncpu: 77802.7372871929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 141160.56420078443,
            "unit": "ns/iter",
            "extra": "iterations: 4961\ncpu: 141155.99677484596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 652184.2490672247,
            "unit": "ns/iter",
            "extra": "iterations: 1072\ncpu: 652169.1231343336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 548162.0039031679,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 548140.281030448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 556301.4450593112,
            "unit": "ns/iter",
            "extra": "iterations: 1265\ncpu: 556296.8379446651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 552425.1513002812,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 552420.5673758852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 350569.6045113041,
            "unit": "ns/iter",
            "extra": "iterations: 1995\ncpu: 350566.7669172963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 538934.522674872,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 538924.9039200641 ns\nthreads: 1"
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
        "date": 1705574898826,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8125.8953181484485,
            "unit": "ns/iter",
            "extra": "iterations: 86013\ncpu: 8125.604269122111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 76633.2105357503,
            "unit": "ns/iter",
            "extra": "iterations: 11162\ncpu: 76631.30263393658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 147570.16573933512,
            "unit": "ns/iter",
            "extra": "iterations: 5931\ncpu: 147559.90558084642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 216085.28528527127,
            "unit": "ns/iter",
            "extra": "iterations: 3996\ncpu: 216074.77477477473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 283541.4572649705,
            "unit": "ns/iter",
            "extra": "iterations: 3042\ncpu: 283533.1360946747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 350497.2938331403,
            "unit": "ns/iter",
            "extra": "iterations: 2481\ncpu: 350489.9637243049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 419201.05534172215,
            "unit": "ns/iter",
            "extra": "iterations: 2078\ncpu: 419178.0076997114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 491993.5599324351,
            "unit": "ns/iter",
            "extra": "iterations: 1777\ncpu: 491966.06640405173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 553714.4217334971,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 553695.5368693395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6105.206272659548,
            "unit": "ns/iter",
            "extra": "iterations: 114465\ncpu: 6104.84252828375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5144.333599947529,
            "unit": "ns/iter",
            "extra": "iterations: 136277\ncpu: 5144.084475003125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5164.675758938412,
            "unit": "ns/iter",
            "extra": "iterations: 135683\ncpu: 5164.558566659041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5194.014545373827,
            "unit": "ns/iter",
            "extra": "iterations: 134957\ncpu: 5193.836555347256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9215.442899361176,
            "unit": "ns/iter",
            "extra": "iterations: 75796\ncpu: 9214.998152936816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35053.556096946515,
            "unit": "ns/iter",
            "extra": "iterations: 23807\ncpu: 35051.69067921204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 141382.12204397348,
            "unit": "ns/iter",
            "extra": "iterations: 6047\ncpu: 141378.12138250377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 112868.33896291662,
            "unit": "ns/iter",
            "extra": "iterations: 7579\ncpu: 112863.47803140282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 107064.41020535784,
            "unit": "ns/iter",
            "extra": "iterations: 8035\ncpu: 107061.53080273815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 108244.79465417599,
            "unit": "ns/iter",
            "extra": "iterations: 7894\ncpu: 108239.57436027344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 281590.8799612941,
            "unit": "ns/iter",
            "extra": "iterations: 3099\ncpu: 281576.57308809366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2352089.2512562373,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2351936.1809045244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1909592.6666667252,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1909596.9135802402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1873445.798387072,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1873339.3145161327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1910315.3522266038,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1910250.2024291512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1074246.9061413775,
            "unit": "ns/iter",
            "extra": "iterations: 863\ncpu: 1074194.4380069522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1860388.7057654145,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1860246.9184890657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7428880.170000412,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7428200.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4062430.9869564925,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4062250.434782609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9086057.789916197,
            "unit": "ns/iter",
            "extra": "iterations: 119\ncpu: 9085648.7394958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33523.290099171485,
            "unit": "ns/iter",
            "extra": "iterations: 24402\ncpu: 33521.16629784446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 142217.89675173993,
            "unit": "ns/iter",
            "extra": "iterations: 6034\ncpu: 142213.60623135546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 113897.03694352454,
            "unit": "ns/iter",
            "extra": "iterations: 7525\ncpu: 113887.69435215944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 112218.86788185095,
            "unit": "ns/iter",
            "extra": "iterations: 7516\ncpu: 112216.1788185205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 115516.75781355635,
            "unit": "ns/iter",
            "extra": "iterations: 7391\ncpu: 115512.02814233598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 292489.81444334384,
            "unit": "ns/iter",
            "extra": "iterations: 2991\ncpu: 292483.2831828816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2380568.9719386105,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2380464.7959183645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1925500.516528967,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1925461.3636363659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1954659.447580439,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1954568.951612902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1878172.1636363121,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1878173.3333333428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1079410.0116550052,
            "unit": "ns/iter",
            "extra": "iterations: 858\ncpu: 1079393.9393939364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1846350.5553358938,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1846307.9051383524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7366812.3300001295,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7366688.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4257467.244444544,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4257274.222222204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32699.79672589501,
            "unit": "ns/iter",
            "extra": "iterations: 25045\ncpu: 32698.80215611903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 148046.47938587976,
            "unit": "ns/iter",
            "extra": "iterations: 5797\ncpu: 148042.8497498703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 114684.71470746754,
            "unit": "ns/iter",
            "extra": "iterations: 7452\ncpu: 114677.58990874887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 108793.43334180342,
            "unit": "ns/iter",
            "extra": "iterations: 7876\ncpu: 108789.25850685698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 110693.21484476405,
            "unit": "ns/iter",
            "extra": "iterations: 7666\ncpu: 110689.17297156296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 284724.83029905934,
            "unit": "ns/iter",
            "extra": "iterations: 3076\ncpu: 284716.8400520171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2344944.2430379763,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2344867.088607599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1917745.6268040522,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1917657.3195876272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1876382.2580646384,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1876322.5806451594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1911639.8275861775,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1911545.4361054704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1070733.6867051846,
            "unit": "ns/iter",
            "extra": "iterations: 865\ncpu: 1070712.601156069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1834407.4365078062,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1834265.8730158717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3084.5529098551533,
            "unit": "ns/iter",
            "extra": "iterations: 227245\ncpu: 3084.571277695861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16518.81032410215,
            "unit": "ns/iter",
            "extra": "iterations: 42425\ncpu: 16517.819681791454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12884.171419646635,
            "unit": "ns/iter",
            "extra": "iterations: 54422\ncpu: 12883.736356620495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12876.177868807228,
            "unit": "ns/iter",
            "extra": "iterations: 54439\ncpu: 12875.602050000918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10766.848013072637,
            "unit": "ns/iter",
            "extra": "iterations: 64874\ncpu: 10766.414896568762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 66777.45132406086,
            "unit": "ns/iter",
            "extra": "iterations: 10498\ncpu: 66778.6149742808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 151365.8618378277,
            "unit": "ns/iter",
            "extra": "iterations: 4625\ncpu: 151360.08648648625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38616.489644156754,
            "unit": "ns/iter",
            "extra": "iterations: 18154\ncpu: 38616.08460945244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38366.12795480736,
            "unit": "ns/iter",
            "extra": "iterations: 18233\ncpu: 38364.44907585164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38315.577595178016,
            "unit": "ns/iter",
            "extra": "iterations: 18255\ncpu: 38314.33032046046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73000.53008656504,
            "unit": "ns/iter",
            "extra": "iterations: 9589\ncpu: 72999.63499843623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 69106.12075572993,
            "unit": "ns/iter",
            "extra": "iterations: 11221\ncpu: 69105.81053382011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19081.733839887875,
            "unit": "ns/iter",
            "extra": "iterations: 36587\ncpu: 19080.79372454703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 91187.35655790874,
            "unit": "ns/iter",
            "extra": "iterations: 7693\ncpu: 91185.376316132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 74577.08921536748,
            "unit": "ns/iter",
            "extra": "iterations: 9393\ncpu: 74573.81028425299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 74922.47283421834,
            "unit": "ns/iter",
            "extra": "iterations: 9350\ncpu: 74918.72727272686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75531.20300345992,
            "unit": "ns/iter",
            "extra": "iterations: 9256\ncpu: 75531.63353500463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 152008.46739130316,
            "unit": "ns/iter",
            "extra": "iterations: 4600\ncpu: 152005.02173912988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 659236.9481620276,
            "unit": "ns/iter",
            "extra": "iterations: 1061\ncpu: 659221.5834118667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 549683.7581284813,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 549658.4456780384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 548113.0758405313,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 548073.5731039831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 551028.2824547959,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 551026.9079464909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 347329.79821073083,
            "unit": "ns/iter",
            "extra": "iterations: 2012\ncpu: 347324.3538767328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 535098.6426932067,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 535086.6105585247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18834.244775157207,
            "unit": "ns/iter",
            "extra": "iterations: 37226\ncpu: 18833.022618600004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 90759.68644725857,
            "unit": "ns/iter",
            "extra": "iterations: 7718\ncpu: 90757.55377040696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 73546.75547866343,
            "unit": "ns/iter",
            "extra": "iterations: 9537\ncpu: 73544.48988151466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 74604.74435689392,
            "unit": "ns/iter",
            "extra": "iterations: 9392\ncpu: 74604.12052810821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75030.16338117917,
            "unit": "ns/iter",
            "extra": "iterations: 9334\ncpu: 75028.48725091138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 149428.59846547406,
            "unit": "ns/iter",
            "extra": "iterations: 4692\ncpu: 149419.52259164644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 656936.0590440711,
            "unit": "ns/iter",
            "extra": "iterations: 1067\ncpu: 656920.9934395546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 556027.0858505582,
            "unit": "ns/iter",
            "extra": "iterations: 1258\ncpu: 556006.2798092128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 542191.1945736011,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 542179.6124030999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 550004.9301412499,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 549992.4646781783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 348982.69721114263,
            "unit": "ns/iter",
            "extra": "iterations: 2008\ncpu: 348953.2370517912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 534840.3743315851,
            "unit": "ns/iter",
            "extra": "iterations: 1309\ncpu: 534825.8212375831 ns\nthreads: 1"
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
        "date": 1705773268770,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7968.065110620729,
            "unit": "ns/iter",
            "extra": "iterations: 87958\ncpu: 7967.959708042476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 75567.00614590419,
            "unit": "ns/iter",
            "extra": "iterations: 11227\ncpu: 75560.38122383539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 145408.43549999257,
            "unit": "ns/iter",
            "extra": "iterations: 6000\ncpu: 145405.05 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 214179.11078357592,
            "unit": "ns/iter",
            "extra": "iterations: 4071\ncpu: 214164.28395971507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 288031.198503094,
            "unit": "ns/iter",
            "extra": "iterations: 3073\ncpu: 288027.0094370324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 348341.6955296283,
            "unit": "ns/iter",
            "extra": "iterations: 2483\ncpu: 348319.93556182017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 417109.81408725167,
            "unit": "ns/iter",
            "extra": "iterations: 2087\ncpu: 417081.3608049833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 486157.786031097,
            "unit": "ns/iter",
            "extra": "iterations: 1804\ncpu: 486110.9201773832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 552526.7850821933,
            "unit": "ns/iter",
            "extra": "iterations: 1582\ncpu: 552493.8685208589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6108.272387342584,
            "unit": "ns/iter",
            "extra": "iterations: 114462\ncpu: 6108.168649857606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5143.441070126636,
            "unit": "ns/iter",
            "extra": "iterations: 135797\ncpu: 5143.103308615066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5059.113868739047,
            "unit": "ns/iter",
            "extra": "iterations: 138686\ncpu: 5058.654081882813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5104.117470056772,
            "unit": "ns/iter",
            "extra": "iterations: 136256\ncpu: 5103.7723109441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8925.44674624019,
            "unit": "ns/iter",
            "extra": "iterations: 78586\ncpu: 8924.825032448529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32473.363546409826,
            "unit": "ns/iter",
            "extra": "iterations: 25265\ncpu: 32472.669701167648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 133032.2431970193,
            "unit": "ns/iter",
            "extra": "iterations: 6431\ncpu: 133027.80283004208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 108487.1218924491,
            "unit": "ns/iter",
            "extra": "iterations: 7884\ncpu: 108484.34804667704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 101980.03196839773,
            "unit": "ns/iter",
            "extra": "iterations: 8352\ncpu: 101971.88697318007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 103182.22889532377,
            "unit": "ns/iter",
            "extra": "iterations: 8292\ncpu: 103172.06946454414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 271003.20678819617,
            "unit": "ns/iter",
            "extra": "iterations: 3182\ncpu: 270990.85480829666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2290131.6888888734,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 2290035.3086419767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1875991.1858586003,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1875775.5555555567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1857418.8303394143,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1857316.5668662668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1863515.6418511514,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1863394.1649899336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1060608.2477168925,
            "unit": "ns/iter",
            "extra": "iterations: 876\ncpu: 1060517.5799086783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1800413.8003876002,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1800287.5968992237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7200168.089999579,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7199545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4030227.6379308966,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4029848.706896561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9039753.396694863,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 9038618.181818184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 31945.044875023763,
            "unit": "ns/iter",
            "extra": "iterations: 25805\ncpu: 31940.581282697036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 136810.23166454097,
            "unit": "ns/iter",
            "extra": "iterations: 6272\ncpu: 136792.84119897962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 110334.85605768698,
            "unit": "ns/iter",
            "extra": "iterations: 7767\ncpu: 110325.42809321442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 105490.55044510063,
            "unit": "ns/iter",
            "extra": "iterations: 8088\ncpu: 105481.80019782411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 105801.15911903344,
            "unit": "ns/iter",
            "extra": "iterations: 8082\ncpu: 105791.61098737884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 269717.11862285883,
            "unit": "ns/iter",
            "extra": "iterations: 3195\ncpu: 269699.43661971815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2321031.1945136967,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2320841.1471321695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1909135.5728952542,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1909000.8213552397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1863482.1699999974,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1863373.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1879813.2278225734,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1879795.5645161287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1058367.0478905372,
            "unit": "ns/iter",
            "extra": "iterations: 877\ncpu: 1058370.3534777605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1818931.8869393612,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1818913.840155946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7261291.559999564,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7261312.000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4166339.9511111896,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4166296.4444444445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 31464.513734791948,
            "unit": "ns/iter",
            "extra": "iterations: 26138\ncpu: 31463.46698293679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 132584.45412201792,
            "unit": "ns/iter",
            "extra": "iterations: 6441\ncpu: 132584.89365005417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 108425.19423003179,
            "unit": "ns/iter",
            "extra": "iterations: 7903\ncpu: 108419.28381627213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 105681.83508727782,
            "unit": "ns/iter",
            "extra": "iterations: 8077\ncpu: 105671.17741735844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 104846.2423463068,
            "unit": "ns/iter",
            "extra": "iterations: 8166\ncpu: 104843.6321332354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 272614.59714285564,
            "unit": "ns/iter",
            "extra": "iterations: 3150\ncpu: 272613.3333333344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2300833.6839506296,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 2300818.0246913554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1897679.70121949,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1897688.0081300896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1855751.8463073273,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1855672.6546906102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1865340.1082164983,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1865290.180360714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1053427.7281993236,
            "unit": "ns/iter",
            "extra": "iterations: 883\ncpu: 1053381.8799546997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1803452.030947666,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1803438.4912959451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3009.6296150084745,
            "unit": "ns/iter",
            "extra": "iterations: 233044\ncpu: 3009.5218070407104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15858.853283598572,
            "unit": "ns/iter",
            "extra": "iterations: 44235\ncpu: 15858.781507855789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12553.041932069114,
            "unit": "ns/iter",
            "extra": "iterations: 55733\ncpu: 12552.706654944048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12303.505653255932,
            "unit": "ns/iter",
            "extra": "iterations: 56693\ncpu: 12303.600091722054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9961.48137254858,
            "unit": "ns/iter",
            "extra": "iterations: 70380\ncpu: 9961.514634839383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 65310.3712022341,
            "unit": "ns/iter",
            "extra": "iterations: 10730\ncpu: 65305.99254426804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 149493.77471707063,
            "unit": "ns/iter",
            "extra": "iterations: 4683\ncpu: 149491.9282511221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38620.60865968065,
            "unit": "ns/iter",
            "extra": "iterations: 18130\ncpu: 38619.44842801985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38659.09812258413,
            "unit": "ns/iter",
            "extra": "iterations: 18110\ncpu: 38659.27112092718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38547.220738369884,
            "unit": "ns/iter",
            "extra": "iterations: 18121\ncpu: 38547.40908338405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 75134.77809952364,
            "unit": "ns/iter",
            "extra": "iterations: 9324\ncpu: 75135.1887601897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 68779.89130434702,
            "unit": "ns/iter",
            "extra": "iterations: 10166\ncpu: 68777.7690340351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19080.30263945386,
            "unit": "ns/iter",
            "extra": "iterations: 36750\ncpu: 19080.068027211015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93329.94953944704,
            "unit": "ns/iter",
            "extra": "iterations: 7491\ncpu: 93323.57495661617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75113.68880780476,
            "unit": "ns/iter",
            "extra": "iterations: 9319\ncpu: 75106.32042064593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 76274.8247793365,
            "unit": "ns/iter",
            "extra": "iterations: 9177\ncpu: 76270.63310450075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 74948.8459072457,
            "unit": "ns/iter",
            "extra": "iterations: 9358\ncpu: 74942.79760632587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 144248.63793456773,
            "unit": "ns/iter",
            "extra": "iterations: 4861\ncpu: 144233.635054514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 648414.0138759951,
            "unit": "ns/iter",
            "extra": "iterations: 1081\ncpu: 648373.635522666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 544879.3028883719,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 544861.2802498064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 542031.2174922313,
            "unit": "ns/iter",
            "extra": "iterations: 1292\ncpu: 542013.0804953637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 542853.0821069395,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 542791.5569326152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 344728.82750122907,
            "unit": "ns/iter",
            "extra": "iterations: 2029\ncpu: 344693.2479053755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 530203.098484845,
            "unit": "ns/iter",
            "extra": "iterations: 1320\ncpu: 530156.6666666593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19198.10252188252,
            "unit": "ns/iter",
            "extra": "iterations: 36441\ncpu: 19196.410636371107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 95264.58311883257,
            "unit": "ns/iter",
            "extra": "iterations: 7381\ncpu: 95256.48286140121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74819.75708026082,
            "unit": "ns/iter",
            "extra": "iterations: 9357\ncpu: 74816.55445121422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 75472.33333333016,
            "unit": "ns/iter",
            "extra": "iterations: 9276\ncpu: 75464.00388098329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75436.74938045155,
            "unit": "ns/iter",
            "extra": "iterations: 9281\ncpu: 75429.94289408531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 142970.37224490833,
            "unit": "ns/iter",
            "extra": "iterations: 4900\ncpu: 142956.2040816337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 645318.7946592637,
            "unit": "ns/iter",
            "extra": "iterations: 1086\ncpu: 645274.0331491769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 540985.3240740262,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 540967.2067901227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 540281.1219135626,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 540220.9876543116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 540986.5611455438,
            "unit": "ns/iter",
            "extra": "iterations: 1292\ncpu: 540941.0216718286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 344264.0289926163,
            "unit": "ns/iter",
            "extra": "iterations: 2035\ncpu: 344227.12530712655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 528594.5634440865,
            "unit": "ns/iter",
            "extra": "iterations: 1324\ncpu: 528554.8338368597 ns\nthreads: 1"
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
        "date": 1705774764260,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7806.1249650574555,
            "unit": "ns/iter",
            "extra": "iterations: 89433\ncpu: 7806.014558384491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 74267.89730625802,
            "unit": "ns/iter",
            "extra": "iterations: 11471\ncpu: 74263.64745880917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 142227.34130858726,
            "unit": "ns/iter",
            "extra": "iterations: 6144\ncpu: 142221.32161458337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 209219.8155176739,
            "unit": "ns/iter",
            "extra": "iterations: 4163\ncpu: 209208.9598846986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 279328.80032732146,
            "unit": "ns/iter",
            "extra": "iterations: 3055\ncpu: 279325.04091653024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 341799.75875795033,
            "unit": "ns/iter",
            "extra": "iterations: 2512\ncpu: 341791.28184713377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 406211.39036935935,
            "unit": "ns/iter",
            "extra": "iterations: 2139\ncpu: 406198.877980365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 474608.6563011425,
            "unit": "ns/iter",
            "extra": "iterations: 1833\ncpu: 474601.8548827065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 540415.405321787,
            "unit": "ns/iter",
            "extra": "iterations: 1616\ncpu: 540406.0024752482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6100.848069716188,
            "unit": "ns/iter",
            "extra": "iterations: 114750\ncpu: 6100.668409586053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5069.16036462334,
            "unit": "ns/iter",
            "extra": "iterations: 137786\ncpu: 5068.981609162034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5056.789952231869,
            "unit": "ns/iter",
            "extra": "iterations: 138797\ncpu: 5056.616497474735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5105.260572451705,
            "unit": "ns/iter",
            "extra": "iterations: 137409\ncpu: 5105.135762577407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9000.285023719915,
            "unit": "ns/iter",
            "extra": "iterations: 77783\ncpu: 8999.79687078153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32784.52431399063,
            "unit": "ns/iter",
            "extra": "iterations: 25109\ncpu: 32782.68748257601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 135376.4001547938,
            "unit": "ns/iter",
            "extra": "iterations: 6460\ncpu: 135368.20433436555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 108617.51857505717,
            "unit": "ns/iter",
            "extra": "iterations: 7860\ncpu: 108613.39694656478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 102267.09304556248,
            "unit": "ns/iter",
            "extra": "iterations: 8340\ncpu: 102261.64268585168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 103643.65032838205,
            "unit": "ns/iter",
            "extra": "iterations: 8222\ncpu: 103639.09024568264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 297939.27643659234,
            "unit": "ns/iter",
            "extra": "iterations: 2941\ncpu: 297918.1570894248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2230485.318181892,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2230392.344497604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1834916.1203157732,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1834816.568047336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1825278.7933069763,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1825239.9606299198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1823658.9390961316,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1823541.060903727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1064391.9051427864,
            "unit": "ns/iter",
            "extra": "iterations: 875\ncpu: 1064355.5428571452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1773227.6723808397,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1773132.952380954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7223006.179999629,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7222800.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4152585.8854621993,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4152230.3964757696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9056181.291667068,
            "unit": "ns/iter",
            "extra": "iterations: 120\ncpu: 9055716.666666668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 32887.88720303555,
            "unit": "ns/iter",
            "extra": "iterations: 25045\ncpu: 32886.14893192243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 133797.03108403936,
            "unit": "ns/iter",
            "extra": "iterations: 6402\ncpu: 133788.59731333968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 109458.57575758173,
            "unit": "ns/iter",
            "extra": "iterations: 7788\ncpu: 109452.60657421648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 106268.19828124008,
            "unit": "ns/iter",
            "extra": "iterations: 8029\ncpu: 106262.54826254786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 105714.52383316628,
            "unit": "ns/iter",
            "extra": "iterations: 8056\ncpu: 105709.85600794472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 300048.02919958933,
            "unit": "ns/iter",
            "extra": "iterations: 2911\ncpu: 300030.53933356056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2269162.9878343726,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2269063.7469586506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1856637.6930691896,
            "unit": "ns/iter",
            "extra": "iterations: 505\ncpu: 1856557.029702982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1833008.7716533649,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1832945.275590546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1843215.4466402808,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1843142.8853754932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1056022.1518265177,
            "unit": "ns/iter",
            "extra": "iterations: 876\ncpu: 1055980.9360730613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1779582.097514318,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1779522.179732313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7293501.420000439,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7293042.000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4120916.907488853,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4120674.8898678413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 31843.64448152928,
            "unit": "ns/iter",
            "extra": "iterations: 25768\ncpu: 31842.428593604527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 133268.4688899061,
            "unit": "ns/iter",
            "extra": "iterations: 6477\ncpu: 133262.2047244084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 108241.75475526134,
            "unit": "ns/iter",
            "extra": "iterations: 7886\ncpu: 108240.55287851921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 102977.75594447716,
            "unit": "ns/iter",
            "extra": "iterations: 8285\ncpu: 102973.45805672853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 103903.19243902568,
            "unit": "ns/iter",
            "extra": "iterations: 8200\ncpu: 103901.13414634141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 300212.55648244184,
            "unit": "ns/iter",
            "extra": "iterations: 2877\ncpu: 300205.9436913448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2252519.871359151,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2252436.1650485387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1839908.7218935993,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1839825.4437869831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1825699.213307402,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1825620.352250494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1838855.4418147192,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1838753.25443787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1058640.557582663,
            "unit": "ns/iter",
            "extra": "iterations: 877\ncpu: 1058591.106043328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1778959.6431297562,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1778885.8778625994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3021.837709954787,
            "unit": "ns/iter",
            "extra": "iterations: 231419\ncpu: 3021.6866376572416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16250.260372388982,
            "unit": "ns/iter",
            "extra": "iterations: 43288\ncpu: 16249.55645906471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12861.611793070197,
            "unit": "ns/iter",
            "extra": "iterations: 54337\ncpu: 12861.25292158207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12234.35101120552,
            "unit": "ns/iter",
            "extra": "iterations: 57209\ncpu: 12233.71672289324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10472.373132317998,
            "unit": "ns/iter",
            "extra": "iterations: 66794\ncpu: 10472.247507261089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 67374.9037258188,
            "unit": "ns/iter",
            "extra": "iterations: 10387\ncpu: 67370.17425628238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 146205.9127166331,
            "unit": "ns/iter",
            "extra": "iterations: 4789\ncpu: 146196.88870327917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37694.99607653035,
            "unit": "ns/iter",
            "extra": "iterations: 18606\ncpu: 37692.26056110935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37962.6772880243,
            "unit": "ns/iter",
            "extra": "iterations: 18422\ncpu: 37961.82282054063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37820.19297960903,
            "unit": "ns/iter",
            "extra": "iterations: 18489\ncpu: 37818.621883282154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 75565.9368795876,
            "unit": "ns/iter",
            "extra": "iterations: 9268\ncpu: 75565.05179110881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 67955.73106795954,
            "unit": "ns/iter",
            "extra": "iterations: 10300\ncpu: 67953.48543689273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19212.00487979699,
            "unit": "ns/iter",
            "extra": "iterations: 36272\ncpu: 19211.286943096555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 92508.19812442434,
            "unit": "ns/iter",
            "extra": "iterations: 7571\ncpu: 92504.49082023652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 74752.54090327494,
            "unit": "ns/iter",
            "extra": "iterations: 9388\ncpu: 74750.72432893107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 73803.39102969033,
            "unit": "ns/iter",
            "extra": "iterations: 9498\ncpu: 73802.53737629081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 73917.31858594126,
            "unit": "ns/iter",
            "extra": "iterations: 9448\ncpu: 73914.94496189675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 146898.33088389263,
            "unit": "ns/iter",
            "extra": "iterations: 4763\ncpu: 146897.20764224223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 632880.8122743294,
            "unit": "ns/iter",
            "extra": "iterations: 1108\ncpu: 632861.2815884473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 528969.60603774,
            "unit": "ns/iter",
            "extra": "iterations: 1325\ncpu: 528957.4339622693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 536340.3256880537,
            "unit": "ns/iter",
            "extra": "iterations: 1308\ncpu: 536326.6055045894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 531587.8110773894,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 531568.5128983319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 346261.085148527,
            "unit": "ns/iter",
            "extra": "iterations: 2020\ncpu: 346257.2277227678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 520399.24554888636,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 520382.7151335352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19373.661750054915,
            "unit": "ns/iter",
            "extra": "iterations: 36136\ncpu: 19372.949413327344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 94276.64300146724,
            "unit": "ns/iter",
            "extra": "iterations: 7423\ncpu: 94275.71062912531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74730.74132055006,
            "unit": "ns/iter",
            "extra": "iterations: 9390\ncpu: 74728.46645367399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 74561.13945324994,
            "unit": "ns/iter",
            "extra": "iterations: 9401\ncpu: 74560.68503350754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75257.06211714025,
            "unit": "ns/iter",
            "extra": "iterations: 9305\ncpu: 75255.6367544336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 145871.6290658955,
            "unit": "ns/iter",
            "extra": "iterations: 4796\ncpu: 145868.03586321895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 630233.4037769288,
            "unit": "ns/iter",
            "extra": "iterations: 1112\ncpu: 630219.3345323713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 528136.5128205171,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 528116.8929110097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 533526.9405033772,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 533521.4340198335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 529423.9476081931,
            "unit": "ns/iter",
            "extra": "iterations: 1317\ncpu: 529412.300683374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 356213.8448532775,
            "unit": "ns/iter",
            "extra": "iterations: 2011\ncpu: 356210.0447538528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 521935.26587001944,
            "unit": "ns/iter",
            "extra": "iterations: 1339\ncpu: 521923.9731142603 ns\nthreads: 1"
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
        "date": 1705777722890,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8052.768852856618,
            "unit": "ns/iter",
            "extra": "iterations: 86711\ncpu: 8052.458165630658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 74787.90521035352,
            "unit": "ns/iter",
            "extra": "iterations: 11362\ncpu: 74785.68913923606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 143032.99559183608,
            "unit": "ns/iter",
            "extra": "iterations: 6125\ncpu: 143026.51428571428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 212302.3776427742,
            "unit": "ns/iter",
            "extra": "iterations: 4115\ncpu: 212294.5808019441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 281244.69013626175,
            "unit": "ns/iter",
            "extra": "iterations: 3082\ncpu: 281231.894873459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 344612.8870710267,
            "unit": "ns/iter",
            "extra": "iterations: 2506\ncpu: 344591.340782123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 413447.9739583158,
            "unit": "ns/iter",
            "extra": "iterations: 2112\ncpu: 413444.5075757573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 480092.5737161641,
            "unit": "ns/iter",
            "extra": "iterations: 1811\ncpu: 480063.2799558253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 590124.7932117726,
            "unit": "ns/iter",
            "extra": "iterations: 1591\ncpu: 590094.4060339418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6362.393912628232,
            "unit": "ns/iter",
            "extra": "iterations: 110951\ncpu: 6362.104893151043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5196.2854596761845,
            "unit": "ns/iter",
            "extra": "iterations: 134660\ncpu: 5196.183721966435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5154.902958221971,
            "unit": "ns/iter",
            "extra": "iterations: 135622\ncpu: 5154.714574331608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5179.962283716331,
            "unit": "ns/iter",
            "extra": "iterations: 135008\ncpu: 5179.863415501301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9114.329736974523,
            "unit": "ns/iter",
            "extra": "iterations: 76837\ncpu: 9114.097374962595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36225.87686174522,
            "unit": "ns/iter",
            "extra": "iterations: 22828\ncpu: 36225.29349921146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 146088.05535624488,
            "unit": "ns/iter",
            "extra": "iterations: 5853\ncpu: 146085.68255595423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 117722.6998348493,
            "unit": "ns/iter",
            "extra": "iterations: 7266\ncpu: 117720.82301128526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 111417.94096577907,
            "unit": "ns/iter",
            "extra": "iterations: 7538\ncpu: 111414.18148049881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 110347.432092366,
            "unit": "ns/iter",
            "extra": "iterations: 7709\ncpu: 110344.88260474779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 300245.1173627692,
            "unit": "ns/iter",
            "extra": "iterations: 2897\ncpu: 300238.62616499804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2311218.3325000047,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2311123.500000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1877669.9411764971,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1877539.148073022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1852275.2171313108,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1852232.868525895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1853418.905811768,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1853366.1322645294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1070229.7592165356,
            "unit": "ns/iter",
            "extra": "iterations: 868\ncpu: 1070207.6036866354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1811300.6621094386,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1811227.734374997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7276634.430000968,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7276439.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4196658.286995171,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4196479.820627795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9014164.7295084,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 9013809.016393451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35121.3230179012,
            "unit": "ns/iter",
            "extra": "iterations: 23460\ncpu: 35119.86359761296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 148353.99654336777,
            "unit": "ns/iter",
            "extra": "iterations: 5786\ncpu: 148350.65675769106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 118518.68021005427,
            "unit": "ns/iter",
            "extra": "iterations: 7236\ncpu: 118514.19292426729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 114087.45267215693,
            "unit": "ns/iter",
            "extra": "iterations: 7522\ncpu: 114084.31268279755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 113271.16136725401,
            "unit": "ns/iter",
            "extra": "iterations: 7548\ncpu: 113267.34234234234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 299347.85714285466,
            "unit": "ns/iter",
            "extra": "iterations: 2877\ncpu: 299345.6030587417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2334935.3784461347,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2334844.862155398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1904747.7500000938,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1904680.327868857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1852401.8784859548,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1852357.1713147415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1862455.9480001607,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1862403.999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1062330.5280641122,
            "unit": "ns/iter",
            "extra": "iterations: 873\ncpu: 1062307.6746849937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1818949.6413254933,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1818870.1754385992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7346712.849999904,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7346564.000000057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4123085.8407079643,
            "unit": "ns/iter",
            "extra": "iterations: 226\ncpu: 4122964.601769909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 34705.99836450384,
            "unit": "ns/iter",
            "extra": "iterations: 23846\ncpu: 34705.426486622455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 145241.88885124662,
            "unit": "ns/iter",
            "extra": "iterations: 5902\ncpu: 145238.35987800694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 118723.62380692309,
            "unit": "ns/iter",
            "extra": "iterations: 7334\ncpu: 118721.24352331659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 113646.98366533942,
            "unit": "ns/iter",
            "extra": "iterations: 7530\ncpu: 113641.620185923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 113289.54532202828,
            "unit": "ns/iter",
            "extra": "iterations: 7546\ncpu: 113282.9181023056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 302587.9251132199,
            "unit": "ns/iter",
            "extra": "iterations: 2871\ncpu: 302574.7126436767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2319513.88557218,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2319385.3233830933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1894299.3475608143,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1894194.1056910625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1839128.8917321055,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1839045.0787401572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1857420.9662697664,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1857297.4206349223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1064368.673709003,
            "unit": "ns/iter",
            "extra": "iterations: 852\ncpu: 1064337.5586854396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1810335.001941541,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1810224.077669914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3111.359896553254,
            "unit": "ns/iter",
            "extra": "iterations: 224270\ncpu: 3111.1949881838573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16612.119304681713,
            "unit": "ns/iter",
            "extra": "iterations: 42513\ncpu: 16611.036624091405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12839.59069733372,
            "unit": "ns/iter",
            "extra": "iterations: 54522\ncpu: 12839.136495359766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12789.024405381386,
            "unit": "ns/iter",
            "extra": "iterations: 54783\ncpu: 12788.15508460649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10679.659126613811,
            "unit": "ns/iter",
            "extra": "iterations: 65561\ncpu: 10679.002760787642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 68625.67591684702,
            "unit": "ns/iter",
            "extra": "iterations: 10198\ncpu: 68623.09276328661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 142601.1796859168,
            "unit": "ns/iter",
            "extra": "iterations: 4903\ncpu: 142591.86212522959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39291.95936298793,
            "unit": "ns/iter",
            "extra": "iterations: 18210\ncpu: 39291.674903899395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38045.12706010289,
            "unit": "ns/iter",
            "extra": "iterations: 18385\ncpu: 38044.253467501185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38017.6900244645,
            "unit": "ns/iter",
            "extra": "iterations: 18395\ncpu: 38015.34112530591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 75761.59453277891,
            "unit": "ns/iter",
            "extra": "iterations: 9182\ncpu: 75758.90873448123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 68451.56062530307,
            "unit": "ns/iter",
            "extra": "iterations: 10235\ncpu: 68449.24279433388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19062.269833070088,
            "unit": "ns/iter",
            "extra": "iterations: 36782\ncpu: 19061.103257027815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 96230.7920497539,
            "unit": "ns/iter",
            "extra": "iterations: 7396\ncpu: 96223.91833423488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75180.62748256582,
            "unit": "ns/iter",
            "extra": "iterations: 9315\ncpu: 75176.17820719349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 76550.98276421783,
            "unit": "ns/iter",
            "extra": "iterations: 9225\ncpu: 76513.34417344177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75689.41083593814,
            "unit": "ns/iter",
            "extra": "iterations: 9247\ncpu: 75686.6226884391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 148156.47482013752,
            "unit": "ns/iter",
            "extra": "iterations: 4726\ncpu: 148151.7562420653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 641983.9304029434,
            "unit": "ns/iter",
            "extra": "iterations: 1092\ncpu: 641959.2490842501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 539724.9088803489,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 539703.3976833889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 538240.2478764744,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 538221.8532818474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 543814.9962005955,
            "unit": "ns/iter",
            "extra": "iterations: 1316\ncpu: 543810.6382978691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 342036.36695906427,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 342030.5555555577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 521536.5570470238,
            "unit": "ns/iter",
            "extra": "iterations: 1341\ncpu: 521520.8053691213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19220.412943241594,
            "unit": "ns/iter",
            "extra": "iterations: 36436\ncpu: 19219.735975409105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93987.5987389362,
            "unit": "ns/iter",
            "extra": "iterations: 7454\ncpu: 93987.06734639086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 73954.51333123015,
            "unit": "ns/iter",
            "extra": "iterations: 9489\ncpu: 73952.39751290949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 74856.72195018057,
            "unit": "ns/iter",
            "extra": "iterations: 9394\ncpu: 74855.3119012137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75627.20038847608,
            "unit": "ns/iter",
            "extra": "iterations: 9267\ncpu: 75622.96320276315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 148190.02668926993,
            "unit": "ns/iter",
            "extra": "iterations: 4721\ncpu: 148182.12243168757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 637149.1624319265,
            "unit": "ns/iter",
            "extra": "iterations: 1102\ncpu: 637145.7350272175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 537683.5180076624,
            "unit": "ns/iter",
            "extra": "iterations: 1305\ncpu: 537666.3601532549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 532825.2758358605,
            "unit": "ns/iter",
            "extra": "iterations: 1316\ncpu: 532808.2826747668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 528434.4871601175,
            "unit": "ns/iter",
            "extra": "iterations: 1324\ncpu: 528414.3504531744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 346417.2609552247,
            "unit": "ns/iter",
            "extra": "iterations: 2031\ncpu: 346405.31757755385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 522839.6453531485,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 522835.91078067897 ns\nthreads: 1"
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
        "date": 1705953497138,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7685.6854502087635,
            "unit": "ns/iter",
            "extra": "iterations: 90558\ncpu: 7685.71412796219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72361.87003578662,
            "unit": "ns/iter",
            "extra": "iterations: 11734\ncpu: 72361.72660644281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 138111.86968169996,
            "unit": "ns/iter",
            "extra": "iterations: 6346\ncpu: 138109.32871099908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 203519.24818544165,
            "unit": "ns/iter",
            "extra": "iterations: 4271\ncpu: 203509.03769608992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 269264.75101530895,
            "unit": "ns/iter",
            "extra": "iterations: 3201\ncpu: 269263.16776007495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 330671.5317918792,
            "unit": "ns/iter",
            "extra": "iterations: 2595\ncpu: 330649.7495183043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 394515.32574030414,
            "unit": "ns/iter",
            "extra": "iterations: 2195\ncpu: 394497.2209567196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 460671.47743970854,
            "unit": "ns/iter",
            "extra": "iterations: 1906\ncpu: 460654.9317943338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 521328.1770245318,
            "unit": "ns/iter",
            "extra": "iterations: 1593\ncpu: 521325.48650345247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5837.137649388149,
            "unit": "ns/iter",
            "extra": "iterations: 119739\ncpu: 5837.075639515954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4958.5349359628335,
            "unit": "ns/iter",
            "extra": "iterations: 141559\ncpu: 4958.227311580327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5055.542576716976,
            "unit": "ns/iter",
            "extra": "iterations: 139278\ncpu: 5055.511279599071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5034.8494874624175,
            "unit": "ns/iter",
            "extra": "iterations: 138819\ncpu: 5034.717870032194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8840.674843444333,
            "unit": "ns/iter",
            "extra": "iterations: 79045\ncpu: 8840.22771838826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32441.116524005367,
            "unit": "ns/iter",
            "extra": "iterations: 25351\ncpu: 32440.35738235181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 134164.6437411878,
            "unit": "ns/iter",
            "extra": "iterations: 6383\ncpu: 134159.42346858844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 109283.83535573653,
            "unit": "ns/iter",
            "extra": "iterations: 7829\ncpu: 109280.54668540024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 102682.29933694661,
            "unit": "ns/iter",
            "extra": "iterations: 8295\ncpu: 102680.7353827607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 103575.48090214696,
            "unit": "ns/iter",
            "extra": "iterations: 8247\ncpu: 103573.44488905084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 262615.6029500462,
            "unit": "ns/iter",
            "extra": "iterations: 3322\ncpu: 262605.3582179415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2141546.7373271305,
            "unit": "ns/iter",
            "extra": "iterations: 434\ncpu: 2141481.566820278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1755220.2943396932,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1755167.5471698141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1761667.0905660081,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1761648.4905660376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1774211.8103449952,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1774146.168582373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1035573.562360839,
            "unit": "ns/iter",
            "extra": "iterations: 898\ncpu: 1035563.6971046773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1719347.7486135885,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1719323.659889093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6985528.060000661,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6985568.000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3917619.1416662694,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3917468.7499999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8695068.343999993,
            "unit": "ns/iter",
            "extra": "iterations: 125\ncpu: 8694643.200000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 32349.15397923779,
            "unit": "ns/iter",
            "extra": "iterations: 25432\ncpu: 32348.59232463045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 137267.36669844657,
            "unit": "ns/iter",
            "extra": "iterations: 6294\ncpu: 137261.16936765175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 110495.80689565798,
            "unit": "ns/iter",
            "extra": "iterations: 7773\ncpu: 110493.33590634266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 106041.20539804488,
            "unit": "ns/iter",
            "extra": "iterations: 8077\ncpu: 106039.09867525076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 107180.44100628715,
            "unit": "ns/iter",
            "extra": "iterations: 7950\ncpu: 107173.98742138378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 260912.32212969536,
            "unit": "ns/iter",
            "extra": "iterations: 3362\ncpu: 260903.6882807864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2183875.741784056,
            "unit": "ns/iter",
            "extra": "iterations: 426\ncpu: 2182987.323943662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1780388.9751433611,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1780338.049713203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1769184.0664136342,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1769104.5540797028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1781064.4742857697,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1780950.857142857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1029821.5597345259,
            "unit": "ns/iter",
            "extra": "iterations: 904\ncpu: 1029808.1858407143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1724532.93333332,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1724465.0000000107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7094129.390000034,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7093978.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3898829.80334685,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3898484.9372384707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32333.912585935162,
            "unit": "ns/iter",
            "extra": "iterations: 26037\ncpu: 32333.256519568367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 134198.53035994395,
            "unit": "ns/iter",
            "extra": "iterations: 6390\ncpu: 134192.61345852906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 109352.78059072644,
            "unit": "ns/iter",
            "extra": "iterations: 7821\ncpu: 109349.75067127022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 104103.59357439446,
            "unit": "ns/iter",
            "extra": "iterations: 8186\ncpu: 104098.19203518255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 104886.16418828437,
            "unit": "ns/iter",
            "extra": "iterations: 8137\ncpu: 104884.69952070792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 263518.1646987529,
            "unit": "ns/iter",
            "extra": "iterations: 3303\ncpu: 263508.0835604009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2170353.2651163503,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2170328.60465116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1778898.9980879768,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1778831.9311663376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1762330.8676749407,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1762311.53119092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1775583.982824404,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1775576.1450381672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1031014.2635659395,
            "unit": "ns/iter",
            "extra": "iterations: 903\ncpu: 1030997.7851605823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1714401.1691176703,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1714365.4411764634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3022.9592262923243,
            "unit": "ns/iter",
            "extra": "iterations: 231767\ncpu: 3022.7663990128076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16097.461088289889,
            "unit": "ns/iter",
            "extra": "iterations: 43573\ncpu: 16097.385995914852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12879.685888253349,
            "unit": "ns/iter",
            "extra": "iterations: 55840\ncpu: 12879.854942693455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12721.788639173437,
            "unit": "ns/iter",
            "extra": "iterations: 54996\ncpu: 12721.445196014329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10304.03524423611,
            "unit": "ns/iter",
            "extra": "iterations: 67926\ncpu: 10303.857138650843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 61715.17315673329,
            "unit": "ns/iter",
            "extra": "iterations: 11325\ncpu: 61712.927152317534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 134413.423669991,
            "unit": "ns/iter",
            "extra": "iterations: 5188\ncpu: 134408.4811102547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36961.26400549098,
            "unit": "ns/iter",
            "extra": "iterations: 18939\ncpu: 36959.29563334937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37192.591617465856,
            "unit": "ns/iter",
            "extra": "iterations: 18801\ncpu: 37191.33556725708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37124.75931611593,
            "unit": "ns/iter",
            "extra": "iterations: 18892\ncpu: 37123.54435740032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 73312.8756020927,
            "unit": "ns/iter",
            "extra": "iterations: 9550\ncpu: 73311.29842931902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66015.0189600093,
            "unit": "ns/iter",
            "extra": "iterations: 10654\ncpu: 66011.14135535974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18363.561211644745,
            "unit": "ns/iter",
            "extra": "iterations: 38130\ncpu: 18363.52740624189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 88945.50360988182,
            "unit": "ns/iter",
            "extra": "iterations: 7895\ncpu: 88944.12919569395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 71508.40312052921,
            "unit": "ns/iter",
            "extra": "iterations: 9806\ncpu: 71505.76177850235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 72144.71745638405,
            "unit": "ns/iter",
            "extra": "iterations: 9687\ncpu: 72143.3880458346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 72193.99425934788,
            "unit": "ns/iter",
            "extra": "iterations: 9755\ncpu: 72188.66222450076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 139347.0265045825,
            "unit": "ns/iter",
            "extra": "iterations: 5018\ncpu: 139347.0306895178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 609935.0034753007,
            "unit": "ns/iter",
            "extra": "iterations: 1151\ncpu: 609913.9009556948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 513602.3455612444,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 513581.1445341141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 513811.1656892155,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 513796.1876832831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 514911.5849195271,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 514877.0863835974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 331508.5104166977,
            "unit": "ns/iter",
            "extra": "iterations: 2112\ncpu: 331493.37121212087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 501753.51536815264,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 501734.0957827021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18700.256463620633,
            "unit": "ns/iter",
            "extra": "iterations: 37479\ncpu: 18700.288161370205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 91623.73042227695,
            "unit": "ns/iter",
            "extra": "iterations: 7649\ncpu: 91619.84573146675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 71809.24079580815,
            "unit": "ns/iter",
            "extra": "iterations: 9751\ncpu: 71806.9531330107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 71961.78043521957,
            "unit": "ns/iter",
            "extra": "iterations: 9742\ncpu: 71960.67542599008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 72970.7394608144,
            "unit": "ns/iter",
            "extra": "iterations: 9607\ncpu: 72969.65754137619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 139262.5456175386,
            "unit": "ns/iter",
            "extra": "iterations: 5020\ncpu: 139262.3505976085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 606685.2452504471,
            "unit": "ns/iter",
            "extra": "iterations: 1158\ncpu: 606661.917098439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 511580.76367620716,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 511562.80087526824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 514843.84175828943,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 514828.5714285738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 514085.71982439695,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 514090.92904169956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 333764.71216477064,
            "unit": "ns/iter",
            "extra": "iterations: 2088\ncpu: 333758.8122605393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 501256.2891911554,
            "unit": "ns/iter",
            "extra": "iterations: 1397\ncpu: 501238.72584108036 ns\nthreads: 1"
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
        "date": 1705954945182,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7576.5986583887825,
            "unit": "ns/iter",
            "extra": "iterations: 91979\ncpu: 7575.633568531949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72703.57732399658,
            "unit": "ns/iter",
            "extra": "iterations: 11704\ncpu: 72699.10287081338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 139412.17795124304,
            "unit": "ns/iter",
            "extra": "iterations: 6277\ncpu: 139401.59311773133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 208921.60506813624,
            "unit": "ns/iter",
            "extra": "iterations: 4183\ncpu: 208910.32751613666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 276092.36581468803,
            "unit": "ns/iter",
            "extra": "iterations: 3130\ncpu: 276069.04153354623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 332504.1318639097,
            "unit": "ns/iter",
            "extra": "iterations: 2586\ncpu: 332488.9791183295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 397871.7379753041,
            "unit": "ns/iter",
            "extra": "iterations: 2183\ncpu: 397851.1223087492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 472383.9982153841,
            "unit": "ns/iter",
            "extra": "iterations: 1681\ncpu: 472366.2105889356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 531248.4323994868,
            "unit": "ns/iter",
            "extra": "iterations: 1642\ncpu: 531219.671132765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5917.597000890348,
            "unit": "ns/iter",
            "extra": "iterations: 118035\ncpu: 5917.294022959294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5007.784330000504,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5007.501000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4984.927398333343,
            "unit": "ns/iter",
            "extra": "iterations: 140410\ncpu: 4984.753222704926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5011.145981797855,
            "unit": "ns/iter",
            "extra": "iterations: 139764\ncpu: 5010.88549268768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8779.046253689876,
            "unit": "ns/iter",
            "extra": "iterations: 79972\ncpu: 8778.34492072224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32729.93142174266,
            "unit": "ns/iter",
            "extra": "iterations: 25110\ncpu: 32727.694145758647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 133058.9606802903,
            "unit": "ns/iter",
            "extra": "iterations: 6409\ncpu: 133048.24465595259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 107928.58766687494,
            "unit": "ns/iter",
            "extra": "iterations: 7865\ncpu: 107922.39033693568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 101688.10937684934,
            "unit": "ns/iter",
            "extra": "iterations: 8393\ncpu: 101680.50756582865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 104344.43626373207,
            "unit": "ns/iter",
            "extra": "iterations: 8190\ncpu: 104341.68498168522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 264621.32671479613,
            "unit": "ns/iter",
            "extra": "iterations: 3324\ncpu: 264612.7557160043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2265628.6909975796,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2265610.462287104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1845984.1593624903,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1845950.0000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1861258.2619998648,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1861159.0000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1850763.1529411238,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1850716.0784313679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1074655.21889394,
            "unit": "ns/iter",
            "extra": "iterations: 868\ncpu: 1074624.0783410121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1797688.108108094,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1797648.4555984528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7269214.130000137,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7269030.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4049503.2207793007,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4049352.3809523764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8943886.793388605,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 8943510.74380166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 32626.073988252512,
            "unit": "ns/iter",
            "extra": "iterations: 25031\ncpu: 32623.95429667211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 136866.52995685753,
            "unit": "ns/iter",
            "extra": "iterations: 6259\ncpu: 136853.49097299902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 109892.5878265348,
            "unit": "ns/iter",
            "extra": "iterations: 7771\ncpu: 109888.36700553277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 105553.4841858139,
            "unit": "ns/iter",
            "extra": "iterations: 8094\ncpu: 105546.14529281008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 106560.93613048378,
            "unit": "ns/iter",
            "extra": "iterations: 8032\ncpu: 106556.33715139424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 267730.6686911647,
            "unit": "ns/iter",
            "extra": "iterations: 3293\ncpu: 267713.0276343766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2280796.4570024493,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 2280679.3611793714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1856949.7405189464,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1856788.023952102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1857957.2015968263,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1857874.6506986143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1877174.7066928023,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1877106.2992125968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1070530.2685186288,
            "unit": "ns/iter",
            "extra": "iterations: 864\ncpu: 1070508.101851855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1792867.421663361,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1792824.5647969125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7370679.640000617,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7370233.000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4156464.4419643013,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4156152.2321428447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 31917.012714165212,
            "unit": "ns/iter",
            "extra": "iterations: 25798\ncpu: 31916.439258857146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 132727.10571385757,
            "unit": "ns/iter",
            "extra": "iterations: 6423\ncpu: 132723.18231356025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 108504.11869360435,
            "unit": "ns/iter",
            "extra": "iterations: 7869\ncpu: 108498.58940144916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 103811.28328060587,
            "unit": "ns/iter",
            "extra": "iterations: 8218\ncpu: 103802.98126064755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 105619.9585046724,
            "unit": "ns/iter",
            "extra": "iterations: 8025\ncpu: 105614.21806853627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 272175.9617418459,
            "unit": "ns/iter",
            "extra": "iterations: 3215\ncpu: 272159.37791601976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2255357.4795180676,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2255271.8072289275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1850495.2213439634,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1850313.636363643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1854940.6567459186,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1854844.841269843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1846431.8512720806,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1846346.3796477504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1068456.7540230437,
            "unit": "ns/iter",
            "extra": "iterations: 870\ncpu: 1068448.045977016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1791237.591522038,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1791173.7957610744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3052.846781068795,
            "unit": "ns/iter",
            "extra": "iterations: 228725\ncpu: 3052.839436003929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16555.700124792933,
            "unit": "ns/iter",
            "extra": "iterations: 42471\ncpu: 16555.430764521698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12910.449034235113,
            "unit": "ns/iter",
            "extra": "iterations: 54154\ncpu: 12910.39443069772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12472.743821224522,
            "unit": "ns/iter",
            "extra": "iterations: 56160\ncpu: 12472.565883190859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10333.352086472567,
            "unit": "ns/iter",
            "extra": "iterations: 67722\ncpu: 10333.277221582388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 62667.705099585524,
            "unit": "ns/iter",
            "extra": "iterations: 11197\ncpu: 62662.338126284165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 145205.767697748,
            "unit": "ns/iter",
            "extra": "iterations: 4817\ncpu: 145192.7755864647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37674.756373021686,
            "unit": "ns/iter",
            "extra": "iterations: 18594\ncpu: 37670.92072711612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37785.831484387985,
            "unit": "ns/iter",
            "extra": "iterations: 18479\ncpu: 37783.68418204476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37401.804308317056,
            "unit": "ns/iter",
            "extra": "iterations: 18708\ncpu: 37399.75411588596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 75434.44639947651,
            "unit": "ns/iter",
            "extra": "iterations: 9207\ncpu: 75431.43260562624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 67543.3020412162,
            "unit": "ns/iter",
            "extra": "iterations: 10386\ncpu: 67542.8942807634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18719.0601354791,
            "unit": "ns/iter",
            "extra": "iterations: 37349\ncpu: 18718.444938285054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 94951.94033898786,
            "unit": "ns/iter",
            "extra": "iterations: 7375\ncpu: 94950.4813559319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 74942.44257552586,
            "unit": "ns/iter",
            "extra": "iterations: 9334\ncpu: 74941.95414613208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75379.54262982645,
            "unit": "ns/iter",
            "extra": "iterations: 9301\ncpu: 75378.23889904314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 74986.3859179102,
            "unit": "ns/iter",
            "extra": "iterations: 9331\ncpu: 74985.2213053254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 143340.36816226086,
            "unit": "ns/iter",
            "extra": "iterations: 4881\ncpu: 143335.70989551328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 625954.2484360827,
            "unit": "ns/iter",
            "extra": "iterations: 1119\ncpu: 625943.2529043753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 524165.2380239165,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 524156.3622754504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 531972.6979167055,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 531937.2767857142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 531133.6529366759,
            "unit": "ns/iter",
            "extra": "iterations: 1311\ncpu: 531101.7543859596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 337945.1512077522,
            "unit": "ns/iter",
            "extra": "iterations: 2070\ncpu: 337924.15458936855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 511212.96337000467,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 511198.9010989059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18964.645441781922,
            "unit": "ns/iter",
            "extra": "iterations: 37032\ncpu: 18964.15262475698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 94048.40322363249,
            "unit": "ns/iter",
            "extra": "iterations: 7445\ncpu: 94047.79046339824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74618.08516073936,
            "unit": "ns/iter",
            "extra": "iterations: 9394\ncpu: 74614.6476474345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 74184.07689856809,
            "unit": "ns/iter",
            "extra": "iterations: 9415\ncpu: 74182.58098778441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 74949.9387973439,
            "unit": "ns/iter",
            "extra": "iterations: 9346\ncpu: 74949.47571153451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 142529.17623118038,
            "unit": "ns/iter",
            "extra": "iterations: 4914\ncpu: 142525.66137566097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 621317.9164444429,
            "unit": "ns/iter",
            "extra": "iterations: 1125\ncpu: 621300.799999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 522056.19354840205,
            "unit": "ns/iter",
            "extra": "iterations: 1333\ncpu: 522027.5318829756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 527869.9029346079,
            "unit": "ns/iter",
            "extra": "iterations: 1329\ncpu: 527855.8314522142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 528201.9939070683,
            "unit": "ns/iter",
            "extra": "iterations: 1313\ncpu: 528191.7745620717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 341196.9405697619,
            "unit": "ns/iter",
            "extra": "iterations: 2036\ncpu: 341190.22593320336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 512608.0784457692,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 512604.9853372407 ns\nthreads: 1"
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
        "date": 1705956488258,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7775.273392299606,
            "unit": "ns/iter",
            "extra": "iterations: 90222\ncpu: 7775.012746336815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72921.53600344741,
            "unit": "ns/iter",
            "extra": "iterations: 11610\ncpu: 72918.94918173985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 139041.67174361885,
            "unit": "ns/iter",
            "extra": "iterations: 6303\ncpu: 139025.94002855782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 206595.8681032412,
            "unit": "ns/iter",
            "extra": "iterations: 4223\ncpu: 206587.75751835195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 270556.3702651511,
            "unit": "ns/iter",
            "extra": "iterations: 3168\ncpu: 270534.5328282829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 332483.9444658729,
            "unit": "ns/iter",
            "extra": "iterations: 2593\ncpu: 332462.70728885476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 397442.9644646651,
            "unit": "ns/iter",
            "extra": "iterations: 2195\ncpu: 397391.0706150342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 465699.91267303715,
            "unit": "ns/iter",
            "extra": "iterations: 1878\ncpu: 465674.44089456816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 531922.585365858,
            "unit": "ns/iter",
            "extra": "iterations: 1640\ncpu: 531918.1707317071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6095.632957436085,
            "unit": "ns/iter",
            "extra": "iterations: 115191\ncpu: 6095.202750214861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5084.7304734069785,
            "unit": "ns/iter",
            "extra": "iterations: 137556\ncpu: 5084.2507778650115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5081.910076719864,
            "unit": "ns/iter",
            "extra": "iterations: 137773\ncpu: 5081.462986216459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5124.796288825993,
            "unit": "ns/iter",
            "extra": "iterations: 136345\ncpu: 5124.290586380141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8950.67482253648,
            "unit": "ns/iter",
            "extra": "iterations: 78185\ncpu: 8950.317835902033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32552.643086315005,
            "unit": "ns/iter",
            "extra": "iterations: 25558\ncpu: 32551.32639486654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 133950.39173320818,
            "unit": "ns/iter",
            "extra": "iterations: 6387\ncpu: 133947.39314232042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 109167.46477258064,
            "unit": "ns/iter",
            "extra": "iterations: 7849\ncpu: 109161.98241814232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 105758.963360472,
            "unit": "ns/iter",
            "extra": "iterations: 8106\ncpu: 105751.25832716527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 104542.92315210967,
            "unit": "ns/iter",
            "extra": "iterations: 8185\ncpu: 104535.49175320724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 255770.96916299892,
            "unit": "ns/iter",
            "extra": "iterations: 3405\ncpu: 255759.1189427307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2211625.0693778982,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2211504.545454553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1801593.1023165635,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1801445.752895758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1756191.954631296,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1756037.051039698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1788161.8773946573,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1788023.7547892786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1061860.5245154612,
            "unit": "ns/iter",
            "extra": "iterations: 877\ncpu: 1061741.0490307845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1743053.2101313628,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1742955.9099437133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7177089.540000452,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7176206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4112606.385650205,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4112269.9551569433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8970911.325203763,
            "unit": "ns/iter",
            "extra": "iterations: 123\ncpu: 8970436.585365875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33285.21085090184,
            "unit": "ns/iter",
            "extra": "iterations: 24809\ncpu: 33285.279535652444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 135636.43671788674,
            "unit": "ns/iter",
            "extra": "iterations: 6313\ncpu: 135633.0429272931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 109827.07519856519,
            "unit": "ns/iter",
            "extra": "iterations: 7806\ncpu: 109825.98001537319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 108217.92829137717,
            "unit": "ns/iter",
            "extra": "iterations: 7907\ncpu: 108214.54407486996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 106567.3481241406,
            "unit": "ns/iter",
            "extra": "iterations: 8023\ncpu: 106567.46852798155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 255129.38526745234,
            "unit": "ns/iter",
            "extra": "iterations: 3421\ncpu: 255123.70651856155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2226935.4148682733,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 2226913.429256596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1813001.6705653702,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1812978.1676413259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1769816.0811321186,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1769799.8113207587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1791097.799235166,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1791100.5736137568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1055106.9954801719,
            "unit": "ns/iter",
            "extra": "iterations: 885\ncpu: 1055062.3728813552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1750160.1144465033,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1750162.6641651085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7218724.279999834,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7218434.000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4110334.0175439236,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4109954.3859649166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 31750.075419967045,
            "unit": "ns/iter",
            "extra": "iterations: 25895\ncpu: 31747.480208534605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 133389.41098455628,
            "unit": "ns/iter",
            "extra": "iterations: 6409\ncpu: 133382.89904821402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 108698.5117406847,
            "unit": "ns/iter",
            "extra": "iterations: 7836\ncpu: 108689.5227156708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 107787.94704168763,
            "unit": "ns/iter",
            "extra": "iterations: 7893\ncpu: 107780.18497402786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 105496.98871106464,
            "unit": "ns/iter",
            "extra": "iterations: 8061\ncpu: 105490.52226770854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 256094.05403817905,
            "unit": "ns/iter",
            "extra": "iterations: 3405\ncpu: 256094.2731277546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2190700.7393365004,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 2190636.966824645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1802910.0598454636,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1802794.4015443993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1769316.1015036956,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1769132.7067669183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1788989.9885277716,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1788888.3365200814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1053960.9046538274,
            "unit": "ns/iter",
            "extra": "iterations: 881\ncpu: 1053859.4778660617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1743312.9625467272,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1743211.7977528118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3078.223235442303,
            "unit": "ns/iter",
            "extra": "iterations: 228315\ncpu: 3077.919978976416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15754.225360022647,
            "unit": "ns/iter",
            "extra": "iterations: 44511\ncpu: 15753.467682146033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12895.202665287896,
            "unit": "ns/iter",
            "extra": "iterations: 54178\ncpu: 12893.726235741442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13000.807085591334,
            "unit": "ns/iter",
            "extra": "iterations: 53884\ncpu: 12999.922054784307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10507.5964980899,
            "unit": "ns/iter",
            "extra": "iterations: 66478\ncpu: 10507.179818887378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 60493.44568293064,
            "unit": "ns/iter",
            "extra": "iterations: 11663\ncpu: 60488.89651033212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 145095.46978195105,
            "unit": "ns/iter",
            "extra": "iterations: 4815\ncpu: 145084.278296989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37656.01955832288,
            "unit": "ns/iter",
            "extra": "iterations: 18611\ncpu: 37652.41523829971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37067.71651750404,
            "unit": "ns/iter",
            "extra": "iterations: 18883\ncpu: 37065.53513742516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37208.0741114557,
            "unit": "ns/iter",
            "extra": "iterations: 18823\ncpu: 37206.539871434055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 71435.93945550483,
            "unit": "ns/iter",
            "extra": "iterations: 9844\ncpu: 71430.64811052417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 67348.40878216176,
            "unit": "ns/iter",
            "extra": "iterations: 10453\ncpu: 67343.21247488767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19117.541354205103,
            "unit": "ns/iter",
            "extra": "iterations: 36671\ncpu: 19115.8054048156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 91265.37063575539,
            "unit": "ns/iter",
            "extra": "iterations: 7676\ncpu: 91255.96664929573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 74045.64343871549,
            "unit": "ns/iter",
            "extra": "iterations: 9457\ncpu: 74043.17436819257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 72614.28255681213,
            "unit": "ns/iter",
            "extra": "iterations: 9637\ncpu: 72611.23793711708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 73815.9286090254,
            "unit": "ns/iter",
            "extra": "iterations: 9497\ncpu: 73808.75013161982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 144615.47136652924,
            "unit": "ns/iter",
            "extra": "iterations: 4837\ncpu: 144605.3338846388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 613400.4452234285,
            "unit": "ns/iter",
            "extra": "iterations: 1141\ncpu: 613338.9132340107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 515802.96817172715,
            "unit": "ns/iter",
            "extra": "iterations: 1351\ncpu: 515778.75647667644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 538978.9358600872,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 538930.393586006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 511983.06652046955,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 511928.80116959265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 340972.1006809287,
            "unit": "ns/iter",
            "extra": "iterations: 2056\ncpu: 340946.3035019434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 505467.49313093594,
            "unit": "ns/iter",
            "extra": "iterations: 1383\ncpu: 505405.49530007195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19232.16070936639,
            "unit": "ns/iter",
            "extra": "iterations: 36314\ncpu: 19231.379082447893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93379.87326758206,
            "unit": "ns/iter",
            "extra": "iterations: 7504\ncpu: 93371.70842217392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77528.26404493458,
            "unit": "ns/iter",
            "extra": "iterations: 9434\ncpu: 77525.40809836797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 71949.35566744949,
            "unit": "ns/iter",
            "extra": "iterations: 9731\ncpu: 71944.50724488727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 73768.37446046837,
            "unit": "ns/iter",
            "extra": "iterations: 9499\ncpu: 73760.20633750956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 144960.59349088345,
            "unit": "ns/iter",
            "extra": "iterations: 4824\ncpu: 144952.61194029733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 612188.5113637026,
            "unit": "ns/iter",
            "extra": "iterations: 1144\ncpu: 612129.3706293727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 515913.1775976739,
            "unit": "ns/iter",
            "extra": "iterations: 1357\ncpu: 515893.14664701856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 509379.3590115837,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 509341.42441859754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 508965.37827986147,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 508944.31486880337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 340745.128167624,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 340746.2475633468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 507175.5819494929,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 507154.94584837236 ns\nthreads: 1"
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
        "date": 1705958302180,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7818.491516176428,
            "unit": "ns/iter",
            "extra": "iterations: 89818\ncpu: 7818.005299605869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 72830.90970327672,
            "unit": "ns/iter",
            "extra": "iterations: 11728\ncpu: 72829.2974079127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 139884.0852922399,
            "unit": "ns/iter",
            "extra": "iterations: 6296\ncpu: 139880.41613722997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 205134.89208294213,
            "unit": "ns/iter",
            "extra": "iterations: 4244\ncpu: 205123.3977379831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 270477.97331241396,
            "unit": "ns/iter",
            "extra": "iterations: 3185\ncpu: 270462.00941915234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 334181.06081874523,
            "unit": "ns/iter",
            "extra": "iterations: 2565\ncpu: 334167.0175438597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 400873.6984346202,
            "unit": "ns/iter",
            "extra": "iterations: 2172\ncpu: 400849.6777163901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 466852.8472222259,
            "unit": "ns/iter",
            "extra": "iterations: 1872\ncpu: 466834.8824786329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 528159.6305269301,
            "unit": "ns/iter",
            "extra": "iterations: 1651\ncpu: 528134.827377347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6077.974659022628,
            "unit": "ns/iter",
            "extra": "iterations: 115110\ncpu: 6077.803839805394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5185.325433334602,
            "unit": "ns/iter",
            "extra": "iterations: 135865\ncpu: 5185.096971258239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5134.253938845931,
            "unit": "ns/iter",
            "extra": "iterations: 136017\ncpu: 5134.220722409693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5176.216195884775,
            "unit": "ns/iter",
            "extra": "iterations: 135590\ncpu: 5176.142783391114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8881.113418855764,
            "unit": "ns/iter",
            "extra": "iterations: 78576\ncpu: 8880.953471797993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32367.95481476027,
            "unit": "ns/iter",
            "extra": "iterations: 25318\ncpu: 32366.46259578172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 131901.58854408498,
            "unit": "ns/iter",
            "extra": "iterations: 6477\ncpu: 131896.15562760553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 107459.04252108197,
            "unit": "ns/iter",
            "extra": "iterations: 7949\ncpu: 107454.7741854319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 102294.45299963684,
            "unit": "ns/iter",
            "extra": "iterations: 8351\ncpu: 102290.74362351828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 103008.19459524684,
            "unit": "ns/iter",
            "extra": "iterations: 8289\ncpu: 103004.70503076393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 251439.1315789337,
            "unit": "ns/iter",
            "extra": "iterations: 3458\ncpu: 251426.43146327347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2246380.68915661,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2246276.6265060264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1831188.1479290961,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1831103.7475345165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1791290.988304003,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1791229.4346978522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1805921.994174877,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1805913.5922330136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1050676.1704289583,
            "unit": "ns/iter",
            "extra": "iterations: 886\ncpu: 1050682.1670428885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1756893.0264649726,
            "unit": "ns/iter",
            "extra": "iterations: 529\ncpu: 1756864.839319467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7102476.720000369,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7102271.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4088335.6347827115,
            "unit": "ns/iter",
            "extra": "iterations: 230\ncpu: 4088263.043478258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8898871.999999238,
            "unit": "ns/iter",
            "extra": "iterations: 123\ncpu: 8898838.211382108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 31949.528195342104,
            "unit": "ns/iter",
            "extra": "iterations: 25678\ncpu: 31948.63307111148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 134464.82636707262,
            "unit": "ns/iter",
            "extra": "iterations: 6364\ncpu: 134462.03645506004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 109523.25476891658,
            "unit": "ns/iter",
            "extra": "iterations: 7811\ncpu: 109520.99603123762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 107252.46971214368,
            "unit": "ns/iter",
            "extra": "iterations: 7990\ncpu: 107253.09136420551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 106380.09478790645,
            "unit": "ns/iter",
            "extra": "iterations: 8039\ncpu: 106378.41771364614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 260155.02783598175,
            "unit": "ns/iter",
            "extra": "iterations: 3341\ncpu: 260151.39179886188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2270602.4009778365,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2270563.0806845897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1850894.1212724242,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1850906.3618290306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1797001.926782239,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1796938.5356454633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1810459.1453488125,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1810429.0697674416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1048977.3194132023,
            "unit": "ns/iter",
            "extra": "iterations: 886\ncpu: 1048967.832957113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1777943.2332695227,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1777934.0344168243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7173026.970000365,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7172829.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4007740.201716573,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4007531.7596566686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32649.70116496107,
            "unit": "ns/iter",
            "extra": "iterations: 25151\ncpu: 32648.26845851042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 133518.30258014117,
            "unit": "ns/iter",
            "extra": "iterations: 6395\ncpu: 133514.69898358153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 108105.8058375611,
            "unit": "ns/iter",
            "extra": "iterations: 7880\ncpu: 108099.04822335055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 104724.79598088682,
            "unit": "ns/iter",
            "extra": "iterations: 8161\ncpu: 104720.78176694029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 103570.39783770309,
            "unit": "ns/iter",
            "extra": "iterations: 8232\ncpu: 103566.10787172039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 256717.5581120757,
            "unit": "ns/iter",
            "extra": "iterations: 3390\ncpu: 256704.0412979361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2252950.2881357414,
            "unit": "ns/iter",
            "extra": "iterations: 413\ncpu: 2252809.9273607763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1837700.9801191904,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1837627.2365805157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1793105.2744722231,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1793036.8522072919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1799358.6235521913,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1799310.4247104207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1053203.2946529977,
            "unit": "ns/iter",
            "extra": "iterations: 879\ncpu: 1053154.8350398168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1770141.497153706,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1770076.6603415564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3088.316427910098,
            "unit": "ns/iter",
            "extra": "iterations: 226870\ncpu: 3088.2404019923324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15921.814698451015,
            "unit": "ns/iter",
            "extra": "iterations: 43923\ncpu: 15921.439792364032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12664.360581537036,
            "unit": "ns/iter",
            "extra": "iterations: 55233\ncpu: 12663.722774428421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12052.495671292363,
            "unit": "ns/iter",
            "extra": "iterations: 58216\ncpu: 12052.087055105107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10458.369968901681,
            "unit": "ns/iter",
            "extra": "iterations: 66884\ncpu: 10457.850906046295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 60409.94592022179,
            "unit": "ns/iter",
            "extra": "iterations: 11557\ncpu: 60410.35735917645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 145056.3581810756,
            "unit": "ns/iter",
            "extra": "iterations: 4816\ncpu: 145041.4867109634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36935.276133182015,
            "unit": "ns/iter",
            "extra": "iterations: 18951\ncpu: 36935.00606828169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37080.0134934864,
            "unit": "ns/iter",
            "extra": "iterations: 18898\ncpu: 37079.18298232599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36685.36831340499,
            "unit": "ns/iter",
            "extra": "iterations: 19068\ncpu: 36685.21606880623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 67560.63283582625,
            "unit": "ns/iter",
            "extra": "iterations: 10385\ncpu: 67558.55560905195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 66812.33495469516,
            "unit": "ns/iter",
            "extra": "iterations: 10485\ncpu: 66810.78683834049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18846.284253853617,
            "unit": "ns/iter",
            "extra": "iterations: 37171\ncpu: 18845.783002878594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 92223.64138749563,
            "unit": "ns/iter",
            "extra": "iterations: 7582\ncpu: 92222.078607228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 73025.59089486016,
            "unit": "ns/iter",
            "extra": "iterations: 9577\ncpu: 73026.09376631568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 72187.64493873416,
            "unit": "ns/iter",
            "extra": "iterations: 9711\ncpu: 72185.68633508479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 72286.88863659865,
            "unit": "ns/iter",
            "extra": "iterations: 9689\ncpu: 72285.71576013911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 140382.440392714,
            "unit": "ns/iter",
            "extra": "iterations: 4991\ncpu: 140381.54678421025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 626114.4384545867,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 626068.8230009078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 527559.6897590505,
            "unit": "ns/iter",
            "extra": "iterations: 1328\ncpu: 527556.55120482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 523493.9349776156,
            "unit": "ns/iter",
            "extra": "iterations: 1338\ncpu: 523480.11958146084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 523866.67113102885,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 523858.407738096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 337925.5077294622,
            "unit": "ns/iter",
            "extra": "iterations: 2070\ncpu: 337920.6763285064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 511241.16825161333,
            "unit": "ns/iter",
            "extra": "iterations: 1367\ncpu: 511239.0636430125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18879.944453450054,
            "unit": "ns/iter",
            "extra": "iterations: 37014\ncpu: 18879.623926082004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 88623.71399569156,
            "unit": "ns/iter",
            "extra": "iterations: 7881\ncpu: 88619.90864103552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 71748.86599098914,
            "unit": "ns/iter",
            "extra": "iterations: 9768\ncpu: 71747.48157248192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 73009.537812491,
            "unit": "ns/iter",
            "extra": "iterations: 9600\ncpu: 73008.93749999945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 73172.08864954386,
            "unit": "ns/iter",
            "extra": "iterations: 9656\ncpu: 73171.24067937036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 139431.5392117897,
            "unit": "ns/iter",
            "extra": "iterations: 5024\ncpu: 139430.65286624216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 623352.4861976384,
            "unit": "ns/iter",
            "extra": "iterations: 1123\ncpu: 623336.5983971499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 525907.3947368257,
            "unit": "ns/iter",
            "extra": "iterations: 1330\ncpu: 525896.842105263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 520431.00597906957,
            "unit": "ns/iter",
            "extra": "iterations: 1338\ncpu: 520417.48878923606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 520068.08302446257,
            "unit": "ns/iter",
            "extra": "iterations: 1349\ncpu: 520057.0051890288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 341636.4646169041,
            "unit": "ns/iter",
            "extra": "iterations: 2049\ncpu: 341634.8462664663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 512477.27266082907,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 512461.98830409365 ns\nthreads: 1"
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
        "date": 1705959841372,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7791.663305665703,
            "unit": "ns/iter",
            "extra": "iterations: 89755\ncpu: 7791.116929418975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71100.06775818806,
            "unit": "ns/iter",
            "extra": "iterations: 11910\ncpu: 71098.09403862299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 136837.24500935918,
            "unit": "ns/iter",
            "extra": "iterations: 6412\ncpu: 136831.73736743606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 200131.03891941978,
            "unit": "ns/iter",
            "extra": "iterations: 4368\ncpu: 200121.90934065933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 266203.8572761268,
            "unit": "ns/iter",
            "extra": "iterations: 3216\ncpu: 266196.3308457711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 326763.1997721228,
            "unit": "ns/iter",
            "extra": "iterations: 2633\ncpu: 326744.4360045575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 391482.0731926218,
            "unit": "ns/iter",
            "extra": "iterations: 2227\ncpu: 391470.5433318365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 454998.5550913843,
            "unit": "ns/iter",
            "extra": "iterations: 1915\ncpu: 454973.3159268931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 518796.47647409874,
            "unit": "ns/iter",
            "extra": "iterations: 1679\ncpu: 518765.3365098266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5965.374541965886,
            "unit": "ns/iter",
            "extra": "iterations: 115712\ncpu: 5965.403761061948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4991.788153072376,
            "unit": "ns/iter",
            "extra": "iterations: 141083\ncpu: 4991.597144943049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5043.543463519284,
            "unit": "ns/iter",
            "extra": "iterations: 138622\ncpu: 5043.523394554973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5016.5262600000915,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5016.362999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8841.108139119677,
            "unit": "ns/iter",
            "extra": "iterations: 78436\ncpu: 8840.606354225092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31818.405266865786,
            "unit": "ns/iter",
            "extra": "iterations: 25556\ncpu: 31816.567537955852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 131338.53408917418,
            "unit": "ns/iter",
            "extra": "iterations: 6527\ncpu: 131330.05975180026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 107100.32696656935,
            "unit": "ns/iter",
            "extra": "iterations: 7958\ncpu: 107098.61774315138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 100000.4194920207,
            "unit": "ns/iter",
            "extra": "iterations: 8465\ncpu: 99998.38157117569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 102207.85042377205,
            "unit": "ns/iter",
            "extra": "iterations: 8377\ncpu: 102205.19278978163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 255409.15075825347,
            "unit": "ns/iter",
            "extra": "iterations: 3363\ncpu: 255405.82812964573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2154695.89510505,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2154543.123543118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1754576.7632577391,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1754499.053030301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1736338.4154136018,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1736268.9849624056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1746786.85849049,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1746708.867924528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1030018.787541702,
            "unit": "ns/iter",
            "extra": "iterations: 899\ncpu: 1029974.0823136828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1701599.8354662033,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1701461.974405853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7021212.289999994,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7020677.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3948299.110638413,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3947966.8085106374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8663164.040000085,
            "unit": "ns/iter",
            "extra": "iterations: 125\ncpu: 8662524.8 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 32417.23173326924,
            "unit": "ns/iter",
            "extra": "iterations: 25374\ncpu: 32416.934657523452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 132722.48104008398,
            "unit": "ns/iter",
            "extra": "iterations: 6461\ncpu: 132721.7458597743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 110366.14027615821,
            "unit": "ns/iter",
            "extra": "iterations: 7749\ncpu: 110359.46573751424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 104928.38071191125,
            "unit": "ns/iter",
            "extra": "iterations: 8119\ncpu: 104922.30570267292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 104767.31896020549,
            "unit": "ns/iter",
            "extra": "iterations: 8117\ncpu: 104760.74904521316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 256905.51082764348,
            "unit": "ns/iter",
            "extra": "iterations: 3371\ncpu: 256893.0287748455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2179100.611764732,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2179075.2941176514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1780184.4255726452,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1780087.40458015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1756363.0566038003,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1756262.6415094375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1756590.7349624664,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1756490.7894736957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1035026.0524554551,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 1034979.5758928566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1720283.5738008597,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1720158.8560885561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7059402.779999573,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7059446.000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3959486.0506329164,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3959204.641350227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 31672.97290526452,
            "unit": "ns/iter",
            "extra": "iterations: 25946\ncpu: 31671.69120481007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 130682.57173414707,
            "unit": "ns/iter",
            "extra": "iterations: 6545\ncpu: 130673.44537815168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 107236.93147081409,
            "unit": "ns/iter",
            "extra": "iterations: 7982\ncpu: 107230.81934352359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 103158.83994644381,
            "unit": "ns/iter",
            "extra": "iterations: 8216\ncpu: 103152.54381694226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 104688.38036283758,
            "unit": "ns/iter",
            "extra": "iterations: 8158\ncpu: 104683.64795292965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 259795.36804092993,
            "unit": "ns/iter",
            "extra": "iterations: 3323\ncpu: 259772.64520012072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2162983.1967591904,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2162954.6296296394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1766429.4231498903,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1766397.7229601566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1741744.5408922872,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1741700.7434944268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1732966.0464685112,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1732963.3828996299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1028870.2375690575,
            "unit": "ns/iter",
            "extra": "iterations: 905\ncpu: 1028845.6353591146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1701784.978142052,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1701769.763205833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3094.59452594319,
            "unit": "ns/iter",
            "extra": "iterations: 225975\ncpu: 3094.5856842570915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16172.411131640036,
            "unit": "ns/iter",
            "extra": "iterations: 43300\ncpu: 16172.193995380969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12508.80640431935,
            "unit": "ns/iter",
            "extra": "iterations: 55931\ncpu: 12508.086749745318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12450.718162097808,
            "unit": "ns/iter",
            "extra": "iterations: 56238\ncpu: 12450.535225292526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10290.770267097923,
            "unit": "ns/iter",
            "extra": "iterations: 68140\ncpu: 10290.594364543567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 61394.036014728415,
            "unit": "ns/iter",
            "extra": "iterations: 11412\ncpu: 61393.0161233791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 140313.45616849384,
            "unit": "ns/iter",
            "extra": "iterations: 4985\ncpu: 140306.3991975923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36388.30178069401,
            "unit": "ns/iter",
            "extra": "iterations: 19206\ncpu: 36388.18077684065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 36887.06774482493,
            "unit": "ns/iter",
            "extra": "iterations: 18983\ncpu: 36885.92951588283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36680.533431222335,
            "unit": "ns/iter",
            "extra": "iterations: 19069\ncpu: 36679.81016309207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 72369.5998348134,
            "unit": "ns/iter",
            "extra": "iterations: 9686\ncpu: 72368.149907083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65255.53178264564,
            "unit": "ns/iter",
            "extra": "iterations: 10619\ncpu: 65255.287691872865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 18566.637311335337,
            "unit": "ns/iter",
            "extra": "iterations: 37699\ncpu: 18565.98848775858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 86656.48758800465,
            "unit": "ns/iter",
            "extra": "iterations: 8097\ncpu: 86653.9706063966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 69994.21770812442,
            "unit": "ns/iter",
            "extra": "iterations: 10018\ncpu: 69991.75484128628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 71139.53216020264,
            "unit": "ns/iter",
            "extra": "iterations: 9888\ncpu: 71136.92354368961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 70993.43025499486,
            "unit": "ns/iter",
            "extra": "iterations: 9843\ncpu: 70992.56324291343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 140116.06650640647,
            "unit": "ns/iter",
            "extra": "iterations: 4992\ncpu: 140112.29967948486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 602131.66781409,
            "unit": "ns/iter",
            "extra": "iterations: 1162\ncpu: 602070.8261617894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 507429.1591895924,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 507401.5195369058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 506743.4606498273,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 506726.7870036107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 502912.82733815676,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 502870.71942445415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 326897.30564630457,
            "unit": "ns/iter",
            "extra": "iterations: 2143\ncpu: 326874.0083994398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 492667.1002117354,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 492648.2004234285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 18918.519372493993,
            "unit": "ns/iter",
            "extra": "iterations: 36908\ncpu: 18917.844369784434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 88705.4974836483,
            "unit": "ns/iter",
            "extra": "iterations: 7948\ncpu: 88697.48364368436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 70685.5122615815,
            "unit": "ns/iter",
            "extra": "iterations: 9909\ncpu: 70679.03925724102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 72701.49180667382,
            "unit": "ns/iter",
            "extra": "iterations: 9642\ncpu: 72697.51088985677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 70848.10564662532,
            "unit": "ns/iter",
            "extra": "iterations: 9882\ncpu: 70846.37725156872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 138667.75079178443,
            "unit": "ns/iter",
            "extra": "iterations: 5052\ncpu: 138662.66825019778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 600463.0231163605,
            "unit": "ns/iter",
            "extra": "iterations: 1168\ncpu: 600423.5445205525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 505861.97548667074,
            "unit": "ns/iter",
            "extra": "iterations: 1387\ncpu: 505818.0966113866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 502871.4190000301,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502875.1000000113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 497775.35750172613,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 497746.94903087494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 327468.33286446816,
            "unit": "ns/iter",
            "extra": "iterations: 2133\ncpu: 327440.2719174852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 492545.4199860199,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 492543.11670160154 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}