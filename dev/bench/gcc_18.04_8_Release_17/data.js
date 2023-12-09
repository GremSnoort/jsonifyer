window.BENCHMARK_DATA = {
  "lastUpdate": 1702084758367,
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
      }
    ]
  }
}