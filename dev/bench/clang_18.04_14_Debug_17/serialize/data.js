window.BENCHMARK_DATA = {
  "lastUpdate": 1705961267535,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-14 18.04 Debug c++-17": [
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
        "date": 1702489614386,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8661.151996724779,
            "unit": "ns/iter",
            "extra": "iterations: 80607\ncpu: 8660.762712915754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 78753.40333487776,
            "unit": "ns/iter",
            "extra": "iterations: 10795\ncpu: 78751.05141269106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 151711.64791163272,
            "unit": "ns/iter",
            "extra": "iterations: 5794\ncpu: 151707.40421125302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 224151.24903723263,
            "unit": "ns/iter",
            "extra": "iterations: 3895\ncpu: 224137.71501925547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 296698.42476062104,
            "unit": "ns/iter",
            "extra": "iterations: 2924\ncpu: 296675.82079343364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 363519.90955195314,
            "unit": "ns/iter",
            "extra": "iterations: 2366\ncpu: 363504.6491969567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 436128.4397801378,
            "unit": "ns/iter",
            "extra": "iterations: 2001\ncpu: 436093.50324837543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 506556.0075713188,
            "unit": "ns/iter",
            "extra": "iterations: 1717\ncpu: 506527.2568433314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 577825.2607544832,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 577784.513567175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6541.313316613664,
            "unit": "ns/iter",
            "extra": "iterations: 106461\ncpu: 6540.792402851748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5536.339048733898,
            "unit": "ns/iter",
            "extra": "iterations: 126442\ncpu: 5535.883646256788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5469.307481937393,
            "unit": "ns/iter",
            "extra": "iterations: 127614\ncpu: 5468.943062673381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5505.28403601217,
            "unit": "ns/iter",
            "extra": "iterations: 127512\ncpu: 5505.159514398649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9339.462282140175,
            "unit": "ns/iter",
            "extra": "iterations: 74991\ncpu: 9339.01134802841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 34448.87474974896,
            "unit": "ns/iter",
            "extra": "iterations: 23976\ncpu: 34446.67167167167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 137591.39803162497,
            "unit": "ns/iter",
            "extra": "iterations: 6198\ncpu: 137582.55888996442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 109825.7546028076,
            "unit": "ns/iter",
            "extra": "iterations: 7767\ncpu: 109819.33822582732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 107291.24701745242,
            "unit": "ns/iter",
            "extra": "iterations: 7963\ncpu: 107284.27728243126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 110675.10566775658,
            "unit": "ns/iter",
            "extra": "iterations: 7675\ncpu: 110666.29315960944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 287710.5540540532,
            "unit": "ns/iter",
            "extra": "iterations: 3034\ncpu: 287695.682267634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2372299.6862246348,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2372152.2959183706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1941052.1002087432,
            "unit": "ns/iter",
            "extra": "iterations: 479\ncpu: 1940989.770354908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1901934.8752556732,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1901819.0184049036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1912039.8747432695,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1911911.9096509228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1111496.5757212595,
            "unit": "ns/iter",
            "extra": "iterations: 832\ncpu: 1111431.9711538458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1863356.1503007852,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1863253.707414832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7524826.100000155,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7524099.999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4241597.823529055,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4233618.099547504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9465976.587719388,
            "unit": "ns/iter",
            "extra": "iterations: 114\ncpu: 9465345.614035077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 32191.678368752164,
            "unit": "ns/iter",
            "extra": "iterations: 25551\ncpu: 32189.7303432351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 140215.71137743574,
            "unit": "ns/iter",
            "extra": "iterations: 6091\ncpu: 140206.43572484006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 111141.32695063906,
            "unit": "ns/iter",
            "extra": "iterations: 7677\ncpu: 111134.93552168865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 110223.45874758606,
            "unit": "ns/iter",
            "extra": "iterations: 7745\ncpu: 110217.93415106552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 110547.86767953227,
            "unit": "ns/iter",
            "extra": "iterations: 7701\ncpu: 110541.18945591444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 289940.4883566325,
            "unit": "ns/iter",
            "extra": "iterations: 3006\ncpu: 289916.5668662672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2382074.295629726,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2381900.000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1952797.1983123815,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1952624.0506329108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1907790.7597536817,
            "unit": "ns/iter",
            "extra": "iterations: 487\ncpu: 1907733.0595482523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1923678.7556935116,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1923667.2877846826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1127443.6626360083,
            "unit": "ns/iter",
            "extra": "iterations: 827\ncpu: 1127425.9975816153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1883411.5494949613,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1883363.232323244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7624853.809999194,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7624452.999999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4305849.981566844,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4305701.382488487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32178.65404339005,
            "unit": "ns/iter",
            "extra": "iterations: 25350\ncpu: 32177.95266272195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 135897.1231918642,
            "unit": "ns/iter",
            "extra": "iterations: 6291\ncpu: 135893.41917024224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 109598.64265501087,
            "unit": "ns/iter",
            "extra": "iterations: 7774\ncpu: 109594.67455621343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 107738.4570812658,
            "unit": "ns/iter",
            "extra": "iterations: 7887\ncpu: 107734.67731710445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 108544.20835997094,
            "unit": "ns/iter",
            "extra": "iterations: 7823\ncpu: 108543.46158762657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 285077.6059307976,
            "unit": "ns/iter",
            "extra": "iterations: 3035\ncpu: 285072.6194398674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2356313.389873609,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2356248.60759494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1954233.5168068327,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1954169.9579831944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1919839.9896693404,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1919810.743801655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1907795.2592592288,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1907739.5061728451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1116769.1171498273,
            "unit": "ns/iter",
            "extra": "iterations: 828\ncpu: 1116743.236714976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1869312.6740441709,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1869247.8873239427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3316.8567766347314,
            "unit": "ns/iter",
            "extra": "iterations: 211425\ncpu: 3316.8125812936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16805.762188815177,
            "unit": "ns/iter",
            "extra": "iterations: 41575\ncpu: 16805.140108238134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13163.947384269122,
            "unit": "ns/iter",
            "extra": "iterations: 53140\ncpu: 13163.52277004138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13320.867074906924,
            "unit": "ns/iter",
            "extra": "iterations: 54053\ncpu: 13320.346696760529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10939.073923448666,
            "unit": "ns/iter",
            "extra": "iterations: 63931\ncpu: 10938.998295036807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 66883.380369272,
            "unit": "ns/iter",
            "extra": "iterations: 10453\ncpu: 66882.3782646134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 153808.42227581015,
            "unit": "ns/iter",
            "extra": "iterations: 4561\ncpu: 153801.57860118445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39520.782102708494,
            "unit": "ns/iter",
            "extra": "iterations: 17701\ncpu: 39519.41698209127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38963.95777468651,
            "unit": "ns/iter",
            "extra": "iterations: 17975\ncpu: 38963.64951321262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39317.164078330316,
            "unit": "ns/iter",
            "extra": "iterations: 17772\ncpu: 39316.39095205948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 75908.32188515588,
            "unit": "ns/iter",
            "extra": "iterations: 9230\ncpu: 75906.02383531956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 71008.94235258311,
            "unit": "ns/iter",
            "extra": "iterations: 9853\ncpu: 71007.63219324018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21753.752586928436,
            "unit": "ns/iter",
            "extra": "iterations: 32181\ncpu: 21752.720549392798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 106328.21116689585,
            "unit": "ns/iter",
            "extra": "iterations: 6573\ncpu: 106326.53278563869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 86423.01613897235,
            "unit": "ns/iter",
            "extra": "iterations: 8117\ncpu: 86419.29284218351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 85589.35381045449,
            "unit": "ns/iter",
            "extra": "iterations: 8188\ncpu: 85587.79921836787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 86363.62976675284,
            "unit": "ns/iter",
            "extra": "iterations: 8103\ncpu: 86362.19918548755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 153959.61249998194,
            "unit": "ns/iter",
            "extra": "iterations: 4560\ncpu: 153955.19736842022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 673398.1851494116,
            "unit": "ns/iter",
            "extra": "iterations: 1037\ncpu: 673387.6567020209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 569940.6745129459,
            "unit": "ns/iter",
            "extra": "iterations: 1232\ncpu: 569908.3603896091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 559821.0127795582,
            "unit": "ns/iter",
            "extra": "iterations: 1252\ncpu: 559811.7412140563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 568075.0097166207,
            "unit": "ns/iter",
            "extra": "iterations: 1235\ncpu: 568071.4170040461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 364323.04356954474,
            "unit": "ns/iter",
            "extra": "iterations: 1905\ncpu: 364311.70603674935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 553851.4572784251,
            "unit": "ns/iter",
            "extra": "iterations: 1264\ncpu: 553843.4335442979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21499.72964480679,
            "unit": "ns/iter",
            "extra": "iterations: 32461\ncpu: 21498.687655956473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 108039.86616240432,
            "unit": "ns/iter",
            "extra": "iterations: 6478\ncpu: 108036.64711330488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 86105.7805237873,
            "unit": "ns/iter",
            "extra": "iterations: 8133\ncpu: 86102.87716709805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 84173.53715524838,
            "unit": "ns/iter",
            "extra": "iterations: 8303\ncpu: 84173.03384318894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 85245.9943868318,
            "unit": "ns/iter",
            "extra": "iterations: 8195\ncpu: 85244.77120195192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 152069.74261510983,
            "unit": "ns/iter",
            "extra": "iterations: 4604\ncpu: 152062.94526498887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 673086.5216138124,
            "unit": "ns/iter",
            "extra": "iterations: 1041\ncpu: 673074.4476464948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 570072.3846780845,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 570055.9087204562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 558968.6201116827,
            "unit": "ns/iter",
            "extra": "iterations: 1253\ncpu: 558964.9640861902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 565244.2166532007,
            "unit": "ns/iter",
            "extra": "iterations: 1237\ncpu: 565235.8124494759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 364399.2175052774,
            "unit": "ns/iter",
            "extra": "iterations: 1908\ncpu: 364383.2285115268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 554837.9524941025,
            "unit": "ns/iter",
            "extra": "iterations: 1263\ncpu: 554828.0285035645 ns\nthreads: 1"
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
        "date": 1702492187022,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8319.638739412096,
            "unit": "ns/iter",
            "extra": "iterations: 84183\ncpu: 8319.471864865829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 76218.10973530657,
            "unit": "ns/iter",
            "extra": "iterations: 11145\ncpu: 76212.31942575147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 146153.3569527627,
            "unit": "ns/iter",
            "extra": "iterations: 6012\ncpu: 146140.76846307385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 215874.36077360698,
            "unit": "ns/iter",
            "extra": "iterations: 4033\ncpu: 215860.99677659315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 285878.31723454996,
            "unit": "ns/iter",
            "extra": "iterations: 3023\ncpu: 285868.805822031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 351511.5903908896,
            "unit": "ns/iter",
            "extra": "iterations: 2456\ncpu: 351484.4869706844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 420129.32154961,
            "unit": "ns/iter",
            "extra": "iterations: 2065\ncpu: 420096.27118644107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 487219.3351986459,
            "unit": "ns/iter",
            "extra": "iterations: 1787\ncpu: 487183.60380525986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 558276.2175866741,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 558255.1989730425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6586.424981864126,
            "unit": "ns/iter",
            "extra": "iterations: 106141\ncpu: 6586.274860798362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5499.626465595429,
            "unit": "ns/iter",
            "extra": "iterations: 127252\ncpu: 5499.247163109426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5403.4342611954835,
            "unit": "ns/iter",
            "extra": "iterations: 129581\ncpu: 5402.843781109875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5488.369624627152,
            "unit": "ns/iter",
            "extra": "iterations: 127340\ncpu: 5488.204020731897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9112.72398725627,
            "unit": "ns/iter",
            "extra": "iterations: 76895\ncpu: 9112.51316730606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35906.07732719864,
            "unit": "ns/iter",
            "extra": "iterations: 23032\ncpu: 35904.19416464048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 137452.20038566706,
            "unit": "ns/iter",
            "extra": "iterations: 6223\ncpu: 137447.1155391292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 111259.18215901803,
            "unit": "ns/iter",
            "extra": "iterations: 7735\ncpu: 111253.6393018745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 108262.96000507748,
            "unit": "ns/iter",
            "extra": "iterations: 7876\ncpu: 108259.54799390526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 111327.8493435529,
            "unit": "ns/iter",
            "extra": "iterations: 7693\ncpu: 111324.13882750543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 296976.50377229607,
            "unit": "ns/iter",
            "extra": "iterations: 2916\ncpu: 296970.5418381337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2313450.9349998212,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2313332.250000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1878674.4065040252,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1878475.40650406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1845262.972111582,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1845156.1752988077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1896010.6206186162,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1895867.4226804099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1098868.1326899794,
            "unit": "ns/iter",
            "extra": "iterations: 829\ncpu: 1098806.7551266586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1823544.0178927034,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1823398.6083499007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7392724.229999886,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7392429.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4126937.1666666097,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4126586.403508769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9352270.085469948,
            "unit": "ns/iter",
            "extra": "iterations: 117\ncpu: 9351835.042735044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33114.97143201496,
            "unit": "ns/iter",
            "extra": "iterations: 24888\ncpu: 33113.06653809059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 142834.98308237788,
            "unit": "ns/iter",
            "extra": "iterations: 5911\ncpu: 142827.40653019786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 113000.28266349254,
            "unit": "ns/iter",
            "extra": "iterations: 7539\ncpu: 112993.08926913422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 110447.30886534661,
            "unit": "ns/iter",
            "extra": "iterations: 7738\ncpu: 110441.34143189513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 110595.60132416424,
            "unit": "ns/iter",
            "extra": "iterations: 7703\ncpu: 110588.9393742699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 297912.83057851304,
            "unit": "ns/iter",
            "extra": "iterations: 2904\ncpu: 297898.2093663908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2331022.3333333638,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2330879.44862156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1894572.3291926603,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1894460.4554865428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1860803.959919974,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1860688.5771543083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1913941.080246848,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1913922.427983546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1109009.972455153,
            "unit": "ns/iter",
            "extra": "iterations: 835\ncpu: 1108978.3233532864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1834196.8063241923,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1834054.1501976182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7484511.760000032,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7484217.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4136563.3656385057,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4136287.224669595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33247.2741870084,
            "unit": "ns/iter",
            "extra": "iterations: 24662\ncpu: 33245.491038845204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 141951.01261115418,
            "unit": "ns/iter",
            "extra": "iterations: 6185\ncpu: 141940.09700889332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 113001.67736841989,
            "unit": "ns/iter",
            "extra": "iterations: 7600\ncpu: 112994.1842105269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 109501.2068568466,
            "unit": "ns/iter",
            "extra": "iterations: 7817\ncpu: 109492.18370218792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 109103.20058847303,
            "unit": "ns/iter",
            "extra": "iterations: 7817\ncpu: 109095.12600741946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 299118.957931067,
            "unit": "ns/iter",
            "extra": "iterations: 2900\ncpu: 299092.72413793183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2327541.5649999334,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2327411.2500000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1888722.5344128674,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1888551.4170040418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1850447.8366533266,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1850342.0318725137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1907547.5041153622,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1907408.847736627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1103583.8668252714,
            "unit": "ns/iter",
            "extra": "iterations: 841\ncpu: 1103523.6623067767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1835586.1948819663,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1835455.7086614184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3243.433695511125,
            "unit": "ns/iter",
            "extra": "iterations: 215732\ncpu: 3243.3204160718014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16930.16777842335,
            "unit": "ns/iter",
            "extra": "iterations: 41376\ncpu: 16928.615622583213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12998.743849681807,
            "unit": "ns/iter",
            "extra": "iterations: 53859\ncpu: 12997.933493009525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12818.340034789293,
            "unit": "ns/iter",
            "extra": "iterations: 54615\ncpu: 12817.379840703139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10571.98485991994,
            "unit": "ns/iter",
            "extra": "iterations: 66248\ncpu: 10571.137241879029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 67189.06512259053,
            "unit": "ns/iter",
            "extra": "iterations: 10319\ncpu: 67186.22928578377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 150599.9569224259,
            "unit": "ns/iter",
            "extra": "iterations: 4666\ncpu: 150593.46335190773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38611.32476364158,
            "unit": "ns/iter",
            "extra": "iterations: 18087\ncpu: 38610.63194559609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37869.15526301824,
            "unit": "ns/iter",
            "extra": "iterations: 18459\ncpu: 37867.17048594199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38622.526594865325,
            "unit": "ns/iter",
            "extra": "iterations: 18105\ncpu: 38618.98922949438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 77581.0417457297,
            "unit": "ns/iter",
            "extra": "iterations: 8959\ncpu: 77580.2768166079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 69928.57327199126,
            "unit": "ns/iter",
            "extra": "iterations: 9997\ncpu: 69926.97809342832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21203.387523457237,
            "unit": "ns/iter",
            "extra": "iterations: 33038\ncpu: 21201.628427870928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 102228.6657410158,
            "unit": "ns/iter",
            "extra": "iterations: 6842\ncpu: 102221.03186202917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 82430.13578649682,
            "unit": "ns/iter",
            "extra": "iterations: 8506\ncpu: 82421.94921232027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 80057.66570968751,
            "unit": "ns/iter",
            "extra": "iterations: 8708\ncpu: 80053.37620578839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 82693.14719980581,
            "unit": "ns/iter",
            "extra": "iterations: 8553\ncpu: 82692.52893721488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 148505.3693387329,
            "unit": "ns/iter",
            "extra": "iterations: 4703\ncpu: 148500.1913672109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 667723.9229305985,
            "unit": "ns/iter",
            "extra": "iterations: 1051\ncpu: 667679.448144614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 559078.7453963681,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 559014.1713370656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 543036.597049627,
            "unit": "ns/iter",
            "extra": "iterations: 1288\ncpu: 542987.8105590087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 556144.2416000318,
            "unit": "ns/iter",
            "extra": "iterations: 1250\ncpu: 556140.0000000049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 361201.563796694,
            "unit": "ns/iter",
            "extra": "iterations: 1928\ncpu: 361198.8589211597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 542554.0626450214,
            "unit": "ns/iter",
            "extra": "iterations: 1293\ncpu: 542512.2969837555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21413.519778507292,
            "unit": "ns/iter",
            "extra": "iterations: 32687\ncpu: 21411.77532352291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 103711.59250482322,
            "unit": "ns/iter",
            "extra": "iterations: 6751\ncpu: 103705.03629092066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 82805.01818612272,
            "unit": "ns/iter",
            "extra": "iterations: 8468\ncpu: 82798.01606046359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 80040.427950101,
            "unit": "ns/iter",
            "extra": "iterations: 8737\ncpu: 80036.06501087263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81675.78334690056,
            "unit": "ns/iter",
            "extra": "iterations: 8599\ncpu: 81670.13606233259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 148237.7001901401,
            "unit": "ns/iter",
            "extra": "iterations: 4733\ncpu: 148225.26938516792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 667677.2535612091,
            "unit": "ns/iter",
            "extra": "iterations: 1053\ncpu: 667633.9981006581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 558397.3186900859,
            "unit": "ns/iter",
            "extra": "iterations: 1252\ncpu: 558346.4057508014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 542234.6772691589,
            "unit": "ns/iter",
            "extra": "iterations: 1289\ncpu: 542231.885182306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 554905.1051384199,
            "unit": "ns/iter",
            "extra": "iterations: 1265\ncpu: 554881.581027672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 359388.48327333527,
            "unit": "ns/iter",
            "extra": "iterations: 1943\ncpu: 359375.7591353553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 539601.688613548,
            "unit": "ns/iter",
            "extra": "iterations: 1291\ncpu: 539563.8264910895 ns\nthreads: 1"
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
        "date": 1702503285173,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 9070.880259824531,
            "unit": "ns/iter",
            "extra": "iterations: 76975\ncpu: 9070.433257551153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 78516.82298828925,
            "unit": "ns/iter",
            "extra": "iterations: 10762\ncpu: 78505.98401784054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 150516.34374463555,
            "unit": "ns/iter",
            "extra": "iterations: 5827\ncpu: 150505.25141582292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 221483.75961293286,
            "unit": "ns/iter",
            "extra": "iterations: 3927\ncpu: 221459.58747135213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 293340.0395136731,
            "unit": "ns/iter",
            "extra": "iterations: 2961\ncpu: 293337.35224586294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 359376.26998747984,
            "unit": "ns/iter",
            "extra": "iterations: 2389\ncpu: 359346.63038928434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 430585.0921704332,
            "unit": "ns/iter",
            "extra": "iterations: 2018\ncpu: 430544.74727452896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 498982.4183381215,
            "unit": "ns/iter",
            "extra": "iterations: 1745\ncpu: 498941.60458452784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 570147.1286740039,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 570080.3396472892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6476.7442552166585,
            "unit": "ns/iter",
            "extra": "iterations: 107924\ncpu: 6476.484377895557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5508.360276662761,
            "unit": "ns/iter",
            "extra": "iterations: 126797\ncpu: 5507.523837314757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5368.770881466349,
            "unit": "ns/iter",
            "extra": "iterations: 130714\ncpu: 5368.346160319487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5448.032861586561,
            "unit": "ns/iter",
            "extra": "iterations: 128600\ncpu: 5447.586314152398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9320.864992066538,
            "unit": "ns/iter",
            "extra": "iterations: 75003\ncpu: 9320.537845152867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35465.64945012729,
            "unit": "ns/iter",
            "extra": "iterations: 23369\ncpu: 35463.241901664616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 138144.1183021352,
            "unit": "ns/iter",
            "extra": "iterations: 6196\ncpu: 138130.487411233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 112193.648549291,
            "unit": "ns/iter",
            "extra": "iterations: 7617\ncpu: 112192.55612445845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 109826.07208705819,
            "unit": "ns/iter",
            "extra": "iterations: 7810\ncpu: 109810.14084507042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 111890.69437877205,
            "unit": "ns/iter",
            "extra": "iterations: 7614\ncpu: 111886.7743630153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 327429.7205108907,
            "unit": "ns/iter",
            "extra": "iterations: 2662\ncpu: 327408.7903831704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2322834.725000007,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2322715.250000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1891704.833671323,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1891648.4787018278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1873626.0401606543,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1873560.2409638518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1884675.8461538379,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1884605.8704453427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1106276.4820143385,
            "unit": "ns/iter",
            "extra": "iterations: 834\ncpu: 1106229.9760191846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1831254.043306949,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1831149.8031496068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7458338.170000616,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7457907.000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4153827.4044448067,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4153572.4444444594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9366156.550848022,
            "unit": "ns/iter",
            "extra": "iterations: 118\ncpu: 9365632.203389853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 35310.99201716666,
            "unit": "ns/iter",
            "extra": "iterations: 23300\ncpu: 35309.278969957035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 144737.3441295681,
            "unit": "ns/iter",
            "extra": "iterations: 5928\ncpu: 144731.0391363023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 112298.30131406755,
            "unit": "ns/iter",
            "extra": "iterations: 7610\ncpu: 112295.45335085387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 111895.89044318657,
            "unit": "ns/iter",
            "extra": "iterations: 7649\ncpu: 111889.423454046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 111135.6420269025,
            "unit": "ns/iter",
            "extra": "iterations: 7657\ncpu: 111131.44834791648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 330109.80493355874,
            "unit": "ns/iter",
            "extra": "iterations: 2635\ncpu: 330102.6185958261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2351465.0301508345,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2351379.3969849185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1916776.6645962186,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1916699.9999999937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1897262.5040649797,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1897181.300813016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1909652.366459753,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1909601.863354037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1108661.7753882685,
            "unit": "ns/iter",
            "extra": "iterations: 837\ncpu: 1108580.406212666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1851597.567728987,
            "unit": "ns/iter",
            "extra": "iterations: 502\ncpu: 1851530.478087642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7496244.420000267,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7495923.999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4155602.462222103,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4155397.333333326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33264.18154427061,
            "unit": "ns/iter",
            "extra": "iterations: 24892\ncpu: 33262.72296320087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 138986.44710286235,
            "unit": "ns/iter",
            "extra": "iterations: 6144\ncpu: 138980.59895833352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 112412.93988712196,
            "unit": "ns/iter",
            "extra": "iterations: 7619\ncpu: 112407.08754429696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 110146.39415022712,
            "unit": "ns/iter",
            "extra": "iterations: 7761\ncpu: 110140.35562427474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 110073.8810873396,
            "unit": "ns/iter",
            "extra": "iterations: 7762\ncpu: 110068.46173666566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 326571.52422078117,
            "unit": "ns/iter",
            "extra": "iterations: 2663\ncpu: 326554.07435223425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2330425.648241185,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2330295.728643211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1902532.252545662,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1902457.2301425633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1878041.9555554031,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1877951.515151516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1899520.3760162317,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1899482.520325198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1094184.8911242764,
            "unit": "ns/iter",
            "extra": "iterations: 845\ncpu: 1094148.7573964486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1839134.2292489293,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1839086.363636365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3245.025442441582,
            "unit": "ns/iter",
            "extra": "iterations: 216017\ncpu: 3244.947388400005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17152.468441306428,
            "unit": "ns/iter",
            "extra": "iterations: 40797\ncpu: 17152.04304238063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13473.458118307837,
            "unit": "ns/iter",
            "extra": "iterations: 51932\ncpu: 13473.07825618123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12508.09274286985,
            "unit": "ns/iter",
            "extra": "iterations: 56069\ncpu: 12507.287449392707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10863.977101729166,
            "unit": "ns/iter",
            "extra": "iterations: 64328\ncpu: 10863.243066782781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 74108.98529255643,
            "unit": "ns/iter",
            "extra": "iterations: 9451\ncpu: 74105.51264416457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 151036.64131840767,
            "unit": "ns/iter",
            "extra": "iterations: 4642\ncpu: 151031.08573890565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38824.417133660216,
            "unit": "ns/iter",
            "extra": "iterations: 18023\ncpu: 38822.99284247913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38100.83631713559,
            "unit": "ns/iter",
            "extra": "iterations: 18377\ncpu: 38098.862708821296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38629.513796907406,
            "unit": "ns/iter",
            "extra": "iterations: 18120\ncpu: 38628.040838852445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 78015.0061342877,
            "unit": "ns/iter",
            "extra": "iterations: 8966\ncpu: 78010.81864822633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 69831.32915672613,
            "unit": "ns/iter",
            "extra": "iterations: 10056\ncpu: 69824.68178202065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21096.90779949595,
            "unit": "ns/iter",
            "extra": "iterations: 33156\ncpu: 21095.234648329293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 104433.10010428511,
            "unit": "ns/iter",
            "extra": "iterations: 6713\ncpu: 104429.70356025756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 83822.52588881389,
            "unit": "ns/iter",
            "extra": "iterations: 8382\ncpu: 83816.73824862838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 82131.1974223759,
            "unit": "ns/iter",
            "extra": "iterations: 8535\ncpu: 82122.31985940381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 83469.67434092046,
            "unit": "ns/iter",
            "extra": "iterations: 8383\ncpu: 83464.6188715253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 154897.8483642802,
            "unit": "ns/iter",
            "extra": "iterations: 4524\ncpu: 154888.21839080175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 655515.0299065058,
            "unit": "ns/iter",
            "extra": "iterations: 1070\ncpu: 655475.7943925145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 556445.578236735,
            "unit": "ns/iter",
            "extra": "iterations: 1259\ncpu: 556401.4297061171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 539395.3910700022,
            "unit": "ns/iter",
            "extra": "iterations: 1299\ncpu: 539352.117013084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 552136.8520849595,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 552080.645161292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 353066.2322154491,
            "unit": "ns/iter",
            "extra": "iterations: 1968\ncpu: 353029.2682926791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 534372.4026073599,
            "unit": "ns/iter",
            "extra": "iterations: 1304\ncpu: 534335.2760736162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21154.04602953524,
            "unit": "ns/iter",
            "extra": "iterations: 33044\ncpu: 21153.867570511946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 104709.50320751088,
            "unit": "ns/iter",
            "extra": "iterations: 6703\ncpu: 104705.28121736618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 83748.52316532792,
            "unit": "ns/iter",
            "extra": "iterations: 8353\ncpu: 83741.54196097187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 81513.8507164593,
            "unit": "ns/iter",
            "extra": "iterations: 8514\ncpu: 81505.96664317649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 82950.94805963799,
            "unit": "ns/iter",
            "extra": "iterations: 8452\ncpu: 82944.4865120682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 156286.57658058836,
            "unit": "ns/iter",
            "extra": "iterations: 4492\ncpu: 156283.08103294834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 651949.8083720421,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 651915.6279069665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 549032.2129992178,
            "unit": "ns/iter",
            "extra": "iterations: 1277\ncpu: 548993.2654659302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 531135.2333333266,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 531087.6744186096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 547257.5672926385,
            "unit": "ns/iter",
            "extra": "iterations: 1278\ncpu: 547205.555555563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 352457.1537678207,
            "unit": "ns/iter",
            "extra": "iterations: 1964\ncpu: 352433.553971484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 533955.9403669902,
            "unit": "ns/iter",
            "extra": "iterations: 1308\ncpu: 533936.0856269214 ns\nthreads: 1"
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
        "date": 1705574904400,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8375.945482159326,
            "unit": "ns/iter",
            "extra": "iterations: 83624\ncpu: 8375.747393092892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 75156.52401319472,
            "unit": "ns/iter",
            "extra": "iterations: 11223\ncpu: 75154.60215628619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 143507.11402359264,
            "unit": "ns/iter",
            "extra": "iterations: 6104\ncpu: 143505.2260812582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 212647.48689954795,
            "unit": "ns/iter",
            "extra": "iterations: 4122\ncpu: 212636.89956331885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 281110.6475356989,
            "unit": "ns/iter",
            "extra": "iterations: 3084\ncpu: 281103.3073929963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 344613.30574528285,
            "unit": "ns/iter",
            "extra": "iterations: 2489\ncpu: 344600.1607071114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 414701.6500711353,
            "unit": "ns/iter",
            "extra": "iterations: 2109\ncpu: 414688.2408724514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 478395.71247938834,
            "unit": "ns/iter",
            "extra": "iterations: 1819\ncpu: 478372.7322704784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 545556.5106650144,
            "unit": "ns/iter",
            "extra": "iterations: 1594\ncpu: 545533.1242158095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6281.786517960336,
            "unit": "ns/iter",
            "extra": "iterations: 111719\ncpu: 6281.515230175714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5452.634141107687,
            "unit": "ns/iter",
            "extra": "iterations: 130482\ncpu: 5452.481568338931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5282.344611443597,
            "unit": "ns/iter",
            "extra": "iterations: 132735\ncpu: 5282.336233849385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5299.938060803439,
            "unit": "ns/iter",
            "extra": "iterations: 132065\ncpu: 5300.02195888389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9070.369635643674,
            "unit": "ns/iter",
            "extra": "iterations: 77479\ncpu: 9069.957020612044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35030.538989261004,
            "unit": "ns/iter",
            "extra": "iterations: 23468\ncpu: 35030.75677518325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 138909.47630678816,
            "unit": "ns/iter",
            "extra": "iterations: 6141\ncpu: 138907.3115127829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 109901.3708762874,
            "unit": "ns/iter",
            "extra": "iterations: 7760\ncpu: 109899.9097938143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 107082.65517673953,
            "unit": "ns/iter",
            "extra": "iterations: 7978\ncpu: 107080.04512409122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 109527.30443703108,
            "unit": "ns/iter",
            "extra": "iterations: 7798\ncpu: 109527.19928186714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 296468.94414169586,
            "unit": "ns/iter",
            "extra": "iterations: 2936\ncpu: 296462.0912806537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2150680.0279069487,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2150679.7674418604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1774520.1526717215,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1774498.0916030586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1775732.7547893524,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1775726.6283524858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1789457.649903291,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1789451.063829788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1070375.6301842644,
            "unit": "ns/iter",
            "extra": "iterations: 868\ncpu: 1070372.8110599061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1730245.0465550944,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1730240.2234636857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7173701.199999413,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7173538.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3998024.243589739,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3998011.1111111133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9384502.188524611,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 9384101.639344253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 31928.909998437517,
            "unit": "ns/iter",
            "extra": "iterations: 25644\ncpu: 31927.425518639866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 139104.10458684264,
            "unit": "ns/iter",
            "extra": "iterations: 6148\ncpu: 139099.49577098264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 110597.49520725195,
            "unit": "ns/iter",
            "extra": "iterations: 7720\ncpu: 110592.75906735765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 110123.94073692927,
            "unit": "ns/iter",
            "extra": "iterations: 7762\ncpu: 110119.53104869858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 118731.27486533047,
            "unit": "ns/iter",
            "extra": "iterations: 7611\ncpu: 118728.47194849592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 301139.23631321854,
            "unit": "ns/iter",
            "extra": "iterations: 2886\ncpu: 301123.7352737349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2176514.1901407563,
            "unit": "ns/iter",
            "extra": "iterations: 426\ncpu: 2176462.4413145618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1799119.798449482,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1799085.0775193784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1794798.0539498103,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1794775.529865126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1819729.4485436007,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1819661.3592232903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1071471.0578034527,
            "unit": "ns/iter",
            "extra": "iterations: 865\ncpu: 1071459.3063583835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1743887.4812031249,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1743840.789473678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7254022.629999781,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7253418.000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4166957.0269057523,
            "unit": "ns/iter",
            "extra": "iterations: 223\ncpu: 4166749.7757847495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32314.11434968864,
            "unit": "ns/iter",
            "extra": "iterations: 25457\ncpu: 32314.271123856004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 136818.03054662124,
            "unit": "ns/iter",
            "extra": "iterations: 6220\ncpu: 136817.33118971073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 109603.09448009936,
            "unit": "ns/iter",
            "extra": "iterations: 7790\ncpu: 109597.30423620035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 107809.45535940194,
            "unit": "ns/iter",
            "extra": "iterations: 7930\ncpu: 107803.22824716227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 108145.40349310754,
            "unit": "ns/iter",
            "extra": "iterations: 7844\ncpu: 108142.56756756794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 300097.2691247365,
            "unit": "ns/iter",
            "extra": "iterations: 2902\ncpu: 300097.76016540325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2169361.778554542,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2169343.123543124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1793234.7197696166,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1793163.9155470212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1761002.8712120785,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1760873.2954545475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1801203.168931961,
            "unit": "ns/iter",
            "extra": "iterations: 515\ncpu: 1801173.2038835043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1062534.5425287327,
            "unit": "ns/iter",
            "extra": "iterations: 870\ncpu: 1062500.91954023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1732520.9422719027,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1732529.795158287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3217.5958199341435,
            "unit": "ns/iter",
            "extra": "iterations: 217987\ncpu: 3217.505172326812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16848.2436073235,
            "unit": "ns/iter",
            "extra": "iterations: 41571\ncpu: 16847.97815785049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12905.916202046685,
            "unit": "ns/iter",
            "extra": "iterations: 54166\ncpu: 12905.536683528499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12605.541168633607,
            "unit": "ns/iter",
            "extra": "iterations: 55552\ncpu: 12605.459749423906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10624.487265987107,
            "unit": "ns/iter",
            "extra": "iterations: 65808\ncpu: 10624.535010940896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 68636.25428375092,
            "unit": "ns/iter",
            "extra": "iterations: 10213\ncpu: 68635.64084989738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 142896.70539165687,
            "unit": "ns/iter",
            "extra": "iterations: 4915\ncpu: 142894.547304171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37499.17436501722,
            "unit": "ns/iter",
            "extra": "iterations: 18662\ncpu: 37498.869360197525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37223.268135954306,
            "unit": "ns/iter",
            "extra": "iterations: 18830\ncpu: 37223.4200743489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37638.93964637531,
            "unit": "ns/iter",
            "extra": "iterations: 18607\ncpu: 37638.684366098976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 76171.47643409413,
            "unit": "ns/iter",
            "extra": "iterations: 9187\ncpu: 76171.84064438817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 67566.49137435206,
            "unit": "ns/iter",
            "extra": "iterations: 10434\ncpu: 67564.36649415428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20956.964797367913,
            "unit": "ns/iter",
            "extra": "iterations: 33435\ncpu: 20956.898459698055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 99153.55011421935,
            "unit": "ns/iter",
            "extra": "iterations: 7004\ncpu: 99153.14106225122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 79937.32743058927,
            "unit": "ns/iter",
            "extra": "iterations: 8753\ncpu: 79936.58174340158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 77814.89917831654,
            "unit": "ns/iter",
            "extra": "iterations: 9006\ncpu: 77815.34532533896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 78813.75999548535,
            "unit": "ns/iter",
            "extra": "iterations: 8879\ncpu: 78811.43146750735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 148648.378366896,
            "unit": "ns/iter",
            "extra": "iterations: 4715\ncpu: 148647.99575821692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 619817.6752898622,
            "unit": "ns/iter",
            "extra": "iterations: 1121\ncpu: 619810.2586975985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 531832.0189970194,
            "unit": "ns/iter",
            "extra": "iterations: 1316\ncpu: 531830.4711246237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 521410.0856930116,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 521407.7496274272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 531013.3338391313,
            "unit": "ns/iter",
            "extra": "iterations: 1318\ncpu: 530998.1031866451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 344310.95436703175,
            "unit": "ns/iter",
            "extra": "iterations: 2038\ncpu: 344305.10304219875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 513669.37325493596,
            "unit": "ns/iter",
            "extra": "iterations: 1361\ncpu: 513652.8288023552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20952.08508858582,
            "unit": "ns/iter",
            "extra": "iterations: 33471\ncpu: 20951.862806608973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 98611.26941407032,
            "unit": "ns/iter",
            "extra": "iterations: 7134\ncpu: 98612.6857303061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 79588.33700841072,
            "unit": "ns/iter",
            "extra": "iterations: 8798\ncpu: 79585.72402818777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 77676.93767359236,
            "unit": "ns/iter",
            "extra": "iterations: 9001\ncpu: 77674.62504166226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 78347.24042435465,
            "unit": "ns/iter",
            "extra": "iterations: 8955\ncpu: 78344.62311557755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 149304.40569472115,
            "unit": "ns/iter",
            "extra": "iterations: 4671\ncpu: 149301.58424320127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 620546.1666666529,
            "unit": "ns/iter",
            "extra": "iterations: 1128\ncpu: 620569.5921985785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 529541.291540818,
            "unit": "ns/iter",
            "extra": "iterations: 1324\ncpu: 529535.9516616247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 520670.3747211793,
            "unit": "ns/iter",
            "extra": "iterations: 1345\ncpu: 520671.74721189885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 527392.0181405962,
            "unit": "ns/iter",
            "extra": "iterations: 1323\ncpu: 527391.5343915334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 344638.1759487267,
            "unit": "ns/iter",
            "extra": "iterations: 2029\ncpu: 344627.55051749886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 514453.0572686586,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 514460.3524229046 ns\nthreads: 1"
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
        "date": 1705772726534,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8533.113053161429,
            "unit": "ns/iter",
            "extra": "iterations: 82616\ncpu: 8532.856831606468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 77131.46805996432,
            "unit": "ns/iter",
            "extra": "iterations: 11005\ncpu: 77129.13221263063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 147844.85772084587,
            "unit": "ns/iter",
            "extra": "iterations: 5932\ncpu: 147840.35738368175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 218221.92257579774,
            "unit": "ns/iter",
            "extra": "iterations: 3991\ncpu: 218214.1067401654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 289158.7520000106,
            "unit": "ns/iter",
            "extra": "iterations: 3000\ncpu: 289137.8000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 353730.9237427689,
            "unit": "ns/iter",
            "extra": "iterations: 2426\ncpu: 353715.91096455033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 423283.4968338716,
            "unit": "ns/iter",
            "extra": "iterations: 2053\ncpu: 423253.53141743777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 491556.64762446115,
            "unit": "ns/iter",
            "extra": "iterations: 1768\ncpu: 491540.1018099548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 560687.486102121,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 560649.7737556571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6517.591791323699,
            "unit": "ns/iter",
            "extra": "iterations: 106960\ncpu: 6517.201757666421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5508.262487919076,
            "unit": "ns/iter",
            "extra": "iterations: 127263\ncpu: 5508.048686578191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5435.821613590423,
            "unit": "ns/iter",
            "extra": "iterations: 128558\ncpu: 5435.557491560223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5450.647070310622,
            "unit": "ns/iter",
            "extra": "iterations: 128017\ncpu: 5450.298788442158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9144.187592280441,
            "unit": "ns/iter",
            "extra": "iterations: 76533\ncpu: 9143.724929115548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36220.1805360916,
            "unit": "ns/iter",
            "extra": "iterations: 22832\ncpu: 36217.24334267692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 137829.14147442323,
            "unit": "ns/iter",
            "extra": "iterations: 6199\ncpu: 137821.6002581062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 111476.03018423091,
            "unit": "ns/iter",
            "extra": "iterations: 7653\ncpu: 111467.88187638833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 108885.09014300111,
            "unit": "ns/iter",
            "extra": "iterations: 7832\ncpu: 108878.98365679258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 112378.81520731264,
            "unit": "ns/iter",
            "extra": "iterations: 7549\ncpu: 112371.43992581808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 296988.70655171707,
            "unit": "ns/iter",
            "extra": "iterations: 2900\ncpu: 296976.17241379275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2254003.250000008,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2253873.0582524245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1850106.154761992,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1850019.8412698428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1768048.6871401127,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1767991.554702491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1837479.349112469,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1837414.0039447702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1098331.650118205,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 1098303.0732860493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1776518.8780952357,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1776427.238095239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7398978.83000026,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7398566.999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4355365.129629578,
            "unit": "ns/iter",
            "extra": "iterations: 216\ncpu: 4355167.592592579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9247775.076271294,
            "unit": "ns/iter",
            "extra": "iterations: 118\ncpu: 9247492.372881375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34879.04664089011,
            "unit": "ns/iter",
            "extra": "iterations: 24828\ncpu: 34877.30385049136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 142075.8780083072,
            "unit": "ns/iter",
            "extra": "iterations: 6025\ncpu: 142068.9958506222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 111716.95965417655,
            "unit": "ns/iter",
            "extra": "iterations: 7634\ncpu: 111712.35263295753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 110629.33022291464,
            "unit": "ns/iter",
            "extra": "iterations: 7716\ncpu: 110623.95023328142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 112284.46899632848,
            "unit": "ns/iter",
            "extra": "iterations: 7612\ncpu: 112277.86389910658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 294171.4106896535,
            "unit": "ns/iter",
            "extra": "iterations: 2900\ncpu: 294155.34482758684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2270484.1965603502,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 2270390.1719901753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1882270.9878049605,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1882191.4634146355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1786100.750479736,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1785959.692898281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1855777.8662674893,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1855698.602794408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1142035.3048635416,
            "unit": "ns/iter",
            "extra": "iterations: 843\ncpu: 1141979.8339264586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1791529.9653179357,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1791461.2716763013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7427729.040000486,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7426455.999999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4294004.735160047,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4293812.328767121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33049.706622967125,
            "unit": "ns/iter",
            "extra": "iterations: 25019\ncpu: 33047.631799832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 137145.84843649887,
            "unit": "ns/iter",
            "extra": "iterations: 6268\ncpu: 137138.89597957884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 111195.78684688552,
            "unit": "ns/iter",
            "extra": "iterations: 7694\ncpu: 111187.2887964655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 108870.33966806608,
            "unit": "ns/iter",
            "extra": "iterations: 7893\ncpu: 108864.81692639075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 109930.9946022283,
            "unit": "ns/iter",
            "extra": "iterations: 7781\ncpu: 109924.64978794493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 294249.8456852645,
            "unit": "ns/iter",
            "extra": "iterations: 2955\ncpu: 294236.1421319781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2268071.924205423,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2267924.694376525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1861141.373999999,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1861120.3999999901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1785578.0209923934,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1785492.7480916053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1851685.9900795144,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1851584.3253968176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1092602.539812671,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 1092539.9297423873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1782968.1669865223,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1782894.2418426091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3181.1220701745465,
            "unit": "ns/iter",
            "extra": "iterations: 219595\ncpu: 3180.9845397208474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16550.782181266783,
            "unit": "ns/iter",
            "extra": "iterations: 42214\ncpu: 16549.535699057218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12931.272915359903,
            "unit": "ns/iter",
            "extra": "iterations: 54134\ncpu: 12930.891860937658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12918.095479920696,
            "unit": "ns/iter",
            "extra": "iterations: 55530\ncpu: 12917.950657302335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10563.55686795878,
            "unit": "ns/iter",
            "extra": "iterations: 66206\ncpu: 10562.942935685565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 68045.32533513971,
            "unit": "ns/iter",
            "extra": "iterations: 10294\ncpu: 68041.53876044332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 141253.52222222456,
            "unit": "ns/iter",
            "extra": "iterations: 4950\ncpu: 141240.62626262597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38555.94158492037,
            "unit": "ns/iter",
            "extra": "iterations: 18146\ncpu: 38553.78044748132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37394.04138486076,
            "unit": "ns/iter",
            "extra": "iterations: 18630\ncpu: 37391.8411164784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38418.86941279595,
            "unit": "ns/iter",
            "extra": "iterations: 18256\ncpu: 38415.830411919516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 74580.81006476209,
            "unit": "ns/iter",
            "extra": "iterations: 9419\ncpu: 74574.96549527487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 68738.94834021073,
            "unit": "ns/iter",
            "extra": "iterations: 10182\ncpu: 68735.7984678846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20699.729180911527,
            "unit": "ns/iter",
            "extra": "iterations: 33635\ncpu: 20698.822654972435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 101735.86660904138,
            "unit": "ns/iter",
            "extra": "iterations: 6942\ncpu: 101733.73667530963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 83091.56866468884,
            "unit": "ns/iter",
            "extra": "iterations: 8425\ncpu: 83084.24925815973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 78028.74838197262,
            "unit": "ns/iter",
            "extra": "iterations: 8807\ncpu: 78023.12932894359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 80013.1498341552,
            "unit": "ns/iter",
            "extra": "iterations: 8743\ncpu: 80009.927942354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 150857.0560949385,
            "unit": "ns/iter",
            "extra": "iterations: 4635\ncpu: 150849.94606256802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 644215.0294930509,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 644201.0138248836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 547271.6426896186,
            "unit": "ns/iter",
            "extra": "iterations: 1279\ncpu: 547258.7959343143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 519984.72308833094,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 519938.3815887238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 542380.0325077792,
            "unit": "ns/iter",
            "extra": "iterations: 1292\ncpu: 542346.9814241425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 350409.84015984775,
            "unit": "ns/iter",
            "extra": "iterations: 2002\ncpu: 350383.0669330668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 523603.8906486036,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 523577.9788838678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21045.471321772755,
            "unit": "ns/iter",
            "extra": "iterations: 33440\ncpu: 21043.887559808652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 102292.05219298774,
            "unit": "ns/iter",
            "extra": "iterations: 6840\ncpu: 102288.070175438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 82936.52822580007,
            "unit": "ns/iter",
            "extra": "iterations: 8432\ncpu: 82932.3173624288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 77090.67714977317,
            "unit": "ns/iter",
            "extra": "iterations: 9094\ncpu: 77086.24367715036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79827.98410155645,
            "unit": "ns/iter",
            "extra": "iterations: 8743\ncpu: 79824.09927942438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 151312.1623600382,
            "unit": "ns/iter",
            "extra": "iterations: 4644\ncpu: 151300.301464255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 644207.189780978,
            "unit": "ns/iter",
            "extra": "iterations: 1096\ncpu: 644187.8649635075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 546626.6358653073,
            "unit": "ns/iter",
            "extra": "iterations: 1277\ncpu: 546599.9216914609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 516775.0523212934,
            "unit": "ns/iter",
            "extra": "iterations: 1357\ncpu: 516746.3522476091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 538328.8882896518,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 538302.8505392991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 349668.62267937395,
            "unit": "ns/iter",
            "extra": "iterations: 1993\ncpu: 349643.2012042162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 523127.5116104255,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 523116.47940075415 ns\nthreads: 1"
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
        "date": 1705774172851,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8451.430837111058,
            "unit": "ns/iter",
            "extra": "iterations: 82725\ncpu: 8451.288002417648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 78421.24187592593,
            "unit": "ns/iter",
            "extra": "iterations: 10832\ncpu: 78421.62112259971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 149892.74944339742,
            "unit": "ns/iter",
            "extra": "iterations: 5839\ncpu: 149887.92601472858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 219693.92249238674,
            "unit": "ns/iter",
            "extra": "iterations: 3948\ncpu: 219697.13779128666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 291479.9036511042,
            "unit": "ns/iter",
            "extra": "iterations: 2958\ncpu: 291469.91210277204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 358142.43750000186,
            "unit": "ns/iter",
            "extra": "iterations: 2416\ncpu: 358131.91225165565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 436106.9234945567,
            "unit": "ns/iter",
            "extra": "iterations: 2026\ncpu: 436092.8923988155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 495976.1289218494,
            "unit": "ns/iter",
            "extra": "iterations: 1753\ncpu: 495969.1386195088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 567342.7272727492,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 567334.155844156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6537.077420798158,
            "unit": "ns/iter",
            "extra": "iterations: 107258\ncpu: 6536.953886889561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5514.7814380465325,
            "unit": "ns/iter",
            "extra": "iterations: 126797\ncpu: 5514.774008848781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5481.7419536762345,
            "unit": "ns/iter",
            "extra": "iterations: 127667\ncpu: 5481.741562032468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5550.717103542749,
            "unit": "ns/iter",
            "extra": "iterations: 126237\ncpu: 5550.549363498816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9243.948058464002,
            "unit": "ns/iter",
            "extra": "iterations: 75739\ncpu: 9243.973382273338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 37416.77531200407,
            "unit": "ns/iter",
            "extra": "iterations: 22035\ncpu: 37416.11980939413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 140580.79035432814,
            "unit": "ns/iter",
            "extra": "iterations: 6096\ncpu: 140576.0826771655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 110805.24267186013,
            "unit": "ns/iter",
            "extra": "iterations: 7710\ncpu: 110803.56679636872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 106463.0273560074,
            "unit": "ns/iter",
            "extra": "iterations: 7969\ncpu: 106462.07805245338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 110184.28933418365,
            "unit": "ns/iter",
            "extra": "iterations: 7735\ncpu: 110182.31415643179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 303884.06262975256,
            "unit": "ns/iter",
            "extra": "iterations: 2890\ncpu: 303879.134948097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2300517.99255581,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2300321.8362282845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1902964.2862986864,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1902852.7607361902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1878400.5564516664,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1878307.056451616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1913436.765431908,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1913341.975308642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1142174.1962962705,
            "unit": "ns/iter",
            "extra": "iterations: 810\ncpu: 1142136.9135802502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1844886.8611110067,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1844730.7539682528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7723260.410000421,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7722714.999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4387641.542452783,
            "unit": "ns/iter",
            "extra": "iterations: 212\ncpu: 4387556.1320754625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9585743.92035366,
            "unit": "ns/iter",
            "extra": "iterations: 113\ncpu: 9585530.973451335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 32775.50031713239,
            "unit": "ns/iter",
            "extra": "iterations: 25226\ncpu: 32772.97629429953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 146630.37544818784,
            "unit": "ns/iter",
            "extra": "iterations: 5857\ncpu: 146629.14461328284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 112575.85633169842,
            "unit": "ns/iter",
            "extra": "iterations: 7573\ncpu: 112574.6071570048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 110106.63536553548,
            "unit": "ns/iter",
            "extra": "iterations: 7742\ncpu: 110104.90829243032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 111125.12715404785,
            "unit": "ns/iter",
            "extra": "iterations: 7660\ncpu: 111119.50391644941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 305257.4277317107,
            "unit": "ns/iter",
            "extra": "iterations: 2892\ncpu: 305254.9100968184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2326950.175438526,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2326827.8195488644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1921626.421161935,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1921500.829875519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1897452.6734695598,
            "unit": "ns/iter",
            "extra": "iterations: 490\ncpu: 1897356.530612249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1931774.024947845,
            "unit": "ns/iter",
            "extra": "iterations: 481\ncpu: 1931648.4407484469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1150410.2240097732,
            "unit": "ns/iter",
            "extra": "iterations: 808\ncpu: 1150394.4306930727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1865052.5591181826,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1865056.1122244543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7765095.949640689,
            "unit": "ns/iter",
            "extra": "iterations: 139\ncpu: 7764915.827338119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4284996.244240059,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 4284844.700460849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32448.715593798657,
            "unit": "ns/iter",
            "extra": "iterations: 25337\ncpu: 32448.26143584489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 138275.2499594665,
            "unit": "ns/iter",
            "extra": "iterations: 6169\ncpu: 138270.01134705785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 112784.06039915323,
            "unit": "ns/iter",
            "extra": "iterations: 7616\ncpu: 112782.51050420228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 109120.7367545326,
            "unit": "ns/iter",
            "extra": "iterations: 7814\ncpu: 109118.60762733572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 108418.22401319866,
            "unit": "ns/iter",
            "extra": "iterations: 7879\ncpu: 108416.41071201932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 303173.0597015006,
            "unit": "ns/iter",
            "extra": "iterations: 2881\ncpu: 303164.80388753855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2322117.7299998887,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2322005.9999999874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1907807.6769548452,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1907815.6378600714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1881564.4585859014,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1881546.262626271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1938358.9937237995,
            "unit": "ns/iter",
            "extra": "iterations: 478\ncpu: 1938331.38075313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1148837.7465839672,
            "unit": "ns/iter",
            "extra": "iterations: 805\ncpu: 1148823.7267080725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1855518.0180001117,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1855432.8000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3280.4347901093197,
            "unit": "ns/iter",
            "extra": "iterations: 214469\ncpu: 3280.4857578484716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17259.780596757657,
            "unit": "ns/iter",
            "extra": "iterations: 40519\ncpu: 17259.784298724066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13678.490312733617,
            "unit": "ns/iter",
            "extra": "iterations: 51098\ncpu: 13678.531449371692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13093.825934994022,
            "unit": "ns/iter",
            "extra": "iterations: 53503\ncpu: 13093.491953722265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10957.776179831377,
            "unit": "ns/iter",
            "extra": "iterations: 63971\ncpu: 10957.48073345734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 68849.47730628833,
            "unit": "ns/iter",
            "extra": "iterations: 10157\ncpu: 68849.13852515527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 153488.28218577948,
            "unit": "ns/iter",
            "extra": "iterations: 4575\ncpu: 153488.45901639288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39592.1365282385,
            "unit": "ns/iter",
            "extra": "iterations: 17674\ncpu: 39591.4450605411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 39140.35941252041,
            "unit": "ns/iter",
            "extra": "iterations: 17907\ncpu: 39139.55994862333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39926.69100034182,
            "unit": "ns/iter",
            "extra": "iterations: 17534\ncpu: 39924.42682787759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 81508.51018744188,
            "unit": "ns/iter",
            "extra": "iterations: 8589\ncpu: 81509.71009430694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 71894.24763957779,
            "unit": "ns/iter",
            "extra": "iterations: 9744\ncpu: 71891.90270935955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21928.431475265577,
            "unit": "ns/iter",
            "extra": "iterations: 31879\ncpu: 21927.77690642749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 106097.67535222617,
            "unit": "ns/iter",
            "extra": "iterations: 6601\ncpu: 106097.83366156534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 86274.13369445127,
            "unit": "ns/iter",
            "extra": "iterations: 8123\ncpu: 86271.84537732316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 83662.52954545233,
            "unit": "ns/iter",
            "extra": "iterations: 8360\ncpu: 83663.77990430589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 84781.23641006387,
            "unit": "ns/iter",
            "extra": "iterations: 8223\ncpu: 84779.31411893481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 156685.92970675867,
            "unit": "ns/iter",
            "extra": "iterations: 4467\ncpu: 156688.3366912917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 662875.5799432754,
            "unit": "ns/iter",
            "extra": "iterations: 1057\ncpu: 662875.8751182562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 567200.0348742781,
            "unit": "ns/iter",
            "extra": "iterations: 1233\ncpu: 567174.0470397476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 557073.3054662396,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 557075.4019292642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 572735.5130932786,
            "unit": "ns/iter",
            "extra": "iterations: 1222\ncpu: 572729.9509001663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 371156.2764830658,
            "unit": "ns/iter",
            "extra": "iterations: 1888\ncpu: 371149.3644067759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 552627.855335961,
            "unit": "ns/iter",
            "extra": "iterations: 1265\ncpu: 552622.5296442786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22028.150876862208,
            "unit": "ns/iter",
            "extra": "iterations: 31761\ncpu: 22027.51802525128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 106734.42362276802,
            "unit": "ns/iter",
            "extra": "iterations: 6553\ncpu: 106732.79414008904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 85731.61851127374,
            "unit": "ns/iter",
            "extra": "iterations: 8168\ncpu: 85727.87708129281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 84072.48084544044,
            "unit": "ns/iter",
            "extra": "iterations: 8327\ncpu: 84072.60718145773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 84224.47942064994,
            "unit": "ns/iter",
            "extra": "iterations: 8285\ncpu: 84221.47254073613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 156066.64521157983,
            "unit": "ns/iter",
            "extra": "iterations: 4490\ncpu: 156062.02672605647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 664620.4596391093,
            "unit": "ns/iter",
            "extra": "iterations: 1053\ncpu: 664610.6362772963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 573471.7102501799,
            "unit": "ns/iter",
            "extra": "iterations: 1239\ncpu: 573443.5835351081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 557633.4129393208,
            "unit": "ns/iter",
            "extra": "iterations: 1252\ncpu: 557630.591054316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 569816.1155410986,
            "unit": "ns/iter",
            "extra": "iterations: 1229\ncpu: 569801.4646053747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 370134.9587955782,
            "unit": "ns/iter",
            "extra": "iterations: 1893\ncpu: 370140.20073956385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 553055.148031497,
            "unit": "ns/iter",
            "extra": "iterations: 1270\ncpu: 553040.4724409457 ns\nthreads: 1"
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
        "date": 1705777746592,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8459.032975913515,
            "unit": "ns/iter",
            "extra": "iterations: 82909\ncpu: 8459.125064830116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 76537.97239457352,
            "unit": "ns/iter",
            "extra": "iterations: 11121\ncpu: 76533.53115727002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 148490.73660491317,
            "unit": "ns/iter",
            "extra": "iterations: 5991\ncpu: 148485.14438324154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 216049.5304347673,
            "unit": "ns/iter",
            "extra": "iterations: 4025\ncpu: 216039.32919254657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 284750.6107271864,
            "unit": "ns/iter",
            "extra": "iterations: 3039\ncpu: 284750.7403751234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 351459.12118747254,
            "unit": "ns/iter",
            "extra": "iterations: 2459\ncpu: 351446.7669784463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 422281.4238603288,
            "unit": "ns/iter",
            "extra": "iterations: 2062\ncpu: 422259.3598448111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 490919.4915730464,
            "unit": "ns/iter",
            "extra": "iterations: 1780\ncpu: 490895.16853932553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 562557.8952076787,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 562209.584664537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6546.3230464400085,
            "unit": "ns/iter",
            "extra": "iterations: 106997\ncpu: 6546.38541267512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5555.843225606677,
            "unit": "ns/iter",
            "extra": "iterations: 126277\ncpu: 5555.850234009364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5560.327204714808,
            "unit": "ns/iter",
            "extra": "iterations: 125912\ncpu: 5560.3191117605975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5544.3900339697675,
            "unit": "ns/iter",
            "extra": "iterations: 126289\ncpu: 5544.445676187155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9329.138544013787,
            "unit": "ns/iter",
            "extra": "iterations: 74987\ncpu: 9329.110379132362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35542.59804861541,
            "unit": "ns/iter",
            "extra": "iterations: 23983\ncpu: 35542.65104448987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 138077.09448947664,
            "unit": "ns/iter",
            "extra": "iterations: 6170\ncpu: 138074.74878444077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 109588.33539571475,
            "unit": "ns/iter",
            "extra": "iterations: 7758\ncpu: 109589.41737561219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 107077.39889336124,
            "unit": "ns/iter",
            "extra": "iterations: 7952\ncpu: 107076.21981891351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 109405.80372272346,
            "unit": "ns/iter",
            "extra": "iterations: 7790\ncpu: 109403.82541720178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 307892.6007806941,
            "unit": "ns/iter",
            "extra": "iterations: 2818\ncpu: 307881.0503903475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2279833.681372697,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2279824.2647058866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1869514.6553105798,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1869500.4008016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1868323.8192770511,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1868298.594377506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1896197.137014465,
            "unit": "ns/iter",
            "extra": "iterations: 489\ncpu: 1896197.546012265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1115651.526946161,
            "unit": "ns/iter",
            "extra": "iterations: 835\ncpu: 1115662.2754490997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1823111.106090453,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1823111.1984282872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7514319.82999975,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7513827.999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4245690.589041426,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4245499.086757985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9427418.862069042,
            "unit": "ns/iter",
            "extra": "iterations: 116\ncpu: 9427178.448275862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 32046.209415961508,
            "unit": "ns/iter",
            "extra": "iterations: 25786\ncpu: 32045.435507639744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 140687.85057661353,
            "unit": "ns/iter",
            "extra": "iterations: 6070\ncpu: 140683.50906095534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 110363.31895660347,
            "unit": "ns/iter",
            "extra": "iterations: 7744\ncpu: 110361.0278925625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 110138.06878307066,
            "unit": "ns/iter",
            "extra": "iterations: 7749\ncpu: 110134.31410504559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 109707.9354505488,
            "unit": "ns/iter",
            "extra": "iterations: 7746\ncpu: 109702.00103279097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 304601.97990125325,
            "unit": "ns/iter",
            "extra": "iterations: 2836\ncpu: 304589.2806770115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2309666.1716419873,
            "unit": "ns/iter",
            "extra": "iterations: 402\ncpu: 2309592.786069653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1881578.032454419,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1881565.922920885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1885941.325865509,
            "unit": "ns/iter",
            "extra": "iterations: 491\ncpu: 1885843.1771894149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1906744.5143444042,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1906672.5409836103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1127483.9987878627,
            "unit": "ns/iter",
            "extra": "iterations: 825\ncpu: 1127483.7575757515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1838321.355029651,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1838322.090729776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7571715.530000347,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7571711.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4307419.077981607,
            "unit": "ns/iter",
            "extra": "iterations: 218\ncpu: 4307380.275229379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32405.182636755042,
            "unit": "ns/iter",
            "extra": "iterations: 25099\ncpu: 32405.490258576152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 137727.80759288996,
            "unit": "ns/iter",
            "extra": "iterations: 6190\ncpu: 137727.83521809362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 110227.88102935621,
            "unit": "ns/iter",
            "extra": "iterations: 7733\ncpu: 110225.04849347007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 107753.24428445536,
            "unit": "ns/iter",
            "extra": "iterations: 7917\ncpu: 107751.09258557516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 107663.40952863531,
            "unit": "ns/iter",
            "extra": "iterations: 7892\ncpu: 107663.12721743593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 305397.6648992381,
            "unit": "ns/iter",
            "extra": "iterations: 2829\ncpu: 305396.88936019957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2293622.807407285,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 2293592.5925925933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1874488.8404040523,
            "unit": "ns/iter",
            "extra": "iterations: 495\ncpu: 1874487.070707065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1870787.1863728291,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1870806.4128256456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1909642.3298967155,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1909646.391752575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1118385.0501793013,
            "unit": "ns/iter",
            "extra": "iterations: 837\ncpu: 1118379.091995221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1826847.6102361358,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1826865.157480311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3239.3142719078255,
            "unit": "ns/iter",
            "extra": "iterations: 206945\ncpu: 3239.2761361714524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17242.00963315085,
            "unit": "ns/iter",
            "extra": "iterations: 40589\ncpu: 17242.001527507455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13236.387542795901,
            "unit": "ns/iter",
            "extra": "iterations: 52869\ncpu: 13236.119465092997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13261.45820856058,
            "unit": "ns/iter",
            "extra": "iterations: 52762\ncpu: 13261.445737462522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10922.184479961343,
            "unit": "ns/iter",
            "extra": "iterations: 64072\ncpu: 10922.299912598308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 70432.07051538047,
            "unit": "ns/iter",
            "extra": "iterations: 10012\ncpu: 70430.11386336423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 151280.8777849892,
            "unit": "ns/iter",
            "extra": "iterations: 4623\ncpu: 151279.36404931895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39281.69015427919,
            "unit": "ns/iter",
            "extra": "iterations: 17825\ncpu: 39281.2847124821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38907.53218550242,
            "unit": "ns/iter",
            "extra": "iterations: 18005\ncpu: 38907.94223826771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39346.768019791314,
            "unit": "ns/iter",
            "extra": "iterations: 17786\ncpu: 39346.59844821772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 79043.15681147069,
            "unit": "ns/iter",
            "extra": "iterations: 8794\ncpu: 79039.53832158228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 70123.33296582114,
            "unit": "ns/iter",
            "extra": "iterations: 9977\ncpu: 70121.61972536844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21842.573494576005,
            "unit": "ns/iter",
            "extra": "iterations: 32084\ncpu: 21841.861987283573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 104804.24765589707,
            "unit": "ns/iter",
            "extra": "iterations: 6719\ncpu: 104559.8749813942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 85414.47693997355,
            "unit": "ns/iter",
            "extra": "iterations: 8196\ncpu: 85414.33626159043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 83341.33910240969,
            "unit": "ns/iter",
            "extra": "iterations: 8378\ncpu: 83340.55860587314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 84437.50000000944,
            "unit": "ns/iter",
            "extra": "iterations: 8300\ncpu: 84437.31325301203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 155969.4902352573,
            "unit": "ns/iter",
            "extra": "iterations: 4506\ncpu: 155971.06080780973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 654374.5732960093,
            "unit": "ns/iter",
            "extra": "iterations: 1071\ncpu: 654381.3258636779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 558443.4628297735,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 558431.3349320539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 546359.625195656,
            "unit": "ns/iter",
            "extra": "iterations: 1278\ncpu: 546352.2691705724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 559590.90087931,
            "unit": "ns/iter",
            "extra": "iterations: 1251\ncpu: 559584.7322142287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 362531.5214692271,
            "unit": "ns/iter",
            "extra": "iterations: 1933\ncpu: 362536.2648732522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 541344.1397683236,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 541341.6988416974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 22007.813955687132,
            "unit": "ns/iter",
            "extra": "iterations: 31772\ncpu: 22007.808762432433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 104268.36070207936,
            "unit": "ns/iter",
            "extra": "iterations: 6723\ncpu: 104267.4401308946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 84344.43763543396,
            "unit": "ns/iter",
            "extra": "iterations: 8306\ncpu: 84344.31736094289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 82698.71475757807,
            "unit": "ns/iter",
            "extra": "iterations: 8477\ncpu: 82699.50454170103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 84440.9138635377,
            "unit": "ns/iter",
            "extra": "iterations: 8324\ncpu: 84440.00480538097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 155229.51509807244,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 155227.52920431958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 649066.7141527332,
            "unit": "ns/iter",
            "extra": "iterations: 1074\ncpu: 649034.5437616332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 550170.6904949266,
            "unit": "ns/iter",
            "extra": "iterations: 1273\ncpu: 550149.8036135099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 543120.6414653262,
            "unit": "ns/iter",
            "extra": "iterations: 1283\ncpu: 543101.0911925193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 555004.6859635167,
            "unit": "ns/iter",
            "extra": "iterations: 1261\ncpu: 554992.7835051543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 360957.35036117566,
            "unit": "ns/iter",
            "extra": "iterations: 1938\ncpu: 360943.44685242476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 540257.9784283447,
            "unit": "ns/iter",
            "extra": "iterations: 1298\ncpu: 540250.4622496103 ns\nthreads: 1"
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
        "date": 1705952902843,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8152.784092101816,
            "unit": "ns/iter",
            "extra": "iterations: 85731\ncpu: 8152.641401593356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 75112.99444297403,
            "unit": "ns/iter",
            "extra": "iterations: 11337\ncpu: 75112.3842286319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 143983.5966496911,
            "unit": "ns/iter",
            "extra": "iterations: 6089\ncpu: 143977.40187222863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 213127.9092904077,
            "unit": "ns/iter",
            "extra": "iterations: 4101\ncpu: 213123.96976347236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 281236.49414823775,
            "unit": "ns/iter",
            "extra": "iterations: 3076\ncpu: 281220.0260078023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 345106.7161342531,
            "unit": "ns/iter",
            "extra": "iterations: 2473\ncpu: 345093.89405580267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 412521.06612749124,
            "unit": "ns/iter",
            "extra": "iterations: 2102\ncpu: 412527.68791627046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 479352.14615384734,
            "unit": "ns/iter",
            "extra": "iterations: 1820\ncpu: 479333.68131868064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 548170.2537783592,
            "unit": "ns/iter",
            "extra": "iterations: 1588\ncpu: 548160.2644836277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6288.100534962547,
            "unit": "ns/iter",
            "extra": "iterations: 110101\ncpu: 6287.7585126383965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5378.602951905053,
            "unit": "ns/iter",
            "extra": "iterations: 130221\ncpu: 5378.5656691317145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5367.929664148513,
            "unit": "ns/iter",
            "extra": "iterations: 130147\ncpu: 5367.803330080607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5397.106071492285,
            "unit": "ns/iter",
            "extra": "iterations: 129441\ncpu: 5396.878886906014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9026.60912237214,
            "unit": "ns/iter",
            "extra": "iterations: 77436\ncpu: 9026.443772922148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36000.80011256525,
            "unit": "ns/iter",
            "extra": "iterations: 23098\ncpu: 35998.48904667068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 140854.82805802705,
            "unit": "ns/iter",
            "extra": "iterations: 6066\ncpu: 140848.87899769197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 110324.65627436046,
            "unit": "ns/iter",
            "extra": "iterations: 7698\ncpu: 110323.7724084178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 107587.51551614937,
            "unit": "ns/iter",
            "extra": "iterations: 7895\ncpu: 107587.28309056368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 110499.41578266189,
            "unit": "ns/iter",
            "extra": "iterations: 7730\ncpu: 110495.9508408795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 305386.4975282541,
            "unit": "ns/iter",
            "extra": "iterations: 2832\ncpu: 305378.4957627127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2206046.9023807896,
            "unit": "ns/iter",
            "extra": "iterations: 420\ncpu: 2206000.714285714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1824663.2563601371,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1824601.3698630133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1821360.2915852477,
            "unit": "ns/iter",
            "extra": "iterations: 511\ncpu: 1821311.5459882529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1848296.564000066,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1848166.5999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1083676.264947117,
            "unit": "ns/iter",
            "extra": "iterations: 853\ncpu: 1083653.9273153597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1779269.2275332902,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1779240.5353728514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7400533.790000737,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7400587.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4154997.8392860154,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4154817.8571428577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9324777.084033553,
            "unit": "ns/iter",
            "extra": "iterations: 119\ncpu: 9324583.193277331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 32627.15793016184,
            "unit": "ns/iter",
            "extra": "iterations: 25258\ncpu: 32625.045530129097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 140563.88916175786,
            "unit": "ns/iter",
            "extra": "iterations: 6108\ncpu: 140553.1761624099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 110155.1393388582,
            "unit": "ns/iter",
            "extra": "iterations: 7593\ncpu: 110146.05557750544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 111003.79327360072,
            "unit": "ns/iter",
            "extra": "iterations: 7701\ncpu: 110998.72743799469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 109522.20932937828,
            "unit": "ns/iter",
            "extra": "iterations: 7739\ncpu: 109514.769350045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 301102.5139178753,
            "unit": "ns/iter",
            "extra": "iterations: 2874\ncpu: 301089.28322894924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2226318.37649899,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 2226182.4940047925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1846043.406746254,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1846040.0793650756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1849867.9107142922,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1849751.9841269923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1872423.7082492996,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1872291.1468812805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1089363.6674556828,
            "unit": "ns/iter",
            "extra": "iterations: 845\ncpu: 1089291.0059171582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1797978.9903660126,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1797857.6107899789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7428454.559999409,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7428105.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4139287.328888612,
            "unit": "ns/iter",
            "extra": "iterations: 225\ncpu: 4139269.7777777696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32475.05648469642,
            "unit": "ns/iter",
            "extra": "iterations: 25352\ncpu: 32475.276112338324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 135736.1255954283,
            "unit": "ns/iter",
            "extra": "iterations: 6298\ncpu: 135733.61384566454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 111699.75154879146,
            "unit": "ns/iter",
            "extra": "iterations: 7748\ncpu: 111697.89623128567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 108591.92472435995,
            "unit": "ns/iter",
            "extra": "iterations: 7891\ncpu: 108585.95868711206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 108131.89131262549,
            "unit": "ns/iter",
            "extra": "iterations: 7885\ncpu: 108128.83956880207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 305496.5520393785,
            "unit": "ns/iter",
            "extra": "iterations: 2844\ncpu: 305484.0365682124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2217692.5287081134,
            "unit": "ns/iter",
            "extra": "iterations: 418\ncpu: 2217708.3732057484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1827948.021610915,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1827844.007858543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1828659.6098039576,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1827238.2352941155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1868415.4527162877,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1868337.8269617714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1088328.7508731596,
            "unit": "ns/iter",
            "extra": "iterations: 859\ncpu: 1088274.1559953485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1792269.9999999027,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1792187.164750949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3228.209830041651,
            "unit": "ns/iter",
            "extra": "iterations: 217700\ncpu: 3228.2094625631785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16644.65404352255,
            "unit": "ns/iter",
            "extra": "iterations: 42092\ncpu: 16644.806614083423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13069.246423635528,
            "unit": "ns/iter",
            "extra": "iterations: 53546\ncpu: 13068.402868561589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13094.386854478043,
            "unit": "ns/iter",
            "extra": "iterations: 53387\ncpu: 13093.42349261047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10645.375955070833,
            "unit": "ns/iter",
            "extra": "iterations: 65702\ncpu: 10644.730754010518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 68816.82386976403,
            "unit": "ns/iter",
            "extra": "iterations: 10197\ncpu: 68811.56222418392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 146694.7373630996,
            "unit": "ns/iter",
            "extra": "iterations: 4748\ncpu: 146693.913226621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38552.612719951394,
            "unit": "ns/iter",
            "extra": "iterations: 18129\ncpu: 38549.969661867675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38174.26250000188,
            "unit": "ns/iter",
            "extra": "iterations: 18320\ncpu: 38171.970524018005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39116.80667858087,
            "unit": "ns/iter",
            "extra": "iterations: 17908\ncpu: 39113.87647978543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 77590.76123036574,
            "unit": "ns/iter",
            "extra": "iterations: 9038\ncpu: 77586.92188537313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 68790.63062088318,
            "unit": "ns/iter",
            "extra": "iterations: 10163\ncpu: 68790.28830069932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21461.57418461511,
            "unit": "ns/iter",
            "extra": "iterations: 32500\ncpu: 21461.436923076984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 100591.6521239976,
            "unit": "ns/iter",
            "extra": "iterations: 6968\ncpu: 100586.40929965633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 81882.19370745124,
            "unit": "ns/iter",
            "extra": "iterations: 8518\ncpu: 81877.15426156453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 80660.3260744333,
            "unit": "ns/iter",
            "extra": "iterations: 8679\ncpu: 80656.67703652424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 82626.44173282932,
            "unit": "ns/iter",
            "extra": "iterations: 8564\ncpu: 82625.49042503556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 154214.2662934008,
            "unit": "ns/iter",
            "extra": "iterations: 4465\ncpu: 154215.45352743735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 628821.6986425293,
            "unit": "ns/iter",
            "extra": "iterations: 1105\ncpu: 628774.570135736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 543242.2645461721,
            "unit": "ns/iter",
            "extra": "iterations: 1289\ncpu: 543194.7245927139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 533507.366412257,
            "unit": "ns/iter",
            "extra": "iterations: 1310\ncpu: 533472.9770992387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 545680.8049921512,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 545668.5647425926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 352139.7313131683,
            "unit": "ns/iter",
            "extra": "iterations: 1980\ncpu: 352136.363636366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 526344.3218304795,
            "unit": "ns/iter",
            "extra": "iterations: 1333\ncpu: 526348.9872468119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21607.50496301033,
            "unit": "ns/iter",
            "extra": "iterations: 32440\ncpu: 21606.350184957075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 101968.13983976874,
            "unit": "ns/iter",
            "extra": "iterations: 6865\ncpu: 101963.77276037939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 81734.17877940585,
            "unit": "ns/iter",
            "extra": "iterations: 8586\ncpu: 81726.69461914682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 81119.47295100798,
            "unit": "ns/iter",
            "extra": "iterations: 8614\ncpu: 81115.5328534946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 81589.49574443583,
            "unit": "ns/iter",
            "extra": "iterations: 8577\ncpu: 81589.29695697906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 152133.42496737486,
            "unit": "ns/iter",
            "extra": "iterations: 4598\ncpu: 152132.68812527353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 630039.1235347046,
            "unit": "ns/iter",
            "extra": "iterations: 1109\ncpu: 629991.2533814249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 539681.8419430038,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 539626.8311488015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 533505.0937499825,
            "unit": "ns/iter",
            "extra": "iterations: 1312\ncpu: 533475.8384146359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 541745.001543226,
            "unit": "ns/iter",
            "extra": "iterations: 1296\ncpu: 541749.9228395072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 352516.8810126702,
            "unit": "ns/iter",
            "extra": "iterations: 1975\ncpu: 352514.1772151868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 525029.0479042174,
            "unit": "ns/iter",
            "extra": "iterations: 1336\ncpu: 525018.5628742501 ns\nthreads: 1"
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
        "date": 1705954323786,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8490.362975438098,
            "unit": "ns/iter",
            "extra": "iterations: 82529\ncpu: 8490.219195676673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 77734.58258176572,
            "unit": "ns/iter",
            "extra": "iterations: 10977\ncpu: 77734.02569007927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 149180.2619128557,
            "unit": "ns/iter",
            "extra": "iterations: 5876\ncpu: 149175.98706603132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 220212.56919586865,
            "unit": "ns/iter",
            "extra": "iterations: 3967\ncpu: 220210.96546508704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 290670.84427326027,
            "unit": "ns/iter",
            "extra": "iterations: 2986\ncpu: 290662.32417950453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 357762.1498547252,
            "unit": "ns/iter",
            "extra": "iterations: 2409\ncpu: 357760.06641760084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 428915.609744106,
            "unit": "ns/iter",
            "extra": "iterations: 2032\ncpu: 428908.3661417323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 499097.3615916757,
            "unit": "ns/iter",
            "extra": "iterations: 1734\ncpu: 499070.53056516685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 575725.5966167749,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 575704.9446974626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6429.803250325903,
            "unit": "ns/iter",
            "extra": "iterations: 108666\ncpu: 6429.600795096904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5420.759323346475,
            "unit": "ns/iter",
            "extra": "iterations: 129165\ncpu: 5420.638717918942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5403.028215222976,
            "unit": "ns/iter",
            "extra": "iterations: 129540\ncpu: 5402.9319129226515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5422.455547202995,
            "unit": "ns/iter",
            "extra": "iterations: 129047\ncpu: 5422.398815935271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9298.115785560098,
            "unit": "ns/iter",
            "extra": "iterations: 75303\ncpu: 9298.069134031854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35298.08799897677,
            "unit": "ns/iter",
            "extra": "iterations: 23523\ncpu: 35297.53432810443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 142177.9241093577,
            "unit": "ns/iter",
            "extra": "iterations: 6035\ncpu: 142177.26594863302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 113819.61438429034,
            "unit": "ns/iter",
            "extra": "iterations: 7536\ncpu: 113815.56528662407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 109318.67534789193,
            "unit": "ns/iter",
            "extra": "iterations: 7833\ncpu: 109316.40495340199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 111864.96750097684,
            "unit": "ns/iter",
            "extra": "iterations: 7631\ncpu: 111853.83304940387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 302029.3000699939,
            "unit": "ns/iter",
            "extra": "iterations: 2856\ncpu: 301998.38935574295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2336128.3400503504,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2335899.7481108257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1921384.0743800988,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1921361.363636363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1908580.405349879,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1908502.8806584373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1961490.023206749,
            "unit": "ns/iter",
            "extra": "iterations: 474\ncpu: 1961382.2784810152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1168018.116981238,
            "unit": "ns/iter",
            "extra": "iterations: 795\ncpu: 1167965.9119496862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1875323.0405679182,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1875182.1501014251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7709050.600000182,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7708510.9999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4352317.598130693,
            "unit": "ns/iter",
            "extra": "iterations: 214\ncpu: 4352064.485981318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9537687.684210023,
            "unit": "ns/iter",
            "extra": "iterations: 114\ncpu: 9537060.52631578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33977.41067888748,
            "unit": "ns/iter",
            "extra": "iterations: 24216\ncpu: 33975.35926660058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 153292.67113752247,
            "unit": "ns/iter",
            "extra": "iterations: 5890\ncpu: 153286.96095076387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 114696.43192812259,
            "unit": "ns/iter",
            "extra": "iterations: 5788\ncpu: 114688.51071181805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 111340.05996609987,
            "unit": "ns/iter",
            "extra": "iterations: 7671\ncpu: 111334.32407769511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 113223.52509343535,
            "unit": "ns/iter",
            "extra": "iterations: 7492\ncpu: 113216.43085958314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 309898.50686415227,
            "unit": "ns/iter",
            "extra": "iterations: 2768\ncpu: 309891.3656069354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2374375.222222057,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2374303.968253979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1947180.1596638737,
            "unit": "ns/iter",
            "extra": "iterations: 476\ncpu: 1947152.9411764662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1944948.028985524,
            "unit": "ns/iter",
            "extra": "iterations: 483\ncpu: 1944838.3022774325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1985938.8891257567,
            "unit": "ns/iter",
            "extra": "iterations: 469\ncpu: 1985927.292110864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1159669.3880596096,
            "unit": "ns/iter",
            "extra": "iterations: 804\ncpu: 1159638.184079606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1889147.1890245664,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1889154.4715447214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7758811.496402891,
            "unit": "ns/iter",
            "extra": "iterations: 139\ncpu: 7758607.9136690525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4249710.363636309,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4249566.818181804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33074.18941828836,
            "unit": "ns/iter",
            "extra": "iterations: 24892\ncpu: 33073.30065884612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 140800.37957641802,
            "unit": "ns/iter",
            "extra": "iterations: 6091\ncpu: 140795.82991298634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 114061.05768718336,
            "unit": "ns/iter",
            "extra": "iterations: 7506\ncpu: 114057.6738609108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 109447.04975635417,
            "unit": "ns/iter",
            "extra": "iterations: 7798\ncpu: 109444.02410874607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 109389.45495321914,
            "unit": "ns/iter",
            "extra": "iterations: 7803\ncpu: 109386.27450980406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 299641.67534721753,
            "unit": "ns/iter",
            "extra": "iterations: 2880\ncpu: 299632.7777777758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2345893.186398248,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2345855.4156171214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1931122.991735511,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1931075.4132231416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1909197.6646090106,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1909166.0493827108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1975296.7218684016,
            "unit": "ns/iter",
            "extra": "iterations: 471\ncpu: 1975225.0530785616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1148887.3876543702,
            "unit": "ns/iter",
            "extra": "iterations: 810\ncpu: 1148877.0370370368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1885098.7580644721,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1885014.3145161322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3210.135525285188,
            "unit": "ns/iter",
            "extra": "iterations: 194104\ncpu: 3210.080163211463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16908.222552574673,
            "unit": "ns/iter",
            "extra": "iterations: 41370\ncpu: 16907.877689146615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12700.465046364541,
            "unit": "ns/iter",
            "extra": "iterations: 55216\ncpu: 12700.342292089266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12453.66330157867,
            "unit": "ns/iter",
            "extra": "iterations: 56264\ncpu: 12453.30406654341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10680.21550855929,
            "unit": "ns/iter",
            "extra": "iterations: 65538\ncpu: 10680.051267966659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 70539.13895630564,
            "unit": "ns/iter",
            "extra": "iterations: 9888\ncpu: 70534.34466019415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 152654.54589055994,
            "unit": "ns/iter",
            "extra": "iterations: 4587\ncpu: 152652.51798561067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39297.56563565727,
            "unit": "ns/iter",
            "extra": "iterations: 17879\ncpu: 39295.961742826505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38828.40841639378,
            "unit": "ns/iter",
            "extra": "iterations: 18060\ncpu: 38826.55592469487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39530.761092914494,
            "unit": "ns/iter",
            "extra": "iterations: 17714\ncpu: 39527.983515862434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 80413.67864111833,
            "unit": "ns/iter",
            "extra": "iterations: 8713\ncpu: 80409.43417881276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 70890.2149153865,
            "unit": "ns/iter",
            "extra": "iterations: 9869\ncpu: 70890.5765528429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21412.198436779898,
            "unit": "ns/iter",
            "extra": "iterations: 32625\ncpu: 21411.546360153134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 102950.13635029462,
            "unit": "ns/iter",
            "extra": "iterations: 6806\ncpu: 102946.60593593992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 84309.1248497885,
            "unit": "ns/iter",
            "extra": "iterations: 8322\ncpu: 84300.72098053405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 81834.40348008965,
            "unit": "ns/iter",
            "extra": "iterations: 8563\ncpu: 81829.25376620267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 84741.56921587799,
            "unit": "ns/iter",
            "extra": "iterations: 8264\ncpu: 84737.28218780392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 151737.32597880904,
            "unit": "ns/iter",
            "extra": "iterations: 4623\ncpu: 151734.8907635715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 660950.7092469044,
            "unit": "ns/iter",
            "extra": "iterations: 1049\ncpu: 660953.2888465265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 562109.9495192866,
            "unit": "ns/iter",
            "extra": "iterations: 1248\ncpu: 562087.2596153822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 550044.5668238947,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 550020.9905660347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 563374.2758064845,
            "unit": "ns/iter",
            "extra": "iterations: 1240\ncpu: 563366.7741935508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 362413.51761658955,
            "unit": "ns/iter",
            "extra": "iterations: 1930\ncpu: 362404.7668393759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 544862.835413415,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 544857.1762870501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21392.950058322807,
            "unit": "ns/iter",
            "extra": "iterations: 32578\ncpu: 21392.102032045837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 105297.88985725152,
            "unit": "ns/iter",
            "extra": "iterations: 6655\ncpu: 105295.62734785813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 84044.48423828154,
            "unit": "ns/iter",
            "extra": "iterations: 8343\ncpu: 84039.21850653243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 83105.70499940732,
            "unit": "ns/iter",
            "extra": "iterations: 8461\ncpu: 83104.34936768652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 83482.85065011827,
            "unit": "ns/iter",
            "extra": "iterations: 8383\ncpu: 83480.00715734366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 152213.53429131425,
            "unit": "ns/iter",
            "extra": "iterations: 4593\ncpu: 152211.1691704782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 664016.3071090584,
            "unit": "ns/iter",
            "extra": "iterations: 1055\ncpu: 664009.6682464348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 563855.7033144877,
            "unit": "ns/iter",
            "extra": "iterations: 1237\ncpu: 563838.8035569988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 552881.3981191242,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 552870.5329153545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 560894.423538874,
            "unit": "ns/iter",
            "extra": "iterations: 1249\ncpu: 560890.3122498012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 361803.7443923194,
            "unit": "ns/iter",
            "extra": "iterations: 1917\ncpu: 361796.13980177353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 544432.8286604824,
            "unit": "ns/iter",
            "extra": "iterations: 1284\ncpu: 544435.1246105958 ns\nthreads: 1"
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
        "date": 1705956283144,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8225.184533069645,
            "unit": "ns/iter",
            "extra": "iterations: 84852\ncpu: 8225.094281808326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 75365.90901052044,
            "unit": "ns/iter",
            "extra": "iterations: 11309\ncpu: 75364.00212220356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 144011.65651242825,
            "unit": "ns/iter",
            "extra": "iterations: 6073\ncpu: 144008.56248970854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 212339.74383995702,
            "unit": "ns/iter",
            "extra": "iterations: 4099\ncpu: 212337.2041961454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 283062.95885331306,
            "unit": "ns/iter",
            "extra": "iterations: 2965\ncpu: 283063.9123102866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 343862.0386162549,
            "unit": "ns/iter",
            "extra": "iterations: 2486\ncpu: 343849.03459372505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 410700.1846952774,
            "unit": "ns/iter",
            "extra": "iterations: 2117\ncpu: 410675.29522909794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 478099.9390444994,
            "unit": "ns/iter",
            "extra": "iterations: 1821\ncpu: 478081.60351455305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 543831.673750006,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 543814.3125000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6386.674881793286,
            "unit": "ns/iter",
            "extra": "iterations: 109554\ncpu: 6386.3336801942505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5422.543345184173,
            "unit": "ns/iter",
            "extra": "iterations: 129380\ncpu: 5422.312567630234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5324.413773430151,
            "unit": "ns/iter",
            "extra": "iterations: 131456\ncpu: 5324.368610029206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5424.289596550239,
            "unit": "ns/iter",
            "extra": "iterations: 128938\ncpu: 5424.156571375392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9166.781469287691,
            "unit": "ns/iter",
            "extra": "iterations: 76241\ncpu: 9166.458991881005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35007.40907362732,
            "unit": "ns/iter",
            "extra": "iterations: 23673\ncpu: 35006.053309677656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 136530.60727388522,
            "unit": "ns/iter",
            "extra": "iterations: 6269\ncpu: 136526.3997447761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 112141.11879501489,
            "unit": "ns/iter",
            "extra": "iterations: 7635\ncpu: 112138.08775376569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 107579.20389691772,
            "unit": "ns/iter",
            "extra": "iterations: 7955\ncpu: 107576.09050911406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 109678.78255842632,
            "unit": "ns/iter",
            "extra": "iterations: 7786\ncpu: 109674.40277421045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 289083.9266358111,
            "unit": "ns/iter",
            "extra": "iterations: 3026\ncpu: 289070.32385988144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2220073.3198090224,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2219991.885441526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1812142.0000000277,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1812077.7777777757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1804972.5087719436,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1804925.5360623766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1828063.6646943123,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1828015.7790927032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1085655.210023797,
            "unit": "ns/iter",
            "extra": "iterations: 838\ncpu: 1085634.4868735091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1768074.3390476329,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1768003.6190476213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7297474.060000014,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7297088.999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4158039.241071419,
            "unit": "ns/iter",
            "extra": "iterations: 224\ncpu: 4157823.660714298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9369347.898304483,
            "unit": "ns/iter",
            "extra": "iterations: 118\ncpu: 9368864.406779671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 32135.501349183298,
            "unit": "ns/iter",
            "extra": "iterations: 25571\ncpu: 32135.141371084443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 136805.42921132137,
            "unit": "ns/iter",
            "extra": "iterations: 6251\ncpu: 136803.18349064124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 111564.35453952182,
            "unit": "ns/iter",
            "extra": "iterations: 7655\ncpu: 111563.43566296552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 110375.14202786112,
            "unit": "ns/iter",
            "extra": "iterations: 7752\ncpu: 110375.51599587235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 111814.65208251272,
            "unit": "ns/iter",
            "extra": "iterations: 7611\ncpu: 111815.07029299713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 290086.9999999839,
            "unit": "ns/iter",
            "extra": "iterations: 2990\ncpu: 290085.45150501747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2238555.2740386263,
            "unit": "ns/iter",
            "extra": "iterations: 416\ncpu: 2238562.2596153757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1834928.9370079297,
            "unit": "ns/iter",
            "extra": "iterations: 508\ncpu: 1834904.7244094452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1820110.9549018908,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1820103.9215686235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1844758.9546352313,
            "unit": "ns/iter",
            "extra": "iterations: 507\ncpu: 1844738.0670611362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1091456.909518128,
            "unit": "ns/iter",
            "extra": "iterations: 851\ncpu: 1091460.869565217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1780615.293103462,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1780589.8467432926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7391253.949999737,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7391070.000000042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4084278.048245531,
            "unit": "ns/iter",
            "extra": "iterations: 228\ncpu: 4084183.7719298415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32576.451243822597,
            "unit": "ns/iter",
            "extra": "iterations: 25084\ncpu: 32576.53085632282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 137540.20374253838,
            "unit": "ns/iter",
            "extra": "iterations: 6199\ncpu: 137538.47394741088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 111020.66435216252,
            "unit": "ns/iter",
            "extra": "iterations: 7633\ncpu: 111019.1405738242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 108236.72028949074,
            "unit": "ns/iter",
            "extra": "iterations: 7876\ncpu: 108234.43372270177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 107984.83261201237,
            "unit": "ns/iter",
            "extra": "iterations: 7856\ncpu: 107983.82128309539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 286069.29335974506,
            "unit": "ns/iter",
            "extra": "iterations: 3027\ncpu: 286066.07201849937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2217315.9256595024,
            "unit": "ns/iter",
            "extra": "iterations: 417\ncpu: 2217304.0767386216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1811431.1384017188,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1811407.2124756277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1807432.1348749278,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1807438.150289013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1853599.418650573,
            "unit": "ns/iter",
            "extra": "iterations: 504\ncpu: 1853573.2142857153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1087730.4695550553,
            "unit": "ns/iter",
            "extra": "iterations: 854\ncpu: 1087706.3231850183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1774865.675572476,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1774871.3740458093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3192.474947420522,
            "unit": "ns/iter",
            "extra": "iterations: 218241\ncpu: 3192.4537552522197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16889.11894007177,
            "unit": "ns/iter",
            "extra": "iterations: 41399\ncpu: 16889.185729123736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12944.132518952389,
            "unit": "ns/iter",
            "extra": "iterations: 53947\ncpu: 12944.174838267118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12718.19213632247,
            "unit": "ns/iter",
            "extra": "iterations: 54987\ncpu: 12717.975157764491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10257.787302710532,
            "unit": "ns/iter",
            "extra": "iterations: 67857\ncpu: 10257.818648039289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 66455.76149995824,
            "unit": "ns/iter",
            "extra": "iterations: 10587\ncpu: 66454.11353546835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 145591.77615975266,
            "unit": "ns/iter",
            "extra": "iterations: 4807\ncpu: 145588.68317037675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 37807.13365026591,
            "unit": "ns/iter",
            "extra": "iterations: 18511\ncpu: 37806.30435957034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37449.65634013407,
            "unit": "ns/iter",
            "extra": "iterations: 18722\ncpu: 37449.78100630228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 37923.542928468945,
            "unit": "ns/iter",
            "extra": "iterations: 18426\ncpu: 37922.956691630934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 77176.82083287419,
            "unit": "ns/iter",
            "extra": "iterations: 9053\ncpu: 77176.43874958549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 67995.53920046537,
            "unit": "ns/iter",
            "extra": "iterations: 10306\ncpu: 67994.00349311056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21326.956094145684,
            "unit": "ns/iter",
            "extra": "iterations: 32843\ncpu: 21327.025545778575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 100434.67760810805,
            "unit": "ns/iter",
            "extra": "iterations: 7007\ncpu: 100435.07920650739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 81860.3001051782,
            "unit": "ns/iter",
            "extra": "iterations: 8557\ncpu: 81858.01098515777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 81015.62604166822,
            "unit": "ns/iter",
            "extra": "iterations: 8640\ncpu: 81015.1388888892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 81809.00023307352,
            "unit": "ns/iter",
            "extra": "iterations: 8581\ncpu: 81807.76133317898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 152599.22610214204,
            "unit": "ns/iter",
            "extra": "iterations: 4582\ncpu: 152599.890877347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 644908.1336404771,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 644910.4147465485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 549491.6006288644,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 549482.7044025176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 541512.0108780616,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 541500.3885003885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 549766.4666142482,
            "unit": "ns/iter",
            "extra": "iterations: 1273\ncpu: 549757.8161822413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 355908.58787567256,
            "unit": "ns/iter",
            "extra": "iterations: 1963\ncpu: 355909.9847172667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 526651.6246224262,
            "unit": "ns/iter",
            "extra": "iterations: 1324\ncpu: 526646.6012084595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21620.845042596262,
            "unit": "ns/iter",
            "extra": "iterations: 32396\ncpu: 21620.909988887353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 101798.81059063775,
            "unit": "ns/iter",
            "extra": "iterations: 6874\ncpu: 101798.25429153502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 81240.07645897816,
            "unit": "ns/iter",
            "extra": "iterations: 8619\ncpu: 81236.09467455573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 79578.53235932378,
            "unit": "ns/iter",
            "extra": "iterations: 8761\ncpu: 79578.84944641053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 82046.79354839434,
            "unit": "ns/iter",
            "extra": "iterations: 8525\ncpu: 82047.10850439922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 151666.3129605518,
            "unit": "ns/iter",
            "extra": "iterations: 4614\ncpu: 151666.94841785586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 635456.141432426,
            "unit": "ns/iter",
            "extra": "iterations: 1103\ncpu: 635452.2212148741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 540256.1197835825,
            "unit": "ns/iter",
            "extra": "iterations: 1294\ncpu: 540246.2905718602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 532590.1787072751,
            "unit": "ns/iter",
            "extra": "iterations: 1315\ncpu: 532592.3954372669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 540035.5944487714,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 540037.6252891377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 356189.05040732276,
            "unit": "ns/iter",
            "extra": "iterations: 1964\ncpu: 356186.6598777978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 526554.748304393,
            "unit": "ns/iter",
            "extra": "iterations: 1327\ncpu: 526550.2637528221 ns\nthreads: 1"
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
        "date": 1705957739556,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8403.17454523636,
            "unit": "ns/iter",
            "extra": "iterations: 83285\ncpu: 8402.691961337576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 76370.28723976716,
            "unit": "ns/iter",
            "extra": "iterations: 11144\ncpu: 76368.11737257718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 146819.8533400315,
            "unit": "ns/iter",
            "extra": "iterations: 5973\ncpu: 146811.60220994474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 215216.09266600345,
            "unit": "ns/iter",
            "extra": "iterations: 4036\ncpu: 215211.66997026766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 285593.0919842306,
            "unit": "ns/iter",
            "extra": "iterations: 3044\ncpu: 285588.1406044677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 350859.1244408378,
            "unit": "ns/iter",
            "extra": "iterations: 2459\ncpu: 350851.64701098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 423775.64580301597,
            "unit": "ns/iter",
            "extra": "iterations: 2061\ncpu: 423755.7011159629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 488509.60844750825,
            "unit": "ns/iter",
            "extra": "iterations: 1752\ncpu: 488478.9383561639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 560008.4301281873,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 559982.5000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6496.836540426175,
            "unit": "ns/iter",
            "extra": "iterations: 107678\ncpu: 6496.506250116085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5493.337574215098,
            "unit": "ns/iter",
            "extra": "iterations: 127332\ncpu: 5493.245217227404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5475.376319764977,
            "unit": "ns/iter",
            "extra": "iterations: 127769\ncpu: 5475.166902769837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5593.937384825488,
            "unit": "ns/iter",
            "extra": "iterations: 124810\ncpu: 5593.738482493385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9156.611716139885,
            "unit": "ns/iter",
            "extra": "iterations: 76305\ncpu: 9156.333136753823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 35596.428145523234,
            "unit": "ns/iter",
            "extra": "iterations: 23144\ncpu: 35595.147770480464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 140989.7692053463,
            "unit": "ns/iter",
            "extra": "iterations: 6053\ncpu: 140985.4617545021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 115163.29963657103,
            "unit": "ns/iter",
            "extra": "iterations: 7429\ncpu: 115157.45053169974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 110625.26807852321,
            "unit": "ns/iter",
            "extra": "iterations: 7744\ncpu: 110620.01549586788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 113147.9489972072,
            "unit": "ns/iter",
            "extra": "iterations: 7529\ncpu: 113139.1818302564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 297686.4279793005,
            "unit": "ns/iter",
            "extra": "iterations: 2895\ncpu: 297668.8082901556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2251592.5922329677,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2251519.174757288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1854356.7256459899,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1854318.687872767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1832858.458498108,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1832766.7984189712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1878923.1843687256,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1878831.2625250504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1105334.9595237079,
            "unit": "ns/iter",
            "extra": "iterations: 840\ncpu: 1105303.6904761912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1801461.7616280043,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1801354.2635658935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7477651.730000616,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7477009.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4218629.565611188,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4218429.411764694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9440959.321739724,
            "unit": "ns/iter",
            "extra": "iterations: 115\ncpu: 9440580.869565206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34288.379413974966,
            "unit": "ns/iter",
            "extra": "iterations: 23958\ncpu: 34286.213373403436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 150218.19491674515,
            "unit": "ns/iter",
            "extra": "iterations: 5705\ncpu: 150212.16476774792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 116350.57609139722,
            "unit": "ns/iter",
            "extra": "iterations: 7353\ncpu: 116343.87324901426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 114370.60149772694,
            "unit": "ns/iter",
            "extra": "iterations: 7478\ncpu: 114369.48381920294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 114021.27573725357,
            "unit": "ns/iter",
            "extra": "iterations: 7460\ncpu: 114018.16353887372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 299694.05359613156,
            "unit": "ns/iter",
            "extra": "iterations: 2892\ncpu: 299688.69294605986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2278081.6117936443,
            "unit": "ns/iter",
            "extra": "iterations: 407\ncpu: 2278025.5528255557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1872528.0040239915,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1872461.1670020046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1856173.6826348284,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1856122.1556886197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1884864.207316997,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1884794.9186991835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1120406.600723782,
            "unit": "ns/iter",
            "extra": "iterations: 829\ncpu: 1120388.057901087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1823372.273084377,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1823340.275049109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7567801.079999299,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7567510.000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4215998.636363916,
            "unit": "ns/iter",
            "extra": "iterations: 220\ncpu: 4215900.909090919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 32983.025321574634,
            "unit": "ns/iter",
            "extra": "iterations: 24722\ncpu: 32982.7157996927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 140045.55363547133,
            "unit": "ns/iter",
            "extra": "iterations: 6134\ncpu: 140042.69644603878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 113135.45150237366,
            "unit": "ns/iter",
            "extra": "iterations: 7588\ncpu: 113131.61570901392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 111469.33748378366,
            "unit": "ns/iter",
            "extra": "iterations: 7710\ncpu: 111467.57457846931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 111389.16975711384,
            "unit": "ns/iter",
            "extra": "iterations: 7658\ncpu: 111386.3149647421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 296500.28232463746,
            "unit": "ns/iter",
            "extra": "iterations: 2908\ncpu: 296491.5405777189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2266250.6773400116,
            "unit": "ns/iter",
            "extra": "iterations: 406\ncpu: 2266215.5172413895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1862524.6277665528,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1862478.6720321898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1836355.6897231783,
            "unit": "ns/iter",
            "extra": "iterations: 506\ncpu: 1836338.7351778727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1877941.6902835001,
            "unit": "ns/iter",
            "extra": "iterations: 494\ncpu: 1877898.1781376535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1125310.564225756,
            "unit": "ns/iter",
            "extra": "iterations: 833\ncpu: 1125284.5138055226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1823141.280392163,
            "unit": "ns/iter",
            "extra": "iterations: 510\ncpu: 1823103.3333333412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3297.1554078808367,
            "unit": "ns/iter",
            "extra": "iterations: 212930\ncpu: 3297.1150143239465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 16858.868545958125,
            "unit": "ns/iter",
            "extra": "iterations: 41505\ncpu: 16858.49415733034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13441.72194645135,
            "unit": "ns/iter",
            "extra": "iterations: 52177\ncpu: 13441.573873545802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12278.692901774759,
            "unit": "ns/iter",
            "extra": "iterations: 56972\ncpu: 12278.528048866132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10860.58668870161,
            "unit": "ns/iter",
            "extra": "iterations: 66560\ncpu: 10860.318509615407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 68092.17002542775,
            "unit": "ns/iter",
            "extra": "iterations: 10222\ncpu: 68090.81393073741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 150409.2878528807,
            "unit": "ns/iter",
            "extra": "iterations: 4676\ncpu: 150403.97775876927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 39037.580020104666,
            "unit": "ns/iter",
            "extra": "iterations: 17908\ncpu: 39036.547911547954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38381.13477592138,
            "unit": "ns/iter",
            "extra": "iterations: 18208\ncpu: 38380.15707381386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 39325.207844906436,
            "unit": "ns/iter",
            "extra": "iterations: 17744\ncpu: 39324.25045085701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 79005.35551030163,
            "unit": "ns/iter",
            "extra": "iterations: 8838\ncpu: 79003.6999321114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 70501.52159804772,
            "unit": "ns/iter",
            "extra": "iterations: 9862\ncpu: 70497.4244575144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20988.592756924536,
            "unit": "ns/iter",
            "extra": "iterations: 33356\ncpu: 20987.951193188477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 99724.38309658378,
            "unit": "ns/iter",
            "extra": "iterations: 7040\ncpu: 99719.09090909151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 81075.22312327026,
            "unit": "ns/iter",
            "extra": "iterations: 8632\ncpu: 81073.63299351158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 80492.21152519196,
            "unit": "ns/iter",
            "extra": "iterations: 8694\ncpu: 80491.86795491175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 81526.54277733095,
            "unit": "ns/iter",
            "extra": "iterations: 8591\ncpu: 81523.68758002637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 152424.64041766975,
            "unit": "ns/iter",
            "extra": "iterations: 4597\ncpu: 152419.49097237372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 656341.4971858052,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 656313.4146341532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 556085.127980996,
            "unit": "ns/iter",
            "extra": "iterations: 1258\ncpu: 556078.4578696449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 544745.2668759648,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 544735.4788069122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 562898.7788539005,
            "unit": "ns/iter",
            "extra": "iterations: 1239\ncpu: 562869.491525421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 365149.42193208577,
            "unit": "ns/iter",
            "extra": "iterations: 1915\ncpu: 365133.36814621656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 545255.9852139516,
            "unit": "ns/iter",
            "extra": "iterations: 1285\ncpu: 545235.1750972759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20979.454114967506,
            "unit": "ns/iter",
            "extra": "iterations: 33366\ncpu: 20978.424144338474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 101144.16123918914,
            "unit": "ns/iter",
            "extra": "iterations: 6940\ncpu: 101137.68011527466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 80944.87278825883,
            "unit": "ns/iter",
            "extra": "iterations: 8647\ncpu: 80943.96900659183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 80510.67190186183,
            "unit": "ns/iter",
            "extra": "iterations: 8723\ncpu: 80508.02476212416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 80697.5614418954,
            "unit": "ns/iter",
            "extra": "iterations: 8683\ncpu: 80694.06887020676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 151004.9778112886,
            "unit": "ns/iter",
            "extra": "iterations: 4642\ncpu: 151000.08616975494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 656207.4257518878,
            "unit": "ns/iter",
            "extra": "iterations: 1064\ncpu: 656180.3571428527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 556423.2501979868,
            "unit": "ns/iter",
            "extra": "iterations: 1263\ncpu: 556415.4394299326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 548283.8219607883,
            "unit": "ns/iter",
            "extra": "iterations: 1275\ncpu: 548265.098039217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 560614.9430633627,
            "unit": "ns/iter",
            "extra": "iterations: 1247\ncpu: 560591.1788291889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 381273.4215223116,
            "unit": "ns/iter",
            "extra": "iterations: 1905\ncpu: 381258.7401574834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 544033.2001552039,
            "unit": "ns/iter",
            "extra": "iterations: 1289\ncpu: 544006.7494181516 ns\nthreads: 1"
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
        "date": 1705959182366,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8652.439572786716,
            "unit": "ns/iter",
            "extra": "iterations: 80990\ncpu: 8652.080503765897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 77427.38988150092,
            "unit": "ns/iter",
            "extra": "iterations: 10970\ncpu: 77417.31996353692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 149069.68996079886,
            "unit": "ns/iter",
            "extra": "iterations: 5867\ncpu: 149066.04738367136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 219607.20722768907,
            "unit": "ns/iter",
            "extra": "iterations: 3957\ncpu: 219608.66818296685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 288910.62807137246,
            "unit": "ns/iter",
            "extra": "iterations: 2971\ncpu: 288898.82194547285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 355628.2064811142,
            "unit": "ns/iter",
            "extra": "iterations: 2407\ncpu: 355623.55629414186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 424672.26295210584,
            "unit": "ns/iter",
            "extra": "iterations: 2046\ncpu: 424662.6588465299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 493512.06235826726,
            "unit": "ns/iter",
            "extra": "iterations: 1764\ncpu: 493494.55782312964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 562717.8217054566,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 562710.5297157629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6510.356942958855,
            "unit": "ns/iter",
            "extra": "iterations: 107555\ncpu: 6510.2022221189145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5482.429582321109,
            "unit": "ns/iter",
            "extra": "iterations: 127610\ncpu: 5482.466107671817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5453.26053231607,
            "unit": "ns/iter",
            "extra": "iterations: 127631\ncpu: 5453.1704679897475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5516.2595446911055,
            "unit": "ns/iter",
            "extra": "iterations: 126903\ncpu: 5516.172982514203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9080.68440269324,
            "unit": "ns/iter",
            "extra": "iterations: 76962\ncpu: 9080.405914607212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 36416.07301208013,
            "unit": "ns/iter",
            "extra": "iterations: 22599\ncpu: 36415.00066374623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 138452.24070480705,
            "unit": "ns/iter",
            "extra": "iterations: 6186\ncpu: 138451.03459424496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 112648.37334742997,
            "unit": "ns/iter",
            "extra": "iterations: 7564\ncpu: 112645.38603913301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 109698.8261483306,
            "unit": "ns/iter",
            "extra": "iterations: 7794\ncpu: 109694.04670259192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 112562.78896849569,
            "unit": "ns/iter",
            "extra": "iterations: 7397\ncpu: 112558.02352305013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 294136.2778159373,
            "unit": "ns/iter",
            "extra": "iterations: 2912\ncpu: 294133.99725274724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2270233.799019733,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2270174.019607846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1856712.979959927,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1856646.2925851706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1804773.5224171027,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1804756.530214422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1851289.9660678129,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1851271.8562874284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1079657.901869212,
            "unit": "ns/iter",
            "extra": "iterations: 856\ncpu: 1079635.747663552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1784121.8464491859,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1784070.2495201551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7377587.370000355,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7377307.999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4218607.158371188,
            "unit": "ns/iter",
            "extra": "iterations: 221\ncpu: 4218522.62443439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9197428.504200937,
            "unit": "ns/iter",
            "extra": "iterations: 119\ncpu: 9196963.025210086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 34857.68364543269,
            "unit": "ns/iter",
            "extra": "iterations: 23657\ncpu: 34856.49067929155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 151585.82058512446,
            "unit": "ns/iter",
            "extra": "iterations: 5674\ncpu: 151581.38879097658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 114210.63868904627,
            "unit": "ns/iter",
            "extra": "iterations: 7506\ncpu: 114204.13002930988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 114357.56008526041,
            "unit": "ns/iter",
            "extra": "iterations: 7506\ncpu: 114353.18411937074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 112178.36172725898,
            "unit": "ns/iter",
            "extra": "iterations: 7619\ncpu: 112176.92610578786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 295299.79739458056,
            "unit": "ns/iter",
            "extra": "iterations: 2917\ncpu: 295285.8416181014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2280162.2622548686,
            "unit": "ns/iter",
            "extra": "iterations: 408\ncpu: 2280113.970588238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1878988.074446706,
            "unit": "ns/iter",
            "extra": "iterations: 497\ncpu: 1878867.6056338043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1822607.5029469796,
            "unit": "ns/iter",
            "extra": "iterations: 509\ncpu: 1822538.310412576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1875647.5740364578,
            "unit": "ns/iter",
            "extra": "iterations: 493\ncpu: 1875601.0141987829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1098954.1334119667,
            "unit": "ns/iter",
            "extra": "iterations: 847\ncpu: 1098925.8559622162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1804890.6070037885,
            "unit": "ns/iter",
            "extra": "iterations: 514\ncpu: 1804825.8754863834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7529826.749999983,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7529560.000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4279553.401826502,
            "unit": "ns/iter",
            "extra": "iterations: 219\ncpu: 4279402.283105012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33428.25178022364,
            "unit": "ns/iter",
            "extra": "iterations: 24716\ncpu: 33426.938015860294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 139525.66557858538,
            "unit": "ns/iter",
            "extra": "iterations: 6127\ncpu: 139519.2426962627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 113046.63030543351,
            "unit": "ns/iter",
            "extra": "iterations: 7563\ncpu: 113040.61880206285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 109958.04947950107,
            "unit": "ns/iter",
            "extra": "iterations: 7781\ncpu: 109954.33748875454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 109958.50774394172,
            "unit": "ns/iter",
            "extra": "iterations: 7748\ncpu: 109955.2787816203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 292595.44508869207,
            "unit": "ns/iter",
            "extra": "iterations: 2932\ncpu: 292581.5143246936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2271037.185819229,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2270969.19315403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1860938.9700000065,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1860886.8000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1802237.1414727864,
            "unit": "ns/iter",
            "extra": "iterations: 516\ncpu: 1802217.054263564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1869988.6733871505,
            "unit": "ns/iter",
            "extra": "iterations: 496\ncpu: 1869973.5887096722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1089839.3547257197,
            "unit": "ns/iter",
            "extra": "iterations: 857\ncpu: 1089827.7712952134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1790464.0386101184,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1790425.2895752909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3306.600681660369,
            "unit": "ns/iter",
            "extra": "iterations: 212129\ncpu: 3306.513018022051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17280.821015794525,
            "unit": "ns/iter",
            "extra": "iterations: 40579\ncpu: 17280.4381576677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13659.036908566475,
            "unit": "ns/iter",
            "extra": "iterations: 51316\ncpu: 13659.12970613441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 13036.949594674128,
            "unit": "ns/iter",
            "extra": "iterations: 53784\ncpu: 13036.784173731876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10872.073593478986,
            "unit": "ns/iter",
            "extra": "iterations: 64272\ncpu: 10871.819765994576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 68247.4180399786,
            "unit": "ns/iter",
            "extra": "iterations: 10255\ncpu: 68245.98732325656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 149499.7335758736,
            "unit": "ns/iter",
            "extra": "iterations: 4673\ncpu: 149493.21634924022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38781.44763962941,
            "unit": "ns/iter",
            "extra": "iterations: 18048\ncpu: 38780.23049645396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 38070.547302067695,
            "unit": "ns/iter",
            "extra": "iterations: 18403\ncpu: 38069.6408194316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38880.06436614122,
            "unit": "ns/iter",
            "extra": "iterations: 17851\ncpu: 38877.200156854065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 77637.53726707438,
            "unit": "ns/iter",
            "extra": "iterations: 9016\ncpu: 77635.81410825279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 69342.90737615466,
            "unit": "ns/iter",
            "extra": "iterations: 10073\ncpu: 69338.78685595191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 21591.56771187034,
            "unit": "ns/iter",
            "extra": "iterations: 32402\ncpu: 21590.766002098684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 103590.65412978137,
            "unit": "ns/iter",
            "extra": "iterations: 6780\ncpu: 103589.1297935109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 84091.411157776,
            "unit": "ns/iter",
            "extra": "iterations: 8335\ncpu: 84089.44211157919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 81684.1153577208,
            "unit": "ns/iter",
            "extra": "iterations: 8582\ncpu: 81681.77580983583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 83143.89137419092,
            "unit": "ns/iter",
            "extra": "iterations: 8405\ncpu: 83142.73646638903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 147931.26339192461,
            "unit": "ns/iter",
            "extra": "iterations: 4723\ncpu: 147926.23332627764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 644450.0165745283,
            "unit": "ns/iter",
            "extra": "iterations: 1086\ncpu: 644440.515653776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 560990.3133747971,
            "unit": "ns/iter",
            "extra": "iterations: 1286\ncpu: 560976.7496111968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 527231.7166541147,
            "unit": "ns/iter",
            "extra": "iterations: 1327\ncpu: 527221.9291635278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 546480.5636222137,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 546454.2544886828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 351491.74609574326,
            "unit": "ns/iter",
            "extra": "iterations: 1985\ncpu: 351482.2670025188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 528572.2583081461,
            "unit": "ns/iter",
            "extra": "iterations: 1324\ncpu: 528540.1812688845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21674.025427146058,
            "unit": "ns/iter",
            "extra": "iterations: 32249\ncpu: 21673.130949796843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 101742.60850568884,
            "unit": "ns/iter",
            "extra": "iterations: 6866\ncpu: 101741.69822312909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 82549.96523276895,
            "unit": "ns/iter",
            "extra": "iterations: 8485\ncpu: 82547.01237477819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 81448.92120576561,
            "unit": "ns/iter",
            "extra": "iterations: 8592\ncpu: 81446.98556797032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 83227.67284610482,
            "unit": "ns/iter",
            "extra": "iterations: 8415\ncpu: 83222.35294117586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 148120.2095821055,
            "unit": "ns/iter",
            "extra": "iterations: 4738\ncpu: 148115.40734487242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 640425.2481752213,
            "unit": "ns/iter",
            "extra": "iterations: 1096\ncpu: 640420.8941605866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 542432.7581395542,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 542416.4341085232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 532940.9787233963,
            "unit": "ns/iter",
            "extra": "iterations: 1316\ncpu: 532927.2796352616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 546554.133177554,
            "unit": "ns/iter",
            "extra": "iterations: 1284\ncpu: 546504.283489098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 350331.0663649855,
            "unit": "ns/iter",
            "extra": "iterations: 1989\ncpu: 350318.2503770721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 531272.6336109284,
            "unit": "ns/iter",
            "extra": "iterations: 1321\ncpu: 531250.6434519216 ns\nthreads: 1"
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
        "date": 1705961264713,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8341.90461949107,
            "unit": "ns/iter",
            "extra": "iterations: 83927\ncpu: 8341.593289406272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 76327.77812838693,
            "unit": "ns/iter",
            "extra": "iterations: 11092\ncpu: 76325.6941940137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 146826.6382836105,
            "unit": "ns/iter",
            "extra": "iterations: 5966\ncpu: 146818.7060006705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 217222.34229702843,
            "unit": "ns/iter",
            "extra": "iterations: 3979\ncpu: 217216.0593113848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 287351.3658294371,
            "unit": "ns/iter",
            "extra": "iterations: 3026\ncpu: 287340.84600132174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 352497.62366469845,
            "unit": "ns/iter",
            "extra": "iterations: 2434\ncpu: 352487.5924404272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 421846.81262140267,
            "unit": "ns/iter",
            "extra": "iterations: 2060\ncpu: 421829.90291262127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 488977.83136594755,
            "unit": "ns/iter",
            "extra": "iterations: 1779\ncpu: 488969.47723440174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 558517.9555985199,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 558505.2767052761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6454.050967344949,
            "unit": "ns/iter",
            "extra": "iterations: 107304\ncpu: 6453.552523671062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5448.004261540106,
            "unit": "ns/iter",
            "extra": "iterations: 128592\ncpu: 5447.735473435355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5386.3316220025645,
            "unit": "ns/iter",
            "extra": "iterations: 130308\ncpu: 5386.086042299779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5430.34855102713,
            "unit": "ns/iter",
            "extra": "iterations: 129126\ncpu: 5430.1062528073335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9132.815258889852,
            "unit": "ns/iter",
            "extra": "iterations: 76480\ncpu: 9132.702667364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 37350.362086808214,
            "unit": "ns/iter",
            "extra": "iterations: 22235\ncpu: 37348.774454688595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 148133.6310114477,
            "unit": "ns/iter",
            "extra": "iterations: 5843\ncpu: 148128.136231388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 121810.76152645505,
            "unit": "ns/iter",
            "extra": "iterations: 7049\ncpu: 121804.28429564452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 117946.75432098497,
            "unit": "ns/iter",
            "extra": "iterations: 7290\ncpu: 117945.58299039761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 120047.99694149884,
            "unit": "ns/iter",
            "extra": "iterations: 7193\ncpu: 120040.46990129277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 307241.5095473816,
            "unit": "ns/iter",
            "extra": "iterations: 2828\ncpu: 307232.88543140114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2314981.3017451996,
            "unit": "ns/iter",
            "extra": "iterations: 401\ncpu: 2314880.7980049886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1901141.2386829194,
            "unit": "ns/iter",
            "extra": "iterations: 486\ncpu: 1901050.6172839566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1855358.2164329924,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1855271.743486973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1901118.8217213145,
            "unit": "ns/iter",
            "extra": "iterations: 488\ncpu: 1901084.6311475395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1119822.3118932766,
            "unit": "ns/iter",
            "extra": "iterations: 824\ncpu: 1119785.5582524254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1844326.7833000007,
            "unit": "ns/iter",
            "extra": "iterations: 503\ncpu: 1844261.6302186928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7528363.199999149,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7527948.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4122010.64757773,
            "unit": "ns/iter",
            "extra": "iterations: 227\ncpu: 4121823.7885462693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 9247799.177965673,
            "unit": "ns/iter",
            "extra": "iterations: 118\ncpu: 9247219.491525445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 33662.99851967849,
            "unit": "ns/iter",
            "extra": "iterations: 24319\ncpu: 33660.58637279494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 154439.79946281703,
            "unit": "ns/iter",
            "extra": "iterations: 5585\ncpu: 154433.64368845077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 121635.90458612914,
            "unit": "ns/iter",
            "extra": "iterations: 7043\ncpu: 121627.4172937664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 119712.35884761787,
            "unit": "ns/iter",
            "extra": "iterations: 7081\ncpu: 119706.29854540245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 119978.7438699752,
            "unit": "ns/iter",
            "extra": "iterations: 7137\ncpu: 119969.48297604003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 303592.2082894452,
            "unit": "ns/iter",
            "extra": "iterations: 2847\ncpu: 303576.9230769227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2350407.860759805,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2350269.8734177053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1937515.2395833577,
            "unit": "ns/iter",
            "extra": "iterations: 480\ncpu: 1937446.4583333435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1883797.1321136877,
            "unit": "ns/iter",
            "extra": "iterations: 492\ncpu: 1883636.7886178952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1920235.632780279,
            "unit": "ns/iter",
            "extra": "iterations: 482\ncpu: 1920142.5311203357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1126632.3085367996,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 1126561.8292682949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1862843.4196786208,
            "unit": "ns/iter",
            "extra": "iterations: 498\ncpu: 1862758.0321285103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7597626.609999679,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7596691.000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4192647.018017597,
            "unit": "ns/iter",
            "extra": "iterations: 222\ncpu: 4192412.612612609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 33485.120125501584,
            "unit": "ns/iter",
            "extra": "iterations: 24541\ncpu: 33482.99172812844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 146870.95330938222,
            "unit": "ns/iter",
            "extra": "iterations: 5847\ncpu: 146863.81050111135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 118647.31025427756,
            "unit": "ns/iter",
            "extra": "iterations: 7236\ncpu: 118637.31343283529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 120188.66213618763,
            "unit": "ns/iter",
            "extra": "iterations: 7284\ncpu: 120183.1823174084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 115077.93064055593,
            "unit": "ns/iter",
            "extra": "iterations: 7353\ncpu: 115070.82823337507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 299149.0616771009,
            "unit": "ns/iter",
            "extra": "iterations: 2886\ncpu: 299133.12543312635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2329727.1316458806,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2329596.2025316376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1921413.348453516,
            "unit": "ns/iter",
            "extra": "iterations: 485\ncpu: 1921325.1546391693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1859578.2905808908,
            "unit": "ns/iter",
            "extra": "iterations: 499\ncpu: 1859490.3807615177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1912533.123966903,
            "unit": "ns/iter",
            "extra": "iterations: 484\ncpu: 1912367.9752066194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1121071.17611582,
            "unit": "ns/iter",
            "extra": "iterations: 829\ncpu: 1121013.9927623605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1860643.41516999,
            "unit": "ns/iter",
            "extra": "iterations: 501\ncpu: 1860567.0658682536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3248.3855730051428,
            "unit": "ns/iter",
            "extra": "iterations: 215679\ncpu: 3248.34545783317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 17102.685691014864,
            "unit": "ns/iter",
            "extra": "iterations: 42980\ncpu: 17101.682177757055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 13291.352761263131,
            "unit": "ns/iter",
            "extra": "iterations: 52639\ncpu: 13291.078857881092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12932.86062995221,
            "unit": "ns/iter",
            "extra": "iterations: 54036\ncpu: 12932.350655118724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10824.185283782006,
            "unit": "ns/iter",
            "extra": "iterations: 64609\ncpu: 10823.640669256682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 69659.14115425589,
            "unit": "ns/iter",
            "extra": "iterations: 10067\ncpu: 69654.83262143638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 151392.690842181,
            "unit": "ns/iter",
            "extra": "iterations: 4619\ncpu: 151378.13379519427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 38875.924839128515,
            "unit": "ns/iter",
            "extra": "iterations: 18028\ncpu: 38873.70756600848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 37694.20048452005,
            "unit": "ns/iter",
            "extra": "iterations: 18575\ncpu: 37691.72543741589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 38472.64586428314,
            "unit": "ns/iter",
            "extra": "iterations: 18171\ncpu: 38470.18876231376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 78527.56716584606,
            "unit": "ns/iter",
            "extra": "iterations: 8881\ncpu: 78521.15752730556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 69821.77419353768,
            "unit": "ns/iter",
            "extra": "iterations: 10044\ncpu: 69818.11031461593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20854.68697729473,
            "unit": "ns/iter",
            "extra": "iterations: 33480\ncpu: 20853.476702508935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 102927.01461039725,
            "unit": "ns/iter",
            "extra": "iterations: 6776\ncpu: 102925.78217237155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 83543.35220880999,
            "unit": "ns/iter",
            "extra": "iterations: 8353\ncpu: 83537.92649347578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 80783.64325974464,
            "unit": "ns/iter",
            "extra": "iterations: 8516\ncpu: 80778.0883043683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 82882.008247899,
            "unit": "ns/iter",
            "extra": "iterations: 8487\ncpu: 82877.49499234167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 147655.22723437272,
            "unit": "ns/iter",
            "extra": "iterations: 4744\ncpu: 147646.85919055593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 654129.7431796384,
            "unit": "ns/iter",
            "extra": "iterations: 1063\ncpu: 654121.166509885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 548249.4601420206,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 548205.6827150788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 537067.4527438338,
            "unit": "ns/iter",
            "extra": "iterations: 1312\ncpu: 537043.5213414564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 556492.3216560974,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 556487.4999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 354842.7340101764,
            "unit": "ns/iter",
            "extra": "iterations: 1970\ncpu: 354824.61928933335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 530782.081880256,
            "unit": "ns/iter",
            "extra": "iterations: 1319\ncpu: 530770.3563305481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 21034.17374319991,
            "unit": "ns/iter",
            "extra": "iterations: 33279\ncpu: 21033.01180924922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 101769.73458407541,
            "unit": "ns/iter",
            "extra": "iterations: 6876\ncpu: 101768.49912739966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 83112.17026323121,
            "unit": "ns/iter",
            "extra": "iterations: 8434\ncpu: 83111.18093431332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 80071.2880465836,
            "unit": "ns/iter",
            "extra": "iterations: 8759\ncpu: 80068.44388628802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 82270.59739344614,
            "unit": "ns/iter",
            "extra": "iterations: 8517\ncpu: 82268.78008688508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 147301.97175972693,
            "unit": "ns/iter",
            "extra": "iterations: 4745\ncpu: 147294.8577449939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 654680.8229264648,
            "unit": "ns/iter",
            "extra": "iterations: 1073\ncpu: 654652.8424976735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 548533.4090908552,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 548513.9498432612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 537919.5165257528,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 537890.1614142989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 553820.3606037162,
            "unit": "ns/iter",
            "extra": "iterations: 1259\ncpu: 553804.6068308131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 356109.930456848,
            "unit": "ns/iter",
            "extra": "iterations: 1970\ncpu: 356092.0812182731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 536305.7251147167,
            "unit": "ns/iter",
            "extra": "iterations: 1306\ncpu: 536294.7932618678 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}