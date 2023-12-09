window.BENCHMARK_DATA = {
  "lastUpdate": 1702085595839,
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
      }
    ]
  }
}