window.BENCHMARK_DATA = {
  "lastUpdate": 1702489614874,
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
      }
    ]
  }
}