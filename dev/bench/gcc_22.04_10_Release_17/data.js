window.BENCHMARK_DATA = {
  "lastUpdate": 1702084706715,
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
      }
    ]
  }
}