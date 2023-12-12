window.BENCHMARK_DATA = {
  "lastUpdate": 1702409082248,
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
      }
    ]
  }
}