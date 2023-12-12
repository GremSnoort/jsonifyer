window.BENCHMARK_DATA = {
  "lastUpdate": 1702421416491,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-8 20.04 Release c++-17": [
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
        "date": 1702397897626,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1009.600976295186,
            "unit": "ns/iter",
            "extra": "iterations: 683195\ncpu: 1009.5723768470205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20039.520851455087,
            "unit": "ns/iter",
            "extra": "iterations: 41388\ncpu: 20038.617473663864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 45890.9627697641,
            "unit": "ns/iter",
            "extra": "iterations: 19554\ncpu: 45889.99693157411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 56313.803599999796,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56312.959999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 69505.1899784045,
            "unit": "ns/iter",
            "extra": "iterations: 11575\ncpu: 69502.06479481641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 87036.32949469214,
            "unit": "ns/iter",
            "extra": "iterations: 10073\ncpu: 87032.88990370302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 104952.7617280948,
            "unit": "ns/iter",
            "extra": "iterations: 8356\ncpu: 104947.48683580662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 122780.92273187911,
            "unit": "ns/iter",
            "extra": "iterations: 6911\ncpu: 122775.08320069456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 152751.5923350619,
            "unit": "ns/iter",
            "extra": "iterations: 6184\ncpu: 152746.00582147468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 843.4072924022289,
            "unit": "ns/iter",
            "extra": "iterations: 834101\ncpu: 843.365251929922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 685.3907885013746,
            "unit": "ns/iter",
            "extra": "iterations: 1019009\ncpu: 685.3689221586849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 675.3368378596363,
            "unit": "ns/iter",
            "extra": "iterations: 1038847\ncpu: 675.3246628233045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 694.5510023761261,
            "unit": "ns/iter",
            "extra": "iterations: 1019727\ncpu: 694.5115702536074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1285.6766817286527,
            "unit": "ns/iter",
            "extra": "iterations: 545079\ncpu: 1285.6290556047816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6525.449885353813,
            "unit": "ns/iter",
            "extra": "iterations: 127348\ncpu: 6525.25520620662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 38092.94742154394,
            "unit": "ns/iter",
            "extra": "iterations: 21796\ncpu: 38091.553496054315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 27896.11018285465,
            "unit": "ns/iter",
            "extra": "iterations: 29805\ncpu: 27895.014259352454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 27730.419141912727,
            "unit": "ns/iter",
            "extra": "iterations: 29997\ncpu: 27728.466179951363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 28412.503339384784,
            "unit": "ns/iter",
            "extra": "iterations: 29197\ncpu: 28411.336781176113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 61537.07909999753,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61532.460000000094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 663250.3260000249,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 663215.4000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 522907.7440000083,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522899.3000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 520622.3320000163,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520584.7000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 525798.495999993,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525792.8000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 374789.31465516577,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 374778.40517241415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 514313.0229999997,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514297.39999999665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2896381.7191357804,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2895696.913580243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1206503.5485498297,
            "unit": "ns/iter",
            "extra": "iterations: 793\ncpu: 1206483.102143756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3679262.367187519,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3679141.7968750075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6172.248837947606,
            "unit": "ns/iter",
            "extra": "iterations: 138548\ncpu: 6172.075381817144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 35710.27829987386,
            "unit": "ns/iter",
            "extra": "iterations: 23410\ncpu: 35709.81204613414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 25932.916896478273,
            "unit": "ns/iter",
            "extra": "iterations: 32273\ncpu: 25932.925355560325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 25792.43068494727,
            "unit": "ns/iter",
            "extra": "iterations: 32309\ncpu: 25791.661766071324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 26260.20293429488,
            "unit": "ns/iter",
            "extra": "iterations: 31626\ncpu: 26259.73566053243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 59932.97599999892,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59932.39999999957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 650220.53499996,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650196.2999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 528592.7099999981,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528549.3999999957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 524966.3860000168,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524966.3999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 522909.77799998474,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522860.90000000485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 369859.5705906818,
            "unit": "ns/iter",
            "extra": "iterations: 2387\ncpu: 369853.2886468367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 513770.0789999826,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513769.8999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 3010228.4419353595,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3010226.129032252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1235025.933680117,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 1234968.140442136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6539.499779036805,
            "unit": "ns/iter",
            "extra": "iterations: 126718\ncpu: 6539.281712148219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 37947.78780565426,
            "unit": "ns/iter",
            "extra": "iterations: 21961\ncpu: 37944.86134511174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 28100.151996492543,
            "unit": "ns/iter",
            "extra": "iterations: 29652\ncpu: 28099.008498583622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 27888.232967697597,
            "unit": "ns/iter",
            "extra": "iterations: 29811\ncpu: 27887.038341551644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 27682.804017264407,
            "unit": "ns/iter",
            "extra": "iterations: 30120\ncpu: 27681.08233731744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 60624.87780000083,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60620.60000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 638157.6059999929,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 638128.2000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 519754.74600004643,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519748.39999999746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 518527.296000002,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518488.4999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 518727.6299999439,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518708.9 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 380270.8279708123,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 380121.4071214071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 511214.05599997164,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511176.1000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 344.7862193392361,
            "unit": "ns/iter",
            "extra": "iterations: 2034155\ncpu: 344.7630588622792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2901.6528626256886,
            "unit": "ns/iter",
            "extra": "iterations: 241282\ncpu: 2901.4261320778237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2167.912589503248,
            "unit": "ns/iter",
            "extra": "iterations: 326105\ncpu: 2167.757930727835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2209.905355603376,
            "unit": "ns/iter",
            "extra": "iterations: 316659\ncpu: 2209.762867943117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1572.8255490270167,
            "unit": "ns/iter",
            "extra": "iterations: 444377\ncpu: 1572.7490396667786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 12955.480512466784,
            "unit": "ns/iter",
            "extra": "iterations: 53701\ncpu: 12954.984078508789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 34119.13703721767,
            "unit": "ns/iter",
            "extra": "iterations: 20447\ncpu: 34117.000048907015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7884.690363756846,
            "unit": "ns/iter",
            "extra": "iterations: 89153\ncpu: 7884.362836920796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7799.671187948371,
            "unit": "ns/iter",
            "extra": "iterations: 89945\ncpu: 7799.321807771404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7812.952589619251,
            "unit": "ns/iter",
            "extra": "iterations: 89685\ncpu: 7812.4201371467425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 16412.006948005444,
            "unit": "ns/iter",
            "extra": "iterations: 42890\ncpu: 16411.03986943351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 15623.587220733132,
            "unit": "ns/iter",
            "extra": "iterations: 44760\ncpu: 15623.257372654187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4196.623329741195,
            "unit": "ns/iter",
            "extra": "iterations: 167040\ncpu: 4196.517001915682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22305.08044952404,
            "unit": "ns/iter",
            "extra": "iterations: 31411\ncpu: 22304.86135430259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17662.356775299937,
            "unit": "ns/iter",
            "extra": "iterations: 39644\ncpu: 17661.42922005861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17539.24703153677,
            "unit": "ns/iter",
            "extra": "iterations: 39667\ncpu: 17538.883706859575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 18842.407324687018,
            "unit": "ns/iter",
            "extra": "iterations: 37162\ncpu: 18842.234002475678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 38183.23397087754,
            "unit": "ns/iter",
            "extra": "iterations: 18404\ncpu: 38183.29710932436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 157511.62637858064,
            "unit": "ns/iter",
            "extra": "iterations: 4443\ncpu: 157503.2410533406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 136026.90015723297,
            "unit": "ns/iter",
            "extra": "iterations: 5088\ncpu: 136016.92216981272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 137334.82243538566,
            "unit": "ns/iter",
            "extra": "iterations: 5108\ncpu: 137333.28112764398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 137152.59210003394,
            "unit": "ns/iter",
            "extra": "iterations: 5038\ncpu: 137147.7570464481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 81323.53390518196,
            "unit": "ns/iter",
            "extra": "iterations: 8627\ncpu: 81322.91642517607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 135309.2310371533,
            "unit": "ns/iter",
            "extra": "iterations: 5168\ncpu: 135302.7283281718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4163.508112637859,
            "unit": "ns/iter",
            "extra": "iterations: 168256\ncpu: 4163.390310003807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 22593.869197768425,
            "unit": "ns/iter",
            "extra": "iterations: 31001\ncpu: 22593.284087610067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17851.076677804995,
            "unit": "ns/iter",
            "extra": "iterations: 39203\ncpu: 17850.904267530594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17792.66563073125,
            "unit": "ns/iter",
            "extra": "iterations: 39256\ncpu: 17792.202465864968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18784.790012871916,
            "unit": "ns/iter",
            "extra": "iterations: 37288\ncpu: 18784.823535722146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37895.83429807937,
            "unit": "ns/iter",
            "extra": "iterations: 18485\ncpu: 37895.304300784046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 156688.9556749476,
            "unit": "ns/iter",
            "extra": "iterations: 4467\ncpu: 156689.34407880073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 135803.74941950274,
            "unit": "ns/iter",
            "extra": "iterations: 5168\ncpu: 135802.6122291045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 136078.19864078407,
            "unit": "ns/iter",
            "extra": "iterations: 5150\ncpu: 136074.27184465792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 138298.76681791563,
            "unit": "ns/iter",
            "extra": "iterations: 5069\ncpu: 138295.54152692718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 79503.54132090691,
            "unit": "ns/iter",
            "extra": "iterations: 8797\ncpu: 79501.05717858489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 130875.7961662597,
            "unit": "ns/iter",
            "extra": "iterations: 5269\ncpu: 130863.76921617035 ns\nthreads: 1"
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
          "id": "c1055272ad64f2314a237d4e8aa66cfea2a56aac",
          "message": "rm rdn",
          "timestamp": "2023-12-12T18:46:40+03:00",
          "tree_id": "a8ce2d06ccc561ccf79fea995e3abe4f5e35f6c2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/c1055272ad64f2314a237d4e8aa66cfea2a56aac"
        },
        "date": 1702397897626,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1009.600976295186,
            "unit": "ns/iter",
            "extra": "iterations: 683195\ncpu: 1009.5723768470205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20039.520851455087,
            "unit": "ns/iter",
            "extra": "iterations: 41388\ncpu: 20038.617473663864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 45890.9627697641,
            "unit": "ns/iter",
            "extra": "iterations: 19554\ncpu: 45889.99693157411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 56313.803599999796,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56312.959999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 69505.1899784045,
            "unit": "ns/iter",
            "extra": "iterations: 11575\ncpu: 69502.06479481641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 87036.32949469214,
            "unit": "ns/iter",
            "extra": "iterations: 10073\ncpu: 87032.88990370302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 104952.7617280948,
            "unit": "ns/iter",
            "extra": "iterations: 8356\ncpu: 104947.48683580662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 122780.92273187911,
            "unit": "ns/iter",
            "extra": "iterations: 6911\ncpu: 122775.08320069456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 152751.5923350619,
            "unit": "ns/iter",
            "extra": "iterations: 6184\ncpu: 152746.00582147468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 843.4072924022289,
            "unit": "ns/iter",
            "extra": "iterations: 834101\ncpu: 843.365251929922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 685.3907885013746,
            "unit": "ns/iter",
            "extra": "iterations: 1019009\ncpu: 685.3689221586849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 675.3368378596363,
            "unit": "ns/iter",
            "extra": "iterations: 1038847\ncpu: 675.3246628233045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 694.5510023761261,
            "unit": "ns/iter",
            "extra": "iterations: 1019727\ncpu: 694.5115702536074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1285.6766817286527,
            "unit": "ns/iter",
            "extra": "iterations: 545079\ncpu: 1285.6290556047816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6525.449885353813,
            "unit": "ns/iter",
            "extra": "iterations: 127348\ncpu: 6525.25520620662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 38092.94742154394,
            "unit": "ns/iter",
            "extra": "iterations: 21796\ncpu: 38091.553496054315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 27896.11018285465,
            "unit": "ns/iter",
            "extra": "iterations: 29805\ncpu: 27895.014259352454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 27730.419141912727,
            "unit": "ns/iter",
            "extra": "iterations: 29997\ncpu: 27728.466179951363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 28412.503339384784,
            "unit": "ns/iter",
            "extra": "iterations: 29197\ncpu: 28411.336781176113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 61537.07909999753,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61532.460000000094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 663250.3260000249,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 663215.4000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 522907.7440000083,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522899.3000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 520622.3320000163,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520584.7000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 525798.495999993,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525792.8000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 374789.31465516577,
            "unit": "ns/iter",
            "extra": "iterations: 2320\ncpu: 374778.40517241415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 514313.0229999997,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514297.39999999665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2896381.7191357804,
            "unit": "ns/iter",
            "extra": "iterations: 324\ncpu: 2895696.913580243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1206503.5485498297,
            "unit": "ns/iter",
            "extra": "iterations: 793\ncpu: 1206483.102143756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3679262.367187519,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3679141.7968750075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6172.248837947606,
            "unit": "ns/iter",
            "extra": "iterations: 138548\ncpu: 6172.075381817144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 35710.27829987386,
            "unit": "ns/iter",
            "extra": "iterations: 23410\ncpu: 35709.81204613414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 25932.916896478273,
            "unit": "ns/iter",
            "extra": "iterations: 32273\ncpu: 25932.925355560325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 25792.43068494727,
            "unit": "ns/iter",
            "extra": "iterations: 32309\ncpu: 25791.661766071324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 26260.20293429488,
            "unit": "ns/iter",
            "extra": "iterations: 31626\ncpu: 26259.73566053243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 59932.97599999892,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59932.39999999957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 650220.53499996,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 650196.2999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 528592.7099999981,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528549.3999999957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 524966.3860000168,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524966.3999999968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 522909.77799998474,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522860.90000000485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 369859.5705906818,
            "unit": "ns/iter",
            "extra": "iterations: 2387\ncpu: 369853.2886468367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 513770.0789999826,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513769.8999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 3010228.4419353595,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 3010226.129032252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1235025.933680117,
            "unit": "ns/iter",
            "extra": "iterations: 769\ncpu: 1234968.140442136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 6539.499779036805,
            "unit": "ns/iter",
            "extra": "iterations: 126718\ncpu: 6539.281712148219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 37947.78780565426,
            "unit": "ns/iter",
            "extra": "iterations: 21961\ncpu: 37944.86134511174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 28100.151996492543,
            "unit": "ns/iter",
            "extra": "iterations: 29652\ncpu: 28099.008498583622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 27888.232967697597,
            "unit": "ns/iter",
            "extra": "iterations: 29811\ncpu: 27887.038341551644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 27682.804017264407,
            "unit": "ns/iter",
            "extra": "iterations: 30120\ncpu: 27681.08233731744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 60624.87780000083,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60620.60000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 638157.6059999929,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 638128.2000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 519754.74600004643,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519748.39999999746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 518527.296000002,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518488.4999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 518727.6299999439,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518708.9 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 380270.8279708123,
            "unit": "ns/iter",
            "extra": "iterations: 2331\ncpu: 380121.4071214071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 511214.05599997164,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511176.1000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 344.7862193392361,
            "unit": "ns/iter",
            "extra": "iterations: 2034155\ncpu: 344.7630588622792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2901.6528626256886,
            "unit": "ns/iter",
            "extra": "iterations: 241282\ncpu: 2901.4261320778237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2167.912589503248,
            "unit": "ns/iter",
            "extra": "iterations: 326105\ncpu: 2167.757930727835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2209.905355603376,
            "unit": "ns/iter",
            "extra": "iterations: 316659\ncpu: 2209.762867943117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1572.8255490270167,
            "unit": "ns/iter",
            "extra": "iterations: 444377\ncpu: 1572.7490396667786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 12955.480512466784,
            "unit": "ns/iter",
            "extra": "iterations: 53701\ncpu: 12954.984078508789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 34119.13703721767,
            "unit": "ns/iter",
            "extra": "iterations: 20447\ncpu: 34117.000048907015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7884.690363756846,
            "unit": "ns/iter",
            "extra": "iterations: 89153\ncpu: 7884.362836920796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7799.671187948371,
            "unit": "ns/iter",
            "extra": "iterations: 89945\ncpu: 7799.321807771404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7812.952589619251,
            "unit": "ns/iter",
            "extra": "iterations: 89685\ncpu: 7812.4201371467425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 16412.006948005444,
            "unit": "ns/iter",
            "extra": "iterations: 42890\ncpu: 16411.03986943351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 15623.587220733132,
            "unit": "ns/iter",
            "extra": "iterations: 44760\ncpu: 15623.257372654187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 4196.623329741195,
            "unit": "ns/iter",
            "extra": "iterations: 167040\ncpu: 4196.517001915682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 22305.08044952404,
            "unit": "ns/iter",
            "extra": "iterations: 31411\ncpu: 22304.86135430259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 17662.356775299937,
            "unit": "ns/iter",
            "extra": "iterations: 39644\ncpu: 17661.42922005861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 17539.24703153677,
            "unit": "ns/iter",
            "extra": "iterations: 39667\ncpu: 17538.883706859575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 18842.407324687018,
            "unit": "ns/iter",
            "extra": "iterations: 37162\ncpu: 18842.234002475678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 38183.23397087754,
            "unit": "ns/iter",
            "extra": "iterations: 18404\ncpu: 38183.29710932436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 157511.62637858064,
            "unit": "ns/iter",
            "extra": "iterations: 4443\ncpu: 157503.2410533406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 136026.90015723297,
            "unit": "ns/iter",
            "extra": "iterations: 5088\ncpu: 136016.92216981272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 137334.82243538566,
            "unit": "ns/iter",
            "extra": "iterations: 5108\ncpu: 137333.28112764398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 137152.59210003394,
            "unit": "ns/iter",
            "extra": "iterations: 5038\ncpu: 137147.7570464481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 81323.53390518196,
            "unit": "ns/iter",
            "extra": "iterations: 8627\ncpu: 81322.91642517607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 135309.2310371533,
            "unit": "ns/iter",
            "extra": "iterations: 5168\ncpu: 135302.7283281718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 4163.508112637859,
            "unit": "ns/iter",
            "extra": "iterations: 168256\ncpu: 4163.390310003807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 22593.869197768425,
            "unit": "ns/iter",
            "extra": "iterations: 31001\ncpu: 22593.284087610067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 17851.076677804995,
            "unit": "ns/iter",
            "extra": "iterations: 39203\ncpu: 17850.904267530594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 17792.66563073125,
            "unit": "ns/iter",
            "extra": "iterations: 39256\ncpu: 17792.202465864968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 18784.790012871916,
            "unit": "ns/iter",
            "extra": "iterations: 37288\ncpu: 18784.823535722146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 37895.83429807937,
            "unit": "ns/iter",
            "extra": "iterations: 18485\ncpu: 37895.304300784046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 156688.9556749476,
            "unit": "ns/iter",
            "extra": "iterations: 4467\ncpu: 156689.34407880073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 135803.74941950274,
            "unit": "ns/iter",
            "extra": "iterations: 5168\ncpu: 135802.6122291045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 136078.19864078407,
            "unit": "ns/iter",
            "extra": "iterations: 5150\ncpu: 136074.27184465792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 138298.76681791563,
            "unit": "ns/iter",
            "extra": "iterations: 5069\ncpu: 138295.54152692718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 79503.54132090691,
            "unit": "ns/iter",
            "extra": "iterations: 8797\ncpu: 79501.05717858489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 130875.7961662597,
            "unit": "ns/iter",
            "extra": "iterations: 5269\ncpu: 130863.76921617035 ns\nthreads: 1"
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
        "date": 1702409126847,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 905.5434840743642,
            "unit": "ns/iter",
            "extra": "iterations: 781539\ncpu: 905.5173190333431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18596.620571783606,
            "unit": "ns/iter",
            "extra": "iterations: 45052\ncpu: 18596.519577377254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 41644.77916011349,
            "unit": "ns/iter",
            "extra": "iterations: 20979\ncpu: 41641.360408027074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 52165.21799999896,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52163.58000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 64072.196798719175,
            "unit": "ns/iter",
            "extra": "iterations: 12495\ncpu: 64069.395758303304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 80955.34520850377,
            "unit": "ns/iter",
            "extra": "iterations: 10863\ncpu: 80949.42465249011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 97863.88547486468,
            "unit": "ns/iter",
            "extra": "iterations: 8950\ncpu: 97858.67039106143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 124815.05569322957,
            "unit": "ns/iter",
            "extra": "iterations: 7667\ncpu: 124805.56932307285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 140940.17183463363,
            "unit": "ns/iter",
            "extra": "iterations: 6192\ncpu: 140933.54328165366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 760.9880344534861,
            "unit": "ns/iter",
            "extra": "iterations: 920894\ncpu: 760.9293794942739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 633.5138535609876,
            "unit": "ns/iter",
            "extra": "iterations: 1107874\ncpu: 633.4810637310748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 616.3983910788677,
            "unit": "ns/iter",
            "extra": "iterations: 1122367\ncpu: 616.3603348993693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 603.8506287187807,
            "unit": "ns/iter",
            "extra": "iterations: 1164193\ncpu: 603.8299491579139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1230.8025475128593,
            "unit": "ns/iter",
            "extra": "iterations: 568162\ncpu: 1230.7473924690494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5523.075959836141,
            "unit": "ns/iter",
            "extra": "iterations: 146301\ncpu: 5523.095535915683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 30703.400849540063,
            "unit": "ns/iter",
            "extra": "iterations: 26838\ncpu: 30702.284074819243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 21723.195275381466,
            "unit": "ns/iter",
            "extra": "iterations: 37675\ncpu: 21722.609157266124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 21828.249509986385,
            "unit": "ns/iter",
            "extra": "iterations: 37754\ncpu: 21827.64740159982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21985.751304347777,
            "unit": "ns/iter",
            "extra": "iterations: 37375\ncpu: 21985.37792642145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 58154.16120000236,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58153.67000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 584756.6929999744,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584718.0999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 601833.7693920258,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 601811.6002795249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 605527.1659604392,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 605507.2033898296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 606316.2561576302,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 606259.0429275145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 363350.92314190173,
            "unit": "ns/iter",
            "extra": "iterations: 2368\ncpu: 363338.89358108136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 595375.2069204069,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 595370.1730103786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2810050.3504531067,
            "unit": "ns/iter",
            "extra": "iterations: 331\ncpu: 2809873.1117824838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1224616.6034031613,
            "unit": "ns/iter",
            "extra": "iterations: 764\ncpu: 1224558.638743455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3627076.7038462716,
            "unit": "ns/iter",
            "extra": "iterations: 260\ncpu: 3626861.9230769244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5566.468879999888,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5566.195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 32384.13717877043,
            "unit": "ns/iter",
            "extra": "iterations: 24982\ncpu: 32382.24321511476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 21770.148911527056,
            "unit": "ns/iter",
            "extra": "iterations: 37989\ncpu: 21768.959435626195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 21889.899894152288,
            "unit": "ns/iter",
            "extra": "iterations: 37790\ncpu: 21888.470494840018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 21901.149310710447,
            "unit": "ns/iter",
            "extra": "iterations: 37720\ncpu: 21900.222693531417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 58189.44879999891,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58188.080000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 612313.7270000143,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 612286.9000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 615718.6400570297,
            "unit": "ns/iter",
            "extra": "iterations: 1403\ncpu: 615701.0691375609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 615982.4954063754,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 615954.275618377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 621490.680170576,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 621454.3710021306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 361895.29511587566,
            "unit": "ns/iter",
            "extra": "iterations: 2416\ncpu: 361887.83112582564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 618397.7315863983,
            "unit": "ns/iter",
            "extra": "iterations: 1412\ncpu: 618361.6855524081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2916478.7437501615,
            "unit": "ns/iter",
            "extra": "iterations: 320\ncpu: 2916383.1250000214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1240502.5078739976,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 1240494.7506561747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5795.2757799995425,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5795.162000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 33961.70624073241,
            "unit": "ns/iter",
            "extra": "iterations: 24949\ncpu: 33961.537536574644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 24588.776693986565,
            "unit": "ns/iter",
            "extra": "iterations: 34652\ncpu: 24588.875101004243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 24600.285330947976,
            "unit": "ns/iter",
            "extra": "iterations: 34658\ncpu: 24600.147152172667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 24952.718875967807,
            "unit": "ns/iter",
            "extra": "iterations: 34483\ncpu: 24952.78543050197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 57703.670000000784,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57703.91000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 620808.4720000216,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 620811.1999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 510002.02199998056,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510004.89999999845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 502245.0740000295,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502231.00000000186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 501504.8350000484,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501508.29999999754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 368203.2699207322,
            "unit": "ns/iter",
            "extra": "iterations: 2397\ncpu: 368198.2478097626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 618558.237359559,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 618547.1910112335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 344.23445926459266,
            "unit": "ns/iter",
            "extra": "iterations: 2031918\ncpu: 344.2283596089987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2664.4827504860323,
            "unit": "ns/iter",
            "extra": "iterations: 262819\ncpu: 2664.494956605109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1851.5561043994576,
            "unit": "ns/iter",
            "extra": "iterations: 378776\ncpu: 1851.5639850465623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1856.9919573597215,
            "unit": "ns/iter",
            "extra": "iterations: 378234\ncpu: 1857.0001639197033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1439.1801186273512,
            "unit": "ns/iter",
            "extra": "iterations: 487240\ncpu: 1439.1574993842848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 12104.301654249952,
            "unit": "ns/iter",
            "extra": "iterations: 57851\ncpu: 12104.354289467761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 31991.894360740345,
            "unit": "ns/iter",
            "extra": "iterations: 23230\ncpu: 31991.640120534095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7413.9581287371075,
            "unit": "ns/iter",
            "extra": "iterations: 93477\ncpu: 7413.918931929819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7241.7338341498935,
            "unit": "ns/iter",
            "extra": "iterations: 96376\ncpu: 7241.670125342391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7332.98068703162,
            "unit": "ns/iter",
            "extra": "iterations: 95687\ncpu: 7332.814279891755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 14162.546724909229,
            "unit": "ns/iter",
            "extra": "iterations: 49449\ncpu: 14162.599850350756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14633.78262334075,
            "unit": "ns/iter",
            "extra": "iterations: 50470\ncpu: 14633.849811769374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3991.282968597153,
            "unit": "ns/iter",
            "extra": "iterations: 175652\ncpu: 3991.295857718678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 20559.34692617544,
            "unit": "ns/iter",
            "extra": "iterations: 34013\ncpu: 20558.918648751867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 16057.820377549822,
            "unit": "ns/iter",
            "extra": "iterations: 43597\ncpu: 16057.873248159427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 16277.348569026732,
            "unit": "ns/iter",
            "extra": "iterations: 42838\ncpu: 16277.40324011386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 17507.398387502148,
            "unit": "ns/iter",
            "extra": "iterations: 39690\ncpu: 17507.306626354068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 35563.60425814367,
            "unit": "ns/iter",
            "extra": "iterations: 19586\ncpu: 35563.310527927664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 145728.68654173324,
            "unit": "ns/iter",
            "extra": "iterations: 4696\ncpu: 145729.34412265918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 124139.89142960405,
            "unit": "ns/iter",
            "extra": "iterations: 5554\ncpu: 124131.25675189053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 123445.60796461048,
            "unit": "ns/iter",
            "extra": "iterations: 5650\ncpu: 123434.65486725638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 124924.37892095023,
            "unit": "ns/iter",
            "extra": "iterations: 5579\ncpu: 124916.07815020498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 75401.5090478249,
            "unit": "ns/iter",
            "extra": "iterations: 9284\ncpu: 75399.95691512288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 124111.79814219763,
            "unit": "ns/iter",
            "extra": "iterations: 5598\ncpu: 124108.19935691259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3848.462555891662,
            "unit": "ns/iter",
            "extra": "iterations: 181377\ncpu: 3848.47472391758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 19673.703186120918,
            "unit": "ns/iter",
            "extra": "iterations: 35278\ncpu: 19672.99166619453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 15920.692109406218,
            "unit": "ns/iter",
            "extra": "iterations: 43837\ncpu: 15919.859935670602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 16058.952416048898,
            "unit": "ns/iter",
            "extra": "iterations: 43418\ncpu: 16058.293795200241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 17101.63580003044,
            "unit": "ns/iter",
            "extra": "iterations: 40486\ncpu: 17100.37790841279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 35414.50136171015,
            "unit": "ns/iter",
            "extra": "iterations: 19828\ncpu: 35412.23017954391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 143676.34275763357,
            "unit": "ns/iter",
            "extra": "iterations: 4881\ncpu: 143665.99057570234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 125304.50376209855,
            "unit": "ns/iter",
            "extra": "iterations: 5582\ncpu: 125294.15979935562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 124142.67739068532,
            "unit": "ns/iter",
            "extra": "iterations: 5626\ncpu: 124136.72236046894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 126554.48336949291,
            "unit": "ns/iter",
            "extra": "iterations: 5532\ncpu: 126554.898770789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 74786.44781763219,
            "unit": "ns/iter",
            "extra": "iterations: 9256\ncpu: 74782.76793431239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 125006.31858882957,
            "unit": "ns/iter",
            "extra": "iterations: 5584\ncpu: 124996.83022922756 ns\nthreads: 1"
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
        "date": 1702412543052,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 842.266040864066,
            "unit": "ns/iter",
            "extra": "iterations: 829335\ncpu: 842.2261209282137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12408.07853544472,
            "unit": "ns/iter",
            "extra": "iterations: 66696\ncpu: 12407.309283915076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26539.08864879382,
            "unit": "ns/iter",
            "extra": "iterations: 29803\ncpu: 26538.965875918533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41627.422850903,
            "unit": "ns/iter",
            "extra": "iterations: 19229\ncpu: 41627.19330178376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 52473.72123893719,
            "unit": "ns/iter",
            "extra": "iterations: 15142\ncpu: 52473.807951393515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 54299.12309999736,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54299.09000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 65565.58674242382,
            "unit": "ns/iter",
            "extra": "iterations: 13200\ncpu: 65565.41666666672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 75998.05816398138,
            "unit": "ns/iter",
            "extra": "iterations: 11416\ncpu: 75994.96320953043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 86893.07903435893,
            "unit": "ns/iter",
            "extra": "iterations: 9983\ncpu: 86888.32014424524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 705.599444580772,
            "unit": "ns/iter",
            "extra": "iterations: 994564\ncpu: 705.5850603882707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 591.8709132095977,
            "unit": "ns/iter",
            "extra": "iterations: 1184854\ncpu: 591.8436364311549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 582.933498000311,
            "unit": "ns/iter",
            "extra": "iterations: 1201212\ncpu: 582.9140068530785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 584.7561330292029,
            "unit": "ns/iter",
            "extra": "iterations: 1188972\ncpu: 584.6993032636602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1093.2749539279955,
            "unit": "ns/iter",
            "extra": "iterations: 636503\ncpu: 1093.2556484415632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4539.624669528498,
            "unit": "ns/iter",
            "extra": "iterations: 175885\ncpu: 4539.363788839299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 21369.861682917915,
            "unit": "ns/iter",
            "extra": "iterations: 38766\ncpu: 21369.184336789956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 17234.95392648288,
            "unit": "ns/iter",
            "extra": "iterations: 47880\ncpu: 17234.072681704256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 18336.4213927077,
            "unit": "ns/iter",
            "extra": "iterations: 48596\ncpu: 18335.706642521993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 18614.01479704538,
            "unit": "ns/iter",
            "extra": "iterations: 42103\ncpu: 18613.11307982798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 45524.43536959448,
            "unit": "ns/iter",
            "extra": "iterations: 17925\ncpu: 45524.10041841001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 513901.136605569,
            "unit": "ns/iter",
            "extra": "iterations: 1691\ncpu: 513894.6777054986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 420428.14793188695,
            "unit": "ns/iter",
            "extra": "iterations: 2055\ncpu: 420417.2749391734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 423058.06335284427,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 423061.8421052629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 426066.3507827929,
            "unit": "ns/iter",
            "extra": "iterations: 2044\ncpu: 426059.8336594909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 257673.21761193997,
            "unit": "ns/iter",
            "extra": "iterations: 3350\ncpu: 257673.25373134276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 419231.41130981356,
            "unit": "ns/iter",
            "extra": "iterations: 2069\ncpu: 419215.27307878126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2052544.750556824,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2052497.9955456571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 839418.2313166815,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 839393.7722419918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2742452.1547619714,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2742383.03571429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4802.364769432382,
            "unit": "ns/iter",
            "extra": "iterations: 166242\ncpu: 4802.3778587841925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 23081.730083470284,
            "unit": "ns/iter",
            "extra": "iterations: 35222\ncpu: 23081.389472488874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 18212.095332297045,
            "unit": "ns/iter",
            "extra": "iterations: 44990\ncpu: 18212.142698377498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 18378.906868088772,
            "unit": "ns/iter",
            "extra": "iterations: 44947\ncpu: 18378.441275279907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 18187.291234370234,
            "unit": "ns/iter",
            "extra": "iterations: 45108\ncpu: 18187.458987319438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46042.186629064636,
            "unit": "ns/iter",
            "extra": "iterations: 18084\ncpu: 46041.89891616883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 536440.7881408106,
            "unit": "ns/iter",
            "extra": "iterations: 1619\ncpu: 536434.7127856682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 438483.8410230853,
            "unit": "ns/iter",
            "extra": "iterations: 1994\ncpu: 438488.31494483416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 433881.1880257271,
            "unit": "ns/iter",
            "extra": "iterations: 2021\ncpu: 433872.5383473534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 431209.7414899005,
            "unit": "ns/iter",
            "extra": "iterations: 2027\ncpu: 431210.9028120389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 257326.85216627712,
            "unit": "ns/iter",
            "extra": "iterations: 3416\ncpu: 257329.09836065414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 429192.94149196177,
            "unit": "ns/iter",
            "extra": "iterations: 2051\ncpu: 429180.64358849236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2073290.7188208625,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 2073219.7278911564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 818522.769569013,
            "unit": "ns/iter",
            "extra": "iterations: 1137\ncpu: 818485.6640281485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5143.734819673259,
            "unit": "ns/iter",
            "extra": "iterations: 154608\ncpu: 5143.512625478609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 23310.77579692666,
            "unit": "ns/iter",
            "extra": "iterations: 35731\ncpu: 23309.507150653546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 18313.992113669105,
            "unit": "ns/iter",
            "extra": "iterations: 45395\ncpu: 18313.223923339607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 17975.502380540085,
            "unit": "ns/iter",
            "extra": "iterations: 46208\ncpu: 17974.645083102518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 18327.338971865134,
            "unit": "ns/iter",
            "extra": "iterations: 45461\ncpu: 18326.64481643615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46376.63498035808,
            "unit": "ns/iter",
            "extra": "iterations: 18073\ncpu: 46374.48127040351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 516101.2727810578,
            "unit": "ns/iter",
            "extra": "iterations: 1690\ncpu: 516086.03550295817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 424606.04461686616,
            "unit": "ns/iter",
            "extra": "iterations: 2062\ncpu: 424590.88263821485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 421355.34717529244,
            "unit": "ns/iter",
            "extra": "iterations: 2071\ncpu: 421335.2003862884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 421382.789550092,
            "unit": "ns/iter",
            "extra": "iterations: 2067\ncpu: 421361.87711659516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 255347.30699970108,
            "unit": "ns/iter",
            "extra": "iterations: 3443\ncpu: 255339.64565785805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 421686.4375605066,
            "unit": "ns/iter",
            "extra": "iterations: 2066\ncpu: 421664.1335914823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 367.8581312040894,
            "unit": "ns/iter",
            "extra": "iterations: 1901877\ncpu: 367.8431885973706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2026.7023403955395,
            "unit": "ns/iter",
            "extra": "iterations: 347249\ncpu: 2026.617499258456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1620.1689005163655,
            "unit": "ns/iter",
            "extra": "iterations: 428483\ncpu: 1616.4748659806883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1589.1539467233304,
            "unit": "ns/iter",
            "extra": "iterations: 440568\ncpu: 1589.1453759691972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1277.7529454350092,
            "unit": "ns/iter",
            "extra": "iterations: 544232\ncpu: 1277.7036263946254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8334.353717127007,
            "unit": "ns/iter",
            "extra": "iterations: 83465\ncpu: 8333.835739531445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21962.66677192207,
            "unit": "ns/iter",
            "extra": "iterations: 31669\ncpu: 21961.710189775098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5379.496506782267,
            "unit": "ns/iter",
            "extra": "iterations: 129823\ncpu: 5379.320305338879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5281.96472920716,
            "unit": "ns/iter",
            "extra": "iterations: 132149\ncpu: 5281.93705589905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5343.550706004,
            "unit": "ns/iter",
            "extra": "iterations: 130665\ncpu: 5343.3390732024245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10916.45265984175,
            "unit": "ns/iter",
            "extra": "iterations: 63688\ncpu: 10916.469350584106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10027.583396550459,
            "unit": "ns/iter",
            "extra": "iterations: 69865\ncpu: 10027.571745509322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3430.63890327423,
            "unit": "ns/iter",
            "extra": "iterations: 204682\ncpu: 3430.6338613067587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 17041.717049812345,
            "unit": "ns/iter",
            "extra": "iterations: 40933\ncpu: 17041.316297364083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13728.907621156546,
            "unit": "ns/iter",
            "extra": "iterations: 51029\ncpu: 13728.38190048792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13508.825475359714,
            "unit": "ns/iter",
            "extra": "iterations: 51540\ncpu: 13508.585564609886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14341.083651909474,
            "unit": "ns/iter",
            "extra": "iterations: 48654\ncpu: 14341.077814773593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30200.477849741117,
            "unit": "ns/iter",
            "extra": "iterations: 23160\ncpu: 30200.41882556106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 111975.05970865847,
            "unit": "ns/iter",
            "extra": "iterations: 6247\ncpu: 111970.08163918613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 95800.00831024424,
            "unit": "ns/iter",
            "extra": "iterations: 7220\ncpu: 95794.5706371188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 95393.57592265123,
            "unit": "ns/iter",
            "extra": "iterations: 7343\ncpu: 95388.46520495608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 95309.53152173816,
            "unit": "ns/iter",
            "extra": "iterations: 7360\ncpu: 95305.88315217422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 60990.68819172269,
            "unit": "ns/iter",
            "extra": "iterations: 11475\ncpu: 60990.46623093642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 96564.64464064522,
            "unit": "ns/iter",
            "extra": "iterations: 7249\ncpu: 96559.99448199771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3319.432038927091,
            "unit": "ns/iter",
            "extra": "iterations: 210650\ncpu: 3319.3581770709766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16738.273488027415,
            "unit": "ns/iter",
            "extra": "iterations: 37881\ncpu: 16737.689078957505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13189.960553297751,
            "unit": "ns/iter",
            "extra": "iterations: 51690\ncpu: 13189.324821048467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13155.353034419531,
            "unit": "ns/iter",
            "extra": "iterations: 52992\ncpu: 13154.778079710086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13910.66453547189,
            "unit": "ns/iter",
            "extra": "iterations: 50363\ncpu: 13910.051029525515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28735.44055541978,
            "unit": "ns/iter",
            "extra": "iterations: 24342\ncpu: 28734.07690411647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 108058.63816298837,
            "unit": "ns/iter",
            "extra": "iterations: 6467\ncpu: 108055.86825421298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 93062.636521974,
            "unit": "ns/iter",
            "extra": "iterations: 7464\ncpu: 93062.19185423348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 92282.25852687705,
            "unit": "ns/iter",
            "extra": "iterations: 7535\ncpu: 92276.50962176434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 92734.63337312653,
            "unit": "ns/iter",
            "extra": "iterations: 7539\ncpu: 92731.62223106633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 60874.297027969165,
            "unit": "ns/iter",
            "extra": "iterations: 11440\ncpu: 60870.926573426186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 95039.03704705292,
            "unit": "ns/iter",
            "extra": "iterations: 7396\ncpu: 95037.3174689015 ns\nthreads: 1"
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
        "date": 1702418370456,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 836.8516387508322,
            "unit": "ns/iter",
            "extra": "iterations: 838413\ncpu: 836.8215903140815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12607.871199658719,
            "unit": "ns/iter",
            "extra": "iterations: 65652\ncpu: 12607.163528910009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27559.91690789316,
            "unit": "ns/iter",
            "extra": "iterations: 30400\ncpu: 27558.351973684203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41978.16584665858,
            "unit": "ns/iter",
            "extra": "iterations: 19512\ncpu: 41977.690651906516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53603.199292768644,
            "unit": "ns/iter",
            "extra": "iterations: 14988\ncpu: 53597.99172671473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55413.9484000018,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55414.17999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 69395.40216242781,
            "unit": "ns/iter",
            "extra": "iterations: 12301\ncpu: 69393.02495732051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 78618.83691415068,
            "unit": "ns/iter",
            "extra": "iterations: 11031\ncpu: 78616.98848699123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 89881.62536171821,
            "unit": "ns/iter",
            "extra": "iterations: 9676\ncpu: 89878.80322447288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 723.3013746198177,
            "unit": "ns/iter",
            "extra": "iterations: 967613\ncpu: 723.2664298640041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 590.4194629475395,
            "unit": "ns/iter",
            "extra": "iterations: 1176831\ncpu: 590.4055042737668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 601.852341913741,
            "unit": "ns/iter",
            "extra": "iterations: 1184053\ncpu: 601.819175324077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 593.352949863897,
            "unit": "ns/iter",
            "extra": "iterations: 1178173\ncpu: 593.3134607566126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1088.5977333523024,
            "unit": "ns/iter",
            "extra": "iterations: 647476\ncpu: 1088.524980076483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5166.187481823974,
            "unit": "ns/iter",
            "extra": "iterations: 154735\ncpu: 5165.736258764976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 22222.380002702324,
            "unit": "ns/iter",
            "extra": "iterations: 37005\ncpu: 22220.73773814345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 17882.12435199431,
            "unit": "ns/iter",
            "extra": "iterations: 46103\ncpu: 17880.704075656697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 18435.572139526626,
            "unit": "ns/iter",
            "extra": "iterations: 44608\ncpu: 18433.9042324247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 18176.746524703754,
            "unit": "ns/iter",
            "extra": "iterations: 45176\ncpu: 18175.427217991906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47897.2920966107,
            "unit": "ns/iter",
            "extra": "iterations: 17638\ncpu: 47894.63658011106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 527964.3830694216,
            "unit": "ns/iter",
            "extra": "iterations: 1642\ncpu: 527924.2387332524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 430274.7201381896,
            "unit": "ns/iter",
            "extra": "iterations: 2026\ncpu: 430243.8302073044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 426585.811822668,
            "unit": "ns/iter",
            "extra": "iterations: 2030\ncpu: 426527.78325122996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 425951.8515392137,
            "unit": "ns/iter",
            "extra": "iterations: 2014\ncpu: 425943.04865938507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 259330.3844544027,
            "unit": "ns/iter",
            "extra": "iterations: 3345\ncpu: 259311.1509715996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 424010.06873185444,
            "unit": "ns/iter",
            "extra": "iterations: 2066\ncpu: 423988.8189738621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2066591.0539325902,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 2066359.5505618018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 812510.56759097,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 812448.093587522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2818661.490797495,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2818550.613496927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4939.509337661034,
            "unit": "ns/iter",
            "extra": "iterations: 161443\ncpu: 4939.280117440831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 23427.921002520477,
            "unit": "ns/iter",
            "extra": "iterations: 35710\ncpu: 23427.188462615566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 18581.327620156037,
            "unit": "ns/iter",
            "extra": "iterations: 44692\ncpu: 18579.772666248944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 18620.841492939122,
            "unit": "ns/iter",
            "extra": "iterations: 44610\ncpu: 18620.634386908754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 18533.16695279906,
            "unit": "ns/iter",
            "extra": "iterations: 44851\ncpu: 18531.716126730644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46754.36943207178,
            "unit": "ns/iter",
            "extra": "iterations: 17960\ncpu: 46751.39198218266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 539787.7032218216,
            "unit": "ns/iter",
            "extra": "iterations: 1614\ncpu: 539740.9541511802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 438102.00299701846,
            "unit": "ns/iter",
            "extra": "iterations: 2002\ncpu: 438054.7952047946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 433399.7059410839,
            "unit": "ns/iter",
            "extra": "iterations: 2003\ncpu: 433387.7184223687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 432480.31571147137,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 432453.2608695666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 259031.71424340602,
            "unit": "ns/iter",
            "extra": "iterations: 3377\ncpu: 259023.9857862009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 432881.2758791741,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 432873.8979692915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2090858.7274826977,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2090673.2101616666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 837462.5748662893,
            "unit": "ns/iter",
            "extra": "iterations: 1122\ncpu: 837401.3368983964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5218.399073622539,
            "unit": "ns/iter",
            "extra": "iterations: 151774\ncpu: 5218.133540659157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 23815.407519348686,
            "unit": "ns/iter",
            "extra": "iterations: 35402\ncpu: 23814.84379413605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 18731.609275800693,
            "unit": "ns/iter",
            "extra": "iterations: 44891\ncpu: 18730.71662471319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18409.667797425955,
            "unit": "ns/iter",
            "extra": "iterations: 45692\ncpu: 18409.19198109085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 18691.864203873076,
            "unit": "ns/iter",
            "extra": "iterations: 44773\ncpu: 18691.072744734494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47106.93293125729,
            "unit": "ns/iter",
            "extra": "iterations: 17907\ncpu: 47103.74713799077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 519081.5749253502,
            "unit": "ns/iter",
            "extra": "iterations: 1675\ncpu: 519057.73134328576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 424603.2087378541,
            "unit": "ns/iter",
            "extra": "iterations: 2060\ncpu: 424564.02912621445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 423504.78008699213,
            "unit": "ns/iter",
            "extra": "iterations: 2069\ncpu: 423475.6887385218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 425413.659223281,
            "unit": "ns/iter",
            "extra": "iterations: 2060\ncpu: 425383.5436893231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 259386.73000886542,
            "unit": "ns/iter",
            "extra": "iterations: 3389\ncpu: 259383.5644732968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 425346.2936233161,
            "unit": "ns/iter",
            "extra": "iterations: 2023\ncpu: 425341.86851211183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 368.8574078861034,
            "unit": "ns/iter",
            "extra": "iterations: 1899523\ncpu: 368.8313855636362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2094.1713264648633,
            "unit": "ns/iter",
            "extra": "iterations: 334385\ncpu: 2094.053261958526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1648.1100142637358,
            "unit": "ns/iter",
            "extra": "iterations: 424854\ncpu: 1647.97977658208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1540.8151879825682,
            "unit": "ns/iter",
            "extra": "iterations: 453872\ncpu: 1540.7764744244964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1283.597532218057,
            "unit": "ns/iter",
            "extra": "iterations: 545348\ncpu: 1283.5571048211445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8451.189892210456,
            "unit": "ns/iter",
            "extra": "iterations: 82847\ncpu: 8450.519632575642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 22184.226602392202,
            "unit": "ns/iter",
            "extra": "iterations: 31531\ncpu: 22183.920586089687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5387.144373787471,
            "unit": "ns/iter",
            "extra": "iterations: 129892\ncpu: 5386.917593077259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5364.084047869654,
            "unit": "ns/iter",
            "extra": "iterations: 130271\ncpu: 5364.102524736972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5441.221449928051,
            "unit": "ns/iter",
            "extra": "iterations: 128765\ncpu: 5441.0833689278315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10884.284511941383,
            "unit": "ns/iter",
            "extra": "iterations: 64398\ncpu: 10883.63303208181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10140.479991233791,
            "unit": "ns/iter",
            "extra": "iterations: 68445\ncpu: 10140.246913580171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3442.0524407403955,
            "unit": "ns/iter",
            "extra": "iterations: 203258\ncpu: 3441.9043776874587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 17164.691440336996,
            "unit": "ns/iter",
            "extra": "iterations: 40796\ncpu: 17164.03568977365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13717.817818445206,
            "unit": "ns/iter",
            "extra": "iterations: 51037\ncpu: 13717.103278013941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13776.048182105244,
            "unit": "ns/iter",
            "extra": "iterations: 50828\ncpu: 13776.082080742888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14547.650514650197,
            "unit": "ns/iter",
            "extra": "iterations: 48188\ncpu: 14547.484851000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30605.534146021797,
            "unit": "ns/iter",
            "extra": "iterations: 22887\ncpu: 30605.61891029802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 113506.57951045902,
            "unit": "ns/iter",
            "extra": "iterations: 6169\ncpu: 113502.22078132765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 97485.98607242633,
            "unit": "ns/iter",
            "extra": "iterations: 7180\ncpu: 97478.69080779844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 96488.43730886871,
            "unit": "ns/iter",
            "extra": "iterations: 7194\ncpu: 96487.07256046793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 96743.86176389134,
            "unit": "ns/iter",
            "extra": "iterations: 7234\ncpu: 96737.90434061254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 61365.59777690531,
            "unit": "ns/iter",
            "extra": "iterations: 10166\ncpu: 61365.88628762639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 98892.5255649691,
            "unit": "ns/iter",
            "extra": "iterations: 7080\ncpu: 98889.90112994397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3448.2397805078144,
            "unit": "ns/iter",
            "extra": "iterations: 202285\ncpu: 3448.1019353882098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 17324.866109309383,
            "unit": "ns/iter",
            "extra": "iterations: 40070\ncpu: 17323.780883454117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13522.505234287626,
            "unit": "ns/iter",
            "extra": "iterations: 51774\ncpu: 13521.342758913906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13492.326359590592,
            "unit": "ns/iter",
            "extra": "iterations: 51909\ncpu: 13492.217149241917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 14150.802760823053,
            "unit": "ns/iter",
            "extra": "iterations: 49478\ncpu: 14149.769594567231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29836.782658518292,
            "unit": "ns/iter",
            "extra": "iterations: 23562\ncpu: 29802.775655716854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 108436.49312714294,
            "unit": "ns/iter",
            "extra": "iterations: 5820\ncpu: 108432.97250858916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 94437.59108056467,
            "unit": "ns/iter",
            "extra": "iterations: 7422\ncpu: 94430.92158447875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 93110.17350642144,
            "unit": "ns/iter",
            "extra": "iterations: 7164\ncpu: 93105.91848129535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 95489.06435711138,
            "unit": "ns/iter",
            "extra": "iterations: 7303\ncpu: 95480.03560180892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 62172.79884803005,
            "unit": "ns/iter",
            "extra": "iterations: 11285\ncpu: 62173.699601241555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 97106.73064113293,
            "unit": "ns/iter",
            "extra": "iterations: 7206\ncpu: 97103.64973633234 ns\nthreads: 1"
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
          "id": "93a417e35b7cddb2aff5c69874155ac65b18afac",
          "message": "Upd README",
          "timestamp": "2023-12-13T01:35:38+03:00",
          "tree_id": "ac2b7d38c5e0b561e002516e4bf347cf5169f70d",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/93a417e35b7cddb2aff5c69874155ac65b18afac"
        },
        "date": 1702420978241,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 850.3017825309755,
            "unit": "ns/iter",
            "extra": "iterations: 820687\ncpu: 850.2829946130499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12505.800660742723,
            "unit": "ns/iter",
            "extra": "iterations: 66289\ncpu: 12505.688726636396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27255.48782239603,
            "unit": "ns/iter",
            "extra": "iterations: 30630\ncpu: 27254.789422135156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 42257.15354029642,
            "unit": "ns/iter",
            "extra": "iterations: 19617\ncpu: 42256.62945404498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53199.633839566806,
            "unit": "ns/iter",
            "extra": "iterations: 14947\ncpu: 53198.79574496559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 54920.19620000405,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54920.010000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 66829.72621508133,
            "unit": "ns/iter",
            "extra": "iterations: 13065\ncpu: 66828.20512820514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 76802.31035398207,
            "unit": "ns/iter",
            "extra": "iterations: 11300\ncpu: 76801.46017699117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 88477.29064588227,
            "unit": "ns/iter",
            "extra": "iterations: 9878\ncpu: 88475.77444826889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 705.0368764757299,
            "unit": "ns/iter",
            "extra": "iterations: 994428\ncpu: 705.0236920118889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 585.34049199922,
            "unit": "ns/iter",
            "extra": "iterations: 1197197\ncpu: 585.334410293376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 584.5033283616343,
            "unit": "ns/iter",
            "extra": "iterations: 1198788\ncpu: 584.4925875133883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 588.385733727687,
            "unit": "ns/iter",
            "extra": "iterations: 1192561\ncpu: 588.3857513368298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1091.6578485063637,
            "unit": "ns/iter",
            "extra": "iterations: 640383\ncpu: 1091.6301650730886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5149.7503621315245,
            "unit": "ns/iter",
            "extra": "iterations: 154640\ncpu: 5149.715468184174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23309.591007509,
            "unit": "ns/iter",
            "extra": "iterations: 35563\ncpu: 23309.332733458938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 18664.770918137052,
            "unit": "ns/iter",
            "extra": "iterations: 44220\ncpu: 18664.520578923562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 18451.294867479475,
            "unit": "ns/iter",
            "extra": "iterations: 44559\ncpu: 18451.078345564336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 18580.092258748562,
            "unit": "ns/iter",
            "extra": "iterations: 44321\ncpu: 18580.01173258722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47146.69265146856,
            "unit": "ns/iter",
            "extra": "iterations: 17677\ncpu: 47145.59597216728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 514386.77373134036,
            "unit": "ns/iter",
            "extra": "iterations: 1675\ncpu: 514371.70149253873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 423677.7830972131,
            "unit": "ns/iter",
            "extra": "iterations: 2047\ncpu: 423673.9618954575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 422740.58447266946,
            "unit": "ns/iter",
            "extra": "iterations: 2048\ncpu: 422734.66796875076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 424717.9868995723,
            "unit": "ns/iter",
            "extra": "iterations: 2061\ncpu: 424712.6637554597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 259955.53355205138,
            "unit": "ns/iter",
            "extra": "iterations: 3353\ncpu: 259952.19206680587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 421808.70198356366,
            "unit": "ns/iter",
            "extra": "iterations: 2067\ncpu: 421794.7266569918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2068407.5582960153,
            "unit": "ns/iter",
            "extra": "iterations: 446\ncpu: 2068382.5112107643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 847359.9955076473,
            "unit": "ns/iter",
            "extra": "iterations: 1113\ncpu: 847343.7556154546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2772930.988023956,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2772797.3053892166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4927.233264227897,
            "unit": "ns/iter",
            "extra": "iterations: 164483\ncpu: 4927.062979152859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 23238.8889801697,
            "unit": "ns/iter",
            "extra": "iterations: 35300\ncpu: 23238.036827195443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 18429.05773306276,
            "unit": "ns/iter",
            "extra": "iterations: 44827\ncpu: 18428.34452450529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 18579.19510599908,
            "unit": "ns/iter",
            "extra": "iterations: 44340\ncpu: 18578.72350022551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 18220.8658479712,
            "unit": "ns/iter",
            "extra": "iterations: 45031\ncpu: 18220.223845795135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46174.146970870424,
            "unit": "ns/iter",
            "extra": "iterations: 18058\ncpu: 46171.52508583438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 528087.6609547255,
            "unit": "ns/iter",
            "extra": "iterations: 1634\ncpu: 528075.3365973051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 432037.7162094982,
            "unit": "ns/iter",
            "extra": "iterations: 2005\ncpu: 432023.1920199486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 427597.9083744014,
            "unit": "ns/iter",
            "extra": "iterations: 2030\ncpu: 427583.94088669855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 423630.89445523056,
            "unit": "ns/iter",
            "extra": "iterations: 2056\ncpu: 423617.1692606984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 252323.63867244098,
            "unit": "ns/iter",
            "extra": "iterations: 3465\ncpu: 252322.48196248082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 424423.000972753,
            "unit": "ns/iter",
            "extra": "iterations: 2056\ncpu: 424413.0836575867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2071427.563348437,
            "unit": "ns/iter",
            "extra": "iterations: 442\ncpu: 2071403.8461538416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 808103.2398268351,
            "unit": "ns/iter",
            "extra": "iterations: 1155\ncpu: 808090.5627705611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5120.921665206114,
            "unit": "ns/iter",
            "extra": "iterations: 156329\ncpu: 5120.830428135505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 23419.68924156268,
            "unit": "ns/iter",
            "extra": "iterations: 35349\ncpu: 23419.38668703496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 18444.687557233086,
            "unit": "ns/iter",
            "extra": "iterations: 44773\ncpu: 18444.428561856403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18132.283305116598,
            "unit": "ns/iter",
            "extra": "iterations: 45481\ncpu: 18132.20905433027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 18411.205366495302,
            "unit": "ns/iter",
            "extra": "iterations: 44871\ncpu: 18410.99150899241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46595.702170509,
            "unit": "ns/iter",
            "extra": "iterations: 17876\ncpu: 46595.14432759028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 522542.54176609276,
            "unit": "ns/iter",
            "extra": "iterations: 1676\ncpu: 522534.606205251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 426485.3760310524,
            "unit": "ns/iter",
            "extra": "iterations: 2061\ncpu: 426477.8748180489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 421996.7512123905,
            "unit": "ns/iter",
            "extra": "iterations: 2062\ncpu: 421991.2221144506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 421677.308136746,
            "unit": "ns/iter",
            "extra": "iterations: 2077\ncpu: 421675.734232067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 255663.4356955467,
            "unit": "ns/iter",
            "extra": "iterations: 3429\ncpu: 255660.8048993868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 417213.1049322917,
            "unit": "ns/iter",
            "extra": "iterations: 2068\ncpu: 417190.8123791094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 365.7300011462434,
            "unit": "ns/iter",
            "extra": "iterations: 1910597\ncpu: 365.7150618366944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2069.1424542400027,
            "unit": "ns/iter",
            "extra": "iterations: 337905\ncpu: 2069.0649738831953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1636.6174384977883,
            "unit": "ns/iter",
            "extra": "iterations: 429131\ncpu: 1636.5734472690222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1580.4918216107712,
            "unit": "ns/iter",
            "extra": "iterations: 443547\ncpu: 1580.4289060685794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1283.3768706460583,
            "unit": "ns/iter",
            "extra": "iterations: 546068\ncpu: 1283.357750316799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8409.5273622959,
            "unit": "ns/iter",
            "extra": "iterations: 84039\ncpu: 8409.262366282284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21125.796120911815,
            "unit": "ns/iter",
            "extra": "iterations: 33049\ncpu: 21125.12935338425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5305.674349331264,
            "unit": "ns/iter",
            "extra": "iterations: 127907\ncpu: 5305.524326268413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5255.6489765884535,
            "unit": "ns/iter",
            "extra": "iterations: 133182\ncpu: 5255.508251865827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5291.687539178379,
            "unit": "ns/iter",
            "extra": "iterations: 132407\ncpu: 5291.607694457225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11033.927826771807,
            "unit": "ns/iter",
            "extra": "iterations: 63500\ncpu: 11033.346456693023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10055.249586441587,
            "unit": "ns/iter",
            "extra": "iterations: 68914\ncpu: 10054.832109585755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3478.607117483887,
            "unit": "ns/iter",
            "extra": "iterations: 201279\ncpu: 3478.5148972322136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 17417.650541930823,
            "unit": "ns/iter",
            "extra": "iterations: 40042\ncpu: 17416.977173967276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13899.85550577865,
            "unit": "ns/iter",
            "extra": "iterations: 50002\ncpu: 13899.482020719335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13750.154162484616,
            "unit": "ns/iter",
            "extra": "iterations: 50823\ncpu: 13749.546465183032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14500.961054499894,
            "unit": "ns/iter",
            "extra": "iterations: 48478\ncpu: 14500.608523453711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30000.377640918374,
            "unit": "ns/iter",
            "extra": "iterations: 23382\ncpu: 29999.585150971037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 111426.146426865,
            "unit": "ns/iter",
            "extra": "iterations: 6283\ncpu: 111424.52650007897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 95964.81632654111,
            "unit": "ns/iter",
            "extra": "iterations: 7301\ncpu: 95963.59402821423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 94574.03893274361,
            "unit": "ns/iter",
            "extra": "iterations: 7346\ncpu: 94570.43288864817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 94896.73801091302,
            "unit": "ns/iter",
            "extra": "iterations: 7340\ncpu: 94893.85558583244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 61329.21281804237,
            "unit": "ns/iter",
            "extra": "iterations: 11437\ncpu: 61327.51595698144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 97112.76549715779,
            "unit": "ns/iter",
            "extra": "iterations: 7211\ncpu: 97111.31604493033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3430.08402982373,
            "unit": "ns/iter",
            "extra": "iterations: 203999\ncpu: 3430.0158334110024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 17146.98905725849,
            "unit": "ns/iter",
            "extra": "iterations: 40849\ncpu: 17146.921589267648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13544.226479146218,
            "unit": "ns/iter",
            "extra": "iterations: 51550\ncpu: 13544.195926285218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13502.212802067812,
            "unit": "ns/iter",
            "extra": "iterations: 51851\ncpu: 13501.64702705843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 14229.399640492644,
            "unit": "ns/iter",
            "extra": "iterations: 49512\ncpu: 14228.992971400892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29055.611906243583,
            "unit": "ns/iter",
            "extra": "iterations: 24105\ncpu: 29054.988591578145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 110113.8956191611,
            "unit": "ns/iter",
            "extra": "iterations: 6323\ncpu: 110110.86509568202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 95587.18480043898,
            "unit": "ns/iter",
            "extra": "iterations: 7316\ncpu: 95584.2536905412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 93416.99212177655,
            "unit": "ns/iter",
            "extra": "iterations: 7489\ncpu: 93415.47603151348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 94305.66262952055,
            "unit": "ns/iter",
            "extra": "iterations: 7431\ncpu: 94302.19351365871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 61894.63014915176,
            "unit": "ns/iter",
            "extra": "iterations: 11264\ncpu: 61891.32634943185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 96534.11969592706,
            "unit": "ns/iter",
            "extra": "iterations: 7235\ncpu: 96531.41672425788 ns\nthreads: 1"
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
        "date": 1702421415626,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 967.7823856957549,
            "unit": "ns/iter",
            "extra": "iterations: 821798\ncpu: 967.7503474089741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12442.479120977878,
            "unit": "ns/iter",
            "extra": "iterations: 66574\ncpu: 12441.840658515339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26668.07125506018,
            "unit": "ns/iter",
            "extra": "iterations: 30875\ncpu: 26667.656680161956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 42818.43890764319,
            "unit": "ns/iter",
            "extra": "iterations: 19847\ncpu: 42817.20159218016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53162.717209304305,
            "unit": "ns/iter",
            "extra": "iterations: 15050\ncpu: 53161.80066445186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 54735.266899996306,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54734.269999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 66217.69289106628,
            "unit": "ns/iter",
            "extra": "iterations: 13054\ncpu: 66216.32449823806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 76838.03343357779,
            "unit": "ns/iter",
            "extra": "iterations: 11306\ncpu: 76836.12241287816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 88153.34377833859,
            "unit": "ns/iter",
            "extra": "iterations: 9925\ncpu: 88152.26196473558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 717.83195452718,
            "unit": "ns/iter",
            "extra": "iterations: 988899\ncpu: 717.7955483825958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 592.0101917949426,
            "unit": "ns/iter",
            "extra": "iterations: 1185954\ncpu: 592.0081217315343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 589.298413654643,
            "unit": "ns/iter",
            "extra": "iterations: 1188518\ncpu: 589.2827033330586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 596.5155237591401,
            "unit": "ns/iter",
            "extra": "iterations: 1173717\ncpu: 596.4958333226838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1140.8535280768178,
            "unit": "ns/iter",
            "extra": "iterations: 642007\ncpu: 1140.8374051996332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5189.762768508785,
            "unit": "ns/iter",
            "extra": "iterations: 154697\ncpu: 5189.736064694215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23031.2465695878,
            "unit": "ns/iter",
            "extra": "iterations: 35710\ncpu: 23031.13413609633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 18457.134523702305,
            "unit": "ns/iter",
            "extra": "iterations: 44468\ncpu: 18456.879104074786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 18315.893827051415,
            "unit": "ns/iter",
            "extra": "iterations: 44776\ncpu: 18315.825442201174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 18412.425307203175,
            "unit": "ns/iter",
            "extra": "iterations: 44596\ncpu: 18412.357610548024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46805.422483013135,
            "unit": "ns/iter",
            "extra": "iterations: 17809\ncpu: 46803.924981750904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 531061.539140684,
            "unit": "ns/iter",
            "extra": "iterations: 1699\ncpu: 531055.1500882881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 421266.4992714859,
            "unit": "ns/iter",
            "extra": "iterations: 2059\ncpu: 421234.9198640112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 423993.9223632805,
            "unit": "ns/iter",
            "extra": "iterations: 2048\ncpu: 423973.87695312407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 423956.30982488696,
            "unit": "ns/iter",
            "extra": "iterations: 2056\ncpu: 423920.71984435926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 256051.82830968377,
            "unit": "ns/iter",
            "extra": "iterations: 3384\ncpu: 256047.07446808496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 421015.5756547095,
            "unit": "ns/iter",
            "extra": "iterations: 2062\ncpu: 420980.11639185296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2068302.3229398786,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2068028.0623607987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 827090.8368237375,
            "unit": "ns/iter",
            "extra": "iterations: 1146\ncpu: 827037.2600349038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2752052.814925427,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2751819.1044776086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4891.1096540921,
            "unit": "ns/iter",
            "extra": "iterations: 161517\ncpu: 4890.764439656499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 23485.772479259427,
            "unit": "ns/iter",
            "extra": "iterations: 35922\ncpu: 23483.9958799622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 18660.182274395578,
            "unit": "ns/iter",
            "extra": "iterations: 45234\ncpu: 18659.73161780953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 18515.852196301195,
            "unit": "ns/iter",
            "extra": "iterations: 45053\ncpu: 18515.53725612046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 18446.369168447087,
            "unit": "ns/iter",
            "extra": "iterations: 45421\ncpu: 18446.029369674856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46438.143163097,
            "unit": "ns/iter",
            "extra": "iterations: 18210\ncpu: 46437.880285557476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 537231.6295384525,
            "unit": "ns/iter",
            "extra": "iterations: 1625\ncpu: 537213.6615384612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 436096.8540513319,
            "unit": "ns/iter",
            "extra": "iterations: 1987\ncpu: 436090.1862103664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 431068.0532544388,
            "unit": "ns/iter",
            "extra": "iterations: 2028\ncpu: 431053.9447731724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 425522.34223301936,
            "unit": "ns/iter",
            "extra": "iterations: 2060\ncpu: 425510.4368932029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 265269.03356890485,
            "unit": "ns/iter",
            "extra": "iterations: 3396\ncpu: 265267.66784452327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 427779.02260444156,
            "unit": "ns/iter",
            "extra": "iterations: 2035\ncpu: 427762.5061425046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2079069.5363636112,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2079025.4545454641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 853775.3269927616,
            "unit": "ns/iter",
            "extra": "iterations: 1104\ncpu: 853744.474637682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5202.005737816956,
            "unit": "ns/iter",
            "extra": "iterations: 153717\ncpu: 5201.915207816974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 23534.038004210954,
            "unit": "ns/iter",
            "extra": "iterations: 35154\ncpu: 23533.66615463375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 18424.7434912692,
            "unit": "ns/iter",
            "extra": "iterations: 44786\ncpu: 18424.36475684366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18055.4939550186,
            "unit": "ns/iter",
            "extra": "iterations: 45575\ncpu: 18055.3922106419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 18251.441198084376,
            "unit": "ns/iter",
            "extra": "iterations: 44905\ncpu: 18251.12570983196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46355.123762649964,
            "unit": "ns/iter",
            "extra": "iterations: 18083\ncpu: 46354.92451473738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 523667.2877043988,
            "unit": "ns/iter",
            "extra": "iterations: 1651\ncpu: 523653.9067232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 427869.2129446651,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 427861.6600790507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 425607.71267743374,
            "unit": "ns/iter",
            "extra": "iterations: 2043\ncpu: 425595.692608909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 425357.28725492646,
            "unit": "ns/iter",
            "extra": "iterations: 2040\ncpu: 425345.7843137247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 256984.2764774791,
            "unit": "ns/iter",
            "extra": "iterations: 3418\ncpu: 256982.82621416054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 421013.32306940877,
            "unit": "ns/iter",
            "extra": "iterations: 2046\ncpu: 420986.070381234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 365.5355041430274,
            "unit": "ns/iter",
            "extra": "iterations: 1913326\ncpu: 365.5196762078183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2061.387447770875,
            "unit": "ns/iter",
            "extra": "iterations: 348225\ncpu: 2061.2127216598324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1626.63885982656,
            "unit": "ns/iter",
            "extra": "iterations: 430110\ncpu: 1626.5627397642465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1577.9951547542335,
            "unit": "ns/iter",
            "extra": "iterations: 442702\ncpu: 1577.8582432426476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1293.9355974768264,
            "unit": "ns/iter",
            "extra": "iterations: 542339\ncpu: 1293.8049817549531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8380.74854322152,
            "unit": "ns/iter",
            "extra": "iterations: 83060\ncpu: 8380.711533830992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 22300.387916465756,
            "unit": "ns/iter",
            "extra": "iterations: 31365\ncpu: 22299.79276263348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5340.49250102886,
            "unit": "ns/iter",
            "extra": "iterations: 131218\ncpu: 5340.223902208526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5332.3285782762,
            "unit": "ns/iter",
            "extra": "iterations: 131439\ncpu: 5331.965398397764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5288.006390626245,
            "unit": "ns/iter",
            "extra": "iterations: 131599\ncpu: 5287.633644632534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10553.998580746415,
            "unit": "ns/iter",
            "extra": "iterations: 66232\ncpu: 10553.333735958422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10097.822987810327,
            "unit": "ns/iter",
            "extra": "iterations: 69402\ncpu: 10097.302671392728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3438.1378538796957,
            "unit": "ns/iter",
            "extra": "iterations: 203353\ncpu: 3438.1243453502107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 17107.03446173356,
            "unit": "ns/iter",
            "extra": "iterations: 41002\ncpu: 17106.150919467444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13677.141043888305,
            "unit": "ns/iter",
            "extra": "iterations: 51289\ncpu: 13676.492035329087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13471.074800038992,
            "unit": "ns/iter",
            "extra": "iterations: 51885\ncpu: 13470.290064565748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14221.202468934722,
            "unit": "ns/iter",
            "extra": "iterations: 49252\ncpu: 14220.52302444578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29969.446021874195,
            "unit": "ns/iter",
            "extra": "iterations: 23315\ncpu: 29967.248552434045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 112521.2426092567,
            "unit": "ns/iter",
            "extra": "iterations: 6224\ncpu: 112512.8213367616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 96846.64391732855,
            "unit": "ns/iter",
            "extra": "iterations: 7209\ncpu: 96841.61464835705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 95978.95716051072,
            "unit": "ns/iter",
            "extra": "iterations: 7283\ncpu: 95974.85926129333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 96123.17184066084,
            "unit": "ns/iter",
            "extra": "iterations: 7280\ncpu: 96117.26648351787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 62264.759790424934,
            "unit": "ns/iter",
            "extra": "iterations: 11261\ncpu: 62258.893526330605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 97825.18541288517,
            "unit": "ns/iter",
            "extra": "iterations: 7157\ncpu: 97816.26379767977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3372.3289967934716,
            "unit": "ns/iter",
            "extra": "iterations: 207385\ncpu: 3372.1127371796842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 17018.96598193439,
            "unit": "ns/iter",
            "extra": "iterations: 41184\ncpu: 17017.66705516698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13484.433861821512,
            "unit": "ns/iter",
            "extra": "iterations: 51846\ncpu: 13483.748022990985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13285.089410067312,
            "unit": "ns/iter",
            "extra": "iterations: 52701\ncpu: 13284.379803039796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 14000.61931795533,
            "unit": "ns/iter",
            "extra": "iterations: 50202\ncpu: 14000.535835225797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28955.889894980122,
            "unit": "ns/iter",
            "extra": "iterations: 24186\ncpu: 28953.696353262276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 111132.17939778014,
            "unit": "ns/iter",
            "extra": "iterations: 6310\ncpu: 111126.52931854178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 95154.80475474818,
            "unit": "ns/iter",
            "extra": "iterations: 7319\ncpu: 95144.32299494557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 93742.85523326283,
            "unit": "ns/iter",
            "extra": "iterations: 7481\ncpu: 93734.44726640735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 94483.18803188052,
            "unit": "ns/iter",
            "extra": "iterations: 7403\ncpu: 94481.23733621597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 62166.30081589349,
            "unit": "ns/iter",
            "extra": "iterations: 11276\ncpu: 62161.12983327366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 97056.34505677212,
            "unit": "ns/iter",
            "extra": "iterations: 7222\ncpu: 97050.78925505393 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}