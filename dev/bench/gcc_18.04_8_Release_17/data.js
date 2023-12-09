window.BENCHMARK_DATA = {
  "lastUpdate": 1702085011747,
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
      }
    ]
  }
}