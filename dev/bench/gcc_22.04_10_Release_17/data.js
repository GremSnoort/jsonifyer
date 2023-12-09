window.BENCHMARK_DATA = {
  "lastUpdate": 1702083140198,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-10 22.04 Release c++-17": [
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
          "id": "e14131d2c0b6933d59d5ef852d1eb404bdeb503f",
          "message": "migrate to generate in exms and rn old code",
          "timestamp": "2023-12-09T02:43:57+03:00",
          "tree_id": "16ab7d6558ec956e05945d5b292b9221abcf5461",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/e14131d2c0b6933d59d5ef852d1eb404bdeb503f"
        },
        "date": 1702079180678,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1409.7254877661692,
            "unit": "ns/iter",
            "extra": "iterations: 500291\ncpu: 1409.6501835931488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1038.556049250764,
            "unit": "ns/iter",
            "extra": "iterations: 677431\ncpu: 1038.498828662993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1043.8437306180367,
            "unit": "ns/iter",
            "extra": "iterations: 672339\ncpu: 1043.8145042902465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1054.24173319854,
            "unit": "ns/iter",
            "extra": "iterations: 661713\ncpu: 1054.1576181819007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2695.8097031802918,
            "unit": "ns/iter",
            "extra": "iterations: 263089\ncpu: 2695.5919859819296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6103.314856174987,
            "unit": "ns/iter",
            "extra": "iterations: 133426\ncpu: 6102.262677439181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 33752.97253621751,
            "unit": "ns/iter",
            "extra": "iterations: 24505\ncpu: 33751.703733931885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 29544.2302664659,
            "unit": "ns/iter",
            "extra": "iterations: 27846\ncpu: 29543.686705451397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 29330.417301897032,
            "unit": "ns/iter",
            "extra": "iterations: 28205\ncpu: 29329.884772203524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29276.221275533306,
            "unit": "ns/iter",
            "extra": "iterations: 28051\ncpu: 29275.070407472147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 66819.67829399502,
            "unit": "ns/iter",
            "extra": "iterations: 13388\ncpu: 66817.54556319093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 666456.2500000101,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 666433.9000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 533452.9950000047,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533417.6 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 538479.9549999854,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538459.4000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 536218.5420000002,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536205.6000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 382071.2734513178,
            "unit": "ns/iter",
            "extra": "iterations: 2260\ncpu: 382054.7787610622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 540368.1439999844,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 540356.2999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 816.9631832312937,
            "unit": "ns/iter",
            "extra": "iterations: 872673\ncpu: 816.930740380419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 646.0564002292141,
            "unit": "ns/iter",
            "extra": "iterations: 1083719\ncpu: 646.0396098988768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 647.411836697485,
            "unit": "ns/iter",
            "extra": "iterations: 1074472\ncpu: 647.3993738319838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 664.4753320258085,
            "unit": "ns/iter",
            "extra": "iterations: 1071754\ncpu: 664.438574523632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1401.0515919354843,
            "unit": "ns/iter",
            "extra": "iterations: 497539\ncpu: 1401.0109760239918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4293.878373308213,
            "unit": "ns/iter",
            "extra": "iterations: 183907\ncpu: 4293.614707433647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24598.53582591218,
            "unit": "ns/iter",
            "extra": "iterations: 33914\ncpu: 24596.992392522247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 19118.951758840536,
            "unit": "ns/iter",
            "extra": "iterations: 43324\ncpu: 19117.94617302192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 18854.342732990124,
            "unit": "ns/iter",
            "extra": "iterations: 43725\ncpu: 18854.140651801055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 19417.58595948274,
            "unit": "ns/iter",
            "extra": "iterations: 42648\ncpu: 19416.861283061327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 44614.35441160881,
            "unit": "ns/iter",
            "extra": "iterations: 18882\ncpu: 44613.90212901183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 560161.943203574,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 560143.5864709641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 457830.00521105033,
            "unit": "ns/iter",
            "extra": "iterations: 1919\ncpu: 457802.9181865555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 461744.55858748255,
            "unit": "ns/iter",
            "extra": "iterations: 1869\ncpu: 461721.7763509893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 449276.59616380447,
            "unit": "ns/iter",
            "extra": "iterations: 1929\ncpu: 449245.72317262844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 265986.61619190767,
            "unit": "ns/iter",
            "extra": "iterations: 3335\ncpu: 265972.62368815555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 454584.41155047674,
            "unit": "ns/iter",
            "extra": "iterations: 1922\ncpu: 454572.4765868875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 567.1834136716288,
            "unit": "ns/iter",
            "extra": "iterations: 1225443\ncpu: 567.16697553456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 476.5509677139254,
            "unit": "ns/iter",
            "extra": "iterations: 1474041\ncpu: 476.5456320414437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 475.0495587911798,
            "unit": "ns/iter",
            "extra": "iterations: 1468579\ncpu: 475.0304886560398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 468.0676904644998,
            "unit": "ns/iter",
            "extra": "iterations: 1499059\ncpu: 468.052825138969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1109.3775307257752,
            "unit": "ns/iter",
            "extra": "iterations: 638552\ncpu: 1109.3223417983172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2523.3758660253375,
            "unit": "ns/iter",
            "extra": "iterations: 317254\ncpu: 2523.205065972394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9529.128231752784,
            "unit": "ns/iter",
            "extra": "iterations: 85712\ncpu: 9528.549094642583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10177.86379556186,
            "unit": "ns/iter",
            "extra": "iterations: 79946\ncpu: 10177.322192479896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10381.071839834038,
            "unit": "ns/iter",
            "extra": "iterations: 80067\ncpu: 10380.191589543727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10377.610713970342,
            "unit": "ns/iter",
            "extra": "iterations: 79317\ncpu: 10376.905329248455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 32738.58882769525,
            "unit": "ns/iter",
            "extra": "iterations: 25420\ncpu: 32736.660110149474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 291468.84355108725,
            "unit": "ns/iter",
            "extra": "iterations: 2985\ncpu: 291452.46231155767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 221153.15686274623,
            "unit": "ns/iter",
            "extra": "iterations: 3825\ncpu: 221131.08496732026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 220441.41962474535,
            "unit": "ns/iter",
            "extra": "iterations: 3944\ncpu: 220427.3326572007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 220513.35885771655,
            "unit": "ns/iter",
            "extra": "iterations: 3957\ncpu: 220503.15895880773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 119644.01338980903,
            "unit": "ns/iter",
            "extra": "iterations: 7319\ncpu: 119639.71854078396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 212538.08102189514,
            "unit": "ns/iter",
            "extra": "iterations: 4110\ncpu: 212526.52068126635 ns\nthreads: 1"
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
          "id": "d661ce52eef5dbad84699818ef2a482adbf7e5f8",
          "message": "Add more BMs and Fixes",
          "timestamp": "2023-12-09T03:49:20+03:00",
          "tree_id": "613bf928395c34e1ed6771def2c6aa8cfc3bb289",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d661ce52eef5dbad84699818ef2a482adbf7e5f8"
        },
        "date": 1702083139817,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1576.1598514014527,
            "unit": "ns/iter",
            "extra": "iterations: 444688\ncpu: 1576.1185370417015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 18774.29438491021,
            "unit": "ns/iter",
            "extra": "iterations: 43579\ncpu: 18773.762592074163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 39873.26892109606,
            "unit": "ns/iter",
            "extra": "iterations: 19872\ncpu: 39870.56662640902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 58934.96710017634,
            "unit": "ns/iter",
            "extra": "iterations: 14225\ncpu: 58934.33391915644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 65745.2825503353,
            "unit": "ns/iter",
            "extra": "iterations: 13410\ncpu: 65737.7926920209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 83764.33443302695,
            "unit": "ns/iter",
            "extra": "iterations: 10609\ncpu: 83761.92855123008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 99055.93020274895,
            "unit": "ns/iter",
            "extra": "iterations: 8582\ncpu: 99052.6101141925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 112664.0866377397,
            "unit": "ns/iter",
            "extra": "iterations: 6683\ncpu: 112659.58401915296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 132284.20005998694,
            "unit": "ns/iter",
            "extra": "iterations: 6668\ncpu: 132278.83923215358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1379.1031139800705,
            "unit": "ns/iter",
            "extra": "iterations: 508738\ncpu: 1379.0343949144772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1082.5676320772786,
            "unit": "ns/iter",
            "extra": "iterations: 646875\ncpu: 1082.5702028985525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1041.2207735322181,
            "unit": "ns/iter",
            "extra": "iterations: 664355\ncpu: 1041.1415583535909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1049.5167241545487,
            "unit": "ns/iter",
            "extra": "iterations: 664488\ncpu: 1049.5053334296476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2215.18898471122,
            "unit": "ns/iter",
            "extra": "iterations: 317486\ncpu: 2215.075940356426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6312.388265713136,
            "unit": "ns/iter",
            "extra": "iterations: 130336\ncpu: 6312.307420820022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31022.70390892994,
            "unit": "ns/iter",
            "extra": "iterations: 26529\ncpu: 31020.56617286748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 27911.61645544672,
            "unit": "ns/iter",
            "extra": "iterations: 30458\ncpu: 27911.34348939521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25191.321143842448,
            "unit": "ns/iter",
            "extra": "iterations: 32487\ncpu: 25190.37461138308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 28079.4699646644,
            "unit": "ns/iter",
            "extra": "iterations: 30847\ncpu: 28076.338055564538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64483.10968975055,
            "unit": "ns/iter",
            "extra": "iterations: 13602\ncpu: 64480.179385384254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 644418.0569999958,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 644400.1999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 516199.71499999904,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516195.1999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 509161.3239999902,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509134.59999999945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 508184.53299999074,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508179.700000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 359850.5740664802,
            "unit": "ns/iter",
            "extra": "iterations: 2437\ncpu: 359842.9626590061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 516601.09100001253,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516587.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 822.2829282756002,
            "unit": "ns/iter",
            "extra": "iterations: 853294\ncpu: 822.2401657576412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12913.169129491956,
            "unit": "ns/iter",
            "extra": "iterations: 64560\ncpu: 12912.712205700134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 28269.807068267426,
            "unit": "ns/iter",
            "extra": "iterations: 29399\ncpu: 28269.3152828327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 42004.53229002586,
            "unit": "ns/iter",
            "extra": "iterations: 19681\ncpu: 42003.17057060102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 56211.54353491363,
            "unit": "ns/iter",
            "extra": "iterations: 14965\ncpu: 56209.963247577514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 58727.736000000164,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 58727.28000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 69968.89734309504,
            "unit": "ns/iter",
            "extra": "iterations: 12157\ncpu: 69967.50843135659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 81256.70182841134,
            "unit": "ns/iter",
            "extra": "iterations: 10665\ncpu: 81252.77074542883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 93468.4320460858,
            "unit": "ns/iter",
            "extra": "iterations: 9374\ncpu: 93466.05504587131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 640.6896879871882,
            "unit": "ns/iter",
            "extra": "iterations: 1071847\ncpu: 640.669330604091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 506.90829233373057,
            "unit": "ns/iter",
            "extra": "iterations: 1371761\ncpu: 506.9069611980525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 502.4231519524958,
            "unit": "ns/iter",
            "extra": "iterations: 1390224\ncpu: 502.4046484595308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 493.5024830034119,
            "unit": "ns/iter",
            "extra": "iterations: 1417638\ncpu: 493.4978464177721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1112.576609632875,
            "unit": "ns/iter",
            "extra": "iterations: 639913\ncpu: 1112.571240152961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4440.546159223685,
            "unit": "ns/iter",
            "extra": "iterations: 178805\ncpu: 4440.493834065034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 21014.090659271664,
            "unit": "ns/iter",
            "extra": "iterations: 39665\ncpu: 21013.914030001244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16799.84965592366,
            "unit": "ns/iter",
            "extra": "iterations: 49553\ncpu: 16799.773979375652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15363.922747493873,
            "unit": "ns/iter",
            "extra": "iterations: 54173\ncpu: 15363.780850239045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 16530.660848231524,
            "unit": "ns/iter",
            "extra": "iterations: 49727\ncpu: 16529.931425583673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 44077.860888795745,
            "unit": "ns/iter",
            "extra": "iterations: 18992\ncpu: 44076.31634372354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 534488.8335358402,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 534466.8894289203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 430863.4793713138,
            "unit": "ns/iter",
            "extra": "iterations: 2036\ncpu: 430859.72495088505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 426191.68682926457,
            "unit": "ns/iter",
            "extra": "iterations: 2050\ncpu: 426178.878048781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 429763.0837004324,
            "unit": "ns/iter",
            "extra": "iterations: 2043\ncpu: 429758.7371512455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 251844.00484054894,
            "unit": "ns/iter",
            "extra": "iterations: 3512\ncpu: 251836.8451025053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 427866.2628739568,
            "unit": "ns/iter",
            "extra": "iterations: 2039\ncpu: 427861.64786660176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 631.9683357434053,
            "unit": "ns/iter",
            "extra": "iterations: 1108537\ncpu: 631.9462498770878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5607.729440000072,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5607.60799999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10821.183893000078,
            "unit": "ns/iter",
            "extra": "iterations: 77159\ncpu: 10820.793426560755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16372.503439903061,
            "unit": "ns/iter",
            "extra": "iterations: 51891\ncpu: 16372.0317588791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21103.491929735603,
            "unit": "ns/iter",
            "extra": "iterations: 39280\ncpu: 21102.584012220006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26500.14943987762,
            "unit": "ns/iter",
            "extra": "iterations: 31511\ncpu: 26499.3748214909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31947.919776476483,
            "unit": "ns/iter",
            "extra": "iterations: 26127\ncpu: 31946.897845141106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37119.306618819246,
            "unit": "ns/iter",
            "extra": "iterations: 22572\ncpu: 37118.26156299845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42584.03570525445,
            "unit": "ns/iter",
            "extra": "iterations: 19773\ncpu: 42582.08668386208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 564.8024559201498,
            "unit": "ns/iter",
            "extra": "iterations: 1234975\ncpu: 564.7760480981391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 439.24465579499275,
            "unit": "ns/iter",
            "extra": "iterations: 1583257\ncpu: 439.22774382175487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 438.3833858272124,
            "unit": "ns/iter",
            "extra": "iterations: 1601139\ncpu: 438.3807402105637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 448.50432067638064,
            "unit": "ns/iter",
            "extra": "iterations: 1560751\ncpu: 448.48838796195076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 947.5787965924379,
            "unit": "ns/iter",
            "extra": "iterations: 743522\ncpu: 947.547752453848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2445.496298606852,
            "unit": "ns/iter",
            "extra": "iterations: 323797\ncpu: 2445.3904761316703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9724.578606816569,
            "unit": "ns/iter",
            "extra": "iterations: 83765\ncpu: 9724.152092162516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10504.561761505636,
            "unit": "ns/iter",
            "extra": "iterations: 78115\ncpu: 10503.844332074525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10115.209556877106,
            "unit": "ns/iter",
            "extra": "iterations: 81219\ncpu: 10114.886910698287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9532.453800030247,
            "unit": "ns/iter",
            "extra": "iterations: 86223\ncpu: 9531.94855201047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 31506.516018567618,
            "unit": "ns/iter",
            "extra": "iterations: 26282\ncpu: 31505.406742256706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 269166.3789173663,
            "unit": "ns/iter",
            "extra": "iterations: 3159\ncpu: 269154.57423235354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 208403.1150377688,
            "unit": "ns/iter",
            "extra": "iterations: 4103\ncpu: 208397.8064830629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 208676.65299683978,
            "unit": "ns/iter",
            "extra": "iterations: 4121\ncpu: 208669.15797136544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 208861.78155338595,
            "unit": "ns/iter",
            "extra": "iterations: 4120\ncpu: 208859.63592233017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 106835.35975533462,
            "unit": "ns/iter",
            "extra": "iterations: 8011\ncpu: 106831.46922980862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 204048.42732491367,
            "unit": "ns/iter",
            "extra": "iterations: 4355\ncpu: 204046.31458094183 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}