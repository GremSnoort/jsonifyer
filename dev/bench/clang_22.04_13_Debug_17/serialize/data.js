window.BENCHMARK_DATA = {
  "lastUpdate": 1705773269169,
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
      }
    ]
  }
}