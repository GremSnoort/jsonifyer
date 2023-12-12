window.BENCHMARK_DATA = {
  "lastUpdate": 1702381117619,
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
      }
    ]
  }
}