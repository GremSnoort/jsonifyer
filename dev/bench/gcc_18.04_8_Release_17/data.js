window.BENCHMARK_DATA = {
  "lastUpdate": 1702377468301,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-8 18.04 Release c++-17": [
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
        "date": 1702084757552,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1670.8300948712345,
            "unit": "ns/iter",
            "extra": "iterations: 420570\ncpu: 1670.7344793970092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 20445.036041387957,
            "unit": "ns/iter",
            "extra": "iterations: 40398\ncpu: 20443.323926927074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 41588.67604355711,
            "unit": "ns/iter",
            "extra": "iterations: 19836\ncpu: 41588.08731599112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52176.63550000112,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52173.250000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 70183.92412435926,
            "unit": "ns/iter",
            "extra": "iterations: 12705\ncpu: 70182.38488783945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 88199.29063402013,
            "unit": "ns/iter",
            "extra": "iterations: 10047\ncpu: 88193.27162337014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 105191.1149596525,
            "unit": "ns/iter",
            "extra": "iterations: 8055\ncpu: 105186.21973929234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 118583.62957274535,
            "unit": "ns/iter",
            "extra": "iterations: 7162\ncpu: 118579.94973471091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 138687.688503532,
            "unit": "ns/iter",
            "extra": "iterations: 6228\ncpu: 138677.74566473978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1467.2138240453473,
            "unit": "ns/iter",
            "extra": "iterations: 476532\ncpu: 1467.1877229650895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1192.6241465702487,
            "unit": "ns/iter",
            "extra": "iterations: 537244\ncpu: 1192.6052222081587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1194.4102604042714,
            "unit": "ns/iter",
            "extra": "iterations: 584207\ncpu: 1194.346524433975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1190.379347313524,
            "unit": "ns/iter",
            "extra": "iterations: 589502\ncpu: 1190.3152152155537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2187.1155530065726,
            "unit": "ns/iter",
            "extra": "iterations: 319083\ncpu: 2187.017171080877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7730.832401491128,
            "unit": "ns/iter",
            "extra": "iterations: 105168\ncpu: 7730.546363912968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 39950.57529918622,
            "unit": "ns/iter",
            "extra": "iterations: 20890\ncpu: 39949.01866921967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 32954.68150392385,
            "unit": "ns/iter",
            "extra": "iterations: 25746\ncpu: 32952.97521945156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 32270.08764018536,
            "unit": "ns/iter",
            "extra": "iterations: 25502\ncpu: 32267.888793035843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 32109.285257036147,
            "unit": "ns/iter",
            "extra": "iterations: 25619\ncpu: 32108.021390374397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 84927.25725430537,
            "unit": "ns/iter",
            "extra": "iterations: 10511\ncpu: 84921.8723242317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 647222.8720000146,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 647178.0000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 530913.876999989,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530901.4000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 520097.7559999842,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520072.40000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 518407.1850000009,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518380.1999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 366695.9085930939,
            "unit": "ns/iter",
            "extra": "iterations: 2374\ncpu: 366675.61078348797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 517248.06499998976,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517243.1999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 888.2352443808983,
            "unit": "ns/iter",
            "extra": "iterations: 785311\ncpu: 888.1817521975363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13714.493637546095,
            "unit": "ns/iter",
            "extra": "iterations: 60747\ncpu: 13713.773519679971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 29617.70814246715,
            "unit": "ns/iter",
            "extra": "iterations: 28161\ncpu: 29616.139341642698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 44455.14476331679,
            "unit": "ns/iter",
            "extra": "iterations: 18886\ncpu: 44452.086201419035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 59523.55506795106,
            "unit": "ns/iter",
            "extra": "iterations: 14128\ncpu: 59522.324462061326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 61446.777099999395,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61443.57999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 73939.26356061715,
            "unit": "ns/iter",
            "extra": "iterations: 11762\ncpu: 73937.30658051351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 86050.49439317406,
            "unit": "ns/iter",
            "extra": "iterations: 10077\ncpu: 86047.76223082267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 97979.3729559041,
            "unit": "ns/iter",
            "extra": "iterations: 8867\ncpu: 97976.2151798806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 710.3322285223777,
            "unit": "ns/iter",
            "extra": "iterations: 985689\ncpu: 710.3287142293347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 579.6599660804671,
            "unit": "ns/iter",
            "extra": "iterations: 1208153\ncpu: 579.6350296692598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 581.8663869743744,
            "unit": "ns/iter",
            "extra": "iterations: 1209186\ncpu: 581.8598627506383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 586.3506082379946,
            "unit": "ns/iter",
            "extra": "iterations: 1190899\ncpu: 586.3363727738447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1125.675997058987,
            "unit": "ns/iter",
            "extra": "iterations: 621553\ncpu: 1125.6296727712663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5157.839969999997,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5157.784999999962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 27345.8350587072,
            "unit": "ns/iter",
            "extra": "iterations: 30235\ncpu: 27344.68662146516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 21876.42012379879,
            "unit": "ns/iter",
            "extra": "iterations: 37965\ncpu: 21876.162254708277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 21497.73152575647,
            "unit": "ns/iter",
            "extra": "iterations: 38689\ncpu: 21496.41500168011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21940.04055899947,
            "unit": "ns/iter",
            "extra": "iterations: 38068\ncpu: 21939.784070610513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 50877.870799999415,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50875.10999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 537444.6752767601,
            "unit": "ns/iter",
            "extra": "iterations: 1626\ncpu: 537438.0073800758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 442420.23646578635,
            "unit": "ns/iter",
            "extra": "iterations: 1958\ncpu: 442388.20224719273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 443675.41856925155,
            "unit": "ns/iter",
            "extra": "iterations: 1971\ncpu: 443658.09233891283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 447088.349671545,
            "unit": "ns/iter",
            "extra": "iterations: 1979\ncpu: 447075.3916119238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 256533.3917525747,
            "unit": "ns/iter",
            "extra": "iterations: 3395\ncpu: 256511.19293078192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 433011.4523927025,
            "unit": "ns/iter",
            "extra": "iterations: 2027\ncpu: 432985.8411445472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 655.7983193986826,
            "unit": "ns/iter",
            "extra": "iterations: 1066166\ncpu: 655.7673945708252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6108.630862318352,
            "unit": "ns/iter",
            "extra": "iterations: 133373\ncpu: 6108.313526725806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11584.181252545659,
            "unit": "ns/iter",
            "extra": "iterations: 71199\ncpu: 11583.673928004671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17602.15074358301,
            "unit": "ns/iter",
            "extra": "iterations: 48347\ncpu: 17601.396156948766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22858.22731911809,
            "unit": "ns/iter",
            "extra": "iterations: 36253\ncpu: 22857.198024991096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28854.06359626656,
            "unit": "ns/iter",
            "extra": "iterations: 29247\ncpu: 28852.78148186126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33850.52531056398,
            "unit": "ns/iter",
            "extra": "iterations: 24713\ncpu: 33849.006595718965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39477.70817791754,
            "unit": "ns/iter",
            "extra": "iterations: 21448\ncpu: 39476.03506154426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45566.222991990515,
            "unit": "ns/iter",
            "extra": "iterations: 18476\ncpu: 45563.97488633891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 646.4652533249642,
            "unit": "ns/iter",
            "extra": "iterations: 1070088\ncpu: 646.4324429392773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 519.1138403443293,
            "unit": "ns/iter",
            "extra": "iterations: 1349504\ncpu: 519.07834285782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 500.4590531540206,
            "unit": "ns/iter",
            "extra": "iterations: 1392708\ncpu: 500.430240940668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 509.7229064228972,
            "unit": "ns/iter",
            "extra": "iterations: 1364041\ncpu: 509.7115116041276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 984.4116728495952,
            "unit": "ns/iter",
            "extra": "iterations: 710829\ncpu: 984.3537615938557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2477.2429043479615,
            "unit": "ns/iter",
            "extra": "iterations: 321394\ncpu: 2477.128384475122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 12800.655136401125,
            "unit": "ns/iter",
            "extra": "iterations: 63196\ncpu: 12799.91296917522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9917.517389547887,
            "unit": "ns/iter",
            "extra": "iterations: 81687\ncpu: 9917.08350165873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9891.821215604634,
            "unit": "ns/iter",
            "extra": "iterations: 83514\ncpu: 9891.476878128165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9573.014882676645,
            "unit": "ns/iter",
            "extra": "iterations: 84595\ncpu: 9572.672143743865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 39513.0784209252,
            "unit": "ns/iter",
            "extra": "iterations: 20645\ncpu: 39510.96633567394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 262677.707687437,
            "unit": "ns/iter",
            "extra": "iterations: 3161\ncpu: 262661.6893388163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 203350.5865800785,
            "unit": "ns/iter",
            "extra": "iterations: 4158\ncpu: 203337.5420875424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 201998.04002876274,
            "unit": "ns/iter",
            "extra": "iterations: 4172\ncpu: 201985.45062320336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 201063.43062201975,
            "unit": "ns/iter",
            "extra": "iterations: 4180\ncpu: 201054.4497607636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 107067.43281924468,
            "unit": "ns/iter",
            "extra": "iterations: 8105\ncpu: 107066.03331276932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 198950.37831050975,
            "unit": "ns/iter",
            "extra": "iterations: 4380\ncpu: 198940.36529680598 ns\nthreads: 1"
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
        "date": 1702084757552,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1670.8300948712345,
            "unit": "ns/iter",
            "extra": "iterations: 420570\ncpu: 1670.7344793970092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 20445.036041387957,
            "unit": "ns/iter",
            "extra": "iterations: 40398\ncpu: 20443.323926927074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 41588.67604355711,
            "unit": "ns/iter",
            "extra": "iterations: 19836\ncpu: 41588.08731599112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 52176.63550000112,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52173.250000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 70183.92412435926,
            "unit": "ns/iter",
            "extra": "iterations: 12705\ncpu: 70182.38488783945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 88199.29063402013,
            "unit": "ns/iter",
            "extra": "iterations: 10047\ncpu: 88193.27162337014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 105191.1149596525,
            "unit": "ns/iter",
            "extra": "iterations: 8055\ncpu: 105186.21973929234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 118583.62957274535,
            "unit": "ns/iter",
            "extra": "iterations: 7162\ncpu: 118579.94973471091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 138687.688503532,
            "unit": "ns/iter",
            "extra": "iterations: 6228\ncpu: 138677.74566473978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1467.2138240453473,
            "unit": "ns/iter",
            "extra": "iterations: 476532\ncpu: 1467.1877229650895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1192.6241465702487,
            "unit": "ns/iter",
            "extra": "iterations: 537244\ncpu: 1192.6052222081587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1194.4102604042714,
            "unit": "ns/iter",
            "extra": "iterations: 584207\ncpu: 1194.346524433975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1190.379347313524,
            "unit": "ns/iter",
            "extra": "iterations: 589502\ncpu: 1190.3152152155537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2187.1155530065726,
            "unit": "ns/iter",
            "extra": "iterations: 319083\ncpu: 2187.017171080877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7730.832401491128,
            "unit": "ns/iter",
            "extra": "iterations: 105168\ncpu: 7730.546363912968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 39950.57529918622,
            "unit": "ns/iter",
            "extra": "iterations: 20890\ncpu: 39949.01866921967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 32954.68150392385,
            "unit": "ns/iter",
            "extra": "iterations: 25746\ncpu: 32952.97521945156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 32270.08764018536,
            "unit": "ns/iter",
            "extra": "iterations: 25502\ncpu: 32267.888793035843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 32109.285257036147,
            "unit": "ns/iter",
            "extra": "iterations: 25619\ncpu: 32108.021390374397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 84927.25725430537,
            "unit": "ns/iter",
            "extra": "iterations: 10511\ncpu: 84921.8723242317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 647222.8720000146,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 647178.0000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 530913.876999989,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 530901.4000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 520097.7559999842,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520072.40000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 518407.1850000009,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518380.1999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 366695.9085930939,
            "unit": "ns/iter",
            "extra": "iterations: 2374\ncpu: 366675.61078348797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 517248.06499998976,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517243.1999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 888.2352443808983,
            "unit": "ns/iter",
            "extra": "iterations: 785311\ncpu: 888.1817521975363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13714.493637546095,
            "unit": "ns/iter",
            "extra": "iterations: 60747\ncpu: 13713.773519679971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 29617.70814246715,
            "unit": "ns/iter",
            "extra": "iterations: 28161\ncpu: 29616.139341642698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 44455.14476331679,
            "unit": "ns/iter",
            "extra": "iterations: 18886\ncpu: 44452.086201419035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 59523.55506795106,
            "unit": "ns/iter",
            "extra": "iterations: 14128\ncpu: 59522.324462061326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 61446.777099999395,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61443.57999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 73939.26356061715,
            "unit": "ns/iter",
            "extra": "iterations: 11762\ncpu: 73937.30658051351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 86050.49439317406,
            "unit": "ns/iter",
            "extra": "iterations: 10077\ncpu: 86047.76223082267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 97979.3729559041,
            "unit": "ns/iter",
            "extra": "iterations: 8867\ncpu: 97976.2151798806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 710.3322285223777,
            "unit": "ns/iter",
            "extra": "iterations: 985689\ncpu: 710.3287142293347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 579.6599660804671,
            "unit": "ns/iter",
            "extra": "iterations: 1208153\ncpu: 579.6350296692598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 581.8663869743744,
            "unit": "ns/iter",
            "extra": "iterations: 1209186\ncpu: 581.8598627506383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 586.3506082379946,
            "unit": "ns/iter",
            "extra": "iterations: 1190899\ncpu: 586.3363727738447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1125.675997058987,
            "unit": "ns/iter",
            "extra": "iterations: 621553\ncpu: 1125.6296727712663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5157.839969999997,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5157.784999999962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 27345.8350587072,
            "unit": "ns/iter",
            "extra": "iterations: 30235\ncpu: 27344.68662146516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 21876.42012379879,
            "unit": "ns/iter",
            "extra": "iterations: 37965\ncpu: 21876.162254708277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 21497.73152575647,
            "unit": "ns/iter",
            "extra": "iterations: 38689\ncpu: 21496.41500168011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21940.04055899947,
            "unit": "ns/iter",
            "extra": "iterations: 38068\ncpu: 21939.784070610513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 50877.870799999415,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50875.10999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 537444.6752767601,
            "unit": "ns/iter",
            "extra": "iterations: 1626\ncpu: 537438.0073800758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 442420.23646578635,
            "unit": "ns/iter",
            "extra": "iterations: 1958\ncpu: 442388.20224719273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 443675.41856925155,
            "unit": "ns/iter",
            "extra": "iterations: 1971\ncpu: 443658.09233891283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 447088.349671545,
            "unit": "ns/iter",
            "extra": "iterations: 1979\ncpu: 447075.3916119238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 256533.3917525747,
            "unit": "ns/iter",
            "extra": "iterations: 3395\ncpu: 256511.19293078192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 433011.4523927025,
            "unit": "ns/iter",
            "extra": "iterations: 2027\ncpu: 432985.8411445472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 655.7983193986826,
            "unit": "ns/iter",
            "extra": "iterations: 1066166\ncpu: 655.7673945708252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6108.630862318352,
            "unit": "ns/iter",
            "extra": "iterations: 133373\ncpu: 6108.313526725806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11584.181252545659,
            "unit": "ns/iter",
            "extra": "iterations: 71199\ncpu: 11583.673928004671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17602.15074358301,
            "unit": "ns/iter",
            "extra": "iterations: 48347\ncpu: 17601.396156948766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22858.22731911809,
            "unit": "ns/iter",
            "extra": "iterations: 36253\ncpu: 22857.198024991096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28854.06359626656,
            "unit": "ns/iter",
            "extra": "iterations: 29247\ncpu: 28852.78148186126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33850.52531056398,
            "unit": "ns/iter",
            "extra": "iterations: 24713\ncpu: 33849.006595718965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39477.70817791754,
            "unit": "ns/iter",
            "extra": "iterations: 21448\ncpu: 39476.03506154426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45566.222991990515,
            "unit": "ns/iter",
            "extra": "iterations: 18476\ncpu: 45563.97488633891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 646.4652533249642,
            "unit": "ns/iter",
            "extra": "iterations: 1070088\ncpu: 646.4324429392773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 519.1138403443293,
            "unit": "ns/iter",
            "extra": "iterations: 1349504\ncpu: 519.07834285782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 500.4590531540206,
            "unit": "ns/iter",
            "extra": "iterations: 1392708\ncpu: 500.430240940668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 509.7229064228972,
            "unit": "ns/iter",
            "extra": "iterations: 1364041\ncpu: 509.7115116041276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 984.4116728495952,
            "unit": "ns/iter",
            "extra": "iterations: 710829\ncpu: 984.3537615938557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2477.2429043479615,
            "unit": "ns/iter",
            "extra": "iterations: 321394\ncpu: 2477.128384475122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 12800.655136401125,
            "unit": "ns/iter",
            "extra": "iterations: 63196\ncpu: 12799.91296917522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9917.517389547887,
            "unit": "ns/iter",
            "extra": "iterations: 81687\ncpu: 9917.08350165873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9891.821215604634,
            "unit": "ns/iter",
            "extra": "iterations: 83514\ncpu: 9891.476878128165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9573.014882676645,
            "unit": "ns/iter",
            "extra": "iterations: 84595\ncpu: 9572.672143743865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 39513.0784209252,
            "unit": "ns/iter",
            "extra": "iterations: 20645\ncpu: 39510.96633567394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 262677.707687437,
            "unit": "ns/iter",
            "extra": "iterations: 3161\ncpu: 262661.6893388163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 203350.5865800785,
            "unit": "ns/iter",
            "extra": "iterations: 4158\ncpu: 203337.5420875424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 201998.04002876274,
            "unit": "ns/iter",
            "extra": "iterations: 4172\ncpu: 201985.45062320336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 201063.43062201975,
            "unit": "ns/iter",
            "extra": "iterations: 4180\ncpu: 201054.4497607636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 107067.43281924468,
            "unit": "ns/iter",
            "extra": "iterations: 8105\ncpu: 107066.03331276932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 198950.37831050975,
            "unit": "ns/iter",
            "extra": "iterations: 4380\ncpu: 198940.36529680598 ns\nthreads: 1"
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
        "date": 1702085010544,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1710.6740386696663,
            "unit": "ns/iter",
            "extra": "iterations: 397314\ncpu: 1710.5745078200114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 22098.036570051918,
            "unit": "ns/iter",
            "extra": "iterations: 39021\ncpu: 22097.532098101026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 43539.41367466222,
            "unit": "ns/iter",
            "extra": "iterations: 18633\ncpu: 43537.05790801266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 56625.03940000079,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56618.14999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 72354.77217774995,
            "unit": "ns/iter",
            "extra": "iterations: 12242\ncpu: 72349.59157000488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 90858.63216477825,
            "unit": "ns/iter",
            "extra": "iterations: 9613\ncpu: 90853.1051700822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 106856.94976708975,
            "unit": "ns/iter",
            "extra": "iterations: 7943\ncpu: 106849.17537454369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 123705.00321074108,
            "unit": "ns/iter",
            "extra": "iterations: 6852\ncpu: 123698.32165791004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 142561.68433067072,
            "unit": "ns/iter",
            "extra": "iterations: 6133\ncpu: 142550.72558291195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1455.9892719808183,
            "unit": "ns/iter",
            "extra": "iterations: 476416\ncpu: 1455.9131095513148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1189.153453567763,
            "unit": "ns/iter",
            "extra": "iterations: 588406\ncpu: 1189.1331835501326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1189.7418895508156,
            "unit": "ns/iter",
            "extra": "iterations: 599751\ncpu: 1189.6567075336277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1187.6729205286447,
            "unit": "ns/iter",
            "extra": "iterations: 589609\ncpu: 1187.6044972176478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2152.8902364816186,
            "unit": "ns/iter",
            "extra": "iterations: 310595\ncpu: 2152.723965292424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7684.44037460983,
            "unit": "ns/iter",
            "extra": "iterations: 100905\ncpu: 7683.914573113315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 41023.598529338575,
            "unit": "ns/iter",
            "extra": "iterations: 20263\ncpu: 41020.55964072455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 32528.23400015617,
            "unit": "ns/iter",
            "extra": "iterations: 25594\ncpu: 32526.689849183436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 31919.519874840404,
            "unit": "ns/iter",
            "extra": "iterations: 25887\ncpu: 31917.44118669602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 31535.774267398716,
            "unit": "ns/iter",
            "extra": "iterations: 26208\ncpu: 31534.825244200205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 85416.79540889639,
            "unit": "ns/iter",
            "extra": "iterations: 10455\ncpu: 85411.38211382122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 633050.1959999993,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 633008.199999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 524237.6219999869,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524184.0999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 513754.079999984,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513743.9999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 512454.3560000063,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512409.69999999914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 363846.7272727259,
            "unit": "ns/iter",
            "extra": "iterations: 2387\ncpu: 363820.7373271878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 514552.42500000505,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514541.60000000114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 878.0322204525569,
            "unit": "ns/iter",
            "extra": "iterations: 796761\ncpu: 877.994153830323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13629.932164859902,
            "unit": "ns/iter",
            "extra": "iterations: 60706\ncpu: 13629.642868909159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 29050.850087077324,
            "unit": "ns/iter",
            "extra": "iterations: 28710\ncpu: 29050.66875653094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 43532.59789242978,
            "unit": "ns/iter",
            "extra": "iterations: 19169\ncpu: 43531.22228598259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 58951.79333010522,
            "unit": "ns/iter",
            "extra": "iterations: 14453\ncpu: 58950.114163149476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60695.2743000022,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60694.089999999786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 72568.90166975812,
            "unit": "ns/iter",
            "extra": "iterations: 11858\ncpu: 72567.29634002343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 85023.82296369091,
            "unit": "ns/iter",
            "extra": "iterations: 10190\ncpu: 85020.4023552503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 97391.56899999872,
            "unit": "ns/iter",
            "extra": "iterations: 9000\ncpu: 97391.01111111105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 723.6707020764411,
            "unit": "ns/iter",
            "extra": "iterations: 966362\ncpu: 723.6506609324465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 590.5597197634166,
            "unit": "ns/iter",
            "extra": "iterations: 1180003\ncpu: 590.5396850685969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 584.7970980330094,
            "unit": "ns/iter",
            "extra": "iterations: 1200565\ncpu: 584.7884121226289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 594.1619067745281,
            "unit": "ns/iter",
            "extra": "iterations: 1178283\ncpu: 594.1450398588464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1140.5948237719622,
            "unit": "ns/iter",
            "extra": "iterations: 630575\ncpu: 1140.5774095071995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5198.499020000042,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5198.303999999965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 27725.262852404405,
            "unit": "ns/iter",
            "extra": "iterations: 30150\ncpu: 27724.477611940256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 21870.59142098269,
            "unit": "ns/iter",
            "extra": "iterations: 37650\ncpu: 21869.90438247013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 21431.894946330016,
            "unit": "ns/iter",
            "extra": "iterations: 38942\ncpu: 21431.577730984423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21733.10471435565,
            "unit": "ns/iter",
            "extra": "iterations: 38457\ncpu: 21732.665054476543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 50754.37870000031,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50752.68000000008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 536315.3284132814,
            "unit": "ns/iter",
            "extra": "iterations: 1626\ncpu: 536284.5018450215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 450181.96923079714,
            "unit": "ns/iter",
            "extra": "iterations: 1950\ncpu: 450173.07692307606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 433205.75701402535,
            "unit": "ns/iter",
            "extra": "iterations: 1996\ncpu: 433199.6993987974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 441531.16515150433,
            "unit": "ns/iter",
            "extra": "iterations: 1980\ncpu: 441504.99999999715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 258815.5644027961,
            "unit": "ns/iter",
            "extra": "iterations: 3416\ncpu: 258809.27985948516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 441426.62830096786,
            "unit": "ns/iter",
            "extra": "iterations: 2007\ncpu: 441393.07424016047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 664.1270772201487,
            "unit": "ns/iter",
            "extra": "iterations: 1056460\ncpu: 664.102001022277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6117.137722755893,
            "unit": "ns/iter",
            "extra": "iterations: 133442\ncpu: 6116.817793498285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11539.582499825909,
            "unit": "ns/iter",
            "extra": "iterations: 71885\ncpu: 11539.286360158592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17186.614819338014,
            "unit": "ns/iter",
            "extra": "iterations: 49125\ncpu: 17186.19440203565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22688.46631787206,
            "unit": "ns/iter",
            "extra": "iterations: 36889\ncpu: 22688.14551763393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28334.15910933901,
            "unit": "ns/iter",
            "extra": "iterations: 29596\ncpu: 28332.71050141908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33839.11146034831,
            "unit": "ns/iter",
            "extra": "iterations: 24816\ncpu: 33838.579948420345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39783.28391107903,
            "unit": "ns/iter",
            "extra": "iterations: 21232\ncpu: 39781.64091936699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45599.798915107065,
            "unit": "ns/iter",
            "extra": "iterations: 18435\ncpu: 45599.164632492604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 616.5573161285837,
            "unit": "ns/iter",
            "extra": "iterations: 1136120\ncpu: 616.517533359156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 501.4124069029594,
            "unit": "ns/iter",
            "extra": "iterations: 1392096\ncpu: 501.39020584787556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 484.5849247259488,
            "unit": "ns/iter",
            "extra": "iterations: 1446846\ncpu: 484.55578548096884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 486.4634553600887,
            "unit": "ns/iter",
            "extra": "iterations: 1443317\ncpu: 486.44823001461003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 943.1237329943849,
            "unit": "ns/iter",
            "extra": "iterations: 742696\ncpu: 943.0965024720765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2564.4186324812713,
            "unit": "ns/iter",
            "extra": "iterations: 310855\ncpu: 2564.2595422302834 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13005.349888901363,
            "unit": "ns/iter",
            "extra": "iterations: 62557\ncpu: 13004.328852086906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10315.753839547586,
            "unit": "ns/iter",
            "extra": "iterations: 79176\ncpu: 10315.118217641688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9989.210796633062,
            "unit": "ns/iter",
            "extra": "iterations: 81970\ncpu: 9988.449432719328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10038.753033503735,
            "unit": "ns/iter",
            "extra": "iterations: 81424\ncpu: 10038.354784830028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 39454.41428777553,
            "unit": "ns/iter",
            "extra": "iterations: 20773\ncpu: 39452.03389014611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 270241.9504694061,
            "unit": "ns/iter",
            "extra": "iterations: 3089\ncpu: 270220.1359663325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 210489.62994280126,
            "unit": "ns/iter",
            "extra": "iterations: 4021\ncpu: 210472.6187515526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 216655.0604259478,
            "unit": "ns/iter",
            "extra": "iterations: 4038\ncpu: 216645.14611193593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 210291.13569177833,
            "unit": "ns/iter",
            "extra": "iterations: 4127\ncpu: 210284.58929004215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 106682.1431019753,
            "unit": "ns/iter",
            "extra": "iterations: 8169\ncpu: 106679.89962051675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 200031.02279530442,
            "unit": "ns/iter",
            "extra": "iterations: 4343\ncpu: 200017.89085885478 ns\nthreads: 1"
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
        "date": 1702085592755,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1650.4886277155676,
            "unit": "ns/iter",
            "extra": "iterations: 417858\ncpu: 1650.4484777125247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 21024.37816954288,
            "unit": "ns/iter",
            "extra": "iterations: 39990\ncpu: 21023.203300825207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 41890.62912690709,
            "unit": "ns/iter",
            "extra": "iterations: 19597\ncpu: 41888.10532224321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51812.890700000484,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51811.44 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 69304.13947617539,
            "unit": "ns/iter",
            "extra": "iterations: 12676\ncpu: 69302.47712212057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 86587.64485887991,
            "unit": "ns/iter",
            "extra": "iterations: 10027\ncpu: 86584.97057943555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 102645.43907740767,
            "unit": "ns/iter",
            "extra": "iterations: 8281\ncpu: 102642.03598599207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 117630.59399440888,
            "unit": "ns/iter",
            "extra": "iterations: 7160\ncpu: 117623.60335195527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 138879.09134082595,
            "unit": "ns/iter",
            "extra": "iterations: 6317\ncpu: 138869.79578914057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1441.073609043605,
            "unit": "ns/iter",
            "extra": "iterations: 476273\ncpu: 1440.977968518057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1168.8159915980348,
            "unit": "ns/iter",
            "extra": "iterations: 598902\ncpu: 1168.75932957312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1185.6308435610094,
            "unit": "ns/iter",
            "extra": "iterations: 586158\ncpu: 1185.5322285117659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1181.2284283768481,
            "unit": "ns/iter",
            "extra": "iterations: 589397\ncpu: 1181.161254638213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2190.10080519571,
            "unit": "ns/iter",
            "extra": "iterations: 324269\ncpu: 2190.007370423939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7241.058604743833,
            "unit": "ns/iter",
            "extra": "iterations: 110503\ncpu: 7240.877623231946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 38501.64874082911,
            "unit": "ns/iter",
            "extra": "iterations: 21403\ncpu: 38499.23842451999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30769.096416891145,
            "unit": "ns/iter",
            "extra": "iterations: 26904\ncpu: 30767.607047279263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30211.121511820587,
            "unit": "ns/iter",
            "extra": "iterations: 27199\ncpu: 30209.382697893285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30009.988023953167,
            "unit": "ns/iter",
            "extra": "iterations: 27722\ncpu: 30008.596060890228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 84629.4977164606,
            "unit": "ns/iter",
            "extra": "iterations: 10510\ncpu: 84622.69267364434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 648961.0369999922,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 648916.7999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 527024.310999991,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527009.2999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 508990.6210000095,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508941.6999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 508724.1679999579,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508727.19999999914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 359861.22834645194,
            "unit": "ns/iter",
            "extra": "iterations: 2413\ncpu: 359858.0605055943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 518258.3989999898,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 518194.4999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 884.288314521703,
            "unit": "ns/iter",
            "extra": "iterations: 792950\ncpu: 884.2358282363297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13583.71640492945,
            "unit": "ns/iter",
            "extra": "iterations: 60939\ncpu: 13583.45066377851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 29445.949491730258,
            "unit": "ns/iter",
            "extra": "iterations: 28233\ncpu: 29445.503488825194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 43689.78367432925,
            "unit": "ns/iter",
            "extra": "iterations: 19013\ncpu: 43688.78661968122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 58397.86969823326,
            "unit": "ns/iter",
            "extra": "iterations: 14382\ncpu: 58397.33694896398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60649.38960000176,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60648.05 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 72296.4625208647,
            "unit": "ns/iter",
            "extra": "iterations: 11980\ncpu: 72295.74290484132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 85208.14299667998,
            "unit": "ns/iter",
            "extra": "iterations: 10238\ncpu: 85207.0130884936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 96469.93865303276,
            "unit": "ns/iter",
            "extra": "iterations: 8998\ncpu: 96467.370526784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 713.5766218391385,
            "unit": "ns/iter",
            "extra": "iterations: 983251\ncpu: 713.581069330205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 583.8934563681677,
            "unit": "ns/iter",
            "extra": "iterations: 1198035\ncpu: 583.8669988773266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 576.861696114732,
            "unit": "ns/iter",
            "extra": "iterations: 1208397\ncpu: 576.8530540873594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 588.1215738029347,
            "unit": "ns/iter",
            "extra": "iterations: 1193415\ncpu: 588.1133553709308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1145.7155190899366,
            "unit": "ns/iter",
            "extra": "iterations: 638897\ncpu: 1145.691559046296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5207.027250000351,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5207.003000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 27203.67723277063,
            "unit": "ns/iter",
            "extra": "iterations: 30601\ncpu: 27203.300545733626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 21729.758100763698,
            "unit": "ns/iter",
            "extra": "iterations: 38268\ncpu: 21729.719347758062 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 21325.444304900393,
            "unit": "ns/iter",
            "extra": "iterations: 39016\ncpu: 21324.946175927696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21692.578143665272,
            "unit": "ns/iter",
            "extra": "iterations: 38506\ncpu: 21692.39858723315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 50530.667300000685,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50529.56999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 558110.6466992588,
            "unit": "ns/iter",
            "extra": "iterations: 1636\ncpu: 558106.2347188272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 477729.9470468315,
            "unit": "ns/iter",
            "extra": "iterations: 1964\ncpu: 477697.9633401233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 434661.1512562732,
            "unit": "ns/iter",
            "extra": "iterations: 1990\ncpu: 434642.11055276374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 440470.3921665638,
            "unit": "ns/iter",
            "extra": "iterations: 2017\ncpu: 440457.8582052531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 255857.04433351938,
            "unit": "ns/iter",
            "extra": "iterations: 3406\ncpu: 255849.64768056473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 434682.14563591615,
            "unit": "ns/iter",
            "extra": "iterations: 2005\ncpu: 434683.64089775766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 666.425124005399,
            "unit": "ns/iter",
            "extra": "iterations: 1049148\ncpu: 666.422182571003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6313.985103297043,
            "unit": "ns/iter",
            "extra": "iterations: 129626\ncpu: 6313.783500223706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11905.274554379235,
            "unit": "ns/iter",
            "extra": "iterations: 69061\ncpu: 11904.341089761238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17685.963982516707,
            "unit": "ns/iter",
            "extra": "iterations: 47588\ncpu: 17685.628729931905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23261.214177979367,
            "unit": "ns/iter",
            "extra": "iterations: 35802\ncpu: 23260.284341656847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28553.704576644188,
            "unit": "ns/iter",
            "extra": "iterations: 29148\ncpu: 28553.355290243006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34501.15951824943,
            "unit": "ns/iter",
            "extra": "iterations: 24411\ncpu: 34500.76604809301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40442.08923745341,
            "unit": "ns/iter",
            "extra": "iterations: 20720\ncpu: 40441.30791505787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 46198.99576480891,
            "unit": "ns/iter",
            "extra": "iterations: 18181\ncpu: 46198.04741213352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 671.4345759239529,
            "unit": "ns/iter",
            "extra": "iterations: 1032869\ncpu: 671.4267733855842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 534.6888122723142,
            "unit": "ns/iter",
            "extra": "iterations: 1306941\ncpu: 534.686569630917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 516.1682698717947,
            "unit": "ns/iter",
            "extra": "iterations: 1350004\ncpu: 516.1571373121847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 521.5621169845823,
            "unit": "ns/iter",
            "extra": "iterations: 1345083\ncpu: 521.5510120936815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1000.2510195663134,
            "unit": "ns/iter",
            "extra": "iterations: 700543\ncpu: 1000.2226844033846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2683.6681081438833,
            "unit": "ns/iter",
            "extra": "iterations: 302005\ncpu: 2683.6317279515156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13562.999883845912,
            "unit": "ns/iter",
            "extra": "iterations: 60265\ncpu: 13562.512237617086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10532.109096524644,
            "unit": "ns/iter",
            "extra": "iterations: 77711\ncpu: 10532.076540000706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10546.555016139484,
            "unit": "ns/iter",
            "extra": "iterations: 77450\ncpu: 10546.145900581061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10266.282553729969,
            "unit": "ns/iter",
            "extra": "iterations: 79100\ncpu: 10266.34007585332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 39955.32863849893,
            "unit": "ns/iter",
            "extra": "iterations: 20661\ncpu: 39954.02449058663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 267807.71751047345,
            "unit": "ns/iter",
            "extra": "iterations: 3101\ncpu: 267800.6449532398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 205761.61185983315,
            "unit": "ns/iter",
            "extra": "iterations: 4081\ncpu: 205754.4474393524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 204223.56672317465,
            "unit": "ns/iter",
            "extra": "iterations: 4129\ncpu: 204208.54928554263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 203696.69202721724,
            "unit": "ns/iter",
            "extra": "iterations: 4114\ncpu: 203686.72824501907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 106644.33411128813,
            "unit": "ns/iter",
            "extra": "iterations: 8141\ncpu: 106638.14027760574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 200285.66545039823,
            "unit": "ns/iter",
            "extra": "iterations: 4385\ncpu: 200256.76168757142 ns\nthreads: 1"
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
        "date": 1702244237436,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1963.4465423521199,
            "unit": "ns/iter",
            "extra": "iterations: 388906\ncpu: 1963.339984469255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 26270.82005673986,
            "unit": "ns/iter",
            "extra": "iterations: 31371\ncpu: 26268.831086034876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 53678.3242074007,
            "unit": "ns/iter",
            "extra": "iterations: 15487\ncpu: 53676.79343965907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 67338.45717787785,
            "unit": "ns/iter",
            "extra": "iterations: 13054\ncpu: 67336.96185077369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 97964.10903712969,
            "unit": "ns/iter",
            "extra": "iterations: 9804\ncpu: 97960.47531619738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 120632.86341875464,
            "unit": "ns/iter",
            "extra": "iterations: 7102\ncpu: 120629.32976626302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 143327.8981313018,
            "unit": "ns/iter",
            "extra": "iterations: 6047\ncpu: 143324.8718372747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 166510.3439613532,
            "unit": "ns/iter",
            "extra": "iterations: 5175\ncpu: 166505.42995169072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 185204.02474402564,
            "unit": "ns/iter",
            "extra": "iterations: 4688\ncpu: 185197.6109215017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1515.5818771556494,
            "unit": "ns/iter",
            "extra": "iterations: 462455\ncpu: 1515.5323220637663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1313.285172716145,
            "unit": "ns/iter",
            "extra": "iterations: 532579\ncpu: 1313.2763402237051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1238.3668415548486,
            "unit": "ns/iter",
            "extra": "iterations: 564170\ncpu: 1238.3111473492029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1222.6316823382415,
            "unit": "ns/iter",
            "extra": "iterations: 570141\ncpu: 1222.5886228143586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2380.0614509062657,
            "unit": "ns/iter",
            "extra": "iterations: 295374\ncpu: 2379.941701029883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 9210.65753823087,
            "unit": "ns/iter",
            "extra": "iterations: 89391\ncpu: 9210.372408855465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 49509.55206719847,
            "unit": "ns/iter",
            "extra": "iterations: 16786\ncpu: 49507.041582271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 40788.2566753207,
            "unit": "ns/iter",
            "extra": "iterations: 20411\ncpu: 40786.71794620536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 38732.62920768737,
            "unit": "ns/iter",
            "extra": "iterations: 21330\ncpu: 38731.42991092362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 38426.893045651086,
            "unit": "ns/iter",
            "extra": "iterations: 21598\ncpu: 38425.75238448011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 105725.46921675629,
            "unit": "ns/iter",
            "extra": "iterations: 8235\ncpu: 105719.2592592591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 815559.8752166257,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 815532.8422876935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 663161.8949999732,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 663141.4000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 669321.8510000065,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 669288.9999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 662976.1409058452,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 662936.4485981304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 468081.0453074378,
            "unit": "ns/iter",
            "extra": "iterations: 1854\ncpu: 468063.8619201729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 994.4643040911296,
            "unit": "ns/iter",
            "extra": "iterations: 703526\ncpu: 994.3936684642795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19504.75539937867,
            "unit": "ns/iter",
            "extra": "iterations: 42829\ncpu: 19504.1770762801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 41689.75013657824,
            "unit": "ns/iter",
            "extra": "iterations: 20135\ncpu: 41687.5639433821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 52217.55309999594,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52215.770000000106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 69860.64835340275,
            "unit": "ns/iter",
            "extra": "iterations: 12541\ncpu: 69857.36384658334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 87199.36404472077,
            "unit": "ns/iter",
            "extra": "iterations: 10018\ncpu: 87197.13515671808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 103986.25314786054,
            "unit": "ns/iter",
            "extra": "iterations: 8339\ncpu: 103982.58784026891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 121482.45626311598,
            "unit": "ns/iter",
            "extra": "iterations: 7145\ncpu: 121479.10426871938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 138283.89914231314,
            "unit": "ns/iter",
            "extra": "iterations: 6296\ncpu: 138279.14548920005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 848.1976599585829,
            "unit": "ns/iter",
            "extra": "iterations: 818618\ncpu: 848.1681321446636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 673.7883415985299,
            "unit": "ns/iter",
            "extra": "iterations: 1039302\ncpu: 673.7822115227355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 676.005336481971,
            "unit": "ns/iter",
            "extra": "iterations: 1036638\ncpu: 675.9698178148969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 676.8516071853588,
            "unit": "ns/iter",
            "extra": "iterations: 1024524\ncpu: 676.8344128590447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1363.4592711922753,
            "unit": "ns/iter",
            "extra": "iterations: 513359\ncpu: 1363.4137124312613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5701.512978019723,
            "unit": "ns/iter",
            "extra": "iterations: 139351\ncpu: 5701.191236517865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 35773.27779696238,
            "unit": "ns/iter",
            "extra": "iterations: 23168\ncpu: 35771.862051104814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 29360.04732765026,
            "unit": "ns/iter",
            "extra": "iterations: 28271\ncpu: 29359.20200912616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 27948.33316506675,
            "unit": "ns/iter",
            "extra": "iterations: 29715\ncpu: 27946.966178697665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 27929.47449856726,
            "unit": "ns/iter",
            "extra": "iterations: 29665\ncpu: 27928.646553176946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 70421.0740389903,
            "unit": "ns/iter",
            "extra": "iterations: 12669\ncpu: 70418.07561764974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 593161.900000041,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 593134.1000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 501213.636999978,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501206.5000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 618123.8915325308,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 618077.2568229561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 500121.99100001453,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500116.69999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 360086.2506102525,
            "unit": "ns/iter",
            "extra": "iterations: 2458\ncpu: 360067.86004881933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 616571.5960028468,
            "unit": "ns/iter",
            "extra": "iterations: 1401\ncpu: 616544.4682369726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 700.139392397964,
            "unit": "ns/iter",
            "extra": "iterations: 1006547\ncpu: 700.1212064612937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6095.561783942825,
            "unit": "ns/iter",
            "extra": "iterations: 134242\ncpu: 6095.373281089389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11707.744343535975,
            "unit": "ns/iter",
            "extra": "iterations: 70141\ncpu: 11707.189803396015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17934.545698924936,
            "unit": "ns/iter",
            "extra": "iterations: 48360\ncpu: 17934.034325889224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23441.876552948794,
            "unit": "ns/iter",
            "extra": "iterations: 35497\ncpu: 23440.580894160015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29154.422222222038,
            "unit": "ns/iter",
            "extra": "iterations: 28935\ncpu: 29154.23881112838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 35040.622136604434,
            "unit": "ns/iter",
            "extra": "iterations: 23879\ncpu: 35038.054357385095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40888.1255709977,
            "unit": "ns/iter",
            "extra": "iterations: 20578\ncpu: 40885.75177373889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45758.72470419357,
            "unit": "ns/iter",
            "extra": "iterations: 18086\ncpu: 45757.29293376103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 678.7575854397146,
            "unit": "ns/iter",
            "extra": "iterations: 1029703\ncpu: 678.7328967673219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 506.52392625524686,
            "unit": "ns/iter",
            "extra": "iterations: 1333953\ncpu: 506.5053266494434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 491.3933869663142,
            "unit": "ns/iter",
            "extra": "iterations: 1426486\ncpu: 491.3691406715519 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 488.47810623441944,
            "unit": "ns/iter",
            "extra": "iterations: 1384184\ncpu: 488.45240228177704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 948.7878191655988,
            "unit": "ns/iter",
            "extra": "iterations: 737979\ncpu: 948.780927370563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2734.0424156336703,
            "unit": "ns/iter",
            "extra": "iterations: 293571\ncpu: 2733.972361030221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 12900.11637197915,
            "unit": "ns/iter",
            "extra": "iterations: 62326\ncpu: 12900.030484869798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10549.342993190354,
            "unit": "ns/iter",
            "extra": "iterations: 78124\ncpu: 10548.740463877966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10559.103310932416,
            "unit": "ns/iter",
            "extra": "iterations: 77078\ncpu: 10558.784607799918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10242.31101051591,
            "unit": "ns/iter",
            "extra": "iterations: 79306\ncpu: 10241.830378533788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 42336.471132635765,
            "unit": "ns/iter",
            "extra": "iterations: 20854\ncpu: 42334.94293660704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 274328.4314108781,
            "unit": "ns/iter",
            "extra": "iterations: 3069\ncpu: 274312.60997067555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 219810.48394381357,
            "unit": "ns/iter",
            "extra": "iterations: 3986\ncpu: 219805.9959859525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 218532.78357463505,
            "unit": "ns/iter",
            "extra": "iterations: 4006\ncpu: 218521.99201198097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 217789.6571000733,
            "unit": "ns/iter",
            "extra": "iterations: 4007\ncpu: 217788.6448714747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 111240.1799744879,
            "unit": "ns/iter",
            "extra": "iterations: 7840\ncpu: 111217.05357142775 ns\nthreads: 1"
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
        "date": 1702285132970,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1962.0704714806252,
            "unit": "ns/iter",
            "extra": "iterations: 389051\ncpu: 1961.926842496228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 26073.305135186052,
            "unit": "ns/iter",
            "extra": "iterations: 31586\ncpu: 26070.417273475592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 54101.807755074886,
            "unit": "ns/iter",
            "extra": "iterations: 15319\ncpu: 54100.51569945817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 67369.3636574621,
            "unit": "ns/iter",
            "extra": "iterations: 12927\ncpu: 67368.2447590315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 97951.79583592332,
            "unit": "ns/iter",
            "extra": "iterations: 9654\ncpu: 97892.55230992335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 123014.55451364617,
            "unit": "ns/iter",
            "extra": "iterations: 7145\ncpu: 123010.72078376492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 143847.4156717701,
            "unit": "ns/iter",
            "extra": "iterations: 5947\ncpu: 143844.00538086426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 164226.3463687107,
            "unit": "ns/iter",
            "extra": "iterations: 5191\ncpu: 164215.7195145445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 189391.27651183077,
            "unit": "ns/iter",
            "extra": "iterations: 4564\ncpu: 189375.59158632744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1561.6352725106644,
            "unit": "ns/iter",
            "extra": "iterations: 441579\ncpu: 1561.5387054185105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1303.5416667452107,
            "unit": "ns/iter",
            "extra": "iterations: 530675\ncpu: 1303.444857963915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1264.4861348940024,
            "unit": "ns/iter",
            "extra": "iterations: 550699\ncpu: 1264.4266650202746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1250.8551197711856,
            "unit": "ns/iter",
            "extra": "iterations: 559400\ncpu: 1250.7702895959967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2358.929461722736,
            "unit": "ns/iter",
            "extra": "iterations: 294365\ncpu: 2358.819832520846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 9178.024732216896,
            "unit": "ns/iter",
            "extra": "iterations: 89438\ncpu: 9177.574409087867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 49393.6304076174,
            "unit": "ns/iter",
            "extra": "iterations: 16805\ncpu: 49391.7643558465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 40868.902088258576,
            "unit": "ns/iter",
            "extra": "iterations: 20304\ncpu: 40866.35145784091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 38719.959925093346,
            "unit": "ns/iter",
            "extra": "iterations: 21360\ncpu: 38719.42415730333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 38260.15066845526,
            "unit": "ns/iter",
            "extra": "iterations: 21617\ncpu: 38259.3976962576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 105281.53401197527,
            "unit": "ns/iter",
            "extra": "iterations: 8350\ncpu: 105278.2514970059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 805984.4486626344,
            "unit": "ns/iter",
            "extra": "iterations: 1159\ncpu: 805952.6315789482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 663736.7430000154,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 663726.3000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 662020.6527677806,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 661998.058950396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 648102.9610000064,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 648081.3999999989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 462871.61317746184,
            "unit": "ns/iter",
            "extra": "iterations: 1882\ncpu: 462855.84484590887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1003.8486032930855,
            "unit": "ns/iter",
            "extra": "iterations: 692307\ncpu: 1003.8101593657124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19589.535033191405,
            "unit": "ns/iter",
            "extra": "iterations: 42631\ncpu: 19588.84379911331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 41817.46302684964,
            "unit": "ns/iter",
            "extra": "iterations: 20001\ncpu: 41815.789210539624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 52609.81050000169,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52606.36000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 69803.78766083164,
            "unit": "ns/iter",
            "extra": "iterations: 12513\ncpu: 69802.45344841375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 87159.90894552636,
            "unit": "ns/iter",
            "extra": "iterations: 10005\ncpu: 87154.79260369827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 103832.03086272835,
            "unit": "ns/iter",
            "extra": "iterations: 8392\ncpu: 103830.66015252609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 120958.69358636883,
            "unit": "ns/iter",
            "extra": "iterations: 7219\ncpu: 120954.19033107025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 138083.91731225204,
            "unit": "ns/iter",
            "extra": "iterations: 6325\ncpu: 138081.24901185787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 828.599213486081,
            "unit": "ns/iter",
            "extra": "iterations: 846266\ncpu: 828.5865200776078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 677.9761494942786,
            "unit": "ns/iter",
            "extra": "iterations: 1037043\ncpu: 677.9645588466394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 673.8878650825224,
            "unit": "ns/iter",
            "extra": "iterations: 1037197\ncpu: 673.8671631329476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 680.228355505523,
            "unit": "ns/iter",
            "extra": "iterations: 1028541\ncpu: 680.20759503024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1322.3213073125514,
            "unit": "ns/iter",
            "extra": "iterations: 529269\ncpu: 1322.2767628559448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5933.723941891686,
            "unit": "ns/iter",
            "extra": "iterations: 138431\ncpu: 5933.544509539017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 35686.441402396544,
            "unit": "ns/iter",
            "extra": "iterations: 23303\ncpu: 35685.4267690856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 29532.63960761946,
            "unit": "ns/iter",
            "extra": "iterations: 28136\ncpu: 29531.47568950811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 27854.80466286648,
            "unit": "ns/iter",
            "extra": "iterations: 29810\ncpu: 27854.173096276245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 27908.966486084886,
            "unit": "ns/iter",
            "extra": "iterations: 29719\ncpu: 27907.634846394463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 68536.2907902006,
            "unit": "ns/iter",
            "extra": "iterations: 12693\ncpu: 68534.92476167959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 582957.4120000416,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 582928.0999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 608883.5508058922,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 608873.020322353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 604068.3016095309,
            "unit": "ns/iter",
            "extra": "iterations: 1429\ncpu: 604032.2603219011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 597955.6704067304,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 597920.7573632584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 355967.88176351547,
            "unit": "ns/iter",
            "extra": "iterations: 2495\ncpu: 355962.56513026037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 610348.7798165171,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 610324.5589273138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 708.1870331459797,
            "unit": "ns/iter",
            "extra": "iterations: 977554\ncpu: 708.1753028477191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6300.139946082514,
            "unit": "ns/iter",
            "extra": "iterations: 129457\ncpu: 6299.830831859232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12040.099678741928,
            "unit": "ns/iter",
            "extra": "iterations: 67547\ncpu: 12039.18752868377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18152.322654607015,
            "unit": "ns/iter",
            "extra": "iterations: 47103\ncpu: 18151.48292040846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24065.102516953455,
            "unit": "ns/iter",
            "extra": "iterations: 34804\ncpu: 24063.84323640969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29696.880763520385,
            "unit": "ns/iter",
            "extra": "iterations: 27609\ncpu: 29695.544931000724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 36093.49373476345,
            "unit": "ns/iter",
            "extra": "iterations: 23383\ncpu: 36092.083992644366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 42036.23035230439,
            "unit": "ns/iter",
            "extra": "iterations: 19926\ncpu: 42033.820134497706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 47537.11112378852,
            "unit": "ns/iter",
            "extra": "iterations: 17530\ncpu: 47534.723331431574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 687.5646974220602,
            "unit": "ns/iter",
            "extra": "iterations: 1019291\ncpu: 687.5422229765617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 536.2369645441781,
            "unit": "ns/iter",
            "extra": "iterations: 1307204\ncpu: 536.2058255635726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 532.0516092094927,
            "unit": "ns/iter",
            "extra": "iterations: 1315211\ncpu: 532.0274085298836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 527.0261629394855,
            "unit": "ns/iter",
            "extra": "iterations: 1328788\ncpu: 526.9921913804185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1008.3145680005013,
            "unit": "ns/iter",
            "extra": "iterations: 696355\ncpu: 1008.3108471971889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2768.6645737643153,
            "unit": "ns/iter",
            "extra": "iterations: 284772\ncpu: 2768.601899063105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13652.523528216601,
            "unit": "ns/iter",
            "extra": "iterations: 59078\ncpu: 13652.467923761862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10647.394916688041,
            "unit": "ns/iter",
            "extra": "iterations: 74479\ncpu: 10646.740692007219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10608.043748615328,
            "unit": "ns/iter",
            "extra": "iterations: 76711\ncpu: 10607.478718827766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10408.117390698675,
            "unit": "ns/iter",
            "extra": "iterations: 78933\ncpu: 10406.20526269115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40252.9229880624,
            "unit": "ns/iter",
            "extra": "iterations: 20776\ncpu: 40251.28513669604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 272930.7636003837,
            "unit": "ns/iter",
            "extra": "iterations: 3033\ncpu: 272919.0570392361 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 216944.39653036636,
            "unit": "ns/iter",
            "extra": "iterations: 4035\ncpu: 216937.39776951875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 217358.81468617968,
            "unit": "ns/iter",
            "extra": "iterations: 4031\ncpu: 217351.6993301904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 217371.2090184306,
            "unit": "ns/iter",
            "extra": "iterations: 4014\ncpu: 217363.25361235836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 109830.00213621519,
            "unit": "ns/iter",
            "extra": "iterations: 7958\ncpu: 109824.81779341646 ns\nthreads: 1"
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
        "date": 1702309508842,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1826.5087651067065,
            "unit": "ns/iter",
            "extra": "iterations: 377976\ncpu: 1826.4098778758444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 26917.61734727186,
            "unit": "ns/iter",
            "extra": "iterations: 30610\ncpu: 26916.089513230974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 54575.05967995765,
            "unit": "ns/iter",
            "extra": "iterations: 15248\ncpu: 54570.710912906594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 67409.4225970415,
            "unit": "ns/iter",
            "extra": "iterations: 12984\ncpu: 67407.82501540355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 97816.93156438986,
            "unit": "ns/iter",
            "extra": "iterations: 9761\ncpu: 97811.69962094049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 120789.89612577036,
            "unit": "ns/iter",
            "extra": "iterations: 7124\ncpu: 120784.69960696239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 143132.73048234696,
            "unit": "ns/iter",
            "extra": "iterations: 6033\ncpu: 143121.24979280637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 166175.6051953205,
            "unit": "ns/iter",
            "extra": "iterations: 5043\ncpu: 166168.29268292684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 185607.70877193363,
            "unit": "ns/iter",
            "extra": "iterations: 4560\ncpu: 185601.8859649123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1576.8008291486292,
            "unit": "ns/iter",
            "extra": "iterations: 445276\ncpu: 1576.7326332432026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1309.5824276621747,
            "unit": "ns/iter",
            "extra": "iterations: 532018\ncpu: 1309.542534275157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1308.1964855098643,
            "unit": "ns/iter",
            "extra": "iterations: 536294\ncpu: 1308.0782182907137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1273.2333515585917,
            "unit": "ns/iter",
            "extra": "iterations: 550517\ncpu: 1273.2088200727692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2451.610156299244,
            "unit": "ns/iter",
            "extra": "iterations: 285222\ncpu: 2451.476393826565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 9123.787337662132,
            "unit": "ns/iter",
            "extra": "iterations: 89936\ncpu: 9123.524506315614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 49356.66362380411,
            "unit": "ns/iter",
            "extra": "iterations: 16651\ncpu: 49353.76253678455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 37065.635714287535,
            "unit": "ns/iter",
            "extra": "iterations: 22260\ncpu: 37063.47708894884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 36424.17004262183,
            "unit": "ns/iter",
            "extra": "iterations: 22759\ncpu: 36422.483413155154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 39682.50837196184,
            "unit": "ns/iter",
            "extra": "iterations: 21142\ncpu: 39679.855264402526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 107029.26225934895,
            "unit": "ns/iter",
            "extra": "iterations: 8259\ncpu: 107024.40973483482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 812417.9310043494,
            "unit": "ns/iter",
            "extra": "iterations: 1145\ncpu: 812370.3930130996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 668860.6640000216,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 668826.1000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 672965.4299999765,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 672951.9999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 667446.6280575459,
            "unit": "ns/iter",
            "extra": "iterations: 1390\ncpu: 667389.7841726636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 476743.7431544175,
            "unit": "ns/iter",
            "extra": "iterations: 1826\ncpu: 476728.4775465505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1025.4021957601587,
            "unit": "ns/iter",
            "extra": "iterations: 685594\ncpu: 1025.3725966096533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19618.175353071005,
            "unit": "ns/iter",
            "extra": "iterations: 41847\ncpu: 19617.267665543593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 42285.678706936815,
            "unit": "ns/iter",
            "extra": "iterations: 19767\ncpu: 42283.94799413161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 53076.39900000254,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53074.81999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 70486.16576108953,
            "unit": "ns/iter",
            "extra": "iterations: 12331\ncpu: 70482.92920282218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 88342.79355488702,
            "unit": "ns/iter",
            "extra": "iterations: 9930\ncpu: 88337.81470292025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 105476.8432582937,
            "unit": "ns/iter",
            "extra": "iterations: 8262\ncpu: 105471.30234809982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 123179.4227642319,
            "unit": "ns/iter",
            "extra": "iterations: 7134\ncpu: 123172.56798430036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 140608.61955998186,
            "unit": "ns/iter",
            "extra": "iterations: 6227\ncpu: 140602.3767464272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 843.74712416445,
            "unit": "ns/iter",
            "extra": "iterations: 829585\ncpu: 843.7061904446173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 699.8723631887375,
            "unit": "ns/iter",
            "extra": "iterations: 1000119\ncpu: 699.8694155395481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 697.0053709074097,
            "unit": "ns/iter",
            "extra": "iterations: 1003741\ncpu: 696.996037822501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 698.7326387887072,
            "unit": "ns/iter",
            "extra": "iterations: 1005071\ncpu: 698.6979029342214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1323.9570213338109,
            "unit": "ns/iter",
            "extra": "iterations: 527471\ncpu: 1323.8669045312413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6585.326351544873,
            "unit": "ns/iter",
            "extra": "iterations: 125708\ncpu: 6584.99856811023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 36361.02278292883,
            "unit": "ns/iter",
            "extra": "iterations: 22868\ncpu: 36359.09130662919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 29000.04802613399,
            "unit": "ns/iter",
            "extra": "iterations: 28776\ncpu: 28998.47789824862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 28532.548402544948,
            "unit": "ns/iter",
            "extra": "iterations: 29234\ncpu: 28531.38126838626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 28523.316404109024,
            "unit": "ns/iter",
            "extra": "iterations: 29200\ncpu: 28521.702054794587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 70531.9917189261,
            "unit": "ns/iter",
            "extra": "iterations: 12438\ncpu: 70527.5124618101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 595983.805000003,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 595928.9999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 503860.05899997597,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503859.0999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 618276.7831325448,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 618250.6024096399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 502877.8509999938,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502860.3000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 367793.0302778907,
            "unit": "ns/iter",
            "extra": "iterations: 2411\ncpu: 367762.62961426703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 506463.1359999794,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506452.3000000065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 723.1895253981788,
            "unit": "ns/iter",
            "extra": "iterations: 973574\ncpu: 723.1434898631267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6398.341889677437,
            "unit": "ns/iter",
            "extra": "iterations: 128170\ncpu: 6398.117344152344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12119.62013861302,
            "unit": "ns/iter",
            "extra": "iterations: 67959\ncpu: 12118.92758869326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18327.57119985993,
            "unit": "ns/iter",
            "extra": "iterations: 45597\ncpu: 18326.93598263037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23890.10887050354,
            "unit": "ns/iter",
            "extra": "iterations: 34812\ncpu: 23888.854418016806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 30245.55011967765,
            "unit": "ns/iter",
            "extra": "iterations: 27574\ncpu: 30243.68970769564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 36371.635386757334,
            "unit": "ns/iter",
            "extra": "iterations: 22986\ncpu: 36365.27016444772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 42418.97407500517,
            "unit": "ns/iter",
            "extra": "iterations: 19865\ncpu: 42418.3136169142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 47418.711596772795,
            "unit": "ns/iter",
            "extra": "iterations: 17479\ncpu: 47414.674752560284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 705.8728759053785,
            "unit": "ns/iter",
            "extra": "iterations: 987303\ncpu: 705.8615237672774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 545.5723369786023,
            "unit": "ns/iter",
            "extra": "iterations: 1285767\ncpu: 545.539977305371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 512.9827900818862,
            "unit": "ns/iter",
            "extra": "iterations: 1389780\ncpu: 512.971693361539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 504.7536436756642,
            "unit": "ns/iter",
            "extra": "iterations: 1386512\ncpu: 504.73122482892126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 983.2345873043357,
            "unit": "ns/iter",
            "extra": "iterations: 715806\ncpu: 983.1568888777153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2829.2563145062504,
            "unit": "ns/iter",
            "extra": "iterations: 284662\ncpu: 2829.2069190830002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13553.911133877566,
            "unit": "ns/iter",
            "extra": "iterations: 60518\ncpu: 13553.628672461122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11095.022922829907,
            "unit": "ns/iter",
            "extra": "iterations: 74031\ncpu: 11094.550931366497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10784.131538409953,
            "unit": "ns/iter",
            "extra": "iterations: 74655\ncpu: 10783.702364208713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10508.676576014394,
            "unit": "ns/iter",
            "extra": "iterations: 76998\ncpu: 10508.172939556944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 42046.837821780435,
            "unit": "ns/iter",
            "extra": "iterations: 20200\ncpu: 42046.08910891122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 285182.79075996694,
            "unit": "ns/iter",
            "extra": "iterations: 2987\ncpu: 285173.0164044168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 226806.1036175683,
            "unit": "ns/iter",
            "extra": "iterations: 3870\ncpu: 226796.3824289404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 223422.90384127057,
            "unit": "ns/iter",
            "extra": "iterations: 3931\ncpu: 223412.13431696477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 225655.2387445321,
            "unit": "ns/iter",
            "extra": "iterations: 3887\ncpu: 225650.16722408286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 112329.56503226154,
            "unit": "ns/iter",
            "extra": "iterations: 7750\ncpu: 112325.13548387056 ns\nthreads: 1"
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
        "date": 1702310515112,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1851.9505226091826,
            "unit": "ns/iter",
            "extra": "iterations: 393028\ncpu: 1851.8919771619328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 26126.56740858482,
            "unit": "ns/iter",
            "extra": "iterations: 31450\ncpu: 26124.486486486494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 54563.55393852419,
            "unit": "ns/iter",
            "extra": "iterations: 15323\ncpu: 54563.05553742739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 67804.04098803393,
            "unit": "ns/iter",
            "extra": "iterations: 12955\ncpu: 67801.69046700117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 96721.45877878534,
            "unit": "ns/iter",
            "extra": "iterations: 9728\ncpu: 96720.04523026313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 120579.26221044394,
            "unit": "ns/iter",
            "extra": "iterations: 7166\ncpu: 120574.97906782028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 142761.24285239138,
            "unit": "ns/iter",
            "extra": "iterations: 6016\ncpu: 142756.1336436171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 164327.5324899392,
            "unit": "ns/iter",
            "extra": "iterations: 5217\ncpu: 164321.5641173086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 185141.03509145117,
            "unit": "ns/iter",
            "extra": "iterations: 4702\ncpu: 185135.04891535547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1588.6087971091708,
            "unit": "ns/iter",
            "extra": "iterations: 441395\ncpu: 1588.5173144235869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1354.2522850721614,
            "unit": "ns/iter",
            "extra": "iterations: 518802\ncpu: 1354.1842552650119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1327.2846053033456,
            "unit": "ns/iter",
            "extra": "iterations: 527253\ncpu: 1327.24593316681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1267.2396408565046,
            "unit": "ns/iter",
            "extra": "iterations: 552314\ncpu: 1267.2177420814955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2417.5406971316797,
            "unit": "ns/iter",
            "extra": "iterations: 289271\ncpu: 2417.5364969181155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 9157.064000530176,
            "unit": "ns/iter",
            "extra": "iterations: 90468\ncpu: 9156.809037449711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 49797.89934393146,
            "unit": "ns/iter",
            "extra": "iterations: 16919\ncpu: 49796.73739582718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 37234.20314946574,
            "unit": "ns/iter",
            "extra": "iterations: 22353\ncpu: 37232.720440209254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 36560.50870876226,
            "unit": "ns/iter",
            "extra": "iterations: 22219\ncpu: 36559.143075746004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 39002.637017536304,
            "unit": "ns/iter",
            "extra": "iterations: 21271\ncpu: 39001.02486954078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 105525.64713747427,
            "unit": "ns/iter",
            "extra": "iterations: 8227\ncpu: 105517.94092621842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 830904.8327433665,
            "unit": "ns/iter",
            "extra": "iterations: 1130\ncpu: 830871.7699115046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 680123.216000001,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 680098.2545454546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 680229.1753246842,
            "unit": "ns/iter",
            "extra": "iterations: 1386\ncpu: 680203.8239538244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 681319.4534798547,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 681294.7252747263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 468751.1884057952,
            "unit": "ns/iter",
            "extra": "iterations: 1863\ncpu: 468738.5936661309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 998.5231107913023,
            "unit": "ns/iter",
            "extra": "iterations: 700452\ncpu: 998.476126843807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19502.94736225619,
            "unit": "ns/iter",
            "extra": "iterations: 42688\ncpu: 19502.314467766166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 41853.781828126725,
            "unit": "ns/iter",
            "extra": "iterations: 20108\ncpu: 41852.53133081352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 52437.683499999825,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52435.939999999806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 69855.24181963655,
            "unit": "ns/iter",
            "extra": "iterations: 12530\ncpu: 69852.85714285716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 87159.84148767027,
            "unit": "ns/iter",
            "extra": "iterations: 10056\ncpu: 87157.11018297527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 104520.30237555386,
            "unit": "ns/iter",
            "extra": "iterations: 8377\ncpu: 104514.08618837308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 121523.27544910787,
            "unit": "ns/iter",
            "extra": "iterations: 7181\ncpu: 121518.38184096965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 138191.57774608044,
            "unit": "ns/iter",
            "extra": "iterations: 6309\ncpu: 138188.0171184028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 842.7058118388472,
            "unit": "ns/iter",
            "extra": "iterations: 830873\ncpu: 842.6787246667051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 678.20283866312,
            "unit": "ns/iter",
            "extra": "iterations: 998005\ncpu: 678.19028962781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 656.958186386212,
            "unit": "ns/iter",
            "extra": "iterations: 1070680\ncpu: 656.9291478312847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 671.5696239301213,
            "unit": "ns/iter",
            "extra": "iterations: 1043104\ncpu: 671.5596910758699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1298.0502814979807,
            "unit": "ns/iter",
            "extra": "iterations: 541034\ncpu: 1298.0154666804756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6034.540480818293,
            "unit": "ns/iter",
            "extra": "iterations: 135311\ncpu: 6034.402967977442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 33368.56049312946,
            "unit": "ns/iter",
            "extra": "iterations: 24821\ncpu: 33367.612102655046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 28416.708264632853,
            "unit": "ns/iter",
            "extra": "iterations: 29112\ncpu: 28414.894201703853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 28109.357781996798,
            "unit": "ns/iter",
            "extra": "iterations: 29504\ncpu: 28107.65319956618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 30083.812356822385,
            "unit": "ns/iter",
            "extra": "iterations: 29247\ncpu: 30081.895579033742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 68898.2153993764,
            "unit": "ns/iter",
            "extra": "iterations: 12507\ncpu: 68894.81090589284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 596254.9420000301,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 596222.6000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 503851.8410000279,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503851.3000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 621494.7773138693,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 621463.8830897694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 503443.14899996336,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503430.29999999795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 361859.2841144767,
            "unit": "ns/iter",
            "extra": "iterations: 2411\ncpu: 361568.7266694317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 500158.2699999858,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500141.70000000036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 709.9834506150963,
            "unit": "ns/iter",
            "extra": "iterations: 987650\ncpu: 709.977826152988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6370.70268137566,
            "unit": "ns/iter",
            "extra": "iterations: 129262\ncpu: 6370.468505825366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11977.213754158254,
            "unit": "ns/iter",
            "extra": "iterations: 68532\ncpu: 11977.111422401225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17958.73467829144,
            "unit": "ns/iter",
            "extra": "iterations: 47139\ncpu: 17957.828973885746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23409.7182708453,
            "unit": "ns/iter",
            "extra": "iterations: 35740\ncpu: 23409.697817571257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29322.56059380158,
            "unit": "ns/iter",
            "extra": "iterations: 28427\ncpu: 29321.90523094234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 35407.78217738904,
            "unit": "ns/iter",
            "extra": "iterations: 23891\ncpu: 35406.51709848905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 41056.59470218328,
            "unit": "ns/iter",
            "extra": "iterations: 20348\ncpu: 41055.48456850798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 46771.30411508664,
            "unit": "ns/iter",
            "extra": "iterations: 17934\ncpu: 46769.90632318501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 713.9186398877346,
            "unit": "ns/iter",
            "extra": "iterations: 982066\ncpu: 713.9032407190533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 550.3950306156063,
            "unit": "ns/iter",
            "extra": "iterations: 1275329\ncpu: 550.3812741653306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 506.61685409550444,
            "unit": "ns/iter",
            "extra": "iterations: 1303339\ncpu: 506.60472831703936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 506.5287635525343,
            "unit": "ns/iter",
            "extra": "iterations: 1379541\ncpu: 506.5283307998835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 985.687875153488,
            "unit": "ns/iter",
            "extra": "iterations: 712042\ncpu: 985.6518295269074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2681.2603936311502,
            "unit": "ns/iter",
            "extra": "iterations: 298452\ncpu: 2681.203342581047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 12944.024121657545,
            "unit": "ns/iter",
            "extra": "iterations: 62931\ncpu: 12943.627147193009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10548.808073737386,
            "unit": "ns/iter",
            "extra": "iterations: 77139\ncpu: 10548.609652704741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10264.546612513734,
            "unit": "ns/iter",
            "extra": "iterations: 79528\ncpu: 10264.274217885626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10089.960880075387,
            "unit": "ns/iter",
            "extra": "iterations: 81084\ncpu: 10089.82536628687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40439.81762485972,
            "unit": "ns/iter",
            "extra": "iterations: 20403\ncpu: 40438.42082046774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 277362.36354961165,
            "unit": "ns/iter",
            "extra": "iterations: 3144\ncpu: 277355.4389312978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 223401.79295379177,
            "unit": "ns/iter",
            "extra": "iterations: 3917\ncpu: 223394.25580801463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 221455.93213472288,
            "unit": "ns/iter",
            "extra": "iterations: 3949\ncpu: 221433.52747530772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 222009.3151371293,
            "unit": "ns/iter",
            "extra": "iterations: 3792\ncpu: 222001.76687763786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 112990.46716360324,
            "unit": "ns/iter",
            "extra": "iterations: 7781\ncpu: 112988.94743606343 ns\nthreads: 1"
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
        "date": 1702310735470,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1806.7828245668913,
            "unit": "ns/iter",
            "extra": "iterations: 377842\ncpu: 1806.6760709502914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 26388.33415778007,
            "unit": "ns/iter",
            "extra": "iterations: 31132\ncpu: 26386.64396762174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 54239.441478573404,
            "unit": "ns/iter",
            "extra": "iterations: 15285\ncpu: 54236.34936211972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 67384.5394013426,
            "unit": "ns/iter",
            "extra": "iterations: 13096\ncpu: 67380.94838118511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 98059.37831201892,
            "unit": "ns/iter",
            "extra": "iterations: 9775\ncpu: 98051.6010230179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 120820.3836900244,
            "unit": "ns/iter",
            "extra": "iterations: 7149\ncpu: 120813.16268009505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 143677.70584318013,
            "unit": "ns/iter",
            "extra": "iterations: 6007\ncpu: 143668.2037622773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 166577.44812875683,
            "unit": "ns/iter",
            "extra": "iterations: 5157\ncpu: 166567.7913515611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 186034.55304497655,
            "unit": "ns/iter",
            "extra": "iterations: 4647\ncpu: 186020.40025823112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1618.7704878574211,
            "unit": "ns/iter",
            "extra": "iterations: 432073\ncpu: 1618.720910586865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1310.9636765334485,
            "unit": "ns/iter",
            "extra": "iterations: 535907\ncpu: 1310.8962935733252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1307.2659537668508,
            "unit": "ns/iter",
            "extra": "iterations: 534811\ncpu: 1307.173936212982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1263.407743371248,
            "unit": "ns/iter",
            "extra": "iterations: 554513\ncpu: 1263.2894089047518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2449.9001085547284,
            "unit": "ns/iter",
            "extra": "iterations: 284649\ncpu: 2449.731423612938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 9185.423824256268,
            "unit": "ns/iter",
            "extra": "iterations: 89858\ncpu: 9184.848316232286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 50050.83336388631,
            "unit": "ns/iter",
            "extra": "iterations: 16365\ncpu: 50047.6810265811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 37516.59566182034,
            "unit": "ns/iter",
            "extra": "iterations: 22083\ncpu: 37513.13227369483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 36890.12627273094,
            "unit": "ns/iter",
            "extra": "iterations: 22491\ncpu: 36889.33795740529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 39355.96832061024,
            "unit": "ns/iter",
            "extra": "iterations: 20960\ncpu: 39353.363549618305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 105993.89913022252,
            "unit": "ns/iter",
            "extra": "iterations: 8278\ncpu: 105987.859386325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 819240.0521201438,
            "unit": "ns/iter",
            "extra": "iterations: 1132\ncpu: 819178.6219081279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 679670.0539956773,
            "unit": "ns/iter",
            "extra": "iterations: 1389\ncpu: 679625.1979841632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 676353.9251259763,
            "unit": "ns/iter",
            "extra": "iterations: 1389\ncpu: 676309.7912167027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 665823.434750731,
            "unit": "ns/iter",
            "extra": "iterations: 1364\ncpu: 665774.8533724337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 468885.2037433096,
            "unit": "ns/iter",
            "extra": "iterations: 1870\ncpu: 468836.0427807484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1010.3770949117267,
            "unit": "ns/iter",
            "extra": "iterations: 694361\ncpu: 1010.3652134840485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19599.357676407,
            "unit": "ns/iter",
            "extra": "iterations: 42572\ncpu: 19598.886592126244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 42238.74311972656,
            "unit": "ns/iter",
            "extra": "iterations: 19912\ncpu: 42237.695861791886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 52789.51149999784,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52788.10999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 70436.16622521798,
            "unit": "ns/iter",
            "extra": "iterations: 12459\ncpu: 70435.25965165754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 87853.03088842085,
            "unit": "ns/iter",
            "extra": "iterations: 9939\ncpu: 87850.14588992833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 104630.56291390704,
            "unit": "ns/iter",
            "extra": "iterations: 8305\ncpu: 104621.61348585165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 121630.16269343703,
            "unit": "ns/iter",
            "extra": "iterations: 7173\ncpu: 121619.1272828664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 140202.83016759614,
            "unit": "ns/iter",
            "extra": "iterations: 6265\ncpu: 140194.39744612912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 841.6377298475815,
            "unit": "ns/iter",
            "extra": "iterations: 833759\ncpu: 841.5618901864948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 700.7852174953667,
            "unit": "ns/iter",
            "extra": "iterations: 994527\ncpu: 700.7264760031636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 689.0770664083677,
            "unit": "ns/iter",
            "extra": "iterations: 1013788\ncpu: 689.0356760979668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 691.6834978584764,
            "unit": "ns/iter",
            "extra": "iterations: 1014941\ncpu: 691.6445389436375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1328.4715694400866,
            "unit": "ns/iter",
            "extra": "iterations: 524805\ncpu: 1328.4278922647425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6617.118242225445,
            "unit": "ns/iter",
            "extra": "iterations: 126114\ncpu: 6616.619090663989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 35710.68583743325,
            "unit": "ns/iter",
            "extra": "iterations: 22969\ncpu: 35709.28642953541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 28449.352392064866,
            "unit": "ns/iter",
            "extra": "iterations: 29138\ncpu: 28448.43160134523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 28018.56518352987,
            "unit": "ns/iter",
            "extra": "iterations: 29532\ncpu: 28017.85520791005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 28100.740934402133,
            "unit": "ns/iter",
            "extra": "iterations: 29452\ncpu: 28100.084883879008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 69591.42496857277,
            "unit": "ns/iter",
            "extra": "iterations: 12728\ncpu: 69590.46983029548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 583290.6469999842,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 583251.1999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 607597.0749116489,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 607584.3109540627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 609703.0330520319,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 609681.2939521752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 602585.597603932,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 602561.5926708948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 362597.7440230787,
            "unit": "ns/iter",
            "extra": "iterations: 2426\ncpu: 362590.18961252953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 501786.60400001716,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501780.00000000367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 704.9947020548016,
            "unit": "ns/iter",
            "extra": "iterations: 992649\ncpu: 704.9858509906337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6253.180219746552,
            "unit": "ns/iter",
            "extra": "iterations: 130696\ncpu: 6253.035287996614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11951.203631647568,
            "unit": "ns/iter",
            "extra": "iterations: 68619\ncpu: 11950.904268497088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17990.48489851234,
            "unit": "ns/iter",
            "extra": "iterations: 47247\ncpu: 17990.238533663392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23608.534874938763,
            "unit": "ns/iter",
            "extra": "iterations: 34423\ncpu: 23607.776777154915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29795.12883457393,
            "unit": "ns/iter",
            "extra": "iterations: 28230\ncpu: 29794.38540559694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 35723.14907175287,
            "unit": "ns/iter",
            "extra": "iterations: 23539\ncpu: 35722.42661115616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 41767.575453319296,
            "unit": "ns/iter",
            "extra": "iterations: 20019\ncpu: 41766.24706528786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 48514.08580036037,
            "unit": "ns/iter",
            "extra": "iterations: 17261\ncpu: 48513.43491107102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 700.3811652828513,
            "unit": "ns/iter",
            "extra": "iterations: 979436\ncpu: 700.3512225403151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 507.4508365394604,
            "unit": "ns/iter",
            "extra": "iterations: 1379134\ncpu: 507.4081271290577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 500.7875123622227,
            "unit": "ns/iter",
            "extra": "iterations: 1404477\ncpu: 500.7631310445136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 488.64150459649494,
            "unit": "ns/iter",
            "extra": "iterations: 1411940\ncpu: 488.61141408275023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 986.8929864497441,
            "unit": "ns/iter",
            "extra": "iterations: 723086\ncpu: 986.8329631606707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2670.1723310316993,
            "unit": "ns/iter",
            "extra": "iterations: 301240\ncpu: 2670.092285221067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13071.483667777547,
            "unit": "ns/iter",
            "extra": "iterations: 62392\ncpu: 13070.858443390176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10704.909761776038,
            "unit": "ns/iter",
            "extra": "iterations: 76021\ncpu: 10703.977848226257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10519.119450806635,
            "unit": "ns/iter",
            "extra": "iterations: 77714\ncpu: 10518.152456442906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10291.982045640254,
            "unit": "ns/iter",
            "extra": "iterations: 79535\ncpu: 10291.25542214126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40864.484289719454,
            "unit": "ns/iter",
            "extra": "iterations: 20337\ncpu: 40860.884102866126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 277776.74208444665,
            "unit": "ns/iter",
            "extra": "iterations: 3032\ncpu: 277768.931398415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 221984.27838455964,
            "unit": "ns/iter",
            "extra": "iterations: 3937\ncpu: 221969.2405384778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 221937.55734406237,
            "unit": "ns/iter",
            "extra": "iterations: 3976\ncpu: 221921.10160965973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 220778.0113837518,
            "unit": "ns/iter",
            "extra": "iterations: 3953\ncpu: 220761.6746774609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 112404.61108260829,
            "unit": "ns/iter",
            "extra": "iterations: 7796\ncpu: 112402.27039507394 ns\nthreads: 1"
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
        "date": 1702335675096,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1844.6623315336926,
            "unit": "ns/iter",
            "extra": "iterations: 375075\ncpu: 1844.626008131707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 27506.591684504052,
            "unit": "ns/iter",
            "extra": "iterations: 30834\ncpu: 27505.536096516837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 55052.81927791134,
            "unit": "ns/iter",
            "extra": "iterations: 15012\ncpu: 55051.29896083134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 68564.35570206342,
            "unit": "ns/iter",
            "extra": "iterations: 12741\ncpu: 68563.71556392747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 98192.72111801228,
            "unit": "ns/iter",
            "extra": "iterations: 9660\ncpu: 98191.74948240168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 121366.16579800523,
            "unit": "ns/iter",
            "extra": "iterations: 7099\ncpu: 121363.85406395257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 145122.05005004606,
            "unit": "ns/iter",
            "extra": "iterations: 5994\ncpu: 145115.73239906566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 169219.07510646703,
            "unit": "ns/iter",
            "extra": "iterations: 5166\ncpu: 169216.08594657364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 186317.98284959712,
            "unit": "ns/iter",
            "extra": "iterations: 4548\ncpu: 186306.11257695698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1543.9917461602831,
            "unit": "ns/iter",
            "extra": "iterations: 454334\ncpu: 1543.9154894857063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1248.3816317066676,
            "unit": "ns/iter",
            "extra": "iterations: 560640\ncpu: 1248.3497431506846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1249.2564356930225,
            "unit": "ns/iter",
            "extra": "iterations: 559458\ncpu: 1249.2301477501442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1265.316382989764,
            "unit": "ns/iter",
            "extra": "iterations: 555033\ncpu: 1265.263506854548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2439.0282748050404,
            "unit": "ns/iter",
            "extra": "iterations: 287040\ncpu: 2438.8844760312163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 9189.555209364698,
            "unit": "ns/iter",
            "extra": "iterations: 89867\ncpu: 9189.235203133514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 50117.74569254006,
            "unit": "ns/iter",
            "extra": "iterations: 16425\ncpu: 50114.563165905594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 37089.51815794135,
            "unit": "ns/iter",
            "extra": "iterations: 22084\ncpu: 37087.8916862887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 36276.27196689616,
            "unit": "ns/iter",
            "extra": "iterations: 22716\ncpu: 36274.00510653291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 38977.92823757114,
            "unit": "ns/iter",
            "extra": "iterations: 21181\ncpu: 38975.96902884659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 105608.09038668186,
            "unit": "ns/iter",
            "extra": "iterations: 8353\ncpu: 105601.79576200183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 817230.0721831005,
            "unit": "ns/iter",
            "extra": "iterations: 1136\ncpu: 817187.1478873239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 674678.6900796449,
            "unit": "ns/iter",
            "extra": "iterations: 1381\ncpu: 674640.7675597403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 668957.1130000332,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 668944.0000000034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 673950.472845753,
            "unit": "ns/iter",
            "extra": "iterations: 1381\ncpu: 673921.7233888488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 472466.72185793944,
            "unit": "ns/iter",
            "extra": "iterations: 1830\ncpu: 472443.1147540986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1004.8426845458146,
            "unit": "ns/iter",
            "extra": "iterations: 689964\ncpu: 1004.7864816135335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19597.914194592184,
            "unit": "ns/iter",
            "extra": "iterations: 42643\ncpu: 19597.106207349392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 41939.551301300744,
            "unit": "ns/iter",
            "extra": "iterations: 19980\ncpu: 41938.2232232232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 52543.34679999602,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52541.78999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 69583.19930912336,
            "unit": "ns/iter",
            "extra": "iterations: 12448\ncpu: 69578.41420308502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 86964.70792767915,
            "unit": "ns/iter",
            "extra": "iterations: 10066\ncpu: 86961.17623683695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 103072.93427895925,
            "unit": "ns/iter",
            "extra": "iterations: 8460\ncpu: 103067.95508274216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 121845.6340619782,
            "unit": "ns/iter",
            "extra": "iterations: 7228\ncpu: 121840.97952407325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 137871.1955280672,
            "unit": "ns/iter",
            "extra": "iterations: 6306\ncpu: 137863.0510624805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 837.1163273177159,
            "unit": "ns/iter",
            "extra": "iterations: 827123\ncpu: 837.0793702992231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 688.5704807454754,
            "unit": "ns/iter",
            "extra": "iterations: 1031835\ncpu: 688.5455523412143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 677.262554538664,
            "unit": "ns/iter",
            "extra": "iterations: 1034128\ncpu: 677.2503984032952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 687.7931162236938,
            "unit": "ns/iter",
            "extra": "iterations: 1017581\ncpu: 687.7834786616459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1364.6544141822244,
            "unit": "ns/iter",
            "extra": "iterations: 523132\ncpu: 1364.561143267854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 6512.035097247401,
            "unit": "ns/iter",
            "extra": "iterations: 127047\ncpu: 6511.788550693805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 36129.02914798219,
            "unit": "ns/iter",
            "extra": "iterations: 23192\ncpu: 36126.685926181315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 28754.77510691276,
            "unit": "ns/iter",
            "extra": "iterations: 28996\ncpu: 28753.659125396764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 28208.964565194772,
            "unit": "ns/iter",
            "extra": "iterations: 29519\ncpu: 28208.03889020634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 28252.439184835453,
            "unit": "ns/iter",
            "extra": "iterations: 29491\ncpu: 28252.17184903862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 69820.70381113124,
            "unit": "ns/iter",
            "extra": "iterations: 12411\ncpu: 69819.59552010329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 592725.5990000049,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592694.6999999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 500726.59400001384,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500678.90000000404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 615591.1124219112,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 615560.0971547557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 502819.18700000003,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 502775.90000000317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 366543.5448449273,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 366538.9354568329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 622215.725000014,
            "unit": "ns/iter",
            "extra": "iterations: 1400\ncpu: 622187.357142856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 723.9417613651124,
            "unit": "ns/iter",
            "extra": "iterations: 965785\ncpu: 723.9349337585481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6506.341058257468,
            "unit": "ns/iter",
            "extra": "iterations: 127984\ncpu: 6506.283597949727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 12241.594459983071,
            "unit": "ns/iter",
            "extra": "iterations: 66859\ncpu: 12241.45589972931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 18643.206501453293,
            "unit": "ns/iter",
            "extra": "iterations: 46082\ncpu: 18642.736860379297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 24352.594732972015,
            "unit": "ns/iter",
            "extra": "iterations: 33985\ncpu: 24352.32896866273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 30586.525325508126,
            "unit": "ns/iter",
            "extra": "iterations: 27265\ncpu: 30586.15074271034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 36963.08860144745,
            "unit": "ns/iter",
            "extra": "iterations: 22652\ncpu: 36963.062864206244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 42693.4789707566,
            "unit": "ns/iter",
            "extra": "iterations: 19354\ncpu: 42692.57517825794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 48439.18114602695,
            "unit": "ns/iter",
            "extra": "iterations: 17312\ncpu: 48437.43646025874 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 700.8697954226415,
            "unit": "ns/iter",
            "extra": "iterations: 1001186\ncpu: 700.8606792344281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 582.6735188609592,
            "unit": "ns/iter",
            "extra": "iterations: 1295692\ncpu: 582.6664824665093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 532.2858822475906,
            "unit": "ns/iter",
            "extra": "iterations: 1317476\ncpu: 532.2512895870619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 531.5249824880124,
            "unit": "ns/iter",
            "extra": "iterations: 1316242\ncpu: 531.5154811957098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1017.8081291032732,
            "unit": "ns/iter",
            "extra": "iterations: 688317\ncpu: 1017.77291567693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2815.743053995728,
            "unit": "ns/iter",
            "extra": "iterations: 284912\ncpu: 2815.717835682576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13390.376523245504,
            "unit": "ns/iter",
            "extra": "iterations: 61218\ncpu: 13390.087882648817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 11087.702260883967,
            "unit": "ns/iter",
            "extra": "iterations: 74263\ncpu: 11086.005143880491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10799.230002505421,
            "unit": "ns/iter",
            "extra": "iterations: 75847\ncpu: 10799.053357417002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10519.177352431208,
            "unit": "ns/iter",
            "extra": "iterations: 77845\ncpu: 10518.786049200318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40604.072096589975,
            "unit": "ns/iter",
            "extra": "iterations: 20209\ncpu: 40602.187144341646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 280383.66082264506,
            "unit": "ns/iter",
            "extra": "iterations: 2966\ncpu: 280326.53405259387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 226453.6759689902,
            "unit": "ns/iter",
            "extra": "iterations: 3870\ncpu: 226447.4677002586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 224837.40512430543,
            "unit": "ns/iter",
            "extra": "iterations: 3942\ncpu: 224831.20243531105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 225584.21595029204,
            "unit": "ns/iter",
            "extra": "iterations: 3862\ncpu: 225572.5530813058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 114786.0670089486,
            "unit": "ns/iter",
            "extra": "iterations: 7596\ncpu: 114783.13586097994 ns\nthreads: 1"
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
          "id": "a2aa24ad8dcca377204bcb80d394583f3bf05790",
          "message": "Improve SBIND",
          "timestamp": "2023-12-12T05:15:46+03:00",
          "tree_id": "3567c5d440461097db599cb58c98b436a9cde0d7",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2aa24ad8dcca377204bcb80d394583f3bf05790"
        },
        "date": 1702347579321,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1751.499266786061,
            "unit": "ns/iter",
            "extra": "iterations: 394837\ncpu: 1751.4252716943956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 26089.70731245338,
            "unit": "ns/iter",
            "extra": "iterations: 31672\ncpu: 26089.287067441273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 54408.91396939159,
            "unit": "ns/iter",
            "extra": "iterations: 15355\ncpu: 54408.80494952784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 67742.86963249362,
            "unit": "ns/iter",
            "extra": "iterations: 12925\ncpu: 67742.10444874277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 98198.88383369283,
            "unit": "ns/iter",
            "extra": "iterations: 9693\ncpu: 98196.55421438153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 121900.02253954865,
            "unit": "ns/iter",
            "extra": "iterations: 7143\ncpu: 121899.83200335989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 144628.21116138715,
            "unit": "ns/iter",
            "extra": "iterations: 5967\ncpu: 144628.08781632298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 168137.84185399013,
            "unit": "ns/iter",
            "extra": "iterations: 5027\ncpu: 168135.42868510052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 187175.9784520682,
            "unit": "ns/iter",
            "extra": "iterations: 4548\ncpu: 187174.0985048374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1622.3735293713212,
            "unit": "ns/iter",
            "extra": "iterations: 436038\ncpu: 1622.3572257463788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1190.6662513605022,
            "unit": "ns/iter",
            "extra": "iterations: 552203\ncpu: 1190.5485844879531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1203.7588036811044,
            "unit": "ns/iter",
            "extra": "iterations: 582654\ncpu: 1203.6924143659876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1226.8671283479935,
            "unit": "ns/iter",
            "extra": "iterations: 572545\ncpu: 1226.8240924294141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2338.2192556076316,
            "unit": "ns/iter",
            "extra": "iterations: 304275\ncpu: 2338.1888094651185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 9635.662424313083,
            "unit": "ns/iter",
            "extra": "iterations: 85880\ncpu: 9635.56707033069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 49489.706510651784,
            "unit": "ns/iter",
            "extra": "iterations: 16665\ncpu: 49489.624962496295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 37314.86205279667,
            "unit": "ns/iter",
            "extra": "iterations: 21327\ncpu: 37314.01978712432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 38162.694676312516,
            "unit": "ns/iter",
            "extra": "iterations: 21564\ncpu: 38162.632164719056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 38415.59402706544,
            "unit": "ns/iter",
            "extra": "iterations: 21430\ncpu: 38415.566962202516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 106152.28454698324,
            "unit": "ns/iter",
            "extra": "iterations: 8322\ncpu: 106149.62749339122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 809730.5853018392,
            "unit": "ns/iter",
            "extra": "iterations: 1143\ncpu: 809706.5616797904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 668266.5343347662,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 668254.0057224607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 672204.302527084,
            "unit": "ns/iter",
            "extra": "iterations: 1385\ncpu: 672190.324909748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 673565.7185238783,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 673543.6324167876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 476304.618142313,
            "unit": "ns/iter",
            "extra": "iterations: 1841\ncpu: 476300.1629549167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 671892.0475504373,
            "unit": "ns/iter",
            "extra": "iterations: 1388\ncpu: 671845.8213256475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1009.7283699788188,
            "unit": "ns/iter",
            "extra": "iterations: 696948\ncpu: 1009.7142111032651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 20470.91868078945,
            "unit": "ns/iter",
            "extra": "iterations: 41540\ncpu: 20470.888300433307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 43291.78981087639,
            "unit": "ns/iter",
            "extra": "iterations: 19511\ncpu: 43289.72887089337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 54435.15960000127,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54435.129999999896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 71988.35989397894,
            "unit": "ns/iter",
            "extra": "iterations: 12073\ncpu: 71981.71125652302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 89845.36896800027,
            "unit": "ns/iter",
            "extra": "iterations: 9719\ncpu: 89841.86644716561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 107260.78467243753,
            "unit": "ns/iter",
            "extra": "iterations: 8090\ncpu: 107252.84301606975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 124668.31850050263,
            "unit": "ns/iter",
            "extra": "iterations: 6989\ncpu: 124661.01015882102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 139485.90530426268,
            "unit": "ns/iter",
            "extra": "iterations: 6146\ncpu: 139475.3498210222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 832.4068344551001,
            "unit": "ns/iter",
            "extra": "iterations: 837960\ncpu: 832.4060814358642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 685.8521236918405,
            "unit": "ns/iter",
            "extra": "iterations: 1019663\ncpu: 685.8417928276259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 673.921141867896,
            "unit": "ns/iter",
            "extra": "iterations: 1037458\ncpu: 673.9144138847096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 682.6531861532244,
            "unit": "ns/iter",
            "extra": "iterations: 1010372\ncpu: 682.6531218204748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1330.0629562372599,
            "unit": "ns/iter",
            "extra": "iterations: 527001\ncpu: 1330.0471915613082 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 7093.912506700322,
            "unit": "ns/iter",
            "extra": "iterations: 117529\ncpu: 7093.822801180998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 35015.004481271186,
            "unit": "ns/iter",
            "extra": "iterations: 23654\ncpu: 35014.37389025103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 27072.33218283316,
            "unit": "ns/iter",
            "extra": "iterations: 31001\ncpu: 27071.013838263425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 28848.01245706022,
            "unit": "ns/iter",
            "extra": "iterations: 28819\ncpu: 28846.13622957064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 28966.63581580074,
            "unit": "ns/iter",
            "extra": "iterations: 28708\ncpu: 28966.284659328456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 70403.11696896359,
            "unit": "ns/iter",
            "extra": "iterations: 12405\ncpu: 70396.25151148692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 598970.1020000097,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 598908.7999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 504843.63099999994,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504818.3999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 631260.5539872942,
            "unit": "ns/iter",
            "extra": "iterations: 1417\ncpu: 631217.9957657006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 505601.6789999944,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505590.699999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 366155.5574592545,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 366135.81278729555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 620471.0935046269,
            "unit": "ns/iter",
            "extra": "iterations: 1401\ncpu: 620427.9086366879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 711.5042554659341,
            "unit": "ns/iter",
            "extra": "iterations: 985556\ncpu: 711.4309080356671 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6242.942304204574,
            "unit": "ns/iter",
            "extra": "iterations: 132332\ncpu: 6242.474987153541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11820.157600531405,
            "unit": "ns/iter",
            "extra": "iterations: 69232\ncpu: 11819.505431014597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17736.310705123717,
            "unit": "ns/iter",
            "extra": "iterations: 47949\ncpu: 17734.991344970716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23364.239815098954,
            "unit": "ns/iter",
            "extra": "iterations: 35911\ncpu: 23362.94728634682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 29554.89053474573,
            "unit": "ns/iter",
            "extra": "iterations: 28219\ncpu: 29552.5993125201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 35580.27810550512,
            "unit": "ns/iter",
            "extra": "iterations: 23563\ncpu: 35578.16491957702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 40511.783378544606,
            "unit": "ns/iter",
            "extra": "iterations: 20275\ncpu: 40509.030826140566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 46249.3707790408,
            "unit": "ns/iter",
            "extra": "iterations: 18035\ncpu: 46248.43360133086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 629.5983064560014,
            "unit": "ns/iter",
            "extra": "iterations: 1049397\ncpu: 629.5796538393018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 489.6799907358275,
            "unit": "ns/iter",
            "extra": "iterations: 1416209\ncpu: 489.6628958013989 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 494.9318255458422,
            "unit": "ns/iter",
            "extra": "iterations: 1413506\ncpu: 494.9053629768821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 511.9268329399299,
            "unit": "ns/iter",
            "extra": "iterations: 1368430\ncpu: 511.91540670695764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 928.8430324317256,
            "unit": "ns/iter",
            "extra": "iterations: 755895\ncpu: 928.8049266101743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2858.3289571562,
            "unit": "ns/iter",
            "extra": "iterations: 279620\ncpu: 2858.29804734998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13423.318209003379,
            "unit": "ns/iter",
            "extra": "iterations: 61865\ncpu: 13422.497373312783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10808.914711668433,
            "unit": "ns/iter",
            "extra": "iterations: 74723\ncpu: 10807.978801707704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10403.431003333571,
            "unit": "ns/iter",
            "extra": "iterations: 78598\ncpu: 10402.56495076211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10060.070244524435,
            "unit": "ns/iter",
            "extra": "iterations: 79992\ncpu: 10059.587208720903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40280.301101353296,
            "unit": "ns/iter",
            "extra": "iterations: 20611\ncpu: 40277.25486390792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 270124.1167741933,
            "unit": "ns/iter",
            "extra": "iterations: 3100\ncpu: 270104.03225806885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 215794.8424556201,
            "unit": "ns/iter",
            "extra": "iterations: 4056\ncpu: 215775.61637080996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 214059.03436341707,
            "unit": "ns/iter",
            "extra": "iterations: 4045\ncpu: 214058.86279357233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 213596.74865918845,
            "unit": "ns/iter",
            "extra": "iterations: 4102\ncpu: 213583.56899073572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 111046.45249779867,
            "unit": "ns/iter",
            "extra": "iterations: 7947\ncpu: 111042.22977224027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 204531.02845812828,
            "unit": "ns/iter",
            "extra": "iterations: 4287\ncpu: 204525.70562164387 ns\nthreads: 1"
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
          "id": "d824467ac31a85d06f63e9a517ac86072b088bd6",
          "message": "try build gcc 12 2",
          "timestamp": "2023-12-12T13:34:04+03:00",
          "tree_id": "0a304358dc9ec1fc676e609a6fe50a05eed68bd2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d824467ac31a85d06f63e9a517ac86072b088bd6"
        },
        "date": 1702377467756,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1764.1944146523356,
            "unit": "ns/iter",
            "extra": "iterations: 386941\ncpu: 1764.1526744387388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 26070.952876106905,
            "unit": "ns/iter",
            "extra": "iterations: 31640\ncpu: 26070.319216182044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 53638.15488063887,
            "unit": "ns/iter",
            "extra": "iterations: 15541\ncpu: 53637.24985522167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 67564.87776582655,
            "unit": "ns/iter",
            "extra": "iterations: 13016\ncpu: 67563.60633066997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 96393.19680259099,
            "unit": "ns/iter",
            "extra": "iterations: 9883\ncpu: 96391.79398967925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 119686.99613686751,
            "unit": "ns/iter",
            "extra": "iterations: 7248\ncpu: 119683.02980132446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 142797.93775796716,
            "unit": "ns/iter",
            "extra": "iterations: 6057\ncpu: 142794.79940564636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 162841.71376182255,
            "unit": "ns/iter",
            "extra": "iterations: 5181\ncpu: 162838.91140706436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 185023.99978581903,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 185019.8543585351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1600.9086749433156,
            "unit": "ns/iter",
            "extra": "iterations: 437536\ncpu: 1600.8947835149568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1271.1261315357108,
            "unit": "ns/iter",
            "extra": "iterations: 551242\ncpu: 1271.1148642519963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1279.7431634654506,
            "unit": "ns/iter",
            "extra": "iterations: 547975\ncpu: 1279.7379442492804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1267.1810269752496,
            "unit": "ns/iter",
            "extra": "iterations: 552321\ncpu: 1267.1737992942517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2416.5515047232007,
            "unit": "ns/iter",
            "extra": "iterations: 290585\ncpu: 2416.5221880000645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 9641.758678741386,
            "unit": "ns/iter",
            "extra": "iterations: 86130\ncpu: 9641.733426216188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 50591.169892865444,
            "unit": "ns/iter",
            "extra": "iterations: 16428\ncpu: 50589.11005600197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 37646.13133545151,
            "unit": "ns/iter",
            "extra": "iterations: 21723\ncpu: 37645.1595083552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 39909.02298905549,
            "unit": "ns/iter",
            "extra": "iterations: 20923\ncpu: 39907.50848348711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 39278.8106960551,
            "unit": "ns/iter",
            "extra": "iterations: 20961\ncpu: 39277.00014312298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 105066.02389159576,
            "unit": "ns/iter",
            "extra": "iterations: 8413\ncpu: 105062.18946867957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 805940.7424242538,
            "unit": "ns/iter",
            "extra": "iterations: 1122\ncpu: 805895.0089126546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 670299.2040000026,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 670276.2 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 664377.3704235487,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 664344.8671931097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 662372.3853868266,
            "unit": "ns/iter",
            "extra": "iterations: 1396\ncpu: 662343.1232091702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 472717.03035230987,
            "unit": "ns/iter",
            "extra": "iterations: 1845\ncpu: 472685.040650406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 668262.4914163123,
            "unit": "ns/iter",
            "extra": "iterations: 1398\ncpu: 668231.4735336204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 988.7687248198957,
            "unit": "ns/iter",
            "extra": "iterations: 708645\ncpu: 988.7262310465712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19720.40400207379,
            "unit": "ns/iter",
            "extra": "iterations: 42428\ncpu: 19719.72282454984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 42578.719814085285,
            "unit": "ns/iter",
            "extra": "iterations: 19794\ncpu: 42576.69495806805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 53886.134200001834,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53884.449999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 71614.93724228897,
            "unit": "ns/iter",
            "extra": "iterations: 12126\ncpu: 71613.96998185708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 89393.10345886338,
            "unit": "ns/iter",
            "extra": "iterations: 9772\ncpu: 89388.98894801483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 106802.8990284085,
            "unit": "ns/iter",
            "extra": "iterations: 8131\ncpu: 106797.56487516864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 122929.8517689861,
            "unit": "ns/iter",
            "extra": "iterations: 7151\ncpu: 122927.19899314868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 139246.4130434776,
            "unit": "ns/iter",
            "extra": "iterations: 6256\ncpu: 139239.9136828644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 823.5754289994645,
            "unit": "ns/iter",
            "extra": "iterations: 850409\ncpu: 823.5412607345401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 689.8551938582649,
            "unit": "ns/iter",
            "extra": "iterations: 1015613\ncpu: 689.8286059749095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 683.4722918866352,
            "unit": "ns/iter",
            "extra": "iterations: 1024754\ncpu: 683.4507598896846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 677.9722190198567,
            "unit": "ns/iter",
            "extra": "iterations: 1032217\ncpu: 677.9482415034859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1370.2479283477883,
            "unit": "ns/iter",
            "extra": "iterations: 520961\ncpu: 1370.2156207470346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 7048.19700514718,
            "unit": "ns/iter",
            "extra": "iterations: 117535\ncpu: 7048.038456629929 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 36634.60211894676,
            "unit": "ns/iter",
            "extra": "iterations: 22464\ncpu: 36633.64939458708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 26864.63189303793,
            "unit": "ns/iter",
            "extra": "iterations: 30665\ncpu: 26863.812163704533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 28720.2651623484,
            "unit": "ns/iter",
            "extra": "iterations: 28673\ncpu: 28718.662156035167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 28856.845094484055,
            "unit": "ns/iter",
            "extra": "iterations: 28682\ncpu: 28855.714385328698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 69949.8353110968,
            "unit": "ns/iter",
            "extra": "iterations: 12472\ncpu: 69947.89929441935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 599150.1390000167,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 599128.7000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 500615.5129999854,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500587.50000000175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 507005.76200000563,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506981.6999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 501019.8310000078,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501005.10000000044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 365105.1046269265,
            "unit": "ns/iter",
            "extra": "iterations: 2399\ncpu: 365094.16423509765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 614211.496801716,
            "unit": "ns/iter",
            "extra": "iterations: 1407\ncpu: 614202.5586353923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 701.3241362701773,
            "unit": "ns/iter",
            "extra": "iterations: 1000718\ncpu: 701.3271471083712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 6056.090383154987,
            "unit": "ns/iter",
            "extra": "iterations: 134306\ncpu: 6055.829225797804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11540.16435344986,
            "unit": "ns/iter",
            "extra": "iterations: 70969\ncpu: 11540.018881483506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17450.53669076362,
            "unit": "ns/iter",
            "extra": "iterations: 49522\ncpu: 17449.614312830738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23068.984103410574,
            "unit": "ns/iter",
            "extra": "iterations: 36360\ncpu: 23068.87788778882 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 28745.207845812354,
            "unit": "ns/iter",
            "extra": "iterations: 29315\ncpu: 28744.69384274263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 34246.249641965995,
            "unit": "ns/iter",
            "extra": "iterations: 24439\ncpu: 34245.61561438685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39738.03043002071,
            "unit": "ns/iter",
            "extra": "iterations: 20999\ncpu: 39737.335111195825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45024.785343989526,
            "unit": "ns/iter",
            "extra": "iterations: 18518\ncpu: 45023.31785290018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 681.8818477511089,
            "unit": "ns/iter",
            "extra": "iterations: 1037932\ncpu: 681.8744387878976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 519.9850640975686,
            "unit": "ns/iter",
            "extra": "iterations: 1345215\ncpu: 519.9826793486551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 523.5268180800433,
            "unit": "ns/iter",
            "extra": "iterations: 1321944\ncpu: 523.5211173846997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 523.5684192212137,
            "unit": "ns/iter",
            "extra": "iterations: 1362183\ncpu: 523.5641613498331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 978.0972106865026,
            "unit": "ns/iter",
            "extra": "iterations: 710354\ncpu: 978.0591085571399 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2809.7440050056775,
            "unit": "ns/iter",
            "extra": "iterations: 286072\ncpu: 2809.703151654159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13466.716919867436,
            "unit": "ns/iter",
            "extra": "iterations: 59439\ncpu: 13466.251114588087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10673.19225068249,
            "unit": "ns/iter",
            "extra": "iterations: 76910\ncpu: 10672.930698218734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10693.654689650379,
            "unit": "ns/iter",
            "extra": "iterations: 76285\ncpu: 10693.477092482075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10289.128611985945,
            "unit": "ns/iter",
            "extra": "iterations: 77139\ncpu: 10288.892777972222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 40724.30381491609,
            "unit": "ns/iter",
            "extra": "iterations: 20315\ncpu: 40723.49003199619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 282770.018707483,
            "unit": "ns/iter",
            "extra": "iterations: 2940\ncpu: 282768.09523809684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 217273.97790466854,
            "unit": "ns/iter",
            "extra": "iterations: 4028\ncpu: 217266.7825223466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 216106.23465614565,
            "unit": "ns/iter",
            "extra": "iterations: 4057\ncpu: 216103.746610798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 213830.7295041763,
            "unit": "ns/iter",
            "extra": "iterations: 4074\ncpu: 213823.7358861039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 109906.6603511408,
            "unit": "ns/iter",
            "extra": "iterations: 7917\ncpu: 109905.58292282351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 205332.95342272377,
            "unit": "ns/iter",
            "extra": "iterations: 4251\ncpu: 205324.58245118623 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}