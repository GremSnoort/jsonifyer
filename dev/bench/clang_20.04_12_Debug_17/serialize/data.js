window.BENCHMARK_DATA = {
  "lastUpdate": 1705772770277,
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
      }
    ]
  }
}