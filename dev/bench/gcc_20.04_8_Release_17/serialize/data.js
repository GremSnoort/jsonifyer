window.BENCHMARK_DATA = {
  "lastUpdate": 1702409127193,
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
      }
    ]
  }
}