window.BENCHMARK_DATA = {
  "lastUpdate": 1702084986440,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-10 22.04 Debug c++-17": [
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
        "date": 1702084711822,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 13987.636862291336,
            "unit": "ns/iter",
            "extra": "iterations: 46671\ncpu: 13987.339032804099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 122315.01716924152,
            "unit": "ns/iter",
            "extra": "iterations: 6931\ncpu: 122297.59053527631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 231017.595105086,
            "unit": "ns/iter",
            "extra": "iterations: 3759\ncpu: 231009.65682362337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 337681.04381846316,
            "unit": "ns/iter",
            "extra": "iterations: 2556\ncpu: 337656.37715179985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 444487.67913889483,
            "unit": "ns/iter",
            "extra": "iterations: 1951\ncpu: 444476.012301384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 551378.9189889777,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 551355.0226830852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 533529.5139999801,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533528.9000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 630864.6599999861,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 630787.5999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 704914.691006915,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 704885.9338970027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11077.693908132671,
            "unit": "ns/iter",
            "extra": "iterations: 63396\ncpu: 11076.834500599389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9083.961009634151,
            "unit": "ns/iter",
            "extra": "iterations: 74839\ncpu: 9083.88006253423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9056.73860013495,
            "unit": "ns/iter",
            "extra": "iterations: 75593\ncpu: 9056.35045573003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9021.143451759664,
            "unit": "ns/iter",
            "extra": "iterations: 77601\ncpu: 9020.274223270322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14798.189509913695,
            "unit": "ns/iter",
            "extra": "iterations: 47359\ncpu: 14797.149433053912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55245.37132999615,
            "unit": "ns/iter",
            "extra": "iterations: 14782\ncpu: 55242.13232309573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 253160.85943059926,
            "unit": "ns/iter",
            "extra": "iterations: 3372\ncpu: 253150.53380782937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 205822.64455307502,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 205814.73463687193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 197198.23306358102,
            "unit": "ns/iter",
            "extra": "iterations: 4325\ncpu: 197187.1907514454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 193564.0638346249,
            "unit": "ns/iter",
            "extra": "iterations: 4402\ncpu: 193556.8378009991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 468962.40414233133,
            "unit": "ns/iter",
            "extra": "iterations: 1883\ncpu: 468932.44822092424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3848130.338842951,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3847929.3388429824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3274601.9965985753,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3274421.7687074794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3114130.2281879545,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3114020.46979866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3117723.7852348876,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3117694.9664429533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1781666.7858508665,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1781624.8565965598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3032342.866449509,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3032244.9511400615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6626.919027793589,
            "unit": "ns/iter",
            "extra": "iterations: 103764\ncpu: 6626.746270382798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70412.10777944441,
            "unit": "ns/iter",
            "extra": "iterations: 12006\ncpu: 70409.95335665479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 135203.76273541126,
            "unit": "ns/iter",
            "extra": "iterations: 6478\ncpu: 135198.8422352578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 199155.3566674317,
            "unit": "ns/iter",
            "extra": "iterations: 4357\ncpu: 199154.41817764498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 262603.91405523394,
            "unit": "ns/iter",
            "extra": "iterations: 3223\ncpu: 262591.93298169295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 326751.70255063934,
            "unit": "ns/iter",
            "extra": "iterations: 2666\ncpu: 326741.1477869466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 391275.882115642,
            "unit": "ns/iter",
            "extra": "iterations: 2231\ncpu: 391246.97445091617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 455274.172233814,
            "unit": "ns/iter",
            "extra": "iterations: 1916\ncpu: 455254.6972860116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 516985.5786350183,
            "unit": "ns/iter",
            "extra": "iterations: 1685\ncpu: 516968.130563796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4977.405883980355,
            "unit": "ns/iter",
            "extra": "iterations: 140959\ncpu: 4977.064252725939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4069.7520316466594,
            "unit": "ns/iter",
            "extra": "iterations: 172151\ncpu: 4069.4843480432855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4064.2118125801053,
            "unit": "ns/iter",
            "extra": "iterations: 172511\ncpu: 4063.906649431047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4064.308728623997,
            "unit": "ns/iter",
            "extra": "iterations: 171688\ncpu: 4064.2258049485217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7221.879434455251,
            "unit": "ns/iter",
            "extra": "iterations: 96827\ncpu: 7221.076765778197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31590.84035823182,
            "unit": "ns/iter",
            "extra": "iterations: 26240\ncpu: 31589.382621951085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 134405.6983751369,
            "unit": "ns/iter",
            "extra": "iterations: 6339\ncpu: 134396.5451964025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 106551.31892772137,
            "unit": "ns/iter",
            "extra": "iterations: 7983\ncpu: 106546.66165601861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 105526.87459767239,
            "unit": "ns/iter",
            "extra": "iterations: 8078\ncpu: 105518.84129735126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 106259.87615943782,
            "unit": "ns/iter",
            "extra": "iterations: 7978\ncpu: 106255.25194284254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 280080.0189771638,
            "unit": "ns/iter",
            "extra": "iterations: 3109\ncpu: 280063.0427790291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2171696.665893291,
            "unit": "ns/iter",
            "extra": "iterations: 431\ncpu: 2171575.8700696127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1786608.1357552728,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1786522.9445506658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1783012.8807692456,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1782991.5384615364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1791493.7379575733,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1791441.0404624247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1038864.3422519419,
            "unit": "ns/iter",
            "extra": "iterations: 897\ncpu: 1038836.0089186209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1732663.8029739948,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1732610.0371747273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6936.748562933578,
            "unit": "ns/iter",
            "extra": "iterations: 100900\ncpu: 6936.750247770048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51294.29979999998,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51292.16999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95081.13941195897,
            "unit": "ns/iter",
            "extra": "iterations: 9081\ncpu: 95077.86587380187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 137709.5544380586,
            "unit": "ns/iter",
            "extra": "iterations: 6264\ncpu: 137705.7630906767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 180554.56104712564,
            "unit": "ns/iter",
            "extra": "iterations: 4775\ncpu: 180545.9895287964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 225514.91291989872,
            "unit": "ns/iter",
            "extra": "iterations: 3870\ncpu: 225508.8888888892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 267604.87788372155,
            "unit": "ns/iter",
            "extra": "iterations: 3251\ncpu: 267598.2466933251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 310552.17165242706,
            "unit": "ns/iter",
            "extra": "iterations: 2808\ncpu: 310531.83760683564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 355867.9067589509,
            "unit": "ns/iter",
            "extra": "iterations: 2456\ncpu: 355859.8941368078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5801.176936221492,
            "unit": "ns/iter",
            "extra": "iterations: 119382\ncpu: 5800.918898996497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4755.967841963953,
            "unit": "ns/iter",
            "extra": "iterations: 147055\ncpu: 4755.885893033289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4734.824946094024,
            "unit": "ns/iter",
            "extra": "iterations: 147943\ncpu: 4734.713369338221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4754.737984115357,
            "unit": "ns/iter",
            "extra": "iterations: 146556\ncpu: 4754.526597341567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7240.993003524168,
            "unit": "ns/iter",
            "extra": "iterations: 96763\ncpu: 7240.914399098955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23092.472675494486,
            "unit": "ns/iter",
            "extra": "iterations: 35115\ncpu: 23092.00056955725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 117147.24993163647,
            "unit": "ns/iter",
            "extra": "iterations: 7314\ncpu: 117144.50369155004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 91261.75664708934,
            "unit": "ns/iter",
            "extra": "iterations: 9365\ncpu: 91259.06033102074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 90645.82110627441,
            "unit": "ns/iter",
            "extra": "iterations: 9419\ncpu: 90643.76260749514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 86534.6513304881,
            "unit": "ns/iter",
            "extra": "iterations: 9846\ncpu: 86533.75990249797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 185784.02610148047,
            "unit": "ns/iter",
            "extra": "iterations: 4789\ncpu: 185778.22092294597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1673126.600719435,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1673087.9496402824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1317351.4609928937,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1317296.170212753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1314455.8118812393,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 1314404.8090523307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1311214.8716501812,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1311192.3836389212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 732664.4179810754,
            "unit": "ns/iter",
            "extra": "iterations: 1268\ncpu: 732638.9589905341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1272961.5947802474,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1272948.2142857036 ns\nthreads: 1"
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
        "date": 1702084711822,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 13987.636862291336,
            "unit": "ns/iter",
            "extra": "iterations: 46671\ncpu: 13987.339032804099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 122315.01716924152,
            "unit": "ns/iter",
            "extra": "iterations: 6931\ncpu: 122297.59053527631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 231017.595105086,
            "unit": "ns/iter",
            "extra": "iterations: 3759\ncpu: 231009.65682362337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 337681.04381846316,
            "unit": "ns/iter",
            "extra": "iterations: 2556\ncpu: 337656.37715179985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 444487.67913889483,
            "unit": "ns/iter",
            "extra": "iterations: 1951\ncpu: 444476.012301384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 551378.9189889777,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 551355.0226830852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 533529.5139999801,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533528.9000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 630864.6599999861,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 630787.5999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 704914.691006915,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 704885.9338970027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11077.693908132671,
            "unit": "ns/iter",
            "extra": "iterations: 63396\ncpu: 11076.834500599389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9083.961009634151,
            "unit": "ns/iter",
            "extra": "iterations: 74839\ncpu: 9083.88006253423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9056.73860013495,
            "unit": "ns/iter",
            "extra": "iterations: 75593\ncpu: 9056.35045573003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9021.143451759664,
            "unit": "ns/iter",
            "extra": "iterations: 77601\ncpu: 9020.274223270322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14798.189509913695,
            "unit": "ns/iter",
            "extra": "iterations: 47359\ncpu: 14797.149433053912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55245.37132999615,
            "unit": "ns/iter",
            "extra": "iterations: 14782\ncpu: 55242.13232309573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 253160.85943059926,
            "unit": "ns/iter",
            "extra": "iterations: 3372\ncpu: 253150.53380782937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 205822.64455307502,
            "unit": "ns/iter",
            "extra": "iterations: 4296\ncpu: 205814.73463687193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 197198.23306358102,
            "unit": "ns/iter",
            "extra": "iterations: 4325\ncpu: 197187.1907514454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 193564.0638346249,
            "unit": "ns/iter",
            "extra": "iterations: 4402\ncpu: 193556.8378009991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 468962.40414233133,
            "unit": "ns/iter",
            "extra": "iterations: 1883\ncpu: 468932.44822092424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3848130.338842951,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3847929.3388429824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3274601.9965985753,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3274421.7687074794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3114130.2281879545,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3114020.46979866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3117723.7852348876,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3117694.9664429533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1781666.7858508665,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1781624.8565965598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3032342.866449509,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3032244.9511400615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6626.919027793589,
            "unit": "ns/iter",
            "extra": "iterations: 103764\ncpu: 6626.746270382798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70412.10777944441,
            "unit": "ns/iter",
            "extra": "iterations: 12006\ncpu: 70409.95335665479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 135203.76273541126,
            "unit": "ns/iter",
            "extra": "iterations: 6478\ncpu: 135198.8422352578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 199155.3566674317,
            "unit": "ns/iter",
            "extra": "iterations: 4357\ncpu: 199154.41817764498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 262603.91405523394,
            "unit": "ns/iter",
            "extra": "iterations: 3223\ncpu: 262591.93298169295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 326751.70255063934,
            "unit": "ns/iter",
            "extra": "iterations: 2666\ncpu: 326741.1477869466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 391275.882115642,
            "unit": "ns/iter",
            "extra": "iterations: 2231\ncpu: 391246.97445091617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 455274.172233814,
            "unit": "ns/iter",
            "extra": "iterations: 1916\ncpu: 455254.6972860116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 516985.5786350183,
            "unit": "ns/iter",
            "extra": "iterations: 1685\ncpu: 516968.130563796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4977.405883980355,
            "unit": "ns/iter",
            "extra": "iterations: 140959\ncpu: 4977.064252725939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4069.7520316466594,
            "unit": "ns/iter",
            "extra": "iterations: 172151\ncpu: 4069.4843480432855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4064.2118125801053,
            "unit": "ns/iter",
            "extra": "iterations: 172511\ncpu: 4063.906649431047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4064.308728623997,
            "unit": "ns/iter",
            "extra": "iterations: 171688\ncpu: 4064.2258049485217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7221.879434455251,
            "unit": "ns/iter",
            "extra": "iterations: 96827\ncpu: 7221.076765778197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31590.84035823182,
            "unit": "ns/iter",
            "extra": "iterations: 26240\ncpu: 31589.382621951085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 134405.6983751369,
            "unit": "ns/iter",
            "extra": "iterations: 6339\ncpu: 134396.5451964025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 106551.31892772137,
            "unit": "ns/iter",
            "extra": "iterations: 7983\ncpu: 106546.66165601861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 105526.87459767239,
            "unit": "ns/iter",
            "extra": "iterations: 8078\ncpu: 105518.84129735126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 106259.87615943782,
            "unit": "ns/iter",
            "extra": "iterations: 7978\ncpu: 106255.25194284254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 280080.0189771638,
            "unit": "ns/iter",
            "extra": "iterations: 3109\ncpu: 280063.0427790291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2171696.665893291,
            "unit": "ns/iter",
            "extra": "iterations: 431\ncpu: 2171575.8700696127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1786608.1357552728,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1786522.9445506658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1783012.8807692456,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1782991.5384615364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1791493.7379575733,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1791441.0404624247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1038864.3422519419,
            "unit": "ns/iter",
            "extra": "iterations: 897\ncpu: 1038836.0089186209 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1732663.8029739948,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1732610.0371747273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6936.748562933578,
            "unit": "ns/iter",
            "extra": "iterations: 100900\ncpu: 6936.750247770048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51294.29979999998,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51292.16999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95081.13941195897,
            "unit": "ns/iter",
            "extra": "iterations: 9081\ncpu: 95077.86587380187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 137709.5544380586,
            "unit": "ns/iter",
            "extra": "iterations: 6264\ncpu: 137705.7630906767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 180554.56104712564,
            "unit": "ns/iter",
            "extra": "iterations: 4775\ncpu: 180545.9895287964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 225514.91291989872,
            "unit": "ns/iter",
            "extra": "iterations: 3870\ncpu: 225508.8888888892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 267604.87788372155,
            "unit": "ns/iter",
            "extra": "iterations: 3251\ncpu: 267598.2466933251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 310552.17165242706,
            "unit": "ns/iter",
            "extra": "iterations: 2808\ncpu: 310531.83760683564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 355867.9067589509,
            "unit": "ns/iter",
            "extra": "iterations: 2456\ncpu: 355859.8941368078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5801.176936221492,
            "unit": "ns/iter",
            "extra": "iterations: 119382\ncpu: 5800.918898996497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4755.967841963953,
            "unit": "ns/iter",
            "extra": "iterations: 147055\ncpu: 4755.885893033289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4734.824946094024,
            "unit": "ns/iter",
            "extra": "iterations: 147943\ncpu: 4734.713369338221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4754.737984115357,
            "unit": "ns/iter",
            "extra": "iterations: 146556\ncpu: 4754.526597341567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7240.993003524168,
            "unit": "ns/iter",
            "extra": "iterations: 96763\ncpu: 7240.914399098955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23092.472675494486,
            "unit": "ns/iter",
            "extra": "iterations: 35115\ncpu: 23092.00056955725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 117147.24993163647,
            "unit": "ns/iter",
            "extra": "iterations: 7314\ncpu: 117144.50369155004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 91261.75664708934,
            "unit": "ns/iter",
            "extra": "iterations: 9365\ncpu: 91259.06033102074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 90645.82110627441,
            "unit": "ns/iter",
            "extra": "iterations: 9419\ncpu: 90643.76260749514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 86534.6513304881,
            "unit": "ns/iter",
            "extra": "iterations: 9846\ncpu: 86533.75990249797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 185784.02610148047,
            "unit": "ns/iter",
            "extra": "iterations: 4789\ncpu: 185778.22092294597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1673126.600719435,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1673087.9496402824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1317351.4609928937,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1317296.170212753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1314455.8118812393,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 1314404.8090523307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1311214.8716501812,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1311192.3836389212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 732664.4179810754,
            "unit": "ns/iter",
            "extra": "iterations: 1268\ncpu: 732638.9589905341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1272961.5947802474,
            "unit": "ns/iter",
            "extra": "iterations: 728\ncpu: 1272948.2142857036 ns\nthreads: 1"
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
        "date": 1702084985550,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14713.88954614601,
            "unit": "ns/iter",
            "extra": "iterations: 48011\ncpu: 14713.682281143905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 124003.93471548196,
            "unit": "ns/iter",
            "extra": "iterations: 6801\ncpu: 123999.72062931921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 234884.737766967,
            "unit": "ns/iter",
            "extra": "iterations: 3699\ncpu: 234881.37334414705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 352019.96506550943,
            "unit": "ns/iter",
            "extra": "iterations: 2519\ncpu: 352001.3100436682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 454974.915529908,
            "unit": "ns/iter",
            "extra": "iterations: 1906\ncpu: 454974.76390346244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 561888.6979909097,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 561839.0797148413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 541819.1569999919,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541757.0999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 629575.7519999938,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 629562.3000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 715401.1717171697,
            "unit": "ns/iter",
            "extra": "iterations: 1287\ncpu: 715334.1103341109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11465.03126098176,
            "unit": "ns/iter",
            "extra": "iterations: 62602\ncpu: 11464.11296763682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9289.220637972412,
            "unit": "ns/iter",
            "extra": "iterations: 71257\ncpu: 9288.374475490118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9249.755808896165,
            "unit": "ns/iter",
            "extra": "iterations: 75875\ncpu: 9249.082042833605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9166.98638144977,
            "unit": "ns/iter",
            "extra": "iterations: 76807\ncpu: 9166.230942492228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14988.628914014933,
            "unit": "ns/iter",
            "extra": "iterations: 46787\ncpu: 14988.090708957634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56611.84172612039,
            "unit": "ns/iter",
            "extra": "iterations: 14437\ncpu: 56606.337881831394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 267292.4293413176,
            "unit": "ns/iter",
            "extra": "iterations: 3340\ncpu: 267278.7724550897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 203393.57142857372,
            "unit": "ns/iter",
            "extra": "iterations: 4172\ncpu: 203389.5493767976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 203529.1439484367,
            "unit": "ns/iter",
            "extra": "iterations: 4189\ncpu: 203525.80568154666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 198978.96772684192,
            "unit": "ns/iter",
            "extra": "iterations: 4276\ncpu: 198962.60523854053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 466890.48990435485,
            "unit": "ns/iter",
            "extra": "iterations: 1882\ncpu: 466859.9893730074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3945645.7427386446,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3945238.5892116255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3117877.418060232,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3117646.1538461563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3133554.219594618,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3133279.054054055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3156870.500000036,
            "unit": "ns/iter",
            "extra": "iterations: 298\ncpu: 3156499.664429534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1781117.162162176,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1781024.903474904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3043072.5737704453,
            "unit": "ns/iter",
            "extra": "iterations: 305\ncpu: 3042155.737704924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6868.383678049003,
            "unit": "ns/iter",
            "extra": "iterations: 102500\ncpu: 6868.072195121946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71182.90325012465,
            "unit": "ns/iter",
            "extra": "iterations: 11938\ncpu: 71180.38197353011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 136936.6084318627,
            "unit": "ns/iter",
            "extra": "iterations: 6428\ncpu: 136930.27380211544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 201667.76263684785,
            "unit": "ns/iter",
            "extra": "iterations: 4293\ncpu: 201657.51222921012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 266343.19737243647,
            "unit": "ns/iter",
            "extra": "iterations: 3273\ncpu: 266342.7436602506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 329179.97299353476,
            "unit": "ns/iter",
            "extra": "iterations: 2629\ncpu: 329175.4279193631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 393328.36561086413,
            "unit": "ns/iter",
            "extra": "iterations: 2210\ncpu: 393327.5565610845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 458983.72502628923,
            "unit": "ns/iter",
            "extra": "iterations: 1902\ncpu: 458982.7024185074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 522231.1409477574,
            "unit": "ns/iter",
            "extra": "iterations: 1646\ncpu: 522230.37667071505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5114.370067164419,
            "unit": "ns/iter",
            "extra": "iterations: 138764\ncpu: 5114.279640252484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4231.1034680510365,
            "unit": "ns/iter",
            "extra": "iterations: 165655\ncpu: 4231.059128912507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4208.566124454724,
            "unit": "ns/iter",
            "extra": "iterations: 166663\ncpu: 4208.563388394559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4207.678572290331,
            "unit": "ns/iter",
            "extra": "iterations: 165776\ncpu: 4207.68446578512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7388.086628763853,
            "unit": "ns/iter",
            "extra": "iterations: 94980\ncpu: 7388.068014318811 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 33697.04630793539,
            "unit": "ns/iter",
            "extra": "iterations: 24661\ncpu: 33696.691131746404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 140385.84519867445,
            "unit": "ns/iter",
            "extra": "iterations: 6040\ncpu: 140385.33112582835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 112612.00237812361,
            "unit": "ns/iter",
            "extra": "iterations: 7569\ncpu: 112611.74527678674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 112762.5748000014,
            "unit": "ns/iter",
            "extra": "iterations: 7500\ncpu: 112762.20000000024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 113648.6416500358,
            "unit": "ns/iter",
            "extra": "iterations: 7515\ncpu: 113647.45176313995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 280789.7405370439,
            "unit": "ns/iter",
            "extra": "iterations: 3091\ncpu: 280789.388547395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2192536.599999959,
            "unit": "ns/iter",
            "extra": "iterations: 425\ncpu: 2192407.294117649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1795988.2648752632,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1795851.8234165057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1799183.5444015083,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1799021.2355212264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1795787.3725868913,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1795611.969111967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1051393.3163841714,
            "unit": "ns/iter",
            "extra": "iterations: 885\ncpu: 1051296.2711864344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1740751.6523364868,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1740671.214953268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7169.319130390524,
            "unit": "ns/iter",
            "extra": "iterations: 98665\ncpu: 7169.231237014164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52860.48220000055,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52860.599999999635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 96580.63387548954,
            "unit": "ns/iter",
            "extra": "iterations: 8915\ncpu: 96580.34772854763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 140703.68101761074,
            "unit": "ns/iter",
            "extra": "iterations: 6132\ncpu: 140701.10893672516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 185248.54891072423,
            "unit": "ns/iter",
            "extra": "iterations: 4682\ncpu: 185246.81759931674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 228952.30131579214,
            "unit": "ns/iter",
            "extra": "iterations: 3800\ncpu: 228951.7894736847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 272459.9874411356,
            "unit": "ns/iter",
            "extra": "iterations: 3185\ncpu: 272452.3704866582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 317138.0467665324,
            "unit": "ns/iter",
            "extra": "iterations: 2737\ncpu: 317137.44976251334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 361148.5159684732,
            "unit": "ns/iter",
            "extra": "iterations: 2411\ncpu: 361144.50435503887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5797.221895962703,
            "unit": "ns/iter",
            "extra": "iterations: 120899\ncpu: 5797.214203591453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4760.472819267766,
            "unit": "ns/iter",
            "extra": "iterations: 147439\ncpu: 4760.4663623600145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4722.089007068434,
            "unit": "ns/iter",
            "extra": "iterations: 148550\ncpu: 4722.051161225166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4709.330966129104,
            "unit": "ns/iter",
            "extra": "iterations: 148417\ncpu: 4709.331141311351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7330.228021572992,
            "unit": "ns/iter",
            "extra": "iterations: 94934\ncpu: 7330.256809994445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 22663.57750674497,
            "unit": "ns/iter",
            "extra": "iterations: 35584\ncpu: 22663.247526978434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 115173.33957183093,
            "unit": "ns/iter",
            "extra": "iterations: 7427\ncpu: 115169.70512993279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 87879.74748097859,
            "unit": "ns/iter",
            "extra": "iterations: 9726\ncpu: 87879.72444992737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 88303.91228432964,
            "unit": "ns/iter",
            "extra": "iterations: 9679\ncpu: 88303.80204566574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 84781.3313785876,
            "unit": "ns/iter",
            "extra": "iterations: 10061\ncpu: 84781.154954777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 184281.6332372292,
            "unit": "ns/iter",
            "extra": "iterations: 4856\ncpu: 184277.4711696885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1670275.7495495095,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1670249.009009003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1332454.2057142707,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1332430.8571428591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1327905.9614835249,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1327892.0114122652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1319712.1593172273,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1319664.295874819 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 726904.641849518,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 726889.1065830695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1284540.9986149664,
            "unit": "ns/iter",
            "extra": "iterations: 722\ncpu: 1284486.4265927928 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}