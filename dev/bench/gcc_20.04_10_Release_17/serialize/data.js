window.BENCHMARK_DATA = {
  "lastUpdate": 1702391751365,
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
          "id": "7f7a954178065768f16bab445a1789e66eddbd11",
          "message": "Add Clang Builds",
          "timestamp": "2023-12-12T14:44:55+03:00",
          "tree_id": "5a4deefbb08f6ba5a30c260d4700f1c6aeccac34",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/7f7a954178065768f16bab445a1789e66eddbd11"
        },
        "date": 1702382277922,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 886.0212549692947,
            "unit": "ns/iter",
            "extra": "iterations: 786075\ncpu: 886.0097318958116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18134.044465903866,
            "unit": "ns/iter",
            "extra": "iterations: 45563\ncpu: 18133.59085222659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 41899.02209839554,
            "unit": "ns/iter",
            "extra": "iterations: 20997\ncpu: 41896.98528361194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 52107.69389999541,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52106.94 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 63004.408933599625,
            "unit": "ns/iter",
            "extra": "iterations: 12425\ncpu: 63001.110663983876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 79250.37143632829,
            "unit": "ns/iter",
            "extra": "iterations: 11049\ncpu: 79247.44320753003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 94118.70389666811,
            "unit": "ns/iter",
            "extra": "iterations: 9213\ncpu: 94114.90285466194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 109928.3019509137,
            "unit": "ns/iter",
            "extra": "iterations: 7945\ncpu: 109925.1101321586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 137496.04034706988,
            "unit": "ns/iter",
            "extra": "iterations: 6915\ncpu: 137488.61894432394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 738.6474795716113,
            "unit": "ns/iter",
            "extra": "iterations: 945375\ncpu: 738.6382123495962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 600.9155093608739,
            "unit": "ns/iter",
            "extra": "iterations: 1150589\ncpu: 600.8944983830028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 611.6470072268093,
            "unit": "ns/iter",
            "extra": "iterations: 1140063\ncpu: 611.6333044752796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 596.4736842997631,
            "unit": "ns/iter",
            "extra": "iterations: 1179410\ncpu: 596.4607727592617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1205.620132457597,
            "unit": "ns/iter",
            "extra": "iterations: 578449\ncpu: 1205.592195681902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5119.625100000462,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5119.458000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23972.911026616195,
            "unit": "ns/iter",
            "extra": "iterations: 34190\ncpu: 23972.199473530283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20961.18681402945,
            "unit": "ns/iter",
            "extra": "iterations: 39087\ncpu: 20960.946094609477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 19383.548443150783,
            "unit": "ns/iter",
            "extra": "iterations: 42586\ncpu: 19383.111820786162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 20790.349214793212,
            "unit": "ns/iter",
            "extra": "iterations: 39480\ncpu: 20790.119047619002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 59932.5445622008,
            "unit": "ns/iter",
            "extra": "iterations: 14059\ncpu: 59930.83434099171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 597930.3120000168,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597912.400000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 589267.242134084,
            "unit": "ns/iter",
            "extra": "iterations: 1462\ncpu: 589248.0164158688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 580369.9762689506,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 580348.9123269618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 582927.9824324258,
            "unit": "ns/iter",
            "extra": "iterations: 1480\ncpu: 582920.0675675663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 341546.13395277015,
            "unit": "ns/iter",
            "extra": "iterations: 2583\ncpu: 341533.29461866064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 591572.7792823027,
            "unit": "ns/iter",
            "extra": "iterations: 1477\ncpu: 591562.288422476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2683717.7275280505,
            "unit": "ns/iter",
            "extra": "iterations: 356\ncpu: 2683670.5056179827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1161714.650851613,
            "unit": "ns/iter",
            "extra": "iterations: 822\ncpu: 1161683.6982968359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3260264.8719722363,
            "unit": "ns/iter",
            "extra": "iterations: 289\ncpu: 3260178.8927335716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 6723.185769999987,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 6722.943000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 24257.752206992533,
            "unit": "ns/iter",
            "extra": "iterations: 34436\ncpu: 24257.291787664104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 21240.264894942047,
            "unit": "ns/iter",
            "extra": "iterations: 39359\ncpu: 21239.29723824291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 20794.673272750308,
            "unit": "ns/iter",
            "extra": "iterations: 40165\ncpu: 20794.425494833875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 21452.073755282574,
            "unit": "ns/iter",
            "extra": "iterations: 38804\ncpu: 21451.56942583239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 58329.67466370923,
            "unit": "ns/iter",
            "extra": "iterations: 14422\ncpu: 58329.08750520011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 582759.0630000259,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 582739.9999999941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 612835.0299234458,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 612828.670842034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 602165.4863013581,
            "unit": "ns/iter",
            "extra": "iterations: 1460\ncpu: 602150.753424658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 599584.064758012,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 599560.804362643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 340482.02448502794,
            "unit": "ns/iter",
            "extra": "iterations: 2573\ncpu: 340478.46871356317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 595074.4379217103,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 595067.4089068808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2796821.3601189023,
            "unit": "ns/iter",
            "extra": "iterations: 336\ncpu: 2796723.2142857066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1165909.6110428928,
            "unit": "ns/iter",
            "extra": "iterations: 815\ncpu: 1165879.0184049096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5386.1922295217155,
            "unit": "ns/iter",
            "extra": "iterations: 152526\ncpu: 5385.869950041291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 24189.504147437623,
            "unit": "ns/iter",
            "extra": "iterations: 34238\ncpu: 24188.816519656528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 19406.558115109976,
            "unit": "ns/iter",
            "extra": "iterations: 42846\ncpu: 19405.531438174017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 19053.139270866228,
            "unit": "ns/iter",
            "extra": "iterations: 43778\ncpu: 19052.50810909592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 19257.59813105757,
            "unit": "ns/iter",
            "extra": "iterations: 43233\ncpu: 19256.912543658702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 58459.353948286385,
            "unit": "ns/iter",
            "extra": "iterations: 14310\ncpu: 58457.60307477272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 573719.6609999841,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573678.000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 626968.5784844583,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 626930.3112313938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 595779.8985215188,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 595777.4193548404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 593086.0783657006,
            "unit": "ns/iter",
            "extra": "iterations: 1493\ncpu: 593079.3034159432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 346595.26073258126,
            "unit": "ns/iter",
            "extra": "iterations: 2539\ncpu: 346591.8471839305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 593893.6417611731,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 593883.122081386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 324.3004318692844,
            "unit": "ns/iter",
            "extra": "iterations: 1846392\ncpu: 324.2919705024735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2724.865614465919,
            "unit": "ns/iter",
            "extra": "iterations: 256605\ncpu: 2724.8319401414547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2029.1062988244942,
            "unit": "ns/iter",
            "extra": "iterations: 344858\ncpu: 2029.0757355201213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2202.468406438406,
            "unit": "ns/iter",
            "extra": "iterations: 319084\ncpu: 2202.432274886867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1728.3186459383235,
            "unit": "ns/iter",
            "extra": "iterations: 405949\ncpu: 1728.275965700117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10690.456782392139,
            "unit": "ns/iter",
            "extra": "iterations: 65471\ncpu: 10690.331597195593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 28829.24934850108,
            "unit": "ns/iter",
            "extra": "iterations: 24175\ncpu: 28828.645294725477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7132.221465873165,
            "unit": "ns/iter",
            "extra": "iterations: 98426\ncpu: 7132.19372929915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7090.997187731203,
            "unit": "ns/iter",
            "extra": "iterations: 98497\ncpu: 7090.966222321485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7050.0866920989065,
            "unit": "ns/iter",
            "extra": "iterations: 100136\ncpu: 7049.825237676822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15141.36246235191,
            "unit": "ns/iter",
            "extra": "iterations: 46151\ncpu: 15141.143203830763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 13812.312756555188,
            "unit": "ns/iter",
            "extra": "iterations: 50915\ncpu: 13812.033781793136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3229.904764303863,
            "unit": "ns/iter",
            "extra": "iterations: 218353\ncpu: 3229.890132033945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15438.673676560988,
            "unit": "ns/iter",
            "extra": "iterations: 45412\ncpu: 15438.247599753437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12761.083731492263,
            "unit": "ns/iter",
            "extra": "iterations: 55045\ncpu: 12760.941048233311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12817.83678355668,
            "unit": "ns/iter",
            "extra": "iterations: 54296\ncpu: 12817.776631796087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13258.326878797978,
            "unit": "ns/iter",
            "extra": "iterations: 52986\ncpu: 13258.15687162669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 31106.44438507255,
            "unit": "ns/iter",
            "extra": "iterations: 22458\ncpu: 31106.305102858623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 136078.08049776213,
            "unit": "ns/iter",
            "extra": "iterations: 5143\ncpu: 136074.8006999809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 118704.3973023817,
            "unit": "ns/iter",
            "extra": "iterations: 5857\ncpu: 118703.89277787393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 118023.86571188111,
            "unit": "ns/iter",
            "extra": "iterations: 5935\ncpu: 118022.2746419528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 119487.74207835847,
            "unit": "ns/iter",
            "extra": "iterations: 5870\ncpu: 119486.18398637073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 69320.35783633582,
            "unit": "ns/iter",
            "extra": "iterations: 10094\ncpu: 69319.44719635516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 118260.26025771539,
            "unit": "ns/iter",
            "extra": "iterations: 5898\ncpu: 118256.29026788812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3293.9194797682067,
            "unit": "ns/iter",
            "extra": "iterations: 221286\ncpu: 3293.784966062039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15736.90402448926,
            "unit": "ns/iter",
            "extra": "iterations: 44428\ncpu: 15735.995318267936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12703.843899674339,
            "unit": "ns/iter",
            "extra": "iterations: 54702\ncpu: 12703.140652992515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12608.75581666497,
            "unit": "ns/iter",
            "extra": "iterations: 55745\ncpu: 12608.418692259278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13308.845874852157,
            "unit": "ns/iter",
            "extra": "iterations: 52386\ncpu: 13308.788607643233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30143.169190512774,
            "unit": "ns/iter",
            "extra": "iterations: 23311\ncpu: 30142.790957058573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 134299.30705705268,
            "unit": "ns/iter",
            "extra": "iterations: 5328\ncpu: 134297.03453453415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 117635.93692333257,
            "unit": "ns/iter",
            "extra": "iterations: 5961\ncpu: 117634.23922160725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 115921.0665443639,
            "unit": "ns/iter",
            "extra": "iterations: 5996\ncpu: 115918.64576384294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 117428.99000170022,
            "unit": "ns/iter",
            "extra": "iterations: 5901\ncpu: 117427.43602779295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 67661.73225344904,
            "unit": "ns/iter",
            "extra": "iterations: 10495\ncpu: 67659.73320628893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 116537.29147465863,
            "unit": "ns/iter",
            "extra": "iterations: 6076\ncpu: 116535.69782751738 ns\nthreads: 1"
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
          "id": "d1143eedaeca215bd4d59936eed187ebbc5a2705",
          "message": "uncomment",
          "timestamp": "2023-12-12T16:24:18+03:00",
          "tree_id": "24d13ef9110c03a703c985f6237d2ba22581ead7",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d1143eedaeca215bd4d59936eed187ebbc5a2705"
        },
        "date": 1702388101112,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 920.1973697206789,
            "unit": "ns/iter",
            "extra": "iterations: 759311\ncpu: 920.1743422655541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18356.36858803753,
            "unit": "ns/iter",
            "extra": "iterations: 45072\ncpu: 18355.877263045793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 41833.56145803781,
            "unit": "ns/iter",
            "extra": "iterations: 21234\ncpu: 41832.24545540172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 52423.93990000096,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52422.450000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 63784.7577319588,
            "unit": "ns/iter",
            "extra": "iterations: 12416\ncpu: 63784.42332474229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 79238.58191576767,
            "unit": "ns/iter",
            "extra": "iterations: 10993\ncpu: 79237.52387883198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 94790.4845159138,
            "unit": "ns/iter",
            "extra": "iterations: 9203\ncpu: 94782.67956101277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 122209.27918782207,
            "unit": "ns/iter",
            "extra": "iterations: 7880\ncpu: 122202.33502538073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 139213.99663677154,
            "unit": "ns/iter",
            "extra": "iterations: 6244\ncpu: 139206.0858424087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 751.3775406100242,
            "unit": "ns/iter",
            "extra": "iterations: 931174\ncpu: 751.335947953872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 609.6937420878218,
            "unit": "ns/iter",
            "extra": "iterations: 1084563\ncpu: 609.6358625547815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 637.3489550533347,
            "unit": "ns/iter",
            "extra": "iterations: 1094075\ncpu: 637.3120672714383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 618.2797720319837,
            "unit": "ns/iter",
            "extra": "iterations: 1132615\ncpu: 618.2807926788888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1232.0996935100864,
            "unit": "ns/iter",
            "extra": "iterations: 563477\ncpu: 1232.0224250501778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5415.771601163313,
            "unit": "ns/iter",
            "extra": "iterations: 147168\ncpu: 5415.777207001532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23866.867989194816,
            "unit": "ns/iter",
            "extra": "iterations: 34429\ncpu: 23866.246478259593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 21026.662749079424,
            "unit": "ns/iter",
            "extra": "iterations: 39395\ncpu: 21026.521132123373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20483.233596583064,
            "unit": "ns/iter",
            "extra": "iterations: 40266\ncpu: 20482.921074852216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21268.413237647103,
            "unit": "ns/iter",
            "extra": "iterations: 38738\ncpu: 21267.36279622075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 58746.555641970765,
            "unit": "ns/iter",
            "extra": "iterations: 14144\ncpu: 58744.131787330385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 601497.4470000424,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 601449.7999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 586312.4966261787,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 586280.7692307694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 611206.6570469992,
            "unit": "ns/iter",
            "extra": "iterations: 1490\ncpu: 611172.8859060408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 581427.1720867082,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 581372.154471546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 342964.38962558605,
            "unit": "ns/iter",
            "extra": "iterations: 2564\ncpu: 342948.3229329178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 585492.8172043071,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 585439.5161290332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2675237.632768336,
            "unit": "ns/iter",
            "extra": "iterations: 354\ncpu: 2675060.7344632773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1135494.6359338595,
            "unit": "ns/iter",
            "extra": "iterations: 846\ncpu: 1135416.6666666688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3290860.5174825555,
            "unit": "ns/iter",
            "extra": "iterations: 286\ncpu: 3290615.734265742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5162.5334800002065,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5162.456999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 24041.989554636835,
            "unit": "ns/iter",
            "extra": "iterations: 34848\ncpu: 24041.201790633535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 21026.96594098506,
            "unit": "ns/iter",
            "extra": "iterations: 39549\ncpu: 21025.355887633075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 20595.394961105845,
            "unit": "ns/iter",
            "extra": "iterations: 40366\ncpu: 20594.936332557056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 21321.557931210515,
            "unit": "ns/iter",
            "extra": "iterations: 38960\ncpu: 21321.357802874616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 50337.55540000016,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50335.76999999951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 597536.424999987,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597527.5999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 500461.70499996375,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500463.7999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 627810.0540925026,
            "unit": "ns/iter",
            "extra": "iterations: 1405\ncpu: 627811.6014234903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 623585.9327195421,
            "unit": "ns/iter",
            "extra": "iterations: 1412\ncpu: 623573.7252124638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 352552.7593712306,
            "unit": "ns/iter",
            "extra": "iterations: 2481\ncpu: 352549.8186215216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 613872.7446067865,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 613871.2595685478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2851652.6139817853,
            "unit": "ns/iter",
            "extra": "iterations: 329\ncpu: 2851566.8693009233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1166856.5443349606,
            "unit": "ns/iter",
            "extra": "iterations: 812\ncpu: 1166742.4876847279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5282.385371425702,
            "unit": "ns/iter",
            "extra": "iterations: 150582\ncpu: 5282.1306663479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 23941.920123820964,
            "unit": "ns/iter",
            "extra": "iterations: 34566\ncpu: 23940.201353931618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 19211.70140988004,
            "unit": "ns/iter",
            "extra": "iterations: 43337\ncpu: 19210.63986893421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18896.615466533196,
            "unit": "ns/iter",
            "extra": "iterations: 44134\ncpu: 18895.273485294856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 19077.006723688995,
            "unit": "ns/iter",
            "extra": "iterations: 43726\ncpu: 19076.416777203518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 58186.64126023397,
            "unit": "ns/iter",
            "extra": "iterations: 14537\ncpu: 58182.49982802501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 584783.208000033,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 584776.0999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 598385.6967212802,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 598342.6912568327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 601551.8398914232,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 601509.4979647234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 595574.7388664222,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 595543.7246963591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 352299.77702431986,
            "unit": "ns/iter",
            "extra": "iterations: 2507\ncpu: 352276.9445552474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 602878.7411202214,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 602833.6748633919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 349.8477041840483,
            "unit": "ns/iter",
            "extra": "iterations: 2010331\ncpu: 349.83060003551725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2563.519651218626,
            "unit": "ns/iter",
            "extra": "iterations: 271230\ncpu: 2563.3108431958103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1967.3933928967767,
            "unit": "ns/iter",
            "extra": "iterations: 356707\ncpu: 1967.300333326797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2016.4396451302964,
            "unit": "ns/iter",
            "extra": "iterations: 344239\ncpu: 2016.184976135782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1600.2684257956676,
            "unit": "ns/iter",
            "extra": "iterations: 436087\ncpu: 1600.1880358735755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10700.881546685174,
            "unit": "ns/iter",
            "extra": "iterations: 65663\ncpu: 10700.231485006867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 30903.59541377804,
            "unit": "ns/iter",
            "extra": "iterations: 22633\ncpu: 30901.886625723986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7166.827851867338,
            "unit": "ns/iter",
            "extra": "iterations: 97480\ncpu: 7166.847558473593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7200.312179217037,
            "unit": "ns/iter",
            "extra": "iterations: 97223\ncpu: 7199.64103144312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7183.999876744869,
            "unit": "ns/iter",
            "extra": "iterations: 97359\ncpu: 7183.602954015589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15494.372767708668,
            "unit": "ns/iter",
            "extra": "iterations: 45189\ncpu: 15493.226227621664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14353.54277075248,
            "unit": "ns/iter",
            "extra": "iterations: 48947\ncpu: 14352.853085991106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3221.9892976251635,
            "unit": "ns/iter",
            "extra": "iterations: 217989\ncpu: 3221.7813742895078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15770.004332697374,
            "unit": "ns/iter",
            "extra": "iterations: 44545\ncpu: 15769.058255696547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12889.409434942414,
            "unit": "ns/iter",
            "extra": "iterations: 53906\ncpu: 12889.030905650405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12788.716120897689,
            "unit": "ns/iter",
            "extra": "iterations: 54724\ncpu: 12788.23185439682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13379.420281861723,
            "unit": "ns/iter",
            "extra": "iterations: 52579\ncpu: 13378.963084120987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 31010.44004263817,
            "unit": "ns/iter",
            "extra": "iterations: 22516\ncpu: 31006.497601705487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 139070.96825396607,
            "unit": "ns/iter",
            "extra": "iterations: 5103\ncpu: 139065.82402508226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 118786.13795446578,
            "unit": "ns/iter",
            "extra": "iterations: 5886\ncpu: 118783.77505946315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 118856.05023760795,
            "unit": "ns/iter",
            "extra": "iterations: 5892\ncpu: 118853.58112695014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 119450.72550690643,
            "unit": "ns/iter",
            "extra": "iterations: 5869\ncpu: 119450.94564662002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 69885.7543214789,
            "unit": "ns/iter",
            "extra": "iterations: 10066\ncpu: 69883.58831710678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 118246.24235771534,
            "unit": "ns/iter",
            "extra": "iterations: 5921\ncpu: 118243.4048302657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3185.245332593999,
            "unit": "ns/iter",
            "extra": "iterations: 219983\ncpu: 3185.169308537442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15939.328190234603,
            "unit": "ns/iter",
            "extra": "iterations: 44072\ncpu: 15939.190415683432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12803.845133713805,
            "unit": "ns/iter",
            "extra": "iterations: 54744\ncpu: 12803.313605143965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12671.557381206785,
            "unit": "ns/iter",
            "extra": "iterations: 55201\ncpu: 12671.268636437526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13476.143302540957,
            "unit": "ns/iter",
            "extra": "iterations: 51960\ncpu: 13475.866050808205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30184.54421503872,
            "unit": "ns/iter",
            "extra": "iterations: 23103\ncpu: 30183.941479461824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 136569.23631405085,
            "unit": "ns/iter",
            "extra": "iterations: 5133\ncpu: 136569.45256185628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 117554.6590565752,
            "unit": "ns/iter",
            "extra": "iterations: 5957\ncpu: 117549.40406244765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 118243.90350584629,
            "unit": "ns/iter",
            "extra": "iterations: 5990\ncpu: 118241.50250417393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 116894.72567996413,
            "unit": "ns/iter",
            "extra": "iterations: 5993\ncpu: 116892.62472884962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 68297.41333981957,
            "unit": "ns/iter",
            "extra": "iterations: 10270\ncpu: 68296.69912366089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 116282.0673858955,
            "unit": "ns/iter",
            "extra": "iterations: 6025\ncpu: 116282.43983402371 ns\nthreads: 1"
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
          "id": "89047ca37b911c271e1749e8de13632f782d585c",
          "message": "cmt clang 15 build",
          "timestamp": "2023-12-12T16:57:18+03:00",
          "tree_id": "2f2c9ed08ef5734141953c56ba19061c15b85598",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/89047ca37b911c271e1749e8de13632f782d585c"
        },
        "date": 1702390822201,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 912.1104801703001,
            "unit": "ns/iter",
            "extra": "iterations: 768165\ncpu: 912.110939706964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18562.76836598391,
            "unit": "ns/iter",
            "extra": "iterations: 44920\ncpu: 18562.386464826355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 42822.658085965,
            "unit": "ns/iter",
            "extra": "iterations: 21055\ncpu: 42822.87817620517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 53458.4336000023,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53454.58000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 63129.66359446695,
            "unit": "ns/iter",
            "extra": "iterations: 12586\ncpu: 63128.21388844747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 78899.38098667585,
            "unit": "ns/iter",
            "extra": "iterations: 11108\ncpu: 78897.47929420236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 94678.3332611034,
            "unit": "ns/iter",
            "extra": "iterations: 9230\ncpu: 94673.94366197183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 109934.09491995416,
            "unit": "ns/iter",
            "extra": "iterations: 7933\ncpu: 109927.82049665954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 137373.42163801778,
            "unit": "ns/iter",
            "extra": "iterations: 6923\ncpu: 137367.36963744048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 725.8740604930567,
            "unit": "ns/iter",
            "extra": "iterations: 965400\ncpu: 725.8316759892281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 585.0479141691129,
            "unit": "ns/iter",
            "extra": "iterations: 1204508\ncpu: 585.0291571330372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 593.1033877577783,
            "unit": "ns/iter",
            "extra": "iterations: 1159528\ncpu: 593.0952939471915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 572.6571577470835,
            "unit": "ns/iter",
            "extra": "iterations: 1231896\ncpu: 572.6510192418847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1203.6095600924414,
            "unit": "ns/iter",
            "extra": "iterations: 580622\ncpu: 1203.5975212789035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5040.103340000428,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5040.168999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 22517.09130174931,
            "unit": "ns/iter",
            "extra": "iterations: 36812\ncpu: 22516.179506682613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 19722.55786251469,
            "unit": "ns/iter",
            "extra": "iterations: 42143\ncpu: 19722.708397598653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20611.626598086023,
            "unit": "ns/iter",
            "extra": "iterations: 40439\ncpu: 20609.987882984235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 20707.97797665235,
            "unit": "ns/iter",
            "extra": "iterations: 40003\ncpu: 20708.13688973325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 59215.29538024199,
            "unit": "ns/iter",
            "extra": "iterations: 14070\ncpu: 59211.71286425003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 579715.6069999688,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579714.599999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 587051.9536290339,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 587034.0053763434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 591540.5635245688,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 591517.281420766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 589850.3052208755,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 589850.6024096409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 341687.990222926,
            "unit": "ns/iter",
            "extra": "iterations: 2557\ncpu: 341662.02581149776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 586341.325752522,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 586326.4214046818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2690573.2130681835,
            "unit": "ns/iter",
            "extra": "iterations: 352\ncpu: 2690521.306818188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1140565.4604316284,
            "unit": "ns/iter",
            "extra": "iterations: 834\ncpu: 1140528.7769784185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3292125.6027874677,
            "unit": "ns/iter",
            "extra": "iterations: 287\ncpu: 3292099.3031358896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5101.804979999542,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5101.768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 24005.271089909875,
            "unit": "ns/iter",
            "extra": "iterations: 34590\ncpu: 24005.00433651336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 21041.12093519104,
            "unit": "ns/iter",
            "extra": "iterations: 39393\ncpu: 21039.948721854147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 20565.663301412744,
            "unit": "ns/iter",
            "extra": "iterations: 40413\ncpu: 20565.664513894066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 21390.020546002754,
            "unit": "ns/iter",
            "extra": "iterations: 38791\ncpu: 21389.288752545683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 58035.42387809486,
            "unit": "ns/iter",
            "extra": "iterations: 14306\ncpu: 58035.991891514124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 586193.7810000199,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 586148.0000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 608706.4600416917,
            "unit": "ns/iter",
            "extra": "iterations: 1439\ncpu: 608712.6476719938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 611699.3469529172,
            "unit": "ns/iter",
            "extra": "iterations: 1444\ncpu: 611678.8781163439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 606928.0123541519,
            "unit": "ns/iter",
            "extra": "iterations: 1457\ncpu: 606896.3623884692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 342958.7796477317,
            "unit": "ns/iter",
            "extra": "iterations: 2555\ncpu: 342962.11350293475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 595682.6866894184,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 595653.0375426665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2810842.6119403513,
            "unit": "ns/iter",
            "extra": "iterations: 335\ncpu: 2810840.5970149282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1185654.7617866094,
            "unit": "ns/iter",
            "extra": "iterations: 806\ncpu: 1185253.598014887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5198.292491407484,
            "unit": "ns/iter",
            "extra": "iterations: 153331\ncpu: 5198.029100442825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 23992.976665589453,
            "unit": "ns/iter",
            "extra": "iterations: 34027\ncpu: 23991.66838099153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 19208.053108960747,
            "unit": "ns/iter",
            "extra": "iterations: 42667\ncpu: 19207.3077554081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 18688.211559929503,
            "unit": "ns/iter",
            "extra": "iterations: 43893\ncpu: 18687.56065887504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 19058.36841133533,
            "unit": "ns/iter",
            "extra": "iterations: 43332\ncpu: 19057.396381427134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 58383.6374597509,
            "unit": "ns/iter",
            "extra": "iterations: 14597\ncpu: 58380.4206343769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 582857.0040000045,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 582832.8999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 603317.4017857207,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 603307.6236263738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 606656.1566181525,
            "unit": "ns/iter",
            "extra": "iterations: 1443\ncpu: 606624.3936243908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 599933.4996572997,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 599887.5942426326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 352295.4402065777,
            "unit": "ns/iter",
            "extra": "iterations: 2517\ncpu: 352287.2864521265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 602931.8538251296,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 602896.9262295087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 294.40887380258147,
            "unit": "ns/iter",
            "extra": "iterations: 2367711\ncpu: 294.3853367239507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2316.3104492496786,
            "unit": "ns/iter",
            "extra": "iterations: 300835\ncpu: 2316.2447853474446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 1799.8340654786746,
            "unit": "ns/iter",
            "extra": "iterations: 386080\ncpu: 1799.8202445089064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 1761.6233579925035,
            "unit": "ns/iter",
            "extra": "iterations: 395933\ncpu: 1761.5399575180732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1429.1822362943883,
            "unit": "ns/iter",
            "extra": "iterations: 486385\ncpu: 1429.1964184750734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10541.554620840452,
            "unit": "ns/iter",
            "extra": "iterations: 66687\ncpu: 10541.142951399825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 29019.872351915394,
            "unit": "ns/iter",
            "extra": "iterations: 24074\ncpu: 29019.05790479348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7038.898616261497,
            "unit": "ns/iter",
            "extra": "iterations: 99513\ncpu: 7038.778853014215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7027.823876056125,
            "unit": "ns/iter",
            "extra": "iterations: 99271\ncpu: 7027.776490616642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7029.236285266522,
            "unit": "ns/iter",
            "extra": "iterations: 99528\ncpu: 7029.133510167942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 15050.392962571685,
            "unit": "ns/iter",
            "extra": "iterations: 46409\ncpu: 15049.981684587152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14057.322744854935,
            "unit": "ns/iter",
            "extra": "iterations: 49897\ncpu: 14057.468384872822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3274.925993947012,
            "unit": "ns/iter",
            "extra": "iterations: 213442\ncpu: 3274.8287591008566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 15786.5255646697,
            "unit": "ns/iter",
            "extra": "iterations: 44495\ncpu: 15786.510843915017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 12971.783991837981,
            "unit": "ns/iter",
            "extra": "iterations: 53910\ncpu: 12971.437581153907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 12900.514895574826,
            "unit": "ns/iter",
            "extra": "iterations: 54345\ncpu: 12900.42322200767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 13449.30373059779,
            "unit": "ns/iter",
            "extra": "iterations: 52056\ncpu: 13448.870447210651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30618.1963912123,
            "unit": "ns/iter",
            "extra": "iterations: 22944\ncpu: 30617.74320083632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 135020.01614573057,
            "unit": "ns/iter",
            "extra": "iterations: 4831\ncpu: 135013.5168702144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 116455.06807238421,
            "unit": "ns/iter",
            "extra": "iterations: 6023\ncpu: 116451.768221815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 117887.62133961973,
            "unit": "ns/iter",
            "extra": "iterations: 5942\ncpu: 117888.99360484784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 117440.92350276539,
            "unit": "ns/iter",
            "extra": "iterations: 5961\ncpu: 117437.61113906991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 67978.14934057444,
            "unit": "ns/iter",
            "extra": "iterations: 10312\ncpu: 67977.77346780544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 117006.04441117706,
            "unit": "ns/iter",
            "extra": "iterations: 6012\ncpu: 117000.48236859453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3180.201936049443,
            "unit": "ns/iter",
            "extra": "iterations: 220139\ncpu: 3180.1298270638263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 15691.714196148436,
            "unit": "ns/iter",
            "extra": "iterations: 44660\ncpu: 15691.603224361965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 12789.942217347108,
            "unit": "ns/iter",
            "extra": "iterations: 54705\ncpu: 12789.271547390359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 12728.12127204083,
            "unit": "ns/iter",
            "extra": "iterations: 55124\ncpu: 12728.005950221379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13278.840281391302,
            "unit": "ns/iter",
            "extra": "iterations: 51885\ncpu: 13278.483183964609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30303.759332871257,
            "unit": "ns/iter",
            "extra": "iterations: 23144\ncpu: 30304.113377116726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 134780.4166666665,
            "unit": "ns/iter",
            "extra": "iterations: 5184\ncpu: 134775.61728395085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 117146.17047920295,
            "unit": "ns/iter",
            "extra": "iterations: 5989\ncpu: 117145.9342127239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 117480.07784831582,
            "unit": "ns/iter",
            "extra": "iterations: 5986\ncpu: 117476.1443367875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 117289.88004691407,
            "unit": "ns/iter",
            "extra": "iterations: 5969\ncpu: 117287.33456190352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 67498.29131274269,
            "unit": "ns/iter",
            "extra": "iterations: 10360\ncpu: 67499.02509652477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 116915.86646635967,
            "unit": "ns/iter",
            "extra": "iterations: 5991\ncpu: 116910.36554832096 ns\nthreads: 1"
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
          "id": "253b41ad57af60a2eea32abab15fde66fc4e9843",
          "message": "Enable BMs on Clang builds",
          "timestamp": "2023-12-12T17:28:42+03:00",
          "tree_id": "dc0c8a2e2fe0199e4eb6272c1e2acf70832d7058",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/253b41ad57af60a2eea32abab15fde66fc4e9843"
        },
        "date": 1702391750983,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 963.1623227940668,
            "unit": "ns/iter",
            "extra": "iterations: 728037\ncpu: 963.1536583992297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19132.69756075262,
            "unit": "ns/iter",
            "extra": "iterations: 43784\ncpu: 19132.42965466837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43205.98923952786,
            "unit": "ns/iter",
            "extra": "iterations: 20724\ncpu: 43205.46226597184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 54710.484200001025,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54709.91000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 65996.6645454543,
            "unit": "ns/iter",
            "extra": "iterations: 12100\ncpu: 65994.20661157026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 83330.16649372694,
            "unit": "ns/iter",
            "extra": "iterations: 10601\ncpu: 83327.21441373453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 99439.8183473729,
            "unit": "ns/iter",
            "extra": "iterations: 8786\ncpu: 99437.37764625541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 115952.97843375552,
            "unit": "ns/iter",
            "extra": "iterations: 7419\ncpu: 115950.28979646853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 144791.58937271795,
            "unit": "ns/iter",
            "extra": "iterations: 6568\ncpu: 144788.48964677213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 792.7274043176978,
            "unit": "ns/iter",
            "extra": "iterations: 880832\ncpu: 792.705987066774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 657.6630880237867,
            "unit": "ns/iter",
            "extra": "iterations: 1071449\ncpu: 657.6382076981737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 660.3790188854833,
            "unit": "ns/iter",
            "extra": "iterations: 1060182\ncpu: 660.3761429641322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 671.5138243696471,
            "unit": "ns/iter",
            "extra": "iterations: 1042109\ncpu: 671.505379955456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1215.6446915352446,
            "unit": "ns/iter",
            "extra": "iterations: 575317\ncpu: 1215.6352063297275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5129.291539999485,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5129.315000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24460.580093405802,
            "unit": "ns/iter",
            "extra": "iterations: 33617\ncpu: 24460.168962132262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 21438.82321781438,
            "unit": "ns/iter",
            "extra": "iterations: 37945\ncpu: 21438.152589273945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 19630.07790971676,
            "unit": "ns/iter",
            "extra": "iterations: 42023\ncpu: 19629.79796777957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21593.848581103197,
            "unit": "ns/iter",
            "extra": "iterations: 38093\ncpu: 21593.702255007487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 58562.874388708056,
            "unit": "ns/iter",
            "extra": "iterations: 14314\ncpu: 58561.275674165096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 617058.8439999847,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 617053.2000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 614748.0873854829,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 614740.2396053576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 609269.778631289,
            "unit": "ns/iter",
            "extra": "iterations: 1432\ncpu: 609253.77094972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 612811.8119777272,
            "unit": "ns/iter",
            "extra": "iterations: 1436\ncpu: 612795.0557103069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 369298.0671452757,
            "unit": "ns/iter",
            "extra": "iterations: 2368\ncpu: 369287.5844594602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 611640.3782274988,
            "unit": "ns/iter",
            "extra": "iterations: 1433\ncpu: 611622.47034194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_serialize",
            "value": 2854930.2530122013,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2854914.1566265044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_serialize",
            "value": 1207719.994917435,
            "unit": "ns/iter",
            "extra": "iterations: 787\ncpu: 1207697.07750953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_serialize",
            "value": 3412484.707581085,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3412379.4223826802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_serialize",
            "value": 5189.693760000296,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5189.537000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_serialize",
            "value": 24278.680630147242,
            "unit": "ns/iter",
            "extra": "iterations: 33516\ncpu: 24278.487886382703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_serialize",
            "value": 21481.186437595064,
            "unit": "ns/iter",
            "extra": "iterations: 38474\ncpu: 21480.75323595146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_serialize",
            "value": 20956.371086604184,
            "unit": "ns/iter",
            "extra": "iterations: 39352\ncpu: 20956.431693433624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_serialize",
            "value": 21607.05154285952,
            "unit": "ns/iter",
            "extra": "iterations: 37949\ncpu: 21606.508735408093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_serialize",
            "value": 59433.048012537336,
            "unit": "ns/iter",
            "extra": "iterations: 14038\ncpu: 59431.01581421839 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_serialize",
            "value": 613788.253999985,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 613744.599999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_serialize",
            "value": 511201.52400000056,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511203.3999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_serialize",
            "value": 508036.178999987,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508002.19999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_serialize",
            "value": 507183.5690000057,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507185.800000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_serialize",
            "value": 373873.0276008425,
            "unit": "ns/iter",
            "extra": "iterations: 2355\ncpu: 373862.0806794072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_serialize",
            "value": 626918.1676136316,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 626887.8551136367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_serialize",
            "value": 2992542.370253335,
            "unit": "ns/iter",
            "extra": "iterations: 316\ncpu: 2992391.772151897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_serialize",
            "value": 1243298.1246718995,
            "unit": "ns/iter",
            "extra": "iterations: 762\ncpu: 1243231.233595793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_serialize",
            "value": 5422.6176148685645,
            "unit": "ns/iter",
            "extra": "iterations: 150759\ncpu: 5422.348914492646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_serialize",
            "value": 24705.026128688674,
            "unit": "ns/iter",
            "extra": "iterations: 33756\ncpu: 24703.96966465217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_serialize",
            "value": 19865.647434066082,
            "unit": "ns/iter",
            "extra": "iterations: 42012\ncpu: 19864.336380081946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_serialize",
            "value": 19373.968415180112,
            "unit": "ns/iter",
            "extra": "iterations: 43027\ncpu: 19373.170334905866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_serialize",
            "value": 19607.78092147061,
            "unit": "ns/iter",
            "extra": "iterations: 42519\ncpu: 19606.99452009696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_serialize",
            "value": 58157.777229417865,
            "unit": "ns/iter",
            "extra": "iterations: 14589\ncpu: 58155.50071971987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_serialize",
            "value": 602165.110000044,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 602117.2999999962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_serialize",
            "value": 507463.93999997963,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507465.5999999962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_serialize",
            "value": 630421.4879261059,
            "unit": "ns/iter",
            "extra": "iterations: 1408\ncpu: 630391.974431821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_serialize",
            "value": 500964.87700000126,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500966.00000000536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_serialize",
            "value": 381549.3893919749,
            "unit": "ns/iter",
            "extra": "iterations: 2319\ncpu: 381546.7874083666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_serialize",
            "value": 630545.8673323911,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 630513.9087018544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_serialize",
            "value": 348.62757452427445,
            "unit": "ns/iter",
            "extra": "iterations: 2011828\ncpu: 348.60569591436433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_serialize",
            "value": 2525.6680303430303,
            "unit": "ns/iter",
            "extra": "iterations: 276703\ncpu: 2525.541103638186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_serialize",
            "value": 2006.9296992588818,
            "unit": "ns/iter",
            "extra": "iterations: 349470\ncpu: 2006.8051621026207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_serialize",
            "value": 2066.409978692029,
            "unit": "ns/iter",
            "extra": "iterations: 338842\ncpu: 2066.3371128726767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_serialize",
            "value": 1592.4472561170744,
            "unit": "ns/iter",
            "extra": "iterations: 439596\ncpu: 1592.3659450950356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_serialize",
            "value": 10625.753009579557,
            "unit": "ns/iter",
            "extra": "iterations: 65873\ncpu: 10625.411018171382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_serialize",
            "value": 32079.072323880377,
            "unit": "ns/iter",
            "extra": "iterations: 21860\ncpu: 32077.39707227832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_serialize",
            "value": 7400.390225436991,
            "unit": "ns/iter",
            "extra": "iterations: 95104\ncpu: 7400.317547106313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_serialize",
            "value": 7418.131760723697,
            "unit": "ns/iter",
            "extra": "iterations: 94535\ncpu: 7417.7637911884485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_serialize",
            "value": 7418.359194520058,
            "unit": "ns/iter",
            "extra": "iterations: 94453\ncpu: 7417.999428287026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_serialize",
            "value": 16370.6545266091,
            "unit": "ns/iter",
            "extra": "iterations: 42449\ncpu: 16369.744870314888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_serialize",
            "value": 14787.367717651083,
            "unit": "ns/iter",
            "extra": "iterations: 47289\ncpu: 14786.614223180772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_serialize",
            "value": 3379.3082543692935,
            "unit": "ns/iter",
            "extra": "iterations: 207478\ncpu: 3379.1698396938855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_serialize",
            "value": 16446.973778194955,
            "unit": "ns/iter",
            "extra": "iterations: 42560\ncpu: 16446.193609022583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_serialize",
            "value": 13648.121919357744,
            "unit": "ns/iter",
            "extra": "iterations: 51288\ncpu: 13648.136016222219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_serialize",
            "value": 13581.167021564432,
            "unit": "ns/iter",
            "extra": "iterations: 51658\ncpu: 13580.912927329566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_serialize",
            "value": 14031.612248177064,
            "unit": "ns/iter",
            "extra": "iterations: 49787\ncpu: 14030.771084821286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_serialize",
            "value": 30866.809811620627,
            "unit": "ns/iter",
            "extra": "iterations: 22667\ncpu: 30866.118145321107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_serialize",
            "value": 141128.35592197932,
            "unit": "ns/iter",
            "extra": "iterations: 4973\ncpu: 141121.23466720444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_serialize",
            "value": 121262.75501383311,
            "unit": "ns/iter",
            "extra": "iterations: 5784\ncpu: 121255.86099585023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_serialize",
            "value": 120393.20660588917,
            "unit": "ns/iter",
            "extra": "iterations: 5813\ncpu: 120385.53242731841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_serialize",
            "value": 124131.67039403376,
            "unit": "ns/iter",
            "extra": "iterations: 5634\ncpu: 124125.91409300537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_serialize",
            "value": 72830.31784328262,
            "unit": "ns/iter",
            "extra": "iterations: 9533\ncpu: 72828.7842232243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_serialize",
            "value": 121156.57561567702,
            "unit": "ns/iter",
            "extra": "iterations: 5766\ncpu: 121155.3069719048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_serialize",
            "value": 3329.389186653113,
            "unit": "ns/iter",
            "extra": "iterations: 211017\ncpu: 3329.358772042044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_serialize",
            "value": 16488.72799001299,
            "unit": "ns/iter",
            "extra": "iterations: 42458\ncpu: 16487.719628809806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_serialize",
            "value": 13445.042940668676,
            "unit": "ns/iter",
            "extra": "iterations: 52165\ncpu: 13444.426339499438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_serialize",
            "value": 13339.974014848907,
            "unit": "ns/iter",
            "extra": "iterations: 52530\ncpu: 13339.339425090448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_serialize",
            "value": 13740.018084791058,
            "unit": "ns/iter",
            "extra": "iterations: 50595\ncpu: 13739.519715386808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_serialize",
            "value": 30669.101374420694,
            "unit": "ns/iter",
            "extra": "iterations: 22846\ncpu: 30667.13210190006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_serialize",
            "value": 139670.22468544063,
            "unit": "ns/iter",
            "extra": "iterations: 5007\ncpu: 139663.45116836394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_serialize",
            "value": 120797.06348929867,
            "unit": "ns/iter",
            "extra": "iterations: 5749\ncpu: 120795.61662898026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_serialize",
            "value": 117837.19127799706,
            "unit": "ns/iter",
            "extra": "iterations: 5939\ncpu: 117833.37262165331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_serialize",
            "value": 123274.75127528352,
            "unit": "ns/iter",
            "extra": "iterations: 5685\ncpu: 123267.12401055249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_serialize",
            "value": 71843.18669396304,
            "unit": "ns/iter",
            "extra": "iterations: 9770\ncpu: 71838.60798362244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_serialize",
            "value": 118859.47159863984,
            "unit": "ns/iter",
            "extra": "iterations: 5880\ncpu: 118854.25170068076 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}