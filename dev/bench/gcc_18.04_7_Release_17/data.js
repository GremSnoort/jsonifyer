window.BENCHMARK_DATA = {
  "lastUpdate": 1702335634422,
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
      },
      {
        "commit": {
          "author": {
            "email": "a.patenkova@3opinion.ai",
            "name": "a.patenkova"
          },
          "committer": {
            "email": "a.patenkova@3opinion.ai",
            "name": "a.patenkova"
          },
          "distinct": true,
          "id": "85d3fc64843f115b47e5a722ba83cd4466299644",
          "message": "Simple Inheritance V1",
          "timestamp": "2023-12-11T18:41:15+03:00",
          "tree_id": "8007add2e1aa04b15f12fdb3fdfca620b2eec68e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/85d3fc64843f115b47e5a722ba83cd4466299644"
        },
        "date": 1702309491315,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1844.5852768687705,
            "unit": "ns/iter",
            "extra": "iterations: 374961\ncpu: 1844.5673016660398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 28224.688294179294,
            "unit": "ns/iter",
            "extra": "iterations: 29669\ncpu: 28223.957666250968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 57146.779984930225,
            "unit": "ns/iter",
            "extra": "iterations: 14599\ncpu: 57144.96883348172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 71087.48094966252,
            "unit": "ns/iter",
            "extra": "iterations: 12257\ncpu: 71085.1595006935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 102581.07331092122,
            "unit": "ns/iter",
            "extra": "iterations: 9221\ncpu: 102578.05010302563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 126546.43541022376,
            "unit": "ns/iter",
            "extra": "iterations: 6789\ncpu: 126540.30048608046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 151023.955946369,
            "unit": "ns/iter",
            "extra": "iterations: 5743\ncpu: 151016.87271460914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 174569.56037964058,
            "unit": "ns/iter",
            "extra": "iterations: 4952\ncpu: 174561.47011308552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 195289.49774470442,
            "unit": "ns/iter",
            "extra": "iterations: 4434\ncpu: 195278.12359043746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1632.481264298775,
            "unit": "ns/iter",
            "extra": "iterations: 429234\ncpu: 1632.3415666046938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1353.4901385530784,
            "unit": "ns/iter",
            "extra": "iterations: 517419\ncpu: 1353.407199967529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1290.2526322556905,
            "unit": "ns/iter",
            "extra": "iterations: 544400\ncpu: 1290.1897501836893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1290.7399584980217,
            "unit": "ns/iter",
            "extra": "iterations: 541179\ncpu: 1290.6716631650556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2416.089431463424,
            "unit": "ns/iter",
            "extra": "iterations: 285716\ncpu: 2416.06315362108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 9842.93604105529,
            "unit": "ns/iter",
            "extra": "iterations: 84179\ncpu: 9842.682854393624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 53155.67777848743,
            "unit": "ns/iter",
            "extra": "iterations: 15629\ncpu: 53153.94459018491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 45645.26650024993,
            "unit": "ns/iter",
            "extra": "iterations: 20030\ncpu: 45644.93260109835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 40988.248678555494,
            "unit": "ns/iter",
            "extra": "iterations: 20243\ncpu: 40986.029738675024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 38795.067056218395,
            "unit": "ns/iter",
            "extra": "iterations: 21221\ncpu: 38795.01908486881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 104569.08864826459,
            "unit": "ns/iter",
            "extra": "iterations: 8404\ncpu: 104564.32651118486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 835137.4792626676,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 835105.8986175094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 691071.1217008875,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 691038.6363636364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 690028.9494875557,
            "unit": "ns/iter",
            "extra": "iterations: 1366\ncpu: 690011.6398243061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 681798.9813849493,
            "unit": "ns/iter",
            "extra": "iterations: 1343\ncpu: 681765.7483246459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 484757.6839464845,
            "unit": "ns/iter",
            "extra": "iterations: 1794\ncpu: 484741.861761427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1046.0523010779375,
            "unit": "ns/iter",
            "extra": "iterations: 672663\ncpu: 1046.017693852646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20720.997795314834,
            "unit": "ns/iter",
            "extra": "iterations: 39915\ncpu: 20720.809219591665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 44567.05657971551,
            "unit": "ns/iter",
            "extra": "iterations: 18823\ncpu: 44564.591191627274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 55748.751099997666,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55748.7799999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 74005.46896493307,
            "unit": "ns/iter",
            "extra": "iterations: 11777\ncpu: 74001.7152076081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 92307.29431014544,
            "unit": "ns/iter",
            "extra": "iterations: 9473\ncpu: 92303.67359864894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 110095.4877432376,
            "unit": "ns/iter",
            "extra": "iterations: 7914\ncpu: 110090.86429112915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 128327.8457218851,
            "unit": "ns/iter",
            "extra": "iterations: 6767\ncpu: 128322.34372690994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 145766.67714672055,
            "unit": "ns/iter",
            "extra": "iterations: 5916\ncpu: 145758.92494929102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 870.6283848994625,
            "unit": "ns/iter",
            "extra": "iterations: 805083\ncpu: 870.5699909201866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 714.7063722402661,
            "unit": "ns/iter",
            "extra": "iterations: 979577\ncpu: 714.6761306155577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 699.8861072141641,
            "unit": "ns/iter",
            "extra": "iterations: 994365\ncpu: 699.8703695323146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 709.6049117697941,
            "unit": "ns/iter",
            "extra": "iterations: 987587\ncpu: 709.5981417333396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1343.4033361915024,
            "unit": "ns/iter",
            "extra": "iterations: 508484\ncpu: 1343.3223070932447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 7025.433272752152,
            "unit": "ns/iter",
            "extra": "iterations: 117748\ncpu: 7025.130787784119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 37321.56316236555,
            "unit": "ns/iter",
            "extra": "iterations: 22363\ncpu: 37319.65299825616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 29332.733699333443,
            "unit": "ns/iter",
            "extra": "iterations: 28051\ncpu: 29332.715411215253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 28687.848991655355,
            "unit": "ns/iter",
            "extra": "iterations: 28760\ncpu: 28686.675938803837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 29849.971792442902,
            "unit": "ns/iter",
            "extra": "iterations: 28503\ncpu: 29849.65091393876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 68766.73041510824,
            "unit": "ns/iter",
            "extra": "iterations: 12816\ncpu: 68764.00593008724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 613749.6849999877,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 613750.2999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 515266.62599999894,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515238.1000000048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 633557.5561877532,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 633528.4495021326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 513134.35500000534,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513099.09999999806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 369073.73770492006,
            "unit": "ns/iter",
            "extra": "iterations: 2379\ncpu: 369057.20891130966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 507496.8330000047,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507497.199999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 703.0779268706065,
            "unit": "ns/iter",
            "extra": "iterations: 999899\ncpu: 703.0267056972723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6618.129833456169,
            "unit": "ns/iter",
            "extra": "iterations: 124652\ncpu: 6617.921894554446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12382.349454875919,
            "unit": "ns/iter",
            "extra": "iterations: 66040\ncpu: 12381.751968503973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18549.252686893196,
            "unit": "ns/iter",
            "extra": "iterations: 46243\ncpu: 18548.474363687354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24678.262963184377,
            "unit": "ns/iter",
            "extra": "iterations: 33518\ncpu: 24676.952682140847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 30473.590919117047,
            "unit": "ns/iter",
            "extra": "iterations: 27200\ncpu: 30472.33823529423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 37437.4830437646,
            "unit": "ns/iter",
            "extra": "iterations: 22735\ncpu: 37435.87860127559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 43389.270073750915,
            "unit": "ns/iter",
            "extra": "iterations: 19254\ncpu: 43387.40002077481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 48646.25214219517,
            "unit": "ns/iter",
            "extra": "iterations: 17272\ncpu: 48644.31449745256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 691.6926178101481,
            "unit": "ns/iter",
            "extra": "iterations: 1016487\ncpu: 691.6662977490136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 545.7011695582945,
            "unit": "ns/iter",
            "extra": "iterations: 1283989\ncpu: 545.6946282250059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 539.3503610232126,
            "unit": "ns/iter",
            "extra": "iterations: 1296731\ncpu: 539.3251183167528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 541.2392192384169,
            "unit": "ns/iter",
            "extra": "iterations: 1294992\ncpu: 541.2124553665161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 993.1877116310986,
            "unit": "ns/iter",
            "extra": "iterations: 701102\ncpu: 993.1496415642883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 3081.0829396364675,
            "unit": "ns/iter",
            "extra": "iterations: 262046\ncpu: 3080.976622425055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 15062.167273120214,
            "unit": "ns/iter",
            "extra": "iterations: 55514\ncpu: 15061.896098281652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 12041.343457567616,
            "unit": "ns/iter",
            "extra": "iterations: 68285\ncpu: 12041.112982353205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11980.34195435746,
            "unit": "ns/iter",
            "extra": "iterations: 68708\ncpu: 11980.008150433758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11556.736281667201,
            "unit": "ns/iter",
            "extra": "iterations: 71091\ncpu: 11556.724479892084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40157.148954917786,
            "unit": "ns/iter",
            "extra": "iterations: 20429\ncpu: 40156.23378530537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 276183.60083627986,
            "unit": "ns/iter",
            "extra": "iterations: 3109\ncpu: 276167.5136699887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 220973.96860759327,
            "unit": "ns/iter",
            "extra": "iterations: 3950\ncpu: 220963.89873417703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 218925.28049085836,
            "unit": "ns/iter",
            "extra": "iterations: 3993\ncpu: 218916.30353117912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 218148.83938861956,
            "unit": "ns/iter",
            "extra": "iterations: 3991\ncpu: 218136.0060135302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 114353.42055222557,
            "unit": "ns/iter",
            "extra": "iterations: 7678\ncpu: 114347.66866371501 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "a.patenkova@3opinion.ai",
            "name": "a.patenkova"
          },
          "committer": {
            "email": "a.patenkova@3opinion.ai",
            "name": "a.patenkova"
          },
          "distinct": true,
          "id": "825d4b8b89216ec0a9dcc887895418d7e677e406",
          "message": "set(CMAKE_VERBOSE_MAKEFILE OFF)",
          "timestamp": "2023-12-11T18:58:08+03:00",
          "tree_id": "455cf7a424831f799b54c049bdff16a090b6030a",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/825d4b8b89216ec0a9dcc887895418d7e677e406"
        },
        "date": 1702310496986,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1821.3937251367115,
            "unit": "ns/iter",
            "extra": "iterations: 386112\ncpu: 1821.3691882148185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 27297.393742112632,
            "unit": "ns/iter",
            "extra": "iterations: 30106\ncpu: 27296.53889590115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 57457.279439186816,
            "unit": "ns/iter",
            "extra": "iterations: 14479\ncpu: 57456.910007597224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 73367.18196033253,
            "unit": "ns/iter",
            "extra": "iterations: 12151\ncpu: 73363.84659698789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 101870.04633830412,
            "unit": "ns/iter",
            "extra": "iterations: 9258\ncpu: 101866.16979909265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 125794.39997087844,
            "unit": "ns/iter",
            "extra": "iterations: 6868\ncpu: 125791.99184624352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 149558.6797442088,
            "unit": "ns/iter",
            "extra": "iterations: 5786\ncpu: 149557.518147252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 171407.4458548135,
            "unit": "ns/iter",
            "extra": "iterations: 5042\ncpu: 171398.01666005552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 191687.75547203957,
            "unit": "ns/iter",
            "extra": "iterations: 4523\ncpu: 191682.99801017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1623.4103473963817,
            "unit": "ns/iter",
            "extra": "iterations: 430891\ncpu: 1623.3005562891772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1264.3698966759332,
            "unit": "ns/iter",
            "extra": "iterations: 552630\ncpu: 1264.375983931381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1228.5974977882304,
            "unit": "ns/iter",
            "extra": "iterations: 567418\ncpu: 1228.5613075369472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1226.4014859653378,
            "unit": "ns/iter",
            "extra": "iterations: 559367\ncpu: 1226.371058714583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2352.3210370493957,
            "unit": "ns/iter",
            "extra": "iterations: 298925\ncpu: 2352.2080789495744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 10200.710383934045,
            "unit": "ns/iter",
            "extra": "iterations: 84650\ncpu: 10200.365032486707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 51850.369433962114,
            "unit": "ns/iter",
            "extra": "iterations: 15900\ncpu: 51847.352201257876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 40391.757367724356,
            "unit": "ns/iter",
            "extra": "iterations: 20393\ncpu: 40391.99725395964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 40539.83668096878,
            "unit": "ns/iter",
            "extra": "iterations: 20512\ncpu: 40537.33424336981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 40289.169095939375,
            "unit": "ns/iter",
            "extra": "iterations: 21680\ncpu: 40287.05258302578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 105147.00901217468,
            "unit": "ns/iter",
            "extra": "iterations: 8544\ncpu: 105144.10112359514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 828204.7811388248,
            "unit": "ns/iter",
            "extra": "iterations: 1124\ncpu: 828121.0854092528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 681779.2249817342,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 681747.4799123453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 686025.7597069434,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 685963.956043956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 684903.6634757065,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 684835.198821795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 480756.25574873725,
            "unit": "ns/iter",
            "extra": "iterations: 1783\ncpu: 480712.0583286602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1006.7641169986163,
            "unit": "ns/iter",
            "extra": "iterations: 693136\ncpu: 1006.6927702499943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20419.86012073483,
            "unit": "ns/iter",
            "extra": "iterations: 40585\ncpu: 20417.96476530738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 44095.93107959732,
            "unit": "ns/iter",
            "extra": "iterations: 19109\ncpu: 44093.63650635824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 55472.62389999901,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55465.59999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 73823.48069907443,
            "unit": "ns/iter",
            "extra": "iterations: 11787\ncpu: 73819.86086366353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 89997.48806092734,
            "unit": "ns/iter",
            "extra": "iterations: 9716\ncpu: 89993.6187731577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 108827.3173749954,
            "unit": "ns/iter",
            "extra": "iterations: 8000\ncpu: 108823.07499999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 127020.61347105021,
            "unit": "ns/iter",
            "extra": "iterations: 6874\ncpu: 127015.75501891234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 144477.0417702634,
            "unit": "ns/iter",
            "extra": "iterations: 6033\ncpu: 144473.66152826112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 823.1653345153234,
            "unit": "ns/iter",
            "extra": "iterations: 818976\ncpu: 823.1486636971006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 673.0482039198953,
            "unit": "ns/iter",
            "extra": "iterations: 1040683\ncpu: 672.9848570602252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 674.0937691027522,
            "unit": "ns/iter",
            "extra": "iterations: 1037154\ncpu: 674.060554170353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 679.5275737277277,
            "unit": "ns/iter",
            "extra": "iterations: 1028751\ncpu: 679.4888170218096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1332.338817455264,
            "unit": "ns/iter",
            "extra": "iterations: 525274\ncpu: 1332.2949546332036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6576.045487182351,
            "unit": "ns/iter",
            "extra": "iterations: 126739\ncpu: 6575.551329898441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 36837.11626661934,
            "unit": "ns/iter",
            "extra": "iterations: 22414\ncpu: 36835.86151512459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 29060.777133009677,
            "unit": "ns/iter",
            "extra": "iterations: 28434\ncpu: 29060.505029190404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 28392.7676729472,
            "unit": "ns/iter",
            "extra": "iterations: 29084\ncpu: 28391.541741163477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 29525.728454295793,
            "unit": "ns/iter",
            "extra": "iterations: 27929\ncpu: 29524.673278670827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 69205.76383109749,
            "unit": "ns/iter",
            "extra": "iterations: 12978\ncpu: 69099.85359839756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 610177.6660000269,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 610181.4000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 516117.8209999661,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516046.0000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 500371.20299998607,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500352.8999999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 500791.1449999938,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500767.50000000204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 367974.91419004305,
            "unit": "ns/iter",
            "extra": "iterations: 2389\ncpu: 367927.5847634968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 502202.5730000337,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502133.70000000164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 692.9554536702165,
            "unit": "ns/iter",
            "extra": "iterations: 1013776\ncpu: 692.9060265778585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6478.109481350633,
            "unit": "ns/iter",
            "extra": "iterations: 127967\ncpu: 6477.651269467895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12441.275488622516,
            "unit": "ns/iter",
            "extra": "iterations: 66667\ncpu: 12440.85679571603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18551.01064842873,
            "unit": "ns/iter",
            "extra": "iterations: 46204\ncpu: 18550.30949701323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24264.81477475372,
            "unit": "ns/iter",
            "extra": "iterations: 34207\ncpu: 24264.67682053394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 30651.761883963005,
            "unit": "ns/iter",
            "extra": "iterations: 27474\ncpu: 30650.123753366785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 36555.74493538058,
            "unit": "ns/iter",
            "extra": "iterations: 22904\ncpu: 36552.820468040496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 42874.92059033833,
            "unit": "ns/iter",
            "extra": "iterations: 19582\ncpu: 42873.85353896432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 48692.67683032943,
            "unit": "ns/iter",
            "extra": "iterations: 17251\ncpu: 48691.79757695214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 697.7483846089922,
            "unit": "ns/iter",
            "extra": "iterations: 1003627\ncpu: 697.7094079772672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 549.8477673919158,
            "unit": "ns/iter",
            "extra": "iterations: 1271495\ncpu: 549.8329132241929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 523.6301189727545,
            "unit": "ns/iter",
            "extra": "iterations: 1282899\ncpu: 523.6242291871765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 510.2464319778409,
            "unit": "ns/iter",
            "extra": "iterations: 1378705\ncpu: 510.2494007057319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 979.7966067295788,
            "unit": "ns/iter",
            "extra": "iterations: 719365\ncpu: 979.777720628611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 3159.293267790384,
            "unit": "ns/iter",
            "extra": "iterations: 253676\ncpu: 3159.228306974242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 15234.677151700538,
            "unit": "ns/iter",
            "extra": "iterations: 53632\ncpu: 15234.128878281563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 12117.436307382291,
            "unit": "ns/iter",
            "extra": "iterations: 67551\ncpu: 12117.271394946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 12031.120496783058,
            "unit": "ns/iter",
            "extra": "iterations: 67313\ncpu: 12030.701350407644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11671.29845497576,
            "unit": "ns/iter",
            "extra": "iterations: 69384\ncpu: 11670.729563011619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40373.677439735526,
            "unit": "ns/iter",
            "extra": "iterations: 20576\ncpu: 40361.10517107307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 272269.20937805367,
            "unit": "ns/iter",
            "extra": "iterations: 3071\ncpu: 272245.49006838433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 217366.0559145199,
            "unit": "ns/iter",
            "extra": "iterations: 4024\ncpu: 217343.36481113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 217933.77356608285,
            "unit": "ns/iter",
            "extra": "iterations: 4010\ncpu: 217917.08229426347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 216074.7828784066,
            "unit": "ns/iter",
            "extra": "iterations: 4030\ncpu: 216060.24813895678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 112387.68083194706,
            "unit": "ns/iter",
            "extra": "iterations: 7789\ncpu: 112387.32828347673 ns\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "a.patenkova@3opinion.ai",
            "name": "a.patenkova"
          },
          "committer": {
            "email": "a.patenkova@3opinion.ai",
            "name": "a.patenkova"
          },
          "distinct": true,
          "id": "2f550c1607320f8cf14031a2e95845f60ee8b88b",
          "message": "Upd",
          "timestamp": "2023-12-11T19:02:05+03:00",
          "tree_id": "337d408608d901b7b5b76fdd59c6fa5b12dc6c2e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/2f550c1607320f8cf14031a2e95845f60ee8b88b"
        },
        "date": 1702310732158,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1902.5653219516578,
            "unit": "ns/iter",
            "extra": "iterations: 369248\ncpu: 1902.5229655949388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 27647.67308014679,
            "unit": "ns/iter",
            "extra": "iterations: 29833\ncpu: 27647.836288673618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 56448.760437307596,
            "unit": "ns/iter",
            "extra": "iterations: 14635\ncpu: 56447.700717458145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 70258.34430583502,
            "unit": "ns/iter",
            "extra": "iterations: 12425\ncpu: 70255.14688128774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 101602.45431775997,
            "unit": "ns/iter",
            "extra": "iterations: 9183\ncpu: 101598.84569312856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 126364.29491475811,
            "unit": "ns/iter",
            "extra": "iterations: 6863\ncpu: 126359.21608625964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 154527.01958066117,
            "unit": "ns/iter",
            "extra": "iterations: 5771\ncpu: 154523.21954600592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 174143.95084269642,
            "unit": "ns/iter",
            "extra": "iterations: 4984\ncpu: 174138.28250401304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 195083.2378378388,
            "unit": "ns/iter",
            "extra": "iterations: 4440\ncpu: 195076.2612612611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1651.9050175117272,
            "unit": "ns/iter",
            "extra": "iterations: 424573\ncpu: 1651.8396129758612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1402.9247503665508,
            "unit": "ns/iter",
            "extra": "iterations: 503338\ncpu: 1402.9354032479173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1324.4463037913022,
            "unit": "ns/iter",
            "extra": "iterations: 528501\ncpu: 1324.4436623582546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1332.2284005439456,
            "unit": "ns/iter",
            "extra": "iterations: 525835\ncpu: 1332.1743512698836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2523.7898330995654,
            "unit": "ns/iter",
            "extra": "iterations: 277351\ncpu: 2523.714354734618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 9884.532717391116,
            "unit": "ns/iter",
            "extra": "iterations: 82800\ncpu: 9884.10628019325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 52436.70122454142,
            "unit": "ns/iter",
            "extra": "iterations: 15761\ncpu: 52436.60935219847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 40987.156738719146,
            "unit": "ns/iter",
            "extra": "iterations: 20078\ncpu: 40986.34824185672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 41525.38060804397,
            "unit": "ns/iter",
            "extra": "iterations: 18946\ncpu: 41521.93075055422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 38235.401330481,
            "unit": "ns/iter",
            "extra": "iterations: 21496\ncpu: 38235.10420543353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 109897.47525336003,
            "unit": "ns/iter",
            "extra": "iterations: 8486\ncpu: 109801.19019561615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 837607.9630630835,
            "unit": "ns/iter",
            "extra": "iterations: 1110\ncpu: 837581.711711711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 695470.0089485486,
            "unit": "ns/iter",
            "extra": "iterations: 1341\ncpu: 695416.3310961958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 699753.6884057972,
            "unit": "ns/iter",
            "extra": "iterations: 1380\ncpu: 699725.144927538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 692408.6130728645,
            "unit": "ns/iter",
            "extra": "iterations: 1331\ncpu: 692362.509391435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 478987.86157253094,
            "unit": "ns/iter",
            "extra": "iterations: 1806\ncpu: 478958.6378737527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1070.0276139005366,
            "unit": "ns/iter",
            "extra": "iterations: 662420\ncpu: 1069.9524470879478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20764.994690354186,
            "unit": "ns/iter",
            "extra": "iterations: 39739\ncpu: 20764.249226201035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 44561.060690394166,
            "unit": "ns/iter",
            "extra": "iterations: 18685\ncpu: 44558.96173401121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 56131.385400001935,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56128.08999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 74543.70146567219,
            "unit": "ns/iter",
            "extra": "iterations: 11667\ncpu: 74538.93888746011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 93026.88602081964,
            "unit": "ns/iter",
            "extra": "iterations: 9414\ncpu: 93023.32695984727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 110289.04667681355,
            "unit": "ns/iter",
            "extra": "iterations: 7884\ncpu: 110282.4835109079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 128612.24323926927,
            "unit": "ns/iter",
            "extra": "iterations: 6804\ncpu: 128607.74544385704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 146451.2278523478,
            "unit": "ns/iter",
            "extra": "iterations: 5960\ncpu: 146441.5100671136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 879.8829653113055,
            "unit": "ns/iter",
            "extra": "iterations: 786049\ncpu: 879.8420963578562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 740.3275627283373,
            "unit": "ns/iter",
            "extra": "iterations: 953915\ncpu: 740.28587452761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 711.8723395377995,
            "unit": "ns/iter",
            "extra": "iterations: 982677\ncpu: 711.8525212251894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 722.5636003260953,
            "unit": "ns/iter",
            "extra": "iterations: 964146\ncpu: 722.5579943286601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1415.8652601631645,
            "unit": "ns/iter",
            "extra": "iterations: 491384\ncpu: 1415.8104455985567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6995.789787921244,
            "unit": "ns/iter",
            "extra": "iterations: 118918\ncpu: 6995.645739080718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 36863.70854448436,
            "unit": "ns/iter",
            "extra": "iterations: 22693\ncpu: 36862.28352355324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 28947.57759938833,
            "unit": "ns/iter",
            "extra": "iterations: 28776\ncpu: 28947.014873505632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 28255.528010871963,
            "unit": "ns/iter",
            "extra": "iterations: 29435\ncpu: 28254.78511975543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 29864.78371436918,
            "unit": "ns/iter",
            "extra": "iterations: 27644\ncpu: 29864.245405874502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 68472.14077332805,
            "unit": "ns/iter",
            "extra": "iterations: 12957\ncpu: 68470.30948522052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 619711.3030000025,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 619687.1000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 528575.0019999966,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 528562.2000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 510934.6899999992,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510930.8000000041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 510254.37399999873,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510224.700000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 366871.6435477025,
            "unit": "ns/iter",
            "extra": "iterations: 2379\ncpu: 366864.01849516766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 513530.02400000487,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513525.7999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 705.3238535442197,
            "unit": "ns/iter",
            "extra": "iterations: 958214\ncpu: 705.3130094112621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6405.1306964005735,
            "unit": "ns/iter",
            "extra": "iterations: 127800\ncpu: 6404.791862284782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12302.72326811152,
            "unit": "ns/iter",
            "extra": "iterations: 67513\ncpu: 12302.399537866713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18751.500021665055,
            "unit": "ns/iter",
            "extra": "iterations: 46158\ncpu: 18750.080159452322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 25167.781629842506,
            "unit": "ns/iter",
            "extra": "iterations: 33402\ncpu: 25166.84629662897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 31043.247635009844,
            "unit": "ns/iter",
            "extra": "iterations: 26850\ncpu: 31040.81564245787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 37393.678178266535,
            "unit": "ns/iter",
            "extra": "iterations: 22528\ncpu: 37392.26740056827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 43531.18024281428,
            "unit": "ns/iter",
            "extra": "iterations: 19274\ncpu: 43530.58524437057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 49774.425920418595,
            "unit": "ns/iter",
            "extra": "iterations: 16813\ncpu: 49770.95699756143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 703.2746033055969,
            "unit": "ns/iter",
            "extra": "iterations: 993586\ncpu: 703.2712820027646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 554.3500342034124,
            "unit": "ns/iter",
            "extra": "iterations: 1255723\ncpu: 554.3356297527401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 546.959452153398,
            "unit": "ns/iter",
            "extra": "iterations: 1261448\ncpu: 546.9194132457264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 515.8009101318478,
            "unit": "ns/iter",
            "extra": "iterations: 1356287\ncpu: 515.783237618589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 967.9464480738284,
            "unit": "ns/iter",
            "extra": "iterations: 723354\ncpu: 967.8817010758175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 3170.2882331589462,
            "unit": "ns/iter",
            "extra": "iterations: 253458\ncpu: 3170.1646821169543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 15159.30730149283,
            "unit": "ns/iter",
            "extra": "iterations: 53537\ncpu: 15158.4773147543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11826.144652907922,
            "unit": "ns/iter",
            "extra": "iterations: 69290\ncpu: 11825.681916582449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11926.972565699001,
            "unit": "ns/iter",
            "extra": "iterations: 68418\ncpu: 11926.64357332851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 12014.898374163033,
            "unit": "ns/iter",
            "extra": "iterations: 68211\ncpu: 12014.663324097251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40805.01754558265,
            "unit": "ns/iter",
            "extra": "iterations: 20347\ncpu: 40802.30500810899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 276245.9729015269,
            "unit": "ns/iter",
            "extra": "iterations: 3026\ncpu: 276231.0310641096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 219260.66440422105,
            "unit": "ns/iter",
            "extra": "iterations: 3978\ncpu: 219242.63448969348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 218292.91737394774,
            "unit": "ns/iter",
            "extra": "iterations: 4006\ncpu: 218281.55267099218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 219173.41610233355,
            "unit": "ns/iter",
            "extra": "iterations: 3987\ncpu: 219159.04188613026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 113929.87827225142,
            "unit": "ns/iter",
            "extra": "iterations: 7640\ncpu: 113924.71204188437 ns\nthreads: 1"
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
          "id": "a4f22929864476e2c359efd42cd068b198aa88a8",
          "message": "Add more tests",
          "timestamp": "2023-12-12T01:57:35+03:00",
          "tree_id": "dacbda4737ce1572c6cafd7ff0a0aacf9b7c236d",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a4f22929864476e2c359efd42cd068b198aa88a8"
        },
        "date": 1702335633940,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1799.6442488001487,
            "unit": "ns/iter",
            "extra": "iterations: 389823\ncpu: 1799.5618524304623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 27316.069295967325,
            "unit": "ns/iter",
            "extra": "iterations: 23479\ncpu: 27314.059372204953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 56597.41077280187,
            "unit": "ns/iter",
            "extra": "iterations: 14648\ncpu: 56594.6955215729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 70523.86801703928,
            "unit": "ns/iter",
            "extra": "iterations: 12441\ncpu: 70520.37617554858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 101509.20491008894,
            "unit": "ns/iter",
            "extra": "iterations: 9287\ncpu: 101503.96252826523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 125393.18949671707,
            "unit": "ns/iter",
            "extra": "iterations: 6855\ncpu: 125387.41064916126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 153623.99827198588,
            "unit": "ns/iter",
            "extra": "iterations: 5787\ncpu: 153611.69863487114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 173274.5495513422,
            "unit": "ns/iter",
            "extra": "iterations: 5015\ncpu: 173263.82851445666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 193334.76658421932,
            "unit": "ns/iter",
            "extra": "iterations: 4447\ncpu: 193321.54261299752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1590.09837895061,
            "unit": "ns/iter",
            "extra": "iterations: 436384\ncpu: 1589.9712180098252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1331.5510961607854,
            "unit": "ns/iter",
            "extra": "iterations: 522916\ncpu: 1331.4918648501855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1287.76937793416,
            "unit": "ns/iter",
            "extra": "iterations: 544653\ncpu: 1287.699324156846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1306.9750658573862,
            "unit": "ns/iter",
            "extra": "iterations: 534488\ncpu: 1306.904364550748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2409.1942820773174,
            "unit": "ns/iter",
            "extra": "iterations: 290665\ncpu: 2409.0877814666374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 9751.4894531338,
            "unit": "ns/iter",
            "extra": "iterations: 84006\ncpu: 9751.014213270477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 52447.353711791286,
            "unit": "ns/iter",
            "extra": "iterations: 15801\ncpu: 52445.59205113605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 41130.167362558575,
            "unit": "ns/iter",
            "extra": "iterations: 20118\ncpu: 41129.21264539211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 40805.41347003004,
            "unit": "ns/iter",
            "extra": "iterations: 20386\ncpu: 40803.70352202479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 38738.06155790698,
            "unit": "ns/iter",
            "extra": "iterations: 21362\ncpu: 38737.674375058494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 104905.3658105547,
            "unit": "ns/iter",
            "extra": "iterations: 8488\ncpu: 104898.9750235624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 822965.8572686916,
            "unit": "ns/iter",
            "extra": "iterations: 1135\ncpu: 822932.511013215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 676521.3901543121,
            "unit": "ns/iter",
            "extra": "iterations: 1361\ncpu: 676480.4555473911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 686551.2962427585,
            "unit": "ns/iter",
            "extra": "iterations: 1384\ncpu: 686525.2890173424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 687284.7735011181,
            "unit": "ns/iter",
            "extra": "iterations: 1351\ncpu: 686840.0444115471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 478170.6418732552,
            "unit": "ns/iter",
            "extra": "iterations: 1815\ncpu: 478165.84022038424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1021.5737953798234,
            "unit": "ns/iter",
            "extra": "iterations: 688329\ncpu: 1021.5478354100989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20439.448500781913,
            "unit": "ns/iter",
            "extra": "iterations: 40321\ncpu: 20438.513429726416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43439.02868467663,
            "unit": "ns/iter",
            "extra": "iterations: 19174\ncpu: 43436.356524460185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 54034.96690000224,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54034.430000000095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 71953.01398890548,
            "unit": "ns/iter",
            "extra": "iterations: 12081\ncpu: 71948.64663521231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 89817.52181052782,
            "unit": "ns/iter",
            "extra": "iterations: 9743\ncpu: 89813.03499948689 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 107192.02655846957,
            "unit": "ns/iter",
            "extra": "iterations: 8133\ncpu: 107184.3477191683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 125158.74387974551,
            "unit": "ns/iter",
            "extra": "iterations: 6985\ncpu: 125152.49821045111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 142168.11914476482,
            "unit": "ns/iter",
            "extra": "iterations: 6127\ncpu: 142159.4581361193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 816.3572050556454,
            "unit": "ns/iter",
            "extra": "iterations: 852110\ncpu: 816.3151471054197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 688.5321085946371,
            "unit": "ns/iter",
            "extra": "iterations: 1017251\ncpu: 688.4904512259019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 683.9781091945958,
            "unit": "ns/iter",
            "extra": "iterations: 1025362\ncpu: 683.9341617887197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 674.0008207992475,
            "unit": "ns/iter",
            "extra": "iterations: 1039231\ncpu: 673.9741212492672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1350.369329873527,
            "unit": "ns/iter",
            "extra": "iterations: 528736\ncpu: 1350.2882345820976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6652.030375577689,
            "unit": "ns/iter",
            "extra": "iterations: 124475\ncpu: 6651.964651536445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 36777.56568376554,
            "unit": "ns/iter",
            "extra": "iterations: 22654\ncpu: 36775.28030369915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 28922.896911171287,
            "unit": "ns/iter",
            "extra": "iterations: 28684\ncpu: 28921.85887602845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 28293.337060648573,
            "unit": "ns/iter",
            "extra": "iterations: 29333\ncpu: 28291.59649541475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 29804.059938282797,
            "unit": "ns/iter",
            "extra": "iterations: 27545\ncpu: 29803.52151025588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 68532.47316395077,
            "unit": "ns/iter",
            "extra": "iterations: 12949\ncpu: 68528.16433701475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 599234.8769999581,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 599189.7999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 550126.4370000171,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 550082.0000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 502227.6810000221,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502216.4999999958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 509128.9929999903,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509084.1000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 368091.5724485591,
            "unit": "ns/iter",
            "extra": "iterations: 2381\ncpu: 368072.4905501879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 505459.0959999814,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505333.60000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 701.0499563132809,
            "unit": "ns/iter",
            "extra": "iterations: 996871\ncpu: 701.0365433441275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6412.098277463968,
            "unit": "ns/iter",
            "extra": "iterations: 125919\ncpu: 6411.929891438177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12257.941026145105,
            "unit": "ns/iter",
            "extra": "iterations: 66131\ncpu: 12257.168347673583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18693.842359915747,
            "unit": "ns/iter",
            "extra": "iterations: 45883\ncpu: 18692.565874070926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24801.75005189398,
            "unit": "ns/iter",
            "extra": "iterations: 33723\ncpu: 24800.862912552275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 30631.173953212823,
            "unit": "ns/iter",
            "extra": "iterations: 27059\ncpu: 30629.853283565768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 37092.858836062966,
            "unit": "ns/iter",
            "extra": "iterations: 22527\ncpu: 37092.48013494942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 42871.15833205203,
            "unit": "ns/iter",
            "extra": "iterations: 19497\ncpu: 42869.08242293697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 48782.192773906354,
            "unit": "ns/iter",
            "extra": "iterations: 17077\ncpu: 48778.87802307225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 683.3301845690239,
            "unit": "ns/iter",
            "extra": "iterations: 1023682\ncpu: 683.3100513636086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 540.3935489356438,
            "unit": "ns/iter",
            "extra": "iterations: 1293740\ncpu: 540.3880996181607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 535.3573650540967,
            "unit": "ns/iter",
            "extra": "iterations: 1303541\ncpu: 535.3385125592512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 537.015383117984,
            "unit": "ns/iter",
            "extra": "iterations: 1304807\ncpu: 536.9961994379237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 980.3834528295178,
            "unit": "ns/iter",
            "extra": "iterations: 696675\ncpu: 980.3597086159255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 3132.1163623793755,
            "unit": "ns/iter",
            "extra": "iterations: 254584\ncpu: 3131.853926405422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 14984.136531501423,
            "unit": "ns/iter",
            "extra": "iterations: 54427\ncpu: 14983.39059657886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11894.443858077128,
            "unit": "ns/iter",
            "extra": "iterations: 69164\ncpu: 11893.894222427994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 12003.640152805323,
            "unit": "ns/iter",
            "extra": "iterations: 67537\ncpu: 12003.230821623643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 11610.853725154031,
            "unit": "ns/iter",
            "extra": "iterations: 69930\ncpu: 11610.376090376249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 39597.33054575313,
            "unit": "ns/iter",
            "extra": "iterations: 20687\ncpu: 39595.6397737708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 269809.2675139397,
            "unit": "ns/iter",
            "extra": "iterations: 3226\ncpu: 269793.2734035966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 213873.5794734241,
            "unit": "ns/iter",
            "extra": "iterations: 4102\ncpu: 213863.1155533897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 216086.48422091655,
            "unit": "ns/iter",
            "extra": "iterations: 4056\ncpu: 216079.95562130338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 214823.4543665547,
            "unit": "ns/iter",
            "extra": "iterations: 4065\ncpu: 214810.70110701042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 112139.38760788286,
            "unit": "ns/iter",
            "extra": "iterations: 7763\ncpu: 112133.41491691385 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}