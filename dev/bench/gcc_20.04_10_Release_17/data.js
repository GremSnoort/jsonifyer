window.BENCHMARK_DATA = {
  "lastUpdate": 1702310502064,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-10 20.04 Release c++-17": [
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
        "date": 1702084746087,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1556.8166796581145,
            "unit": "ns/iter",
            "extra": "iterations: 440033\ncpu: 1556.733472262308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 19041.24835430991,
            "unit": "ns/iter",
            "extra": "iterations: 39649\ncpu: 19040.4070720573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 39867.131296969914,
            "unit": "ns/iter",
            "extra": "iterations: 20625\ncpu: 39865.70181818183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 59037.37186000645,
            "unit": "ns/iter",
            "extra": "iterations: 14172\ncpu: 59036.120519333854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 65585.26580287564,
            "unit": "ns/iter",
            "extra": "iterations: 13352\ncpu: 65581.15638106654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 83022.19779598917,
            "unit": "ns/iter",
            "extra": "iterations: 10617\ncpu: 83017.64151831967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 98565.07751316519,
            "unit": "ns/iter",
            "extra": "iterations: 8734\ncpu: 98563.14403480648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 112247.00460768618,
            "unit": "ns/iter",
            "extra": "iterations: 7596\ncpu: 112242.91732490784 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 131323.9712349415,
            "unit": "ns/iter",
            "extra": "iterations: 6640\ncpu: 131318.97590361463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1358.9971025649866,
            "unit": "ns/iter",
            "extra": "iterations: 517009\ncpu: 1358.9295350757943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1108.6174143639744,
            "unit": "ns/iter",
            "extra": "iterations: 637290\ncpu: 1108.5755307630761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1116.7512429664432,
            "unit": "ns/iter",
            "extra": "iterations: 641208\ncpu: 1116.7254619405878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1109.6338276669467,
            "unit": "ns/iter",
            "extra": "iterations: 634794\ncpu: 1109.6379297850954 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2054.913137524451,
            "unit": "ns/iter",
            "extra": "iterations: 341183\ncpu: 2054.875536002674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6231.439026061883,
            "unit": "ns/iter",
            "extra": "iterations: 131343\ncpu: 6231.1664877458325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 30672.147278786746,
            "unit": "ns/iter",
            "extra": "iterations: 27010\ncpu: 30672.273232136267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 29190.635862114745,
            "unit": "ns/iter",
            "extra": "iterations: 30634\ncpu: 29189.821766664514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 26468.713965739276,
            "unit": "ns/iter",
            "extra": "iterations: 31699\ncpu: 26467.759235307058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 26706.454943841414,
            "unit": "ns/iter",
            "extra": "iterations: 30806\ncpu: 26705.593066285746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64340.30022722564,
            "unit": "ns/iter",
            "extra": "iterations: 13643\ncpu: 64338.7158249651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 633896.3709999917,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 633890.5999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 508432.24099997996,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 508399.4999999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 671451.3857651158,
            "unit": "ns/iter",
            "extra": "iterations: 1405\ncpu: 671392.7402135246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 510375.5800000158,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510360.20000000094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 364320.89645214425,
            "unit": "ns/iter",
            "extra": "iterations: 2424\ncpu: 364309.94224422425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 504130.0670000055,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504086.3000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 847.1407363822739,
            "unit": "ns/iter",
            "extra": "iterations: 827668\ncpu: 847.1259007234758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13405.905568344391,
            "unit": "ns/iter",
            "extra": "iterations: 62119\ncpu: 13405.576393696005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 28356.3858235463,
            "unit": "ns/iter",
            "extra": "iterations: 29288\ncpu: 28356.31316580172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 42684.08425393221,
            "unit": "ns/iter",
            "extra": "iterations: 19643\ncpu: 42682.10558468668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 57165.285200270235,
            "unit": "ns/iter",
            "extra": "iterations: 14730\ncpu: 57162.437202986985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 60805.908399998996,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60803.75000000018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 70720.54509803854,
            "unit": "ns/iter",
            "extra": "iterations: 12240\ncpu: 70718.33333333339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 82634.00882520544,
            "unit": "ns/iter",
            "extra": "iterations: 10538\ncpu: 82632.11235528556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 94063.30723734025,
            "unit": "ns/iter",
            "extra": "iterations: 9299\ncpu: 94059.22142165777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 667.0857827699385,
            "unit": "ns/iter",
            "extra": "iterations: 1044662\ncpu: 667.0508738711706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 523.2364647786368,
            "unit": "ns/iter",
            "extra": "iterations: 1285498\ncpu: 523.2218953277226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 585.6770628150446,
            "unit": "ns/iter",
            "extra": "iterations: 1321483\ncpu: 585.6721577197709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 549.0762551829736,
            "unit": "ns/iter",
            "extra": "iterations: 1279913\ncpu: 549.0352078617814 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1110.052684302916,
            "unit": "ns/iter",
            "extra": "iterations: 645866\ncpu: 1110.0330409094142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4415.882222172066,
            "unit": "ns/iter",
            "extra": "iterations: 176782\ncpu: 4415.826271905529 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20856.375171606884,
            "unit": "ns/iter",
            "extra": "iterations: 39334\ncpu: 20856.556668530957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16756.34879197981,
            "unit": "ns/iter",
            "extra": "iterations: 49875\ncpu: 16755.737343358378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15995.275849272884,
            "unit": "ns/iter",
            "extra": "iterations: 53899\ncpu: 15992.116736859682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 16841.525635545928,
            "unit": "ns/iter",
            "extra": "iterations: 49131\ncpu: 16840.990413384592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 44287.27918861707,
            "unit": "ns/iter",
            "extra": "iterations: 18980\ncpu: 44285.595363540415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 536523.6519102684,
            "unit": "ns/iter",
            "extra": "iterations: 1649\ncpu: 536501.8799272308 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 435251.14646215684,
            "unit": "ns/iter",
            "extra": "iterations: 2021\ncpu: 435230.1335972314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 430972.12640863995,
            "unit": "ns/iter",
            "extra": "iterations: 2041\ncpu: 430791.5727584504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 437651.2286860553,
            "unit": "ns/iter",
            "extra": "iterations: 1994\ncpu: 437638.46539618797 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 260956.09425153883,
            "unit": "ns/iter",
            "extra": "iterations: 3427\ncpu: 260939.36387510976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 428666.3913470859,
            "unit": "ns/iter",
            "extra": "iterations: 2034\ncpu: 428665.5850540808 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 629.9038292231588,
            "unit": "ns/iter",
            "extra": "iterations: 1112001\ncpu: 629.8890918263538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5550.390210000273,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5549.917000000021 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10613.532181762635,
            "unit": "ns/iter",
            "extra": "iterations: 78212\ncpu: 10613.348335293795 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15871.516977123489,
            "unit": "ns/iter",
            "extra": "iterations: 52718\ncpu: 15870.715884517576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20840.91601552739,
            "unit": "ns/iter",
            "extra": "iterations: 39674\ncpu: 20840.328678731552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25991.271018179526,
            "unit": "ns/iter",
            "extra": "iterations: 32234\ncpu: 25990.233914500117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 30999.269508293615,
            "unit": "ns/iter",
            "extra": "iterations: 26886\ncpu: 30998.147734880684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36410.52594421191,
            "unit": "ns/iter",
            "extra": "iterations: 23088\ncpu: 36409.40315315305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41164.90256360099,
            "unit": "ns/iter",
            "extra": "iterations: 20362\ncpu: 41164.104704842684 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 571.5922216479603,
            "unit": "ns/iter",
            "extra": "iterations: 1222804\ncpu: 571.5739398955184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 458.4837843590285,
            "unit": "ns/iter",
            "extra": "iterations: 1522234\ncpu: 458.48220444425704 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 458.8380783992178,
            "unit": "ns/iter",
            "extra": "iterations: 1524250\ncpu: 458.8394948335234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 436.85815227179904,
            "unit": "ns/iter",
            "extra": "iterations: 1599088\ncpu: 436.83405791300936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 927.4296141521323,
            "unit": "ns/iter",
            "extra": "iterations: 747082\ncpu: 927.4181415159356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2483.5205016631485,
            "unit": "ns/iter",
            "extra": "iterations: 323803\ncpu: 2483.3593265040417 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9412.085085859482,
            "unit": "ns/iter",
            "extra": "iterations: 83974\ncpu: 9412.093028794645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9715.672869410797,
            "unit": "ns/iter",
            "extra": "iterations: 84425\ncpu: 9715.087947882643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9611.660418117302,
            "unit": "ns/iter",
            "extra": "iterations: 84713\ncpu: 9611.450426735 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9472.88591289418,
            "unit": "ns/iter",
            "extra": "iterations: 86171\ncpu: 9472.41647421983 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 31705.61355713845,
            "unit": "ns/iter",
            "extra": "iterations: 26392\ncpu: 31705.213701121636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 261624.74536616096,
            "unit": "ns/iter",
            "extra": "iterations: 3291\ncpu: 261614.70677605554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 199164.30699931097,
            "unit": "ns/iter",
            "extra": "iterations: 4329\ncpu: 199152.87595287542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 198576.38564504936,
            "unit": "ns/iter",
            "extra": "iterations: 4333\ncpu: 198579.32148626898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 197462.59604323923,
            "unit": "ns/iter",
            "extra": "iterations: 4347\ncpu: 197460.82355647616 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 105209.7782110347,
            "unit": "ns/iter",
            "extra": "iterations: 8463\ncpu: 105209.13387687592 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 191141.65270773644,
            "unit": "ns/iter",
            "extra": "iterations: 4561\ncpu: 191139.5746546789 ns\nthreads: 1"
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
        "date": 1702084969682,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1548.3725986007896,
            "unit": "ns/iter",
            "extra": "iterations: 462699\ncpu: 1548.2853863959074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 18676.486747746385,
            "unit": "ns/iter",
            "extra": "iterations: 44483\ncpu: 18676.14369534429 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 39192.06993402454,
            "unit": "ns/iter",
            "extra": "iterations: 21220\ncpu: 39191.107445805836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 57585.510468869375,
            "unit": "ns/iter",
            "extra": "iterations: 14567\ncpu: 57583.20862222833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 63947.06350710952,
            "unit": "ns/iter",
            "extra": "iterations: 13715\ncpu: 63944.695588771385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 80314.87129435294,
            "unit": "ns/iter",
            "extra": "iterations: 10963\ncpu: 80313.14421235066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 95532.26598723042,
            "unit": "ns/iter",
            "extra": "iterations: 8929\ncpu: 95531.62728189044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 110416.45590336731,
            "unit": "ns/iter",
            "extra": "iterations: 7699\ncpu: 110414.97597090539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 128669.89521706797,
            "unit": "ns/iter",
            "extra": "iterations: 6795\ncpu: 128663.19352465044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1299.257252202508,
            "unit": "ns/iter",
            "extra": "iterations: 539836\ncpu: 1299.2158729688265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1072.5457103362603,
            "unit": "ns/iter",
            "extra": "iterations: 651811\ncpu: 1072.4892645260682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1046.9962929747735,
            "unit": "ns/iter",
            "extra": "iterations: 667921\ncpu: 1046.9580983379765 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1037.149477976034,
            "unit": "ns/iter",
            "extra": "iterations: 674969\ncpu: 1037.1003705355365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2073.444668884936,
            "unit": "ns/iter",
            "extra": "iterations: 339610\ncpu: 2073.3299961720822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6029.376163749598,
            "unit": "ns/iter",
            "extra": "iterations: 135231\ncpu: 6029.315763397444 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31440.313778522268,
            "unit": "ns/iter",
            "extra": "iterations: 26251\ncpu: 31439.621347758228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 27090.844107457837,
            "unit": "ns/iter",
            "extra": "iterations: 30598\ncpu: 27090.309824171552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 26649.436263664582,
            "unit": "ns/iter",
            "extra": "iterations: 30736\ncpu: 26648.561946902617 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29233.640461593815,
            "unit": "ns/iter",
            "extra": "iterations: 30503\ncpu: 29232.11815231294 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64678.59906589884,
            "unit": "ns/iter",
            "extra": "iterations: 13703\ncpu: 64675.1660220389 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 614815.9759999884,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 614805.0999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 611953.1549893903,
            "unit": "ns/iter",
            "extra": "iterations: 1413\ncpu: 611930.5732484083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 612398.5214335962,
            "unit": "ns/iter",
            "extra": "iterations: 1423\ncpu: 612366.1278988066 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 607487.6683203223,
            "unit": "ns/iter",
            "extra": "iterations: 1411\ncpu: 607463.4301913546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 346560.32237624255,
            "unit": "ns/iter",
            "extra": "iterations: 2525\ncpu: 346551.2871287117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 610019.2454672086,
            "unit": "ns/iter",
            "extra": "iterations: 1434\ncpu: 609999.9999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 818.0958880577697,
            "unit": "ns/iter",
            "extra": "iterations: 855727\ncpu: 818.072001935197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 12764.500719736214,
            "unit": "ns/iter",
            "extra": "iterations: 64607\ncpu: 12763.892457473654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 27486.347581179252,
            "unit": "ns/iter",
            "extra": "iterations: 30180\ncpu: 27485.526838966234 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 40898.612753027126,
            "unit": "ns/iter",
            "extra": "iterations: 20403\ncpu: 40897.56408371321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 54623.38314101306,
            "unit": "ns/iter",
            "extra": "iterations: 15339\ncpu: 54621.91798683128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 56733.35669999915,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56732.56999999979 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 67441.04472369635,
            "unit": "ns/iter",
            "extra": "iterations: 12812\ncpu: 67439.43178270345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 78664.5502044508,
            "unit": "ns/iter",
            "extra": "iterations: 11005\ncpu: 78660.47251249451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 89468.25156908939,
            "unit": "ns/iter",
            "extra": "iterations: 9719\ncpu: 89464.95524230857 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 636.8427027357334,
            "unit": "ns/iter",
            "extra": "iterations: 1096637\ncpu: 636.8130931201501 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 502.87682194050217,
            "unit": "ns/iter",
            "extra": "iterations: 1394461\ncpu: 502.86583848526465 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 504.6963677333904,
            "unit": "ns/iter",
            "extra": "iterations: 1395685\ncpu: 504.6928210878536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 494.3555740499799,
            "unit": "ns/iter",
            "extra": "iterations: 1413039\ncpu: 494.3451666939133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1064.3692666876575,
            "unit": "ns/iter",
            "extra": "iterations: 670751\ncpu: 1064.3614396400421 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4420.504756173017,
            "unit": "ns/iter",
            "extra": "iterations: 179451\ncpu: 4420.413371895396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20646.665837354143,
            "unit": "ns/iter",
            "extra": "iterations: 39792\ncpu: 20646.12987535176 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16614.88676903359,
            "unit": "ns/iter",
            "extra": "iterations: 49951\ncpu: 16614.516225901316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 15625.92758757124,
            "unit": "ns/iter",
            "extra": "iterations: 53071\ncpu: 15625.537487516785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 16725.602499594177,
            "unit": "ns/iter",
            "extra": "iterations: 49288\ncpu: 16725.18260022719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 44768.83551122775,
            "unit": "ns/iter",
            "extra": "iterations: 18749\ncpu: 44767.73694597043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 524396.4913121781,
            "unit": "ns/iter",
            "extra": "iterations: 1669\ncpu: 524375.3145596165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 415072.5560882158,
            "unit": "ns/iter",
            "extra": "iterations: 2086\ncpu: 415054.5541706625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 409221.537534747,
            "unit": "ns/iter",
            "extra": "iterations: 2158\ncpu: 409203.475440222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 411648.5661176525,
            "unit": "ns/iter",
            "extra": "iterations: 2125\ncpu: 411635.38823529426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 241722.70831040473,
            "unit": "ns/iter",
            "extra": "iterations: 3634\ncpu: 241712.87837094025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 413019.86852025375,
            "unit": "ns/iter",
            "extra": "iterations: 2122\ncpu: 413003.7700282775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 631.1211294744861,
            "unit": "ns/iter",
            "extra": "iterations: 1110605\ncpu: 631.1034076021657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5564.463349999755,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5564.24199999995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10678.41085040192,
            "unit": "ns/iter",
            "extra": "iterations: 77140\ncpu: 10678.338086595775 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15731.617395248752,
            "unit": "ns/iter",
            "extra": "iterations: 52911\ncpu: 15731.473606622354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20758.86977807621,
            "unit": "ns/iter",
            "extra": "iterations: 40239\ncpu: 20758.587440045623 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 25847.750810360936,
            "unit": "ns/iter",
            "extra": "iterations: 32393\ncpu: 25847.254036366034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31284.863367717135,
            "unit": "ns/iter",
            "extra": "iterations: 27241\ncpu: 31283.991042913076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36629.52313322303,
            "unit": "ns/iter",
            "extra": "iterations: 22954\ncpu: 36628.50483575848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41446.505742612186,
            "unit": "ns/iter",
            "extra": "iterations: 20374\ncpu: 41445.43535879073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 558.2939288752324,
            "unit": "ns/iter",
            "extra": "iterations: 1255484\ncpu: 558.2760911329793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 457.03907332553666,
            "unit": "ns/iter",
            "extra": "iterations: 1532836\ncpu: 457.02188622918504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 453.8961272199218,
            "unit": "ns/iter",
            "extra": "iterations: 1544601\ncpu: 453.8924291775032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 432.7730535274092,
            "unit": "ns/iter",
            "extra": "iterations: 1616835\ncpu: 432.7729793083445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 929.8604649931995,
            "unit": "ns/iter",
            "extra": "iterations: 755710\ncpu: 929.8314168133268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2474.86867285915,
            "unit": "ns/iter",
            "extra": "iterations: 321571\ncpu: 2474.7682471367025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9577.243286491115,
            "unit": "ns/iter",
            "extra": "iterations: 83116\ncpu: 9576.975552240221 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10214.103917919767,
            "unit": "ns/iter",
            "extra": "iterations: 82748\ncpu: 10213.813022671218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9869.81109082757,
            "unit": "ns/iter",
            "extra": "iterations: 82717\ncpu: 9869.416202231656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9433.377781653193,
            "unit": "ns/iter",
            "extra": "iterations: 86010\ncpu: 9432.990349959407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 32393.195191170485,
            "unit": "ns/iter",
            "extra": "iterations: 25370\ncpu: 32392.17973984975 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 259720.70036209884,
            "unit": "ns/iter",
            "extra": "iterations: 3314\ncpu: 259710.9535304741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 198876.96774936648,
            "unit": "ns/iter",
            "extra": "iterations: 4341\ncpu: 198868.11794517413 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 199485.7639593937,
            "unit": "ns/iter",
            "extra": "iterations: 4334\ncpu: 199475.40378403384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 200224.99931287576,
            "unit": "ns/iter",
            "extra": "iterations: 4366\ncpu: 200223.7288135595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 102995.74681603676,
            "unit": "ns/iter",
            "extra": "iterations: 8480\ncpu: 102991.73349056605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 192711.60789938393,
            "unit": "ns/iter",
            "extra": "iterations: 4532\ncpu: 192709.35569285206 ns\nthreads: 1"
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
        "date": 1702085595111,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1544.6299812319617,
            "unit": "ns/iter",
            "extra": "iterations: 457693\ncpu: 1544.593865320204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 18559.081588221194,
            "unit": "ns/iter",
            "extra": "iterations: 44553\ncpu: 18558.59313626467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 38613.896336857404,
            "unit": "ns/iter",
            "extra": "iterations: 21184\ncpu: 38612.882364048346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 57377.27387140903,
            "unit": "ns/iter",
            "extra": "iterations: 14620\ncpu: 57371.01915184677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 63209.92313833697,
            "unit": "ns/iter",
            "extra": "iterations: 13778\ncpu: 63205.63942517052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 79704.671459778,
            "unit": "ns/iter",
            "extra": "iterations: 10988\ncpu: 79702.73935202038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 95493.34541436276,
            "unit": "ns/iter",
            "extra": "iterations: 9050\ncpu: 95489.35911602211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 110013.00753030936,
            "unit": "ns/iter",
            "extra": "iterations: 7835\ncpu: 110012.12507977031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 128751.51559341075,
            "unit": "ns/iter",
            "extra": "iterations: 6926\ncpu: 128749.78342477628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1335.9159765368533,
            "unit": "ns/iter",
            "extra": "iterations: 524056\ncpu: 1335.8648694032697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1064.007765747484,
            "unit": "ns/iter",
            "extra": "iterations: 656215\ncpu: 1063.9852792148924 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1053.1821426743854,
            "unit": "ns/iter",
            "extra": "iterations: 664254\ncpu: 1053.173183751997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1100.3551284136643,
            "unit": "ns/iter",
            "extra": "iterations: 651722\ncpu: 1100.3513768140426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2119.9563087195866,
            "unit": "ns/iter",
            "extra": "iterations: 331874\ncpu: 2119.97746132568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6277.440002451435,
            "unit": "ns/iter",
            "extra": "iterations: 130547\ncpu: 6277.409668548493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 31451.30924645698,
            "unit": "ns/iter",
            "extra": "iterations: 26183\ncpu: 31448.75300767674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 27646.81881832395,
            "unit": "ns/iter",
            "extra": "iterations: 30279\ncpu: 27645.490273787153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 27100.544135428165,
            "unit": "ns/iter",
            "extra": "iterations: 31426\ncpu: 27099.144020874384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 26408.595715025913,
            "unit": "ns/iter",
            "extra": "iterations: 30852\ncpu: 26407.28964086604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 64877.05642703432,
            "unit": "ns/iter",
            "extra": "iterations: 13451\ncpu: 64876.21738160733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 621189.7640000075,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 621177.6000000029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 611558.4841437542,
            "unit": "ns/iter",
            "extra": "iterations: 1419\ncpu: 611553.9112050746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 623450.1783746501,
            "unit": "ns/iter",
            "extra": "iterations: 1452\ncpu: 623392.0798898073 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 611291.4074595163,
            "unit": "ns/iter",
            "extra": "iterations: 1421\ncpu: 611131.5270935965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 356701.74146340875,
            "unit": "ns/iter",
            "extra": "iterations: 2460\ncpu: 356674.9186991873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 620816.1968838467,
            "unit": "ns/iter",
            "extra": "iterations: 1412\ncpu: 620783.7818696875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 823.8363914178044,
            "unit": "ns/iter",
            "extra": "iterations: 862577\ncpu: 823.8179316165393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 13560.403287599236,
            "unit": "ns/iter",
            "extra": "iterations: 61078\ncpu: 13560.241003307263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 29049.093997143435,
            "unit": "ns/iter",
            "extra": "iterations: 28703\ncpu: 29048.29460335155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 43104.108876848935,
            "unit": "ns/iter",
            "extra": "iterations: 19196\ncpu: 43102.65680350084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 57601.67921171547,
            "unit": "ns/iter",
            "extra": "iterations: 14614\ncpu: 57601.55330505018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 59613.907800002155,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 59612.60999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 70071.42581268081,
            "unit": "ns/iter",
            "extra": "iterations: 12428\ncpu: 70068.9732861279 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 81798.59803829118,
            "unit": "ns/iter",
            "extra": "iterations: 10603\ncpu: 81793.8036404796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 93062.2740240245,
            "unit": "ns/iter",
            "extra": "iterations: 9324\ncpu: 93058.1188331188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 627.5004218740887,
            "unit": "ns/iter",
            "extra": "iterations: 833187\ncpu: 627.5059500448239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 499.2494009671253,
            "unit": "ns/iter",
            "extra": "iterations: 1406851\ncpu: 499.23346537763933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 501.4176409812419,
            "unit": "ns/iter",
            "extra": "iterations: 1395682\ncpu: 501.4220288002554 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 488.1449612143215,
            "unit": "ns/iter",
            "extra": "iterations: 1431714\ncpu: 488.1284949368386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1029.4460634108484,
            "unit": "ns/iter",
            "extra": "iterations: 679789\ncpu: 1029.4545807596185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 4417.888334789661,
            "unit": "ns/iter",
            "extra": "iterations: 179671\ncpu: 4417.726288605305 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 20122.132858006556,
            "unit": "ns/iter",
            "extra": "iterations: 41375\ncpu: 20121.568580060528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 16084.667938634544,
            "unit": "ns/iter",
            "extra": "iterations: 51626\ncpu: 16084.099097354056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 16411.752887519433,
            "unit": "ns/iter",
            "extra": "iterations: 50649\ncpu: 16411.313155244872 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 16421.940395211772,
            "unit": "ns/iter",
            "extra": "iterations: 49543\ncpu: 16421.320872777156 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 44051.10466582425,
            "unit": "ns/iter",
            "extra": "iterations: 19032\ncpu: 44049.83711643528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 519406.92200726003,
            "unit": "ns/iter",
            "extra": "iterations: 1654\ncpu: 519388.6940749679 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 420789.93523808726,
            "unit": "ns/iter",
            "extra": "iterations: 2100\ncpu: 420774.1904761892 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 418568.26248215325,
            "unit": "ns/iter",
            "extra": "iterations: 2103\ncpu: 418558.7256300523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 421561.3452211292,
            "unit": "ns/iter",
            "extra": "iterations: 2103\ncpu: 421530.9082263434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 245328.16759465606,
            "unit": "ns/iter",
            "extra": "iterations: 3592\ncpu: 245311.38641425333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 418230.8100189198,
            "unit": "ns/iter",
            "extra": "iterations: 2116\ncpu: 418212.85444234207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 652.7745142544502,
            "unit": "ns/iter",
            "extra": "iterations: 1063983\ncpu: 652.7233987761127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5598.011769999971,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5597.692999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10733.630772024668,
            "unit": "ns/iter",
            "extra": "iterations: 77096\ncpu: 10733.141797239801 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16060.029015859753,
            "unit": "ns/iter",
            "extra": "iterations: 52523\ncpu: 16059.705271976121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20915.27411180273,
            "unit": "ns/iter",
            "extra": "iterations: 39856\ncpu: 20914.8158370131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26119.958728371454,
            "unit": "ns/iter",
            "extra": "iterations: 31959\ncpu: 26118.958665790677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31575.243222136796,
            "unit": "ns/iter",
            "extra": "iterations: 26889\ncpu: 31573.665811298488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36381.59176256982,
            "unit": "ns/iter",
            "extra": "iterations: 23114\ncpu: 36380.630786536545 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41697.65016404578,
            "unit": "ns/iter",
            "extra": "iterations: 20421\ncpu: 41695.60256598604 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 586.2282764103979,
            "unit": "ns/iter",
            "extra": "iterations: 1197408\ncpu: 586.2082097330191 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 479.31690859026094,
            "unit": "ns/iter",
            "extra": "iterations: 1458105\ncpu: 479.29593547789636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 477.196342155009,
            "unit": "ns/iter",
            "extra": "iterations: 1465289\ncpu: 477.188254330708 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 461.2001165385974,
            "unit": "ns/iter",
            "extra": "iterations: 1518810\ncpu: 461.1794101961379 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 957.1104559850058,
            "unit": "ns/iter",
            "extra": "iterations: 732853\ncpu: 957.0952155480074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2494.6915498365793,
            "unit": "ns/iter",
            "extra": "iterations: 320337\ncpu: 2494.6877819296665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9672.428174311635,
            "unit": "ns/iter",
            "extra": "iterations: 84538\ncpu: 9671.971184556023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10159.743157077672,
            "unit": "ns/iter",
            "extra": "iterations: 79827\ncpu: 10159.263156576171 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9986.568855516654,
            "unit": "ns/iter",
            "extra": "iterations: 81504\ncpu: 9986.183500196345 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9430.548890771923,
            "unit": "ns/iter",
            "extra": "iterations: 86141\ncpu: 9430.148245318713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 32053.182045367048,
            "unit": "ns/iter",
            "extra": "iterations: 26010\ncpu: 32052.287581699387 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 262502.41035618755,
            "unit": "ns/iter",
            "extra": "iterations: 3341\ncpu: 262484.04669260327 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 199484.81110343596,
            "unit": "ns/iter",
            "extra": "iterations: 4341\ncpu: 199471.68855102238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 199370.33947065283,
            "unit": "ns/iter",
            "extra": "iterations: 4345\ncpu: 199363.29113923883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 199141.99150791488,
            "unit": "ns/iter",
            "extra": "iterations: 4357\ncpu: 199138.42093183423 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103072.78102710185,
            "unit": "ns/iter",
            "extra": "iterations: 8412\ncpu: 103067.9029957208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 192212.54303908368,
            "unit": "ns/iter",
            "extra": "iterations: 4554\ncpu: 192202.349582783 ns\nthreads: 1"
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
        "date": 1702244260322,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1597.0875895448778,
            "unit": "ns/iter",
            "extra": "iterations: 357223\ncpu: 1597.0981711703894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24857.5726058051,
            "unit": "ns/iter",
            "extra": "iterations: 33978\ncpu: 24857.572546942145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 48048.57402841392,
            "unit": "ns/iter",
            "extra": "iterations: 17034\ncpu: 48048.69672419867 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 59931.582340273715,
            "unit": "ns/iter",
            "extra": "iterations: 13930\ncpu: 59932.57717157215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 87404.52453903462,
            "unit": "ns/iter",
            "extra": "iterations: 10901\ncpu: 87403.82533712506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 109091.3452953502,
            "unit": "ns/iter",
            "extra": "iterations: 8109\ncpu: 109091.36761622888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 128610.39058047555,
            "unit": "ns/iter",
            "extra": "iterations: 6667\ncpu: 128610.9044547772 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 146107.73608175392,
            "unit": "ns/iter",
            "extra": "iterations: 5676\ncpu: 146106.5715292459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 165505.2347094799,
            "unit": "ns/iter",
            "extra": "iterations: 5232\ncpu: 165505.65749235486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1361.4276722292107,
            "unit": "ns/iter",
            "extra": "iterations: 501875\ncpu: 1361.4210709838121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1149.693249233666,
            "unit": "ns/iter",
            "extra": "iterations: 621485\ncpu: 1149.6933956571752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1137.0712630895819,
            "unit": "ns/iter",
            "extra": "iterations: 615087\ncpu: 1137.044027918003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1161.7762725073133,
            "unit": "ns/iter",
            "extra": "iterations: 621077\ncpu: 1161.786380754722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2192.4247130957046,
            "unit": "ns/iter",
            "extra": "iterations: 316569\ncpu: 2192.4048153798976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6948.428420090138,
            "unit": "ns/iter",
            "extra": "iterations: 117051\ncpu: 6948.493391769397 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 33180.70599456142,
            "unit": "ns/iter",
            "extra": "iterations: 24639\ncpu: 33180.461869394065 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30177.367146073866,
            "unit": "ns/iter",
            "extra": "iterations: 27534\ncpu: 30177.682138447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 33332.43898922027,
            "unit": "ns/iter",
            "extra": "iterations: 27741\ncpu: 33332.183410836005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29766.043756946852,
            "unit": "ns/iter",
            "extra": "iterations: 26990\ncpu: 29765.750277880605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 75893.81691112736,
            "unit": "ns/iter",
            "extra": "iterations: 11590\ncpu: 75892.69197584149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 754244.0828547991,
            "unit": "ns/iter",
            "extra": "iterations: 1219\ncpu: 754241.5094339622 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 629461.7660000199,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 629439.4000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 609887.5540000108,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 609898.2999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 616468.8249999699,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 616461.0999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 431789.4240601386,
            "unit": "ns/iter",
            "extra": "iterations: 1995\ncpu: 431782.60651629005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 865.6624246826673,
            "unit": "ns/iter",
            "extra": "iterations: 819035\ncpu: 865.664715183111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 17307.15897339646,
            "unit": "ns/iter",
            "extra": "iterations: 47964\ncpu: 17297.208322908788 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 38102.159374863164,
            "unit": "ns/iter",
            "extra": "iterations: 22651\ncpu: 38101.986667255325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 56099.2451193056,
            "unit": "ns/iter",
            "extra": "iterations: 15213\ncpu: 56099.42154736091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 61045.89309999823,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61045.9800000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 78945.6750021794,
            "unit": "ns/iter",
            "extra": "iterations: 11477\ncpu: 78943.98361941292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 92272.36537018888,
            "unit": "ns/iter",
            "extra": "iterations: 9333\ncpu: 92271.46683810139 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 108941.21499449258,
            "unit": "ns/iter",
            "extra": "iterations: 8163\ncpu: 108940.95308097525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 123870.15355222378,
            "unit": "ns/iter",
            "extra": "iterations: 7066\ncpu: 123872.14831587936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 733.2887602659702,
            "unit": "ns/iter",
            "extra": "iterations: 982372\ncpu: 733.2794501472001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 601.318435636453,
            "unit": "ns/iter",
            "extra": "iterations: 1186246\ncpu: 601.3201309003355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 598.7250081027147,
            "unit": "ns/iter",
            "extra": "iterations: 1184784\ncpu: 598.7348748801436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 597.0417302299112,
            "unit": "ns/iter",
            "extra": "iterations: 1139941\ncpu: 597.0394081798959 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1206.0645977676975,
            "unit": "ns/iter",
            "extra": "iterations: 576893\ncpu: 1206.0844905381027 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5394.718093214562,
            "unit": "ns/iter",
            "extra": "iterations: 144977\ncpu: 5394.712264704061 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23454.433333333218,
            "unit": "ns/iter",
            "extra": "iterations: 34740\ncpu: 23454.504893494606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20212.83227484102,
            "unit": "ns/iter",
            "extra": "iterations: 39994\ncpu: 20212.711906785982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20309.79369508271,
            "unit": "ns/iter",
            "extra": "iterations: 40857\ncpu: 20309.978706219204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 20637.848051881745,
            "unit": "ns/iter",
            "extra": "iterations: 38704\ncpu: 20637.696362133025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 57176.214038187114,
            "unit": "ns/iter",
            "extra": "iterations: 14717\ncpu: 57176.42861996319 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 565695.3720000501,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 565689.3000000025 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 575400.0645792397,
            "unit": "ns/iter",
            "extra": "iterations: 1533\ncpu: 575401.5003261605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 560641.6482939626,
            "unit": "ns/iter",
            "extra": "iterations: 1524\ncpu: 560637.1391076108 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 565707.1739682622,
            "unit": "ns/iter",
            "extra": "iterations: 1575\ncpu: 565703.4285714269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 328646.43244291405,
            "unit": "ns/iter",
            "extra": "iterations: 2583\ncpu: 328650.0967866803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 568481.8117263719,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 568477.5244299636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 627.8164917969169,
            "unit": "ns/iter",
            "extra": "iterations: 1099771\ncpu: 627.7953319372897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5719.1723300002195,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5719.16899999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 11185.757654466739,
            "unit": "ns/iter",
            "extra": "iterations: 76230\ncpu: 11185.606716515802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16086.116049286467,
            "unit": "ns/iter",
            "extra": "iterations: 51211\ncpu: 16086.034250454006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21632.3389592127,
            "unit": "ns/iter",
            "extra": "iterations: 39816\ncpu: 21631.88667872214 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26254.47112840437,
            "unit": "ns/iter",
            "extra": "iterations: 32125\ncpu: 26253.55330739295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31093.11185116471,
            "unit": "ns/iter",
            "extra": "iterations: 26875\ncpu: 31092.65488372113 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36606.3625700715,
            "unit": "ns/iter",
            "extra": "iterations: 23190\ncpu: 36605.70935748158 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 40415.67807713089,
            "unit": "ns/iter",
            "extra": "iterations: 20303\ncpu: 40414.25897650589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 575.0293978346597,
            "unit": "ns/iter",
            "extra": "iterations: 1201381\ncpu: 575.0204972444222 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 461.9651973424538,
            "unit": "ns/iter",
            "extra": "iterations: 1538417\ncpu: 461.9382781131479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 473.2419418228526,
            "unit": "ns/iter",
            "extra": "iterations: 1511384\ncpu: 473.2465078365236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 454.71842977865236,
            "unit": "ns/iter",
            "extra": "iterations: 1522970\ncpu: 454.7196596124654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 892.8860218615954,
            "unit": "ns/iter",
            "extra": "iterations: 790792\ncpu: 892.9011674372059 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2389.327598879323,
            "unit": "ns/iter",
            "extra": "iterations: 331970\ncpu: 2389.3457240112098 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9879.813442667835,
            "unit": "ns/iter",
            "extra": "iterations: 81219\ncpu: 9879.91110454449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9785.859675218373,
            "unit": "ns/iter",
            "extra": "iterations: 81347\ncpu: 9785.963833945902 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9615.208938455811,
            "unit": "ns/iter",
            "extra": "iterations: 85451\ncpu: 9615.299996489162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9295.760470785295,
            "unit": "ns/iter",
            "extra": "iterations: 90657\ncpu: 9295.797346040566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30797.98011070056,
            "unit": "ns/iter",
            "extra": "iterations: 27100\ncpu: 30798.077490774944 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 262621.7064051414,
            "unit": "ns/iter",
            "extra": "iterations: 3263\ncpu: 262614.0974563275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 202154.3399904919,
            "unit": "ns/iter",
            "extra": "iterations: 4206\ncpu: 202154.85021397876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 196843.57765541793,
            "unit": "ns/iter",
            "extra": "iterations: 4359\ncpu: 196840.05505849805 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 203960.30163551567,
            "unit": "ns/iter",
            "extra": "iterations: 4280\ncpu: 203957.0794392538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 103050.69637645576,
            "unit": "ns/iter",
            "extra": "iterations: 8224\ncpu: 103047.25194552592 ns\nthreads: 1"
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
        "date": 1702285128512,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1681.0617597312214,
            "unit": "ns/iter",
            "extra": "iterations: 427463\ncpu: 1680.898931603437 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 23717.98293033991,
            "unit": "ns/iter",
            "extra": "iterations: 34740\ncpu: 23716.31548647093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 49038.4577977852,
            "unit": "ns/iter",
            "extra": "iterations: 16883\ncpu: 49036.302789788555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 61313.44659999911,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61311.270000000026 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 90708.10065913256,
            "unit": "ns/iter",
            "extra": "iterations: 10620\ncpu: 90702.8154425612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 111083.11507936331,
            "unit": "ns/iter",
            "extra": "iterations: 7812\ncpu: 111078.62263184844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 131491.38706725516,
            "unit": "ns/iter",
            "extra": "iterations: 6557\ncpu: 131481.79045295093 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 152532.90436005226,
            "unit": "ns/iter",
            "extra": "iterations: 5688\ncpu: 152524.91209564003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 170158.29481132096,
            "unit": "ns/iter",
            "extra": "iterations: 5088\ncpu: 170145.34198113205 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1436.7092943130626,
            "unit": "ns/iter",
            "extra": "iterations: 487610\ncpu: 1436.6378868357906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1198.357851011342,
            "unit": "ns/iter",
            "extra": "iterations: 586434\ncpu: 1198.283182762255 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1158.8681137044123,
            "unit": "ns/iter",
            "extra": "iterations: 578377\ncpu: 1158.8185560629122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1163.2190494995752,
            "unit": "ns/iter",
            "extra": "iterations: 602672\ncpu: 1163.1862771125934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2210.9459532922115,
            "unit": "ns/iter",
            "extra": "iterations: 316393\ncpu: 2210.9247044024364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7013.71722936853,
            "unit": "ns/iter",
            "extra": "iterations: 115988\ncpu: 7013.446218574339 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 33810.24990684475,
            "unit": "ns/iter",
            "extra": "iterations: 24153\ncpu: 33798.69581418461 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 31621.613884818744,
            "unit": "ns/iter",
            "extra": "iterations: 26619\ncpu: 31620.376422855796 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30325.73878990193,
            "unit": "ns/iter",
            "extra": "iterations: 26940\ncpu: 30324.510022271752 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30042.934200649615,
            "unit": "ns/iter",
            "extra": "iterations: 27979\ncpu: 30041.999356660348 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 75294.71571531406,
            "unit": "ns/iter",
            "extra": "iterations: 12491\ncpu: 75289.68057001037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 770231.0538047763,
            "unit": "ns/iter",
            "extra": "iterations: 1301\ncpu: 770194.081475787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 652237.5119999993,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 652193.7999999991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 638605.4520000358,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 638584.8000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 615556.115000004,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 615508.3999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 427756.56262424303,
            "unit": "ns/iter",
            "extra": "iterations: 2012\ncpu: 427734.5427435382 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 864.9665849072163,
            "unit": "ns/iter",
            "extra": "iterations: 799908\ncpu: 864.9373427944233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 17855.341156539733,
            "unit": "ns/iter",
            "extra": "iterations: 48403\ncpu: 17854.73834266474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 38090.92951021086,
            "unit": "ns/iter",
            "extra": "iterations: 21989\ncpu: 38088.694347173725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 57743.642370108995,
            "unit": "ns/iter",
            "extra": "iterations: 14666\ncpu: 57742.07691258682 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 62335.16568483082,
            "unit": "ns/iter",
            "extra": "iterations: 13580\ncpu: 62332.827687776204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 76382.19082892331,
            "unit": "ns/iter",
            "extra": "iterations: 11340\ncpu: 76379.81481481474 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 92976.34177628014,
            "unit": "ns/iter",
            "extra": "iterations: 9199\ncpu: 92968.51831720848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 109567.71006369458,
            "unit": "ns/iter",
            "extra": "iterations: 7850\ncpu: 109561.46496815285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 123715.10182024864,
            "unit": "ns/iter",
            "extra": "iterations: 7032\ncpu: 123708.97326507448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 753.9200737269172,
            "unit": "ns/iter",
            "extra": "iterations: 919610\ncpu: 753.8969780667863 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 620.9784522323978,
            "unit": "ns/iter",
            "extra": "iterations: 1200542\ncpu: 620.95969986889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 604.6634829600615,
            "unit": "ns/iter",
            "extra": "iterations: 1111388\ncpu: 604.6350149542761 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 606.5955709203432,
            "unit": "ns/iter",
            "extra": "iterations: 1130438\ncpu: 606.5810774230897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1226.5438113827975,
            "unit": "ns/iter",
            "extra": "iterations: 554308\ncpu: 1226.47138414022 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5436.1968404121835,
            "unit": "ns/iter",
            "extra": "iterations: 146728\ncpu: 5436.106264652967 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23667.729375681167,
            "unit": "ns/iter",
            "extra": "iterations: 34886\ncpu: 23666.9552255919 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20201.15355889201,
            "unit": "ns/iter",
            "extra": "iterations: 40167\ncpu: 20200.754350586292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20367.550629597674,
            "unit": "ns/iter",
            "extra": "iterations: 40105\ncpu: 20366.98915347211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 20848.250498288173,
            "unit": "ns/iter",
            "extra": "iterations: 39134\ncpu: 20847.904635355484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 56340.36907526462,
            "unit": "ns/iter",
            "extra": "iterations: 14642\ncpu: 56337.24900969837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 545003.0889999766,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544991.8999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 572468.4345854984,
            "unit": "ns/iter",
            "extra": "iterations: 1544\ncpu: 572441.7746114013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 591665.801608585,
            "unit": "ns/iter",
            "extra": "iterations: 1492\ncpu: 591653.9544235897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 603262.9898785356,
            "unit": "ns/iter",
            "extra": "iterations: 1482\ncpu: 603245.5465587047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 343667.6996063118,
            "unit": "ns/iter",
            "extra": "iterations: 2540\ncpu: 343659.64566929074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 591202.2570863576,
            "unit": "ns/iter",
            "extra": "iterations: 1517\ncpu: 591170.402109426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 655.8736666553422,
            "unit": "ns/iter",
            "extra": "iterations: 1063116\ncpu: 655.8456461947715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5759.480279999707,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5759.358000000035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10872.736820573375,
            "unit": "ns/iter",
            "extra": "iterations: 70887\ncpu: 10872.626856828534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16676.810395827448,
            "unit": "ns/iter",
            "extra": "iterations: 51386\ncpu: 16676.509165920645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21821.080398706155,
            "unit": "ns/iter",
            "extra": "iterations: 38023\ncpu: 21820.232490860824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 27400.93101980694,
            "unit": "ns/iter",
            "extra": "iterations: 30545\ncpu: 27400.15714519542 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32461.451965997137,
            "unit": "ns/iter",
            "extra": "iterations: 25763\ncpu: 32460.20261615481 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37735.685224547735,
            "unit": "ns/iter",
            "extra": "iterations: 22111\ncpu: 37734.322283026406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42120.05761889819,
            "unit": "ns/iter",
            "extra": "iterations: 19386\ncpu: 42117.85824822052 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 599.2978223334371,
            "unit": "ns/iter",
            "extra": "iterations: 1176856\ncpu: 599.2702590631299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 518.1430010581948,
            "unit": "ns/iter",
            "extra": "iterations: 1476066\ncpu: 518.1305578476832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 468.71875877819406,
            "unit": "ns/iter",
            "extra": "iterations: 1470261\ncpu: 468.70208758853096 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 467.0522541051822,
            "unit": "ns/iter",
            "extra": "iterations: 1496514\ncpu: 467.04193879910486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 918.1208150712968,
            "unit": "ns/iter",
            "extra": "iterations: 760228\ncpu: 918.0833907722446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2448.554059825037,
            "unit": "ns/iter",
            "extra": "iterations: 323142\ncpu: 2448.486733386563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 10160.510316058002,
            "unit": "ns/iter",
            "extra": "iterations: 79827\ncpu: 10160.266576471584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 10059.618395084643,
            "unit": "ns/iter",
            "extra": "iterations: 80565\ncpu: 10058.586234717206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9782.661286655704,
            "unit": "ns/iter",
            "extra": "iterations: 83581\ncpu: 9782.29980497973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9380.84956235683,
            "unit": "ns/iter",
            "extra": "iterations: 87857\ncpu: 9380.576391181146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 31196.02756175576,
            "unit": "ns/iter",
            "extra": "iterations: 26232\ncpu: 31193.199146080937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 271575.36225939717,
            "unit": "ns/iter",
            "extra": "iterations: 3169\ncpu: 271561.7544966878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 208700.98402097743,
            "unit": "ns/iter",
            "extra": "iterations: 4193\ncpu: 208689.91175768888 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 209183.39735576278,
            "unit": "ns/iter",
            "extra": "iterations: 4160\ncpu: 209173.2692307677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 207429.30158348335,
            "unit": "ns/iter",
            "extra": "iterations: 4168\ncpu: 207013.2437619933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 107625.88123752581,
            "unit": "ns/iter",
            "extra": "iterations: 8016\ncpu: 107621.79391217516 ns\nthreads: 1"
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
        "date": 1702309472257,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1727.2794285572766,
            "unit": "ns/iter",
            "extra": "iterations: 404590\ncpu: 1727.1993870337876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24383.523988456393,
            "unit": "ns/iter",
            "extra": "iterations: 33266\ncpu: 24383.06078278122 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 49888.62553140403,
            "unit": "ns/iter",
            "extra": "iterations: 16701\ncpu: 49888.83300401173 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 63246.87624151476,
            "unit": "ns/iter",
            "extra": "iterations: 13995\ncpu: 63245.67345480527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 90206.70234813294,
            "unit": "ns/iter",
            "extra": "iterations: 10519\ncpu: 90202.45270462974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 113000.40385361433,
            "unit": "ns/iter",
            "extra": "iterations: 7733\ncpu: 112997.37488684853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 133518.40262582022,
            "unit": "ns/iter",
            "extra": "iterations: 6398\ncpu: 133511.40981556728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 154608.8863922351,
            "unit": "ns/iter",
            "extra": "iterations: 5563\ncpu: 154602.3728204206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 176824.51556885883,
            "unit": "ns/iter",
            "extra": "iterations: 5010\ncpu: 176820.71856287433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1411.0427793474355,
            "unit": "ns/iter",
            "extra": "iterations: 492317\ncpu: 1410.9943390132757 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1205.692035915269,
            "unit": "ns/iter",
            "extra": "iterations: 581925\ncpu: 1205.6466039438058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1200.8872084723193,
            "unit": "ns/iter",
            "extra": "iterations: 582792\ncpu: 1200.860512841632 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1208.9566457520596,
            "unit": "ns/iter",
            "extra": "iterations: 594959\ncpu: 1208.9310355839648 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2222.2919794346058,
            "unit": "ns/iter",
            "extra": "iterations: 313731\ncpu: 2222.2419843751463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 7203.946672833743,
            "unit": "ns/iter",
            "extra": "iterations: 116751\ncpu: 7203.618812686829 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 33309.85250737562,
            "unit": "ns/iter",
            "extra": "iterations: 24747\ncpu: 33309.55671394518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30692.91383688865,
            "unit": "ns/iter",
            "extra": "iterations: 27564\ncpu: 30692.181831374288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 30418.357291552435,
            "unit": "ns/iter",
            "extra": "iterations: 27381\ncpu: 30417.85909937555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 30552.362229897688,
            "unit": "ns/iter",
            "extra": "iterations: 27212\ncpu: 30551.275172717957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 78681.51553977968,
            "unit": "ns/iter",
            "extra": "iterations: 11551\ncpu: 78680.49519522123 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 773706.7410788309,
            "unit": "ns/iter",
            "extra": "iterations: 1205\ncpu: 773680.2489626559 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 643702.4859999951,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 643684.7000000015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 640868.1340000157,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 640855.7999999971 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 646714.4079999798,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 646695.7999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 458851.24359644897,
            "unit": "ns/iter",
            "extra": "iterations: 1913\ncpu: 458824.2028227918 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 1020.96428905534,
            "unit": "ns/iter",
            "extra": "iterations: 684132\ncpu: 1020.9398186314937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18773.59742387161,
            "unit": "ns/iter",
            "extra": "iterations: 44563\ncpu: 18773.038170679705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 40145.71642004157,
            "unit": "ns/iter",
            "extra": "iterations: 21017\ncpu: 40144.421182851955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 50221.13969999964,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50218.41000000009 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 66998.73538674314,
            "unit": "ns/iter",
            "extra": "iterations: 13019\ncpu: 66996.7893079344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 83784.35110557954,
            "unit": "ns/iter",
            "extra": "iterations: 10447\ncpu: 83782.27242270485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 99687.23572575103,
            "unit": "ns/iter",
            "extra": "iterations: 8722\ncpu: 99682.99701903238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 116215.00424832129,
            "unit": "ns/iter",
            "extra": "iterations: 7297\ncpu: 116212.56680827732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 132412.39160839026,
            "unit": "ns/iter",
            "extra": "iterations: 6578\ncpu: 132407.4338704779 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 867.4434167035375,
            "unit": "ns/iter",
            "extra": "iterations: 838949\ncpu: 867.4474848888354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 697.6676893400388,
            "unit": "ns/iter",
            "extra": "iterations: 1002601\ncpu: 697.6429307371467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 690.374195551511,
            "unit": "ns/iter",
            "extra": "iterations: 1017778\ncpu: 690.3579169524248 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 702.9158329507059,
            "unit": "ns/iter",
            "extra": "iterations: 993144\ncpu: 702.8869932255536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1253.9916023854714,
            "unit": "ns/iter",
            "extra": "iterations: 560040\ncpu: 1253.9509677880126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5300.511255202567,
            "unit": "ns/iter",
            "extra": "iterations: 149442\ncpu: 5300.405508491586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 24045.327728407956,
            "unit": "ns/iter",
            "extra": "iterations: 34434\ncpu: 24044.91490968227 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20265.624877306385,
            "unit": "ns/iter",
            "extra": "iterations: 40752\ncpu: 20265.049568119368 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20180.358609410283,
            "unit": "ns/iter",
            "extra": "iterations: 40961\ncpu: 20179.80029784427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 20275.823103632658,
            "unit": "ns/iter",
            "extra": "iterations: 40894\ncpu: 20275.468283855746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 58659.84664849293,
            "unit": "ns/iter",
            "extra": "iterations: 14307\ncpu: 58658.50283078237 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 576719.0280000136,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 576678.8000000033 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 599596.1457320997,
            "unit": "ns/iter",
            "extra": "iterations: 1441\ncpu: 599578.903539206 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 594461.0870767151,
            "unit": "ns/iter",
            "extra": "iterations: 1447\ncpu: 594439.1154111966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 627899.4572025092,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 627863.1871955456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 352241.3331983616,
            "unit": "ns/iter",
            "extra": "iterations: 2470\ncpu: 352234.4534412957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 601417.974552965,
            "unit": "ns/iter",
            "extra": "iterations: 1454\ncpu: 601382.187070152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 638.1217179425098,
            "unit": "ns/iter",
            "extra": "iterations: 1136825\ncpu: 638.1260968046977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5635.206879999829,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5635.006999999987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10722.961820260169,
            "unit": "ns/iter",
            "extra": "iterations: 76978\ncpu: 10722.687001480885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 16397.28885750814,
            "unit": "ns/iter",
            "extra": "iterations: 52403\ncpu: 16396.811251264164 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 21544.962705354006,
            "unit": "ns/iter",
            "extra": "iterations: 38531\ncpu: 21544.538164075653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26911.66487374398,
            "unit": "ns/iter",
            "extra": "iterations: 31048\ncpu: 26910.46444215407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 32017.517871447522,
            "unit": "ns/iter",
            "extra": "iterations: 26215\ncpu: 32016.887278275673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 37022.12998136083,
            "unit": "ns/iter",
            "extra": "iterations: 22534\ncpu: 37020.83962012951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 42164.77583777722,
            "unit": "ns/iter",
            "extra": "iterations: 19874\ncpu: 42162.93146825015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 559.7005609402338,
            "unit": "ns/iter",
            "extra": "iterations: 1259849\ncpu: 559.6850098702295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 438.6002944266807,
            "unit": "ns/iter",
            "extra": "iterations: 1594964\ncpu: 438.58996190509606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 436.7197233581256,
            "unit": "ns/iter",
            "extra": "iterations: 1604240\ncpu: 436.70897122625126 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 433.05584217821433,
            "unit": "ns/iter",
            "extra": "iterations: 1624668\ncpu: 433.0403503977416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 908.9242432817338,
            "unit": "ns/iter",
            "extra": "iterations: 759827\ncpu: 908.2322686611479 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2371.1689802455753,
            "unit": "ns/iter",
            "extra": "iterations: 337140\ncpu: 2371.110814498422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9294.421777888634,
            "unit": "ns/iter",
            "extra": "iterations: 88172\ncpu: 9294.255545978183 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9461.521443801115,
            "unit": "ns/iter",
            "extra": "iterations: 85829\ncpu: 9461.141339174483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9496.97247663499,
            "unit": "ns/iter",
            "extra": "iterations: 85491\ncpu: 9496.555192944274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9287.797991825091,
            "unit": "ns/iter",
            "extra": "iterations: 87343\ncpu: 9287.615492941573 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 30704.12500000123,
            "unit": "ns/iter",
            "extra": "iterations: 27016\ncpu: 30703.29804560261 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 255287.19958481885,
            "unit": "ns/iter",
            "extra": "iterations: 3372\ncpu: 255280.1897983383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 199530.44558288084,
            "unit": "ns/iter",
            "extra": "iterations: 4392\ncpu: 199524.2030965392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 199342.97221589205,
            "unit": "ns/iter",
            "extra": "iterations: 4391\ncpu: 199339.21657936677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 199110.7423620526,
            "unit": "ns/iter",
            "extra": "iterations: 4386\ncpu: 199105.35795713917 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104889.39144500211,
            "unit": "ns/iter",
            "extra": "iterations: 8346\ncpu: 104880.92499400991 ns\nthreads: 1"
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
        "date": 1702310501464,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 1605.7039777873392,
            "unit": "ns/iter",
            "extra": "iterations: 418499\ncpu: 1605.5851985309407 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 24525.57304514443,
            "unit": "ns/iter",
            "extra": "iterations: 33404\ncpu: 24523.832475152678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 51285.52455249139,
            "unit": "ns/iter",
            "extra": "iterations: 16536\ncpu: 51283.15191098212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 63352.40512070318,
            "unit": "ns/iter",
            "extra": "iterations: 13670\ncpu: 63351.14118507681 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 91403.05336006105,
            "unit": "ns/iter",
            "extra": "iterations: 10476\ncpu: 91401.02138220699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 113268.07640067421,
            "unit": "ns/iter",
            "extra": "iterations: 7657\ncpu: 113263.83701188452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 134654.0425066448,
            "unit": "ns/iter",
            "extra": "iterations: 6399\ncpu: 134650.75793092663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 155611.9090252695,
            "unit": "ns/iter",
            "extra": "iterations: 5540\ncpu: 155606.0649819496 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 174027.8195307856,
            "unit": "ns/iter",
            "extra": "iterations: 4987\ncpu: 174018.64848606355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 1358.2617623880976,
            "unit": "ns/iter",
            "extra": "iterations: 483469\ncpu: 1358.1946308863635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 1119.9367408906414,
            "unit": "ns/iter",
            "extra": "iterations: 624416\ncpu: 1119.9287013785674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 1135.4521680244677,
            "unit": "ns/iter",
            "extra": "iterations: 623171\ncpu: 1135.4549553814256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 1120.147813999257,
            "unit": "ns/iter",
            "extra": "iterations: 626578\ncpu: 1120.120400014044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 2364.311361265317,
            "unit": "ns/iter",
            "extra": "iterations: 297150\ncpu: 2364.2332155477043 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 6764.7605148508155,
            "unit": "ns/iter",
            "extra": "iterations: 120734\ncpu: 6764.613944704885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 34654.979729180566,
            "unit": "ns/iter",
            "extra": "iterations: 24666\ncpu: 34654.37038838887 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 30132.431480259333,
            "unit": "ns/iter",
            "extra": "iterations: 27306\ncpu: 30131.762250054937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 29678.498064468913,
            "unit": "ns/iter",
            "extra": "iterations: 27641\ncpu: 29677.6925581564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 29726.672809559223,
            "unit": "ns/iter",
            "extra": "iterations: 27620\ncpu: 29726.770456191174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 76722.31164834947,
            "unit": "ns/iter",
            "extra": "iterations: 11375\ncpu: 76718.4263736263 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 771992.3119341808,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 771969.7942386837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 639400.648999981,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 639367.7000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 631204.7829999869,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 631177.4999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 632996.6790000299,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 632991.9000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 455824.4248434425,
            "unit": "ns/iter",
            "extra": "iterations: 1916\ncpu: 455810.647181629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 941.1968842244596,
            "unit": "ns/iter",
            "extra": "iterations: 742929\ncpu: 941.2003031245215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 18588.461256428214,
            "unit": "ns/iter",
            "extra": "iterations: 44730\ncpu: 18588.405991504584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 40351.26852468299,
            "unit": "ns/iter",
            "extra": "iterations: 21026\ncpu: 40350.370969276155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 59191.849794822054,
            "unit": "ns/iter",
            "extra": "iterations: 14134\ncpu: 59190.55469081645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 65837.75902519912,
            "unit": "ns/iter",
            "extra": "iterations: 13213\ncpu: 65835.52561870894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 82287.38180965415,
            "unit": "ns/iter",
            "extra": "iterations: 10665\ncpu: 82285.81340834525 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 98387.50553171798,
            "unit": "ns/iter",
            "extra": "iterations: 8858\ncpu: 98384.0821855949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 114661.03854220893,
            "unit": "ns/iter",
            "extra": "iterations: 7628\ncpu: 114658.71788148934 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 130627.86257485172,
            "unit": "ns/iter",
            "extra": "iterations: 6680\ncpu: 130623.17365269526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 761.1673418158705,
            "unit": "ns/iter",
            "extra": "iterations: 921031\ncpu: 761.14821325232 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 669.6416247988684,
            "unit": "ns/iter",
            "extra": "iterations: 1044757\ncpu: 669.6447116410792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 667.3088634246955,
            "unit": "ns/iter",
            "extra": "iterations: 1043908\ncpu: 667.2929032060298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 653.7111280444818,
            "unit": "ns/iter",
            "extra": "iterations: 1065614\ncpu: 653.6942082217388 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 1260.0947998415552,
            "unit": "ns/iter",
            "extra": "iterations: 555560\ncpu: 1260.053279573767 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 5197.167626876955,
            "unit": "ns/iter",
            "extra": "iterations: 150835\ncpu: 5197.0033480293005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 23963.02400768173,
            "unit": "ns/iter",
            "extra": "iterations: 34364\ncpu: 23962.344313816786 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 20470.58450600224,
            "unit": "ns/iter",
            "extra": "iterations: 40648\ncpu: 20470.013284786488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 20156.71842832244,
            "unit": "ns/iter",
            "extra": "iterations: 40899\ncpu: 20156.040489987518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 20228.270576712042,
            "unit": "ns/iter",
            "extra": "iterations: 40835\ncpu: 20227.86825027555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 59351.778276733654,
            "unit": "ns/iter",
            "extra": "iterations: 14252\ncpu: 59350.58237440343 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 627774.206999959,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 627766.9000000046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 593682.3425605376,
            "unit": "ns/iter",
            "extra": "iterations: 1445\ncpu: 593656.3321799288 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 596024.4120879159,
            "unit": "ns/iter",
            "extra": "iterations: 1456\ncpu: 596007.6236263694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 588185.5167923396,
            "unit": "ns/iter",
            "extra": "iterations: 1459\ncpu: 588163.947909524 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 355885.42024291324,
            "unit": "ns/iter",
            "extra": "iterations: 2470\ncpu: 355875.5870445332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 591404.5819170628,
            "unit": "ns/iter",
            "extra": "iterations: 1471\ncpu: 591369.3405846375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 617.1035034299675,
            "unit": "ns/iter",
            "extra": "iterations: 1149131\ncpu: 617.0462723571155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 5520.89328999955,
            "unit": "ns/iter",
            "extra": "iterations: 100000\ncpu: 5520.830000000032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 10589.37828330849,
            "unit": "ns/iter",
            "extra": "iterations: 77894\ncpu: 10589.001720286531 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 15646.254655084582,
            "unit": "ns/iter",
            "extra": "iterations: 54564\ncpu: 15645.819588006747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 20993.50595460928,
            "unit": "ns/iter",
            "extra": "iterations: 40053\ncpu: 20992.80453399246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 26363.175960814006,
            "unit": "ns/iter",
            "extra": "iterations: 31848\ncpu: 26362.569078120974 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 31239.049343713486,
            "unit": "ns/iter",
            "extra": "iterations: 26589\ncpu: 31234.040392643663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 36158.77072622801,
            "unit": "ns/iter",
            "extra": "iterations: 23147\ncpu: 36157.031148744696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 41015.670378179806,
            "unit": "ns/iter",
            "extra": "iterations: 20387\ncpu: 41014.05797812346 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 546.3642117367331,
            "unit": "ns/iter",
            "extra": "iterations: 1278380\ncpu: 546.3334063423999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 434.3256645002914,
            "unit": "ns/iter",
            "extra": "iterations: 1612979\ncpu: 434.30980812521585 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 433.8073771052173,
            "unit": "ns/iter",
            "extra": "iterations: 1609954\ncpu: 433.78475409856577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 425.7300103475182,
            "unit": "ns/iter",
            "extra": "iterations: 1640974\ncpu: 425.71296071723424 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 906.2952687141857,
            "unit": "ns/iter",
            "extra": "iterations: 762055\ncpu: 906.2277657124384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 2363.271423115423,
            "unit": "ns/iter",
            "extra": "iterations: 340380\ncpu: 2363.220812033606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 9207.490457437307,
            "unit": "ns/iter",
            "extra": "iterations: 89127\ncpu: 9207.038271230922 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 9578.435675295115,
            "unit": "ns/iter",
            "extra": "iterations: 85185\ncpu: 9578.227387450836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 9498.237581833635,
            "unit": "ns/iter",
            "extra": "iterations: 87372\ncpu: 9497.815089502416 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 9181.423108035402,
            "unit": "ns/iter",
            "extra": "iterations: 89008\ncpu: 9181.100575229179 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 31024.934104305863,
            "unit": "ns/iter",
            "extra": "iterations: 26633\ncpu: 31023.02406788612 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 256590.04059701067,
            "unit": "ns/iter",
            "extra": "iterations: 3350\ncpu: 256581.85074626972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 200262.12954077937,
            "unit": "ns/iter",
            "extra": "iterations: 4377\ncpu: 200249.69156956873 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 199963.4336222663,
            "unit": "ns/iter",
            "extra": "iterations: 4384\ncpu: 199955.4288321185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 199315.45041134395,
            "unit": "ns/iter",
            "extra": "iterations: 4376\ncpu: 199303.72486288977 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 104232.47963205983,
            "unit": "ns/iter",
            "extra": "iterations: 8371\ncpu: 104229.05268187844 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}