window.BENCHMARK_DATA = {
  "lastUpdate": 1702381147959,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize gcc-10 20.04 Release c++-17": [
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
        "date": 1702381146170,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 928.7375864328263,
            "unit": "ns/iter",
            "extra": "iterations: 750872\ncpu: 928.7040933741039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18184.89966247403,
            "unit": "ns/iter",
            "extra": "iterations: 45626\ncpu: 18184.738964625434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 41992.62861562998,
            "unit": "ns/iter",
            "extra": "iterations: 21331\ncpu: 41990.90056724955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 52434.91499999777,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52433.130000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 63423.028935092356,
            "unit": "ns/iter",
            "extra": "iterations: 12649\ncpu: 63422.32587556329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 79093.28776653086,
            "unit": "ns/iter",
            "extra": "iterations: 11068\ncpu: 79090.80231297437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 94366.88256266523,
            "unit": "ns/iter",
            "extra": "iterations: 9256\ncpu: 94366.16248919621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 109625.16712741704,
            "unit": "ns/iter",
            "extra": "iterations: 7958\ncpu: 109621.66373460664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 137674.41373870394,
            "unit": "ns/iter",
            "extra": "iterations: 6973\ncpu: 137673.85630288272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 778.457225536665,
            "unit": "ns/iter",
            "extra": "iterations: 902279\ncpu: 778.4373791255254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 641.8220417410502,
            "unit": "ns/iter",
            "extra": "iterations: 1094605\ncpu: 641.813896337034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 644.1373858488813,
            "unit": "ns/iter",
            "extra": "iterations: 1087703\ncpu: 644.1168223310962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 629.5356467546958,
            "unit": "ns/iter",
            "extra": "iterations: 1111658\ncpu: 629.5298554051694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1197.7913687817352,
            "unit": "ns/iter",
            "extra": "iterations: 583139\ncpu: 1197.805497488591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5105.449280000016,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5105.112999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23991.034439070245,
            "unit": "ns/iter",
            "extra": "iterations: 34728\ncpu: 23990.710665745217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20996.14129269364,
            "unit": "ns/iter",
            "extra": "iterations: 39174\ncpu: 20995.28003267476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20498.023331928493,
            "unit": "ns/iter",
            "extra": "iterations: 40331\ncpu: 20497.73375319231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21281.835498747005,
            "unit": "ns/iter",
            "extra": "iterations: 37945\ncpu: 21281.33614441956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 59065.07355131331,
            "unit": "ns/iter",
            "extra": "iterations: 14099\ncpu: 59064.344989006386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 603184.7400000175,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603121.6000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 588242.0601202268,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 588218.5036740146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 581461.5915119067,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 581443.3687002639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 592685.7783051133,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 592644.4067796603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 346988.9589743564,
            "unit": "ns/iter",
            "extra": "iterations: 2535\ncpu: 346980.43392504915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 585994.0871621609,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 585977.0945945964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2696812.471751399,
            "unit": "ns/iter",
            "extra": "iterations: 354\ncpu: 2696756.497175143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1144453.976047918,
            "unit": "ns/iter",
            "extra": "iterations: 835\ncpu: 1144439.8802395216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3265700.152249087,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3265641.1764705903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5143.158239999934,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5142.913999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 24545.660298835923,
            "unit": "ns/iter",
            "extra": "iterations: 34601\ncpu: 24545.189445391825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 21062.427206366734,
            "unit": "ns/iter",
            "extra": "iterations: 39454\ncpu: 21061.73771987627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 20482.67566035916,
            "unit": "ns/iter",
            "extra": "iterations: 40584\ncpu: 20482.10624876802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 21407.44965962046,
            "unit": "ns/iter",
            "extra": "iterations: 39074\ncpu: 21406.920202692414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 59653.664810375405,
            "unit": "ns/iter",
            "extra": "iterations: 14186\ncpu: 59649.71803186214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 584276.4800000282,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584254.0999999954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 606851.2702888615,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 606805.0894085292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 601781.7286397978,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 601762.6110731383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 598194.1530612115,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 598172.4489795932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 341528.65943433926,
            "unit": "ns/iter",
            "extra": "iterations: 2581\ncpu: 341500.27121270815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 592693.167451244,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 592672.4949562879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2819874.3880598634,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2819788.955223867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1210814.6505718147,
            "unit": "ns/iter",
            "extra": "iterations: 787\ncpu: 1210800.8894536253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5184.548251602192,
            "unit": "ns/iter",
            "extra": "iterations: 153083\ncpu: 5184.3712234539435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 23973.751410640067,
            "unit": "ns/iter",
            "extra": "iterations: 34736\ncpu: 23972.99631506221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 19430.41244696534,
            "unit": "ns/iter",
            "extra": "iterations: 43368\ncpu: 19429.74312857398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18722.703673888976,
            "unit": "ns/iter",
            "extra": "iterations: 44721\ncpu: 18722.211041792507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 19091.10476039169,
            "unit": "ns/iter",
            "extra": "iterations: 44072\ncpu: 19090.51325104366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 58333.019582245804,
            "unit": "ns/iter",
            "extra": "iterations: 14554\ncpu: 58330.83001236734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 586310.8990000115,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 586318.6999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 605572.3666895013,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 605535.0239890364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 600324.5535836027,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 600305.0511945378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 596957.2154996732,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 596941.6723317493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 350194.16719617945,
            "unit": "ns/iter",
            "extra": "iterations: 2518\ncpu: 350181.61239078786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 593874.4966443137,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 593829.9999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 299.74442739878646,
            "unit": "ns/iter",
            "extra": "iterations: 2171293\ncpu: 299.72905545221175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2285.4773135187247,
            "unit": "ns/iter",
            "extra": "iterations: 306438\ncpu: 2285.345812203434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1803.5728428200184,
            "unit": "ns/iter",
            "extra": "iterations: 388192\ncpu: 1803.4954352485365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1772.7253293385818,
            "unit": "ns/iter",
            "extra": "iterations: 395186\ncpu: 1772.690328098676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1442.673502201517,
            "unit": "ns/iter",
            "extra": "iterations: 485112\ncpu: 1442.6452035818481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10638.365279465615,
            "unit": "ns/iter",
            "extra": "iterations: 65840\ncpu: 10638.147023086263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 30797.220401185445,
            "unit": "ns/iter",
            "extra": "iterations: 23979\ncpu: 30794.862171066095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7308.21045024416,
            "unit": "ns/iter",
            "extra": "iterations: 96170\ncpu: 7307.851720910892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7219.9076943725195,
            "unit": "ns/iter",
            "extra": "iterations: 96863\ncpu: 7219.286001878945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7204.6547582222165,
            "unit": "ns/iter",
            "extra": "iterations: 96990\ncpu: 7204.309722651818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15193.998654981251,
            "unit": "ns/iter",
            "extra": "iterations: 46096\ncpu: 15193.962599791716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14153.10680240379,
            "unit": "ns/iter",
            "extra": "iterations: 49409\ncpu: 14152.891173672895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3293.904836061157,
            "unit": "ns/iter",
            "extra": "iterations: 212549\ncpu: 3293.9472780393603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16050.095047099077,
            "unit": "ns/iter",
            "extra": "iterations: 43631\ncpu: 16049.231051316676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12882.176895706689,
            "unit": "ns/iter",
            "extra": "iterations: 54241\ncpu: 12881.740749617415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12950.306100157053,
            "unit": "ns/iter",
            "extra": "iterations: 54015\ncpu: 12949.232620568418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13568.094656191919,
            "unit": "ns/iter",
            "extra": "iterations: 51555\ncpu: 13567.380467461882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30580.724539877985,
            "unit": "ns/iter",
            "extra": "iterations: 22820\ncpu: 30578.466257668435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 139890.18859999758,
            "unit": "ns/iter",
            "extra": "iterations: 5000\ncpu: 139882.60000000137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 119547.37178608423,
            "unit": "ns/iter",
            "extra": "iterations: 5834\ncpu: 119546.50325677024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 119571.11168032361,
            "unit": "ns/iter",
            "extra": "iterations: 5856\ncpu: 119567.02527322264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 119765.41923867943,
            "unit": "ns/iter",
            "extra": "iterations: 5832\ncpu: 119762.99725651818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 69832.98876069143,
            "unit": "ns/iter",
            "extra": "iterations: 10054\ncpu: 69827.10364034168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 119164.41576454755,
            "unit": "ns/iter",
            "extra": "iterations: 5912\ncpu: 119158.5757780781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3238.772906632266,
            "unit": "ns/iter",
            "extra": "iterations: 213639\ncpu: 3238.4939079474825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15831.609683571342,
            "unit": "ns/iter",
            "extra": "iterations: 44054\ncpu: 15830.324147637204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12965.055353901955,
            "unit": "ns/iter",
            "extra": "iterations: 53998\ncpu: 12964.478314011541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12933.763624970656,
            "unit": "ns/iter",
            "extra": "iterations: 54257\ncpu: 12933.77813001078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13508.734553820299,
            "unit": "ns/iter",
            "extra": "iterations: 51728\ncpu: 13508.902335292418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30649.6295582874,
            "unit": "ns/iter",
            "extra": "iterations: 22843\ncpu: 30648.697631659077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 137031.9570443306,
            "unit": "ns/iter",
            "extra": "iterations: 5075\ncpu: 137029.12315270992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 119324.50833616419,
            "unit": "ns/iter",
            "extra": "iterations: 5878\ncpu: 119313.89928547131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 118258.85257819048,
            "unit": "ns/iter",
            "extra": "iterations: 5915\ncpu: 118251.02282333019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 118279.03390410842,
            "unit": "ns/iter",
            "extra": "iterations: 5840\ncpu: 118273.08219177996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 68792.5456262431,
            "unit": "ns/iter",
            "extra": "iterations: 10060\ncpu: 68791.37176938425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 115232.63322313945,
            "unit": "ns/iter",
            "extra": "iterations: 6050\ncpu: 115234.23140495892 ns\nthreads: 1"
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
          "id": "d50bb7d9db5207dc297814766d8c83b14fcc339b",
          "message": "More tests; More BMs; Separate BMs",
          "timestamp": "2023-12-12T14:29:05+03:00",
          "tree_id": "f44cff78a7d652bd003cb40812243c64e409e254",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d50bb7d9db5207dc297814766d8c83b14fcc339b"
        },
        "date": 1702381146170,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 928.7375864328263,
            "unit": "ns/iter",
            "extra": "iterations: 750872\ncpu: 928.7040933741039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18184.89966247403,
            "unit": "ns/iter",
            "extra": "iterations: 45626\ncpu: 18184.738964625434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 41992.62861562998,
            "unit": "ns/iter",
            "extra": "iterations: 21331\ncpu: 41990.90056724955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 52434.91499999777,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52433.130000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 63423.028935092356,
            "unit": "ns/iter",
            "extra": "iterations: 12649\ncpu: 63422.32587556329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 79093.28776653086,
            "unit": "ns/iter",
            "extra": "iterations: 11068\ncpu: 79090.80231297437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 94366.88256266523,
            "unit": "ns/iter",
            "extra": "iterations: 9256\ncpu: 94366.16248919621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 109625.16712741704,
            "unit": "ns/iter",
            "extra": "iterations: 7958\ncpu: 109621.66373460664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 137674.41373870394,
            "unit": "ns/iter",
            "extra": "iterations: 6973\ncpu: 137673.85630288272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 778.457225536665,
            "unit": "ns/iter",
            "extra": "iterations: 902279\ncpu: 778.4373791255254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 641.8220417410502,
            "unit": "ns/iter",
            "extra": "iterations: 1094605\ncpu: 641.813896337034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 644.1373858488813,
            "unit": "ns/iter",
            "extra": "iterations: 1087703\ncpu: 644.1168223310962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 629.5356467546958,
            "unit": "ns/iter",
            "extra": "iterations: 1111658\ncpu: 629.5298554051694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1197.7913687817352,
            "unit": "ns/iter",
            "extra": "iterations: 583139\ncpu: 1197.805497488591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5105.449280000016,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5105.112999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23991.034439070245,
            "unit": "ns/iter",
            "extra": "iterations: 34728\ncpu: 23990.710665745217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20996.14129269364,
            "unit": "ns/iter",
            "extra": "iterations: 39174\ncpu: 20995.28003267476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20498.023331928493,
            "unit": "ns/iter",
            "extra": "iterations: 40331\ncpu: 20497.73375319231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21281.835498747005,
            "unit": "ns/iter",
            "extra": "iterations: 37945\ncpu: 21281.33614441956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 59065.07355131331,
            "unit": "ns/iter",
            "extra": "iterations: 14099\ncpu: 59064.344989006386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 603184.7400000175,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603121.6000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 588242.0601202268,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 588218.5036740146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 581461.5915119067,
            "unit": "ns/iter",
            "extra": "iterations: 1508\ncpu: 581443.3687002639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 592685.7783051133,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 592644.4067796603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 346988.9589743564,
            "unit": "ns/iter",
            "extra": "iterations: 2535\ncpu: 346980.43392504915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 585994.0871621609,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 585977.0945945964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2696812.471751399,
            "unit": "ns/iter",
            "extra": "iterations: 354\ncpu: 2696756.497175143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1144453.976047918,
            "unit": "ns/iter",
            "extra": "iterations: 835\ncpu: 1144439.8802395216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3265700.152249087,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3265641.1764705903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5143.158239999934,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5142.913999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 24545.660298835923,
            "unit": "ns/iter",
            "extra": "iterations: 34601\ncpu: 24545.189445391825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 21062.427206366734,
            "unit": "ns/iter",
            "extra": "iterations: 39454\ncpu: 21061.73771987627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 20482.67566035916,
            "unit": "ns/iter",
            "extra": "iterations: 40584\ncpu: 20482.10624876802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 21407.44965962046,
            "unit": "ns/iter",
            "extra": "iterations: 39074\ncpu: 21406.920202692414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 59653.664810375405,
            "unit": "ns/iter",
            "extra": "iterations: 14186\ncpu: 59649.71803186214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 584276.4800000282,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584254.0999999954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 606851.2702888615,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 606805.0894085292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 601781.7286397978,
            "unit": "ns/iter",
            "extra": "iterations: 1463\ncpu: 601762.6110731383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 598194.1530612115,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 598172.4489795932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 341528.65943433926,
            "unit": "ns/iter",
            "extra": "iterations: 2581\ncpu: 341500.27121270815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 592693.167451244,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 592672.4949562879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2819874.3880598634,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2819788.955223867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1210814.6505718147,
            "unit": "ns/iter",
            "extra": "iterations: 787\ncpu: 1210800.8894536253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5184.548251602192,
            "unit": "ns/iter",
            "extra": "iterations: 153083\ncpu: 5184.3712234539435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 23973.751410640067,
            "unit": "ns/iter",
            "extra": "iterations: 34736\ncpu: 23972.99631506221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 19430.41244696534,
            "unit": "ns/iter",
            "extra": "iterations: 43368\ncpu: 19429.74312857398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18722.703673888976,
            "unit": "ns/iter",
            "extra": "iterations: 44721\ncpu: 18722.211041792507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 19091.10476039169,
            "unit": "ns/iter",
            "extra": "iterations: 44072\ncpu: 19090.51325104366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 58333.019582245804,
            "unit": "ns/iter",
            "extra": "iterations: 14554\ncpu: 58330.83001236734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 586310.8990000115,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 586318.6999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 605572.3666895013,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 605535.0239890364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 600324.5535836027,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 600305.0511945378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 596957.2154996732,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 596941.6723317493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 350194.16719617945,
            "unit": "ns/iter",
            "extra": "iterations: 2518\ncpu: 350181.61239078786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 593874.4966443137,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 593829.9999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 299.74442739878646,
            "unit": "ns/iter",
            "extra": "iterations: 2171293\ncpu: 299.72905545221175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2285.4773135187247,
            "unit": "ns/iter",
            "extra": "iterations: 306438\ncpu: 2285.345812203434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1803.5728428200184,
            "unit": "ns/iter",
            "extra": "iterations: 388192\ncpu: 1803.4954352485365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1772.7253293385818,
            "unit": "ns/iter",
            "extra": "iterations: 395186\ncpu: 1772.690328098676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1442.673502201517,
            "unit": "ns/iter",
            "extra": "iterations: 485112\ncpu: 1442.6452035818481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10638.365279465615,
            "unit": "ns/iter",
            "extra": "iterations: 65840\ncpu: 10638.147023086263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 30797.220401185445,
            "unit": "ns/iter",
            "extra": "iterations: 23979\ncpu: 30794.862171066095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7308.21045024416,
            "unit": "ns/iter",
            "extra": "iterations: 96170\ncpu: 7307.851720910892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7219.9076943725195,
            "unit": "ns/iter",
            "extra": "iterations: 96863\ncpu: 7219.286001878945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7204.6547582222165,
            "unit": "ns/iter",
            "extra": "iterations: 96990\ncpu: 7204.309722651818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15193.998654981251,
            "unit": "ns/iter",
            "extra": "iterations: 46096\ncpu: 15193.962599791716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14153.10680240379,
            "unit": "ns/iter",
            "extra": "iterations: 49409\ncpu: 14152.891173672895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3293.904836061157,
            "unit": "ns/iter",
            "extra": "iterations: 212549\ncpu: 3293.9472780393603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16050.095047099077,
            "unit": "ns/iter",
            "extra": "iterations: 43631\ncpu: 16049.231051316676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12882.176895706689,
            "unit": "ns/iter",
            "extra": "iterations: 54241\ncpu: 12881.740749617415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12950.306100157053,
            "unit": "ns/iter",
            "extra": "iterations: 54015\ncpu: 12949.232620568418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13568.094656191919,
            "unit": "ns/iter",
            "extra": "iterations: 51555\ncpu: 13567.380467461882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30580.724539877985,
            "unit": "ns/iter",
            "extra": "iterations: 22820\ncpu: 30578.466257668435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 139890.18859999758,
            "unit": "ns/iter",
            "extra": "iterations: 5000\ncpu: 139882.60000000137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 119547.37178608423,
            "unit": "ns/iter",
            "extra": "iterations: 5834\ncpu: 119546.50325677024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 119571.11168032361,
            "unit": "ns/iter",
            "extra": "iterations: 5856\ncpu: 119567.02527322264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 119765.41923867943,
            "unit": "ns/iter",
            "extra": "iterations: 5832\ncpu: 119762.99725651818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 69832.98876069143,
            "unit": "ns/iter",
            "extra": "iterations: 10054\ncpu: 69827.10364034168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 119164.41576454755,
            "unit": "ns/iter",
            "extra": "iterations: 5912\ncpu: 119158.5757780781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3238.772906632266,
            "unit": "ns/iter",
            "extra": "iterations: 213639\ncpu: 3238.4939079474825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15831.609683571342,
            "unit": "ns/iter",
            "extra": "iterations: 44054\ncpu: 15830.324147637204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12965.055353901955,
            "unit": "ns/iter",
            "extra": "iterations: 53998\ncpu: 12964.478314011541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12933.763624970656,
            "unit": "ns/iter",
            "extra": "iterations: 54257\ncpu: 12933.77813001078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13508.734553820299,
            "unit": "ns/iter",
            "extra": "iterations: 51728\ncpu: 13508.902335292418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30649.6295582874,
            "unit": "ns/iter",
            "extra": "iterations: 22843\ncpu: 30648.697631659077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 137031.9570443306,
            "unit": "ns/iter",
            "extra": "iterations: 5075\ncpu: 137029.12315270992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 119324.50833616419,
            "unit": "ns/iter",
            "extra": "iterations: 5878\ncpu: 119313.89928547131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 118258.85257819048,
            "unit": "ns/iter",
            "extra": "iterations: 5915\ncpu: 118251.02282333019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 118279.03390410842,
            "unit": "ns/iter",
            "extra": "iterations: 5840\ncpu: 118273.08219177996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 68792.5456262431,
            "unit": "ns/iter",
            "extra": "iterations: 10060\ncpu: 68791.37176938425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 115232.63322313945,
            "unit": "ns/iter",
            "extra": "iterations: 6050\ncpu: 115234.23140495892 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}