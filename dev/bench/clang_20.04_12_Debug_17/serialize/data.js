window.BENCHMARK_DATA = {
  "lastUpdate": 1705957844874,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize clang-12 20.04 Debug c++-17": [
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
        "date": 1702489577263,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7918.912984379176,
            "unit": "ns/iter",
            "extra": "iterations: 88283\ncpu: 7918.376131305009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71506.80824568456,
            "unit": "ns/iter",
            "extra": "iterations: 11885\ncpu: 71504.82120319731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 137171.34661666147,
            "unit": "ns/iter",
            "extra": "iterations: 6399\ncpu: 137166.93233317704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 201325.54954744692,
            "unit": "ns/iter",
            "extra": "iterations: 4309\ncpu: 201319.16918078443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 267390.98347364855,
            "unit": "ns/iter",
            "extra": "iterations: 3207\ncpu: 267383.0994699094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 328667.94223413133,
            "unit": "ns/iter",
            "extra": "iterations: 2614\ncpu: 328646.4039785769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 393355.49909912667,
            "unit": "ns/iter",
            "extra": "iterations: 2220\ncpu: 393317.61261261284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 454730.0706067038,
            "unit": "ns/iter",
            "extra": "iterations: 1912\ncpu: 454727.35355648526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 518475.63549734844,
            "unit": "ns/iter",
            "extra": "iterations: 1679\ncpu: 518458.6658725431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5774.235704473757,
            "unit": "ns/iter",
            "extra": "iterations: 120842\ncpu: 5774.103374654511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4896.673479944511,
            "unit": "ns/iter",
            "extra": "iterations: 143054\ncpu: 4896.557943154322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4865.286945163225,
            "unit": "ns/iter",
            "extra": "iterations: 143916\ncpu: 4865.036549098082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4926.94221165419,
            "unit": "ns/iter",
            "extra": "iterations: 142572\ncpu: 4926.4897735880895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8367.954760280678,
            "unit": "ns/iter",
            "extra": "iterations: 83577\ncpu: 8367.804539526423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29230.407593760985,
            "unit": "ns/iter",
            "extra": "iterations: 28023\ncpu: 29229.672055097646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 120822.41567964508,
            "unit": "ns/iter",
            "extra": "iterations: 7092\ncpu: 120819.75465313057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 98657.25687543942,
            "unit": "ns/iter",
            "extra": "iterations: 8654\ncpu: 98652.86572683144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 97143.27692483677,
            "unit": "ns/iter",
            "extra": "iterations: 8793\ncpu: 97139.6792903444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 97104.2818388075,
            "unit": "ns/iter",
            "extra": "iterations: 8810\ncpu: 97101.62315550537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 251880.4085278196,
            "unit": "ns/iter",
            "extra": "iterations: 3471\ncpu: 251870.87294727704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2122450.5456618867,
            "unit": "ns/iter",
            "extra": "iterations: 438\ncpu: 2122336.07305936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1734189.1567164212,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1734134.1417910499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1703130.3926604353,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1703073.2110091713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1705308.9945255101,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1705276.8248175161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1008664.7499999503,
            "unit": "ns/iter",
            "extra": "iterations: 920\ncpu: 1008634.2391304325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1668358.8545780184,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1668329.9820466796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6875642.600000447,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6874946.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3984852.682203085,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3984723.7288135593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8592394.653542968,
            "unit": "ns/iter",
            "extra": "iterations: 127\ncpu: 8592027.55905512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29284.331800192173,
            "unit": "ns/iter",
            "extra": "iterations: 28047\ncpu: 29283.399294042152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 122573.13866934871,
            "unit": "ns/iter",
            "extra": "iterations: 6959\ncpu: 122568.90357810081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 98993.97747431647,
            "unit": "ns/iter",
            "extra": "iterations: 8568\ncpu: 98991.65499533132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 100668.20441403038,
            "unit": "ns/iter",
            "extra": "iterations: 8473\ncpu: 100665.26613950217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100434.07662475418,
            "unit": "ns/iter",
            "extra": "iterations: 8509\ncpu: 100434.46938535635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 251837.2282734724,
            "unit": "ns/iter",
            "extra": "iterations: 3452\ncpu: 251833.8064889923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2129434.224256229,
            "unit": "ns/iter",
            "extra": "iterations: 437\ncpu: 2129362.7002288345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1745323.904672991,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1745267.2897196242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1711518.6587155245,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1711497.0642201959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1709127.7297793415,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1709095.9558823507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1003861.9934853559,
            "unit": "ns/iter",
            "extra": "iterations: 921\ncpu: 1003814.5494028227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1669436.2146691887,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1669404.1144901586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6889932.000000272,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6889719.999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3816829.391836777,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3816731.8367346833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28756.877877035786,
            "unit": "ns/iter",
            "extra": "iterations: 28545\ncpu: 28755.396741986406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 120028.57745291071,
            "unit": "ns/iter",
            "extra": "iterations: 7114\ncpu: 120025.695811076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 98411.4769373777,
            "unit": "ns/iter",
            "extra": "iterations: 8607\ncpu: 98409.56198443082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 97241.57748404813,
            "unit": "ns/iter",
            "extra": "iterations: 8776\ncpu: 97238.90154968131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 97277.88581236242,
            "unit": "ns/iter",
            "extra": "iterations: 8740\ncpu: 97273.91304347856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 250597.65476536177,
            "unit": "ns/iter",
            "extra": "iterations: 3473\ncpu: 250592.31212208612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2132123.877272689,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2132057.045454548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1731723.9217876268,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1731704.655493486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1709638.348623839,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1709712.293577971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1710390.6220183175,
            "unit": "ns/iter",
            "extra": "iterations: 545\ncpu: 1710405.8715596313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1032728.8483206354,
            "unit": "ns/iter",
            "extra": "iterations: 923\ncpu: 1032663.488624048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1668521.9212880943,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1668488.7298747667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3046.0297429260954,
            "unit": "ns/iter",
            "extra": "iterations: 230206\ncpu: 3045.884555571984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15078.306412380169,
            "unit": "ns/iter",
            "extra": "iterations: 46457\ncpu: 15078.121703941266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12239.295304942458,
            "unit": "ns/iter",
            "extra": "iterations: 57273\ncpu: 12238.705847432544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11793.111586897121,
            "unit": "ns/iter",
            "extra": "iterations: 59317\ncpu: 11792.754185140833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10029.506729484923,
            "unit": "ns/iter",
            "extra": "iterations: 69619\ncpu: 10029.089759979313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 58795.07700066479,
            "unit": "ns/iter",
            "extra": "iterations: 11896\ncpu: 58794.39307330217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 137707.82486761335,
            "unit": "ns/iter",
            "extra": "iterations: 5099\ncpu: 137709.6881741512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35586.18246361054,
            "unit": "ns/iter",
            "extra": "iterations: 19719\ncpu: 35586.11491454961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35431.81081354718,
            "unit": "ns/iter",
            "extra": "iterations: 19753\ncpu: 35431.4787627195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35874.6367604729,
            "unit": "ns/iter",
            "extra": "iterations: 19472\ncpu: 35873.03307313094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 71741.40716044459,
            "unit": "ns/iter",
            "extra": "iterations: 9748\ncpu: 71742.00861715204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 64256.77238909167,
            "unit": "ns/iter",
            "extra": "iterations: 10887\ncpu: 64252.56728207965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19799.866128393518,
            "unit": "ns/iter",
            "extra": "iterations: 35422\ncpu: 19799.635819547115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 95181.25489928974,
            "unit": "ns/iter",
            "extra": "iterations: 7348\ncpu: 95178.36145889966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75892.97402597619,
            "unit": "ns/iter",
            "extra": "iterations: 9240\ncpu: 75890.00000000063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75017.8906986713,
            "unit": "ns/iter",
            "extra": "iterations: 9332\ncpu: 75018.39905700763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 76485.88170518108,
            "unit": "ns/iter",
            "extra": "iterations: 9172\ncpu: 76483.49324029677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 145515.2785729042,
            "unit": "ns/iter",
            "extra": "iterations: 4821\ncpu: 145513.50342252542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 595995.023809511,
            "unit": "ns/iter",
            "extra": "iterations: 1176\ncpu: 595972.108843538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 508416.2219795898,
            "unit": "ns/iter",
            "extra": "iterations: 1374\ncpu: 508399.8544396001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 504716.6416184739,
            "unit": "ns/iter",
            "extra": "iterations: 1384\ncpu: 504720.15895953844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 509663.5105608615,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 509650.8375819385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 326507.28158504877,
            "unit": "ns/iter",
            "extra": "iterations: 2145\ncpu: 326501.8648018624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 494839.26572436874,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 494827.4911660824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19597.407955053557,
            "unit": "ns/iter",
            "extra": "iterations: 35776\ncpu: 19597.311046511943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93880.336419746,
            "unit": "ns/iter",
            "extra": "iterations: 7452\ncpu: 93877.54965109966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 75373.32113162342,
            "unit": "ns/iter",
            "extra": "iterations: 9261\ncpu: 75370.98585465905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 74860.82126067433,
            "unit": "ns/iter",
            "extra": "iterations: 9360\ncpu: 74858.48290598382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 76242.93457233436,
            "unit": "ns/iter",
            "extra": "iterations: 9201\ncpu: 76242.2562764914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 142427.4210419452,
            "unit": "ns/iter",
            "extra": "iterations: 4933\ncpu: 142426.57612000752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 596820.322800999,
            "unit": "ns/iter",
            "extra": "iterations: 1171\ncpu: 596801.1955593505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 505622.2802316855,
            "unit": "ns/iter",
            "extra": "iterations: 1381\ncpu: 505611.2961621957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 507952.8272858954,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 507919.6661828779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 505799.2342276675,
            "unit": "ns/iter",
            "extra": "iterations: 1379\ncpu: 505788.8324873119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 328834.79934364185,
            "unit": "ns/iter",
            "extra": "iterations: 2133\ncpu: 328833.80215658713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 496393.3144073473,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 496370.12065294915 ns\nthreads: 1"
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
        "date": 1702492213580,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7688.167148177751,
            "unit": "ns/iter",
            "extra": "iterations: 91033\ncpu: 7688.251513187527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 69165.05833056373,
            "unit": "ns/iter",
            "extra": "iterations: 12052\ncpu: 69164.19681380683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 132073.68403564123,
            "unit": "ns/iter",
            "extra": "iterations: 6621\ncpu: 132072.45129134576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 194105.47437904458,
            "unit": "ns/iter",
            "extra": "iterations: 4469\ncpu: 194097.11344819874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 259917.44711539865,
            "unit": "ns/iter",
            "extra": "iterations: 3328\ncpu: 259916.19591346147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 316421.6616513999,
            "unit": "ns/iter",
            "extra": "iterations: 2725\ncpu: 316409.7981651377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 377669.85206071066,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 377658.78524945764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 438797.1111111251,
            "unit": "ns/iter",
            "extra": "iterations: 1980\ncpu: 438770.8080808079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 501093.28407787555,
            "unit": "ns/iter",
            "extra": "iterations: 1746\ncpu: 500109.96563573956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5687.370120297534,
            "unit": "ns/iter",
            "extra": "iterations: 122779\ncpu: 5687.27388234144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4853.433084854816,
            "unit": "ns/iter",
            "extra": "iterations: 143540\ncpu: 4853.35516232409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4821.054635386149,
            "unit": "ns/iter",
            "extra": "iterations: 145565\ncpu: 4820.9741352660285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4860.956699414991,
            "unit": "ns/iter",
            "extra": "iterations: 142908\ncpu: 4860.928709379452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8418.37736053398,
            "unit": "ns/iter",
            "extra": "iterations: 83085\ncpu: 8418.41006198472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 28928.487921853284,
            "unit": "ns/iter",
            "extra": "iterations: 28357\ncpu: 28928.79359593752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 117917.19784172569,
            "unit": "ns/iter",
            "extra": "iterations: 7228\ncpu: 117918.45600442718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 98486.7080132929,
            "unit": "ns/iter",
            "extra": "iterations: 8723\ncpu: 98487.14891665697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 96376.28246424075,
            "unit": "ns/iter",
            "extra": "iterations: 8879\ncpu: 96375.93197432131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 96856.5511935635,
            "unit": "ns/iter",
            "extra": "iterations: 8839\ncpu: 96856.01312365662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 259247.7757901029,
            "unit": "ns/iter",
            "extra": "iterations: 3354\ncpu: 259247.52534287408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2026320.7702408747,
            "unit": "ns/iter",
            "extra": "iterations: 457\ncpu: 2026317.2866520737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1674783.7553570631,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1674776.6071428582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1642462.0458553957,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1642468.0776014128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1662253.7689593385,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1662271.9576719557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1002518.9083064534,
            "unit": "ns/iter",
            "extra": "iterations: 927\ncpu: 1002523.7324703356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1617845.4877622337,
            "unit": "ns/iter",
            "extra": "iterations: 572\ncpu: 1617824.825174826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6738241.1799997045,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6738093.0000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3824134.048979468,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3824152.653061234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8687405.393700607,
            "unit": "ns/iter",
            "extra": "iterations: 127\ncpu: 8687326.771653544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29104.421314603598,
            "unit": "ns/iter",
            "extra": "iterations: 28328\ncpu: 29104.225501270874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 117978.69591779154,
            "unit": "ns/iter",
            "extra": "iterations: 7202\ncpu: 117979.32518744802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 98600.25991902764,
            "unit": "ns/iter",
            "extra": "iterations: 8645\ncpu: 98597.6402544823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 98697.96104046823,
            "unit": "ns/iter",
            "extra": "iterations: 8650\ncpu: 98694.034682081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 99546.78458103166,
            "unit": "ns/iter",
            "extra": "iterations: 8509\ncpu: 99544.9759078619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 263725.3391119465,
            "unit": "ns/iter",
            "extra": "iterations: 3288\ncpu: 263719.3126520682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2048543.299559348,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2048515.418502198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1668438.933213015,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1668443.5018050598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1657703.8464287089,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1657706.7857142857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1663198.1479500404,
            "unit": "ns/iter",
            "extra": "iterations: 561\ncpu: 1663217.4688057026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 999350.3851132081,
            "unit": "ns/iter",
            "extra": "iterations: 927\ncpu: 999354.6925566351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1617955.9289428832,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1617959.7920277247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6715970.940000488,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6715792.999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3907954.3833328974,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3907899.1666666656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 27990.767833806283,
            "unit": "ns/iter",
            "extra": "iterations: 29074\ncpu: 27990.850932104273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 117617.35562106504,
            "unit": "ns/iter",
            "extra": "iterations: 7463\ncpu: 117616.80289427907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 98674.34751362939,
            "unit": "ns/iter",
            "extra": "iterations: 8627\ncpu: 98673.47861365486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 95955.43181304778,
            "unit": "ns/iter",
            "extra": "iterations: 8858\ncpu: 95956.45743960269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 97464.58408597877,
            "unit": "ns/iter",
            "extra": "iterations: 8747\ncpu: 97464.44495255455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 257092.07534854018,
            "unit": "ns/iter",
            "extra": "iterations: 3371\ncpu: 257092.88045090606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2020228.532608539,
            "unit": "ns/iter",
            "extra": "iterations: 460\ncpu: 2020192.1739130374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1677035.6978416631,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1677005.0359712297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1636624.8456141588,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1636598.0701754412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1660760.4849559318,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1660696.2831858392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 992800.2255639442,
            "unit": "ns/iter",
            "extra": "iterations: 931\ncpu: 992769.9248120302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1617565.3812826073,
            "unit": "ns/iter",
            "extra": "iterations: 577\ncpu: 1617527.383015601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3039.9906206753,
            "unit": "ns/iter",
            "extra": "iterations: 230507\ncpu: 3039.883387489328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14632.490973212733,
            "unit": "ns/iter",
            "extra": "iterations: 47636\ncpu: 14631.9569233352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11714.965558234106,
            "unit": "ns/iter",
            "extra": "iterations: 59724\ncpu: 11714.784676177083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11865.525256374314,
            "unit": "ns/iter",
            "extra": "iterations: 60361\ncpu: 11865.565514156575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9761.44571668478,
            "unit": "ns/iter",
            "extra": "iterations: 71440\ncpu: 9761.339585666312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 60993.74437859672,
            "unit": "ns/iter",
            "extra": "iterations: 11474\ncpu: 60991.99930277147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 133551.51487414978,
            "unit": "ns/iter",
            "extra": "iterations: 5244\ncpu: 133547.44469870368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 34791.490324189224,
            "unit": "ns/iter",
            "extra": "iterations: 20050\ncpu: 34790.42394014951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 34364.93132795252,
            "unit": "ns/iter",
            "extra": "iterations: 20445\ncpu: 34364.27488383458 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 34491.16202331384,
            "unit": "ns/iter",
            "extra": "iterations: 20244\ncpu: 34489.977277217884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 70427.88497888189,
            "unit": "ns/iter",
            "extra": "iterations: 9946\ncpu: 70425.32676452845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 62584.92939701314,
            "unit": "ns/iter",
            "extra": "iterations: 11161\ncpu: 62582.87787832621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19352.13232775263,
            "unit": "ns/iter",
            "extra": "iterations: 36198\ncpu: 19352.19072876958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 95276.4305034792,
            "unit": "ns/iter",
            "extra": "iterations: 7468\ncpu: 95276.70058918007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75357.89276834283,
            "unit": "ns/iter",
            "extra": "iterations: 9251\ncpu: 75358.08020754566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 74909.98203016061,
            "unit": "ns/iter",
            "extra": "iterations: 9349\ncpu: 74908.76029521873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75647.5784971903,
            "unit": "ns/iter",
            "extra": "iterations: 9236\ncpu: 75646.56777825805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 147952.38633961012,
            "unit": "ns/iter",
            "extra": "iterations: 4729\ncpu: 147952.48466906356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 584960.0953176809,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 584966.6387959783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 493634.6213313885,
            "unit": "ns/iter",
            "extra": "iterations: 1397\ncpu: 493631.56764495466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 494670.71619715105,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 494661.1267605661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 501362.050932556,
            "unit": "ns/iter",
            "extra": "iterations: 1394\ncpu: 501358.1061692974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 328118.17299579625,
            "unit": "ns/iter",
            "extra": "iterations: 2133\ncpu: 328116.9245194568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 488475.85195526766,
            "unit": "ns/iter",
            "extra": "iterations: 1432\ncpu: 488477.0949720708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19397.756340678556,
            "unit": "ns/iter",
            "extra": "iterations: 36116\ncpu: 19397.62155277436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 94499.13855748954,
            "unit": "ns/iter",
            "extra": "iterations: 7376\ncpu: 94498.8476138829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 76769.05060662239,
            "unit": "ns/iter",
            "extra": "iterations: 9149\ncpu: 76769.96393048394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 74545.82956595995,
            "unit": "ns/iter",
            "extra": "iterations: 9423\ncpu: 74545.28281863655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75854.0429053656,
            "unit": "ns/iter",
            "extra": "iterations: 9183\ncpu: 75854.30687139306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 147278.0926860125,
            "unit": "ns/iter",
            "extra": "iterations: 4758\ncpu: 147277.0701975613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 581335.4407345263,
            "unit": "ns/iter",
            "extra": "iterations: 1198\ncpu: 581330.4674457449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 493333.7824238301,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 493339.33380581724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 490521.2356642697,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 490519.16083916416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 494636.631914955,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 494641.41843971267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 327673.4981325786,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 327678.52474323247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 485964.8238557422,
            "unit": "ns/iter",
            "extra": "iterations: 1442\ncpu: 485962.27461857744 ns\nthreads: 1"
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
        "date": 1702503247600,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7609.926633110357,
            "unit": "ns/iter",
            "extra": "iterations: 92385\ncpu: 7609.821940791254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71462.22043733929,
            "unit": "ns/iter",
            "extra": "iterations: 11890\ncpu: 71458.63751051303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 137230.44662480048,
            "unit": "ns/iter",
            "extra": "iterations: 6370\ncpu: 137223.5164835165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 202972.1413575897,
            "unit": "ns/iter",
            "extra": "iterations: 4287\ncpu: 202965.85024492652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 268564.20161038137,
            "unit": "ns/iter",
            "extra": "iterations: 3229\ncpu: 268557.88169711997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 329964.44952013553,
            "unit": "ns/iter",
            "extra": "iterations: 2605\ncpu: 329952.7063339732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 394705.0431230054,
            "unit": "ns/iter",
            "extra": "iterations: 2203\ncpu: 394681.6613708579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 456337.96067121875,
            "unit": "ns/iter",
            "extra": "iterations: 1907\ncpu: 456304.8243314103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 520994.3136200501,
            "unit": "ns/iter",
            "extra": "iterations: 1674\ncpu: 520970.0119474311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5673.413929137406,
            "unit": "ns/iter",
            "extra": "iterations: 123195\ncpu: 5672.852794350429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4895.730750656661,
            "unit": "ns/iter",
            "extra": "iterations: 142875\ncpu: 4895.66614173228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4829.374749568156,
            "unit": "ns/iter",
            "extra": "iterations: 144750\ncpu: 4829.302936096726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4888.185336248571,
            "unit": "ns/iter",
            "extra": "iterations: 143183\ncpu: 4887.787656355856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8455.817539288602,
            "unit": "ns/iter",
            "extra": "iterations: 82911\ncpu: 8455.323177865417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29174.623142442506,
            "unit": "ns/iter",
            "extra": "iterations: 28061\ncpu: 29171.92188446598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 121568.65673556851,
            "unit": "ns/iter",
            "extra": "iterations: 7015\ncpu: 121563.74910905198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 99429.27771307979,
            "unit": "ns/iter",
            "extra": "iterations: 8588\ncpu: 99424.41779226832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 98184.19547750989,
            "unit": "ns/iter",
            "extra": "iterations: 8712\ncpu: 98180.40633608808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 97328.31867125827,
            "unit": "ns/iter",
            "extra": "iterations: 8730\ncpu: 97326.84994272632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 252811.55065310732,
            "unit": "ns/iter",
            "extra": "iterations: 3445\ncpu: 252802.4963715538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2091939.6202247443,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 2091860.2247191034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1742054.12523368,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1741952.897196262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1708572.1444241502,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1708472.394881171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1752616.3611111972,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1752525.9259259242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1036412.2689732825,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 1036377.5669642821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1678889.5298372284,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1678848.4629294788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6987949.250000156,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6987790.999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4049238.185344436,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4049150.431034487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8862112.161290454,
            "unit": "ns/iter",
            "extra": "iterations: 124\ncpu: 8861783.870967727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29035.856611658335,
            "unit": "ns/iter",
            "extra": "iterations: 28238\ncpu: 29035.052057511177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 122042.83766418559,
            "unit": "ns/iter",
            "extra": "iterations: 7004\ncpu: 122036.62193032588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 98719.03163750752,
            "unit": "ns/iter",
            "extra": "iterations: 8629\ncpu: 98714.57874608872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 100653.65318872225,
            "unit": "ns/iter",
            "extra": "iterations: 8483\ncpu: 100645.3259460094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100144.42437712477,
            "unit": "ns/iter",
            "extra": "iterations: 8549\ncpu: 100141.75927009029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 256951.3654867387,
            "unit": "ns/iter",
            "extra": "iterations: 3390\ncpu: 256934.77876106184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2106490.119909492,
            "unit": "ns/iter",
            "extra": "iterations: 442\ncpu: 2106448.642533942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1747261.1289719264,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1747193.4579439345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1718238.0128912292,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1718182.8729281777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1739477.1644858678,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1739415.88785047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1026963.3766666984,
            "unit": "ns/iter",
            "extra": "iterations: 900\ncpu: 1026942.4444444455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1677776.2282608687,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1677733.5144927457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7015044.329999682,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7014786.000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3852708.5950416084,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3852533.4710743874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28492.57383627387,
            "unit": "ns/iter",
            "extra": "iterations: 28658\ncpu: 28491.65329052979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 121646.76539006247,
            "unit": "ns/iter",
            "extra": "iterations: 7050\ncpu: 121638.82269503502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 98636.6789908182,
            "unit": "ns/iter",
            "extra": "iterations: 8601\ncpu: 98635.29822113753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 97548.14044495161,
            "unit": "ns/iter",
            "extra": "iterations: 8765\ncpu: 97544.22133485503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 96948.74265956457,
            "unit": "ns/iter",
            "extra": "iterations: 8821\ncpu: 96941.74129917244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 256100.45986475007,
            "unit": "ns/iter",
            "extra": "iterations: 3401\ncpu: 256087.06262863975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2083214.7638887793,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2083132.8703703764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1733239.6242991479,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1733107.1028037397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1706475.0658135389,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1706364.8994515615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1731861.814471295,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1731727.2727272662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1026070.0319382835,
            "unit": "ns/iter",
            "extra": "iterations: 908\ncpu: 1026054.7356828221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1678204.098566328,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1677626.344086021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3030.1502074577343,
            "unit": "ns/iter",
            "extra": "iterations: 231613\ncpu: 3030.0389010979484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14983.119805186861,
            "unit": "ns/iter",
            "extra": "iterations: 46609\ncpu: 14982.898152717256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11502.431048922443,
            "unit": "ns/iter",
            "extra": "iterations: 60891\ncpu: 11502.200653626996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11279.929823993045,
            "unit": "ns/iter",
            "extra": "iterations: 61816\ncpu: 11279.786786592536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9870.423575238228,
            "unit": "ns/iter",
            "extra": "iterations: 70854\ncpu: 9870.250091737933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 59286.06064713196,
            "unit": "ns/iter",
            "extra": "iterations: 11806\ncpu: 59284.84668812452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 135963.66065193946,
            "unit": "ns/iter",
            "extra": "iterations: 5154\ncpu: 135957.68335273612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35381.26438002736,
            "unit": "ns/iter",
            "extra": "iterations: 19767\ncpu: 35379.69342844171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35062.8349179372,
            "unit": "ns/iter",
            "extra": "iterations: 19984\ncpu: 35061.87449959968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35347.72441977652,
            "unit": "ns/iter",
            "extra": "iterations: 19820\ncpu: 35346.786074671436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 68347.04489876756,
            "unit": "ns/iter",
            "extra": "iterations: 10223\ncpu: 68345.98454465419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 63499.352284080946,
            "unit": "ns/iter",
            "extra": "iterations: 11011\ncpu: 63498.129143583246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19908.1518143397,
            "unit": "ns/iter",
            "extra": "iterations: 35247\ncpu: 19908.099980140087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 96620.03475751392,
            "unit": "ns/iter",
            "extra": "iterations: 7279\ncpu: 96619.93405687503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 78026.18696282,
            "unit": "ns/iter",
            "extra": "iterations: 8959\ncpu: 78023.00479964286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 77699.70176608092,
            "unit": "ns/iter",
            "extra": "iterations: 9003\ncpu: 77697.46751082972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 78637.13518060822,
            "unit": "ns/iter",
            "extra": "iterations: 8914\ncpu: 78635.07964998794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 147370.65243004952,
            "unit": "ns/iter",
            "extra": "iterations: 4753\ncpu: 147368.18851251795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 594584.9065980955,
            "unit": "ns/iter",
            "extra": "iterations: 1167\ncpu: 594582.7763496075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 514195.00586939097,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 514183.63903154945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 508509.5544266918,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 508495.9361393316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 508935.4275309497,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 508927.9679533914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 336463.36733714124,
            "unit": "ns/iter",
            "extra": "iterations: 2088\ncpu: 336447.65325671015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 497764.9793594783,
            "unit": "ns/iter",
            "extra": "iterations: 1405\ncpu: 497726.12099643965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19971.44812803599,
            "unit": "ns/iter",
            "extra": "iterations: 34990\ncpu: 19970.171477565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 97427.61530967808,
            "unit": "ns/iter",
            "extra": "iterations: 7185\ncpu: 97423.39596381369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 78004.09521685778,
            "unit": "ns/iter",
            "extra": "iterations: 8969\ncpu: 78003.11071468376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 77318.08331495871,
            "unit": "ns/iter",
            "extra": "iterations: 9074\ncpu: 77314.93277496145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 78668.75568499457,
            "unit": "ns/iter",
            "extra": "iterations: 8927\ncpu: 78662.96628206695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 145207.6055842894,
            "unit": "ns/iter",
            "extra": "iterations: 4835\ncpu: 145196.2564632886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 597935.8539709683,
            "unit": "ns/iter",
            "extra": "iterations: 1171\ncpu: 597888.8129803622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 514947.5894427936,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 514935.7038123118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 513901.3721611676,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 513871.9413919353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 508377.6542940361,
            "unit": "ns/iter",
            "extra": "iterations: 1374\ncpu: 508336.02620087465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 332831.2917457803,
            "unit": "ns/iter",
            "extra": "iterations: 2108\ncpu: 332811.6698292206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 499724.3226266713,
            "unit": "ns/iter",
            "extra": "iterations: 1401\ncpu: 499698.14418271754 ns\nthreads: 1"
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
        "date": 1705574938446,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7564.587867815065,
            "unit": "ns/iter",
            "extra": "iterations: 94443\ncpu: 7564.036508793665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71084.2747160963,
            "unit": "ns/iter",
            "extra": "iterations: 11976\ncpu: 71079.50901803607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 136396.07201741662,
            "unit": "ns/iter",
            "extra": "iterations: 6429\ncpu: 136391.39835122105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 201738.43813716978,
            "unit": "ns/iter",
            "extra": "iterations: 4316\ncpu: 201732.1594068582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 266358.9524530728,
            "unit": "ns/iter",
            "extra": "iterations: 3302\ncpu: 266344.18534221675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 325993.6763358733,
            "unit": "ns/iter",
            "extra": "iterations: 2620\ncpu: 325983.93129770993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 382900.3203926967,
            "unit": "ns/iter",
            "extra": "iterations: 2241\ncpu: 382890.31682284706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 454693.6185997461,
            "unit": "ns/iter",
            "extra": "iterations: 1914\ncpu: 454685.42319749214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 514702.07505909255,
            "unit": "ns/iter",
            "extra": "iterations: 1692\ncpu: 514697.57683215116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5647.359431349362,
            "unit": "ns/iter",
            "extra": "iterations: 124224\ncpu: 5647.28635368367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4806.399646657641,
            "unit": "ns/iter",
            "extra": "iterations: 146034\ncpu: 4806.3012723064485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4856.507362176828,
            "unit": "ns/iter",
            "extra": "iterations: 140923\ncpu: 4856.374757846483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4880.6017712725825,
            "unit": "ns/iter",
            "extra": "iterations: 143061\ncpu: 4880.387387198474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8264.993591034568,
            "unit": "ns/iter",
            "extra": "iterations: 84413\ncpu: 8264.860862663327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 29576.064692747008,
            "unit": "ns/iter",
            "extra": "iterations: 27762\ncpu: 29575.22872991859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 118815.00975336664,
            "unit": "ns/iter",
            "extra": "iterations: 7177\ncpu: 118812.9998606662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 97049.43763501465,
            "unit": "ns/iter",
            "extra": "iterations: 8795\ncpu: 97048.50483229104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 97008.48887112188,
            "unit": "ns/iter",
            "extra": "iterations: 8761\ncpu: 97007.1795457137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 96414.60097516642,
            "unit": "ns/iter",
            "extra": "iterations: 8819\ncpu: 96413.56162830231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 251927.32423803044,
            "unit": "ns/iter",
            "extra": "iterations: 3445\ncpu: 251919.8548621189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2135093.876146805,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2135058.486238529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1771226.6254753962,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1771194.2965779495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1718427.9134436992,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1718395.9484346271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1733592.0485074148,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1733571.8283582113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1044716.1912260606,
            "unit": "ns/iter",
            "extra": "iterations: 889\ncpu: 1044697.9752530927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1692858.489945216,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1692829.0676416855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7083433.269999659,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7083234.000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3964491.8893614844,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3964432.7659574472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8909607.2295081,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 8909531.967213111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29243.134309700108,
            "unit": "ns/iter",
            "extra": "iterations: 27995\ncpu: 29242.46115377752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 120529.62470074883,
            "unit": "ns/iter",
            "extra": "iterations: 7101\ncpu: 120527.61582875634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 97739.60955537668,
            "unit": "ns/iter",
            "extra": "iterations: 8749\ncpu: 97738.72442564825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 99285.60899814585,
            "unit": "ns/iter",
            "extra": "iterations: 8624\ncpu: 99280.6354359925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 99231.40727821879,
            "unit": "ns/iter",
            "extra": "iterations: 8601\ncpu: 99227.42704336763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 259833.22695273135,
            "unit": "ns/iter",
            "extra": "iterations: 2983\ncpu: 259827.58967482366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2167894.3710842663,
            "unit": "ns/iter",
            "extra": "iterations: 415\ncpu: 2167786.0240963898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1774199.8761905397,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1774176.0000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1716894.2047970293,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1716888.0073800732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1737780.2332090165,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1737762.3134328262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1045429.4408481146,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 1045426.3392857107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1698823.318518542,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1698791.481481476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7109331.2699997565,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7109169.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4054583.374999926,
            "unit": "ns/iter",
            "extra": "iterations: 232\ncpu: 4054434.913793104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28498.568274961028,
            "unit": "ns/iter",
            "extra": "iterations: 29037\ncpu: 28498.209181389306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 119245.25658902987,
            "unit": "ns/iter",
            "extra": "iterations: 7171\ncpu: 119243.73169711314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 97016.73732562178,
            "unit": "ns/iter",
            "extra": "iterations: 8817\ncpu: 97017.1146648514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 96531.23288134889,
            "unit": "ns/iter",
            "extra": "iterations: 8850\ncpu: 96529.50282485911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 96350.87999095496,
            "unit": "ns/iter",
            "extra": "iterations: 8841\ncpu: 96349.91516796766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 252599.63116654567,
            "unit": "ns/iter",
            "extra": "iterations: 3446\ncpu: 252597.99767846818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2131989.9610093483,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2131999.3119266164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1746446.6266415897,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1746411.6322701715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1693821.443840603,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1693816.847826097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1721828.0994475929,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1721804.6040515716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1034102.9523281581,
            "unit": "ns/iter",
            "extra": "iterations: 902\ncpu: 1034090.7982261613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1668301.0935252742,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1668295.5035971247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3080.8546410656904,
            "unit": "ns/iter",
            "extra": "iterations: 227437\ncpu: 3080.839529188289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15187.665273507058,
            "unit": "ns/iter",
            "extra": "iterations: 46178\ncpu: 15187.385768114758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12156.07706077513,
            "unit": "ns/iter",
            "extra": "iterations: 57539\ncpu: 12156.005491927166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11999.558058691262,
            "unit": "ns/iter",
            "extra": "iterations: 59259\ncpu: 11999.490372770351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9988.287497147672,
            "unit": "ns/iter",
            "extra": "iterations: 70112\ncpu: 9988.176061159287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 59993.720720718535,
            "unit": "ns/iter",
            "extra": "iterations: 11655\ncpu: 59993.40197340176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 137621.88823298586,
            "unit": "ns/iter",
            "extra": "iterations: 5082\ncpu: 137619.55922865012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35845.093735570765,
            "unit": "ns/iter",
            "extra": "iterations: 19491\ncpu: 35844.661638705154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35258.59956535248,
            "unit": "ns/iter",
            "extra": "iterations: 19786\ncpu: 35258.025876882406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35789.78021415008,
            "unit": "ns/iter",
            "extra": "iterations: 19519\ncpu: 35789.60500025599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 72444.29012600471,
            "unit": "ns/iter",
            "extra": "iterations: 9682\ncpu: 72442.95600082622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 64509.60055351382,
            "unit": "ns/iter",
            "extra": "iterations: 10840\ncpu: 64509.21586715807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19638.689259176575,
            "unit": "ns/iter",
            "extra": "iterations: 35528\ncpu: 19638.22055843272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 94737.86721600058,
            "unit": "ns/iter",
            "extra": "iterations: 7403\ncpu: 94738.26826962084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 76312.91016857323,
            "unit": "ns/iter",
            "extra": "iterations: 9195\ncpu: 76312.55029907505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 76264.95545850937,
            "unit": "ns/iter",
            "extra": "iterations: 9160\ncpu: 76263.63537117871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 76570.01401972187,
            "unit": "ns/iter",
            "extra": "iterations: 9130\ncpu: 76567.99561883895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 145258.1366652933,
            "unit": "ns/iter",
            "extra": "iterations: 4822\ncpu: 145255.74450435565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 597270.9692570709,
            "unit": "ns/iter",
            "extra": "iterations: 1171\ncpu: 597273.6976942719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 506463.55079825816,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 506460.4499274295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 504589.700288209,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 504580.6916426574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 507966.76923073124,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 507956.09579099814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 336099.58337340766,
            "unit": "ns/iter",
            "extra": "iterations: 2081\ncpu: 336090.677558867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 495932.9063165755,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 495930.16323632887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19600.356882635664,
            "unit": "ns/iter",
            "extra": "iterations: 35684\ncpu: 19600.072861786877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93868.1781725202,
            "unit": "ns/iter",
            "extra": "iterations: 7431\ncpu: 93867.66249495266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77042.41441639604,
            "unit": "ns/iter",
            "extra": "iterations: 9073\ncpu: 77041.04485837168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 74836.04359906765,
            "unit": "ns/iter",
            "extra": "iterations: 9358\ncpu: 74835.67001496036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75929.91598650833,
            "unit": "ns/iter",
            "extra": "iterations: 9189\ncpu: 75929.48090107735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 143600.68319670286,
            "unit": "ns/iter",
            "extra": "iterations: 4880\ncpu: 143598.03278688484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 593691.4210526781,
            "unit": "ns/iter",
            "extra": "iterations: 1178\ncpu: 593686.5874363353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 508201.82921516435,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 508185.6104651211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 504826.3569363889,
            "unit": "ns/iter",
            "extra": "iterations: 1384\ncpu: 504806.28612716874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 506001.76978936535,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 505991.5758896144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 338523.3360775042,
            "unit": "ns/iter",
            "extra": "iterations: 2065\ncpu: 338520.8716707047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 499733.129193433,
            "unit": "ns/iter",
            "extra": "iterations: 1401\ncpu: 499706.06709492946 ns\nthreads: 1"
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
        "date": 1705772769498,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7814.250879382466,
            "unit": "ns/iter",
            "extra": "iterations: 88983\ncpu: 7814.206084308239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 73605.94545454811,
            "unit": "ns/iter",
            "extra": "iterations: 11605\ncpu: 73603.86040499785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 141502.6502811278,
            "unit": "ns/iter",
            "extra": "iterations: 6225\ncpu: 141500.5140562249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 209047.65829747583,
            "unit": "ns/iter",
            "extra": "iterations: 4182\ncpu: 209044.95456719268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 286399.7957948255,
            "unit": "ns/iter",
            "extra": "iterations: 3139\ncpu: 286392.70468302007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 340722.70495048224,
            "unit": "ns/iter",
            "extra": "iterations: 2525\ncpu: 340704.3960396036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 401904.3963585123,
            "unit": "ns/iter",
            "extra": "iterations: 2142\ncpu: 401886.1344537815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 473520.7608459421,
            "unit": "ns/iter",
            "extra": "iterations: 1844\ncpu: 473491.0520607377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 539421.1602722666,
            "unit": "ns/iter",
            "extra": "iterations: 1616\ncpu: 539394.8019801984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5853.944194932265,
            "unit": "ns/iter",
            "extra": "iterations: 119344\ncpu: 5853.6993899986455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4958.42457595107,
            "unit": "ns/iter",
            "extra": "iterations: 140373\ncpu: 4958.14223533015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4910.746412993319,
            "unit": "ns/iter",
            "extra": "iterations: 142598\ncpu: 4910.202807893523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4950.522204599241,
            "unit": "ns/iter",
            "extra": "iterations: 141232\ncpu: 4950.24852724594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8471.934200952228,
            "unit": "ns/iter",
            "extra": "iterations: 82448\ncpu: 8471.377110421117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 28877.452862130074,
            "unit": "ns/iter",
            "extra": "iterations: 28353\ncpu: 28875.68511268654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 118476.61094900733,
            "unit": "ns/iter",
            "extra": "iterations: 7197\ncpu: 118465.77740725341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 97165.10686675213,
            "unit": "ns/iter",
            "extra": "iterations: 8796\ncpu: 97159.48158253754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 96620.08750425516,
            "unit": "ns/iter",
            "extra": "iterations: 8811\ncpu: 96613.52854386558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 96075.70689071433,
            "unit": "ns/iter",
            "extra": "iterations: 8867\ncpu: 96070.1364610355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 258004.24777183327,
            "unit": "ns/iter",
            "extra": "iterations: 3366\ncpu: 257983.39275103936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2144691.483796319,
            "unit": "ns/iter",
            "extra": "iterations: 432\ncpu: 2144545.601851852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1782125.830798451,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1782028.5171102644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1743878.677902689,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1743761.9850187255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1768880.8484848982,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1768843.1818181833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1043908.7466216797,
            "unit": "ns/iter",
            "extra": "iterations: 888\ncpu: 1043893.3558558568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1710290.1293901007,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1710281.1460258802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7053937.719999794,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7053362.999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3949255.8474577535,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3948994.915254241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8983984.371901192,
            "unit": "ns/iter",
            "extra": "iterations: 121\ncpu: 8983316.528925601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29030.434553492258,
            "unit": "ns/iter",
            "extra": "iterations: 28275\ncpu: 29029.938107869177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 121849.14708404437,
            "unit": "ns/iter",
            "extra": "iterations: 6996\ncpu: 121842.75300171576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 99143.6663223182,
            "unit": "ns/iter",
            "extra": "iterations: 8712\ncpu: 99101.62993572008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 99892.33574935715,
            "unit": "ns/iter",
            "extra": "iterations: 8554\ncpu: 99890.79962590612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 98735.6110533044,
            "unit": "ns/iter",
            "extra": "iterations: 8649\ncpu: 98735.1716961506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 261698.8427710879,
            "unit": "ns/iter",
            "extra": "iterations: 3320\ncpu: 261682.19879518115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2159701.6581394686,
            "unit": "ns/iter",
            "extra": "iterations: 430\ncpu: 2159548.1395348967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1791056.262452048,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1791023.3716474988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1751044.9190208565,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1750945.197740112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1773444.4810606283,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1773365.9090909034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1050469.1022471602,
            "unit": "ns/iter",
            "extra": "iterations: 890\ncpu: 1050423.1460674186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1706186.9246322287,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1706157.3529411722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7131276.44999986,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7131098.000000051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4011338.703862709,
            "unit": "ns/iter",
            "extra": "iterations: 233\ncpu: 4011057.939914157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28212.09492668635,
            "unit": "ns/iter",
            "extra": "iterations: 29054\ncpu: 28210.05369312307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 118233.59814891162,
            "unit": "ns/iter",
            "extra": "iterations: 7239\ncpu: 118225.79085509082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 96693.73358943315,
            "unit": "ns/iter",
            "extra": "iterations: 8851\ncpu: 96686.1597559595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 96576.25917975331,
            "unit": "ns/iter",
            "extra": "iterations: 8851\ncpu: 96573.91255225451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 97165.02294367507,
            "unit": "ns/iter",
            "extra": "iterations: 8717\ncpu: 97161.33991051954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 258641.38210653845,
            "unit": "ns/iter",
            "extra": "iterations: 3342\ncpu: 258640.15559545186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2134486.04137932,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 2134425.9770115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1775978.7992424732,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1775907.5757575722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1737867.2101314096,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1737805.253283299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1771820.3212928118,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1771681.3688212936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1036592.592633921,
            "unit": "ns/iter",
            "extra": "iterations: 896\ncpu: 1036492.0758928634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1708893.1084557695,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1708678.125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3098.3458071092446,
            "unit": "ns/iter",
            "extra": "iterations: 225620\ncpu: 3098.3361404130956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15060.2390915938,
            "unit": "ns/iter",
            "extra": "iterations: 46455\ncpu: 15059.995694758281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12352.266466695426,
            "unit": "ns/iter",
            "extra": "iterations: 56675\ncpu: 12351.940008822281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 12172.504167610225,
            "unit": "ns/iter",
            "extra": "iterations: 57467\ncpu: 12171.992621852562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 10078.34111689871,
            "unit": "ns/iter",
            "extra": "iterations: 69120\ncpu: 10077.957175925867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 61721.192548229024,
            "unit": "ns/iter",
            "extra": "iterations: 11353\ncpu: 61721.007663172895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 134089.34123041618,
            "unit": "ns/iter",
            "extra": "iterations: 5234\ncpu: 134083.89377149375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36525.682032720164,
            "unit": "ns/iter",
            "extra": "iterations: 19068\ncpu: 36524.580448919645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35863.51372107691,
            "unit": "ns/iter",
            "extra": "iterations: 19532\ncpu: 35862.12369445061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 36309.635388598734,
            "unit": "ns/iter",
            "extra": "iterations: 19300\ncpu: 36308.45077720207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 72925.75737364222,
            "unit": "ns/iter",
            "extra": "iterations: 9595\ncpu: 72923.42886920307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65272.25864157981,
            "unit": "ns/iter",
            "extra": "iterations: 10733\ncpu: 65266.95238982545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20123.25887697382,
            "unit": "ns/iter",
            "extra": "iterations: 34781\ncpu: 20121.549121646825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 97923.23838835637,
            "unit": "ns/iter",
            "extra": "iterations: 7148\ncpu: 97915.12311135832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 78345.67095899355,
            "unit": "ns/iter",
            "extra": "iterations: 8853\ncpu: 78340.15587936189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 76487.34766946573,
            "unit": "ns/iter",
            "extra": "iterations: 9161\ncpu: 76483.20052396039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 77835.35095301615,
            "unit": "ns/iter",
            "extra": "iterations: 9024\ncpu: 77829.54343971689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 147665.54670040126,
            "unit": "ns/iter",
            "extra": "iterations: 4743\ncpu: 147650.4743833017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 609001.8214285879,
            "unit": "ns/iter",
            "extra": "iterations: 1148\ncpu: 608945.3832752657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 520564.2968750706,
            "unit": "ns/iter",
            "extra": "iterations: 1344\ncpu: 520562.05357143254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 515820.0341499773,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 515802.3014105397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 518378.0690423213,
            "unit": "ns/iter",
            "extra": "iterations: 1347\ncpu: 518339.1982182721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 340611.4394160651,
            "unit": "ns/iter",
            "extra": "iterations: 2055\ncpu: 340568.80778588733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 505873.00217700534,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 505794.8476052209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19862.200357882786,
            "unit": "ns/iter",
            "extra": "iterations: 35207\ncpu: 19860.61862697771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 95740.11357074883,
            "unit": "ns/iter",
            "extra": "iterations: 7273\ncpu: 95732.05004812322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77821.72251192652,
            "unit": "ns/iter",
            "extra": "iterations: 9013\ncpu: 77820.15976922112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 76336.00675601857,
            "unit": "ns/iter",
            "extra": "iterations: 9177\ncpu: 76329.17075296938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 78163.13115304054,
            "unit": "ns/iter",
            "extra": "iterations: 8959\ncpu: 78156.24511664272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 141404.66915775096,
            "unit": "ns/iter",
            "extra": "iterations: 4951\ncpu: 141395.89981821776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 607173.4999999971,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 607122.5303292839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 514851.38761969394,
            "unit": "ns/iter",
            "extra": "iterations: 1357\ncpu: 514835.6669123091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 509794.7861313714,
            "unit": "ns/iter",
            "extra": "iterations: 1370\ncpu: 509746.2773722661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 511203.8809350295,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 511160.48210373276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 337863.93150025245,
            "unit": "ns/iter",
            "extra": "iterations: 2073\ncpu: 337836.3241678722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 503210.30885524646,
            "unit": "ns/iter",
            "extra": "iterations: 1389\ncpu: 503166.01871850924 ns\nthreads: 1"
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
        "date": 1705774153328,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7630.958727995426,
            "unit": "ns/iter",
            "extra": "iterations: 91006\ncpu: 7630.793574050064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 69995.09960790578,
            "unit": "ns/iter",
            "extra": "iterations: 11987\ncpu: 69993.77659130725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 134189.8107021407,
            "unit": "ns/iter",
            "extra": "iterations: 6466\ncpu: 134188.24621094952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 196915.93548386105,
            "unit": "ns/iter",
            "extra": "iterations: 4371\ncpu: 196913.7954701442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 262376.2100360826,
            "unit": "ns/iter",
            "extra": "iterations: 3328\ncpu: 262373.19711538457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 325143.4957918789,
            "unit": "ns/iter",
            "extra": "iterations: 2614\ncpu: 325135.156847743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 388525.01618706936,
            "unit": "ns/iter",
            "extra": "iterations: 2224\ncpu: 388508.9028776979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 449719.05653530837,
            "unit": "ns/iter",
            "extra": "iterations: 1928\ncpu: 449698.13278008293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 512753.27981108683,
            "unit": "ns/iter",
            "extra": "iterations: 1694\ncpu: 512723.140495868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5680.113922438919,
            "unit": "ns/iter",
            "extra": "iterations: 125682\ncpu: 5679.835616874345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4808.237702377692,
            "unit": "ns/iter",
            "extra": "iterations: 145211\ncpu: 4808.144011128642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4784.660096104413,
            "unit": "ns/iter",
            "extra": "iterations: 146715\ncpu: 4784.582353542578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4892.926805206348,
            "unit": "ns/iter",
            "extra": "iterations: 142920\ncpu: 4892.861740834036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8378.015278391236,
            "unit": "ns/iter",
            "extra": "iterations: 83713\ncpu: 8377.91740828784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 28547.668010613692,
            "unit": "ns/iter",
            "extra": "iterations: 29019\ncpu: 28547.33795099769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 118043.25711938944,
            "unit": "ns/iter",
            "extra": "iterations: 7304\ncpu: 118041.64841182918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 95325.82229219783,
            "unit": "ns/iter",
            "extra": "iterations: 8891\ncpu: 95318.37813519294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 97081.23066561599,
            "unit": "ns/iter",
            "extra": "iterations: 8909\ncpu: 97075.14872600761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 94880.27995959735,
            "unit": "ns/iter",
            "extra": "iterations: 8912\ncpu: 94876.76166965908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 251075.6440533702,
            "unit": "ns/iter",
            "extra": "iterations: 3523\ncpu: 251067.47090547826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2025766.109131371,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2025671.4922048962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1674741.1956523047,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1674664.8550724634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1656624.2043009833,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1656565.4121863833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1709521.9165155673,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1709460.9800362969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1004727.456426992,
            "unit": "ns/iter",
            "extra": "iterations: 918\ncpu: 1004685.076252723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1627250.9829060899,
            "unit": "ns/iter",
            "extra": "iterations: 585\ncpu: 1627192.307692303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6665231.059999997,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6664892.000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3657808.0627453113,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3657681.96078432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8741301.471544594,
            "unit": "ns/iter",
            "extra": "iterations: 123\ncpu: 8740928.455284558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 28117.95149690092,
            "unit": "ns/iter",
            "extra": "iterations: 28225\ncpu: 28117.22232063782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 121777.83937898203,
            "unit": "ns/iter",
            "extra": "iterations: 7085\ncpu: 121776.18913196913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 95780.18901398507,
            "unit": "ns/iter",
            "extra": "iterations: 8793\ncpu: 95777.86875923975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 98873.87033808952,
            "unit": "ns/iter",
            "extra": "iterations: 8607\ncpu: 98870.68665040082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 96024.47887480582,
            "unit": "ns/iter",
            "extra": "iterations: 8994\ncpu: 96020.84723148818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 257460.9233894379,
            "unit": "ns/iter",
            "extra": "iterations: 3446\ncpu: 257453.9466047601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2061132.7305123026,
            "unit": "ns/iter",
            "extra": "iterations: 449\ncpu: 2061026.0579064528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1694380.4137931007,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1694315.9709618916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1678281.2010772822,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1678194.7935368114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1712638.9059676034,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1712600.3616636556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1007892.8291891684,
            "unit": "ns/iter",
            "extra": "iterations: 925\ncpu: 1007847.4594594603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1651399.844247629,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1651377.3451327353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6810445.350000692,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6810191.000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3733127.4523809035,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3733053.1746031833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28208.852191218757,
            "unit": "ns/iter",
            "extra": "iterations: 29139\ncpu: 28208.232952400347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 117264.32667676927,
            "unit": "ns/iter",
            "extra": "iterations: 7261\ncpu: 117261.27255198992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 96260.42543957451,
            "unit": "ns/iter",
            "extra": "iterations: 8986\ncpu: 96257.52281326515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 95127.2302786109,
            "unit": "ns/iter",
            "extra": "iterations: 8937\ncpu: 95123.84469061247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 95694.17942934713,
            "unit": "ns/iter",
            "extra": "iterations: 8867\ncpu: 95686.28622984054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 251693.49732468638,
            "unit": "ns/iter",
            "extra": "iterations: 3551\ncpu: 251684.7648549704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2055736.633928567,
            "unit": "ns/iter",
            "extra": "iterations: 448\ncpu: 2055671.4285714214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1698816.7431694495,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1698798.5428051073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1661222.991103121,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1661191.2811387964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1692574.9847619694,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1692524.7619047654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 998923.9610810752,
            "unit": "ns/iter",
            "extra": "iterations: 925\ncpu: 998898.8108108133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1636698.5114235447,
            "unit": "ns/iter",
            "extra": "iterations: 569\ncpu: 1636667.6625659133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3011.503355562686,
            "unit": "ns/iter",
            "extra": "iterations: 236771\ncpu: 3011.4207398710223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14709.648191255757,
            "unit": "ns/iter",
            "extra": "iterations: 47685\ncpu: 14709.23351158646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11720.067138810851,
            "unit": "ns/iter",
            "extra": "iterations: 60010\ncpu: 11719.648391934725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11579.357557322766,
            "unit": "ns/iter",
            "extra": "iterations: 60491\ncpu: 11579.307665603084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9779.549166702325,
            "unit": "ns/iter",
            "extra": "iterations: 70383\ncpu: 9779.321711208719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 58999.8306341603,
            "unit": "ns/iter",
            "extra": "iterations: 11732\ncpu: 58998.124786907625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 133499.38702929002,
            "unit": "ns/iter",
            "extra": "iterations: 5258\ncpu: 133494.48459490342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 34407.007978069814,
            "unit": "ns/iter",
            "extra": "iterations: 20431\ncpu: 34405.69722480556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 34049.65181113373,
            "unit": "ns/iter",
            "extra": "iterations: 20374\ncpu: 34048.81711985878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 34785.66275804665,
            "unit": "ns/iter",
            "extra": "iterations: 20297\ncpu: 34784.68246538899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 69935.99038750783,
            "unit": "ns/iter",
            "extra": "iterations: 9987\ncpu: 69934.3746870931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 61847.705566977704,
            "unit": "ns/iter",
            "extra": "iterations: 11191\ncpu: 61844.78598874077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20011.506470772558,
            "unit": "ns/iter",
            "extra": "iterations: 34849\ncpu: 20010.115067864263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 94022.55996769785,
            "unit": "ns/iter",
            "extra": "iterations: 7429\ncpu: 94019.8411630114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75689.61044177074,
            "unit": "ns/iter",
            "extra": "iterations: 9213\ncpu: 75687.52849234849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75392.98800297256,
            "unit": "ns/iter",
            "extra": "iterations: 9419\ncpu: 75389.55303110737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 76519.83063062611,
            "unit": "ns/iter",
            "extra": "iterations: 9435\ncpu: 76517.09591944926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 143172.5893114124,
            "unit": "ns/iter",
            "extra": "iterations: 4865\ncpu: 143167.70811922033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 587028.3903878622,
            "unit": "ns/iter",
            "extra": "iterations: 1186\ncpu: 587014.671163573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 500226.3551873066,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 500216.1383285291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 500062.5530000207,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500043.19999999326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 505429.99492016976,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 505412.33671988023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 336021.8512277239,
            "unit": "ns/iter",
            "extra": "iterations: 2077\ncpu: 336001.87770823285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 484852.4540351431,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 484837.1228070136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 20037.876043214972,
            "unit": "ns/iter",
            "extra": "iterations: 34988\ncpu: 20004.941694294994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 95659.02024070197,
            "unit": "ns/iter",
            "extra": "iterations: 7312\ncpu: 95654.23960612764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 78011.33887896006,
            "unit": "ns/iter",
            "extra": "iterations: 8956\ncpu: 78009.825815096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 77534.64920247075,
            "unit": "ns/iter",
            "extra": "iterations: 9028\ncpu: 77532.74257864407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 77498.98249290613,
            "unit": "ns/iter",
            "extra": "iterations: 6683\ncpu: 77495.58581475445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 141378.9422805083,
            "unit": "ns/iter",
            "extra": "iterations: 4955\ncpu: 141376.91220988886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 593144.992379364,
            "unit": "ns/iter",
            "extra": "iterations: 1181\ncpu: 593131.2447078687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 503243.2131029487,
            "unit": "ns/iter",
            "extra": "iterations: 1389\ncpu: 503227.93376530265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 500520.72947891837,
            "unit": "ns/iter",
            "extra": "iterations: 1401\ncpu: 500508.27980014734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 507075.1649783311,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 507054.48625180766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 332385.50214590837,
            "unit": "ns/iter",
            "extra": "iterations: 2097\ncpu: 332376.871721507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 490993.4711267243,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 490985.63380281016 ns\nthreads: 1"
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
        "date": 1705952858471,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7712.50277762447,
            "unit": "ns/iter",
            "extra": "iterations: 90545\ncpu: 7712.324258655917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70938.92441088482,
            "unit": "ns/iter",
            "extra": "iterations: 12052\ncpu: 70936.11848655825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 135585.77953487707,
            "unit": "ns/iter",
            "extra": "iterations: 6450\ncpu: 135584.23255813954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 201378.48264690978,
            "unit": "ns/iter",
            "extra": "iterations: 4322\ncpu: 201381.16612679316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 266288.10587873525,
            "unit": "ns/iter",
            "extra": "iterations: 3249\ncpu: 266287.6269621423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 325872.57794676407,
            "unit": "ns/iter",
            "extra": "iterations: 2630\ncpu: 325869.0114068439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 392568.40448431,
            "unit": "ns/iter",
            "extra": "iterations: 2230\ncpu: 392562.28699551563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 463146.2013598377,
            "unit": "ns/iter",
            "extra": "iterations: 1912\ncpu: 463130.85774058534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 515315.299821512,
            "unit": "ns/iter",
            "extra": "iterations: 1681\ncpu: 515314.33670434274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5707.5614487527655,
            "unit": "ns/iter",
            "extra": "iterations: 122533\ncpu: 5707.222544130976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4861.177023972871,
            "unit": "ns/iter",
            "extra": "iterations: 144246\ncpu: 4860.99857188414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4825.121293354801,
            "unit": "ns/iter",
            "extra": "iterations: 145111\ncpu: 4824.865103265766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4920.988038177236,
            "unit": "ns/iter",
            "extra": "iterations: 142286\ncpu: 4920.656986632551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8571.894862896017,
            "unit": "ns/iter",
            "extra": "iterations: 81836\ncpu: 8570.67794124835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31067.769431817025,
            "unit": "ns/iter",
            "extra": "iterations: 26400\ncpu: 31066.075757575833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 123693.75412207143,
            "unit": "ns/iter",
            "extra": "iterations: 6914\ncpu: 123688.22678623059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 100942.11425884605,
            "unit": "ns/iter",
            "extra": "iterations: 8507\ncpu: 100932.9023157399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 99073.34578354776,
            "unit": "ns/iter",
            "extra": "iterations: 8621\ncpu: 99068.70432664437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 99573.02759342988,
            "unit": "ns/iter",
            "extra": "iterations: 8589\ncpu: 99567.24880661286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 256608.19875409114,
            "unit": "ns/iter",
            "extra": "iterations: 3371\ncpu: 256605.87362800367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2102009.8027209463,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 2101907.9365079375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1738381.2481480415,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1738362.0370370385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1724020.9227939746,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1723940.6249999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1742627.5684802602,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1742636.7729831163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1034253.9542920777,
            "unit": "ns/iter",
            "extra": "iterations: 897\ncpu: 1034238.9074693457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1684958.3315216359,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1684951.9927536263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6973519.930000975,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6973136.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3847913.7892563287,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3847883.057851235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8864356.249999205,
            "unit": "ns/iter",
            "extra": "iterations: 124\ncpu: 8863976.612903222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 30970.52211223791,
            "unit": "ns/iter",
            "extra": "iterations: 26569\ncpu: 30970.175768752993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 124256.52528335358,
            "unit": "ns/iter",
            "extra": "iterations: 6882\ncpu: 124252.6300494036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 102039.95514196342,
            "unit": "ns/iter",
            "extra": "iterations: 8382\ncpu: 102036.93629205486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 101465.77190062219,
            "unit": "ns/iter",
            "extra": "iterations: 8413\ncpu: 101461.82099132314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 103399.19768856221,
            "unit": "ns/iter",
            "extra": "iterations: 8220\ncpu: 103395.10948905072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 258910.0795079587,
            "unit": "ns/iter",
            "extra": "iterations: 3333\ncpu: 258899.90999100017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2128856.1077980325,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2128789.678899084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1753455.0357141115,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1753365.7894736787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1731550.547486068,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1731543.761638736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1751211.7335834305,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1751156.6604127546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1047276.3577053238,
            "unit": "ns/iter",
            "extra": "iterations: 889\ncpu: 1047201.5748031454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1678841.452423677,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1678770.9156193938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7045702.140000003,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7045686.000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3909651.596638694,
            "unit": "ns/iter",
            "extra": "iterations: 238\ncpu: 3909489.0756302485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 30769.051837147326,
            "unit": "ns/iter",
            "extra": "iterations: 26699\ncpu: 30767.613019214114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 124836.14742758445,
            "unit": "ns/iter",
            "extra": "iterations: 6939\ncpu: 124830.4798962384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 102326.1181374255,
            "unit": "ns/iter",
            "extra": "iterations: 8397\ncpu: 102321.80540669366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 98927.55741681771,
            "unit": "ns/iter",
            "extra": "iterations: 8656\ncpu: 98923.1284658036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 100296.31554362307,
            "unit": "ns/iter",
            "extra": "iterations: 8563\ncpu: 100293.54198294964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 258075.62238805444,
            "unit": "ns/iter",
            "extra": "iterations: 3350\ncpu: 258070.05970149257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2098004.698198182,
            "unit": "ns/iter",
            "extra": "iterations: 444\ncpu: 2097899.324324327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1727141.2077921242,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1727108.71985158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1713570.9742174195,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1713508.655616939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1733444.8659216638,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1733412.8491620102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1028872.9944751235,
            "unit": "ns/iter",
            "extra": "iterations: 905\ncpu: 1028830.2762430935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1672722.5361012064,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1672678.700361015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3062.1418102088164,
            "unit": "ns/iter",
            "extra": "iterations: 228968\ncpu: 3061.9671744523316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15144.339244395003,
            "unit": "ns/iter",
            "extra": "iterations: 46241\ncpu: 15143.876646266326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 12282.949763421662,
            "unit": "ns/iter",
            "extra": "iterations: 58543\ncpu: 12282.195992689058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11552.34734429321,
            "unit": "ns/iter",
            "extra": "iterations: 60643\ncpu: 11551.973022442808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9985.29262387208,
            "unit": "ns/iter",
            "extra": "iterations: 70213\ncpu: 9985.310412601679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 60058.15054039585,
            "unit": "ns/iter",
            "extra": "iterations: 11658\ncpu: 60057.00806313213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 137871.24253145346,
            "unit": "ns/iter",
            "extra": "iterations: 5088\ncpu: 137864.7798742139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35934.10741177258,
            "unit": "ns/iter",
            "extra": "iterations: 19523\ncpu: 35932.428417763986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35440.72076903578,
            "unit": "ns/iter",
            "extra": "iterations: 19765\ncpu: 35441.21932709359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35684.21620647027,
            "unit": "ns/iter",
            "extra": "iterations: 19412\ncpu: 35684.20564599263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 72048.80431876106,
            "unit": "ns/iter",
            "extra": "iterations: 9725\ncpu: 72045.76863753241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 64404.863319260854,
            "unit": "ns/iter",
            "extra": "iterations: 10894\ncpu: 64401.19331742232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20173.693924896415,
            "unit": "ns/iter",
            "extra": "iterations: 34485\ncpu: 20173.078149920395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 94550.94153063421,
            "unit": "ns/iter",
            "extra": "iterations: 7474\ncpu: 94546.97618410371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 76144.49858664819,
            "unit": "ns/iter",
            "extra": "iterations: 9198\ncpu: 76142.99847793068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 77600.06054257075,
            "unit": "ns/iter",
            "extra": "iterations: 9068\ncpu: 77600.01102779058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 77168.94913206149,
            "unit": "ns/iter",
            "extra": "iterations: 9102\ncpu: 77162.84333113655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 149684.24396497686,
            "unit": "ns/iter",
            "extra": "iterations: 4681\ncpu: 149679.36338389074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 604431.2571182632,
            "unit": "ns/iter",
            "extra": "iterations: 1159\ncpu: 604405.4357204452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 512458.8417213201,
            "unit": "ns/iter",
            "extra": "iterations: 1371\ncpu: 512459.22684172285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 515448.13362700184,
            "unit": "ns/iter",
            "extra": "iterations: 1362\ncpu: 515425.9177679849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 514326.68833088304,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 514297.11964549485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 338684.8493217274,
            "unit": "ns/iter",
            "extra": "iterations: 2064\ncpu: 338670.4941860495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 500609.92637597176,
            "unit": "ns/iter",
            "extra": "iterations: 1399\ncpu: 500580.27162258356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19921.615806993486,
            "unit": "ns/iter",
            "extra": "iterations: 35149\ncpu: 19921.531195766664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 93630.35481282651,
            "unit": "ns/iter",
            "extra": "iterations: 7480\ncpu: 93630.36096256631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 75974.6071389817,
            "unit": "ns/iter",
            "extra": "iterations: 9217\ncpu: 75973.75501790227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 77573.08300131721,
            "unit": "ns/iter",
            "extra": "iterations: 9036\ncpu: 77573.31783975207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 77817.53717720369,
            "unit": "ns/iter",
            "extra": "iterations: 8984\ncpu: 77814.55921638403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 148036.91679018424,
            "unit": "ns/iter",
            "extra": "iterations: 4723\ncpu: 148035.8670336664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 601600.1514629285,
            "unit": "ns/iter",
            "extra": "iterations: 1162\ncpu: 601599.8278829651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 511482.3901018891,
            "unit": "ns/iter",
            "extra": "iterations: 1374\ncpu: 511483.9883551723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 509919.8550619383,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 509904.22432629997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 511083.0620891537,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 511062.45434623153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 336265.536245755,
            "unit": "ns/iter",
            "extra": "iterations: 2083\ncpu: 336255.2568410934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 500194.13999996235,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500193.2999999923 ns\nthreads: 1"
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
        "date": 1705954346589,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7775.045802372874,
            "unit": "ns/iter",
            "extra": "iterations: 90170\ncpu: 7774.565820117556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 69626.29199669999,
            "unit": "ns/iter",
            "extra": "iterations: 12120\ncpu: 69622.64851485149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 132602.0854597699,
            "unit": "ns/iter",
            "extra": "iterations: 6623\ncpu: 132594.15672655898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 195431.20610686965,
            "unit": "ns/iter",
            "extra": "iterations: 4454\ncpu: 195418.5900314325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 260463.4283577772,
            "unit": "ns/iter",
            "extra": "iterations: 3343\ncpu: 260441.16063416083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 317733.9881305642,
            "unit": "ns/iter",
            "extra": "iterations: 2696\ncpu: 317716.8026706232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 380406.7674113307,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 380370.74025405187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 441564.98223345884,
            "unit": "ns/iter",
            "extra": "iterations: 1970\ncpu: 441546.1421319795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 503284.8236993952,
            "unit": "ns/iter",
            "extra": "iterations: 1730\ncpu: 503260.2890173409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5614.194565888913,
            "unit": "ns/iter",
            "extra": "iterations: 124657\ncpu: 5614.016060068822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4782.740548159247,
            "unit": "ns/iter",
            "extra": "iterations: 146162\ncpu: 4782.576866764273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4733.0614957554635,
            "unit": "ns/iter",
            "extra": "iterations: 148059\ncpu: 4732.66535637821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4856.218624129569,
            "unit": "ns/iter",
            "extra": "iterations: 143749\ncpu: 4855.882823532678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8453.077605535762,
            "unit": "ns/iter",
            "extra": "iterations: 82958\ncpu: 8451.970876829231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 28808.926316160225,
            "unit": "ns/iter",
            "extra": "iterations: 28378\ncpu: 28807.054760730098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 117446.60041293401,
            "unit": "ns/iter",
            "extra": "iterations: 7265\ncpu: 117436.65519614573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 97140.87717304313,
            "unit": "ns/iter",
            "extra": "iterations: 8801\ncpu: 97134.63242813303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 97780.16292393298,
            "unit": "ns/iter",
            "extra": "iterations: 8728\ncpu: 97772.75435380408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 98047.12456826694,
            "unit": "ns/iter",
            "extra": "iterations: 8686\ncpu: 98044.1054570577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 256853.54884129597,
            "unit": "ns/iter",
            "extra": "iterations: 3409\ncpu: 256827.22205925555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2017472.6056644463,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2017355.1198257057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1665310.332737054,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1665167.7996422192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1635064.110332686,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1634985.9894921246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1665438.9107141502,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1665297.3214285716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1000432.5400434008,
            "unit": "ns/iter",
            "extra": "iterations: 924\ncpu: 1000349.4588744589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1606725.5346021398,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1606671.7993079587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6761104.350000551,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6761140.999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3818439.987705207,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3818304.508196721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8653719.777778441,
            "unit": "ns/iter",
            "extra": "iterations: 126\ncpu: 8653302.380952373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29069.256826861478,
            "unit": "ns/iter",
            "extra": "iterations: 27758\ncpu: 29069.16204337496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 120130.10402920001,
            "unit": "ns/iter",
            "extra": "iterations: 7123\ncpu: 120129.49599887726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 100614.91155755319,
            "unit": "ns/iter",
            "extra": "iterations: 8661\ncpu: 100611.4190047345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 99851.82959064322,
            "unit": "ns/iter",
            "extra": "iterations: 8550\ncpu: 99847.15789473709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 100150.33207946234,
            "unit": "ns/iter",
            "extra": "iterations: 8507\ncpu: 100146.35006465188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 259895.71299639356,
            "unit": "ns/iter",
            "extra": "iterations: 3324\ncpu: 259891.24548736415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2029580.1965067275,
            "unit": "ns/iter",
            "extra": "iterations: 458\ncpu: 2029508.9519650724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1664456.14821425,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1664387.5000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1650243.2759855643,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1650253.405017922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1699195.0642857237,
            "unit": "ns/iter",
            "extra": "iterations: 560\ncpu: 1699168.3928571406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1002805.6225805617,
            "unit": "ns/iter",
            "extra": "iterations: 930\ncpu: 1002796.6666666635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1614795.0882352854,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1614720.4152249158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 6833243.069999072,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6833292.000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3914485.8708335543,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3914189.1666666595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28286.255648649596,
            "unit": "ns/iter",
            "extra": "iterations: 29122\ncpu: 28285.48520019217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 118664.51122194968,
            "unit": "ns/iter",
            "extra": "iterations: 7218\ncpu: 118659.51787198662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 97359.67621221243,
            "unit": "ns/iter",
            "extra": "iterations: 8765\ncpu: 97360.26240730155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 97265.47507398727,
            "unit": "ns/iter",
            "extra": "iterations: 8786\ncpu: 97258.72979740513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 99003.06749679345,
            "unit": "ns/iter",
            "extra": "iterations: 8593\ncpu: 98998.04492028341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 259605.9302120214,
            "unit": "ns/iter",
            "extra": "iterations: 3396\ncpu: 259583.5983510009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2023389.30952375,
            "unit": "ns/iter",
            "extra": "iterations: 462\ncpu: 2023277.922077928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1670956.519713214,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1670780.6451612834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1640854.8833923363,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1640749.2932862171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1656020.4341637758,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1655822.064056936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 997674.6699029234,
            "unit": "ns/iter",
            "extra": "iterations: 927\ncpu: 997629.8813376516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1604151.2179931158,
            "unit": "ns/iter",
            "extra": "iterations: 578\ncpu: 1604010.8996539733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3018.9411962481568,
            "unit": "ns/iter",
            "extra": "iterations: 231992\ncpu: 3018.9243594606664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 14928.497148208391,
            "unit": "ns/iter",
            "extra": "iterations: 46988\ncpu: 14927.841150932198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11749.602382112851,
            "unit": "ns/iter",
            "extra": "iterations: 59527\ncpu: 11749.685016883124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11713.356560874956,
            "unit": "ns/iter",
            "extra": "iterations: 59771\ncpu: 11712.972846363555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9510.86597293971,
            "unit": "ns/iter",
            "extra": "iterations: 73612\ncpu: 9510.791718741479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 60738.306609917796,
            "unit": "ns/iter",
            "extra": "iterations: 11513\ncpu: 60736.81924780699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 132009.3444381684,
            "unit": "ns/iter",
            "extra": "iterations: 5313\ncpu: 132000.82815734993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35699.23394754071,
            "unit": "ns/iter",
            "extra": "iterations: 19483\ncpu: 35699.481599342886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 34308.83435854126,
            "unit": "ns/iter",
            "extra": "iterations: 20321\ncpu: 34303.454554401775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 34803.91125174448,
            "unit": "ns/iter",
            "extra": "iterations: 20068\ncpu: 34803.08949571515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 70836.66386894179,
            "unit": "ns/iter",
            "extra": "iterations: 9889\ncpu: 70827.10081909293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 62708.89054102019,
            "unit": "ns/iter",
            "extra": "iterations: 11164\ncpu: 62705.741669652794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19453.78269332347,
            "unit": "ns/iter",
            "extra": "iterations: 35963\ncpu: 19451.775435864787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 92678.98834436802,
            "unit": "ns/iter",
            "extra": "iterations: 7550\ncpu: 92675.86754966849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 75507.65307204022,
            "unit": "ns/iter",
            "extra": "iterations: 9440\ncpu: 75500.52966101609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 74274.69948131978,
            "unit": "ns/iter",
            "extra": "iterations: 9447\ncpu: 74269.30242405088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 75412.94375217798,
            "unit": "ns/iter",
            "extra": "iterations: 8587\ncpu: 75409.57260975911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 143339.07491788885,
            "unit": "ns/iter",
            "extra": "iterations: 4872\ncpu: 143328.7972085386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 573858.8299096149,
            "unit": "ns/iter",
            "extra": "iterations: 1217\ncpu: 573822.9252259735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 492220.2718309506,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 492206.6197183108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 487382.7839161267,
            "unit": "ns/iter",
            "extra": "iterations: 1430\ncpu: 487374.1258741255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 495482.4720847966,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 495464.31095406326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 355293.9121398407,
            "unit": "ns/iter",
            "extra": "iterations: 2117\ncpu: 355266.3675011776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 482464.78581264213,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 482438.01652891946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19658.329139521207,
            "unit": "ns/iter",
            "extra": "iterations: 35608\ncpu: 19658.043136373733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 92568.44435611555,
            "unit": "ns/iter",
            "extra": "iterations: 7548\ncpu: 92563.65924748353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 74624.28347045045,
            "unit": "ns/iter",
            "extra": "iterations: 9359\ncpu: 74619.11529009558 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 74430.93176745716,
            "unit": "ns/iter",
            "extra": "iterations: 9409\ncpu: 74422.48910617425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 75844.18438012703,
            "unit": "ns/iter",
            "extra": "iterations: 9155\ncpu: 75840.70999453886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 142499.74515862984,
            "unit": "ns/iter",
            "extra": "iterations: 4854\ncpu: 142500.1648125268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 580008.0885761841,
            "unit": "ns/iter",
            "extra": "iterations: 1208\ncpu: 579958.5264900639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 488976.85534588393,
            "unit": "ns/iter",
            "extra": "iterations: 1431\ncpu: 488973.8644304708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 488485.78410686954,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 488459.91561180796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 492695.03943660186,
            "unit": "ns/iter",
            "extra": "iterations: 1420\ncpu: 492640.1408450737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 326048.8554161202,
            "unit": "ns/iter",
            "extra": "iterations: 2151\ncpu: 326025.569502561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 482601.7152729141,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 482581.82446441264 ns\nthreads: 1"
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
        "date": 1705956378362,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7995.930849668449,
            "unit": "ns/iter",
            "extra": "iterations: 87693\ncpu: 7995.406702929538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 73766.22491409477,
            "unit": "ns/iter",
            "extra": "iterations: 11640\ncpu: 73763.42783505155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 138554.43822880564,
            "unit": "ns/iter",
            "extra": "iterations: 6346\ncpu: 138549.52726126695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 203690.61446629165,
            "unit": "ns/iter",
            "extra": "iterations: 4272\ncpu: 203686.2593632959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 269536.8965409619,
            "unit": "ns/iter",
            "extra": "iterations: 3209\ncpu: 269529.23028980976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 333435.11238971655,
            "unit": "ns/iter",
            "extra": "iterations: 2607\ncpu: 333418.6421173763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 397220.7588878548,
            "unit": "ns/iter",
            "extra": "iterations: 2194\ncpu: 397207.7939835915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 462147.4490122622,
            "unit": "ns/iter",
            "extra": "iterations: 1873\ncpu: 462129.7917778969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 529574.8315151369,
            "unit": "ns/iter",
            "extra": "iterations: 1650\ncpu: 529556.6666666659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5715.9264376066685,
            "unit": "ns/iter",
            "extra": "iterations: 122617\ncpu: 5715.759641811493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4933.697117173414,
            "unit": "ns/iter",
            "extra": "iterations: 139724\ncpu: 4933.666370845382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4872.808111640792,
            "unit": "ns/iter",
            "extra": "iterations: 143818\ncpu: 4872.641811178015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4879.778649790237,
            "unit": "ns/iter",
            "extra": "iterations: 143474\ncpu: 4879.6639112313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8424.563338158106,
            "unit": "ns/iter",
            "extra": "iterations: 82920\ncpu: 8424.152194886628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 28764.037274928472,
            "unit": "ns/iter",
            "extra": "iterations: 28491\ncpu: 28761.787933031464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 118755.15318199589,
            "unit": "ns/iter",
            "extra": "iterations: 7181\ncpu: 118750.36902938323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 96062.52407199654,
            "unit": "ns/iter",
            "extra": "iterations: 8890\ncpu: 96058.3689538806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 95899.28800989474,
            "unit": "ns/iter",
            "extra": "iterations: 8899\ncpu: 95895.01067535699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 96014.14506034018,
            "unit": "ns/iter",
            "extra": "iterations: 8948\ncpu: 96014.19311577988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 265014.1498929234,
            "unit": "ns/iter",
            "extra": "iterations: 3269\ncpu: 264994.83022331074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2122231.1716246936,
            "unit": "ns/iter",
            "extra": "iterations: 437\ncpu: 2122096.3386727627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1770670.6083650738,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1770584.60076046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1720268.2710623757,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1720191.0256410309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1744354.0281426953,
            "unit": "ns/iter",
            "extra": "iterations: 533\ncpu: 1744282.7392120075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1014831.8013099525,
            "unit": "ns/iter",
            "extra": "iterations: 916\ncpu: 1014790.502183404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1691840.2758621427,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1691773.6842105256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 6991709.420000234,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 6991338.0000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 4053765.4978353987,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4053764.9350649277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8860061.536585439,
            "unit": "ns/iter",
            "extra": "iterations: 123\ncpu: 8860079.674796734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29093.07476136037,
            "unit": "ns/iter",
            "extra": "iterations: 28076\ncpu: 29092.171249465635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 118584.27768433542,
            "unit": "ns/iter",
            "extra": "iterations: 7134\ncpu: 118584.73507148902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 96155.03236098685,
            "unit": "ns/iter",
            "extra": "iterations: 8776\ncpu: 96154.21604375528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 98436.03725919066,
            "unit": "ns/iter",
            "extra": "iterations: 8669\ncpu: 98434.7329565118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 98187.29363803659,
            "unit": "ns/iter",
            "extra": "iterations: 8708\ncpu: 98185.30087276036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 268265.1155872193,
            "unit": "ns/iter",
            "extra": "iterations: 3227\ncpu: 268265.47877285304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2149204.6890951316,
            "unit": "ns/iter",
            "extra": "iterations: 431\ncpu: 2149187.4709976856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1781779.7241379519,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1781799.6168582435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1716291.8176795228,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1716273.4806629948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1741294.3364484885,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1741280.3738317725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1016189.5366120324,
            "unit": "ns/iter",
            "extra": "iterations: 915\ncpu: 1016179.0163934447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1696714.8911070367,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1696713.430127041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7049353.18999901,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7048875.999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 3984832.08936186,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3984708.5106383148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28297.29141178376,
            "unit": "ns/iter",
            "extra": "iterations: 28935\ncpu: 28295.82166925871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 117345.65488794653,
            "unit": "ns/iter",
            "extra": "iterations: 7273\ncpu: 117341.85343049634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 96012.2648575981,
            "unit": "ns/iter",
            "extra": "iterations: 8918\ncpu: 96009.07154070403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 96271.05123296125,
            "unit": "ns/iter",
            "extra": "iterations: 8881\ncpu: 96266.77175993648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 96111.7343767574,
            "unit": "ns/iter",
            "extra": "iterations: 8881\ncpu: 96106.11417633135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 266663.9288997882,
            "unit": "ns/iter",
            "extra": "iterations: 3263\ncpu: 266653.3864541847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2139476.9124423964,
            "unit": "ns/iter",
            "extra": "iterations: 434\ncpu: 2139381.7972350116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1775429.1123808452,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1775341.1428571467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1734208.5743494495,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1734157.2490706383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1749110.5517889329,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1749011.111111109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1015994.6004390011,
            "unit": "ns/iter",
            "extra": "iterations: 911\ncpu: 1015957.1899012057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1696334.0347348414,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1696257.7696526488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 2969.4235079457544,
            "unit": "ns/iter",
            "extra": "iterations: 235665\ncpu: 2969.4294867714766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15050.326833258317,
            "unit": "ns/iter",
            "extra": "iterations: 46461\ncpu: 15049.497427950451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11224.957821975328,
            "unit": "ns/iter",
            "extra": "iterations: 62497\ncpu: 11224.503576171632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11339.368219186646,
            "unit": "ns/iter",
            "extra": "iterations: 61792\ncpu: 11338.645779388808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9900.004286683572,
            "unit": "ns/iter",
            "extra": "iterations: 70684\ncpu: 9899.601041253969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 63381.119949616754,
            "unit": "ns/iter",
            "extra": "iterations: 11113\ncpu: 63381.91307477756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 140576.03808379243,
            "unit": "ns/iter",
            "extra": "iterations: 4989\ncpu: 140566.04529965945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 36211.98147477663,
            "unit": "ns/iter",
            "extra": "iterations: 19325\ncpu: 36210.747736092984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35559.32712468199,
            "unit": "ns/iter",
            "extra": "iterations: 19650\ncpu: 35559.02798982214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35900.36487594937,
            "unit": "ns/iter",
            "extra": "iterations: 19508\ncpu: 35900.77404141848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 72610.03450778,
            "unit": "ns/iter",
            "extra": "iterations: 9650\ncpu: 72608.79792746216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 65338.39804377947,
            "unit": "ns/iter",
            "extra": "iterations: 10735\ncpu: 65335.482068001955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 19762.13688931562,
            "unit": "ns/iter",
            "extra": "iterations: 35452\ncpu: 19761.209522734785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 97868.27088571693,
            "unit": "ns/iter",
            "extra": "iterations: 7158\ncpu: 97864.54316848125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 79092.4746720936,
            "unit": "ns/iter",
            "extra": "iterations: 8844\ncpu: 79088.29715061073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 78308.68988260902,
            "unit": "ns/iter",
            "extra": "iterations: 8945\ncpu: 78306.2157629961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 79976.96794797934,
            "unit": "ns/iter",
            "extra": "iterations: 8767\ncpu: 79973.46868940393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 147515.62000001763,
            "unit": "ns/iter",
            "extra": "iterations: 4750\ncpu: 147506.86315789464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 605666.3698276138,
            "unit": "ns/iter",
            "extra": "iterations: 1160\ncpu: 605639.8275862037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 517826.06868537155,
            "unit": "ns/iter",
            "extra": "iterations: 1354\ncpu: 517806.720827176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 509773.3134110644,
            "unit": "ns/iter",
            "extra": "iterations: 1372\ncpu: 509760.49562681926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 518768.2172312659,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 518744.1089837976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 333445.1104206786,
            "unit": "ns/iter",
            "extra": "iterations: 2092\ncpu: 333423.37476099224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 499836.75448675774,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 499805.24048814917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19886.720335146158,
            "unit": "ns/iter",
            "extra": "iterations: 35328\ncpu: 19885.838428441893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 97836.16550279738,
            "unit": "ns/iter",
            "extra": "iterations: 7160\ncpu: 97831.43854748554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 79546.11939787086,
            "unit": "ns/iter",
            "extra": "iterations: 8769\ncpu: 79546.08279165228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 78803.48920135148,
            "unit": "ns/iter",
            "extra": "iterations: 8890\ncpu: 78797.63779527624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 79522.90223941016,
            "unit": "ns/iter",
            "extra": "iterations: 8797\ncpu: 79519.7226327154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 145004.62778695917,
            "unit": "ns/iter",
            "extra": "iterations: 4844\ncpu: 144998.08009908933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 602827.467881934,
            "unit": "ns/iter",
            "extra": "iterations: 1152\ncpu: 602794.7916666695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 510846.79200002115,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 510835.709090915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 511007.9488304109,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 510974.26900585194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 513028.8909358181,
            "unit": "ns/iter",
            "extra": "iterations: 1357\ncpu: 513005.15843773616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 333010.7064700118,
            "unit": "ns/iter",
            "extra": "iterations: 2102\ncpu: 332995.7659372055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 498636.7635714422,
            "unit": "ns/iter",
            "extra": "iterations: 1400\ncpu: 498613.2857142828 ns\nthreads: 1"
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
        "date": 1705957844125,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7701.732101793925,
            "unit": "ns/iter",
            "extra": "iterations: 90889\ncpu: 7701.653665460067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71799.22648995546,
            "unit": "ns/iter",
            "extra": "iterations: 11846\ncpu: 71794.09927401654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 137546.868715529,
            "unit": "ns/iter",
            "extra": "iterations: 6345\ncpu: 137541.65484633567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 202443.83485166667,
            "unit": "ns/iter",
            "extra": "iterations: 4281\ncpu: 202430.6003270263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 267840.8937167832,
            "unit": "ns/iter",
            "extra": "iterations: 3199\ncpu: 267839.91872460156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 329761.568945564,
            "unit": "ns/iter",
            "extra": "iterations: 2589\ncpu: 329758.5554268059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 392994.1093821598,
            "unit": "ns/iter",
            "extra": "iterations: 2185\ncpu: 392985.9496567504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 459551.5142405394,
            "unit": "ns/iter",
            "extra": "iterations: 1896\ncpu: 459540.0316455699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 526153.0030211608,
            "unit": "ns/iter",
            "extra": "iterations: 1655\ncpu: 526127.613293051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5689.747200079601,
            "unit": "ns/iter",
            "extra": "iterations: 121432\ncpu: 5689.66829171882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4869.172794168195,
            "unit": "ns/iter",
            "extra": "iterations: 144322\ncpu: 4869.202893529744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4840.843227199413,
            "unit": "ns/iter",
            "extra": "iterations: 144534\ncpu: 4840.708760568452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4894.225170144629,
            "unit": "ns/iter",
            "extra": "iterations: 143114\ncpu: 4894.163394217202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8393.91185056061,
            "unit": "ns/iter",
            "extra": "iterations: 83245\ncpu: 8393.581596492286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 28992.68950924402,
            "unit": "ns/iter",
            "extra": "iterations: 28120\ncpu: 28991.08819345667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 118634.17626600851,
            "unit": "ns/iter",
            "extra": "iterations: 7188\ncpu: 118626.34947134074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 96553.11755378943,
            "unit": "ns/iter",
            "extra": "iterations: 8830\ncpu: 96544.77916194797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 95789.74620316505,
            "unit": "ns/iter",
            "extra": "iterations: 8889\ncpu: 95786.10642366968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 95696.37247191014,
            "unit": "ns/iter",
            "extra": "iterations: 8900\ncpu: 95696.88764044938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 257485.74741813284,
            "unit": "ns/iter",
            "extra": "iterations: 3389\ncpu: 257475.42047801774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2113774.493181805,
            "unit": "ns/iter",
            "extra": "iterations: 440\ncpu: 2113693.409090905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1737670.3910614676,
            "unit": "ns/iter",
            "extra": "iterations: 537\ncpu: 1737618.0633147103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1688105.4800001038,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1688092.7272727254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1725897.999999983,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1725856.4814814832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1035193.0369540607,
            "unit": "ns/iter",
            "extra": "iterations: 893\ncpu: 1035170.3247480401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1687207.4486486414,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1687123.4234234283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 7092380.199999298,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7092260.000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 3992424.9102563034,
            "unit": "ns/iter",
            "extra": "iterations: 234\ncpu: 3992327.7777777873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 8929871.008196874,
            "unit": "ns/iter",
            "extra": "iterations: 122\ncpu: 8929431.147540996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 29291.68081372142,
            "unit": "ns/iter",
            "extra": "iterations: 27921\ncpu: 29290.64503420362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 120297.80863935695,
            "unit": "ns/iter",
            "extra": "iterations: 7107\ncpu: 120298.42408892667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 97111.33371220737,
            "unit": "ns/iter",
            "extra": "iterations: 8798\ncpu: 97107.76312798304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 99002.88714915515,
            "unit": "ns/iter",
            "extra": "iterations: 8622\ncpu: 99001.65854790101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 98746.67520574346,
            "unit": "ns/iter",
            "extra": "iterations: 8627\ncpu: 98744.0477570413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 260509.4334226924,
            "unit": "ns/iter",
            "extra": "iterations: 3357\ncpu: 260510.66428358672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 2126087.597254135,
            "unit": "ns/iter",
            "extra": "iterations: 437\ncpu: 2126013.9588100733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 1741177.259813089,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1741148.4112149486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 1692194.7765567377,
            "unit": "ns/iter",
            "extra": "iterations: 546\ncpu: 1692132.9670329674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 1729063.5780669672,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1729071.1895910802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 1034846.5308642058,
            "unit": "ns/iter",
            "extra": "iterations: 891\ncpu: 1034741.3019079666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 1672773.0090091068,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1672720.9009008992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 7130171.480000627,
            "unit": "ns/iter",
            "extra": "iterations: 100\ncpu: 7129522.999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 4104768.0043670465,
            "unit": "ns/iter",
            "extra": "iterations: 229\ncpu: 4104684.279475976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 28675.495272118107,
            "unit": "ns/iter",
            "extra": "iterations: 28554\ncpu: 28675.180360019564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 119258.6011376237,
            "unit": "ns/iter",
            "extra": "iterations: 7208\ncpu: 119254.5643729185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 96280.96089448109,
            "unit": "ns/iter",
            "extra": "iterations: 8899\ncpu: 96281.52601415911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 95869.59353322438,
            "unit": "ns/iter",
            "extra": "iterations: 8938\ncpu: 95868.65070485542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 96245.1703913686,
            "unit": "ns/iter",
            "extra": "iterations: 8815\ncpu: 96239.12648893934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 257721.64966086933,
            "unit": "ns/iter",
            "extra": "iterations: 3391\ncpu: 257703.59775877174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 2095357.6659139881,
            "unit": "ns/iter",
            "extra": "iterations: 443\ncpu: 2095189.1647855407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 1727902.377777784,
            "unit": "ns/iter",
            "extra": "iterations: 540\ncpu: 1727744.8148148109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 1688489.7554347888,
            "unit": "ns/iter",
            "extra": "iterations: 552\ncpu: 1688330.0724637625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 1710214.1879561725,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1710075.3649635059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 1026467.8439242123,
            "unit": "ns/iter",
            "extra": "iterations: 897\ncpu: 1026419.1750278724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 1661163.8998211497,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1661042.754919507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 3074.02419957246,
            "unit": "ns/iter",
            "extra": "iterations: 227566\ncpu: 3073.8124324371884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 15137.939206250343,
            "unit": "ns/iter",
            "extra": "iterations: 46337\ncpu: 15136.487040593765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 11897.204079550003,
            "unit": "ns/iter",
            "extra": "iterations: 58830\ncpu: 11896.262111167816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 11822.699216506826,
            "unit": "ns/iter",
            "extra": "iterations: 59222\ncpu: 11822.192766201824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 9956.503949468586,
            "unit": "ns/iter",
            "extra": "iterations: 70136\ncpu: 9955.790179080594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 61159.095358574436,
            "unit": "ns/iter",
            "extra": "iterations: 11462\ncpu: 61155.993718374215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 136093.07498057425,
            "unit": "ns/iter",
            "extra": "iterations: 5148\ncpu: 136075.466200466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 35637.63277786641,
            "unit": "ns/iter",
            "extra": "iterations: 19623\ncpu: 35636.752790093306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 35240.78161324936,
            "unit": "ns/iter",
            "extra": "iterations: 19873\ncpu: 35237.75977456883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 35531.746182335366,
            "unit": "ns/iter",
            "extra": "iterations: 19711\ncpu: 35530.72396124014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 72862.94340996144,
            "unit": "ns/iter",
            "extra": "iterations: 9613\ncpu: 72855.07125767159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 64496.42418939591,
            "unit": "ns/iter",
            "extra": "iterations: 10856\ncpu: 64492.474207812455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 20114.56431071238,
            "unit": "ns/iter",
            "extra": "iterations: 34862\ncpu: 20113.25512018853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 93955.49543992025,
            "unit": "ns/iter",
            "extra": "iterations: 7456\ncpu: 93945.8556866957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 76047.12430244434,
            "unit": "ns/iter",
            "extra": "iterations: 9139\ncpu: 76045.16905569607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 75438.00355297279,
            "unit": "ns/iter",
            "extra": "iterations: 9288\ncpu: 75431.70757967282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 76747.22504378676,
            "unit": "ns/iter",
            "extra": "iterations: 9136\ncpu: 76742.04246935179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 146866.55021009067,
            "unit": "ns/iter",
            "extra": "iterations: 4760\ncpu: 146856.02941176738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 593891.5708227246,
            "unit": "ns/iter",
            "extra": "iterations: 1179\ncpu: 593842.917726887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 507473.0145666082,
            "unit": "ns/iter",
            "extra": "iterations: 1373\ncpu: 507463.364894395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 504082.93420100014,
            "unit": "ns/iter",
            "extra": "iterations: 1383\ncpu: 504027.18727403606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 503551.45158963394,
            "unit": "ns/iter",
            "extra": "iterations: 1384\ncpu: 503547.47109826014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 335959.52019233815,
            "unit": "ns/iter",
            "extra": "iterations: 2080\ncpu: 335946.9230769258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 494905.62473500165,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 494887.13780918595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 19960.281698583654,
            "unit": "ns/iter",
            "extra": "iterations: 35041\ncpu: 19959.52170314738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 94544.87594187616,
            "unit": "ns/iter",
            "extra": "iterations: 7432\ncpu: 94539.55866523157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 77407.40876476951,
            "unit": "ns/iter",
            "extra": "iterations: 9059\ncpu: 77406.2589689806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 75679.48167368685,
            "unit": "ns/iter",
            "extra": "iterations: 9249\ncpu: 75674.04043680479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 78108.95738983978,
            "unit": "ns/iter",
            "extra": "iterations: 8965\ncpu: 78107.80814277777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 144620.82124406038,
            "unit": "ns/iter",
            "extra": "iterations: 4839\ncpu: 144614.89977268103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 594455.1828230724,
            "unit": "ns/iter",
            "extra": "iterations: 1176\ncpu: 594457.5680272094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 507330.4945533901,
            "unit": "ns/iter",
            "extra": "iterations: 1377\ncpu: 507332.6071169256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 501045.5132616379,
            "unit": "ns/iter",
            "extra": "iterations: 1395\ncpu: 500996.8458781352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 507287.49276405346,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 507268.7409551362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 337159.76714974764,
            "unit": "ns/iter",
            "extra": "iterations: 2070\ncpu: 337130.7246376873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 496653.44230769726,
            "unit": "ns/iter",
            "extra": "iterations: 1404\ncpu: 496649.0740740693 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}