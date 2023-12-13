window.BENCHMARK_DATA = {
  "lastUpdate": 1702504024708,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse clang-15 20.04 Release c++-17": [
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
        "date": 1702490373201,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1352.1235537099278,
            "unit": "ns/iter",
            "extra": "iterations: 540348\ncpu: 1352.1099365594025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16159.9788597305,
            "unit": "ns/iter",
            "extra": "iterations: 50567\ncpu: 16159.293610457415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34114.042808286955,
            "unit": "ns/iter",
            "extra": "iterations: 24271\ncpu: 34112.871327922214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50372.629980911544,
            "unit": "ns/iter",
            "extra": "iterations: 16764\ncpu: 50371.58792650918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56696.534500008514,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56697.02000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71308.50645449637,
            "unit": "ns/iter",
            "extra": "iterations: 12317\ncpu: 71304.17309409763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84302.47333073008,
            "unit": "ns/iter",
            "extra": "iterations: 10274\ncpu: 84298.78333657779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98021.11113617785,
            "unit": "ns/iter",
            "extra": "iterations: 8863\ncpu: 98015.60419722435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113977.60360596256,
            "unit": "ns/iter",
            "extra": "iterations: 7654\ncpu: 113977.20146328722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1134.9584441636516,
            "unit": "ns/iter",
            "extra": "iterations: 616183\ncpu: 1134.9217683707593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 953.426789992447,
            "unit": "ns/iter",
            "extra": "iterations: 734640\ncpu: 953.4229010127403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 922.2095353422027,
            "unit": "ns/iter",
            "extra": "iterations: 755610\ncpu: 922.1906803774442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 925.6492236163568,
            "unit": "ns/iter",
            "extra": "iterations: 755812\ncpu: 925.6177462120212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1881.1650304164514,
            "unit": "ns/iter",
            "extra": "iterations: 377591\ncpu: 1881.1783119830732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5594.999669999652,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5594.60999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30016.412696662373,
            "unit": "ns/iter",
            "extra": "iterations: 27204\ncpu: 30015.446257903262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24006.216702770274,
            "unit": "ns/iter",
            "extra": "iterations: 34162\ncpu: 24005.482700076085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23225.111598055722,
            "unit": "ns/iter",
            "extra": "iterations: 35368\ncpu: 23225.27991404654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23182.43154770546,
            "unit": "ns/iter",
            "extra": "iterations: 35375\ncpu: 23181.554770318056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65879.24299962343,
            "unit": "ns/iter",
            "extra": "iterations: 13535\ncpu: 65876.65312153684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 562016.9960000112,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562020.6000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 558759.6100709705,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 558756.8108457075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 558913.6934447027,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 558890.5526992275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 560897.3117304267,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 560877.446532728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 328851.67788829375,
            "unit": "ns/iter",
            "extra": "iterations: 2614\ncpu: 328834.46824789495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 561148.6722797587,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 561114.831606216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2406572.2025973736,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2406349.6103896103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1121108.975669159,
            "unit": "ns/iter",
            "extra": "iterations: 822\ncpu: 1121031.751824819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3375337.320000075,
            "unit": "ns/iter",
            "extra": "iterations: 275\ncpu: 3375148.7272727266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8629.567404508358,
            "unit": "ns/iter",
            "extra": "iterations: 99118\ncpu: 8629.084525515043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 47195.5523311939,
            "unit": "ns/iter",
            "extra": "iterations: 17609\ncpu: 47194.66182065988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36993.39974942711,
            "unit": "ns/iter",
            "extra": "iterations: 22349\ncpu: 36991.981744149605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36490.70753759784,
            "unit": "ns/iter",
            "extra": "iterations: 22673\ncpu: 36488.510563224896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36554.54022380811,
            "unit": "ns/iter",
            "extra": "iterations: 22698\ncpu: 36551.423032866514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79074.34127272692,
            "unit": "ns/iter",
            "extra": "iterations: 11000\ncpu: 79069.52727272715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 608350.803999997,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 608309.6999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 607017.5125173705,
            "unit": "ns/iter",
            "extra": "iterations: 1438\ncpu: 606962.6564673155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 589152.4501694838,
            "unit": "ns/iter",
            "extra": "iterations: 1475\ncpu: 589143.5254237293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 585065.7851851792,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 585037.9797979819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 348343.2525855454,
            "unit": "ns/iter",
            "extra": "iterations: 2514\ncpu: 348323.3890214786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 589115.7243935579,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 589062.3989218358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2591776.194444467,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2591533.0555555727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1122698.6984318565,
            "unit": "ns/iter",
            "extra": "iterations: 829\ncpu: 1122679.1314837143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5627.947849999373,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5627.489000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30486.000922678006,
            "unit": "ns/iter",
            "extra": "iterations: 27095\ncpu: 30483.369625392068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23358.402281846702,
            "unit": "ns/iter",
            "extra": "iterations: 35147\ncpu: 23356.718923378918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22886.787704050257,
            "unit": "ns/iter",
            "extra": "iterations: 35898\ncpu: 22884.81531004502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23020.13015500542,
            "unit": "ns/iter",
            "extra": "iterations: 34966\ncpu: 23018.500829377062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64453.00555719573,
            "unit": "ns/iter",
            "extra": "iterations: 13496\ncpu: 64449.14789567284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 583043.7740000889,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 582995.099999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 577624.8707903018,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 577589.1408934684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 575885.8056653609,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 575834.3873517792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 576214.7189974056,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 576182.4538258567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 335814.4378607127,
            "unit": "ns/iter",
            "extra": "iterations: 2599\ncpu: 335784.9172758739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 570010.6419753794,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 569983.5607537362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 521.99781764136,
            "unit": "ns/iter",
            "extra": "iterations: 1336169\ncpu: 521.9788814139517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3247.0117473890564,
            "unit": "ns/iter",
            "extra": "iterations: 216048\ncpu: 3246.9289232022534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2641.8849896573774,
            "unit": "ns/iter",
            "extra": "iterations: 264924\ncpu: 2641.8716311093003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2524.045789746175,
            "unit": "ns/iter",
            "extra": "iterations: 277988\ncpu: 2523.9665021511764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1923.402044274306,
            "unit": "ns/iter",
            "extra": "iterations: 364139\ncpu: 1923.2468919835524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17707.0566840587,
            "unit": "ns/iter",
            "extra": "iterations: 39482\ncpu: 17705.326477888717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 29319.549694127807,
            "unit": "ns/iter",
            "extra": "iterations: 23866\ncpu: 29317.263052040456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7301.265044759684,
            "unit": "ns/iter",
            "extra": "iterations: 94950\ncpu: 7300.558188520191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7282.090170161965,
            "unit": "ns/iter",
            "extra": "iterations: 96085\ncpu: 7281.368579903164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7302.461247105112,
            "unit": "ns/iter",
            "extra": "iterations: 95838\ncpu: 7302.126505144122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14951.155490100971,
            "unit": "ns/iter",
            "extra": "iterations: 46511\ncpu: 14950.355829803784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14001.536488483815,
            "unit": "ns/iter",
            "extra": "iterations: 50098\ncpu: 14000.618787177116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5104.178076749745,
            "unit": "ns/iter",
            "extra": "iterations: 135947\ncpu: 5103.749990805209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25948.028804450216,
            "unit": "ns/iter",
            "extra": "iterations: 26975\ncpu: 25945.278962001852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20686.873634343883,
            "unit": "ns/iter",
            "extra": "iterations: 33775\ncpu: 20685.356032568812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20733.83605931563,
            "unit": "ns/iter",
            "extra": "iterations: 34055\ncpu: 20732.286007928542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21029.935177650943,
            "unit": "ns/iter",
            "extra": "iterations: 33183\ncpu: 21027.948045685924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50493.5458682505,
            "unit": "ns/iter",
            "extra": "iterations: 13844\ncpu: 50490.29182317318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155689.65552582915,
            "unit": "ns/iter",
            "extra": "iterations: 4488\ncpu: 155686.83155080266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131573.66053667082,
            "unit": "ns/iter",
            "extra": "iterations: 5329\ncpu: 131560.4803903174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129996.19139464578,
            "unit": "ns/iter",
            "extra": "iterations: 5392\ncpu: 129989.48442136636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131801.83728813622,
            "unit": "ns/iter",
            "extra": "iterations: 5310\ncpu: 131787.40112994594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83275.1526672283,
            "unit": "ns/iter",
            "extra": "iterations: 8417\ncpu: 83268.59926339569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131068.23499626426,
            "unit": "ns/iter",
            "extra": "iterations: 5332\ncpu: 131067.19804951307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5003.863319595878,
            "unit": "ns/iter",
            "extra": "iterations: 139764\ncpu: 5003.560287341523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25274.044081011572,
            "unit": "ns/iter",
            "extra": "iterations: 27699\ncpu: 25273.710242247093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21464.47323373387,
            "unit": "ns/iter",
            "extra": "iterations: 32597\ncpu: 21462.613123907144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20755.719691121118,
            "unit": "ns/iter",
            "extra": "iterations: 33670\ncpu: 20753.944163944503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21993.239211123342,
            "unit": "ns/iter",
            "extra": "iterations: 31792\ncpu: 21991.350025163738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48571.391920031216,
            "unit": "ns/iter",
            "extra": "iterations: 14406\ncpu: 48571.13702623956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154655.90757041986,
            "unit": "ns/iter",
            "extra": "iterations: 4544\ncpu: 154642.2975352115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130007.82147502554,
            "unit": "ns/iter",
            "extra": "iterations: 5383\ncpu: 129998.68103288174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127063.6926705409,
            "unit": "ns/iter",
            "extra": "iterations: 5512\ncpu: 127051.61465892699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129810.89418087027,
            "unit": "ns/iter",
            "extra": "iterations: 5396\ncpu: 129803.1504818378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 84246.12929171922,
            "unit": "ns/iter",
            "extra": "iterations: 8330\ncpu: 84244.98199279812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129487.7019462605,
            "unit": "ns/iter",
            "extra": "iterations: 5395\ncpu: 129478.60982391026 ns\nthreads: 1"
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
        "date": 1702493010120,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1329.5651116655501,
            "unit": "ns/iter",
            "extra": "iterations: 520214\ncpu: 1329.4830588949933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16418.229945163337,
            "unit": "ns/iter",
            "extra": "iterations: 51060\ncpu: 16417.1053662358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34663.79300919456,
            "unit": "ns/iter",
            "extra": "iterations: 24146\ncpu: 34662.47411579559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51164.11745068686,
            "unit": "ns/iter",
            "extra": "iterations: 16475\ncpu: 51160.69195751141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56704.61329999626,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56701.84999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69730.69680976366,
            "unit": "ns/iter",
            "extra": "iterations: 12695\ncpu: 69729.19259551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83305.85967250848,
            "unit": "ns/iter",
            "extra": "iterations: 10504\ncpu: 83303.89375476011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97026.18893235827,
            "unit": "ns/iter",
            "extra": "iterations: 8945\ncpu: 97022.83957518173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114706.9026271097,
            "unit": "ns/iter",
            "extra": "iterations: 7651\ncpu: 114704.74447784605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1123.044956279343,
            "unit": "ns/iter",
            "extra": "iterations: 623161\ncpu: 1123.0346571752737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 944.6514679352678,
            "unit": "ns/iter",
            "extra": "iterations: 742233\ncpu: 944.6203550637064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 922.4130225441605,
            "unit": "ns/iter",
            "extra": "iterations: 758070\ncpu: 922.4125740366991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 920.1307751092037,
            "unit": "ns/iter",
            "extra": "iterations: 760267\ncpu: 920.1141178033516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1871.1230616912344,
            "unit": "ns/iter",
            "extra": "iterations: 373715\ncpu: 1871.0974940797128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5604.145040000503,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5604.055999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30301.884238615323,
            "unit": "ns/iter",
            "extra": "iterations: 27358\ncpu: 30300.968638058315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23695.27666820395,
            "unit": "ns/iter",
            "extra": "iterations: 34648\ncpu: 23694.49318864006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22556.31455163742,
            "unit": "ns/iter",
            "extra": "iterations: 35886\ncpu: 22555.718107339864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 21432.43649119314,
            "unit": "ns/iter",
            "extra": "iterations: 37916\ncpu: 21431.65418293064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65486.89920365664,
            "unit": "ns/iter",
            "extra": "iterations: 13562\ncpu: 65480.76242442098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 562066.22600007,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 562067.2000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 566197.8495803794,
            "unit": "ns/iter",
            "extra": "iterations: 1549\ncpu: 566155.9070367959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 561182.5087265989,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 561151.3251454431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 561677.9571983961,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 561651.361867705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 338103.21348748315,
            "unit": "ns/iter",
            "extra": "iterations: 2595\ncpu: 338092.9479768785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 562816.3298768989,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 562778.4186649387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2394797.932989726,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2394626.2886597924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1127208.6373627277,
            "unit": "ns/iter",
            "extra": "iterations: 819\ncpu: 1127141.6361416355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3354332.6195649076,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3354113.4057970997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8721.140396387598,
            "unit": "ns/iter",
            "extra": "iterations: 97531\ncpu: 8720.585249818014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 47126.21371764035,
            "unit": "ns/iter",
            "extra": "iterations: 17729\ncpu: 47114.17451632916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37311.9488066874,
            "unit": "ns/iter",
            "extra": "iterations: 22249\ncpu: 37310.76452874285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36262.793248576956,
            "unit": "ns/iter",
            "extra": "iterations: 22810\ncpu: 36260.74090311253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36492.10642218106,
            "unit": "ns/iter",
            "extra": "iterations: 22796\ncpu: 36489.928057554054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78536.71789511992,
            "unit": "ns/iter",
            "extra": "iterations: 11003\ncpu: 78532.45478505855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 599230.9069999919,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 599215.099999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 589812.0845263159,
            "unit": "ns/iter",
            "extra": "iterations: 1467\ncpu: 589781.6632583463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 585558.4370370364,
            "unit": "ns/iter",
            "extra": "iterations: 1485\ncpu: 585520.7407407385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 586588.236877584,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 586556.2584118404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 346773.16495250235,
            "unit": "ns/iter",
            "extra": "iterations: 2528\ncpu: 346755.81487341865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 576818.5803689195,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 576782.9380764175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2556974.5082872706,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2556791.4364640913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1135531.4921212827,
            "unit": "ns/iter",
            "extra": "iterations: 825\ncpu: 1135516.3636363668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5608.697359999724,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5608.570999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29702.66738614228,
            "unit": "ns/iter",
            "extra": "iterations: 27798\ncpu: 29702.334700338135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23517.70978143021,
            "unit": "ns/iter",
            "extra": "iterations: 35046\ncpu: 23517.479883581607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22859.59692222146,
            "unit": "ns/iter",
            "extra": "iterations: 36065\ncpu: 22858.974074587597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23034.71454791685,
            "unit": "ns/iter",
            "extra": "iterations: 35414\ncpu: 23034.023267634107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64880.29994137237,
            "unit": "ns/iter",
            "extra": "iterations: 13646\ncpu: 64877.39264253257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 578617.0890000904,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578585.799999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 575700.242922986,
            "unit": "ns/iter",
            "extra": "iterations: 1519\ncpu: 575662.2778143476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 570662.4588235017,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 570639.0849673231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 564836.4973856682,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 564799.215686272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 340128.558732626,
            "unit": "ns/iter",
            "extra": "iterations: 2588\ncpu: 340109.54404945916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 566854.598568639,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 566817.8919973965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 524.7134377130789,
            "unit": "ns/iter",
            "extra": "iterations: 1334230\ncpu: 524.6824760348712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3232.83301682399,
            "unit": "ns/iter",
            "extra": "iterations: 216950\ncpu: 3232.6015210877986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2629.3773683417458,
            "unit": "ns/iter",
            "extra": "iterations: 285379\ncpu: 2629.376373173908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2561.3354122985857,
            "unit": "ns/iter",
            "extra": "iterations: 283314\ncpu: 2561.288887947638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1973.6809394181741,
            "unit": "ns/iter",
            "extra": "iterations: 353027\ncpu: 1973.6816164202826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17775.577150545123,
            "unit": "ns/iter",
            "extra": "iterations: 39397\ncpu: 17774.72650201809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30591.29617834486,
            "unit": "ns/iter",
            "extra": "iterations: 22922\ncpu: 30590.6116394726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7254.546052088349,
            "unit": "ns/iter",
            "extra": "iterations: 96912\ncpu: 7254.311127620893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7238.532167241159,
            "unit": "ns/iter",
            "extra": "iterations: 96962\ncpu: 7238.445989150385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7229.91992583779,
            "unit": "ns/iter",
            "extra": "iterations: 97085\ncpu: 7229.837771025372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14749.52095896292,
            "unit": "ns/iter",
            "extra": "iterations: 47760\ncpu: 14748.865159129053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13881.007197222118,
            "unit": "ns/iter",
            "extra": "iterations: 50714\ncpu: 13880.601017470482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5035.562820577176,
            "unit": "ns/iter",
            "extra": "iterations: 139787\ncpu: 5035.277958608422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25467.49463069819,
            "unit": "ns/iter",
            "extra": "iterations: 27471\ncpu: 25465.527283316824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20270.495235337094,
            "unit": "ns/iter",
            "extra": "iterations: 34525\ncpu: 20269.167270094124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20356.38802517973,
            "unit": "ns/iter",
            "extra": "iterations: 34155\ncpu: 20354.899721856138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 20818.61431387702,
            "unit": "ns/iter",
            "extra": "iterations: 33478\ncpu: 20817.498058426492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49925.027117673446,
            "unit": "ns/iter",
            "extra": "iterations: 14013\ncpu: 49921.13751516394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155542.41964881058,
            "unit": "ns/iter",
            "extra": "iterations: 4499\ncpu: 155538.80862413815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130981.93935969673,
            "unit": "ns/iter",
            "extra": "iterations: 5310\ncpu: 130980.18832391617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129685.99851769961,
            "unit": "ns/iter",
            "extra": "iterations: 5397\ncpu: 129685.95516027392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130229.21399481272,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 130226.34209551926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83051.78956727625,
            "unit": "ns/iter",
            "extra": "iterations: 8435\ncpu: 83050.75281564922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130661.28101782569,
            "unit": "ns/iter",
            "extra": "iterations: 5384\ncpu: 130651.78306092165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4956.625778212129,
            "unit": "ns/iter",
            "extra": "iterations: 141189\ncpu: 4956.369830510857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25833.4895027218,
            "unit": "ns/iter",
            "extra": "iterations: 27007\ncpu: 25832.05465249759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21269.45500106282,
            "unit": "ns/iter",
            "extra": "iterations: 32923\ncpu: 21268.02235519242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20820.34131879248,
            "unit": "ns/iter",
            "extra": "iterations: 33561\ncpu: 20819.725276362227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21598.15576372195,
            "unit": "ns/iter",
            "extra": "iterations: 32453\ncpu: 21597.969371090214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49423.84139784958,
            "unit": "ns/iter",
            "extra": "iterations: 14136\ncpu: 49422.276457272026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152912.68201659952,
            "unit": "ns/iter",
            "extra": "iterations: 4582\ncpu: 152912.70187690787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128884.38085577893,
            "unit": "ns/iter",
            "extra": "iterations: 5422\ncpu: 128881.4828476593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126953.32663044026,
            "unit": "ns/iter",
            "extra": "iterations: 5520\ncpu: 126951.75724637666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127111.80403930487,
            "unit": "ns/iter",
            "extra": "iterations: 5496\ncpu: 127109.77074235953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81728.95208115767,
            "unit": "ns/iter",
            "extra": "iterations: 8577\ncpu: 81725.3235396985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128289.34161490048,
            "unit": "ns/iter",
            "extra": "iterations: 5474\ncpu: 128287.96127146395 ns\nthreads: 1"
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
        "date": 1702504022784,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1330.5520086965494,
            "unit": "ns/iter",
            "extra": "iterations: 508713\ncpu: 1330.536274874045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16069.346679384105,
            "unit": "ns/iter",
            "extra": "iterations: 51376\ncpu: 16069.067268763625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34105.89810251073,
            "unit": "ns/iter",
            "extra": "iterations: 24348\ncpu: 34105.90602924265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50507.659088199005,
            "unit": "ns/iter",
            "extra": "iterations: 16758\ncpu: 50506.67144050603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56361.92479998953,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56361.99 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71092.97951116452,
            "unit": "ns/iter",
            "extra": "iterations: 12397\ncpu: 71091.57860772767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83809.59405557824,
            "unit": "ns/iter",
            "extra": "iterations: 10329\ncpu: 83806.76735405173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97929.32943688863,
            "unit": "ns/iter",
            "extra": "iterations: 8897\ncpu: 97926.33471956836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115020.18325371381,
            "unit": "ns/iter",
            "extra": "iterations: 7536\ncpu: 115018.63057324836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1127.6594458162335,
            "unit": "ns/iter",
            "extra": "iterations: 620841\ncpu: 1127.6595778951446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 942.7466565071256,
            "unit": "ns/iter",
            "extra": "iterations: 744132\ncpu: 942.7179586417465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 912.0100528562936,
            "unit": "ns/iter",
            "extra": "iterations: 767742\ncpu: 911.9910073957136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 904.9449560914932,
            "unit": "ns/iter",
            "extra": "iterations: 771148\ncpu: 904.9370548844045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1831.637168697004,
            "unit": "ns/iter",
            "extra": "iterations: 382354\ncpu: 1831.6214816635895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5588.492860000542,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5588.412999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29926.78145694983,
            "unit": "ns/iter",
            "extra": "iterations: 27331\ncpu: 29925.74731989315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23504.768760056053,
            "unit": "ns/iter",
            "extra": "iterations: 34808\ncpu: 23504.272006435305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22804.301649099983,
            "unit": "ns/iter",
            "extra": "iterations: 35959\ncpu: 22803.907227675947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23107.38915234927,
            "unit": "ns/iter",
            "extra": "iterations: 35215\ncpu: 23107.386057077918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65882.02945322683,
            "unit": "ns/iter",
            "extra": "iterations: 13479\ncpu: 65878.69278136361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 583667.6400000443,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583624.3000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 563944.6254072057,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 563927.4918566765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 559623.9487678214,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 559617.6394293148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 569345.2794788317,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 569318.8273615617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 333292.6462663493,
            "unit": "ns/iter",
            "extra": "iterations: 2598\ncpu: 333281.4857582754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 564230.4371761718,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 564221.3082901563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2409384.078124965,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2409306.7708333326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1109913.7057415822,
            "unit": "ns/iter",
            "extra": "iterations: 836\ncpu: 1109876.5550239242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3385676.580292206,
            "unit": "ns/iter",
            "extra": "iterations: 274\ncpu: 3385520.802919709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8605.84431615033,
            "unit": "ns/iter",
            "extra": "iterations: 97865\ncpu: 8605.301180197199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 47755.06121508987,
            "unit": "ns/iter",
            "extra": "iterations: 17365\ncpu: 47750.895479412466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37643.83708170834,
            "unit": "ns/iter",
            "extra": "iterations: 22054\ncpu: 37641.65684229634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36468.97669256298,
            "unit": "ns/iter",
            "extra": "iterations: 22525\ncpu: 36466.79245283033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36842.98182545309,
            "unit": "ns/iter",
            "extra": "iterations: 22504\ncpu: 36842.68574475661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79619.9860204208,
            "unit": "ns/iter",
            "extra": "iterations: 10873\ncpu: 79614.65097029305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 608858.6089999808,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 608823.700000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 601400.4961832416,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 601370.1596113793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 595887.3587628362,
            "unit": "ns/iter",
            "extra": "iterations: 1455\ncpu: 595851.8900343606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 595385.5353741222,
            "unit": "ns/iter",
            "extra": "iterations: 1470\ncpu: 595356.7346938816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 348640.4781918907,
            "unit": "ns/iter",
            "extra": "iterations: 2522\ncpu: 348624.10785091185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 580296.7013333576,
            "unit": "ns/iter",
            "extra": "iterations: 1500\ncpu: 580261.7333333349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2557558.803867509,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2557415.4696132536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1138657.7902439467,
            "unit": "ns/iter",
            "extra": "iterations: 820\ncpu: 1138603.7804877996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5555.02148999949,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5554.924999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29630.073406704516,
            "unit": "ns/iter",
            "extra": "iterations: 27804\ncpu: 29628.575025176262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23476.519466730933,
            "unit": "ns/iter",
            "extra": "iterations: 33904\ncpu: 23475.02359603583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22680.595919374748,
            "unit": "ns/iter",
            "extra": "iterations: 36416\ncpu: 22679.11357644991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23126.333098947005,
            "unit": "ns/iter",
            "extra": "iterations: 35554\ncpu: 23125.063284018757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 65286.75737606622,
            "unit": "ns/iter",
            "extra": "iterations: 13354\ncpu: 65282.499625579956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 578417.1110000216,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578396.2000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 574797.0823529083,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 574782.4836601301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 576094.3185955944,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 576080.6892067587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 572837.1036269811,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 572826.424870463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 338362.79190755164,
            "unit": "ns/iter",
            "extra": "iterations: 2595\ncpu: 338360.1926782261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 567122.6735350844,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 567108.8216355465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 537.1354996534412,
            "unit": "ns/iter",
            "extra": "iterations: 1302793\ncpu: 537.1145684694332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3236.0367306727267,
            "unit": "ns/iter",
            "extra": "iterations: 215188\ncpu: 3235.9467070654764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2641.072860519998,
            "unit": "ns/iter",
            "extra": "iterations: 270311\ncpu: 2641.048274025093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2491.024309967252,
            "unit": "ns/iter",
            "extra": "iterations: 278610\ncpu: 2490.944689709651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2047.3896486496612,
            "unit": "ns/iter",
            "extra": "iterations: 340458\ncpu: 2047.3471030200515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17861.75053135653,
            "unit": "ns/iter",
            "extra": "iterations: 39051\ncpu: 17861.565644925948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31483.74271669839,
            "unit": "ns/iter",
            "extra": "iterations: 22174\ncpu: 31483.764769549944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7426.01389892417,
            "unit": "ns/iter",
            "extra": "iterations: 94108\ncpu: 7426.014791516187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7397.564346926806,
            "unit": "ns/iter",
            "extra": "iterations: 94752\ncpu: 7397.445964201291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7367.001759413413,
            "unit": "ns/iter",
            "extra": "iterations: 94918\ncpu: 7366.847173349552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 15197.13002461015,
            "unit": "ns/iter",
            "extra": "iterations: 46322\ncpu: 15196.507059280724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 12893.474899635741,
            "unit": "ns/iter",
            "extra": "iterations: 54302\ncpu: 12893.361202165655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5234.401491712158,
            "unit": "ns/iter",
            "extra": "iterations: 133806\ncpu: 5234.40503415391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26584.483522794402,
            "unit": "ns/iter",
            "extra": "iterations: 26127\ncpu: 26584.028016993878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20991.232549078533,
            "unit": "ns/iter",
            "extra": "iterations: 33365\ncpu: 20990.77176682167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20880.42918172785,
            "unit": "ns/iter",
            "extra": "iterations: 33473\ncpu: 20879.837480954593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21378.301437900675,
            "unit": "ns/iter",
            "extra": "iterations: 32617\ncpu: 21377.845908575473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51174.92257971048,
            "unit": "ns/iter",
            "extra": "iterations: 13769\ncpu: 51173.46212506358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 159267.4864007189,
            "unit": "ns/iter",
            "extra": "iterations: 4412\ncpu: 159259.92747053597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133920.18428599768,
            "unit": "ns/iter",
            "extra": "iterations: 5231\ncpu: 133916.72720321297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 132610.31137611074,
            "unit": "ns/iter",
            "extra": "iterations: 5283\ncpu: 132610.41075146646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132329.65362705203,
            "unit": "ns/iter",
            "extra": "iterations: 5266\ncpu: 132327.9149259417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83901.22989332776,
            "unit": "ns/iter",
            "extra": "iterations: 8343\ncpu: 83899.88013903963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132066.8251695363,
            "unit": "ns/iter",
            "extra": "iterations: 5308\ncpu: 132062.1891484568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5296.074252045247,
            "unit": "ns/iter",
            "extra": "iterations: 133397\ncpu: 5295.963177582607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26914.82376481636,
            "unit": "ns/iter",
            "extra": "iterations: 25988\ncpu: 26914.85300908099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 22206.637675643273,
            "unit": "ns/iter",
            "extra": "iterations: 31527\ncpu: 22206.109049386178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21009.413976074746,
            "unit": "ns/iter",
            "extra": "iterations: 33357\ncpu: 21008.885691159125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22299.397071519972,
            "unit": "ns/iter",
            "extra": "iterations: 31279\ncpu: 22299.181559512617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50772.51567488735,
            "unit": "ns/iter",
            "extra": "iterations: 13780\ncpu: 50772.0899854869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154684.48400617318,
            "unit": "ns/iter",
            "extra": "iterations: 4533\ncpu: 154682.48400617542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129263.77790096476,
            "unit": "ns/iter",
            "extra": "iterations: 5412\ncpu: 129261.23429416072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127390.30575472227,
            "unit": "ns/iter",
            "extra": "iterations: 5439\ncpu: 127380.54789483396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127513.47692585568,
            "unit": "ns/iter",
            "extra": "iterations: 5504\ncpu: 127505.75944767462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82145.69160540623,
            "unit": "ns/iter",
            "extra": "iterations: 8434\ncpu: 82142.02039364427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129430.82665682306,
            "unit": "ns/iter",
            "extra": "iterations: 5417\ncpu: 129422.26324533782 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}