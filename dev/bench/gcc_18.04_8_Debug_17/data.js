window.BENCHMARK_DATA = {
  "lastUpdate": 1702085014717,
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
      }
    ]
  }
}