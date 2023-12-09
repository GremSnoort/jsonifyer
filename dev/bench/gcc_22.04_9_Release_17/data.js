window.BENCHMARK_DATA = {
  "lastUpdate": 1702084718880,
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
      }
    ]
  }
}