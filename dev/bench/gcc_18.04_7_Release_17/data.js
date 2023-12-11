window.BENCHMARK_DATA = {
  "lastUpdate": 1702285094324,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-7 18.04 Release c++-17": [
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
          "id": "2a00f1e1b9f17dcc00e5a75bc03c76022553da63",
          "message": "Commented 12 gcc build",
          "timestamp": "2023-12-09T04:07:37+03:00",
          "tree_id": "2348f9686cb6bdf1d1325a0eaab297a2d9a173d8",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/2a00f1e1b9f17dcc00e5a75bc03c76022553da63"
        },
        "date": 1702084727223,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1686.7472172257462,
            "unit": "ns/iter",
            "extra": "iterations: 419186\ncpu: 1686.6631996297585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 20353.015824438844,
            "unit": "ns/iter",
            "extra": "iterations: 40191\ncpu: 20352.14849095569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 43260.86539569484,
            "unit": "ns/iter",
            "extra": "iterations: 19093\ncpu: 43259.152569004335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 53444.17729999975,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53441.16000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 71136.94311377309,
            "unit": "ns/iter",
            "extra": "iterations: 12358\ncpu: 71133.81615148077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 88604.31039368371,
            "unit": "ns/iter",
            "extra": "iterations: 9881\ncpu: 88602.43902439032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 105211.57326892097,
            "unit": "ns/iter",
            "extra": "iterations: 8073\ncpu: 105207.48172922083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 121308.3600562608,
            "unit": "ns/iter",
            "extra": "iterations: 7110\ncpu: 121303.164556962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 146059.81117501896,
            "unit": "ns/iter",
            "extra": "iterations: 6085\ncpu: 146055.2834839768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1423.0121410797176,
            "unit": "ns/iter",
            "extra": "iterations: 495096\ncpu: 1422.9878649797224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1194.8214511148883,
            "unit": "ns/iter",
            "extra": "iterations: 583000\ncpu: 1194.7742710120083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1142.5620277258545,
            "unit": "ns/iter",
            "extra": "iterations: 610477\ncpu: 1142.4869405399381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1140.9963448811764,
            "unit": "ns/iter",
            "extra": "iterations: 612292\ncpu: 1140.9373305547015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2162.541283893426,
            "unit": "ns/iter",
            "extra": "iterations: 323625\ncpu: 2162.4528389339484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7143.045083667675,
            "unit": "ns/iter",
            "extra": "iterations: 115696\ncpu: 7142.763794772519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 38681.523156569485,
            "unit": "ns/iter",
            "extra": "iterations: 21441\ncpu: 38678.53644885964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30875.703920768832,
            "unit": "ns/iter",
            "extra": "iterations: 26959\ncpu: 30873.923365109986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30733.45988222275,
            "unit": "ns/iter",
            "extra": "iterations: 27170\ncpu: 30731.991166727934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30930.781789469558,
            "unit": "ns/iter",
            "extra": "iterations: 27863\ncpu: 30929.08516670858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 84220.57069457651,
            "unit": "ns/iter",
            "extra": "iterations: 10510\ncpu: 84215.70884871543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 645382.3209999996,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 645350.3000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 536619.6140000169,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536596.5000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 526484.1739999895,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 526477.7999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 523747.7370000079,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523732.1000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 379046.4063848088,
            "unit": "ns/iter",
            "extra": "iterations: 2318\ncpu: 379033.08886971587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 529577.7879999833,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529579.5999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 849.8543396709966,
            "unit": "ns/iter",
            "extra": "iterations: 827171\ncpu: 849.8344356850034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13440.382407601968,
            "unit": "ns/iter",
            "extra": "iterations: 61879\ncpu: 13439.687131336943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 29419.56026093072,
            "unit": "ns/iter",
            "extra": "iterations: 28360\ncpu: 29418.511988716415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 44304.4982236606,
            "unit": "ns/iter",
            "extra": "iterations: 18859\ncpu: 44303.66403308763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 59076.272950588114,
            "unit": "ns/iter",
            "extra": "iterations: 14248\ncpu: 59074.08057271214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 61204.5624000018,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61204.090000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 72774.99664429549,
            "unit": "ns/iter",
            "extra": "iterations: 11920\ncpu: 72773.93456375832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 85175.24858037995,
            "unit": "ns/iter",
            "extra": "iterations: 10214\ncpu: 85170.62854905041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 97582.48745399689,
            "unit": "ns/iter",
            "extra": "iterations: 8967\ncpu: 97578.22014051564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 688.073158750554,
            "unit": "ns/iter",
            "extra": "iterations: 997502\ncpu: 688.0375177192578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 542.4599299726007,
            "unit": "ns/iter",
            "extra": "iterations: 1287496\ncpu: 542.4435493391819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 542.65817923144,
            "unit": "ns/iter",
            "extra": "iterations: 1289082\ncpu: 542.6342156666531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 554.9043357969418,
            "unit": "ns/iter",
            "extra": "iterations: 1263597\ncpu: 554.8870407257994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1110.4743473036665,
            "unit": "ns/iter",
            "extra": "iterations: 631649\ncpu: 1110.4466246285572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5643.861666420349,
            "unit": "ns/iter",
            "extra": "iterations: 142113\ncpu: 5643.686362261003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 26098.770732637957,
            "unit": "ns/iter",
            "extra": "iterations: 31448\ncpu: 26096.979140167827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20928.81590189436,
            "unit": "ns/iter",
            "extra": "iterations: 39794\ncpu: 20928.67015127913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 21101.90343467079,
            "unit": "ns/iter",
            "extra": "iterations: 39538\ncpu: 21101.20390510393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 20941.52404789487,
            "unit": "ns/iter",
            "extra": "iterations: 39754\ncpu: 20941.286411430345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 56779.26638604941,
            "unit": "ns/iter",
            "extra": "iterations: 14967\ncpu: 56775.41257433045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 541061.6654275084,
            "unit": "ns/iter",
            "extra": "iterations: 1614\ncpu: 541036.0594795519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 448495.0447609241,
            "unit": "ns/iter",
            "extra": "iterations: 1966\ncpu: 448469.78636825853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 446978.1075656214,
            "unit": "ns/iter",
            "extra": "iterations: 1943\ncpu: 446952.3417395775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 447113.24008138536,
            "unit": "ns/iter",
            "extra": "iterations: 1966\ncpu: 447083.9776195305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 268083.12001209706,
            "unit": "ns/iter",
            "extra": "iterations: 3308\ncpu: 268072.2793228544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 448368.08857574366,
            "unit": "ns/iter",
            "extra": "iterations: 1987\ncpu: 448342.6774031181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 702.0121212608707,
            "unit": "ns/iter",
            "extra": "iterations: 994616\ncpu: 702.00318514884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6557.331934843052,
            "unit": "ns/iter",
            "extra": "iterations: 125850\ncpu: 6556.955899880792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12512.042689837717,
            "unit": "ns/iter",
            "extra": "iterations: 66175\ncpu: 12511.418209293523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18579.525283548614,
            "unit": "ns/iter",
            "extra": "iterations: 45583\ncpu: 18578.61702827807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24586.26931761545,
            "unit": "ns/iter",
            "extra": "iterations: 34101\ncpu: 24585.1793202547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 30410.023178928343,
            "unit": "ns/iter",
            "extra": "iterations: 27525\ncpu: 30409.736603088237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 36589.48443755716,
            "unit": "ns/iter",
            "extra": "iterations: 23229\ncpu: 36588.2345344182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 42454.78916934753,
            "unit": "ns/iter",
            "extra": "iterations: 19888\ncpu: 42452.896218825364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 48229.23413491686,
            "unit": "ns/iter",
            "extra": "iterations: 17507\ncpu: 48226.89210030276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 668.3012115637212,
            "unit": "ns/iter",
            "extra": "iterations: 1041464\ncpu: 668.2761958166583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 528.4771564211571,
            "unit": "ns/iter",
            "extra": "iterations: 1324092\ncpu: 528.4551979771816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 513.3395740085239,
            "unit": "ns/iter",
            "extra": "iterations: 1364863\ncpu: 513.3331330690311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 518.6665188580772,
            "unit": "ns/iter",
            "extra": "iterations: 1362122\ncpu: 518.6406210310064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 987.9266883867413,
            "unit": "ns/iter",
            "extra": "iterations: 706873\ncpu: 987.8734935412754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 3009.7924008541436,
            "unit": "ns/iter",
            "extra": "iterations: 266451\ncpu: 3009.6824556860247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14788.287310599364,
            "unit": "ns/iter",
            "extra": "iterations: 55306\ncpu: 14787.51672512927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11715.585856843081,
            "unit": "ns/iter",
            "extra": "iterations: 69546\ncpu: 11715.031777528497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11503.17176154843,
            "unit": "ns/iter",
            "extra": "iterations: 70790\ncpu: 11502.610538211686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11379.292726863097,
            "unit": "ns/iter",
            "extra": "iterations: 71056\ncpu: 11378.878630938892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 39582.86464578539,
            "unit": "ns/iter",
            "extra": "iterations: 20849\ncpu: 39581.02546884747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 276112.6803170352,
            "unit": "ns/iter",
            "extra": "iterations: 3028\ncpu: 276099.8348745014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 213611.81347282816,
            "unit": "ns/iter",
            "extra": "iterations: 3919\ncpu: 213599.7448328667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 212448.4261677574,
            "unit": "ns/iter",
            "extra": "iterations: 3982\ncpu: 212440.50728277196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 213152.23478919288,
            "unit": "ns/iter",
            "extra": "iterations: 3961\ncpu: 213139.1062862922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 113947.42235142161,
            "unit": "ns/iter",
            "extra": "iterations: 7740\ncpu: 113941.53746769986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 210141.2342079585,
            "unit": "ns/iter",
            "extra": "iterations: 4116\ncpu: 210125.4373177857 ns\nthreads: 1"
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
          "id": "2a00f1e1b9f17dcc00e5a75bc03c76022553da63",
          "message": "Commented 12 gcc build",
          "timestamp": "2023-12-09T04:07:37+03:00",
          "tree_id": "2348f9686cb6bdf1d1325a0eaab297a2d9a173d8",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/2a00f1e1b9f17dcc00e5a75bc03c76022553da63"
        },
        "date": 1702084992826,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1850.062403114105,
            "unit": "ns/iter",
            "extra": "iterations: 378667\ncpu: 1849.9819102271917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 20357.811830335326,
            "unit": "ns/iter",
            "extra": "iterations: 40692\ncpu: 20356.858842032834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 42534.06441182426,
            "unit": "ns/iter",
            "extra": "iterations: 19484\ncpu: 42532.61650585095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52349.551899999366,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52346.23000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 70678.28733429051,
            "unit": "ns/iter",
            "extra": "iterations: 12522\ncpu: 70675.17169781188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 88914.67691527183,
            "unit": "ns/iter",
            "extra": "iterations: 9855\ncpu: 88910.49213597164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 106583.50902794972,
            "unit": "ns/iter",
            "extra": "iterations: 8086\ncpu: 106578.46895869405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 121152.16507483683,
            "unit": "ns/iter",
            "extra": "iterations: 7015\ncpu: 121146.35780470417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 139477.33053447094,
            "unit": "ns/iter",
            "extra": "iterations: 6193\ncpu: 139471.2417245277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1422.177708246908,
            "unit": "ns/iter",
            "extra": "iterations: 491868\ncpu: 1422.1154862686733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1167.444022856535,
            "unit": "ns/iter",
            "extra": "iterations: 594841\ncpu: 1167.334800392038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1074.3079459708208,
            "unit": "ns/iter",
            "extra": "iterations: 656534\ncpu: 1074.2930297593111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1090.8693159129537,
            "unit": "ns/iter",
            "extra": "iterations: 641088\ncpu: 1090.8120258061304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2115.5839278620856,
            "unit": "ns/iter",
            "extra": "iterations: 329813\ncpu: 2115.543959759013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7673.840809082554,
            "unit": "ns/iter",
            "extra": "iterations: 109309\ncpu: 7673.609675324081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 41599.595916501006,
            "unit": "ns/iter",
            "extra": "iterations: 19689\ncpu: 41599.08070496216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 32967.47624537806,
            "unit": "ns/iter",
            "extra": "iterations: 25153\ncpu: 32965.570707271516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 33028.2952078689,
            "unit": "ns/iter",
            "extra": "iterations: 25521\ncpu: 33026.35084832093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 31983.61294797628,
            "unit": "ns/iter",
            "extra": "iterations: 25950\ncpu: 31981.934489402724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 83055.19302282593,
            "unit": "ns/iter",
            "extra": "iterations: 10864\ncpu: 83049.65022091319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 654288.328000007,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 654229.0000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 538359.5349999836,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538361.5999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 529640.8399999848,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529549.0000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 528384.821000003,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528333.6999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 392047.972161809,
            "unit": "ns/iter",
            "extra": "iterations: 2299\ncpu: 392030.8394954333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 530262.7339999902,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530243.6999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 874.3805592157053,
            "unit": "ns/iter",
            "extra": "iterations: 793075\ncpu: 874.3492103521093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13609.951462178997,
            "unit": "ns/iter",
            "extra": "iterations: 61210\ncpu: 13609.3187387682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 29176.034901684587,
            "unit": "ns/iter",
            "extra": "iterations: 28480\ncpu: 29174.557584269616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 43948.93233636994,
            "unit": "ns/iter",
            "extra": "iterations: 18991\ncpu: 43946.49570849344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 58963.39239527569,
            "unit": "ns/iter",
            "extra": "iterations: 14228\ncpu: 58959.867866179404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 61458.31090000229,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61454.88000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 73184.45932447196,
            "unit": "ns/iter",
            "extra": "iterations: 11813\ncpu: 73183.78058071606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 84972.67404230274,
            "unit": "ns/iter",
            "extra": "iterations: 10259\ncpu: 84971.43971147304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 96738.97017251156,
            "unit": "ns/iter",
            "extra": "iterations: 8985\ncpu: 96736.22704507536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 723.4490056957927,
            "unit": "ns/iter",
            "extra": "iterations: 964745\ncpu: 723.414477400763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 577.1366723540283,
            "unit": "ns/iter",
            "extra": "iterations: 1210874\ncpu: 577.1037283813216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 567.718717406153,
            "unit": "ns/iter",
            "extra": "iterations: 1233937\ncpu: 567.6885448770852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 576.8924419084614,
            "unit": "ns/iter",
            "extra": "iterations: 1211708\ncpu: 576.8818065078382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1118.8829406011985,
            "unit": "ns/iter",
            "extra": "iterations: 624811\ncpu: 1118.8868313778128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5689.944309020499,
            "unit": "ns/iter",
            "extra": "iterations: 141531\ncpu: 5689.668694490959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 26315.026229611994,
            "unit": "ns/iter",
            "extra": "iterations: 31453\ncpu: 26313.938257081896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 21232.760175649964,
            "unit": "ns/iter",
            "extra": "iterations: 38941\ncpu: 21231.532318122314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20871.55787394654,
            "unit": "ns/iter",
            "extra": "iterations: 39491\ncpu: 20870.92248866831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 20702.917188361065,
            "unit": "ns/iter",
            "extra": "iterations: 39934\ncpu: 20702.030850903964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 57460.71837884965,
            "unit": "ns/iter",
            "extra": "iterations: 14903\ncpu: 57458.25672683366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 535635.526092224,
            "unit": "ns/iter",
            "extra": "iterations: 1648\ncpu: 535636.8932038863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 473629.34428714635,
            "unit": "ns/iter",
            "extra": "iterations: 1978\ncpu: 473606.77451971755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 440414.2574665269,
            "unit": "ns/iter",
            "extra": "iterations: 1942\ncpu: 440390.5767250251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 448226.209958909,
            "unit": "ns/iter",
            "extra": "iterations: 1948\ncpu: 448205.1334702261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 265527.6269382914,
            "unit": "ns/iter",
            "extra": "iterations: 3289\ncpu: 265472.5144420806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 446212.6519280204,
            "unit": "ns/iter",
            "extra": "iterations: 1945\ncpu: 446185.65552699054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 708.7867865797581,
            "unit": "ns/iter",
            "extra": "iterations: 1000725\ncpu: 708.7659446901041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6455.081438422003,
            "unit": "ns/iter",
            "extra": "iterations: 124720\ncpu: 6454.7394162924775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12512.265030748855,
            "unit": "ns/iter",
            "extra": "iterations: 66181\ncpu: 12511.696710536322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18722.85493965118,
            "unit": "ns/iter",
            "extra": "iterations: 44740\ncpu: 18722.380420205616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24786.581031526377,
            "unit": "ns/iter",
            "extra": "iterations: 33814\ncpu: 24786.641627728157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 30679.22398373931,
            "unit": "ns/iter",
            "extra": "iterations: 27060\ncpu: 30678.968957871428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 36785.339833603706,
            "unit": "ns/iter",
            "extra": "iterations: 22717\ncpu: 36784.61944799063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 43304.77240917985,
            "unit": "ns/iter",
            "extra": "iterations: 19434\ncpu: 43303.895235154945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 49531.20448848785,
            "unit": "ns/iter",
            "extra": "iterations: 17155\ncpu: 49529.65899154767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 674.293671166624,
            "unit": "ns/iter",
            "extra": "iterations: 1037790\ncpu: 674.2956667533904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 539.9716263392149,
            "unit": "ns/iter",
            "extra": "iterations: 1297048\ncpu: 539.9616668002992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 514.0732425722927,
            "unit": "ns/iter",
            "extra": "iterations: 1350212\ncpu: 514.0629027145357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 522.0338198211532,
            "unit": "ns/iter",
            "extra": "iterations: 1340013\ncpu: 522.0356071172433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 992.2558373764818,
            "unit": "ns/iter",
            "extra": "iterations: 705925\ncpu: 992.2358607500777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2912.692223950166,
            "unit": "ns/iter",
            "extra": "iterations: 276490\ncpu: 2912.7002784911056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14961.467250662523,
            "unit": "ns/iter",
            "extra": "iterations: 54795\ncpu: 14961.093165434771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11647.673689024863,
            "unit": "ns/iter",
            "extra": "iterations: 69967\ncpu: 11647.703917561186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11659.581569433536,
            "unit": "ns/iter",
            "extra": "iterations: 70535\ncpu: 11659.327993194862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11052.658370121173,
            "unit": "ns/iter",
            "extra": "iterations: 73846\ncpu: 11052.690734772397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40002.87588070742,
            "unit": "ns/iter",
            "extra": "iterations: 20722\ncpu: 40001.91101245083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 274214.5520900306,
            "unit": "ns/iter",
            "extra": "iterations: 3110\ncpu: 274210.99678456597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 213267.64416562926,
            "unit": "ns/iter",
            "extra": "iterations: 3985\ncpu: 213261.45545796808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 213525.35642820626,
            "unit": "ns/iter",
            "extra": "iterations: 3998\ncpu: 213524.08704352353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 214365.39793867114,
            "unit": "ns/iter",
            "extra": "iterations: 3978\ncpu: 214357.84313725543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 112138.66293868228,
            "unit": "ns/iter",
            "extra": "iterations: 7779\ncpu: 112138.84818099886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 208041.08900023502,
            "unit": "ns/iter",
            "extra": "iterations: 4191\ncpu: 208033.4764972567 ns\nthreads: 1"
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
          "id": "2a00f1e1b9f17dcc00e5a75bc03c76022553da63",
          "message": "Commented 12 gcc build",
          "timestamp": "2023-12-09T04:07:37+03:00",
          "tree_id": "2348f9686cb6bdf1d1325a0eaab297a2d9a173d8",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/2a00f1e1b9f17dcc00e5a75bc03c76022553da63"
        },
        "date": 1702085565620,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1663.3429030558243,
            "unit": "ns/iter",
            "extra": "iterations: 379600\ncpu: 1663.2484193888306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 20773.757714026473,
            "unit": "ns/iter",
            "extra": "iterations: 39668\ncpu: 20773.018553998183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 43155.59064450267,
            "unit": "ns/iter",
            "extra": "iterations: 19069\ncpu: 43152.97079028791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 53721.676200001406,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53718.01999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 71695.81046388936,
            "unit": "ns/iter",
            "extra": "iterations: 12309\ncpu: 71692.4283044927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 89279.73507079716,
            "unit": "ns/iter",
            "extra": "iterations: 9746\ncpu: 89278.09357685207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 105325.45465792566,
            "unit": "ns/iter",
            "extra": "iterations: 8083\ncpu: 105324.26079425955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 121068.42465947753,
            "unit": "ns/iter",
            "extra": "iterations: 7048\ncpu: 121068.005107832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 140371.9788721232,
            "unit": "ns/iter",
            "extra": "iterations: 6295\ncpu: 140370.75456711667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1424.0870185972162,
            "unit": "ns/iter",
            "extra": "iterations: 490987\ncpu: 1424.0819003354472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1161.9915412924715,
            "unit": "ns/iter",
            "extra": "iterations: 601865\ncpu: 1161.9733661203113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1197.1231255995517,
            "unit": "ns/iter",
            "extra": "iterations: 601459\ncpu: 1197.106535940104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1156.5216830469835,
            "unit": "ns/iter",
            "extra": "iterations: 604689\ncpu: 1156.5279011194204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2231.682784702931,
            "unit": "ns/iter",
            "extra": "iterations: 314389\ncpu: 2231.654415389854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7174.63903808151,
            "unit": "ns/iter",
            "extra": "iterations: 115436\ncpu: 7174.37367892166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 40717.181528347144,
            "unit": "ns/iter",
            "extra": "iterations: 20074\ncpu: 40715.69692139082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 32152.298925699215,
            "unit": "ns/iter",
            "extra": "iterations: 26622\ncpu: 32150.15776425519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 31295.058477919167,
            "unit": "ns/iter",
            "extra": "iterations: 25360\ncpu: 31294.065457413246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30306.291872556154,
            "unit": "ns/iter",
            "extra": "iterations: 27118\ncpu: 30305.914890478605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 81983.61453984254,
            "unit": "ns/iter",
            "extra": "iterations: 11018\ncpu: 81980.95843165737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 647223.2410000061,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 647210.9000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 531067.4629999994,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531062.8999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 531108.4780000214,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531106.3000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 537712.1919999581,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 537707.9999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 373949.63142124534,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 373943.62157534284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 532808.8109999953,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 532811.9999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 846.3123879091229,
            "unit": "ns/iter",
            "extra": "iterations: 825781\ncpu: 846.2852741828682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13491.36215098972,
            "unit": "ns/iter",
            "extra": "iterations: 60958\ncpu: 13491.169329702421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 29150.864225647663,
            "unit": "ns/iter",
            "extra": "iterations: 28540\ncpu: 29150.690259285206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 44172.25764191941,
            "unit": "ns/iter",
            "extra": "iterations: 19007\ncpu: 44172.1734097964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 58593.52841942956,
            "unit": "ns/iter",
            "extra": "iterations: 14286\ncpu: 58592.52414951716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 61369.25180000503,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61369.559999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 72832.38207903261,
            "unit": "ns/iter",
            "extra": "iterations: 11919\ncpu: 72831.46237100424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 85032.65860346277,
            "unit": "ns/iter",
            "extra": "iterations: 10211\ncpu: 85032.4062285771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 96784.2929000682,
            "unit": "ns/iter",
            "extra": "iterations: 8986\ncpu: 96782.89561540181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 693.2192761026337,
            "unit": "ns/iter",
            "extra": "iterations: 1006220\ncpu: 693.2112261731995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 561.3225726168122,
            "unit": "ns/iter",
            "extra": "iterations: 1249607\ncpu: 561.3183985044898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 560.1850264653458,
            "unit": "ns/iter",
            "extra": "iterations: 1247481\ncpu: 560.1670085556415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 561.9697728263677,
            "unit": "ns/iter",
            "extra": "iterations: 1245171\ncpu: 561.9681152227303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1120.6048716466748,
            "unit": "ns/iter",
            "extra": "iterations: 626318\ncpu: 1120.5890617865043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5122.416635348588,
            "unit": "ns/iter",
            "extra": "iterations: 156991\ncpu: 5122.405743004354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24133.690861618114,
            "unit": "ns/iter",
            "extra": "iterations: 34470\ncpu: 24133.086742094405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 19721.499592445056,
            "unit": "ns/iter",
            "extra": "iterations: 42939\ncpu: 19721.383823563723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 19346.57691236496,
            "unit": "ns/iter",
            "extra": "iterations: 43088\ncpu: 19346.23096917932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 19201.45149053976,
            "unit": "ns/iter",
            "extra": "iterations: 42971\ncpu: 19201.433524935546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 56925.06611129563,
            "unit": "ns/iter",
            "extra": "iterations: 15005\ncpu: 56923.252249250385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 538816.096555948,
            "unit": "ns/iter",
            "extra": "iterations: 1626\ncpu: 538781.3653136527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 448331.6046394334,
            "unit": "ns/iter",
            "extra": "iterations: 1983\ncpu: 448312.8088754394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 448278.0718685743,
            "unit": "ns/iter",
            "extra": "iterations: 1948\ncpu: 448257.95687885117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 446259.1935318428,
            "unit": "ns/iter",
            "extra": "iterations: 1948\ncpu: 446236.344969197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 267097.31885818805,
            "unit": "ns/iter",
            "extra": "iterations: 3293\ncpu: 267087.1849377484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 444030.04664274136,
            "unit": "ns/iter",
            "extra": "iterations: 1951\ncpu: 444022.1937467982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 716.0796746586574,
            "unit": "ns/iter",
            "extra": "iterations: 977312\ncpu: 716.0848326839364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6468.839774531275,
            "unit": "ns/iter",
            "extra": "iterations: 124718\ncpu: 6468.596353373198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12603.86048267754,
            "unit": "ns/iter",
            "extra": "iterations: 66214\ncpu: 12603.48415742898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18794.990805052978,
            "unit": "ns/iter",
            "extra": "iterations: 45351\ncpu: 18794.56020815412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24809.940806489092,
            "unit": "ns/iter",
            "extra": "iterations: 34024\ncpu: 24808.82612273694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 30995.798511313766,
            "unit": "ns/iter",
            "extra": "iterations: 27138\ncpu: 30994.41005232538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 37161.33695892506,
            "unit": "ns/iter",
            "extra": "iterations: 22617\ncpu: 37161.533359862005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 42860.47463991953,
            "unit": "ns/iter",
            "extra": "iterations: 19440\ncpu: 42859.08950617283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 49049.83593291705,
            "unit": "ns/iter",
            "extra": "iterations: 17054\ncpu: 49047.3730503109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 673.9562773159142,
            "unit": "ns/iter",
            "extra": "iterations: 1040604\ncpu: 673.9299483761349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 535.4009522525979,
            "unit": "ns/iter",
            "extra": "iterations: 1305956\ncpu: 535.4020349843364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 518.679467879863,
            "unit": "ns/iter",
            "extra": "iterations: 1349169\ncpu: 518.6802394659261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 523.9618009989019,
            "unit": "ns/iter",
            "extra": "iterations: 1331239\ncpu: 523.9431837558857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 997.2512511981639,
            "unit": "ns/iter",
            "extra": "iterations: 696932\ncpu: 997.2180930133771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2915.3358238856167,
            "unit": "ns/iter",
            "extra": "iterations: 277047\ncpu: 2915.237125830661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14090.128274241997,
            "unit": "ns/iter",
            "extra": "iterations: 57876\ncpu: 14089.728039256397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11550.39862552595,
            "unit": "ns/iter",
            "extra": "iterations: 71300\ncpu: 11549.82748948095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11347.385532865424,
            "unit": "ns/iter",
            "extra": "iterations: 72523\ncpu: 11347.069205631144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10633.742451316844,
            "unit": "ns/iter",
            "extra": "iterations: 76669\ncpu: 10633.244205611201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40379.25184541732,
            "unit": "ns/iter",
            "extra": "iterations: 20727\ncpu: 40378.33743426443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 279498.0251775303,
            "unit": "ns/iter",
            "extra": "iterations: 3098\ncpu: 279490.7682375718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 214695.0025271702,
            "unit": "ns/iter",
            "extra": "iterations: 3957\ncpu: 214690.27040687247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 211034.74175544403,
            "unit": "ns/iter",
            "extra": "iterations: 3942\ncpu: 211024.93658041663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 213127.46378269698,
            "unit": "ns/iter",
            "extra": "iterations: 3976\ncpu: 213120.74949698115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 113043.84077745458,
            "unit": "ns/iter",
            "extra": "iterations: 7769\ncpu: 113038.56352168818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 217794.9047269154,
            "unit": "ns/iter",
            "extra": "iterations: 4083\ncpu: 217784.4722018148 ns\nthreads: 1"
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
          "id": "08a1871a28562639bf0f45a39f33526d4fa6ea0d",
          "message": "rm typeid -> tuple_name set",
          "timestamp": "2023-12-11T00:33:38+03:00",
          "tree_id": "fbafa482ecf5561fe3f71808e32dcdc5e65d7018",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/08a1871a28562639bf0f45a39f33526d4fa6ea0d"
        },
        "date": 1702244209257,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1846.1051295734956,
            "unit": "ns/iter",
            "extra": "iterations: 376659\ncpu: 1846.081468914854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 27480.901178815162,
            "unit": "ns/iter",
            "extra": "iterations: 30115\ncpu: 27480.175992030552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 55140.519620211926,
            "unit": "ns/iter",
            "extra": "iterations: 15061\ncpu: 55139.4462519089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 71842.09751070218,
            "unit": "ns/iter",
            "extra": "iterations: 12614\ncpu: 71839.50372601871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 100052.19915209517,
            "unit": "ns/iter",
            "extra": "iterations: 9435\ncpu: 100045.49019607846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 122569.37175998921,
            "unit": "ns/iter",
            "extra": "iterations: 6983\ncpu: 122565.11527996568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 145754.45479219416,
            "unit": "ns/iter",
            "extra": "iterations: 5895\ncpu: 145745.93723494487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 166758.0561732026,
            "unit": "ns/iter",
            "extra": "iterations: 5127\ncpu: 166749.6781743709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 190450.73846552518,
            "unit": "ns/iter",
            "extra": "iterations: 3858\ncpu: 190447.58942457227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1597.3747398115345,
            "unit": "ns/iter",
            "extra": "iterations: 438144\ncpu: 1597.2995179666975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1317.5259390456383,
            "unit": "ns/iter",
            "extra": "iterations: 530725\ncpu: 1317.407508596732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1290.4512176289686,
            "unit": "ns/iter",
            "extra": "iterations: 537479\ncpu: 1290.3759960854286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1321.5722282977258,
            "unit": "ns/iter",
            "extra": "iterations: 530360\ncpu: 1321.494268044347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2442.666983173922,
            "unit": "ns/iter",
            "extra": "iterations: 286460\ncpu: 2442.5818613418983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 8156.486915193836,
            "unit": "ns/iter",
            "extra": "iterations: 100995\ncpu: 8156.021585226988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 48810.03823408879,
            "unit": "ns/iter",
            "extra": "iterations: 17079\ncpu: 48808.09180865389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 37441.41018323839,
            "unit": "ns/iter",
            "extra": "iterations: 19974\ncpu: 37439.286071893446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 37017.546356728155,
            "unit": "ns/iter",
            "extra": "iterations: 22370\ncpu: 37015.927581582495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 37930.13984217329,
            "unit": "ns/iter",
            "extra": "iterations: 21796\ncpu: 37927.697742705066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 103505.49299363032,
            "unit": "ns/iter",
            "extra": "iterations: 8635\ncpu: 103499.59467284277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 815259.3848857596,
            "unit": "ns/iter",
            "extra": "iterations: 1138\ncpu: 815202.372583478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 701358.3265895919,
            "unit": "ns/iter",
            "extra": "iterations: 1384\ncpu: 701314.7398843925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 671710.1239130246,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 671667.5362318838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 679120.9227373162,
            "unit": "ns/iter",
            "extra": "iterations: 1359\ncpu: 679083.8116261957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 481322.97565024573,
            "unit": "ns/iter",
            "extra": "iterations: 1807\ncpu: 481298.4504703913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 994.6855052833247,
            "unit": "ns/iter",
            "extra": "iterations: 705802\ncpu: 994.6803777830013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19963.79361492452,
            "unit": "ns/iter",
            "extra": "iterations: 41597\ncpu: 19963.3963987788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 42327.68746534967,
            "unit": "ns/iter",
            "extra": "iterations: 19841\ncpu: 42324.3183307293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 53172.70500000007,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53171.59999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 71033.21043180062,
            "unit": "ns/iter",
            "extra": "iterations: 12251\ncpu: 71031.93208717664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 88900.64931227714,
            "unit": "ns/iter",
            "extra": "iterations: 9815\ncpu: 88900.11207335719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 105857.80195241091,
            "unit": "ns/iter",
            "extra": "iterations: 8195\ncpu: 105856.04636973764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 123206.1994635773,
            "unit": "ns/iter",
            "extra": "iterations: 7084\ncpu: 123205.2795031056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 140382.25181130422,
            "unit": "ns/iter",
            "extra": "iterations: 6211\ncpu: 140378.9888906784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 852.7835270630613,
            "unit": "ns/iter",
            "extra": "iterations: 823484\ncpu: 852.7747958673149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 694.8463400364911,
            "unit": "ns/iter",
            "extra": "iterations: 1008480\ncpu: 694.8491789623982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 698.6016442705412,
            "unit": "ns/iter",
            "extra": "iterations: 1000322\ncpu: 698.5926531656859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 705.1000913559267,
            "unit": "ns/iter",
            "extra": "iterations: 989536\ncpu: 705.1029977686472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1343.30024471143,
            "unit": "ns/iter",
            "extra": "iterations: 519796\ncpu: 1343.2821722367974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6660.301054374933,
            "unit": "ns/iter",
            "extra": "iterations: 121968\ncpu: 6660.03623901355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 35427.12277372914,
            "unit": "ns/iter",
            "extra": "iterations: 23189\ncpu: 35426.262452024785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 28276.797788093485,
            "unit": "ns/iter",
            "extra": "iterations: 29296\ncpu: 28276.723784817015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 27915.805623842763,
            "unit": "ns/iter",
            "extra": "iterations: 29695\ncpu: 27915.36959084015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 28619.098545202178,
            "unit": "ns/iter",
            "extra": "iterations: 28870\ncpu: 28618.8985105647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 67298.13489348411,
            "unit": "ns/iter",
            "extra": "iterations: 12862\ncpu: 67296.57907012876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 595631.9590000021,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595621.0000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 509232.35400000523,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509228.6000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 630979.6057827986,
            "unit": "ns/iter",
            "extra": "iterations: 1418\ncpu: 630940.4090268005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 519834.0630000189,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519830.20000000123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 367345.25910423475,
            "unit": "ns/iter",
            "extra": "iterations: 2389\ncpu: 367334.1984093753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 507690.6619999875,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507667.2000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 706.3692899495118,
            "unit": "ns/iter",
            "extra": "iterations: 989155\ncpu: 706.3356096870551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6404.737792804436,
            "unit": "ns/iter",
            "extra": "iterations: 127773\ncpu: 6404.367902452051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12249.486457300745,
            "unit": "ns/iter",
            "extra": "iterations: 67601\ncpu: 12249.039215396138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18165.363630435906,
            "unit": "ns/iter",
            "extra": "iterations: 46011\ncpu: 18164.617156766883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24242.39541340108,
            "unit": "ns/iter",
            "extra": "iterations: 34579\ncpu: 24241.221550652182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 30034.74633002724,
            "unit": "ns/iter",
            "extra": "iterations: 27725\ncpu: 30032.61316501354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 36515.673797248106,
            "unit": "ns/iter",
            "extra": "iterations: 23467\ncpu: 36514.32223974096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 42921.88620529486,
            "unit": "ns/iter",
            "extra": "iterations: 19377\ncpu: 42919.755380089984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 48309.5919318638,
            "unit": "ns/iter",
            "extra": "iterations: 17377\ncpu: 48307.918512976714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 710.959327171171,
            "unit": "ns/iter",
            "extra": "iterations: 985154\ncpu: 710.9438727346218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 545.4663414205185,
            "unit": "ns/iter",
            "extra": "iterations: 1273702\ncpu: 545.4429686064711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 537.6843959500741,
            "unit": "ns/iter",
            "extra": "iterations: 1300861\ncpu: 537.6592887326136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 538.3287449864546,
            "unit": "ns/iter",
            "extra": "iterations: 1304464\ncpu: 538.3155840253137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1020.5715858692632,
            "unit": "ns/iter",
            "extra": "iterations: 683871\ncpu: 1020.539399974557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 3083.9000310343654,
            "unit": "ns/iter",
            "extra": "iterations: 261001\ncpu: 3083.780521913704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14313.03446467906,
            "unit": "ns/iter",
            "extra": "iterations: 57218\ncpu: 14312.892795973237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11397.17355062425,
            "unit": "ns/iter",
            "extra": "iterations: 72100\ncpu: 11397.063800277443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11876.36934728053,
            "unit": "ns/iter",
            "extra": "iterations: 68927\ncpu: 11876.318423839803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11620.874746869533,
            "unit": "ns/iter",
            "extra": "iterations: 70122\ncpu: 11620.317446735624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40081.41895104474,
            "unit": "ns/iter",
            "extra": "iterations: 20611\ncpu: 40080.88884576176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 275758.611111112,
            "unit": "ns/iter",
            "extra": "iterations: 3132\ncpu: 275752.33077905566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 219585.00101163823,
            "unit": "ns/iter",
            "extra": "iterations: 3954\ncpu: 219582.44815376823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 218096.1878591008,
            "unit": "ns/iter",
            "extra": "iterations: 4003\ncpu: 218094.15438421268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 218248.29828058538,
            "unit": "ns/iter",
            "extra": "iterations: 4013\ncpu: 218244.45551956215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 113984.11603430366,
            "unit": "ns/iter",
            "extra": "iterations: 7696\ncpu: 113983.51091476221 ns\nthreads: 1"
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
          "id": "ee321988d93ff16926e7194dec34c10291baefc2",
          "message": "add delta",
          "timestamp": "2023-12-11T11:53:54+03:00",
          "tree_id": "290f299ec6b77fff1939bc5ef8e8a991dcfff337",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/ee321988d93ff16926e7194dec34c10291baefc2"
        },
        "date": 1702285093630,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1862.47595168816,
            "unit": "ns/iter",
            "extra": "iterations: 376305\ncpu: 1862.2317003494509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 27566.095394295808,
            "unit": "ns/iter",
            "extra": "iterations: 29876\ncpu: 27564.188646405142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 56109.674135246874,
            "unit": "ns/iter",
            "extra": "iterations: 14773\ncpu: 56108.102619643956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 69425.32915135073,
            "unit": "ns/iter",
            "extra": "iterations: 12514\ncpu: 69419.19450215757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 99689.57381556772,
            "unit": "ns/iter",
            "extra": "iterations: 9456\ncpu: 99683.16412859563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 124230.51738006799,
            "unit": "ns/iter",
            "extra": "iterations: 6962\ncpu: 124222.83826486644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 150590.20017094797,
            "unit": "ns/iter",
            "extra": "iterations: 5850\ncpu: 150582.37606837612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 171264.5715696052,
            "unit": "ns/iter",
            "extra": "iterations: 5065\ncpu: 171253.85982231004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 190787.16104868462,
            "unit": "ns/iter",
            "extra": "iterations: 4539\ncpu: 190781.47168979936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1681.7126151259617,
            "unit": "ns/iter",
            "extra": "iterations: 418672\ncpu: 1681.6161577559535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1331.5361681655352,
            "unit": "ns/iter",
            "extra": "iterations: 523817\ncpu: 1331.4579328276864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1302.659847457339,
            "unit": "ns/iter",
            "extra": "iterations: 536768\ncpu: 1302.5310748777863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1311.1864938157803,
            "unit": "ns/iter",
            "extra": "iterations: 529165\ncpu: 1311.163058781287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2395.9622006945274,
            "unit": "ns/iter",
            "extra": "iterations: 293471\ncpu: 2395.8796610227246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 8668.172958291678,
            "unit": "ns/iter",
            "extra": "iterations: 94994\ncpu: 8667.668484325328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 50785.400800491254,
            "unit": "ns/iter",
            "extra": "iterations: 16240\ncpu: 50781.18226600991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 42142.40692938047,
            "unit": "ns/iter",
            "extra": "iterations: 20377\ncpu: 42136.958335378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 37288.89391069221,
            "unit": "ns/iter",
            "extra": "iterations: 22170\ncpu: 37286.959855660876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 37484.91811301949,
            "unit": "ns/iter",
            "extra": "iterations: 22067\ncpu: 37483.98966782982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 103506.5651515189,
            "unit": "ns/iter",
            "extra": "iterations: 8580\ncpu: 103494.38228438211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 808556.6447709968,
            "unit": "ns/iter",
            "extra": "iterations: 1157\ncpu: 808527.3984442528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 702237.6269956735,
            "unit": "ns/iter",
            "extra": "iterations: 1378\ncpu: 702178.8098693762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 682871.4427645921,
            "unit": "ns/iter",
            "extra": "iterations: 1389\ncpu: 682851.6918646516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 673481.1860465286,
            "unit": "ns/iter",
            "extra": "iterations: 1376\ncpu: 673386.8459302335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 479019.90754924895,
            "unit": "ns/iter",
            "extra": "iterations: 1828\ncpu: 478983.6980306347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1004.4233180951708,
            "unit": "ns/iter",
            "extra": "iterations: 703934\ncpu: 1004.3569425542761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20278.455797628947,
            "unit": "ns/iter",
            "extra": "iterations: 41310\ncpu: 20278.01016702976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 42883.60728534301,
            "unit": "ns/iter",
            "extra": "iterations: 17295\ncpu: 42884.02428447529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 53624.0204999956,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53622.41999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 71222.07523486014,
            "unit": "ns/iter",
            "extra": "iterations: 12348\ncpu: 71221.15322319396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 88209.43709415956,
            "unit": "ns/iter",
            "extra": "iterations: 9856\ncpu: 88208.24878246772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 105435.71578947504,
            "unit": "ns/iter",
            "extra": "iterations: 8170\ncpu: 105424.00244798014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 123187.8215936177,
            "unit": "ns/iter",
            "extra": "iterations: 7141\ncpu: 123188.37697801483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 139561.84111846972,
            "unit": "ns/iter",
            "extra": "iterations: 6187\ncpu: 139554.95393567087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 828.7494165886958,
            "unit": "ns/iter",
            "extra": "iterations: 818462\ncpu: 828.702859754028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 673.8045817016862,
            "unit": "ns/iter",
            "extra": "iterations: 1038828\ncpu: 673.7742917980612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 661.0652742204052,
            "unit": "ns/iter",
            "extra": "iterations: 1060005\ncpu: 661.0662213857466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 681.2956969967407,
            "unit": "ns/iter",
            "extra": "iterations: 1028979\ncpu: 681.3036028917953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1349.9574941701255,
            "unit": "ns/iter",
            "extra": "iterations: 518870\ncpu: 1349.9232948522797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6623.8299510591205,
            "unit": "ns/iter",
            "extra": "iterations: 125458\ncpu: 6623.909196703295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 35829.108479231436,
            "unit": "ns/iter",
            "extra": "iterations: 23304\ncpu: 35828.11963611396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 28416.819302340362,
            "unit": "ns/iter",
            "extra": "iterations: 29126\ncpu: 28417.18739270766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 26683.186598402262,
            "unit": "ns/iter",
            "extra": "iterations: 31056\ncpu: 26682.31903657909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 27936.3173067213,
            "unit": "ns/iter",
            "extra": "iterations: 29659\ncpu: 27936.046394012064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 67258.28555202267,
            "unit": "ns/iter",
            "extra": "iterations: 13206\ncpu: 67255.78524912952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 598325.5659999714,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598274.0999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 510075.6829999682,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510068.40000000154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 629782.7319149179,
            "unit": "ns/iter",
            "extra": "iterations: 1410\ncpu: 629751.2765957414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 511146.28199997015,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 511116.20000000356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 364115.78838173836,
            "unit": "ns/iter",
            "extra": "iterations: 2410\ncpu: 364106.55601659877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 509297.70900000905,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509304.90000000363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 724.0668759771676,
            "unit": "ns/iter",
            "extra": "iterations: 941504\ncpu: 724.036541533542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6531.612673743506,
            "unit": "ns/iter",
            "extra": "iterations: 124825\ncpu: 6531.291007410324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12600.812240965066,
            "unit": "ns/iter",
            "extra": "iterations: 65387\ncpu: 12600.348693165266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 19078.304519329093,
            "unit": "ns/iter",
            "extra": "iterations: 44365\ncpu: 19077.182463653826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24890.673425444016,
            "unit": "ns/iter",
            "extra": "iterations: 33438\ncpu: 24890.03827980148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 30657.38668586484,
            "unit": "ns/iter",
            "extra": "iterations: 27084\ncpu: 30655.217102348273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 37514.26552348947,
            "unit": "ns/iter",
            "extra": "iterations: 22627\ncpu: 37512.409952711234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 42411.170987115285,
            "unit": "ns/iter",
            "extra": "iterations: 19481\ncpu: 42409.937888198496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 48712.483217591594,
            "unit": "ns/iter",
            "extra": "iterations: 17280\ncpu: 48709.363425926254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 686.0124674401998,
            "unit": "ns/iter",
            "extra": "iterations: 1024268\ncpu: 686.0041512572898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 530.9497443174464,
            "unit": "ns/iter",
            "extra": "iterations: 1319214\ncpu: 530.9118156720632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 521.9966702065589,
            "unit": "ns/iter",
            "extra": "iterations: 1334317\ncpu: 521.9641959144622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 522.7308782114834,
            "unit": "ns/iter",
            "extra": "iterations: 1269102\ncpu: 522.7073946774931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 993.1734496495284,
            "unit": "ns/iter",
            "extra": "iterations: 705663\ncpu: 993.1506965789617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2922.6857913956646,
            "unit": "ns/iter",
            "extra": "iterations: 274932\ncpu: 2922.692156606007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14561.614074219384,
            "unit": "ns/iter",
            "extra": "iterations: 45729\ncpu: 14561.155940431825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11704.613078081162,
            "unit": "ns/iter",
            "extra": "iterations: 69735\ncpu: 11703.9822183982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11669.522254768912,
            "unit": "ns/iter",
            "extra": "iterations: 69985\ncpu: 11668.627563049193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11539.655463372323,
            "unit": "ns/iter",
            "extra": "iterations: 70753\ncpu: 11538.925557926932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40493.828337075065,
            "unit": "ns/iter",
            "extra": "iterations: 20482\ncpu: 40490.645444781076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 277220.33682830224,
            "unit": "ns/iter",
            "extra": "iterations: 3052\ncpu: 277211.4678899077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 220187.42925720353,
            "unit": "ns/iter",
            "extra": "iterations: 3958\ncpu: 220179.05507832448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 219462.80874591725,
            "unit": "ns/iter",
            "extra": "iterations: 3979\ncpu: 219454.9384267404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 218994.9636773522,
            "unit": "ns/iter",
            "extra": "iterations: 3992\ncpu: 218978.0561122229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 113419.54490008162,
            "unit": "ns/iter",
            "extra": "iterations: 7706\ncpu: 113413.82039968844 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}