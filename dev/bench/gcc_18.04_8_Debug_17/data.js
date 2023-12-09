window.BENCHMARK_DATA = {
  "lastUpdate": 1702084755727,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-8 18.04 Debug c++-17": [
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
        "date": 1702084754668,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15551.38793234793,
            "unit": "ns/iter",
            "extra": "iterations: 45941\ncpu: 15549.713763305108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 127388.23951915835,
            "unit": "ns/iter",
            "extra": "iterations: 6655\ncpu: 127383.45604808413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 240088.1971246892,
            "unit": "ns/iter",
            "extra": "iterations: 3617\ncpu: 240084.04755322088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 349033.92021061253,
            "unit": "ns/iter",
            "extra": "iterations: 2469\ncpu: 349023.9368165249 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 459483.18253968627,
            "unit": "ns/iter",
            "extra": "iterations: 1890\ncpu: 459468.1481481481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 577068.6876254204,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 577048.0936454855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 552261.8340000066,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 552250.8999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 638790.2049999923,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 638764.7000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 726728.9235618587,
            "unit": "ns/iter",
            "extra": "iterations: 1269\ncpu: 726310.0078802204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11972.114576039372,
            "unit": "ns/iter",
            "extra": "iterations: 58555\ncpu: 11971.660831696703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9915.469870996787,
            "unit": "ns/iter",
            "extra": "iterations: 70696\ncpu: 9915.194636188762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9929.486804974433,
            "unit": "ns/iter",
            "extra": "iterations: 70519\ncpu: 9928.949644776589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9927.348906728375,
            "unit": "ns/iter",
            "extra": "iterations: 71254\ncpu: 9926.790074943152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16599.81294405781,
            "unit": "ns/iter",
            "extra": "iterations: 41239\ncpu: 16599.29435728315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 51965.998000000014,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51964.779999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 282809.003641178,
            "unit": "ns/iter",
            "extra": "iterations: 3021\ncpu: 282803.1777557098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 223352.88002100613,
            "unit": "ns/iter",
            "extra": "iterations: 3809\ncpu: 223347.1514833288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 220768.06138306487,
            "unit": "ns/iter",
            "extra": "iterations: 3861\ncpu: 220762.44496244474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 218436.21567623314,
            "unit": "ns/iter",
            "extra": "iterations: 3904\ncpu: 218428.2274590161 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 615748.4532423235,
            "unit": "ns/iter",
            "extra": "iterations: 1465\ncpu: 615738.020477816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3924675.2278481373,
            "unit": "ns/iter",
            "extra": "iterations: 237\ncpu: 3924522.7848101268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3196446.191780766,
            "unit": "ns/iter",
            "extra": "iterations: 292\ncpu: 3196367.1232876796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3173829.0551723777,
            "unit": "ns/iter",
            "extra": "iterations: 290\ncpu: 3173773.793103446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3166337.624573432,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3166201.3651877204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1814162.3124999783,
            "unit": "ns/iter",
            "extra": "iterations: 512\ncpu: 1814144.9218749967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3094137.986666681,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3094031.6666666707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7131.270015539145,
            "unit": "ns/iter",
            "extra": "iterations: 98461\ncpu: 7131.205248778719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71726.05893247994,
            "unit": "ns/iter",
            "extra": "iterations: 11878\ncpu: 71723.9350058931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 137459.47021845102,
            "unit": "ns/iter",
            "extra": "iterations: 6363\ncpu: 137456.7813924253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 201693.79090073658,
            "unit": "ns/iter",
            "extra": "iterations: 4352\ncpu: 201687.10937499948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 265948.13545816415,
            "unit": "ns/iter",
            "extra": "iterations: 3263\ncpu: 265945.5409132699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 329425.28522467415,
            "unit": "ns/iter",
            "extra": "iterations: 2626\ncpu: 329398.81949733547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 394541.33619909285,
            "unit": "ns/iter",
            "extra": "iterations: 2210\ncpu: 394517.2398190068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 455288.1401574875,
            "unit": "ns/iter",
            "extra": "iterations: 1905\ncpu: 455268.03149606055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 517464.90208955295,
            "unit": "ns/iter",
            "extra": "iterations: 1675\ncpu: 517449.07462686545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5393.471163086195,
            "unit": "ns/iter",
            "extra": "iterations: 129036\ncpu: 5393.113549707046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4485.418594232096,
            "unit": "ns/iter",
            "extra": "iterations: 156242\ncpu: 4485.270925871401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4448.8755650635385,
            "unit": "ns/iter",
            "extra": "iterations: 157062\ncpu: 4448.629840445216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4468.840946790974,
            "unit": "ns/iter",
            "extra": "iterations: 156740\ncpu: 4468.591935689675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7608.166314914417,
            "unit": "ns/iter",
            "extra": "iterations: 91447\ncpu: 7607.744376524121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 32723.495780339494,
            "unit": "ns/iter",
            "extra": "iterations: 25239\ncpu: 32721.597527635655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 142206.51266667043,
            "unit": "ns/iter",
            "extra": "iterations: 6000\ncpu: 142198.40000000043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 111166.3936698973,
            "unit": "ns/iter",
            "extra": "iterations: 7646\ncpu: 111158.4357834165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 108603.58508187726,
            "unit": "ns/iter",
            "extra": "iterations: 7816\ncpu: 108597.37717502544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 110128.5482279595,
            "unit": "ns/iter",
            "extra": "iterations: 7703\ncpu: 110123.96468908257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 287785.74779063556,
            "unit": "ns/iter",
            "extra": "iterations: 2942\ncpu: 287780.7273963291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2143436.0965517485,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 2143358.6206896557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1763060.3579545128,
            "unit": "ns/iter",
            "extra": "iterations: 528\ncpu: 1763029.9242424236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1755579.1981131511,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1755529.2452830186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1751232.8101503272,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1751190.037593983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1042382.069428861,
            "unit": "ns/iter",
            "extra": "iterations: 893\ncpu: 1042349.2721164625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1706374.710332034,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1706329.3357933557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7523.609089344859,
            "unit": "ns/iter",
            "extra": "iterations: 92988\ncpu: 7523.255688906119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55019.543399998845,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55017.69000000038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100506.71983013171,
            "unit": "ns/iter",
            "extra": "iterations: 8477\ncpu: 100503.83390350347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 147107.72893211246,
            "unit": "ns/iter",
            "extra": "iterations: 5862\ncpu: 147098.9423404991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 192913.6793164706,
            "unit": "ns/iter",
            "extra": "iterations: 4506\ncpu: 192907.07944962356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 238303.38612493488,
            "unit": "ns/iter",
            "extra": "iterations: 3618\ncpu: 238297.51243781106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 285836.88130564365,
            "unit": "ns/iter",
            "extra": "iterations: 3033\ncpu: 285828.28882294864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 330904.8453059766,
            "unit": "ns/iter",
            "extra": "iterations: 2631\ncpu: 330902.0144431794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 376937.43717276247,
            "unit": "ns/iter",
            "extra": "iterations: 2292\ncpu: 376919.7207678887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6282.674683647471,
            "unit": "ns/iter",
            "extra": "iterations: 110557\ncpu: 6282.511283772174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5225.776327313001,
            "unit": "ns/iter",
            "extra": "iterations: 133597\ncpu: 5225.537250087951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5233.198712382408,
            "unit": "ns/iter",
            "extra": "iterations: 133580\ncpu: 5233.091780206596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5169.2576309775495,
            "unit": "ns/iter",
            "extra": "iterations: 135271\ncpu: 5169.167079418343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8620.129478222312,
            "unit": "ns/iter",
            "extra": "iterations: 80724\ncpu: 8619.933353153972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27612.743760343776,
            "unit": "ns/iter",
            "extra": "iterations: 29609\ncpu: 27612.496200479658 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 137447.9400448881,
            "unit": "ns/iter",
            "extra": "iterations: 6238\ncpu: 137442.57774927767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 110253.53299820154,
            "unit": "ns/iter",
            "extra": "iterations: 7758\ncpu: 110252.53931425665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 110004.57106076466,
            "unit": "ns/iter",
            "extra": "iterations: 7768\ncpu: 109999.6009268788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 106433.1445273602,
            "unit": "ns/iter",
            "extra": "iterations: 8040\ncpu: 106430.7835820883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 323718.41392448056,
            "unit": "ns/iter",
            "extra": "iterations: 2887\ncpu: 323701.0391409766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1792450.0693642295,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1792383.0443159768 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1417714.0807453764,
            "unit": "ns/iter",
            "extra": "iterations: 644\ncpu: 1417691.6149068398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1425226.3966564906,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1425193.3130699077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1381816.486486429,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1381773.1231231268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 759775.3610431941,
            "unit": "ns/iter",
            "extra": "iterations: 1227\ncpu: 759753.1377343019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1362011.8713450308,
            "unit": "ns/iter",
            "extra": "iterations: 684\ncpu: 1361973.391812862 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}