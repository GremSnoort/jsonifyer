window.BENCHMARK_DATA = {
  "lastUpdate": 1702377486775,
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
        "date": 1702310707331,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 14925.689087488383,
            "unit": "ns/iter",
            "extra": "iterations: 46772\ncpu: 14924.905926622769 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 147590.61566173896,
            "unit": "ns/iter",
            "extra": "iterations: 5274\ncpu: 147577.89154342058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 274014.09977966815,
            "unit": "ns/iter",
            "extra": "iterations: 3177\ncpu: 273997.7651872836 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 402035.2330547831,
            "unit": "ns/iter",
            "extra": "iterations: 2154\ncpu: 401915.8310120707 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 534760.8670731683,
            "unit": "ns/iter",
            "extra": "iterations: 1640\ncpu: 534727.6829268297 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 545015.1760000209,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 544948.7999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 640647.4742589775,
            "unit": "ns/iter",
            "extra": "iterations: 1282\ncpu: 640624.2589703586 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 744243.5361155866,
            "unit": "ns/iter",
            "extra": "iterations: 1246\ncpu: 744205.7784911717 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 846183.0794520627,
            "unit": "ns/iter",
            "extra": "iterations: 1095\ncpu: 846128.8584474877 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 11933.030937265807,
            "unit": "ns/iter",
            "extra": "iterations: 54659\ncpu: 11932.444794086985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9734.826853154791,
            "unit": "ns/iter",
            "extra": "iterations: 71783\ncpu: 9733.934218408265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9946.526662908673,
            "unit": "ns/iter",
            "extra": "iterations: 70960\ncpu: 9945.772266065369 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 9910.144892242046,
            "unit": "ns/iter",
            "extra": "iterations: 71039\ncpu: 9909.323047903286 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16139.922688378312,
            "unit": "ns/iter",
            "extra": "iterations: 43357\ncpu: 16139.56685195012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 61420.13910099363,
            "unit": "ns/iter",
            "extra": "iterations: 13882\ncpu: 61419.03904336552 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 306668.75815120124,
            "unit": "ns/iter",
            "extra": "iterations: 2791\ncpu: 306661.1967036901 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 245775.315592632,
            "unit": "ns/iter",
            "extra": "iterations: 3476\ncpu: 245756.18527042595 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 254860.84456140522,
            "unit": "ns/iter",
            "extra": "iterations: 2850\ncpu: 254848.42105263128 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 243327.78205127994,
            "unit": "ns/iter",
            "extra": "iterations: 3510\ncpu: 243323.36182336241 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 571830.1420195475,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 571816.5472312716 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4570636.936585415,
            "unit": "ns/iter",
            "extra": "iterations: 205\ncpu: 4570405.853658547 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3793783.936758851,
            "unit": "ns/iter",
            "extra": "iterations: 253\ncpu: 3793715.810276674 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3678624.570866202,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3678557.0866141743 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3690780.0674602943,
            "unit": "ns/iter",
            "extra": "iterations: 252\ncpu: 3690688.4920634907 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2136377.4413792915,
            "unit": "ns/iter",
            "extra": "iterations: 435\ncpu: 2136312.1839080425 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7592.814919521009,
            "unit": "ns/iter",
            "extra": "iterations: 92322\ncpu: 7592.618227508083 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 92743.53187574408,
            "unit": "ns/iter",
            "extra": "iterations: 9239\ncpu: 92741.70364758071 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 178837.63735584967,
            "unit": "ns/iter",
            "extra": "iterations: 4856\ncpu: 178831.9604612855 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 264990.2345791507,
            "unit": "ns/iter",
            "extra": "iterations: 3291\ncpu: 264985.050136737 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 350187.73741442483,
            "unit": "ns/iter",
            "extra": "iterations: 2483\ncpu: 350179.29923479777 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 439016.888999987,
            "unit": "ns/iter",
            "extra": "iterations: 2000\ncpu: 439009.0999999998 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 520652.30979915045,
            "unit": "ns/iter",
            "extra": "iterations: 1643\ncpu: 520647.2915398665 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 606038.4265831547,
            "unit": "ns/iter",
            "extra": "iterations: 1437\ncpu: 606028.1141266527 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 554590.5419999997,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 554578.7000000004 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5799.130409565142,
            "unit": "ns/iter",
            "extra": "iterations: 120689\ncpu: 5799.030566165915 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4700.128206161399,
            "unit": "ns/iter",
            "extra": "iterations: 148893\ncpu: 4700.093355631204 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4721.723105845476,
            "unit": "ns/iter",
            "extra": "iterations: 147876\ncpu: 4721.6194649571435 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4770.53736160469,
            "unit": "ns/iter",
            "extra": "iterations: 146862\ncpu: 4770.434829976439 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8446.949518941195,
            "unit": "ns/iter",
            "extra": "iterations: 82942\ncpu: 8446.540956330913 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 45769.83506522164,
            "unit": "ns/iter",
            "extra": "iterations: 18092\ncpu: 45768.92549193012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 191237.4722843086,
            "unit": "ns/iter",
            "extra": "iterations: 4474\ncpu: 191234.10818059865 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 155785.0829845304,
            "unit": "ns/iter",
            "extra": "iterations: 5495\ncpu: 155782.43858052843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 154360.23523054546,
            "unit": "ns/iter",
            "extra": "iterations: 5552\ncpu: 154356.19596541816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 155540.14817505193,
            "unit": "ns/iter",
            "extra": "iterations: 5507\ncpu: 155537.33430179654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 362846.3435018846,
            "unit": "ns/iter",
            "extra": "iterations: 2393\ncpu: 362843.083994987 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2851547.113496918,
            "unit": "ns/iter",
            "extra": "iterations: 326\ncpu: 2851301.5337423226 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2348936.2462311676,
            "unit": "ns/iter",
            "extra": "iterations: 398\ncpu: 2348826.8844221253 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2344684.513853897,
            "unit": "ns/iter",
            "extra": "iterations: 397\ncpu: 2344512.0906800916 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2351340.5984848156,
            "unit": "ns/iter",
            "extra": "iterations: 396\ncpu: 2351211.616161614 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1425422.512012046,
            "unit": "ns/iter",
            "extra": "iterations: 666\ncpu: 1425321.1711711686 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2285760.4303178582,
            "unit": "ns/iter",
            "extra": "iterations: 409\ncpu: 2285661.61369193 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 6893.100618219545,
            "unit": "ns/iter",
            "extra": "iterations: 101582\ncpu: 6892.500639877121 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50427.56569999937,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50425.34999999973 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 92974.2486709347,
            "unit": "ns/iter",
            "extra": "iterations: 9217\ncpu: 92972.58327004447 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 134949.4926332279,
            "unit": "ns/iter",
            "extra": "iterations: 6380\ncpu: 134945.42319749252 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 178300.90380678995,
            "unit": "ns/iter",
            "extra": "iterations: 4886\ncpu: 178294.65820712273 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 220207.76723479366,
            "unit": "ns/iter",
            "extra": "iterations: 3931\ncpu: 220193.23327397706 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 262981.2120569518,
            "unit": "ns/iter",
            "extra": "iterations: 3301\ncpu: 262963.95031808683 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 306435.0594613487,
            "unit": "ns/iter",
            "extra": "iterations: 2859\ncpu: 306418.32808674336 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 351285.05734766537,
            "unit": "ns/iter",
            "extra": "iterations: 2511\ncpu: 351262.6045400246 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5790.657944034221,
            "unit": "ns/iter",
            "extra": "iterations: 120109\ncpu: 5790.3970560074895 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4759.995265978212,
            "unit": "ns/iter",
            "extra": "iterations: 148922\ncpu: 4759.509676206357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4777.263483234989,
            "unit": "ns/iter",
            "extra": "iterations: 145273\ncpu: 4777.0184411418495 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4776.509873665224,
            "unit": "ns/iter",
            "extra": "iterations: 141133\ncpu: 4776.476089929341 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7255.525029970196,
            "unit": "ns/iter",
            "extra": "iterations: 96764\ncpu: 7255.116572279007 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 25959.416884192746,
            "unit": "ns/iter",
            "extra": "iterations: 31414\ncpu: 25957.347042719848 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 113206.24098772075,
            "unit": "ns/iter",
            "extra": "iterations: 7573\ncpu: 113200.33012016426 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 89828.00839630606,
            "unit": "ns/iter",
            "extra": "iterations: 9528\ncpu: 89824.77959697759 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 90199.0131022824,
            "unit": "ns/iter",
            "extra": "iterations: 9464\ncpu: 90197.1365173283 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 87873.67772414803,
            "unit": "ns/iter",
            "extra": "iterations: 9737\ncpu: 87871.56208277722 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 205767.27731481876,
            "unit": "ns/iter",
            "extra": "iterations: 4320\ncpu: 205762.98611111034 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1694905.539305297,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1694855.575868378 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1338607.7264833185,
            "unit": "ns/iter",
            "extra": "iterations: 691\ncpu: 1338565.1230101292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1337895.1280575662,
            "unit": "ns/iter",
            "extra": "iterations: 695\ncpu: 1337853.237410084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1334058.332378212,
            "unit": "ns/iter",
            "extra": "iterations: 698\ncpu: 1334028.080229236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 738431.7197452158,
            "unit": "ns/iter",
            "extra": "iterations: 1256\ncpu: 738374.4426751536 ns\nthreads: 1"
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
          "id": "a4f22929864476e2c359efd42cd068b198aa88a8",
          "message": "Add more tests",
          "timestamp": "2023-12-12T01:57:35+03:00",
          "tree_id": "dacbda4737ce1572c6cafd7ff0a0aacf9b7c236d",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a4f22929864476e2c359efd42cd068b198aa88a8"
        },
        "date": 1702335660756,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15640.889542920582,
            "unit": "ns/iter",
            "extra": "iterations: 44850\ncpu: 15639.509476031215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 147958.82802101556,
            "unit": "ns/iter",
            "extra": "iterations: 5710\ncpu: 147952.3817863398 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 280168.6411003208,
            "unit": "ns/iter",
            "extra": "iterations: 3090\ncpu: 280170.64724919095 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 410506.988625591,
            "unit": "ns/iter",
            "extra": "iterations: 2110\ncpu: 410489.57345971564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 554043.8191489356,
            "unit": "ns/iter",
            "extra": "iterations: 1598\ncpu: 553978.785982478 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 549385.7109999851,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549377.1000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 659523.527999994,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 659478.9999999993 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 760902.7056883755,
            "unit": "ns/iter",
            "extra": "iterations: 1213\ncpu: 760831.8219291018 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 866964.8028037299,
            "unit": "ns/iter",
            "extra": "iterations: 1070\ncpu: 866931.2149532709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12019.090782698142,
            "unit": "ns/iter",
            "extra": "iterations: 58260\ncpu: 12018.118777892201 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 9977.172313250285,
            "unit": "ns/iter",
            "extra": "iterations: 70308\ncpu: 9976.695397394316 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9931.756447885546,
            "unit": "ns/iter",
            "extra": "iterations: 70527\ncpu: 9931.711259517631 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10035.456483431255,
            "unit": "ns/iter",
            "extra": "iterations: 69801\ncpu: 10034.990902709125 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16283.644094561025,
            "unit": "ns/iter",
            "extra": "iterations: 43062\ncpu: 16283.052343133188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 62695.23827667045,
            "unit": "ns/iter",
            "extra": "iterations: 13648\ncpu: 62691.3027549823 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 335666.61520376714,
            "unit": "ns/iter",
            "extra": "iterations: 2552\ncpu: 335652.82131661446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 266464.8900928845,
            "unit": "ns/iter",
            "extra": "iterations: 3230\ncpu: 266445.2941176472 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 263776.2351135663,
            "unit": "ns/iter",
            "extra": "iterations: 3258\ncpu: 263765.9914057709 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 260720.25511138255,
            "unit": "ns/iter",
            "extra": "iterations: 3277\ncpu: 260713.36588342927 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 570003.8286644891,
            "unit": "ns/iter",
            "extra": "iterations: 1535\ncpu: 569965.1465798058 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4590185.990099062,
            "unit": "ns/iter",
            "extra": "iterations: 202\ncpu: 4589964.851485159 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3737124.2880000183,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3736801.999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3733408.1204818976,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3733237.7510040146 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3721066.2891567266,
            "unit": "ns/iter",
            "extra": "iterations: 249\ncpu: 3720716.4658634453 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2162053.8793503307,
            "unit": "ns/iter",
            "extra": "iterations: 431\ncpu: 2161938.2830626415 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7689.520578908733,
            "unit": "ns/iter",
            "extra": "iterations: 91137\ncpu: 7689.588202376642 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 96003.64487553164,
            "unit": "ns/iter",
            "extra": "iterations: 8918\ncpu: 96003.26306346724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 186675.04125903687,
            "unit": "ns/iter",
            "extra": "iterations: 4702\ncpu: 186673.90472139523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 274733.14403031877,
            "unit": "ns/iter",
            "extra": "iterations: 3166\ncpu: 274723.53126974124 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 363563.7311872934,
            "unit": "ns/iter",
            "extra": "iterations: 2392\ncpu: 363562.12374581955 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 451579.54974093364,
            "unit": "ns/iter",
            "extra": "iterations: 1930\ncpu: 451550.984455956 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 539953.9404096875,
            "unit": "ns/iter",
            "extra": "iterations: 1611\ncpu: 539939.975170701 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 504475.9889999852,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 504459.40000000177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 578247.982000022,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 578253.4000000012 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5896.621821739146,
            "unit": "ns/iter",
            "extra": "iterations: 118579\ncpu: 5896.678163924483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4841.085145937879,
            "unit": "ns/iter",
            "extra": "iterations: 145233\ncpu: 4841.129770782142 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4827.826559140611,
            "unit": "ns/iter",
            "extra": "iterations: 145577\ncpu: 4827.607383034395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4836.131008801702,
            "unit": "ns/iter",
            "extra": "iterations: 144746\ncpu: 4836.098406864443 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8883.484114573865,
            "unit": "ns/iter",
            "extra": "iterations: 82497\ncpu: 8883.04301974624 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 46353.30039303663,
            "unit": "ns/iter",
            "extra": "iterations: 17810\ncpu: 46352.26277372236 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 204462.23573141903,
            "unit": "ns/iter",
            "extra": "iterations: 4170\ncpu: 204450.33573141505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 163429.74837848195,
            "unit": "ns/iter",
            "extra": "iterations: 5242\ncpu: 163428.9011827535 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 160626.5723659562,
            "unit": "ns/iter",
            "extra": "iterations: 5334\ncpu: 160618.71016122933 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 161955.15114735413,
            "unit": "ns/iter",
            "extra": "iterations: 5273\ncpu: 161954.31443201264 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 365457.5823157924,
            "unit": "ns/iter",
            "extra": "iterations: 2375\ncpu: 365435.0315789483 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2912496.6477987124,
            "unit": "ns/iter",
            "extra": "iterations: 318\ncpu: 2912288.679245296 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2413261.352331548,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2413085.233160607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2409038.33678751,
            "unit": "ns/iter",
            "extra": "iterations: 386\ncpu: 2408863.212435231 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2424414.172323862,
            "unit": "ns/iter",
            "extra": "iterations: 383\ncpu: 2424307.0496083503 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1428576.823348671,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1428453.3026113724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2356001.7769230586,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2355869.743589741 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7018.829966734431,
            "unit": "ns/iter",
            "extra": "iterations: 99804\ncpu: 7018.334936475528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 50970.380200004685,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 50965.439999999515 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 93974.48013136191,
            "unit": "ns/iter",
            "extra": "iterations: 9135\ncpu: 93970.60755336602 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 136372.9729170007,
            "unit": "ns/iter",
            "extra": "iterations: 6277\ncpu: 136366.41707822116 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 180023.87205667788,
            "unit": "ns/iter",
            "extra": "iterations: 4799\ncpu: 180015.7949572816 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 223515.30320247746,
            "unit": "ns/iter",
            "extra": "iterations: 3872\ncpu: 223503.66735537254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 264852.69209644303,
            "unit": "ns/iter",
            "extra": "iterations: 3277\ncpu: 264827.12847116194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 308776.6474769144,
            "unit": "ns/iter",
            "extra": "iterations: 2814\ncpu: 308763.8592750538 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 351145.9027441517,
            "unit": "ns/iter",
            "extra": "iterations: 2478\ncpu: 351124.4552058104 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5870.637887980019,
            "unit": "ns/iter",
            "extra": "iterations: 119336\ncpu: 5870.376080981452 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4780.685397934461,
            "unit": "ns/iter",
            "extra": "iterations: 146582\ncpu: 4780.257466810395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4767.437732291159,
            "unit": "ns/iter",
            "extra": "iterations: 146368\ncpu: 4767.483329689629 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4766.250008515149,
            "unit": "ns/iter",
            "extra": "iterations: 146799\ncpu: 4765.969795434557 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7231.5934724826875,
            "unit": "ns/iter",
            "extra": "iterations: 97066\ncpu: 7231.657841056555 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26565.535211727576,
            "unit": "ns/iter",
            "extra": "iterations: 30629\ncpu: 26564.886218942385 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 129798.67629270906,
            "unit": "ns/iter",
            "extra": "iterations: 6614\ncpu: 129794.57211974628 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 100486.80288461548,
            "unit": "ns/iter",
            "extra": "iterations: 8528\ncpu: 100481.15619136949 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 101187.66232536416,
            "unit": "ns/iter",
            "extra": "iterations: 8446\ncpu: 101182.44139237521 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 97549.9033623067,
            "unit": "ns/iter",
            "extra": "iterations: 8744\ncpu: 97542.48627630428 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 203059.6104014538,
            "unit": "ns/iter",
            "extra": "iterations: 4384\ncpu: 203053.19343065802 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1674657.856115106,
            "unit": "ns/iter",
            "extra": "iterations: 556\ncpu: 1674545.8633093366 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1311630.1861777436,
            "unit": "ns/iter",
            "extra": "iterations: 709\ncpu: 1311570.662905505 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1315375.6973125464,
            "unit": "ns/iter",
            "extra": "iterations: 707\ncpu: 1315269.8727015518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1297682.48804502,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1297615.049226446 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 726122.0578125282,
            "unit": "ns/iter",
            "extra": "iterations: 1280\ncpu: 726061.328125005 ns\nthreads: 1"
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
          "id": "a2aa24ad8dcca377204bcb80d394583f3bf05790",
          "message": "Improve SBIND",
          "timestamp": "2023-12-12T05:15:46+03:00",
          "tree_id": "3567c5d440461097db599cb58c98b436a9cde0d7",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/a2aa24ad8dcca377204bcb80d394583f3bf05790"
        },
        "date": 1702347564583,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 15209.683192763167,
            "unit": "ns/iter",
            "extra": "iterations: 45766\ncpu: 15209.603198881265 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 148236.08377147265,
            "unit": "ns/iter",
            "extra": "iterations: 5706\ncpu: 148230.89730108657 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 280161.54970949166,
            "unit": "ns/iter",
            "extra": "iterations: 3098\ncpu: 280157.5532601678 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 411204.23266855825,
            "unit": "ns/iter",
            "extra": "iterations: 2106\ncpu: 411187.93922127254 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 548188.4619257328,
            "unit": "ns/iter",
            "extra": "iterations: 1589\ncpu: 548158.7791063563 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 549776.0940000091,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 549749.3999999997 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 656601.561048687,
            "unit": "ns/iter",
            "extra": "iterations: 1335\ncpu: 656606.8913857676 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 762949.0502057736,
            "unit": "ns/iter",
            "extra": "iterations: 1215\ncpu: 762925.1851851849 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 867111.1932457808,
            "unit": "ns/iter",
            "extra": "iterations: 1066\ncpu: 867065.103189493 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12140.757962559941,
            "unit": "ns/iter",
            "extra": "iterations: 57425\ncpu: 12140.306486721813 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10043.226285131072,
            "unit": "ns/iter",
            "extra": "iterations: 70557\ncpu: 10042.212679110504 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 9961.703655798005,
            "unit": "ns/iter",
            "extra": "iterations: 70354\ncpu: 9961.287204707633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10119.955957763555,
            "unit": "ns/iter",
            "extra": "iterations: 69229\ncpu: 10119.782172211068 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16307.301504022289,
            "unit": "ns/iter",
            "extra": "iterations: 42885\ncpu: 16307.195989273634 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 63668.53480169878,
            "unit": "ns/iter",
            "extra": "iterations: 13893\ncpu: 63667.13452817972 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 321862.8605787367,
            "unit": "ns/iter",
            "extra": "iterations: 2661\ncpu: 321855.16723036434 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 261660.15937115482,
            "unit": "ns/iter",
            "extra": "iterations: 3244\ncpu: 261650.73982737333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 260672.55592909572,
            "unit": "ns/iter",
            "extra": "iterations: 3272\ncpu: 260667.69559902197 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 258932.0476479526,
            "unit": "ns/iter",
            "extra": "iterations: 3295\ncpu: 258926.52503793655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 559170.8246505581,
            "unit": "ns/iter",
            "extra": "iterations: 1574\ncpu: 559157.0520965694 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4587649.674876783,
            "unit": "ns/iter",
            "extra": "iterations: 203\ncpu: 4587638.423645322 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3774942.1666666516,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3774797.1544715324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3779466.3943089293,
            "unit": "ns/iter",
            "extra": "iterations: 246\ncpu: 3779353.252032533 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3770732.6032388597,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3770582.9959514155 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2168668.126168201,
            "unit": "ns/iter",
            "extra": "iterations: 428\ncpu: 2168551.6355140107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3660643.299212559,
            "unit": "ns/iter",
            "extra": "iterations: 254\ncpu: 3660478.7401574766 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7805.979383507011,
            "unit": "ns/iter",
            "extra": "iterations: 89928\ncpu: 7805.87803576194 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 95007.80462839537,
            "unit": "ns/iter",
            "extra": "iterations: 8988\ncpu: 95002.7369826436 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 184255.195305954,
            "unit": "ns/iter",
            "extra": "iterations: 4772\ncpu: 184240.48616932085 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 271902.6237688786,
            "unit": "ns/iter",
            "extra": "iterations: 3046\ncpu: 271904.7931713724 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 359105.3256102584,
            "unit": "ns/iter",
            "extra": "iterations: 2417\ncpu: 359095.4075299961 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 446946.6378073779,
            "unit": "ns/iter",
            "extra": "iterations: 1952\ncpu: 446928.0737704946 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 533991.3323133414,
            "unit": "ns/iter",
            "extra": "iterations: 1634\ncpu: 533978.4577723357 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 620625.640057022,
            "unit": "ns/iter",
            "extra": "iterations: 1403\ncpu: 620604.2052744149 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 569387.5900000194,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 569384.0999999936 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5918.070074007425,
            "unit": "ns/iter",
            "extra": "iterations: 117961\ncpu: 5917.759259416225 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4865.0354679801285,
            "unit": "ns/iter",
            "extra": "iterations: 144130\ncpu: 4865.0801359883235 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4796.4129231993265,
            "unit": "ns/iter",
            "extra": "iterations: 145676\ncpu: 4796.45995222275 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4860.58784112197,
            "unit": "ns/iter",
            "extra": "iterations: 144010\ncpu: 4860.286785639891 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8483.440052096928,
            "unit": "ns/iter",
            "extra": "iterations: 82922\ncpu: 8483.515834157364 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 45672.8350356099,
            "unit": "ns/iter",
            "extra": "iterations: 18113\ncpu: 45670.8331032958 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 190685.95122494566,
            "unit": "ns/iter",
            "extra": "iterations: 4490\ncpu: 190678.7973273947 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 157899.0738898118,
            "unit": "ns/iter",
            "extra": "iterations: 5427\ncpu: 157891.0263497324 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 156116.55819044268,
            "unit": "ns/iter",
            "extra": "iterations: 5482\ncpu: 156111.38270704067 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 157055.54465431836,
            "unit": "ns/iter",
            "extra": "iterations: 5453\ncpu: 157046.5615257654 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 348174.15713134833,
            "unit": "ns/iter",
            "extra": "iterations: 2482\ncpu: 348159.95165189175 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2909207.9875389864,
            "unit": "ns/iter",
            "extra": "iterations: 321\ncpu: 2908952.64797507 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2403644.500000035,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2403550.2577319606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2392104.0308483434,
            "unit": "ns/iter",
            "extra": "iterations: 389\ncpu: 2392002.8277634843 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2398300.932989672,
            "unit": "ns/iter",
            "extra": "iterations: 388\ncpu: 2398257.474226815 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1431271.235384595,
            "unit": "ns/iter",
            "extra": "iterations: 650\ncpu: 1431190.4615384645 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2333178.0075187697,
            "unit": "ns/iter",
            "extra": "iterations: 399\ncpu: 2333066.416040091 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7051.534317194028,
            "unit": "ns/iter",
            "extra": "iterations: 98930\ncpu: 7051.601132113594 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 52113.56880000153,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 52110.06999999981 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 95787.17136465255,
            "unit": "ns/iter",
            "extra": "iterations: 8940\ncpu: 95779.42953020148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 139207.29711787507,
            "unit": "ns/iter",
            "extra": "iterations: 6176\ncpu: 139201.7163212431 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 183526.66434599084,
            "unit": "ns/iter",
            "extra": "iterations: 4740\ncpu: 183515.40084388084 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 227000.7020942429,
            "unit": "ns/iter",
            "extra": "iterations: 3820\ncpu: 226992.38219895292 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 270046.1573208702,
            "unit": "ns/iter",
            "extra": "iterations: 3210\ncpu: 270033.6760124611 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 314212.40317919647,
            "unit": "ns/iter",
            "extra": "iterations: 2768\ncpu: 314204.5881502899 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 357243.475799847,
            "unit": "ns/iter",
            "extra": "iterations: 2438\ncpu: 357237.07957342145 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 5980.893302075404,
            "unit": "ns/iter",
            "extra": "iterations: 118156\ncpu: 5980.87020549109 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4879.574595843066,
            "unit": "ns/iter",
            "extra": "iterations: 142890\ncpu: 4879.615788368663 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4861.409841002868,
            "unit": "ns/iter",
            "extra": "iterations: 142770\ncpu: 4861.241157105793 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4922.7195205911585,
            "unit": "ns/iter",
            "extra": "iterations: 142342\ncpu: 4922.477554059943 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7410.893925619035,
            "unit": "ns/iter",
            "extra": "iterations: 94594\ncpu: 7410.272321711758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26298.77718841382,
            "unit": "ns/iter",
            "extra": "iterations: 31107\ncpu: 26297.98437650695 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 129329.273523639,
            "unit": "ns/iter",
            "extra": "iterations: 6621\ncpu: 129321.67346322307 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 103482.47263501181,
            "unit": "ns/iter",
            "extra": "iterations: 8277\ncpu: 103479.30409568564 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 103260.26851403438,
            "unit": "ns/iter",
            "extra": "iterations: 8264\ncpu: 103257.187802518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 101068.92494403222,
            "unit": "ns/iter",
            "extra": "iterations: 8487\ncpu: 101064.41616590045 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 206850.25471917578,
            "unit": "ns/iter",
            "extra": "iterations: 4291\ncpu: 206843.7427173133 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1702567.946983558,
            "unit": "ns/iter",
            "extra": "iterations: 547\ncpu: 1702490.85923218 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1367902.3636363856,
            "unit": "ns/iter",
            "extra": "iterations: 682\ncpu: 1367815.8357771148 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1368912.2621502187,
            "unit": "ns/iter",
            "extra": "iterations: 679\ncpu: 1368863.917525758 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1354023.3522561544,
            "unit": "ns/iter",
            "extra": "iterations: 687\ncpu: 1353910.6259097485 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 735826.6965408849,
            "unit": "ns/iter",
            "extra": "iterations: 1272\ncpu: 735798.4276729508 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1308279.1265822756,
            "unit": "ns/iter",
            "extra": "iterations: 711\ncpu: 1308247.2573839698 ns\nthreads: 1"
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
          "id": "d824467ac31a85d06f63e9a517ac86072b088bd6",
          "message": "try build gcc 12 2",
          "timestamp": "2023-12-12T13:34:04+03:00",
          "tree_id": "0a304358dc9ec1fc676e609a6fe50a05eed68bd2",
          "url": "https://github.com/GremSnoort/jsonifyer/commit/d824467ac31a85d06f63e9a517ac86072b088bd6"
        },
        "date": 1702377485335,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_process",
            "value": 16217.896550960551,
            "unit": "ns/iter",
            "extra": "iterations: 45143\ncpu: 16216.901845247325 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_process",
            "value": 150830.28346317232,
            "unit": "ns/iter",
            "extra": "iterations: 5648\ncpu: 150815.22662889518 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_process",
            "value": 286116.693870867,
            "unit": "ns/iter",
            "extra": "iterations: 3051\ncpu: 286099.08226810885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_process",
            "value": 416480.86383390083,
            "unit": "ns/iter",
            "extra": "iterations: 2071\ncpu: 416456.0115886047 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_process",
            "value": 552691.4270372739,
            "unit": "ns/iter",
            "extra": "iterations: 1583\ncpu: 552639.671509792 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_process",
            "value": 557095.5749999769,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 557041.1000000001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_process",
            "value": 663710.1342426583,
            "unit": "ns/iter",
            "extra": "iterations: 1393\ncpu: 663661.1629576454 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_process",
            "value": 768441.70166666,
            "unit": "ns/iter",
            "extra": "iterations: 1200\ncpu: 768426.8333333333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_process",
            "value": 874784.9302544815,
            "unit": "ns/iter",
            "extra": "iterations: 1061\ncpu: 874706.5975494825 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_process",
            "value": 12299.38573604874,
            "unit": "ns/iter",
            "extra": "iterations: 57109\ncpu: 12299.315344341523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_process",
            "value": 10082.844359883657,
            "unit": "ns/iter",
            "extra": "iterations: 69378\ncpu: 10082.377698982404 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_process",
            "value": 10089.89662772469,
            "unit": "ns/iter",
            "extra": "iterations: 69419\ncpu: 10089.622437661152 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_process",
            "value": 10221.895109996294,
            "unit": "ns/iter",
            "extra": "iterations: 68548\ncpu: 10221.920406138774 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_process",
            "value": 16253.440196971003,
            "unit": "ns/iter",
            "extra": "iterations: 42849\ncpu: 16252.87404606875 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_process",
            "value": 62214.57342707938,
            "unit": "ns/iter",
            "extra": "iterations: 13796\ncpu: 62214.656422151354 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_process",
            "value": 344011.4165666192,
            "unit": "ns/iter",
            "extra": "iterations: 2499\ncpu: 343997.35894357756 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_process",
            "value": 280301.74905423244,
            "unit": "ns/iter",
            "extra": "iterations: 3172\ncpu: 280300.72509457753 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_process",
            "value": 263338.1533251251,
            "unit": "ns/iter",
            "extra": "iterations: 3248\ncpu: 263324.35344827577 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_process",
            "value": 261821.88031834108,
            "unit": "ns/iter",
            "extra": "iterations: 3267\ncpu: 261815.794306703 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_process",
            "value": 575565.9743926617,
            "unit": "ns/iter",
            "extra": "iterations: 1523\ncpu: 575553.8411030868 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_process",
            "value": 4609089.366336474,
            "unit": "ns/iter",
            "extra": "iterations: 202\ncpu: 4608066.3366336655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_process",
            "value": 3765284.2793523734,
            "unit": "ns/iter",
            "extra": "iterations: 247\ncpu: 3765158.7044534534 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_process",
            "value": 3721783.9319998804,
            "unit": "ns/iter",
            "extra": "iterations: 250\ncpu: 3721507.6000000094 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_process",
            "value": 3709899.5737051787,
            "unit": "ns/iter",
            "extra": "iterations: 251\ncpu: 3709601.992031879 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_process",
            "value": 2178797.610328645,
            "unit": "ns/iter",
            "extra": "iterations: 426\ncpu: 2178643.1924882606 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_process",
            "value": 3633226.2265625913,
            "unit": "ns/iter",
            "extra": "iterations: 256\ncpu: 3632957.4218749995 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_serialize",
            "value": 7980.8031999091645,
            "unit": "ns/iter",
            "extra": "iterations: 87815\ncpu: 7980.321129647539 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_serialize",
            "value": 95684.31020545591,
            "unit": "ns/iter",
            "extra": "iterations: 8907\ncpu: 95676.42303805985 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_serialize",
            "value": 186527.70668917603,
            "unit": "ns/iter",
            "extra": "iterations: 4739\ncpu: 186326.92551171102 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_serialize",
            "value": 273725.6115650576,
            "unit": "ns/iter",
            "extra": "iterations: 3182\ncpu: 273706.5996228785 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_serialize",
            "value": 361038.9254166553,
            "unit": "ns/iter",
            "extra": "iterations: 2400\ncpu: 361039.12500000076 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_serialize",
            "value": 449039.342444575,
            "unit": "ns/iter",
            "extra": "iterations: 1939\ncpu: 449025.63176895044 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_serialize",
            "value": 536586.7586419882,
            "unit": "ns/iter",
            "extra": "iterations: 1620\ncpu: 536569.1358024691 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_serialize",
            "value": 503111.983999986,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 503102.90000000177 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_serialize",
            "value": 571174.2089999916,
            "unit": "ns/iter",
            "extra": "iterations: 1000\ncpu: 571175.4000000013 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_serialize",
            "value": 5966.971361985686,
            "unit": "ns/iter",
            "extra": "iterations: 117571\ncpu: 5966.71628207633 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_serialize",
            "value": 4887.524830069759,
            "unit": "ns/iter",
            "extra": "iterations: 143294\ncpu: 4887.536114561651 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_serialize",
            "value": 4859.053812686314,
            "unit": "ns/iter",
            "extra": "iterations: 144111\ncpu: 4858.842142515147 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_serialize",
            "value": 4912.519480519514,
            "unit": "ns/iter",
            "extra": "iterations: 142681\ncpu: 4912.2854479573725 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_serialize",
            "value": 8520.383136184473,
            "unit": "ns/iter",
            "extra": "iterations: 82425\ncpu: 8520.124962086742 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_serialize",
            "value": 45585.52100192956,
            "unit": "ns/iter",
            "extra": "iterations: 18165\ncpu: 45583.50674373778 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_serialize",
            "value": 209345.45512195042,
            "unit": "ns/iter",
            "extra": "iterations: 4100\ncpu: 209328.39024390213 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_serialize",
            "value": 161368.4192757449,
            "unit": "ns/iter",
            "extra": "iterations: 5302\ncpu: 161360.75066012822 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_serialize",
            "value": 155304.3892422239,
            "unit": "ns/iter",
            "extra": "iterations: 5503\ncpu: 155290.89587497656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_serialize",
            "value": 155830.93135469148,
            "unit": "ns/iter",
            "extra": "iterations: 5492\ncpu: 155823.06991988333 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_serialize",
            "value": 365008.31616416527,
            "unit": "ns/iter",
            "extra": "iterations: 2388\ncpu: 364982.70519263006 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_serialize",
            "value": 2907608.2298135636,
            "unit": "ns/iter",
            "extra": "iterations: 322\ncpu: 2907500.310559001 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_serialize",
            "value": 2399264.9615384685,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2399267.692307697 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_serialize",
            "value": 2379599.734015353,
            "unit": "ns/iter",
            "extra": "iterations: 391\ncpu: 2379510.4859335055 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_serialize",
            "value": 2380906.1615383765,
            "unit": "ns/iter",
            "extra": "iterations: 390\ncpu: 2380882.307692298 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_serialize",
            "value": 1423171.9861751262,
            "unit": "ns/iter",
            "extra": "iterations: 651\ncpu: 1423124.1167434675 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_serialize",
            "value": 2320491.4000000088,
            "unit": "ns/iter",
            "extra": "iterations: 400\ncpu: 2320421.7499999837 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<0, example::real::data_t<example::real::mode_e::MONO>>/data_mono_0_parse",
            "value": 7170.713535011002,
            "unit": "ns/iter",
            "extra": "iterations: 97813\ncpu: 7170.49165243885 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1, example::real::data_t<example::real::mode_e::MONO>>/data_mono_1_parse",
            "value": 53392.41109999762,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 53391.65000000037 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<2, example::real::data_t<example::real::mode_e::MONO>>/data_mono_2_parse",
            "value": 97955.18754285695,
            "unit": "ns/iter",
            "extra": "iterations: 8750\ncpu: 97949.37142857115 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<3, example::real::data_t<example::real::mode_e::MONO>>/data_mono_3_parse",
            "value": 143146.82412310538,
            "unit": "ns/iter",
            "extra": "iterations: 6044\ncpu: 143144.37458636664 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<4, example::real::data_t<example::real::mode_e::MONO>>/data_mono_4_parse",
            "value": 187749.8690012976,
            "unit": "ns/iter",
            "extra": "iterations: 4626\ncpu: 187744.4660613911 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<5, example::real::data_t<example::real::mode_e::MONO>>/data_mono_5_parse",
            "value": 232592.7189349166,
            "unit": "ns/iter",
            "extra": "iterations: 3718\ncpu: 232584.99193114528 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<6, example::real::data_t<example::real::mode_e::MONO>>/data_mono_6_parse",
            "value": 276926.50063734734,
            "unit": "ns/iter",
            "extra": "iterations: 3138\ncpu: 276896.30337794655 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<7, example::real::data_t<example::real::mode_e::MONO>>/data_mono_7_parse",
            "value": 322827.997779407,
            "unit": "ns/iter",
            "extra": "iterations: 2702\ncpu: 322808.7342709103 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<8, example::real::data_t<example::real::mode_e::MONO>>/data_mono_8_parse",
            "value": 366382.33558177506,
            "unit": "ns/iter",
            "extra": "iterations: 2372\ncpu: 366374.36762225896 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::ints_t>/ints_parse",
            "value": 6070.9551324142985,
            "unit": "ns/iter",
            "extra": "iterations: 114225\ncpu: 6070.961698402215 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::signed_ints_t>/signed_ints_parse",
            "value": 4921.340917062942,
            "unit": "ns/iter",
            "extra": "iterations: 142542\ncpu: 4920.996618540502 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::unsigned_ints_t>/unsigned_ints_parse",
            "value": 4909.655215036057,
            "unit": "ns/iter",
            "extra": "iterations: 141581\ncpu: 4909.2236952698395 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<1024, example::integral::chars_t>/chars_parse",
            "value": 4932.472156419213,
            "unit": "ns/iter",
            "extra": "iterations: 141415\ncpu: 4932.175511791523 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<64, example::string::strings_t>/strings_parse",
            "value": 7410.281543108516,
            "unit": "ns/iter",
            "extra": "iterations: 94355\ncpu: 7409.953897514635 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::bool_vectors_t>/bool_vectors_parse",
            "value": 26856.06666446088,
            "unit": "ns/iter",
            "extra": "iterations: 30241\ncpu: 26852.96121159991 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::int_vectors_t>/int_vectors_parse",
            "value": 133194.70652341624,
            "unit": "ns/iter",
            "extra": "iterations: 6515\ncpu: 133183.97544128864 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::signed_int_vectors_t>/signed_int_vectors_parse",
            "value": 106137.00942693591,
            "unit": "ns/iter",
            "extra": "iterations: 8062\ncpu: 106125.80004961607 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::unsigned_int_vectors_t>/unsigned_int_vectors_parse",
            "value": 105462.46409180372,
            "unit": "ns/iter",
            "extra": "iterations: 8104\ncpu: 105458.31688055188 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::char_vectors_t>/char_vectors_parse",
            "value": 104301.55169470943,
            "unit": "ns/iter",
            "extra": "iterations: 8202\ncpu: 104297.47622531107 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::string_vectors_t>/string_vectors_parse",
            "value": 207772.23198881102,
            "unit": "ns/iter",
            "extra": "iterations: 4289\ncpu: 207768.87386337185 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_int_vectors_t>/custom_int_vectors_parse",
            "value": 1695209.9430147004,
            "unit": "ns/iter",
            "extra": "iterations: 544\ncpu: 1695127.2058823656 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_signed_int_vectors_t>/custom_signed_int_vectors_parse",
            "value": 1360189.0497803495,
            "unit": "ns/iter",
            "extra": "iterations: 683\ncpu: 1360145.97364568 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_unsigned_int_vectors_t>/custom_unsigned_int_vectors_parse",
            "value": 1325419.657631935,
            "unit": "ns/iter",
            "extra": "iterations: 701\ncpu: 1325198.4308131267 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_char_vectors_t>/custom_char_vectors_parse",
            "value": 1316448.2865248125,
            "unit": "ns/iter",
            "extra": "iterations: 705\ncpu: 1316362.978723401 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_float_vectors_t>/custom_float_vectors_parse",
            "value": 746618.006425695,
            "unit": "ns/iter",
            "extra": "iterations: 1245\ncpu: 746552.7710843367 ns\nthreads: 1"
          },
          {
            "name": "fixture_t<16, example::vector::custom_mix_vectors_t>/custom_mix_vectors_parse",
            "value": 1288088.3009709253,
            "unit": "ns/iter",
            "extra": "iterations: 721\ncpu: 1287884.743411925 ns\nthreads: 1"
          }
        ]
      }
    ]
  }
}