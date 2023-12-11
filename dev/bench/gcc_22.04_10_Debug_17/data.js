window.BENCHMARK_DATA = {
  "lastUpdate": 1702285111060,
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
        "date": 1702085587004,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14119.118120195379,
            "unit": "ns/iter",
            "extra": "iterations: 50601\ncpu: 14119.337562498766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 121667.0458113068,
            "unit": "ns/iter",
            "extra": "iterations: 6243\ncpu: 121662.51802018257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 230337.47908946945,
            "unit": "ns/iter",
            "extra": "iterations: 3778\ncpu: 230335.94494441507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 334058.3557617996,
            "unit": "ns/iter",
            "extra": "iterations: 2586\ncpu: 334054.44702242845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 441136.10879510635,
            "unit": "ns/iter",
            "extra": "iterations: 1967\ncpu: 441121.96237925766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 550427.8348045121,
            "unit": "ns/iter",
            "extra": "iterations: 1586\ncpu: 550434.99369483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 531809.820000035,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531780.9000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 611144.4229999847,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 611144.7999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 696523.9688449918,
            "unit": "ns/iter",
            "extra": "iterations: 1316\ncpu: 696518.0091185402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11091.124790699347,
            "unit": "ns/iter",
            "extra": "iterations: 63306\ncpu: 11090.937667835578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 8993.05917776518,
            "unit": "ns/iter",
            "extra": "iterations: 77715\ncpu: 8993.075982757504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9239.121649378063,
            "unit": "ns/iter",
            "extra": "iterations: 77411\ncpu: 9239.019002467347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9059.385299141111,
            "unit": "ns/iter",
            "extra": "iterations: 77288\ncpu: 9059.406376151517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14704.962171915042,
            "unit": "ns/iter",
            "extra": "iterations: 47663\ncpu: 14704.821349894042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54278.92281098202,
            "unit": "ns/iter",
            "extra": "iterations: 15041\ncpu: 54275.88591184102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 251572.64484070498,
            "unit": "ns/iter",
            "extra": "iterations: 3421\ncpu: 251553.96083016656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 197717.34136640106,
            "unit": "ns/iter",
            "extra": "iterations: 4274\ncpu: 197710.50538137578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 200056.94606741317,
            "unit": "ns/iter",
            "extra": "iterations: 4005\ncpu: 200044.9687890137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 191857.74116047224,
            "unit": "ns/iter",
            "extra": "iterations: 4412\ncpu: 191854.8277425201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 477094.55344546726,
            "unit": "ns/iter",
            "extra": "iterations: 1843\ncpu: 477064.7856755295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3825281.016460911,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3825200.4115226367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3142004.9867986236,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3141503.6303630397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3070344.8481848557,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3070176.5676567736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3068848.4059407497,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3068742.2442244235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1777788.2061068772,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1777703.4351145006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2997775.525806439,
            "unit": "ns/iter",
            "extra": "iterations: 310\ncpu: 2997651.612903229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6613.479917060087,
            "unit": "ns/iter",
            "extra": "iterations: 106583\ncpu: 6613.133426531444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70391.0221359548,
            "unit": "ns/iter",
            "extra": "iterations: 12107\ncpu: 70389.09721648622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 134756.79701905855,
            "unit": "ns/iter",
            "extra": "iterations: 6508\ncpu: 134750.46097111245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 198168.80639999517,
            "unit": "ns/iter",
            "extra": "iterations: 4375\ncpu: 198164.22857142828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 262211.8348872083,
            "unit": "ns/iter",
            "extra": "iterations: 3325\ncpu: 262201.38345864613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 326603.50429906027,
            "unit": "ns/iter",
            "extra": "iterations: 2675\ncpu: 326599.36448598164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 389774.34776784136,
            "unit": "ns/iter",
            "extra": "iterations: 2240\ncpu: 389757.50000000023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 453520.48078921624,
            "unit": "ns/iter",
            "extra": "iterations: 1926\ncpu: 453481.7237798549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 515488.4712166032,
            "unit": "ns/iter",
            "extra": "iterations: 1685\ncpu: 515476.02373887424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4983.824946538942,
            "unit": "ns/iter",
            "extra": "iterations: 140757\ncpu: 4983.629943803852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4017.874094041406,
            "unit": "ns/iter",
            "extra": "iterations: 173987\ncpu: 4017.7725922051586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4051.0151258854594,
            "unit": "ns/iter",
            "extra": "iterations: 173213\ncpu: 4051.0273478318554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4031.3286569805273,
            "unit": "ns/iter",
            "extra": "iterations: 173996\ncpu: 4031.223706292081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7217.307458441234,
            "unit": "ns/iter",
            "extra": "iterations: 97031\ncpu: 7217.233667590787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31412.342835393894,
            "unit": "ns/iter",
            "extra": "iterations: 26275\ncpu: 31411.524262607032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 131925.61210901642,
            "unit": "ns/iter",
            "extra": "iterations: 6458\ncpu: 131925.02322700544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 106441.70114229125,
            "unit": "ns/iter",
            "extra": "iterations: 8054\ncpu: 106436.18077973738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 106212.044102953,
            "unit": "ns/iter",
            "extra": "iterations: 8004\ncpu: 106209.0954522745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 106245.98775764919,
            "unit": "ns/iter",
            "extra": "iterations: 8005\ncpu: 106243.27295440293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 282722.852603988,
            "unit": "ns/iter",
            "extra": "iterations: 3053\ncpu: 282719.7510645262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2189468.219626178,
            "unit": "ns/iter",
            "extra": "iterations: 428\ncpu: 2189372.196261683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1783830.2614503342,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1783773.664122146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1782526.4348659264,
            "unit": "ns/iter",
            "extra": "iterations: 522\ncpu: 1782448.8505747102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1792745.9865383902,
            "unit": "ns/iter",
            "extra": "iterations: 520\ncpu: 1792680.0000000095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1049259.375426611,
            "unit": "ns/iter",
            "extra": "iterations: 879\ncpu: 1049197.724687146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1734733.4552238476,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1734681.1567164192 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6792.810907992739,
            "unit": "ns/iter",
            "extra": "iterations: 102622\ncpu: 6792.195630566586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50822.495799997116,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50822.22999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 93439.7187534042,
            "unit": "ns/iter",
            "extra": "iterations: 9177\ncpu: 93437.2888743602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 135617.10317085282,
            "unit": "ns/iter",
            "extra": "iterations: 6339\ncpu: 135608.09275910966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 178302.3799835588,
            "unit": "ns/iter",
            "extra": "iterations: 4866\ncpu: 178296.4652692149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 220502.66420569224,
            "unit": "ns/iter",
            "extra": "iterations: 3928\ncpu: 220497.9124236242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 263178.6655558806,
            "unit": "ns/iter",
            "extra": "iterations: 3301\ncpu: 263170.9784913676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 305987.1869718248,
            "unit": "ns/iter",
            "extra": "iterations: 2840\ncpu: 305985.1056338033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 348044.9156000077,
            "unit": "ns/iter",
            "extra": "iterations: 2500\ncpu: 348027.51999999944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5714.336491691831,
            "unit": "ns/iter",
            "extra": "iterations: 122532\ncpu: 5714.31626024224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4703.125896591683,
            "unit": "ns/iter",
            "extra": "iterations: 148479\ncpu: 4702.873133574402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4835.044580085127,
            "unit": "ns/iter",
            "extra": "iterations: 148923\ncpu: 4835.012053208707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4716.404494155032,
            "unit": "ns/iter",
            "extra": "iterations: 148682\ncpu: 4716.47408563243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7077.9108408399325,
            "unit": "ns/iter",
            "extra": "iterations: 98913\ncpu: 7077.761264950024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 22367.364813277745,
            "unit": "ns/iter",
            "extra": "iterations: 36150\ncpu: 22367.195020746924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 116621.5979577976,
            "unit": "ns/iter",
            "extra": "iterations: 7345\ncpu: 116619.71409121818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 87582.58193146737,
            "unit": "ns/iter",
            "extra": "iterations: 9630\ncpu: 87580.8930425745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 89090.58152913096,
            "unit": "ns/iter",
            "extra": "iterations: 9561\ncpu: 89084.84468151812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 85413.22618928127,
            "unit": "ns/iter",
            "extra": "iterations: 9943\ncpu: 85408.08609071722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 193367.57606578883,
            "unit": "ns/iter",
            "extra": "iterations: 4621\ncpu: 193361.13395369012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1654873.6400709264,
            "unit": "ns/iter",
            "extra": "iterations: 564\ncpu: 1654754.2553191462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1302725.5399719365,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1302709.3969144626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1303260.966339467,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1303241.5147265042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1295424.6652719146,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1295377.9637377998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 725591.4259699397,
            "unit": "ns/iter",
            "extra": "iterations: 1263\ncpu: 725552.5732383206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1258544.7391304614,
            "unit": "ns/iter",
            "extra": "iterations: 736\ncpu: 1258515.896739126 ns\nthreads: 1"
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
        "date": 1702244210969,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15479.142176646044,
            "unit": "ns/iter",
            "extra": "iterations: 45345\ncpu: 15478.028448561035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 147455.538327527,
            "unit": "ns/iter",
            "extra": "iterations: 5740\ncpu: 147442.83972125436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 279635.4123146386,
            "unit": "ns/iter",
            "extra": "iterations: 3102\ncpu: 279597.90457769175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 409248.0822695093,
            "unit": "ns/iter",
            "extra": "iterations: 2115\ncpu: 409233.0969267139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 549622.182554519,
            "unit": "ns/iter",
            "extra": "iterations: 1605\ncpu: 549573.2087227413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 548616.2130000025,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 548588.2999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 654548.4730000055,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 654439.8000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 759493.0041186188,
            "unit": "ns/iter",
            "extra": "iterations: 1214\ncpu: 759424.71169687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 866871.0781395487,
            "unit": "ns/iter",
            "extra": "iterations: 1075\ncpu: 866799.3488372087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12172.99688234784,
            "unit": "ns/iter",
            "extra": "iterations: 57415\ncpu: 12173.059305059673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10321.50985613782,
            "unit": "ns/iter",
            "extra": "iterations: 69094\ncpu: 10321.454829652339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10042.61171488856,
            "unit": "ns/iter",
            "extra": "iterations: 69194\ncpu: 10042.369280573463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10158.693179685133,
            "unit": "ns/iter",
            "extra": "iterations: 69249\ncpu: 10158.743086542763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16326.706388921692,
            "unit": "ns/iter",
            "extra": "iterations: 42965\ncpu: 16326.070057023162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 62399.8982001004,
            "unit": "ns/iter",
            "extra": "iterations: 13723\ncpu: 62395.86096334619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 318241.0473372815,
            "unit": "ns/iter",
            "extra": "iterations: 2704\ncpu: 318222.00443787035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 257849.94617647032,
            "unit": "ns/iter",
            "extra": "iterations: 3400\ncpu: 257841.14705882402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 249981.3474452513,
            "unit": "ns/iter",
            "extra": "iterations: 3425\ncpu: 249952.46715328394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 246600.02254986516,
            "unit": "ns/iter",
            "extra": "iterations: 3459\ncpu: 246573.3448973695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 569395.5457495131,
            "unit": "ns/iter",
            "extra": "iterations: 1541\ncpu: 569357.1706683987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4712304.852941207,
            "unit": "ns/iter",
            "extra": "iterations: 204\ncpu: 4711684.3137254985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3741718.5374999684,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3741290.8333333363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3732895.903999975,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3732592.4000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3723152.425702706,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3722806.425702799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2130991.603644607,
            "unit": "ns/iter",
            "extra": "iterations: 439\ncpu: 2130858.769931663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7885.020249712856,
            "unit": "ns/iter",
            "extra": "iterations: 88742\ncpu: 7884.97216650514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 95965.89607182879,
            "unit": "ns/iter",
            "extra": "iterations: 8910\ncpu: 95963.38945005623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 185999.92510638322,
            "unit": "ns/iter",
            "extra": "iterations: 4700\ncpu: 185998.5957446807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 275274.0851535286,
            "unit": "ns/iter",
            "extra": "iterations: 3159\ncpu: 275269.54732510314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 363621.82448809536,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 363599.33138320077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 453659.5319148995,
            "unit": "ns/iter",
            "extra": "iterations: 1927\ncpu: 453656.201349247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 541968.2449999996,
            "unit": "ns/iter",
            "extra": "iterations: 1600\ncpu: 541947.8124999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 505767.7220000017,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505771.2999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 577462.8409999992,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 577459.7999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6011.602889201553,
            "unit": "ns/iter",
            "extra": "iterations: 116572\ncpu: 6011.462443811601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5017.673171742618,
            "unit": "ns/iter",
            "extra": "iterations: 139942\ncpu: 5017.708765059824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4902.183401464913,
            "unit": "ns/iter",
            "extra": "iterations: 140904\ncpu: 4902.002782036014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5008.45114352587,
            "unit": "ns/iter",
            "extra": "iterations: 139306\ncpu: 5008.4763039639565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8634.86446566053,
            "unit": "ns/iter",
            "extra": "iterations: 81175\ncpu: 8634.495842315997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47792.46536883939,
            "unit": "ns/iter",
            "extra": "iterations: 17311\ncpu: 47792.080180231955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 206273.3435686658,
            "unit": "ns/iter",
            "extra": "iterations: 4136\ncpu: 206265.4980657638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 164277.67902886588,
            "unit": "ns/iter",
            "extra": "iterations: 5231\ncpu: 164278.51271267433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 162325.83238636306,
            "unit": "ns/iter",
            "extra": "iterations: 5280\ncpu: 162321.36363636274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 163109.93425802846,
            "unit": "ns/iter",
            "extra": "iterations: 5263\ncpu: 163110.6783203498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 366520.5088532879,
            "unit": "ns/iter",
            "extra": "iterations: 2372\ncpu: 366508.81112984597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2946094.719242907,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2946033.7539432216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2424971.2994791986,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2424915.885416675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2436695.963636386,
            "unit": "ns/iter",
            "extra": "iterations: 385\ncpu: 2436644.1558441552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2435844.3219895256,
            "unit": "ns/iter",
            "extra": "iterations: 382\ncpu: 2435787.4345549606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1405891.9819004643,
            "unit": "ns/iter",
            "extra": "iterations: 663\ncpu: 1405820.361990952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2359111.2828282923,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2358944.949494959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6999.106290213849,
            "unit": "ns/iter",
            "extra": "iterations: 99313\ncpu: 6998.8269410852245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 58147.372820076074,
            "unit": "ns/iter",
            "extra": "iterations: 14106\ncpu: 58142.74067772561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 92238.77051295727,
            "unit": "ns/iter",
            "extra": "iterations: 9299\ncpu: 92229.53005699495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 132515.007848571,
            "unit": "ns/iter",
            "extra": "iterations: 6498\ncpu: 132504.2474607564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 175400.3313192323,
            "unit": "ns/iter",
            "extra": "iterations: 4965\ncpu: 175382.5981873106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 217522.3453724574,
            "unit": "ns/iter",
            "extra": "iterations: 3987\ncpu: 217506.37070479075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 258979.6289214281,
            "unit": "ns/iter",
            "extra": "iterations: 3347\ncpu: 258951.53869136536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 301030.87357118237,
            "unit": "ns/iter",
            "extra": "iterations: 2887\ncpu: 301002.21683408413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 341507.9737048645,
            "unit": "ns/iter",
            "extra": "iterations: 2548\ncpu: 341484.6938775511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5733.526136159537,
            "unit": "ns/iter",
            "extra": "iterations: 122474\ncpu: 5733.035583062518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4808.2282467999685,
            "unit": "ns/iter",
            "extra": "iterations: 146013\ncpu: 4807.86025901805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4707.732962850816,
            "unit": "ns/iter",
            "extra": "iterations: 148455\ncpu: 4707.547068135157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4729.750508372901,
            "unit": "ns/iter",
            "extra": "iterations: 146546\ncpu: 4729.77426883025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7281.377068963492,
            "unit": "ns/iter",
            "extra": "iterations: 96123\ncpu: 7281.09713596118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 24934.6360857218,
            "unit": "ns/iter",
            "extra": "iterations: 32711\ncpu: 24934.321787777862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 111597.60511621204,
            "unit": "ns/iter",
            "extra": "iterations: 7701\ncpu: 111595.18244383945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 85996.2026972634,
            "unit": "ns/iter",
            "extra": "iterations: 9936\ncpu: 85993.44806763255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 85441.48831402375,
            "unit": "ns/iter",
            "extra": "iterations: 10012\ncpu: 85438.94326807802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 82484.40660725033,
            "unit": "ns/iter",
            "extra": "iterations: 10322\ncpu: 82483.89846928873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 201529.345963018,
            "unit": "ns/iter",
            "extra": "iterations: 4434\ncpu: 201525.12404149922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1627514.2874779645,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1627426.984126983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1292757.7593880747,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1292700.5563282354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1293297.1210014098,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1293302.2253129513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1270369.474043752,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 1270342.076502739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 709715.9181331574,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 709695.4093343564 ns\nthreads: 1"
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
        "date": 1702285110485,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15663.374270711762,
            "unit": "ns/iter",
            "extra": "iterations: 44564\ncpu: 15663.154115429497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 149865.67866690096,
            "unit": "ns/iter",
            "extra": "iterations: 5611\ncpu: 149864.2487970059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 284411.4349819771,
            "unit": "ns/iter",
            "extra": "iterations: 3053\ncpu: 284408.0248935474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 423466.1460836096,
            "unit": "ns/iter",
            "extra": "iterations: 2081\ncpu: 423466.1701105237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 557362.2772151828,
            "unit": "ns/iter",
            "extra": "iterations: 1580\ncpu: 557341.3291139242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 564477.8180000002,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 564469.1000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 665648.2566883485,
            "unit": "ns/iter",
            "extra": "iterations: 1383\ncpu: 665627.9103398408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 770708.7374581877,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 770695.4013377924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 876654.1162570849,
            "unit": "ns/iter",
            "extra": "iterations: 1058\ncpu: 876622.2117202259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12277.141540736093,
            "unit": "ns/iter",
            "extra": "iterations: 58167\ncpu: 12276.88551928067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10059.1709663064,
            "unit": "ns/iter",
            "extra": "iterations: 69657\ncpu: 10058.858406190324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10170.476907034614,
            "unit": "ns/iter",
            "extra": "iterations: 69047\ncpu: 10170.249250510535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10051.624680361956,
            "unit": "ns/iter",
            "extra": "iterations: 69610\ncpu: 10051.463870133606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16323.774134275296,
            "unit": "ns/iter",
            "extra": "iterations: 42450\ncpu: 16323.771495877505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 62342.441708801554,
            "unit": "ns/iter",
            "extra": "iterations: 13647\ncpu: 62342.001905180594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 327471.67496228527,
            "unit": "ns/iter",
            "extra": "iterations: 2652\ncpu: 327459.76621417794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 255533.77146275173,
            "unit": "ns/iter",
            "extra": "iterations: 3343\ncpu: 255527.75949745794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 251626.51060071168,
            "unit": "ns/iter",
            "extra": "iterations: 3396\ncpu: 251607.06713780915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 250669.90437317174,
            "unit": "ns/iter",
            "extra": "iterations: 3430\ncpu: 250657.84256559826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 597036.7697456648,
            "unit": "ns/iter",
            "extra": "iterations: 1494\ncpu: 596992.5702811235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4532514.256281522,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 4532274.87437186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3736640.48594374,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3736511.6465863506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3689675.335968434,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3689363.6363636265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3687485.9051383585,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3687218.9723320086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2137298.497706349,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2137084.174311925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7919.568442316019,
            "unit": "ns/iter",
            "extra": "iterations: 88118\ncpu: 7919.290042897045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 95578.55484665169,
            "unit": "ns/iter",
            "extra": "iterations: 8934\ncpu: 95571.96104768307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 184266.47205230812,
            "unit": "ns/iter",
            "extra": "iterations: 4741\ncpu: 184260.83104830212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 272586.2535255449,
            "unit": "ns/iter",
            "extra": "iterations: 3191\ncpu: 272560.451269195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 359670.3645014653,
            "unit": "ns/iter",
            "extra": "iterations: 2417\ncpu: 359655.5233760865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 445943.9062499918,
            "unit": "ns/iter",
            "extra": "iterations: 1952\ncpu: 445914.9590163944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 534578.8596813731,
            "unit": "ns/iter",
            "extra": "iterations: 1632\ncpu: 534522.8553921583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 622152.2696148424,
            "unit": "ns/iter",
            "extra": "iterations: 1402\ncpu: 622124.7503566333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 570639.6649999873,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 570578.1999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5985.176873872927,
            "unit": "ns/iter",
            "extra": "iterations: 117564\ncpu: 5984.824436051856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4907.620884943298,
            "unit": "ns/iter",
            "extra": "iterations: 142495\ncpu: 4907.356749359628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4884.5813089854,
            "unit": "ns/iter",
            "extra": "iterations: 143256\ncpu: 4884.148656949797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4864.432947060341,
            "unit": "ns/iter",
            "extra": "iterations: 143163\ncpu: 4864.330169107969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8574.571519210904,
            "unit": "ns/iter",
            "extra": "iterations: 81957\ncpu: 8574.341422941292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47051.05390313199,
            "unit": "ns/iter",
            "extra": "iterations: 17550\ncpu: 47050.068376068324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 204822.3418538018,
            "unit": "ns/iter",
            "extra": "iterations: 4186\ncpu: 204818.51409460095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 164284.82576922822,
            "unit": "ns/iter",
            "extra": "iterations: 5200\ncpu: 164278.55769230713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 160784.48621271082,
            "unit": "ns/iter",
            "extra": "iterations: 5331\ncpu: 160780.36015756952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 162845.61200836202,
            "unit": "ns/iter",
            "extra": "iterations: 5263\ncpu: 162835.6260687825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 376840.3328998578,
            "unit": "ns/iter",
            "extra": "iterations: 2307\ncpu: 376814.7811009988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2876355.996923114,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2876198.1538461503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2403645.0358973746,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2403512.564102565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2360350.7709924052,
            "unit": "ns/iter",
            "extra": "iterations: 393\ncpu: 2360231.5521628507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2364781.594387756,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2364595.9183673467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1422476.245083218,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1420128.1391830489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2309183.267990079,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2309138.461538452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7240.324700988371,
            "unit": "ns/iter",
            "extra": "iterations: 96150\ncpu: 7240.1404056162355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53223.87300000173,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53221.39000000022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98508.532469021,
            "unit": "ns/iter",
            "extra": "iterations: 8716\ncpu: 98503.3272143188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 142996.85164926428,
            "unit": "ns/iter",
            "extra": "iterations: 6033\ncpu: 142990.75087021384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 188534.97480998788,
            "unit": "ns/iter",
            "extra": "iterations: 4605\ncpu: 188530.14115092362 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 233752.96150741188,
            "unit": "ns/iter",
            "extra": "iterations: 3715\ncpu: 233746.35262449534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 278136.467286726,
            "unit": "ns/iter",
            "extra": "iterations: 3118\ncpu: 278124.4708146261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 322795.88868274266,
            "unit": "ns/iter",
            "extra": "iterations: 2695\ncpu: 322789.23933209415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 368343.4390347191,
            "unit": "ns/iter",
            "extra": "iterations: 2362\ncpu: 368332.59949195676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5792.598158336597,
            "unit": "ns/iter",
            "extra": "iterations: 120326\ncpu: 5792.427239333135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4834.848153262314,
            "unit": "ns/iter",
            "extra": "iterations: 144850\ncpu: 4834.5964791163515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4768.439398425887,
            "unit": "ns/iter",
            "extra": "iterations: 145219\ncpu: 4768.382925099296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4817.6006054672625,
            "unit": "ns/iter",
            "extra": "iterations: 145012\ncpu: 4817.441315201508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7486.621847479084,
            "unit": "ns/iter",
            "extra": "iterations: 93338\ncpu: 7486.602455591529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25780.255927916198,
            "unit": "ns/iter",
            "extra": "iterations: 31630\ncpu: 25780.041100221282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 116255.90568598361,
            "unit": "ns/iter",
            "extra": "iterations: 7369\ncpu: 116255.611344823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 88554.88943055313,
            "unit": "ns/iter",
            "extra": "iterations: 9641\ncpu: 88552.42194793015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 88407.89073363288,
            "unit": "ns/iter",
            "extra": "iterations: 9637\ncpu: 88405.74867697486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 84236.39534884036,
            "unit": "ns/iter",
            "extra": "iterations: 10105\ncpu: 84232.8748144474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 206594.42943643025,
            "unit": "ns/iter",
            "extra": "iterations: 4294\ncpu: 206590.24219841816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1659615.622302169,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1659532.5539568348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1337490.2828282984,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1337452.958152951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1320443.0613409574,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1320364.907275327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1308788.8302945606,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1308761.711079943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 718286.0512025093,
            "unit": "ns/iter",
            "extra": "iterations: 1289\ncpu: 718242.7463149775 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}