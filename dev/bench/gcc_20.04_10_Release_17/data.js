window.BENCHMARK_DATA = {
  "lastUpdate": 1702084746483,
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
      }
    ]
  }
}