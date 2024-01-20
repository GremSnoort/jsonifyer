window.BENCHMARK_DATA = {
  "lastUpdate": 1705778477852,
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
      }
    ]
  }
}