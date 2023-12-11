window.BENCHMARK_DATA = {
  "lastUpdate": 1702310705859,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-10 22.04 Release c++-17": [
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
        "date": 1702084706361,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1598.7989978367677,
            "unit": "ns/iter",
            "extra": "iterations: 444239\ncpu: 1598.7657544700041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19280.842480480176,
            "unit": "ns/iter",
            "extra": "iterations: 44185\ncpu: 19280.47980083739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 41311.556951884864,
            "unit": "ns/iter",
            "extra": "iterations: 19973\ncpu: 41311.0949782206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51244.565000001785,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51243.49000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 70951.93538844807,
            "unit": "ns/iter",
            "extra": "iterations: 12846\ncpu: 70950.75509886342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 84094.9860546198,
            "unit": "ns/iter",
            "extra": "iterations: 10326\ncpu: 84093.2306798373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 100572.30140049475,
            "unit": "ns/iter",
            "extra": "iterations: 8497\ncpu: 100564.50511945404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 116219.25381055949,
            "unit": "ns/iter",
            "extra": "iterations: 7348\ncpu: 116214.34403919436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 134086.79261189423,
            "unit": "ns/iter",
            "extra": "iterations: 6524\ncpu: 134076.10361741268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1357.5733856053155,
            "unit": "ns/iter",
            "extra": "iterations: 519080\ncpu: 1357.5138706943058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1098.4472536386686,
            "unit": "ns/iter",
            "extra": "iterations: 641030\ncpu: 1098.3655991139276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1085.8345387877016,
            "unit": "ns/iter",
            "extra": "iterations: 644985\ncpu: 1085.8190500554265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1080.000214480651,
            "unit": "ns/iter",
            "extra": "iterations: 648077\ncpu: 1079.9713614277316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2047.8538582239535,
            "unit": "ns/iter",
            "extra": "iterations: 345418\ncpu: 2047.736365794489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6291.978402283962,
            "unit": "ns/iter",
            "extra": "iterations: 132051\ncpu: 6291.744856154065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30913.40175432239,
            "unit": "ns/iter",
            "extra": "iterations: 27589\ncpu: 30911.903294791377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 27476.19574016363,
            "unit": "ns/iter",
            "extra": "iterations: 30142\ncpu: 27474.31822705858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 26658.130980013568,
            "unit": "ns/iter",
            "extra": "iterations: 31020\ncpu: 26656.18310767243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 27077.122949739827,
            "unit": "ns/iter",
            "extra": "iterations: 30362\ncpu: 27075.88432909562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64853.36888986876,
            "unit": "ns/iter",
            "extra": "iterations: 13584\ncpu: 64799.58775029454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 683632.8925438587,
            "unit": "ns/iter",
            "extra": "iterations: 1368\ncpu: 683631.7251462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 612176.6189279913,
            "unit": "ns/iter",
            "extra": "iterations: 1194\ncpu: 612161.0552763798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 542409.8830000048,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542402.9999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 544041.6319999883,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544034.4999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 381009.84283847874,
            "unit": "ns/iter",
            "extra": "iterations: 2297\ncpu: 380997.8232477144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 542718.1549999886,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542717.8999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 839.8696686824005,
            "unit": "ns/iter",
            "extra": "iterations: 831619\ncpu: 839.8026019126548 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12785.677588426239,
            "unit": "ns/iter",
            "extra": "iterations: 65252\ncpu: 12785.224973947163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 28927.019747841117,
            "unit": "ns/iter",
            "extra": "iterations: 28712\ncpu: 28924.247701309603 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 43417.7927636708,
            "unit": "ns/iter",
            "extra": "iterations: 19181\ncpu: 43416.05234346488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 58172.085839292704,
            "unit": "ns/iter",
            "extra": "iterations: 14399\ncpu: 58168.92145287867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60536.36799999823,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60535.61999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 72251.60028437576,
            "unit": "ns/iter",
            "extra": "iterations: 11956\ncpu: 72247.8671796589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 84560.47076505345,
            "unit": "ns/iter",
            "extra": "iterations: 10313\ncpu: 84556.70512944844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 96401.20769909982,
            "unit": "ns/iter",
            "extra": "iterations: 9066\ncpu: 96394.08780057383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 695.9759792343754,
            "unit": "ns/iter",
            "extra": "iterations: 1022074\ncpu: 695.9439336094996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 554.4845252283076,
            "unit": "ns/iter",
            "extra": "iterations: 1267030\ncpu: 554.4460667861047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 547.5890211149639,
            "unit": "ns/iter",
            "extra": "iterations: 1278618\ncpu: 547.5699544351783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 524.4010878892323,
            "unit": "ns/iter",
            "extra": "iterations: 1336717\ncpu: 524.3860143919779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1067.6702482756534,
            "unit": "ns/iter",
            "extra": "iterations: 655199\ncpu: 1067.57092120104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4462.991256332595,
            "unit": "ns/iter",
            "extra": "iterations: 177843\ncpu: 4462.831823574721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 21170.7841490414,
            "unit": "ns/iter",
            "extra": "iterations: 39291\ncpu: 21169.881143264327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16960.117991922998,
            "unit": "ns/iter",
            "extra": "iterations: 48783\ncpu: 16959.668327081257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 16460.022079372917,
            "unit": "ns/iter",
            "extra": "iterations: 50092\ncpu: 16458.933562245435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 17292.220359702646,
            "unit": "ns/iter",
            "extra": "iterations: 48262\ncpu: 17291.4922713522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 44053.176949079854,
            "unit": "ns/iter",
            "extra": "iterations: 18932\ncpu: 44051.92795267265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 591569.5364548741,
            "unit": "ns/iter",
            "extra": "iterations: 1495\ncpu: 591528.2943143798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 477789.5437365033,
            "unit": "ns/iter",
            "extra": "iterations: 1852\ncpu: 477766.7386609081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 478784.72962764034,
            "unit": "ns/iter",
            "extra": "iterations: 1853\ncpu: 478745.8175930955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 477788.12896292977,
            "unit": "ns/iter",
            "extra": "iterations: 1861\ncpu: 477750.40300913557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 274164.03750774456,
            "unit": "ns/iter",
            "extra": "iterations: 3226\ncpu: 274150.0309981403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 466963.6246648768,
            "unit": "ns/iter",
            "extra": "iterations: 1865\ncpu: 466926.05898123514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 634.6313562868344,
            "unit": "ns/iter",
            "extra": "iterations: 1111203\ncpu: 634.6038482617515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5638.360319999833,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5638.051999999974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10864.544060248796,
            "unit": "ns/iter",
            "extra": "iterations: 76350\ncpu: 10864.096922069355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16049.824073545446,
            "unit": "ns/iter",
            "extra": "iterations: 52539\ncpu: 16048.834199356734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20837.759808587365,
            "unit": "ns/iter",
            "extra": "iterations: 39914\ncpu: 20836.774064238143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26339.73182033139,
            "unit": "ns/iter",
            "extra": "iterations: 31725\ncpu: 26338.830575256092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31619.310431709535,
            "unit": "ns/iter",
            "extra": "iterations: 26592\ncpu: 31616.437274368127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37431.6288682202,
            "unit": "ns/iter",
            "extra": "iterations: 23008\ncpu: 37428.929068150406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41598.1622395179,
            "unit": "ns/iter",
            "extra": "iterations: 19915\ncpu: 41595.666582977516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 570.4254646917218,
            "unit": "ns/iter",
            "extra": "iterations: 1226781\ncpu: 570.3829778909226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 440.08337548329814,
            "unit": "ns/iter",
            "extra": "iterations: 1595493\ncpu: 440.0637295180854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 437.1317246017796,
            "unit": "ns/iter",
            "extra": "iterations: 1601303\ncpu: 437.10896688509354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 447.0457154347907,
            "unit": "ns/iter",
            "extra": "iterations: 1566495\ncpu: 447.0304086511605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 937.0927278661125,
            "unit": "ns/iter",
            "extra": "iterations: 735410\ncpu: 937.0581036428706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2482.989874195497,
            "unit": "ns/iter",
            "extra": "iterations: 322246\ncpu: 2482.9862899772525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9550.502011319355,
            "unit": "ns/iter",
            "extra": "iterations: 85516\ncpu: 9550.287665466076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9801.948831431546,
            "unit": "ns/iter",
            "extra": "iterations: 82922\ncpu: 9801.35910855997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9847.918628093985,
            "unit": "ns/iter",
            "extra": "iterations: 83825\ncpu: 9847.224575007454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9497.846893284735,
            "unit": "ns/iter",
            "extra": "iterations: 86136\ncpu: 9497.246215287438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 31335.58310864789,
            "unit": "ns/iter",
            "extra": "iterations: 26333\ncpu: 31333.399156951575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 269424.8357562554,
            "unit": "ns/iter",
            "extra": "iterations: 3233\ncpu: 269412.83637488744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 205727.69457177265,
            "unit": "ns/iter",
            "extra": "iterations: 4145\ncpu: 205718.96260554748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 206005.51471297146,
            "unit": "ns/iter",
            "extra": "iterations: 4146\ncpu: 206001.6883743374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 208105.66024561654,
            "unit": "ns/iter",
            "extra": "iterations: 4153\ncpu: 208100.1685528522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 106118.35660605803,
            "unit": "ns/iter",
            "extra": "iterations: 8250\ncpu: 106116.76363636275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 202100.93854619874,
            "unit": "ns/iter",
            "extra": "iterations: 4361\ncpu: 202088.71818390454 ns\nthreads: 1"
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
        "date": 1702085001118,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1538.5197814015412,
            "unit": "ns/iter",
            "extra": "iterations: 455630\ncpu: 1538.3951890788578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 18937.28146813291,
            "unit": "ns/iter",
            "extra": "iterations: 43838\ncpu: 18936.050914731517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 39489.25989433219,
            "unit": "ns/iter",
            "extra": "iterations: 20820\ncpu: 39487.62728146014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 50552.941699999115,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50552.12999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 65344.09282159603,
            "unit": "ns/iter",
            "extra": "iterations: 13262\ncpu: 65337.67154275371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 81304.34384680474,
            "unit": "ns/iter",
            "extra": "iterations: 10653\ncpu: 81295.75706373795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 96964.5165860403,
            "unit": "ns/iter",
            "extra": "iterations: 8682\ncpu: 96959.456346464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 112162.49626425521,
            "unit": "ns/iter",
            "extra": "iterations: 7629\ncpu: 112157.66155459435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 129759.82438879169,
            "unit": "ns/iter",
            "extra": "iterations: 6708\ncpu: 129751.65474060814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1344.677525347928,
            "unit": "ns/iter",
            "extra": "iterations: 510989\ncpu: 1344.578259023186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1113.216010766333,
            "unit": "ns/iter",
            "extra": "iterations: 625654\ncpu: 1113.1123592273043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1078.2196221884924,
            "unit": "ns/iter",
            "extra": "iterations: 584736\ncpu: 1078.2192305587482 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1084.407136716698,
            "unit": "ns/iter",
            "extra": "iterations: 644442\ncpu: 1084.3436647518313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2178.553733472002,
            "unit": "ns/iter",
            "extra": "iterations: 321122\ncpu: 2178.5539452295393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6273.793161113987,
            "unit": "ns/iter",
            "extra": "iterations: 130957\ncpu: 6273.63409363379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31256.83665448172,
            "unit": "ns/iter",
            "extra": "iterations: 25443\ncpu: 31255.968242738716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 27356.81581127175,
            "unit": "ns/iter",
            "extra": "iterations: 30181\ncpu: 27355.94910705408 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 25937.871544456077,
            "unit": "ns/iter",
            "extra": "iterations: 31435\ncpu: 25937.84953077778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 26444.46734680807,
            "unit": "ns/iter",
            "extra": "iterations: 31268\ncpu: 26444.47678137386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 65516.61721463015,
            "unit": "ns/iter",
            "extra": "iterations: 13535\ncpu: 65514.86516438864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 692796.8939999972,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 692725.4000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 520681.6839999817,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520645.2000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 515965.68200000096,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 515966.5000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 510519.44700000715,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510471.70000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 368075.30243289616,
            "unit": "ns/iter",
            "extra": "iterations: 2384\ncpu: 368048.9093959724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 520229.1100000025,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 520197.10000000073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 821.8961375536408,
            "unit": "ns/iter",
            "extra": "iterations: 851973\ncpu: 821.875575869191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13683.949393252124,
            "unit": "ns/iter",
            "extra": "iterations: 59992\ncpu: 13682.852713695189 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 28867.00753400736,
            "unit": "ns/iter",
            "extra": "iterations: 28670\ncpu: 28865.786536449275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 42965.55532068479,
            "unit": "ns/iter",
            "extra": "iterations: 19396\ncpu: 42963.00783666733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 57193.39302293811,
            "unit": "ns/iter",
            "extra": "iterations: 14648\ncpu: 57190.59939923545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59891.07839999974,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59886.35000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 71335.64212258463,
            "unit": "ns/iter",
            "extra": "iterations: 12155\ncpu: 71334.8827642947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 83486.84035540155,
            "unit": "ns/iter",
            "extra": "iterations: 10467\ncpu: 83483.44320244562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 95051.24921306552,
            "unit": "ns/iter",
            "extra": "iterations: 9213\ncpu: 95047.921415391 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 664.7225412992902,
            "unit": "ns/iter",
            "extra": "iterations: 1052863\ncpu: 664.6911326544837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 579.220887929971,
            "unit": "ns/iter",
            "extra": "iterations: 1205050\ncpu: 579.1810298327861 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 572.6901242809525,
            "unit": "ns/iter",
            "extra": "iterations: 1219334\ncpu: 572.64916749635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 549.6641267464855,
            "unit": "ns/iter",
            "extra": "iterations: 1263688\ncpu: 549.6537119922008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1086.7188403184848,
            "unit": "ns/iter",
            "extra": "iterations: 643556\ncpu: 1086.695174934272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4451.37578492831,
            "unit": "ns/iter",
            "extra": "iterations: 179475\ncpu: 4451.243348655798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20837.66789243297,
            "unit": "ns/iter",
            "extra": "iterations: 39975\ncpu: 20836.820512820632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16686.544183724112,
            "unit": "ns/iter",
            "extra": "iterations: 50075\ncpu: 16686.104842735855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 16187.003417342708,
            "unit": "ns/iter",
            "extra": "iterations: 51502\ncpu: 16186.88012116032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 16428.703263565167,
            "unit": "ns/iter",
            "extra": "iterations: 50405\ncpu: 16427.590516813838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 44294.30318310602,
            "unit": "ns/iter",
            "extra": "iterations: 19038\ncpu: 44293.06124592949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 544580.2970479518,
            "unit": "ns/iter",
            "extra": "iterations: 1626\ncpu: 544554.6125461251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 436693.03121901955,
            "unit": "ns/iter",
            "extra": "iterations: 2018\ncpu: 436672.6461843404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 434941.98274161434,
            "unit": "ns/iter",
            "extra": "iterations: 2028\ncpu: 434919.1814595632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 443174.9785107345,
            "unit": "ns/iter",
            "extra": "iterations: 2001\ncpu: 443044.6776611695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 253910.8308929067,
            "unit": "ns/iter",
            "extra": "iterations: 3483\ncpu: 253899.8277347112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 436443.33483033726,
            "unit": "ns/iter",
            "extra": "iterations: 2004\ncpu: 436411.87624750787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 632.4946095831775,
            "unit": "ns/iter",
            "extra": "iterations: 1107150\ncpu: 632.4622679853657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5572.373289999746,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5571.742999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10816.257858629071,
            "unit": "ns/iter",
            "extra": "iterations: 77399\ncpu: 10815.761185545014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16111.174830357972,
            "unit": "ns/iter",
            "extra": "iterations: 52611\ncpu: 16110.537720248618 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21156.99097065471,
            "unit": "ns/iter",
            "extra": "iterations: 39427\ncpu: 21155.86526999267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26422.766443629975,
            "unit": "ns/iter",
            "extra": "iterations: 31684\ncpu: 26421.234692589303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31614.268639728,
            "unit": "ns/iter",
            "extra": "iterations: 26355\ncpu: 31612.870423069442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36757.46992726737,
            "unit": "ns/iter",
            "extra": "iterations: 22961\ncpu: 36754.70580549612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41960.657053819734,
            "unit": "ns/iter",
            "extra": "iterations: 20216\ncpu: 41958.874159082116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 572.7922564529568,
            "unit": "ns/iter",
            "extra": "iterations: 1227422\ncpu: 572.7386343083323 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 443.66228497528147,
            "unit": "ns/iter",
            "extra": "iterations: 1574354\ncpu: 443.6353577403822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 436.55434371250374,
            "unit": "ns/iter",
            "extra": "iterations: 1593349\ncpu: 436.5456030034837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 442.22265242168464,
            "unit": "ns/iter",
            "extra": "iterations: 1548894\ncpu: 442.21470287831517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 934.5245823171757,
            "unit": "ns/iter",
            "extra": "iterations: 745841\ncpu: 934.5057458627277 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2473.5694124950883,
            "unit": "ns/iter",
            "extra": "iterations: 322125\ncpu: 2473.4069072565035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9932.303115940582,
            "unit": "ns/iter",
            "extra": "iterations: 82094\ncpu: 9931.745316344715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10255.485533746423,
            "unit": "ns/iter",
            "extra": "iterations: 80394\ncpu: 10255.067542353914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10127.168338081834,
            "unit": "ns/iter",
            "extra": "iterations: 81069\ncpu: 10126.277615364688 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9656.074966267852,
            "unit": "ns/iter",
            "extra": "iterations: 85972\ncpu: 9655.682082538611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 31761.307674453892,
            "unit": "ns/iter",
            "extra": "iterations: 25852\ncpu: 31758.757542936928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 284729.9918910068,
            "unit": "ns/iter",
            "extra": "iterations: 3083\ncpu: 284713.9150178367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 214359.91338776602,
            "unit": "ns/iter",
            "extra": "iterations: 4041\ncpu: 214337.391734719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 209324.18904377444,
            "unit": "ns/iter",
            "extra": "iterations: 4089\ncpu: 209313.49963316153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 213413.673020521,
            "unit": "ns/iter",
            "extra": "iterations: 4092\ncpu: 213396.65200391007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 107291.74212210247,
            "unit": "ns/iter",
            "extra": "iterations: 8124\ncpu: 107288.88478581945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 205883.29880478978,
            "unit": "ns/iter",
            "extra": "iterations: 4267\ncpu: 205877.73611436432 ns\nthreads: 1"
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
        "date": 1702085582838,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1560.2202306458544,
            "unit": "ns/iter",
            "extra": "iterations: 431484\ncpu: 1560.1391940373223 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19655.339251099133,
            "unit": "ns/iter",
            "extra": "iterations: 42302\ncpu: 19653.973807384995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 41102.21045337558,
            "unit": "ns/iter",
            "extra": "iterations: 20204\ncpu: 41100.37121362107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 51214.51269999966,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51213.290000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 68247.28484989557,
            "unit": "ns/iter",
            "extra": "iterations: 12891\ncpu: 68245.98557132883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 87339.56199709182,
            "unit": "ns/iter",
            "extra": "iterations: 10315\ncpu: 87332.89384391661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 100466.92729898712,
            "unit": "ns/iter",
            "extra": "iterations: 8308\ncpu: 100464.7688974483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 115379.31404289501,
            "unit": "ns/iter",
            "extra": "iterations: 7413\ncpu: 115371.87373532973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 134142.67166893536,
            "unit": "ns/iter",
            "extra": "iterations: 6597\ncpu: 134141.10959527048 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1376.7983944154398,
            "unit": "ns/iter",
            "extra": "iterations: 507977\ncpu: 1376.764302320776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1085.5490384881894,
            "unit": "ns/iter",
            "extra": "iterations: 648042\ncpu: 1085.534425237868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1079.4897074062937,
            "unit": "ns/iter",
            "extra": "iterations: 640752\ncpu: 1079.4447773865697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1092.531391034621,
            "unit": "ns/iter",
            "extra": "iterations: 635261\ncpu: 1092.4363371905417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2045.5331064798304,
            "unit": "ns/iter",
            "extra": "iterations: 342365\ncpu: 2045.5201320228443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6193.457101690761,
            "unit": "ns/iter",
            "extra": "iterations: 133257\ncpu: 6193.1598340049695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 29799.907812611084,
            "unit": "ns/iter",
            "extra": "iterations: 27878\ncpu: 29800.02510940529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 26725.54716799762,
            "unit": "ns/iter",
            "extra": "iterations: 31197\ncpu: 26723.938199185777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 26357.401414282962,
            "unit": "ns/iter",
            "extra": "iterations: 31394\ncpu: 26356.886666242008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 26173.23349977577,
            "unit": "ns/iter",
            "extra": "iterations: 31242\ncpu: 26171.755969528134 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 63948.0065052388,
            "unit": "ns/iter",
            "extra": "iterations: 13835\ncpu: 63945.11022768337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 651404.5449999912,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 651364.6999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 523062.1580000161,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 523037.0999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 568830.2030000045,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 568815.0000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 524830.5190000337,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 524778.9000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 372454.60084745917,
            "unit": "ns/iter",
            "extra": "iterations: 2360\ncpu: 372443.22033898236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 522723.8310000075,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 522683.79999999935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 836.1802202395353,
            "unit": "ns/iter",
            "extra": "iterations: 832548\ncpu: 836.1314903164779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13505.280034126488,
            "unit": "ns/iter",
            "extra": "iterations: 62121\ncpu: 13504.840553114094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 29244.266141565105,
            "unit": "ns/iter",
            "extra": "iterations: 28312\ncpu: 29242.70274088722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 43576.12358790278,
            "unit": "ns/iter",
            "extra": "iterations: 19209\ncpu: 43573.77271070856 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 58252.628676467866,
            "unit": "ns/iter",
            "extra": "iterations: 14416\ncpu: 58250.936459489414 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60424.9455999991,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60420.510000000155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 72275.14878517516,
            "unit": "ns/iter",
            "extra": "iterations: 11977\ncpu: 72274.4593804792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 84295.20091859643,
            "unit": "ns/iter",
            "extra": "iterations: 10233\ncpu: 84293.03234633066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 96382.56200527614,
            "unit": "ns/iter",
            "extra": "iterations: 9096\ncpu: 96378.57299912075 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 676.9658145114232,
            "unit": "ns/iter",
            "extra": "iterations: 1034123\ncpu: 676.9518712957749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 550.66609994811,
            "unit": "ns/iter",
            "extra": "iterations: 1274001\ncpu: 550.6550622801716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 541.5012742578227,
            "unit": "ns/iter",
            "extra": "iterations: 1294479\ncpu: 541.4983170835543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 543.6730362060974,
            "unit": "ns/iter",
            "extra": "iterations: 1281359\ncpu: 543.6495939077153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1060.9866610645472,
            "unit": "ns/iter",
            "extra": "iterations: 659273\ncpu: 1057.9075739488728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4410.392953399256,
            "unit": "ns/iter",
            "extra": "iterations: 184032\ncpu: 4410.188988871499 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 21308.151166975334,
            "unit": "ns/iter",
            "extra": "iterations: 38904\ncpu: 21307.374563026915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16918.80834813866,
            "unit": "ns/iter",
            "extra": "iterations: 48969\ncpu: 16917.882742142912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 16466.050959749202,
            "unit": "ns/iter",
            "extra": "iterations: 49961\ncpu: 16465.192850423326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 17152.37405917051,
            "unit": "ns/iter",
            "extra": "iterations: 47963\ncpu: 17151.712778600242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 44527.646231154446,
            "unit": "ns/iter",
            "extra": "iterations: 18905\ncpu: 44525.728643215814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 545365.7062461323,
            "unit": "ns/iter",
            "extra": "iterations: 1617\ncpu: 545352.937538654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 443598.96397767094,
            "unit": "ns/iter",
            "extra": "iterations: 1971\ncpu: 443578.0314561139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 444680.3628048705,
            "unit": "ns/iter",
            "extra": "iterations: 1968\ncpu: 444658.07926828996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 451950.1822889778,
            "unit": "ns/iter",
            "extra": "iterations: 1931\ncpu: 451921.2325220067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 264367.1468384619,
            "unit": "ns/iter",
            "extra": "iterations: 3337\ncpu: 264357.5666766553 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 442230.68071065994,
            "unit": "ns/iter",
            "extra": "iterations: 1970\ncpu: 442199.49238578696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 630.0232347135511,
            "unit": "ns/iter",
            "extra": "iterations: 1116476\ncpu: 630.0182896900591 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5809.390329999928,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5808.850000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10824.637081454253,
            "unit": "ns/iter",
            "extra": "iterations: 77381\ncpu: 10824.107985164304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16169.020186693617,
            "unit": "ns/iter",
            "extra": "iterations: 52064\ncpu: 16168.24485248921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21070.81747242244,
            "unit": "ns/iter",
            "extra": "iterations: 39342\ncpu: 21069.98373239807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26535.496479096448,
            "unit": "ns/iter",
            "extra": "iterations: 31526\ncpu: 26533.562773583788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31716.37313993815,
            "unit": "ns/iter",
            "extra": "iterations: 26612\ncpu: 31714.820381782552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36836.9196601499,
            "unit": "ns/iter",
            "extra": "iterations: 22716\ncpu: 36834.26219404813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42285.533788191526,
            "unit": "ns/iter",
            "extra": "iterations: 19933\ncpu: 42283.8207996789 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 565.4826017309598,
            "unit": "ns/iter",
            "extra": "iterations: 1239175\ncpu: 565.4702523856654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 446.8306744719739,
            "unit": "ns/iter",
            "extra": "iterations: 1585077\ncpu: 446.82233102871487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 439.57405776928306,
            "unit": "ns/iter",
            "extra": "iterations: 1571908\ncpu: 439.5659287948148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 440.8303534671835,
            "unit": "ns/iter",
            "extra": "iterations: 1569198\ncpu: 440.82129852319315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 933.1106760873668,
            "unit": "ns/iter",
            "extra": "iterations: 750406\ncpu: 933.1136744642283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2484.8565648166964,
            "unit": "ns/iter",
            "extra": "iterations: 322271\ncpu: 2484.823021618429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9363.83340694998,
            "unit": "ns/iter",
            "extra": "iterations: 83767\ncpu: 9363.871214201246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10050.718614065581,
            "unit": "ns/iter",
            "extra": "iterations: 79542\ncpu: 10050.62608433289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9836.740073729392,
            "unit": "ns/iter",
            "extra": "iterations: 82735\ncpu: 9836.008944219393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9745.747148647395,
            "unit": "ns/iter",
            "extra": "iterations: 84872\ncpu: 9745.5497690641 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 31464.591042500935,
            "unit": "ns/iter",
            "extra": "iterations: 26235\ncpu: 31464.70745187679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 272102.9654178662,
            "unit": "ns/iter",
            "extra": "iterations: 3123\ncpu: 272095.6772334292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 208313.30899290188,
            "unit": "ns/iter",
            "extra": "iterations: 4081\ncpu: 208297.25557461177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 210700.93068574378,
            "unit": "ns/iter",
            "extra": "iterations: 4054\ncpu: 210691.16921559203 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 210441.7715047316,
            "unit": "ns/iter",
            "extra": "iterations: 4127\ncpu: 210427.5502786509 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 108261.44726731894,
            "unit": "ns/iter",
            "extra": "iterations: 8069\ncpu: 108257.38009666481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 204255.1776223755,
            "unit": "ns/iter",
            "extra": "iterations: 4290\ncpu: 204240.6526806512 ns\nthreads: 1"
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
        "date": 1702244185805,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1642.5340952762556,
            "unit": "ns/iter",
            "extra": "iterations: 429341\ncpu: 1642.507936581878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24457.828471481287,
            "unit": "ns/iter",
            "extra": "iterations: 33732\ncpu: 24457.3995019566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 50979.05997700164,
            "unit": "ns/iter",
            "extra": "iterations: 16523\ncpu: 50977.64328511772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 63002.31950147685,
            "unit": "ns/iter",
            "extra": "iterations: 13881\ncpu: 63002.06757438224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 93000.60411261661,
            "unit": "ns/iter",
            "extra": "iterations: 10407\ncpu: 92997.01162678968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 113151.3050847467,
            "unit": "ns/iter",
            "extra": "iterations: 7493\ncpu: 113150.03336447342 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 136269.7243569395,
            "unit": "ns/iter",
            "extra": "iterations: 6298\ncpu: 136268.22800889166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 165864.73163115227,
            "unit": "ns/iter",
            "extra": "iterations: 5444\ncpu: 165856.4658339455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 176023.1886396971,
            "unit": "ns/iter",
            "extra": "iterations: 4771\ncpu: 176017.25005240008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1411.0822985098064,
            "unit": "ns/iter",
            "extra": "iterations: 495173\ncpu: 1411.066233417413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1171.4440198797154,
            "unit": "ns/iter",
            "extra": "iterations: 595381\ncpu: 1171.4391288939353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1155.2642255253545,
            "unit": "ns/iter",
            "extra": "iterations: 604881\ncpu: 1155.2427667590803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1170.2960170408724,
            "unit": "ns/iter",
            "extra": "iterations: 597621\ncpu: 1170.27965884733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2354.0852948963984,
            "unit": "ns/iter",
            "extra": "iterations: 302140\ncpu: 2354.001125306151 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7260.644883436422,
            "unit": "ns/iter",
            "extra": "iterations: 113543\ncpu: 7260.491619914917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 35085.53911016887,
            "unit": "ns/iter",
            "extra": "iterations: 23600\ncpu: 35084.9194915254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 31409.822436312992,
            "unit": "ns/iter",
            "extra": "iterations: 26261\ncpu: 31409.42842999129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 31396.236658580634,
            "unit": "ns/iter",
            "extra": "iterations: 26384\ncpu: 31395.717101273545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 32460.836430364696,
            "unit": "ns/iter",
            "extra": "iterations: 25885\ncpu: 32460.734015839214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 76050.57033359482,
            "unit": "ns/iter",
            "extra": "iterations: 11481\ncpu: 76048.71526870468 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 809259.6195840678,
            "unit": "ns/iter",
            "extra": "iterations: 1154\ncpu: 809239.341421144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 668107.7359999961,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 668068.3999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 660677.2009999986,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 660649.8000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 654965.6679999884,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 654963.4999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 469430.7251744494,
            "unit": "ns/iter",
            "extra": "iterations: 1863\ncpu: 469410.30595813174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 919.3181852145523,
            "unit": "ns/iter",
            "extra": "iterations: 762845\ncpu: 919.299464504585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18766.34786500755,
            "unit": "ns/iter",
            "extra": "iterations: 44684\ncpu: 18765.77522155584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 39982.97576018443,
            "unit": "ns/iter",
            "extra": "iterations: 20916\ncpu: 39981.85121438136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 50232.76019999799,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50232.760000000104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 66763.92332488966,
            "unit": "ns/iter",
            "extra": "iterations: 13029\ncpu: 66761.57034308095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 83610.86902267118,
            "unit": "ns/iter",
            "extra": "iterations: 10498\ncpu: 83605.42960563906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 100162.86748508559,
            "unit": "ns/iter",
            "extra": "iterations: 8716\ncpu: 100158.96053235415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 116606.42531645857,
            "unit": "ns/iter",
            "extra": "iterations: 7505\ncpu: 116601.83877415076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 133020.0880829025,
            "unit": "ns/iter",
            "extra": "iterations: 6562\ncpu: 133014.3096616889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 775.4565877258094,
            "unit": "ns/iter",
            "extra": "iterations: 898732\ncpu: 775.4160305853092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 633.3495220157732,
            "unit": "ns/iter",
            "extra": "iterations: 1108614\ncpu: 633.320524546869 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 631.8691945890173,
            "unit": "ns/iter",
            "extra": "iterations: 1104939\ncpu: 631.858048272353 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 631.6280959665091,
            "unit": "ns/iter",
            "extra": "iterations: 1108095\ncpu: 631.5983737856426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1317.785149007384,
            "unit": "ns/iter",
            "extra": "iterations: 530712\ncpu: 1317.7143158624535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5013.313160000052,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5013.19500000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24588.458250643813,
            "unit": "ns/iter",
            "extra": "iterations: 33761\ncpu: 24587.532952222922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20976.35901011669,
            "unit": "ns/iter",
            "extra": "iterations: 39439\ncpu: 20976.008519485862 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 19877.572079675985,
            "unit": "ns/iter",
            "extra": "iterations: 41468\ncpu: 19876.76280505454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21674.683114092604,
            "unit": "ns/iter",
            "extra": "iterations: 38162\ncpu: 21674.06058382687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 58221.09939547243,
            "unit": "ns/iter",
            "extra": "iterations: 14226\ncpu: 58218.89498102094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 602114.8339999911,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 602069.0000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 615863.0056697329,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 615830.5457122617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 611707.5540730291,
            "unit": "ns/iter",
            "extra": "iterations: 1424\ncpu: 611669.7331460695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 607632.4683544257,
            "unit": "ns/iter",
            "extra": "iterations: 1422\ncpu: 607606.5400843918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 362549.6058992263,
            "unit": "ns/iter",
            "extra": "iterations: 2441\ncpu: 362531.5034821796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 618456.057705852,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 618417.3821252601 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 646.022984990795,
            "unit": "ns/iter",
            "extra": "iterations: 1082402\ncpu: 646.0150664910119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5715.638970000043,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5715.5749999999725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10954.526334652059,
            "unit": "ns/iter",
            "extra": "iterations: 75338\ncpu: 10954.370968170168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16797.43810810825,
            "unit": "ns/iter",
            "extra": "iterations: 51800\ncpu: 16796.918918918902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22059.000450211694,
            "unit": "ns/iter",
            "extra": "iterations: 37760\ncpu: 22058.92743644058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27318.600957569408,
            "unit": "ns/iter",
            "extra": "iterations: 30285\ncpu: 27318.187221396645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32977.846747693584,
            "unit": "ns/iter",
            "extra": "iterations: 25259\ncpu: 32977.37044221871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38690.72033780356,
            "unit": "ns/iter",
            "extra": "iterations: 21551\ncpu: 38690.07934666598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 43552.02945169684,
            "unit": "ns/iter",
            "extra": "iterations: 19150\ncpu: 43551.8537859008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 595.8436487549523,
            "unit": "ns/iter",
            "extra": "iterations: 1168267\ncpu: 595.8268101384308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 476.5765825755627,
            "unit": "ns/iter",
            "extra": "iterations: 1465712\ncpu: 476.5747977774604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 466.0891694838996,
            "unit": "ns/iter",
            "extra": "iterations: 1501175\ncpu: 466.08749812646903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 463.0162225118942,
            "unit": "ns/iter",
            "extra": "iterations: 1512836\ncpu: 463.0040533144381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 986.046500192316,
            "unit": "ns/iter",
            "extra": "iterations: 709739\ncpu: 986.0317666071604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2487.7028906271426,
            "unit": "ns/iter",
            "extra": "iterations: 321003\ncpu: 2487.6748815431993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9760.753061347266,
            "unit": "ns/iter",
            "extra": "iterations: 83215\ncpu: 9760.715015321752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10053.959984737723,
            "unit": "ns/iter",
            "extra": "iterations: 83868\ncpu: 10053.921638765698 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10250.949560028967,
            "unit": "ns/iter",
            "extra": "iterations: 79778\ncpu: 10250.856125749036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 10020.548718833958,
            "unit": "ns/iter",
            "extra": "iterations: 81098\ncpu: 10020.42343830931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 31289.11354009123,
            "unit": "ns/iter",
            "extra": "iterations: 26440\ncpu: 31288.80862329826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 282562.5456355745,
            "unit": "ns/iter",
            "extra": "iterations: 3013\ncpu: 282558.04845668585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 217036.74320926005,
            "unit": "ns/iter",
            "extra": "iterations: 3976\ncpu: 217034.657947687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 217501.2519370161,
            "unit": "ns/iter",
            "extra": "iterations: 4001\ncpu: 217493.6765808561 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 219461.95287039297,
            "unit": "ns/iter",
            "extra": "iterations: 3989\ncpu: 219456.35497618563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 110721.45071842705,
            "unit": "ns/iter",
            "extra": "iterations: 7934\ncpu: 110718.79253844164 ns\nthreads: 1"
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
        "date": 1702285124151,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1808.6325663289797,
            "unit": "ns/iter",
            "extra": "iterations: 431071\ncpu: 1808.5146066425252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24544.51887380805,
            "unit": "ns/iter",
            "extra": "iterations: 33671\ncpu: 24542.941997564674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 50392.268996318264,
            "unit": "ns/iter",
            "extra": "iterations: 16569\ncpu: 50389.24497555678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 63888.97088302323,
            "unit": "ns/iter",
            "extra": "iterations: 13669\ncpu: 63887.27778184213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 92523.81382561298,
            "unit": "ns/iter",
            "extra": "iterations: 10184\ncpu: 92517.54713275732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 115172.4498283609,
            "unit": "ns/iter",
            "extra": "iterations: 7574\ncpu: 115168.08819646155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 137385.81002220316,
            "unit": "ns/iter",
            "extra": "iterations: 6306\ncpu: 137373.07326355847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 159750.55529067232,
            "unit": "ns/iter",
            "extra": "iterations: 5453\ncpu: 159743.20557491275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 176347.38020727917,
            "unit": "ns/iter",
            "extra": "iterations: 4921\ncpu: 176337.6955903271 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1421.08916468249,
            "unit": "ns/iter",
            "extra": "iterations: 492639\ncpu: 1421.031830610244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1196.6977715829942,
            "unit": "ns/iter",
            "extra": "iterations: 584720\ncpu: 1196.6734505404306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1183.987345021616,
            "unit": "ns/iter",
            "extra": "iterations: 549270\ncpu: 1183.9825586687803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1180.01696091018,
            "unit": "ns/iter",
            "extra": "iterations: 589591\ncpu: 1180.007835940508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2379.7644506066704,
            "unit": "ns/iter",
            "extra": "iterations: 294261\ncpu: 2379.6860610138583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7118.41618601136,
            "unit": "ns/iter",
            "extra": "iterations: 116681\ncpu: 7118.1683393183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 34580.215088549456,
            "unit": "ns/iter",
            "extra": "iterations: 24111\ncpu: 34577.35888183812 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 34065.8143255318,
            "unit": "ns/iter",
            "extra": "iterations: 26191\ncpu: 34065.20560497883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 31376.38707345814,
            "unit": "ns/iter",
            "extra": "iterations: 26287\ncpu: 31375.539239928523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 31894.088914730077,
            "unit": "ns/iter",
            "extra": "iterations: 25800\ncpu: 31892.868217054216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 79129.32053895839,
            "unit": "ns/iter",
            "extra": "iterations: 11281\ncpu: 79125.97287474532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 807816.9688850231,
            "unit": "ns/iter",
            "extra": "iterations: 1157\ncpu: 807780.8124459804 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 666121.9540000048,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 666097.4999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 663809.8300000479,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 663789.9000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 664172.2950000145,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 664108.7999999975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 470155.42563548934,
            "unit": "ns/iter",
            "extra": "iterations: 1849\ncpu: 470137.64196863124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 914.4640075006096,
            "unit": "ns/iter",
            "extra": "iterations: 763673\ncpu: 914.4056422054971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18628.842990529105,
            "unit": "ns/iter",
            "extra": "iterations: 44768\ncpu: 18627.8145103646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 39799.33788412185,
            "unit": "ns/iter",
            "extra": "iterations: 21022\ncpu: 39797.23622871274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 59385.96778085447,
            "unit": "ns/iter",
            "extra": "iterations: 14091\ncpu: 59385.82073664027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 67229.10618115249,
            "unit": "ns/iter",
            "extra": "iterations: 13072\ncpu: 67226.8742350063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 83382.0843787913,
            "unit": "ns/iter",
            "extra": "iterations: 9884\ncpu: 83379.89680291375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 99414.183166061,
            "unit": "ns/iter",
            "extra": "iterations: 8768\ncpu: 99408.93020073025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 115671.28039999564,
            "unit": "ns/iter",
            "extra": "iterations: 7500\ncpu: 115668.31999999938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 132504.6756101286,
            "unit": "ns/iter",
            "extra": "iterations: 6597\ncpu: 132496.89252690636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 772.4326025754324,
            "unit": "ns/iter",
            "extra": "iterations: 907186\ncpu: 772.3977221870746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 629.3025252506084,
            "unit": "ns/iter",
            "extra": "iterations: 1073636\ncpu: 629.262059021871 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 627.5115968867448,
            "unit": "ns/iter",
            "extra": "iterations: 1117800\ncpu: 627.4862229379117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 645.9205524003031,
            "unit": "ns/iter",
            "extra": "iterations: 1079869\ncpu: 645.9071424404234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1323.9268624365486,
            "unit": "ns/iter",
            "extra": "iterations: 528716\ncpu: 1323.8477746086733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5596.303505151727,
            "unit": "ns/iter",
            "extra": "iterations: 141991\ncpu: 5596.294835588172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24629.482022438668,
            "unit": "ns/iter",
            "extra": "iterations: 33959\ncpu: 24628.360670219936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 21047.56113755881,
            "unit": "ns/iter",
            "extra": "iterations: 39910\ncpu: 21047.01829115497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20981.45748102635,
            "unit": "ns/iter",
            "extra": "iterations: 39794\ncpu: 20980.916721113677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 21937.438527614613,
            "unit": "ns/iter",
            "extra": "iterations: 37952\ncpu: 21936.893971332214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 50489.461099999746,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50487.07999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 592990.1370000152,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592973.8999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 608157.7159010948,
            "unit": "ns/iter",
            "extra": "iterations: 1415\ncpu: 608132.650176678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 609372.4173669422,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 609347.6190476225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 608996.1875442523,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 608985.6334041039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 360016.69995922915,
            "unit": "ns/iter",
            "extra": "iterations: 2453\ncpu: 360004.11740725517 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 610121.8770949632,
            "unit": "ns/iter",
            "extra": "iterations: 1432\ncpu: 610119.9022346382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 645.8608002381128,
            "unit": "ns/iter",
            "extra": "iterations: 1088601\ncpu: 645.8206450297206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5816.4501200002405,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5816.203999999984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11271.479742703068,
            "unit": "ns/iter",
            "extra": "iterations: 72912\ncpu: 11271.000658327846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16959.150855736367,
            "unit": "ns/iter",
            "extra": "iterations: 50366\ncpu: 16958.601040384394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 22508.837904029853,
            "unit": "ns/iter",
            "extra": "iterations: 37157\ncpu: 22507.68361277817 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27716.25428373419,
            "unit": "ns/iter",
            "extra": "iterations: 30289\ncpu: 27714.99224140762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 33350.86090554772,
            "unit": "ns/iter",
            "extra": "iterations: 25134\ncpu: 33349.160499721336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 38808.41993165789,
            "unit": "ns/iter",
            "extra": "iterations: 21363\ncpu: 38807.859383045485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 43826.0786599446,
            "unit": "ns/iter",
            "extra": "iterations: 19044\ncpu: 43824.826717075965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 602.0485044421299,
            "unit": "ns/iter",
            "extra": "iterations: 1176016\ncpu: 602.0454653678158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 473.86908773744915,
            "unit": "ns/iter",
            "extra": "iterations: 1464118\ncpu: 473.8529271547783 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 461.55330042511326,
            "unit": "ns/iter",
            "extra": "iterations: 1523834\ncpu: 461.51555878133513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 457.68901813273317,
            "unit": "ns/iter",
            "extra": "iterations: 1537662\ncpu: 457.66859036641256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 975.6957423137607,
            "unit": "ns/iter",
            "extra": "iterations: 704702\ncpu: 975.6726956926595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2504.087595917871,
            "unit": "ns/iter",
            "extra": "iterations: 321499\ncpu: 2503.9794836064852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9813.076278670223,
            "unit": "ns/iter",
            "extra": "iterations: 83798\ncpu: 9812.216282011406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9956.134882430384,
            "unit": "ns/iter",
            "extra": "iterations: 82887\ncpu: 9955.851943006739 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 10162.729794978779,
            "unit": "ns/iter",
            "extra": "iterations: 80772\ncpu: 10162.361957113691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9815.885623292537,
            "unit": "ns/iter",
            "extra": "iterations: 83837\ncpu: 9815.452604458522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 31606.589439901636,
            "unit": "ns/iter",
            "extra": "iterations: 26174\ncpu: 31605.53220753412 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 281552.07490013674,
            "unit": "ns/iter",
            "extra": "iterations: 3004\ncpu: 281540.4127829538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 221632.42712805702,
            "unit": "ns/iter",
            "extra": "iterations: 3959\ncpu: 221619.1967668593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 219666.02729340945,
            "unit": "ns/iter",
            "extra": "iterations: 3957\ncpu: 219661.73869092454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 220187.13827908915,
            "unit": "ns/iter",
            "extra": "iterations: 3963\ncpu: 220178.1478677785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 111141.04390862664,
            "unit": "ns/iter",
            "extra": "iterations: 7880\ncpu: 111137.55076142075 ns\nthreads: 1"
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
        "date": 1702309470696,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1623.0475519983795,
            "unit": "ns/iter",
            "extra": "iterations: 429677\ncpu: 1622.9404878548307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24732.581460085712,
            "unit": "ns/iter",
            "extra": "iterations: 33409\ncpu: 24730.5277021162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 51390.650073117555,
            "unit": "ns/iter",
            "extra": "iterations: 16412\ncpu: 51385.400926151575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 63509.5941103942,
            "unit": "ns/iter",
            "extra": "iterations: 13787\ncpu: 63507.644882860666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 93119.69290272806,
            "unit": "ns/iter",
            "extra": "iterations: 10342\ncpu: 93114.18487719975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 114843.73264577548,
            "unit": "ns/iter",
            "extra": "iterations: 7563\ncpu: 114841.20058177972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 136657.589833201,
            "unit": "ns/iter",
            "extra": "iterations: 6295\ncpu: 136652.51787132645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 157310.81061299203,
            "unit": "ns/iter",
            "extra": "iterations: 5465\ncpu: 157301.26258005467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 183989.348516505,
            "unit": "ns/iter",
            "extra": "iterations: 4786\ncpu: 183978.14458838257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1387.5276654274085,
            "unit": "ns/iter",
            "extra": "iterations: 501655\ncpu: 1387.507350669284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1157.0503819579585,
            "unit": "ns/iter",
            "extra": "iterations: 602815\ncpu: 1157.0121845010492 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1155.0908678630437,
            "unit": "ns/iter",
            "extra": "iterations: 606386\ncpu: 1155.1023605426258 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1156.9808585528879,
            "unit": "ns/iter",
            "extra": "iterations: 606276\ncpu: 1156.9775151910999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2409.00211158587,
            "unit": "ns/iter",
            "extra": "iterations: 301669\ncpu: 2408.980372527507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6851.526236419525,
            "unit": "ns/iter",
            "extra": "iterations: 120024\ncpu: 6851.258081716982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 33678.54073983,
            "unit": "ns/iter",
            "extra": "iterations: 24411\ncpu: 33678.5219777969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30505.1771075012,
            "unit": "ns/iter",
            "extra": "iterations: 27153\ncpu: 30504.673516738538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30004.56107871756,
            "unit": "ns/iter",
            "extra": "iterations: 27440\ncpu: 30004.409620991253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 32028.647124652427,
            "unit": "ns/iter",
            "extra": "iterations: 27701\ncpu: 32026.695787155728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 75910.85151515181,
            "unit": "ns/iter",
            "extra": "iterations: 11550\ncpu: 75910.2337662337 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 806861.1259574618,
            "unit": "ns/iter",
            "extra": "iterations: 1175\ncpu: 806804.5957446807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 666986.2930000079,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 666992.0000000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 661305.3089999994,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 661242.8000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 654530.4489999921,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 654477.7999999986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 473764.5045871624,
            "unit": "ns/iter",
            "extra": "iterations: 1853\ncpu: 473752.67134376627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 925.1358850017817,
            "unit": "ns/iter",
            "extra": "iterations: 756603\ncpu: 925.0908336340195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18728.12065471904,
            "unit": "ns/iter",
            "extra": "iterations: 44416\ncpu: 18727.5418768012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 40184.252346293826,
            "unit": "ns/iter",
            "extra": "iterations: 20884\ncpu: 40183.19766328291 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 50446.02890000078,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50445.60999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 67083.71541532378,
            "unit": "ns/iter",
            "extra": "iterations: 13026\ncpu: 67079.54859511748 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 84119.31940183976,
            "unit": "ns/iter",
            "extra": "iterations: 10432\ncpu: 84118.78834355822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 100580.47988439343,
            "unit": "ns/iter",
            "extra": "iterations: 8650\ncpu: 100576.46242774588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 117848.22542806898,
            "unit": "ns/iter",
            "extra": "iterations: 7417\ncpu: 117849.41350950506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 134350.11787247466,
            "unit": "ns/iter",
            "extra": "iterations: 6524\ncpu: 134343.71551195596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 752.8729620137966,
            "unit": "ns/iter",
            "extra": "iterations: 924810\ncpu: 752.8803754284734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 618.9312296071577,
            "unit": "ns/iter",
            "extra": "iterations: 1133671\ncpu: 618.901956564119 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 618.2847969153648,
            "unit": "ns/iter",
            "extra": "iterations: 1134921\ncpu: 618.2636500690363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 631.0598782482559,
            "unit": "ns/iter",
            "extra": "iterations: 1109635\ncpu: 631.0577802610792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1263.028699530593,
            "unit": "ns/iter",
            "extra": "iterations: 555584\ncpu: 1263.0172935145772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5117.275592030402,
            "unit": "ns/iter",
            "extra": "iterations: 154384\ncpu: 5117.194139289004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24227.13209217194,
            "unit": "ns/iter",
            "extra": "iterations: 33893\ncpu: 24226.459740949533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20467.84835186727,
            "unit": "ns/iter",
            "extra": "iterations: 40106\ncpu: 20467.757941455176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20329.42260783348,
            "unit": "ns/iter",
            "extra": "iterations: 40340\ncpu: 20328.82250867633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 20318.06220225679,
            "unit": "ns/iter",
            "extra": "iterations: 40513\ncpu: 20317.48327697283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 57523.372324953176,
            "unit": "ns/iter",
            "extra": "iterations: 14439\ncpu: 57521.32419142599 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 599410.037000041,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 599393.1000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 512964.0929999937,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 512968.7000000019 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 628213.3015647227,
            "unit": "ns/iter",
            "extra": "iterations: 1406\ncpu: 628209.1038406792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 506885.18900000193,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 506866.0999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 371861.24766751466,
            "unit": "ns/iter",
            "extra": "iterations: 2358\ncpu: 371864.50381679187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 504370.434000009,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504364.60000000236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 625.9633978766542,
            "unit": "ns/iter",
            "extra": "iterations: 1124361\ncpu: 625.9414903220595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5663.503600000013,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5663.56000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10639.075741669412,
            "unit": "ns/iter",
            "extra": "iterations: 77157\ncpu: 10638.736601993334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16321.05538019495,
            "unit": "ns/iter",
            "extra": "iterations: 52907\ncpu: 16320.766628234447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21529.17386681912,
            "unit": "ns/iter",
            "extra": "iterations: 38564\ncpu: 21528.78332123222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26691.306730522272,
            "unit": "ns/iter",
            "extra": "iterations: 31112\ncpu: 26691.55952687074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31711.225039980935,
            "unit": "ns/iter",
            "extra": "iterations: 26262\ncpu: 31709.999238443437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36438.137217712654,
            "unit": "ns/iter",
            "extra": "iterations: 22672\ncpu: 36435.876852505324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41413.46230554501,
            "unit": "ns/iter",
            "extra": "iterations: 20056\ncpu: 41412.37534902261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 563.7196753608748,
            "unit": "ns/iter",
            "extra": "iterations: 1244582\ncpu: 563.7095828157542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 451.29320087549206,
            "unit": "ns/iter",
            "extra": "iterations: 1555715\ncpu: 450.8148343366246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 439.830772994232,
            "unit": "ns/iter",
            "extra": "iterations: 1598356\ncpu: 439.80558774140576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 435.0579435411037,
            "unit": "ns/iter",
            "extra": "iterations: 1605770\ncpu: 435.03154249986017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 937.7408157602191,
            "unit": "ns/iter",
            "extra": "iterations: 735118\ncpu: 937.6959889432687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2400.49295246763,
            "unit": "ns/iter",
            "extra": "iterations: 333521\ncpu: 2400.355299966124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9052.856418337708,
            "unit": "ns/iter",
            "extra": "iterations: 90109\ncpu: 9052.6318125826 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9488.374137650962,
            "unit": "ns/iter",
            "extra": "iterations: 86102\ncpu: 9488.07693201073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9640.094788510642,
            "unit": "ns/iter",
            "extra": "iterations: 85158\ncpu: 9639.777824749302 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9235.342526499691,
            "unit": "ns/iter",
            "extra": "iterations: 88399\ncpu: 9235.019626918865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30445.48257788233,
            "unit": "ns/iter",
            "extra": "iterations: 27092\ncpu: 30444.69954230039 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 265663.76887376787,
            "unit": "ns/iter",
            "extra": "iterations: 3232\ncpu: 265649.41212871217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 208966.30580893366,
            "unit": "ns/iter",
            "extra": "iterations: 4166\ncpu: 208955.68891022637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 208974.89404449676,
            "unit": "ns/iter",
            "extra": "iterations: 4181\ncpu: 208962.71226978968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 208906.6949233736,
            "unit": "ns/iter",
            "extra": "iterations: 4176\ncpu: 208903.32854406207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 107079.04197681569,
            "unit": "ns/iter",
            "extra": "iterations: 8195\ncpu: 107074.46003660846 ns\nthreads: 1"
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
        "date": 1702310480867,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1630.1411768001497,
            "unit": "ns/iter",
            "extra": "iterations: 428314\ncpu: 1630.0767661108441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25204.61506452686,
            "unit": "ns/iter",
            "extra": "iterations: 33164\ncpu: 25204.191291762152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 51197.89853915885,
            "unit": "ns/iter",
            "extra": "iterations: 16292\ncpu: 51193.16228823961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 64281.80382007511,
            "unit": "ns/iter",
            "extra": "iterations: 13717\ncpu: 64277.626303127494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 93908.63327543293,
            "unit": "ns/iter",
            "extra": "iterations: 10362\ncpu: 93898.82262111564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 116552.47770016239,
            "unit": "ns/iter",
            "extra": "iterations: 7444\ncpu: 116547.17893605593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 140998.46884510323,
            "unit": "ns/iter",
            "extra": "iterations: 6243\ncpu: 140990.30914624382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 156910.58666665942,
            "unit": "ns/iter",
            "extra": "iterations: 5400\ncpu: 156902.94444444453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 177440.58633776184,
            "unit": "ns/iter",
            "extra": "iterations: 4743\ncpu: 177421.80054817637 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1429.57611489659,
            "unit": "ns/iter",
            "extra": "iterations: 490180\ncpu: 1429.5573054796178 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1173.6843856106289,
            "unit": "ns/iter",
            "extra": "iterations: 595803\ncpu: 1173.658575065921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1160.8880449371773,
            "unit": "ns/iter",
            "extra": "iterations: 603510\ncpu: 1160.8352802770457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1178.8955308636705,
            "unit": "ns/iter",
            "extra": "iterations: 593448\ncpu: 1178.7883689893654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2428.923565534219,
            "unit": "ns/iter",
            "extra": "iterations: 288888\ncpu: 2428.7672038990877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7056.136641176477,
            "unit": "ns/iter",
            "extra": "iterations: 119393\ncpu: 7055.557696012326 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 33198.006666667374,
            "unit": "ns/iter",
            "extra": "iterations: 24900\ncpu: 33196.79919678718 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30415.473647457246,
            "unit": "ns/iter",
            "extra": "iterations: 27208\ncpu: 30413.154219347318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 32186.31093203091,
            "unit": "ns/iter",
            "extra": "iterations: 27424\ncpu: 32181.596411902025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29132.152917868072,
            "unit": "ns/iter",
            "extra": "iterations: 27760\ncpu: 29130.277377521666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 75376.26391663293,
            "unit": "ns/iter",
            "extra": "iterations: 11515\ncpu: 75372.83543204532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 805958.7550505254,
            "unit": "ns/iter",
            "extra": "iterations: 1188\ncpu: 805887.5420875436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 690664.7740000268,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 690628.499999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 658002.2074506837,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 657963.7691745787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 658608.294999965,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 658549.6999999982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 473723.9625066931,
            "unit": "ns/iter",
            "extra": "iterations: 1867\ncpu: 473681.3069094807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 950.9937351778999,
            "unit": "ns/iter",
            "extra": "iterations: 736653\ncpu: 950.9478682636225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19115.20810477212,
            "unit": "ns/iter",
            "extra": "iterations: 43752\ncpu: 19114.50447979522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 40518.17515107531,
            "unit": "ns/iter",
            "extra": "iterations: 20685\ncpu: 40516.40802513893 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 50859.44280000376,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50856.44999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 67513.16038900978,
            "unit": "ns/iter",
            "extra": "iterations: 12956\ncpu: 67509.36245754863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 84291.78658948377,
            "unit": "ns/iter",
            "extra": "iterations: 10365\ncpu: 84291.71249397041 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 100487.59886940592,
            "unit": "ns/iter",
            "extra": "iterations: 8668\ncpu: 100484.78311029053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 117655.81061827253,
            "unit": "ns/iter",
            "extra": "iterations: 7440\ncpu: 117651.80107526906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 134441.86572052736,
            "unit": "ns/iter",
            "extra": "iterations: 6412\ncpu: 134432.75109170304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 806.5848182342937,
            "unit": "ns/iter",
            "extra": "iterations: 863694\ncpu: 806.550931232583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 646.3584376252988,
            "unit": "ns/iter",
            "extra": "iterations: 1082378\ncpu: 646.3201395445965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 644.1286079262069,
            "unit": "ns/iter",
            "extra": "iterations: 1094396\ncpu: 644.082763460393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 662.278623654344,
            "unit": "ns/iter",
            "extra": "iterations: 1038896\ncpu: 662.2696593306708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1288.3539451548945,
            "unit": "ns/iter",
            "extra": "iterations: 543895\ncpu: 1288.288732200142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5591.6225376204,
            "unit": "ns/iter",
            "extra": "iterations: 141479\ncpu: 5591.311077969162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24545.454993945103,
            "unit": "ns/iter",
            "extra": "iterations: 33851\ncpu: 24544.08141561551 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20801.467097813573,
            "unit": "ns/iter",
            "extra": "iterations: 39739\ncpu: 20800.70208107911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20662.662591870205,
            "unit": "ns/iter",
            "extra": "iterations: 40002\ncpu: 20659.12954352276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 20504.857082827955,
            "unit": "ns/iter",
            "extra": "iterations: 40457\ncpu: 20503.949872704346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 50978.809800000134,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50977.00000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 592348.3750000288,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 592280.6999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 505260.8280000186,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 505242.6999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 620515.147368423,
            "unit": "ns/iter",
            "extra": "iterations: 1425\ncpu: 620475.5789473649 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 503064.122000012,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503055.70000000444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 368404.44190871174,
            "unit": "ns/iter",
            "extra": "iterations: 2410\ncpu: 368381.2448132775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 621005.3732193684,
            "unit": "ns/iter",
            "extra": "iterations: 1404\ncpu: 620931.8376068417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 620.1097416657445,
            "unit": "ns/iter",
            "extra": "iterations: 1126409\ncpu: 620.0741471348318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5571.702889999983,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5571.697000000028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10511.68719101698,
            "unit": "ns/iter",
            "extra": "iterations: 78281\ncpu: 10511.30798022507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15929.158075665533,
            "unit": "ns/iter",
            "extra": "iterations: 53525\ncpu: 15928.566090611823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21145.1285801966,
            "unit": "ns/iter",
            "extra": "iterations: 39104\ncpu: 21144.312602291244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26367.424598192218,
            "unit": "ns/iter",
            "extra": "iterations: 31856\ncpu: 26366.63422903073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31718.11032872797,
            "unit": "ns/iter",
            "extra": "iterations: 26557\ncpu: 31715.56651730224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36962.61612832349,
            "unit": "ns/iter",
            "extra": "iterations: 22755\ncpu: 36960.81740276847 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41465.50104446558,
            "unit": "ns/iter",
            "extra": "iterations: 20106\ncpu: 41463.39898537762 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 562.5852459503648,
            "unit": "ns/iter",
            "extra": "iterations: 1245109\ncpu: 562.560868164955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 447.6575333441418,
            "unit": "ns/iter",
            "extra": "iterations: 1563469\ncpu: 447.63842455462645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 439.2852191371099,
            "unit": "ns/iter",
            "extra": "iterations: 1592884\ncpu: 439.2520735973248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 436.5313406969715,
            "unit": "ns/iter",
            "extra": "iterations: 1605277\ncpu: 436.53070466966295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 936.6158296567667,
            "unit": "ns/iter",
            "extra": "iterations: 731652\ncpu: 936.552760055334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2365.7725173348185,
            "unit": "ns/iter",
            "extra": "iterations: 336030\ncpu: 2365.6759813112017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9353.625527284215,
            "unit": "ns/iter",
            "extra": "iterations: 89136\ncpu: 9352.98981331901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9491.308518970596,
            "unit": "ns/iter",
            "extra": "iterations: 86818\ncpu: 9490.794535695473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9445.786002784804,
            "unit": "ns/iter",
            "extra": "iterations: 86903\ncpu: 9445.420756475693 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9448.483979649418,
            "unit": "ns/iter",
            "extra": "iterations: 88450\ncpu: 9447.89485585076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30935.254363164255,
            "unit": "ns/iter",
            "extra": "iterations: 26930\ncpu: 30933.81730412212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 265128.83177277155,
            "unit": "ns/iter",
            "extra": "iterations: 3204\ncpu: 265114.3258426981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 209214.9897129211,
            "unit": "ns/iter",
            "extra": "iterations: 4180\ncpu: 209203.06220095753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 207721.50167464846,
            "unit": "ns/iter",
            "extra": "iterations: 4180\ncpu: 207709.6411483228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 210319.3556143347,
            "unit": "ns/iter",
            "extra": "iterations: 4159\ncpu: 210304.85693676423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 107469.82934984355,
            "unit": "ns/iter",
            "extra": "iterations: 8075\ncpu: 107464.68111455112 ns\nthreads: 1"
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
        "date": 1702310705326,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1672.902726319196,
            "unit": "ns/iter",
            "extra": "iterations: 426179\ncpu: 1672.7321149094632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 25579.855756067343,
            "unit": "ns/iter",
            "extra": "iterations: 32140\ncpu: 25577.585563161167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 52837.44687952779,
            "unit": "ns/iter",
            "extra": "iterations: 15879\ncpu: 52833.66710750046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 65485.13430930998,
            "unit": "ns/iter",
            "extra": "iterations: 13320\ncpu: 65478.73123123121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 96072.06192199342,
            "unit": "ns/iter",
            "extra": "iterations: 9948\ncpu: 96066.68677121037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 120199.92298136791,
            "unit": "ns/iter",
            "extra": "iterations: 7245\ncpu: 120186.40441683917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 141514.07222221865,
            "unit": "ns/iter",
            "extra": "iterations: 6120\ncpu: 141504.73856209152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 163967.57591525742,
            "unit": "ns/iter",
            "extra": "iterations: 5381\ncpu: 163948.55974725902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 184805.7147140746,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 184799.29321053778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1378.535804497322,
            "unit": "ns/iter",
            "extra": "iterations: 502786\ncpu: 1378.4011487988932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1173.4817804856175,
            "unit": "ns/iter",
            "extra": "iterations: 608935\ncpu: 1173.4006092604272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1148.491033434891,
            "unit": "ns/iter",
            "extra": "iterations: 610769\ncpu: 1148.3588721758972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1142.6760035368288,
            "unit": "ns/iter",
            "extra": "iterations: 608448\ncpu: 1142.5812887872107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2237.994433857557,
            "unit": "ns/iter",
            "extra": "iterations: 311706\ncpu: 2237.872225751187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6803.8253459110365,
            "unit": "ns/iter",
            "extra": "iterations: 121274\ncpu: 6803.669376783143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 33851.49134962315,
            "unit": "ns/iter",
            "extra": "iterations: 24392\ncpu: 33850.00000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 31987.597642157943,
            "unit": "ns/iter",
            "extra": "iterations: 26889\ncpu: 31987.143441556003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30096.963073888215,
            "unit": "ns/iter",
            "extra": "iterations: 27379\ncpu: 30096.033456298646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30107.796861977953,
            "unit": "ns/iter",
            "extra": "iterations: 27597\ncpu: 30105.2976772838 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 75756.38984956122,
            "unit": "ns/iter",
            "extra": "iterations: 11566\ncpu: 75748.67715718501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 800696.1867007737,
            "unit": "ns/iter",
            "extra": "iterations: 1173\ncpu: 800631.8840579725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 685098.8650000147,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 685024.5999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 674473.2780000219,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 674463.2000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 658306.8999999852,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 658250.5999999988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 473772.0422993475,
            "unit": "ns/iter",
            "extra": "iterations: 1844\ncpu: 473739.58785249514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 949.4144583152415,
            "unit": "ns/iter",
            "extra": "iterations: 731994\ncpu: 949.3532733874863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 19201.104485137243,
            "unit": "ns/iter",
            "extra": "iterations: 43633\ncpu: 19200.776934888756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 41185.84599921579,
            "unit": "ns/iter",
            "extra": "iterations: 20396\ncpu: 41185.13924298878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 51629.922799997985,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51624.8000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 68480.80663201047,
            "unit": "ns/iter",
            "extra": "iterations: 12696\ncpu: 68475.59073724013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 85759.27506854555,
            "unit": "ns/iter",
            "extra": "iterations: 10212\ncpu: 85751.84097140629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 103627.62737642678,
            "unit": "ns/iter",
            "extra": "iterations: 8416\ncpu: 103621.3759505703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 119277.92695557591,
            "unit": "ns/iter",
            "extra": "iterations: 7338\ncpu: 119263.70945761776 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 135712.78676012438,
            "unit": "ns/iter",
            "extra": "iterations: 6420\ncpu: 135702.88161993749 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 783.0953188283083,
            "unit": "ns/iter",
            "extra": "iterations: 891828\ncpu: 783.0437034943936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 633.3617592678833,
            "unit": "ns/iter",
            "extra": "iterations: 1116328\ncpu: 633.356683698696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 635.9165474980166,
            "unit": "ns/iter",
            "extra": "iterations: 1103478\ncpu: 635.887530154653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 642.4996797811104,
            "unit": "ns/iter",
            "extra": "iterations: 1091441\ncpu: 642.4567154798102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1301.297096045186,
            "unit": "ns/iter",
            "extra": "iterations: 529657\ncpu: 1301.2515646918653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5321.235654241527,
            "unit": "ns/iter",
            "extra": "iterations: 149295\ncpu: 5320.965872936129 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24212.121483525876,
            "unit": "ns/iter",
            "extra": "iterations: 34054\ncpu: 24211.03247782918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20459.336344182077,
            "unit": "ns/iter",
            "extra": "iterations: 40188\ncpu: 20458.76132178758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20248.45617402398,
            "unit": "ns/iter",
            "extra": "iterations: 40638\ncpu: 20248.07323195037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 20346.536333374715,
            "unit": "ns/iter",
            "extra": "iterations: 40555\ncpu: 20345.20774257176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 57858.85434645384,
            "unit": "ns/iter",
            "extra": "iterations: 14253\ncpu: 57857.55279590232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 596085.6579999927,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 596058.3999999969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 501507.7010000084,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501493.29999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 621934.2145862584,
            "unit": "ns/iter",
            "extra": "iterations: 1426\ncpu: 621920.9677419338 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 609400.1682043901,
            "unit": "ns/iter",
            "extra": "iterations: 1409\ncpu: 609384.3860894279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 365762.3804392885,
            "unit": "ns/iter",
            "extra": "iterations: 2413\ncpu: 365749.68918358843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 619614.2535310705,
            "unit": "ns/iter",
            "extra": "iterations: 1416\ncpu: 619586.8644067763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 637.4606128897509,
            "unit": "ns/iter",
            "extra": "iterations: 1097783\ncpu: 637.4533036128299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5515.691289999722,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5515.439999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10674.552450284482,
            "unit": "ns/iter",
            "extra": "iterations: 76787\ncpu: 10674.2065714248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16210.76360496898,
            "unit": "ns/iter",
            "extra": "iterations: 53859\ncpu: 16210.579476039215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21539.81522764993,
            "unit": "ns/iter",
            "extra": "iterations: 39205\ncpu: 21539.214385920142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26673.803999239903,
            "unit": "ns/iter",
            "extra": "iterations: 31556\ncpu: 26673.383825579727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32194.71434034516,
            "unit": "ns/iter",
            "extra": "iterations: 26150\ncpu: 32193.357552581394 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37109.35217274404,
            "unit": "ns/iter",
            "extra": "iterations: 22276\ncpu: 37107.57317292138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42512.606680265904,
            "unit": "ns/iter",
            "extra": "iterations: 19610\ncpu: 42511.67261601232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 558.1859657191306,
            "unit": "ns/iter",
            "extra": "iterations: 1243783\ncpu: 558.145190921563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 451.20946548518685,
            "unit": "ns/iter",
            "extra": "iterations: 1551912\ncpu: 451.19555748006013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 434.1194770593841,
            "unit": "ns/iter",
            "extra": "iterations: 1613950\ncpu: 434.0941169181219 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 432.01607186522216,
            "unit": "ns/iter",
            "extra": "iterations: 1619476\ncpu: 432.008748508778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 929.0369858137587,
            "unit": "ns/iter",
            "extra": "iterations: 736066\ncpu: 928.9729453608751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2384.9211372423015,
            "unit": "ns/iter",
            "extra": "iterations: 338081\ncpu: 2384.8506718804315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9264.031370076149,
            "unit": "ns/iter",
            "extra": "iterations: 84061\ncpu: 9263.476523001182 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9652.958086237379,
            "unit": "ns/iter",
            "extra": "iterations: 84650\ncpu: 9652.689899586518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9784.91079453229,
            "unit": "ns/iter",
            "extra": "iterations: 85006\ncpu: 9784.29404983175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9319.287837259777,
            "unit": "ns/iter",
            "extra": "iterations: 86469\ncpu: 9319.042662688473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30401.202581491238,
            "unit": "ns/iter",
            "extra": "iterations: 27426\ncpu: 30399.4749507767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 263909.31723922957,
            "unit": "ns/iter",
            "extra": "iterations: 3231\ncpu: 263901.23800680705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 208758.76257115594,
            "unit": "ns/iter",
            "extra": "iterations: 4216\ncpu: 208745.37476280885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 207564.27727704335,
            "unit": "ns/iter",
            "extra": "iterations: 4216\ncpu: 207558.56261859418 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 207966.3304017159,
            "unit": "ns/iter",
            "extra": "iterations: 4207\ncpu: 207958.16496315436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 106012.27140607488,
            "unit": "ns/iter",
            "extra": "iterations: 8257\ncpu: 106010.23374106816 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}