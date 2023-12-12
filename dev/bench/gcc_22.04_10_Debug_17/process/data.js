window.BENCHMARK_DATA = {
  "lastUpdate": 1702388122807,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-10 22.04 Debug c++-17": [
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381116815,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14957.134594444893,
            "unit": "ns/iter",
            "extra": "iterations: 46837\ncpu: 14955.415590238486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 146157.29247572646,
            "unit": "ns/iter",
            "extra": "iterations: 5768\ncpu: 146152.1151178918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 277284.9044423123,
            "unit": "ns/iter",
            "extra": "iterations: 3129\ncpu: 277269.83061681053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 406724.2052606736,
            "unit": "ns/iter",
            "extra": "iterations: 2129\ncpu: 406709.3471113199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 545713.2459827058,
            "unit": "ns/iter",
            "extra": "iterations: 1618\ncpu: 545686.8974042026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 550578.0949999917,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 550568.1999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 645961.9510000038,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 645905.9000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 750198.2577235776,
            "unit": "ns/iter",
            "extra": "iterations: 1230\ncpu: 750172.0325203248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 857542.9898617539,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 857484.8847926261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11900.392646507473,
            "unit": "ns/iter",
            "extra": "iterations: 58666\ncpu: 11900.20284321411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9816.484282894187,
            "unit": "ns/iter",
            "extra": "iterations: 71419\ncpu: 9816.023747182127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9839.618673368626,
            "unit": "ns/iter",
            "extra": "iterations: 72017\ncpu: 9839.329602732681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9861.825825488371,
            "unit": "ns/iter",
            "extra": "iterations: 71170\ncpu: 9861.724041028516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16040.430158110981,
            "unit": "ns/iter",
            "extra": "iterations: 43577\ncpu: 16039.591986598434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63259.42189467531,
            "unit": "ns/iter",
            "extra": "iterations: 13501\ncpu: 63258.32160580703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 324002.1624384798,
            "unit": "ns/iter",
            "extra": "iterations: 2641\ncpu: 323988.67853085976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 259043.4905832236,
            "unit": "ns/iter",
            "extra": "iterations: 3292\ncpu: 259040.61360874804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 259532.2044350059,
            "unit": "ns/iter",
            "extra": "iterations: 3292\ncpu: 259525.4860267315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 255667.42595923544,
            "unit": "ns/iter",
            "extra": "iterations: 3336\ncpu: 255660.55155875254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 559551.7925973086,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 559531.0784939377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4584652.54679799,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4584400.985221664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3745908.3253011215,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3745826.9076305223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3736286.602409529,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3736176.305220879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3729597.401606459,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3729370.682730932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2148157.3533487874,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2148120.092378755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3666065.2549021416,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3665852.9411764718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14444661.418918725,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14444286.486486476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6498342.779999576,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6497664.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17730810.400000032,
            "unit": "ns/iter",
            "extra": "iterations: 60\ncpu: 17730435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 70685.566617379,
            "unit": "ns/iter",
            "extra": "iterations: 12174\ncpu: 70680.45013964198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 359275.64690939087,
            "unit": "ns/iter",
            "extra": "iterations: 2362\ncpu: 359270.956816257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 293201.3075630165,
            "unit": "ns/iter",
            "extra": "iterations: 2975\ncpu: 293190.1176470581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 288837.4709851499,
            "unit": "ns/iter",
            "extra": "iterations: 2964\ncpu: 288828.10391363146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 283355.67127344484,
            "unit": "ns/iter",
            "extra": "iterations: 3039\ncpu: 283001.8098058568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 575829.859800641,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 575800.3322259138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4654419.487562236,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4654218.90547265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3781112.5060727824,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3780953.8461538446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3756577.629032211,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3756262.500000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3762936.3441296094,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3762781.376518209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2192391.787735861,
            "unit": "ns/iter",
            "extra": "iterations: 424\ncpu: 2192270.9905660427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3666515.6889762417,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3666407.480314949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14908772.208332581,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14908195.833333299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6499216.880000063,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6499104.999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 60258.446199998165,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60254.61999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 317403.6181146041,
            "unit": "ns/iter",
            "extra": "iterations: 2705\ncpu: 317394.4177449175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 257980.02140489055,
            "unit": "ns/iter",
            "extra": "iterations: 3317\ncpu: 257964.84775399565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 257915.1705402987,
            "unit": "ns/iter",
            "extra": "iterations: 3313\ncpu: 257901.23754904885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 252705.67503692943,
            "unit": "ns/iter",
            "extra": "iterations: 3385\ncpu: 252704.78581979277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 549671.6475047288,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 549645.0410612739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4603166.579207788,
            "unit": "ns/iter",
            "extra": "iterations: 202\ncpu: 4603025.742574274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3760024.796747992,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3759846.747967474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3725852.7120000054,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3725672.000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3752042.694779254,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3751916.465863463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2170255.88344988,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2170148.0186480177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3642668.7764705378,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3642545.4901960813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5610.394784382193,
            "unit": "ns/iter",
            "extra": "iterations: 124549\ncpu: 5609.947891994279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37816.273917749226,
            "unit": "ns/iter",
            "extra": "iterations: 18480\ncpu: 37814.85930735907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30949.69169541092,
            "unit": "ns/iter",
            "extra": "iterations: 22614\ncpu: 30947.780136199068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30518.672152616324,
            "unit": "ns/iter",
            "extra": "iterations: 22907\ncpu: 30517.728205352138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23491.65476910679,
            "unit": "ns/iter",
            "extra": "iterations: 29754\ncpu: 23490.169388989678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 148240.61921934574,
            "unit": "ns/iter",
            "extra": "iterations: 4714\ncpu: 148234.98090793443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 306680.0197281921,
            "unit": "ns/iter",
            "extra": "iterations: 2281\ncpu: 306659.4037702724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74973.81624343814,
            "unit": "ns/iter",
            "extra": "iterations: 9333\ncpu: 74971.08111003842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74433.49478612369,
            "unit": "ns/iter",
            "extra": "iterations: 9398\ncpu: 74431.55990636373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74720.18345784403,
            "unit": "ns/iter",
            "extra": "iterations: 9370\ncpu: 74719.22091782381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 155087.5070859203,
            "unit": "ns/iter",
            "extra": "iterations: 4516\ncpu: 155077.63507528807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 147477.8877422044,
            "unit": "ns/iter",
            "extra": "iterations: 4748\ncpu: 147465.269587196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43315.95617998411,
            "unit": "ns/iter",
            "extra": "iterations: 16157\ncpu: 43315.84452559238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 210643.60770155347,
            "unit": "ns/iter",
            "extra": "iterations: 3324\ncpu: 210633.48375451483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 173466.75186104502,
            "unit": "ns/iter",
            "extra": "iterations: 4030\ncpu: 173460.66997518472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 172266.34451294172,
            "unit": "ns/iter",
            "extra": "iterations: 4055\ncpu: 172257.04069050585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 173636.27365284177,
            "unit": "ns/iter",
            "extra": "iterations: 4027\ncpu: 173630.79215296585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 295426.5021061546,
            "unit": "ns/iter",
            "extra": "iterations: 2374\ncpu: 295409.1828138127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1288801.6924493022,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1288761.6942909698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1078474.1400000432,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1078417.384615394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1070242.7374045183,
            "unit": "ns/iter",
            "extra": "iterations: 655\ncpu: 1070238.6259542033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1066879.6773211327,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1066844.9010654462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 676245.9903288083,
            "unit": "ns/iter",
            "extra": "iterations: 1034\ncpu: 676186.3636363591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1062397.2754946721,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1062350.3805175058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44455.70380746204,
            "unit": "ns/iter",
            "extra": "iterations: 15706\ncpu: 44451.349802622986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 216557.48794063105,
            "unit": "ns/iter",
            "extra": "iterations: 3234\ncpu: 216553.21583178997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 178852.16257669748,
            "unit": "ns/iter",
            "extra": "iterations: 3912\ncpu: 178843.35378323184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 176563.88709271012,
            "unit": "ns/iter",
            "extra": "iterations: 3959\ncpu: 176560.29300328248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 177869.8321483064,
            "unit": "ns/iter",
            "extra": "iterations: 3938\ncpu: 177854.8247841519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 296289.1428571487,
            "unit": "ns/iter",
            "extra": "iterations: 2359\ncpu: 296276.60025434324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1283899.985347991,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1283867.032967045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1076355.8230769378,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1076341.5384615464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1070669.1219512576,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1070632.0121951224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1075094.9892308025,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1074991.6923077106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 679907.5053450165,
            "unit": "ns/iter",
            "extra": "iterations: 1029\ncpu: 679883.284742464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1066572.0913241424,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1066500.152207004 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "7f7a954178065768f16bab445a1789e66eddbd11",
          "message": "Add Clang Builds",
          "timestamp": "2023-12-12T14:44:55+03:00",
          "tree_id": "5a4deefbb08f6ba5a30c260d4700f1c6aeccac34",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7f7a954178065768f16bab445a1789e66eddbd11"
        },
        "date": 1702382264699,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15360.145841789272,
            "unit": "ns/iter",
            "extra": "iterations: 46811\ncpu: 15359.908995748865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 147793.2172335627,
            "unit": "ns/iter",
            "extra": "iterations: 4410\ncpu: 147784.85260770976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 280495.2334630306,
            "unit": "ns/iter",
            "extra": "iterations: 3084\ncpu: 280485.11673151754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 412661.67330488027,
            "unit": "ns/iter",
            "extra": "iterations: 2109\ncpu: 412648.93314367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 549640.3842302941,
            "unit": "ns/iter",
            "extra": "iterations: 1598\ncpu: 549635.5444305381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 546895.0349999772,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 546881.0999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 661345.1309999903,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 661311.9000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 762460.1663920901,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 762449.5057660622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 866377.0290262294,
            "unit": "ns/iter",
            "extra": "iterations: 1068\ncpu: 866359.4569288384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11831.662053237123,
            "unit": "ns/iter",
            "extra": "iterations: 57441\ncpu: 11831.265124214393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9874.951365091552,
            "unit": "ns/iter",
            "extra": "iterations: 71204\ncpu: 9874.9283748104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9810.539775992605,
            "unit": "ns/iter",
            "extra": "iterations: 71337\ncpu: 9810.252744017818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9850.868083428499,
            "unit": "ns/iter",
            "extra": "iterations: 71007\ncpu: 9850.516146295415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16119.862596475847,
            "unit": "ns/iter",
            "extra": "iterations: 43405\ncpu: 16119.331874208048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63281.05367043506,
            "unit": "ns/iter",
            "extra": "iterations: 13527\ncpu: 63278.265690840584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 326839.0675781107,
            "unit": "ns/iter",
            "extra": "iterations: 2560\ncpu: 326819.21874999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 260700.83820842145,
            "unit": "ns/iter",
            "extra": "iterations: 3282\ncpu: 260695.5210237661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 261163.20128087298,
            "unit": "ns/iter",
            "extra": "iterations: 3279\ncpu: 261155.65721256478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 259650.85766423217,
            "unit": "ns/iter",
            "extra": "iterations: 3288\ncpu: 259641.0583941609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 564729.8731487567,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 564708.6284610432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4587971.866995084,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4587785.714285705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3770474.7165991045,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3770360.32388664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3729281.476000096,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3729141.1999999867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3760190.504032327,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3759978.6290322444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2157047.885780834,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2156979.9533799537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3650547.843137345,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3650367.058823541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14470145.027026726,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14469831.081081111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6284902.080000166,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6284689.000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17741297.26666634,
            "unit": "ns/iter",
            "extra": "iterations: 60\ncpu: 17740894.999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 68710.93885298517,
            "unit": "ns/iter",
            "extra": "iterations: 12380\ncpu: 68708.6106623585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 359427.6285714109,
            "unit": "ns/iter",
            "extra": "iterations: 2380\ncpu: 359423.4033613445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 287223.37533513026,
            "unit": "ns/iter",
            "extra": "iterations: 2984\ncpu: 287212.26541554957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 289500.1265993171,
            "unit": "ns/iter",
            "extra": "iterations: 2970\ncpu: 289492.4242424234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 287147.96375838615,
            "unit": "ns/iter",
            "extra": "iterations: 2980\ncpu: 287147.1476510076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 584634.0635026827,
            "unit": "ns/iter",
            "extra": "iterations: 1496\ncpu: 584619.8529411803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4670966.608040003,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 4670915.577889436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3839644.1028807103,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3839563.7860082304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3806890.979166629,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3806816.2500000116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3800778.284552668,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3800703.252032518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2185883.18309853,
            "unit": "ns/iter",
            "extra": "iterations: 426\ncpu: 2185811.7370891995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3705958.8015872743,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3705882.5396825178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14807319.708332835,
            "unit": "ns/iter",
            "extra": "iterations: 72\ncpu: 14807034.722222174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6404670.829999759,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6404488.000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 60146.40070000042,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60144.05000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 314347.97438712104,
            "unit": "ns/iter",
            "extra": "iterations: 2733\ncpu: 314343.90779363294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 256302.2846475595,
            "unit": "ns/iter",
            "extra": "iterations: 3348\ncpu: 256297.19235364415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 255685.64876156338,
            "unit": "ns/iter",
            "extra": "iterations: 3351\ncpu: 255682.06505520636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 254875.73130772368,
            "unit": "ns/iter",
            "extra": "iterations: 3357\ncpu: 254869.91361334434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 551038.7739682229,
            "unit": "ns/iter",
            "extra": "iterations: 1575\ncpu: 551039.1111111101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4619206.371287002,
            "unit": "ns/iter",
            "extra": "iterations: 202\ncpu: 4618939.1089109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3828196.307692317,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3828002.8340081214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3745238.104000009,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3745119.6000000094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3773264.170040475,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3773289.878542527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2160855.222222132,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2160797.9166666707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3663170.4862746154,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3663125.882352923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5561.631051366003,
            "unit": "ns/iter",
            "extra": "iterations: 125199\ncpu: 5561.480523007352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37536.67749382694,
            "unit": "ns/iter",
            "extra": "iterations: 18626\ncpu: 37535.98732953924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 29783.716990786685,
            "unit": "ns/iter",
            "extra": "iterations: 23448\ncpu: 29782.32685090433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30170.955901984045,
            "unit": "ns/iter",
            "extra": "iterations: 23221\ncpu: 30169.82903406393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23372.243817322076,
            "unit": "ns/iter",
            "extra": "iterations: 29801\ncpu: 23370.860038253973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 147838.75714886672,
            "unit": "ns/iter",
            "extra": "iterations: 4756\ncpu: 147833.7678721624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 307369.7846085823,
            "unit": "ns/iter",
            "extra": "iterations: 2261\ncpu: 307353.29500221455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 75275.52429695278,
            "unit": "ns/iter",
            "extra": "iterations: 9281\ncpu: 75275.42290701524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74936.74329092029,
            "unit": "ns/iter",
            "extra": "iterations: 9353\ncpu: 74937.41045653763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 75387.65434360348,
            "unit": "ns/iter",
            "extra": "iterations: 9278\ncpu: 75385.03987928467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 154256.46219969288,
            "unit": "ns/iter",
            "extra": "iterations: 4537\ncpu: 154250.5840864005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 147411.77033291326,
            "unit": "ns/iter",
            "extra": "iterations: 4746\ncpu: 147404.0876527592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43536.64578537865,
            "unit": "ns/iter",
            "extra": "iterations: 16075\ncpu: 43534.16485225493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 212856.75821168808,
            "unit": "ns/iter",
            "extra": "iterations: 3288\ncpu: 212845.04257907803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 174795.12059925369,
            "unit": "ns/iter",
            "extra": "iterations: 4005\ncpu: 174788.93882646738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 173824.0493150703,
            "unit": "ns/iter",
            "extra": "iterations: 4015\ncpu: 173814.07222913994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 174954.0024987603,
            "unit": "ns/iter",
            "extra": "iterations: 4002\ncpu: 174949.02548725376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 292692.036727884,
            "unit": "ns/iter",
            "extra": "iterations: 2396\ncpu: 292676.62771285325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1283783.8724584035,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1283796.303142333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1081857.9103554725,
            "unit": "ns/iter",
            "extra": "iterations: 647\ncpu: 1081856.2596599718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1080225.738058524,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1080168.412942992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1071493.2675840242,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1071455.5045871465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 675621.5395752402,
            "unit": "ns/iter",
            "extra": "iterations: 1036\ncpu: 675589.8648648594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1067183.7103658514,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1067194.5121951145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44341.9001841369,
            "unit": "ns/iter",
            "extra": "iterations: 15749\ncpu: 44339.39297733247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 217082.75155087264,
            "unit": "ns/iter",
            "extra": "iterations: 3224\ncpu: 217075.34119106742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 178672.00025464685,
            "unit": "ns/iter",
            "extra": "iterations: 3927\ncpu: 178662.31219760672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 177581.8623666916,
            "unit": "ns/iter",
            "extra": "iterations: 3938\ncpu: 177583.1640426597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 178806.15264638042,
            "unit": "ns/iter",
            "extra": "iterations: 3911\ncpu: 178805.29276399984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 297315.0114600941,
            "unit": "ns/iter",
            "extra": "iterations: 2356\ncpu: 297313.8370118836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1292022.0776340475,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1291992.606284646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1086323.2821705868,
            "unit": "ns/iter",
            "extra": "iterations: 645\ncpu: 1086302.6356588975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1079608.0308642366,
            "unit": "ns/iter",
            "extra": "iterations: 648\ncpu: 1079588.5802469223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1080514.8742236346,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1080484.161490695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 681410.977604647,
            "unit": "ns/iter",
            "extra": "iterations: 1027\ncpu: 681408.5686465455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1073948.6462480766,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1073945.0229709102 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "7d92f1613fa4ae9edff977fb9a4ee38db56bedcc",
          "message": "Enable another Clangs : try",
          "timestamp": "2023-12-12T16:01:28+03:00",
          "tree_id": "088c43bf274cde79393a5114d044a347c612360f",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7d92f1613fa4ae9edff977fb9a4ee38db56bedcc"
        },
        "date": 1702387023860,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14905.0815253124,
            "unit": "ns/iter",
            "extra": "iterations: 47151\ncpu: 14903.756017899941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 146918.40913021032,
            "unit": "ns/iter",
            "extra": "iterations: 5783\ncpu: 146908.26560608682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 278116.92815906886,
            "unit": "ns/iter",
            "extra": "iterations: 3118\ncpu: 278115.07376523415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 408934.10523833364,
            "unit": "ns/iter",
            "extra": "iterations: 2119\ncpu: 408931.4299197735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 545315.3559427777,
            "unit": "ns/iter",
            "extra": "iterations: 1607\ncpu: 545294.6484131925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 545977.8209999512,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 545975.4000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 651117.7660000272,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 651100.3999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 761759.6756535947,
            "unit": "ns/iter",
            "extra": "iterations: 1224\ncpu: 761730.8823529417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 864400.3652416045,
            "unit": "ns/iter",
            "extra": "iterations: 1076\ncpu: 864381.5985130114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11796.649507655746,
            "unit": "ns/iter",
            "extra": "iterations: 59308\ncpu: 11796.366426114535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9855.530808223073,
            "unit": "ns/iter",
            "extra": "iterations: 71020\ncpu: 9855.48014643762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9765.9992202401,
            "unit": "ns/iter",
            "extra": "iterations: 71817\ncpu: 9765.317403957277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9811.260545418754,
            "unit": "ns/iter",
            "extra": "iterations: 71358\ncpu: 9810.8355054794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16025.849433054878,
            "unit": "ns/iter",
            "extra": "iterations: 43655\ncpu: 16024.638643912496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 62522.73963588496,
            "unit": "ns/iter",
            "extra": "iterations: 13677\ncpu: 62519.353659428256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 326451.7457240667,
            "unit": "ns/iter",
            "extra": "iterations: 2631\ncpu: 326433.6374002279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 258174.86352657786,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 258162.22826086922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 257883.34168428037,
            "unit": "ns/iter",
            "extra": "iterations: 3313\ncpu: 257864.20162994272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 258454.30396608997,
            "unit": "ns/iter",
            "extra": "iterations: 3303\ncpu: 258445.38298516435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 564492.4923664195,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 564479.5801526707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4576327.256157705,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4576160.591133004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3768627.092741799,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3768570.161290318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3724619.4399999697,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3724521.1999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3745909.787148575,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3745851.807228907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2143153.771362607,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2143080.6004618905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3641360.564705899,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3641256.470588235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14353433.79729774,
            "unit": "ns/iter",
            "extra": "iterations: 74\ncpu: 14353231.081081074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6401399.579999634,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6401209.99999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17583784.200000234,
            "unit": "ns/iter",
            "extra": "iterations: 60\ncpu: 17583386.666666694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 68084.62952289416,
            "unit": "ns/iter",
            "extra": "iterations: 12492\ncpu: 68080.63560678845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 355250.15346329357,
            "unit": "ns/iter",
            "extra": "iterations: 2411\ncpu: 355230.48527581897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 286397.81915248814,
            "unit": "ns/iter",
            "extra": "iterations: 2997\ncpu: 286372.6726726736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 285638.8201199117,
            "unit": "ns/iter",
            "extra": "iterations: 3002\ncpu: 285627.28181212547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 284137.72166998516,
            "unit": "ns/iter",
            "extra": "iterations: 3018\ncpu: 284119.01921802724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 582408.5591397824,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 582375.672043009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4645401.5074629355,
            "unit": "ns/iter",
            "extra": "iterations: 201\ncpu: 4645191.044776117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3809971.4489796534,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3809681.2244898146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3778627.360323755,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3778504.0485830177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3775330.2024290645,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3775099.9999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2166290.6837208495,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2166167.4418604653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3682242.434782661,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3682068.3794466425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14696483.849315757,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14695273.972602751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6322983.219999969,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6322643.999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 59639.564600001904,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59634.51000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 315499.3382191246,
            "unit": "ns/iter",
            "extra": "iterations: 2729\ncpu: 315481.27519237745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 258585.97612571585,
            "unit": "ns/iter",
            "extra": "iterations: 3309\ncpu: 258567.39196131876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 258216.722909746,
            "unit": "ns/iter",
            "extra": "iterations: 3313\ncpu: 258146.75520676043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 256064.76807681375,
            "unit": "ns/iter",
            "extra": "iterations: 3333\ncpu: 256033.87338733827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 555186.3118622436,
            "unit": "ns/iter",
            "extra": "iterations: 1568\ncpu: 555152.4234693851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4606170.192118112,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4605873.399014766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3774386.1411291664,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3774182.258064527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3740452.7911645626,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3740267.4698795406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3756746.208835349,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3756499.598393552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2147789.5023041815,
            "unit": "ns/iter",
            "extra": "iterations: 434\ncpu: 2147724.8847926348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3640853.7647057353,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3640638.4313725573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5572.210719244844,
            "unit": "ns/iter",
            "extra": "iterations: 126035\ncpu: 5571.933986591039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 38059.182273602026,
            "unit": "ns/iter",
            "extra": "iterations: 18165\ncpu: 38056.553812276084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30100.998967652522,
            "unit": "ns/iter",
            "extra": "iterations: 23248\ncpu: 30098.584824501177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30318.522868164382,
            "unit": "ns/iter",
            "extra": "iterations: 23067\ncpu: 30316.677504660172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23426.249479270617,
            "unit": "ns/iter",
            "extra": "iterations: 29766\ncpu: 23423.75865080948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 147309.53021689248,
            "unit": "ns/iter",
            "extra": "iterations: 4749\ncpu: 147304.69572541633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 303122.9476190383,
            "unit": "ns/iter",
            "extra": "iterations: 2310\ncpu: 303113.93939393986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74750.52501603079,
            "unit": "ns/iter",
            "extra": "iterations: 9354\ncpu: 74747.51977763555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 75038.39379347282,
            "unit": "ns/iter",
            "extra": "iterations: 9345\ncpu: 75034.4676297487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74838.78962535872,
            "unit": "ns/iter",
            "extra": "iterations: 9369\ncpu: 74830.63293841403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 139847.38702595382,
            "unit": "ns/iter",
            "extra": "iterations: 5010\ncpu: 139839.2814371267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 146865.1683769586,
            "unit": "ns/iter",
            "extra": "iterations: 4775\ncpu: 146849.10994764458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43491.130902758334,
            "unit": "ns/iter",
            "extra": "iterations: 16073\ncpu: 43488.58956013178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 211761.35688295463,
            "unit": "ns/iter",
            "extra": "iterations: 3298\ncpu: 211737.2043662799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 174412.95049750985,
            "unit": "ns/iter",
            "extra": "iterations: 4020\ncpu: 174395.59701492483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 175481.67075306963,
            "unit": "ns/iter",
            "extra": "iterations: 3997\ncpu: 175475.9319489628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 175431.1979949993,
            "unit": "ns/iter",
            "extra": "iterations: 3990\ncpu: 175425.68922305532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 295147.38322089915,
            "unit": "ns/iter",
            "extra": "iterations: 2372\ncpu: 295134.6964586824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1292942.319778183,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1292889.0942698808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1081204.9214175935,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1081153.9291217278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1074569.8986174474,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1074486.6359446887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1074375.1349693735,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1074306.134969331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 671776.8175740201,
            "unit": "ns/iter",
            "extra": "iterations: 1047\ncpu: 671700.9551098306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1067296.4649390094,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1067242.9878048738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44451.50257126216,
            "unit": "ns/iter",
            "extra": "iterations: 15751\ncpu: 44448.09853342652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 215358.976022142,
            "unit": "ns/iter",
            "extra": "iterations: 3253\ncpu: 215352.07500768526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 178247.70073922485,
            "unit": "ns/iter",
            "extra": "iterations: 3923\ncpu: 178242.62044353806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 177823.17077510522,
            "unit": "ns/iter",
            "extra": "iterations: 3935\ncpu: 177815.42566709037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 180924.51522908334,
            "unit": "ns/iter",
            "extra": "iterations: 3907\ncpu: 180915.12669567514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 295016.7934232824,
            "unit": "ns/iter",
            "extra": "iterations: 2372\ncpu: 294998.4822934259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1290573.6727941446,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1290501.2867647128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1078998.2896763615,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1078853.1587056832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1072044.7423312373,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1071978.2208588987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1076099.548536163,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1076006.009245007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 676820.5618955235,
            "unit": "ns/iter",
            "extra": "iterations: 1034\ncpu: 676772.2437137308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1071721.01070336,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1071664.220183493 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "grem_snoort@protonmail.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "distinct": true,
          "id": "d1143eedaeca215bd4d59936eed187ebbc5a2705",
          "message": "uncomment",
          "timestamp": "2023-12-12T16:24:18+03:00",
          "tree_id": "24d13ef9110c03a703c985f6237d2ba22581ead7",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d1143eedaeca215bd4d59936eed187ebbc5a2705"
        },
        "date": 1702388119156,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14734.211219184752,
            "unit": "ns/iter",
            "extra": "iterations: 47704\ncpu: 14733.399714908603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 146022.5046280416,
            "unit": "ns/iter",
            "extra": "iterations: 5834\ncpu: 146015.51251285573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 277457.09207161417,
            "unit": "ns/iter",
            "extra": "iterations: 3128\ncpu: 277447.1867007672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 408779.9247058951,
            "unit": "ns/iter",
            "extra": "iterations: 2125\ncpu: 408765.3176470589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 544087.8157568275,
            "unit": "ns/iter",
            "extra": "iterations: 1612\ncpu: 544072.5186104216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 543447.5630000293,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543450.7999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 647841.2769999978,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 647828.8000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 754390.2824302028,
            "unit": "ns/iter",
            "extra": "iterations: 1218\ncpu: 754376.7651888338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 871392.760667886,
            "unit": "ns/iter",
            "extra": "iterations: 1078\ncpu: 871358.1632653056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11984.87727740951,
            "unit": "ns/iter",
            "extra": "iterations: 59223\ncpu: 11984.607331611045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9828.1033392608,
            "unit": "ns/iter",
            "extra": "iterations: 70854\ncpu: 9827.724616817693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9752.353367195614,
            "unit": "ns/iter",
            "extra": "iterations: 71662\ncpu: 9752.333175183498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9767.178524126566,
            "unit": "ns/iter",
            "extra": "iterations: 71727\ncpu: 9766.905070614948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15996.418416248021,
            "unit": "ns/iter",
            "extra": "iterations: 43820\ncpu: 15996.111364673654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63698.905464848925,
            "unit": "ns/iter",
            "extra": "iterations: 13413\ncpu: 63697.12965033923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 326167.24093656585,
            "unit": "ns/iter",
            "extra": "iterations: 2648\ncpu: 326158.4969788522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 262295.64460784267,
            "unit": "ns/iter",
            "extra": "iterations: 3264\ncpu: 262289.61397058837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 258790.1063314094,
            "unit": "ns/iter",
            "extra": "iterations: 3301\ncpu: 258782.09633444436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 258200.23614895178,
            "unit": "ns/iter",
            "extra": "iterations: 3303\ncpu: 258189.4338480165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 562167.3446508718,
            "unit": "ns/iter",
            "extra": "iterations: 1561\ncpu: 562152.338244716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4535385.941463441,
            "unit": "ns/iter",
            "extra": "iterations: 205\ncpu: 4535173.170731702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3729624.7091632155,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3729564.1434262902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3724297.6653386853,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3724202.390438245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3708763.450199141,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3708642.6294820625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2175331.739436536,
            "unit": "ns/iter",
            "extra": "iterations: 426\ncpu: 2175289.201877934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3647481.9212599425,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3647397.2440944915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 14532420.438356034,
            "unit": "ns/iter",
            "extra": "iterations: 73\ncpu: 14532013.698630128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 6303418.459999648,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6303151.000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 17802397.8500003,
            "unit": "ns/iter",
            "extra": "iterations: 60\ncpu: 17801754.999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 70014.95365676917,
            "unit": "ns/iter",
            "extra": "iterations: 12429\ncpu: 70011.32834499962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 358586.43160967936,
            "unit": "ns/iter",
            "extra": "iterations: 2398\ncpu: 358567.9316096732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 291469.65671642777,
            "unit": "ns/iter",
            "extra": "iterations: 2948\ncpu: 291455.05427408364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 289794.35244520457,
            "unit": "ns/iter",
            "extra": "iterations: 2965\ncpu: 289791.5008431715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 289468.37037037936,
            "unit": "ns/iter",
            "extra": "iterations: 2970\ncpu: 289457.4410774429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 584264.2303030376,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 584249.2929292939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 4608726.683168435,
            "unit": "ns/iter",
            "extra": "iterations: 202\ncpu: 4608629.207920793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 3792293.548780605,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3792098.373983725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 3788885.390244006,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3788763.414634152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 3774586.1088708006,
            "unit": "ns/iter",
            "extra": "iterations: 248\ncpu: 3774490.7258064575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 2200321.2677725405,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 2200263.5071089943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 3666239.2480316497,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3666087.7952755913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 14876763.028169047,
            "unit": "ns/iter",
            "extra": "iterations: 71\ncpu: 14876135.211267583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 6405542.869999863,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6405507.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 60054.15779999907,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60051.88999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 316391.7411111091,
            "unit": "ns/iter",
            "extra": "iterations: 2700\ncpu: 316382.0370370361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 259625.3195751145,
            "unit": "ns/iter",
            "extra": "iterations: 3295\ncpu: 259607.4051593322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 257932.42203491819,
            "unit": "ns/iter",
            "extra": "iterations: 3322\ncpu: 257925.94822396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 258056.52980332926,
            "unit": "ns/iter",
            "extra": "iterations: 3305\ncpu: 258044.08472012103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 552141.1404958786,
            "unit": "ns/iter",
            "extra": "iterations: 1573\ncpu: 552125.2383979617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 4582762.568627537,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4582623.52941177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 3741178.876000049,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3741050.7999999826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 3733855.6919999067,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3733730.0000000084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 3727313.4860557653,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3727189.243027887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 2170215.925581472,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2170139.0697674383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 3636748.415686395,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3636642.352941159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 5646.525210524152,
            "unit": "ns/iter",
            "extra": "iterations: 124095\ncpu: 5645.986542568185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 37972.94085027913,
            "unit": "ns/iter",
            "extra": "iterations: 18394\ncpu: 37971.74078503851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 30017.993017476594,
            "unit": "ns/iter",
            "extra": "iterations: 23344\ncpu: 30016.929403701368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 30248.011029888992,
            "unit": "ns/iter",
            "extra": "iterations: 23119\ncpu: 30246.81863402396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 23688.352939180913,
            "unit": "ns/iter",
            "extra": "iterations: 29481\ncpu: 23687.578440351546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 148384.57176320028,
            "unit": "ns/iter",
            "extra": "iterations: 4696\ncpu: 148379.5357751255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 301633.7563935636,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 301619.15908105456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 74716.12646133006,
            "unit": "ns/iter",
            "extra": "iterations: 8896\ncpu: 74715.87230215674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 74723.25455513915,
            "unit": "ns/iter",
            "extra": "iterations: 9385\ncpu: 74722.35482152445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 74676.09933915494,
            "unit": "ns/iter",
            "extra": "iterations: 9382\ncpu: 74673.4171818377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 155698.42731082448,
            "unit": "ns/iter",
            "extra": "iterations: 4533\ncpu: 155694.72755349756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 146987.60280276288,
            "unit": "ns/iter",
            "extra": "iterations: 4781\ncpu: 146985.35871156643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 43371.14906139663,
            "unit": "ns/iter",
            "extra": "iterations: 16141\ncpu: 43370.249674740844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 211449.7634278775,
            "unit": "ns/iter",
            "extra": "iterations: 3314\ncpu: 211447.16354858116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 173054.3775358727,
            "unit": "ns/iter",
            "extra": "iterations: 4042\ncpu: 173053.61207323213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 175299.8646200278,
            "unit": "ns/iter",
            "extra": "iterations: 3974\ncpu: 175297.38298942917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 174022.0072031766,
            "unit": "ns/iter",
            "extra": "iterations: 4026\ncpu: 174021.31147541216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 294546.4461798135,
            "unit": "ns/iter",
            "extra": "iterations: 2369\ncpu: 294545.2089489274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 1279378.5118830227,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1279364.3510054934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 1077453.1078582339,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1077439.5993836622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 1071242.3266871343,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1071228.067484672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 1068473.6585365918,
            "unit": "ns/iter",
            "extra": "iterations: 656\ncpu: 1068449.390243894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 679048.4790652096,
            "unit": "ns/iter",
            "extra": "iterations: 1027\ncpu: 679026.8743914275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 1063828.0882800657,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1063814.9162861349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 44728.687244376175,
            "unit": "ns/iter",
            "extra": "iterations: 15648\ncpu: 44728.11860940656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 213866.53229261813,
            "unit": "ns/iter",
            "extra": "iterations: 3267\ncpu: 213865.8402203831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 177948.1919756332,
            "unit": "ns/iter",
            "extra": "iterations: 3938\ncpu: 177947.68918232436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 178018.95686374122,
            "unit": "ns/iter",
            "extra": "iterations: 3941\ncpu: 178012.40801826864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 177421.81689069307,
            "unit": "ns/iter",
            "extra": "iterations: 3943\ncpu: 177418.33629216434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 295012.66694737034,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 295006.4842105253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 1277657.8244972804,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1277642.9616087761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 1074105.7776073497,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1074071.1656441565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 1075353.2940276037,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1075325.7274119388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 1071283.657975432,
            "unit": "ns/iter",
            "extra": "iterations: 652\ncpu: 1071223.0061349524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 682118.4961089663,
            "unit": "ns/iter",
            "extra": "iterations: 1028\ncpu: 682085.700389111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 1066317.329787298,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1066290.5775075927 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}