window.BENCHMARK_DATA = {
  "lastUpdate": 1702492214367,
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
      }
    ]
  }
}