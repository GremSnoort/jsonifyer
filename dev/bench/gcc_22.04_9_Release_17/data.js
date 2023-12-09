window.BENCHMARK_DATA = {
  "lastUpdate": 1702084965503,
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
      }
    ]
  }
}