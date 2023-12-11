window.BENCHMARK_DATA = {
  "lastUpdate": 1702309460730,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-9 22.04 Release c++-17": [
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
        "date": 1702084717902,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1563.5748452998166,
            "unit": "ns/iter",
            "extra": "iterations: 398836\ncpu: 1563.5609624005856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 18687.917651920707,
            "unit": "ns/iter",
            "extra": "iterations: 43559\ncpu: 18687.325237034827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 39218.43551891021,
            "unit": "ns/iter",
            "extra": "iterations: 20254\ncpu: 39215.99190283402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 59072.10418433722,
            "unit": "ns/iter",
            "extra": "iterations: 14148\ncpu: 59066.758552445564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 66325.05522712138,
            "unit": "ns/iter",
            "extra": "iterations: 13363\ncpu: 66319.80094290205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 83060.89244104835,
            "unit": "ns/iter",
            "extra": "iterations: 10729\ncpu: 83051.8780874266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 97039.57029298115,
            "unit": "ns/iter",
            "extra": "iterations: 8806\ncpu: 97032.5232795821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 111963.69793031142,
            "unit": "ns/iter",
            "extra": "iterations: 7634\ncpu: 111951.0610427037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 128789.01678364378,
            "unit": "ns/iter",
            "extra": "iterations: 6554\ncpu: 128781.78211779072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1409.0997739996653,
            "unit": "ns/iter",
            "extra": "iterations: 506194\ncpu: 1409.0056381545412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1116.0875295514866,
            "unit": "ns/iter",
            "extra": "iterations: 629833\ncpu: 1116.0774363998096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1104.7137944504775,
            "unit": "ns/iter",
            "extra": "iterations: 637423\ncpu: 1104.643541259101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1108.18589395705,
            "unit": "ns/iter",
            "extra": "iterations: 632027\ncpu: 1108.0336757765112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2096.270344778066,
            "unit": "ns/iter",
            "extra": "iterations: 334447\ncpu: 2096.068136356434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6520.7465563199485,
            "unit": "ns/iter",
            "extra": "iterations: 125302\ncpu: 6520.255063765951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31610.82889449221,
            "unit": "ns/iter",
            "extra": "iterations: 25382\ncpu: 31608.608462690067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 27398.82131682305,
            "unit": "ns/iter",
            "extra": "iterations: 30042\ncpu: 27395.19339591235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 27975.104634137166,
            "unit": "ns/iter",
            "extra": "iterations: 29369\ncpu: 27972.906806496707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 28063.127107296663,
            "unit": "ns/iter",
            "extra": "iterations: 29125\ncpu: 28060.600858369067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64674.80135588352,
            "unit": "ns/iter",
            "extra": "iterations: 13718\ncpu: 64669.44889925641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 664969.1738636418,
            "unit": "ns/iter",
            "extra": "iterations: 880\ncpu: 664868.8636363656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 546896.744999998,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 546892.2999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 529415.0189999982,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529348.2000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 519685.1759999959,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519651.2999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 365332.14297589415,
            "unit": "ns/iter",
            "extra": "iterations: 2406\ncpu: 365318.82793017494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 525285.2569999788,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525281.1999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 863.4753045259616,
            "unit": "ns/iter",
            "extra": "iterations: 827844\ncpu: 863.4423876962311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12486.937727779095,
            "unit": "ns/iter",
            "extra": "iterations: 66402\ncpu: 12486.524502274051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27463.156645623767,
            "unit": "ns/iter",
            "extra": "iterations: 29621\ncpu: 27462.874312143453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 41303.18040849083,
            "unit": "ns/iter",
            "extra": "iterations: 19927\ncpu: 41302.22813268432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 54645.3364589429,
            "unit": "ns/iter",
            "extra": "iterations: 15357\ncpu: 54644.81995181335 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 57309.18069999973,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 57307.540000000045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 69316.1954059153,
            "unit": "ns/iter",
            "extra": "iterations: 12712\ncpu: 69313.58558842012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 80935.3391666671,
            "unit": "ns/iter",
            "extra": "iterations: 10800\ncpu: 80933.13888888886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 91249.3860435997,
            "unit": "ns/iter",
            "extra": "iterations: 9587\ncpu: 91245.25920517325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 649.5542106975569,
            "unit": "ns/iter",
            "extra": "iterations: 1081816\ncpu: 649.5390158770128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 526.9993665416271,
            "unit": "ns/iter",
            "extra": "iterations: 1326054\ncpu: 526.9945266180711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 536.9617894351026,
            "unit": "ns/iter",
            "extra": "iterations: 1315186\ncpu: 536.9500587749598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 524.4475205447341,
            "unit": "ns/iter",
            "extra": "iterations: 1341706\ncpu: 524.4372463117851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1078.9321527403742,
            "unit": "ns/iter",
            "extra": "iterations: 651537\ncpu: 1078.893140374231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4514.918978931201,
            "unit": "ns/iter",
            "extra": "iterations: 176090\ncpu: 4514.80322562324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 21823.400647215072,
            "unit": "ns/iter",
            "extra": "iterations: 38318\ncpu: 21823.200584581642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 17599.878389071633,
            "unit": "ns/iter",
            "extra": "iterations: 48022\ncpu: 17599.537711882087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 17367.29696109535,
            "unit": "ns/iter",
            "extra": "iterations: 47912\ncpu: 17366.933127400247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 18056.77053171622,
            "unit": "ns/iter",
            "extra": "iterations: 46002\ncpu: 18056.362766836213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 45014.28690273103,
            "unit": "ns/iter",
            "extra": "iterations: 18752\ncpu: 45013.27325085301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 565065.1481481497,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 565036.909323118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 434900.7308467789,
            "unit": "ns/iter",
            "extra": "iterations: 1984\ncpu: 434882.51008064643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 439111.7302140402,
            "unit": "ns/iter",
            "extra": "iterations: 2009\ncpu: 439093.0313588868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 434453.9616895854,
            "unit": "ns/iter",
            "extra": "iterations: 2036\ncpu: 434433.05500982236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 258268.69887510716,
            "unit": "ns/iter",
            "extra": "iterations: 3467\ncpu: 258263.7438707816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 432350.7511244394,
            "unit": "ns/iter",
            "extra": "iterations: 2001\ncpu: 432346.576711643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 625.8821997911926,
            "unit": "ns/iter",
            "extra": "iterations: 1127307\ncpu: 625.8588831613738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5882.569030000013,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5882.52599999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11418.051471493685,
            "unit": "ns/iter",
            "extra": "iterations: 73089\ncpu: 11417.437644515576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16526.689736904387,
            "unit": "ns/iter",
            "extra": "iterations: 50628\ncpu: 16525.428616575788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22186.431664806994,
            "unit": "ns/iter",
            "extra": "iterations: 37638\ncpu: 22185.320686540268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27213.59765713775,
            "unit": "ns/iter",
            "extra": "iterations: 30817\ncpu: 27212.869520070133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32863.96493292489,
            "unit": "ns/iter",
            "extra": "iterations: 25494\ncpu: 32862.16756883962 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38708.589185744495,
            "unit": "ns/iter",
            "extra": "iterations: 21971\ncpu: 38705.33430431013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 43249.081376184025,
            "unit": "ns/iter",
            "extra": "iterations: 19416\ncpu: 43247.14153275681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 579.7140644167087,
            "unit": "ns/iter",
            "extra": "iterations: 1209748\ncpu: 579.6583255355638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 439.5678570420954,
            "unit": "ns/iter",
            "extra": "iterations: 1594875\ncpu: 439.54266008308184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 446.04477106234816,
            "unit": "ns/iter",
            "extra": "iterations: 1587856\ncpu: 446.0092728811692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 454.33588853605016,
            "unit": "ns/iter",
            "extra": "iterations: 1564129\ncpu: 454.3313243345058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 969.7384643471419,
            "unit": "ns/iter",
            "extra": "iterations: 717558\ncpu: 969.638133781511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2464.190110947926,
            "unit": "ns/iter",
            "extra": "iterations: 324116\ncpu: 2464.064409038702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9470.580443578598,
            "unit": "ns/iter",
            "extra": "iterations: 86253\ncpu: 9469.729748530479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9654.43648227745,
            "unit": "ns/iter",
            "extra": "iterations: 84441\ncpu: 9653.89206665007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10243.578563930758,
            "unit": "ns/iter",
            "extra": "iterations: 80024\ncpu: 10242.58222533252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9871.763725061988,
            "unit": "ns/iter",
            "extra": "iterations: 82404\ncpu: 9871.29993689619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 31138.0166994111,
            "unit": "ns/iter",
            "extra": "iterations: 26468\ncpu: 31134.902523802597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 275565.22976501216,
            "unit": "ns/iter",
            "extra": "iterations: 3064\ncpu: 275549.08616187907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 212489.93467843047,
            "unit": "ns/iter",
            "extra": "iterations: 3965\ncpu: 212458.53720050363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 213183.07384538828,
            "unit": "ns/iter",
            "extra": "iterations: 4049\ncpu: 213167.10298839354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 212906.6515114274,
            "unit": "ns/iter",
            "extra": "iterations: 4069\ncpu: 212885.77045957212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 109415.64445561562,
            "unit": "ns/iter",
            "extra": "iterations: 7954\ncpu: 109408.4611516218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 205402.34497404998,
            "unit": "ns/iter",
            "extra": "iterations: 4238\ncpu: 205376.94667296053 ns\nthreads: 1"
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
        "date": 1702084964831,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1643.8613004168012,
            "unit": "ns/iter",
            "extra": "iterations: 433015\ncpu: 1643.7562209161345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 20410.098460915975,
            "unit": "ns/iter",
            "extra": "iterations: 39569\ncpu: 20409.072758977985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 42844.040463328,
            "unit": "ns/iter",
            "extra": "iterations: 19252\ncpu: 42838.967380012466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 58539.17586399044,
            "unit": "ns/iter",
            "extra": "iterations: 14352\ncpu: 58536.38517279824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 65738.22859493033,
            "unit": "ns/iter",
            "extra": "iterations: 13373\ncpu: 65734.56217752188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 81530.82104274206,
            "unit": "ns/iter",
            "extra": "iterations: 10645\ncpu: 81526.35979333027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 97547.73210798412,
            "unit": "ns/iter",
            "extra": "iterations: 8705\ncpu: 97540.01148765079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 113882.87676793817,
            "unit": "ns/iter",
            "extra": "iterations: 7636\ncpu: 113875.58931377673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 130674.1056862176,
            "unit": "ns/iter",
            "extra": "iterations: 6718\ncpu: 130664.42393569514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1378.1374318044884,
            "unit": "ns/iter",
            "extra": "iterations: 504432\ncpu: 1378.0642385891465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1111.4919451833648,
            "unit": "ns/iter",
            "extra": "iterations: 628568\ncpu: 1111.4165849995554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1215.3636199500063,
            "unit": "ns/iter",
            "extra": "iterations: 576019\ncpu: 1215.3354316437478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1226.7089784421578,
            "unit": "ns/iter",
            "extra": "iterations: 570511\ncpu: 1226.6999234020032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2400.448222302456,
            "unit": "ns/iter",
            "extra": "iterations: 299376\ncpu: 2400.332357971251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6334.440274249687,
            "unit": "ns/iter",
            "extra": "iterations: 129517\ncpu: 6334.420964043338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31834.865351359527,
            "unit": "ns/iter",
            "extra": "iterations: 25444\ncpu: 31834.377456374725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 27678.612220146817,
            "unit": "ns/iter",
            "extra": "iterations: 30507\ncpu: 27678.788474776342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 28453.36029132564,
            "unit": "ns/iter",
            "extra": "iterations: 28971\ncpu: 28453.004728866767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29236.090021655316,
            "unit": "ns/iter",
            "extra": "iterations: 29093\ncpu: 29236.293953872097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64844.25951531369,
            "unit": "ns/iter",
            "extra": "iterations: 13452\ncpu: 64843.183169788805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 680773.9722222354,
            "unit": "ns/iter",
            "extra": "iterations: 1332\ncpu: 680765.9159159159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 538616.6299999787,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538597.099999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 527871.566999977,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 527869.8000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 536973.2040000202,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 536967.6000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 386793.3556723614,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 386780.59570740233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 534654.5289999938,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 534604.5000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 841.8649191197578,
            "unit": "ns/iter",
            "extra": "iterations: 831909\ncpu: 841.8471251062308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 14269.643056204277,
            "unit": "ns/iter",
            "extra": "iterations: 57771\ncpu: 14269.706254002911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 29694.597344381655,
            "unit": "ns/iter",
            "extra": "iterations: 29447\ncpu: 29694.216728359403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 42649.33617200259,
            "unit": "ns/iter",
            "extra": "iterations: 19023\ncpu: 42649.172054880895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 58334.604424599194,
            "unit": "ns/iter",
            "extra": "iterations: 14781\ncpu: 58333.06948109078 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59552.13186498915,
            "unit": "ns/iter",
            "extra": "iterations: 13984\ncpu: 59551.90217391317 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 72408.91218832225,
            "unit": "ns/iter",
            "extra": "iterations: 12914\ncpu: 72408.07650611736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 84064.49044521412,
            "unit": "ns/iter",
            "extra": "iterations: 9838\ncpu: 84064.23053466191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 90189.52169879613,
            "unit": "ns/iter",
            "extra": "iterations: 9701\ncpu: 90186.40346356026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 703.2550364470858,
            "unit": "ns/iter",
            "extra": "iterations: 998571\ncpu: 703.2296151200086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 577.7422180458667,
            "unit": "ns/iter",
            "extra": "iterations: 1217432\ncpu: 577.7190019647919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 589.972569693914,
            "unit": "ns/iter",
            "extra": "iterations: 1187227\ncpu: 589.9556698087214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 578.924926702674,
            "unit": "ns/iter",
            "extra": "iterations: 1211163\ncpu: 578.9218296794046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1197.3327542697587,
            "unit": "ns/iter",
            "extra": "iterations: 583701\ncpu: 1197.2542448959327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4600.135406556756,
            "unit": "ns/iter",
            "extra": "iterations: 172067\ncpu: 4600.12204548228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 22314.500593407494,
            "unit": "ns/iter",
            "extra": "iterations: 37074\ncpu: 22314.034093974144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 17728.385612125046,
            "unit": "ns/iter",
            "extra": "iterations: 46845\ncpu: 17727.689187746793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 17454.763599800764,
            "unit": "ns/iter",
            "extra": "iterations: 48236\ncpu: 17453.51189982585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 17956.65594722295,
            "unit": "ns/iter",
            "extra": "iterations: 45929\ncpu: 17956.173659343764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 44901.46269629998,
            "unit": "ns/iter",
            "extra": "iterations: 18403\ncpu: 44899.29359343599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 569516.805161283,
            "unit": "ns/iter",
            "extra": "iterations: 1550\ncpu: 569484.0000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 432697.3530968647,
            "unit": "ns/iter",
            "extra": "iterations: 1889\ncpu: 432672.15457914444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 430258.1647755311,
            "unit": "ns/iter",
            "extra": "iterations: 2027\ncpu: 430236.8031573754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 436628.25000000006,
            "unit": "ns/iter",
            "extra": "iterations: 2028\ncpu: 436608.0867850111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 252182.85456110662,
            "unit": "ns/iter",
            "extra": "iterations: 3486\ncpu: 252172.51864601343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 429468.61349088745,
            "unit": "ns/iter",
            "extra": "iterations: 2031\ncpu: 429443.2299359907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 622.3267813289663,
            "unit": "ns/iter",
            "extra": "iterations: 1127136\ncpu: 622.2880823609534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5780.3055200000135,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5780.247000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11234.640353123628,
            "unit": "ns/iter",
            "extra": "iterations: 74195\ncpu: 11234.257025405965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 17461.152243181525,
            "unit": "ns/iter",
            "extra": "iterations: 47076\ncpu: 17460.618999065355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 23335.654173669383,
            "unit": "ns/iter",
            "extra": "iterations: 35700\ncpu: 23334.64145658255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27649.084755148167,
            "unit": "ns/iter",
            "extra": "iterations: 28895\ncpu: 27648.506662052354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33941.6040865281,
            "unit": "ns/iter",
            "extra": "iterations: 24177\ncpu: 33939.25631798835 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 39026.05882926354,
            "unit": "ns/iter",
            "extra": "iterations: 20517\ncpu: 39024.31154652241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 45203.20614420692,
            "unit": "ns/iter",
            "extra": "iterations: 18196\ncpu: 45201.18707408227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 593.9949869059011,
            "unit": "ns/iter",
            "extra": "iterations: 1229181\ncpu: 593.9707821712185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 472.1329378586033,
            "unit": "ns/iter",
            "extra": "iterations: 1449903\ncpu: 472.1111688161174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 475.9081058625315,
            "unit": "ns/iter",
            "extra": "iterations: 1458722\ncpu: 475.89211652391583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 482.64625181023695,
            "unit": "ns/iter",
            "extra": "iterations: 1410721\ncpu: 482.6371054233906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1063.9833396360582,
            "unit": "ns/iter",
            "extra": "iterations: 661090\ncpu: 1063.9342600856098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2500.0608701371816,
            "unit": "ns/iter",
            "extra": "iterations: 319237\ncpu: 2500.009397406905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9566.382887299202,
            "unit": "ns/iter",
            "extra": "iterations: 82617\ncpu: 9565.832697870806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9577.30369018268,
            "unit": "ns/iter",
            "extra": "iterations: 86012\ncpu: 9576.8090499001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 11050.951746031906,
            "unit": "ns/iter",
            "extra": "iterations: 78750\ncpu: 11050.23746031744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10087.656568842705,
            "unit": "ns/iter",
            "extra": "iterations: 82427\ncpu: 10087.618134834354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 31863.702378256534,
            "unit": "ns/iter",
            "extra": "iterations: 26490\ncpu: 31863.371083427708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 281553.5936119668,
            "unit": "ns/iter",
            "extra": "iterations: 2943\ncpu: 281547.84233775176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 213584.85087719723,
            "unit": "ns/iter",
            "extra": "iterations: 3990\ncpu: 213582.1804511257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 214727.4982394282,
            "unit": "ns/iter",
            "extra": "iterations: 3976\ncpu: 214723.18913481117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 215857.35267521546,
            "unit": "ns/iter",
            "extra": "iterations: 3981\ncpu: 215850.33911077792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 111672.3930591284,
            "unit": "ns/iter",
            "extra": "iterations: 7780\ncpu: 111666.67095115613 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 207445.67781228304,
            "unit": "ns/iter",
            "extra": "iterations: 4187\ncpu: 207436.58944351308 ns\nthreads: 1"
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
        "date": 1702085570810,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1592.5570311095773,
            "unit": "ns/iter",
            "extra": "iterations: 439383\ncpu: 1592.4444049951867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 18769.439958993546,
            "unit": "ns/iter",
            "extra": "iterations: 43895\ncpu: 18767.636405057525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 39241.32836676191,
            "unit": "ns/iter",
            "extra": "iterations: 20940\ncpu: 39240.238777459395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 58864.83922942227,
            "unit": "ns/iter",
            "extra": "iterations: 14275\ncpu: 58862.1295971979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 67492.20943227538,
            "unit": "ns/iter",
            "extra": "iterations: 13422\ncpu: 67487.974966473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 82329.69074955638,
            "unit": "ns/iter",
            "extra": "iterations: 10713\ncpu: 82325.16568654898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 98240.38858789369,
            "unit": "ns/iter",
            "extra": "iterations: 8675\ncpu: 98236.69164265132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 114333.12255296347,
            "unit": "ns/iter",
            "extra": "iterations: 7458\ncpu: 114325.6503083937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 131379.83870967847,
            "unit": "ns/iter",
            "extra": "iterations: 6603\ncpu: 131378.37346660616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1368.4308159281547,
            "unit": "ns/iter",
            "extra": "iterations: 512300\ncpu: 1368.396642592231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1089.9826924244283,
            "unit": "ns/iter",
            "extra": "iterations: 642551\ncpu: 1089.9808731135754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1092.883247891528,
            "unit": "ns/iter",
            "extra": "iterations: 640982\ncpu: 1092.8857596625185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1076.0948263896198,
            "unit": "ns/iter",
            "extra": "iterations: 648406\ncpu: 1076.095841185923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2194.841350635534,
            "unit": "ns/iter",
            "extra": "iterations: 323966\ncpu: 2194.847916139349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6431.716245746579,
            "unit": "ns/iter",
            "extra": "iterations: 128132\ncpu: 6431.736802672246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30972.16968047364,
            "unit": "ns/iter",
            "extra": "iterations: 26821\ncpu: 30971.999552589397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 26443.114567017125,
            "unit": "ns/iter",
            "extra": "iterations: 31283\ncpu: 26442.39363232424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 27944.7193487238,
            "unit": "ns/iter",
            "extra": "iterations: 29542\ncpu: 27944.23871098773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29945.15232577367,
            "unit": "ns/iter",
            "extra": "iterations: 30205\ncpu: 29944.452905148177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64114.9884401525,
            "unit": "ns/iter",
            "extra": "iterations: 13668\ncpu: 64111.230611647654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 651412.2350000093,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 651411.600000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 512758.4420000062,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512725.2999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 512655.99299998145,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512640.10000000225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 514647.53000001906,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514603.49999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 364878.31356283894,
            "unit": "ns/iter",
            "extra": "iterations: 2411\ncpu: 364868.2704272077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 515350.6020000123,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515318.9999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 836.3009180789504,
            "unit": "ns/iter",
            "extra": "iterations: 841322\ncpu: 836.2844428173775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12609.167526327166,
            "unit": "ns/iter",
            "extra": "iterations: 65142\ncpu: 12608.994197292084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27078.332874015498,
            "unit": "ns/iter",
            "extra": "iterations: 30480\ncpu: 27078.310367454054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40596.63136703128,
            "unit": "ns/iter",
            "extra": "iterations: 20614\ncpu: 40595.789269428526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 54107.39597879452,
            "unit": "ns/iter",
            "extra": "iterations: 15468\ncpu: 54107.35712438588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 56944.26299999975,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56939.53 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 67334.73098777799,
            "unit": "ns/iter",
            "extra": "iterations: 12847\ncpu: 67334.85638670507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 78772.7701649437,
            "unit": "ns/iter",
            "extra": "iterations: 11034\ncpu: 78771.4065615372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 90052.23262498665,
            "unit": "ns/iter",
            "extra": "iterations: 9741\ncpu: 90050.73401088205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 639.479510220672,
            "unit": "ns/iter",
            "extra": "iterations: 1093472\ncpu: 639.470969535567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 520.6362203531307,
            "unit": "ns/iter",
            "extra": "iterations: 1346348\ncpu: 520.6350809746106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 521.9263583662313,
            "unit": "ns/iter",
            "extra": "iterations: 1347906\ncpu: 521.9257129206336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 511.40501235858403,
            "unit": "ns/iter",
            "extra": "iterations: 1366662\ncpu: 511.4061121184316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1050.2099878934132,
            "unit": "ns/iter",
            "extra": "iterations: 668229\ncpu: 1050.1986594415957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4513.664273287108,
            "unit": "ns/iter",
            "extra": "iterations: 176459\ncpu: 4513.662663848237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 21788.04151259956,
            "unit": "ns/iter",
            "extra": "iterations: 38133\ncpu: 21788.11790312864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 17250.45133387338,
            "unit": "ns/iter",
            "extra": "iterations: 48093\ncpu: 17250.402345455783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 17153.338187467078,
            "unit": "ns/iter",
            "extra": "iterations: 48275\ncpu: 17153.02951838414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 17712.34268375448,
            "unit": "ns/iter",
            "extra": "iterations: 47128\ncpu: 17711.924970293687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 45022.466205630924,
            "unit": "ns/iter",
            "extra": "iterations: 18509\ncpu: 45022.55119131234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 545379.8287671227,
            "unit": "ns/iter",
            "extra": "iterations: 1606\ncpu: 545360.0871731016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 430215.64688575367,
            "unit": "ns/iter",
            "extra": "iterations: 2039\ncpu: 430208.77881314093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 430315.58034397865,
            "unit": "ns/iter",
            "extra": "iterations: 2035\ncpu: 430316.9533169535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 429972.78677193756,
            "unit": "ns/iter",
            "extra": "iterations: 2026\ncpu: 429946.1994077002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 253628.85981577748,
            "unit": "ns/iter",
            "extra": "iterations: 3474\ncpu: 253618.56649395433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 433873.7082096794,
            "unit": "ns/iter",
            "extra": "iterations: 2022\ncpu: 433850.93966370256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 631.0690290920219,
            "unit": "ns/iter",
            "extra": "iterations: 1106490\ncpu: 631.0382380319793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5879.459640069178,
            "unit": "ns/iter",
            "extra": "iterations: 137971\ncpu: 5879.180407476945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11305.916190710672,
            "unit": "ns/iter",
            "extra": "iterations: 73011\ncpu: 11305.51834655052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16887.722013029495,
            "unit": "ns/iter",
            "extra": "iterations: 50193\ncpu: 16886.8627099396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22035.962803816416,
            "unit": "ns/iter",
            "extra": "iterations: 37934\ncpu: 22035.27706015723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27475.579891573176,
            "unit": "ns/iter",
            "extra": "iterations: 30435\ncpu: 27474.348611795584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33234.46362781259,
            "unit": "ns/iter",
            "extra": "iterations: 25514\ncpu: 33233.47181939308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38852.02947845926,
            "unit": "ns/iter",
            "extra": "iterations: 21609\ncpu: 38851.15923920596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 44022.808115005304,
            "unit": "ns/iter",
            "extra": "iterations: 19199\ncpu: 44020.964633574484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 568.2003251020288,
            "unit": "ns/iter",
            "extra": "iterations: 1234074\ncpu: 568.2003672389185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 433.3890105804218,
            "unit": "ns/iter",
            "extra": "iterations: 1613825\ncpu: 433.38422691431833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 438.8829439337309,
            "unit": "ns/iter",
            "extra": "iterations: 1596218\ncpu: 438.8719460625044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 440.67501189958597,
            "unit": "ns/iter",
            "extra": "iterations: 1577787\ncpu: 440.64914972680106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 960.6978522317422,
            "unit": "ns/iter",
            "extra": "iterations: 719072\ncpu: 960.6547049530443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2578.930716603797,
            "unit": "ns/iter",
            "extra": "iterations: 324782\ncpu: 2578.770991003195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9389.955509546997,
            "unit": "ns/iter",
            "extra": "iterations: 86940\ncpu: 9389.589371980643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9535.327133084094,
            "unit": "ns/iter",
            "extra": "iterations: 85803\ncpu: 9534.874072002174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10389.313472255528,
            "unit": "ns/iter",
            "extra": "iterations: 79133\ncpu: 10389.204251071105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9985.126310655953,
            "unit": "ns/iter",
            "extra": "iterations: 82020\ncpu: 9985.035357230057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 31161.468142464735,
            "unit": "ns/iter",
            "extra": "iterations: 26336\ncpu: 31161.493772782633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 273672.8564935097,
            "unit": "ns/iter",
            "extra": "iterations: 3080\ncpu: 273654.1558441552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 216653.82287273553,
            "unit": "ns/iter",
            "extra": "iterations: 4031\ncpu: 216644.3066236646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 212591.3428500495,
            "unit": "ns/iter",
            "extra": "iterations: 4028\ncpu: 212577.58192651434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 216135.54234769943,
            "unit": "ns/iter",
            "extra": "iterations: 4038\ncpu: 216127.51362060412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 110124.70676977436,
            "unit": "ns/iter",
            "extra": "iterations: 7888\ncpu: 110119.61206896529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 206315.2525443809,
            "unit": "ns/iter",
            "extra": "iterations: 4225\ncpu: 206302.4378698222 ns\nthreads: 1"
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
        "date": 1702244198740,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1723.0677347636267,
            "unit": "ns/iter",
            "extra": "iterations: 418751\ncpu: 1722.8937960745168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 26178.64056218512,
            "unit": "ns/iter",
            "extra": "iterations: 31591\ncpu: 26176.999778417907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 53382.954064283615,
            "unit": "ns/iter",
            "extra": "iterations: 15587\ncpu: 53379.48290241868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 66795.0113037487,
            "unit": "ns/iter",
            "extra": "iterations: 13093\ncpu: 66792.55327274119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 96986.82546348254,
            "unit": "ns/iter",
            "extra": "iterations: 9763\ncpu: 96979.33012393728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 119926.22569159174,
            "unit": "ns/iter",
            "extra": "iterations: 7302\ncpu: 119923.0758696247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 141868.474342103,
            "unit": "ns/iter",
            "extra": "iterations: 6080\ncpu: 141860.46052631584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 163280.50218839291,
            "unit": "ns/iter",
            "extra": "iterations: 5255\ncpu: 163277.31684110354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 182203.13159004346,
            "unit": "ns/iter",
            "extra": "iterations: 4742\ncpu: 182194.68578658818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1480.943523989729,
            "unit": "ns/iter",
            "extra": "iterations: 473015\ncpu: 1480.9124446370627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1183.5761558204294,
            "unit": "ns/iter",
            "extra": "iterations: 592220\ncpu: 1183.5409138495847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1203.6095050308409,
            "unit": "ns/iter",
            "extra": "iterations: 586279\ncpu: 1203.5745779739707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1189.4284342930403,
            "unit": "ns/iter",
            "extra": "iterations: 585448\ncpu: 1189.3927385523564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2291.816716007849,
            "unit": "ns/iter",
            "extra": "iterations: 305695\ncpu: 2291.7872389146055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7733.623463896452,
            "unit": "ns/iter",
            "extra": "iterations: 106845\ncpu: 7733.419439374809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 45803.77460597447,
            "unit": "ns/iter",
            "extra": "iterations: 18146\ncpu: 45802.733384768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 36028.22604048983,
            "unit": "ns/iter",
            "extra": "iterations: 23018\ncpu: 36025.62776957159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 34367.89556844757,
            "unit": "ns/iter",
            "extra": "iterations: 24303\ncpu: 34366.716043286855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 34989.11445808683,
            "unit": "ns/iter",
            "extra": "iterations: 23537\ncpu: 34986.8887283851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 82053.26175830331,
            "unit": "ns/iter",
            "extra": "iterations: 10567\ncpu: 82050.20346361308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 872555.5416293769,
            "unit": "ns/iter",
            "extra": "iterations: 1117\ncpu: 872527.0367054625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 689830.7246031784,
            "unit": "ns/iter",
            "extra": "iterations: 1260\ncpu: 689801.9047619038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 676505.8938181854,
            "unit": "ns/iter",
            "extra": "iterations: 1375\ncpu: 676476.5818181812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 688596.8227941173,
            "unit": "ns/iter",
            "extra": "iterations: 1360\ncpu: 688565.294117645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 487917.64705882705,
            "unit": "ns/iter",
            "extra": "iterations: 1819\ncpu: 487900.7146783957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 963.7379864416329,
            "unit": "ns/iter",
            "extra": "iterations: 726783\ncpu: 963.7118644767394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19531.442610617003,
            "unit": "ns/iter",
            "extra": "iterations: 42534\ncpu: 19530.119433864646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 41643.72674447444,
            "unit": "ns/iter",
            "extra": "iterations: 20135\ncpu: 41634.75043456663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 52188.97879999815,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52185.95999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 69140.20442822007,
            "unit": "ns/iter",
            "extra": "iterations: 12601\ncpu: 69138.42552178376 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 86758.37151886316,
            "unit": "ns/iter",
            "extra": "iterations: 10126\ncpu: 86753.71321350969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 103664.30073669423,
            "unit": "ns/iter",
            "extra": "iterations: 8416\ncpu: 103661.31178707242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 121240.45589447873,
            "unit": "ns/iter",
            "extra": "iterations: 7278\ncpu: 121236.41110195107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 137136.80949387047,
            "unit": "ns/iter",
            "extra": "iterations: 6362\ncpu: 137134.1716441372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 804.2962206168573,
            "unit": "ns/iter",
            "extra": "iterations: 870142\ncpu: 804.2696479425183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 652.1626151714834,
            "unit": "ns/iter",
            "extra": "iterations: 1075570\ncpu: 652.1326366484777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 655.9655711156507,
            "unit": "ns/iter",
            "extra": "iterations: 1068260\ncpu: 655.9471476981261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 657.3843331652008,
            "unit": "ns/iter",
            "extra": "iterations: 1066546\ncpu: 657.3392990082065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1301.1383646513063,
            "unit": "ns/iter",
            "extra": "iterations: 538136\ncpu: 1301.1121723876454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5495.245360000069,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5495.067999999961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 31944.380552035804,
            "unit": "ns/iter",
            "extra": "iterations: 26049\ncpu: 31943.015086951404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 26096.376474318844,
            "unit": "ns/iter",
            "extra": "iterations: 31540\ncpu: 26095.323398858487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 25716.1344042671,
            "unit": "ns/iter",
            "extra": "iterations: 32246\ncpu: 25715.33833653801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 25296.512236157483,
            "unit": "ns/iter",
            "extra": "iterations: 32690\ncpu: 25295.827470174398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 54142.114199999014,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54138.749999999905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 605846.0070000251,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 605816.5000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 514953.9180000033,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 514941.70000000135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 506845.6510000203,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506812.40000000113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 504153.93899999117,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504147.599999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 373935.1074904797,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 373920.8633093527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 500405.4259999862,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 500364.8000000069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 622.6300277977114,
            "unit": "ns/iter",
            "extra": "iterations: 1115200\ncpu: 622.6182747489238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5725.380829999835,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5725.23099999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10980.160841389325,
            "unit": "ns/iter",
            "extra": "iterations: 75304\ncpu: 10979.888186550546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16626.35443504553,
            "unit": "ns/iter",
            "extra": "iterations: 51544\ncpu: 16625.983625640103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21624.45427036036,
            "unit": "ns/iter",
            "extra": "iterations: 38334\ncpu: 21623.74915218873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27161.300374775685,
            "unit": "ns/iter",
            "extra": "iterations: 30685\ncpu: 27160.720221606778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32732.027124985743,
            "unit": "ns/iter",
            "extra": "iterations: 25659\ncpu: 32731.388596593926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37409.79367571249,
            "unit": "ns/iter",
            "extra": "iterations: 22295\ncpu: 37408.975106526086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42764.53221000655,
            "unit": "ns/iter",
            "extra": "iterations: 19466\ncpu: 42763.983355594675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 601.555046924668,
            "unit": "ns/iter",
            "extra": "iterations: 1158666\ncpu: 601.5373714254149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 463.5987025434808,
            "unit": "ns/iter",
            "extra": "iterations: 1508644\ncpu: 463.592935112592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 464.2937358603691,
            "unit": "ns/iter",
            "extra": "iterations: 1506847\ncpu: 464.2795851204522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 460.1976317926287,
            "unit": "ns/iter",
            "extra": "iterations: 1522164\ncpu: 460.1855647617443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 941.2459214053525,
            "unit": "ns/iter",
            "extra": "iterations: 742290\ncpu: 941.2266095461404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2504.1903326575666,
            "unit": "ns/iter",
            "extra": "iterations: 319157\ncpu: 2504.12085587972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13068.502692540906,
            "unit": "ns/iter",
            "extra": "iterations: 62766\ncpu: 13068.141987700294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10228.87309543902,
            "unit": "ns/iter",
            "extra": "iterations: 80596\ncpu: 10228.74212119704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10398.213941486865,
            "unit": "ns/iter",
            "extra": "iterations: 79059\ncpu: 10397.92939450279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9896.903915828725,
            "unit": "ns/iter",
            "extra": "iterations: 83354\ncpu: 9896.776399452934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 31678.10949182081,
            "unit": "ns/iter",
            "extra": "iterations: 26349\ncpu: 31676.85301149924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 283013.2585700289,
            "unit": "ns/iter",
            "extra": "iterations: 3063\ncpu: 283005.97453477094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 219982.84640688388,
            "unit": "ns/iter",
            "extra": "iterations: 3952\ncpu: 219977.45445344146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 221902.9726831802,
            "unit": "ns/iter",
            "extra": "iterations: 3917\ncpu: 221897.983150368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 221001.88378583686,
            "unit": "ns/iter",
            "extra": "iterations: 3941\ncpu: 220993.19969550712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 111854.78206756634,
            "unit": "ns/iter",
            "extra": "iterations: 7874\ncpu: 111850.86360172735 ns\nthreads: 1"
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
        "date": 1702285092133,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1713.3685860316705,
            "unit": "ns/iter",
            "extra": "iterations: 367830\ncpu: 1713.3254492564504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25752.974287698755,
            "unit": "ns/iter",
            "extra": "iterations: 31658\ncpu: 25751.465664287072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 52926.85391182699,
            "unit": "ns/iter",
            "extra": "iterations: 15696\ncpu: 52923.92966360858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 65981.53861819353,
            "unit": "ns/iter",
            "extra": "iterations: 13258\ncpu: 65978.18675516668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 96543.44504396785,
            "unit": "ns/iter",
            "extra": "iterations: 10008\ncpu: 96537.93964828139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 119344.57087814613,
            "unit": "ns/iter",
            "extra": "iterations: 6229\ncpu: 119337.11671215287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 141783.13704250832,
            "unit": "ns/iter",
            "extra": "iterations: 6093\ncpu: 141777.8926637124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 164695.48234624136,
            "unit": "ns/iter",
            "extra": "iterations: 5268\ncpu: 164689.4077448746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 182660.30851961108,
            "unit": "ns/iter",
            "extra": "iterations: 4742\ncpu: 182651.56052298585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1516.9418114780024,
            "unit": "ns/iter",
            "extra": "iterations: 462153\ncpu: 1516.8372811601353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1236.3090647002996,
            "unit": "ns/iter",
            "extra": "iterations: 583428\ncpu: 1236.2702852794182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1207.25404322755,
            "unit": "ns/iter",
            "extra": "iterations: 581157\ncpu: 1207.2273069067412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1202.0186308247296,
            "unit": "ns/iter",
            "extra": "iterations: 583227\ncpu: 1201.9608145713405 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2287.511772526658,
            "unit": "ns/iter",
            "extra": "iterations: 305372\ncpu: 2287.4169864951587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7758.21604635358,
            "unit": "ns/iter",
            "extra": "iterations: 105968\ncpu: 7757.4513060546615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 47214.711315253684,
            "unit": "ns/iter",
            "extra": "iterations: 18179\ncpu: 47213.32306507506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 36617.993405038804,
            "unit": "ns/iter",
            "extra": "iterations: 22593\ncpu: 36616.567078298554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 35586.26106857089,
            "unit": "ns/iter",
            "extra": "iterations: 23377\ncpu: 35584.155366385676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 35809.32330631624,
            "unit": "ns/iter",
            "extra": "iterations: 23071\ncpu: 35808.387152702555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 82554.39696230889,
            "unit": "ns/iter",
            "extra": "iterations: 10666\ncpu: 82548.171760735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 882617.2242152607,
            "unit": "ns/iter",
            "extra": "iterations: 1115\ncpu: 882580.8071748872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 689538.4514737634,
            "unit": "ns/iter",
            "extra": "iterations: 1391\ncpu: 689504.3853342939 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 705773.2516507693,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 704877.9163609674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 680576.992636241,
            "unit": "ns/iter",
            "extra": "iterations: 1358\ncpu: 680526.7304860107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 485664.61163434206,
            "unit": "ns/iter",
            "extra": "iterations: 1805\ncpu: 485612.07756232494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 955.074490109571,
            "unit": "ns/iter",
            "extra": "iterations: 738541\ncpu: 954.9855729065829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19530.84786585353,
            "unit": "ns/iter",
            "extra": "iterations: 42640\ncpu: 19529.603658536576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 41592.21151848069,
            "unit": "ns/iter",
            "extra": "iterations: 20211\ncpu: 41589.15442086006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 52191.62180000012,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52187.080000000205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 69993.28686820362,
            "unit": "ns/iter",
            "extra": "iterations: 12504\ncpu: 69989.02751119634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 88493.19337403758,
            "unit": "ns/iter",
            "extra": "iterations: 9991\ncpu: 88488.06926233589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 104922.9116973891,
            "unit": "ns/iter",
            "extra": "iterations: 8301\ncpu: 104916.81725093337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 122657.79298737792,
            "unit": "ns/iter",
            "extra": "iterations: 7130\ncpu: 122646.07293127586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 139624.77989434716,
            "unit": "ns/iter",
            "extra": "iterations: 6247\ncpu: 139618.16872098632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 793.8375679993276,
            "unit": "ns/iter",
            "extra": "iterations: 880707\ncpu: 793.8067938599298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 648.7131027507667,
            "unit": "ns/iter",
            "extra": "iterations: 1061861\ncpu: 648.6585344032837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 648.9818738669402,
            "unit": "ns/iter",
            "extra": "iterations: 1076181\ncpu: 648.9305237687722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 659.1056982946582,
            "unit": "ns/iter",
            "extra": "iterations: 1064880\ncpu: 659.0651528810786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1276.6719634293909,
            "unit": "ns/iter",
            "extra": "iterations: 548637\ncpu: 1276.5754041378857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5495.745260000149,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5495.433999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 32004.545682538577,
            "unit": "ns/iter",
            "extra": "iterations: 25918\ncpu: 32002.79342541851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 25381.52610131948,
            "unit": "ns/iter",
            "extra": "iterations: 32393\ncpu: 25379.572747198374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 24904.285666858385,
            "unit": "ns/iter",
            "extra": "iterations: 33133\ncpu: 24903.39238825351 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 25246.84572673145,
            "unit": "ns/iter",
            "extra": "iterations: 32598\ncpu: 25245.95680716607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 54126.91119999522,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54121.360000000604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 620930.2450000109,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 620872.9000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 519954.255000016,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 519930.60000000213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 507439.4520000283,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507396.700000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 513924.15300000494,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513907.599999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 373973.97035153623,
            "unit": "ns/iter",
            "extra": "iterations: 2361\ncpu: 373953.53663701814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 512235.24800002447,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512236.1999999967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 627.8435178404169,
            "unit": "ns/iter",
            "extra": "iterations: 1116958\ncpu: 627.8053427255096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5778.579949999881,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5778.09000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11008.10517338582,
            "unit": "ns/iter",
            "extra": "iterations: 72699\ncpu: 11007.945088653221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16635.869535940066,
            "unit": "ns/iter",
            "extra": "iterations: 51976\ncpu: 16632.651608434633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22116.087578857663,
            "unit": "ns/iter",
            "extra": "iterations: 37726\ncpu: 22115.50389651687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27611.406835174923,
            "unit": "ns/iter",
            "extra": "iterations: 30226\ncpu: 27609.78958512536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33203.13993228526,
            "unit": "ns/iter",
            "extra": "iterations: 25105\ncpu: 33201.6729735113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38614.53172524733,
            "unit": "ns/iter",
            "extra": "iterations: 21765\ncpu: 38613.24603721598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 43669.82666457351,
            "unit": "ns/iter",
            "extra": "iterations: 19119\ncpu: 43668.01087923011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 598.2792654764146,
            "unit": "ns/iter",
            "extra": "iterations: 1163094\ncpu: 598.2641987663966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 462.3678092362348,
            "unit": "ns/iter",
            "extra": "iterations: 1520666\ncpu: 462.3451172052229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 463.51877955735023,
            "unit": "ns/iter",
            "extra": "iterations: 1509354\ncpu: 463.5176373468366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 465.6905689763502,
            "unit": "ns/iter",
            "extra": "iterations: 1499869\ncpu: 465.65833416118113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 942.1073151249564,
            "unit": "ns/iter",
            "extra": "iterations: 713590\ncpu: 942.0797656917845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2496.88453899202,
            "unit": "ns/iter",
            "extra": "iterations: 318194\ncpu: 2496.782151769045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 13572.33211237253,
            "unit": "ns/iter",
            "extra": "iterations: 60335\ncpu: 13572.299660230348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10303.716529255134,
            "unit": "ns/iter",
            "extra": "iterations: 77747\ncpu: 10303.203982147159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10439.881224457273,
            "unit": "ns/iter",
            "extra": "iterations: 76834\ncpu: 10439.390113751593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10160.230155798541,
            "unit": "ns/iter",
            "extra": "iterations: 78499\ncpu: 10159.501394922094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 31603.657219353834,
            "unit": "ns/iter",
            "extra": "iterations: 26145\ncpu: 31603.02543507349 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 285283.8768042997,
            "unit": "ns/iter",
            "extra": "iterations: 2979\ncpu: 285265.5253440755 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 221508.58237547273,
            "unit": "ns/iter",
            "extra": "iterations: 3915\ncpu: 221500.20434227446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 223260.24412064537,
            "unit": "ns/iter",
            "extra": "iterations: 3912\ncpu: 223250.8691206516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 222076.9541401322,
            "unit": "ns/iter",
            "extra": "iterations: 3925\ncpu: 222076.48407643434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 113175.10477797603,
            "unit": "ns/iter",
            "extra": "iterations: 7702\ncpu: 113171.15035055904 ns\nthreads: 1"
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
        "date": 1702309459973,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1780.3418149738436,
            "unit": "ns/iter",
            "extra": "iterations: 418276\ncpu: 1780.2931557153652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 26991.965007901817,
            "unit": "ns/iter",
            "extra": "iterations: 31007\ncpu: 26981.668655464895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 51564.312732226754,
            "unit": "ns/iter",
            "extra": "iterations: 16148\ncpu: 51560.66385930146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 64393.23396115429,
            "unit": "ns/iter",
            "extra": "iterations: 13592\ncpu: 64391.80400235431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 95357.20850855845,
            "unit": "ns/iter",
            "extra": "iterations: 10225\ncpu: 95352.64547677261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 116767.33868140868,
            "unit": "ns/iter",
            "extra": "iterations: 7417\ncpu: 116763.4353512202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 141067.61425813014,
            "unit": "ns/iter",
            "extra": "iterations: 6214\ncpu: 141063.83971676862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 160785.373167567,
            "unit": "ns/iter",
            "extra": "iterations: 5389\ncpu: 160779.04991649665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 178410.62335176303,
            "unit": "ns/iter",
            "extra": "iterations: 4702\ncpu: 178401.06337728645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1434.5143233217136,
            "unit": "ns/iter",
            "extra": "iterations: 485467\ncpu: 1434.4783476528787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1173.8245201592408,
            "unit": "ns/iter",
            "extra": "iterations: 598063\ncpu: 1173.7761740819976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1131.7792787984156,
            "unit": "ns/iter",
            "extra": "iterations: 618246\ncpu: 1131.7638933369592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1140.6214533702437,
            "unit": "ns/iter",
            "extra": "iterations: 616677\ncpu: 1140.6011574941176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2305.8117426691992,
            "unit": "ns/iter",
            "extra": "iterations: 301635\ncpu: 2305.663798962322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7201.502083260415,
            "unit": "ns/iter",
            "extra": "iterations: 114244\ncpu: 7201.214068134869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 36734.061834655055,
            "unit": "ns/iter",
            "extra": "iterations: 22075\ncpu: 36732.02265005663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 32846.5839230334,
            "unit": "ns/iter",
            "extra": "iterations: 25154\ncpu: 32845.054464498695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 33037.249656579785,
            "unit": "ns/iter",
            "extra": "iterations: 25479\ncpu: 33031.598571372604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 33119.562611300265,
            "unit": "ns/iter",
            "extra": "iterations: 24708\ncpu: 33117.71895742271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 76932.38385343582,
            "unit": "ns/iter",
            "extra": "iterations: 11408\ncpu: 76929.19880785402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 829073.2246696119,
            "unit": "ns/iter",
            "extra": "iterations: 1135\ncpu: 829036.8281938345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 683219.3856729369,
            "unit": "ns/iter",
            "extra": "iterations: 1382\ncpu: 683191.5340086836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 684125.1659356762,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 684091.0818713438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 679059.1706959608,
            "unit": "ns/iter",
            "extra": "iterations: 1365\ncpu: 679029.523809523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 470364.0010729695,
            "unit": "ns/iter",
            "extra": "iterations: 1864\ncpu: 470347.8004291845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 983.0004263605397,
            "unit": "ns/iter",
            "extra": "iterations: 715357\ncpu: 982.9289431710326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18339.660014553614,
            "unit": "ns/iter",
            "extra": "iterations: 45349\ncpu: 18338.470528567366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 39841.767661949576,
            "unit": "ns/iter",
            "extra": "iterations: 21133\ncpu: 39841.839776652625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 50578.89290000049,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50571.75000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 67084.40746715886,
            "unit": "ns/iter",
            "extra": "iterations: 13017\ncpu: 67081.99277867402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 84167.25215454747,
            "unit": "ns/iter",
            "extra": "iterations: 10327\ncpu: 84162.99990316632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 100734.37251502504,
            "unit": "ns/iter",
            "extra": "iterations: 8652\ncpu: 100731.21821544171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 117217.15183597257,
            "unit": "ns/iter",
            "extra": "iterations: 7462\ncpu: 117210.62717770025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 133485.23159509763,
            "unit": "ns/iter",
            "extra": "iterations: 6520\ncpu: 133480.75153374232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 869.6520386149285,
            "unit": "ns/iter",
            "extra": "iterations: 801451\ncpu: 869.6169821985377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 665.2948772376916,
            "unit": "ns/iter",
            "extra": "iterations: 1057613\ncpu: 665.2916520504186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 657.6566040429668,
            "unit": "ns/iter",
            "extra": "iterations: 1064666\ncpu: 657.6321588178778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 659.1440927768019,
            "unit": "ns/iter",
            "extra": "iterations: 1059144\ncpu: 659.0963079619024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1345.8290476199022,
            "unit": "ns/iter",
            "extra": "iterations: 520139\ncpu: 1345.774302638326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5387.016159999689,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5386.944999999983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 27382.174250138716,
            "unit": "ns/iter",
            "extra": "iterations: 30439\ncpu: 27381.750386017906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 23174.21023139034,
            "unit": "ns/iter",
            "extra": "iterations: 35870\ncpu: 23174.245887928508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 22289.828856915738,
            "unit": "ns/iter",
            "extra": "iterations: 37530\ncpu: 22289.696243005452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 22881.76525744328,
            "unit": "ns/iter",
            "extra": "iterations: 36474\ncpu: 22880.983714426733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 50485.1834999954,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50484.00999999956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 620315.0999999706,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 620274.1999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 516374.75199999014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 516366.99999999534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 508527.3490000191,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508475.40000000177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 509447.39499999513,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 509436.80000000313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 359905.8899345375,
            "unit": "ns/iter",
            "extra": "iterations: 2444\ncpu: 359890.7528641574 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 505233.3970000404,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505212.2000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 614.1883867295671,
            "unit": "ns/iter",
            "extra": "iterations: 1099828\ncpu: 614.1632146117394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5790.963720000376,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5790.502000000047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11238.25386900272,
            "unit": "ns/iter",
            "extra": "iterations: 73727\ncpu: 11237.908771549102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16775.177990634984,
            "unit": "ns/iter",
            "extra": "iterations: 51469\ncpu: 16775.208377858526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21912.014865968667,
            "unit": "ns/iter",
            "extra": "iterations: 37939\ncpu: 21912.066738712114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27390.015462064468,
            "unit": "ns/iter",
            "extra": "iterations: 30591\ncpu: 27389.807459710235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32579.09648029857,
            "unit": "ns/iter",
            "extra": "iterations: 25684\ncpu: 32578.7221616569 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37856.35856719214,
            "unit": "ns/iter",
            "extra": "iterations: 21915\ncpu: 37855.28633356135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 43134.503329866166,
            "unit": "ns/iter",
            "extra": "iterations: 19220\ncpu: 43134.55775234134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 571.6119388617543,
            "unit": "ns/iter",
            "extra": "iterations: 1215409\ncpu: 571.590797830195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 434.2379128819008,
            "unit": "ns/iter",
            "extra": "iterations: 1562614\ncpu: 434.24268565365594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 523.6072719999925,
            "unit": "ns/iter",
            "extra": "iterations: 1000000\ncpu: 523.5963000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 483.7096663093488,
            "unit": "ns/iter",
            "extra": "iterations: 1445950\ncpu: 483.71077838099575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 1059.7700087076282,
            "unit": "ns/iter",
            "extra": "iterations: 663786\ncpu: 1059.7243689984418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2445.9547450103914,
            "unit": "ns/iter",
            "extra": "iterations: 328229\ncpu: 2445.9584619275047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9573.007535714223,
            "unit": "ns/iter",
            "extra": "iterations: 84000\ncpu: 9572.932142857144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9537.48645223357,
            "unit": "ns/iter",
            "extra": "iterations: 85217\ncpu: 9537.499559946946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9549.657071427171,
            "unit": "ns/iter",
            "extra": "iterations: 85598\ncpu: 9549.679899063061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9938.064709378265,
            "unit": "ns/iter",
            "extra": "iterations: 82461\ncpu: 9937.729350844707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 31428.42628734389,
            "unit": "ns/iter",
            "extra": "iterations: 26644\ncpu: 31428.539258369805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 271878.1419193671,
            "unit": "ns/iter",
            "extra": "iterations: 3199\ncpu: 271869.7405439218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 213636.11657337428,
            "unit": "ns/iter",
            "extra": "iterations: 4109\ncpu: 213626.4541250903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 215141.91258570223,
            "unit": "ns/iter",
            "extra": "iterations: 4084\ncpu: 215134.9167482841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 214550.16929911758,
            "unit": "ns/iter",
            "extra": "iterations: 4052\ncpu: 214539.01776900343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 109643.40976163116,
            "unit": "ns/iter",
            "extra": "iterations: 7929\ncpu: 109638.9204187177 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}