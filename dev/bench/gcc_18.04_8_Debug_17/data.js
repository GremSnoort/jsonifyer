window.BENCHMARK_DATA = {
  "lastUpdate": 1702244258053,
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
        "date": 1702085013661,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15978.09300933943,
            "unit": "ns/iter",
            "extra": "iterations: 46791\ncpu: 15976.760488128059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 126967.89072103056,
            "unit": "ns/iter",
            "extra": "iterations: 6671\ncpu: 126961.50502173587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 246178.09032258065,
            "unit": "ns/iter",
            "extra": "iterations: 3565\ncpu: 246167.20897615716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 349888.37254902226,
            "unit": "ns/iter",
            "extra": "iterations: 2448\ncpu: 349866.9117647057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 455498.0026260437,
            "unit": "ns/iter",
            "extra": "iterations: 1904\ncpu: 455467.3844537818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 566897.041122721,
            "unit": "ns/iter",
            "extra": "iterations: 1532\ncpu: 566867.3629242821 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 547990.5500000085,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 547960.5000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 651390.0420000027,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 651371.9 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 721875.2091555024,
            "unit": "ns/iter",
            "extra": "iterations: 1267\ncpu: 721857.9321231263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11930.23098447373,
            "unit": "ns/iter",
            "extra": "iterations: 58610\ncpu: 11930.068247739318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9953.96704592273,
            "unit": "ns/iter",
            "extra": "iterations: 70401\ncpu: 9953.891279953386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9987.334240864533,
            "unit": "ns/iter",
            "extra": "iterations: 70521\ncpu: 9984.688248890398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9914.42661377598,
            "unit": "ns/iter",
            "extra": "iterations: 69325\ncpu: 9913.66173818967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16550.2176106886,
            "unit": "ns/iter",
            "extra": "iterations: 42213\ncpu: 16549.439746049808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 50494.64639999996,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50492.41999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 275619.04422207864,
            "unit": "ns/iter",
            "extra": "iterations: 3098\ncpu: 275612.395093609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 215225.71706700476,
            "unit": "ns/iter",
            "extra": "iterations: 3955\ncpu: 215218.5587863466 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 215173.4749240107,
            "unit": "ns/iter",
            "extra": "iterations: 3948\ncpu: 215168.69300911913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 209885.97800296493,
            "unit": "ns/iter",
            "extra": "iterations: 4046\ncpu: 209882.20464656482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 600070.8354346383,
            "unit": "ns/iter",
            "extra": "iterations: 1507\ncpu: 600051.9575315182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3879154.0125523396,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3879032.635983263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3176798.51194543,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3176673.7201365256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3174061.365187682,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3173848.4641638305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3173650.932203465,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3173419.661016941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1814194.0740740949,
            "unit": "ns/iter",
            "extra": "iterations: 513\ncpu: 1814091.033138401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3077630.543046345,
            "unit": "ns/iter",
            "extra": "iterations: 302\ncpu: 3077435.430463583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7059.130323300072,
            "unit": "ns/iter",
            "extra": "iterations: 98670\ncpu: 7058.609506435603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70189.64466051168,
            "unit": "ns/iter",
            "extra": "iterations: 12239\ncpu: 70185.79949342285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 134868.08342311878,
            "unit": "ns/iter",
            "extra": "iterations: 6497\ncpu: 134862.32107126358 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 197952.65116279223,
            "unit": "ns/iter",
            "extra": "iterations: 4386\ncpu: 197942.86365709084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 260759.9901019846,
            "unit": "ns/iter",
            "extra": "iterations: 3334\ncpu: 260745.74085182988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 323006.9567809246,
            "unit": "ns/iter",
            "extra": "iterations: 2684\ncpu: 322991.9895678104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 386787.81344612385,
            "unit": "ns/iter",
            "extra": "iterations: 2246\ncpu: 386781.5672306332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 449587.75247525814,
            "unit": "ns/iter",
            "extra": "iterations: 1919\ncpu: 449549.0359562279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 512074.2661955192,
            "unit": "ns/iter",
            "extra": "iterations: 1698\ncpu: 512046.6431095391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5327.47840370243,
            "unit": "ns/iter",
            "extra": "iterations: 131805\ncpu: 5327.20534122379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4435.800099962611,
            "unit": "ns/iter",
            "extra": "iterations: 158059\ncpu: 4435.551281483482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4452.589534787493,
            "unit": "ns/iter",
            "extra": "iterations: 156939\ncpu: 4452.256609255785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4394.623541046039,
            "unit": "ns/iter",
            "extra": "iterations: 158761\ncpu: 4394.538331202243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7636.789724009931,
            "unit": "ns/iter",
            "extra": "iterations: 91670\ncpu: 7636.285589614884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31805.719156970285,
            "unit": "ns/iter",
            "extra": "iterations: 25954\ncpu: 31803.980118671465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 138958.2633300685,
            "unit": "ns/iter",
            "extra": "iterations: 6114\ncpu: 138948.8877984952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 109530.07016866367,
            "unit": "ns/iter",
            "extra": "iterations: 7767\ncpu: 109523.1234710954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 108549.17066939062,
            "unit": "ns/iter",
            "extra": "iterations: 7828\ncpu: 108546.93408277948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 108712.41372674792,
            "unit": "ns/iter",
            "extra": "iterations: 7795\ncpu: 108710.03207184123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 280474.1149983855,
            "unit": "ns/iter",
            "extra": "iterations: 3087\ncpu: 280463.84839650075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2088224.604494443,
            "unit": "ns/iter",
            "extra": "iterations: 445\ncpu: 2088193.0337078606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1742282.8899253223,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1742226.4925373087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1728920.5966543576,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1728902.2304832803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1715678.2267657663,
            "unit": "ns/iter",
            "extra": "iterations: 538\ncpu: 1715637.9182156129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1018772.3296703403,
            "unit": "ns/iter",
            "extra": "iterations: 910\ncpu: 1018752.3076923091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1684410.0379746584,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1684356.7811934846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7520.610791613528,
            "unit": "ns/iter",
            "extra": "iterations: 93202\ncpu: 7520.583249286537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54761.94240000041,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54760.069999999665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101341.940933742,
            "unit": "ns/iter",
            "extra": "iterations: 8482\ncpu: 101340.00235793443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 147506.97705478958,
            "unit": "ns/iter",
            "extra": "iterations: 5840\ncpu: 147505.7534246572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 194224.0772676378,
            "unit": "ns/iter",
            "extra": "iterations: 4465\ncpu: 194221.18701007936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 240489.68855638595,
            "unit": "ns/iter",
            "extra": "iterations: 3609\ncpu: 240482.9869770018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 286555.77239549905,
            "unit": "ns/iter",
            "extra": "iterations: 3014\ncpu: 286551.5593895155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 332612.17590823426,
            "unit": "ns/iter",
            "extra": "iterations: 2615\ncpu: 332603.55640535406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 380539.94230769016,
            "unit": "ns/iter",
            "extra": "iterations: 2288\ncpu: 380535.139860141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6315.561742726561,
            "unit": "ns/iter",
            "extra": "iterations: 110264\ncpu: 6315.409381121708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5240.5526173651115,
            "unit": "ns/iter",
            "extra": "iterations: 133302\ncpu: 5240.464509159722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5313.794991728167,
            "unit": "ns/iter",
            "extra": "iterations: 132980\ncpu: 5313.5223341856135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5299.200187394652,
            "unit": "ns/iter",
            "extra": "iterations: 132341\ncpu: 5299.069827188772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8710.5113372058,
            "unit": "ns/iter",
            "extra": "iterations: 80399\ncpu: 8710.263809251452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26503.496181469473,
            "unit": "ns/iter",
            "extra": "iterations: 30771\ncpu: 26503.022326216545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 137526.75407982012,
            "unit": "ns/iter",
            "extra": "iterations: 6189\ncpu: 137525.9492648252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 104206.09667294049,
            "unit": "ns/iter",
            "extra": "iterations: 7965\ncpu: 104204.97175141207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 104670.32067148374,
            "unit": "ns/iter",
            "extra": "iterations: 8161\ncpu: 104668.0063717678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 100802.7433072721,
            "unit": "ns/iter",
            "extra": "iterations: 8442\ncpu: 100799.49064202752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 316585.95017183496,
            "unit": "ns/iter",
            "extra": "iterations: 2910\ncpu: 316567.835051547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1790718.254335213,
            "unit": "ns/iter",
            "extra": "iterations: 519\ncpu: 1790597.109826609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1427028.9013868088,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1427006.1633282097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1425861.2526964464,
            "unit": "ns/iter",
            "extra": "iterations: 649\ncpu: 1425724.3451463785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1410190.5660090256,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1410162.3672230518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 791827.0111300967,
            "unit": "ns/iter",
            "extra": "iterations: 1168\ncpu: 791810.1883561648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1375694.0445103436,
            "unit": "ns/iter",
            "extra": "iterations: 674\ncpu: 1375608.0118694338 ns\nthreads: 1"
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
        "date": 1702085596802,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14958.834760586114,
            "unit": "ns/iter",
            "extra": "iterations: 46593\ncpu: 14958.188998347392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 127404.55992790665,
            "unit": "ns/iter",
            "extra": "iterations: 6658\ncpu: 127395.82457194352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 247078.66795366612,
            "unit": "ns/iter",
            "extra": "iterations: 3626\ncpu: 247071.0976282406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 351872.30900242785,
            "unit": "ns/iter",
            "extra": "iterations: 2466\ncpu: 351863.787510138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 461746.4705257519,
            "unit": "ns/iter",
            "extra": "iterations: 1883\ncpu: 461726.5533722782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 571723.7686222726,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 571715.4251812787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 550475.8489999801,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 550431.2000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 642722.7529999868,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 642679.2999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 728072.4938488652,
            "unit": "ns/iter",
            "extra": "iterations: 1138\ncpu: 728042.1792618644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11876.585373301283,
            "unit": "ns/iter",
            "extra": "iterations: 58947\ncpu: 11876.336369959457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9820.160598370861,
            "unit": "ns/iter",
            "extra": "iterations: 71327\ncpu: 9820.237778120501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9739.003187284108,
            "unit": "ns/iter",
            "extra": "iterations: 71848\ncpu: 9738.273855918043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9784.692849570574,
            "unit": "ns/iter",
            "extra": "iterations: 71688\ncpu: 9784.760350407323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16482.0435234383,
            "unit": "ns/iter",
            "extra": "iterations: 42345\ncpu: 16480.824182311964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 51258.98139999947,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51259.42000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 287424.2397976412,
            "unit": "ns/iter",
            "extra": "iterations: 2965\ncpu: 287425.96964586864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 221744.26599063413,
            "unit": "ns/iter",
            "extra": "iterations: 3846\ncpu: 221739.78159126357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 219793.22393822065,
            "unit": "ns/iter",
            "extra": "iterations: 3885\ncpu: 219784.40154440168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 213445.54648241017,
            "unit": "ns/iter",
            "extra": "iterations: 3980\ncpu: 213439.5226130649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 603647.2560483902,
            "unit": "ns/iter",
            "extra": "iterations: 1488\ncpu: 603617.9435483859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3899933.612499969,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3899856.666666664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3156908.238095246,
            "unit": "ns/iter",
            "extra": "iterations: 294\ncpu: 3156782.99319728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3150708.6047297805,
            "unit": "ns/iter",
            "extra": "iterations: 296\ncpu: 3150669.2567567565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3138327.6576270796,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3138159.9999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1790947.5589941617,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1790837.7176015421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3062095.782178232,
            "unit": "ns/iter",
            "extra": "iterations: 303\ncpu: 3061985.1485148575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7102.236628489057,
            "unit": "ns/iter",
            "extra": "iterations: 98923\ncpu: 7101.530483305184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70804.03327773235,
            "unit": "ns/iter",
            "extra": "iterations: 11990\ncpu: 70803.3027522933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 135854.8097523249,
            "unit": "ns/iter",
            "extra": "iterations: 6460\ncpu: 135852.7554179568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 198777.779384756,
            "unit": "ns/iter",
            "extra": "iterations: 4356\ncpu: 198771.30394857688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 262662.799031476,
            "unit": "ns/iter",
            "extra": "iterations: 3304\ncpu: 262647.0944309935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 326458.5120029997,
            "unit": "ns/iter",
            "extra": "iterations: 2666\ncpu: 326445.31132783275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 389280.8063506175,
            "unit": "ns/iter",
            "extra": "iterations: 2236\ncpu: 389247.18246869504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 470547.62368421315,
            "unit": "ns/iter",
            "extra": "iterations: 1900\ncpu: 470526.2631578932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 515163.17971531284,
            "unit": "ns/iter",
            "extra": "iterations: 1686\ncpu: 515144.3060498195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5275.391966425052,
            "unit": "ns/iter",
            "extra": "iterations: 132718\ncpu: 5275.187239108437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4415.98578731469,
            "unit": "ns/iter",
            "extra": "iterations: 158450\ncpu: 4415.674345219318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4396.334116579789,
            "unit": "ns/iter",
            "extra": "iterations: 158741\ncpu: 4396.134584007916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4386.478621321597,
            "unit": "ns/iter",
            "extra": "iterations: 159341\ncpu: 4386.508180568694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7598.346619263344,
            "unit": "ns/iter",
            "extra": "iterations: 91977\ncpu: 7597.88968981383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31661.373746266523,
            "unit": "ns/iter",
            "extra": "iterations: 26122\ncpu: 31660.16384656606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 140276.50271158817,
            "unit": "ns/iter",
            "extra": "iterations: 6085\ncpu: 140271.50369761736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 109690.96316331686,
            "unit": "ns/iter",
            "extra": "iterations: 7764\ncpu: 109682.56053580648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 107318.15079565384,
            "unit": "ns/iter",
            "extra": "iterations: 7918\ncpu: 107316.12781005274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 108431.77779192619,
            "unit": "ns/iter",
            "extra": "iterations: 7853\ncpu: 108430.70164268393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 280047.51913798356,
            "unit": "ns/iter",
            "extra": "iterations: 3109\ncpu: 280044.4515921522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2112041.1473922683,
            "unit": "ns/iter",
            "extra": "iterations: 441\ncpu: 2112007.936507938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1740301.309701473,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1740281.1567164145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1743049.5355805273,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1743060.1123595505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1726198.9197761638,
            "unit": "ns/iter",
            "extra": "iterations: 536\ncpu: 1726169.9626865555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1017583.2352297681,
            "unit": "ns/iter",
            "extra": "iterations: 914\ncpu: 1017589.2778993432 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1680879.7851985462,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1680855.9566787009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7580.547814460101,
            "unit": "ns/iter",
            "extra": "iterations: 91991\ncpu: 7580.375254100947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55034.129499998126,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55029.48999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100689.39689813137,
            "unit": "ns/iter",
            "extra": "iterations: 8511\ncpu: 100685.00763717621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146975.99400171448,
            "unit": "ns/iter",
            "extra": "iterations: 5835\ncpu: 146970.0257069403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 192651.24115684096,
            "unit": "ns/iter",
            "extra": "iterations: 4495\ncpu: 192643.53726362667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 239087.59933591858,
            "unit": "ns/iter",
            "extra": "iterations: 3614\ncpu: 239080.71389042537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 285100.62952005584,
            "unit": "ns/iter",
            "extra": "iterations: 3042\ncpu: 285092.89940828417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 331193.41904762224,
            "unit": "ns/iter",
            "extra": "iterations: 2625\ncpu: 331173.4095238096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 377877.07028199633,
            "unit": "ns/iter",
            "extra": "iterations: 2305\ncpu: 377875.87852494494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6325.50759787744,
            "unit": "ns/iter",
            "extra": "iterations: 110623\ncpu: 6325.231642605998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5287.461428172524,
            "unit": "ns/iter",
            "extra": "iterations: 132519\ncpu: 5287.152785638311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5224.505272643295,
            "unit": "ns/iter",
            "extra": "iterations: 134278\ncpu: 5224.3070346594395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5249.021317641156,
            "unit": "ns/iter",
            "extra": "iterations: 133739\ncpu: 5248.925145245628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8636.561888788912,
            "unit": "ns/iter",
            "extra": "iterations: 81089\ncpu: 8636.527765788109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27666.062470405144,
            "unit": "ns/iter",
            "extra": "iterations: 29566\ncpu: 27663.8841913009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 145807.7307430137,
            "unit": "ns/iter",
            "extra": "iterations: 5868\ncpu: 145802.65848670757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 109291.84302991725,
            "unit": "ns/iter",
            "extra": "iterations: 7855\ncpu: 109286.60725652415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 109141.0482081369,
            "unit": "ns/iter",
            "extra": "iterations: 7841\ncpu: 109137.04884581006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 103484.7201601187,
            "unit": "ns/iter",
            "extra": "iterations: 8244\ncpu: 103479.82775351638 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 318811.7447898767,
            "unit": "ns/iter",
            "extra": "iterations: 2927\ncpu: 318801.0591048878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1786981.721689082,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1786880.2303262877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1414567.4414002693,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1414551.902587512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1407837.7876505686,
            "unit": "ns/iter",
            "extra": "iterations: 664\ncpu: 1407755.8734939757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1388610.2964071839,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1388536.0778443275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 769116.0548628449,
            "unit": "ns/iter",
            "extra": "iterations: 1203\ncpu: 769067.0822942603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1361801.8498542202,
            "unit": "ns/iter",
            "extra": "iterations: 686\ncpu: 1361731.4868804533 ns\nthreads: 1"
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
        "date": 1702244257083,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16675.462142857323,
            "unit": "ns/iter",
            "extra": "iterations: 42000\ncpu: 16674.20238095238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 155351.41698913032,
            "unit": "ns/iter",
            "extra": "iterations: 5427\ncpu: 155338.32688409806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 293240.53768165124,
            "unit": "ns/iter",
            "extra": "iterations: 2959\ncpu: 293229.26664413663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 429343.03441396303,
            "unit": "ns/iter",
            "extra": "iterations: 2005\ncpu: 429323.09226932644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 614320.0957654723,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 614277.9153094464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 573513.7009999959,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 573519.3000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 682794.9755192901,
            "unit": "ns/iter",
            "extra": "iterations: 1348\ncpu: 682760.0890207719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 791208.4791133848,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 791177.7493606135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 903527.4995140847,
            "unit": "ns/iter",
            "extra": "iterations: 1029\ncpu: 903474.8299319723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13507.284441609701,
            "unit": "ns/iter",
            "extra": "iterations: 51747\ncpu: 13506.643863412379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11183.193976745386,
            "unit": "ns/iter",
            "extra": "iterations: 62956\ncpu: 11182.46711989328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11125.050307959302,
            "unit": "ns/iter",
            "extra": "iterations: 62833\ncpu: 11124.573074658223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11072.064458172976,
            "unit": "ns/iter",
            "extra": "iterations: 63452\ncpu: 11071.575364054741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18491.385488307194,
            "unit": "ns/iter",
            "extra": "iterations: 37804\ncpu: 18491.405671357526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 70816.2077642581,
            "unit": "ns/iter",
            "extra": "iterations: 12081\ncpu: 70814.97392599948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 357760.7569937443,
            "unit": "ns/iter",
            "extra": "iterations: 2395\ncpu: 357738.0793319416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 287207.81054751703,
            "unit": "ns/iter",
            "extra": "iterations: 2977\ncpu: 287194.0544171979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 286846.70231309277,
            "unit": "ns/iter",
            "extra": "iterations: 2983\ncpu: 286839.4569225614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 282620.47403241385,
            "unit": "ns/iter",
            "extra": "iterations: 3023\ncpu: 282606.0205094275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 565097.6219999961,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565103.0000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4827031.932642479,
            "unit": "ns/iter",
            "extra": "iterations: 193\ncpu: 4826708.808290159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3890766.7112969467,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3890633.4728033477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3904985.1338914,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3904797.071129719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3875449.1750000375,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3875197.083333341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2254152.1067961357,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2254041.5048543685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8759.91028862122,
            "unit": "ns/iter",
            "extra": "iterations: 80001\ncpu: 8759.735503306187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99850.19002098426,
            "unit": "ns/iter",
            "extra": "iterations: 8578\ncpu: 99845.1853578923 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 192936.03552515755,
            "unit": "ns/iter",
            "extra": "iterations: 4532\ncpu: 192933.95851721152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 284858.01378405245,
            "unit": "ns/iter",
            "extra": "iterations: 3047\ncpu: 284842.96028880856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 372903.45286268555,
            "unit": "ns/iter",
            "extra": "iterations: 2323\ncpu: 372890.91691777867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 469109.3556645083,
            "unit": "ns/iter",
            "extra": "iterations: 1836\ncpu: 469095.69716775685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 552755.1353627016,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 552733.4844559577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 517040.2809999928,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 517009.7000000027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 589477.3460000238,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 589436.8999999955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6875.366529331112,
            "unit": "ns/iter",
            "extra": "iterations: 101940\ncpu: 6875.239356484203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5562.029103968964,
            "unit": "ns/iter",
            "extra": "iterations: 126134\ncpu: 5561.67488543925 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5588.2381301497835,
            "unit": "ns/iter",
            "extra": "iterations: 125486\ncpu: 5587.757996908022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5597.630627170669,
            "unit": "ns/iter",
            "extra": "iterations: 124974\ncpu: 5597.457071070797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9392.73815286918,
            "unit": "ns/iter",
            "extra": "iterations: 74364\ncpu: 9392.731698133533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 53391.14434053611,
            "unit": "ns/iter",
            "extra": "iterations: 15505\ncpu: 53389.89358271499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 222566.61721992443,
            "unit": "ns/iter",
            "extra": "iterations: 3856\ncpu: 222555.65352697045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 178839.9619067467,
            "unit": "ns/iter",
            "extra": "iterations: 4804\ncpu: 178834.97085761846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 177951.8852764591,
            "unit": "ns/iter",
            "extra": "iterations: 4829\ncpu: 177944.21205218544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 176588.4044966953,
            "unit": "ns/iter",
            "extra": "iterations: 4848\ncpu: 176580.17739273937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 383230.625718065,
            "unit": "ns/iter",
            "extra": "iterations: 2263\ncpu: 383205.25850640703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3050450.613636307,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3050278.571428571 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2498333.2756757615,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2498290.0000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2503317.3091397933,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2503234.6774193547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2491660.795148209,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2491540.9703504005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1477536.6140351177,
            "unit": "ns/iter",
            "extra": "iterations: 627\ncpu: 1477456.1403508724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2427120.7526041693,
            "unit": "ns/iter",
            "extra": "iterations: 384\ncpu: 2427029.6874999893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7407.606282011831,
            "unit": "ns/iter",
            "extra": "iterations: 94301\ncpu: 7407.267155173274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53262.339400004064,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53260.36000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 98494.6457903198,
            "unit": "ns/iter",
            "extra": "iterations: 8718\ncpu: 98491.21358109634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 142561.47477254499,
            "unit": "ns/iter",
            "extra": "iterations: 6045\ncpu: 142550.65343258847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 187785.6838124037,
            "unit": "ns/iter",
            "extra": "iterations: 4627\ncpu: 187776.39939485645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 232124.0750670213,
            "unit": "ns/iter",
            "extra": "iterations: 3730\ncpu: 232108.87399463667 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 277655.1160857029,
            "unit": "ns/iter",
            "extra": "iterations: 3127\ncpu: 277654.3652062673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 323266.6576409535,
            "unit": "ns/iter",
            "extra": "iterations: 2696\ncpu: 323248.4050445103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 367436.90046394814,
            "unit": "ns/iter",
            "extra": "iterations: 2371\ncpu: 367417.7562210035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6285.256291444365,
            "unit": "ns/iter",
            "extra": "iterations: 111143\ncpu: 6284.801561951761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5212.0686361681,
            "unit": "ns/iter",
            "extra": "iterations: 134958\ncpu: 5212.06301219639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5152.765020938786,
            "unit": "ns/iter",
            "extra": "iterations: 136110\ncpu: 5152.442142384871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5171.011079371233,
            "unit": "ns/iter",
            "extra": "iterations: 135477\ncpu: 5170.8422831920025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8773.038445664817,
            "unit": "ns/iter",
            "extra": "iterations: 79957\ncpu: 8772.662806258348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29636.43330679733,
            "unit": "ns/iter",
            "extra": "iterations: 27634\ncpu: 29635.072736483646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 136230.82723094505,
            "unit": "ns/iter",
            "extra": "iterations: 6309\ncpu: 136224.74243144604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 107317.45441901575,
            "unit": "ns/iter",
            "extra": "iterations: 7909\ncpu: 107311.50587937796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 107831.98773238667,
            "unit": "ns/iter",
            "extra": "iterations: 7907\ncpu: 107827.22903756141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 104146.7473091955,
            "unit": "ns/iter",
            "extra": "iterations: 8176\ncpu: 104139.5425636013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 335283.2433804891,
            "unit": "ns/iter",
            "extra": "iterations: 2757\ncpu: 335272.21617700445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1762536.9923664469,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1762433.015267177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1386836.7937220172,
            "unit": "ns/iter",
            "extra": "iterations: 669\ncpu: 1386782.3617339379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1394401.572072071,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1394346.5465465428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1368137.394386971,
            "unit": "ns/iter",
            "extra": "iterations: 677\ncpu: 1368093.0576070854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 771018.3469899629,
            "unit": "ns/iter",
            "extra": "iterations: 1196\ncpu: 771007.1906354426 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}