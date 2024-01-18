window.BENCHMARK_DATA = {
  "lastUpdate": 1705574905005,
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
      }
    ]
  }
}