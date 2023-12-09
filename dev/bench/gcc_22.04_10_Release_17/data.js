window.BENCHMARK_DATA = {
  "lastUpdate": 1702085583439,
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
      }
    ]
  }
}