window.BENCHMARK_DATA = {
  "lastUpdate": 1702285134030,
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
      }
    ]
  }
}