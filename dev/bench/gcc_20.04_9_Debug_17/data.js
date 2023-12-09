window.BENCHMARK_DATA = {
  "lastUpdate": 1702084973581,
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
      }
    ]
  }
}