window.BENCHMARK_DATA = {
  "lastUpdate": 1702310509720,
  "repoUrl": "https://github.com/GremSnoort/jsonifyer",
  "entries": {
    "Benchmark Serialize&Parse gcc-9 20.04 Debug c++-17": [
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
        "date": 1702084756290,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 13716.327788034649,
            "unit": "ns/iter",
            "extra": "iterations: 50914\ncpu: 13715.331735868329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 120210.31018387413,
            "unit": "ns/iter",
            "extra": "iterations: 7070\ncpu: 120205.68599717112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 227991.24625886232,
            "unit": "ns/iter",
            "extra": "iterations: 3809\ncpu: 227980.30979259653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 339288.8995381099,
            "unit": "ns/iter",
            "extra": "iterations: 2598\ncpu: 339276.9822940722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 444762.3611111143,
            "unit": "ns/iter",
            "extra": "iterations: 1980\ncpu: 444766.51515151485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 544011.0150753639,
            "unit": "ns/iter",
            "extra": "iterations: 1592\ncpu: 543998.3668341709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 525652.3269999889,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525645.2999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 608805.7700000036,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 608774.3000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 694999.037707388,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 694973.0015082957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 10843.960753629406,
            "unit": "ns/iter",
            "extra": "iterations: 64541\ncpu: 10843.569204071813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 8974.6934295246,
            "unit": "ns/iter",
            "extra": "iterations: 77346\ncpu: 8974.667080392017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9001.312164004377,
            "unit": "ns/iter",
            "extra": "iterations: 77754\ncpu: 9001.000591609425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9060.781029859076,
            "unit": "ns/iter",
            "extra": "iterations: 77933\ncpu: 9060.164500275883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14781.331336357014,
            "unit": "ns/iter",
            "extra": "iterations: 47405\ncpu: 14780.48096192384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54077.083091148714,
            "unit": "ns/iter",
            "extra": "iterations: 15140\ncpu: 54073.70541611629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 247999.8337195817,
            "unit": "ns/iter",
            "extra": "iterations: 3452\ncpu: 247988.81807647715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 196993.3228346488,
            "unit": "ns/iter",
            "extra": "iterations: 4318\ncpu: 196981.4497452527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 198527.81065497876,
            "unit": "ns/iter",
            "extra": "iterations: 4336\ncpu: 198519.00369003712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 197274.3472350199,
            "unit": "ns/iter",
            "extra": "iterations: 4340\ncpu: 197262.90322580602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 450771.11317828426,
            "unit": "ns/iter",
            "extra": "iterations: 1935\ncpu: 450748.0620155031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3715113.1399999713,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3714893.5999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3033057.3863636986,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3032853.246753236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3043480.1074918355,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3043343.322475572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3027202.8782895207,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3027019.078947377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1714768.6894639642,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1714780.9611829938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2932529.2145110085,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2932397.7917981166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6390.355256178006,
            "unit": "ns/iter",
            "extra": "iterations: 109338\ncpu: 6390.327242129912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 68816.21820680865,
            "unit": "ns/iter",
            "extra": "iterations: 12369\ncpu: 68813.43681785118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 132144.38627064787,
            "unit": "ns/iter",
            "extra": "iterations: 6599\ncpu: 132138.09668131528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 193005.93241441197,
            "unit": "ns/iter",
            "extra": "iterations: 4498\ncpu: 192996.3761671854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 256426.29432519389,
            "unit": "ns/iter",
            "extra": "iterations: 3401\ncpu: 256420.69979417766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 317994.3529627032,
            "unit": "ns/iter",
            "extra": "iterations: 2734\ncpu: 317979.2611558165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 380917.6355672451,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 380893.99912395823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 442535.8290208171,
            "unit": "ns/iter",
            "extra": "iterations: 1971\ncpu: 442530.74581430794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 504526.5645628075,
            "unit": "ns/iter",
            "extra": "iterations: 1727\ncpu: 504518.2976259402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4854.614203694445,
            "unit": "ns/iter",
            "extra": "iterations: 144216\ncpu: 4854.654129916226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4001.1784578012207,
            "unit": "ns/iter",
            "extra": "iterations: 168785\ncpu: 4001.164795449799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 3973.281180334733,
            "unit": "ns/iter",
            "extra": "iterations: 176289\ncpu: 3973.2365604206566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4042.1052319147143,
            "unit": "ns/iter",
            "extra": "iterations: 173512\ncpu: 4042.0339803587303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7128.862133194537,
            "unit": "ns/iter",
            "extra": "iterations: 98247\ncpu: 7128.2461550988955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30536.44338538002,
            "unit": "ns/iter",
            "extra": "iterations: 26963\ncpu: 30535.09624299986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 130468.38931413952,
            "unit": "ns/iter",
            "extra": "iterations: 6532\ncpu: 130460.48683404851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 105694.57279356409,
            "unit": "ns/iter",
            "extra": "iterations: 7954\ncpu: 105689.48956499912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 104464.89353331251,
            "unit": "ns/iter",
            "extra": "iterations: 8134\ncpu: 104459.72461273696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 106433.51201011217,
            "unit": "ns/iter",
            "extra": "iterations: 7910\ncpu: 106428.36915297135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 262460.92149756884,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 262448.33937197947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2057339.2378855164,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2057225.7709251035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1697178.3176043073,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1697065.3357531866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1692514.652727265,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1692452.363636363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1699804.46265932,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1699707.8324225938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1003936.3265086365,
            "unit": "ns/iter",
            "extra": "iterations: 928\ncpu: 1003892.3491379336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1649560.237168131,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1649442.8318584037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6901.055440103245,
            "unit": "ns/iter",
            "extra": "iterations: 101533\ncpu: 6900.672687697586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51105.94739999783,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51105.64000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94463.32361996901,
            "unit": "ns/iter",
            "extra": "iterations: 9094\ncpu: 94460.60039586609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 139158.01836767368,
            "unit": "ns/iter",
            "extra": "iterations: 6261\ncpu: 139078.24628653596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 179790.12923332164,
            "unit": "ns/iter",
            "extra": "iterations: 4813\ncpu: 179788.36484521072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 222673.39112593263,
            "unit": "ns/iter",
            "extra": "iterations: 3899\ncpu: 222675.19876891634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 264944.88834505697,
            "unit": "ns/iter",
            "extra": "iterations: 3269\ncpu: 264934.68950749584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 309109.83055061154,
            "unit": "ns/iter",
            "extra": "iterations: 2815\ncpu: 309094.88454706816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 353311.6058512791,
            "unit": "ns/iter",
            "extra": "iterations: 2461\ncpu: 353296.017878911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5687.958276533679,
            "unit": "ns/iter",
            "extra": "iterations: 123240\ncpu: 5687.770204479042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4694.543599776412,
            "unit": "ns/iter",
            "extra": "iterations: 150276\ncpu: 4694.3330937740575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4693.869699223414,
            "unit": "ns/iter",
            "extra": "iterations: 149247\ncpu: 4693.5717300850365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4721.500168434154,
            "unit": "ns/iter",
            "extra": "iterations: 148426\ncpu: 4721.492191395006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7216.094640738894,
            "unit": "ns/iter",
            "extra": "iterations: 96935\ncpu: 7216.032392840578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23007.232246222728,
            "unit": "ns/iter",
            "extra": "iterations: 35415\ncpu: 23007.19469151498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 115573.23523860879,
            "unit": "ns/iter",
            "extra": "iterations: 7418\ncpu: 115571.19169587488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 90436.22123706587,
            "unit": "ns/iter",
            "extra": "iterations: 9474\ncpu: 90435.62381253864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 90656.13433930738,
            "unit": "ns/iter",
            "extra": "iterations: 9543\ncpu: 90654.16535680577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 86876.83697308466,
            "unit": "ns/iter",
            "extra": "iterations: 9845\ncpu: 86876.01828339313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 187227.37023859264,
            "unit": "ns/iter",
            "extra": "iterations: 4778\ncpu: 187219.46421096695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1659793.738434215,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1659795.5516014162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1320208.1477272643,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1320180.9659090943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1320700.7753934092,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1320656.93848356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1307379.8377997696,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1307306.6290550095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 701897.2277526252,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 701877.75263951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1281912.4564032492,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 1281846.049046329 ns\nthreads: 1"
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
        "date": 1702084756290,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 13716.327788034649,
            "unit": "ns/iter",
            "extra": "iterations: 50914\ncpu: 13715.331735868329 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 120210.31018387413,
            "unit": "ns/iter",
            "extra": "iterations: 7070\ncpu: 120205.68599717112 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 227991.24625886232,
            "unit": "ns/iter",
            "extra": "iterations: 3809\ncpu: 227980.30979259653 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 339288.8995381099,
            "unit": "ns/iter",
            "extra": "iterations: 2598\ncpu: 339276.9822940722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 444762.3611111143,
            "unit": "ns/iter",
            "extra": "iterations: 1980\ncpu: 444766.51515151485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 544011.0150753639,
            "unit": "ns/iter",
            "extra": "iterations: 1592\ncpu: 543998.3668341709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 525652.3269999889,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 525645.2999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 608805.7700000036,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 608774.3000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 694999.037707388,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 694973.0015082957 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 10843.960753629406,
            "unit": "ns/iter",
            "extra": "iterations: 64541\ncpu: 10843.569204071813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 8974.6934295246,
            "unit": "ns/iter",
            "extra": "iterations: 77346\ncpu: 8974.667080392017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9001.312164004377,
            "unit": "ns/iter",
            "extra": "iterations: 77754\ncpu: 9001.000591609425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9060.781029859076,
            "unit": "ns/iter",
            "extra": "iterations: 77933\ncpu: 9060.164500275883 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14781.331336357014,
            "unit": "ns/iter",
            "extra": "iterations: 47405\ncpu: 14780.48096192384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54077.083091148714,
            "unit": "ns/iter",
            "extra": "iterations: 15140\ncpu: 54073.70541611629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 247999.8337195817,
            "unit": "ns/iter",
            "extra": "iterations: 3452\ncpu: 247988.81807647715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 196993.3228346488,
            "unit": "ns/iter",
            "extra": "iterations: 4318\ncpu: 196981.4497452527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 198527.81065497876,
            "unit": "ns/iter",
            "extra": "iterations: 4336\ncpu: 198519.00369003712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 197274.3472350199,
            "unit": "ns/iter",
            "extra": "iterations: 4340\ncpu: 197262.90322580602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 450771.11317828426,
            "unit": "ns/iter",
            "extra": "iterations: 1935\ncpu: 450748.0620155031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3715113.1399999713,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3714893.5999999964 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3033057.3863636986,
            "unit": "ns/iter",
            "extra": "iterations: 308\ncpu: 3032853.246753236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3043480.1074918355,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3043343.322475572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3027202.8782895207,
            "unit": "ns/iter",
            "extra": "iterations: 304\ncpu: 3027019.078947377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1714768.6894639642,
            "unit": "ns/iter",
            "extra": "iterations: 541\ncpu: 1714780.9611829938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2932529.2145110085,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2932397.7917981166 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6390.355256178006,
            "unit": "ns/iter",
            "extra": "iterations: 109338\ncpu: 6390.327242129912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 68816.21820680865,
            "unit": "ns/iter",
            "extra": "iterations: 12369\ncpu: 68813.43681785118 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 132144.38627064787,
            "unit": "ns/iter",
            "extra": "iterations: 6599\ncpu: 132138.09668131528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 193005.93241441197,
            "unit": "ns/iter",
            "extra": "iterations: 4498\ncpu: 192996.3761671854 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 256426.29432519389,
            "unit": "ns/iter",
            "extra": "iterations: 3401\ncpu: 256420.69979417766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 317994.3529627032,
            "unit": "ns/iter",
            "extra": "iterations: 2734\ncpu: 317979.2611558165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 380917.6355672451,
            "unit": "ns/iter",
            "extra": "iterations: 2283\ncpu: 380893.99912395823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 442535.8290208171,
            "unit": "ns/iter",
            "extra": "iterations: 1971\ncpu: 442530.74581430794 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 504526.5645628075,
            "unit": "ns/iter",
            "extra": "iterations: 1727\ncpu: 504518.2976259402 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4854.614203694445,
            "unit": "ns/iter",
            "extra": "iterations: 144216\ncpu: 4854.654129916226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4001.1784578012207,
            "unit": "ns/iter",
            "extra": "iterations: 168785\ncpu: 4001.164795449799 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 3973.281180334733,
            "unit": "ns/iter",
            "extra": "iterations: 176289\ncpu: 3973.2365604206566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4042.1052319147143,
            "unit": "ns/iter",
            "extra": "iterations: 173512\ncpu: 4042.0339803587303 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7128.862133194537,
            "unit": "ns/iter",
            "extra": "iterations: 98247\ncpu: 7128.2461550988955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30536.44338538002,
            "unit": "ns/iter",
            "extra": "iterations: 26963\ncpu: 30535.09624299986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 130468.38931413952,
            "unit": "ns/iter",
            "extra": "iterations: 6532\ncpu: 130460.48683404851 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 105694.57279356409,
            "unit": "ns/iter",
            "extra": "iterations: 7954\ncpu: 105689.48956499912 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 104464.89353331251,
            "unit": "ns/iter",
            "extra": "iterations: 8134\ncpu: 104459.72461273696 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 106433.51201011217,
            "unit": "ns/iter",
            "extra": "iterations: 7910\ncpu: 106428.36915297135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 262460.92149756884,
            "unit": "ns/iter",
            "extra": "iterations: 3312\ncpu: 262448.33937197947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2057339.2378855164,
            "unit": "ns/iter",
            "extra": "iterations: 454\ncpu: 2057225.7709251035 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1697178.3176043073,
            "unit": "ns/iter",
            "extra": "iterations: 551\ncpu: 1697065.3357531866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1692514.652727265,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1692452.363636363 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1699804.46265932,
            "unit": "ns/iter",
            "extra": "iterations: 549\ncpu: 1699707.8324225938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1003936.3265086365,
            "unit": "ns/iter",
            "extra": "iterations: 928\ncpu: 1003892.3491379336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1649560.237168131,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1649442.8318584037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6901.055440103245,
            "unit": "ns/iter",
            "extra": "iterations: 101533\ncpu: 6900.672687697586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51105.94739999783,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51105.64000000011 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94463.32361996901,
            "unit": "ns/iter",
            "extra": "iterations: 9094\ncpu: 94460.60039586609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 139158.01836767368,
            "unit": "ns/iter",
            "extra": "iterations: 6261\ncpu: 139078.24628653596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 179790.12923332164,
            "unit": "ns/iter",
            "extra": "iterations: 4813\ncpu: 179788.36484521072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 222673.39112593263,
            "unit": "ns/iter",
            "extra": "iterations: 3899\ncpu: 222675.19876891634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 264944.88834505697,
            "unit": "ns/iter",
            "extra": "iterations: 3269\ncpu: 264934.68950749584 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 309109.83055061154,
            "unit": "ns/iter",
            "extra": "iterations: 2815\ncpu: 309094.88454706816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 353311.6058512791,
            "unit": "ns/iter",
            "extra": "iterations: 2461\ncpu: 353296.017878911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5687.958276533679,
            "unit": "ns/iter",
            "extra": "iterations: 123240\ncpu: 5687.770204479042 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4694.543599776412,
            "unit": "ns/iter",
            "extra": "iterations: 150276\ncpu: 4694.3330937740575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4693.869699223414,
            "unit": "ns/iter",
            "extra": "iterations: 149247\ncpu: 4693.5717300850365 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4721.500168434154,
            "unit": "ns/iter",
            "extra": "iterations: 148426\ncpu: 4721.492191395006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7216.094640738894,
            "unit": "ns/iter",
            "extra": "iterations: 96935\ncpu: 7216.032392840578 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23007.232246222728,
            "unit": "ns/iter",
            "extra": "iterations: 35415\ncpu: 23007.19469151498 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 115573.23523860879,
            "unit": "ns/iter",
            "extra": "iterations: 7418\ncpu: 115571.19169587488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 90436.22123706587,
            "unit": "ns/iter",
            "extra": "iterations: 9474\ncpu: 90435.62381253864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 90656.13433930738,
            "unit": "ns/iter",
            "extra": "iterations: 9543\ncpu: 90654.16535680577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 86876.83697308466,
            "unit": "ns/iter",
            "extra": "iterations: 9845\ncpu: 86876.01828339313 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 187227.37023859264,
            "unit": "ns/iter",
            "extra": "iterations: 4778\ncpu: 187219.46421096695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1659793.738434215,
            "unit": "ns/iter",
            "extra": "iterations: 562\ncpu: 1659795.5516014162 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1320208.1477272643,
            "unit": "ns/iter",
            "extra": "iterations: 704\ncpu: 1320180.9659090943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1320700.7753934092,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1320656.93848356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1307379.8377997696,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1307306.6290550095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 701897.2277526252,
            "unit": "ns/iter",
            "extra": "iterations: 1326\ncpu: 701877.75263951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1281912.4564032492,
            "unit": "ns/iter",
            "extra": "iterations: 734\ncpu: 1281846.049046329 ns\nthreads: 1"
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
        "date": 1702084973205,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 13871.460112326913,
            "unit": "ns/iter",
            "extra": "iterations: 51457\ncpu: 13871.543230269937 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 117389.97040198227,
            "unit": "ns/iter",
            "extra": "iterations: 7264\ncpu: 117384.16850220266 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 221170.49081164083,
            "unit": "ns/iter",
            "extra": "iterations: 3918\ncpu: 221167.27922409386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 323103.88195742154,
            "unit": "ns/iter",
            "extra": "iterations: 2677\ncpu: 323101.45685468824 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 436629.61070201563,
            "unit": "ns/iter",
            "extra": "iterations: 2037\ncpu: 436621.502209131 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 528129.7884146406,
            "unit": "ns/iter",
            "extra": "iterations: 1640\ncpu: 528112.7439024395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 510327.64499998966,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 510313.29999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 590606.7559999996,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 590601.8 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 670689.4930606287,
            "unit": "ns/iter",
            "extra": "iterations: 1369\ncpu: 670673.995617239 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11112.439455569745,
            "unit": "ns/iter",
            "extra": "iterations: 63920\ncpu: 11112.090112640803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 8938.68201205516,
            "unit": "ns/iter",
            "extra": "iterations: 78308\ncpu: 8938.238749553046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9047.81524726146,
            "unit": "ns/iter",
            "extra": "iterations: 77509\ncpu: 9047.584151517894 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9003.904241768998,
            "unit": "ns/iter",
            "extra": "iterations: 77727\ncpu: 9003.58948627889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14722.67826782252,
            "unit": "ns/iter",
            "extra": "iterations: 47524\ncpu: 14722.769548017832 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 54617.75800972431,
            "unit": "ns/iter",
            "extra": "iterations: 15013\ncpu: 54616.066076067385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 255427.19126637498,
            "unit": "ns/iter",
            "extra": "iterations: 3435\ncpu: 255406.78311499307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 198576.1431222402,
            "unit": "ns/iter",
            "extra": "iterations: 4311\ncpu: 198563.14080259818 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 196552.69461078072,
            "unit": "ns/iter",
            "extra": "iterations: 4342\ncpu: 196548.59511745677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 194467.06424325745,
            "unit": "ns/iter",
            "extra": "iterations: 4374\ncpu: 194459.71650663074 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 454403.72356885107,
            "unit": "ns/iter",
            "extra": "iterations: 1939\ncpu: 454392.00618875615 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3767740.9372549267,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3767595.294117659 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 2971289.7555555175,
            "unit": "ns/iter",
            "extra": "iterations: 315\ncpu: 2971171.111111114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 2963882.474522257,
            "unit": "ns/iter",
            "extra": "iterations: 314\ncpu: 2963829.9363057287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2932000.1167193204,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2931870.031545736 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1702484.738181831,
            "unit": "ns/iter",
            "extra": "iterations: 550\ncpu: 1702458.1818181807 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2868230.911671864,
            "unit": "ns/iter",
            "extra": "iterations: 317\ncpu: 2868087.0662460527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6354.390771957595,
            "unit": "ns/iter",
            "extra": "iterations: 110576\ncpu: 6354.275792215312 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 65826.81888425197,
            "unit": "ns/iter",
            "extra": "iterations: 12942\ncpu: 65825.49065059512 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 126579.20150224202,
            "unit": "ns/iter",
            "extra": "iterations: 6923\ncpu: 126575.47306081175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 186802.50278610858,
            "unit": "ns/iter",
            "extra": "iterations: 4666\ncpu: 186774.34633519032 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 245802.6091011835,
            "unit": "ns/iter",
            "extra": "iterations: 3538\ncpu: 245795.901639344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 305781.7522871207,
            "unit": "ns/iter",
            "extra": "iterations: 2842\ncpu: 305767.9099225884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 364651.4013519214,
            "unit": "ns/iter",
            "extra": "iterations: 2367\ncpu: 364642.2898183356 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 428357.5746341362,
            "unit": "ns/iter",
            "extra": "iterations: 2050\ncpu: 428342.829268293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 482664.116537179,
            "unit": "ns/iter",
            "extra": "iterations: 1802\ncpu: 482635.0721420646 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4799.372381011113,
            "unit": "ns/iter",
            "extra": "iterations: 146001\ncpu: 4799.141101773265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 3933.928410712001,
            "unit": "ns/iter",
            "extra": "iterations: 172442\ncpu: 3933.5637489706723 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 3997.6079390043615,
            "unit": "ns/iter",
            "extra": "iterations: 175488\ncpu: 3997.367911196212 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 3979.378253315828,
            "unit": "ns/iter",
            "extra": "iterations: 176128\ncpu: 3979.30539153341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7097.344442092279,
            "unit": "ns/iter",
            "extra": "iterations: 99201\ncpu: 7097.1976088950605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 30995.0454358321,
            "unit": "ns/iter",
            "extra": "iterations: 26719\ncpu: 30994.543208952415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 130612.89350928507,
            "unit": "ns/iter",
            "extra": "iterations: 6517\ncpu: 130612.10679760661 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 105634.85052447344,
            "unit": "ns/iter",
            "extra": "iterations: 8008\ncpu: 105633.19180819135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 105626.7507753374,
            "unit": "ns/iter",
            "extra": "iterations: 8061\ncpu: 105626.10098002665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 107353.01006112984,
            "unit": "ns/iter",
            "extra": "iterations: 7852\ncpu: 107350.92969943973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 267024.42861529125,
            "unit": "ns/iter",
            "extra": "iterations: 3257\ncpu: 267023.08873196127 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2019030.6479481747,
            "unit": "ns/iter",
            "extra": "iterations: 463\ncpu: 2019016.1987041002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1670782.2992831378,
            "unit": "ns/iter",
            "extra": "iterations: 558\ncpu: 1670758.9605734712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1674876.727109551,
            "unit": "ns/iter",
            "extra": "iterations: 557\ncpu: 1674825.3141831218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1663788.8872987758,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1663753.1305903331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 995686.1931330417,
            "unit": "ns/iter",
            "extra": "iterations: 932\ncpu: 995681.2231759683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1618450.2752613511,
            "unit": "ns/iter",
            "extra": "iterations: 574\ncpu: 1618367.5958188097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6845.812897809418,
            "unit": "ns/iter",
            "extra": "iterations: 102436\ncpu: 6845.763208247067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50199.759099999144,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50198.460000000014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 92740.29046180382,
            "unit": "ns/iter",
            "extra": "iterations: 9268\ncpu: 92739.93310315072 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 134584.2246647977,
            "unit": "ns/iter",
            "extra": "iterations: 6414\ncpu: 134583.42687870242 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 176640.96389965268,
            "unit": "ns/iter",
            "extra": "iterations: 4903\ncpu: 176638.3846624506 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 218606.86715402262,
            "unit": "ns/iter",
            "extra": "iterations: 3967\ncpu: 218605.67179228793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 261174.3101893557,
            "unit": "ns/iter",
            "extra": "iterations: 3327\ncpu: 261173.3694018628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 303040.2355400645,
            "unit": "ns/iter",
            "extra": "iterations: 2870\ncpu: 303028.50174216216 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 344125.0786561219,
            "unit": "ns/iter",
            "extra": "iterations: 2530\ncpu: 344102.450592886 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5685.877182993087,
            "unit": "ns/iter",
            "extra": "iterations: 122939\ncpu: 5685.649793800186 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4707.405377769062,
            "unit": "ns/iter",
            "extra": "iterations: 148649\ncpu: 4707.2654373725945 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4708.711639838584,
            "unit": "ns/iter",
            "extra": "iterations: 148911\ncpu: 4708.678338067764 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4675.473711432506,
            "unit": "ns/iter",
            "extra": "iterations: 150807\ncpu: 4675.2325820419865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7159.44373410656,
            "unit": "ns/iter",
            "extra": "iterations: 97919\ncpu: 7159.404201431843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 23028.929250621928,
            "unit": "ns/iter",
            "extra": "iterations: 35336\ncpu: 23028.588408421692 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 118010.20107645387,
            "unit": "ns/iter",
            "extra": "iterations: 7246\ncpu: 118009.46729229864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 91229.86944030624,
            "unit": "ns/iter",
            "extra": "iterations: 9398\ncpu: 91226.39923387914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 91535.34800726475,
            "unit": "ns/iter",
            "extra": "iterations: 9359\ncpu: 91531.59525590396 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 87072.6886850151,
            "unit": "ns/iter",
            "extra": "iterations: 9810\ncpu: 87067.58409785978 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 186529.50667222735,
            "unit": "ns/iter",
            "extra": "iterations: 4796\ncpu: 186521.83069224452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1625962.0802792397,
            "unit": "ns/iter",
            "extra": "iterations: 573\ncpu: 1625834.5549738181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1294623.6325385831,
            "unit": "ns/iter",
            "extra": "iterations: 713\ncpu: 1294548.9481065948 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1287666.9336099627,
            "unit": "ns/iter",
            "extra": "iterations: 723\ncpu: 1287640.5255878244 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1264142.5386702714,
            "unit": "ns/iter",
            "extra": "iterations: 737\ncpu: 1264111.80461331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 690862.9850968829,
            "unit": "ns/iter",
            "extra": "iterations: 1342\ncpu: 690836.0655737743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1233600.5259653747,
            "unit": "ns/iter",
            "extra": "iterations: 751\ncpu: 1233525.4327563182 ns\nthreads: 1"
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
        "date": 1702085590494,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 13700.567367631676,
            "unit": "ns/iter",
            "extra": "iterations: 50692\ncpu: 13700.07298982088 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 119695.61646136308,
            "unit": "ns/iter",
            "extra": "iterations: 7144\ncpu: 119682.2228443449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 223442.1798580071,
            "unit": "ns/iter",
            "extra": "iterations: 3803\ncpu: 223432.73731264798 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 325790.62731044745,
            "unit": "ns/iter",
            "extra": "iterations: 2651\ncpu: 325790.6073179931 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 428917.03560831054,
            "unit": "ns/iter",
            "extra": "iterations: 2022\ncpu: 428911.7210682494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 538934.98712446,
            "unit": "ns/iter",
            "extra": "iterations: 1631\ncpu: 538924.8927038626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 513719.3699999898,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 513703.6000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 594195.6769999876,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 594201.8999999999 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 677379.1636096777,
            "unit": "ns/iter",
            "extra": "iterations: 1363\ncpu: 677366.98459281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11005.045244952178,
            "unit": "ns/iter",
            "extra": "iterations: 63543\ncpu: 11005.010780101662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9161.04784052277,
            "unit": "ns/iter",
            "extra": "iterations: 75898\ncpu: 9160.944952436157 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9092.979002283953,
            "unit": "ns/iter",
            "extra": "iterations: 77056\ncpu: 9092.55216985049 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9134.572046315863,
            "unit": "ns/iter",
            "extra": "iterations: 76777\ncpu: 9134.182111830381 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 14943.89524642253,
            "unit": "ns/iter",
            "extra": "iterations: 46891\ncpu: 14943.503017636669 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 56580.28638627654,
            "unit": "ns/iter",
            "extra": "iterations: 14456\ncpu: 56580.11206419484 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 253991.99999999677,
            "unit": "ns/iter",
            "extra": "iterations: 3364\ncpu: 253986.5041617121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 202689.94109264278,
            "unit": "ns/iter",
            "extra": "iterations: 4210\ncpu: 202688.6223277906 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 205892.77806664823,
            "unit": "ns/iter",
            "extra": "iterations: 4231\ncpu: 205886.6934530846 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 201920.94703087542,
            "unit": "ns/iter",
            "extra": "iterations: 4210\ncpu: 201918.45605700687 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 460512.12683437846,
            "unit": "ns/iter",
            "extra": "iterations: 1908\ncpu: 460498.322851153 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 3694816.7658730354,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3694743.6507936544 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3034270.05501616,
            "unit": "ns/iter",
            "extra": "iterations: 309\ncpu: 3034150.809061489 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3014189.5830618534,
            "unit": "ns/iter",
            "extra": "iterations: 307\ncpu: 3014092.5081433207 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 2985330.2467948776,
            "unit": "ns/iter",
            "extra": "iterations: 312\ncpu: 2985292.9487179546 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 1716701.5129150888,
            "unit": "ns/iter",
            "extra": "iterations: 542\ncpu: 1716668.6346863522 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 2920072.028301839,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2919998.1132075507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 6570.8690137968015,
            "unit": "ns/iter",
            "extra": "iterations: 107706\ncpu: 6570.746290828728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 66500.91815836784,
            "unit": "ns/iter",
            "extra": "iterations: 12793\ncpu: 66500.60189165943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 127456.9809426827,
            "unit": "ns/iter",
            "extra": "iterations: 6874\ncpu: 127455.97905149833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 187261.1717738453,
            "unit": "ns/iter",
            "extra": "iterations: 4634\ncpu: 187256.12861458745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 246657.40817485156,
            "unit": "ns/iter",
            "extra": "iterations: 3523\ncpu: 246649.27618506987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 306514.6160651031,
            "unit": "ns/iter",
            "extra": "iterations: 2826\ncpu: 306500.84925689985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 367341.61952860956,
            "unit": "ns/iter",
            "extra": "iterations: 2376\ncpu: 367332.6599326593 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 426946.53033267864,
            "unit": "ns/iter",
            "extra": "iterations: 2044\ncpu: 426938.45401174197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 486396.87988826825,
            "unit": "ns/iter",
            "extra": "iterations: 1790\ncpu: 486393.68715083785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 4832.027016390716,
            "unit": "ns/iter",
            "extra": "iterations: 144838\ncpu: 4831.991604413185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4031.841704920143,
            "unit": "ns/iter",
            "extra": "iterations: 173404\ncpu: 4031.7541694539864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4020.5610878203393,
            "unit": "ns/iter",
            "extra": "iterations: 173889\ncpu: 4020.533788796299 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4027.9726629717857,
            "unit": "ns/iter",
            "extra": "iterations: 173757\ncpu: 4027.8394539500514 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 7304.668701860261,
            "unit": "ns/iter",
            "extra": "iterations: 95814\ncpu: 7304.301041601419 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 33152.97119011331,
            "unit": "ns/iter",
            "extra": "iterations: 24922\ncpu: 33152.082497392046 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 135487.1109340082,
            "unit": "ns/iter",
            "extra": "iterations: 6274\ncpu: 135485.78259483626 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 109222.21463477319,
            "unit": "ns/iter",
            "extra": "iterations: 7776\ncpu: 109217.50257201673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 109388.72646604477,
            "unit": "ns/iter",
            "extra": "iterations: 7776\ncpu: 109384.46502057575 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 110552.42864596861,
            "unit": "ns/iter",
            "extra": "iterations: 7666\ncpu: 110550.41742760314 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 268643.08165788953,
            "unit": "ns/iter",
            "extra": "iterations: 3233\ncpu: 268628.73492112657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2035785.775599097,
            "unit": "ns/iter",
            "extra": "iterations: 459\ncpu: 2035734.640522878 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 1691954.3562386942,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1691940.506329114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 1692647.7251356645,
            "unit": "ns/iter",
            "extra": "iterations: 553\ncpu: 1692577.2151898746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 1683552.6404292977,
            "unit": "ns/iter",
            "extra": "iterations: 559\ncpu: 1683512.1645795982 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1002773.150214614,
            "unit": "ns/iter",
            "extra": "iterations: 932\ncpu: 1002763.1974248914 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 1630926.0263157235,
            "unit": "ns/iter",
            "extra": "iterations: 570\ncpu: 1630864.7368421105 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6957.336203982041,
            "unit": "ns/iter",
            "extra": "iterations: 100558\ncpu: 6957.068557449451 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 51047.214099997975,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 51046.8000000003 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 94824.5866799458,
            "unit": "ns/iter",
            "extra": "iterations: 9039\ncpu: 94820.28985507204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 137272.58070677723,
            "unit": "ns/iter",
            "extra": "iterations: 6282\ncpu: 137267.2715695639 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 180690.1655518391,
            "unit": "ns/iter",
            "extra": "iterations: 4784\ncpu: 180681.98160535097 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 223765.6220268959,
            "unit": "ns/iter",
            "extra": "iterations: 3868\ncpu: 223757.29058945086 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 266526.5637707891,
            "unit": "ns/iter",
            "extra": "iterations: 3246\ncpu: 266519.9322242754 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 310984.1598712349,
            "unit": "ns/iter",
            "extra": "iterations: 2796\ncpu: 310978.1115879822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 352325.2478736339,
            "unit": "ns/iter",
            "extra": "iterations: 2469\ncpu: 352317.5374645609 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5805.6012471449085,
            "unit": "ns/iter",
            "extra": "iterations: 119954\ncpu: 5805.572969638383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4799.964973694202,
            "unit": "ns/iter",
            "extra": "iterations: 144834\ncpu: 4799.913003852712 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4840.002798872317,
            "unit": "ns/iter",
            "extra": "iterations: 145773\ncpu: 4839.888045111196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4751.249401201622,
            "unit": "ns/iter",
            "extra": "iterations: 146126\ncpu: 4751.118897389889 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7303.010003971767,
            "unit": "ns/iter",
            "extra": "iterations: 95662\ncpu: 7302.860069829194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 22791.878338611932,
            "unit": "ns/iter",
            "extra": "iterations: 35681\ncpu: 22791.395981054706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 118368.6042041226,
            "unit": "ns/iter",
            "extra": "iterations: 7231\ncpu: 118365.75853962243 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 90204.25690403192,
            "unit": "ns/iter",
            "extra": "iterations: 9451\ncpu: 90203.43878954666 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 91904.9055651062,
            "unit": "ns/iter",
            "extra": "iterations: 9308\ncpu: 91903.76020627459 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 88552.07687500292,
            "unit": "ns/iter",
            "extra": "iterations: 9600\ncpu: 88551.33333333321 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 189880.54438753196,
            "unit": "ns/iter",
            "extra": "iterations: 4686\ncpu: 189876.82458386678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1675691.6288288168,
            "unit": "ns/iter",
            "extra": "iterations: 555\ncpu: 1675658.198198198 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1333929.09339079,
            "unit": "ns/iter",
            "extra": "iterations: 696\ncpu: 1333897.5574712488 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1329620.2575107627,
            "unit": "ns/iter",
            "extra": "iterations: 699\ncpu: 1329616.8812589392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1307788.7862165563,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1307750.3516174431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 710808.0053557619,
            "unit": "ns/iter",
            "extra": "iterations: 1307\ncpu: 710791.8898240272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1272210.843835606,
            "unit": "ns/iter",
            "extra": "iterations: 730\ncpu: 1272166.712328765 ns\nthreads: 1"
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
        "date": 1702244240508,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15051.47021295135,
            "unit": "ns/iter",
            "extra": "iterations: 45926\ncpu: 15050.96895005008 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 145305.24487994384,
            "unit": "ns/iter",
            "extra": "iterations: 5664\ncpu: 145300.6002824859 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 275460.16979929665,
            "unit": "ns/iter",
            "extra": "iterations: 3139\ncpu: 275457.02453010523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 403960.3517047979,
            "unit": "ns/iter",
            "extra": "iterations: 2141\ncpu: 403946.14666043926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 542189.3577135821,
            "unit": "ns/iter",
            "extra": "iterations: 1627\ncpu: 542170.6822372467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 541720.263000002,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 541696.1000000002 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 645378.4480000024,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 645365.7000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 749096.0614389749,
            "unit": "ns/iter",
            "extra": "iterations: 1237\ncpu: 749081.6491511721 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 855092.6914600538,
            "unit": "ns/iter",
            "extra": "iterations: 1089\ncpu: 855059.5041322311 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11895.91689463584,
            "unit": "ns/iter",
            "extra": "iterations: 58853\ncpu: 11895.38001461268 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9862.213346829183,
            "unit": "ns/iter",
            "extra": "iterations: 71133\ncpu: 9861.833466885986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9789.746749978865,
            "unit": "ns/iter",
            "extra": "iterations: 71538\ncpu: 9789.569180016228 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9859.198288280519,
            "unit": "ns/iter",
            "extra": "iterations: 70806\ncpu: 9858.853769454576 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16149.476148736036,
            "unit": "ns/iter",
            "extra": "iterations: 43352\ncpu: 16148.376084148378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 61116.17749999994,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 61112.99999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 317516.03443168954,
            "unit": "ns/iter",
            "extra": "iterations: 2701\ncpu: 317499.7408367274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 249429.26637554183,
            "unit": "ns/iter",
            "extra": "iterations: 3435\ncpu: 249422.76564774386 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 252066.96735294294,
            "unit": "ns/iter",
            "extra": "iterations: 3400\ncpu: 252052.382352942 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 248253.39727219875,
            "unit": "ns/iter",
            "extra": "iterations: 3446\ncpu: 248245.29889727238 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 555954.4592356642,
            "unit": "ns/iter",
            "extra": "iterations: 1570\ncpu: 555938.5987261148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4501676.754807649,
            "unit": "ns/iter",
            "extra": "iterations: 208\ncpu: 4501462.019230774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3654211.690195998,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3654079.607843135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3662123.9023437724,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3661937.5000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3636122.8085938226,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3636100.7812499986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2134630.4141876353,
            "unit": "ns/iter",
            "extra": "iterations: 437\ncpu: 2134476.88787185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7637.742545176491,
            "unit": "ns/iter",
            "extra": "iterations: 91585\ncpu: 7637.693945515103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 94044.66750878943,
            "unit": "ns/iter",
            "extra": "iterations: 9104\ncpu: 94039.23550087897 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 181475.83524027187,
            "unit": "ns/iter",
            "extra": "iterations: 4807\ncpu: 181470.2933222383 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 268015.1441774528,
            "unit": "ns/iter",
            "extra": "iterations: 3246\ncpu: 268005.9765865673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 355626.66287108645,
            "unit": "ns/iter",
            "extra": "iterations: 2459\ncpu: 355615.3314355422 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 439528.9409389178,
            "unit": "ns/iter",
            "extra": "iterations: 1981\ncpu: 439514.941948511 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 524760.1532890698,
            "unit": "ns/iter",
            "extra": "iterations: 1657\ncpu: 524733.4942667471 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 611702.2184873869,
            "unit": "ns/iter",
            "extra": "iterations: 1428\ncpu: 611682.1428571456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 561562.2500000086,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 561540.8000000031 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5783.072944582287,
            "unit": "ns/iter",
            "extra": "iterations: 120900\ncpu: 5782.900744416866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4752.527831730442,
            "unit": "ns/iter",
            "extra": "iterations: 147763\ncpu: 4752.201159965662 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4736.81197320069,
            "unit": "ns/iter",
            "extra": "iterations: 148064\ncpu: 4736.772611843541 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4814.31991903401,
            "unit": "ns/iter",
            "extra": "iterations: 145740\ncpu: 4814.156031288582 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8370.706993967578,
            "unit": "ns/iter",
            "extra": "iterations: 83715\ncpu: 8370.644448426245 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 44992.19371384948,
            "unit": "ns/iter",
            "extra": "iterations: 18326\ncpu: 44990.33613445393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 194935.7481245747,
            "unit": "ns/iter",
            "extra": "iterations: 4399\ncpu: 194925.21027506213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 157135.73219530436,
            "unit": "ns/iter",
            "extra": "iterations: 5448\ncpu: 157129.221732746 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 157636.18464082206,
            "unit": "ns/iter",
            "extra": "iterations: 5443\ncpu: 157628.95462061296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 156452.93158953538,
            "unit": "ns/iter",
            "extra": "iterations: 5467\ncpu: 156447.9604902135 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 349598.3011226934,
            "unit": "ns/iter",
            "extra": "iterations: 2494\ncpu: 349580.9141940634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2902881.1743118702,
            "unit": "ns/iter",
            "extra": "iterations: 327\ncpu: 2899934.862385309 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2355724.870886025,
            "unit": "ns/iter",
            "extra": "iterations: 395\ncpu: 2355680.253164556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2328242.5879397034,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2328199.4974874295 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2342490.5251256097,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2342476.3819095464 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1441403.092705101,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1441386.4741641344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2295661.593175736,
            "unit": "ns/iter",
            "extra": "iterations: 381\ncpu: 2295528.346456694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7047.65249528554,
            "unit": "ns/iter",
            "extra": "iterations: 99167\ncpu: 7047.681184264926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50874.28869999826,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50873.70999999976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 93969.98785823293,
            "unit": "ns/iter",
            "extra": "iterations: 9142\ncpu: 93948.16232771837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 137206.83730915582,
            "unit": "ns/iter",
            "extra": "iterations: 6288\ncpu: 137203.21246819352 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 180873.77909393935,
            "unit": "ns/iter",
            "extra": "iterations: 4812\ncpu: 180871.75810473866 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 223911.09871133682,
            "unit": "ns/iter",
            "extra": "iterations: 3880\ncpu: 223909.3556701029 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 266626.32698802435,
            "unit": "ns/iter",
            "extra": "iterations: 3257\ncpu: 266622.106232729 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 310840.6552094381,
            "unit": "ns/iter",
            "extra": "iterations: 2793\ncpu: 310831.8295739359 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 355838.9109394201,
            "unit": "ns/iter",
            "extra": "iterations: 2459\ncpu: 355829.84953233117 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5667.051793217143,
            "unit": "ns/iter",
            "extra": "iterations: 123047\ncpu: 5666.980097036083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4653.339719960716,
            "unit": "ns/iter",
            "extra": "iterations: 150836\ncpu: 4653.304913946276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4698.014883559219,
            "unit": "ns/iter",
            "extra": "iterations: 149561\ncpu: 4697.9867746271275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4694.873689787109,
            "unit": "ns/iter",
            "extra": "iterations: 149117\ncpu: 4694.770549300247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7240.94105413405,
            "unit": "ns/iter",
            "extra": "iterations: 96648\ncpu: 7240.845128714596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26366.191982370223,
            "unit": "ns/iter",
            "extra": "iterations: 30857\ncpu: 26365.722526493188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 123514.85354262975,
            "unit": "ns/iter",
            "extra": "iterations: 6944\ncpu: 123512.64400921535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 94922.23115743329,
            "unit": "ns/iter",
            "extra": "iterations: 9115\ncpu: 94918.54086670202 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 93462.87361923841,
            "unit": "ns/iter",
            "extra": "iterations: 9234\ncpu: 93458.89105479668 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 89388.46064018368,
            "unit": "ns/iter",
            "extra": "iterations: 9591\ncpu: 89385.75748097272 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 202565.95573807613,
            "unit": "ns/iter",
            "extra": "iterations: 4383\ncpu: 202561.23659593787 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1634910.2155477428,
            "unit": "ns/iter",
            "extra": "iterations: 566\ncpu: 1634867.8445229793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1290860.0961002365,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1290832.0334261702 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1295587.0446304788,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1295566.666666665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1289847.1574586055,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 1289806.6298342503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 715856.0108107913,
            "unit": "ns/iter",
            "extra": "iterations: 1295\ncpu: 715842.1621621546 ns\nthreads: 1"
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
        "date": 1702285104497,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15179.34565853248,
            "unit": "ns/iter",
            "extra": "iterations: 45814\ncpu: 15179.174488147728 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 147253.77806518372,
            "unit": "ns/iter",
            "extra": "iterations: 5799\ncpu: 147240.30005173307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 277620.4541401325,
            "unit": "ns/iter",
            "extra": "iterations: 3140\ncpu: 277615.28662420384 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 406646.6923076923,
            "unit": "ns/iter",
            "extra": "iterations: 2132\ncpu: 406610.7879924951 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 541964.1971831017,
            "unit": "ns/iter",
            "extra": "iterations: 1562\ncpu: 541892.8297055055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 544300.6909999895,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544226.6999999994 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 649186.2670000046,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 649166.3999999996 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 752439.713474021,
            "unit": "ns/iter",
            "extra": "iterations: 1232\ncpu: 752421.5097402596 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 855957.4345018446,
            "unit": "ns/iter",
            "extra": "iterations: 1084\ncpu: 855907.1033210331 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11776.374558541604,
            "unit": "ns/iter",
            "extra": "iterations: 59462\ncpu: 11775.917392620475 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9784.709218865793,
            "unit": "ns/iter",
            "extra": "iterations: 71473\ncpu: 9784.32135211898 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9745.559069741552,
            "unit": "ns/iter",
            "extra": "iterations: 72152\ncpu: 9745.316831134289 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9750.236559139812,
            "unit": "ns/iter",
            "extra": "iterations: 71796\ncpu: 9750.090534291598 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16065.18950216675,
            "unit": "ns/iter",
            "extra": "iterations: 43609\ncpu: 16064.867343896896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 62603.01564327478,
            "unit": "ns/iter",
            "extra": "iterations: 13680\ncpu: 62596.54970760226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 326478.4123557933,
            "unit": "ns/iter",
            "extra": "iterations: 2687\ncpu: 326478.19129140285 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 249349.64909495253,
            "unit": "ns/iter",
            "extra": "iterations: 3149\ncpu: 249331.0574785647 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 248447.81413612003,
            "unit": "ns/iter",
            "extra": "iterations: 3438\ncpu: 248436.62012798167 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 246467.48079699514,
            "unit": "ns/iter",
            "extra": "iterations: 3463\ncpu: 246447.87756280715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 561524.7222222186,
            "unit": "ns/iter",
            "extra": "iterations: 1566\ncpu: 561467.0498084293 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4699723.1809523925,
            "unit": "ns/iter",
            "extra": "iterations: 210\ncpu: 4699481.428571434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3645080.682352888,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3644727.0588235306 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3611906.864341056,
            "unit": "ns/iter",
            "extra": "iterations: 258\ncpu: 3611630.6201550392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3667390.202334655,
            "unit": "ns/iter",
            "extra": "iterations: 257\ncpu: 3667096.8871595357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2120641.259681093,
            "unit": "ns/iter",
            "extra": "iterations: 439\ncpu: 2120496.127562643 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7709.881797386306,
            "unit": "ns/iter",
            "extra": "iterations: 88306\ncpu: 7709.23833035125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 93076.12534030502,
            "unit": "ns/iter",
            "extra": "iterations: 9183\ncpu: 93071.73037133833 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 180068.78867459673,
            "unit": "ns/iter",
            "extra": "iterations: 4874\ncpu: 180055.3754616332 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 265604.46339202614,
            "unit": "ns/iter",
            "extra": "iterations: 3237\ncpu: 265586.80877355556 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 351853.05753646616,
            "unit": "ns/iter",
            "extra": "iterations: 2468\ncpu: 351823.7844408428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 437972.79214898037,
            "unit": "ns/iter",
            "extra": "iterations: 1987\ncpu: 437971.9174635133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 523284.39939940243,
            "unit": "ns/iter",
            "extra": "iterations: 1665\ncpu: 523253.03303303325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 610548.2725998537,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 610497.9677645427 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 558523.005000012,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 558482.5000000038 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5753.459549556313,
            "unit": "ns/iter",
            "extra": "iterations: 121791\ncpu: 5753.030191065014 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4793.650421352176,
            "unit": "ns/iter",
            "extra": "iterations: 146196\ncpu: 4793.300090289724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4801.516556519217,
            "unit": "ns/iter",
            "extra": "iterations: 145411\ncpu: 4801.148468822853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4753.1493948588095,
            "unit": "ns/iter",
            "extra": "iterations: 147321\ncpu: 4753.100372655636 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8509.29686477067,
            "unit": "ns/iter",
            "extra": "iterations: 82482\ncpu: 8508.52549647197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46177.322827123855,
            "unit": "ns/iter",
            "extra": "iterations: 17799\ncpu: 46174.36372829935 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 195065.63165106325,
            "unit": "ns/iter",
            "extra": "iterations: 4379\ncpu: 195065.12902489104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 157802.60405156334,
            "unit": "ns/iter",
            "extra": "iterations: 5430\ncpu: 157799.4843462236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 156418.00546348715,
            "unit": "ns/iter",
            "extra": "iterations: 5491\ncpu: 156417.5377891084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 157437.82500457825,
            "unit": "ns/iter",
            "extra": "iterations: 5463\ncpu: 157436.44517664256 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 351061.8193885842,
            "unit": "ns/iter",
            "extra": "iterations: 2486\ncpu: 351058.32662912377 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2815093.3704819283,
            "unit": "ns/iter",
            "extra": "iterations: 332\ncpu: 2815003.915662644 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2368075.3753148615,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2363560.4534005006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2317847.8163771317,
            "unit": "ns/iter",
            "extra": "iterations: 403\ncpu: 2317665.012406946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2340139.6557789063,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2340016.080402018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1401774.0136157314,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1401675.1891074087 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2273786.5474452106,
            "unit": "ns/iter",
            "extra": "iterations: 411\ncpu: 2273628.710462278 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7137.427729908493,
            "unit": "ns/iter",
            "extra": "iterations: 97952\ncpu: 7136.481133616491 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52225.65079999981,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52221.62999999966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 96185.23902384537,
            "unit": "ns/iter",
            "extra": "iterations: 8974\ncpu: 96180.62179630071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 139755.88304947157,
            "unit": "ns/iter",
            "extra": "iterations: 6165\ncpu: 139751.857258719 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 184107.8840364657,
            "unit": "ns/iter",
            "extra": "iterations: 4717\ncpu: 184092.68602925577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 228226.10086682253,
            "unit": "ns/iter",
            "extra": "iterations: 3807\ncpu: 228216.75860257403 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 271868.73958007107,
            "unit": "ns/iter",
            "extra": "iterations: 3191\ncpu: 271846.9131933562 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 316085.56163887156,
            "unit": "ns/iter",
            "extra": "iterations: 2758\ncpu: 316063.8868745455 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 359766.5356995381,
            "unit": "ns/iter",
            "extra": "iterations: 2423\ncpu: 359750.63970284705 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5660.027523751134,
            "unit": "ns/iter",
            "extra": "iterations: 123784\ncpu: 5659.728236282532 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4710.582606005836,
            "unit": "ns/iter",
            "extra": "iterations: 148718\ncpu: 4710.154117188215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4697.441362011105,
            "unit": "ns/iter",
            "extra": "iterations: 147106\ncpu: 4697.1585115494845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4704.2597082488455,
            "unit": "ns/iter",
            "extra": "iterations: 148894\ncpu: 4704.260749257852 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7220.73561291649,
            "unit": "ns/iter",
            "extra": "iterations: 97240\ncpu: 7220.497737556494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 27144.98243050175,
            "unit": "ns/iter",
            "extra": "iterations: 30109\ncpu: 27143.84403334543 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 122361.88765484704,
            "unit": "ns/iter",
            "extra": "iterations: 7023\ncpu: 122351.98633062841 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 92074.50096297626,
            "unit": "ns/iter",
            "extra": "iterations: 9346\ncpu: 92070.95013909633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 93594.03523508055,
            "unit": "ns/iter",
            "extra": "iterations: 9167\ncpu: 93588.4913275876 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 87319.02971510096,
            "unit": "ns/iter",
            "extra": "iterations: 9793\ncpu: 87314.35719391392 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 208668.30418430184,
            "unit": "ns/iter",
            "extra": "iterations: 4254\ncpu: 208648.377997177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1641436.5485008813,
            "unit": "ns/iter",
            "extra": "iterations: 567\ncpu: 1641312.3456790175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1288795.667128984,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 1288688.9042995966 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1288799.109116071,
            "unit": "ns/iter",
            "extra": "iterations: 724\ncpu: 1288723.0662983463 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1269455.0860655697,
            "unit": "ns/iter",
            "extra": "iterations: 732\ncpu: 1269312.5683060233 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 705204.9650456022,
            "unit": "ns/iter",
            "extra": "iterations: 1316\ncpu: 705179.1033434673 ns\nthreads: 1"
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
        "date": 1702309482713,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15047.031335875814,
            "unit": "ns/iter",
            "extra": "iterations: 46943\ncpu: 15046.871738065316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 150794.00941764447,
            "unit": "ns/iter",
            "extra": "iterations: 5203\ncpu: 150783.10590044208 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 276818.8326959805,
            "unit": "ns/iter",
            "extra": "iterations: 3138\ncpu: 276807.425111536 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 406324.0454332515,
            "unit": "ns/iter",
            "extra": "iterations: 2135\ncpu: 406309.5081967211 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 539775.2584824181,
            "unit": "ns/iter",
            "extra": "iterations: 1621\ncpu: 539742.0727945715 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 542680.1810000086,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 542653.6999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 669153.0409999872,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 669161.9000000006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 757329.4144363416,
            "unit": "ns/iter",
            "extra": "iterations: 1233\ncpu: 756832.522303325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 863372.2516128938,
            "unit": "ns/iter",
            "extra": "iterations: 1085\ncpu: 863340.4608294932 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12046.066599047937,
            "unit": "ns/iter",
            "extra": "iterations: 58169\ncpu: 12045.517371795968 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9818.142551845558,
            "unit": "ns/iter",
            "extra": "iterations: 71125\ncpu: 9817.957117750448 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9907.861400808712,
            "unit": "ns/iter",
            "extra": "iterations: 69517\ncpu: 9907.501762158903 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10029.30911373481,
            "unit": "ns/iter",
            "extra": "iterations: 70893\ncpu: 10028.815256795433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16328.662137253177,
            "unit": "ns/iter",
            "extra": "iterations: 42316\ncpu: 16328.488042348044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 61442.64359762576,
            "unit": "ns/iter",
            "extra": "iterations: 13987\ncpu: 61441.867448344965 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 313912.88998900354,
            "unit": "ns/iter",
            "extra": "iterations: 2727\ncpu: 313900.99009901023 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 251865.26806252406,
            "unit": "ns/iter",
            "extra": "iterations: 3391\ncpu: 251859.5694485406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 270964.4393046482,
            "unit": "ns/iter",
            "extra": "iterations: 3394\ncpu: 270930.76016499713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 247213.3162911656,
            "unit": "ns/iter",
            "extra": "iterations: 3462\ncpu: 247202.7729636051 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 580202.5420251484,
            "unit": "ns/iter",
            "extra": "iterations: 1511\ncpu: 580161.1515552619 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4567706.795121994,
            "unit": "ns/iter",
            "extra": "iterations: 205\ncpu: 4567458.536585369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3689574.8814229392,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3689271.9367588926 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3678384.916995969,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3678153.7549407165 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3703535.2579364725,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3703348.4126984114 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2125467.662844028,
            "unit": "ns/iter",
            "extra": "iterations: 436\ncpu: 2125310.5504587125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7687.483026252316,
            "unit": "ns/iter",
            "extra": "iterations: 90964\ncpu: 7687.221318323733 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 95302.51132180983,
            "unit": "ns/iter",
            "extra": "iterations: 8965\ncpu: 95297.92526491896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 185053.42409485133,
            "unit": "ns/iter",
            "extra": "iterations: 4723\ncpu: 185048.1897099297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 273058.53144653636,
            "unit": "ns/iter",
            "extra": "iterations: 3180\ncpu: 273037.389937106 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 363462.8738589133,
            "unit": "ns/iter",
            "extra": "iterations: 2410\ncpu: 363440.0829875526 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 449156.79684095137,
            "unit": "ns/iter",
            "extra": "iterations: 1836\ncpu: 449133.7145969485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 537094.629331685,
            "unit": "ns/iter",
            "extra": "iterations: 1616\ncpu: 537062.6856435635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 501645.82700000436,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 501641.90000000276 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 572523.6739999957,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 572530.7000000016 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5889.229367332476,
            "unit": "ns/iter",
            "extra": "iterations: 118356\ncpu: 5889.012808814109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4765.519163550278,
            "unit": "ns/iter",
            "extra": "iterations: 147337\ncpu: 4765.40923189694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4786.26507998816,
            "unit": "ns/iter",
            "extra": "iterations: 145209\ncpu: 4786.1998911913115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4804.014777346055,
            "unit": "ns/iter",
            "extra": "iterations: 145899\ncpu: 4803.785495445439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8566.46865927598,
            "unit": "ns/iter",
            "extra": "iterations: 81635\ncpu: 8566.315918417393 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 45697.222990158814,
            "unit": "ns/iter",
            "extra": "iterations: 18086\ncpu: 45695.980316266534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 195727.25028597846,
            "unit": "ns/iter",
            "extra": "iterations: 4371\ncpu: 195720.2013269281 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 160564.20869239583,
            "unit": "ns/iter",
            "extra": "iterations: 5338\ncpu: 160560.43461970732 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 158865.92846525105,
            "unit": "ns/iter",
            "extra": "iterations: 5382\ncpu: 158863.60089186172 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 158739.7346068253,
            "unit": "ns/iter",
            "extra": "iterations: 5392\ncpu: 158731.50964391607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 365068.41492036957,
            "unit": "ns/iter",
            "extra": "iterations: 2386\ncpu: 365062.8667225485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2898489.2198142167,
            "unit": "ns/iter",
            "extra": "iterations: 323\ncpu: 2898395.046439621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2389416.9005102245,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2389347.4489795845 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2383789.374359005,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2383709.743589745 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2398806.219638263,
            "unit": "ns/iter",
            "extra": "iterations: 387\ncpu: 2398793.798449624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1411400.2583586609,
            "unit": "ns/iter",
            "extra": "iterations: 658\ncpu: 1411393.4650455904 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2329208.752525222,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2329034.343434344 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6870.8842783378595,
            "unit": "ns/iter",
            "extra": "iterations: 101675\ncpu: 6870.78436193758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 59327.31139760459,
            "unit": "ns/iter",
            "extra": "iterations: 14117\ncpu: 59324.86363958341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 91321.66542275317,
            "unit": "ns/iter",
            "extra": "iterations: 9379\ncpu: 91319.33041902141 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 132582.66610273768,
            "unit": "ns/iter",
            "extra": "iterations: 6502\ncpu: 132578.97569978374 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 174776.4087166123,
            "unit": "ns/iter",
            "extra": "iterations: 4979\ncpu: 174770.737095803 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 216303.22562952244,
            "unit": "ns/iter",
            "extra": "iterations: 4011\ncpu: 216297.60658189908 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 258069.83343230444,
            "unit": "ns/iter",
            "extra": "iterations: 3368\ncpu: 258064.40023752884 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 299660.78563959943,
            "unit": "ns/iter",
            "extra": "iterations: 2869\ncpu: 299649.18089927005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 341119.9140839476,
            "unit": "ns/iter",
            "extra": "iterations: 2549\ncpu: 341110.5531581017 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5730.205811434899,
            "unit": "ns/iter",
            "extra": "iterations: 122345\ncpu: 5729.908864277269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4712.729841391603,
            "unit": "ns/iter",
            "extra": "iterations: 148857\ncpu: 4712.694062086441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4780.598720017312,
            "unit": "ns/iter",
            "extra": "iterations: 146252\ncpu: 4780.541120805184 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4743.068326417946,
            "unit": "ns/iter",
            "extra": "iterations: 148215\ncpu: 4742.923455790527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7529.565973691121,
            "unit": "ns/iter",
            "extra": "iterations: 96925\ncpu: 7509.1483105494 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25342.50515203193,
            "unit": "ns/iter",
            "extra": "iterations: 31638\ncpu: 25342.777672419572 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 115732.63090418285,
            "unit": "ns/iter",
            "extra": "iterations: 7410\ncpu: 115731.28205128147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 91478.83980015025,
            "unit": "ns/iter",
            "extra": "iterations: 9407\ncpu: 91477.50611246853 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 91975.63698850689,
            "unit": "ns/iter",
            "extra": "iterations: 9311\ncpu: 91972.82783804077 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 87202.76953004886,
            "unit": "ns/iter",
            "extra": "iterations: 9767\ncpu: 87201.68936213806 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 213079.09191000406,
            "unit": "ns/iter",
            "extra": "iterations: 4178\ncpu: 213067.7118238373 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1654936.7132742456,
            "unit": "ns/iter",
            "extra": "iterations: 565\ncpu: 1654923.7168141566 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1292331.260083412,
            "unit": "ns/iter",
            "extra": "iterations: 719\ncpu: 1292265.9248957005 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1303466.5818181438,
            "unit": "ns/iter",
            "extra": "iterations: 715\ncpu: 1303457.902097911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1290095.169209456,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 1290080.5825242673 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 713101.552043148,
            "unit": "ns/iter",
            "extra": "iterations: 1297\ncpu: 713108.4040092508 ns\nthreads: 1"
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
        "date": 1702310508577,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15215.151010014444,
            "unit": "ns/iter",
            "extra": "iterations: 46732\ncpu: 15215.128819652486 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 144596.27403764403,
            "unit": "ns/iter",
            "extra": "iterations: 5897\ncpu: 144583.38138036287 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 274987.36717267754,
            "unit": "ns/iter",
            "extra": "iterations: 3162\ncpu: 274974.9525616699 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 402851.03161319665,
            "unit": "ns/iter",
            "extra": "iterations: 2151\ncpu: 402815.6206415621 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 539614.289554065,
            "unit": "ns/iter",
            "extra": "iterations: 1637\ncpu: 539602.8100183264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 538378.1680000083,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 538364.9000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 641527.1269999892,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 641488.4000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 743132.1341365478,
            "unit": "ns/iter",
            "extra": "iterations: 1245\ncpu: 743087.4698795181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 845732.4945155398,
            "unit": "ns/iter",
            "extra": "iterations: 1094\ncpu: 845728.702010969 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12116.79039997233,
            "unit": "ns/iter",
            "extra": "iterations: 57729\ncpu: 12116.717767499844 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9896.72518868205,
            "unit": "ns/iter",
            "extra": "iterations: 70754\ncpu: 9896.189614721441 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10006.044618414167,
            "unit": "ns/iter",
            "extra": "iterations: 62463\ncpu: 10006.178057409976 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9915.622141350066,
            "unit": "ns/iter",
            "extra": "iterations: 70619\ncpu: 9914.804797575714 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16250.725196172318,
            "unit": "ns/iter",
            "extra": "iterations: 42947\ncpu: 16250.383030246605 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 61846.49486251951,
            "unit": "ns/iter",
            "extra": "iterations: 13820\ncpu: 61841.62807525316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 312689.22448979726,
            "unit": "ns/iter",
            "extra": "iterations: 2744\ncpu: 312681.37755102053 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 258164.28318839957,
            "unit": "ns/iter",
            "extra": "iterations: 3450\ncpu: 258145.24637681196 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 247953.8052388239,
            "unit": "ns/iter",
            "extra": "iterations: 3245\ncpu: 247948.93682588535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 243374.7956162856,
            "unit": "ns/iter",
            "extra": "iterations: 3513\ncpu: 243364.21861656685 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 565515.2185897331,
            "unit": "ns/iter",
            "extra": "iterations: 1560\ncpu: 565504.9358974355 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4501440.077294658,
            "unit": "ns/iter",
            "extra": "iterations: 207\ncpu: 4501438.164251193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3742759.768627424,
            "unit": "ns/iter",
            "extra": "iterations: 255\ncpu: 3742616.4705882357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3682451.3976377933,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3682488.1889763707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3666237.4685038873,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3666190.9448818793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2137944.919354857,
            "unit": "ns/iter",
            "extra": "iterations: 434\ncpu: 2137944.2396313315 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7667.262766190877,
            "unit": "ns/iter",
            "extra": "iterations: 91100\ncpu: 7667.153677277734 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 94567.22322791704,
            "unit": "ns/iter",
            "extra": "iterations: 9170\ncpu: 94566.10687022915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 180725.6909578887,
            "unit": "ns/iter",
            "extra": "iterations: 4844\ncpu: 180721.77952105724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 266821.42463234765,
            "unit": "ns/iter",
            "extra": "iterations: 3264\ncpu: 266821.50735294056 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 355904.35990239464,
            "unit": "ns/iter",
            "extra": "iterations: 2459\ncpu: 355903.7413582747 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 439035.6231738081,
            "unit": "ns/iter",
            "extra": "iterations: 1985\ncpu: 439030.52896725445 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 524748.6769323583,
            "unit": "ns/iter",
            "extra": "iterations: 1656\ncpu: 524754.0458937197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 611095.0133146333,
            "unit": "ns/iter",
            "extra": "iterations: 1427\ncpu: 611086.9656622269 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 559430.7450000144,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 559437.4999999943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5832.4070680410105,
            "unit": "ns/iter",
            "extra": "iterations: 120486\ncpu: 5832.216191092781 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4808.343222291813,
            "unit": "ns/iter",
            "extra": "iterations: 145381\ncpu: 4808.397245857452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4833.107848548498,
            "unit": "ns/iter",
            "extra": "iterations: 144944\ncpu: 4833.111408543985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4857.896160250941,
            "unit": "ns/iter",
            "extra": "iterations: 144723\ncpu: 4857.768979360583 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8513.756722944408,
            "unit": "ns/iter",
            "extra": "iterations: 82330\ncpu: 8513.54548767155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 47269.114235200395,
            "unit": "ns/iter",
            "extra": "iterations: 17534\ncpu: 47267.39477586401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 192788.4393050509,
            "unit": "ns/iter",
            "extra": "iterations: 4432\ncpu: 192790.45577617254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 155026.4939519753,
            "unit": "ns/iter",
            "extra": "iterations: 5539\ncpu: 155025.07672865057 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 155249.63669194735,
            "unit": "ns/iter",
            "extra": "iterations: 5538\ncpu: 155251.46262188433 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 154622.81238714253,
            "unit": "ns/iter",
            "extra": "iterations: 5538\ncpu: 154618.4182015174 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 357298.7926380241,
            "unit": "ns/iter",
            "extra": "iterations: 2445\ncpu: 357300.163599181 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2867122.7423312115,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2867015.0306748375 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2355950.589420618,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2355948.1108312425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2372879.829081563,
            "unit": "ns/iter",
            "extra": "iterations: 392\ncpu: 2372790.306122449 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2377191.547314529,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2377218.158567774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1413339.7564296606,
            "unit": "ns/iter",
            "extra": "iterations: 661\ncpu: 1413335.400907713 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2298064.5851852004,
            "unit": "ns/iter",
            "extra": "iterations: 405\ncpu: 2297980.0000000084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6832.913330340252,
            "unit": "ns/iter",
            "extra": "iterations: 102458\ncpu: 6832.791973296406 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 57937.4054054061,
            "unit": "ns/iter",
            "extra": "iterations: 14097\ncpu: 57934.844293111986 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 90920.79131815977,
            "unit": "ns/iter",
            "extra": "iterations: 9445\ncpu: 90921.73636844938 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 131983.08615384434,
            "unit": "ns/iter",
            "extra": "iterations: 6500\ncpu: 131976.66153846163 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 174378.82560706005,
            "unit": "ns/iter",
            "extra": "iterations: 4983\ncpu: 174379.2093116589 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 216080.8304576142,
            "unit": "ns/iter",
            "extra": "iterations: 3999\ncpu: 216071.79294823625 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 256782.3186390397,
            "unit": "ns/iter",
            "extra": "iterations: 3380\ncpu: 256782.86982248467 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 300111.40261978836,
            "unit": "ns/iter",
            "extra": "iterations: 2901\ncpu: 300096.2082040677 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 341445.4138878175,
            "unit": "ns/iter",
            "extra": "iterations: 2549\ncpu: 341448.4111416229 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5825.225772843358,
            "unit": "ns/iter",
            "extra": "iterations: 119979\ncpu: 5825.066053226015 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4776.797760408764,
            "unit": "ns/iter",
            "extra": "iterations: 146366\ncpu: 4776.845032316274 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4756.29856940035,
            "unit": "ns/iter",
            "extra": "iterations: 146512\ncpu: 4756.286174511236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4665.525452435548,
            "unit": "ns/iter",
            "extra": "iterations: 149966\ncpu: 4665.438832802036 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7255.463258221714,
            "unit": "ns/iter",
            "extra": "iterations: 96212\ncpu: 7255.428636760456 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25684.109023266737,
            "unit": "ns/iter",
            "extra": "iterations: 31718\ncpu: 25684.40633078991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 117199.05137313412,
            "unit": "ns/iter",
            "extra": "iterations: 7319\ncpu: 117193.22311791262 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 92151.83446565123,
            "unit": "ns/iter",
            "extra": "iterations: 9273\ncpu: 92152.77687911064 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 92608.48855623936,
            "unit": "ns/iter",
            "extra": "iterations: 9219\ncpu: 92605.39104024247 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 86895.88202304495,
            "unit": "ns/iter",
            "extra": "iterations: 9807\ncpu: 86896.65545018941 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 204286.57358663355,
            "unit": "ns/iter",
            "extra": "iterations: 4369\ncpu: 204277.2487983518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1625311.0840630096,
            "unit": "ns/iter",
            "extra": "iterations: 571\ncpu: 1625326.6199649707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1289266.0418409891,
            "unit": "ns/iter",
            "extra": "iterations: 717\ncpu: 1289205.9972106111 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1294242.859331423,
            "unit": "ns/iter",
            "extra": "iterations: 718\ncpu: 1294228.272980483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1276703.3471073774,
            "unit": "ns/iter",
            "extra": "iterations: 726\ncpu: 1276606.4738291993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 716821.71350506,
            "unit": "ns/iter",
            "extra": "iterations: 1281\ncpu: 716817.7985948563 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}