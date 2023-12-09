window.BENCHMARK_DATA = {
  "lastUpdate": 1702084708866,
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
      }
    ]
  }
}