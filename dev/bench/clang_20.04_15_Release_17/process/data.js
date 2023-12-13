window.BENCHMARK_DATA = {
  "lastUpdate": 1702490375987,
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
      }
    ]
  }
}