window.BENCHMARK_DATA = {
  "lastUpdate": 1705771614652,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-7 20.04 Release c++-17": [
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397888369,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 998.2175152275549,
            "unit": "ns/iter",
            "extra": "iterations: 704153\ncpu: 998.2153026401933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20582.033194917378,
            "unit": "ns/iter",
            "extra": "iterations: 39976\ncpu: 20581.744046427855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 46342.450546601416,
            "unit": "ns/iter",
            "extra": "iterations: 19301\ncpu: 46341.57815657218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 57658.66610000217,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57656.700000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 70839.66810496607,
            "unit": "ns/iter",
            "extra": "iterations: 11356\ncpu: 70839.39767523781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 87935.19256106096,
            "unit": "ns/iter",
            "extra": "iterations: 9867\ncpu: 87931.7219012871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 106965.9708100208,
            "unit": "ns/iter",
            "extra": "iterations: 8222\ncpu: 106957.83264412546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 124679.45859155625,
            "unit": "ns/iter",
            "extra": "iterations: 7100\ncpu: 124668.4647887324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 152423.07309185318,
            "unit": "ns/iter",
            "extra": "iterations: 6184\ncpu: 152411.31953428194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 833.1784151711746,
            "unit": "ns/iter",
            "extra": "iterations: 846817\ncpu: 833.1077434675974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 651.9528408845174,
            "unit": "ns/iter",
            "extra": "iterations: 1085771\ncpu: 651.9053281032544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 641.5437731899757,
            "unit": "ns/iter",
            "extra": "iterations: 1016604\ncpu: 641.5018040456265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 653.6278143360386,
            "unit": "ns/iter",
            "extra": "iterations: 1049315\ncpu: 653.6064956662211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1325.7242741711987,
            "unit": "ns/iter",
            "extra": "iterations: 527466\ncpu: 1325.6837407529586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6283.519207397284,
            "unit": "ns/iter",
            "extra": "iterations: 132475\ncpu: 6283.495753915833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 34833.42661784834,
            "unit": "ns/iter",
            "extra": "iterations: 22669\ncpu: 34823.66227006044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 24767.499131713448,
            "unit": "ns/iter",
            "extra": "iterations: 33975\ncpu: 24767.17586460635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 24491.35418694541,
            "unit": "ns/iter",
            "extra": "iterations: 33903\ncpu: 24490.991947615243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 26821.975496750387,
            "unit": "ns/iter",
            "extra": "iterations: 32159\ncpu: 26821.468329239087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 58674.5808000046,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58668.04999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 645451.718000004,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 645429.3999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 518684.82699995866,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518683.8000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 516334.7750000185,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516323.100000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 521830.6369999937,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 521830.3000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 381755.9903804299,
            "unit": "ns/iter",
            "extra": "iterations: 2287\ncpu: 381749.89068648923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 520105.68200000766,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520095.2999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2944424.4888890036,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2944368.571428571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1271731.0387182645,
            "unit": "ns/iter",
            "extra": "iterations: 749\ncpu: 1271653.6715620821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3771704.8760000584,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3771478.799999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6298.7645971912625,
            "unit": "ns/iter",
            "extra": "iterations: 132594\ncpu: 6298.360408464958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 36254.49942766551,
            "unit": "ns/iter",
            "extra": "iterations: 22714\ncpu: 36252.5666989522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 26946.632471067347,
            "unit": "ns/iter",
            "extra": "iterations: 30501\ncpu: 26944.719845251027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 26641.917449860048,
            "unit": "ns/iter",
            "extra": "iterations: 30963\ncpu: 26639.870167619458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 27490.23515123134,
            "unit": "ns/iter",
            "extra": "iterations: 30053\ncpu: 27488.656706485173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 59657.52390000034,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59656.12 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 653826.8770000286,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 653793.8000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 529936.4580000087,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529886.7999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 524787.3459999823,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524786.2000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 532107.4749999753,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532043.9999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 385116.0520607437,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 385093.27548806835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 526369.8379999937,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526319.8999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 3079309.347540924,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3079088.8524590353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1279945.8277254293,
            "unit": "ns/iter",
            "extra": "iterations: 743\ncpu: 1279798.2503364673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6442.043528841642,
            "unit": "ns/iter",
            "extra": "iterations: 123780\ncpu: 6441.7434157376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 36996.53013123914,
            "unit": "ns/iter",
            "extra": "iterations: 22402\ncpu: 36995.397732345424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 26875.13552652879,
            "unit": "ns/iter",
            "extra": "iterations: 31005\ncpu: 26874.494436381134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 26811.83292916403,
            "unit": "ns/iter",
            "extra": "iterations: 31340\ncpu: 26810.858328015416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 28024.233086451935,
            "unit": "ns/iter",
            "extra": "iterations: 30109\ncpu: 28023.820120229968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 58108.357399999026,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58105.72999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 638635.0640000273,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 638633.900000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 531359.1839999958,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531358.6000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 524366.9160000195,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524355.2000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 520028.5369999733,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520019.6000000048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 389873.1860158257,
            "unit": "ns/iter",
            "extra": "iterations: 2274\ncpu: 389864.33597185713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 512363.2400000133,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512309.6999999959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 333.1129600273186,
            "unit": "ns/iter",
            "extra": "iterations: 2095582\ncpu: 333.0881826623802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2823.311671092789,
            "unit": "ns/iter",
            "extra": "iterations: 242865\ncpu: 2823.087723632475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1958.747468380867,
            "unit": "ns/iter",
            "extra": "iterations: 358565\ncpu: 1958.6270271777798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2133.8672418210904,
            "unit": "ns/iter",
            "extra": "iterations: 327912\ncpu: 2133.6651296689356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1637.7219732615392,
            "unit": "ns/iter",
            "extra": "iterations: 428448\ncpu: 1637.5830905967493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 12667.487739012327,
            "unit": "ns/iter",
            "extra": "iterations: 55175\ncpu: 12666.664250113228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 33565.79292010003,
            "unit": "ns/iter",
            "extra": "iterations: 20876\ncpu: 33563.426901705134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7908.378139747117,
            "unit": "ns/iter",
            "extra": "iterations: 85397\ncpu: 7908.246191318164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7937.560531037462,
            "unit": "ns/iter",
            "extra": "iterations: 88054\ncpu: 7937.127217389358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7980.755872454736,
            "unit": "ns/iter",
            "extra": "iterations: 88847\ncpu: 7980.241313719023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 17183.412796313227,
            "unit": "ns/iter",
            "extra": "iterations: 40371\ncpu: 17181.456986450692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 15876.087918219506,
            "unit": "ns/iter",
            "extra": "iterations: 44803\ncpu: 15874.780706649093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4375.01131492144,
            "unit": "ns/iter",
            "extra": "iterations: 159789\ncpu: 4374.694753706448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22789.91934330235,
            "unit": "ns/iter",
            "extra": "iterations: 30760\ncpu: 22788.02015604692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17719.379690216345,
            "unit": "ns/iter",
            "extra": "iterations: 39124\ncpu: 17717.712912790208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17837.91571184266,
            "unit": "ns/iter",
            "extra": "iterations: 39187\ncpu: 17836.177814070885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 18720.88132860349,
            "unit": "ns/iter",
            "extra": "iterations: 37212\ncpu: 18719.071804793948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 38431.97974472746,
            "unit": "ns/iter",
            "extra": "iterations: 18020\ncpu: 38428.98446170937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 156903.3220531532,
            "unit": "ns/iter",
            "extra": "iterations: 4403\ncpu: 156889.66613672668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 134860.40155490968,
            "unit": "ns/iter",
            "extra": "iterations: 5145\ncpu: 134856.50145772705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 133596.92112299806,
            "unit": "ns/iter",
            "extra": "iterations: 5236\ncpu: 133591.78762414062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 132981.13938473162,
            "unit": "ns/iter",
            "extra": "iterations: 5266\ncpu: 132975.04747436382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 81729.44646792822,
            "unit": "ns/iter",
            "extra": "iterations: 8621\ncpu: 81721.73761744612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 137814.56283395243,
            "unit": "ns/iter",
            "extra": "iterations: 5053\ncpu: 137801.00930140525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4331.272052908243,
            "unit": "ns/iter",
            "extra": "iterations: 162847\ncpu: 4330.960349284897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 22766.134666102163,
            "unit": "ns/iter",
            "extra": "iterations: 30713\ncpu: 22764.05105329972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17485.36473551567,
            "unit": "ns/iter",
            "extra": "iterations: 39700\ncpu: 17484.133501259606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17317.024211643024,
            "unit": "ns/iter",
            "extra": "iterations: 40559\ncpu: 17315.4860820042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18340.595705488915,
            "unit": "ns/iter",
            "extra": "iterations: 38002\ncpu: 18339.366349139433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 38083.76889895518,
            "unit": "ns/iter",
            "extra": "iterations: 18546\ncpu: 38080.16283834767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 155727.40615384345,
            "unit": "ns/iter",
            "extra": "iterations: 4550\ncpu: 155715.67032966952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 135919.35730813473,
            "unit": "ns/iter",
            "extra": "iterations: 5186\ncpu: 135912.57231006405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 133291.9370469253,
            "unit": "ns/iter",
            "extra": "iterations: 5242\ncpu: 133290.25181228493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 135309.86063382673,
            "unit": "ns/iter",
            "extra": "iterations: 5238\ncpu: 135301.68003054848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 79877.4004356256,
            "unit": "ns/iter",
            "extra": "iterations: 8723\ncpu: 79870.34277198194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 135474.76554379976,
            "unit": "ns/iter",
            "extra": "iterations: 5195\ncpu: 135464.793070261 ns\nthreads: 1"
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
          "id": "c96a03d62fd108220d1ee9e00340d51e289dfa36",
          "message": "Add compare for BMs, add parse data BMs",
          "timestamp": "2023-12-12T22:17:35+03:00",
          "tree_id": "f2fe56f9afc9ca6399f84dbb8347c53db7125ceb",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c96a03d62fd108220d1ee9e00340d51e289dfa36"
        },
        "date": 1702409081475,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 931.0372934434097,
            "unit": "ns/iter",
            "extra": "iterations: 754878\ncpu: 931.0239535395125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18977.36286418824,
            "unit": "ns/iter",
            "extra": "iterations: 43796\ncpu: 18976.981916156725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43549.78855577897,
            "unit": "ns/iter",
            "extra": "iterations: 20814\ncpu: 43548.9862592486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 54159.8477999969,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54158.40999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 67261.2398297849,
            "unit": "ns/iter",
            "extra": "iterations: 11750\ncpu: 67260.40851063831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 84368.76507417097,
            "unit": "ns/iter",
            "extra": "iterations: 10382\ncpu: 84365.91215565403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 100739.55285780501,
            "unit": "ns/iter",
            "extra": "iterations: 8608\ncpu: 100738.62685873607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 128340.60800644816,
            "unit": "ns/iter",
            "extra": "iterations: 7444\ncpu: 128335.72004298758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 143485.7973041219,
            "unit": "ns/iter",
            "extra": "iterations: 5935\ncpu: 143480.06739679846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 743.8978477957983,
            "unit": "ns/iter",
            "extra": "iterations: 929094\ncpu: 743.8828579239566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 604.3390414766342,
            "unit": "ns/iter",
            "extra": "iterations: 1160389\ncpu: 604.3317370295651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 613.5229172938873,
            "unit": "ns/iter",
            "extra": "iterations: 1145925\ncpu: 613.5191221065954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 609.6338685017196,
            "unit": "ns/iter",
            "extra": "iterations: 1145247\ncpu: 609.6112890930955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1286.5817152455481,
            "unit": "ns/iter",
            "extra": "iterations: 551268\ncpu: 1286.5647924421512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6108.77831710406,
            "unit": "ns/iter",
            "extra": "iterations: 135148\ncpu: 6108.632018231858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 33987.201659274,
            "unit": "ns/iter",
            "extra": "iterations: 24348\ncpu: 33987.24741251853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 25314.74463889514,
            "unit": "ns/iter",
            "extra": "iterations: 32456\ncpu: 25313.858762632484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 25185.735871450088,
            "unit": "ns/iter",
            "extra": "iterations: 32859\ncpu: 25185.480385891224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 25320.47537604996,
            "unit": "ns/iter",
            "extra": "iterations: 32509\ncpu: 25319.732997016232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 57205.46789999616,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57205.52999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 598151.689999952,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598111.3000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 608333.0621468725,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 608317.5847457616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 612571.0327983276,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 612548.1507327268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 500350.03099998226,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500350.4999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 372277.91147401626,
            "unit": "ns/iter",
            "extra": "iterations: 2327\ncpu: 372264.67554791545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 602785.1016949177,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 602772.3163841815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2918053.3881986896,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2918010.5590062076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1295245.4295977054,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1295207.4712643705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3790729.381974263,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 3790639.0557939885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6065.099134380381,
            "unit": "ns/iter",
            "extra": "iterations: 138398\ncpu: 6064.898336681166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 33566.966901269036,
            "unit": "ns/iter",
            "extra": "iterations: 24865\ncpu: 33566.760506736355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 25054.2298455222,
            "unit": "ns/iter",
            "extra": "iterations: 33144\ncpu: 25053.708061790952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 25364.831807640796,
            "unit": "ns/iter",
            "extra": "iterations: 32772\ncpu: 25364.341511046012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 25240.123676097246,
            "unit": "ns/iter",
            "extra": "iterations: 32763\ncpu: 25239.587339376896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 58892.08199999984,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58891.54999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 622739.6280000336,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 622740.6000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 510402.9290000085,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510383.1999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 509538.8459999981,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509527.2000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 506973.94700000586,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506963.59999999887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 369800.0313426495,
            "unit": "ns/iter",
            "extra": "iterations: 2361\ncpu: 369790.89368911524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 501039.9469999811,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501040.39999999374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 3022129.4627831546,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3021993.5275080935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1330855.738396616,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1330817.5808720137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6031.361008538987,
            "unit": "ns/iter",
            "extra": "iterations: 138656\ncpu: 6031.230527348245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 33640.71673201466,
            "unit": "ns/iter",
            "extra": "iterations: 24994\ncpu: 33640.541730015335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 25102.215486303794,
            "unit": "ns/iter",
            "extra": "iterations: 33436\ncpu: 25101.483431032426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 25662.791975385022,
            "unit": "ns/iter",
            "extra": "iterations: 31852\ncpu: 25662.438779354492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 24757.580910034725,
            "unit": "ns/iter",
            "extra": "iterations: 33735\ncpu: 24756.89936267977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 57296.58590000214,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57296.639999999854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 623040.8979999992,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 623046.3999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 505416.59999998956,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505393.89999999426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 505429.9650000189,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505424.89999999414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 500662.6730000221,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500645.3000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 384246.2654294458,
            "unit": "ns/iter",
            "extra": "iterations: 2317\ncpu: 384227.5787656451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 509254.95800004224,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509255.39999999356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 356.6027060754972,
            "unit": "ns/iter",
            "extra": "iterations: 1955230\ncpu: 356.59605263830935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2582.3849503634783,
            "unit": "ns/iter",
            "extra": "iterations: 270970\ncpu: 2582.3873491530535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1979.1518313807342,
            "unit": "ns/iter",
            "extra": "iterations: 353886\ncpu: 1979.0664225202447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1966.790346380194,
            "unit": "ns/iter",
            "extra": "iterations: 354437\ncpu: 1966.744442594865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1518.7910303545186,
            "unit": "ns/iter",
            "extra": "iterations: 461579\ncpu: 1518.7120731229152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 12156.977129966781,
            "unit": "ns/iter",
            "extra": "iterations: 57630\ncpu: 12156.715252472697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 32036.52702761666,
            "unit": "ns/iter",
            "extra": "iterations: 22921\ncpu: 32035.338772304887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7579.6446499482545,
            "unit": "ns/iter",
            "extra": "iterations: 92672\ncpu: 7579.470606008237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7510.911552365449,
            "unit": "ns/iter",
            "extra": "iterations: 93219\ncpu: 7510.8357738229615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7553.17492855998,
            "unit": "ns/iter",
            "extra": "iterations: 92735\ncpu: 7552.653259287257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15815.343882906478,
            "unit": "ns/iter",
            "extra": "iterations: 44204\ncpu: 15814.73848520489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 13398.626315788903,
            "unit": "ns/iter",
            "extra": "iterations: 52250\ncpu: 13398.074641148278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4066.2697730211466,
            "unit": "ns/iter",
            "extra": "iterations: 172571\ncpu: 4066.1049654924577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 20638.663676337022,
            "unit": "ns/iter",
            "extra": "iterations: 33887\ncpu: 20637.447988904485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 16327.641199587846,
            "unit": "ns/iter",
            "extra": "iterations: 42748\ncpu: 16326.819968185573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 16492.537440467135,
            "unit": "ns/iter",
            "extra": "iterations: 42414\ncpu: 16491.679634082924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 17598.798034046198,
            "unit": "ns/iter",
            "extra": "iterations: 40591\ncpu: 17598.26316178487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 35803.73078105608,
            "unit": "ns/iter",
            "extra": "iterations: 19512\ncpu: 35801.89114391135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 147555.9860759518,
            "unit": "ns/iter",
            "extra": "iterations: 4740\ncpu: 147552.2573839675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 130104.90679069461,
            "unit": "ns/iter",
            "extra": "iterations: 5375\ncpu: 130104.96744186111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 128558.97665869792,
            "unit": "ns/iter",
            "extra": "iterations: 5441\ncpu: 128555.13692335872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 131282.35687524287,
            "unit": "ns/iter",
            "extra": "iterations: 5338\ncpu: 131279.16822780046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 77336.38747099429,
            "unit": "ns/iter",
            "extra": "iterations: 9051\ncpu: 77333.88575848013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 138520.32675276275,
            "unit": "ns/iter",
            "extra": "iterations: 5420\ncpu: 138517.19557195468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4213.872673662171,
            "unit": "ns/iter",
            "extra": "iterations: 167538\ncpu: 4213.815970108323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 21116.101454524003,
            "unit": "ns/iter",
            "extra": "iterations: 33138\ncpu: 21115.746273160777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 16731.1803614867,
            "unit": "ns/iter",
            "extra": "iterations: 41938\ncpu: 16731.007678000988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 16568.172333081347,
            "unit": "ns/iter",
            "extra": "iterations: 42296\ncpu: 16567.885852089967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 17384.720578731423,
            "unit": "ns/iter",
            "extra": "iterations: 40226\ncpu: 17384.482672897884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 35585.028783564034,
            "unit": "ns/iter",
            "extra": "iterations: 19664\ncpu: 35584.49959316527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 147269.8946135831,
            "unit": "ns/iter",
            "extra": "iterations: 4697\ncpu: 147269.1505216092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 129107.91372621364,
            "unit": "ns/iter",
            "extra": "iterations: 5413\ncpu: 129101.92130057137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 128559.00386030161,
            "unit": "ns/iter",
            "extra": "iterations: 5440\ncpu: 128557.13235293944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 130539.87877094664,
            "unit": "ns/iter",
            "extra": "iterations: 5370\ncpu: 130537.95158286601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 78333.52472589057,
            "unit": "ns/iter",
            "extra": "iterations: 8938\ncpu: 78331.99820989075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 128249.64297490085,
            "unit": "ns/iter",
            "extra": "iterations: 5459\ncpu: 128249.73438358807 ns\nthreads: 1"
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
          "id": "a2fdd4a8b08935139af31fad37c86ca12b1dc63b",
          "message": "Add BMs; Setters Improve",
          "timestamp": "2023-12-12T23:14:54+03:00",
          "tree_id": "e41c2c9b1f31589e76e0363e3cfb6528364c4fdc",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2fdd4a8b08935139af31fad37c86ca12b1dc63b"
        },
        "date": 1702412539689,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 838.1712538742133,
            "unit": "ns/iter",
            "extra": "iterations: 830171\ncpu: 838.1565966529787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12449.0830300479,
            "unit": "ns/iter",
            "extra": "iterations: 66494\ncpu: 12448.37278551448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26905.89543120932,
            "unit": "ns/iter",
            "extra": "iterations: 30774\ncpu: 26905.37466692663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 42655.44741505809,
            "unit": "ns/iter",
            "extra": "iterations: 19749\ncpu: 42653.54701503876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53678.795276654855,
            "unit": "ns/iter",
            "extra": "iterations: 14820\ncpu: 53674.52766531715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55468.225999999275,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55462.56000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 67031.4076566132,
            "unit": "ns/iter",
            "extra": "iterations: 12930\ncpu: 67031.16009280746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 77541.9141684488,
            "unit": "ns/iter",
            "extra": "iterations: 11208\ncpu: 77539.57887223417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 89035.4670670867,
            "unit": "ns/iter",
            "extra": "iterations: 9823\ncpu: 89028.61651226712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 696.3474991727002,
            "unit": "ns/iter",
            "extra": "iterations: 1006247\ncpu: 696.3082622855026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 610.3091915428834,
            "unit": "ns/iter",
            "extra": "iterations: 1147816\ncpu: 610.2623591237609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 596.4117760475125,
            "unit": "ns/iter",
            "extra": "iterations: 1177339\ncpu: 596.3700344590643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 602.3975522464534,
            "unit": "ns/iter",
            "extra": "iterations: 1157878\ncpu: 602.3801298582408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1079.7946007856347,
            "unit": "ns/iter",
            "extra": "iterations: 666171\ncpu: 1079.7630037933204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4733.456609427834,
            "unit": "ns/iter",
            "extra": "iterations: 158168\ncpu: 4733.190025795354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20057.286874483336,
            "unit": "ns/iter",
            "extra": "iterations: 41126\ncpu: 20056.70378835773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15944.380905436283,
            "unit": "ns/iter",
            "extra": "iterations: 51732\ncpu: 15943.854867393497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15989.289363516524,
            "unit": "ns/iter",
            "extra": "iterations: 51596\ncpu: 15988.568881308616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15428.840537999356,
            "unit": "ns/iter",
            "extra": "iterations: 53160\ncpu: 15428.203536493553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 44124.85658299002,
            "unit": "ns/iter",
            "extra": "iterations: 18882\ncpu: 44123.212583412766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 539429.5835336503,
            "unit": "ns/iter",
            "extra": "iterations: 1664\ncpu: 539371.0937499992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 430112.6447303096,
            "unit": "ns/iter",
            "extra": "iterations: 2021\ncpu: 430084.1662543298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 431502.2333664306,
            "unit": "ns/iter",
            "extra": "iterations: 2014\ncpu: 431480.68520357466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 431448.20706818736,
            "unit": "ns/iter",
            "extra": "iterations: 2009\ncpu: 431432.6530612245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 268587.04643962416,
            "unit": "ns/iter",
            "extra": "iterations: 3230\ncpu: 268571.30030959705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 432183.9307078926,
            "unit": "ns/iter",
            "extra": "iterations: 2006\ncpu: 432167.8464606177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2140080.340326372,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2139976.689976692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 846858.7835144935,
            "unit": "ns/iter",
            "extra": "iterations: 1104\ncpu: 846813.8586956526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2805091.7469879934,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2804947.8915662714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4521.648057665258,
            "unit": "ns/iter",
            "extra": "iterations: 173554\ncpu: 4521.540846076723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20685.950486911268,
            "unit": "ns/iter",
            "extra": "iterations: 40151\ncpu: 20685.2332445021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 17882.99570259443,
            "unit": "ns/iter",
            "extra": "iterations: 46307\ncpu: 17882.000561470195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 15960.694324734619,
            "unit": "ns/iter",
            "extra": "iterations: 49425\ncpu: 15959.856348002084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 16910.561156355307,
            "unit": "ns/iter",
            "extra": "iterations: 51818\ncpu: 16910.120035508833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 45118.132224689005,
            "unit": "ns/iter",
            "extra": "iterations: 18461\ncpu: 45116.098802881774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 545389.3279200483,
            "unit": "ns/iter",
            "extra": "iterations: 1601\ncpu: 545362.3985009395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 445743.985112952,
            "unit": "ns/iter",
            "extra": "iterations: 1948\ncpu: 445744.0965092414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 440505.4611111143,
            "unit": "ns/iter",
            "extra": "iterations: 1980\ncpu: 440487.5757575758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 437852.86666668544,
            "unit": "ns/iter",
            "extra": "iterations: 1995\ncpu: 437821.1027568917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 263735.0470304559,
            "unit": "ns/iter",
            "extra": "iterations: 3317\ncpu: 263723.6056677736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 440209.7182320484,
            "unit": "ns/iter",
            "extra": "iterations: 1991\ncpu: 440184.27925665455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2174254.860189608,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 2173918.95734597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 853121.4271402807,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 853076.4116575586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4972.0003417634125,
            "unit": "ns/iter",
            "extra": "iterations: 158004\ncpu: 4971.839953418899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 22064.16246103788,
            "unit": "ns/iter",
            "extra": "iterations: 36895\ncpu: 22063.444911234714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 17706.681822098493,
            "unit": "ns/iter",
            "extra": "iterations: 46430\ncpu: 17705.621365496416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 16488.88981306934,
            "unit": "ns/iter",
            "extra": "iterations: 46167\ncpu: 16488.132215652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15926.343413196322,
            "unit": "ns/iter",
            "extra": "iterations: 51588\ncpu: 15925.707528882693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 43520.02710796035,
            "unit": "ns/iter",
            "extra": "iterations: 19035\ncpu: 43518.66036249001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 519610.7073608764,
            "unit": "ns/iter",
            "extra": "iterations: 1671\ncpu: 519580.6702573308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 434713.68753104954,
            "unit": "ns/iter",
            "extra": "iterations: 2013\ncpu: 434703.52707401785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 432827.54779592354,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 432802.22882615495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 431524.7700296825,
            "unit": "ns/iter",
            "extra": "iterations: 2022\ncpu: 431503.75865479826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 266204.7581521596,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 266196.5881642506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 431874.77951219963,
            "unit": "ns/iter",
            "extra": "iterations: 2050\ncpu: 431849.26829268056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 364.556779827998,
            "unit": "ns/iter",
            "extra": "iterations: 1923773\ncpu: 364.55662908253464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1892.6558166946047,
            "unit": "ns/iter",
            "extra": "iterations: 347835\ncpu: 1892.5576782094952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1513.587913999088,
            "unit": "ns/iter",
            "extra": "iterations: 474367\ncpu: 1513.5574354877192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1557.64318692612,
            "unit": "ns/iter",
            "extra": "iterations: 459176\ncpu: 1557.5498283882457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1345.3707470090233,
            "unit": "ns/iter",
            "extra": "iterations: 519311\ncpu: 1345.3158126825765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8156.017303102594,
            "unit": "ns/iter",
            "extra": "iterations: 85476\ncpu: 8155.66474799954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21945.773758683605,
            "unit": "ns/iter",
            "extra": "iterations: 31378\ncpu: 21944.97099878863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5361.645634920741,
            "unit": "ns/iter",
            "extra": "iterations: 128520\ncpu: 5361.638655462238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5403.393222174731,
            "unit": "ns/iter",
            "extra": "iterations: 131104\ncpu: 5403.170002440818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5418.894337274443,
            "unit": "ns/iter",
            "extra": "iterations: 128560\ncpu: 5418.574984443076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11191.292326528304,
            "unit": "ns/iter",
            "extra": "iterations: 62892\ncpu: 11191.00044520769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10303.427185170916,
            "unit": "ns/iter",
            "extra": "iterations: 68839\ncpu: 10302.706314734321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3365.011076620515,
            "unit": "ns/iter",
            "extra": "iterations: 207464\ncpu: 3364.9033085258316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16358.954744559504,
            "unit": "ns/iter",
            "extra": "iterations: 42006\ncpu: 16357.803647097988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12930.757309507035,
            "unit": "ns/iter",
            "extra": "iterations: 53834\ncpu: 12930.358137979649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13206.808236141722,
            "unit": "ns/iter",
            "extra": "iterations: 54103\ncpu: 13205.794503077583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13815.768434358977,
            "unit": "ns/iter",
            "extra": "iterations: 49839\ncpu: 13815.265153795337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29576.54135529851,
            "unit": "ns/iter",
            "extra": "iterations: 23552\ncpu: 29575.1783288043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 112164.12309421378,
            "unit": "ns/iter",
            "extra": "iterations: 6231\ncpu: 112155.80163697776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 96252.2897054802,
            "unit": "ns/iter",
            "extra": "iterations: 7266\ncpu: 96248.80264244541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 96376.47132616043,
            "unit": "ns/iter",
            "extra": "iterations: 7254\ncpu: 96374.00055141919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 96636.26072562224,
            "unit": "ns/iter",
            "extra": "iterations: 7249\ncpu: 96636.21189129524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 61288.26404346356,
            "unit": "ns/iter",
            "extra": "iterations: 11411\ncpu: 61285.172202261856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 96832.63850742405,
            "unit": "ns/iter",
            "extra": "iterations: 7209\ncpu: 96829.4770425856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3304.1376032413477,
            "unit": "ns/iter",
            "extra": "iterations: 211761\ncpu: 3303.905818351878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 17224.24390009449,
            "unit": "ns/iter",
            "extra": "iterations: 41599\ncpu: 17223.387581431994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13161.830459932262,
            "unit": "ns/iter",
            "extra": "iterations: 53073\ncpu: 13161.41729316232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13185.719187886098,
            "unit": "ns/iter",
            "extra": "iterations: 53096\ncpu: 13185.51868313985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13750.118518663727,
            "unit": "ns/iter",
            "extra": "iterations: 50954\ncpu: 13749.74486792031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28659.481613285665,
            "unit": "ns/iter",
            "extra": "iterations: 24447\ncpu: 28658.612508692364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 111470.80836622529,
            "unit": "ns/iter",
            "extra": "iterations: 6335\ncpu: 111466.66140489327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 93614.88124499093,
            "unit": "ns/iter",
            "extra": "iterations: 7486\ncpu: 93610.09885118974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 93317.41119613242,
            "unit": "ns/iter",
            "extra": "iterations: 7449\ncpu: 93313.9616055841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 94313.07311827703,
            "unit": "ns/iter",
            "extra": "iterations: 7440\ncpu: 94307.35215053734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 61849.590503929394,
            "unit": "ns/iter",
            "extra": "iterations: 11331\ncpu: 61848.15108993055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 96005.12539313955,
            "unit": "ns/iter",
            "extra": "iterations: 7313\ncpu: 96001.69561055565 ns\nthreads: 1"
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
          "id": "3da6f92518ebbffed2e11d1053cee2ce52bff1f0",
          "message": "Upd README",
          "timestamp": "2023-12-13T00:12:53+03:00",
          "tree_id": "2f3e289da6746982a8c43b0c572e183f11742827",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/3da6f92518ebbffed2e11d1053cee2ce52bff1f0"
        },
        "date": 1702418355747,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 863.5549520997995,
            "unit": "ns/iter",
            "extra": "iterations: 786949\ncpu: 863.4736177312634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12450.167683839163,
            "unit": "ns/iter",
            "extra": "iterations: 66852\ncpu: 12449.507868126606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27221.99567592198,
            "unit": "ns/iter",
            "extra": "iterations: 30758\ncpu: 27220.394694063332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 42307.0533033014,
            "unit": "ns/iter",
            "extra": "iterations: 19980\ncpu: 42305.57557557558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 54226.79194906551,
            "unit": "ns/iter",
            "extra": "iterations: 14607\ncpu: 54222.24276032036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 56169.55170000324,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56169.46 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 67309.13095423659,
            "unit": "ns/iter",
            "extra": "iterations: 12806\ncpu: 67302.31141652346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 78617.70450899714,
            "unit": "ns/iter",
            "extra": "iterations: 11222\ncpu: 78613.1349135626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 89271.49078435685,
            "unit": "ns/iter",
            "extra": "iterations: 9766\ncpu: 89263.36268687282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 721.454701339112,
            "unit": "ns/iter",
            "extra": "iterations: 973914\ncpu: 721.4092825444552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 635.1961940033585,
            "unit": "ns/iter",
            "extra": "iterations: 1100579\ncpu: 635.1889323710524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 602.2949288971611,
            "unit": "ns/iter",
            "extra": "iterations: 1162331\ncpu: 602.2718141390009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 604.5996020317572,
            "unit": "ns/iter",
            "extra": "iterations: 1145820\ncpu: 604.5688677104614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1099.365021973583,
            "unit": "ns/iter",
            "extra": "iterations: 636674\ncpu: 1099.2845632144551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4988.5161182739575,
            "unit": "ns/iter",
            "extra": "iterations: 158919\ncpu: 4988.302216852609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20411.131695882028,
            "unit": "ns/iter",
            "extra": "iterations: 36683\ncpu: 20409.328571818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 15720.842713866554,
            "unit": "ns/iter",
            "extra": "iterations: 52147\ncpu: 15719.790208449194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15751.682948778864,
            "unit": "ns/iter",
            "extra": "iterations: 52225\ncpu: 15750.449018669186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 15737.683252033177,
            "unit": "ns/iter",
            "extra": "iterations: 52275\ncpu: 15736.9067431851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 44475.77773016941,
            "unit": "ns/iter",
            "extra": "iterations: 18671\ncpu: 44474.848695838475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 525211.1954161437,
            "unit": "ns/iter",
            "extra": "iterations: 1658\ncpu: 525205.9107358273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 432398.67351025663,
            "unit": "ns/iter",
            "extra": "iterations: 1997\ncpu: 432394.2914371562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 432746.8103277062,
            "unit": "ns/iter",
            "extra": "iterations: 2014\ncpu: 432742.35352532286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 432006.52345308434,
            "unit": "ns/iter",
            "extra": "iterations: 2004\ncpu: 431995.4091816366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 268050.87499999936,
            "unit": "ns/iter",
            "extra": "iterations: 3224\ncpu: 268045.59553349874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 428785.6869391675,
            "unit": "ns/iter",
            "extra": "iterations: 2006\ncpu: 428781.00697906263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2129155.8314088355,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2129123.5565819843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 853948.3378870592,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 853919.8542805103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2812471.503048815,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2812180.7926829318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4465.161364864245,
            "unit": "ns/iter",
            "extra": "iterations: 173966\ncpu: 4465.082257452605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20576.68820564419,
            "unit": "ns/iter",
            "extra": "iterations: 39680\ncpu: 20576.444052419403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16236.397417447239,
            "unit": "ns/iter",
            "extra": "iterations: 50725\ncpu: 16236.031542631834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 16244.496789190149,
            "unit": "ns/iter",
            "extra": "iterations: 50766\ncpu: 16244.283575621446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 16246.105683853486,
            "unit": "ns/iter",
            "extra": "iterations: 50793\ncpu: 16245.9000255941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 44919.73074840353,
            "unit": "ns/iter",
            "extra": "iterations: 18466\ncpu: 44918.65049279775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 542078.947467161,
            "unit": "ns/iter",
            "extra": "iterations: 1599\ncpu: 542069.1682301441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 444746.22165474953,
            "unit": "ns/iter",
            "extra": "iterations: 1958\ncpu: 444745.1991828383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 442732.7184810024,
            "unit": "ns/iter",
            "extra": "iterations: 1975\ncpu: 442728.00000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 439183.0070528985,
            "unit": "ns/iter",
            "extra": "iterations: 1985\ncpu: 439170.2770780884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 264381.47521160485,
            "unit": "ns/iter",
            "extra": "iterations: 3308\ncpu: 264381.25755743665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 439045.338042375,
            "unit": "ns/iter",
            "extra": "iterations: 1982\ncpu: 439037.5882946531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2144375.6112411865,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 2144241.217798593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 842697.4190044813,
            "unit": "ns/iter",
            "extra": "iterations: 1105\ncpu: 842628.5972850722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4918.799231489937,
            "unit": "ns/iter",
            "extra": "iterations: 160050\ncpu: 4918.437363323964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 22447.326860490906,
            "unit": "ns/iter",
            "extra": "iterations: 36872\ncpu: 22445.994250379837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16173.027901104933,
            "unit": "ns/iter",
            "extra": "iterations: 45948\ncpu: 16171.765909288833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15845.046195860605,
            "unit": "ns/iter",
            "extra": "iterations: 52364\ncpu: 15844.011152700283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15899.698160567625,
            "unit": "ns/iter",
            "extra": "iterations: 52190\ncpu: 15898.735389921416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 44028.212067250046,
            "unit": "ns/iter",
            "extra": "iterations: 19093\ncpu: 44025.92049442194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 523770.04126213933,
            "unit": "ns/iter",
            "extra": "iterations: 1648\ncpu: 523724.87864077714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 437024.36564539623,
            "unit": "ns/iter",
            "extra": "iterations: 1991\ncpu: 437008.83977900475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 433479.9291417276,
            "unit": "ns/iter",
            "extra": "iterations: 2004\ncpu: 433455.38922155846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 433826.34636592434,
            "unit": "ns/iter",
            "extra": "iterations: 1995\ncpu: 433792.78195488884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 269359.2690898049,
            "unit": "ns/iter",
            "extra": "iterations: 3274\ncpu: 269349.23640806356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 429372.5099800353,
            "unit": "ns/iter",
            "extra": "iterations: 2004\ncpu: 429338.1736526961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 366.3560686686658,
            "unit": "ns/iter",
            "extra": "iterations: 1914934\ncpu: 366.3304322759953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2023.4144251900666,
            "unit": "ns/iter",
            "extra": "iterations: 344453\ncpu: 2023.365742205766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1586.0638634086388,
            "unit": "ns/iter",
            "extra": "iterations: 441082\ncpu: 1586.060415070215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1573.7286008914646,
            "unit": "ns/iter",
            "extra": "iterations: 445112\ncpu: 1573.7133575369908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1277.7951651501787,
            "unit": "ns/iter",
            "extra": "iterations: 546987\ncpu: 1277.7760714605713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8178.166760024562,
            "unit": "ns/iter",
            "extra": "iterations: 85692\ncpu: 8177.866078513786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 22235.024297816028,
            "unit": "ns/iter",
            "extra": "iterations: 31402\ncpu: 22234.749379020366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5433.455122505757,
            "unit": "ns/iter",
            "extra": "iterations: 129341\ncpu: 5433.31967434925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5479.553660120185,
            "unit": "ns/iter",
            "extra": "iterations: 127851\ncpu: 5479.36269563788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5453.003307212692,
            "unit": "ns/iter",
            "extra": "iterations: 128507\ncpu: 5452.900620199662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11257.205705729284,
            "unit": "ns/iter",
            "extra": "iterations: 62113\ncpu: 11256.857662647117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10182.542818788217,
            "unit": "ns/iter",
            "extra": "iterations: 68533\ncpu: 10182.274232851325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3325.5057674102695,
            "unit": "ns/iter",
            "extra": "iterations: 210233\ncpu: 3325.239139430981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16468.542192114794,
            "unit": "ns/iter",
            "extra": "iterations: 42662\ncpu: 16467.544887722303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13133.773715785514,
            "unit": "ns/iter",
            "extra": "iterations: 53340\ncpu: 13132.941507311585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13078.523499059986,
            "unit": "ns/iter",
            "extra": "iterations: 53683\ncpu: 13077.288899651785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13872.759069564567,
            "unit": "ns/iter",
            "extra": "iterations: 50471\ncpu: 13872.705117790392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29335.935405393688,
            "unit": "ns/iter",
            "extra": "iterations: 23841\ncpu: 29334.36936370118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 112399.78834701366,
            "unit": "ns/iter",
            "extra": "iterations: 6213\ncpu: 112398.03637533991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 97149.97180163815,
            "unit": "ns/iter",
            "extra": "iterations: 7199\ncpu: 97145.2701764128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 96310.96277846734,
            "unit": "ns/iter",
            "extra": "iterations: 7227\ncpu: 96310.7236751068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 97146.16066481794,
            "unit": "ns/iter",
            "extra": "iterations: 7220\ncpu: 97145.83102493102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 62311.31131149141,
            "unit": "ns/iter",
            "extra": "iterations: 11201\ncpu: 62309.990179448796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 97792.55424528063,
            "unit": "ns/iter",
            "extra": "iterations: 7208\ncpu: 97789.92785793527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3290.7744029809114,
            "unit": "ns/iter",
            "extra": "iterations: 212556\ncpu: 3290.6603436271303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16902.29416905322,
            "unit": "ns/iter",
            "extra": "iterations: 41194\ncpu: 16902.17264650186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13197.569413316047,
            "unit": "ns/iter",
            "extra": "iterations: 53095\ncpu: 13197.172991807283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13094.266874389772,
            "unit": "ns/iter",
            "extra": "iterations: 53276\ncpu: 13094.169982731624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13623.84587953311,
            "unit": "ns/iter",
            "extra": "iterations: 51317\ncpu: 13623.452267279763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28438.391911022907,
            "unit": "ns/iter",
            "extra": "iterations: 24725\ncpu: 28438.20829120351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 111931.63023329769,
            "unit": "ns/iter",
            "extra": "iterations: 6258\ncpu: 111929.78587408272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 95242.24316192362,
            "unit": "ns/iter",
            "extra": "iterations: 7312\ncpu: 95239.87964989031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 95471.91699713128,
            "unit": "ns/iter",
            "extra": "iterations: 7313\ncpu: 95470.65499794787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 95533.18071633631,
            "unit": "ns/iter",
            "extra": "iterations: 7343\ncpu: 95528.39438921407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 62322.97744897173,
            "unit": "ns/iter",
            "extra": "iterations: 11219\ncpu: 62321.936001426075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 94937.14489377201,
            "unit": "ns/iter",
            "extra": "iterations: 7295\ncpu: 94935.62714187846 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421407620,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 889.7462005384464,
            "unit": "ns/iter",
            "extra": "iterations: 788138\ncpu: 889.7360614511672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12615.895663998017,
            "unit": "ns/iter",
            "extra": "iterations: 65452\ncpu: 12615.40365458657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27412.419954128014,
            "unit": "ns/iter",
            "extra": "iterations: 30520\ncpu: 27412.388597640882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 43310.55717710873,
            "unit": "ns/iter",
            "extra": "iterations: 19186\ncpu: 43310.46075263214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53782.739713110954,
            "unit": "ns/iter",
            "extra": "iterations: 14849\ncpu: 53781.5879857229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55557.70980000148,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55554.470000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 67662.13544801956,
            "unit": "ns/iter",
            "extra": "iterations: 12957\ncpu: 67659.0645982866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 78658.65684591109,
            "unit": "ns/iter",
            "extra": "iterations: 11065\ncpu: 78655.85178490734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 89324.12101322907,
            "unit": "ns/iter",
            "extra": "iterations: 9751\ncpu: 89321.50548661679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 702.1677119901786,
            "unit": "ns/iter",
            "extra": "iterations: 992994\ncpu: 702.1546957987664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 633.7413752796839,
            "unit": "ns/iter",
            "extra": "iterations: 1107891\ncpu: 633.7313869324686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 608.9748725165906,
            "unit": "ns/iter",
            "extra": "iterations: 1151130\ncpu: 608.9603259405974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 609.1130203896007,
            "unit": "ns/iter",
            "extra": "iterations: 1136264\ncpu: 609.1075665514368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1097.208735976702,
            "unit": "ns/iter",
            "extra": "iterations: 637868\ncpu: 1097.2161952002589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5042.179339712379,
            "unit": "ns/iter",
            "extra": "iterations: 158749\ncpu: 5042.079005222084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 21816.049391874927,
            "unit": "ns/iter",
            "extra": "iterations: 37739\ncpu: 21815.485306976836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16610.97128723247,
            "unit": "ns/iter",
            "extra": "iterations: 47505\ncpu: 16610.624144826852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 17693.419350748583,
            "unit": "ns/iter",
            "extra": "iterations: 47316\ncpu: 17692.76777411451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 17723.84399630711,
            "unit": "ns/iter",
            "extra": "iterations: 46563\ncpu: 17723.215858084768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 45381.28173846664,
            "unit": "ns/iter",
            "extra": "iterations: 18361\ncpu: 45380.02832089738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 528349.0233271959,
            "unit": "ns/iter",
            "extra": "iterations: 1629\ncpu: 528321.9152854495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 438077.40514629916,
            "unit": "ns/iter",
            "extra": "iterations: 1982\ncpu: 438056.760847629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 440386.62777779216,
            "unit": "ns/iter",
            "extra": "iterations: 1980\ncpu: 440367.676767677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 441098.499747075,
            "unit": "ns/iter",
            "extra": "iterations: 1977\ncpu: 441093.1714719281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 272512.2565231187,
            "unit": "ns/iter",
            "extra": "iterations: 3181\ncpu: 272500.88022634346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 438763.96855986165,
            "unit": "ns/iter",
            "extra": "iterations: 1972\ncpu: 438737.3225152121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2161451.206572758,
            "unit": "ns/iter",
            "extra": "iterations: 426\ncpu: 2161315.4929577475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 888853.7653157539,
            "unit": "ns/iter",
            "extra": "iterations: 1061\ncpu: 888809.8963242231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2830834.6134969285,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2830657.668711659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4877.963189391422,
            "unit": "ns/iter",
            "extra": "iterations: 162589\ncpu: 4877.855205456712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 22659.71172494035,
            "unit": "ns/iter",
            "extra": "iterations: 36094\ncpu: 22659.547293179014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 17919.39902223075,
            "unit": "ns/iter",
            "extra": "iterations: 45614\ncpu: 17918.413206471632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 17893.580362052387,
            "unit": "ns/iter",
            "extra": "iterations: 45463\ncpu: 17892.66656401917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 17936.897543768166,
            "unit": "ns/iter",
            "extra": "iterations: 45639\ncpu: 17935.87063695519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 45031.26773790831,
            "unit": "ns/iter",
            "extra": "iterations: 18421\ncpu: 45029.09179740514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 544089.648631833,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 544061.069651744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 447476.15786775004,
            "unit": "ns/iter",
            "extra": "iterations: 1951\ncpu: 447449.25679138926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 441673.6341338965,
            "unit": "ns/iter",
            "extra": "iterations: 1957\ncpu: 441670.2606029641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 441903.18884982966,
            "unit": "ns/iter",
            "extra": "iterations: 1991\ncpu: 441886.2882973387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 269016.0564937111,
            "unit": "ns/iter",
            "extra": "iterations: 3257\ncpu: 269003.1931225065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 442968.1664979874,
            "unit": "ns/iter",
            "extra": "iterations: 1976\ncpu: 442947.72267206607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2162781.241706104,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 2162601.8957346017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 841293.3018017848,
            "unit": "ns/iter",
            "extra": "iterations: 1110\ncpu: 841224.1441441503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5003.686240342722,
            "unit": "ns/iter",
            "extra": "iterations: 160113\ncpu: 5003.578722527225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 21965.421902431965,
            "unit": "ns/iter",
            "extra": "iterations: 37594\ncpu: 21964.808214076846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 17700.76504082614,
            "unit": "ns/iter",
            "extra": "iterations: 46540\ncpu: 17700.500644606796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 17751.754081785642,
            "unit": "ns/iter",
            "extra": "iterations: 46487\ncpu: 17751.28100329118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 17764.35510962861,
            "unit": "ns/iter",
            "extra": "iterations: 44651\ncpu: 17763.9201809591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 44580.69783443409,
            "unit": "ns/iter",
            "extra": "iterations: 18748\ncpu: 44577.88030723285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 527013.9060806857,
            "unit": "ns/iter",
            "extra": "iterations: 1661\ncpu: 526981.9385912117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 437305.302057183,
            "unit": "ns/iter",
            "extra": "iterations: 1993\ncpu: 437281.58554942394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 435619.24174171896,
            "unit": "ns/iter",
            "extra": "iterations: 1998\ncpu: 435610.1101101088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 434757.6131131127,
            "unit": "ns/iter",
            "extra": "iterations: 1998\ncpu: 434738.5385385407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 267739.017693722,
            "unit": "ns/iter",
            "extra": "iterations: 3278\ncpu: 267721.62904209923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 435356.552776372,
            "unit": "ns/iter",
            "extra": "iterations: 1999\ncpu: 435333.16658329364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 367.1643398141211,
            "unit": "ns/iter",
            "extra": "iterations: 1907584\ncpu: 367.14917927598646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1947.4563039002558,
            "unit": "ns/iter",
            "extra": "iterations: 359460\ncpu: 1947.344906248266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1539.6714573954025,
            "unit": "ns/iter",
            "extra": "iterations: 462908\ncpu: 1539.5722260146622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1518.4637164060246,
            "unit": "ns/iter",
            "extra": "iterations: 459643\ncpu: 1518.3760005047475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1255.655290120795,
            "unit": "ns/iter",
            "extra": "iterations: 556906\ncpu: 1255.5319928318183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7937.374086836496,
            "unit": "ns/iter",
            "extra": "iterations: 87060\ncpu: 7937.212267401782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 22585.931231534054,
            "unit": "ns/iter",
            "extra": "iterations: 30799\ncpu: 22585.054709568507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5545.041405959107,
            "unit": "ns/iter",
            "extra": "iterations: 123702\ncpu: 5544.661363599618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5504.530033569351,
            "unit": "ns/iter",
            "extra": "iterations: 126009\ncpu: 5504.236998944474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5569.9774406562165,
            "unit": "ns/iter",
            "extra": "iterations: 124782\ncpu: 5569.588562452883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11623.039019136848,
            "unit": "ns/iter",
            "extra": "iterations: 60355\ncpu: 11622.921050451461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10327.994656747669,
            "unit": "ns/iter",
            "extra": "iterations: 67749\ncpu: 10327.762771406406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3309.6761555673406,
            "unit": "ns/iter",
            "extra": "iterations: 210070\ncpu: 3309.5910886847682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16779.589454720735,
            "unit": "ns/iter",
            "extra": "iterations: 41630\ncpu: 16779.363439827277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13318.672687517877,
            "unit": "ns/iter",
            "extra": "iterations: 52595\ncpu: 13318.110086510236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13211.424748722458,
            "unit": "ns/iter",
            "extra": "iterations: 53029\ncpu: 13210.552716438238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14113.47096670441,
            "unit": "ns/iter",
            "extra": "iterations: 49736\ncpu: 14112.411532893662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29771.159795786487,
            "unit": "ns/iter",
            "extra": "iterations: 23505\ncpu: 29769.38523718399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 111998.41609562233,
            "unit": "ns/iter",
            "extra": "iterations: 6275\ncpu: 111990.42231075655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 98872.09338028017,
            "unit": "ns/iter",
            "extra": "iterations: 7100\ncpu: 98870.42253521213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 96996.19416934387,
            "unit": "ns/iter",
            "extra": "iterations: 7169\ncpu: 96994.54596177996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 97781.64067086339,
            "unit": "ns/iter",
            "extra": "iterations: 7155\ncpu: 97776.18448637295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 64862.46466619328,
            "unit": "ns/iter",
            "extra": "iterations: 11264\ncpu: 64859.0198863632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 97114.61406228082,
            "unit": "ns/iter",
            "extra": "iterations: 7097\ncpu: 97106.62251655683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3339.687541686565,
            "unit": "ns/iter",
            "extra": "iterations: 209900\ncpu: 3339.5040495474514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 17100.09217467753,
            "unit": "ns/iter",
            "extra": "iterations: 40944\ncpu: 17098.81789761608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13436.729213914272,
            "unit": "ns/iter",
            "extra": "iterations: 52030\ncpu: 13436.382856044585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13395.87632677159,
            "unit": "ns/iter",
            "extra": "iterations: 52477\ncpu: 13395.704784953294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13710.600630408455,
            "unit": "ns/iter",
            "extra": "iterations: 51078\ncpu: 13709.947531226819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29152.58809077761,
            "unit": "ns/iter",
            "extra": "iterations: 24015\ncpu: 29152.17155944244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 112414.92217774609,
            "unit": "ns/iter",
            "extra": "iterations: 6245\ncpu: 112409.0312249806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 95284.44557962415,
            "unit": "ns/iter",
            "extra": "iterations: 7341\ncpu: 95279.10366434974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 96117.59847961443,
            "unit": "ns/iter",
            "extra": "iterations: 7235\ncpu: 96109.6337249481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 96695.58311527524,
            "unit": "ns/iter",
            "extra": "iterations: 7261\ncpu: 96694.2569893947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 62300.01142856878,
            "unit": "ns/iter",
            "extra": "iterations: 11200\ncpu: 62298.87499999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 96383.77258353056,
            "unit": "ns/iter",
            "extra": "iterations: 7273\ncpu: 96376.91461570258 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702421923221,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 842.6640693254044,
            "unit": "ns/iter",
            "extra": "iterations: 832133\ncpu: 842.621431910524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12595.764914804806,
            "unit": "ns/iter",
            "extra": "iterations: 65321\ncpu: 12595.252675249922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27353.042631854354,
            "unit": "ns/iter",
            "extra": "iterations: 30564\ncpu: 27352.17249051171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 42751.50015920195,
            "unit": "ns/iter",
            "extra": "iterations: 18844\ncpu: 42750.9711313946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53569.548890381135,
            "unit": "ns/iter",
            "extra": "iterations: 14870\ncpu: 53567.40416946875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55591.00219999777,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55589.61 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 67029.35202347953,
            "unit": "ns/iter",
            "extra": "iterations: 12948\ncpu: 67026.47513129444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 78082.42836650628,
            "unit": "ns/iter",
            "extra": "iterations: 11154\ncpu: 78079.85476062402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 88444.04449239306,
            "unit": "ns/iter",
            "extra": "iterations: 9732\ncpu: 88439.87875051383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 700.757804412327,
            "unit": "ns/iter",
            "extra": "iterations: 999787\ncpu: 700.70465009047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 595.1552187948217,
            "unit": "ns/iter",
            "extra": "iterations: 1170960\ncpu: 595.1431304229009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 597.1324176241053,
            "unit": "ns/iter",
            "extra": "iterations: 1173371\ncpu: 596.7814101422312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 583.0328394572007,
            "unit": "ns/iter",
            "extra": "iterations: 1195239\ncpu: 583.0152797892306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1107.9443117367523,
            "unit": "ns/iter",
            "extra": "iterations: 632970\ncpu: 1107.886471712718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5033.883925042493,
            "unit": "ns/iter",
            "extra": "iterations: 159397\ncpu: 5033.717071212121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 22619.096721843103,
            "unit": "ns/iter",
            "extra": "iterations: 36972\ncpu: 22617.829708968977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 17945.84878352491,
            "unit": "ns/iter",
            "extra": "iterations: 46569\ncpu: 17945.188859541773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 17947.712670464476,
            "unit": "ns/iter",
            "extra": "iterations: 46344\ncpu: 17946.910063870215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 17921.806456517763,
            "unit": "ns/iter",
            "extra": "iterations: 46031\ncpu: 17921.1401012362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 45979.596987951365,
            "unit": "ns/iter",
            "extra": "iterations: 18260\ncpu: 45977.50273822566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 531194.9562309976,
            "unit": "ns/iter",
            "extra": "iterations: 1645\ncpu: 531153.3738601833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 434278.8135338132,
            "unit": "ns/iter",
            "extra": "iterations: 1995\ncpu: 434259.2481203007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 436325.88872103667,
            "unit": "ns/iter",
            "extra": "iterations: 1986\ncpu: 436317.3212487426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 435111.6256844375,
            "unit": "ns/iter",
            "extra": "iterations: 2009\ncpu: 435095.9681433536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 269516.47062461026,
            "unit": "ns/iter",
            "extra": "iterations: 3234\ncpu: 269506.1224489803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 429348.2672925002,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 429321.19565217325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2117582.0597700924,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 2117484.367816088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 831873.9964602073,
            "unit": "ns/iter",
            "extra": "iterations: 1130\ncpu: 831827.5221238956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2787454.6181818238,
            "unit": "ns/iter",
            "extra": "iterations: 330\ncpu: 2787295.757575753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4426.958447819533,
            "unit": "ns/iter",
            "extra": "iterations: 177969\ncpu: 4426.927161471937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 19923.665516659472,
            "unit": "ns/iter",
            "extra": "iterations: 41449\ncpu: 19923.505995319567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 17702.854267094343,
            "unit": "ns/iter",
            "extra": "iterations: 51862\ncpu: 17702.200069415052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 17759.634646483188,
            "unit": "ns/iter",
            "extra": "iterations: 46377\ncpu: 17758.85891713567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 17744.381627726936,
            "unit": "ns/iter",
            "extra": "iterations: 46396\ncpu: 17743.72359686167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 45342.494771810794,
            "unit": "ns/iter",
            "extra": "iterations: 18362\ncpu: 45340.431325563615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 540834.9676617006,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 540811.2562189014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 444124.2562404551,
            "unit": "ns/iter",
            "extra": "iterations: 1963\ncpu: 444120.4279164539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 447621.5137755127,
            "unit": "ns/iter",
            "extra": "iterations: 1960\ncpu: 447611.3265306111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 441019.0303490151,
            "unit": "ns/iter",
            "extra": "iterations: 1977\ncpu: 441002.276176025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 264441.6594840655,
            "unit": "ns/iter",
            "extra": "iterations: 3295\ncpu: 264439.3626707138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 441830.46457083366,
            "unit": "ns/iter",
            "extra": "iterations: 2004\ncpu: 441807.13572853996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2138155.429577449,
            "unit": "ns/iter",
            "extra": "iterations: 426\ncpu: 2138092.0187793425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 847858.600182138,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 847827.413479053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5005.203337984919,
            "unit": "ns/iter",
            "extra": "iterations: 160516\ncpu: 5005.064292656176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 22038.609897601807,
            "unit": "ns/iter",
            "extra": "iterations: 37403\ncpu: 22037.700184477148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 17702.226658066607,
            "unit": "ns/iter",
            "extra": "iterations: 46515\ncpu: 17701.599484037302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 17766.96169512108,
            "unit": "ns/iter",
            "extra": "iterations: 46156\ncpu: 17766.210243522022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 17585.56079784287,
            "unit": "ns/iter",
            "extra": "iterations: 46375\ncpu: 17585.004851751957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 45164.18143664316,
            "unit": "ns/iter",
            "extra": "iterations: 18585\ncpu: 45162.05004035496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 530716.3945454276,
            "unit": "ns/iter",
            "extra": "iterations: 1650\ncpu: 530685.4545454537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 434770.36602627457,
            "unit": "ns/iter",
            "extra": "iterations: 1978\ncpu: 434764.0040444908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 436869.982376654,
            "unit": "ns/iter",
            "extra": "iterations: 1986\ncpu: 436854.8338368582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 433256.7464929927,
            "unit": "ns/iter",
            "extra": "iterations: 1996\ncpu: 433246.99398797314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 267808.828120258,
            "unit": "ns/iter",
            "extra": "iterations: 3293\ncpu: 267799.87853021495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 431950.2402402541,
            "unit": "ns/iter",
            "extra": "iterations: 1998\ncpu: 431936.33633633424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 368.84815984799445,
            "unit": "ns/iter",
            "extra": "iterations: 1914869\ncpu: 368.8413672162419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1976.2536168966649,
            "unit": "ns/iter",
            "extra": "iterations: 354724\ncpu: 1976.2062899606435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1509.1622027950018,
            "unit": "ns/iter",
            "extra": "iterations: 463611\ncpu: 1509.0849871983228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1517.0552120093541,
            "unit": "ns/iter",
            "extra": "iterations: 461041\ncpu: 1516.9945839957861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1279.5472682155726,
            "unit": "ns/iter",
            "extra": "iterations: 546456\ncpu: 1279.4936829314877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8113.839759314735,
            "unit": "ns/iter",
            "extra": "iterations: 86420\ncpu: 8113.554732700784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21878.729618291985,
            "unit": "ns/iter",
            "extra": "iterations: 32014\ncpu: 21877.687886549327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5386.025594672534,
            "unit": "ns/iter",
            "extra": "iterations: 129441\ncpu: 5385.985893186841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5368.035688882015,
            "unit": "ns/iter",
            "extra": "iterations: 129340\ncpu: 5367.820473171478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5429.79946991673,
            "unit": "ns/iter",
            "extra": "iterations: 128659\ncpu: 5429.543211123946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10725.799007520145,
            "unit": "ns/iter",
            "extra": "iterations: 65291\ncpu: 10725.547165765433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10128.474103413411,
            "unit": "ns/iter",
            "extra": "iterations: 69179\ncpu: 10128.017172841472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3335.0831506939435,
            "unit": "ns/iter",
            "extra": "iterations: 210798\ncpu: 3334.98135655938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16521.209350170564,
            "unit": "ns/iter",
            "extra": "iterations: 42288\ncpu: 16521.069807037555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13157.961538462061,
            "unit": "ns/iter",
            "extra": "iterations: 53196\ncpu: 13157.49492443039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13064.358969983195,
            "unit": "ns/iter",
            "extra": "iterations: 52737\ncpu: 13063.57206515347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13945.36718406216,
            "unit": "ns/iter",
            "extra": "iterations: 49994\ncpu: 13944.787374484862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29319.152208597043,
            "unit": "ns/iter",
            "extra": "iterations: 23816\ncpu: 29317.937520994645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 111177.88556338119,
            "unit": "ns/iter",
            "extra": "iterations: 6248\ncpu: 111173.43149807968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 96380.88580839794,
            "unit": "ns/iter",
            "extra": "iterations: 7286\ncpu: 96377.66950315707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 96477.84227260087,
            "unit": "ns/iter",
            "extra": "iterations: 7234\ncpu: 96475.47691457058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 96185.44158361528,
            "unit": "ns/iter",
            "extra": "iterations: 7224\ncpu: 96184.01162790685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 61272.0291381414,
            "unit": "ns/iter",
            "extra": "iterations: 11394\ncpu: 61270.51957170399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 95665.75611095407,
            "unit": "ns/iter",
            "extra": "iterations: 7282\ncpu: 95661.43916506392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3306.2729998065347,
            "unit": "ns/iter",
            "extra": "iterations: 211817\ncpu: 3306.198747031628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16755.323178045826,
            "unit": "ns/iter",
            "extra": "iterations: 41686\ncpu: 16754.677829487173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13217.809548981691,
            "unit": "ns/iter",
            "extra": "iterations: 52969\ncpu: 13217.196850988134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13024.138767913351,
            "unit": "ns/iter",
            "extra": "iterations: 53730\ncpu: 13023.915875674717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13558.040773947374,
            "unit": "ns/iter",
            "extra": "iterations: 51528\ncpu: 13557.716193137594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28538.34584505031,
            "unit": "ns/iter",
            "extra": "iterations: 24537\ncpu: 28537.54330195233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 112406.09724214807,
            "unit": "ns/iter",
            "extra": "iterations: 6273\ncpu: 112400.74924278725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 94872.72198159432,
            "unit": "ns/iter",
            "extra": "iterations: 7388\ncpu: 94869.93773687072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 94771.14503816678,
            "unit": "ns/iter",
            "extra": "iterations: 7336\ncpu: 94766.13958560447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 94133.33387118741,
            "unit": "ns/iter",
            "extra": "iterations: 7437\ncpu: 94129.66249831824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 61913.5746533935,
            "unit": "ns/iter",
            "extra": "iterations: 11252\ncpu: 61911.54461428999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 95924.4239543719,
            "unit": "ns/iter",
            "extra": "iterations: 7364\ncpu: 95920.07061379583 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702422474858,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 999.2442715563191,
            "unit": "ns/iter",
            "extra": "iterations: 701674\ncpu: 999.1725502156272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12421.781638388378,
            "unit": "ns/iter",
            "extra": "iterations: 66541\ncpu: 12420.96301528381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27176.55088574681,
            "unit": "ns/iter",
            "extra": "iterations: 30765\ncpu: 27175.507882333815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 42178.05339397761,
            "unit": "ns/iter",
            "extra": "iterations: 20227\ncpu: 42176.21990408857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 56633.73392506525,
            "unit": "ns/iter",
            "extra": "iterations: 14759\ncpu: 56629.432888407035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55239.27860000412,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55235.59999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 66720.9530462682,
            "unit": "ns/iter",
            "extra": "iterations: 13098\ncpu: 66714.73507405708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 77063.33028986839,
            "unit": "ns/iter",
            "extra": "iterations: 11281\ncpu: 77057.97358390217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 88481.15720788903,
            "unit": "ns/iter",
            "extra": "iterations: 9885\ncpu: 88477.06626201313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 718.02612665942,
            "unit": "ns/iter",
            "extra": "iterations: 994999\ncpu: 718.0101688544416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 620.4530057783408,
            "unit": "ns/iter",
            "extra": "iterations: 1126447\ncpu: 620.4363809393602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 620.5610958756731,
            "unit": "ns/iter",
            "extra": "iterations: 1117645\ncpu: 620.5075851455523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 603.177760909256,
            "unit": "ns/iter",
            "extra": "iterations: 1154022\ncpu: 603.1333891381635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1139.948698650993,
            "unit": "ns/iter",
            "extra": "iterations: 613863\ncpu: 1139.8807225716496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5101.190712611246,
            "unit": "ns/iter",
            "extra": "iterations: 159119\ncpu: 5100.9395483883045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 22790.958815923386,
            "unit": "ns/iter",
            "extra": "iterations: 36349\ncpu: 22789.55954771793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 17863.810364202003,
            "unit": "ns/iter",
            "extra": "iterations: 45387\ncpu: 17862.57078017938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 17794.473834567514,
            "unit": "ns/iter",
            "extra": "iterations: 46206\ncpu: 17793.585248668947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 17838.529760365793,
            "unit": "ns/iter",
            "extra": "iterations: 46404\ncpu: 17837.475217653602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 45611.02225511391,
            "unit": "ns/iter",
            "extra": "iterations: 18243\ncpu: 45607.67965795099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 528766.5500603095,
            "unit": "ns/iter",
            "extra": "iterations: 1658\ncpu: 528762.9071170071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 430910.60299253225,
            "unit": "ns/iter",
            "extra": "iterations: 2005\ncpu: 430882.8428927688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 434555.45738779334,
            "unit": "ns/iter",
            "extra": "iterations: 1983\ncpu: 434526.37418053317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 434750.3715434809,
            "unit": "ns/iter",
            "extra": "iterations: 1989\ncpu: 434737.1543489192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 268448.6708899633,
            "unit": "ns/iter",
            "extra": "iterations: 3236\ncpu: 268428.0593325097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 429500.4197225453,
            "unit": "ns/iter",
            "extra": "iterations: 2018\ncpu: 429468.4836471758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2136763.3579676896,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2136556.3510392546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 860005.8354661763,
            "unit": "ns/iter",
            "extra": "iterations: 1094\ncpu: 859958.4095063977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2815189.905487683,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2815081.097560982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4516.120722636424,
            "unit": "ns/iter",
            "extra": "iterations: 173033\ncpu: 4515.962273092415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20424.536844235638,
            "unit": "ns/iter",
            "extra": "iterations: 39572\ncpu: 20424.2646315576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16373.804612274873,
            "unit": "ns/iter",
            "extra": "iterations: 50474\ncpu: 16373.768672980079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 16264.530026842593,
            "unit": "ns/iter",
            "extra": "iterations: 49922\ncpu: 16263.809542886935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 16046.03154629891,
            "unit": "ns/iter",
            "extra": "iterations: 50941\ncpu: 16044.995190514452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 43920.934449463595,
            "unit": "ns/iter",
            "extra": "iterations: 19054\ncpu: 43918.45281830588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 542425.2576994973,
            "unit": "ns/iter",
            "extra": "iterations: 1591\ncpu: 542413.6392206169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 444167.73078881134,
            "unit": "ns/iter",
            "extra": "iterations: 1965\ncpu: 444139.6437659027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 440307.0450632496,
            "unit": "ns/iter",
            "extra": "iterations: 1975\ncpu: 440286.7341772128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 441194.07370016904,
            "unit": "ns/iter",
            "extra": "iterations: 1981\ncpu: 441163.80615850474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 265189.8259945475,
            "unit": "ns/iter",
            "extra": "iterations: 3293\ncpu: 265178.25690859446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 441549.5231155752,
            "unit": "ns/iter",
            "extra": "iterations: 1990\ncpu: 441520.2010050225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2141468.9411764867,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2141200.7058823607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 842311.7915162906,
            "unit": "ns/iter",
            "extra": "iterations: 1108\ncpu: 842242.8700360965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4999.186128402535,
            "unit": "ns/iter",
            "extra": "iterations: 160169\ncpu: 4998.85183774642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 21989.5841446827,
            "unit": "ns/iter",
            "extra": "iterations: 37489\ncpu: 21988.409933580475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 17711.205651255295,
            "unit": "ns/iter",
            "extra": "iterations: 46326\ncpu: 17710.3829383068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 17784.468132010647,
            "unit": "ns/iter",
            "extra": "iterations: 46269\ncpu: 17783.658605113564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 17753.49299040046,
            "unit": "ns/iter",
            "extra": "iterations: 46151\ncpu: 17752.48423652798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 44519.846517059406,
            "unit": "ns/iter",
            "extra": "iterations: 18849\ncpu: 44518.49965515386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 531855.1503307195,
            "unit": "ns/iter",
            "extra": "iterations: 1663\ncpu: 531825.616355986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 441016.84507741866,
            "unit": "ns/iter",
            "extra": "iterations: 2001\ncpu: 440984.50774612697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 437898.73167086067,
            "unit": "ns/iter",
            "extra": "iterations: 2005\ncpu: 437874.2643391517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 439780.172827169,
            "unit": "ns/iter",
            "extra": "iterations: 2002\ncpu: 439748.1018980993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 266914.1918674831,
            "unit": "ns/iter",
            "extra": "iterations: 3320\ncpu: 266910.9337349413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 435246.14173998684,
            "unit": "ns/iter",
            "extra": "iterations: 2046\ncpu: 435221.50537634373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 368.16533878334525,
            "unit": "ns/iter",
            "extra": "iterations: 1891607\ncpu: 368.1448630714503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2038.6143676880263,
            "unit": "ns/iter",
            "extra": "iterations: 345233\ncpu: 2038.4812575854685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1551.8851649837081,
            "unit": "ns/iter",
            "extra": "iterations: 451378\ncpu: 1551.791403214149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1604.284463784102,
            "unit": "ns/iter",
            "extra": "iterations: 433883\ncpu: 1604.2564470145132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1269.3276071889875,
            "unit": "ns/iter",
            "extra": "iterations: 553019\ncpu: 1269.3404747395584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8231.124348622281,
            "unit": "ns/iter",
            "extra": "iterations: 85204\ncpu: 8230.669921599878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 22411.371452340427,
            "unit": "ns/iter",
            "extra": "iterations: 31253\ncpu: 22410.19422135496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5456.0624648937255,
            "unit": "ns/iter",
            "extra": "iterations: 128184\ncpu: 5455.659052611843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5452.017609329574,
            "unit": "ns/iter",
            "extra": "iterations: 128625\ncpu: 5451.5879494655155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5476.468826506238,
            "unit": "ns/iter",
            "extra": "iterations: 127849\ncpu: 5476.51604627335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11424.280053399578,
            "unit": "ns/iter",
            "extra": "iterations: 61424\ncpu: 11423.430580880393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10328.31496387542,
            "unit": "ns/iter",
            "extra": "iterations: 67957\ncpu: 10327.820533572518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3380.041286795998,
            "unit": "ns/iter",
            "extra": "iterations: 207088\ncpu: 3379.9940122073835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16571.245440333656,
            "unit": "ns/iter",
            "extra": "iterations: 42218\ncpu: 16570.666540338294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13261.127853621914,
            "unit": "ns/iter",
            "extra": "iterations: 52521\ncpu: 13261.000361759894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13315.868463538629,
            "unit": "ns/iter",
            "extra": "iterations: 52647\ncpu: 13315.672308013582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14075.417579986777,
            "unit": "ns/iter",
            "extra": "iterations: 49727\ncpu: 14055.346190198616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29565.167869351164,
            "unit": "ns/iter",
            "extra": "iterations: 23697\ncpu: 29564.704392961332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 112612.16184970841,
            "unit": "ns/iter",
            "extra": "iterations: 6228\ncpu: 112613.1663455347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 96501.56486970904,
            "unit": "ns/iter",
            "extra": "iterations: 7253\ncpu: 96501.59933820671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 96552.37943409309,
            "unit": "ns/iter",
            "extra": "iterations: 7245\ncpu: 96550.61421670234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 95774.25237164824,
            "unit": "ns/iter",
            "extra": "iterations: 7168\ncpu: 95767.18750000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 61120.144255989115,
            "unit": "ns/iter",
            "extra": "iterations: 11438\ncpu: 61120.7029200921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 96713.85400249412,
            "unit": "ns/iter",
            "extra": "iterations: 7233\ncpu: 96714.75183188189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3328.651715604744,
            "unit": "ns/iter",
            "extra": "iterations: 210130\ncpu: 3328.679864845568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16790.888460709237,
            "unit": "ns/iter",
            "extra": "iterations: 41779\ncpu: 16790.84468273537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13305.693245012546,
            "unit": "ns/iter",
            "extra": "iterations: 52687\ncpu: 13305.563042116752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13136.172112921753,
            "unit": "ns/iter",
            "extra": "iterations: 53523\ncpu: 13135.919137567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13600.789226291949,
            "unit": "ns/iter",
            "extra": "iterations: 50846\ncpu: 13599.752192896081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28380.0660018818,
            "unit": "ns/iter",
            "extra": "iterations: 24469\ncpu: 28377.792308635733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 110309.08663406374,
            "unit": "ns/iter",
            "extra": "iterations: 6337\ncpu: 110298.13792015125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 94890.55115331375,
            "unit": "ns/iter",
            "extra": "iterations: 7370\ncpu: 94889.70149253841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 94968.05744160591,
            "unit": "ns/iter",
            "extra": "iterations: 7364\ncpu: 94968.08799565371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 94616.9246658543,
            "unit": "ns/iter",
            "extra": "iterations: 7407\ncpu: 94615.93087619949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 62414.02645409185,
            "unit": "ns/iter",
            "extra": "iterations: 11227\ncpu: 62413.351741337116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 97894.07228411666,
            "unit": "ns/iter",
            "extra": "iterations: 7180\ncpu: 97890.68245125457 ns\nthreads: 1"
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
          "id": "77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:37:25+03:00",
          "tree_id": "48d22aa37f5519c83d0d68355b1973cd5206100e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/77ee5ac1275c2ccd5522ff1af82b18cf56a24aa5"
        },
        "date": 1702453341631,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 834.4443655947917,
            "unit": "ns/iter",
            "extra": "iterations: 837036\ncpu: 834.3735514362586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12219.290510948933,
            "unit": "ns/iter",
            "extra": "iterations: 67815\ncpu: 12219.196342991965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27236.07451868527,
            "unit": "ns/iter",
            "extra": "iterations: 30905\ncpu: 27236.08154020384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 42375.91037285967,
            "unit": "ns/iter",
            "extra": "iterations: 19927\ncpu: 42376.1529582978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53073.226126246525,
            "unit": "ns/iter",
            "extra": "iterations: 14828\ncpu: 53073.11842460207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55164.16520000007,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55164.550000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 66722.2250057297,
            "unit": "ns/iter",
            "extra": "iterations: 13093\ncpu: 66720.87374933172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 77180.9527912389,
            "unit": "ns/iter",
            "extra": "iterations: 11142\ncpu: 77180.92802010413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 88371.49187982347,
            "unit": "ns/iter",
            "extra": "iterations: 9852\ncpu: 88369.6000812018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 692.7566784711383,
            "unit": "ns/iter",
            "extra": "iterations: 1011197\ncpu: 692.756505408937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 618.6569628130713,
            "unit": "ns/iter",
            "extra": "iterations: 1126391\ncpu: 618.6473435956061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 593.1929792974523,
            "unit": "ns/iter",
            "extra": "iterations: 1183044\ncpu: 593.196702743092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 594.7773050420128,
            "unit": "ns/iter",
            "extra": "iterations: 1172137\ncpu: 594.7808148706173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1074.876082949628,
            "unit": "ns/iter",
            "extra": "iterations: 648345\ncpu: 1074.8564421719934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5071.888565738407,
            "unit": "ns/iter",
            "extra": "iterations: 158165\ncpu: 5071.847121676732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 22313.8908833007,
            "unit": "ns/iter",
            "extra": "iterations: 36658\ncpu: 22313.388619128124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 17775.942919294157,
            "unit": "ns/iter",
            "extra": "iterations: 45970\ncpu: 17775.9560582989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 17838.567268313884,
            "unit": "ns/iter",
            "extra": "iterations: 46151\ncpu: 17838.363199063926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 17839.68000434597,
            "unit": "ns/iter",
            "extra": "iterations: 46010\ncpu: 17839.69137144102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 45717.03064630706,
            "unit": "ns/iter",
            "extra": "iterations: 18273\ncpu: 45716.94850325622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 533145.705635476,
            "unit": "ns/iter",
            "extra": "iterations: 1668\ncpu: 533096.5827338118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 433502.5766533214,
            "unit": "ns/iter",
            "extra": "iterations: 1996\ncpu: 433488.727454909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 435555.371917457,
            "unit": "ns/iter",
            "extra": "iterations: 1987\ncpu: 435527.4282838455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 436100.4710619262,
            "unit": "ns/iter",
            "extra": "iterations: 1987\ncpu: 436100.3019627589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 268344.5894372922,
            "unit": "ns/iter",
            "extra": "iterations: 3181\ncpu: 268328.82741276413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 434388.1082677092,
            "unit": "ns/iter",
            "extra": "iterations: 2032\ncpu: 434363.0905511809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2131881.9187934836,
            "unit": "ns/iter",
            "extra": "iterations: 431\ncpu: 2131712.5290023144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 845062.2184115803,
            "unit": "ns/iter",
            "extra": "iterations: 1108\ncpu: 845024.4584837524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2783113.4833836504,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2782942.296072508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4906.363456298251,
            "unit": "ns/iter",
            "extra": "iterations: 162567\ncpu: 4906.1617671483145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20193.789249146375,
            "unit": "ns/iter",
            "extra": "iterations: 38676\ncpu: 20193.936808356582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 15961.404637669479,
            "unit": "ns/iter",
            "extra": "iterations: 51362\ncpu: 15960.852381137855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 16489.48536203585,
            "unit": "ns/iter",
            "extra": "iterations: 51749\ncpu: 16489.60366383896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 17431.11219816326,
            "unit": "ns/iter",
            "extra": "iterations: 46507\ncpu: 17430.61474616711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 45434.2291791017,
            "unit": "ns/iter",
            "extra": "iterations: 18431\ncpu: 45434.52878302882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 535186.7412935459,
            "unit": "ns/iter",
            "extra": "iterations: 1608\ncpu: 535108.0845771156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 441863.41200405813,
            "unit": "ns/iter",
            "extra": "iterations: 1966\ncpu: 441845.1169888102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 443277.3491183893,
            "unit": "ns/iter",
            "extra": "iterations: 1985\ncpu: 443266.4483627219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 436996.88727454765,
            "unit": "ns/iter",
            "extra": "iterations: 1996\ncpu: 436977.905811623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 263181.88511279237,
            "unit": "ns/iter",
            "extra": "iterations: 3325\ncpu: 263165.3834586465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 433455.7902988748,
            "unit": "ns/iter",
            "extra": "iterations: 2041\ncpu: 433445.173934343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2147777.6440281025,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 2147387.822014046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 816987.5514511855,
            "unit": "ns/iter",
            "extra": "iterations: 1137\ncpu: 816953.6499560237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5125.869477304415,
            "unit": "ns/iter",
            "extra": "iterations: 158754\ncpu: 5125.654786651069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 22042.22655999122,
            "unit": "ns/iter",
            "extra": "iterations: 37372\ncpu: 22041.83345820406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15840.802419761862,
            "unit": "ns/iter",
            "extra": "iterations: 49509\ncpu: 15840.479508776172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 15852.463648144376,
            "unit": "ns/iter",
            "extra": "iterations: 51703\ncpu: 15852.080150088048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15868.386619827741,
            "unit": "ns/iter",
            "extra": "iterations: 51808\ncpu: 15867.54555281046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 43507.869344388,
            "unit": "ns/iter",
            "extra": "iterations: 19295\ncpu: 43507.74812127477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 525708.7677496892,
            "unit": "ns/iter",
            "extra": "iterations: 1662\ncpu: 525695.9687123945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 441432.6897243253,
            "unit": "ns/iter",
            "extra": "iterations: 1995\ncpu: 441416.29072681384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 434686.32348524197,
            "unit": "ns/iter",
            "extra": "iterations: 1997\ncpu: 434678.56785177987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 435368.7344689319,
            "unit": "ns/iter",
            "extra": "iterations: 1996\ncpu: 435361.47294589016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 265199.65582655795,
            "unit": "ns/iter",
            "extra": "iterations: 3321\ncpu: 265187.05209274514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 431405.5059406072,
            "unit": "ns/iter",
            "extra": "iterations: 2020\ncpu: 431394.4554455439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 366.91075086140023,
            "unit": "ns/iter",
            "extra": "iterations: 1906517\ncpu: 366.8882050356745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2064.4962336076496,
            "unit": "ns/iter",
            "extra": "iterations: 339715\ncpu: 2064.4101673461523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1631.1030824015031,
            "unit": "ns/iter",
            "extra": "iterations: 427978\ncpu: 1631.0326699036077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1636.963871239543,
            "unit": "ns/iter",
            "extra": "iterations: 427305\ncpu: 1636.9113396754065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1281.1219368524758,
            "unit": "ns/iter",
            "extra": "iterations: 544946\ncpu: 1281.1162940915247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 7848.220902107102,
            "unit": "ns/iter",
            "extra": "iterations: 89302\ncpu: 7848.058274170706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 22412.0462084928,
            "unit": "ns/iter",
            "extra": "iterations: 31531\ncpu: 22411.921600964095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5321.517911478321,
            "unit": "ns/iter",
            "extra": "iterations: 131787\ncpu: 5321.459628036104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5370.7780525594435,
            "unit": "ns/iter",
            "extra": "iterations: 131013\ncpu: 5370.73343866646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5395.351748122764,
            "unit": "ns/iter",
            "extra": "iterations: 129968\ncpu: 5395.276529607336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11127.421144491027,
            "unit": "ns/iter",
            "extra": "iterations: 61879\ncpu: 11127.174000872652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9993.954751260952,
            "unit": "ns/iter",
            "extra": "iterations: 70013\ncpu: 9993.844000400064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3309.1167349605353,
            "unit": "ns/iter",
            "extra": "iterations: 211342\ncpu: 3309.050732935216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16417.217830345762,
            "unit": "ns/iter",
            "extra": "iterations: 42781\ncpu: 16417.32544821278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13087.11722497056,
            "unit": "ns/iter",
            "extra": "iterations: 53376\ncpu: 13086.754346522779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13137.83154880074,
            "unit": "ns/iter",
            "extra": "iterations: 53422\ncpu: 13137.789674665884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14410.549666093635,
            "unit": "ns/iter",
            "extra": "iterations: 50014\ncpu: 14410.253129123957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29480.22180118604,
            "unit": "ns/iter",
            "extra": "iterations: 23751\ncpu: 29479.811376363166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 112293.50488859725,
            "unit": "ns/iter",
            "extra": "iterations: 6239\ncpu: 112293.1399262715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 96946.43660022828,
            "unit": "ns/iter",
            "extra": "iterations: 7224\ncpu: 96943.93687707605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 97290.26824183749,
            "unit": "ns/iter",
            "extra": "iterations: 7195\ncpu: 97289.14523975065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 96968.79360870407,
            "unit": "ns/iter",
            "extra": "iterations: 7166\ncpu: 96967.5411666204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 62073.16350080295,
            "unit": "ns/iter",
            "extra": "iterations: 11266\ncpu: 62072.52796023376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 98165.86971733028,
            "unit": "ns/iter",
            "extra": "iterations: 7146\ncpu: 98165.19731318169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3312.5117967847527,
            "unit": "ns/iter",
            "extra": "iterations: 211244\ncpu: 3312.4704133608852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16752.792590285386,
            "unit": "ns/iter",
            "extra": "iterations: 41729\ncpu: 16752.572551463138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13130.913788913282,
            "unit": "ns/iter",
            "extra": "iterations: 53485\ncpu: 13130.791810788045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13008.52807880014,
            "unit": "ns/iter",
            "extra": "iterations: 53706\ncpu: 13008.613562730241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13730.494613593466,
            "unit": "ns/iter",
            "extra": "iterations: 50219\ncpu: 13730.19574264718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28568.722417313656,
            "unit": "ns/iter",
            "extra": "iterations: 24490\ncpu: 28568.34218048159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 110237.46423473749,
            "unit": "ns/iter",
            "extra": "iterations: 6305\ncpu: 110236.38382236262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 94394.34642375774,
            "unit": "ns/iter",
            "extra": "iterations: 7410\ncpu: 94392.83400809747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 95291.61133052493,
            "unit": "ns/iter",
            "extra": "iterations: 7343\ncpu: 95292.25112351899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 95418.15088392253,
            "unit": "ns/iter",
            "extra": "iterations: 7297\ncpu: 95414.85542003567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 62357.72100481143,
            "unit": "ns/iter",
            "extra": "iterations: 11226\ncpu: 62356.761090326254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 96221.52994881757,
            "unit": "ns/iter",
            "extra": "iterations: 7229\ncpu: 96220.01659980722 ns\nthreads: 1"
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
          "id": "6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d",
          "message": "fail-fast: false",
          "timestamp": "2023-12-13T17:51:42+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/6b4e127b9da4264cc4740cb5bb6d3f7bf848fe6d"
        },
        "date": 1702479541195,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 867.5194852409488,
            "unit": "ns/iter",
            "extra": "iterations: 808689\ncpu: 867.5238565134433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12669.186760038634,
            "unit": "ns/iter",
            "extra": "iterations: 65544\ncpu: 12669.12608324179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27560.19265842833,
            "unit": "ns/iter",
            "extra": "iterations: 30266\ncpu: 27560.100442741033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 43236.861375609304,
            "unit": "ns/iter",
            "extra": "iterations: 19744\ncpu: 43235.772893030815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 54641.94500868618,
            "unit": "ns/iter",
            "extra": "iterations: 14966\ncpu: 54641.200053454464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 56483.87340000341,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56482.63999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 68753.47451073426,
            "unit": "ns/iter",
            "extra": "iterations: 12672\ncpu: 68752.05965909094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 79486.73855497949,
            "unit": "ns/iter",
            "extra": "iterations: 11031\ncpu: 79484.72486628589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 90943.05194939999,
            "unit": "ns/iter",
            "extra": "iterations: 9644\ncpu: 90942.11945250937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 715.8283066055712,
            "unit": "ns/iter",
            "extra": "iterations: 972833\ncpu: 715.8230652126323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 625.207489340671,
            "unit": "ns/iter",
            "extra": "iterations: 1117802\ncpu: 625.1840665878209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 609.531656542131,
            "unit": "ns/iter",
            "extra": "iterations: 1150173\ncpu: 609.5335223483775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 609.229761754826,
            "unit": "ns/iter",
            "extra": "iterations: 1151545\ncpu: 609.2239556422019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1099.7538137689633,
            "unit": "ns/iter",
            "extra": "iterations: 636575\ncpu: 1099.7480265483248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5037.140073785925,
            "unit": "ns/iter",
            "extra": "iterations: 159109\ncpu: 5037.078983589866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 22508.787102018156,
            "unit": "ns/iter",
            "extra": "iterations: 36905\ncpu: 22508.48936458474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 17734.363442373786,
            "unit": "ns/iter",
            "extra": "iterations: 46863\ncpu: 17734.090860593606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 17866.001541366444,
            "unit": "ns/iter",
            "extra": "iterations: 46063\ncpu: 17865.395219590562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 17849.49787599177,
            "unit": "ns/iter",
            "extra": "iterations: 46610\ncpu: 17848.92297790176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46235.42105836178,
            "unit": "ns/iter",
            "extra": "iterations: 18368\ncpu: 46235.142639372985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 536592.4406674873,
            "unit": "ns/iter",
            "extra": "iterations: 1618\ncpu: 536575.4635352303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 441465.94441611576,
            "unit": "ns/iter",
            "extra": "iterations: 1961\ncpu: 441462.36613972543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 440806.7637835039,
            "unit": "ns/iter",
            "extra": "iterations: 1977\ncpu: 440797.723823976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 435393.02059732354,
            "unit": "ns/iter",
            "extra": "iterations: 1942\ncpu: 435384.50051493355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 273590.2781954932,
            "unit": "ns/iter",
            "extra": "iterations: 3192\ncpu: 273591.10275689146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 439760.06747841934,
            "unit": "ns/iter",
            "extra": "iterations: 1971\ncpu: 439737.1892440382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2166228.8345153285,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 2166185.1063829763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 865348.6456620826,
            "unit": "ns/iter",
            "extra": "iterations: 1095\ncpu: 865307.9452054813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2836417.686335337,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2836307.1428571423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4667.302565601325,
            "unit": "ns/iter",
            "extra": "iterations: 174501\ncpu: 4667.273539979717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 20416.026098089016,
            "unit": "ns/iter",
            "extra": "iterations: 40616\ncpu: 20415.584991136417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 16267.640820350502,
            "unit": "ns/iter",
            "extra": "iterations: 50710\ncpu: 16267.70065075931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 16281.908875131563,
            "unit": "ns/iter",
            "extra": "iterations: 50557\ncpu: 16281.66228217656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 15905.220745787137,
            "unit": "ns/iter",
            "extra": "iterations: 50497\ncpu: 15897.888983503915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 43784.19703537248,
            "unit": "ns/iter",
            "extra": "iterations: 18687\ncpu: 43782.27644886814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 545852.9020100528,
            "unit": "ns/iter",
            "extra": "iterations: 1592\ncpu: 545826.5075376852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 451833.3725591028,
            "unit": "ns/iter",
            "extra": "iterations: 1946\ncpu: 451822.35354573396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 447334.0787723916,
            "unit": "ns/iter",
            "extra": "iterations: 1955\ncpu: 447316.21483375935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 448176.273613959,
            "unit": "ns/iter",
            "extra": "iterations: 1948\ncpu: 448171.6632443525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 272844.7909657349,
            "unit": "ns/iter",
            "extra": "iterations: 3210\ncpu: 272836.16822430014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 449685.85545266466,
            "unit": "ns/iter",
            "extra": "iterations: 1944\ncpu: 449683.07613168645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2194887.8568019415,
            "unit": "ns/iter",
            "extra": "iterations: 419\ncpu: 2194853.221957039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 854907.1081330581,
            "unit": "ns/iter",
            "extra": "iterations: 1082\ncpu: 854888.3548983353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4652.697725715998,
            "unit": "ns/iter",
            "extra": "iterations: 159127\ncpu: 4652.441760354961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 20050.921907033175,
            "unit": "ns/iter",
            "extra": "iterations: 41950\ncpu: 20050.519666269432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 16148.20071449266,
            "unit": "ns/iter",
            "extra": "iterations: 51785\ncpu: 16148.251424157563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 16195.035329342172,
            "unit": "ns/iter",
            "extra": "iterations: 51770\ncpu: 16194.639752752593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 17895.214296501726,
            "unit": "ns/iter",
            "extra": "iterations: 46347\ncpu: 17895.27477506624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 44934.13626102045,
            "unit": "ns/iter",
            "extra": "iterations: 18604\ncpu: 44933.229413029265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 533012.8817337623,
            "unit": "ns/iter",
            "extra": "iterations: 1615\ncpu: 533007.8637770868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 444106.80534154683,
            "unit": "ns/iter",
            "extra": "iterations: 1947\ncpu: 444102.8248587591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 440952.2911585303,
            "unit": "ns/iter",
            "extra": "iterations: 1968\ncpu: 440943.6991869914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 443410.7596741282,
            "unit": "ns/iter",
            "extra": "iterations: 1964\ncpu: 443412.62729124236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 271771.23906345136,
            "unit": "ns/iter",
            "extra": "iterations: 3246\ncpu: 271759.1497227375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 437032.0277217786,
            "unit": "ns/iter",
            "extra": "iterations: 1984\ncpu: 437029.6875000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 372.96673864767723,
            "unit": "ns/iter",
            "extra": "iterations: 1863454\ncpu: 372.96268112869996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1950.112609355799,
            "unit": "ns/iter",
            "extra": "iterations: 359606\ncpu: 1950.1009438107233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1498.1364377496259,
            "unit": "ns/iter",
            "extra": "iterations: 467957\ncpu: 1498.1135018815794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1573.8750429864187,
            "unit": "ns/iter",
            "extra": "iterations: 465264\ncpu: 1573.8408731386842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1305.547092834518,
            "unit": "ns/iter",
            "extra": "iterations: 532873\ncpu: 1305.5045010724862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8155.142494497775,
            "unit": "ns/iter",
            "extra": "iterations: 85877\ncpu: 8155.182412054439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 22494.864698872712,
            "unit": "ns/iter",
            "extra": "iterations: 32727\ncpu: 22493.959116326274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5511.34583218387,
            "unit": "ns/iter",
            "extra": "iterations: 126865\ncpu: 5511.310448114146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5535.707316098401,
            "unit": "ns/iter",
            "extra": "iterations: 125094\ncpu: 5535.614018258297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5558.638848654616,
            "unit": "ns/iter",
            "extra": "iterations: 124272\ncpu: 5558.467715977956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11562.590020975978,
            "unit": "ns/iter",
            "extra": "iterations: 60547\ncpu: 11562.635638429854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10361.461816785533,
            "unit": "ns/iter",
            "extra": "iterations: 67713\ncpu: 10361.172891468404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3401.7682768418467,
            "unit": "ns/iter",
            "extra": "iterations: 205547\ncpu: 3401.8010479355084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 17042.288745902453,
            "unit": "ns/iter",
            "extra": "iterations: 41185\ncpu: 17041.85261624357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13485.719198040288,
            "unit": "ns/iter",
            "extra": "iterations: 51823\ncpu: 13485.633791945571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13847.424318335447,
            "unit": "ns/iter",
            "extra": "iterations: 51895\ncpu: 13847.38028711814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14124.354950708992,
            "unit": "ns/iter",
            "extra": "iterations: 48387\ncpu: 14123.706780747056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29694.221410676426,
            "unit": "ns/iter",
            "extra": "iterations: 23549\ncpu: 29693.889337126737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 114149.47629100543,
            "unit": "ns/iter",
            "extra": "iterations: 6158\ncpu: 114141.8480025972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 98690.18419572836,
            "unit": "ns/iter",
            "extra": "iterations: 7112\ncpu: 98687.51406074311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 97869.48238254554,
            "unit": "ns/iter",
            "extra": "iterations: 7152\ncpu: 97861.12975391552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 99096.86468180684,
            "unit": "ns/iter",
            "extra": "iterations: 7087\ncpu: 99089.88288415299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 63544.40831362464,
            "unit": "ns/iter",
            "extra": "iterations: 10994\ncpu: 63544.61524467923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 98640.10471352261,
            "unit": "ns/iter",
            "extra": "iterations: 7086\ncpu: 98636.0005644927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3408.88216434635,
            "unit": "ns/iter",
            "extra": "iterations: 204921\ncpu: 3408.7955846399686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 17145.543275828048,
            "unit": "ns/iter",
            "extra": "iterations: 40808\ncpu: 17144.476573221084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13682.702317982961,
            "unit": "ns/iter",
            "extra": "iterations: 51424\ncpu: 13682.335096453002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13299.447534550354,
            "unit": "ns/iter",
            "extra": "iterations: 52749\ncpu: 13298.640732525595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 14053.753188237575,
            "unit": "ns/iter",
            "extra": "iterations: 49714\ncpu: 14053.192259725674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29141.82103773968,
            "unit": "ns/iter",
            "extra": "iterations: 24033\ncpu: 29139.986684975367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 113837.38147847874,
            "unit": "ns/iter",
            "extra": "iterations: 6155\ncpu: 113834.91470349178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 96768.99513212615,
            "unit": "ns/iter",
            "extra": "iterations: 7190\ncpu: 96767.84422809488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 96681.70212765734,
            "unit": "ns/iter",
            "extra": "iterations: 7238\ncpu: 96676.04310583108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 97346.59633282408,
            "unit": "ns/iter",
            "extra": "iterations: 7199\ncpu: 97343.63105986941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 64259.83213760144,
            "unit": "ns/iter",
            "extra": "iterations: 10872\ncpu: 64255.960264901136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 98277.60574631827,
            "unit": "ns/iter",
            "extra": "iterations: 7135\ncpu: 98276.73440784903 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702488573953,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 850.8488296492674,
            "unit": "ns/iter",
            "extra": "iterations: 819797\ncpu: 850.7950138875846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12399.497873235465,
            "unit": "ns/iter",
            "extra": "iterations: 66533\ncpu: 12399.571641140486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27229.49766225298,
            "unit": "ns/iter",
            "extra": "iterations: 30585\ncpu: 27228.193558934123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 42755.084881059796,
            "unit": "ns/iter",
            "extra": "iterations: 18791\ncpu: 42753.54691075516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 54053.18115702335,
            "unit": "ns/iter",
            "extra": "iterations: 15125\ncpu: 54050.591735537186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55505.830399999926,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55503.10000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 67551.8773182279,
            "unit": "ns/iter",
            "extra": "iterations: 12887\ncpu: 67548.65368200514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 77992.4911935642,
            "unit": "ns/iter",
            "extra": "iterations: 11185\ncpu: 77990.72865444793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 89349.50807935835,
            "unit": "ns/iter",
            "extra": "iterations: 9778\ncpu: 89345.79668643903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 705.892359026812,
            "unit": "ns/iter",
            "extra": "iterations: 992884\ncpu: 705.855971090279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 615.263304948177,
            "unit": "ns/iter",
            "extra": "iterations: 1153537\ncpu: 615.2271665321518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 610.4139267503283,
            "unit": "ns/iter",
            "extra": "iterations: 1092947\ncpu: 610.3620761116509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 601.5444100152257,
            "unit": "ns/iter",
            "extra": "iterations: 1165030\ncpu: 601.5430503935519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1093.1297161235655,
            "unit": "ns/iter",
            "extra": "iterations: 640807\ncpu: 1093.0614053841468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5027.142475522938,
            "unit": "ns/iter",
            "extra": "iterations: 159845\ncpu: 5027.173824642624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 21630.781231243578,
            "unit": "ns/iter",
            "extra": "iterations: 38319\ncpu: 21629.69806101414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 17230.009688086495,
            "unit": "ns/iter",
            "extra": "iterations: 47481\ncpu: 17230.049914702748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 17930.576575009312,
            "unit": "ns/iter",
            "extra": "iterations: 45968\ncpu: 17930.329794639805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 17491.991376387385,
            "unit": "ns/iter",
            "extra": "iterations: 47196\ncpu: 17491.673023137566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 45272.76123549784,
            "unit": "ns/iter",
            "extra": "iterations: 18357\ncpu: 45269.86980443435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 527138.3822830141,
            "unit": "ns/iter",
            "extra": "iterations: 1682\ncpu: 527103.5077288926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 431575.9273715492,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 431553.50790513755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 436898.5589999852,
            "unit": "ns/iter",
            "extra": "iterations: 2000\ncpu: 436869.54999999906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 435261.79229229636,
            "unit": "ns/iter",
            "extra": "iterations: 1998\ncpu: 435250.7007006993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 268082.20018450875,
            "unit": "ns/iter",
            "extra": "iterations: 3252\ncpu: 268070.9102091023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 429053.89995096455,
            "unit": "ns/iter",
            "extra": "iterations: 2039\ncpu: 429020.5492888671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2144488.09930721,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2144398.1524249353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 842268.7574123895,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 842220.3953279438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2803804.066869357,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2803621.8844984723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4950.420960377025,
            "unit": "ns/iter",
            "extra": "iterations: 160312\ncpu: 4950.191501571946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 22289.717564951716,
            "unit": "ns/iter",
            "extra": "iterations: 36681\ncpu: 22288.964313949982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 17752.63794181665,
            "unit": "ns/iter",
            "extra": "iterations: 46371\ncpu: 17752.004485562116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 17726.185091585146,
            "unit": "ns/iter",
            "extra": "iterations: 46296\ncpu: 17725.174961119686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 17737.60943168028,
            "unit": "ns/iter",
            "extra": "iterations: 46312\ncpu: 17736.746415615882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 45279.18861209717,
            "unit": "ns/iter",
            "extra": "iterations: 18265\ncpu: 45276.78072816882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 533902.8736971379,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 533875.9656652402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 440114.595141702,
            "unit": "ns/iter",
            "extra": "iterations: 1976\ncpu: 440103.1882591092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 439567.36722306494,
            "unit": "ns/iter",
            "extra": "iterations: 1977\ncpu: 439555.9433485094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 444042.0993411,
            "unit": "ns/iter",
            "extra": "iterations: 1973\ncpu: 444020.42574759136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 266670.3493902528,
            "unit": "ns/iter",
            "extra": "iterations: 3280\ncpu: 266486.4024390251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 440824.39777327183,
            "unit": "ns/iter",
            "extra": "iterations: 1976\ncpu: 440812.0951416998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2144458.799528297,
            "unit": "ns/iter",
            "extra": "iterations: 424\ncpu: 2144370.2830188707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 826440.9982142951,
            "unit": "ns/iter",
            "extra": "iterations: 1120\ncpu: 826419.1071428569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4488.425538830543,
            "unit": "ns/iter",
            "extra": "iterations: 178442\ncpu: 4488.3659676533625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 19811.995352420094,
            "unit": "ns/iter",
            "extra": "iterations: 38945\ncpu: 19812.117088201274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 15942.670097978642,
            "unit": "ns/iter",
            "extra": "iterations: 48378\ncpu: 15942.622679730426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 16025.531975169582,
            "unit": "ns/iter",
            "extra": "iterations: 48006\ncpu: 16025.313502478944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 15733.532876539639,
            "unit": "ns/iter",
            "extra": "iterations: 47724\ncpu: 15732.53918363928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 43468.0316678368,
            "unit": "ns/iter",
            "extra": "iterations: 18473\ncpu: 43466.475396524496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 527035.8340348772,
            "unit": "ns/iter",
            "extra": "iterations: 1663\ncpu: 527016.2958508709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 437880.8130934368,
            "unit": "ns/iter",
            "extra": "iterations: 2001\ncpu: 437853.4232883546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 434712.07352209237,
            "unit": "ns/iter",
            "extra": "iterations: 2013\ncpu: 434715.1018380528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 436682.8492462233,
            "unit": "ns/iter",
            "extra": "iterations: 1990\ncpu: 436662.2110552748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 268983.217457428,
            "unit": "ns/iter",
            "extra": "iterations: 3288\ncpu: 268972.1411192207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 431653.08149236836,
            "unit": "ns/iter",
            "extra": "iterations: 2037\ncpu: 431630.8787432478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 358.7880181306726,
            "unit": "ns/iter",
            "extra": "iterations: 1949846\ncpu: 358.76346131950993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1873.4340360994677,
            "unit": "ns/iter",
            "extra": "iterations: 373856\ncpu: 1873.3557840451786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1493.7161222545922,
            "unit": "ns/iter",
            "extra": "iterations: 469283\ncpu: 1493.6236769710474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1524.7830473124923,
            "unit": "ns/iter",
            "extra": "iterations: 459349\ncpu: 1524.720201850884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1292.802027226908,
            "unit": "ns/iter",
            "extra": "iterations: 557905\ncpu: 1292.7604161998922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8220.230231243828,
            "unit": "ns/iter",
            "extra": "iterations: 84932\ncpu: 8220.065464136029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 22078.39596592801,
            "unit": "ns/iter",
            "extra": "iterations: 31581\ncpu: 22078.02792818451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5362.06347511473,
            "unit": "ns/iter",
            "extra": "iterations: 130177\ncpu: 5361.734407767892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5395.117700765001,
            "unit": "ns/iter",
            "extra": "iterations: 130339\ncpu: 5394.946255533654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5409.014521523958,
            "unit": "ns/iter",
            "extra": "iterations: 129463\ncpu: 5408.769300881372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11410.239426624394,
            "unit": "ns/iter",
            "extra": "iterations: 63414\ncpu: 11409.422209606635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10072.472856359384,
            "unit": "ns/iter",
            "extra": "iterations: 69298\ncpu: 10072.323876590826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3554.1385470179607,
            "unit": "ns/iter",
            "extra": "iterations: 210037\ncpu: 3553.862414717449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16298.045655615706,
            "unit": "ns/iter",
            "extra": "iterations: 42952\ncpu: 16298.146768485898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12969.264664205426,
            "unit": "ns/iter",
            "extra": "iterations: 53634\ncpu: 12968.797777529053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13003.137316426279,
            "unit": "ns/iter",
            "extra": "iterations: 53861\ncpu: 13002.70882456678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13797.592872292298,
            "unit": "ns/iter",
            "extra": "iterations: 50451\ncpu: 13796.864284156847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29366.855079763518,
            "unit": "ns/iter",
            "extra": "iterations: 23820\ncpu: 29366.15449202322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 111342.99374398308,
            "unit": "ns/iter",
            "extra": "iterations: 6234\ncpu: 111340.24703240271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 95850.87919180546,
            "unit": "ns/iter",
            "extra": "iterations: 7127\ncpu: 95845.86782657474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 95923.44755244875,
            "unit": "ns/iter",
            "extra": "iterations: 7293\ncpu: 95919.78609625745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 96201.755919607,
            "unit": "ns/iter",
            "extra": "iterations: 7264\ncpu: 96194.54845815018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 61156.51674807961,
            "unit": "ns/iter",
            "extra": "iterations: 11464\ncpu: 61155.068039079124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 97302.98522236514,
            "unit": "ns/iter",
            "extra": "iterations: 7173\ncpu: 97300.73888191971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3341.8523324979847,
            "unit": "ns/iter",
            "extra": "iterations: 209132\ncpu: 3341.7736166631903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16874.718195142686,
            "unit": "ns/iter",
            "extra": "iterations: 41621\ncpu: 16873.828115614775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13203.75175221302,
            "unit": "ns/iter",
            "extra": "iterations: 52077\ncpu: 13203.135741306154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13060.45264535426,
            "unit": "ns/iter",
            "extra": "iterations: 53490\ncpu: 13060.529070854303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13620.104269116657,
            "unit": "ns/iter",
            "extra": "iterations: 51041\ncpu: 13619.895770067023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28617.634709931288,
            "unit": "ns/iter",
            "extra": "iterations: 24408\ncpu: 28617.383644706955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 111613.44942929361,
            "unit": "ns/iter",
            "extra": "iterations: 6308\ncpu: 111608.40202916876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 95051.2823656216,
            "unit": "ns/iter",
            "extra": "iterations: 7423\ncpu: 95049.4948134161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 94588.33383010564,
            "unit": "ns/iter",
            "extra": "iterations: 7381\ncpu: 94585.61170573035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 94479.90762186685,
            "unit": "ns/iter",
            "extra": "iterations: 7426\ncpu: 94474.69701050369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 61786.959473967465,
            "unit": "ns/iter",
            "extra": "iterations: 11178\ncpu: 61785.99928430826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 94686.06533005806,
            "unit": "ns/iter",
            "extra": "iterations: 7332\ncpu: 94682.25586470388 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d00df85748c367e34b838c50472cb85d5c89201f",
          "message": "Add Parser& Serializer with tests, example, benchmarks and CI CD (gcc & clang) (#1)",
          "timestamp": "2023-12-13T20:22:18+03:00",
          "tree_id": "d2ed956f4cc316eb0fee876ba27a22bed47f08d6",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d00df85748c367e34b838c50472cb85d5c89201f"
        },
        "date": 1702490830534,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 861.1212251591636,
            "unit": "ns/iter",
            "extra": "iterations: 813478\ncpu: 861.0757758660959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12408.40299847413,
            "unit": "ns/iter",
            "extra": "iterations: 66834\ncpu: 12408.04680252566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27295.27124376243,
            "unit": "ns/iter",
            "extra": "iterations: 30456\ncpu: 27294.77607039664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 42619.12314116827,
            "unit": "ns/iter",
            "extra": "iterations: 19636\ncpu: 42619.32674679161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53983.78290679566,
            "unit": "ns/iter",
            "extra": "iterations: 14731\ncpu: 53982.92037200462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55842.03999999886,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55841.760000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 67466.40110905482,
            "unit": "ns/iter",
            "extra": "iterations: 12984\ncpu: 67464.19439309917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 78003.73986576896,
            "unit": "ns/iter",
            "extra": "iterations: 11175\ncpu: 78001.14541387027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 88969.82077102874,
            "unit": "ns/iter",
            "extra": "iterations: 9831\ncpu: 88967.96867053211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 712.7199116389924,
            "unit": "ns/iter",
            "extra": "iterations: 989577\ncpu: 712.7033065643196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 616.0188747967896,
            "unit": "ns/iter",
            "extra": "iterations: 1136648\ncpu: 616.0061866118626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 627.2247627785769,
            "unit": "ns/iter",
            "extra": "iterations: 1109512\ncpu: 627.2107917715177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 632.4612389669207,
            "unit": "ns/iter",
            "extra": "iterations: 1116753\ncpu: 632.4238215612585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1110.2676507518752,
            "unit": "ns/iter",
            "extra": "iterations: 629959\ncpu: 1110.2362217223663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5060.659401310832,
            "unit": "ns/iter",
            "extra": "iterations: 156542\ncpu: 5060.630373957155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23148.355595920173,
            "unit": "ns/iter",
            "extra": "iterations: 35785\ncpu: 23148.01173676125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 18534.68363427597,
            "unit": "ns/iter",
            "extra": "iterations: 45302\ncpu: 18534.28104719437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 16983.288575239254,
            "unit": "ns/iter",
            "extra": "iterations: 44990\ncpu: 16982.171593687453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 16278.960801937468,
            "unit": "ns/iter",
            "extra": "iterations: 51176\ncpu: 16278.026809441944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 44349.33206168623,
            "unit": "ns/iter",
            "extra": "iterations: 18611\ncpu: 44346.69818924298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 524873.9794188809,
            "unit": "ns/iter",
            "extra": "iterations: 1652\ncpu: 524843.0387409183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 431471.77971156867,
            "unit": "ns/iter",
            "extra": "iterations: 2011\ncpu: 431456.0914967683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 430427.5533399959,
            "unit": "ns/iter",
            "extra": "iterations: 2006\ncpu: 430386.49052841397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 435489.4396207457,
            "unit": "ns/iter",
            "extra": "iterations: 2004\ncpu: 435454.69061876246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 267968.02265674033,
            "unit": "ns/iter",
            "extra": "iterations: 3222\ncpu: 267949.3171942895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 429535.1037220799,
            "unit": "ns/iter",
            "extra": "iterations: 2015\ncpu: 429492.80397022224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2130745.8299492025,
            "unit": "ns/iter",
            "extra": "iterations: 394\ncpu: 2130422.0812182766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 861529.7509157552,
            "unit": "ns/iter",
            "extra": "iterations: 1092\ncpu: 861460.4395604414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2788659.1933534886,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2788518.4290030124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4872.807738131716,
            "unit": "ns/iter",
            "extra": "iterations: 162830\ncpu: 4872.416016704537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 22384.432049567728,
            "unit": "ns/iter",
            "extra": "iterations: 36637\ncpu: 22382.894341785584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 17855.077762207453,
            "unit": "ns/iter",
            "extra": "iterations: 46385\ncpu: 17852.95246308074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 17814.674397011902,
            "unit": "ns/iter",
            "extra": "iterations: 46311\ncpu: 17813.545377987906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 17863.78737548802,
            "unit": "ns/iter",
            "extra": "iterations: 46180\ncpu: 17862.468601126107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 43735.94189469022,
            "unit": "ns/iter",
            "extra": "iterations: 18346\ncpu: 43735.40826338172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 536548.3647566407,
            "unit": "ns/iter",
            "extra": "iterations: 1623\ncpu: 536544.8552064062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 441296.15583754546,
            "unit": "ns/iter",
            "extra": "iterations: 1970\ncpu: 441287.91878172423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 439465.18126889935,
            "unit": "ns/iter",
            "extra": "iterations: 1986\ncpu: 439462.4874118814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 435279.14739455876,
            "unit": "ns/iter",
            "extra": "iterations: 2015\ncpu: 435270.7692307708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 264757.4266138952,
            "unit": "ns/iter",
            "extra": "iterations: 3284\ncpu: 264753.3495736908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 436929.8014999856,
            "unit": "ns/iter",
            "extra": "iterations: 2000\ncpu: 436922.3000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2176967.4402809497,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 2176909.3676814972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 855545.6360294024,
            "unit": "ns/iter",
            "extra": "iterations: 1088\ncpu: 855542.0036764741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 4999.5419903396205,
            "unit": "ns/iter",
            "extra": "iterations: 160656\ncpu: 4999.433572353328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 22083.224477342697,
            "unit": "ns/iter",
            "extra": "iterations: 37692\ncpu: 22083.054759630715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 17721.328857197346,
            "unit": "ns/iter",
            "extra": "iterations: 46841\ncpu: 17721.10971157751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 17908.495911177313,
            "unit": "ns/iter",
            "extra": "iterations: 46835\ncpu: 17908.134941816963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 17869.475098916457,
            "unit": "ns/iter",
            "extra": "iterations: 46504\ncpu: 17869.316617925295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 45533.27283595111,
            "unit": "ns/iter",
            "extra": "iterations: 18403\ncpu: 45533.565179590216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 531256.6025640914,
            "unit": "ns/iter",
            "extra": "iterations: 1638\ncpu: 531260.0732600739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 436541.59357752727,
            "unit": "ns/iter",
            "extra": "iterations: 1993\ncpu: 436525.23833416635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 432612.66383616,
            "unit": "ns/iter",
            "extra": "iterations: 2002\ncpu: 432607.69230769057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 431434.9440838851,
            "unit": "ns/iter",
            "extra": "iterations: 2003\ncpu: 431436.59510733926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 265817.3989153348,
            "unit": "ns/iter",
            "extra": "iterations: 3319\ncpu: 265809.3100331411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 429971.6124567509,
            "unit": "ns/iter",
            "extra": "iterations: 2023\ncpu: 429961.59169550147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 381.538125400099,
            "unit": "ns/iter",
            "extra": "iterations: 1830748\ncpu: 381.5279874674182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2063.9191053609065,
            "unit": "ns/iter",
            "extra": "iterations: 339936\ncpu: 2063.931740092244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1532.5902099983364,
            "unit": "ns/iter",
            "extra": "iterations: 456956\ncpu: 1532.5624348952504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1580.5349456892889,
            "unit": "ns/iter",
            "extra": "iterations: 442086\ncpu: 1580.5024361775752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1314.4132751901736,
            "unit": "ns/iter",
            "extra": "iterations: 532708\ncpu: 1314.420658221769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8206.962224775682,
            "unit": "ns/iter",
            "extra": "iterations: 85294\ncpu: 8206.784767979001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 22335.39920255178,
            "unit": "ns/iter",
            "extra": "iterations: 31350\ncpu: 22335.32695374821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5495.4454992582705,
            "unit": "ns/iter",
            "extra": "iterations: 128090\ncpu: 5495.3993285971355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5476.8526963500235,
            "unit": "ns/iter",
            "extra": "iterations: 128062\ncpu: 5476.740953600661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5487.214538797825,
            "unit": "ns/iter",
            "extra": "iterations: 127287\ncpu: 5487.245358913287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11410.253371115665,
            "unit": "ns/iter",
            "extra": "iterations: 61404\ncpu: 11410.30877467274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10138.58956123117,
            "unit": "ns/iter",
            "extra": "iterations: 68054\ncpu: 10138.348958180268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3409.959226473508,
            "unit": "ns/iter",
            "extra": "iterations: 205035\ncpu: 3409.8597800375883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16832.12067014908,
            "unit": "ns/iter",
            "extra": "iterations: 41543\ncpu: 16831.92354909381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13352.668576119833,
            "unit": "ns/iter",
            "extra": "iterations: 52371\ncpu: 13352.181550858302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13324.68556308533,
            "unit": "ns/iter",
            "extra": "iterations: 52532\ncpu: 13324.752531790115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14130.04359182041,
            "unit": "ns/iter",
            "extra": "iterations: 49390\ncpu: 14129.487750556682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29934.170059009215,
            "unit": "ns/iter",
            "extra": "iterations: 23386\ncpu: 29933.39177285558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 113812.80201724934,
            "unit": "ns/iter",
            "extra": "iterations: 6147\ncpu: 113810.02114852822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 99508.65198803057,
            "unit": "ns/iter",
            "extra": "iterations: 7017\ncpu: 99507.90936297491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 98949.90906503143,
            "unit": "ns/iter",
            "extra": "iterations: 7027\ncpu: 98949.39518998256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 99455.84691708029,
            "unit": "ns/iter",
            "extra": "iterations: 7055\ncpu: 99450.55988660509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 63121.86400000221,
            "unit": "ns/iter",
            "extra": "iterations: 11000\ncpu: 63119.84545454472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 99342.76821097989,
            "unit": "ns/iter",
            "extra": "iterations: 7015\ncpu: 99339.23022095596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3363.925627149672,
            "unit": "ns/iter",
            "extra": "iterations: 207885\ncpu: 3363.9444885393195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 17063.635516524584,
            "unit": "ns/iter",
            "extra": "iterations: 40995\ncpu: 17063.171118429214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13307.963674887784,
            "unit": "ns/iter",
            "extra": "iterations: 52388\ncpu: 13307.881575933474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13279.085526565836,
            "unit": "ns/iter",
            "extra": "iterations: 52662\ncpu: 13278.99244236849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13819.417983350668,
            "unit": "ns/iter",
            "extra": "iterations: 50569\ncpu: 13818.940457592771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28912.455025798314,
            "unit": "ns/iter",
            "extra": "iterations: 24225\ncpu: 28912.33023735817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 113332.96363340245,
            "unit": "ns/iter",
            "extra": "iterations: 6132\ncpu: 113327.0221787352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 96847.27041591895,
            "unit": "ns/iter",
            "extra": "iterations: 7237\ncpu: 96845.48846206852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 97104.87191358698,
            "unit": "ns/iter",
            "extra": "iterations: 7128\ncpu: 97102.74971941748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 96857.22350007037,
            "unit": "ns/iter",
            "extra": "iterations: 7217\ncpu: 96856.2144935562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 63542.7619655424,
            "unit": "ns/iter",
            "extra": "iterations: 10969\ncpu: 63541.46230285405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 98726.83488175426,
            "unit": "ns/iter",
            "extra": "iterations: 7104\ncpu: 98721.46677927922 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "380c708d79f348a900173c4fb482ef4fb63a6372",
          "message": "Update parser.hpp",
          "timestamp": "2024-01-18T13:25:10+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/380c708d79f348a900173c4fb482ef4fb63a6372"
        },
        "date": 1705573947836,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 871.730503047046,
            "unit": "ns/iter",
            "extra": "iterations: 805690\ncpu: 871.6810435775546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12725.532240723069,
            "unit": "ns/iter",
            "extra": "iterations: 65104\ncpu: 12724.548414843941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27869.003006414,
            "unit": "ns/iter",
            "extra": "iterations: 29936\ncpu: 27867.874799572422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 44243.48354755788,
            "unit": "ns/iter",
            "extra": "iterations: 19450\ncpu: 44240.05655526995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53850.67449327399,
            "unit": "ns/iter",
            "extra": "iterations: 14949\ncpu: 53848.20389323703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55245.993799997,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55243.20000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 67796.4293723711,
            "unit": "ns/iter",
            "extra": "iterations: 12842\ncpu: 67792.5712505841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 78177.11783098445,
            "unit": "ns/iter",
            "extra": "iterations: 11194\ncpu: 78173.37859567624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 89144.20362694548,
            "unit": "ns/iter",
            "extra": "iterations: 9650\ncpu: 89138.41450777209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 715.8964862278806,
            "unit": "ns/iter",
            "extra": "iterations: 982420\ncpu: 715.8706052401205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 647.2459520154613,
            "unit": "ns/iter",
            "extra": "iterations: 1089184\ncpu: 647.2492251079703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 613.9256294186881,
            "unit": "ns/iter",
            "extra": "iterations: 1143436\ncpu: 613.9049321518658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 628.2245191776282,
            "unit": "ns/iter",
            "extra": "iterations: 1112729\ncpu: 628.1844905632908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1093.5273281723078,
            "unit": "ns/iter",
            "extra": "iterations: 631912\ncpu: 1093.4543100938124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4456.203841838208,
            "unit": "ns/iter",
            "extra": "iterations: 172001\ncpu: 4456.149092156441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20464.823248926314,
            "unit": "ns/iter",
            "extra": "iterations: 39847\ncpu: 20464.777774989332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16146.07146242262,
            "unit": "ns/iter",
            "extra": "iterations: 50642\ncpu: 16145.75056277397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 16193.773293698048,
            "unit": "ns/iter",
            "extra": "iterations: 50797\ncpu: 16193.80278362897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 16174.432916413423,
            "unit": "ns/iter",
            "extra": "iterations: 50929\ncpu: 16174.040330656388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 45215.55928085464,
            "unit": "ns/iter",
            "extra": "iterations: 18522\ncpu: 45213.38948277707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 530409.6632343959,
            "unit": "ns/iter",
            "extra": "iterations: 1651\ncpu: 530341.3688673521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 432337.8908729975,
            "unit": "ns/iter",
            "extra": "iterations: 2016\ncpu: 432311.5079365077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 435387.3861138932,
            "unit": "ns/iter",
            "extra": "iterations: 2002\ncpu: 435378.62137862196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 437435.1117794481,
            "unit": "ns/iter",
            "extra": "iterations: 1995\ncpu: 437419.5488721815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 270573.68373960117,
            "unit": "ns/iter",
            "extra": "iterations: 3241\ncpu: 270572.7244677579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 434442.86560476554,
            "unit": "ns/iter",
            "extra": "iterations: 2009\ncpu: 434444.2010950725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2130619.4079254284,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2130544.9883449874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 853472.135701269,
            "unit": "ns/iter",
            "extra": "iterations: 1098\ncpu: 853443.442622949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2803989.9294478423,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2803905.214723925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4938.880266961549,
            "unit": "ns/iter",
            "extra": "iterations: 160173\ncpu: 4938.684422468217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 22365.546415256966,
            "unit": "ns/iter",
            "extra": "iterations: 37283\ncpu: 22365.00013410946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 17635.343999829896,
            "unit": "ns/iter",
            "extra": "iterations: 46782\ncpu: 17635.419605831397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 17640.16871132787,
            "unit": "ns/iter",
            "extra": "iterations: 46707\ncpu: 17639.91692893995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 17650.25433612862,
            "unit": "ns/iter",
            "extra": "iterations: 46643\ncpu: 17650.20689063745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 45511.88454416533,
            "unit": "ns/iter",
            "extra": "iterations: 18362\ncpu: 45510.03158697337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 540175.388409371,
            "unit": "ns/iter",
            "extra": "iterations: 1622\ncpu: 540166.1528976597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 441795.4077079016,
            "unit": "ns/iter",
            "extra": "iterations: 1972\ncpu: 441793.2048681537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 441264.3291139323,
            "unit": "ns/iter",
            "extra": "iterations: 1975\ncpu: 441253.5189873406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 442268.1337708369,
            "unit": "ns/iter",
            "extra": "iterations: 1981\ncpu: 442262.4432105003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 268847.51747394336,
            "unit": "ns/iter",
            "extra": "iterations: 3262\ncpu: 268848.80441446824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 441615.13390602043,
            "unit": "ns/iter",
            "extra": "iterations: 1979\ncpu: 441606.6195047998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2144250.888625508,
            "unit": "ns/iter",
            "extra": "iterations: 422\ncpu: 2144177.962085293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 860828.4802208041,
            "unit": "ns/iter",
            "extra": "iterations: 1087\ncpu: 860805.0597976116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5073.969692303471,
            "unit": "ns/iter",
            "extra": "iterations: 155868\ncpu: 5073.958734313656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 22501.045994500964,
            "unit": "ns/iter",
            "extra": "iterations: 37461\ncpu: 22500.63265796424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 18133.955963618337,
            "unit": "ns/iter",
            "extra": "iterations: 46507\ncpu: 18133.898122863284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18149.514579205577,
            "unit": "ns/iter",
            "extra": "iterations: 46436\ncpu: 18149.379791541083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 18192.492717713667,
            "unit": "ns/iter",
            "extra": "iterations: 46414\ncpu: 18192.250183134413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 45296.427315389075,
            "unit": "ns/iter",
            "extra": "iterations: 18539\ncpu: 45295.42046496589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 520796.3261648831,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 520791.8757467155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 431525.0532807,
            "unit": "ns/iter",
            "extra": "iterations: 2027\ncpu: 431523.5816477546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 434736.46666665515,
            "unit": "ns/iter",
            "extra": "iterations: 2025\ncpu: 434728.93827160384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 425727.0899367992,
            "unit": "ns/iter",
            "extra": "iterations: 2057\ncpu: 425729.5089936814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 263566.9955089768,
            "unit": "ns/iter",
            "extra": "iterations: 3340\ncpu: 263568.3532934129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 425476.486526201,
            "unit": "ns/iter",
            "extra": "iterations: 2041\ncpu: 425473.3463988225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 402.72287622406856,
            "unit": "ns/iter",
            "extra": "iterations: 1727654\ncpu: 402.7203363636481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2003.5282571873365,
            "unit": "ns/iter",
            "extra": "iterations: 349504\ncpu: 2003.504967038996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1545.8189140430995,
            "unit": "ns/iter",
            "extra": "iterations: 454530\ncpu: 1545.8136976657254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1591.127118740367,
            "unit": "ns/iter",
            "extra": "iterations: 439235\ncpu: 1591.1136407617714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1308.0885052186575,
            "unit": "ns/iter",
            "extra": "iterations: 535008\ncpu: 1308.0623093486533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8000.480341195674,
            "unit": "ns/iter",
            "extra": "iterations: 87340\ncpu: 8000.526677352945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21865.65719169358,
            "unit": "ns/iter",
            "extra": "iterations: 31592\ncpu: 21865.472271461276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5364.418909803815,
            "unit": "ns/iter",
            "extra": "iterations: 130472\ncpu: 5364.401557422328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5350.227940166835,
            "unit": "ns/iter",
            "extra": "iterations: 131166\ncpu: 5350.18449903175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5462.5509727871695,
            "unit": "ns/iter",
            "extra": "iterations: 128137\ncpu: 5462.444102796209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11147.200789282077,
            "unit": "ns/iter",
            "extra": "iterations: 62842\ncpu: 11147.262976989972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9669.47952010653,
            "unit": "ns/iter",
            "extra": "iterations: 72266\ncpu: 9669.325824038944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3292.7917431191036,
            "unit": "ns/iter",
            "extra": "iterations: 212550\ncpu: 3292.7362973417817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16635.920234018704,
            "unit": "ns/iter",
            "extra": "iterations: 42048\ncpu: 16635.77815829529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13112.15383009849,
            "unit": "ns/iter",
            "extra": "iterations: 52701\ncpu: 13111.923872412324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13022.769908870614,
            "unit": "ns/iter",
            "extra": "iterations: 53770\ncpu: 13022.508833922224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14025.071695219845,
            "unit": "ns/iter",
            "extra": "iterations: 49557\ncpu: 14025.150836410607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30002.872853412588,
            "unit": "ns/iter",
            "extra": "iterations: 23351\ncpu: 30002.54378827452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 111531.27405757287,
            "unit": "ns/iter",
            "extra": "iterations: 6287\ncpu: 111528.47144902099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 96127.96130095344,
            "unit": "ns/iter",
            "extra": "iterations: 7287\ncpu: 96128.5988747082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 96483.0970406089,
            "unit": "ns/iter",
            "extra": "iterations: 7265\ncpu: 96482.61527873423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 95740.63812910888,
            "unit": "ns/iter",
            "extra": "iterations: 7312\ncpu: 95740.2625820581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 61796.195659822515,
            "unit": "ns/iter",
            "extra": "iterations: 11382\ncpu: 61795.80917237702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 96305.43338394757,
            "unit": "ns/iter",
            "extra": "iterations: 7243\ncpu: 96302.94077039824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3320.120073775078,
            "unit": "ns/iter",
            "extra": "iterations: 210912\ncpu: 3320.066188742227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16989.646461948378,
            "unit": "ns/iter",
            "extra": "iterations: 41195\ncpu: 16989.746328437875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13260.208769895582,
            "unit": "ns/iter",
            "extra": "iterations: 50012\ncpu: 13260.15156362483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13203.750456987003,
            "unit": "ns/iter",
            "extra": "iterations: 53065\ncpu: 13203.640817864803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13549.070500641254,
            "unit": "ns/iter",
            "extra": "iterations: 51574\ncpu: 13548.97041144777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29956.032525482326,
            "unit": "ns/iter",
            "extra": "iterations: 23643\ncpu: 29955.665524679447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 110748.97121282453,
            "unit": "ns/iter",
            "extra": "iterations: 6357\ncpu: 110748.6864873384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 93371.6575086717,
            "unit": "ns/iter",
            "extra": "iterations: 7498\ncpu: 93371.99253134182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 94592.88944249842,
            "unit": "ns/iter",
            "extra": "iterations: 7426\ncpu: 94592.09534069474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 94176.66055917411,
            "unit": "ns/iter",
            "extra": "iterations: 7368\ncpu: 94173.84636264767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 61558.506319111424,
            "unit": "ns/iter",
            "extra": "iterations: 11394\ncpu: 61554.00210637153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 97034.14830043893,
            "unit": "ns/iter",
            "extra": "iterations: 7296\ncpu: 97027.83717105375 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33685945+GremSnoort@users.noreply.github.com",
            "name": "GremSnoort",
            "username": "GremSnoort"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c1f90876aa9fbfe7c3d4e17807fabb3578467e0",
          "message": "Update parser.hpp (#2)",
          "timestamp": "2024-01-20T20:20:02+03:00",
          "tree_id": "728a97bf0015154eea5578165c8b4ccc440a3077",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/4c1f90876aa9fbfe7c3d4e17807fabb3578467e0"
        },
        "date": 1705771612521,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 863.8454515881699,
            "unit": "ns/iter",
            "extra": "iterations: 814625\ncpu: 863.7959797452816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12461.717010247688,
            "unit": "ns/iter",
            "extra": "iterations: 66748\ncpu: 12460.873734044464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26907.977692735174,
            "unit": "ns/iter",
            "extra": "iterations: 30573\ncpu: 26906.960389886506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41875.40930372946,
            "unit": "ns/iter",
            "extra": "iterations: 19863\ncpu: 41873.46825756429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53321.238292750444,
            "unit": "ns/iter",
            "extra": "iterations: 14948\ncpu: 53319.82873963072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 54605.540300002525,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54601.689999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 67870.38584231977,
            "unit": "ns/iter",
            "extra": "iterations: 13166\ncpu: 67868.17560382803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 76783.76378022437,
            "unit": "ns/iter",
            "extra": "iterations: 11248\ncpu: 76779.14295874823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 87987.3909401217,
            "unit": "ns/iter",
            "extra": "iterations: 9669\ncpu: 87982.45940635013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 692.0457893781722,
            "unit": "ns/iter",
            "extra": "iterations: 1008509\ncpu: 691.9918414213472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 598.6868248559329,
            "unit": "ns/iter",
            "extra": "iterations: 1177619\ncpu: 598.6486291406635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 590.9679632226087,
            "unit": "ns/iter",
            "extra": "iterations: 1185294\ncpu: 590.9243613820702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 586.4641274200281,
            "unit": "ns/iter",
            "extra": "iterations: 1197363\ncpu: 586.4275912985447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1087.8744903410686,
            "unit": "ns/iter",
            "extra": "iterations: 645775\ncpu: 1087.8271843908483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5045.141515989778,
            "unit": "ns/iter",
            "extra": "iterations: 158286\ncpu: 5044.9092149653125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 22809.75783002503,
            "unit": "ns/iter",
            "extra": "iterations: 36111\ncpu: 22808.651103541888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 18184.195410675176,
            "unit": "ns/iter",
            "extra": "iterations: 45279\ncpu: 18183.4934517105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 18091.523221245832,
            "unit": "ns/iter",
            "extra": "iterations: 45411\ncpu: 18090.848032415008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 18042.407983330697,
            "unit": "ns/iter",
            "extra": "iterations: 45595\ncpu: 18041.58570018638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 44890.48043310733,
            "unit": "ns/iter",
            "extra": "iterations: 18194\ncpu: 44888.908431350836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 529549.6972972852,
            "unit": "ns/iter",
            "extra": "iterations: 1665\ncpu: 529508.828828828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 431007.3025461724,
            "unit": "ns/iter",
            "extra": "iterations: 2003\ncpu: 430987.76834747713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 431922.3977956052,
            "unit": "ns/iter",
            "extra": "iterations: 1996\ncpu: 431910.6212424839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 436549.486132143,
            "unit": "ns/iter",
            "extra": "iterations: 1983\ncpu: 436531.1144730219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 270795.7128712733,
            "unit": "ns/iter",
            "extra": "iterations: 3232\ncpu: 270780.3836633658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 434458.2615230191,
            "unit": "ns/iter",
            "extra": "iterations: 1996\ncpu: 434439.0280561135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2142368.9790209783,
            "unit": "ns/iter",
            "extra": "iterations: 429\ncpu: 2142218.1818181844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 849502.2261261486,
            "unit": "ns/iter",
            "extra": "iterations: 1110\ncpu: 849466.3063063078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2828613.448170774,
            "unit": "ns/iter",
            "extra": "iterations: 328\ncpu: 2828392.9878048766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4934.594679137247,
            "unit": "ns/iter",
            "extra": "iterations: 160162\ncpu: 4934.331489367006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 22268.545743704726,
            "unit": "ns/iter",
            "extra": "iterations: 37098\ncpu: 22267.61820044205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 17705.469211129795,
            "unit": "ns/iter",
            "extra": "iterations: 46218\ncpu: 17704.593448439886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 17746.836463393032,
            "unit": "ns/iter",
            "extra": "iterations: 46112\ncpu: 17746.048750867398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 17801.29446412611,
            "unit": "ns/iter",
            "extra": "iterations: 46009\ncpu: 17800.319502706006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 45437.72021492423,
            "unit": "ns/iter",
            "extra": "iterations: 18239\ncpu: 45436.48226328198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 542527.8688833065,
            "unit": "ns/iter",
            "extra": "iterations: 1594\ncpu: 542501.317440403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 458152.5698979731,
            "unit": "ns/iter",
            "extra": "iterations: 1960\ncpu: 458137.90816326794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 442606.35859613447,
            "unit": "ns/iter",
            "extra": "iterations: 1966\ncpu: 442588.75890132115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 435672.2961460254,
            "unit": "ns/iter",
            "extra": "iterations: 1972\ncpu: 435656.3894523341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 264805.9126271644,
            "unit": "ns/iter",
            "extra": "iterations: 3342\ncpu: 264601.8252543372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 437740.1348370941,
            "unit": "ns/iter",
            "extra": "iterations: 1995\ncpu: 437717.29323308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2154165.3647059053,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2154034.3529411764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 872366.7788279749,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 872284.5935727796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5004.20927579851,
            "unit": "ns/iter",
            "extra": "iterations: 159555\ncpu: 5003.953495659834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 22036.38153244712,
            "unit": "ns/iter",
            "extra": "iterations: 37352\ncpu: 22035.245769972073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 17718.529387685663,
            "unit": "ns/iter",
            "extra": "iterations: 46414\ncpu: 17717.514112121302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 17800.759834681936,
            "unit": "ns/iter",
            "extra": "iterations: 46214\ncpu: 17800.03245769677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 17781.262392627,
            "unit": "ns/iter",
            "extra": "iterations: 46217\ncpu: 17779.862388298592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 44822.96066688066,
            "unit": "ns/iter",
            "extra": "iterations: 18534\ncpu: 44822.97938923052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 528438.9692770997,
            "unit": "ns/iter",
            "extra": "iterations: 1660\ncpu: 528407.7710843348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 433195.8040573797,
            "unit": "ns/iter",
            "extra": "iterations: 2021\ncpu: 433180.3067788198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 431631.79843058984,
            "unit": "ns/iter",
            "extra": "iterations: 2039\ncpu: 431616.33153506764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 444332.7186254906,
            "unit": "ns/iter",
            "extra": "iterations: 2008\ncpu: 444309.262948207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 265191.72133613273,
            "unit": "ns/iter",
            "extra": "iterations: 3323\ncpu: 265180.0782425522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 423646.3362615864,
            "unit": "ns/iter",
            "extra": "iterations: 2049\ncpu: 423625.57345046283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 363.8323077163133,
            "unit": "ns/iter",
            "extra": "iterations: 1921770\ncpu: 363.8162735394986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2009.3796877200202,
            "unit": "ns/iter",
            "extra": "iterations: 347957\ncpu: 2009.2761461904934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1543.4763173879721,
            "unit": "ns/iter",
            "extra": "iterations: 454384\ncpu: 1543.409979224633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1541.2459904710456,
            "unit": "ns/iter",
            "extra": "iterations: 453981\ncpu: 1541.1468761908548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1228.4444978708143,
            "unit": "ns/iter",
            "extra": "iterations: 549042\ncpu: 1228.4460933771845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8167.007066396095,
            "unit": "ns/iter",
            "extra": "iterations: 85758\ncpu: 8166.866064973586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21881.32942610698,
            "unit": "ns/iter",
            "extra": "iterations: 31992\ncpu: 21881.157789447494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5392.479437840911,
            "unit": "ns/iter",
            "extra": "iterations: 129145\ncpu: 5392.252119710328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5348.000284698616,
            "unit": "ns/iter",
            "extra": "iterations: 129962\ncpu: 5347.643157230644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5378.879239891631,
            "unit": "ns/iter",
            "extra": "iterations: 130192\ncpu: 5378.812830281445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11301.819755829843,
            "unit": "ns/iter",
            "extra": "iterations: 62088\ncpu: 11301.584847313548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10140.718818569963,
            "unit": "ns/iter",
            "extra": "iterations: 69272\ncpu: 10140.183623975083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3273.416206924027,
            "unit": "ns/iter",
            "extra": "iterations: 214069\ncpu: 3273.184814242168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16394.473616261235,
            "unit": "ns/iter",
            "extra": "iterations: 42602\ncpu: 16393.75146706724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13066.793637403322,
            "unit": "ns/iter",
            "extra": "iterations: 53343\ncpu: 13066.237369476878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12962.023492850276,
            "unit": "ns/iter",
            "extra": "iterations: 54059\ncpu: 12961.131356480808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13773.34794731857,
            "unit": "ns/iter",
            "extra": "iterations: 50568\ncpu: 13773.09167853193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29709.492050031702,
            "unit": "ns/iter",
            "extra": "iterations: 23585\ncpu: 29708.62836548638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 110819.80466655937,
            "unit": "ns/iter",
            "extra": "iterations: 6343\ncpu: 110814.31499290562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 95909.01370801637,
            "unit": "ns/iter",
            "extra": "iterations: 7295\ncpu: 95907.9643591486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 96235.00715071477,
            "unit": "ns/iter",
            "extra": "iterations: 7272\ncpu: 96232.70077007737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 96117.5628279498,
            "unit": "ns/iter",
            "extra": "iterations: 7242\ncpu: 96115.47914940726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 61606.62627685616,
            "unit": "ns/iter",
            "extra": "iterations: 11356\ncpu: 61602.19267347702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 95762.13232488217,
            "unit": "ns/iter",
            "extra": "iterations: 7338\ncpu: 95758.34014717946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3262.887239664699,
            "unit": "ns/iter",
            "extra": "iterations: 214579\ncpu: 3262.7661607147206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16675.000333444103,
            "unit": "ns/iter",
            "extra": "iterations: 41986\ncpu: 16674.41528128419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12948.387744125443,
            "unit": "ns/iter",
            "extra": "iterations: 53917\ncpu: 12948.276053934816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12928.332419211227,
            "unit": "ns/iter",
            "extra": "iterations: 53968\ncpu: 12928.122220574985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13510.961801108824,
            "unit": "ns/iter",
            "extra": "iterations: 51546\ncpu: 13510.621580723877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29118.806744003632,
            "unit": "ns/iter",
            "extra": "iterations: 24051\ncpu: 29117.550205812648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 110251.6450039341,
            "unit": "ns/iter",
            "extra": "iterations: 6355\ncpu: 110247.91502753753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 93779.45639379331,
            "unit": "ns/iter",
            "extra": "iterations: 7476\ncpu: 93775.96308186169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 94563.44923824014,
            "unit": "ns/iter",
            "extra": "iterations: 7417\ncpu: 94558.40636375776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 94615.48409797679,
            "unit": "ns/iter",
            "extra": "iterations: 7389\ncpu: 94613.88550548062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 62276.09002584995,
            "unit": "ns/iter",
            "extra": "iterations: 11219\ncpu: 62272.37721722043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 95212.5413882508,
            "unit": "ns/iter",
            "extra": "iterations: 7333\ncpu: 95208.1140051811 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}