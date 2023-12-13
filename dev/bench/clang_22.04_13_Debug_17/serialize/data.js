window.BENCHMARK_DATA = {
  "lastUpdate": 1702489597473,
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
      }
    ]
  }
}