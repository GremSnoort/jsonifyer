window.BENCHMARK_DATA = {
  "lastUpdate": 1705772087071,
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
        "date": 1702421911533,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 859.8784213586732,
            "unit": "ns/iter",
            "extra": "iterations: 811812\ncpu: 859.8179135070682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12547.828173960666,
            "unit": "ns/iter",
            "extra": "iterations: 66061\ncpu: 12547.257837453262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26369.143257500364,
            "unit": "ns/iter",
            "extra": "iterations: 30330\ncpu: 26366.97988789976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41376.3305216969,
            "unit": "ns/iter",
            "extra": "iterations: 20510\ncpu: 41373.51535836178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 52189.730577192066,
            "unit": "ns/iter",
            "extra": "iterations: 15021\ncpu: 52185.95965648097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 54065.71879999547,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54062.55 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 65418.26083706796,
            "unit": "ns/iter",
            "extra": "iterations: 13380\ncpu: 65412.95964125559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 75968.13049891735,
            "unit": "ns/iter",
            "extra": "iterations: 11525\ncpu: 75964.1561822126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 86209.82362944905,
            "unit": "ns/iter",
            "extra": "iterations: 9996\ncpu: 86205.89235694282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 679.6494019547457,
            "unit": "ns/iter",
            "extra": "iterations: 1024170\ncpu: 679.6271126863707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 571.5429021620895,
            "unit": "ns/iter",
            "extra": "iterations: 1224239\ncpu: 571.5183064744704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 574.4897276863126,
            "unit": "ns/iter",
            "extra": "iterations: 1222120\ncpu: 574.4646188590312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 578.7118292062022,
            "unit": "ns/iter",
            "extra": "iterations: 1211941\ncpu: 578.6991280928686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1103.2705527314295,
            "unit": "ns/iter",
            "extra": "iterations: 633237\ncpu: 1103.2419141648386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4757.317692879607,
            "unit": "ns/iter",
            "extra": "iterations: 168175\ncpu: 4757.134532481046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 21249.868723876716,
            "unit": "ns/iter",
            "extra": "iterations: 38758\ncpu: 21249.36787243922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 17026.59765194814,
            "unit": "ns/iter",
            "extra": "iterations: 48125\ncpu: 17026.225454545456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 16222.212292273329,
            "unit": "ns/iter",
            "extra": "iterations: 50487\ncpu: 16221.14801830175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 16612.985697940843,
            "unit": "ns/iter",
            "extra": "iterations: 48944\ncpu: 16612.29772801573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46531.229358816694,
            "unit": "ns/iter",
            "extra": "iterations: 17998\ncpu: 46528.89209912202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 513538.84796698374,
            "unit": "ns/iter",
            "extra": "iterations: 1697\ncpu: 513527.9905715987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 425471.21212120226,
            "unit": "ns/iter",
            "extra": "iterations: 2046\ncpu: 425457.91788856284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 425317.1717761463,
            "unit": "ns/iter",
            "extra": "iterations: 2055\ncpu: 425307.2506082737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 428508.79043392424,
            "unit": "ns/iter",
            "extra": "iterations: 2028\ncpu: 428468.44181459537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 258763.96325066968,
            "unit": "ns/iter",
            "extra": "iterations: 3347\ncpu: 258749.3277561993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 422603.9393203783,
            "unit": "ns/iter",
            "extra": "iterations: 2060\ncpu: 422594.1262135929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2071096.7865167905,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 2070928.7640449414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 827185.4523809612,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 827167.6366843043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2762794.177177189,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2762669.0690690675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4899.794270426429,
            "unit": "ns/iter",
            "extra": "iterations: 159977\ncpu: 4899.646824230987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 23294.57179921082,
            "unit": "ns/iter",
            "extra": "iterations: 35460\ncpu: 23293.874788494053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 18432.30936756205,
            "unit": "ns/iter",
            "extra": "iterations: 44953\ncpu: 18431.624140769276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 18483.527695881876,
            "unit": "ns/iter",
            "extra": "iterations: 44772\ncpu: 18483.103278834988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 18399.966689643865,
            "unit": "ns/iter",
            "extra": "iterations: 44971\ncpu: 18399.348469013465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46369.930560959256,
            "unit": "ns/iter",
            "extra": "iterations: 17987\ncpu: 46369.21665647425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 541580.0938086063,
            "unit": "ns/iter",
            "extra": "iterations: 1599\ncpu: 541564.4152595355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 437202.4710578809,
            "unit": "ns/iter",
            "extra": "iterations: 2004\ncpu: 437191.81636726693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 428826.3450494825,
            "unit": "ns/iter",
            "extra": "iterations: 2020\ncpu: 428816.43564356444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 429574.6336924555,
            "unit": "ns/iter",
            "extra": "iterations: 2042\ncpu: 429559.3535749294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 256515.11107845462,
            "unit": "ns/iter",
            "extra": "iterations: 3403\ncpu: 256511.22538936202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 429290.5120773109,
            "unit": "ns/iter",
            "extra": "iterations: 2070\ncpu: 429272.89855072513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2077871.282460094,
            "unit": "ns/iter",
            "extra": "iterations: 439\ncpu: 2077800.6833712978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 829898.6064400837,
            "unit": "ns/iter",
            "extra": "iterations: 1118\ncpu: 829867.978533096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5246.76269317142,
            "unit": "ns/iter",
            "extra": "iterations: 153232\ncpu: 5246.528792941432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 23389.188073783516,
            "unit": "ns/iter",
            "extra": "iterations: 35401\ncpu: 23388.635914239778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 18382.70831579241,
            "unit": "ns/iter",
            "extra": "iterations: 45131\ncpu: 18382.249451596494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18044.91953369338,
            "unit": "ns/iter",
            "extra": "iterations: 45721\ncpu: 18044.504713370137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 18360.12430994337,
            "unit": "ns/iter",
            "extra": "iterations: 45105\ncpu: 18359.492295754342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 47018.88754392617,
            "unit": "ns/iter",
            "extra": "iterations: 17927\ncpu: 47018.19043900261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 522709.23363365786,
            "unit": "ns/iter",
            "extra": "iterations: 1665\ncpu: 522689.4294294324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 427594.70452311233,
            "unit": "ns/iter",
            "extra": "iterations: 2034\ncpu: 427573.99213372456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 422301.0995097948,
            "unit": "ns/iter",
            "extra": "iterations: 2040\ncpu: 422291.1274509804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 423352.43169664225,
            "unit": "ns/iter",
            "extra": "iterations: 2057\ncpu: 423337.62761303014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 261042.71560177172,
            "unit": "ns/iter",
            "extra": "iterations: 3365\ncpu: 261034.59138187073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 422717.71595901944,
            "unit": "ns/iter",
            "extra": "iterations: 2049\ncpu: 422699.90239141154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 377.51772895860785,
            "unit": "ns/iter",
            "extra": "iterations: 1849319\ncpu: 377.5082070751448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2049.35472435885,
            "unit": "ns/iter",
            "extra": "iterations: 342184\ncpu: 2049.2851799032023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1606.3147561453884,
            "unit": "ns/iter",
            "extra": "iterations: 408440\ncpu: 1606.254529429051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1634.0764963496695,
            "unit": "ns/iter",
            "extra": "iterations: 440923\ncpu: 1634.005257153738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1290.2273798233025,
            "unit": "ns/iter",
            "extra": "iterations: 539872\ncpu: 1290.2082345444956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8375.838392877911,
            "unit": "ns/iter",
            "extra": "iterations: 83802\ncpu: 8375.607980716304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 22212.220595723473,
            "unit": "ns/iter",
            "extra": "iterations: 31424\ncpu: 22211.70124745417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 6356.452222192803,
            "unit": "ns/iter",
            "extra": "iterations: 112029\ncpu: 6356.147069062487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 6411.681974300314,
            "unit": "ns/iter",
            "extra": "iterations: 109183\ncpu: 6411.39463103221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 6455.6105647033155,
            "unit": "ns/iter",
            "extra": "iterations: 108588\ncpu: 6455.51350057095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11306.888391203072,
            "unit": "ns/iter",
            "extra": "iterations: 62065\ncpu: 11306.499637476802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10252.824422229662,
            "unit": "ns/iter",
            "extra": "iterations: 68323\ncpu: 10252.567949299653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3445.635841098672,
            "unit": "ns/iter",
            "extra": "iterations: 203900\ncpu: 3445.4703285924375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 17147.41682459309,
            "unit": "ns/iter",
            "extra": "iterations: 40631\ncpu: 17147.015825354963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13796.80647457893,
            "unit": "ns/iter",
            "extra": "iterations: 50567\ncpu: 13796.434433523986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13434.386573673923,
            "unit": "ns/iter",
            "extra": "iterations: 52047\ncpu: 13433.91742079269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14292.695955170599,
            "unit": "ns/iter",
            "extra": "iterations: 49075\ncpu: 14292.205807437665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30153.11667025112,
            "unit": "ns/iter",
            "extra": "iterations: 23245\ncpu: 30151.757367176277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 111693.44148597364,
            "unit": "ns/iter",
            "extra": "iterations: 6272\ncpu: 111691.70918367205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 95982.67353428819,
            "unit": "ns/iter",
            "extra": "iterations: 7232\ncpu: 95978.77488938079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 95335.36686795979,
            "unit": "ns/iter",
            "extra": "iterations: 7286\ncpu: 95333.13203403844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 95656.06109061358,
            "unit": "ns/iter",
            "extra": "iterations: 7317\ncpu: 95652.86319529937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 61424.376292274996,
            "unit": "ns/iter",
            "extra": "iterations: 11414\ncpu: 61421.58752409423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 96960.99695964885,
            "unit": "ns/iter",
            "extra": "iterations: 7236\ncpu: 96959.60475400616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3380.2331331413134,
            "unit": "ns/iter",
            "extra": "iterations: 207967\ncpu: 3380.085301995026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 17037.83553783267,
            "unit": "ns/iter",
            "extra": "iterations: 41128\ncpu: 17037.222816572656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13495.204315211673,
            "unit": "ns/iter",
            "extra": "iterations: 51724\ncpu: 13494.56731884612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13348.014227138001,
            "unit": "ns/iter",
            "extra": "iterations: 52435\ncpu: 13347.710498712813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 14050.666773297613,
            "unit": "ns/iter",
            "extra": "iterations: 50017\ncpu: 14050.32688885776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29269.120805088423,
            "unit": "ns/iter",
            "extra": "iterations: 23749\ncpu: 29268.411301528817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 108805.88347990083,
            "unit": "ns/iter",
            "extra": "iterations: 6368\ncpu: 108799.43467336684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 94967.57037037572,
            "unit": "ns/iter",
            "extra": "iterations: 7425\ncpu: 94963.04377104301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 94301.03784511982,
            "unit": "ns/iter",
            "extra": "iterations: 7425\ncpu: 94299.63636363625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 94851.36595283107,
            "unit": "ns/iter",
            "extra": "iterations: 7378\ncpu: 94848.03469775106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 61798.88072493991,
            "unit": "ns/iter",
            "extra": "iterations: 11201\ncpu: 61797.43772877397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 95957.77412280613,
            "unit": "ns/iter",
            "extra": "iterations: 7296\ncpu: 95953.59100877358 ns\nthreads: 1"
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
        "date": 1702453370525,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 860.054759349347,
            "unit": "ns/iter",
            "extra": "iterations: 812464\ncpu: 860.0709692983321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12602.320692926705,
            "unit": "ns/iter",
            "extra": "iterations: 65346\ncpu: 12602.32760995317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27071.145883580284,
            "unit": "ns/iter",
            "extra": "iterations: 30682\ncpu: 27071.361058601135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41886.61860683861,
            "unit": "ns/iter",
            "extra": "iterations: 19122\ncpu: 41886.62273820729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 54243.10123357555,
            "unit": "ns/iter",
            "extra": "iterations: 14916\ncpu: 54242.58514347006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55321.09270000092,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55320.900000000074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 66637.57467732277,
            "unit": "ns/iter",
            "extra": "iterations: 13016\ncpu: 66637.43853718502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 77338.6495734109,
            "unit": "ns/iter",
            "extra": "iterations: 11252\ncpu: 77338.39317454677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 88732.77559493395,
            "unit": "ns/iter",
            "extra": "iterations: 9875\ncpu: 88732.7189873417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 710.2995871931677,
            "unit": "ns/iter",
            "extra": "iterations: 987629\ncpu: 710.2925288747086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 580.682421827592,
            "unit": "ns/iter",
            "extra": "iterations: 1194635\ncpu: 580.6863184152479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 580.6461233493092,
            "unit": "ns/iter",
            "extra": "iterations: 1207692\ncpu: 580.6348804165299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 593.0923727415907,
            "unit": "ns/iter",
            "extra": "iterations: 1176386\ncpu: 593.0848377998392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1086.6373802040018,
            "unit": "ns/iter",
            "extra": "iterations: 644951\ncpu: 1086.6592965977256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5119.967539754569,
            "unit": "ns/iter",
            "extra": "iterations: 156838\ncpu: 5119.905252553581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24146.737075290162,
            "unit": "ns/iter",
            "extra": "iterations: 35436\ncpu: 24146.22982277908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 18374.650257180194,
            "unit": "ns/iter",
            "extra": "iterations: 43938\ncpu: 18374.327461422916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 17622.505601065728,
            "unit": "ns/iter",
            "extra": "iterations: 46509\ncpu: 17621.85383474162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 17993.401437685723,
            "unit": "ns/iter",
            "extra": "iterations: 45768\ncpu: 17992.99073588528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46164.600244023204,
            "unit": "ns/iter",
            "extra": "iterations: 18031\ncpu: 46163.26326881474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 516795.76164876163,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 516802.4492234176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 423980.0361328094,
            "unit": "ns/iter",
            "extra": "iterations: 2048\ncpu: 423975.3417968756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 423953.8051757641,
            "unit": "ns/iter",
            "extra": "iterations: 2048\ncpu: 423962.10937500035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 429361.1644575543,
            "unit": "ns/iter",
            "extra": "iterations: 2037\ncpu: 429359.2047128125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 257142.5137830041,
            "unit": "ns/iter",
            "extra": "iterations: 3410\ncpu: 257142.75659824113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 423117.7137273995,
            "unit": "ns/iter",
            "extra": "iterations: 2047\ncpu: 423118.1729360042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2060650.5422222198,
            "unit": "ns/iter",
            "extra": "iterations: 450\ncpu: 2060630.444444437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 829616.4105263315,
            "unit": "ns/iter",
            "extra": "iterations: 1140\ncpu: 829607.9824561412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2747360.969879603,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2747337.349397583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4919.682359087943,
            "unit": "ns/iter",
            "extra": "iterations: 162690\ncpu: 4919.708033683696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 23191.66474199147,
            "unit": "ns/iter",
            "extra": "iterations: 35677\ncpu: 23191.423045659623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 18378.64073794898,
            "unit": "ns/iter",
            "extra": "iterations: 45098\ncpu: 18378.50680739721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 18460.436910522552,
            "unit": "ns/iter",
            "extra": "iterations: 44849\ncpu: 18460.31349639898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 18344.9603912411,
            "unit": "ns/iter",
            "extra": "iterations: 45394\ncpu: 18345.33859100317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46005.98587741772,
            "unit": "ns/iter",
            "extra": "iterations: 18127\ncpu: 46005.96347989202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 531289.4190012339,
            "unit": "ns/iter",
            "extra": "iterations: 1642\ncpu: 531285.4445797793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 431623.79475766607,
            "unit": "ns/iter",
            "extra": "iterations: 2022\ncpu: 431631.9980217598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 426697.21745562047,
            "unit": "ns/iter",
            "extra": "iterations: 2028\ncpu: 426694.6745562137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 429033.11972523126,
            "unit": "ns/iter",
            "extra": "iterations: 2038\ncpu: 429030.02944062697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 252721.5001444647,
            "unit": "ns/iter",
            "extra": "iterations: 3461\ncpu: 252723.69257440104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 426383.3296062327,
            "unit": "ns/iter",
            "extra": "iterations: 2057\ncpu: 426384.83228002075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2073390.323529436,
            "unit": "ns/iter",
            "extra": "iterations: 442\ncpu: 2073374.886877837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 794340.0436270311,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 794333.7895637313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5117.997753735889,
            "unit": "ns/iter",
            "extra": "iterations: 157595\ncpu: 5117.690282052087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 23329.757403444506,
            "unit": "ns/iter",
            "extra": "iterations: 35524\ncpu: 23329.444882332966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 18284.801503867573,
            "unit": "ns/iter",
            "extra": "iterations: 41759\ncpu: 18284.3147584952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18019.003495735597,
            "unit": "ns/iter",
            "extra": "iterations: 45484\ncpu: 18018.661507343353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 17967.97342330579,
            "unit": "ns/iter",
            "extra": "iterations: 45792\ncpu: 17967.664657582187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46217.48273583425,
            "unit": "ns/iter",
            "extra": "iterations: 18159\ncpu: 46216.99432788158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 516326.4336075215,
            "unit": "ns/iter",
            "extra": "iterations: 1702\ncpu: 516305.6404230323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 422567.2450363304,
            "unit": "ns/iter",
            "extra": "iterations: 2065\ncpu: 422558.6924939467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 420797.3454633518,
            "unit": "ns/iter",
            "extra": "iterations: 2061\ncpu: 420784.7161572049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 422572.7822502429,
            "unit": "ns/iter",
            "extra": "iterations: 2062\ncpu: 422554.07371484133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 254715.00260642282,
            "unit": "ns/iter",
            "extra": "iterations: 3453\ncpu: 254710.91804228135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 418743.73691861145,
            "unit": "ns/iter",
            "extra": "iterations: 2064\ncpu: 418733.81782945764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 363.9449145650429,
            "unit": "ns/iter",
            "extra": "iterations: 1918184\ncpu: 363.93620215787405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2015.4112683996307,
            "unit": "ns/iter",
            "extra": "iterations: 347627\ncpu: 2015.3428818820134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1609.6104243533118,
            "unit": "ns/iter",
            "extra": "iterations: 434732\ncpu: 1609.634211422207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1585.8911731580463,
            "unit": "ns/iter",
            "extra": "iterations: 441279\ncpu: 1585.900983278141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1271.6991966519506,
            "unit": "ns/iter",
            "extra": "iterations: 549575\ncpu: 1271.7057726425026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8417.269039784742,
            "unit": "ns/iter",
            "extra": "iterations: 83575\ncpu: 8416.995513012364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 22080.88479918809,
            "unit": "ns/iter",
            "extra": "iterations: 31597\ncpu: 22080.362059689567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5316.57828456307,
            "unit": "ns/iter",
            "extra": "iterations: 131022\ncpu: 5316.614003755185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5289.236782740298,
            "unit": "ns/iter",
            "extra": "iterations: 132100\ncpu: 5289.17335352006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5345.259799321022,
            "unit": "ns/iter",
            "extra": "iterations: 131055\ncpu: 5345.2893823203985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11019.634540110179,
            "unit": "ns/iter",
            "extra": "iterations: 63613\ncpu: 11019.538459120091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10053.425268956866,
            "unit": "ns/iter",
            "extra": "iterations: 69342\ncpu: 10053.347177756672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3420.4505249387717,
            "unit": "ns/iter",
            "extra": "iterations: 204881\ncpu: 3420.4640742674865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16938.14733116818,
            "unit": "ns/iter",
            "extra": "iterations: 41254\ncpu: 16937.6302903958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13629.026617078423,
            "unit": "ns/iter",
            "extra": "iterations: 51358\ncpu: 13628.939989874933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13488.787121928519,
            "unit": "ns/iter",
            "extra": "iterations: 51809\ncpu: 13488.251076068118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14339.775015297455,
            "unit": "ns/iter",
            "extra": "iterations: 49030\ncpu: 14339.891902916443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29949.75632971295,
            "unit": "ns/iter",
            "extra": "iterations: 21012\ncpu: 29949.50980392144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 110900.30524818347,
            "unit": "ns/iter",
            "extra": "iterations: 6326\ncpu: 110901.01169775504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 95878.92416153791,
            "unit": "ns/iter",
            "extra": "iterations: 7305\ncpu: 95872.99110198655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 94989.24695414396,
            "unit": "ns/iter",
            "extra": "iterations: 7305\ncpu: 94986.25598904873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 95876.32815720662,
            "unit": "ns/iter",
            "extra": "iterations: 7277\ncpu: 95872.8459530025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 61102.976549554296,
            "unit": "ns/iter",
            "extra": "iterations: 11471\ncpu: 61102.39734983861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 96416.97929891545,
            "unit": "ns/iter",
            "extra": "iterations: 7246\ncpu: 96417.43030637574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3337.4216816268263,
            "unit": "ns/iter",
            "extra": "iterations: 209440\ncpu: 3337.402597402599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16945.364659675273,
            "unit": "ns/iter",
            "extra": "iterations: 41754\ncpu: 16945.06394596946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13384.600811598359,
            "unit": "ns/iter",
            "extra": "iterations: 52489\ncpu: 13384.288136561805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13246.813284299571,
            "unit": "ns/iter",
            "extra": "iterations: 52754\ncpu: 13246.610683550203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13979.599828089637,
            "unit": "ns/iter",
            "extra": "iterations: 50026\ncpu: 13979.430696038158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28778.470559149995,
            "unit": "ns/iter",
            "extra": "iterations: 24269\ncpu: 28777.275536692567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 109537.90218069807,
            "unit": "ns/iter",
            "extra": "iterations: 6420\ncpu: 109535.18691588841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 93683.533583077,
            "unit": "ns/iter",
            "extra": "iterations: 7474\ncpu: 93683.06127910115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 92649.42988048312,
            "unit": "ns/iter",
            "extra": "iterations: 7530\ncpu: 92647.64940239205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 93677.4554362432,
            "unit": "ns/iter",
            "extra": "iterations: 7450\ncpu: 93675.14093959861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 61708.674043378516,
            "unit": "ns/iter",
            "extra": "iterations: 11342\ncpu: 61706.76247575315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 95601.30612802487,
            "unit": "ns/iter",
            "extra": "iterations: 7327\ncpu: 95599.69974068447 ns\nthreads: 1"
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
        "date": 1702479542079,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 844.561436168266,
            "unit": "ns/iter",
            "extra": "iterations: 824026\ncpu: 844.5581814166057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12489.784782773102,
            "unit": "ns/iter",
            "extra": "iterations: 66175\ncpu: 12489.493010955797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27277.083219689128,
            "unit": "ns/iter",
            "extra": "iterations: 30798\ncpu: 27276.65432820313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 42915.44578434961,
            "unit": "ns/iter",
            "extra": "iterations: 19819\ncpu: 42913.50724052677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53493.05982622658,
            "unit": "ns/iter",
            "extra": "iterations: 15077\ncpu: 53491.87504145389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55339.38449999596,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55338.42 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 66929.05297355083,
            "unit": "ns/iter",
            "extra": "iterations: 13082\ncpu: 66925.2713652347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 76953.13151122582,
            "unit": "ns/iter",
            "extra": "iterations: 11269\ncpu: 76949.88907622675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 87878.33946065893,
            "unit": "ns/iter",
            "extra": "iterations: 9901\ncpu: 87871.30592869404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 704.2646566096387,
            "unit": "ns/iter",
            "extra": "iterations: 995063\ncpu: 704.2682724611412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 589.8873201944941,
            "unit": "ns/iter",
            "extra": "iterations: 1183362\ncpu: 589.8895688724165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 584.5037871602561,
            "unit": "ns/iter",
            "extra": "iterations: 1191394\ncpu: 584.5007612930743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 589.4585950841928,
            "unit": "ns/iter",
            "extra": "iterations: 1184014\ncpu: 589.4569658804708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1069.99671777435,
            "unit": "ns/iter",
            "extra": "iterations: 655348\ncpu: 1069.9819027448016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5144.531883423445,
            "unit": "ns/iter",
            "extra": "iterations: 157527\ncpu: 5144.433652643668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 22938.98643663559,
            "unit": "ns/iter",
            "extra": "iterations: 36053\ncpu: 22938.895514936357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 18407.580428504505,
            "unit": "ns/iter",
            "extra": "iterations: 44667\ncpu: 18407.392482145617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 18216.110971246413,
            "unit": "ns/iter",
            "extra": "iterations: 45282\ncpu: 18215.77447992584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 18060.74198148384,
            "unit": "ns/iter",
            "extra": "iterations: 45582\ncpu: 18060.556798736372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46438.57122397388,
            "unit": "ns/iter",
            "extra": "iterations: 18154\ncpu: 46437.67764679948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 513404.98633391986,
            "unit": "ns/iter",
            "extra": "iterations: 1683\ncpu: 513393.58288769925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 416656.45699181414,
            "unit": "ns/iter",
            "extra": "iterations: 2081\ncpu: 416651.22537241655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 406763.7026641346,
            "unit": "ns/iter",
            "extra": "iterations: 2102\ncpu: 406762.3691722183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 416604.53018868924,
            "unit": "ns/iter",
            "extra": "iterations: 2120\ncpu: 416600.61320754647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 256639.84335209063,
            "unit": "ns/iter",
            "extra": "iterations: 3377\ncpu: 256639.05833580112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 420881.91040462774,
            "unit": "ns/iter",
            "extra": "iterations: 2076\ncpu: 420878.37186897866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2078442.7747747148,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 2078255.6306306256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 827618.4733624503,
            "unit": "ns/iter",
            "extra": "iterations: 1145\ncpu: 827610.5676855888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2769837.5223879865,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2769722.6865671664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4904.302071495764,
            "unit": "ns/iter",
            "extra": "iterations: 161912\ncpu: 4904.126315529435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 23239.10053769378,
            "unit": "ns/iter",
            "extra": "iterations: 35708\ncpu: 23238.18472051079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 18489.01792201991,
            "unit": "ns/iter",
            "extra": "iterations: 45140\ncpu: 18488.45591493134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 18493.330544864122,
            "unit": "ns/iter",
            "extra": "iterations: 44947\ncpu: 18492.722539880284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 17955.0496599373,
            "unit": "ns/iter",
            "extra": "iterations: 46315\ncpu: 17954.351721904433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46538.153474959305,
            "unit": "ns/iter",
            "extra": "iterations: 18029\ncpu: 46535.204392922584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 541612.5889724485,
            "unit": "ns/iter",
            "extra": "iterations: 1596\ncpu: 541592.1679197968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 434474.40587647946,
            "unit": "ns/iter",
            "extra": "iterations: 2008\ncpu: 434469.02390438085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 430447.9363277345,
            "unit": "ns/iter",
            "extra": "iterations: 2026\ncpu: 430436.0809476816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 426986.19883326086,
            "unit": "ns/iter",
            "extra": "iterations: 2057\ncpu: 426977.9776373361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 254286.76090138714,
            "unit": "ns/iter",
            "extra": "iterations: 3417\ncpu: 254280.30436054955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 424972.42758621735,
            "unit": "ns/iter",
            "extra": "iterations: 2030\ncpu: 424957.8325123152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2055853.8657718205,
            "unit": "ns/iter",
            "extra": "iterations: 447\ncpu: 2055741.3870245938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 817791.8022847187,
            "unit": "ns/iter",
            "extra": "iterations: 1138\ncpu: 817770.2987697711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5040.013487921157,
            "unit": "ns/iter",
            "extra": "iterations: 155769\ncpu: 5039.887910945072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 22699.795805025256,
            "unit": "ns/iter",
            "extra": "iterations: 37092\ncpu: 22699.086056292457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 18076.963961828835,
            "unit": "ns/iter",
            "extra": "iterations: 46423\ncpu: 18076.492255993824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 17465.15832401772,
            "unit": "ns/iter",
            "extra": "iterations: 48306\ncpu: 17464.66691508295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 17596.987292297486,
            "unit": "ns/iter",
            "extra": "iterations: 47845\ncpu: 17596.670498484727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 45400.46954571998,
            "unit": "ns/iter",
            "extra": "iterations: 18733\ncpu: 45398.6334276409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 508425.14573459956,
            "unit": "ns/iter",
            "extra": "iterations: 1688\ncpu: 508410.13033175113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 409029.48970035266,
            "unit": "ns/iter",
            "extra": "iterations: 2136\ncpu: 409026.21722846455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 404664.01685391244,
            "unit": "ns/iter",
            "extra": "iterations: 2136\ncpu: 404663.15543071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 418990.2736842184,
            "unit": "ns/iter",
            "extra": "iterations: 2185\ncpu: 418986.08695652464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 252553.64865662664,
            "unit": "ns/iter",
            "extra": "iterations: 3387\ncpu: 252554.5320342487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 403139.21314644435,
            "unit": "ns/iter",
            "extra": "iterations: 2069\ncpu: 403131.4644755899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 365.20634315652944,
            "unit": "ns/iter",
            "extra": "iterations: 1920558\ncpu: 365.2011550809731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2057.0748802566454,
            "unit": "ns/iter",
            "extra": "iterations: 337806\ncpu: 2057.0522726061545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1589.9688118596757,
            "unit": "ns/iter",
            "extra": "iterations: 437987\ncpu: 1589.961117567424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1659.4054692760003,
            "unit": "ns/iter",
            "extra": "iterations: 421884\ncpu: 1659.4127769718602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1291.3879784029357,
            "unit": "ns/iter",
            "extra": "iterations: 544703\ncpu: 1291.364101170724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8402.100823687857,
            "unit": "ns/iter",
            "extra": "iterations: 83284\ncpu: 8402.066423322683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21258.37778463371,
            "unit": "ns/iter",
            "extra": "iterations: 32410\ncpu: 21257.985189756426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5119.5326407512575,
            "unit": "ns/iter",
            "extra": "iterations: 134954\ncpu: 5119.465151088531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5296.55873404652,
            "unit": "ns/iter",
            "extra": "iterations: 131474\ncpu: 5296.577270030544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5195.801386415172,
            "unit": "ns/iter",
            "extra": "iterations: 135313\ncpu: 5195.7018172681155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11109.652650851773,
            "unit": "ns/iter",
            "extra": "iterations: 62810\ncpu: 11109.59560579534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10040.055649119653,
            "unit": "ns/iter",
            "extra": "iterations: 69471\ncpu: 10039.951922384866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3374.9181263255014,
            "unit": "ns/iter",
            "extra": "iterations: 208382\ncpu: 3374.9037824764528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16823.97224106269,
            "unit": "ns/iter",
            "extra": "iterations: 41284\ncpu: 16811.297354907503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13548.98589176651,
            "unit": "ns/iter",
            "extra": "iterations: 52239\ncpu: 13548.777733111423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13285.96483273631,
            "unit": "ns/iter",
            "extra": "iterations: 52492\ncpu: 13286.009296654644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13886.202545599632,
            "unit": "ns/iter",
            "extra": "iterations: 49890\ncpu: 13886.2497494488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29517.373672133224,
            "unit": "ns/iter",
            "extra": "iterations: 23534\ncpu: 29517.481091187547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 109481.20238094899,
            "unit": "ns/iter",
            "extra": "iterations: 6552\ncpu: 109478.58669108704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 92073.54980296256,
            "unit": "ns/iter",
            "extra": "iterations: 7359\ncpu: 92072.72727272652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 92106.85213373,
            "unit": "ns/iter",
            "extra": "iterations: 7358\ncpu: 92105.15085621206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 93943.09365682343,
            "unit": "ns/iter",
            "extra": "iterations: 7378\ncpu: 93943.37218758617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 60966.39652893694,
            "unit": "ns/iter",
            "extra": "iterations: 11351\ncpu: 60966.57563210227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 94333.18874446994,
            "unit": "ns/iter",
            "extra": "iterations: 7232\ncpu: 94330.93196902692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3339.0311372734773,
            "unit": "ns/iter",
            "extra": "iterations: 212350\ncpu: 3338.9757475865736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16735.454514799796,
            "unit": "ns/iter",
            "extra": "iterations: 41519\ncpu: 16735.179074640695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13213.037064071128,
            "unit": "ns/iter",
            "extra": "iterations: 49320\ncpu: 13212.968369829809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13158.338899265766,
            "unit": "ns/iter",
            "extra": "iterations: 53001\ncpu: 13158.202675421191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13813.721865691929,
            "unit": "ns/iter",
            "extra": "iterations: 50019\ncpu: 13813.608828645036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28871.7711755712,
            "unit": "ns/iter",
            "extra": "iterations: 24167\ncpu: 28871.626598253944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 109206.4215624955,
            "unit": "ns/iter",
            "extra": "iterations: 6400\ncpu: 109206.81250000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 94910.23102844215,
            "unit": "ns/iter",
            "extra": "iterations: 7419\ncpu: 94909.04434560031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 93634.53561291848,
            "unit": "ns/iter",
            "extra": "iterations: 7399\ncpu: 93631.22043519547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 94391.33948977066,
            "unit": "ns/iter",
            "extra": "iterations: 7526\ncpu: 94386.07494020737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 60831.78221158178,
            "unit": "ns/iter",
            "extra": "iterations: 11277\ncpu: 60831.46226833446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 92934.53556658846,
            "unit": "ns/iter",
            "extra": "iterations: 7254\ncpu: 92931.4860766459 ns\nthreads: 1"
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
        "date": 1702488611736,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 851.5673505906674,
            "unit": "ns/iter",
            "extra": "iterations: 822606\ncpu: 851.5204119590667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12837.196619053253,
            "unit": "ns/iter",
            "extra": "iterations: 65248\ncpu: 12836.493072584599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27429.300816219515,
            "unit": "ns/iter",
            "extra": "iterations: 30384\ncpu: 27427.54739336493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 42801.34473409882,
            "unit": "ns/iter",
            "extra": "iterations: 19180\ncpu: 42799.59332638165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53949.254734147704,
            "unit": "ns/iter",
            "extra": "iterations: 14839\ncpu: 53947.3077700654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55499.92830000292,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55499.71000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 67658.75185989044,
            "unit": "ns/iter",
            "extra": "iterations: 12904\ncpu: 67652.85182889029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 78329.7912364176,
            "unit": "ns/iter",
            "extra": "iterations: 11137\ncpu: 78322.83379725234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 89535.60739599414,
            "unit": "ns/iter",
            "extra": "iterations: 9735\ncpu: 89530.54956343088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 723.8977948690456,
            "unit": "ns/iter",
            "extra": "iterations: 979579\ncpu: 723.8501437862589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 594.6192356394192,
            "unit": "ns/iter",
            "extra": "iterations: 1162488\ncpu: 594.6034711756162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 596.778534405799,
            "unit": "ns/iter",
            "extra": "iterations: 1171866\ncpu: 596.7599537831115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 602.8673320638835,
            "unit": "ns/iter",
            "extra": "iterations: 1164818\ncpu: 602.83872673671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1114.534680670841,
            "unit": "ns/iter",
            "extra": "iterations: 629241\ncpu: 1114.477282948823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5228.47816343549,
            "unit": "ns/iter",
            "extra": "iterations: 153504\ncpu: 5228.313920158438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 22884.965263690985,
            "unit": "ns/iter",
            "extra": "iterations: 35496\ncpu: 22884.49966193375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 18371.766575940837,
            "unit": "ns/iter",
            "extra": "iterations: 44824\ncpu: 18370.899518115337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 18265.18509615381,
            "unit": "ns/iter",
            "extra": "iterations: 44512\ncpu: 18264.56910496046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 18282.79671512675,
            "unit": "ns/iter",
            "extra": "iterations: 45055\ncpu: 18281.857729441777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46995.31005159145,
            "unit": "ns/iter",
            "extra": "iterations: 17639\ncpu: 46993.67877997618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 515665.53357099084,
            "unit": "ns/iter",
            "extra": "iterations: 1683\ncpu: 515650.0297088511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 428566.0024509873,
            "unit": "ns/iter",
            "extra": "iterations: 2040\ncpu: 428546.8627450974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 425501.12334150163,
            "unit": "ns/iter",
            "extra": "iterations: 2035\ncpu: 425482.7518427516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 428100.0562189013,
            "unit": "ns/iter",
            "extra": "iterations: 2010\ncpu: 428081.8407960198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 260820.68597742807,
            "unit": "ns/iter",
            "extra": "iterations: 3366\ncpu: 260812.92335115856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 419300.25233642966,
            "unit": "ns/iter",
            "extra": "iterations: 2033\ncpu: 419279.04574520426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2058420.6696428861,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 2058275.2232142866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 805858.7218883967,
            "unit": "ns/iter",
            "extra": "iterations: 1165\ncpu: 805819.2274678093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2760348.157738047,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2760244.6428571474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4834.119310985523,
            "unit": "ns/iter",
            "extra": "iterations: 165802\ncpu: 4833.964005259294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 23247.328950337702,
            "unit": "ns/iter",
            "extra": "iterations: 35440\ncpu: 23246.678893905242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 18406.428434668393,
            "unit": "ns/iter",
            "extra": "iterations: 44917\ncpu: 18406.33167842901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 18468.749843175636,
            "unit": "ns/iter",
            "extra": "iterations: 44636\ncpu: 18468.40218657579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 18264.770898107563,
            "unit": "ns/iter",
            "extra": "iterations: 45028\ncpu: 18264.24224926713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46347.047214825914,
            "unit": "ns/iter",
            "extra": "iterations: 18024\ncpu: 46344.44074567267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 530153.7767694893,
            "unit": "ns/iter",
            "extra": "iterations: 1653\ncpu: 530136.842105262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 435888.04857285175,
            "unit": "ns/iter",
            "extra": "iterations: 1997\ncpu: 435874.4616925368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 430530.72511145385,
            "unit": "ns/iter",
            "extra": "iterations: 2019\ncpu: 430517.0876671617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 432017.3053359875,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 432009.1403162055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 255808.16264706262,
            "unit": "ns/iter",
            "extra": "iterations: 3400\ncpu: 255793.7647058829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 428350.1877772102,
            "unit": "ns/iter",
            "extra": "iterations: 2029\ncpu: 428322.8684080804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2080397.2951945045,
            "unit": "ns/iter",
            "extra": "iterations: 437\ncpu: 2080346.2242562913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 818140.4226713917,
            "unit": "ns/iter",
            "extra": "iterations: 1138\ncpu: 818096.1335676612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5197.888895343795,
            "unit": "ns/iter",
            "extra": "iterations: 154917\ncpu: 5197.703286275859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 23296.692147011498,
            "unit": "ns/iter",
            "extra": "iterations: 35426\ncpu: 23295.89284706156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 18337.043470542223,
            "unit": "ns/iter",
            "extra": "iterations: 45065\ncpu: 18336.953289692603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18325.32095583458,
            "unit": "ns/iter",
            "extra": "iterations: 45782\ncpu: 18325.0010921323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 18350.236004976403,
            "unit": "ns/iter",
            "extra": "iterations: 45016\ncpu: 18349.79562822102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46844.54287790807,
            "unit": "ns/iter",
            "extra": "iterations: 17888\ncpu: 46841.96109123453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 521019.9505068404,
            "unit": "ns/iter",
            "extra": "iterations: 1677\ncpu: 520997.73404889525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 427105.45623472764,
            "unit": "ns/iter",
            "extra": "iterations: 2045\ncpu: 427089.7310513449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 426858.2353801178,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 426832.21247563674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 426667.5044031295,
            "unit": "ns/iter",
            "extra": "iterations: 2044\ncpu: 426619.27592955023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 257742.5054459715,
            "unit": "ns/iter",
            "extra": "iterations: 3397\ncpu: 257733.14689431936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 426222.8024154648,
            "unit": "ns/iter",
            "extra": "iterations: 2070\ncpu: 426197.971014495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 367.76742325945577,
            "unit": "ns/iter",
            "extra": "iterations: 1902873\ncpu: 367.753444396972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2075.233839233949,
            "unit": "ns/iter",
            "extra": "iterations: 337484\ncpu: 2075.1155610340024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1527.980553997068,
            "unit": "ns/iter",
            "extra": "iterations: 458089\ncpu: 1527.8967624195425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1579.0324328596505,
            "unit": "ns/iter",
            "extra": "iterations: 442915\ncpu: 1578.9115293002035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1289.7744231211984,
            "unit": "ns/iter",
            "extra": "iterations: 543225\ncpu: 1289.7072115605897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8429.93769046354,
            "unit": "ns/iter",
            "extra": "iterations: 83021\ncpu: 8429.756326712555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 22306.73693096685,
            "unit": "ns/iter",
            "extra": "iterations: 31391\ncpu: 22305.86792392726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5318.055459955098,
            "unit": "ns/iter",
            "extra": "iterations: 131915\ncpu: 5317.716711518747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5327.027306600302,
            "unit": "ns/iter",
            "extra": "iterations: 130701\ncpu: 5326.655496132357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5345.8310142052105,
            "unit": "ns/iter",
            "extra": "iterations: 130940\ncpu: 5345.525431495332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11122.99184817007,
            "unit": "ns/iter",
            "extra": "iterations: 63176\ncpu: 11122.424654932385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10115.789285611034,
            "unit": "ns/iter",
            "extra": "iterations: 69122\ncpu: 10115.740285292659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3461.2404927077837,
            "unit": "ns/iter",
            "extra": "iterations: 201661\ncpu: 3461.1129568930455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 17292.109656300523,
            "unit": "ns/iter",
            "extra": "iterations: 40326\ncpu: 17291.871249317974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13783.953420297965,
            "unit": "ns/iter",
            "extra": "iterations: 50902\ncpu: 13783.501630584358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13631.119993770213,
            "unit": "ns/iter",
            "extra": "iterations: 51361\ncpu: 13630.314830318715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14418.5775019601,
            "unit": "ns/iter",
            "extra": "iterations: 48502\ncpu: 14417.782771844433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30332.49582485928,
            "unit": "ns/iter",
            "extra": "iterations: 23113\ncpu: 30330.052351490656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 112697.65691788295,
            "unit": "ns/iter",
            "extra": "iterations: 6223\ncpu: 112688.62285071489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 95787.08547241936,
            "unit": "ns/iter",
            "extra": "iterations: 7324\ncpu: 95781.66302566949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 96268.43180876355,
            "unit": "ns/iter",
            "extra": "iterations: 7237\ncpu: 96266.45018654097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 96988.91852262172,
            "unit": "ns/iter",
            "extra": "iterations: 7229\ncpu: 96980.31539632073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 61734.14704324062,
            "unit": "ns/iter",
            "extra": "iterations: 11330\ncpu: 61729.03795233839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 97674.44970085159,
            "unit": "ns/iter",
            "extra": "iterations: 7187\ncpu: 97669.08306664685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3382.238434712289,
            "unit": "ns/iter",
            "extra": "iterations: 207604\ncpu: 3382.077416620109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 17008.80406438749,
            "unit": "ns/iter",
            "extra": "iterations: 41187\ncpu: 17008.026804574347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13499.995414169618,
            "unit": "ns/iter",
            "extra": "iterations: 51899\ncpu: 13498.932542052711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13412.90202520872,
            "unit": "ns/iter",
            "extra": "iterations: 52044\ncpu: 13412.841057566848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 14178.101681506932,
            "unit": "ns/iter",
            "extra": "iterations: 49301\ncpu: 14178.051155148944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29528.14500695656,
            "unit": "ns/iter",
            "extra": "iterations: 23723\ncpu: 29527.538675547177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 111770.73134566513,
            "unit": "ns/iter",
            "extra": "iterations: 6272\ncpu: 111760.15624999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 95874.68077239463,
            "unit": "ns/iter",
            "extra": "iterations: 7302\ncpu: 95867.05012325515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 94929.31797859244,
            "unit": "ns/iter",
            "extra": "iterations: 7381\ncpu: 94923.9804904484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 95060.40808574368,
            "unit": "ns/iter",
            "extra": "iterations: 7371\ncpu: 95055.22995522984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 62615.87772375352,
            "unit": "ns/iter",
            "extra": "iterations: 11106\ncpu: 62614.703763731384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 97123.66736052572,
            "unit": "ns/iter",
            "extra": "iterations: 7206\ncpu: 97115.90341382156 ns\nthreads: 1"
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
        "date": 1702490854374,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 843.3653479169171,
            "unit": "ns/iter",
            "extra": "iterations: 831621\ncpu: 843.360016161208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12378.375515942118,
            "unit": "ns/iter",
            "extra": "iterations: 66868\ncpu: 12377.989471795177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27059.630004212882,
            "unit": "ns/iter",
            "extra": "iterations: 30849\ncpu: 27059.30176018672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41011.951582499205,
            "unit": "ns/iter",
            "extra": "iterations: 20158\ncpu: 41009.48506796311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 52197.98436086419,
            "unit": "ns/iter",
            "extra": "iterations: 15474\ncpu: 52196.01266640816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 54181.76829999765,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54180.41999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 65902.01478129468,
            "unit": "ns/iter",
            "extra": "iterations: 13260\ncpu: 65898.6877828054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 76724.81305533928,
            "unit": "ns/iter",
            "extra": "iterations: 11367\ncpu: 76719.50382686722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 88222.99230457778,
            "unit": "ns/iter",
            "extra": "iterations: 9876\ncpu: 88217.20332118271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 713.3170322021487,
            "unit": "ns/iter",
            "extra": "iterations: 990647\ncpu: 712.6987716108767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 578.9071195008806,
            "unit": "ns/iter",
            "extra": "iterations: 1213807\ncpu: 578.8795912364975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 581.3113109250622,
            "unit": "ns/iter",
            "extra": "iterations: 1210237\ncpu: 581.3129163957152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 587.8133710164876,
            "unit": "ns/iter",
            "extra": "iterations: 1190276\ncpu: 587.7754403180436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1085.103945402385,
            "unit": "ns/iter",
            "extra": "iterations: 645156\ncpu: 1085.055862458072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5111.298178522741,
            "unit": "ns/iter",
            "extra": "iterations: 155588\ncpu: 5111.067048872662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23004.204357855095,
            "unit": "ns/iter",
            "extra": "iterations: 35981\ncpu: 23003.504627442228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 18418.721729811314,
            "unit": "ns/iter",
            "extra": "iterations: 44791\ncpu: 18417.662030318592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 18353.428761828534,
            "unit": "ns/iter",
            "extra": "iterations: 45018\ncpu: 18352.674485761276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 17973.008215216745,
            "unit": "ns/iter",
            "extra": "iterations: 45647\ncpu: 17972.013494862767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46737.40690041941,
            "unit": "ns/iter",
            "extra": "iterations: 17825\ncpu: 46734.945301542844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 531254.1526442544,
            "unit": "ns/iter",
            "extra": "iterations: 1664\ncpu: 531206.6105769222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 424074.92728159495,
            "unit": "ns/iter",
            "extra": "iterations: 2049\ncpu: 424048.4138604187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 421285.340765879,
            "unit": "ns/iter",
            "extra": "iterations: 2063\ncpu: 421286.1366941358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 421849.99902770726,
            "unit": "ns/iter",
            "extra": "iterations: 2057\ncpu: 421839.7666504619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 256151.8672014226,
            "unit": "ns/iter",
            "extra": "iterations: 3366\ncpu: 256150.2376708259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 422044.91416099947,
            "unit": "ns/iter",
            "extra": "iterations: 2062\ncpu: 422040.3491755584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2060347.140311787,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2060232.73942094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 817769.1740644393,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 817767.0147954733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2741954.675595116,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2741561.011904761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4904.80425711054,
            "unit": "ns/iter",
            "extra": "iterations: 161518\ncpu: 4904.788939932387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 23173.432454304446,
            "unit": "ns/iter",
            "extra": "iterations: 35835\ncpu: 23172.53802148742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 18642.1324719428,
            "unit": "ns/iter",
            "extra": "iterations: 45353\ncpu: 18642.193460189956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 18450.352849924653,
            "unit": "ns/iter",
            "extra": "iterations: 45124\ncpu: 18449.822710752665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 18091.46157659966,
            "unit": "ns/iter",
            "extra": "iterations: 46391\ncpu: 18091.526373650046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46099.89961176107,
            "unit": "ns/iter",
            "extra": "iterations: 18030\ncpu: 46099.79478646712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 531368.6392132898,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 531358.2052858042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 437274.29349999625,
            "unit": "ns/iter",
            "extra": "iterations: 2000\ncpu: 437276.65000000113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 430729.5366699686,
            "unit": "ns/iter",
            "extra": "iterations: 2018\ncpu: 430717.83944499557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 425331.9449585923,
            "unit": "ns/iter",
            "extra": "iterations: 2053\ncpu: 425333.6093521671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 254359.4379878651,
            "unit": "ns/iter",
            "extra": "iterations: 3459\ncpu: 254358.22492049666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 427165.30863594165,
            "unit": "ns/iter",
            "extra": "iterations: 2038\ncpu: 427157.1638861633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2076244.4318182557,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2076202.7272727257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 832256.2914438371,
            "unit": "ns/iter",
            "extra": "iterations: 1122\ncpu: 832244.7415329801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5347.923741842225,
            "unit": "ns/iter",
            "extra": "iterations: 156757\ncpu: 5347.825615442987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 23378.36982248455,
            "unit": "ns/iter",
            "extra": "iterations: 34814\ncpu: 23377.172976388825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 18396.68952487451,
            "unit": "ns/iter",
            "extra": "iterations: 44725\ncpu: 18396.762437115744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18068.67562586432,
            "unit": "ns/iter",
            "extra": "iterations: 45577\ncpu: 18068.258112644606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 18029.315739681566,
            "unit": "ns/iter",
            "extra": "iterations: 45452\ncpu: 18029.406846783364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46342.26599289398,
            "unit": "ns/iter",
            "extra": "iterations: 18008\ncpu: 46341.775877387874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 525161.7066342003,
            "unit": "ns/iter",
            "extra": "iterations: 1643\ncpu: 525154.8387096747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 429400.4760975706,
            "unit": "ns/iter",
            "extra": "iterations: 2050\ncpu: 429402.34146341577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 428643.54630083975,
            "unit": "ns/iter",
            "extra": "iterations: 2041\ncpu: 428631.8471337576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 420278.6573628345,
            "unit": "ns/iter",
            "extra": "iterations: 2078\ncpu: 420269.1530317606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 258874.7811950732,
            "unit": "ns/iter",
            "extra": "iterations: 3414\ncpu: 258873.43292325735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 424027.64376219927,
            "unit": "ns/iter",
            "extra": "iterations: 2052\ncpu: 424017.5925925924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 359.14751177627414,
            "unit": "ns/iter",
            "extra": "iterations: 1948197\ncpu: 359.14766319833234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2067.8931007692318,
            "unit": "ns/iter",
            "extra": "iterations: 339806\ncpu: 2067.8687250960966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1618.5723515224302,
            "unit": "ns/iter",
            "extra": "iterations: 433702\ncpu: 1618.5786553900928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1524.5356096627374,
            "unit": "ns/iter",
            "extra": "iterations: 460156\ncpu: 1524.4966924260586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1270.8750724485376,
            "unit": "ns/iter",
            "extra": "iterations: 550391\ncpu: 1270.8694364551761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8329.141435231675,
            "unit": "ns/iter",
            "extra": "iterations: 84293\ncpu: 8329.177986309664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 20200.10895009118,
            "unit": "ns/iter",
            "extra": "iterations: 34603\ncpu: 20199.612750339522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5330.0880299934315,
            "unit": "ns/iter",
            "extra": "iterations: 131228\ncpu: 5330.0385588442205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5340.658719875393,
            "unit": "ns/iter",
            "extra": "iterations: 131206\ncpu: 5340.482904745169 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5345.790010925788,
            "unit": "ns/iter",
            "extra": "iterations: 130883\ncpu: 5345.762245669833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10661.696291676451,
            "unit": "ns/iter",
            "extra": "iterations: 65744\ncpu: 10661.745558530049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10182.487930432953,
            "unit": "ns/iter",
            "extra": "iterations: 68768\ncpu: 10182.233015355849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3415.7119387333105,
            "unit": "ns/iter",
            "extra": "iterations: 205005\ncpu: 3415.7240067315065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 18857.72017749214,
            "unit": "ns/iter",
            "extra": "iterations: 40565\ncpu: 18856.141994329846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13664.240231971864,
            "unit": "ns/iter",
            "extra": "iterations: 51213\ncpu: 13664.296174799418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13514.226531281574,
            "unit": "ns/iter",
            "extra": "iterations: 51803\ncpu: 13513.989537285435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14204.773334144595,
            "unit": "ns/iter",
            "extra": "iterations: 49359\ncpu: 14204.076257622708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29713.080981438758,
            "unit": "ns/iter",
            "extra": "iterations: 23598\ncpu: 29710.83566403973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 112295.87138058062,
            "unit": "ns/iter",
            "extra": "iterations: 6251\ncpu: 112288.92977123665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 96828.67633020841,
            "unit": "ns/iter",
            "extra": "iterations: 5657\ncpu: 96821.51316952398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 94977.10542955466,
            "unit": "ns/iter",
            "extra": "iterations: 7275\ncpu: 94972.38487972559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 95035.28725879706,
            "unit": "ns/iter",
            "extra": "iterations: 7307\ncpu: 95034.17271109838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 60930.91568149909,
            "unit": "ns/iter",
            "extra": "iterations: 11504\ncpu: 60926.87760778934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 95490.91996688659,
            "unit": "ns/iter",
            "extra": "iterations: 7247\ncpu: 95481.85456050809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3398.0564658089393,
            "unit": "ns/iter",
            "extra": "iterations: 206780\ncpu: 3397.891962472194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16974.868916510466,
            "unit": "ns/iter",
            "extra": "iterations: 40951\ncpu: 16973.45363971601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13495.058712740058,
            "unit": "ns/iter",
            "extra": "iterations: 52033\ncpu: 13494.322833586326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13336.475823526009,
            "unit": "ns/iter",
            "extra": "iterations: 52427\ncpu: 13336.09208995371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13970.456331791156,
            "unit": "ns/iter",
            "extra": "iterations: 50128\ncpu: 13970.511490584176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29153.27237257247,
            "unit": "ns/iter",
            "extra": "iterations: 24092\ncpu: 29152.60252365911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 110450.60069719388,
            "unit": "ns/iter",
            "extra": "iterations: 6311\ncpu: 110445.27016320759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 94772.45905841215,
            "unit": "ns/iter",
            "extra": "iterations: 7413\ncpu: 94766.11358424394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 93900.70747027211,
            "unit": "ns/iter",
            "extra": "iterations: 7483\ncpu: 93893.98636910316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 93975.94993307012,
            "unit": "ns/iter",
            "extra": "iterations: 7470\ncpu: 93972.39625167398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 61816.36680835626,
            "unit": "ns/iter",
            "extra": "iterations: 11292\ncpu: 61815.25859015201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 95837.85758934644,
            "unit": "ns/iter",
            "extra": "iterations: 7359\ncpu: 95832.69465960111 ns\nthreads: 1"
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
        "date": 1705573937514,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 845.0462591695192,
            "unit": "ns/iter",
            "extra": "iterations: 819016\ncpu: 845.0054699786085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12399.47304350485,
            "unit": "ns/iter",
            "extra": "iterations: 66292\ncpu: 12398.898811319614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27246.895376969984,
            "unit": "ns/iter",
            "extra": "iterations: 30586\ncpu: 27246.197606748192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41726.75562248928,
            "unit": "ns/iter",
            "extra": "iterations: 19920\ncpu: 41725.4467871486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53465.65272049803,
            "unit": "ns/iter",
            "extra": "iterations: 15034\ncpu: 53463.5692430491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55236.5358999964,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55236.239999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 67049.58315334856,
            "unit": "ns/iter",
            "extra": "iterations: 12964\ncpu: 67047.16908361622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 77108.86566504657,
            "unit": "ns/iter",
            "extra": "iterations: 11315\ncpu: 77105.82412726464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 88140.0052535892,
            "unit": "ns/iter",
            "extra": "iterations: 9898\ncpu: 88136.57304505956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 707.698754979948,
            "unit": "ns/iter",
            "extra": "iterations: 987213\ncpu: 707.6707863449932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 582.818333276092,
            "unit": "ns/iter",
            "extra": "iterations: 1193851\ncpu: 582.8058107753819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 591.8795487268031,
            "unit": "ns/iter",
            "extra": "iterations: 1184205\ncpu: 591.8599397908299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 589.1974251939818,
            "unit": "ns/iter",
            "extra": "iterations: 1182458\ncpu: 589.1860006867051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1099.2943608957517,
            "unit": "ns/iter",
            "extra": "iterations: 633097\ncpu: 1099.2361360107561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5171.495612267464,
            "unit": "ns/iter",
            "extra": "iterations: 153838\ncpu: 5171.396534016306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 22304.67679727286,
            "unit": "ns/iter",
            "extra": "iterations: 37543\ncpu: 22304.381642383418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 17720.397858840144,
            "unit": "ns/iter",
            "extra": "iterations: 45863\ncpu: 17720.0532019275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 18318.477559055107,
            "unit": "ns/iter",
            "extra": "iterations: 45720\ncpu: 18317.790901137338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 17831.776001040576,
            "unit": "ns/iter",
            "extra": "iterations: 46152\ncpu: 17831.443924423642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46596.804827741646,
            "unit": "ns/iter",
            "extra": "iterations: 17938\ncpu: 46595.752034786594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 514548.8073671496,
            "unit": "ns/iter",
            "extra": "iterations: 1656\ncpu: 514522.2826086955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 414282.3403320284,
            "unit": "ns/iter",
            "extra": "iterations: 2048\ncpu: 414262.6953125006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 424828.49182692805,
            "unit": "ns/iter",
            "extra": "iterations: 2080\ncpu: 424821.49038461497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 423513.8051133701,
            "unit": "ns/iter",
            "extra": "iterations: 2073\ncpu: 423505.9334298128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 259485.3741878256,
            "unit": "ns/iter",
            "extra": "iterations: 3386\ncpu: 259476.6391021853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 417982.6627218851,
            "unit": "ns/iter",
            "extra": "iterations: 2028\ncpu: 417964.9408284027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2037596.1247215911,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2037469.933184854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 810421.9284482615,
            "unit": "ns/iter",
            "extra": "iterations: 1160\ncpu: 810340.8620689663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2731089.8828828097,
            "unit": "ns/iter",
            "extra": "iterations: 333\ncpu: 2731052.8528528525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4916.638478584243,
            "unit": "ns/iter",
            "extra": "iterations: 164715\ncpu: 4916.452660656289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 22783.008007264503,
            "unit": "ns/iter",
            "extra": "iterations: 36342\ncpu: 22782.62616256679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 18332.444250254575,
            "unit": "ns/iter",
            "extra": "iterations: 45202\ncpu: 18331.88133268443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 18406.432443880356,
            "unit": "ns/iter",
            "extra": "iterations: 44859\ncpu: 18406.192737243422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 18213.511761381833,
            "unit": "ns/iter",
            "extra": "iterations: 45998\ncpu: 18213.285360232992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 46097.68042653673,
            "unit": "ns/iter",
            "extra": "iterations: 18193\ncpu: 46097.394602319575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 528627.1358328124,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 528617.4554394617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 426642.29100788484,
            "unit": "ns/iter",
            "extra": "iterations: 2024\ncpu: 426637.20355731156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 424359.55016801273,
            "unit": "ns/iter",
            "extra": "iterations: 2083\ncpu: 424354.2486797879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 415567.6849119665,
            "unit": "ns/iter",
            "extra": "iterations: 2101\ncpu: 415557.16325559403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 248855.50043314483,
            "unit": "ns/iter",
            "extra": "iterations: 3463\ncpu: 248854.05717585923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 424027.5447075642,
            "unit": "ns/iter",
            "extra": "iterations: 2069\ncpu: 424022.1846302592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2062177.8284424748,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2062074.2663656895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 818802.0740740799,
            "unit": "ns/iter",
            "extra": "iterations: 1134\ncpu: 818782.804232807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5221.173289111399,
            "unit": "ns/iter",
            "extra": "iterations: 154072\ncpu: 5221.108312996516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 23191.100825944533,
            "unit": "ns/iter",
            "extra": "iterations: 36201\ncpu: 23190.641142509732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 18322.81927603785,
            "unit": "ns/iter",
            "extra": "iterations: 45030\ncpu: 18322.40062180773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 17886.35517360323,
            "unit": "ns/iter",
            "extra": "iterations: 46428\ncpu: 17886.04290514335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 18141.21910533314,
            "unit": "ns/iter",
            "extra": "iterations: 45380\ncpu: 18140.868223887268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 44930.86370572183,
            "unit": "ns/iter",
            "extra": "iterations: 18350\ncpu: 44928.93732970037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 517134.84772183513,
            "unit": "ns/iter",
            "extra": "iterations: 1668\ncpu: 517115.28776978434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 421184.11643835966,
            "unit": "ns/iter",
            "extra": "iterations: 2044\ncpu: 421173.8747553825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 411276.43008678715,
            "unit": "ns/iter",
            "extra": "iterations: 2074\ncpu: 411263.54869816924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 415294.7123872663,
            "unit": "ns/iter",
            "extra": "iterations: 2107\ncpu: 415281.6326530591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 252866.16406027687,
            "unit": "ns/iter",
            "extra": "iterations: 3517\ncpu: 252859.39721353326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 413492.8014492917,
            "unit": "ns/iter",
            "extra": "iterations: 2070\ncpu: 413480.33816425066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 361.2581778332652,
            "unit": "ns/iter",
            "extra": "iterations: 1930921\ncpu: 361.24667969326384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 1992.04850602952,
            "unit": "ns/iter",
            "extra": "iterations: 341071\ncpu: 1991.967654828469 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1552.2975671639313,
            "unit": "ns/iter",
            "extra": "iterations: 445365\ncpu: 1552.251524030854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1558.1898343664564,
            "unit": "ns/iter",
            "extra": "iterations: 446347\ncpu: 1558.1088256446214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1274.3878564894003,
            "unit": "ns/iter",
            "extra": "iterations: 545493\ncpu: 1274.3615408446967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8361.994068645912,
            "unit": "ns/iter",
            "extra": "iterations: 83792\ncpu: 8361.548835211086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 21680.9260751843,
            "unit": "ns/iter",
            "extra": "iterations: 31762\ncpu: 21680.498709149175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5284.41383686321,
            "unit": "ns/iter",
            "extra": "iterations: 137112\ncpu: 5284.285109983071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5295.255287729465,
            "unit": "ns/iter",
            "extra": "iterations: 130018\ncpu: 5295.066067775223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5337.192465098292,
            "unit": "ns/iter",
            "extra": "iterations: 130725\ncpu: 5337.023522662007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11092.772364757726,
            "unit": "ns/iter",
            "extra": "iterations: 63571\ncpu: 11092.33298202017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10214.918636621122,
            "unit": "ns/iter",
            "extra": "iterations: 68741\ncpu: 10214.716108290437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3535.0924529211406,
            "unit": "ns/iter",
            "extra": "iterations: 207630\ncpu: 3534.9477435823146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 17123.422689075822,
            "unit": "ns/iter",
            "extra": "iterations: 40460\ncpu: 17122.995551161788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13785.171254064038,
            "unit": "ns/iter",
            "extra": "iterations: 50755\ncpu: 13784.82317013097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13561.577744265785,
            "unit": "ns/iter",
            "extra": "iterations: 50396\ncpu: 13560.949281689276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14334.412640547102,
            "unit": "ns/iter",
            "extra": "iterations: 48827\ncpu: 14334.32936694872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 29804.425550130876,
            "unit": "ns/iter",
            "extra": "iterations: 23358\ncpu: 29803.994348830827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 111934.84608015536,
            "unit": "ns/iter",
            "extra": "iterations: 6263\ncpu: 111934.26472936397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 95259.54473648166,
            "unit": "ns/iter",
            "extra": "iterations: 7343\ncpu: 95255.19542421302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 94693.88900704667,
            "unit": "ns/iter",
            "extra": "iterations: 7523\ncpu: 94691.08068589488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 94334.16571893176,
            "unit": "ns/iter",
            "extra": "iterations: 7386\ncpu: 94332.66991605892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 60763.62516451798,
            "unit": "ns/iter",
            "extra": "iterations: 11397\ncpu: 60761.31438097804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 95780.79357484309,
            "unit": "ns/iter",
            "extra": "iterations: 7315\ncpu: 95778.66028708189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3247.337849579437,
            "unit": "ns/iter",
            "extra": "iterations: 209466\ncpu: 3247.236305653431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16552.195228541546,
            "unit": "ns/iter",
            "extra": "iterations: 41874\ncpu: 16551.841237999826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13148.893129771439,
            "unit": "ns/iter",
            "extra": "iterations: 52662\ncpu: 13148.321370247953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13013.673888570998,
            "unit": "ns/iter",
            "extra": "iterations: 54187\ncpu: 13013.425729418685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13918.583111058095,
            "unit": "ns/iter",
            "extra": "iterations: 50613\ncpu: 13918.240373026714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 28690.252043204535,
            "unit": "ns/iter",
            "extra": "iterations: 24349\ncpu: 28689.613536490106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 107624.12815475275,
            "unit": "ns/iter",
            "extra": "iterations: 6617\ncpu: 107619.91839201997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 94287.9126672962,
            "unit": "ns/iter",
            "extra": "iterations: 7397\ncpu: 94285.35892929722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 94092.55513868466,
            "unit": "ns/iter",
            "extra": "iterations: 7463\ncpu: 94091.35736299164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 93737.80980603819,
            "unit": "ns/iter",
            "extra": "iterations: 7424\ncpu: 93735.10237068948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 61517.424013358424,
            "unit": "ns/iter",
            "extra": "iterations: 11377\ncpu: 61516.55093609967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 96325.16533480477,
            "unit": "ns/iter",
            "extra": "iterations: 7258\ncpu: 96324.59355194318 ns\nthreads: 1"
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
        "date": 1705771650971,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 844.3538385603041,
            "unit": "ns/iter",
            "extra": "iterations: 834714\ncpu: 844.3568695385485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12472.755261774391,
            "unit": "ns/iter",
            "extra": "iterations: 66565\ncpu: 12472.724404717192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26993.5699584467,
            "unit": "ns/iter",
            "extra": "iterations: 30804\ncpu: 26993.74756525126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 42215.30535874563,
            "unit": "ns/iter",
            "extra": "iterations: 20042\ncpu: 42214.704121345174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 53186.02176509718,
            "unit": "ns/iter",
            "extra": "iterations: 15070\ncpu: 53184.6184472462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 55024.54859999944,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55023.64000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 66424.61249617767,
            "unit": "ns/iter",
            "extra": "iterations: 13076\ncpu: 66421.2450290609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 76802.69040852795,
            "unit": "ns/iter",
            "extra": "iterations: 11260\ncpu: 76801.05683836591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 88463.68746238454,
            "unit": "ns/iter",
            "extra": "iterations: 9970\ncpu: 88462.83851554665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 696.7855219101946,
            "unit": "ns/iter",
            "extra": "iterations: 955720\ncpu: 696.7680910726997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 586.1698919013041,
            "unit": "ns/iter",
            "extra": "iterations: 1196037\ncpu: 586.1648928921081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 586.7279452112417,
            "unit": "ns/iter",
            "extra": "iterations: 1190025\ncpu: 586.7094388773342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 592.1122506991144,
            "unit": "ns/iter",
            "extra": "iterations: 1171476\ncpu: 592.094759090242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1092.0730920504373,
            "unit": "ns/iter",
            "extra": "iterations: 641985\ncpu: 1092.0886002009413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4815.582570508639,
            "unit": "ns/iter",
            "extra": "iterations: 167142\ncpu: 4815.4018738557725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 21328.179046879886,
            "unit": "ns/iter",
            "extra": "iterations: 38610\ncpu: 21328.303548303553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 17119.489789983138,
            "unit": "ns/iter",
            "extra": "iterations: 48139\ncpu: 17118.94306072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 16268.18307658937,
            "unit": "ns/iter",
            "extra": "iterations: 46090\ncpu: 16267.591668474746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 16692.07249445182,
            "unit": "ns/iter",
            "extra": "iterations: 49121\ncpu: 16691.097493943565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 46334.8746397706,
            "unit": "ns/iter",
            "extra": "iterations: 18044\ncpu: 46334.532254489015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 512814.95291347936,
            "unit": "ns/iter",
            "extra": "iterations: 1699\ncpu: 512794.5261918779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 423558.06380906777,
            "unit": "ns/iter",
            "extra": "iterations: 2053\ncpu: 423546.22503653105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 422826.79951218906,
            "unit": "ns/iter",
            "extra": "iterations: 2050\ncpu: 422818.53658536583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 426193.2326829349,
            "unit": "ns/iter",
            "extra": "iterations: 2050\ncpu: 426183.80487804796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 257393.46872246984,
            "unit": "ns/iter",
            "extra": "iterations: 3405\ncpu: 257379.9412628488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 422908.0986809987,
            "unit": "ns/iter",
            "extra": "iterations: 2047\ncpu: 422897.65510503063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2058130.5167036818,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2057992.4276169252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 817413.9408181107,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 817388.946910356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2746194.7552239117,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2745901.7910447787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 4881.379661563478,
            "unit": "ns/iter",
            "extra": "iterations: 161212\ncpu: 4881.232786641182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 23042.97037245259,
            "unit": "ns/iter",
            "extra": "iterations: 35575\ncpu: 23042.69290231908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 18166.719702323047,
            "unit": "ns/iter",
            "extra": "iterations: 45284\ncpu: 18166.32143803552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 18294.81565891533,
            "unit": "ns/iter",
            "extra": "iterations: 45150\ncpu: 18294.68438538211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 18154.128730600278,
            "unit": "ns/iter",
            "extra": "iterations: 45234\ncpu: 18153.981518326946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 44784.690558198585,
            "unit": "ns/iter",
            "extra": "iterations: 18291\ncpu: 44784.06866765095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 536769.9280884797,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 536752.6121696387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 434204.6444554708,
            "unit": "ns/iter",
            "extra": "iterations: 2011\ncpu: 434205.17155643797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 431535.7512388969,
            "unit": "ns/iter",
            "extra": "iterations: 2018\ncpu: 431525.8176412282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 429200.01464841206,
            "unit": "ns/iter",
            "extra": "iterations: 2048\ncpu: 429189.1113281238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 254799.82827987667,
            "unit": "ns/iter",
            "extra": "iterations: 3430\ncpu: 254799.82507288657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 428374.25773199095,
            "unit": "ns/iter",
            "extra": "iterations: 2037\ncpu: 428358.5665193896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2102316.2850677664,
            "unit": "ns/iter",
            "extra": "iterations: 442\ncpu: 2102295.927601819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 821562.1562224475,
            "unit": "ns/iter",
            "extra": "iterations: 1133\ncpu: 821538.7466902048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5241.008936073322,
            "unit": "ns/iter",
            "extra": "iterations: 153535\ncpu: 5240.840850620353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 23341.200877907882,
            "unit": "ns/iter",
            "extra": "iterations: 35539\ncpu: 23340.648301865527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 18378.650251940555,
            "unit": "ns/iter",
            "extra": "iterations: 45447\ncpu: 18377.947939357968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18095.255637454655,
            "unit": "ns/iter",
            "extra": "iterations: 45721\ncpu: 18094.790140198114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 18351.799402379806,
            "unit": "ns/iter",
            "extra": "iterations: 45514\ncpu: 18351.360021092423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46177.586791417634,
            "unit": "ns/iter",
            "extra": "iterations: 18170\ncpu: 46176.00990643941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 520544.3970149346,
            "unit": "ns/iter",
            "extra": "iterations: 1675\ncpu: 520532.5970149276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 426633.4588807812,
            "unit": "ns/iter",
            "extra": "iterations: 2055\ncpu: 426182.1897810218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 426424.8985860838,
            "unit": "ns/iter",
            "extra": "iterations: 2051\ncpu: 426411.50658215437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 419872.9249616948,
            "unit": "ns/iter",
            "extra": "iterations: 1959\ncpu: 419856.76365492865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 257841.60573265227,
            "unit": "ns/iter",
            "extra": "iterations: 3419\ncpu: 257834.86399532002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 421589.835436906,
            "unit": "ns/iter",
            "extra": "iterations: 2060\ncpu: 421573.9320388375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 364.2995109429042,
            "unit": "ns/iter",
            "extra": "iterations: 1930654\ncpu: 364.2890958193458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2045.033947739446,
            "unit": "ns/iter",
            "extra": "iterations: 343204\ncpu: 2045.0393934802596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1568.984430696888,
            "unit": "ns/iter",
            "extra": "iterations: 445492\ncpu: 1569.006850852554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1477.821575587918,
            "unit": "ns/iter",
            "extra": "iterations: 472979\ncpu: 1477.7518663619205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1316.753652223801,
            "unit": "ns/iter",
            "extra": "iterations: 530088\ncpu: 1316.7177902536814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8523.225288955442,
            "unit": "ns/iter",
            "extra": "iterations: 83404\ncpu: 8522.97012133717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 22022.453694834512,
            "unit": "ns/iter",
            "extra": "iterations: 31314\ncpu: 22021.926294948156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5290.010705600048,
            "unit": "ns/iter",
            "extra": "iterations: 131987\ncpu: 5290.039170524314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5255.135356477109,
            "unit": "ns/iter",
            "extra": "iterations: 131874\ncpu: 5254.83719307829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5257.027702295051,
            "unit": "ns/iter",
            "extra": "iterations: 132480\ncpu: 5256.899909420218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 10966.335469850244,
            "unit": "ns/iter",
            "extra": "iterations: 63499\ncpu: 10966.186869084668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 9995.446402476087,
            "unit": "ns/iter",
            "extra": "iterations: 69117\ncpu: 9995.208125352583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3419.9696662306187,
            "unit": "ns/iter",
            "extra": "iterations: 204063\ncpu: 3419.8600432219164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 17164.85094664465,
            "unit": "ns/iter",
            "extra": "iterations: 40670\ncpu: 17164.1381853946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13631.481463453452,
            "unit": "ns/iter",
            "extra": "iterations: 51358\ncpu: 13631.675688305568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13361.83875924258,
            "unit": "ns/iter",
            "extra": "iterations: 52065\ncpu: 13361.907231345307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14103.614126136796,
            "unit": "ns/iter",
            "extra": "iterations: 49327\ncpu: 14103.235550509931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30106.263992376782,
            "unit": "ns/iter",
            "extra": "iterations: 23084\ncpu: 30104.825853404967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 110819.44648802598,
            "unit": "ns/iter",
            "extra": "iterations: 6307\ncpu: 110816.55303630678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 96375.95427544731,
            "unit": "ns/iter",
            "extra": "iterations: 7239\ncpu: 96368.53156513388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 95881.35011660344,
            "unit": "ns/iter",
            "extra": "iterations: 7289\ncpu: 95875.88146522002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 94983.5028009205,
            "unit": "ns/iter",
            "extra": "iterations: 7319\ncpu: 94984.91597212646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 62341.580861589806,
            "unit": "ns/iter",
            "extra": "iterations: 11328\ncpu: 62338.17090395527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 96099.09759800936,
            "unit": "ns/iter",
            "extra": "iterations: 7244\ncpu: 96096.07951407971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3307.747385193611,
            "unit": "ns/iter",
            "extra": "iterations: 210245\ncpu: 3307.5454826511764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16838.39205764103,
            "unit": "ns/iter",
            "extra": "iterations: 41499\ncpu: 16837.94549266257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13364.824195766396,
            "unit": "ns/iter",
            "extra": "iterations: 52348\ncpu: 13364.516313899412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13344.748619308699,
            "unit": "ns/iter",
            "extra": "iterations: 52872\ncpu: 13344.409139052954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 14017.880689670608,
            "unit": "ns/iter",
            "extra": "iterations: 49937\ncpu: 14017.810441155654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29144.7983917753,
            "unit": "ns/iter",
            "extra": "iterations: 24126\ncpu: 29144.785708364227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 108793.12835308764,
            "unit": "ns/iter",
            "extra": "iterations: 6412\ncpu: 108793.48097317368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 92956.21753073779,
            "unit": "ns/iter",
            "extra": "iterations: 7484\ncpu: 92952.48530197813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 92438.2259000376,
            "unit": "ns/iter",
            "extra": "iterations: 7583\ncpu: 92437.54450745111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 92694.10330688138,
            "unit": "ns/iter",
            "extra": "iterations: 7560\ncpu: 92693.57142857138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 60864.23824917148,
            "unit": "ns/iter",
            "extra": "iterations: 11446\ncpu: 60862.4235540794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 95353.26013053744,
            "unit": "ns/iter",
            "extra": "iterations: 7354\ncpu: 95354.50095186183 ns\nthreads: 1"
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
        "date": 1705772086317,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 831.7935045957087,
            "unit": "ns/iter",
            "extra": "iterations: 840348\ncpu: 831.7815952438751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12417.83953880795,
            "unit": "ns/iter",
            "extra": "iterations: 66957\ncpu: 12417.148319070446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 26752.679659930676,
            "unit": "ns/iter",
            "extra": "iterations: 31170\ncpu: 26751.81584857234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41733.49690278666,
            "unit": "ns/iter",
            "extra": "iterations: 20018\ncpu: 41731.291837346376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 55617.50919425114,
            "unit": "ns/iter",
            "extra": "iterations: 14955\ncpu: 55613.039117352026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 54754.88449999944,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54751.490000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 66053.92223820934,
            "unit": "ns/iter",
            "extra": "iterations: 13207\ncpu: 66050.54137957146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 76399.1449313884,
            "unit": "ns/iter",
            "extra": "iterations: 11295\ncpu: 76397.644975653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 88511.37295616146,
            "unit": "ns/iter",
            "extra": "iterations: 9969\ncpu: 88506.20924867078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 694.7247733153898,
            "unit": "ns/iter",
            "extra": "iterations: 1005582\ncpu: 694.6738306771608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 584.5419251996532,
            "unit": "ns/iter",
            "extra": "iterations: 1207615\ncpu: 584.5024283401575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 582.4873889246162,
            "unit": "ns/iter",
            "extra": "iterations: 1201999\ncpu: 582.4479887254482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 582.9237385592919,
            "unit": "ns/iter",
            "extra": "iterations: 1202613\ncpu: 582.9111276861313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1079.1838436744656,
            "unit": "ns/iter",
            "extra": "iterations: 645320\ncpu: 1079.1416661501264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5109.464934881959,
            "unit": "ns/iter",
            "extra": "iterations: 156024\ncpu: 5109.34856175973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23040.53937315245,
            "unit": "ns/iter",
            "extra": "iterations: 35862\ncpu: 23040.059115498294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 18460.396487303606,
            "unit": "ns/iter",
            "extra": "iterations: 44695\ncpu: 18460.176753551816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 18235.458438231057,
            "unit": "ns/iter",
            "extra": "iterations: 45282\ncpu: 18235.077955920657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 18325.365945562862,
            "unit": "ns/iter",
            "extra": "iterations: 45116\ncpu: 18324.980051423037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 47051.88887639249,
            "unit": "ns/iter",
            "extra": "iterations: 17782\ncpu: 47050.72545270506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 522797.2128683074,
            "unit": "ns/iter",
            "extra": "iterations: 1663\ncpu: 522780.8177991575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 425451.8454011577,
            "unit": "ns/iter",
            "extra": "iterations: 2044\ncpu: 425442.8082191786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 426062.48199309275,
            "unit": "ns/iter",
            "extra": "iterations: 2027\ncpu: 426046.8672915632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 426396.8156862751,
            "unit": "ns/iter",
            "extra": "iterations: 2040\ncpu: 426385.98039215605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 258421.2945246649,
            "unit": "ns/iter",
            "extra": "iterations: 3324\ncpu: 258415.52346570432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 421931.42396087834,
            "unit": "ns/iter",
            "extra": "iterations: 2045\ncpu: 421905.8190709054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2060182.9732142766,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 2060142.1875000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 816837.0731070648,
            "unit": "ns/iter",
            "extra": "iterations: 1149\ncpu: 816806.2663185365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 2744675.664670641,
            "unit": "ns/iter",
            "extra": "iterations: 334\ncpu: 2744580.8383233612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5065.246465234846,
            "unit": "ns/iter",
            "extra": "iterations: 158002\ncpu: 5065.123226288268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 23212.313339201493,
            "unit": "ns/iter",
            "extra": "iterations: 35227\ncpu: 23211.638799784356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 18310.114214107358,
            "unit": "ns/iter",
            "extra": "iterations: 44688\ncpu: 18309.8975116363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 18389.754148186716,
            "unit": "ns/iter",
            "extra": "iterations: 44417\ncpu: 18389.546795146012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 18233.52582233074,
            "unit": "ns/iter",
            "extra": "iterations: 44690\ncpu: 18233.110315506783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 45974.56667222649,
            "unit": "ns/iter",
            "extra": "iterations: 17991\ncpu: 45973.175476627126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 534031.4139620462,
            "unit": "ns/iter",
            "extra": "iterations: 1633\ncpu: 534019.4121249247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 434180.2493802774,
            "unit": "ns/iter",
            "extra": "iterations: 2017\ncpu: 434163.9563708463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 427937.9560059328,
            "unit": "ns/iter",
            "extra": "iterations: 2023\ncpu: 427928.67029164627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 427680.61849147576,
            "unit": "ns/iter",
            "extra": "iterations: 2055\ncpu: 427668.02919707965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 268188.8739079843,
            "unit": "ns/iter",
            "extra": "iterations: 3434\ncpu: 268174.0535818275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 429081.91167810163,
            "unit": "ns/iter",
            "extra": "iterations: 2038\ncpu: 429077.33071638935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2080750.7795454555,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2080657.7272727238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 819202.7816593862,
            "unit": "ns/iter",
            "extra": "iterations: 1145\ncpu: 819179.1266375529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5193.376573250476,
            "unit": "ns/iter",
            "extra": "iterations: 154934\ncpu: 5193.251319916845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 23383.232550887045,
            "unit": "ns/iter",
            "extra": "iterations: 35274\ncpu: 23381.62102398369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 18418.07444268377,
            "unit": "ns/iter",
            "extra": "iterations: 44813\ncpu: 18417.67790596484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18078.14055441132,
            "unit": "ns/iter",
            "extra": "iterations: 45598\ncpu: 18077.72051405765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 18051.07275552056,
            "unit": "ns/iter",
            "extra": "iterations: 45701\ncpu: 18050.71661451622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 46851.674073658905,
            "unit": "ns/iter",
            "extra": "iterations: 17866\ncpu: 46848.96451360141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 518908.75851760875,
            "unit": "ns/iter",
            "extra": "iterations: 1673\ncpu: 518887.26838015596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 429454.4341654268,
            "unit": "ns/iter",
            "extra": "iterations: 2043\ncpu: 429439.20704845677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 425823.9092692413,
            "unit": "ns/iter",
            "extra": "iterations: 2039\ncpu: 425814.1245708674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 425868.4855351993,
            "unit": "ns/iter",
            "extra": "iterations: 2074\ncpu: 425855.78592092666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 256758.63227126564,
            "unit": "ns/iter",
            "extra": "iterations: 3421\ncpu: 256748.99152294736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 424386.2243125989,
            "unit": "ns/iter",
            "extra": "iterations: 2073\ncpu: 424377.80993728846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 361.7390208328289,
            "unit": "ns/iter",
            "extra": "iterations: 1930702\ncpu: 361.73096624957884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2065.7936113197043,
            "unit": "ns/iter",
            "extra": "iterations: 336971\ncpu: 2065.753432787996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1626.8585219388558,
            "unit": "ns/iter",
            "extra": "iterations: 427303\ncpu: 1626.8018244664768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1568.7372696959164,
            "unit": "ns/iter",
            "extra": "iterations: 445335\ncpu: 1568.6833507359588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1271.5573761562969,
            "unit": "ns/iter",
            "extra": "iterations: 550856\ncpu: 1271.4782084610208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 8716.157531475415,
            "unit": "ns/iter",
            "extra": "iterations: 84034\ncpu: 8715.50324868501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 22089.525241371146,
            "unit": "ns/iter",
            "extra": "iterations: 31694\ncpu: 22088.08291790235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 5326.05136277925,
            "unit": "ns/iter",
            "extra": "iterations: 131496\ncpu: 5325.639563180591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 5349.785307199639,
            "unit": "ns/iter",
            "extra": "iterations: 131071\ncpu: 5349.731824736227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 5348.577288293251,
            "unit": "ns/iter",
            "extra": "iterations: 131113\ncpu: 5348.222525607702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 11218.874345382153,
            "unit": "ns/iter",
            "extra": "iterations: 62632\ncpu: 11218.017946097942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 10157.915950582927,
            "unit": "ns/iter",
            "extra": "iterations: 69126\ncpu: 10157.221595347568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3450.016047734248,
            "unit": "ns/iter",
            "extra": "iterations: 202957\ncpu: 3449.7494543178545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 17115.644281345456,
            "unit": "ns/iter",
            "extra": "iterations: 40875\ncpu: 17115.290519877846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13633.291344562098,
            "unit": "ns/iter",
            "extra": "iterations: 51355\ncpu: 13633.036705286637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13494.381389506774,
            "unit": "ns/iter",
            "extra": "iterations: 51745\ncpu: 13493.873804232238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14122.249501921795,
            "unit": "ns/iter",
            "extra": "iterations: 49691\ncpu: 14121.611559437366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30063.418615627903,
            "unit": "ns/iter",
            "extra": "iterations: 23303\ncpu: 30062.77303351487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 111618.54843327368,
            "unit": "ns/iter",
            "extra": "iterations: 6287\ncpu: 111614.21981867451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 96235.31228504035,
            "unit": "ns/iter",
            "extra": "iterations: 7269\ncpu: 96232.01265648678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 95743.83442712185,
            "unit": "ns/iter",
            "extra": "iterations: 7314\ncpu: 95742.67158873407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 95683.02391363692,
            "unit": "ns/iter",
            "extra": "iterations: 7318\ncpu: 95679.69390543964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 61387.03935834082,
            "unit": "ns/iter",
            "extra": "iterations: 11408\ncpu: 61385.75561009831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 97041.65332964204,
            "unit": "ns/iter",
            "extra": "iterations: 7223\ncpu: 97038.88965803602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3344.222603802999,
            "unit": "ns/iter",
            "extra": "iterations: 209363\ncpu: 3344.117633010561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16800.334262306278,
            "unit": "ns/iter",
            "extra": "iterations: 41623\ncpu: 16799.45222593284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13316.214893818817,
            "unit": "ns/iter",
            "extra": "iterations: 52505\ncpu: 13315.40424721466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13277.046756793115,
            "unit": "ns/iter",
            "extra": "iterations: 52741\ncpu: 13276.172237917239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13896.594888774152,
            "unit": "ns/iter",
            "extra": "iterations: 50438\ncpu: 13895.991117807942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 29345.586710908265,
            "unit": "ns/iter",
            "extra": "iterations: 23809\ncpu: 29344.420177243803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 109929.1617161744,
            "unit": "ns/iter",
            "extra": "iterations: 6363\ncpu: 109923.21232123177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 94365.42116630787,
            "unit": "ns/iter",
            "extra": "iterations: 7408\ncpu: 94364.33585313139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 93850.46948608563,
            "unit": "ns/iter",
            "extra": "iterations: 7472\ncpu: 93844.9812633823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 93865.72187206466,
            "unit": "ns/iter",
            "extra": "iterations: 7457\ncpu: 93859.15247418494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 61733.820003527835,
            "unit": "ns/iter",
            "extra": "iterations: 11328\ncpu: 61731.1440677962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 94946.02131730037,
            "unit": "ns/iter",
            "extra": "iterations: 7318\ncpu: 94938.97239682966 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}