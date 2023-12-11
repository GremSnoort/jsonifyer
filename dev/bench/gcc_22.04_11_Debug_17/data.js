window.BENCHMARK_DATA = {
  "lastUpdate": 1702309496319,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-11 22.04 Debug c++-17": [
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
        "date": 1702084708552,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14492.846292613885,
            "unit": "ns/iter",
            "extra": "iterations: 48781\ncpu: 14491.70783706771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 123730.32566938108,
            "unit": "ns/iter",
            "extra": "iterations: 6872\ncpu: 123723.44295692664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 235271.9159913555,
            "unit": "ns/iter",
            "extra": "iterations: 3702\ncpu: 235257.53646677473 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 343702.66362193046,
            "unit": "ns/iter",
            "extra": "iterations: 2518\ncpu: 343692.13661636226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 456950.0615866364,
            "unit": "ns/iter",
            "extra": "iterations: 1916\ncpu: 456925.57411273493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 563025.9883344149,
            "unit": "ns/iter",
            "extra": "iterations: 1543\ncpu: 562994.1023979263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 543841.9710000062,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 543798.2000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 630196.8549999798,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 630178.4999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 715639.2912087843,
            "unit": "ns/iter",
            "extra": "iterations: 1274\ncpu: 715595.0549450549 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11400.224093974939,
            "unit": "ns/iter",
            "extra": "iterations: 61974\ncpu: 11399.486881595494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9289.572748573597,
            "unit": "ns/iter",
            "extra": "iterations: 75541\ncpu: 9288.61280629063 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9240.593220562714,
            "unit": "ns/iter",
            "extra": "iterations: 75788\ncpu: 9239.93772101124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9280.377164050527,
            "unit": "ns/iter",
            "extra": "iterations: 75495\ncpu: 9279.953639313853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14966.697903084192,
            "unit": "ns/iter",
            "extra": "iterations: 46783\ncpu: 14966.31468695894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54692.47998663581,
            "unit": "ns/iter",
            "extra": "iterations: 14965\ncpu: 54689.57567657872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 250943.59929906504,
            "unit": "ns/iter",
            "extra": "iterations: 3424\ncpu: 250924.6203271025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 195481.48621323696,
            "unit": "ns/iter",
            "extra": "iterations: 4352\ncpu: 195470.45036764664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 199995.78670680933,
            "unit": "ns/iter",
            "extra": "iterations: 4318\ncpu: 199983.99722093495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 194364.82868889524,
            "unit": "ns/iter",
            "extra": "iterations: 4378\ncpu: 194354.5682960257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 486729.56243093556,
            "unit": "ns/iter",
            "extra": "iterations: 1810\ncpu: 486694.53038674104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4149253.9956710148,
            "unit": "ns/iter",
            "extra": "iterations: 231\ncpu: 4148987.4458874497 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3176099.8771331036,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3175850.1706484626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3165330.2013651747,
            "unit": "ns/iter",
            "extra": "iterations: 293\ncpu: 3165024.9146757647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3154693.0237287614,
            "unit": "ns/iter",
            "extra": "iterations: 295\ncpu: 3154625.423728816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1786701.531548769,
            "unit": "ns/iter",
            "extra": "iterations: 523\ncpu: 1786606.3097514333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3065708.8980263057,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3065593.4210526384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6841.899583308823,
            "unit": "ns/iter",
            "extra": "iterations: 102234\ncpu: 6841.577166109112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 71321.55018742326,
            "unit": "ns/iter",
            "extra": "iterations: 12005\ncpu: 71319.68346522273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 137548.52618414848,
            "unit": "ns/iter",
            "extra": "iterations: 6397\ncpu: 137541.83210880106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 202788.70538838668,
            "unit": "ns/iter",
            "extra": "iterations: 4287\ncpu: 202781.10566829957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 267408.3850484768,
            "unit": "ns/iter",
            "extra": "iterations: 3197\ncpu: 267393.55645918095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 332409.78126194625,
            "unit": "ns/iter",
            "extra": "iterations: 2615\ncpu: 332404.4741873802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 398029.0369188718,
            "unit": "ns/iter",
            "extra": "iterations: 2194\ncpu: 398011.1212397462 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 461755.0516782211,
            "unit": "ns/iter",
            "extra": "iterations: 1877\ncpu: 461729.94139584486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 527001.4112318786,
            "unit": "ns/iter",
            "extra": "iterations: 1656\ncpu: 526964.6135265684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5163.852430261327,
            "unit": "ns/iter",
            "extra": "iterations: 135685\ncpu: 5163.451376349632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4248.952193458788,
            "unit": "ns/iter",
            "extra": "iterations: 164831\ncpu: 4248.715957556522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4152.413713920516,
            "unit": "ns/iter",
            "extra": "iterations: 168967\ncpu: 4152.307847094396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4195.545220656372,
            "unit": "ns/iter",
            "extra": "iterations: 167523\ncpu: 4195.411376348296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7561.824604535279,
            "unit": "ns/iter",
            "extra": "iterations: 92739\ncpu: 7561.433701031887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31735.55745664756,
            "unit": "ns/iter",
            "extra": "iterations: 25950\ncpu: 31734.161849711218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 136969.53009333773,
            "unit": "ns/iter",
            "extra": "iterations: 6214\ncpu: 136962.4557450908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 109587.63241566389,
            "unit": "ns/iter",
            "extra": "iterations: 7737\ncpu: 109582.9261987858 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 110667.23582440763,
            "unit": "ns/iter",
            "extra": "iterations: 7654\ncpu: 110659.60282205424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 110561.2604397031,
            "unit": "ns/iter",
            "extra": "iterations: 7687\ncpu: 110555.48328346564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 285392.873309137,
            "unit": "ns/iter",
            "extra": "iterations: 3031\ncpu: 285369.2510722533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2176668.5690866522,
            "unit": "ns/iter",
            "extra": "iterations: 427\ncpu: 2176537.2365339505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1807467.9110251698,
            "unit": "ns/iter",
            "extra": "iterations: 517\ncpu: 1807397.6789168275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1780476.9827255239,
            "unit": "ns/iter",
            "extra": "iterations: 521\ncpu: 1780399.6161228453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1793992.389961385,
            "unit": "ns/iter",
            "extra": "iterations: 518\ncpu: 1793887.4517374607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1052311.5146726838,
            "unit": "ns/iter",
            "extra": "iterations: 886\ncpu: 1052257.3363431208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1737896.617977489,
            "unit": "ns/iter",
            "extra": "iterations: 534\ncpu: 1737839.1385767744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6923.2050790326975,
            "unit": "ns/iter",
            "extra": "iterations: 101161\ncpu: 6922.833898439123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52290.74910000122,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52289.729999999676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 96978.60742165358,
            "unit": "ns/iter",
            "extra": "iterations: 8839\ncpu: 96975.41577101516 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 141221.35461689887,
            "unit": "ns/iter",
            "extra": "iterations: 6108\ncpu: 141212.44269810166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 188887.29030186203,
            "unit": "ns/iter",
            "extra": "iterations: 4671\ncpu: 188883.62235067537 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 230161.27419782503,
            "unit": "ns/iter",
            "extra": "iterations: 3771\ncpu: 230150.03977724916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 273508.32996845176,
            "unit": "ns/iter",
            "extra": "iterations: 3170\ncpu: 273502.4290220822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 319859.7056023387,
            "unit": "ns/iter",
            "extra": "iterations: 2731\ncpu: 319842.3654339089 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 362615.07202330546,
            "unit": "ns/iter",
            "extra": "iterations: 2402\ncpu: 362596.752706079 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5811.203888477496,
            "unit": "ns/iter",
            "extra": "iterations: 118864\ncpu: 5811.051285502744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4877.933933666331,
            "unit": "ns/iter",
            "extra": "iterations: 145808\ncpu: 4877.482716997757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4862.788645111117,
            "unit": "ns/iter",
            "extra": "iterations: 143938\ncpu: 4862.458836443457 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4814.0163694263965,
            "unit": "ns/iter",
            "extra": "iterations: 145393\ncpu: 4813.717304134329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7175.658705566303,
            "unit": "ns/iter",
            "extra": "iterations: 97139\ncpu: 7173.800430311293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 22262.37668593483,
            "unit": "ns/iter",
            "extra": "iterations: 36330\ncpu: 22261.395540875343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 110497.35351839632,
            "unit": "ns/iter",
            "extra": "iterations: 7745\ncpu: 110492.7695287284 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 84316.56057312117,
            "unit": "ns/iter",
            "extra": "iterations: 10120\ncpu: 84312.84584980365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 85620.26907670648,
            "unit": "ns/iter",
            "extra": "iterations: 9986\ncpu: 85613.80933306633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 82724.35073901304,
            "unit": "ns/iter",
            "extra": "iterations: 10284\ncpu: 82719.73940101107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 197991.68080853176,
            "unit": "ns/iter",
            "extra": "iterations: 4502\ncpu: 197984.00710795145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1737401.5794392228,
            "unit": "ns/iter",
            "extra": "iterations: 535\ncpu: 1737311.214953275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1367132.0926470668,
            "unit": "ns/iter",
            "extra": "iterations: 680\ncpu: 1367067.0588235327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1405500.3593520203,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1405468.7776141528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1346281.240579714,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1346261.7391304318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 727535.453973254,
            "unit": "ns/iter",
            "extra": "iterations: 1271\ncpu: 727511.9590873332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1309201.5358649706,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1309175.1054852156 ns\nthreads: 1"
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
        "date": 1702084984044,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14055.027985597031,
            "unit": "ns/iter",
            "extra": "iterations: 49990\ncpu: 14053.990798159632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 122938.28533955071,
            "unit": "ns/iter",
            "extra": "iterations: 6862\ncpu: 122931.7545904984 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 232370.6665718297,
            "unit": "ns/iter",
            "extra": "iterations: 3515\ncpu: 232358.40682788054 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 340036.82528464374,
            "unit": "ns/iter",
            "extra": "iterations: 2547\ncpu: 340022.81115037296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 451876.87500000617,
            "unit": "ns/iter",
            "extra": "iterations: 1936\ncpu: 451846.1776859504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 554558.8562300347,
            "unit": "ns/iter",
            "extra": "iterations: 1565\ncpu: 554545.7507987221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 554727.5590000141,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 554692.6999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 623559.4679999963,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 623504.5000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 707701.3269378255,
            "unit": "ns/iter",
            "extra": "iterations: 1303\ncpu: 707654.8733691477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11252.49853556514,
            "unit": "ns/iter",
            "extra": "iterations: 62140\ncpu: 11252.206308336023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9247.625319709894,
            "unit": "ns/iter",
            "extra": "iterations: 75459\ncpu: 9247.513219099132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9383.659675541174,
            "unit": "ns/iter",
            "extra": "iterations: 75572\ncpu: 9383.058540200067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9234.98750400516,
            "unit": "ns/iter",
            "extra": "iterations: 74904\ncpu: 9234.693741322213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14894.743818695775,
            "unit": "ns/iter",
            "extra": "iterations: 47037\ncpu: 14894.191806450232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 55179.68213613128,
            "unit": "ns/iter",
            "extra": "iterations: 14868\ncpu: 55176.614205004065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 250728.11552028314,
            "unit": "ns/iter",
            "extra": "iterations: 3402\ncpu: 250712.08112874778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 198496.92332789203,
            "unit": "ns/iter",
            "extra": "iterations: 4291\ncpu: 198484.26940107252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 202023.41094598043,
            "unit": "ns/iter",
            "extra": "iterations: 4239\ncpu: 202012.12550129744 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 198709.35655526997,
            "unit": "ns/iter",
            "extra": "iterations: 3890\ncpu: 198694.70437017965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 482296.65458539006,
            "unit": "ns/iter",
            "extra": "iterations: 1821\ncpu: 482270.56562328245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3850759.723140446,
            "unit": "ns/iter",
            "extra": "iterations: 242\ncpu: 3850387.60330579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3121914.408026735,
            "unit": "ns/iter",
            "extra": "iterations: 299\ncpu: 3121723.7458194047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3199955.630000015,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3199768.0000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3095196.6666666903,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3095167.333333334 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1762537.9201521124,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1762435.741444863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3020530.6331168544,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3020328.5714285728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6798.187117339522,
            "unit": "ns/iter",
            "extra": "iterations: 102898\ncpu: 6798.115609632849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 70979.16055918463,
            "unit": "ns/iter",
            "extra": "iterations: 12089\ncpu: 70975.44875506664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 135874.81313913697,
            "unit": "ns/iter",
            "extra": "iterations: 6454\ncpu: 135864.58010536106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 200521.05346489177,
            "unit": "ns/iter",
            "extra": "iterations: 4358\ncpu: 200509.56860945377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 264034.81305007485,
            "unit": "ns/iter",
            "extra": "iterations: 3295\ncpu: 264028.98330804217 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 327260.9260232774,
            "unit": "ns/iter",
            "extra": "iterations: 2663\ncpu: 327251.7461509579 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 391639.95591543074,
            "unit": "ns/iter",
            "extra": "iterations: 2223\ncpu: 391630.4543409787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 455093.8215593961,
            "unit": "ns/iter",
            "extra": "iterations: 1911\ncpu: 455074.5682888536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 518200.39916717744,
            "unit": "ns/iter",
            "extra": "iterations: 1681\ncpu: 518195.895300416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5156.099625567407,
            "unit": "ns/iter",
            "extra": "iterations: 135939\ncpu: 5155.941267774512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4239.791873772551,
            "unit": "ns/iter",
            "extra": "iterations: 164972\ncpu: 4239.687947045542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4157.644448402686,
            "unit": "ns/iter",
            "extra": "iterations: 168420\ncpu: 4157.500296876836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4220.572880680244,
            "unit": "ns/iter",
            "extra": "iterations: 165572\ncpu: 4220.430990747247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7544.655199913685,
            "unit": "ns/iter",
            "extra": "iterations: 92790\ncpu: 7544.378704601785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31879.880223377455,
            "unit": "ns/iter",
            "extra": "iterations: 25965\ncpu: 31878.7598690544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 134710.79715190036,
            "unit": "ns/iter",
            "extra": "iterations: 6320\ncpu: 134703.40189873442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 109582.88051044394,
            "unit": "ns/iter",
            "extra": "iterations: 7758\ncpu: 109579.2214488273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 110777.69974026052,
            "unit": "ns/iter",
            "extra": "iterations: 7700\ncpu: 110772.36363636306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 111323.11564536959,
            "unit": "ns/iter",
            "extra": "iterations: 7670\ncpu: 111320.28683181197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 289941.16099174,
            "unit": "ns/iter",
            "extra": "iterations: 3025\ncpu: 289927.4380165301 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2149581.799539145,
            "unit": "ns/iter",
            "extra": "iterations: 434\ncpu: 2149347.2350230496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1783034.339694635,
            "unit": "ns/iter",
            "extra": "iterations: 524\ncpu: 1782934.3511450426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1769751.5958254365,
            "unit": "ns/iter",
            "extra": "iterations: 527\ncpu: 1769713.282732449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1778760.960076029,
            "unit": "ns/iter",
            "extra": "iterations: 526\ncpu: 1778720.912547528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1038084.2650334266,
            "unit": "ns/iter",
            "extra": "iterations: 898\ncpu: 1036442.6503340771 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1717262.6593001515,
            "unit": "ns/iter",
            "extra": "iterations: 543\ncpu: 1716189.8710865588 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6955.10425211923,
            "unit": "ns/iter",
            "extra": "iterations: 102396\ncpu: 6954.908394859179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51290.53269999986,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51289.030000000224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94434.32397313286,
            "unit": "ns/iter",
            "extra": "iterations: 9081\ncpu: 94430.9547406669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 137584.72366533848,
            "unit": "ns/iter",
            "extra": "iterations: 6275\ncpu: 137578.4541832672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 180416.85018804876,
            "unit": "ns/iter",
            "extra": "iterations: 4786\ncpu: 180407.25031341513 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 224295.75090626147,
            "unit": "ns/iter",
            "extra": "iterations: 3862\ncpu: 224287.36406007299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 266921.089066339,
            "unit": "ns/iter",
            "extra": "iterations: 3256\ncpu: 266912.46928746963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 310064.6983618236,
            "unit": "ns/iter",
            "extra": "iterations: 2808\ncpu: 310049.64387464477 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 353935.2058584306,
            "unit": "ns/iter",
            "extra": "iterations: 2458\ncpu: 353921.5215622442 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5864.325001044066,
            "unit": "ns/iter",
            "extra": "iterations: 119735\ncpu: 5864.087359585707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4800.68942902556,
            "unit": "ns/iter",
            "extra": "iterations: 145313\ncpu: 4800.526449801438 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4818.436903822621,
            "unit": "ns/iter",
            "extra": "iterations: 144462\ncpu: 4818.219324112881 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4823.938073761196,
            "unit": "ns/iter",
            "extra": "iterations: 143897\ncpu: 4823.803136965999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7217.691224626971,
            "unit": "ns/iter",
            "extra": "iterations: 96805\ncpu: 7217.3957956716695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 22516.99268981557,
            "unit": "ns/iter",
            "extra": "iterations: 36114\ncpu: 22515.329235199526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 115148.69644534148,
            "unit": "ns/iter",
            "extra": "iterations: 7455\ncpu: 115146.42521797428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 89723.12773990494,
            "unit": "ns/iter",
            "extra": "iterations: 9535\ncpu: 89720.25170424773 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 88532.09499331827,
            "unit": "ns/iter",
            "extra": "iterations: 9727\ncpu: 88530.28683047197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 85625.66874309245,
            "unit": "ns/iter",
            "extra": "iterations: 9953\ncpu: 85620.70732442505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 188724.9198143105,
            "unit": "ns/iter",
            "extra": "iterations: 4739\ncpu: 188721.0381937099 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1701374.7751371416,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1701309.6892139036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1335840.4712643595,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1335799.4252873617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1333210.8495701703,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1333137.392550138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1325785.0970042557,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1325749.7860199604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 727171.6880877705,
            "unit": "ns/iter",
            "extra": "iterations: 1276\ncpu: 727112.9310344786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1291337.5513889096,
            "unit": "ns/iter",
            "extra": "iterations: 720\ncpu: 1291303.472222221 ns\nthreads: 1"
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
        "date": 1702085585056,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 13892.233881385748,
            "unit": "ns/iter",
            "extra": "iterations: 51090\ncpu: 13884.004697592487 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 120266.4712056732,
            "unit": "ns/iter",
            "extra": "iterations: 7050\ncpu: 120259.60283687945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 230149.5806535941,
            "unit": "ns/iter",
            "extra": "iterations: 3825\ncpu: 230137.85620915028 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 332173.07828769955,
            "unit": "ns/iter",
            "extra": "iterations: 2593\ncpu: 332148.39953721565 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 438236.09499747975,
            "unit": "ns/iter",
            "extra": "iterations: 1979\ncpu: 438235.1692774125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 547029.0150093767,
            "unit": "ns/iter",
            "extra": "iterations: 1599\ncpu: 546986.6166353971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 529171.0300000148,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 529176.5999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 616282.8470000079,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 616247.9000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 693293.9490347322,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 693267.8764478764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11251.50508687037,
            "unit": "ns/iter",
            "extra": "iterations: 62219\ncpu: 11250.79638052685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9208.67844078201,
            "unit": "ns/iter",
            "extra": "iterations: 76269\ncpu: 9208.401840852775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9154.51389906835,
            "unit": "ns/iter",
            "extra": "iterations: 76408\ncpu: 9154.434090671135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9184.334537572173,
            "unit": "ns/iter",
            "extra": "iterations: 76120\ncpu: 9184.152653704692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 15116.685496249333,
            "unit": "ns/iter",
            "extra": "iterations: 46257\ncpu: 15115.813822772767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54821.70218340699,
            "unit": "ns/iter",
            "extra": "iterations: 14885\ncpu: 54819.408800806086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 252315.75715550606,
            "unit": "ns/iter",
            "extra": "iterations: 3389\ncpu: 252308.11448804967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 200066.66022620327,
            "unit": "ns/iter",
            "extra": "iterations: 4244\ncpu: 200061.49858623915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 199584.02862505688,
            "unit": "ns/iter",
            "extra": "iterations: 4262\ncpu: 199583.3646175504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 205304.08588098033,
            "unit": "ns/iter",
            "extra": "iterations: 4285\ncpu: 205296.75612602077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 492930.31866891694,
            "unit": "ns/iter",
            "extra": "iterations: 1773\ncpu: 492913.93119007425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3838246.2139917905,
            "unit": "ns/iter",
            "extra": "iterations: 243\ncpu: 3838189.3004115135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3106909.019999951,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3106828.6666666605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3091876.2399998438,
            "unit": "ns/iter",
            "extra": "iterations: 300\ncpu: 3091849.6666666684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3103827.910714228,
            "unit": "ns/iter",
            "extra": "iterations: 280\ncpu: 3103722.1428571395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1756355.6177024052,
            "unit": "ns/iter",
            "extra": "iterations: 531\ncpu: 1756285.4990583833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3010897.122977266,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3010788.349514566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6704.272439494603,
            "unit": "ns/iter",
            "extra": "iterations: 104247\ncpu: 6703.9377631970465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 68894.64926036753,
            "unit": "ns/iter",
            "extra": "iterations: 12371\ncpu: 68893.97785142656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 133053.64532688673,
            "unit": "ns/iter",
            "extra": "iterations: 6623\ncpu: 133052.75554884525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 195763.43680758667,
            "unit": "ns/iter",
            "extra": "iterations: 4423\ncpu: 195761.1575853491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 259147.05697329578,
            "unit": "ns/iter",
            "extra": "iterations: 3370\ncpu: 259143.59050445087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 321954.17413856456,
            "unit": "ns/iter",
            "extra": "iterations: 2699\ncpu: 321949.83327158226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 383999.25894829485,
            "unit": "ns/iter",
            "extra": "iterations: 2263\ncpu: 383979.1427308888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 445660.34938524186,
            "unit": "ns/iter",
            "extra": "iterations: 1952\ncpu: 445659.1188524587 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 508598.52364273457,
            "unit": "ns/iter",
            "extra": "iterations: 1713\ncpu: 508594.1039112665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5109.327021132107,
            "unit": "ns/iter",
            "extra": "iterations: 137089\ncpu: 5109.279373253873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4163.819368328016,
            "unit": "ns/iter",
            "extra": "iterations: 167872\ncpu: 4163.753335874947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4111.3141190074175,
            "unit": "ns/iter",
            "extra": "iterations: 170359\ncpu: 4111.215726788708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4223.460868620854,
            "unit": "ns/iter",
            "extra": "iterations: 165711\ncpu: 4223.34123866251 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7599.78342688088,
            "unit": "ns/iter",
            "extra": "iterations: 91932\ncpu: 7599.673671844434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 31753.443429319705,
            "unit": "ns/iter",
            "extra": "iterations: 25941\ncpu: 31752.862264369138 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 137420.68958837521,
            "unit": "ns/iter",
            "extra": "iterations: 6195\ncpu: 137418.30508474555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 109916.11155740086,
            "unit": "ns/iter",
            "extra": "iterations: 7718\ncpu: 109914.18761337167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 109135.72195121956,
            "unit": "ns/iter",
            "extra": "iterations: 7790\ncpu: 109133.65853658525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 110726.89190600713,
            "unit": "ns/iter",
            "extra": "iterations: 7660\ncpu: 110724.92167101857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 296493.5568573441,
            "unit": "ns/iter",
            "extra": "iterations: 2902\ncpu: 296488.35286009626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2159006.7990762284,
            "unit": "ns/iter",
            "extra": "iterations: 433\ncpu: 2158890.76212471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1770854.019047571,
            "unit": "ns/iter",
            "extra": "iterations: 525\ncpu: 1770781.3333333347 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1757675.867924572,
            "unit": "ns/iter",
            "extra": "iterations: 530\ncpu: 1757633.3962264168 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1779001.8140000259,
            "unit": "ns/iter",
            "extra": "iterations: 500\ncpu: 1778909.9999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1032067.3495038494,
            "unit": "ns/iter",
            "extra": "iterations: 907\ncpu: 1032033.9581036393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1716914.8014841422,
            "unit": "ns/iter",
            "extra": "iterations: 539\ncpu: 1716784.0445269102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6799.595465926418,
            "unit": "ns/iter",
            "extra": "iterations: 103042\ncpu: 6799.29834436444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50115.93600000311,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50115.780000000144 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 92822.68109043717,
            "unit": "ns/iter",
            "extra": "iterations: 9244\ncpu: 92821.58156642132 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 135366.08389737247,
            "unit": "ns/iter",
            "extra": "iterations: 6353\ncpu: 135366.17346135702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 177694.61555782513,
            "unit": "ns/iter",
            "extra": "iterations: 4885\ncpu: 177691.15660184287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 219660.97235606637,
            "unit": "ns/iter",
            "extra": "iterations: 3943\ncpu: 219660.7912756774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 261849.80114837902,
            "unit": "ns/iter",
            "extra": "iterations: 3309\ncpu: 261841.7346630407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 304322.3041958056,
            "unit": "ns/iter",
            "extra": "iterations: 2860\ncpu: 304311.71328671294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 346818.11204148165,
            "unit": "ns/iter",
            "extra": "iterations: 2508\ncpu: 346809.37001594965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5797.420253796574,
            "unit": "ns/iter",
            "extra": "iterations: 120175\ncpu: 5797.235697940544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4818.031470723947,
            "unit": "ns/iter",
            "extra": "iterations: 145119\ncpu: 4817.886010791147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4768.274914182685,
            "unit": "ns/iter",
            "extra": "iterations: 147115\ncpu: 4768.011419637727 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4754.186732637163,
            "unit": "ns/iter",
            "extra": "iterations: 147339\ncpu: 4754.16352764715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7203.381679945213,
            "unit": "ns/iter",
            "extra": "iterations: 96146\ncpu: 7203.07553096329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 22565.925740510185,
            "unit": "ns/iter",
            "extra": "iterations: 35955\ncpu: 22565.362258378576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 116047.43084239103,
            "unit": "ns/iter",
            "extra": "iterations: 7360\ncpu: 116041.18206521611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 91188.72364148148,
            "unit": "ns/iter",
            "extra": "iterations: 9238\ncpu: 91186.47975752401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 89779.5055106526,
            "unit": "ns/iter",
            "extra": "iterations: 9527\ncpu: 89776.28844337059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 85879.14559386758,
            "unit": "ns/iter",
            "extra": "iterations: 9918\ncpu: 85877.07199032098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 195447.82064149622,
            "unit": "ns/iter",
            "extra": "iterations: 4583\ncpu: 195438.88282784325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1691950.0346083795,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1691909.1074681228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1323769.223011372,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1323727.1306818107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1328217.075606238,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1328177.0328102743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1323730.3850493398,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1323680.112834988 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 716759.0565891506,
            "unit": "ns/iter",
            "extra": "iterations: 1290\ncpu: 716737.2093023306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1279031.735537181,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1278952.7548209303 ns\nthreads: 1"
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
        "date": 1702244214611,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14922.836704247395,
            "unit": "ns/iter",
            "extra": "iterations: 46921\ncpu: 14922.514439163704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 148956.74180543813,
            "unit": "ns/iter",
            "extra": "iterations: 5705\ncpu: 148951.98948290976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 281848.12922078004,
            "unit": "ns/iter",
            "extra": "iterations: 3080\ncpu: 281843.1493506494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 420524.4080459772,
            "unit": "ns/iter",
            "extra": "iterations: 2088\ncpu: 420496.5517241377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 558350.7162849954,
            "unit": "ns/iter",
            "extra": "iterations: 1572\ncpu: 558312.340966921 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 557948.8879999985,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557886.7000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 665909.2227829872,
            "unit": "ns/iter",
            "extra": "iterations: 1387\ncpu: 665902.8118240809 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 773100.1489539731,
            "unit": "ns/iter",
            "extra": "iterations: 1195\ncpu: 773081.7573221766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 882587.7029328262,
            "unit": "ns/iter",
            "extra": "iterations: 1057\ncpu: 882580.2270577113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12065.606697228412,
            "unit": "ns/iter",
            "extra": "iterations: 58024\ncpu: 12065.1178822556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9926.45014555008,
            "unit": "ns/iter",
            "extra": "iterations: 70766\ncpu: 9926.033688494463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9905.41261620748,
            "unit": "ns/iter",
            "extra": "iterations: 70671\ncpu: 9904.694995118227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9890.913735768338,
            "unit": "ns/iter",
            "extra": "iterations: 70968\ncpu: 9890.716942847495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16213.284367199489,
            "unit": "ns/iter",
            "extra": "iterations: 43268\ncpu: 16213.08357215491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 64840.298267880564,
            "unit": "ns/iter",
            "extra": "iterations: 13394\ncpu: 64838.024488576986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 319221.8315596248,
            "unit": "ns/iter",
            "extra": "iterations: 2725\ncpu: 319212.80733944953 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 252371.5491005598,
            "unit": "ns/iter",
            "extra": "iterations: 3391\ncpu: 252359.33352993193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 254017.43657379944,
            "unit": "ns/iter",
            "extra": "iterations: 3374\ncpu: 254010.07705987012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 253155.08740740607,
            "unit": "ns/iter",
            "extra": "iterations: 3375\ncpu: 253145.9555555555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 533783.8450000163,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 533742.0999999978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4860839.040609069,
            "unit": "ns/iter",
            "extra": "iterations: 197\ncpu: 4860480.710659903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3830673.5286884396,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3830427.8688524617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3822419.651639354,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3822278.6885245848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3802727.7224490284,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3802510.612244891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2198456.327830254,
            "unit": "ns/iter",
            "extra": "iterations: 424\ncpu: 2198331.603773578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7796.049458938383,
            "unit": "ns/iter",
            "extra": "iterations: 89731\ncpu: 7795.381752125786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 96612.96059002326,
            "unit": "ns/iter",
            "extra": "iterations: 8881\ncpu: 96610.07769395367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 187346.31064647224,
            "unit": "ns/iter",
            "extra": "iterations: 4687\ncpu: 187335.99317260514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 276997.7847576533,
            "unit": "ns/iter",
            "extra": "iterations: 3136\ncpu: 276983.3545918371 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 366605.071578952,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 366580.2105263158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 454495.5101827637,
            "unit": "ns/iter",
            "extra": "iterations: 1915\ncpu: 454464.4908616196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 543746.3867747865,
            "unit": "ns/iter",
            "extra": "iterations: 1603\ncpu: 543739.8003742965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 507838.554999978,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 507806.8999999985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 580272.1259999828,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 580231.3000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 6027.74827118745,
            "unit": "ns/iter",
            "extra": "iterations: 116554\ncpu: 6027.673867906751 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4945.494562150745,
            "unit": "ns/iter",
            "extra": "iterations: 141784\ncpu: 4945.331631213669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4932.271132612321,
            "unit": "ns/iter",
            "extra": "iterations: 142008\ncpu: 4931.996788913316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4930.340958452004,
            "unit": "ns/iter",
            "extra": "iterations: 141812\ncpu: 4930.044001918032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8670.242653993131,
            "unit": "ns/iter",
            "extra": "iterations: 80588\ncpu: 8669.811882662434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 48328.664706224714,
            "unit": "ns/iter",
            "extra": "iterations: 17173\ncpu: 48326.06417050023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 203350.79730369337,
            "unit": "ns/iter",
            "extra": "iterations: 4228\ncpu: 203334.7209082295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 165873.62758754022,
            "unit": "ns/iter",
            "extra": "iterations: 5169\ncpu: 165864.69336428723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 165711.77400038217,
            "unit": "ns/iter",
            "extra": "iterations: 5177\ncpu: 165701.15897237786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 167495.4628906267,
            "unit": "ns/iter",
            "extra": "iterations: 5120\ncpu: 167486.9531249998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 372265.963058429,
            "unit": "ns/iter",
            "extra": "iterations: 2328\ncpu: 372252.62027491257 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 3033867.9772726563,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3033606.168831179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2501267.791443901,
            "unit": "ns/iter",
            "extra": "iterations: 374\ncpu: 2501055.8823529375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2482094.0265956167,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2481960.6382978763 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2476237.1413333616,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2475998.1333333296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1476836.6424050508,
            "unit": "ns/iter",
            "extra": "iterations: 632\ncpu: 1476747.310126576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2418126.9326424845,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2417958.8082901402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6761.0602086116,
            "unit": "ns/iter",
            "extra": "iterations: 103158\ncpu: 6760.570193295694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51483.03560000045,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51477.89000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95333.50728668207,
            "unit": "ns/iter",
            "extra": "iterations: 8989\ncpu: 95332.0947825124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 138836.2561584283,
            "unit": "ns/iter",
            "extra": "iterations: 6211\ncpu: 138832.5873450329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 182570.76937657662,
            "unit": "ns/iter",
            "extra": "iterations: 4748\ncpu: 182565.41701769253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 225478.68683458975,
            "unit": "ns/iter",
            "extra": "iterations: 3851\ncpu: 225468.50168787417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 269225.2455759187,
            "unit": "ns/iter",
            "extra": "iterations: 3221\ncpu: 269217.91369139974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 312920.7054375171,
            "unit": "ns/iter",
            "extra": "iterations: 2777\ncpu: 312906.30176449305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 357410.4883149025,
            "unit": "ns/iter",
            "extra": "iterations: 2439\ncpu: 357396.47396474006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5758.588572134937,
            "unit": "ns/iter",
            "extra": "iterations: 121370\ncpu: 5758.515283842816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4659.53448389516,
            "unit": "ns/iter",
            "extra": "iterations: 151694\ncpu: 4659.401822089187 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4669.595908338216,
            "unit": "ns/iter",
            "extra": "iterations: 149768\ncpu: 4669.528203621583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4689.943370202745,
            "unit": "ns/iter",
            "extra": "iterations: 149356\ncpu: 4689.691743217525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7156.304071519479,
            "unit": "ns/iter",
            "extra": "iterations: 97875\ncpu: 7156.09910600252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27458.710795587027,
            "unit": "ns/iter",
            "extra": "iterations: 30003\ncpu: 27456.267706562703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 123094.9155676619,
            "unit": "ns/iter",
            "extra": "iterations: 6976\ncpu: 123087.78669724845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 95207.52345487144,
            "unit": "ns/iter",
            "extra": "iterations: 8996\ncpu: 95199.99999999895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 95894.41229554615,
            "unit": "ns/iter",
            "extra": "iterations: 8865\ncpu: 95886.77946982508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 93157.5996524358,
            "unit": "ns/iter",
            "extra": "iterations: 9207\ncpu: 93153.62224394504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 205061.71563653406,
            "unit": "ns/iter",
            "extra": "iterations: 4336\ncpu: 205056.04243542385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1700832.9452554057,
            "unit": "ns/iter",
            "extra": "iterations: 548\ncpu: 1700711.8613138818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1344067.050578011,
            "unit": "ns/iter",
            "extra": "iterations: 692\ncpu: 1343995.3757225294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1342440.9451659725,
            "unit": "ns/iter",
            "extra": "iterations: 693\ncpu: 1342366.666666664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1327609.6054130804,
            "unit": "ns/iter",
            "extra": "iterations: 702\ncpu: 1327555.5555555576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 726197.7776911014,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 726128.5491419651 ns\nthreads: 1"
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
        "date": 1702285115100,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14946.214099440142,
            "unit": "ns/iter",
            "extra": "iterations: 46782\ncpu: 14945.850968321152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 148568.33630328643,
            "unit": "ns/iter",
            "extra": "iterations: 5724\ncpu: 148557.89657582107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 282238.73028238764,
            "unit": "ns/iter",
            "extra": "iterations: 3081\ncpu: 282216.39078221354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 413991.44980881206,
            "unit": "ns/iter",
            "extra": "iterations: 2092\ncpu: 413953.7762906308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 577708.996224017,
            "unit": "ns/iter",
            "extra": "iterations: 1589\ncpu: 577654.1220893646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 555559.670999969,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 555437.2000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 662081.8773314252,
            "unit": "ns/iter",
            "extra": "iterations: 1394\ncpu: 662052.0086083213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 768624.865000002,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 768542.083333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 875637.4158043218,
            "unit": "ns/iter",
            "extra": "iterations: 1063\ncpu: 875591.439322672 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11934.01410271709,
            "unit": "ns/iter",
            "extra": "iterations: 58783\ncpu: 11932.73905721043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9943.55195618118,
            "unit": "ns/iter",
            "extra": "iterations: 70290\ncpu: 9942.623417271303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9902.999490748414,
            "unit": "ns/iter",
            "extra": "iterations: 70692\ncpu: 9902.338312680373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9902.914323318151,
            "unit": "ns/iter",
            "extra": "iterations: 70661\ncpu: 9902.865795842126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16220.940436260826,
            "unit": "ns/iter",
            "extra": "iterations: 43231\ncpu: 16220.691170687678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 62421.090876252696,
            "unit": "ns/iter",
            "extra": "iterations: 13843\ncpu: 62420.154590767794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 318956.211743133,
            "unit": "ns/iter",
            "extra": "iterations: 2725\ncpu: 318942.7155963303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 250868.9341353479,
            "unit": "ns/iter",
            "extra": "iterations: 3325\ncpu: 250867.5187969928 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 260284.7334905655,
            "unit": "ns/iter",
            "extra": "iterations: 3392\ncpu: 260272.2877358494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 247993.686137764,
            "unit": "ns/iter",
            "extra": "iterations: 3441\ncpu: 247988.46265620494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 577059.06336634,
            "unit": "ns/iter",
            "extra": "iterations: 1515\ncpu: 577007.5907590766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4878116.231155837,
            "unit": "ns/iter",
            "extra": "iterations: 199\ncpu: 4877997.9899497535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3821616.327868805,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3821478.278688528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3827034.266393292,
            "unit": "ns/iter",
            "extra": "iterations: 244\ncpu: 3826929.0983606563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3796605.9265305116,
            "unit": "ns/iter",
            "extra": "iterations: 245\ncpu: 3796497.5510204034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2192182.8699762914,
            "unit": "ns/iter",
            "extra": "iterations: 423\ncpu: 2192078.9598108684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7840.903363038191,
            "unit": "ns/iter",
            "extra": "iterations: 89324\ncpu: 7840.570283462479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 96680.27526053345,
            "unit": "ns/iter",
            "extra": "iterations: 8828\ncpu: 96678.21703670135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 187554.25530092302,
            "unit": "ns/iter",
            "extra": "iterations: 4669\ncpu: 187553.20197044348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 276444.28813019977,
            "unit": "ns/iter",
            "extra": "iterations: 3134\ncpu: 276435.7051691136 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 367776.9610334678,
            "unit": "ns/iter",
            "extra": "iterations: 2361\ncpu: 367760.440491318 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 454905.7820177466,
            "unit": "ns/iter",
            "extra": "iterations: 1913\ncpu: 454846.5760585448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 573462.103513178,
            "unit": "ns/iter",
            "extra": "iterations: 1594\ncpu: 573380.9912170627 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 508841.2489999996,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508824.4000000017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 578841.6149999875,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578795.7000000007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5978.783533096772,
            "unit": "ns/iter",
            "extra": "iterations: 116221\ncpu: 5978.1106684678025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4993.424203994054,
            "unit": "ns/iter",
            "extra": "iterations: 140357\ncpu: 4993.225845522508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4993.268841613541,
            "unit": "ns/iter",
            "extra": "iterations: 138762\ncpu: 4991.994926564909 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4983.325567489955,
            "unit": "ns/iter",
            "extra": "iterations: 140487\ncpu: 4983.075302341174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8636.606849957896,
            "unit": "ns/iter",
            "extra": "iterations: 80964\ncpu: 8635.845560990112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46849.760923703536,
            "unit": "ns/iter",
            "extra": "iterations: 17668\ncpu: 46846.72854878848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 194678.30451554144,
            "unit": "ns/iter",
            "extra": "iterations: 4407\ncpu: 194653.23349217183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 157781.0228445168,
            "unit": "ns/iter",
            "extra": "iterations: 5428\ncpu: 157770.78113485614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 159291.12513863493,
            "unit": "ns/iter",
            "extra": "iterations: 5410\ncpu: 159281.71903881707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 158102.468483509,
            "unit": "ns/iter",
            "extra": "iterations: 5394\ncpu: 158098.44271412722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 365853.8235542572,
            "unit": "ns/iter",
            "extra": "iterations: 2369\ncpu: 365845.8843393836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2994637.971246099,
            "unit": "ns/iter",
            "extra": "iterations: 313\ncpu: 2994400.9584664474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2504692.4202126893,
            "unit": "ns/iter",
            "extra": "iterations: 376\ncpu: 2501027.127659572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2481261.877333357,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2481155.7333333287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2485859.906666671,
            "unit": "ns/iter",
            "extra": "iterations: 375\ncpu: 2485696.5333333393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1471753.8598425228,
            "unit": "ns/iter",
            "extra": "iterations: 635\ncpu: 1471646.9291338592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2408407.375647659,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2408256.9948186534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6697.72877773523,
            "unit": "ns/iter",
            "extra": "iterations: 104560\ncpu: 6696.992157612855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50866.93690000175,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50864.44000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 93612.34347968837,
            "unit": "ns/iter",
            "extra": "iterations: 9133\ncpu: 93604.43446841164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 136526.9947743482,
            "unit": "ns/iter",
            "extra": "iterations: 6315\ncpu: 136514.3151227235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 179508.50829531232,
            "unit": "ns/iter",
            "extra": "iterations: 4822\ncpu: 179492.96972210766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 222406.54608472626,
            "unit": "ns/iter",
            "extra": "iterations: 3895\ncpu: 222380.00000000128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 265205.4188817711,
            "unit": "ns/iter",
            "extra": "iterations: 3273\ncpu: 265187.2593950505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 309555.2508884191,
            "unit": "ns/iter",
            "extra": "iterations: 2814\ncpu: 309529.74413646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 351110.72017791885,
            "unit": "ns/iter",
            "extra": "iterations: 2473\ncpu: 351068.4189243845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5721.214887754782,
            "unit": "ns/iter",
            "extra": "iterations: 122678\ncpu: 5720.782862452936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4636.903848839948,
            "unit": "ns/iter",
            "extra": "iterations: 150357\ncpu: 4636.505782903357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4617.45611613928,
            "unit": "ns/iter",
            "extra": "iterations: 150716\ncpu: 4617.276865097276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4665.960237589992,
            "unit": "ns/iter",
            "extra": "iterations: 150343\ncpu: 4665.107786860736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7182.625884319708,
            "unit": "ns/iter",
            "extra": "iterations: 98098\ncpu: 7181.988419743527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25481.319889382292,
            "unit": "ns/iter",
            "extra": "iterations: 32183\ncpu: 25480.34987415719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 120418.3482306507,
            "unit": "ns/iter",
            "extra": "iterations: 7093\ncpu: 120416.77710418824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 92628.84061585455,
            "unit": "ns/iter",
            "extra": "iterations: 9223\ncpu: 92624.97018323722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 92713.53933679979,
            "unit": "ns/iter",
            "extra": "iterations: 9228\ncpu: 92708.34416991734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 87626.67515201292,
            "unit": "ns/iter",
            "extra": "iterations: 9703\ncpu: 87622.48789034304 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 207669.31946971215,
            "unit": "ns/iter",
            "extra": "iterations: 3847\ncpu: 207666.07746295872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1678201.8716093842,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1678160.7594936746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1362413.7086956257,
            "unit": "ns/iter",
            "extra": "iterations: 690\ncpu: 1362362.0289855143 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1328337.812857155,
            "unit": "ns/iter",
            "extra": "iterations: 700\ncpu: 1328296.142857133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1312854.7485795717,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1312586.2215909066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 723927.0849571223,
            "unit": "ns/iter",
            "extra": "iterations: 1283\ncpu: 723903.3515198793 ns\nthreads: 1"
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
        "date": 1702309495152,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14928.519684365854,
            "unit": "ns/iter",
            "extra": "iterations: 46763\ncpu: 14927.412698073265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 146497.9859033847,
            "unit": "ns/iter",
            "extra": "iterations: 5817\ncpu: 146366.90734055356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 277388.8760890635,
            "unit": "ns/iter",
            "extra": "iterations: 3099\ncpu: 277364.8273636657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 429122.382629131,
            "unit": "ns/iter",
            "extra": "iterations: 2130\ncpu: 429101.5023474177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 544168.5012547205,
            "unit": "ns/iter",
            "extra": "iterations: 1594\ncpu: 544128.9209535754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 551128.2040000082,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 551097.2000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 649259.5349999988,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 649212.6000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 759847.9260162471,
            "unit": "ns/iter",
            "extra": "iterations: 1230\ncpu: 759824.6341463415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 863742.1611110894,
            "unit": "ns/iter",
            "extra": "iterations: 1080\ncpu: 863618.6111111104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11925.315883706393,
            "unit": "ns/iter",
            "extra": "iterations: 58645\ncpu: 11924.585216130938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9858.319745384599,
            "unit": "ns/iter",
            "extra": "iterations: 71166\ncpu: 9857.689065002955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9872.54043826969,
            "unit": "ns/iter",
            "extra": "iterations: 70824\ncpu: 9872.143623630407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9932.495071583315,
            "unit": "ns/iter",
            "extra": "iterations: 70408\ncpu: 9932.222190660139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16424.117458459412,
            "unit": "ns/iter",
            "extra": "iterations: 42730\ncpu: 16423.53615726654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 61601.78749368535,
            "unit": "ns/iter",
            "extra": "iterations: 13849\ncpu: 61600.187739186986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 316805.0649206971,
            "unit": "ns/iter",
            "extra": "iterations: 2711\ncpu: 316798.22943563224 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 250992.40305073516,
            "unit": "ns/iter",
            "extra": "iterations: 3409\ncpu: 250991.61044294486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 251685.11670615728,
            "unit": "ns/iter",
            "extra": "iterations: 3376\ncpu: 251663.6848341235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 261549.69952775474,
            "unit": "ns/iter",
            "extra": "iterations: 3388\ncpu: 261535.12396694135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 585031.4669338716,
            "unit": "ns/iter",
            "extra": "iterations: 1497\ncpu: 584998.1295925191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4535288.946601999,
            "unit": "ns/iter",
            "extra": "iterations: 206\ncpu: 4534972.330097092 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3708462.800000007,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3708232.800000005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3796393.467999906,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3796176.3999999934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3693867.73809536,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3693586.1111111077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2175970.936915933,
            "unit": "ns/iter",
            "extra": "iterations: 428\ncpu: 2175830.8411214957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7623.949781659385,
            "unit": "ns/iter",
            "extra": "iterations: 92058\ncpu: 7623.409155097904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 93764.33289530927,
            "unit": "ns/iter",
            "extra": "iterations: 9132\ncpu: 93759.98685939539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 183269.68936081522,
            "unit": "ns/iter",
            "extra": "iterations: 4803\ncpu: 183252.73787216292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 268280.65251084097,
            "unit": "ns/iter",
            "extra": "iterations: 3226\ncpu: 268275.0154990699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 355172.46000000916,
            "unit": "ns/iter",
            "extra": "iterations: 2450\ncpu: 355160.97959183715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 441748.5545362071,
            "unit": "ns/iter",
            "extra": "iterations: 1962\ncpu: 441646.0244648315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 526111.5154639243,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 526076.8950879333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 613137.4855532105,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 613108.1747709628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 561910.9190000131,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561887.3999999963 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5803.963315746045,
            "unit": "ns/iter",
            "extra": "iterations: 120733\ncpu: 5803.768646517534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4791.155366266794,
            "unit": "ns/iter",
            "extra": "iterations: 146396\ncpu: 4790.905489221047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4860.761134846758,
            "unit": "ns/iter",
            "extra": "iterations: 143244\ncpu: 4860.460473039007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4817.8796611101325,
            "unit": "ns/iter",
            "extra": "iterations: 145298\ncpu: 4817.857093697067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8692.075237988922,
            "unit": "ns/iter",
            "extra": "iterations: 80571\ncpu: 8691.493217162564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 45908.320548400996,
            "unit": "ns/iter",
            "extra": "iterations: 18016\ncpu: 45906.57193605707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 195993.2520436056,
            "unit": "ns/iter",
            "extra": "iterations: 4404\ncpu: 195986.23978201617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 157464.63638063322,
            "unit": "ns/iter",
            "extra": "iterations: 5349\ncpu: 157463.82501402195 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 157540.05801104842,
            "unit": "ns/iter",
            "extra": "iterations: 5430\ncpu: 157534.76979742188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 161463.02096713817,
            "unit": "ns/iter",
            "extra": "iterations: 5294\ncpu: 161459.84132980686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 365674.49640594184,
            "unit": "ns/iter",
            "extra": "iterations: 2365\ncpu: 365654.9682875282 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2868928.09538463,
            "unit": "ns/iter",
            "extra": "iterations: 325\ncpu: 2868784.615384619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2386011.839285678,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2385931.1224489803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2396501.94087407,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2396431.362467878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2377752.2321428624,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2377705.10204081 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1427030.1467889352,
            "unit": "ns/iter",
            "extra": "iterations: 654\ncpu: 1426962.6911315003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2316768.866004962,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2316686.6004962674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7065.212907451168,
            "unit": "ns/iter",
            "extra": "iterations: 99245\ncpu: 7064.937276437152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51314.897800000384,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51312.71999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94514.6777741146,
            "unit": "ns/iter",
            "extra": "iterations: 9093\ncpu: 94512.06422522831 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 137680.01294550826,
            "unit": "ns/iter",
            "extra": "iterations: 6257\ncpu: 137674.68435352476 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 180898.58649437645,
            "unit": "ns/iter",
            "extra": "iterations: 4798\ncpu: 180892.05919132955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 225308.1427831045,
            "unit": "ns/iter",
            "extra": "iterations: 3859\ncpu: 225300.12956724621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 268185.6980259102,
            "unit": "ns/iter",
            "extra": "iterations: 3242\ncpu: 268178.3158544107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 311413.34169952635,
            "unit": "ns/iter",
            "extra": "iterations: 2789\ncpu: 311405.9878092512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 353856.0684596458,
            "unit": "ns/iter",
            "extra": "iterations: 2454\ncpu: 353817.80766096036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5892.149882548718,
            "unit": "ns/iter",
            "extra": "iterations: 118773\ncpu: 5891.911461359091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4620.097294832079,
            "unit": "ns/iter",
            "extra": "iterations: 151303\ncpu: 4619.76431399244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4725.173767893884,
            "unit": "ns/iter",
            "extra": "iterations: 147674\ncpu: 4725.152024052966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4684.949335586587,
            "unit": "ns/iter",
            "extra": "iterations: 150283\ncpu: 4684.708849304259 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7470.7261652092175,
            "unit": "ns/iter",
            "extra": "iterations: 94232\ncpu: 7470.692546056421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25425.692620896774,
            "unit": "ns/iter",
            "extra": "iterations: 31928\ncpu: 25424.862189927597 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 120057.08693213799,
            "unit": "ns/iter",
            "extra": "iterations: 7132\ncpu: 120051.82277061128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 91954.73478353966,
            "unit": "ns/iter",
            "extra": "iterations: 9332\ncpu: 91949.50707243916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 92558.13285729472,
            "unit": "ns/iter",
            "extra": "iterations: 9243\ncpu: 92555.33917559142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 87661.07909314508,
            "unit": "ns/iter",
            "extra": "iterations: 9748\ncpu: 87655.49856380795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 216148.77826298992,
            "unit": "ns/iter",
            "extra": "iterations: 4122\ncpu: 216139.32557011253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1683450.3050541524,
            "unit": "ns/iter",
            "extra": "iterations: 554\ncpu: 1683341.8772563185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1337133.8796561894,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1337095.4154727815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1338496.0731707306,
            "unit": "ns/iter",
            "extra": "iterations: 697\ncpu: 1338418.6513629842 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1320947.3200568564,
            "unit": "ns/iter",
            "extra": "iterations: 703\ncpu: 1320883.9260312926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 753855.8963022559,
            "unit": "ns/iter",
            "extra": "iterations: 1244\ncpu: 753817.9260450123 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}