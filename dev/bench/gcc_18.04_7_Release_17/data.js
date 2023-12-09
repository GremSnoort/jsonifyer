window.BENCHMARK_DATA = {
  "lastUpdate": 1702084727579,
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
      }
    ]
  }
}