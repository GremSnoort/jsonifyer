window.BENCHMARK_DATA = {
  "lastUpdate": 1705962174855,
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
        "date": 1705575704125,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1362.654608562692,
            "unit": "ns/iter",
            "extra": "iterations: 515421\ncpu: 1362.537808897969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16081.137731661363,
            "unit": "ns/iter",
            "extra": "iterations: 51368\ncpu: 16080.809064008721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33781.78778280886,
            "unit": "ns/iter",
            "extra": "iterations: 24310\ncpu: 33779.91772932949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50169.693732872765,
            "unit": "ns/iter",
            "extra": "iterations: 16786\ncpu: 50167.35970451566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55677.71050000374,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55675.86000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 69848.94069692497,
            "unit": "ns/iter",
            "extra": "iterations: 12512\ncpu: 69846.81106138104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83766.32056724087,
            "unit": "ns/iter",
            "extra": "iterations: 10366\ncpu: 83761.98147790854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98528.7140299774,
            "unit": "ns/iter",
            "extra": "iterations: 8938\ncpu: 98525.64332065343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114760.5474675135,
            "unit": "ns/iter",
            "extra": "iterations: 7542\ncpu: 114755.43622381345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1138.4999842808327,
            "unit": "ns/iter",
            "extra": "iterations: 604357\ncpu: 1138.3975034623559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 960.6908454193098,
            "unit": "ns/iter",
            "extra": "iterations: 730738\ncpu: 960.6308964362064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 922.0770347899078,
            "unit": "ns/iter",
            "extra": "iterations: 758125\ncpu: 922.0273701566362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 909.5463460363003,
            "unit": "ns/iter",
            "extra": "iterations: 771231\ncpu: 909.524124419272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1848.4593778512885,
            "unit": "ns/iter",
            "extra": "iterations: 379202\ncpu: 1848.4011160278685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5588.537639999913,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5588.104999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30443.279736490585,
            "unit": "ns/iter",
            "extra": "iterations: 27172\ncpu: 30442.15000736054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23667.213626561654,
            "unit": "ns/iter",
            "extra": "iterations: 34785\ncpu: 23665.8617220066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22746.783275551974,
            "unit": "ns/iter",
            "extra": "iterations: 36055\ncpu: 22745.902094023022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22545.823927266047,
            "unit": "ns/iter",
            "extra": "iterations: 36076\ncpu: 22544.339727242495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 66048.18269587841,
            "unit": "ns/iter",
            "extra": "iterations: 13465\ncpu: 66045.90419606394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 579255.9110000184,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579186.9000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 559429.071979465,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 559408.4832904867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 562189.7663854975,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 562173.1992212848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 562955.9255663469,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 562930.9385113259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 333982.6364679004,
            "unit": "ns/iter",
            "extra": "iterations: 2616\ncpu: 333969.45718654536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 561268.5761503293,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 561256.1244329223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2416105.025973924,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2416009.6103896047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1089555.6435292854,
            "unit": "ns/iter",
            "extra": "iterations: 850\ncpu: 1089525.4117647072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3533644.8320894907,
            "unit": "ns/iter",
            "extra": "iterations: 268\ncpu: 3533370.8955223826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8610.71077573293,
            "unit": "ns/iter",
            "extra": "iterations: 96541\ncpu: 8610.28682114335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46685.622424855756,
            "unit": "ns/iter",
            "extra": "iterations: 17766\ncpu: 46684.01440954635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36955.65827914396,
            "unit": "ns/iter",
            "extra": "iterations: 22454\ncpu: 36954.34221074199 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36231.125918838174,
            "unit": "ns/iter",
            "extra": "iterations: 22991\ncpu: 36228.20234004626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36219.16818320286,
            "unit": "ns/iter",
            "extra": "iterations: 22969\ncpu: 36218.49013888308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79212.63451271332,
            "unit": "ns/iter",
            "extra": "iterations: 11051\ncpu: 79211.08496968592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 593409.4949999462,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 593380.7999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 590363.6964405971,
            "unit": "ns/iter",
            "extra": "iterations: 1489\ncpu: 590340.6984553398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 589530.8500678395,
            "unit": "ns/iter",
            "extra": "iterations: 1474\ncpu: 589509.4301221176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 581397.1528059858,
            "unit": "ns/iter",
            "extra": "iterations: 1479\ncpu: 581367.6132521984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 346089.25009892473,
            "unit": "ns/iter",
            "extra": "iterations: 2527\ncpu: 346063.67233873997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 578305.4392026938,
            "unit": "ns/iter",
            "extra": "iterations: 1505\ncpu: 578279.2026578065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2574375.869444465,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2574242.4999999893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1124016.4002447717,
            "unit": "ns/iter",
            "extra": "iterations: 817\ncpu: 1123931.946144431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5588.885590000245,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5588.763999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30179.845741595604,
            "unit": "ns/iter",
            "extra": "iterations: 27616\ncpu: 30178.37123406704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23912.764464718657,
            "unit": "ns/iter",
            "extra": "iterations: 34636\ncpu: 23911.381221850195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23073.179004262656,
            "unit": "ns/iter",
            "extra": "iterations: 35893\ncpu: 23071.473546373967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23095.738503831184,
            "unit": "ns/iter",
            "extra": "iterations: 36012\ncpu: 23093.963123403228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 65394.846931988825,
            "unit": "ns/iter",
            "extra": "iterations: 13543\ncpu: 65391.833419478775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 576396.1110000082,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 576374.9000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 573817.1127968347,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 573763.0606860134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 569754.078226846,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 569733.1160365057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 570813.0294888571,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 570802.7522935749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 336345.05837177124,
            "unit": "ns/iter",
            "extra": "iterations: 2604\ncpu: 336326.65130568313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 563769.5183516049,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 563742.0476497111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 524.9653896331045,
            "unit": "ns/iter",
            "extra": "iterations: 1332202\ncpu: 524.9313542540854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3226.9055997046057,
            "unit": "ns/iter",
            "extra": "iterations: 216440\ncpu: 3226.73442986508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2630.420548507977,
            "unit": "ns/iter",
            "extra": "iterations: 299321\ncpu: 2630.235432863049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2614.8018520587784,
            "unit": "ns/iter",
            "extra": "iterations: 277313\ncpu: 2614.666820524116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1979.7417652457661,
            "unit": "ns/iter",
            "extra": "iterations: 353016\ncpu: 1979.6394497699785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17790.740709588972,
            "unit": "ns/iter",
            "extra": "iterations: 39234\ncpu: 17789.43773257891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30394.804219484966,
            "unit": "ns/iter",
            "extra": "iterations: 23036\ncpu: 30392.32505643335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7264.179365457715,
            "unit": "ns/iter",
            "extra": "iterations: 96479\ncpu: 7264.0160034825685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7192.811628742247,
            "unit": "ns/iter",
            "extra": "iterations: 97345\ncpu: 7192.740253736636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7163.877676812985,
            "unit": "ns/iter",
            "extra": "iterations: 97504\ncpu: 7163.513291762391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14607.512703569733,
            "unit": "ns/iter",
            "extra": "iterations: 48018\ncpu: 14606.714148860638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13838.810905857663,
            "unit": "ns/iter",
            "extra": "iterations: 50615\ncpu: 13837.595574434548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5091.847436213469,
            "unit": "ns/iter",
            "extra": "iterations: 137726\ncpu: 5091.735039135611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25964.350136947698,
            "unit": "ns/iter",
            "extra": "iterations: 27018\ncpu: 25964.101709971466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20613.173902797684,
            "unit": "ns/iter",
            "extra": "iterations: 33950\ncpu: 20612.556701030586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20831.357504014588,
            "unit": "ns/iter",
            "extra": "iterations: 33622\ncpu: 20830.73582773196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21179.196463712502,
            "unit": "ns/iter",
            "extra": "iterations: 33029\ncpu: 21178.1373944112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50038.01737451749,
            "unit": "ns/iter",
            "extra": "iterations: 13986\ncpu: 50035.29243529291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155731.00713011686,
            "unit": "ns/iter",
            "extra": "iterations: 4488\ncpu: 155722.25935828852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131642.330321856,
            "unit": "ns/iter",
            "extra": "iterations: 5313\ncpu: 131633.95445134607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130551.49153803491,
            "unit": "ns/iter",
            "extra": "iterations: 5377\ncpu: 130542.81197693813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131659.65607373262,
            "unit": "ns/iter",
            "extra": "iterations: 5318\ncpu: 131654.11808950608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83663.59640933623,
            "unit": "ns/iter",
            "extra": "iterations: 8355\ncpu: 83661.74745661339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131484.68845357012,
            "unit": "ns/iter",
            "extra": "iterations: 5309\ncpu: 131477.34036541556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5000.649649976942,
            "unit": "ns/iter",
            "extra": "iterations: 140705\ncpu: 5000.539426459599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25245.660855841455,
            "unit": "ns/iter",
            "extra": "iterations: 27879\ncpu: 25244.642921195315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21191.3184102057,
            "unit": "ns/iter",
            "extra": "iterations: 33237\ncpu: 21190.36014080673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21799.736054845835,
            "unit": "ns/iter",
            "extra": "iterations: 32090\ncpu: 21798.591461514425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22182.08787179419,
            "unit": "ns/iter",
            "extra": "iterations: 31637\ncpu: 22180.965325409852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48491.017232994425,
            "unit": "ns/iter",
            "extra": "iterations: 14391\ncpu: 48490.05628517808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153271.411751845,
            "unit": "ns/iter",
            "extra": "iterations: 4578\ncpu: 153268.52337265335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129375.4563124798,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 129368.75231395652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127865.11867774968,
            "unit": "ns/iter",
            "extra": "iterations: 5536\ncpu: 127858.45375722669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128409.45306197566,
            "unit": "ns/iter",
            "extra": "iterations: 5454\ncpu: 128398.22148881597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82371.75005892133,
            "unit": "ns/iter",
            "extra": "iterations: 8486\ncpu: 82369.07848220717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130408.95578357161,
            "unit": "ns/iter",
            "extra": "iterations: 5360\ncpu: 130403.52611940261 ns\nthreads: 1"
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
        "date": 1705773729258,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1299.3040838592458,
            "unit": "ns/iter",
            "extra": "iterations: 532511\ncpu: 1299.216917584801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16244.94550769341,
            "unit": "ns/iter",
            "extra": "iterations: 50631\ncpu: 16244.356224447472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34042.03238533992,
            "unit": "ns/iter",
            "extra": "iterations: 24332\ncpu: 34041.796810784144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50368.70327425627,
            "unit": "ns/iter",
            "extra": "iterations: 16645\ncpu: 50367.47371583059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55742.913500000664,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55742.84999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70586.77768873291,
            "unit": "ns/iter",
            "extra": "iterations: 12478\ncpu: 70585.14184965538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83929.17651025839,
            "unit": "ns/iter",
            "extra": "iterations: 10379\ncpu: 83925.33962809514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98666.55703703445,
            "unit": "ns/iter",
            "extra": "iterations: 8775\ncpu: 98663.79487179493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 113001.44749277791,
            "unit": "ns/iter",
            "extra": "iterations: 7618\ncpu: 112996.32449461803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1109.117591861583,
            "unit": "ns/iter",
            "extra": "iterations: 630894\ncpu: 1109.0821913031361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 931.6877971811253,
            "unit": "ns/iter",
            "extra": "iterations: 752908\ncpu: 931.6447693476501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 901.6034936052878,
            "unit": "ns/iter",
            "extra": "iterations: 774787\ncpu: 901.588565631586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 877.1158271064006,
            "unit": "ns/iter",
            "extra": "iterations: 798017\ncpu: 877.0821924846214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1842.9431140240224,
            "unit": "ns/iter",
            "extra": "iterations: 380498\ncpu: 1842.917439776292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5546.075980000751,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5546.008000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 28722.491899696677,
            "unit": "ns/iter",
            "extra": "iterations: 28394\ncpu: 28721.701767979146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 22676.54506863691,
            "unit": "ns/iter",
            "extra": "iterations: 36278\ncpu: 22676.376867523035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22637.467229449205,
            "unit": "ns/iter",
            "extra": "iterations: 36130\ncpu: 22636.711873789132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22055.48290968214,
            "unit": "ns/iter",
            "extra": "iterations: 36980\ncpu: 22055.308274743045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65258.67349992637,
            "unit": "ns/iter",
            "extra": "iterations: 13366\ncpu: 65255.83570252883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 559055.6329999572,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559049.2000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 564192.5228002524,
            "unit": "ns/iter",
            "extra": "iterations: 1557\ncpu: 564165.8959537561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 560211.8115285247,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 560169.6891191715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 565257.532425437,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 565228.7289234768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 332332.73700188287,
            "unit": "ns/iter",
            "extra": "iterations: 2635\ncpu: 332323.33965844463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 557896.3191763536,
            "unit": "ns/iter",
            "extra": "iterations: 1554\ncpu: 557870.978120978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2412072.459948481,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2411948.3204134335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1090446.7818396608,
            "unit": "ns/iter",
            "extra": "iterations: 848\ncpu: 1090407.5471698123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3338302.3876809515,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3338160.507246388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8600.833316436592,
            "unit": "ns/iter",
            "extra": "iterations: 98642\ncpu: 8600.543379088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 47471.73698005931,
            "unit": "ns/iter",
            "extra": "iterations: 17550\ncpu: 47470.216524216536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37527.29622884387,
            "unit": "ns/iter",
            "extra": "iterations: 22513\ncpu: 37525.99831208616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36457.13551730248,
            "unit": "ns/iter",
            "extra": "iterations: 22772\ncpu: 36428.021254171916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36356.65861119659,
            "unit": "ns/iter",
            "extra": "iterations: 22883\ncpu: 36355.700738539796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78841.02120966732,
            "unit": "ns/iter",
            "extra": "iterations: 11127\ncpu: 78840.92747371316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 592184.6779999669,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592162.700000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 589011.6192411795,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 589007.0460704594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 585928.6453566458,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 585918.438761774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 580010.3095872041,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 579995.2729693732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 346057.7946181242,
            "unit": "ns/iter",
            "extra": "iterations: 2527\ncpu: 346052.03798971133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 580915.333333275,
            "unit": "ns/iter",
            "extra": "iterations: 1512\ncpu: 580906.3492063512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2566660.1408838388,
            "unit": "ns/iter",
            "extra": "iterations: 362\ncpu: 2566561.325966848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1117794.0493382516,
            "unit": "ns/iter",
            "extra": "iterations: 831\ncpu: 1117785.3188929025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5530.468800000107,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5530.416000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30245.743065095692,
            "unit": "ns/iter",
            "extra": "iterations: 26929\ncpu: 30244.557911545304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23570.44623501786,
            "unit": "ns/iter",
            "extra": "iterations: 34874\ncpu: 23569.292309456738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22884.31070337948,
            "unit": "ns/iter",
            "extra": "iterations: 36353\ncpu: 22883.38789095799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22866.84441079092,
            "unit": "ns/iter",
            "extra": "iterations: 36320\ncpu: 22865.952643171797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 65054.51989271841,
            "unit": "ns/iter",
            "extra": "iterations: 13422\ncpu: 65051.93711816457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 577255.0799999863,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577220.599999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 570696.661151527,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 570667.637326273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 573078.2234600561,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 573063.6304062891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 569663.8027522841,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 569639.3184796872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 332776.8995070217,
            "unit": "ns/iter",
            "extra": "iterations: 2637\ncpu: 332762.2298065979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 565107.9318766595,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 565102.8920308449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 524.7482258777836,
            "unit": "ns/iter",
            "extra": "iterations: 1332349\ncpu: 524.7179230066563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3211.4032385920536,
            "unit": "ns/iter",
            "extra": "iterations: 218243\ncpu: 3211.400136545045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2400.8293809427146,
            "unit": "ns/iter",
            "extra": "iterations: 291427\ncpu: 2400.7494158056634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2501.187542602721,
            "unit": "ns/iter",
            "extra": "iterations: 280203\ncpu: 2501.092779163669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1959.8630250403048,
            "unit": "ns/iter",
            "extra": "iterations: 356306\ncpu: 1959.7576240647224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17814.25200915301,
            "unit": "ns/iter",
            "extra": "iterations: 39320\ncpu: 17813.98779247201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30959.278793781188,
            "unit": "ns/iter",
            "extra": "iterations: 22583\ncpu: 30958.433334809248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7324.968566124204,
            "unit": "ns/iter",
            "extra": "iterations: 95343\ncpu: 7324.60904313891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7265.396415046823,
            "unit": "ns/iter",
            "extra": "iterations: 96124\ncpu: 7265.138779077143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7258.4645515037755,
            "unit": "ns/iter",
            "extra": "iterations: 96478\ncpu: 7258.271315740433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14717.408568309203,
            "unit": "ns/iter",
            "extra": "iterations: 47664\ncpu: 14717.396777442238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13969.33108528508,
            "unit": "ns/iter",
            "extra": "iterations: 49821\ncpu: 13968.671845205816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5130.395566643034,
            "unit": "ns/iter",
            "extra": "iterations: 137097\ncpu: 5130.126844496906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25826.565681173288,
            "unit": "ns/iter",
            "extra": "iterations: 27093\ncpu: 25825.1467168642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20723.808138160082,
            "unit": "ns/iter",
            "extra": "iterations: 33816\ncpu: 20722.52188313235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20524.377801276485,
            "unit": "ns/iter",
            "extra": "iterations: 34047\ncpu: 20523.599729785405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21198.951530611834,
            "unit": "ns/iter",
            "extra": "iterations: 32928\ncpu: 21197.79215257565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50419.3414845324,
            "unit": "ns/iter",
            "extra": "iterations: 13863\ncpu: 50418.91365505285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155779.53510351366,
            "unit": "ns/iter",
            "extra": "iterations: 4444\ncpu: 155774.54995499723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130557.19705443014,
            "unit": "ns/iter",
            "extra": "iterations: 5364\ncpu: 130552.44220730975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130821.46186757118,
            "unit": "ns/iter",
            "extra": "iterations: 5376\ncpu: 130813.43005952185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 129856.24075793866,
            "unit": "ns/iter",
            "extra": "iterations: 5383\ncpu: 129851.19821660736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83628.56965054423,
            "unit": "ns/iter",
            "extra": "iterations: 8356\ncpu: 83626.51986596556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130374.60439151061,
            "unit": "ns/iter",
            "extra": "iterations: 5374\ncpu: 130372.40416821632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5067.294929871604,
            "unit": "ns/iter",
            "extra": "iterations: 137748\ncpu: 5067.290269187264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26486.0388548063,
            "unit": "ns/iter",
            "extra": "iterations: 26406\ncpu: 26484.6019843973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21722.220744925493,
            "unit": "ns/iter",
            "extra": "iterations: 32191\ncpu: 21721.21711037229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 20365.510282064668,
            "unit": "ns/iter",
            "extra": "iterations: 34283\ncpu: 20364.15424554431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21948.271963088937,
            "unit": "ns/iter",
            "extra": "iterations: 31644\ncpu: 21947.345468335156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48970.54555003389,
            "unit": "ns/iter",
            "extra": "iterations: 14281\ncpu: 48969.53994818342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153502.7553121754,
            "unit": "ns/iter",
            "extra": "iterations: 4565\ncpu: 153500.087623221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127399.59756761293,
            "unit": "ns/iter",
            "extra": "iterations: 5509\ncpu: 127395.75240515386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127612.94714780957,
            "unit": "ns/iter",
            "extra": "iterations: 5487\ncpu: 127609.95079278348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127106.77152198681,
            "unit": "ns/iter",
            "extra": "iterations: 5506\ncpu: 127102.96040682892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83078.11687544711,
            "unit": "ns/iter",
            "extra": "iterations: 8462\ncpu: 83078.10210352228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128254.38090010687,
            "unit": "ns/iter",
            "extra": "iterations: 5466\ncpu: 128253.18331503912 ns\nthreads: 1"
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
        "date": 1705775489074,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1375.9005983578581,
            "unit": "ns/iter",
            "extra": "iterations: 509227\ncpu: 1375.9003352139619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16361.346689862137,
            "unit": "ns/iter",
            "extra": "iterations: 50013\ncpu: 16360.586247575633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34345.40686011022,
            "unit": "ns/iter",
            "extra": "iterations: 24227\ncpu: 34345.06542287531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50409.72879922591,
            "unit": "ns/iter",
            "extra": "iterations: 16556\ncpu: 50408.54675042281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55393.45759999605,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55393.459999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70377.13250714766,
            "unit": "ns/iter",
            "extra": "iterations: 12588\ncpu: 70374.81728630446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 83661.83540642001,
            "unit": "ns/iter",
            "extra": "iterations: 10371\ncpu: 83658.32610162956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96306.74733862618,
            "unit": "ns/iter",
            "extra": "iterations: 7421\ncpu: 96303.19363967112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 111507.04346690906,
            "unit": "ns/iter",
            "extra": "iterations: 7661\ncpu: 111503.25022842971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1123.3284081292727,
            "unit": "ns/iter",
            "extra": "iterations: 622783\ncpu: 1123.2700635694944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 957.4216920277778,
            "unit": "ns/iter",
            "extra": "iterations: 734657\ncpu: 957.3752104723706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 916.4979205985459,
            "unit": "ns/iter",
            "extra": "iterations: 765124\ncpu: 916.4898761507935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 904.0170388619589,
            "unit": "ns/iter",
            "extra": "iterations: 776519\ncpu: 903.9617832918453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1868.878868577248,
            "unit": "ns/iter",
            "extra": "iterations: 374007\ncpu: 1868.7789265976282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5586.978730000283,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5586.700999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30411.802698018848,
            "unit": "ns/iter",
            "extra": "iterations: 27131\ncpu: 30410.71836644423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24222.782178509256,
            "unit": "ns/iter",
            "extra": "iterations: 34161\ncpu: 24221.793858493613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23297.50757554121,
            "unit": "ns/iter",
            "extra": "iterations: 35311\ncpu: 23296.646937214995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23297.573663624236,
            "unit": "ns/iter",
            "extra": "iterations: 35282\ncpu: 23296.425939572506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65099.5506915831,
            "unit": "ns/iter",
            "extra": "iterations: 13592\ncpu: 65097.402884049545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 569848.8450000241,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569839.9999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 561422.2643826985,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 561396.3154492562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 563858.2710764946,
            "unit": "ns/iter",
            "extra": "iterations: 1542\ncpu: 563827.6264591432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 568232.0419896373,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 568196.6408268735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 332741.33769144915,
            "unit": "ns/iter",
            "extra": "iterations: 2677\ncpu: 332726.0739633919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 568564.3731246064,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 568530.5936073061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2408448.184415387,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2408372.727272728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1064300.664746557,
            "unit": "ns/iter",
            "extra": "iterations: 868\ncpu: 1064262.5576036861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3468551.4115523016,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3468524.18772563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8641.421632370439,
            "unit": "ns/iter",
            "extra": "iterations: 95052\ncpu: 8641.202710095544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 46966.6263309095,
            "unit": "ns/iter",
            "extra": "iterations: 17751\ncpu: 46964.142865190726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37178.0167575314,
            "unit": "ns/iter",
            "extra": "iterations: 22378\ncpu: 37175.79765841436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36448.15058690165,
            "unit": "ns/iter",
            "extra": "iterations: 22917\ncpu: 36446.9564079069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36282.61291036058,
            "unit": "ns/iter",
            "extra": "iterations: 22602\ncpu: 36281.35120785777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78182.45996425847,
            "unit": "ns/iter",
            "extra": "iterations: 11190\ncpu: 78179.7855227878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 598863.0250000142,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598829.099999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 590539.2254969757,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 590517.6833447535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 590525.8974881441,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 590504.3448744055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 582451.9780292554,
            "unit": "ns/iter",
            "extra": "iterations: 1502\ncpu: 582429.0945406128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 342112.4080346611,
            "unit": "ns/iter",
            "extra": "iterations: 2539\ncpu: 342096.2583694372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 578938.1424802012,
            "unit": "ns/iter",
            "extra": "iterations: 1516\ncpu: 578934.1688654341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2570355.6346153975,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2570241.208791212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1145295.963008633,
            "unit": "ns/iter",
            "extra": "iterations: 811\ncpu: 1145251.0480887797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5565.088009999499,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5565.089999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29523.4122679357,
            "unit": "ns/iter",
            "extra": "iterations: 28171\ncpu: 29522.665152106714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23739.24515448869,
            "unit": "ns/iter",
            "extra": "iterations: 35084\ncpu: 23738.476228480376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22982.751987368083,
            "unit": "ns/iter",
            "extra": "iterations: 36103\ncpu: 22982.61640306889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22994.651964583478,
            "unit": "ns/iter",
            "extra": "iterations: 36140\ncpu: 22994.291643608183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64601.116351498014,
            "unit": "ns/iter",
            "extra": "iterations: 13485\ncpu: 64600.15572858744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 579607.2699999968,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579560.899999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 578137.9303251585,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 578122.495023223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 573975.5460526017,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 573953.881578948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 567325.9343729592,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 567304.288499027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 335731.9040307347,
            "unit": "ns/iter",
            "extra": "iterations: 2605\ncpu: 335721.1132437638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 567699.1445312899,
            "unit": "ns/iter",
            "extra": "iterations: 1536\ncpu: 567678.1901041659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 522.2803715487935,
            "unit": "ns/iter",
            "extra": "iterations: 1342704\ncpu: 522.2763170438203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3257.1286702571915,
            "unit": "ns/iter",
            "extra": "iterations: 215380\ncpu: 3257.0693657721204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2283.9981070204244,
            "unit": "ns/iter",
            "extra": "iterations: 305867\ncpu: 2283.9979468200277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2400.8653694521995,
            "unit": "ns/iter",
            "extra": "iterations: 291702\ncpu: 2400.8470973802096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1961.75892201933,
            "unit": "ns/iter",
            "extra": "iterations: 355665\ncpu: 1961.7027258796795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17735.08843986499,
            "unit": "ns/iter",
            "extra": "iterations: 39394\ncpu: 17734.606792912604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31128.416380736173,
            "unit": "ns/iter",
            "extra": "iterations: 22441\ncpu: 31128.425649481036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7313.214925278771,
            "unit": "ns/iter",
            "extra": "iterations: 95489\ncpu: 7312.826608300314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7285.644424131804,
            "unit": "ns/iter",
            "extra": "iterations: 96272\ncpu: 7285.440211068747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7284.507891897925,
            "unit": "ns/iter",
            "extra": "iterations: 96428\ncpu: 7284.504500767506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14754.739028661443,
            "unit": "ns/iter",
            "extra": "iterations: 47419\ncpu: 14754.501360214472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14055.519118443919,
            "unit": "ns/iter",
            "extra": "iterations: 49821\ncpu: 14055.13538467737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5091.467637364259,
            "unit": "ns/iter",
            "extra": "iterations: 137427\ncpu: 5091.3590488040345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26005.941835274018,
            "unit": "ns/iter",
            "extra": "iterations: 27233\ncpu: 26005.16652590596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20556.45178965706,
            "unit": "ns/iter",
            "extra": "iterations: 33945\ncpu: 20555.772573280454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20571.21814331031,
            "unit": "ns/iter",
            "extra": "iterations: 33996\ncpu: 20570.461230732853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 20978.232579729625,
            "unit": "ns/iter",
            "extra": "iterations: 33395\ncpu: 20977.32295253775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49984.22875723547,
            "unit": "ns/iter",
            "extra": "iterations: 13993\ncpu: 49982.02672764961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157121.86792031224,
            "unit": "ns/iter",
            "extra": "iterations: 4467\ncpu: 157120.59547795053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132901.14507870868,
            "unit": "ns/iter",
            "extra": "iterations: 5273\ncpu: 132898.7862696737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131298.31166885945,
            "unit": "ns/iter",
            "extra": "iterations: 5339\ncpu: 131293.36954485785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130928.67622641228,
            "unit": "ns/iter",
            "extra": "iterations: 5300\ncpu: 130921.92452830083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83947.45685219172,
            "unit": "ns/iter",
            "extra": "iterations: 8355\ncpu: 83943.65050867693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130827.57751214762,
            "unit": "ns/iter",
            "extra": "iterations: 5354\ncpu: 130826.67164736634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5264.27226831757,
            "unit": "ns/iter",
            "extra": "iterations: 133901\ncpu: 5264.175771652284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25276.0155729383,
            "unit": "ns/iter",
            "extra": "iterations: 27612\ncpu: 25275.572214979136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21771.8524717694,
            "unit": "ns/iter",
            "extra": "iterations: 32143\ncpu: 21771.465015710997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21187.6282823983,
            "unit": "ns/iter",
            "extra": "iterations: 33017\ncpu: 21187.161159402538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22270.438077046983,
            "unit": "ns/iter",
            "extra": "iterations: 31410\ncpu: 22269.63069086304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49539.529599656875,
            "unit": "ns/iter",
            "extra": "iterations: 14088\ncpu: 49539.17518455453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152997.60818203093,
            "unit": "ns/iter",
            "extra": "iterations: 4571\ncpu: 152994.92452417506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 127949.69613765701,
            "unit": "ns/iter",
            "extra": "iterations: 5463\ncpu: 127947.59289767533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127000.11733185177,
            "unit": "ns/iter",
            "extra": "iterations: 5412\ncpu: 126992.38728751025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128535.50395293099,
            "unit": "ns/iter",
            "extra": "iterations: 5439\ncpu: 128325.99742599828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82509.90965141031,
            "unit": "ns/iter",
            "extra": "iterations: 8434\ncpu: 82505.29997628773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129953.74601408529,
            "unit": "ns/iter",
            "extra": "iterations: 5394\ncpu: 129948.14608824604 ns\nthreads: 1"
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
        "date": 1705778473574,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1336.601627949359,
            "unit": "ns/iter",
            "extra": "iterations: 534169\ncpu: 1336.577562531708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16375.119883502577,
            "unit": "ns/iter",
            "extra": "iterations: 50474\ncpu: 16374.62654039704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34099.97228418178,
            "unit": "ns/iter",
            "extra": "iterations: 24210\ncpu: 34099.30194134656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50179.36551066621,
            "unit": "ns/iter",
            "extra": "iterations: 16782\ncpu: 50178.71529019187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55829.79040000283,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55828.86 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70883.34937739294,
            "unit": "ns/iter",
            "extra": "iterations: 12528\ncpu: 70881.15421455938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84470.88831848078,
            "unit": "ns/iter",
            "extra": "iterations: 10324\ncpu: 84467.46416117782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97382.59227851525,
            "unit": "ns/iter",
            "extra": "iterations: 8962\ncpu: 97379.40191921445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115004.11262886408,
            "unit": "ns/iter",
            "extra": "iterations: 7760\ncpu: 115000.79896907204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1135.0591105142362,
            "unit": "ns/iter",
            "extra": "iterations: 618807\ncpu: 1135.0409740032019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 951.0878514089577,
            "unit": "ns/iter",
            "extra": "iterations: 736357\ncpu: 951.0716948436681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 881.0017752277718,
            "unit": "ns/iter",
            "extra": "iterations: 779055\ncpu: 881.0170013670428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 875.0813214866804,
            "unit": "ns/iter",
            "extra": "iterations: 801461\ncpu: 875.0704026771107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1835.751344861149,
            "unit": "ns/iter",
            "extra": "iterations: 381452\ncpu: 1835.7255958809992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5214.248749999797,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5214.26700000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29339.577341237564,
            "unit": "ns/iter",
            "extra": "iterations: 29525\ncpu: 29339.434377646026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23648.975511156234,
            "unit": "ns/iter",
            "extra": "iterations: 34383\ncpu: 23649.3586947038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23129.45109746775,
            "unit": "ns/iter",
            "extra": "iterations: 35673\ncpu: 23129.506909987955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22855.956253367447,
            "unit": "ns/iter",
            "extra": "iterations: 35317\ncpu: 22855.68423138992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 66661.56816332889,
            "unit": "ns/iter",
            "extra": "iterations: 13519\ncpu: 66659.39788445887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 569616.6550001181,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569592.0000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 568212.9178712522,
            "unit": "ns/iter",
            "extra": "iterations: 1522\ncpu: 568207.6872536124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 572141.3649444586,
            "unit": "ns/iter",
            "extra": "iterations: 1529\ncpu: 572126.0954872465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 555259.7585318714,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 555248.679974244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 330867.84007707046,
            "unit": "ns/iter",
            "extra": "iterations: 2595\ncpu: 330860.462427745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 563869.3022506947,
            "unit": "ns/iter",
            "extra": "iterations: 1555\ncpu: 563849.9035369792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2411706.533678465,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2411643.264248701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1098728.0521326563,
            "unit": "ns/iter",
            "extra": "iterations: 844\ncpu: 1098673.8151658734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3353847.3405802716,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3353756.8840579605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8684.400855246362,
            "unit": "ns/iter",
            "extra": "iterations: 97282\ncpu: 8684.085442322317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 47300.982628569596,
            "unit": "ns/iter",
            "extra": "iterations: 17500\ncpu: 47300.097142857165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 36919.924730712955,
            "unit": "ns/iter",
            "extra": "iterations: 22559\ncpu: 36918.91041269565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36370.93907297011,
            "unit": "ns/iter",
            "extra": "iterations: 22847\ncpu: 36370.21928480759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36479.63551031517,
            "unit": "ns/iter",
            "extra": "iterations: 22692\ncpu: 36479.0058170281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79127.64811933662,
            "unit": "ns/iter",
            "extra": "iterations: 10927\ncpu: 79126.35673103319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 602786.4789998602,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 602789.8999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 593141.6557376088,
            "unit": "ns/iter",
            "extra": "iterations: 1464\ncpu: 593107.240437161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 585091.3994601966,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 585076.0458839389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 590890.1444970631,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 590895.3409858241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 346683.1423487475,
            "unit": "ns/iter",
            "extra": "iterations: 2529\ncpu: 346668.96006326715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 578862.9006579077,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 578852.3026315822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2570092.008264803,
            "unit": "ns/iter",
            "extra": "iterations: 363\ncpu: 2570016.5289256163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1124674.648910412,
            "unit": "ns/iter",
            "extra": "iterations: 826\ncpu: 1124639.5883777225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5591.112639999665,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5590.768000000068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29940.85661536595,
            "unit": "ns/iter",
            "extra": "iterations: 27353\ncpu: 29940.3100208387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23395.037294242506,
            "unit": "ns/iter",
            "extra": "iterations: 34992\ncpu: 23393.67569730214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22640.825272149606,
            "unit": "ns/iter",
            "extra": "iterations: 36285\ncpu: 22640.1405539479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23278.678490028673,
            "unit": "ns/iter",
            "extra": "iterations: 35100\ncpu: 23277.669515669517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 65092.02704520328,
            "unit": "ns/iter",
            "extra": "iterations: 13385\ncpu: 65090.698543144994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 586419.6300001367,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 586407.6000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 586509.4976620284,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 586512.1576486274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 577324.6059017438,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 577328.2622950788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 581719.1188444134,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 581713.5915955344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 337631.05408514367,
            "unit": "ns/iter",
            "extra": "iterations: 2607\ncpu: 337630.80168776383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 570742.2781758873,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 570727.2964169376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 541.082081509377,
            "unit": "ns/iter",
            "extra": "iterations: 1295310\ncpu: 541.0847596328258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3245.0366585924494,
            "unit": "ns/iter",
            "extra": "iterations: 215502\ncpu: 3245.00283060017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2659.3579179735357,
            "unit": "ns/iter",
            "extra": "iterations: 263647\ncpu: 2659.3665014204453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2429.254347454803,
            "unit": "ns/iter",
            "extra": "iterations: 287237\ncpu: 2429.2497136511074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1959.050708685078,
            "unit": "ns/iter",
            "extra": "iterations: 357493\ncpu: 1959.0126240233988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17793.596329343338,
            "unit": "ns/iter",
            "extra": "iterations: 39448\ncpu: 17793.23920097342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30540.811779092786,
            "unit": "ns/iter",
            "extra": "iterations: 22888\ncpu: 30540.50157287718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7224.945474787733,
            "unit": "ns/iter",
            "extra": "iterations: 97001\ncpu: 7224.7688168163395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7183.023219797381,
            "unit": "ns/iter",
            "extra": "iterations: 97503\ncpu: 7182.978985261975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7177.239367815927,
            "unit": "ns/iter",
            "extra": "iterations: 97440\ncpu: 7177.246510673223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14596.253867454761,
            "unit": "ns/iter",
            "extra": "iterations: 48029\ncpu: 14596.123175581457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14085.52131991916,
            "unit": "ns/iter",
            "extra": "iterations: 50094\ncpu: 14085.497265141783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5148.82070863239,
            "unit": "ns/iter",
            "extra": "iterations: 135924\ncpu: 5148.651452282162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25557.437552822903,
            "unit": "ns/iter",
            "extra": "iterations: 27215\ncpu: 25513.948190336447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20493.431338749295,
            "unit": "ns/iter",
            "extra": "iterations: 34226\ncpu: 20492.53783673233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20585.61217067683,
            "unit": "ns/iter",
            "extra": "iterations: 33819\ncpu: 20585.948727047013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 20974.215597015653,
            "unit": "ns/iter",
            "extra": "iterations: 33391\ncpu: 20974.579976640434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49794.5778014932,
            "unit": "ns/iter",
            "extra": "iterations: 14055\ncpu: 49793.34756314544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156394.2468256194,
            "unit": "ns/iter",
            "extra": "iterations: 4489\ncpu: 156387.23546446778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131994.3097015047,
            "unit": "ns/iter",
            "extra": "iterations: 5360\ncpu: 131996.52985074592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130255.06169374687,
            "unit": "ns/iter",
            "extra": "iterations: 5349\ncpu: 130257.22564965345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131179.83277027862,
            "unit": "ns/iter",
            "extra": "iterations: 5328\ncpu: 131174.9436936916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83701.38355673601,
            "unit": "ns/iter",
            "extra": "iterations: 8356\ncpu: 83697.64241263729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131155.53197895148,
            "unit": "ns/iter",
            "extra": "iterations: 5316\ncpu: 131147.59217456655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5222.205887382025,
            "unit": "ns/iter",
            "extra": "iterations: 134491\ncpu: 5222.289967358359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26361.593324074747,
            "unit": "ns/iter",
            "extra": "iterations: 26633\ncpu: 26361.510156572236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21529.293278830213,
            "unit": "ns/iter",
            "extra": "iterations: 32048\ncpu: 21529.277958062867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21402.123406864896,
            "unit": "ns/iter",
            "extra": "iterations: 32640\ncpu: 21402.254901960754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22228.60203370153,
            "unit": "ns/iter",
            "extra": "iterations: 31568\ncpu: 22228.804485555087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48457.730008311286,
            "unit": "ns/iter",
            "extra": "iterations: 14456\ncpu: 48455.76923076936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 152864.40386731492,
            "unit": "ns/iter",
            "extra": "iterations: 4551\ncpu: 152866.90837178467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129245.166697785,
            "unit": "ns/iter",
            "extra": "iterations: 5351\ncpu: 129245.84189870935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 125536.66113912468,
            "unit": "ns/iter",
            "extra": "iterations: 5548\ncpu: 125531.6510454207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127218.11325213665,
            "unit": "ns/iter",
            "extra": "iterations: 5501\ncpu: 127216.37884021206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82164.49841270325,
            "unit": "ns/iter",
            "extra": "iterations: 8505\ncpu: 82160.22339800025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128736.5728763563,
            "unit": "ns/iter",
            "extra": "iterations: 5427\ncpu: 128732.68840980281 ns\nthreads: 1"
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
        "date": 1705953637277,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1341.3327577988814,
            "unit": "ns/iter",
            "extra": "iterations: 522413\ncpu: 1341.2438051886154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16335.307125015652,
            "unit": "ns/iter",
            "extra": "iterations: 50849\ncpu: 16334.848276268953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33693.949251047045,
            "unit": "ns/iter",
            "extra": "iterations: 24434\ncpu: 33692.14618973561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50393.995180290374,
            "unit": "ns/iter",
            "extra": "iterations: 16806\ncpu: 50393.472569320475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 55845.59829999307,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55842.48 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70596.92152000025,
            "unit": "ns/iter",
            "extra": "iterations: 12500\ncpu: 70595.40800000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85903.1437260629,
            "unit": "ns/iter",
            "extra": "iterations: 8878\ncpu: 85901.32912818203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 96941.01872700787,
            "unit": "ns/iter",
            "extra": "iterations: 8971\ncpu: 96934.78987849744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114304.18720503335,
            "unit": "ns/iter",
            "extra": "iterations: 7628\ncpu: 114300.83901415841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1186.0367830048708,
            "unit": "ns/iter",
            "extra": "iterations: 615991\ncpu: 1185.9788535871485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 952.2752557963706,
            "unit": "ns/iter",
            "extra": "iterations: 738771\ncpu: 952.2612555176114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 921.6193041916107,
            "unit": "ns/iter",
            "extra": "iterations: 759462\ncpu: 921.54485675386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 914.4257086342645,
            "unit": "ns/iter",
            "extra": "iterations: 766933\ncpu: 914.395390470874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1875.970221483115,
            "unit": "ns/iter",
            "extra": "iterations: 370502\ncpu: 1875.9062029354757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5584.478279999985,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5584.382999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31140.745714069435,
            "unit": "ns/iter",
            "extra": "iterations: 26832\ncpu: 31139.669051878376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 24000.85769454114,
            "unit": "ns/iter",
            "extra": "iterations: 34440\ncpu: 23999.488966318262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23199.391123830745,
            "unit": "ns/iter",
            "extra": "iterations: 35646\ncpu: 23198.94518319023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 23231.113643493158,
            "unit": "ns/iter",
            "extra": "iterations: 35057\ncpu: 23230.202242062915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 66498.85407596218,
            "unit": "ns/iter",
            "extra": "iterations: 13322\ncpu: 66496.36691187494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 567821.4089999755,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 567769.2000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 565351.8749189463,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 565337.2650680479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 562918.0091086819,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 562897.5276512693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 563079.8172951821,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 563033.6150845237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 334137.5318906281,
            "unit": "ns/iter",
            "extra": "iterations: 2634\ncpu: 334131.9665907372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 566424.8094928514,
            "unit": "ns/iter",
            "extra": "iterations: 1538\ncpu: 566405.7867360212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2408339.528645757,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2408189.5833333405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1118728.9472421908,
            "unit": "ns/iter",
            "extra": "iterations: 834\ncpu: 1118683.333333331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3355878.1449276307,
            "unit": "ns/iter",
            "extra": "iterations: 276\ncpu: 3355580.7971014497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8990.901445564552,
            "unit": "ns/iter",
            "extra": "iterations: 92974\ncpu: 8990.521005872584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 47496.75811559729,
            "unit": "ns/iter",
            "extra": "iterations: 17682\ncpu: 47493.63759755674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37053.33166166865,
            "unit": "ns/iter",
            "extra": "iterations: 22333\ncpu: 37052.433618412346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36333.59521304823,
            "unit": "ns/iter",
            "extra": "iterations: 22812\ncpu: 36332.04453796248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36626.77502530081,
            "unit": "ns/iter",
            "extra": "iterations: 22727\ncpu: 36625.01870022435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79950.73636859233,
            "unit": "ns/iter",
            "extra": "iterations: 11004\ncpu: 79948.25517993468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 602597.1590000836,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 602592.1999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 591252.0450511869,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 591235.836177474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 584343.4956110915,
            "unit": "ns/iter",
            "extra": "iterations: 1481\ncpu: 584305.4017555718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 584107.3099063067,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 584089.0896921001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 348386.6719808715,
            "unit": "ns/iter",
            "extra": "iterations: 2509\ncpu: 348374.89039457875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 579214.8105960048,
            "unit": "ns/iter",
            "extra": "iterations: 1510\ncpu: 579172.7152317892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2559526.055401598,
            "unit": "ns/iter",
            "extra": "iterations: 361\ncpu: 2559350.1385041596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1133242.0643204555,
            "unit": "ns/iter",
            "extra": "iterations: 824\ncpu: 1133166.3834951464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5568.057929999667,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5567.875999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29674.46911301826,
            "unit": "ns/iter",
            "extra": "iterations: 27633\ncpu: 29672.427894184333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23766.796633981205,
            "unit": "ns/iter",
            "extra": "iterations: 34878\ncpu: 23766.199323355573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23307.41384141427,
            "unit": "ns/iter",
            "extra": "iterations: 35690\ncpu: 23305.648641075924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23233.53723823233,
            "unit": "ns/iter",
            "extra": "iterations: 35528\ncpu: 23232.799482098584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 65091.415023901674,
            "unit": "ns/iter",
            "extra": "iterations: 13392\ncpu: 65087.20131421783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 573847.8419999637,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573833.399999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 580818.45725645,
            "unit": "ns/iter",
            "extra": "iterations: 1509\ncpu: 580797.7468522185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 577937.5128205287,
            "unit": "ns/iter",
            "extra": "iterations: 1521\ncpu: 577899.6055226802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 576738.9023590429,
            "unit": "ns/iter",
            "extra": "iterations: 1526\ncpu: 576701.1795543906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 337469.4159257576,
            "unit": "ns/iter",
            "extra": "iterations: 2587\ncpu: 337457.28643216065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 570245.1941934787,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 570215.0967741938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 521.5516758211305,
            "unit": "ns/iter",
            "extra": "iterations: 1347429\ncpu: 521.5120054563154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3237.4932657442196,
            "unit": "ns/iter",
            "extra": "iterations: 216208\ncpu: 3237.2631910012396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2647.069185523778,
            "unit": "ns/iter",
            "extra": "iterations: 266920\ncpu: 2646.9215495279373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2501.46154285185,
            "unit": "ns/iter",
            "extra": "iterations: 280338\ncpu: 2501.254913711299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2006.9673179305412,
            "unit": "ns/iter",
            "extra": "iterations: 350498\ncpu: 2006.8354170351859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17700.14481799731,
            "unit": "ns/iter",
            "extra": "iterations: 39560\ncpu: 17699.021739130334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30842.92664194602,
            "unit": "ns/iter",
            "extra": "iterations: 22656\ncpu: 30839.384710452152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7273.695100421621,
            "unit": "ns/iter",
            "extra": "iterations: 96294\ncpu: 7273.417866118425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7263.285792780369,
            "unit": "ns/iter",
            "extra": "iterations: 96458\ncpu: 7262.9444939767545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7248.581653926331,
            "unit": "ns/iter",
            "extra": "iterations: 96413\ncpu: 7248.086876251195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14018.014007844133,
            "unit": "ns/iter",
            "extra": "iterations: 49972\ncpu: 14017.6038581605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13934.489825176848,
            "unit": "ns/iter",
            "extra": "iterations: 50222\ncpu: 13933.116960694742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5102.875302397121,
            "unit": "ns/iter",
            "extra": "iterations: 136410\ncpu: 5102.683820834178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25732.624875880043,
            "unit": "ns/iter",
            "extra": "iterations: 27191\ncpu: 25731.96645949018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20610.859460580996,
            "unit": "ns/iter",
            "extra": "iterations: 33777\ncpu: 20609.687065162918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20598.403635508188,
            "unit": "ns/iter",
            "extra": "iterations: 34053\ncpu: 20598.258596892952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21065.731483158022,
            "unit": "ns/iter",
            "extra": "iterations: 33186\ncpu: 21065.57885855483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50058.75647075868,
            "unit": "ns/iter",
            "extra": "iterations: 13986\ncpu: 50054.09695409771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156230.4744818397,
            "unit": "ns/iter",
            "extra": "iterations: 4487\ncpu: 156218.43102295726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 132099.35957806822,
            "unit": "ns/iter",
            "extra": "iterations: 5309\ncpu: 132088.39706159252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130536.98287735865,
            "unit": "ns/iter",
            "extra": "iterations: 5373\ncpu: 130531.76996091583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131475.25441231838,
            "unit": "ns/iter",
            "extra": "iterations: 5326\ncpu: 131466.74802853793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83826.28723150333,
            "unit": "ns/iter",
            "extra": "iterations: 8380\ncpu: 83822.48210023943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131646.97243061147,
            "unit": "ns/iter",
            "extra": "iterations: 5332\ncpu: 131641.8792198051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5053.235245801464,
            "unit": "ns/iter",
            "extra": "iterations: 138791\ncpu: 5052.905447759523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25432.533604296234,
            "unit": "ns/iter",
            "extra": "iterations: 27556\ncpu: 25431.448686311523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21543.650647464226,
            "unit": "ns/iter",
            "extra": "iterations: 32357\ncpu: 21542.092901072203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22040.17199749122,
            "unit": "ns/iter",
            "extra": "iterations: 31890\ncpu: 22038.996550642903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21733.93067520921,
            "unit": "ns/iter",
            "extra": "iterations: 32153\ncpu: 21732.01567505381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48761.94316939738,
            "unit": "ns/iter",
            "extra": "iterations: 13725\ncpu: 48758.79052823324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153246.348425216,
            "unit": "ns/iter",
            "extra": "iterations: 4572\ncpu: 153245.14435695496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130620.53619951138,
            "unit": "ns/iter",
            "extra": "iterations: 5373\ncpu: 130615.22426949507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 127265.90684134135,
            "unit": "ns/iter",
            "extra": "iterations: 5496\ncpu: 127257.13245997108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129200.19174041125,
            "unit": "ns/iter",
            "extra": "iterations: 5424\ncpu: 129191.05825958676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82298.9560763052,
            "unit": "ns/iter",
            "extra": "iterations: 8492\ncpu: 82290.42628356161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129456.14901887291,
            "unit": "ns/iter",
            "extra": "iterations: 5402\ncpu: 129450.85153646987 ns\nthreads: 1"
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
        "date": 1705955640281,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1303.5795571291585,
            "unit": "ns/iter",
            "extra": "iterations: 534377\ncpu: 1303.533647593366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16036.20116038988,
            "unit": "ns/iter",
            "extra": "iterations: 50845\ncpu: 16035.97010522175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33877.82339720921,
            "unit": "ns/iter",
            "extra": "iterations: 24473\ncpu: 33876.4270829077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50563.107752172524,
            "unit": "ns/iter",
            "extra": "iterations: 16705\ncpu: 50560.676444178396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56451.78700000315,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56448.99999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70719.11246982636,
            "unit": "ns/iter",
            "extra": "iterations: 12430\ncpu: 70718.5840707965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85014.24885823196,
            "unit": "ns/iter",
            "extra": "iterations: 10291\ncpu: 85011.72869497623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98439.10032913469,
            "unit": "ns/iter",
            "extra": "iterations: 8811\ncpu: 98434.77471342639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115059.25117187844,
            "unit": "ns/iter",
            "extra": "iterations: 7680\ncpu: 115055.15625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1122.9462007946047,
            "unit": "ns/iter",
            "extra": "iterations: 612128\ncpu: 1122.9251071671297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 939.7236233647426,
            "unit": "ns/iter",
            "extra": "iterations: 744115\ncpu: 939.7142914737636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 911.8577896510137,
            "unit": "ns/iter",
            "extra": "iterations: 767743\ncpu: 911.8431558477256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 912.1463409548088,
            "unit": "ns/iter",
            "extra": "iterations: 767181\ncpu: 912.1402902313786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1875.1594228144409,
            "unit": "ns/iter",
            "extra": "iterations: 373121\ncpu: 1875.1120950040365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5576.540969999541,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5576.499999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31214.4000000024,
            "unit": "ns/iter",
            "extra": "iterations: 27690\ncpu: 31211.66124954851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23490.431979128556,
            "unit": "ns/iter",
            "extra": "iterations: 34879\ncpu: 23488.956105392943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22880.94585495879,
            "unit": "ns/iter",
            "extra": "iterations: 35645\ncpu: 22879.814840791114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22905.57447346093,
            "unit": "ns/iter",
            "extra": "iterations: 35610\ncpu: 22904.97613030047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65459.73051728617,
            "unit": "ns/iter",
            "extra": "iterations: 13281\ncpu: 65457.31496122272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 565253.3790000689,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565209.5000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 563884.3957115447,
            "unit": "ns/iter",
            "extra": "iterations: 1539\ncpu: 563848.6679662126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 564676.1245923229,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 564652.7071102405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 561575.2514395487,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 561535.9564939213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 336831.54332823784,
            "unit": "ns/iter",
            "extra": "iterations: 2608\ncpu: 336811.2730061353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 562605.1126851606,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 562601.1590470065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2415077.89664084,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2414873.3850129214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1105932.2057074883,
            "unit": "ns/iter",
            "extra": "iterations: 841\ncpu: 1105840.6658739613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3363382.9277978987,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3363136.1010830286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8622.337495023925,
            "unit": "ns/iter",
            "extra": "iterations: 97957\ncpu: 8621.851424604694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 47322.90026846194,
            "unit": "ns/iter",
            "extra": "iterations: 17507\ncpu: 47318.946707031406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37366.84785149212,
            "unit": "ns/iter",
            "extra": "iterations: 22248\ncpu: 37363.9203523911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36606.517565016606,
            "unit": "ns/iter",
            "extra": "iterations: 22801\ncpu: 36606.11376694016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36458.647131182006,
            "unit": "ns/iter",
            "extra": "iterations: 22762\ncpu: 36456.27800720502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 79139.95822454321,
            "unit": "ns/iter",
            "extra": "iterations: 11107\ncpu: 79139.2365175114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 597395.4360000561,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597373.6999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 589548.1917063523,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 589519.1706322235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 588008.8526816106,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 587967.5492192816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 584198.9574898923,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 584155.3306342755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 350253.1325396932,
            "unit": "ns/iter",
            "extra": "iterations: 2520\ncpu: 350247.14285714284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 578238.6755142072,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 578189.9800928991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2581839.6444441937,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2581601.66666668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1157714.5705288993,
            "unit": "ns/iter",
            "extra": "iterations: 794\ncpu: 1157630.2267002526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5603.8011800001195,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5603.507000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 29848.157059164514,
            "unit": "ns/iter",
            "extra": "iterations: 27652\ncpu: 29845.81947056276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23488.38469652567,
            "unit": "ns/iter",
            "extra": "iterations: 35077\ncpu: 23486.883142800132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22928.84274834573,
            "unit": "ns/iter",
            "extra": "iterations: 35847\ncpu: 22927.88517867607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22703.741901984464,
            "unit": "ns/iter",
            "extra": "iterations: 35626\ncpu: 22703.682703643368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64434.62742524099,
            "unit": "ns/iter",
            "extra": "iterations: 13710\ncpu: 64433.253099927155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 578959.0019999195,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578941.5000000062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 571641.1642764077,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 571619.3611473264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 567873.6464051921,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 567866.2091503271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 580417.8572359483,
            "unit": "ns/iter",
            "extra": "iterations: 1534\ncpu: 580414.9282920442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 337138.0317278341,
            "unit": "ns/iter",
            "extra": "iterations: 2616\ncpu: 337131.95718654274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 562763.9955070578,
            "unit": "ns/iter",
            "extra": "iterations: 1558\ncpu: 562759.6277278549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 525.9834608625353,
            "unit": "ns/iter",
            "extra": "iterations: 1332113\ncpu: 525.978727029914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3195.619972932841,
            "unit": "ns/iter",
            "extra": "iterations: 218716\ncpu: 3195.5270762083996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2502.0218396279406,
            "unit": "ns/iter",
            "extra": "iterations: 279263\ncpu: 2502.0095752033053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2573.727199663583,
            "unit": "ns/iter",
            "extra": "iterations: 268757\ncpu: 2573.6963130262607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1898.2856941715866,
            "unit": "ns/iter",
            "extra": "iterations: 369318\ncpu: 1898.2483929838304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17805.591761631986,
            "unit": "ns/iter",
            "extra": "iterations: 39401\ncpu: 17805.240983731244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 29334.47601707839,
            "unit": "ns/iter",
            "extra": "iterations: 23892\ncpu: 29333.91093253015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7257.4508886046,
            "unit": "ns/iter",
            "extra": "iterations: 96556\ncpu: 7257.47338332161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7221.673660732972,
            "unit": "ns/iter",
            "extra": "iterations: 96844\ncpu: 7221.568708438388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7216.003279398079,
            "unit": "ns/iter",
            "extra": "iterations: 96969\ncpu: 7215.972114799509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14911.568859209294,
            "unit": "ns/iter",
            "extra": "iterations: 46871\ncpu: 14911.053743252862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13971.162761973994,
            "unit": "ns/iter",
            "extra": "iterations: 50196\ncpu: 13970.824368475542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5079.991167554768,
            "unit": "ns/iter",
            "extra": "iterations: 137561\ncpu: 5079.973975181927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25811.749548421954,
            "unit": "ns/iter",
            "extra": "iterations: 27127\ncpu: 25810.963246949683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20501.869528175248,
            "unit": "ns/iter",
            "extra": "iterations: 34038\ncpu: 20501.474822257507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20591.373037072135,
            "unit": "ns/iter",
            "extra": "iterations: 34069\ncpu: 20590.87440194892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 21011.95494845822,
            "unit": "ns/iter",
            "extra": "iterations: 33273\ncpu: 21012.03378114411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50822.67799999727,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50822.840000000724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155682.47389467654,
            "unit": "ns/iter",
            "extra": "iterations: 4501\ncpu: 155681.91512997213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131065.64365880573,
            "unit": "ns/iter",
            "extra": "iterations: 5346\ncpu: 131064.0478862697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129655.59606094898,
            "unit": "ns/iter",
            "extra": "iterations: 5382\ncpu: 129651.00334448033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130779.1698394896,
            "unit": "ns/iter",
            "extra": "iterations: 5358\ncpu: 130779.73124299971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83121.86669835575,
            "unit": "ns/iter",
            "extra": "iterations: 8417\ncpu: 83120.79125579278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130436.07022786654,
            "unit": "ns/iter",
            "extra": "iterations: 5354\ncpu: 130434.98319013805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5267.930971091514,
            "unit": "ns/iter",
            "extra": "iterations: 132727\ncpu: 5267.803837953062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26114.04669827018,
            "unit": "ns/iter",
            "extra": "iterations: 26789\ncpu: 26113.498077569337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21888.368519734046,
            "unit": "ns/iter",
            "extra": "iterations: 32001\ncpu: 21888.16599481251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21119.666716955464,
            "unit": "ns/iter",
            "extra": "iterations: 33143\ncpu: 21118.776212171724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21694.21211180453,
            "unit": "ns/iter",
            "extra": "iterations: 32200\ncpu: 21693.97515527929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49563.39452599015,
            "unit": "ns/iter",
            "extra": "iterations: 14103\ncpu: 49562.433524781554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153332.1690569456,
            "unit": "ns/iter",
            "extra": "iterations: 4602\ncpu: 153332.81182094803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 128929.32381126676,
            "unit": "ns/iter",
            "extra": "iterations: 5426\ncpu: 128927.44194618534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126147.59283388394,
            "unit": "ns/iter",
            "extra": "iterations: 5526\ncpu: 126148.17227651142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127304.78651685556,
            "unit": "ns/iter",
            "extra": "iterations: 5518\ncpu: 127300.18122508071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82319.099174528,
            "unit": "ns/iter",
            "extra": "iterations: 8480\ncpu: 82318.20754717074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128323.7341888188,
            "unit": "ns/iter",
            "extra": "iterations: 5455\ncpu: 128324.12465627959 ns\nthreads: 1"
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
        "date": 1705957210040,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1327.2164955721048,
            "unit": "ns/iter",
            "extra": "iterations: 538981\ncpu: 1327.1365780983003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16071.212063477467,
            "unit": "ns/iter",
            "extra": "iterations: 50914\ncpu: 16070.858702910788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34179.03274579928,
            "unit": "ns/iter",
            "extra": "iterations: 24339\ncpu: 34178.532396565206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50932.290600353364,
            "unit": "ns/iter",
            "extra": "iterations: 16607\ncpu: 50932.11898596979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56822.690000001334,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56821.389999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71979.90699574265,
            "unit": "ns/iter",
            "extra": "iterations: 12236\ncpu: 71977.7378228179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85646.79305283964,
            "unit": "ns/iter",
            "extra": "iterations: 10220\ncpu: 85643.83561643836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98065.8010453078,
            "unit": "ns/iter",
            "extra": "iterations: 8610\ncpu: 98062.38095238092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114456.5715208648,
            "unit": "ns/iter",
            "extra": "iterations: 7739\ncpu: 114449.81263729157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1143.834779807688,
            "unit": "ns/iter",
            "extra": "iterations: 611602\ncpu: 1143.7915507143523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 948.2253534099484,
            "unit": "ns/iter",
            "extra": "iterations: 738236\ncpu: 948.202336380235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 912.7323392773097,
            "unit": "ns/iter",
            "extra": "iterations: 765215\ncpu: 912.6919885261018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 921.0251901551238,
            "unit": "ns/iter",
            "extra": "iterations: 762798\ncpu: 920.9856344667928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1935.8382619521904,
            "unit": "ns/iter",
            "extra": "iterations: 364639\ncpu: 1935.747136208692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5622.199309999588,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5621.892000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30535.389214235132,
            "unit": "ns/iter",
            "extra": "iterations: 26980\ncpu: 30534.21793921423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23769.933850786445,
            "unit": "ns/iter",
            "extra": "iterations: 34528\ncpu: 23768.677594995363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 23199.38900400178,
            "unit": "ns/iter",
            "extra": "iterations: 35231\ncpu: 23199.125769918515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22997.88891387672,
            "unit": "ns/iter",
            "extra": "iterations: 35576\ncpu: 22996.81526872043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65354.41260360109,
            "unit": "ns/iter",
            "extra": "iterations: 13393\ncpu: 65351.922646158346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 568330.8220000071,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 568303.4000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 562763.0628645548,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 562738.4964355164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 560526.2047803393,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 560509.302325581 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 566688.4733766172,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 566672.2727272734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 336815.19045787986,
            "unit": "ns/iter",
            "extra": "iterations: 2599\ncpu: 336808.4647941506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 570046.5980391699,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 570018.1045751635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2419954.3890337343,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2419896.6057441267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1116497.6851629512,
            "unit": "ns/iter",
            "extra": "iterations: 829\ncpu: 1116446.6827503047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3367551.355311315,
            "unit": "ns/iter",
            "extra": "iterations: 273\ncpu: 3367301.831501824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8674.107205641687,
            "unit": "ns/iter",
            "extra": "iterations: 98409\ncpu: 8673.711754006226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 51001.1825644784,
            "unit": "ns/iter",
            "extra": "iterations: 16323\ncpu: 50998.54193469333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 40575.49864056422,
            "unit": "ns/iter",
            "extra": "iterations: 20229\ncpu: 40573.69123535537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 39916.57506446651,
            "unit": "ns/iter",
            "extra": "iterations: 20942\ncpu: 39906.77108203602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 39860.16952748565,
            "unit": "ns/iter",
            "extra": "iterations: 20740\ncpu: 39858.269045322835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 81661.67474861558,
            "unit": "ns/iter",
            "extra": "iterations: 10641\ncpu: 81659.30833568265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 600399.7980000122,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600373.9000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 593744.0800821397,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 593725.8042436708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 593983.9884589098,
            "unit": "ns/iter",
            "extra": "iterations: 1473\ncpu: 593967.4813306164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 504191.7129999547,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504188.1000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 353432.0616883217,
            "unit": "ns/iter",
            "extra": "iterations: 2464\ncpu: 353423.29545454524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 588082.3048452435,
            "unit": "ns/iter",
            "extra": "iterations: 1486\ncpu: 588079.2059219397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2595054.4929970466,
            "unit": "ns/iter",
            "extra": "iterations: 357\ncpu: 2594994.677871142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1127076.392512151,
            "unit": "ns/iter",
            "extra": "iterations: 828\ncpu: 1127047.7053140139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5678.82131000033,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5678.59200000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30259.209810162745,
            "unit": "ns/iter",
            "extra": "iterations: 27339\ncpu: 30258.747576721868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23845.95440292292,
            "unit": "ns/iter",
            "extra": "iterations: 34761\ncpu: 23845.66324328992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 22886.156120362586,
            "unit": "ns/iter",
            "extra": "iterations: 36158\ncpu: 22885.665689473957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22922.15377141279,
            "unit": "ns/iter",
            "extra": "iterations: 36021\ncpu: 22921.290358402006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64483.1584011877,
            "unit": "ns/iter",
            "extra": "iterations: 13510\ncpu: 64482.45003700962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 578898.3690000577,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578892.8000000055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 574941.0615486674,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 574939.7088021192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 570945.7829508195,
            "unit": "ns/iter",
            "extra": "iterations: 1525\ncpu: 570937.049180325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 569299.720808825,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 569285.0619699901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 336297.60927913303,
            "unit": "ns/iter",
            "extra": "iterations: 2608\ncpu: 336296.7407975464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 568541.387702286,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 568529.2556634314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 540.2105743041552,
            "unit": "ns/iter",
            "extra": "iterations: 1284302\ncpu: 540.17731032109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3281.3370973779483,
            "unit": "ns/iter",
            "extra": "iterations: 213600\ncpu: 3281.213951310856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2472.4715375143246,
            "unit": "ns/iter",
            "extra": "iterations: 283373\ncpu: 2472.3749263338495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2435.799526931764,
            "unit": "ns/iter",
            "extra": "iterations: 287485\ncpu: 2435.7034280049324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2067.009639092578,
            "unit": "ns/iter",
            "extra": "iterations: 344742\ncpu: 2066.93585347883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17850.254425794377,
            "unit": "ns/iter",
            "extra": "iterations: 39202\ncpu: 17849.693893168693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 31106.97008831729,
            "unit": "ns/iter",
            "extra": "iterations: 22533\ncpu: 31105.365463986473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7373.841108807787,
            "unit": "ns/iter",
            "extra": "iterations: 95021\ncpu: 7373.6437208617845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7312.630102653853,
            "unit": "ns/iter",
            "extra": "iterations: 95759\ncpu: 7312.334088701934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7458.2872606071705,
            "unit": "ns/iter",
            "extra": "iterations: 95711\ncpu: 7457.88780808886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14349.398437659478,
            "unit": "ns/iter",
            "extra": "iterations: 48901\ncpu: 14348.653401771115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13474.355528651087,
            "unit": "ns/iter",
            "extra": "iterations: 52038\ncpu: 13473.707675160627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5323.270984092652,
            "unit": "ns/iter",
            "extra": "iterations: 128240\ncpu: 5323.105895196497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 26466.014080724075,
            "unit": "ns/iter",
            "extra": "iterations: 26064\ncpu: 26465.450429711575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 21001.704858991176,
            "unit": "ns/iter",
            "extra": "iterations: 32764\ncpu: 21001.056037113824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 21716.25346089753,
            "unit": "ns/iter",
            "extra": "iterations: 32506\ncpu: 21715.477142681677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 22072.48201964742,
            "unit": "ns/iter",
            "extra": "iterations: 31451\ncpu: 22070.86897077984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 51562.63703099427,
            "unit": "ns/iter",
            "extra": "iterations: 13486\ncpu: 51561.24128726177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 157062.50460363214,
            "unit": "ns/iter",
            "extra": "iterations: 4453\ncpu: 157056.38895126994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 133601.9725085999,
            "unit": "ns/iter",
            "extra": "iterations: 5238\ncpu: 133593.89079801666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 130919.57092198892,
            "unit": "ns/iter",
            "extra": "iterations: 5358\ncpu: 130916.12541993133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 132252.98556505627,
            "unit": "ns/iter",
            "extra": "iterations: 5265\ncpu: 132247.1225071239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 84510.18731263165,
            "unit": "ns/iter",
            "extra": "iterations: 8339\ncpu: 84505.04856697442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 132245.46656620904,
            "unit": "ns/iter",
            "extra": "iterations: 5309\ncpu: 132242.07948766265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5355.371461618321,
            "unit": "ns/iter",
            "extra": "iterations: 131416\ncpu: 5355.143970292841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 26820.660383141872,
            "unit": "ns/iter",
            "extra": "iterations: 26100\ncpu: 26819.12643678166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21228.162308440278,
            "unit": "ns/iter",
            "extra": "iterations: 32888\ncpu: 21226.897348576622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 22096.55485824055,
            "unit": "ns/iter",
            "extra": "iterations: 31709\ncpu: 22095.515468794376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22377.08223684206,
            "unit": "ns/iter",
            "extra": "iterations: 31312\ncpu: 22375.721768012318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 51414.067908958095,
            "unit": "ns/iter",
            "extra": "iterations: 13577\ncpu: 51413.75119687668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 154777.74361232808,
            "unit": "ns/iter",
            "extra": "iterations: 4540\ncpu: 154767.1145374446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 130541.05664243661,
            "unit": "ns/iter",
            "extra": "iterations: 5367\ncpu: 130537.35792808078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 129675.8809171716,
            "unit": "ns/iter",
            "extra": "iterations: 5408\ncpu: 129672.2078402363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 129656.3715341999,
            "unit": "ns/iter",
            "extra": "iterations: 5410\ncpu: 129651.01663585778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83382.17018751087,
            "unit": "ns/iter",
            "extra": "iterations: 8426\ncpu: 83377.27272727253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 130131.70785045552,
            "unit": "ns/iter",
            "extra": "iterations: 5350\ncpu: 130128.61682242999 ns\nthreads: 1"
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
        "date": 1705958978517,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1322.8943148592289,
            "unit": "ns/iter",
            "extra": "iterations: 531825\ncpu: 1322.8372114887416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16132.373985656252,
            "unit": "ns/iter",
            "extra": "iterations: 50895\ncpu: 16131.855781510954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 33998.64147088913,
            "unit": "ns/iter",
            "extra": "iterations: 24475\ncpu: 33997.609805924425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50423.89324894934,
            "unit": "ns/iter",
            "extra": "iterations: 16590\ncpu: 50423.411693791466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56063.93270001036,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56062.03000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70833.50329133919,
            "unit": "ns/iter",
            "extra": "iterations: 12305\ncpu: 70830.19097927678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84279.92160649045,
            "unit": "ns/iter",
            "extra": "iterations: 10358\ncpu: 84278.67348909049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 97266.39396995332,
            "unit": "ns/iter",
            "extra": "iterations: 8922\ncpu: 97260.14346559066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 116260.46808510725,
            "unit": "ns/iter",
            "extra": "iterations: 7520\ncpu: 116254.02925531911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1128.787869305721,
            "unit": "ns/iter",
            "extra": "iterations: 619981\ncpu: 1128.7265254902986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 954.4428394428995,
            "unit": "ns/iter",
            "extra": "iterations: 732848\ncpu: 954.426429491518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 921.3181152196275,
            "unit": "ns/iter",
            "extra": "iterations: 760322\ncpu: 921.2949250449166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 916.7058478139929,
            "unit": "ns/iter",
            "extra": "iterations: 764696\ncpu: 916.6687154110915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1974.005096454337,
            "unit": "ns/iter",
            "extra": "iterations: 372612\ncpu: 1973.808143591726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5403.607020000436,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5403.222999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30220.890053701423,
            "unit": "ns/iter",
            "extra": "iterations: 27186\ncpu: 30219.892591775228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23379.616176008105,
            "unit": "ns/iter",
            "extra": "iterations: 35089\ncpu: 23378.372139416893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22927.51539822106,
            "unit": "ns/iter",
            "extra": "iterations: 35621\ncpu: 22926.183992588605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22812.064249488038,
            "unit": "ns/iter",
            "extra": "iterations: 35689\ncpu: 22810.913726918727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65490.790408262095,
            "unit": "ns/iter",
            "extra": "iterations: 13741\ncpu: 65488.523397132834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 566080.8829999269,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 566058.5000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 558931.6106368992,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 558903.9395929083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 552721.9101911105,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 552694.9681528665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 556653.2527472248,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 556631.0277957339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 333959.545970469,
            "unit": "ns/iter",
            "extra": "iterations: 2643\ncpu: 333944.1922058277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 567147.4642857541,
            "unit": "ns/iter",
            "extra": "iterations: 1540\ncpu: 567120.1298701297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2424658.843750057,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2424504.1666666744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1129170.675837353,
            "unit": "ns/iter",
            "extra": "iterations: 836\ncpu: 1129112.9186602875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3348316.1580881127,
            "unit": "ns/iter",
            "extra": "iterations: 272\ncpu: 3348046.6911764657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8781.732894763829,
            "unit": "ns/iter",
            "extra": "iterations: 94854\ncpu: 8781.373479241813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 47326.29655922952,
            "unit": "ns/iter",
            "extra": "iterations: 17467\ncpu: 47324.44037327539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37197.93484620037,
            "unit": "ns/iter",
            "extra": "iterations: 22562\ncpu: 37196.74674231008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36586.54765030452,
            "unit": "ns/iter",
            "extra": "iterations: 22854\ncpu: 36585.45550013118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36161.34883619799,
            "unit": "ns/iter",
            "extra": "iterations: 22899\ncpu: 36160.71444167871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78250.00356759939,
            "unit": "ns/iter",
            "extra": "iterations: 11212\ncpu: 78248.23403496211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 600662.3880000461,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 600646.6999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 594261.4325804268,
            "unit": "ns/iter",
            "extra": "iterations: 1461\ncpu: 594236.9609856247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 590221.5920162533,
            "unit": "ns/iter",
            "extra": "iterations: 1478\ncpu: 590193.2341001382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 583190.7882037802,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 583154.2895442336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 349303.68269228184,
            "unit": "ns/iter",
            "extra": "iterations: 2496\ncpu: 349289.9839743583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 581733.2985372107,
            "unit": "ns/iter",
            "extra": "iterations: 1504\ncpu: 581695.079787235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2580215.8527776934,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2580065.277777778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1148572.3732833522,
            "unit": "ns/iter",
            "extra": "iterations: 801\ncpu: 1148528.089887645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5565.149759999031,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5564.912999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30317.11653175578,
            "unit": "ns/iter",
            "extra": "iterations: 27426\ncpu: 30315.204550426624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23873.73909668399,
            "unit": "ns/iter",
            "extra": "iterations: 34783\ncpu: 23872.44630997883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23207.85132115779,
            "unit": "ns/iter",
            "extra": "iterations: 35802\ncpu: 23206.156080665998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23108.447306461145,
            "unit": "ns/iter",
            "extra": "iterations: 35678\ncpu: 23107.932058971972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64654.74159993747,
            "unit": "ns/iter",
            "extra": "iterations: 13363\ncpu: 64653.52839931164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 572738.2229999877,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572726.6999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 574370.0263158309,
            "unit": "ns/iter",
            "extra": "iterations: 1520\ncpu: 574347.6315789495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 571770.8536904039,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 571760.9405617241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 568084.6910516225,
            "unit": "ns/iter",
            "extra": "iterations: 1531\ncpu: 568071.5871979108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 337734.90015359566,
            "unit": "ns/iter",
            "extra": "iterations: 2604\ncpu: 337722.0814132107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 567185.5148196209,
            "unit": "ns/iter",
            "extra": "iterations: 1552\ncpu: 567179.896907213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 532.9394741649288,
            "unit": "ns/iter",
            "extra": "iterations: 1313720\ncpu: 532.9295435861527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3231.021226491246,
            "unit": "ns/iter",
            "extra": "iterations: 216569\ncpu: 3230.990123240172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2651.606957556562,
            "unit": "ns/iter",
            "extra": "iterations: 275614\ncpu: 2651.5089944632914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2588.2328377503645,
            "unit": "ns/iter",
            "extra": "iterations: 270725\ncpu: 2588.179887339551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 2034.1498565687389,
            "unit": "ns/iter",
            "extra": "iterations: 344416\ncpu: 2034.0695554213396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17636.842765710317,
            "unit": "ns/iter",
            "extra": "iterations: 39686\ncpu: 17635.821196391862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30826.518640300117,
            "unit": "ns/iter",
            "extra": "iterations: 22505\ncpu: 30824.44790046652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7299.46207759676,
            "unit": "ns/iter",
            "extra": "iterations: 95880\ncpu: 7299.091572799418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7302.372075786425,
            "unit": "ns/iter",
            "extra": "iterations: 95795\ncpu: 7302.07735268029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7263.538359280658,
            "unit": "ns/iter",
            "extra": "iterations: 96287\ncpu: 7263.132094675254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14769.725507576608,
            "unit": "ns/iter",
            "extra": "iterations: 47382\ncpu: 14769.237263095823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13945.059576836753,
            "unit": "ns/iter",
            "extra": "iterations: 50288\ncpu: 13944.517578746409 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5077.440200859104,
            "unit": "ns/iter",
            "extra": "iterations: 138405\ncpu: 5077.1756800693975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25547.456085159665,
            "unit": "ns/iter",
            "extra": "iterations: 27337\ncpu: 25546.18648717848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20394.035654890275,
            "unit": "ns/iter",
            "extra": "iterations: 34273\ncpu: 20393.210398856303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20272.51389734379,
            "unit": "ns/iter",
            "extra": "iterations: 34503\ncpu: 20271.10106367568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 20827.40906642747,
            "unit": "ns/iter",
            "extra": "iterations: 33420\ncpu: 20826.140035906537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49810.47844981605,
            "unit": "ns/iter",
            "extra": "iterations: 14037\ncpu: 49807.572843199916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 156396.35656836908,
            "unit": "ns/iter",
            "extra": "iterations: 4476\ncpu: 156388.40482573782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131146.2110590545,
            "unit": "ns/iter",
            "extra": "iterations: 5335\ncpu: 131137.9568884738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 128815.13046675075,
            "unit": "ns/iter",
            "extra": "iterations: 5442\ncpu: 128807.18485850867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130078.32765718868,
            "unit": "ns/iter",
            "extra": "iterations: 5344\ncpu: 130077.03967065953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83024.60422101946,
            "unit": "ns/iter",
            "extra": "iterations: 8434\ncpu: 83019.97865781421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 130180.37521031723,
            "unit": "ns/iter",
            "extra": "iterations: 5349\ncpu: 130173.97644419532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4938.082277584078,
            "unit": "ns/iter",
            "extra": "iterations: 141132\ncpu: 4937.892894595141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25193.81299820651,
            "unit": "ns/iter",
            "extra": "iterations: 27850\ncpu: 25193.35727109501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21158.776521713768,
            "unit": "ns/iter",
            "extra": "iterations: 32907\ncpu: 21157.896496186266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21566.28744628612,
            "unit": "ns/iter",
            "extra": "iterations: 32580\ncpu: 21564.987722528866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21713.654204740138,
            "unit": "ns/iter",
            "extra": "iterations: 32285\ncpu: 21712.08610809984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 48563.44304765081,
            "unit": "ns/iter",
            "extra": "iterations: 14398\ncpu: 48562.9809695785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153745.4725322765,
            "unit": "ns/iter",
            "extra": "iterations: 4569\ncpu: 153736.87896695235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129131.7383624639,
            "unit": "ns/iter",
            "extra": "iterations: 5435\ncpu: 129125.7773689059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126106.13535463203,
            "unit": "ns/iter",
            "extra": "iterations: 5541\ncpu: 126098.37574445248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 126286.92069843267,
            "unit": "ns/iter",
            "extra": "iterations: 5498\ncpu: 126280.2473626765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 82985.98164376548,
            "unit": "ns/iter",
            "extra": "iterations: 8444\ncpu: 82983.17148270874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128472.90141104319,
            "unit": "ns/iter",
            "extra": "iterations: 5457\ncpu: 128469.15887850664 ns\nthreads: 1"
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
        "date": 1705960538192,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1319.6879901734972,
            "unit": "ns/iter",
            "extra": "iterations: 488475\ncpu: 1319.6413327191772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16416.54966045739,
            "unit": "ns/iter",
            "extra": "iterations: 50362\ncpu: 16416.3496286883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34680.31129085819,
            "unit": "ns/iter",
            "extra": "iterations: 23984\ncpu: 34679.590560373596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51394.51641044248,
            "unit": "ns/iter",
            "extra": "iterations: 16392\ncpu: 51393.55173255244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56784.604699998905,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56783.53000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 71236.47059779763,
            "unit": "ns/iter",
            "extra": "iterations: 12295\ncpu: 71236.30744204961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 85464.86821628534,
            "unit": "ns/iter",
            "extra": "iterations: 10153\ncpu: 85462.32640598838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 99027.86405767543,
            "unit": "ns/iter",
            "extra": "iterations: 8739\ncpu: 99025.81531067626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 115787.19447424405,
            "unit": "ns/iter",
            "extra": "iterations: 7456\ncpu: 115784.32135193127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1143.8962977114072,
            "unit": "ns/iter",
            "extra": "iterations: 601925\ncpu: 1143.8938405947574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 945.2794722242029,
            "unit": "ns/iter",
            "extra": "iterations: 738950\ncpu: 945.2681507544498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 915.6382768678361,
            "unit": "ns/iter",
            "extra": "iterations: 757690\ncpu: 915.6092861196523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 929.2244424453818,
            "unit": "ns/iter",
            "extra": "iterations: 758132\ncpu: 929.1917502492987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1888.5932962218656,
            "unit": "ns/iter",
            "extra": "iterations: 370776\ncpu: 1888.5596694500173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5574.841500000503,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5574.831000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30216.621947649448,
            "unit": "ns/iter",
            "extra": "iterations: 27356\ncpu: 30216.131744407085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23580.675260577056,
            "unit": "ns/iter",
            "extra": "iterations: 34443\ncpu: 23580.164329471856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22734.766780715207,
            "unit": "ns/iter",
            "extra": "iterations: 35949\ncpu: 22734.304153105815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22876.650814350218,
            "unit": "ns/iter",
            "extra": "iterations: 36041\ncpu: 22876.31308787219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 66446.81157490003,
            "unit": "ns/iter",
            "extra": "iterations: 13512\ncpu: 66441.7480757846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 559475.8299999967,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559440.0999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 565628.6551723698,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 565603.3832140518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 564105.7469255308,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 564066.2135922331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 552387.5872093334,
            "unit": "ns/iter",
            "extra": "iterations: 1548\ncpu: 552353.4237726119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 325690.2879878737,
            "unit": "ns/iter",
            "extra": "iterations: 2639\ncpu: 325667.5255778699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 557891.9723650492,
            "unit": "ns/iter",
            "extra": "iterations: 1556\ncpu: 557855.5912596406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2421404.116580325,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2421288.341968919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1113620.6751207765,
            "unit": "ns/iter",
            "extra": "iterations: 828\ncpu: 1113544.9275362326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3350180.418772649,
            "unit": "ns/iter",
            "extra": "iterations: 277\ncpu: 3349945.848375457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8724.175040146663,
            "unit": "ns/iter",
            "extra": "iterations: 95898\ncpu: 8723.74814907507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 47230.44964400514,
            "unit": "ns/iter",
            "extra": "iterations: 17416\ncpu: 47227.80202113005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37267.57205928879,
            "unit": "ns/iter",
            "extra": "iterations: 22197\ncpu: 37265.72509798615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36379.319728189585,
            "unit": "ns/iter",
            "extra": "iterations: 22663\ncpu: 36378.72744120361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36178.76613401626,
            "unit": "ns/iter",
            "extra": "iterations: 22654\ncpu: 36177.22256555146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 80413.68616197407,
            "unit": "ns/iter",
            "extra": "iterations: 10977\ncpu: 80411.80650450925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 603271.0189999761,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 603255.7999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 598321.0647383102,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 598272.382920113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 591609.2929155806,
            "unit": "ns/iter",
            "extra": "iterations: 1468\ncpu: 591574.8637602162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 585422.9177430326,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 585390.0747790596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 347428.10823715496,
            "unit": "ns/iter",
            "extra": "iterations: 2513\ncpu: 347421.7270194989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 580135.2842035947,
            "unit": "ns/iter",
            "extra": "iterations: 1513\ncpu: 580102.7098479844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2568733.3416666687,
            "unit": "ns/iter",
            "extra": "iterations: 360\ncpu: 2568497.77777778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1109759.3627684778,
            "unit": "ns/iter",
            "extra": "iterations: 838\ncpu: 1109695.4653937973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5731.102039999315,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5730.701999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 30181.160300885174,
            "unit": "ns/iter",
            "extra": "iterations: 27386\ncpu: 30179.420141678198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 23739.008654039808,
            "unit": "ns/iter",
            "extra": "iterations: 34897\ncpu: 23737.51898443992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23061.631462930265,
            "unit": "ns/iter",
            "extra": "iterations: 35839\ncpu: 23060.866653645448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 22898.92822489029,
            "unit": "ns/iter",
            "extra": "iterations: 36071\ncpu: 22898.721965013418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64967.1993899232,
            "unit": "ns/iter",
            "extra": "iterations: 13441\ncpu: 64966.014433449935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 578395.2140000111,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578386.799999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 581132.8936309577,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 581123.1122783968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 578064.5573019028,
            "unit": "ns/iter",
            "extra": "iterations: 1527\ncpu: 578058.6116568416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 571068.443225833,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 571062.5806451589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 338785.9412442471,
            "unit": "ns/iter",
            "extra": "iterations: 2604\ncpu: 338775.6144393244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 559986.2757517741,
            "unit": "ns/iter",
            "extra": "iterations: 1563\ncpu: 559975.3678822785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 522.6279148008683,
            "unit": "ns/iter",
            "extra": "iterations: 1343488\ncpu: 522.6132276581537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3214.99055891982,
            "unit": "ns/iter",
            "extra": "iterations: 214700\ncpu: 3214.9175593851887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2417.10598142303,
            "unit": "ns/iter",
            "extra": "iterations: 290466\ncpu: 2417.055696708048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2583.791776192796,
            "unit": "ns/iter",
            "extra": "iterations: 270483\ncpu: 2583.7823449163056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1960.8741590292796,
            "unit": "ns/iter",
            "extra": "iterations: 359406\ncpu: 1960.830370110675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17741.743732873696,
            "unit": "ns/iter",
            "extra": "iterations: 39412\ncpu: 17741.390946919833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30763.73435034279,
            "unit": "ns/iter",
            "extra": "iterations: 22812\ncpu: 30763.12467122593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7255.503281437327,
            "unit": "ns/iter",
            "extra": "iterations: 96604\ncpu: 7255.481139497445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7235.7920876815115,
            "unit": "ns/iter",
            "extra": "iterations: 96988\ncpu: 7235.638429496479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7220.703040298922,
            "unit": "ns/iter",
            "extra": "iterations: 95188\ncpu: 7220.518342648164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14883.63014726565,
            "unit": "ns/iter",
            "extra": "iterations: 46651\ncpu: 14883.08074853689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 14013.619890187481,
            "unit": "ns/iter",
            "extra": "iterations: 49904\ncpu: 14013.171288874639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5181.491117461754,
            "unit": "ns/iter",
            "extra": "iterations: 134027\ncpu: 5181.481343311331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25808.474502738463,
            "unit": "ns/iter",
            "extra": "iterations: 27199\ncpu: 25808.16941799332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20578.488837053297,
            "unit": "ns/iter",
            "extra": "iterations: 33011\ncpu: 20578.24058647125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20586.1655821309,
            "unit": "ns/iter",
            "extra": "iterations: 34116\ncpu: 20585.417399460905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 20812.03504335283,
            "unit": "ns/iter",
            "extra": "iterations: 33216\ncpu: 20811.548651252608 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 49828.38130122095,
            "unit": "ns/iter",
            "extra": "iterations: 13787\ncpu: 49827.83781823501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 155248.6847487684,
            "unit": "ns/iter",
            "extra": "iterations: 4498\ncpu: 155245.5758114711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 131787.80700433205,
            "unit": "ns/iter",
            "extra": "iterations: 5311\ncpu: 131783.92016569272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 131715.7530007374,
            "unit": "ns/iter",
            "extra": "iterations: 5332\ncpu: 131714.5723931004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 131476.12445947225,
            "unit": "ns/iter",
            "extra": "iterations: 5319\ncpu: 131475.69091934402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 83436.70828849322,
            "unit": "ns/iter",
            "extra": "iterations: 8361\ncpu: 83436.45496950061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 131117.00491028113,
            "unit": "ns/iter",
            "extra": "iterations: 5295\ncpu: 131110.08498583594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 5247.778987524819,
            "unit": "ns/iter",
            "extra": "iterations: 132902\ncpu: 5247.576409685347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25636.43939891093,
            "unit": "ns/iter",
            "extra": "iterations: 27417\ncpu: 25635.74789364248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21804.843207433678,
            "unit": "ns/iter",
            "extra": "iterations: 31851\ncpu: 21804.853850742795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21622.00624173564,
            "unit": "ns/iter",
            "extra": "iterations: 32523\ncpu: 21621.483258001797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 21534.83549836774,
            "unit": "ns/iter",
            "extra": "iterations: 32486\ncpu: 21534.621067536405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 50425.296496933224,
            "unit": "ns/iter",
            "extra": "iterations: 13845\ncpu: 50424.60093896742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 151700.44295008807,
            "unit": "ns/iter",
            "extra": "iterations: 4610\ncpu: 151698.0043383961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129291.73795014016,
            "unit": "ns/iter",
            "extra": "iterations: 5415\ncpu: 129291.61588181117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 126866.35152169305,
            "unit": "ns/iter",
            "extra": "iterations: 5553\ncpu: 126860.45380875231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 127801.88019692941,
            "unit": "ns/iter",
            "extra": "iterations: 5484\ncpu: 127787.27206418688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 83711.48128661513,
            "unit": "ns/iter",
            "extra": "iterations: 8363\ncpu: 83704.4362071024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 129608.44821855765,
            "unit": "ns/iter",
            "extra": "iterations: 5417\ncpu: 129605.83348716839 ns\nthreads: 1"
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
        "date": 1705962168242,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1321.9211907907106,
            "unit": "ns/iter",
            "extra": "iterations: 529900\ncpu: 1321.8550669937724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 16121.635359885096,
            "unit": "ns/iter",
            "extra": "iterations: 50266\ncpu: 16121.13157999443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 34061.65405339401,
            "unit": "ns/iter",
            "extra": "iterations: 24498\ncpu: 34059.05380031024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50421.34851580594,
            "unit": "ns/iter",
            "extra": "iterations: 16642\ncpu: 50417.74426150703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 56380.48737768554,
            "unit": "ns/iter",
            "extra": "iterations: 10220\ncpu: 56378.38551859094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 70329.33567392844,
            "unit": "ns/iter",
            "extra": "iterations: 12390\ncpu: 70327.65133171911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 84176.74277708305,
            "unit": "ns/iter",
            "extra": "iterations: 10349\ncpu: 84173.36940767227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 98275.73727570452,
            "unit": "ns/iter",
            "extra": "iterations: 8861\ncpu: 98269.6873941993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 114220.0433545489,
            "unit": "ns/iter",
            "extra": "iterations: 7381\ncpu: 114210.7031567538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1144.7042286427939,
            "unit": "ns/iter",
            "extra": "iterations: 612064\ncpu: 1144.629156428085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 950.9360184569056,
            "unit": "ns/iter",
            "extra": "iterations: 729054\ncpu: 950.8900575266025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 916.440553771438,
            "unit": "ns/iter",
            "extra": "iterations: 766020\ncpu: 916.4152372000731 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 925.5939299633869,
            "unit": "ns/iter",
            "extra": "iterations: 756404\ncpu: 925.5908218359501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 1877.008841087626,
            "unit": "ns/iter",
            "extra": "iterations: 374049\ncpu: 1876.9097096904447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 5664.569379999874,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5664.104999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29901.69948054114,
            "unit": "ns/iter",
            "extra": "iterations: 27336\ncpu: 29899.385425812143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 23635.351895665597,
            "unit": "ns/iter",
            "extra": "iterations: 34658\ncpu: 23634.130648046645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 22589.148969622856,
            "unit": "ns/iter",
            "extra": "iterations: 35618\ncpu: 22587.98921893425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 22995.560983836134,
            "unit": "ns/iter",
            "extra": "iterations: 35575\ncpu: 22994.27969079401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65955.7210086638,
            "unit": "ns/iter",
            "extra": "iterations: 13047\ncpu: 65950.67831685445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 561013.7760000953,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 560999.8000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 561016.848680021,
            "unit": "ns/iter",
            "extra": "iterations: 1553\ncpu: 560975.1448808758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 565256.475420455,
            "unit": "ns/iter",
            "extra": "iterations: 1546\ncpu: 565217.2703751617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 557485.7453134719,
            "unit": "ns/iter",
            "extra": "iterations: 1547\ncpu: 557453.135100195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 333339.7600305568,
            "unit": "ns/iter",
            "extra": "iterations: 2617\ncpu: 333325.9075277028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 561101.5323834246,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 561078.2383419678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_v_vectors_t>/custom_float_v_vectors_process",
            "value": 2413318.457142732,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2413205.9740259727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_s_vectors_t>/custom_float_s_vectors_process",
            "value": 1087414.420494813,
            "unit": "ns/iter",
            "extra": "iterations: 849\ncpu: 1087368.7868080083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_m_vectors_t>/custom_float_m_vectors_process",
            "value": 3338255.6594979893,
            "unit": "ns/iter",
            "extra": "iterations: 279\ncpu: 3338175.268817198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::bool_lists_t>/bool_lists_process",
            "value": 8600.676153210887,
            "unit": "ns/iter",
            "extra": "iterations: 98139\ncpu: 8600.652136255745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::int_lists_t>/int_lists_process",
            "value": 47817.884823375825,
            "unit": "ns/iter",
            "extra": "iterations: 17382\ncpu: 47816.72995052345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::signed_int_lists_t>/signed_int_lists_process",
            "value": 37463.126725505426,
            "unit": "ns/iter",
            "extra": "iterations: 22095\ncpu: 37462.29011088472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::unsigned_int_lists_t>/unsigned_int_lists_process",
            "value": 36462.20538280925,
            "unit": "ns/iter",
            "extra": "iterations: 22962\ncpu: 36462.08082919605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::char_lists_t>/char_lists_process",
            "value": 36635.343140264325,
            "unit": "ns/iter",
            "extra": "iterations: 22807\ncpu: 36634.34471872656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::string_lists_t>/string_lists_process",
            "value": 78337.58422041568,
            "unit": "ns/iter",
            "extra": "iterations: 11179\ncpu: 78336.44333124626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_int_lists_t>/custom_int_lists_process",
            "value": 595376.8300000775,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595362.999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_signed_int_lists_t>/custom_signed_int_lists_process",
            "value": 588229.4336042999,
            "unit": "ns/iter",
            "extra": "iterations: 1476\ncpu: 588223.4417344198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_unsigned_int_lists_t>/custom_unsigned_int_lists_process",
            "value": 586967.3476798867,
            "unit": "ns/iter",
            "extra": "iterations: 1487\ncpu: 586961.1297915225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_char_lists_t>/custom_char_lists_process",
            "value": 584780.9824797546,
            "unit": "ns/iter",
            "extra": "iterations: 1484\ncpu: 584768.0592991887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_lists_t>/custom_float_lists_process",
            "value": 344466.70925632,
            "unit": "ns/iter",
            "extra": "iterations: 2528\ncpu: 344461.0759493683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_mix_lists_t>/custom_mix_lists_process",
            "value": 577922.8402640367,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 577917.4257425751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_l_lists_t>/custom_float_l_lists_process",
            "value": 2554379.1483513997,
            "unit": "ns/iter",
            "extra": "iterations: 364\ncpu: 2554278.296703293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::list::custom_float_s_lists_t>/custom_float_s_lists_process",
            "value": 1118191.027777716,
            "unit": "ns/iter",
            "extra": "iterations: 828\ncpu: 1118120.048309178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::bool_deques_t>/bool_deques_process",
            "value": 5615.00983999963,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5615.042000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::int_deques_t>/int_deques_process",
            "value": 31050.288310920172,
            "unit": "ns/iter",
            "extra": "iterations: 27068\ncpu: 31049.083788975793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::signed_int_deques_t>/signed_int_deques_process",
            "value": 24118.78063206705,
            "unit": "ns/iter",
            "extra": "iterations: 34490\ncpu: 24118.904030153564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::unsigned_int_deques_t>/unsigned_int_deques_process",
            "value": 23142.03684018073,
            "unit": "ns/iter",
            "extra": "iterations: 35559\ncpu: 23141.851570629176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::char_deques_t>/char_deques_process",
            "value": 23465.04588678706,
            "unit": "ns/iter",
            "extra": "iterations: 35544\ncpu: 23464.953297321717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::string_deques_t>/string_deques_process",
            "value": 64900.88281076137,
            "unit": "ns/iter",
            "extra": "iterations: 13491\ncpu: 64897.41309020846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_int_deques_t>/custom_int_deques_process",
            "value": 574374.4149999657,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 574355.9000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_signed_int_deques_t>/custom_signed_int_deques_process",
            "value": 568157.895433472,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 568136.3997352766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_unsigned_int_deques_t>/custom_unsigned_int_deques_process",
            "value": 570442.1227208546,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 570424.2636746159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_char_deques_t>/custom_char_deques_process",
            "value": 570748.4404684019,
            "unit": "ns/iter",
            "extra": "iterations: 1537\ncpu: 570739.2973324637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_float_deques_t>/custom_float_deques_process",
            "value": 337332.98348693794,
            "unit": "ns/iter",
            "extra": "iterations: 2604\ncpu: 337320.35330261034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::deque::custom_mix_deques_t>/custom_mix_deques_process",
            "value": 563308.1080905871,
            "unit": "ns/iter",
            "extra": "iterations: 1545\ncpu: 563290.3559870553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::bool_sets_t>/bool_sets_process",
            "value": 540.6308383551761,
            "unit": "ns/iter",
            "extra": "iterations: 1305783\ncpu: 540.6240546859676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::int_sets_t>/int_sets_process",
            "value": 3215.609969877134,
            "unit": "ns/iter",
            "extra": "iterations: 224416\ncpu: 3215.62544560101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::signed_int_sets_t>/signed_int_sets_process",
            "value": 2624.947362922332,
            "unit": "ns/iter",
            "extra": "iterations: 287155\ncpu: 2624.916856749831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::unsigned_int_sets_t>/unsigned_int_sets_process",
            "value": 2612.604324587811,
            "unit": "ns/iter",
            "extra": "iterations: 279148\ncpu: 2612.57433332858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::char_sets_t>/char_sets_process",
            "value": 1997.1139153270171,
            "unit": "ns/iter",
            "extra": "iterations: 351138\ncpu: 1997.093735226612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::string_sets_t>/string_sets_process",
            "value": 17642.05381818141,
            "unit": "ns/iter",
            "extra": "iterations: 39875\ncpu: 17642.134169278823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_int_sets_t>/custom_int_sets_process",
            "value": 30469.602974426634,
            "unit": "ns/iter",
            "extra": "iterations: 22996\ncpu: 30469.246825535385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_signed_int_sets_t>/custom_signed_int_sets_process",
            "value": 7250.6123562914,
            "unit": "ns/iter",
            "extra": "iterations: 96550\ncpu: 7250.46607975134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_unsigned_int_sets_t>/custom_unsigned_int_sets_process",
            "value": 7231.4137010300665,
            "unit": "ns/iter",
            "extra": "iterations: 97000\ncpu: 7231.126804123688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_char_sets_t>/custom_char_sets_process",
            "value": 7188.307807051206,
            "unit": "ns/iter",
            "extra": "iterations: 97207\ncpu: 7188.175748660059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_float_sets_t>/custom_float_sets_process",
            "value": 14729.880169291058,
            "unit": "ns/iter",
            "extra": "iterations: 47492\ncpu: 14729.055419860082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::set::custom_mix_sets_t>/custom_mix_sets_process",
            "value": 13845.825372073685,
            "unit": "ns/iter",
            "extra": "iterations: 50662\ncpu: 13845.517350282173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::bool_maps_t>/bool_maps_process",
            "value": 5324.016063494192,
            "unit": "ns/iter",
            "extra": "iterations: 136832\ncpu: 5323.839452759528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::int_maps_t>/int_maps_process",
            "value": 25491.796901200167,
            "unit": "ns/iter",
            "extra": "iterations: 27430\ncpu: 25490.57965730939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::signed_int_maps_t>/signed_int_maps_process",
            "value": 20478.78921798348,
            "unit": "ns/iter",
            "extra": "iterations: 34168\ncpu: 20478.315968157152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::unsigned_int_maps_t>/unsigned_int_maps_process",
            "value": 20317.452741817924,
            "unit": "ns/iter",
            "extra": "iterations: 34375\ncpu: 20316.52945454508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::char_maps_t>/char_maps_process",
            "value": 20946.96769570829,
            "unit": "ns/iter",
            "extra": "iterations: 33494\ncpu: 20946.60237654527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::string_maps_t>/string_maps_process",
            "value": 50003.16148095381,
            "unit": "ns/iter",
            "extra": "iterations: 14045\ncpu: 50000.88287646916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_int_maps_t>/custom_int_maps_process",
            "value": 154699.66584657715,
            "unit": "ns/iter",
            "extra": "iterations: 4471\ncpu: 154692.95459628737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_signed_int_maps_t>/custom_signed_int_maps_process",
            "value": 130352.51592473747,
            "unit": "ns/iter",
            "extra": "iterations: 5369\ncpu: 130345.85583907447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_unsigned_int_maps_t>/custom_unsigned_int_maps_process",
            "value": 129370.181885401,
            "unit": "ns/iter",
            "extra": "iterations: 5410\ncpu: 129366.2476894625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_char_maps_t>/custom_char_maps_process",
            "value": 130567.25485074084,
            "unit": "ns/iter",
            "extra": "iterations: 5360\ncpu: 130562.1082089548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_float_maps_t>/custom_float_maps_process",
            "value": 81918.82451416839,
            "unit": "ns/iter",
            "extra": "iterations: 8542\ncpu: 81917.58370405123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::map::custom_mix_maps_t>/custom_mix_maps_process",
            "value": 129905.64425041006,
            "unit": "ns/iter",
            "extra": "iterations: 5383\ncpu: 129906.29760356605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::bool_unordered_maps_t>/bool_unordered_maps_process",
            "value": 4935.924445353033,
            "unit": "ns/iter",
            "extra": "iterations: 141937\ncpu: 4935.8743667965155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::int_unordered_maps_t>/int_unordered_maps_process",
            "value": 25032.569845342477,
            "unit": "ns/iter",
            "extra": "iterations: 28062\ncpu: 25032.470957166344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::signed_int_unordered_maps_t>/signed_int_unordered_maps_process",
            "value": 21248.37392692787,
            "unit": "ns/iter",
            "extra": "iterations: 33199\ncpu: 21247.88096026977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::unsigned_int_unordered_maps_t>/unsigned_int_unordered_maps_process",
            "value": 21195.20211572897,
            "unit": "ns/iter",
            "extra": "iterations: 32991\ncpu: 21195.13200569822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::char_unordered_maps_t>/char_unordered_maps_process",
            "value": 22078.50271122396,
            "unit": "ns/iter",
            "extra": "iterations: 31720\ncpu: 22078.22824716245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::string_unordered_maps_t>/string_unordered_maps_process",
            "value": 49570.448881333396,
            "unit": "ns/iter",
            "extra": "iterations: 14124\ncpu: 49568.9323137921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_int_unordered_maps_t>/custom_int_unordered_maps_process",
            "value": 153021.853748908,
            "unit": "ns/iter",
            "extra": "iterations: 4588\ncpu: 153020.2266782899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_signed_int_unordered_maps_t>/custom_signed_int_unordered_maps_process",
            "value": 129498.432080377,
            "unit": "ns/iter",
            "extra": "iterations: 5374\ncpu: 129497.84145887665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_unsigned_int_unordered_maps_t>/custom_unsigned_int_unordered_maps_process",
            "value": 124377.17687197332,
            "unit": "ns/iter",
            "extra": "iterations: 5569\ncpu: 124371.07200574843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_char_unordered_maps_t>/custom_char_unordered_maps_process",
            "value": 128210.81204247555,
            "unit": "ns/iter",
            "extra": "iterations: 5464\ncpu: 128208.16251830044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_float_unordered_maps_t>/custom_float_unordered_maps_process",
            "value": 81470.12822899364,
            "unit": "ns/iter",
            "extra": "iterations: 8594\ncpu: 81467.01186874654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::unordered_map::custom_mix_unordered_maps_t>/custom_mix_unordered_maps_process",
            "value": 128103.91744462634,
            "unit": "ns/iter",
            "extra": "iterations: 5463\ncpu: 128098.59051803006 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}