window.BENCHMARK_DATA = {
  "lastUpdate": 1702310724097,
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
        "date": 1702285143183,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16833.49997591418,
            "unit": "ns/iter",
            "extra": "iterations: 41518\ncpu: 16831.87051399393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 159650.3349605703,
            "unit": "ns/iter",
            "extra": "iterations: 5326\ncpu: 159649.6057078483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 312155.39243580896,
            "unit": "ns/iter",
            "extra": "iterations: 2882\ncpu: 312153.5392088828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 440045.080082135,
            "unit": "ns/iter",
            "extra": "iterations: 1948\ncpu: 440044.30184804933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 586317.052701783,
            "unit": "ns/iter",
            "extra": "iterations: 1499\ncpu: 586286.1240827221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 589058.749000003,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 589063.9000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 700034.3242424163,
            "unit": "ns/iter",
            "extra": "iterations: 1320\ncpu: 700019.1666666669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 813923.8700360957,
            "unit": "ns/iter",
            "extra": "iterations: 1108\ncpu: 813878.1588447646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 931839.9006023998,
            "unit": "ns/iter",
            "extra": "iterations: 996\ncpu: 931815.9638554216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13692.41533341135,
            "unit": "ns/iter",
            "extra": "iterations: 51378\ncpu: 13692.222351979442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11145.426026348505,
            "unit": "ns/iter",
            "extra": "iterations: 62698\ncpu: 11145.32520973555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11303.092294136835,
            "unit": "ns/iter",
            "extra": "iterations: 62420\ncpu: 11302.659404037177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11139.758438130733,
            "unit": "ns/iter",
            "extra": "iterations: 62899\ncpu: 11139.854369703828 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18615.92633839747,
            "unit": "ns/iter",
            "extra": "iterations: 37713\ncpu: 18615.326280062567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 70781.16338191493,
            "unit": "ns/iter",
            "extra": "iterations: 12076\ncpu: 70780.9870818151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 361819.95571488177,
            "unit": "ns/iter",
            "extra": "iterations: 2371\ncpu: 361810.58625052765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 288329.8059852013,
            "unit": "ns/iter",
            "extra": "iterations: 2974\ncpu: 288319.26698049746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 290057.6796610117,
            "unit": "ns/iter",
            "extra": "iterations: 2950\ncpu: 290044.3728813564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 283862.75523083075,
            "unit": "ns/iter",
            "extra": "iterations: 3011\ncpu: 283860.17934241024 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 579140.4829999465,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 579103.2999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4906367.626315805,
            "unit": "ns/iter",
            "extra": "iterations: 190\ncpu: 4906317.368421061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3958837.3771187076,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3958716.525423729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3958458.2425531386,
            "unit": "ns/iter",
            "extra": "iterations: 235\ncpu: 3958418.2978723384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3955209.6949152607,
            "unit": "ns/iter",
            "extra": "iterations: 236\ncpu: 3955150.4237288237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2293368.3094059983,
            "unit": "ns/iter",
            "extra": "iterations: 404\ncpu: 2293270.7920792084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8783.239639276826,
            "unit": "ns/iter",
            "extra": "iterations: 79507\ncpu: 8783.323480951378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 101949.79023399773,
            "unit": "ns/iter",
            "extra": "iterations: 8376\ncpu: 101948.97325692445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 197265.34481981368,
            "unit": "ns/iter",
            "extra": "iterations: 4440\ncpu: 197258.24324324323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 290638.5158142668,
            "unit": "ns/iter",
            "extra": "iterations: 2972\ncpu: 290625.33647375513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 385243.54637807666,
            "unit": "ns/iter",
            "extra": "iterations: 2264\ncpu: 385246.42226148397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 476563.6369601047,
            "unit": "ns/iter",
            "extra": "iterations: 1829\ncpu: 476565.4455986895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 568748.5267973893,
            "unit": "ns/iter",
            "extra": "iterations: 1530\ncpu: 568736.9281045757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 531503.057000009,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 531493.3000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 605201.8020000105,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 605206.7999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6982.036102271288,
            "unit": "ns/iter",
            "extra": "iterations: 100243\ncpu: 6981.848109094853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5604.538176361572,
            "unit": "ns/iter",
            "extra": "iterations: 124619\ncpu: 5604.473635641449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5615.725066047734,
            "unit": "ns/iter",
            "extra": "iterations: 124910\ncpu: 5615.58962452967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5645.056147643201,
            "unit": "ns/iter",
            "extra": "iterations: 124137\ncpu: 5644.885892199754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9509.30611165391,
            "unit": "ns/iter",
            "extra": "iterations: 73728\ncpu: 9509.38991970488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 53277.67263130577,
            "unit": "ns/iter",
            "extra": "iterations: 15536\ncpu: 53275.02574665313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 223022.06386292714,
            "unit": "ns/iter",
            "extra": "iterations: 3852\ncpu: 223018.4579439245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 179971.2643847065,
            "unit": "ns/iter",
            "extra": "iterations: 4762\ncpu: 179967.97564048754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 179012.08934923646,
            "unit": "ns/iter",
            "extra": "iterations: 4779\ncpu: 179010.3787403229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 178893.38998956655,
            "unit": "ns/iter",
            "extra": "iterations: 4795\ncpu: 178889.8852971843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 397219.5237442985,
            "unit": "ns/iter",
            "extra": "iterations: 2190\ncpu: 397193.47031963477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3093505.538206017,
            "unit": "ns/iter",
            "extra": "iterations: 301\ncpu: 3093385.714285716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2525762.9919136865,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2525682.2102425853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2531996.1378378645,
            "unit": "ns/iter",
            "extra": "iterations: 370\ncpu: 2531906.2162162247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2540580.4153005965,
            "unit": "ns/iter",
            "extra": "iterations: 366\ncpu: 2540429.781420757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1510370.4682926917,
            "unit": "ns/iter",
            "extra": "iterations: 615\ncpu: 1510314.959349596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2461200.497354456,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2461081.2169312313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7622.129590502656,
            "unit": "ns/iter",
            "extra": "iterations: 91820\ncpu: 7621.7305597909235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55023.73159999933,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55021.179999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100859.67123449413,
            "unit": "ns/iter",
            "extra": "iterations: 8465\ncpu: 100859.66922622587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 146264.83234547827,
            "unit": "ns/iter",
            "extra": "iterations: 5905\ncpu: 146262.50635054975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 192075.71221900242,
            "unit": "ns/iter",
            "extra": "iterations: 4493\ncpu: 192075.58424215397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 237960.11028806836,
            "unit": "ns/iter",
            "extra": "iterations: 3645\ncpu: 237951.98902606426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 284633.5791543773,
            "unit": "ns/iter",
            "extra": "iterations: 3051\ncpu: 284628.8757784347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 328649.9704657347,
            "unit": "ns/iter",
            "extra": "iterations: 2641\ncpu: 328632.8663385101 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 375107.7496757643,
            "unit": "ns/iter",
            "extra": "iterations: 2313\ncpu: 375100.0432338952 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6383.685126510356,
            "unit": "ns/iter",
            "extra": "iterations: 109517\ncpu: 6383.605285024247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5222.312305377193,
            "unit": "ns/iter",
            "extra": "iterations: 134234\ncpu: 5222.275280480324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5165.2267757749605,
            "unit": "ns/iter",
            "extra": "iterations: 135645\ncpu: 5165.192966935741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5222.724709202591,
            "unit": "ns/iter",
            "extra": "iterations: 133942\ncpu: 5222.583655612205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8896.85359246066,
            "unit": "ns/iter",
            "extra": "iterations: 78623\ncpu: 8896.610406624035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 29314.10959100968,
            "unit": "ns/iter",
            "extra": "iterations: 27849\ncpu: 29313.522927214817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 139709.88623046575,
            "unit": "ns/iter",
            "extra": "iterations: 6144\ncpu: 139711.0839843734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 109887.23042476788,
            "unit": "ns/iter",
            "extra": "iterations: 7816\ncpu: 109884.51893551754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 109176.27627205194,
            "unit": "ns/iter",
            "extra": "iterations: 7822\ncpu: 109176.13142418902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 104094.19836725,
            "unit": "ns/iter",
            "extra": "iterations: 8207\ncpu: 104090.95893749269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 339300.39498893433,
            "unit": "ns/iter",
            "extra": "iterations: 2714\ncpu: 339303.09506264026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1785905.8474903693,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1785856.3706563797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1422434.1071975871,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1422353.2924961816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1425184.1087289418,
            "unit": "ns/iter",
            "extra": "iterations: 653\ncpu: 1425128.1776416656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1440525.4962406089,
            "unit": "ns/iter",
            "extra": "iterations: 665\ncpu: 1440418.0451127726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 783019.3042373062,
            "unit": "ns/iter",
            "extra": "iterations: 1180\ncpu: 783014.0677966195 ns\nthreads: 1"
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
        "date": 1702309484086,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16932.17885289,
            "unit": "ns/iter",
            "extra": "iterations: 41112\ncpu: 16930.96176298891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 156228.7968749968,
            "unit": "ns/iter",
            "extra": "iterations: 5440\ncpu: 156216.23161764714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 294753.5227581583,
            "unit": "ns/iter",
            "extra": "iterations: 2944\ncpu: 294734.85054347833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 437321.0091168022,
            "unit": "ns/iter",
            "extra": "iterations: 1755\ncpu: 437311.2250712252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 582604.7670157016,
            "unit": "ns/iter",
            "extra": "iterations: 1528\ncpu: 582578.9921465969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 576264.7190000223,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 576265.6000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 686689.0754996298,
            "unit": "ns/iter",
            "extra": "iterations: 1351\ncpu: 686683.4937083644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 795825.0876288852,
            "unit": "ns/iter",
            "extra": "iterations: 1164\ncpu: 795817.4398625436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 907385.7816763943,
            "unit": "ns/iter",
            "extra": "iterations: 1026\ncpu: 907348.1481481491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13469.140102827789,
            "unit": "ns/iter",
            "extra": "iterations: 52126\ncpu: 13465.612170509918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11167.616276285242,
            "unit": "ns/iter",
            "extra": "iterations: 62631\ncpu: 11166.928517826647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11172.806279459972,
            "unit": "ns/iter",
            "extra": "iterations: 62585\ncpu: 11172.365582807372 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11183.860931373963,
            "unit": "ns/iter",
            "extra": "iterations: 62746\ncpu: 11183.194147834125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18784.266373438444,
            "unit": "ns/iter",
            "extra": "iterations: 37286\ncpu: 18783.741887035332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 71945.16575653186,
            "unit": "ns/iter",
            "extra": "iterations: 11903\ncpu: 71944.08132403597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 364798.9763013132,
            "unit": "ns/iter",
            "extra": "iterations: 2363\ncpu: 363977.2746508674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 290986.4626916501,
            "unit": "ns/iter",
            "extra": "iterations: 2935\ncpu: 290971.0391822831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 289993.20889945613,
            "unit": "ns/iter",
            "extra": "iterations: 2944\ncpu: 289975.577445652 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 287420.22794612776,
            "unit": "ns/iter",
            "extra": "iterations: 2970\ncpu: 287399.4612794606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 585605.4939999921,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 585558.4999999977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4760060.6071428945,
            "unit": "ns/iter",
            "extra": "iterations: 196\ncpu: 4759738.775510222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3865193.991701151,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3864881.3278008257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3910013.64016729,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3909938.49372386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3838585.231404928,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3838370.2479338883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2254831.7572815847,
            "unit": "ns/iter",
            "extra": "iterations: 412\ncpu: 2254638.1067961124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8792.794987643894,
            "unit": "ns/iter",
            "extra": "iterations: 80122\ncpu: 8792.104540575656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 98826.65782462772,
            "unit": "ns/iter",
            "extra": "iterations: 8633\ncpu: 98819.43704390104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 191144.68005266628,
            "unit": "ns/iter",
            "extra": "iterations: 4557\ncpu: 191130.59030063616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 281521.5787082109,
            "unit": "ns/iter",
            "extra": "iterations: 3081\ncpu: 281499.9350860114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 372646.65710616024,
            "unit": "ns/iter",
            "extra": "iterations: 2336\ncpu: 372625.94178082084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 462844.27955270215,
            "unit": "ns/iter",
            "extra": "iterations: 1878\ncpu: 462814.9627263057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 551613.206389778,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 551570.9904153355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 515294.36499998835,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515276.99999999756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 588058.277000016,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 588014.9999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6769.727511102884,
            "unit": "ns/iter",
            "extra": "iterations: 103351\ncpu: 6769.219456028468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5609.478410375276,
            "unit": "ns/iter",
            "extra": "iterations: 124759\ncpu: 5609.356439214782 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5712.072207699884,
            "unit": "ns/iter",
            "extra": "iterations: 123948\ncpu: 5711.605673346861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5591.983532958019,
            "unit": "ns/iter",
            "extra": "iterations: 125402\ncpu: 5591.434745857342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9701.625406897765,
            "unit": "ns/iter",
            "extra": "iterations: 72807\ncpu: 9700.803494169464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 53352.68004889566,
            "unit": "ns/iter",
            "extra": "iterations: 15543\ncpu: 53349.40487679302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 222993.0814526605,
            "unit": "ns/iter",
            "extra": "iterations: 3855\ncpu: 222976.83527885878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 180899.9493591134,
            "unit": "ns/iter",
            "extra": "iterations: 4759\ncpu: 180885.7533095184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 179689.84923463903,
            "unit": "ns/iter",
            "extra": "iterations: 4769\ncpu: 179678.31830572485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 179992.4004629624,
            "unit": "ns/iter",
            "extra": "iterations: 4752\ncpu: 179979.86111111147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 413012.16777251347,
            "unit": "ns/iter",
            "extra": "iterations: 2110\ncpu: 412981.848341234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2988449.025559031,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2988337.3801917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2461262.10263161,
            "unit": "ns/iter",
            "extra": "iterations: 380\ncpu: 2461092.894736831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2504867.3413977902,
            "unit": "ns/iter",
            "extra": "iterations: 372\ncpu: 2504723.1182795824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2447708.7322834106,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2447536.745406816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1475285.5441640222,
            "unit": "ns/iter",
            "extra": "iterations: 634\ncpu: 1475230.1261829762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2405568.6408268437,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2405499.2248061933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7646.5037471774995,
            "unit": "ns/iter",
            "extra": "iterations: 91669\ncpu: 7646.022101255594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55180.69359999913,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55178.99999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 101497.04614657749,
            "unit": "ns/iter",
            "extra": "iterations: 8473\ncpu: 101495.09028679345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 147058.40157076783,
            "unit": "ns/iter",
            "extra": "iterations: 5857\ncpu: 147055.8647771899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 194356.7688016052,
            "unit": "ns/iter",
            "extra": "iterations: 4481\ncpu: 194350.39053782748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 240483.84639060294,
            "unit": "ns/iter",
            "extra": "iterations: 3574\ncpu: 240462.22719641827 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 286313.8857331425,
            "unit": "ns/iter",
            "extra": "iterations: 3028\ncpu: 286293.7252311754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 334626.00038342853,
            "unit": "ns/iter",
            "extra": "iterations: 2608\ncpu: 334621.4723926364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 378320.3344947599,
            "unit": "ns/iter",
            "extra": "iterations: 2296\ncpu: 378311.0627177692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6238.876860610834,
            "unit": "ns/iter",
            "extra": "iterations: 112060\ncpu: 6238.872032839567 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5180.25272943045,
            "unit": "ns/iter",
            "extra": "iterations: 135651\ncpu: 5180.081237882475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5198.123177917793,
            "unit": "ns/iter",
            "extra": "iterations: 135422\ncpu: 5197.978910369051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5167.963396333198,
            "unit": "ns/iter",
            "extra": "iterations: 134604\ncpu: 5167.892484621561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8663.55572466199,
            "unit": "ns/iter",
            "extra": "iterations: 80817\ncpu: 8663.30103814791 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31055.32812735656,
            "unit": "ns/iter",
            "extra": "iterations: 26508\ncpu: 31055.315376490253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 140082.35468544878,
            "unit": "ns/iter",
            "extra": "iterations: 6104\ncpu: 140076.0157273919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 109274.45170819067,
            "unit": "ns/iter",
            "extra": "iterations: 7786\ncpu: 109273.01566915108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 108661.11583502775,
            "unit": "ns/iter",
            "extra": "iterations: 7856\ncpu: 108655.06619144647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 105300.14993819782,
            "unit": "ns/iter",
            "extra": "iterations: 8090\ncpu: 105300.04944375677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 331586.96374731156,
            "unit": "ns/iter",
            "extra": "iterations: 2786\ncpu: 331574.3000717877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1767489.7977099048,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1767446.1832060998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1415353.934650447,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1415309.8784194433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1420778.2822458656,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1420730.197268595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1394584.4176646802,
            "unit": "ns/iter",
            "extra": "iterations: 668\ncpu: 1394545.9580838347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 788971.1874462954,
            "unit": "ns/iter",
            "extra": "iterations: 1163\ncpu: 788942.7343078186 ns\nthreads: 1"
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
          "id": "825d4b8b89216ec0a9dcc887895418d7e677e406",
          "message": "set(CMAKE_VERBOSE_MAKEFILE OFF)",
          "timestamp": "2023-12-11T18:58:08+03:00",
          "tree_id": "455cf7a424831f799b54c049bdff16a090b6030a",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/825d4b8b89216ec0a9dcc887895418d7e677e406"
        },
        "date": 1702310490149,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17456.893675141197,
            "unit": "ns/iter",
            "extra": "iterations: 38072\ncpu: 17456.63742382854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 155749.4397934724,
            "unit": "ns/iter",
            "extra": "iterations: 5423\ncpu: 155745.73114512267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 294351.82360922307,
            "unit": "ns/iter",
            "extra": "iterations: 2948\ncpu: 294345.8616010856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 431497.2699600707,
            "unit": "ns/iter",
            "extra": "iterations: 2004\ncpu: 431491.8662674649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 595283.7631233641,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 595262.8608923886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 576513.6109999957,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 576479.2999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 686043.0104244079,
            "unit": "ns/iter",
            "extra": "iterations: 1343\ncpu: 686012.1370067012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 794599.9221556919,
            "unit": "ns/iter",
            "extra": "iterations: 1169\ncpu: 794571.5996578279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 906298.5121713779,
            "unit": "ns/iter",
            "extra": "iterations: 1027\ncpu: 906250.1460564756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13284.586138162495,
            "unit": "ns/iter",
            "extra": "iterations: 52677\ncpu: 13284.080338667725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11122.192708910678,
            "unit": "ns/iter",
            "extra": "iterations: 63173\ncpu: 11121.721304987886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11111.585691463213,
            "unit": "ns/iter",
            "extra": "iterations: 63221\ncpu: 11111.194065263137 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11082.20489524956,
            "unit": "ns/iter",
            "extra": "iterations: 62959\ncpu: 11081.95174637463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18393.407966661056,
            "unit": "ns/iter",
            "extra": "iterations: 36954\ncpu: 18393.259187097512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 72887.9867662041,
            "unit": "ns/iter",
            "extra": "iterations: 11788\ncpu: 72885.73125212087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 361607.7800847455,
            "unit": "ns/iter",
            "extra": "iterations: 2360\ncpu: 361603.5169491526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 290495.1766917276,
            "unit": "ns/iter",
            "extra": "iterations: 2926\ncpu: 290487.35475051275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 287452.68333896267,
            "unit": "ns/iter",
            "extra": "iterations: 2959\ncpu: 287449.27340317593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 284053.6963630326,
            "unit": "ns/iter",
            "extra": "iterations: 2997\ncpu: 284052.0854187521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 592253.477000014,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592245.1999999972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4724132.722222321,
            "unit": "ns/iter",
            "extra": "iterations: 198\ncpu: 4723929.292929301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3853526.5454547433,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3853378.5123966965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3933305.405857689,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3933206.6945606708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3839120.0000000205,
            "unit": "ns/iter",
            "extra": "iterations: 217\ncpu: 3838806.4516129135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2238159.142512162,
            "unit": "ns/iter",
            "extra": "iterations: 414\ncpu: 2237992.2705314006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8611.536345873512,
            "unit": "ns/iter",
            "extra": "iterations: 80862\ncpu: 8611.184487150911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 99919.09669121551,
            "unit": "ns/iter",
            "extra": "iterations: 8553\ncpu: 99912.66222378105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 192657.78000881738,
            "unit": "ns/iter",
            "extra": "iterations: 4532\ncpu: 192649.49249779357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 282860.41355597775,
            "unit": "ns/iter",
            "extra": "iterations: 3054\ncpu: 282847.6096922069 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 376084.247089273,
            "unit": "ns/iter",
            "extra": "iterations: 2319\ncpu: 376085.2091418711 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 467439.97368419636,
            "unit": "ns/iter",
            "extra": "iterations: 1862\ncpu: 467415.7357679905 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 558655.0083387078,
            "unit": "ns/iter",
            "extra": "iterations: 1559\ncpu: 558633.9961513788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 522875.53600001504,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522853.099999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 597088.6119999932,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 597083.2000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6682.121961229777,
            "unit": "ns/iter",
            "extra": "iterations: 104771\ncpu: 6681.790762711031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5607.940949607043,
            "unit": "ns/iter",
            "extra": "iterations: 124978\ncpu: 5607.72455952245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5591.767099324883,
            "unit": "ns/iter",
            "extra": "iterations: 125195\ncpu: 5591.542793242542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5576.450592316938,
            "unit": "ns/iter",
            "extra": "iterations: 125102\ncpu: 5576.380873207472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9458.227887956897,
            "unit": "ns/iter",
            "extra": "iterations: 73365\ncpu: 9457.795951748063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 53697.0477331603,
            "unit": "ns/iter",
            "extra": "iterations: 15440\ncpu: 53696.742227979674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 224486.11145996785,
            "unit": "ns/iter",
            "extra": "iterations: 3822\ncpu: 224483.56881214105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 181914.99000638173,
            "unit": "ns/iter",
            "extra": "iterations: 4703\ncpu: 181907.01679778894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 179610.86791264685,
            "unit": "ns/iter",
            "extra": "iterations: 4762\ncpu: 179603.92692146162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 179174.65499894522,
            "unit": "ns/iter",
            "extra": "iterations: 4771\ncpu: 179160.05030391886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 405364.57382394903,
            "unit": "ns/iter",
            "extra": "iterations: 2147\ncpu: 405348.81229622586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2978685.5111822183,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2978583.0670926506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2477578.284574544,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2477464.095744672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2514691.404312672,
            "unit": "ns/iter",
            "extra": "iterations: 371\ncpu: 2514596.495956867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2456624.472148541,
            "unit": "ns/iter",
            "extra": "iterations: 377\ncpu: 2456507.6923076985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1455468.951410681,
            "unit": "ns/iter",
            "extra": "iterations: 638\ncpu: 1455389.6551724074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2411499.3886011485,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2411320.7253886014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7555.426415624551,
            "unit": "ns/iter",
            "extra": "iterations: 92574\ncpu: 7555.080260116244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 54295.56089999891,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 54291.68000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 100156.69279216252,
            "unit": "ns/iter",
            "extra": "iterations: 8574\ncpu: 100152.72918124602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 145457.7771592394,
            "unit": "ns/iter",
            "extra": "iterations: 5928\ncpu: 145451.61943319763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 191735.26675484117,
            "unit": "ns/iter",
            "extra": "iterations: 4536\ncpu: 191729.69576719584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 237150.81977540956,
            "unit": "ns/iter",
            "extra": "iterations: 3651\ncpu: 237142.81018898898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 282234.4001305478,
            "unit": "ns/iter",
            "extra": "iterations: 3064\ncpu: 282224.3146214121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 327751.4325757574,
            "unit": "ns/iter",
            "extra": "iterations: 2640\ncpu: 327738.25757575734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 373300.2933333204,
            "unit": "ns/iter",
            "extra": "iterations: 2325\ncpu: 373296.1290322582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6214.235384506391,
            "unit": "ns/iter",
            "extra": "iterations: 112586\ncpu: 6214.165171513369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5190.831855791937,
            "unit": "ns/iter",
            "extra": "iterations: 135360\ncpu: 5190.692228132359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5144.555410872442,
            "unit": "ns/iter",
            "extra": "iterations: 136697\ncpu: 5144.276026540452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5211.110364604286,
            "unit": "ns/iter",
            "extra": "iterations: 134255\ncpu: 5211.052847193816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8692.342749201529,
            "unit": "ns/iter",
            "extra": "iterations: 80467\ncpu: 8692.27882237448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 30752.571745506488,
            "unit": "ns/iter",
            "extra": "iterations: 26594\ncpu: 30752.36143491021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 137150.45505799184,
            "unit": "ns/iter",
            "extra": "iterations: 6208\ncpu: 137150.2255154648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 105984.52177699997,
            "unit": "ns/iter",
            "extra": "iterations: 8036\ncpu: 105980.35092085546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 106194.18896466719,
            "unit": "ns/iter",
            "extra": "iterations: 8065\ncpu: 106187.61314321245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 104356.85458094763,
            "unit": "ns/iter",
            "extra": "iterations: 8197\ncpu: 104352.55581310329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 345198.0449269825,
            "unit": "ns/iter",
            "extra": "iterations: 2671\ncpu: 345187.2332459767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1739135.0432331508,
            "unit": "ns/iter",
            "extra": "iterations: 532\ncpu: 1739099.99999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1387690.5089552137,
            "unit": "ns/iter",
            "extra": "iterations: 670\ncpu: 1387590.4477611927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1397955.631659032,
            "unit": "ns/iter",
            "extra": "iterations: 657\ncpu: 1397892.3896499122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1377536.6764705535,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1377481.9117646958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 773866.4058577581,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 773814.7280334748 ns\nthreads: 1"
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
          "id": "2f550c1607320f8cf14031a2e95845f60ee8b88b",
          "message": "Upd",
          "timestamp": "2023-12-11T19:02:05+03:00",
          "tree_id": "337d408608d901b7b5b76fdd59c6fa5b12dc6c2e",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/2f550c1607320f8cf14031a2e95845f60ee8b88b"
        },
        "date": 1702310722566,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 17576.66716064728,
            "unit": "ns/iter",
            "extra": "iterations: 41837\ncpu: 17575.937567225184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 157417.39264487225,
            "unit": "ns/iter",
            "extra": "iterations: 5384\ncpu: 157413.63298662705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 297415.25616438134,
            "unit": "ns/iter",
            "extra": "iterations: 2920\ncpu: 297411.81506849313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 433650.3488721754,
            "unit": "ns/iter",
            "extra": "iterations: 1995\ncpu: 433631.0776942356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 577293.5955204121,
            "unit": "ns/iter",
            "extra": "iterations: 1518\ncpu: 577250.9222661398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 604886.1779999868,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 604884.2999999992 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 691975.9509063464,
            "unit": "ns/iter",
            "extra": "iterations: 1324\ncpu: 691952.1903323259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 799662.2668977393,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 799620.3639514726 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 910772.7742885187,
            "unit": "ns/iter",
            "extra": "iterations: 1019\ncpu: 910716.4867517186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 13425.809875493182,
            "unit": "ns/iter",
            "extra": "iterations: 51724\ncpu: 13425.09280024749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 11199.936887538914,
            "unit": "ns/iter",
            "extra": "iterations: 62555\ncpu: 11199.258252737614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 11236.411787272693,
            "unit": "ns/iter",
            "extra": "iterations: 62559\ncpu: 11235.759842708483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 11310.928432893954,
            "unit": "ns/iter",
            "extra": "iterations: 61872\ncpu: 11310.539500905075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 18646.231651498125,
            "unit": "ns/iter",
            "extra": "iterations: 37578\ncpu: 18646.14668156897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 73217.52374817549,
            "unit": "ns/iter",
            "extra": "iterations: 11643\ncpu: 73217.3924246328 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 364091.67221509956,
            "unit": "ns/iter",
            "extra": "iterations: 2343\ncpu: 364064.10584720393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 290577.9265306143,
            "unit": "ns/iter",
            "extra": "iterations: 2940\ncpu: 290567.0408163264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 288088.33468149666,
            "unit": "ns/iter",
            "extra": "iterations: 2967\ncpu: 288085.4398382206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 285998.6370669435,
            "unit": "ns/iter",
            "extra": "iterations: 2973\ncpu: 285995.8627648832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 589185.6039999936,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 589168.3000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4737983.659898363,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4737913.19796955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3878820.4166666656,
            "unit": "ns/iter",
            "extra": "iterations: 240\ncpu: 3878790.4166666702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3891374.5732217883,
            "unit": "ns/iter",
            "extra": "iterations: 239\ncpu: 3891344.769874465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3850001.0663899947,
            "unit": "ns/iter",
            "extra": "iterations: 241\ncpu: 3849971.784232357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2259654.0829268387,
            "unit": "ns/iter",
            "extra": "iterations: 410\ncpu: 2259596.585365846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 8814.734873668107,
            "unit": "ns/iter",
            "extra": "iterations: 79117\ncpu: 8814.641606734333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 100313.89711741255,
            "unit": "ns/iter",
            "extra": "iterations: 8534\ncpu: 100312.4209046165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 192206.00441403335,
            "unit": "ns/iter",
            "extra": "iterations: 4531\ncpu: 192203.42087839343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 283786.29544709815,
            "unit": "ns/iter",
            "extra": "iterations: 3053\ncpu: 283781.13331149734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 375737.4290657441,
            "unit": "ns/iter",
            "extra": "iterations: 2312\ncpu: 375733.78027681605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 466181.54068522167,
            "unit": "ns/iter",
            "extra": "iterations: 1868\ncpu: 466176.71306209714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 554922.7147415504,
            "unit": "ns/iter",
            "extra": "iterations: 1567\ncpu: 554918.2514358641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 520875.9870000108,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520872.1999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 590914.5619999948,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590919.1000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6672.9421515335125,
            "unit": "ns/iter",
            "extra": "iterations: 104307\ncpu: 6672.874303738 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 5572.843649836442,
            "unit": "ns/iter",
            "extra": "iterations: 126044\ncpu: 5572.7682396623195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 5589.627839801278,
            "unit": "ns/iter",
            "extra": "iterations: 125669\ncpu: 5589.582156299473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 5590.566006745529,
            "unit": "ns/iter",
            "extra": "iterations: 125419\ncpu: 5590.550873472142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 9480.39313354749,
            "unit": "ns/iter",
            "extra": "iterations: 73779\ncpu: 9480.29791675145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 54335.294818889786,
            "unit": "ns/iter",
            "extra": "iterations: 15267\ncpu: 54334.2306936532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 225530.9013157919,
            "unit": "ns/iter",
            "extra": "iterations: 3800\ncpu: 225529.0263157892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 181568.51418289143,
            "unit": "ns/iter",
            "extra": "iterations: 4724\ncpu: 181568.22607959312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 179803.45475540552,
            "unit": "ns/iter",
            "extra": "iterations: 4763\ncpu: 179802.3934495068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 180582.09201937256,
            "unit": "ns/iter",
            "extra": "iterations: 4749\ncpu: 180580.29058749197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 407898.203851577,
            "unit": "ns/iter",
            "extra": "iterations: 2129\ncpu: 407890.08924377605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2975226.7238095663,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2975013.0158730154 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2475882.153439132,
            "unit": "ns/iter",
            "extra": "iterations: 378\ncpu: 2475714.5502645527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2483372.198391448,
            "unit": "ns/iter",
            "extra": "iterations: 373\ncpu: 2483255.76407508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2457090.9867020994,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2456975.2659574533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1482428.9047619044,
            "unit": "ns/iter",
            "extra": "iterations: 630\ncpu: 1482348.2539682575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2393920.876288702,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2393794.072164937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7584.537305158976,
            "unit": "ns/iter",
            "extra": "iterations: 91998\ncpu: 7584.444227048411 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 55488.701199999465,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 55487.970000000074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 102148.58740344529,
            "unit": "ns/iter",
            "extra": "iterations: 8415\ncpu: 102148.48484848428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 148034.99569188044,
            "unit": "ns/iter",
            "extra": "iterations: 5803\ncpu: 148027.79596760293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 195435.9347874962,
            "unit": "ns/iter",
            "extra": "iterations: 4447\ncpu: 195418.0121430182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 241151.825250838,
            "unit": "ns/iter",
            "extra": "iterations: 3588\ncpu: 241147.35228539494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 287042.9854304605,
            "unit": "ns/iter",
            "extra": "iterations: 3020\ncpu: 287030.3642384125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 335363.32755298377,
            "unit": "ns/iter",
            "extra": "iterations: 2595\ncpu: 335345.74181117554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 380442.36220472824,
            "unit": "ns/iter",
            "extra": "iterations: 2286\ncpu: 380422.5721784759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6220.698702866663,
            "unit": "ns/iter",
            "extra": "iterations: 112633\ncpu: 6220.4185274297515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 5186.529192197784,
            "unit": "ns/iter",
            "extra": "iterations: 135293\ncpu: 5186.518149497793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 5114.470901400119,
            "unit": "ns/iter",
            "extra": "iterations: 137120\ncpu: 5114.38156359394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 5197.557711354474,
            "unit": "ns/iter",
            "extra": "iterations: 135294\ncpu: 5197.211997575637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 8742.353346567264,
            "unit": "ns/iter",
            "extra": "iterations: 80097\ncpu: 8741.960373047612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 31570.170279234746,
            "unit": "ns/iter",
            "extra": "iterations: 25928\ncpu: 31568.863776612106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 138577.35686528299,
            "unit": "ns/iter",
            "extra": "iterations: 6176\ncpu: 138570.36917098414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 106220.51300884082,
            "unit": "ns/iter",
            "extra": "iterations: 8033\ncpu: 106214.98817378427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 105878.54454094218,
            "unit": "ns/iter",
            "extra": "iterations: 8060\ncpu: 105874.0198511166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 102658.67990343766,
            "unit": "ns/iter",
            "extra": "iterations: 8285\ncpu: 102652.91490645715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 340154.0189169111,
            "unit": "ns/iter",
            "extra": "iterations: 2696\ncpu: 340134.97774481145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1773826.541984722,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1773707.0610687046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1406455.7276853255,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1406388.956127081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1413472.4886191317,
            "unit": "ns/iter",
            "extra": "iterations: 659\ncpu: 1413412.443095592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1381557.6517857036,
            "unit": "ns/iter",
            "extra": "iterations: 672\ncpu: 1381485.7142857043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 782016.1658206087,
            "unit": "ns/iter",
            "extra": "iterations: 1182\ncpu: 781965.2284263911 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}